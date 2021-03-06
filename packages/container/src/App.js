import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import Marketing from './components/Marketing.js';
import Header from './components/Header.js'

const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
})

export default () => {
  return (
  <BrowserRouter>
    <StylesProvider generateClassName={generateClassName}>
      <div>
        <Header />
        <Marketing />
      </div>
    </StylesProvider>
  </BrowserRouter>
  )
}