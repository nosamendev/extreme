import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from './Layout/Layout';
import Cards from './Layout/Cards/Cards';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/" exact component={Cards} />
          <Route render={() => <h1>(404) This file cannot be found</h1>} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
