import { RECEIVE_TWEETS } from '../actions/tweets'
import { LIKE_TOGGLE } from '../actions/tweets'
import { SAVE_TWEET } from '../actions/tweets';
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
      case SAVE_TWEET :
      const { tweet } = action

   let replyingTo = {}
   if (tweet.replyingTo !== null) {
      const allReplies = state[tweet.replyingTo].replies.concat([tweet.id]);
      console.log("allReplies : ",allReplies);
      return {
      ...state,
      [action.tweet.id]:{
        ...action.tweet,
        
      } ,
      [action.tweet.replyingTo]:{
        ...state[action.tweet.replyingTo],
        "replies" : allReplies
      }
      
      }
   }

   return {
      ...state,
      [action.tweet.id]: action.tweet,
      ...replyingTo,
   }
    default :
      return state
  }
}