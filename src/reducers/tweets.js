import { RECEIVE_TWEETS } from '../actions/tweets'
import { LIKE_TOGGLE } from '../actions/tweets'
export default function tweets (state = {}, action) {
  switch(action.type) {
    case RECEIVE_TWEETS :
      return {
        ...state,
        ...action.tweets
      }
    case LIKE_TOGGLE :
      console.log("liked tweet : ",action.id);
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          likes : action.hasLiked === true ? state[action.id].likes.filter(user => user !==action.authedUser) :
          state[action.id].likes.concat([action.authedUser])
        }
      }
    default :
      return state
  }
}