import React from 'react';
import PropTypes from 'prop-types';
import MaterialUIGrid from '@material-ui/core/Grid';

const GridItem = ({ children, ...rest }) => (
  <MaterialUIGrid item {...rest}>
    {children}
  </MaterialUIGrid>
);

GridItem.propTypes = {
  // eslint-disable-next-line react/require-default-props
  children: PropTypes.node,
};

export default GridItem;
