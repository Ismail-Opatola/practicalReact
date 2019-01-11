//import React from 'react';
import React, { Component } from 'react';
import logo from '../logo.svg';

//COMPONENTS AS CLASSES
//class Header extends React.Component {}
class Header extends Component {
    render() {
        const { title, num, myObj, myArr, myFunc, myFunc2 } = this.props;
        // const add = (a, b) => a + b;    
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>{title}</h1>
                <p>{num}</p>
                <p>{myObj.a}</p>
                <p>{myObj.b}</p>
                <p>{JSON.stringify(myObj)}</p>
                <p>{myArr}</p>
                <p>{myArr[0]}</p>
                <div>{myFunc(12, 12)}</div>
                <div>{myFunc2(12, 12)}</div>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
        </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
        </a>
            </header>
        )
    }
}

export default Header;