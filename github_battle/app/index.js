var React = require('react')
var ReactDOM = require('react-dom')

/*
var HelloWorld = React.createClass({
  render: function(){
    console.log(this.props)
    return (
      <div>
        Hello World {this.props.name}!
      </div>
    )
  }
});

ReactDOM.render(
  <HelloWorld name="Tyler" anySortofData={29} />,
  document.getElementById('app')
);


*/

/*
    Focused
    Independent
    Reusable
    Small
    Testable
*/

var USER_DATA = {
  name: 'Tyler McGinnis',
  username: 'tylermcginnis',
  image: 'https://avatars0.githubusercontent.com/u/2933430?v=3$s=460'
}

var ProfilePic = React.createClass({
  render: function () {
    return <img src={this.props.imageUrl} style={{height: 100, width: 100}}></img>
  }
});

var ProfileLink = React.createClass({
  render: function () {
    return (
      <div>
        <a href={'https://www.github.com/' +  this.props.username}>
          {this.props.username}
        </a>
      </div>
    );
  }
});

var ProfileName = React.createClass({
  render: function (){
    return <div>{this.props.name}</div>
  }
});

var Avatar = React.createClass({
  render: function () {
    return(
      <div>
      // calling other react Components
        <ProfilePic imageUrl={this.props.user.image}/>
        <ProfileName name={this.props.user.name}/>
        <ProfileLink username={this.props.user.username}/>
      </div>
    );
  }
});


ReactDOM.render(<Avatar user={USER_DATA} />, document.getElementById('app'));
