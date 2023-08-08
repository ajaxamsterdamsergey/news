import { Suspense } from 'react';
import { Loader } from '../../components/Loader/Loader';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { Outlet } from 'react-router-dom';
import { formatNewsDateYear } from '../../helpers/helpers';
import {
  Title,
  Text,
  ButtonBack,
  Container,
  Image,
  WrapperHeader,
  Time,
  Content,
  OriginalSource,
} from './NewsDetails.styled';

import { Box } from '../../components/Box';
import { useLocation } from 'react-router-dom';

const NewsDetails = () => {
  const location = useLocation();
  const news = location.state.data;
  
  const readablePublishedAt = formatNewsDateYear(news.publishedAt);

  const backLinkHref = location.state?.from ?? '/';
  
  const titleWords = news.title ? news.title.split(' ') : [];
 // можно біло вінести в helpers первые 2 слова с news.title 
    let altText;
    if (titleWords.length >= 2) {
        altText = `${titleWords[0]} ${titleWords[1]}`;
    } else if (titleWords.length === 1) {
        altText = titleWords[0];
    } else {
        altText = "Text";
    }
  
  return (
    <Container>
      <ButtonBack to={backLinkHref}>
        <IoMdArrowRoundBack />
        go back
      </ButtonBack>
      <Box width="80vw" $margin="24px auto">
        <div>
           {news.urlToImage && <Image src={news.urlToImage} alt={altText} />}
          </div>
        <Box display="flex" $flexDirection="column" $gridGap="24px" $marginTop="12px">
          <Title>{news.title}</Title>
          <div>
            <Content to={news.url}>{news.content} </Content>
          </div>
          <div>
            <OriginalSource to={news.url}>Go to the original source</OriginalSource>
          </div>
          <WrapperHeader>
            <div>
              <Time> {readablePublishedAt}</Time>
          </div>
          <div>
              <Text>{news.source.name} ({news.author})</Text>
            </div>
            </WrapperHeader>
        </Box>
      </Box>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default NewsDetails;