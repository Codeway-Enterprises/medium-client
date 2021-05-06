import * as React from 'react';
import { Route, Switch } from 'react-router';
import loadable from '@loadable/component';
const MainPage = loadable(() => import('./pages/main/MainPage'));
const PostPage = loadable(() => import('./pages/PostPage'));

interface AppProps {}

const App: React.FC<AppProps> = (props) => {
  return (
    <>
      <Switch>
        <Route path="/" component={MainPage} exact />
        <Route path="/:mode(trending|recent|following)" component={MainPage} />
        <Route path="/@:username/:urlSlug" component={PostPage} />
      </Switch>
    </>
  );
};

export default App;
