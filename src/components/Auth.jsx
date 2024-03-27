import { useState, useRef } from "react";
import styled from "styled-components";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";


function Auth() {


	const [show, setShow] = useState(false);
	const [loading, setLoading] = useState(false);

	return (
		<Wrapper>
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
		</Wrapper>
	);
}

const Wrapper = styled.section`
	text-align: center;
	span {
		color: #fe8402;
	}
	span:hover {
		text-decoration: underline;
	}
	form {
		margin-top: 30px;
	}
	.form-input input {
		padding: 10px 15px;
		width: 100%;
		margin-top: 15px;
		border-radius: 5px;
		border: 0.5px solid #cacaca;
	}

	.form-input input:focus {
		outline: none;
		border-bottom: 2px solid #fe8402;
	}

	.login > div,
	.register > div {
		padding: 0 10px;
		font-size: 0.9rem;
	}
	.forgot a {
		display: block;
		text-decoration: none;
		color: #fe8402;
		text-align: right;
		margin-top: 15px;
	}
	.forgot a:hover {
		text-decoration: underline;
	}

	.btn-login > button {
		font-size: 1rem;
		padding: 5px 10px;
		width: 100%;
		border-radius: 5px;
		border: none;
		margin-top: 30px;
		color: white;
		background-color: #516cf0;
	}

	.btn-login > button:hover {
		background-color: #fe8402;
	}
	.btn-register > button {
		font-size: 1rem;
		padding: 5px 10px;
		width: 100%;
		border-radius: 5px;
		border: none;
		margin-top: 20px;
		color: white;
		background-color: #516cf0;
	}

	.btn-register > button:hover {
		background-color: #fe8402;
	}
	.privacy {
		margin-top: 15px;
		font-size: 0.7rem;
		a {
			color: #fe8402;
		}
	}
	.password {
		position: relative;
	}
	.password span {
		position: absolute;
		top: 35%;
		right: 5%;
		font-size: 1.2rem;
		color: #848484;
	}
	.password span:hover {
		color: #fe8402;
	}
	.disabled {
		cursor: not-allowed;
	}
	.disabled:hover {
		background-color: #848484 !important;
	}
`;

export default Auth;
