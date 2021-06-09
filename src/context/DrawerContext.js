import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';

const DrawerContext = createContext();

const DrawerProvider = ({ children }) => {
  const [open, setOpen] = useState(false);

  return <DrawerContext.Provider value={[open, setOpen]}>{children}</DrawerContext.Provider>;
};

DrawerProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { DrawerContext, DrawerProvider };
