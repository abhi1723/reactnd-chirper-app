import { saveTweet } from "../utils/api";
export const RECEIVE_TWEETS = 'RECEIVE_TWEETS'
export const LIKE_TOGGLE = 'LIKE_TOGGLE';
export const SAVE_TWEET = 'SAVE_TWEET';
export function receiveTweets (tweets) {
  return {
    type: RECEIVE_TWEETS,
    tweets,
  }
}
export function toggleLikes({id, hasLiked, authedUser}){
  // console.log("toggleLikes action creator",tweets);
  return {
    type: LIKE_TOGGLE,
    id,
    hasLiked,
    authedUser
  }
}
export function saveNewTweetToStore(tweet){
  return {
    type : SAVE_TWEET,
    tweet
  }
}
export function saveNewTweet(tweet){
  return (dispatch) =>{
    console.log("tweet",tweet);
      saveTweet(tweet).then((newTweet)=>{
      console.log("saved new tweet : ",newTweet);
      dispatch(saveNewTweetToStore(newTweet))
    }).catch(err =>{
      console.log("err saveNewTweet : ",err);
    })
  }
}