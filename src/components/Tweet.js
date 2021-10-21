import React from "react";
import { connect } from "react-redux";
import { formatTweet } from "../utils/helpers";
function Tweet(props){
    console.log("tweets",props.tweet);
    return (
        <div>
            Tweet : 
        </div>
    )
}
function mapStateToProps({ users, tweets, authedUser},{id}){
    const tweet = tweets[id];
    const parent = tweet ? tweets[tweet.replyingTo] : null;
    return{
        "tweet" : tweet? formatTweet(tweet,users[tweet.author],authedUser,parent) : null
    }
}
export default connect(mapStateToProps)(Tweet)