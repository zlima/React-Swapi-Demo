/* eslint-disable global-require */
import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import { assets } from '../../../common';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;
export const CardImage = styled.div`
  width: 167px;
  height: 250px;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: ${(props) => `url(${assets.films[props.episode_id].cover})`};
  border-radius: 20px;
`;

export const CardContainer = styled.div`
  max-width: 167px;
  height: 300px;
  transition: all 0.3s ease-in-out;
  :hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

export const CardContent = styled.div`
  height: 50px;
`;

export const MovieTitle = styled(Typography)`
  color: white;
  padding: 0 5px;
`;

export const MovieSubTitle = styled(Typography)`
  padding: 0 5px;
  color: #d0d0d0;
`;
