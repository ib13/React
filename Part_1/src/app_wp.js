//50
// import {square} from "./utils";
import React from 'react';
import ReactDOM from 'react-dom';

// console.log("Running");
// console.log(square(5));

const t1=<p>Hello There</p>;
ReactDOM.render(t1,document.getElementById('app'));

class ABC1 extends React.Component{
    render(){
        return (
            <div>
                <p>Hello from app_wp.js</p>
            </div>
        );
    }
}

export {ABC1};