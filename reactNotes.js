// basic component
class RobotBox extends React.Component {
  render() {
    return <div>Hello From React</div>;
  }
}
let target = document.getElementById('robot-app');

// rendering component onto target id 'robot-app'
ReactDOM.render( <RobotBox />, target );

// JSX javaScript XML
class RobotTime extends React.Component {
  render() {
  	const pi = Math.PI;
    return (
      <div className='is-tasty-pie'  >
        The value of PI is approximately {pi};
      </div>
    );
  }
}

// .map()
class RobotItems extends React.Component {
  render() {
    const topics = ["React", "JSX", "JavaScript", "Programming"];
    return (
      <div>
        <h3>Topics I am interested in</h3>
        <ul>
          {topics.map( (topic) => <li>{topic}</li> )}
        </ul>
      </div>
    );
  }
}

// class in JSX is className
class CommentBox extends React.Component {
  render() {
    return(
      <div className="comment-box">
        <h3>Comments</h3>
        <h4 className="comment-count">2 comments</h4>
        <div className="comment-list">
          <Comment
            author="Anne Droid"
            body="I want to know what love is..."
            />
        </div>
      </div>
    );
  }
}

class Comment extends React.Component {
  render() {
    return(
      <div className="comment">
        <p className="comment-header">
          {this.props.author}
        </p>
        <p className="comment-body">
          {this.props.body}
        </p>
        <div className="comment-actions">
          <a href="#">Delete comment</a>
        </div>
      </div>
    );
  }
}

// react uses underscore thingy _ to denote custom methods
<Comment author = {comment.author} />


// passing obj property as a prop
class CommentBox extends React.Component {
  render() {
    const comments = this._getComments() || [];
    return(
      <div className="comment-box">
        <h3>Comments</h3>
        <h4 className="comment-count">{comments.length} comments</h4>
        <div className="comment-list">
          {comments}
        </div>
      </div>
    );
  }

  _getComments() {
    const commentList = [
      { id: 1, author: 'Clu', body: 'Just say no to love!', avatarUrl: 'images/default-avatar.png'  },
      { id: 2, author: 'Anne Droid', body: 'I wanna know what love is...', avatarUrl: 'images/default-avatar.png'  }
    ];
    return commentList.map((comment) => {
      return (<Comment
               author={comment.author}
               body={comment.body}
               avatarUrl={comment.avatarUrl}
               key={comment.id} />);
    });
  }
}

// using $
<img src={this.props.avatarUrl} alt={`${this.props.author}'s picture`} />

// indirect DOM manipulation
// this.state contain the state of a component

// The super keyword is used to call functions on an object's parent.
// inhert methods

constructor() {
  super()
  this.state = {
    isAbusive: false
  }
}
<a href="#" onClick={this._toggleAbuse.bind(this)}>Report as Abuse</a>
_toggleAbuse(event) {
  event.preventDefault();

  this.setState({
    isAbusive: !this.state.isAbusive
  });
}

// The bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.

// The simplest use of bind() is to make a function that, no matter how it is called, is called with a particular this value. A common mistake for new JavaScript programmers is to extract a method from an object, then to later call that function and expect it to use the original object as its this (e.g. by using that method in callback-based code). Without special care however, the original object is usually lost. Creating a bound function from the function, using the original object, neatly solves this problem:

_fetchComments() {
   $.ajax({
     method: 'GET',
     url: 'comments.json',
     success: (comments) => this.setState({comments})
   });
 }

 componentWillMount() {
    this._fetchComments();
  }
