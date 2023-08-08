import { useSearchParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { throttle } from 'lodash';
import { NewsList } from '../../components/NewsList/NewsList';
import * as API from '../../services/api';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { nanoid } from 'nanoid';
import { Wrapper } from './News.styled';

const News = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [newsList, setNewsList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const articleName = searchParams.get('searchQuery') ?? '';

  const resetState = () => {
    setNewsList([]);
    setCurrentPage(1);
    setIsLoading(false);
    setHasMore(true);
  };

  const fetchNews = (article, page) => {
    setIsLoading(true);
    API.getSearchNews(article, page)
      .then((data) => {
        const dataWithId = data.articles.map((item) => ({ ...item, id: nanoid() }));
        
        if (page === 1) {
          setNewsList(dataWithId);
        } else {
          setNewsList((prevData) => [...prevData, ...dataWithId]);
        }

        if (!data.articles.length || data.articles.length < 10) {
          setHasMore(false);
        }

        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  };

useEffect(() => {
    if (articleName === '') {
      resetState();
      return;
    }

    fetchNews(articleName, 1);
  }, [articleName]);

  // пагинация при скролле
  useEffect(() => {
    const handleScroll = throttle(() => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500 && !isLoading && hasMore) {
        setCurrentPage((prevPage) => prevPage + 1);
      }
    }, 1000);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isLoading, hasMore]);

  useEffect(() => {
    if (currentPage > 1) {
      fetchNews(articleName, currentPage);
    }
}, [currentPage, articleName]);


  const updateQueryString = (searchQuery) => {
    const nextParams = searchQuery !== '' ? { searchQuery } : {};
    setSearchParams(nextParams);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Wrapper>
      <SearchBar
        onChange={updateQueryString}
        handleSubmit={handleSubmit}
        value={articleName}
      />
      {newsList.length > 0 && <NewsList news={newsList} state={{ from: location }} />}
    </Wrapper>
  );
};

export default News;
