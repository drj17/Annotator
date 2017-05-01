import React from 'react';
import CommentIndexItem from './comment_index_item';

class CommentIndex extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      text: ""
    };
    this.annotationComment = "";
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    if(this.props.overRide){
      this.annotationComment = "annotation-comment";
    }
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.createComment({comment:{
      body: this.state.text,
      author_id: this.props.currentUser.id,
      commentable_id: this.props.commentableId,
      commentable_type: this.props.commentableType
      }
    });
    this.props.clearErrors();
    this.setState({text: ""});
  }

  update(e){
    this.setState({text: e.currentTarget.value});
  }

  render(){
    let comments = [];
    let unSortedComments = this.props.comments;
    let sortedComments = [];
    if(this.props.comments[0]){
      sortedComments = this.props.comments.sort((a, b) => {
        return b.id - a.id;
      });
      comments = sortedComments.map(comment =>
        <CommentIndexItem
          key={comment.id}
          comment={comment}
          currentUser={this.props.currentUser}
          deleteComment={this.props.deleteComment}

          />);
    }

    let form = "";
    if(this.props.currentUser){
      form = <form className="comment-form">
              <textarea className="comment-body" placeholder="Add A Comment" onChange={this.update} value={this.state.text}/>
              <button className="annotation-submit" onClick={this.handleSubmit}>Submit</button>
            </form>;
    }


    return (
      <section className={`comments-container ${this.annotationComment}`} style={this.styles}>
        <section className="comments">
          <span className="annotation-error">{this.props.errors}</span>
          {form}
          <h2>Comments: </h2>
        <h1>{comments}</h1>
        </section>
      </section>
    );
  }
}

export default CommentIndex;
