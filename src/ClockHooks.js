import React, { useState, useEffect } from 'react';

function FormattedDate(props) {
    return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
}

export function MyClock() {
    const [myDate, setDate] = useState(new Date());

    function refreshClock() {
        setDate(new Date());
    }

    useEffect(() => {
        const timerID = setInterval(refreshClock, 5000);
        return () => clearInterval(timerID);
    }, []);
   // <h2>It is {myDate.toLocaleTimeString()}</h2>
    return (
        <div>
            <h1>Hello, world!</h1>
            <FormattedDate date={myDate} /> 
        </div>
    )
}

export function ClockHooks() {
    const [date, setDate] = useState( Date());
    
    function tick() {
        setDate(Date());
    }
       
    useEffect(() => {
        let timerID = setInterval(tick, 6000);
        return () => clearInterval(timerID);
    }, []);

    return (
        <div>
            <h1>Hello, world!!!!!</h1>
            <h2>{date}</h2>
                   
        </div>
    )
} 