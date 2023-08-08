import { ThreeDots } from 'react-loader-spinner';
import { Wrapper } from './Loader.styled';
export const Loader = () => {
  const Spinner = (
    <Wrapper>
      <ThreeDots
        height="100"
        width="100"
        radius="12"
        color="#cd3030"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </Wrapper>
  );
  return Spinner;
};