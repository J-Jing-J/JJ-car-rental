import { Http } from '@/utils'
import { CommonEnum } from '@/enums'
// import showLoading from '@/components/ShowLoading'

export default {
  state: {
    detail: {},
    comments: [],
    page: CommonEnum.PAGE,
    showLoading: true,
    reloadCommentsNum: 0 //改变时自动请求
  },
  reducers: {
    getDetail(state, payload) {
      return {
        ...state,
        detail: payload
      }
    },
    getComments(state, payload) {
      return {
        ...state,
        comments: payload
      }
    },
    setShowLoading(state, payload) {
      return {
        ...state,
        showLoading: payload
      }
    },
    reloadComments(state, payload) {
      return {
        ...state,
        reloadCommentsNum: state.reloadCommentsNum + 1,
        page: {
          ...CommonEnum.PAGE,
          pageNum: state.page.pageNum + 1
        }
      }
    },
    // 添加新的评论内容后重置参数
    resetData(state, payload) {
      return {
        ...state,
        // detail: {},  detail手动重置
        comments: [],
        page: CommonEnum.PAGE,
        showLoading: true,
        reloadCommentsNum: 0,
        ...payload
      }
    }

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
    },
    async getCommentsAsync(dispatch, rootState, payload) {
      const { comments, page } = rootState.cars;
      const lists = await Http({
        url: '/comments/lists',
        body: {
          ...payload,
          pageSize: page.pageSize,
          pageNum: page.pageNum
        }
      })
      dispatch({
        type: 'getComments',
        // 之前的评论信息，拼接上刚请求来的评论信息
        payload: [...comments, ...lists]
      })
      dispatch({
        type: 'setShowLoading',
        // 之前的评论信息，拼接上刚请求来的评论信息
        payload: lists.length ? true : false
      })
    },

    async addCommentAsync(dispatch, rootState, payload) {
      const result = await Http({
        url: '/comments/add',
        body: payload
      })
      if (result) {
        dispatch({
          type: 'resetData',
          payload: {}
        })

      }
    }
  }

}