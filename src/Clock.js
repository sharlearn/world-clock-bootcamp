import React from "react";

class Clock extends React.Component{
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.setState({
      date: new Date()
      }), 1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return <p>{this.state.date.toLocaleString(this.props.langCode ,{dateStyle:"medium", timeStyle: "medium", timeZone: this.props.timeZone})}</p>
  }
}

export default Clock;