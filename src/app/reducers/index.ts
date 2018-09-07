import { combineReducers } from 'redux';
import { RootState } from './state';
import { todoReducer } from './todos';
import { viewReducer } from 'app/reducers/view';
import { httpReducer } from 'app/reducers/http';
import { routerReducer, RouterState } from 'react-router-redux';

export { RootState, RouterState };

// NOTE: current type definition of Reducer in 'react-router-redux' and 'redux-actions' module
// doesn't go well with redux@4

export const rootReducer = combineReducers<RootState>({
  router: routerReducer as any,
  todos: todoReducer as any,
  view: viewReducer as any,
  http: httpReducer as any
});
