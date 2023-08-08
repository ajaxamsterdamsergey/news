import { IconContext } from 'react-icons';
import { FcSearch } from 'react-icons/fc';
import { Formik } from 'formik';
import { Header, SearchForm, Button, Input } from './SearchBar.styled';

export const SearchBar = ({ onChange, handleSubmit, value }) => {
  return (
    <Header>
      <Formik initialValues={{ value: '' }} onSubmit={handleSubmit}>
        <SearchForm>
          <IconContext.Provider
            value={{
              size: '1.6em',
              className: 'global-class-name',
            }}
          >
            <Button type="button">
              <FcSearch />
            </Button>
          </IconContext.Provider>

          <Input
            type="text"
            name="searchQuery"
            value={value}
            onChange={e => onChange(e.target.value)}
            placeholder="Search news"
            autoComplete="off"
          />
        </SearchForm>
      </Formik>
    </Header>
  );
};