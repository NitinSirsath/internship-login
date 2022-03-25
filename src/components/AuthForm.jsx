import React, {useState} from "react";
import styled from "styled-components";

const Container = styled.div`
width: 50vw;
margin: 100px auto;
`

const socailData = [
  {
    logo: "",
    label: "Sign up with Facebook",
    img: "./img/facebook.png",
  },
  {
    logo: "",
    label: "Sign up with Google",
    img: "./img/google.png",
  },
];

const AuthForm = ({ type, setFormType }) => {
  // const [firstName, setFirstName] = useState('')
  // const [lastName, setLastName] = useState('')
  const [inputValue, setInputValue] = useState({
    firstName : '',
    lastName : '',
    email : '',
    password : ''
  })

  const handleSubmit = (e) => {
    if(inputValue !== ''){
    e.preventDefault();
    alert(`${inputValue.firstName}`)
    setInputValue('')
    }

  }
  
  const handleChange = (e) => {
    const value = e.target.value
    const name = e.target.name

    setInputValue((preValue)=>{
      console.log(preValue);
      if(name === 'firstName'){
        return {
          firstName : value,
          lastName : preValue.name,
          email : preValue.name,
          password : preValue.name
        };
      }
      else if(name === 'lastName'){
        return {
          firstName : preValue.name,
          lastName : value,
          email : preValue.name,
          password : preValue.name
        };
      }
      else if(name === 'email'){
        return {
          firstName : preValue.name,
          lastName : preValue.name,
          email : value,
          password : preValue.name
        };
    }
        else if(name === 'password'){
          return {
            firstName : preValue.name,
            lastName : preValue.name,
            email : preValue.name,
            password : value
          };
      }
    })
  }

  return (
    <Container className="wrapper_form">
      <div className="modal_heading">
        <div className="h3 m-0">
          {type === "SignUp" ? "Create Account" : "Sign In"}
        </div>
        {type === "SignUp" ? (
          <>
            {" "}
            <div className="h6 m-0 fw-light laptop-only">
              Already have an account?
              <span
                className="text-primary fw-normal mx-1"
                role="button"
                onClick={() => setFormType("SignIn")}
              >
                SignIn
              </span>
            </div>
          </>
        ) : (
          <div className="h6 m-0 fw-light laptop-only">
            Don't have an account yet?
            <span
              className="text-primary fw-normal mx-1"
              role="button"
              onClick={() => setFormType("SignUp")}
            >
              Create new for free
            </span>
          </div>
        )}

        {/* <div className="h6 m-0 mobile-only"> X</div> */}
      </div>
      <div className="laptop-flex">
        <div className="left_form">
          <div className="signup_form_wrapper">
            {type === "SignUp" && (
              <div className="d-flex form_one">
                <input
                  className="m-0 br-tl" 
                  placeholder="First Name"
                  name="firstName"
                  type="text"
                  value={inputValue.firstName}
                  onChange={handleChange}
                />
                <input
                  className="m-0 br-tr"
                  placeholder="Last Name"
                  name="lastName"
                  type="text"
                  value={inputValue.lastName}
                  onChange={handleChange}
                />
              </div>
            )}
            <div className="d-flex form_two flex-column ">
              <input
                className={`m-0 ${type === "SignIn" ? "br-t" : ""}`}
                placeholder="Email"
                name="email"
                onChange={handleChange}
                value={inputValue.email}
                type="text"
              />
              <span className="eye">
                <input
                  className={`m-0 ${type === "SignIn" ? "br-b" : ""}`}
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                  value={inputValue.password}
                  type="text"
                />
                {/* <img
                  className="img_eye"
                  src="./img/eye.png"
                  height="15px"
                  alt=""
                /> */}
              </span>
              {/* {type === "SignUp" && (
                <input
                  className="m-0 br-b"
                  placeholder="Confirm Password"
                  type="text"
                />
              )} */}
              <div className="cta-flex">
                <button type="submit" onClick={handleSubmit} className="btn btn-primary auth_cta rounded-pill btn-block">
                  {type === "SignUp" ? "Create Account" : "Sign In"}
                </button>
                <p className="mobile-message">or,Sign In</p>
              </div>
              <div className="auth_social_wrapper">
                {socailData.map((social) => (
                  <button
                    key={social.label}
                    className="btn btn-outline-secondary rounded auth_social_cta btn-block"
                  >
                    <img
                      src={social.img}
                      alt=""
                      height="22px"
                      className="mx-2"
                    />
                    {social.label}
                  </button>
                ))}
              </div>
              {type !== "SignUp" && (
                <p className="auth_social_wrapper mb-0 text-center">
                  Forgot Password?
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="right_form c-grid ">
          <img src="./img/form.svg" height="300px" alt="" />
          {type === "SignUp" && (
            <p className="small_tip auth_social_wrapper mb-0 text-center">
              <small>
                By signing up, you agree to our Terms & conditions, Privacy
                policy
              </small>
            </p>
          )}
        </div>
      </div>
    </Container>
  );
};

export default AuthForm;
