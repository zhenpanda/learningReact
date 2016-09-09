var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Home = React.createClass({
  render: function() {
    return (
      <div className='text-center'>
        <h1>Github Battle</h1>
        <p>Some motto</p>
        <Link to='/playerOne'>
          <button type='button'>get started</button>
        </Link>
      </div>
    )
  }
});

module.exports = Home;
