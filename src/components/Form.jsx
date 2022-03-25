import React,{useState} from 'react'
import AuthForm from "./AuthForm";
import "./form.css";


    
    const Form = () => {
    const [formType, setFormType] = useState("SignUp");
  return (
    <div>
        <div>
          <AuthForm type={formType} setFormType={setFormType} />
        </div>
    </div>
  )
}

export default Form;