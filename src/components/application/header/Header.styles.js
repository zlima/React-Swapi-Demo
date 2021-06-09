import styled from 'styled-components';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';

export const Container = styled.div`
  display: flex;
  height: 64px;
`;

export const StyledToolbar = styled(Toolbar)`
  display: 'flex';
  align-items: 'center';
  justify-content: 'flex-end';
  padding: 0 8px;
  background-color: rgb(20, 20, 20);
`;

export const StyledAppBar = styled(AppBar)``;
