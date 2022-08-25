import React from 'react';
import { BrowserRouter as Router, Switch , Route } from 'react-router-dom';
import './main.css'

import Navigate from './directive/directive';
import Footer from './Footer/footer';

// Import Halaman
import Beranda from './Flack/beranda'
import About from './Flack/about'
import Blog from './Flack/blog'
import Contact from './Flack/contact'



function App() {
  return (
    <Router>
    <Navigate />
      <Switch>
          <Route path='/' component={Beranda} exact> <Beranda /></Route>
          <Route path='/about' component={About} exact> <About /></Route>
          <Route path='/blog' component={Blog} exact> <Blog /></Route>
          <Route path='/contact' component={Contact} exact> <Contact /></Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
