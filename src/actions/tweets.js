export const RECEIVE_TWEETS = 'RECEIVE_TWEETS'
export const LIKE_TOGGLE = 'LIKE_TOGGLE';
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