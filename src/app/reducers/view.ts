import { handleActions } from 'redux-actions';
import { RootState } from "app/reducers";
import { ViewMode, ViewModeValue } from "app/models";
import * as Action from 'app/actions'
import { App } from 'app/containers/App';


let widthMode: ViewMode
let resizeListner: EventListenerOrEventListenerObject
let lastMode: ViewMode
resizeListner = function () {
  if (innerWidth < ViewModeValue.XS) {
    if (lastMode !== ViewMode.XS) {
      App.instance.props.actions[Action.View.Type.EDIT_MODE]({
        widthMode: ViewMode.XS
      })
      lastMode = ViewMode.XS
    }
  } else {
    if (lastMode !== ViewMode.ELSE) {
      App.instance.props.actions[Action.View.Type.EDIT_MODE]({
        widthMode: ViewMode.ELSE
      })
      lastMode = ViewMode.ELSE
    }
  }
}

if (innerWidth < ViewModeValue.XS) {
  lastMode = widthMode = ViewMode.XS
} else {
  lastMode = widthMode = ViewMode.ELSE
}
addEventListener("resize", resizeListner)

const initialState: RootState.View = {
  widthMode: widthMode
};

export const viewReducer = handleActions<RootState.View, RootState.View>(
  {
    [Action.View.Type.EDIT_MODE]: (state, action) => {
      return {
        widthMode: action.payload.widthMode
      }
    }
  },
  initialState
);