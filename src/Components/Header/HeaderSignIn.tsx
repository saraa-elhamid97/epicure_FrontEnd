import React, { useState } from 'react'
import validator from 'validator'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CloseBtn, Email, Forget, HeaderSignInContent, HeaderSignInContentTopSide, HeaderSignInHeader, HeaderSignInLoginSide, HeaderSignInWrapper, Label, Line, LineSide, LoginButton, Or, Password, SignInContinue, SignInInput, SignInText, Signup, TextSide } from './HeaderSignInStyles'
import { X_icon } from './hamburHeader/HamburStyle';
import { useDispatch } from 'react-redux';
import { setOpenSignUp } from './SingUpStateSlice';
import { setOpenSignIn } from './SingInStateSlice';
export default function HeaderSignIn() {
    const [email, updateEmail] = useState("");
    const [filled, updatefilled] = useState({ email: false, password: false });
    const dispatch = useDispatch();
    const [password, updatePassword] = useState("");

    return (
        <HeaderSignInWrapper>
            <HeaderSignInHeader><CloseBtn onClick={() => dispatch(setOpenSignIn(false))}><X_icon src="Images/x.png" alt="close icon" /></CloseBtn></HeaderSignInHeader>
            <HeaderSignInContent>
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />

                <HeaderSignInContentTopSide>
                    <TextSide>
                        <SignInText>Sign in</SignInText>
                        <SignInContinue>To continue the order, please sign in</SignInContinue>
                    </TextSide>
                    <SignInInput>
                        {email !== "" && <Label>Email adress</Label>}
                        <Email type="email" placeholder="Email adress" onChange={(data) => {
                            updateEmail(data.target.value);
                            updatefilled({ ...filled, email: (data.target.value !== "") ? true : false })
                        }} />
                    </SignInInput>
                    <SignInInput>
                        {password !== "" && <Label>Password</Label>}
                        <Password type="password" placeholder="Password" onChange={(data) => {
                            updatePassword(data.target.value);
                            updatefilled({ ...filled, password: (data.target.value !== "") ? true : false })

                        }} />
                    </SignInInput>
                </HeaderSignInContentTopSide>
                <HeaderSignInLoginSide>
                    <LoginButton filled={filled} onClick={() => {
                        if (!filled.email || !filled.password) {
                            toast.warn("All fields are required!", {
                                position: "top-right",
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                            });
                        }
                        else {
                            if (!validator.isEmail(email)) {
                                toast.warn("Insert a valid Email", {
                                    position: "top-right",
                                    autoClose: 5000,
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                });
                            }
                            else {
                                toast.success("Singing in...", {
                                    position: "top-right",
                                    autoClose: 5000,
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                });
                                dispatch(setOpenSignIn(false))

                            }
                        }
                    }}>login</LoginButton>

                    <Forget>Forget password?</Forget>
                </HeaderSignInLoginSide>
                <LineSide>
                    <Line></Line>
                    <Or>or</Or>
                    <Line></Line>
                </LineSide>
                <Signup onClick={() => {
                    window.scrollTo(0, 0);
                    dispatch(setOpenSignIn(false));
                    dispatch(setOpenSignUp(true));
                }}>sign up</Signup>

            </HeaderSignInContent>
        </HeaderSignInWrapper>
    )
}
