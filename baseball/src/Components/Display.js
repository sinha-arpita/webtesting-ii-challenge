import React from "react";
class Display extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        Balls={this.props.balls}
        Strike ={this.props.strike}
      </div>
    );
  }
}

export default Display;
