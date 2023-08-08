import { useState, useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { injectStyle } from 'react-toastify/dist/inject-style';
import { ToastContainer, toast } from 'react-toastify';
import * as API from '../../services/api';
import { formatNewsDate, capitalizeFirstLetter } from '../../helpers/helpers';
import { Loader } from '../../components/Loader/Loader';
import { List, Item, Text, Title, Time, CategoryContainer, CategoryButton, LoadMoreButton } from './Home.styled';
import { Box } from '../../components/Box';
import { useLocation } from 'react-router-dom';
import { nanoid } from 'nanoid';

if (typeof window !== 'undefined') {
    injectStyle();
  }

const categories = ['all categories', 'business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];

export const Home = () => {
    const location = useLocation();
    const [news, setNews] = useState([]);
    const [activeCategory, setActiveCategory] = useState('all categories');
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(true);

    const handleCategoryClick = (category) => {
      if (category !== activeCategory) {
        setNews([]);
        setActiveCategory(category);
        setCurrentPage(1);
      }
    };
// оповещение об ошибке
    const notify = mess =>
    toast.error(`Whoops, something went wrong:${mess}`, {
      theme: 'colored',
    });

//по категориям только
    useEffect(() => {
        async function fetchNewsByCategory() {
            setIsLoading(true);
            try {
                let res;
                if (activeCategory !== 'all categories') {
                    res = await API.getCategoryNews(activeCategory, 1);
                } else {
                    res = await API.getTopHeadLines(1);
                }
                const articlesWithId = res.articles.map((article) => ({
                    ...article,
                    id: nanoid(),
                }));
                setNews(articlesWithId);
            } catch (error) {
                return notify(error.message);
            } finally {
                setIsLoading(false);
            }
        }
        fetchNewsByCategory();
    }, [activeCategory]);

    useEffect(() => {
        async function fetchMoreNews() {
            setIsLoading(true);
            if (currentPage === 1) return;
            try {
                let res;
                if (activeCategory !== 'all categories') {
                    res = await API.getCategoryNews(activeCategory, currentPage);
                } else {
                    res = await API.getTopHeadLines(currentPage);
                }
                const articlesWithId = res.articles.map((article) => ({
                    ...article,
                    id: nanoid(),
                }));
                setNews((prevNews) => [...prevNews, ...articlesWithId]);
            } catch (error) {
                return notify(error.message);
            } finally {
                setIsLoading(false);
            }
        }
        fetchMoreNews();
    }, [activeCategory, currentPage]);
    //пагинация
    const handleLoadMore = () => {
      setCurrentPage(prevPage => prevPage + 1);
      setTimeout(() => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
      }, 500);
    };

    return (
    <Box width="80vw" $margin="0 auto" display="flex" $flexDirection="column" $alignItems="center" $justifyContent="center">
        <CategoryContainer>
            {categories.map(category => (
                <CategoryButton
                    key={category}
                    className={activeCategory === category ? 'active' : ''}
                    onClick={() => handleCategoryClick(category)}
                >
                    {category}
                </CategoryButton>
            ))}
        </CategoryContainer>
        <Title>{capitalizeFirstLetter(activeCategory)} News</Title>
        <List>
            {news.map(data => (
                <Item key={data.id}>
                    <Time>{formatNewsDate(data.publishedAt)}</Time>
                    <Text
                        to={`/news/${data.id}`}
                        state={{ from: location, data }}
                        id={data.id}
                    >
                         {/* потому что description при запросе по категориям === почти всегда null */}
                        {activeCategory === 'all categories' ? data.description : data.title}
                    </Text>
                    <Time>{data.source.name}</Time>
                </Item>
            ))}
        </List>
        {isLoading 
            ? <Loader />
            : (news.length >= 10 && news.length % 10 === 0 && 
               <LoadMoreButton onClick={handleLoadMore}>Load More</LoadMoreButton>
              )
        }
        <ToastContainer autoClose={5000} />
    </Box>
);
};
