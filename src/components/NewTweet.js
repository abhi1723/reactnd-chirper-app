import React, { Component } from 'react'
import { connect } from 'react-redux'
import { saveNewTweet } from '../actions/tweets'
import { Redirect } from 'react-router'
class NewTweet extends Component {
  state = {
    text: '',
    toHome: false
  }
  handleChange = (e) => {
    const text = e.target.value

    this.setState(() => ({
      text,
      toHome : false
    }))
  }
  handleSubmit = (e,dispatch,authedUser,id) => {
    e.preventDefault()

    const { text } = this.state

    // todo: Add Tweet to Store

    dispatch(saveNewTweet({text, "author" :authedUser,"replyingTo":id}));
    console.log('New Tweet: ', text)

    this.setState(() => ({
      text: '',
      toHome : id? false:true
    }))
  }
  render() {
    const { text, toHome } = this.state
    {/* todo: Redirect to / if submitted */}
    if(toHome){
      return <Redirect to="/"/>
    }
    const tweetLeft = 280 - text.length
    const { dispatch, authedUser, id} = this.props;
    return (
      <div>
        <h3 className='center'>Compose new Tweet</h3>
        <form className='new-tweet' onSubmit={this.handleSubmit}>
          <textarea
            placeholder="What's happening?"
            value={text}
            onChange={this.handleChange}
            className='textarea'
            maxLength={280}
          />
          {tweetLeft <= 100 && (
            <div className='tweet-length'>
              {tweetLeft}
            </div>
          )}
          <button
            className='btn'
            type='submit'
            onClick= {(e) => this.handleSubmit(e,dispatch,authedUser,id)}
            disabled={text === ''}>
              Submit
          </button>
        </form>
      </div>
    )
  }
}
function mapStateToProps ({ users, tweets, authedUser },{id}){

    return{
        "authedUser" : authedUser
    }
}
export default connect(mapStateToProps)(NewTweet)