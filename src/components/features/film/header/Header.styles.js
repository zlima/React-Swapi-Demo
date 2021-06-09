import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
import { Box, assets } from '../../../common';

export const Container = styled.div`
  display: flex;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: ${(props) => `url(${assets.films[props.episode_id].poster})`};
  background-position: right -100px top;
  height: 570px;
`;

export const StyledButton = styled(IconButton)`
  .MuiSvgIcon-root {
    color: white;
  }
`;

export const StyledTitle = styled(Box)`
  color: white;
  display: flex;
  margin-top: 150px;
`;

export const FilterEffect = styled.div`
  background-image: linear-gradient(
    to right,
    rgba(9.02%, 9.8%, 11.76%, 1) 150px,
    rgba(9.02%, 9.8%, 11.76%, 0.84) 100%
  );
  width: 100%;
  height: 570px;
  display: flex;
`;

export const CoverCard = styled.div`
  width: 300px;
  height: 450px;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: ${(props) => `url(${assets.films[props.episode_id].cover})`};
  border-radius: 20px;
`;

export const CardContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const InfoContainer = styled(Box)`
  height: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  padding: 20px;
`;

export const StyledContent = styled(Box)`
  color: white;
  text-align: initial;
  margin-top: 25px;
`;
