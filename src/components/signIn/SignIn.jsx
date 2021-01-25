import React from 'react';
import './SignIn.scss';
import FormInput from '../forms/formInput/FormInput';
import CustomButton from '../forms/customButton/CustomButton';

class SignIn extends React.Component {
  state = {
    email: '',
    password: ''
  }

  inputFieldHandler = event => {
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  submitHandler = event => {
    event.preventDefault()
  }

  render() {
    return (
      <div className="sign-in-sign-up">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.submitHandler}>
          <FormInput type="email" name="email" label="Email" required value={this.state.email} onChange={this.inputFieldHandler} />
          <FormInput type="password" name="password" label="Password" required value={this.state.password} onChange={this.inputFieldHandler} />
          <CustomButton type="submit">Sign In</CustomButton>
        </form>
      </div>
    )
  }
}

export default SignIn;
