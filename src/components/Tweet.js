import React from "react";
import { connect } from "react-redux";
import { formatTweet, formatDate } from "../utils/helpers";
// import TiHeartOutline from 'react-icons/ti';
// import TiHeartFullOutline from 'react-icons/lib/ti/heart-full-outline'
import { TiArrowBackOutline } from 'react-icons/ti';
import { TiHeartFullOutline } from "react-icons/ti";
import { TiHeartOutline } from "react-icons/ti";
// import { saveLikeToggle } from "../utils/api";
import { saveLikeToggleThunks } from "../actions/shared";
function Tweet(props) {
    const { tweet, authedUser } = props;
    const { dispatch } = props;
    if(tweet==null){
        return <p>This tweet does not exist</p>
    }
    
    const {
        name, avatar, timestamp, text, hasLiked, likes, replies, id, parent
    } = tweet;
    const handleLike = (e) => {
      e.preventDefault()
      // todo: Handle Like Tweet
      // Parameters to send : { id, hasLiked, authedUser }
      // Optimistically update the UI & fire an API to toggle likes
      // We have to make a asynchronous network call and then dispatch an event to update the store
      // It is a anti-pattern to make network calls from the component itself. So we make use of thunks & action creators
      let info={id,hasLiked,authedUser};
      console.log("info :",info);
      dispatch(saveLikeToggleThunks(info));
      
    }
    const  toParent = (e, id) => {
      e.preventDefault()
      // todo: Redirect to parent Tweet.
    }
  
    return (
      
        <div className ="tweet">
          <img
          src={avatar}
          alt={`Avatar of ${name}`}
          className='avatar'
        />
        <div className='tweet-info'>
          <div>
            <span>{name}</span>
            <div>{formatDate(timestamp)}</div>
            {parent && (
              <button className='replying-to' onClick={(e) => this.toParent(e, parent.id)}>
                Replying to @{parent.author}
              </button>
            )}
            <p>{text}</p>
          </div>
          <div className='tweet-icons'>
            <TiArrowBackOutline className='tweet-icon' />
            <span>{replies !== 0 && replies}</span>
            <button className='heart-button' onClick={(e) => handleLike(e)} >
              {hasLiked === true
                ? <TiHeartFullOutline color='#e0245e' className='tweet-icon' />
                : <TiHeartOutline className='tweet-icon'/>}
            </button>
            <span>{likes !== 0 && likes}</span>
          </div>
        </div>
        </div>
    )
}
function mapStateToProps({ users, tweets, authedUser }, { id }) {
    const tweet = tweets[id];
    const parent = tweet ? tweets[tweet.replyingTo] : null;
    return {
        "tweet": tweet ? formatTweet(tweet, users[tweet.author], authedUser, parent) : null,
        "authedUser": authedUser
    }
}
export default connect(mapStateToProps)(Tweet)