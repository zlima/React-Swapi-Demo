/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import MaterialUIGrid from '@material-ui/core/Grid';
import Loader from '../loader/Loader';

const Grid = ({ isLoading = false, children, ...rest }) => (
  <MaterialUIGrid container {...rest} justify={isLoading ? 'center' : 'flex-start'}>
    {!isLoading && children}
    {isLoading && <Loader />}
  </MaterialUIGrid>
);

Grid.propTypes = {
  // eslint-disable-next-line react/require-default-props
  children: PropTypes.node,
  isLoading: PropTypes.bool,
};

export default Grid;
