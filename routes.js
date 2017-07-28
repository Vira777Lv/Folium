import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './src/views/app/App';
import SignUp from './src/views/auth/signUp/SignUp';
import Login from './src/views/auth/login/Login';
import BookList from './src/views/bookList/BookList';
import BookItem from './src/views/bookItem/BookItem';
import BookDetail from './src/views/bookDetail/BookDetail';
import HomePage from './src/views/homePage/HomePage';
// import BookDetail from './src/views/bookDetail/BookDetail';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path='/books' component={BookList} />
    <Route path='books/:bookId/:bookTitle' component={BookDetail} />
    <Route path='/sign-up' component={SignUp} />
    <Route path='/login' component={Login} />
  </Route>
);

export default routes;
