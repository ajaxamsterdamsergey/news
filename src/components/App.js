import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout'; import { lazy } from 'react';
import { Home } from '../pages/Home/Home';
import { NotFound } from './NotFound/NotFound';
import { Box } from './Box';
import { GlobalStyle } from './GlobalStyle';

//есть ограничения на кол-во запросов... в api.js есть 4 ключа. можно выбрать любой

 const News = lazy(() => import('../pages/News/News'));
 const NewsDetails = lazy(() => import('../pages/NewsDetails/NewsDetails'));

export default function App() {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="news" element={<News />} />
          {/* решил на всякий случай продемонстрировать что я это умею... Но API https://newsapi.org/ не отдает статью по id
           а можно было брать при переходе id с урла и делать запрос */}
          <Route path="news/:newsId" element={<NewsDetails />}>
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <GlobalStyle />
    </Box>
  );
}