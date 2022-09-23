import React, { useRef } from 'react'
import './Contact.css'
import phone from '../Contact/phone.jpg'
import email from '../Contact/email.jpeg'
import emailjs from '@emailjs/browser';

export const Contact = () => {

   const formRef = useRef();
    const Handle =(e)=>{
e.preventDefault()  

emailjs.sendForm('service_p4jshgn', 'template_ks337je', formRef.current, 'CEURpZVcld5pwYbJS')
.then((result) => {
    console.log(result.text);
    alert("Thank you");
}, (error) => {
    console.log(error.text);
}); 

    }
  return (
    <div className='c'>
        <div className='c-bg'></div>
        <div className='c-wrapper'>
            <div className='c-left'>
                <h2 className='c-title'>Let's Discuss</h2>
                <div className='c-info'>
                    <div className='c-info-item'>
                        <img src={phone} alt="hi" className='c-icon'/>
                        +91 12345 67890
                    </div>
                    <div className='c-info-item'>
                        <img src={email} alt="hi" className='c-icon'/>
                        tony@gmail.com
                    </div>
                    
                </div>
            </div>
            <div className='c-right'>
                <p className='c-desc'>
                    Get in touch , You can contact me on below.
                </p>
                <form  ref={formRef} onSubmit={Handle} > 
                    <input type={"text"} placeholder="Name" name='user_name'/>
                    <input type={"text"} placeholder="Subject" name='user_subject'/>
                    <input type={"text"} placeholder="Email"  name='user_email'/>
                    <textarea rows={"5"}  placeholder="Message"  name='user_massage'/>
                    <button>Submit</button>
                    
                </form>
            </div>
        </div>
        
    </div>
  )
}

export default Contact