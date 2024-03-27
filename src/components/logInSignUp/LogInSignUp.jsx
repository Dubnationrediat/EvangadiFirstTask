import { useState, useRef } from "react";
import './LogInSignUp.css'
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";


function LogInSignUp() {


	const [show, setShow] = useState(false);
	const [loading, setLoading] = useState(false);

	return (
		<div className="loginSignUp">
			<div id="carouselExample" className="carousel slide">
				<div className="carousel-inner">
					<div className="carousel-item active">
						<div className="login">
							<h5>Login to your account</h5>
							<div>
								Don’t have an account?{" "}
								<span
									type="button"
									data-bs-target="#carouselExample"
									data-bs-slide="prev"
								>
									Create a new account
								</span>
							</div>
							<form  className="">
								<div className="form-input">
									<input
									
										type="email"
										placeholder="Email adrress"
									/>
								</div>
								<div className="form-input password">
									<input
									
										type={`${show ? "text" : "password"}`}
										placeholder="Password"
									/>
									<span
										onClick={show => {
											setShow(show => !show);
										}}
									>
										{show ? (
											<AiOutlineEye />
										) : (
											<AiOutlineEyeInvisible />
										)}
									</span>
								</div>
								<div className="forgot">
									<a href="">Forgot password?</a>
								</div>
								<div className="btn-login">
									<button
										disabled={loading}
										className={`${loading && "disabled"}`}
										type="submit"
									>
										Login
									</button>
								</div>
							</form>
						</div>
					</div>
					<div className="carousel-item ">
						<div className="register">
							<h5>Join the network</h5>
							<div>
								Already have an account?{" "}
								<span
									type="button"
									data-bs-target="#carouselExample"
									data-bs-slide="next"
								>
									Sign in
								</span>
							</div>
							<form >
								<div className="form-input">
									<input
									
										name="username"
										type="text"
										placeholder="Username"
									/>
								</div>

								<div className="row">
									<div className="form-input col-md-6 ">
										<input
											
											className=""
											type="text"
											placeholder="First name"
										/>
									</div>
									<div className="form-input col-md-6">
										<input
											
											className=""
											type="text"
											placeholder="Last name"
										/>
									</div>
								</div>
								<div className="form-input">
									<input
								
										type="email"
										placeholder="Email adrress"
									/>
								</div>
								<div className="form-input password">
									<input
									
										type={`${show ? "text" : "password"}`}
										placeholder="Password"
									/>
									<span
										onClick={show => {
											setShow(show => !show);
										}}
									>
										{show ? (
											<AiOutlineEye />
										) : (
											<AiOutlineEyeInvisible />
										)}
									</span>
								</div>
								<div className="privacy">
									I agree to the <a href="">privacy policy</a>{" "}
									and <a href="">terms of service</a>.
								</div>
								<div className="btn-register">
									{/* <button
										disabled={loading}
										className={`${loading && "disabled"}`}
										type="submit"
									>
										Agree and Join
									</button> */}
								</div>
								<div>
									<span
										type="button"
										data-bs-target="#carouselExample"
										data-bs-slide="next"
									>
										Already have an account?
									</span>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}


export default LogInSignUp;
