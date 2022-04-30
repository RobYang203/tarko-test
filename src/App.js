import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import LoadingMask from 'components/LoadingMask';
import MainLayout from 'layouts/MainLayout';
import FetchingProvider from 'contexts/FetchingProvider';

function App() {
  return (
    <div className='App'>
      <FetchingProvider>
        <Switch>
          <Route path='/' component={MainLayout} />
        </Switch>
        <LoadingMask />
      </FetchingProvider>
    </div>
  );
}

export default App;
