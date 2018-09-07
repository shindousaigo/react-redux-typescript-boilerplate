import { handleActions } from 'redux-actions';
import * as Action from 'app/actions'
import axios from 'axios'
import * as Axios from 'axios/index.d'
import * as qs from 'query-string'
import jsonp = require('jsonp')
// import { ViewMode } from 'app/models';

namespace JSONP {
  export interface AxiosInstance {
    jsonp(route: string, data: object): Promise<any>
  }
}

var server = 'http://172.16.3.144:7011/api/v1.0'

const axiosInstance: Axios.AxiosInstance & JSONP.AxiosInstance = axios.create({
  baseURL: server
}) as any
axiosInstance.jsonp = function (route, data) {
  return new Promise(resolve => {
    jsonp(server + route, {
      param: qs.stringify(data) + '&callback'
    }, function (err, data) {
      if (!err) {
        resolve(data)
      }
    })
  })
}

const initialState: any = {
  [Action.Http.Type.USER_LOGIN]: null
}

export const httpReducer = handleActions<any, any>(
  {
    [Action.Http.Type.USER_LOGIN]: (state, action) => {
      return {
        [Action.Http.Type.USER_LOGIN]: axiosInstance.jsonp(Action.Http.Type.USER_LOGIN, {
          language: 'CHS',
          userName: 'shindousaigo',
          password: '15b21b06d73f02d2997270b953d90e21'
        })
      }
    }
  },
  initialState
);