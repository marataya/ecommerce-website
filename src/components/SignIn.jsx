import React, { Component } from 'react'
import FormInput from './FormInput'
import CustomButton from './CustomButton'
import './SignIn.sass'
import { SignInWithGoogle } from './../firebase/firebase.utils.js'


export default class SignIn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
        }
    }

    handleSubmit = event => {
        event.preventDefault()
        this.setState( { email: '', password: '' } )
    }

    handleChange = event => {
        const {value, name} = event.target
        this.setState({[name]: value})
    }


    render() {
        return (
            <div class='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={ this.handleSubmit }>
                    <FormInput name="email" type="email" value={this.state.email} required handleChange={this.handleChange} label='email'/>
                    <FormInput name="password" type="password" value={this.state.email} required handleChange={this.handleChange} label='password'/>

                    <CustomButton type="submit">Sign In</CustomButton>
                </form>
            </div>
        )
    }
}
