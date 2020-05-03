import React from 'react';
import {ThemeContext, themes} from './ThemeContext';
import Toolbar from './Toolbar'

function Context() {
  return(
  <ThemeContext.Provider value={themes.light}>
    <Toolbar />
  </ThemeContext.Provider>
);
};
export default Context;
