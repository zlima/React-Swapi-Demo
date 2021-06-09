import React from 'react';
import PropTypes from 'prop-types';
import { useQuery } from 'react-query';
import { Header } from '../../features/film/header';
import { swapiService } from '../../../api';
import { Loader } from '../../common';
import { Characters } from '../../features/film/characters';

const Film = ({
  match: {
    params: { episodeID },
  },
  history,
}) => {
  const { Movie } = history.location;

  const { data: fetchedFilm, isLoading } = useQuery(
    ['getMovieByID', episodeID],
    () => swapiService.getFilmeByID({ id: episodeID }),
    {
      enabled: !Movie,
    }
  );

  const film = Movie || fetchedFilm;

  return (
    <div>
      {isLoading && <Loader />}
      {!isLoading && film && (
        <>
          <Header Movie={film} />
          <Characters Chars={film.characters} episodeID={episodeID} />
        </>
      )}
    </div>
  );
};

Film.propTypes = {
  history: PropTypes.objectOf(PropTypes.any),
  match: PropTypes.objectOf(PropTypes.any),
};

export default Film;
