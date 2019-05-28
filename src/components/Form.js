import React, { Component } from 'react';

class Form extends Component {

  state = { toggle: false };

  signUp() {
    this.setState({
      toggle: !this.state.toggle
    });
  }

  render() {
    let signUp = ['container'];
    if(this.state.toggle) {
      signUp.push('right-panel-active');
    }

    return (
      <div className={signUp.join(' ')}>
      <div className="form-container sign-up-container">
        <form action="#">
          <h1>Buat Akun</h1>
            <div className="social-container">
              <a href="/#"
              className="social">
                <i className="fab fa-facebook-f"></i>
              </a >
              <a href="/#"
              className="social">
                <i className="fab fa-google-plus-g"></i>
              </a >
              <a href="/#"
              className="social">
                <i className="fab fa-linkedin-in"></i>
              </a >
            </div>
              <span>Atau gunakan email Anda untuk registrasi</span>
              <input type="text" placeholder="Name" />
			        <input type="email" placeholder="Email" />
			        <input type="password" placeholder="Password" />
              <button>Sign Up</button>
        </form>
      </div>
      <div className="form-container sign-in-container">
        <form>
          <h1>Sign In</h1>
            <div className="social-container">
                <a href="/#" className="social">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="/#"
                className="social">
                  <i className="fab fa-google-plus-g"></i>
                </a>
                <a href="/#"
                className="social">
                  <i className="fab fa-linkedin-in"></i>
                </a>
            </div>
          <span>atau gunakan akun Anda</span>
          <input type="email" placeholder="Email" />
			    <input type="password" placeholder="Password" />
          <a href="/#">Lupa Password?</a>
          <button>Sign In</button>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>To keep connected with us please login with your personal info</p>
            <button className="ghost" onClick={this.signUp.bind(this)}>Sign In</button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start journey with us</p>
            <button className="ghost" onClick={this.signUp.bind(this)}>Sign Up</button>
			    </div>
        </div>
      </div>
    </div>
    );
  }
}

export default Form;