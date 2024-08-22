import React from 'react';
import '../form.scss';
import { AiOutlineMail } from "react-icons/ai";
import { TbPasswordUser } from "react-icons/tb";
import trustedCompanies from '../../../assets/images/trustedCompanies.webp';
import yash from '../../../assets/images/yash-director.jpg';
import logo from '../../../assets/logo/logo.webp';

export default function Login() {
    return (
        <div className="container">
            <div className="signup-container">
                <div className="testimonial">
                    <div className="logo">
                        <img src={logo} alt="biz grow" />
                    </div>
                    <blockquote>
                        "Try BizGrow once, and you'll find it easy to use,
                        <span className="highlight"> simple to integrate</span>, and
                        <span className="highlight"> a true value for the money!</span>"
                    </blockquote>
                    <div className="author">
                        <img src={yash} alt="Varun Deshpande" className="author-image" />
                        <div>
                            <div className="author-name">Yash Eklera</div>
                            <div className="author-title">Director, BYC Pvt. Ltd.</div>
                        </div>
                    </div>
                    <div className="trusted-by">
                        <span>TRUSTED BY</span>
                        <div className="logos">
                            <img src={trustedCompanies} alt="Trusted Companies" />
                        </div>
                    </div>
                </div>
                <div className="signup-form">
                    <h2>Login</h2>
                    <form>

                        <div className="input-container">
                            <AiOutlineMail className="input-icon" />
                            <input type="email" id="email" required placeholder='email address' />
                            <div className="input-underline"></div>
                        </div>


                        <div className="input-container">
                            <TbPasswordUser className="input-icon" />
                            <input type="password" id="password" required placeholder='password' />
                            <div className="input-underline"></div>
                        </div>


                        <div className="checkbox-container">
                            <input type="checkbox" required /> I agree to the <a href="#"> Terms of Service </a> and <a href="#"> Privacy Policy</a>
                        </div>

                        <button type="submit">Create your account</button>
                    </form>
                    <div className="social-signin">
                        <p>or login using</p>
                        <div className="social-icons-list d-flex gap-10">
                            <a href="https://google.com" target="_blank" className="social-icons-list-item d-flex"><span alt="Google" title="Google" className="social-icon google"></span></a>
                            <a href="https://microsoft.com" target="_blank" className="social-icons-list-item d-flex"><span alt="Office365" title="Office365" className="social-icon office365"></span></a>
                            <a href="https://linkedin.com" target="_blank" className="social-icons-list-item d-flex"><span alt="LinkedIn" title="LinkedIn" className="social-icon linkedin"></span></a>
                            <a href="https://facebook.com" target="_blank" className="social-icons-list-item d-flex"><span alt="Facebook" title="Facebook" className="social-icon fb"></span></a>
                            <a href="https://x.com" target="_blank" className="social-icons-list-item d-flex"><span alt="X" title="X" className="social-icon x"></span></a>
                        </div>
                    </div>
                    <p>Don't have an account? <a href="#">Sign up</a></p>
                </div>
            </div>
        </div>
    );
}
