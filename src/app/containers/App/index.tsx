import * as React from 'react';
import './style.scss';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { RouteComponentProps } from 'react-router';
import * as Actions from 'app/actions';
import { RootState } from 'app/reducers';
// import { TodoModel } from 'app/models';
// import { omit } from 'app/utils';
// import { Header, TodoList, Footer } from 'app/components';
import { LoginPage } from 'app/components/Login'
import { Http } from 'app/actions';

// const FILTER_VALUES = (Object.keys(TodoModel.Filter) as (keyof typeof TodoModel.Filter)[]).map(
//   (key) => TodoModel.Filter[key]
// );

// const FILTER_FUNCTIONS: Record<TodoModel.Filter, (todo: TodoModel) => boolean> = {
//   [TodoModel.Filter.SHOW_ALL]: () => true,
//   [TodoModel.Filter.SHOW_ACTIVE]: (todo) => !todo.completed,
//   [TodoModel.Filter.SHOW_COMPLETED]: (todo) => todo.completed
// };

export namespace App {
  export interface Props extends RouteComponentProps<void> {
    states: {
      widthMode: string
      login: any
    };
    // actions: Actions.View;
    actions: any;
  }
}

@connect(
  (state: RootState): Pick<App.Props, 'states'> => {
    return {
      states: {
        widthMode: state.view.widthMode,
        login: state.http[Http.Type.USER_LOGIN]
      }
    }
  },
  (dispatch: Dispatch): Pick<App.Props, 'actions'> => ({
    actions: bindActionCreators(
      {
        [Actions.View.Type.EDIT_MODE]: Actions.View.EDIT_MODE,
        [Actions.Http.Type.USER_LOGIN]: Actions.Http.USER_LOGIN,
      },
      dispatch
    )
  })
)

export class App extends React.Component<App.Props> {

  static _ins: App
  static get instance(): App {
    return this._ins
  }

  constructor(props: App.Props, context?: any) {
    super(props, context);
    App._ins = this
  }

  render() {
    return (
      <div>
        <LoginPage states={this.props.states} actions={this.props.actions} />
      </div>
    );
  }
}
