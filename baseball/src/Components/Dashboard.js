import React from "react";
class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <button onClick={this.props.strikeHandler}>Strike</button>
        <button onClick={this.props.ballHandler}>Ball</button>
        <button onClick={this.props.foulHandler}>Foul</button>
        <button onClick={this.props.hitHandler}>Hit</button>
      </div>
    );
  }
}
export default Dashboard;
