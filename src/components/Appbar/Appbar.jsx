import { Box } from '../Box';
import { StyledLink } from './Appbar.styled';

const navItems = [
  { href: '/', text: 'Home' },
  { href: '/movies', text: 'Movies' },
];

export const Appbar = () => {
  return (
    <Box as="header" boxShadow="0px 10px 15px -10px rgba(0,0,0,0.75)">
      <Box as="nav" display="flex">
        {navItems.map(({ href, text }) => (
          <StyledLink to={href} key={href}>
            {text}
          </StyledLink>
        ))}
      </Box>
    </Box>
  );
};
