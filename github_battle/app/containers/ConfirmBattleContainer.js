var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle')

var ConfirmBattleContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function() {
    return {
      isLoading: true,
      playerInfo: []
    }
  },
  componentWillMount: function() {
    console.log('componentWillMount')
  },
  //callback triggered when loaded
  componentDidMount: function() {
    var query = this.props.location.query;
    console.log(query, 'componentDidMount')
    //Fetch info from github
  },
  componentWillReceiveProps: function() {
    console.log('componentWillReceiveProps')
  },
  componentWillUnmount: function() {
    console.log('componentWillUnmount')
  },
  render: function() {
    return (
      <ConfirmBattle
      isLoading={this.state.isLoading}
      playersInfo={this.state.playersInfo}
      />
    )
  }
});

module.exports = ConfirmBattleContainer;
