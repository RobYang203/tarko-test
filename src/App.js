import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import LoadingMask from 'components/LoadingMask';
import MainLayout from 'layouts/MainLayout';
import FetchingProvider from 'contexts/FetchingProvider';
import MessageCenter from 'components/MessageCenter';
import MessageProvider from 'contexts/MessageProvider';

function App() {
  return (
    <div className='App'>
      <MessageProvider>
        <FetchingProvider>
          <Switch>
            <Route path='/' component={MainLayout} />
          </Switch>
          <LoadingMask />
          <MessageCenter />
        </FetchingProvider>
      </MessageProvider>
    </div>
  );
}

export default App;
