import React, { useState, useEffect } from 'react';
//import React, { useState } from "react";

export function ClockHooks() {
    const [date, setDate] = useState( Date());

    function FormattedDate(props) {
        return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
    } 
    
    useEffect(() => {
        function tick() {
            setDate(Date());
        }
        let timerID = setInterval(tick);
        return () => clearInterval(timerID);
    }, []);

//<h2>It is {date.toLocaleTimeString()}.</h2>
    return (
        <div>
            <h1>Hello, world!!!!!</h1>
            <h2>It is {date}</h2>
           
        </div>
    )
}  
/*
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
    //<h2>It is {this.state.date.toLocaleTimeString()}.</h2>
    render() {
        return (
        <div>
            <h1>Hello, world!</h1>
            <FormattedDate date={this.state.date} />

        </div>
        );
    }
}

export default Clock;
*/