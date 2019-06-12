import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addCount, reduceCount } from '../redux/action'
import { Link } from 'react-router-dom'

import logo from '../static/logo.svg';
import './App.css';

class About extends Component {
    render () {
        return (
            <div className="App">
                <Link to="/">
                    <header className="App-header">
                        <img src={ logo } className="App-logo" alt="logo"/>
                        <h1 className="App-title">什么是闭包</h1>
                    </header>
                </Link>
                <p className="App-intro">
                    当我们在函数内创建另一个函数,函数可以访问函数内所有变量,就形成的闭包
                </p>
                <button style={ {padding: '10px'} }
                        onClick={ this.props.add.bind(this, '加') }>按钮+{ this.props.value }</button>
                <button style={ {padding: '10px'} }
                        onClick={ this.props.reduce.bind(this, '减') }>按钮-{ this.props.value }</button>
            </div>
        );
    }
}

export default connect(function (x) {

    return {value: x.addCount.val}
}, {
    add (text) {
        return addCount(text)
    },
    reduce (text) {
        return reduceCount(text)
    }
})(About);
