import React, { Component } from 'react'
import CustomButton from '../custom-button/custom-botton'
import FormInput from '../from-input/from-input'
import '../signin/signin.scss'

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email:'',
            password:''
        }
    }

    handleChange= event=>{
        const {name , value} = event.target;

        this.setState({[name] : value})
    }
    handleSubmit = event => {
        event.preventDefault(); 
        this.setState({email: '' ,password: ''})
    }
    render(){
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput type="email" name="email" value={this.state.email} required handleChange={this.handleChange } label='email'/>
                    <FormInput type="password" name="password" value={this.state.password} required onChange={this.handleChange} label='password'/>
                    <CustomButton type="submit">SIGN IN</CustomButton>

               </form>
            </div>
        )
    }
}




export default SignIn;