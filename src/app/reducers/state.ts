import * as Models from 'app/models';
import { RouterState } from 'react-router-redux';

export interface RootState {
  todos: RootState.TodoState
  router: RouterState
  view: RootState.View
  http: any
}

export namespace RootState {
  export type TodoState = Models.TodoModel[]
  export type View = Models.View
}
