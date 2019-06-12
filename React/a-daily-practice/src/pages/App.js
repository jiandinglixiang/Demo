import React, { Component } from 'react';
import { connect } from 'react-redux'
import { reduceCount, addCount } from '../redux/action'
import { Link } from 'react-router-dom'

import logo from '../static/logo.svg';
import './App.css';

class App extends Component {
    render () {
        return (
            <div className="App">
                <Link to="/about">
                    <header className="App-header">
                        <img src={ logo } className="App-logo" alt="logo"/>
                        <h1 className="App-title">Welcome to React</h1>
                    </header>
                </Link>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <button style={ {padding: '10px'} }
                        onClick={ this.props.add.bind(this, '加') }>按钮+{ this.props.value }</button>
                <button style={ {padding: '10px'} }
                        onClick={ this.props.reduce.bind(this, '减') }>按钮-{ this.props.value }</button>
            </div>
        );
    }
}

function CLick (dispatch, props) {
    return {
        add (text) {
            dispatch(addCount(text))
        },
        reduce (text) {
            dispatch(reduceCount(text))
        }
    }
}

export default connect(function (x) {
    return {value: x.addCount.val}
}, CLick)(App);
