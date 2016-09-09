var React = require('react');

var Prompt = React.createClass({
  render: function() {
    return (
      <div className="col-sm-6 text-center">
        <h1>{this.props.header}</h1>
        <div className="col-sm-12">
          <form onSubmit={this.props.onSumbitUser}>
            <div className="form-group">
              <input className="form-control" placeholder="github Username" type="text" onChange={this.props.onUpdateUser} value={this.props.username} />
            </div>
            <div className="form-group">
              <button className="btn-block" type="submit" />
            </div>
          </form>
        </div>
      </div>
    )
  }
})

module.exports = Prompt;
