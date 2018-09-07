
import { createAction } from 'redux-actions';

export namespace Http {
  export enum Type {
    USER_LOGIN = '/user/login'
  }

  export const USER_LOGIN = createAction(Type.USER_LOGIN)
}

export type Http = Omit<typeof Http, 'Type'>;