import React, { Component } from 'react';
import './Login.css';
class Login extends Component {
	render() {
		return (
			<>
				<div className="container-fluid">
					<div className="row topone">
						<div className="col-lg-6">
							<img src={'./hill/profile/login.jpeg'} alt="alt" className="img-responsive loginImg" />
						</div>
						<div className="col-lg-6">
							<div className="formMain">
								<img src={'./hill/logimg.png'} alt="alt" className="logimg" />
								<h2 className="text-center">Sign in</h2>
								<div className="form-group">
									<label >Email address:</label>
									<input type="email" placeholder="Email  Address *" className="form-control" id="email" required />
								</div>
								<div className="form-group">
									<label>Password:</label>
									<input type="password" placeholder="Password *" className="form-control" id="pwd" required/>
								</div>
								<label><input type="checkbox" /> Remember me</label>
								<button type="submit" className="btn btn-primary btn-block">Submit</button>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default Login;