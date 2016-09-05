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

/*
// link Component
var Link = React.createClass({
  // link with click event
  changeURL: function() {
    window.location.replace(this.props.href)
  },
  render: function () {
    return (
      <span style={{color: 'blue', cursor:'pointer'}}
      onClick={this.changeURL}>
        {this.props.children}
      </span>
    )
  }
})

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
  // using the link Component
  render: function () {
    return (
      <div>
        <Link href={'https://www.github.com/' +  this.props.username}>
          {this.props.username}
        </Link>
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
  // calling other react Components
  render: function () {
    return(
      <div>
        <ProfilePic imageUrl={this.props.user.image}/>
        <ProfileName name={this.props.user.name}/>
        <ProfileLink username={this.props.user.username}/>
      </div>
    );
  }
});
ReactDOM.render(<Avatar user={USER_DATA} />, document.getElementById('app'));
*/

var routes = require('./config/routes');

ReactDOM.render(
  routes,
  document.getElementById('app')
);
