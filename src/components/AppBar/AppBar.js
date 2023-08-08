import { FcNews } from 'react-icons/fc';
import { AiOutlineHome } from 'react-icons/ai';
import { NavItem, NavContainer } from './AppBar.styled';
import { Box } from '../Box';

const navItems = [
  { href: '', text: 'Home', icon: AiOutlineHome },
  { href: 'news', text: 'Search', icon: FcNews },
];
export const AppBar = () => {
  return (
    <Box as="header" $p={4} height="100vh">
      <NavContainer >
        {navItems.map(({ href, text, icon: Icon }) => (
          <NavItem to={href} key={href}>
            <Icon size="24" />
            {text}
          </NavItem>
        ))}
      </NavContainer>
    </Box>
  );
};