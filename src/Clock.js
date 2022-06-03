import React from "react";

function FormattedDate(props) {
    return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
}
  
class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
        () => this.tick(),
        1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
        date: new Date()
        });
    }
    /*<h2>It is {this.state.date.toLocaleTimeString()}.</h2>*/
    render() {
        return (
        <div>
            <h1>Hello, world!!1</h1>
            <FormattedDate date={this.state.date} />

        </div>
        );
    }
}

export default Clock;