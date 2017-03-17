// Externals
import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

// Reducers
import pages from './containers/Page/reducer';
import products from './containers/Products/reducer';
import shipping from './containers/Shipping/reducer';
import { order, shop } from './containers/App/reducer';

const reducers = combineReducers({
  form,
  order,
  pages,
  products,
  shipping,
  shop,
});

export default reducers;
