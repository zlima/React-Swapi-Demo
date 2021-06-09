import React from 'react';
import { useQuery } from 'react-query';
import { Grid, GridItem } from '../../common';
import { Container } from './Home.styles';
import MovieCard from '../../features/home/moviecard/MovieCard';
import { swapiService } from '../../../api';

const Home = () => {
  const { data: filmList, isLoading } = useQuery('getMovies', swapiService.getAllFilms);

  return (
    <Container>
      <Grid spacing={3} isLoading={isLoading}>
        {filmList?.results.length &&
          filmList.results.map((movie, idx) => (
            <GridItem lg={2} md={4} sm={6} xs={12} key={`movie_${movie.episode_id}`}>
              <MovieCard Movie={movie} Pos={idx + 1} />
            </GridItem>
          ))}
      </Grid>
    </Container>
  );
};

export default Home;
