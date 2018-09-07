import { createAction } from 'redux-actions';

export namespace View {
  export enum Type {
    EDIT_MODE = 'EDIT_MODE'
  }

  export const EDIT_MODE = createAction(Type.EDIT_MODE)
}

export type View = Omit<typeof View, 'Type'>;