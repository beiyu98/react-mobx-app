import React, {Component} from 'react'
import {BrowserRouter as Router, Route,Link} from 'react-router-dom';
import {Button} from 'antd';

export default class App extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return <Button type="primary">hello world</Button>
    }
}