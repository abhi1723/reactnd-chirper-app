import React from "react";
import { connect } from "react-redux";
import Tweet from "./Tweet";
function Dashboard(props) {
    console.log("tweetIds",props.tweetIds);
    return (
        <div>
            dashboard
            {props.tweetIds.map((tweetId) =>{
                return <li key = {tweetId}><Tweet id={tweetId}/></li>
            })}
        </div>
    )
}
function mapStateToProps({ tweets }){
    return {
        "tweetIds": Object.keys(tweets).sort((a,b)=> tweets[b].timestamp-tweets[a].timestamp)
    }
}
export default connect(mapStateToProps)(Dashboard)
