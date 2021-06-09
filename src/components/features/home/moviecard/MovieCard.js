import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import { useHistory } from 'react-router-dom';

import {
  Container,
  CardImage,
  CardContainer,
  CardContent,
  MovieTitle,
  MovieSubTitle,
} from './MovieCard.styles';

function MovieCard({ Movie, Pos }) {
  const { episode_id: episodeID, title, release_date: realeaseDate } = Movie;
  const history = useHistory();

  return (
    <Container>
      <CardContainer onClick={() => history.push({ pathname: `/film/${Pos}`, Movie })}>
        <CardImage episode_id={episodeID} />
        <CardContent>
          <MovieTitle noWrap align="left">
            <Box
              component="span"
              fontWeight="fontWeightBold"
              textOverflow="ellipsis"
              overflow="hidden"
            >
              {title}
            </Box>
          </MovieTitle>
          <MovieSubTitle noWrap align="left">
            {realeaseDate.slice(0, 4)}
          </MovieSubTitle>
        </CardContent>
      </CardContainer>
    </Container>
  );
}

MovieCard.propTypes = {
  Movie: PropTypes.objectOf(PropTypes.any),
  Pos: PropTypes.number,
};

export default MovieCard;
