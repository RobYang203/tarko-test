import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import LoadingMask from 'components/LoadingMask';
import MainLayout from 'layouts/MainLayout';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path='/' component={MainLayout} />
      </Switch>
      <LoadingMask />
    </div>
  );
}

export default App;
