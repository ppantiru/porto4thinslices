import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import './utils/i18next';
import './stylesheets/index.css';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://afternoon-refuge-64592.herokuapp.com/graphql',
  cache: new InMemoryCache(),
});

ReactDOM.render(
    <Suspense fallback={(<div>Loading...</div>)}>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </Suspense>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
