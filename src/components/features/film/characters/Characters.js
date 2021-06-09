import React, { useState, useEffect, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useQueries, useQuery } from 'react-query';
import Box from '@material-ui/core/Box';
import SearchBar from 'material-ui-search-bar';
import _ from 'lodash';
import { swapiService } from '../../../../api';
import { Table } from '../../../common';
import { tableConfig } from './utils';

const Characters = ({ Chars, episodeID }) => {
  const [search, setSearch] = useState('');

  const results = useQueries(
    Chars.map((char, idx) => ({
      queryKey: [`people/${episodeID}`, idx],
      queryFn: () => swapiService.getByURL({ url: char }),
      config: {
        enabled: search !== '',
      },
    }))
  );

  const {
    data,
    refetch,
    isLoading: isLoadingSearch,
  } = useQuery(['search', search], () => swapiService.searchUserByName({ name: search }), {
    enabled: false,
  });

  const changeHandler = (event) => {
    setSearch(event);
  };

  const debouncedChangeHandler = useCallback(_.debounce(changeHandler, 350), []);

  useEffect(() => {
    if (search !== '') refetch();
  }, [search]);

  const isLoading = results.some((query) => query.isLoading);
  const charsArray = !isLoading ? results.map((chars) => chars.data) : [];

  const filterChars = (arr) =>
    arr?.results.filter((result) =>
      result.films.includes(`http://swapi.dev/api/films/${episodeID}/`)
    );

  const filteredUsers = useMemo(() => filterChars(data), data);

  return (
    <Box pb={10}>
      <Box component="div" px={10} my={4} fontWeight="fontWeightBold" fontSize={26} color="white">
        Characters
      </Box>

      <Box component="div" px="10%" my={4} color="white" justifyContent="center" display="flex">
        <Box component="div" width={250}>
          <SearchBar
            value={search}
            onChange={debouncedChangeHandler}
            onRequestSearch={debouncedChangeHandler}
            onCancelSearch={() => debouncedChangeHandler('')}
          />
        </Box>
      </Box>
      <Box component="div" px="10%" my={4}>
        <Table
          config={tableConfig}
          data={filteredUsers || charsArray}
          isLoading={isLoading || isLoadingSearch}
        />
      </Box>
    </Box>
  );
};

Characters.propTypes = {
  Chars: PropTypes.arrayOf(PropTypes.any),
  episodeID: PropTypes.string,
};

export default Characters;
