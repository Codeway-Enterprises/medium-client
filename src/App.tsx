import * as React from 'react';
import { Route } from 'react-router';

import loadable from '@loadable/component';
const MainPage = loadable(() => import('./pages/main/MainPage'));
interface AppProps {}

const App: React.FC<AppProps> = (props) => {
  return (
    <>
      <Route path="/" component={MainPage} exact />
      <Route path="/:mode(trending|recent|following)" component={MainPage} />
    </>
  );
};

export default App;
