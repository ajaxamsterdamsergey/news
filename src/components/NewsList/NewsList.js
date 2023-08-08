import { useLocation } from 'react-router-dom';
import { formatNewsDate } from '../../helpers/helpers';
import { List, Item, Text, Time } from './NewsList.styled';
import { Box } from '../Box';

export const NewsList = news => {
  const location = useLocation();
  const items = news.news;
  return (
     <Box width="80vw" $margin="0 auto">
      <List>
        {items.map(data => (
          <Item key={data.id}>
             <Time>{formatNewsDate(data.publishedAt)}</Time>
            <Text
              to={`/news/${data.id}`}
              // data это текущая статья
              state={{ from: location,data }}
              id={data.id}
            >
              {data.description}
            </Text>
            <Time>{data.source.name}</Time>
          </Item>
        ))}
      </List>
    </Box>
  );
};