import { getInitialData } from '../utils/api'
import { receiveUsers } from '../actions/users'
import { receiveTweets } from '../actions/tweets'
import { setAuthedUser } from '../actions/authedUser'
import { showLoading } from "react-redux-loading";
import { hideLoading } from "react-redux-loading";
import { saveLikeToggle } from '../utils/api';
import { toggleLikes } from '../actions/tweets';
const AUTHED_ID = 'tylermcginnis'

export function handleInitialData () {
  return (dispatch) => {
    dispatch(showLoading());
    return getInitialData()
      .then(({ users, tweets }) => {
        dispatch(receiveUsers(users))
        dispatch(receiveTweets(tweets))
        dispatch(setAuthedUser(AUTHED_ID))
        dispatch(hideLoading())
      })
  }
}

export function saveLikeToggleThunks(info){
  return(dispatch) => {
    saveLikeToggle(info)
      .then(()=>{
        dispatch(toggleLikes(info));
      })
      .catch(err =>{
        console.log("Can't like this tweet now",err);
      })
  }
}