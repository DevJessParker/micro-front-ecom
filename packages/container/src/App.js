import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import Marketing from './components/Marketing.js';
import Header from './components/Header.js'

export default () => {
  return (
  <BrowserRouter>
    <div>
      <Header />
      <Marketing />
    </div>
  </BrowserRouter>
  )
}