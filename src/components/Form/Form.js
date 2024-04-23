import './Form.css'

import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { RiSendPlaneFill } from "react-icons/ri";


const Form = () => {

  const [result, setResult] = React.useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "8cbc4691-e13d-460b-86fb-3adedb4b73b1");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      alert(data.message);
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
      <div className='contact-section'>

      <div className='contact-left'>
        <h1>Let's talk</h1>
        <p>I'm currently available to take on new projects, so feel free to send me a message. You can contact me anytime.</p>
        <div className='contact-details'>
        <div className='contact-detail'>
        <IoMdMail className='icon' size="30px" style={{ color: 'white'}}/><p>godavari196@gmail.com</p>
        </div>
        <div className='contact-detail'>
        <IoCall className='icon'  size="30px" style={{ color: 'white'}}/><p>+8080575757</p>
        </div>
        <div className='contact-detail'>
        < FaLocationDot className='icon' size="30px" style={{ color: 'white'}}  /><p>Pune, Maharashtra</p>
        </div>
        </div>
        </div>
        
        
        
 <form  onSubmit={onSubmit}className='contact-right' >
            <label>Your Name</label>
            <input type='text' placeholder='enter your full name'></input>
            <label>Email</label>
            <input type='email' placeholder='enter email'></input>
            
            <label>Message</label>
            <textarea rows="5" placeholder='type your message here'></textarea>


<button className='btn' >Send Message <RiSendPlaneFill size="26px" style={{ color: 'black'}} /></button>

        </form>

        
        </div>
      </div>
       
      
    
  )
}

export default Form
