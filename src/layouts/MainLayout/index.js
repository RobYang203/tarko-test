import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import TopBar from './components/TopBar';
import { useCreateRoutePath } from 'hooks/route';
import NotFoundPage from 'pages/NotFoundPage';
import CreateContactPage from 'pages/CreateContactPage';
import UpdateContactPage from 'pages/UpdateContactPage';
import ContactsPage from 'pages/ContactsPage';


function MainLayout() {
  const getRoutePath = useCreateRoutePath();

  return (
    <div>
      <TopBar />
      <Switch>
        <Route exact path={getRoutePath('/')} component={ContactsPage} />
        <Route
          path={getRoutePath('/contacts/create')}
          component={CreateContactPage}
        />
        <Route
          path={getRoutePath('/contacts/:id')}
          component={UpdateContactPage}
        />
        <Route path='/404' component={NotFoundPage} />
        <Route path='/*' component={() => <Redirect to='/404' />} />
      </Switch>
    </div>
  );
}

export default MainLayout;
