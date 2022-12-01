import { Box } from '../Box';
import { StyledLink } from './Appbar.styled';

const navItems = [
  { href: 'home', text: 'Home' },
  { href: 'movies', text: 'Movies' },
];

export const Appbar = () => {
  return (
    <Box as="header">
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
