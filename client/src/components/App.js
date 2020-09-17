import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../actions';
import Header from './Header'


const dashboard = () => <h2>dashboard</h2>
const landing = () => <h2>landing</h2>
const login = () => <h2>login</h2>

class App extends Component {

    componentDidMount(){
        this.props.fetchUser();
    }

    render(){
        return(
            <BrowserRouter>
                <div className='container'>
                    <Header />
                    <Route path='/' component={landing} />
                    <Route path='/login' component={login} />
                </div>
            </BrowserRouter>
    )
    }

}

export default connect(null, actions)(App)