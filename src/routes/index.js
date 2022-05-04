import { Switch } from 'react-router-dom';

import MyRoute from './MyRoute';
import Pokedex from '../pages/Pokedex';
import Page404 from '../pages/404';

export default function Routers() {
  return (
    <Switch>
      <MyRoute exact path="/" component={Pokedex} />
      <MyRoute path="*" component={Page404} />
    </Switch>
  );
}
