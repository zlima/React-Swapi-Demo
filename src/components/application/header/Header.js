import React from 'react';
import Typography from '@material-ui/core/Typography';

import { Container, StyledToolbar, StyledAppBar } from './Header.styles';

const Header = () => (
  <Container>
    <StyledAppBar position="fixed">
      <StyledToolbar>
        <Typography variant="h6" noWrap>
          Movies
        </Typography>
      </StyledToolbar>
    </StyledAppBar>
  </Container>
);

export default Header;
