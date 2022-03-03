import { Http } from '@/utils'

export default {
  state: {
    detail: {},
    comments: [],
  },
  reducers: {
    getDetail(state, payload) {
      return {
        ...state,
        detail: payload
      }
    },
  },
  effects: {
    // rootState:全局的state
    async getDetailAsync(dispatch, rootState, payload) {
      const detail = await Http({
        url: '/cars/detail',
        body: payload,
      });
      dispatch({
        type: 'getDetail',
        payload: detail
      })
    }
  }

}