import React from 'react'
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import {useRef} from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_j2030vp', 'template_irgrk5h', form.current, '6VDafLYpz2u-FxfCF')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset()
  };

  return (
    <section className="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineMail className= "contact_option-icon"/>
            <h4>Email</h4>
            <h5>susanpdl77@gmail.com</h5>
            <a href="mailto:susanpdl77@gmail.com"  target='_blank'>Message me</a>
          </article>
          <article className="contact_option">
            <BsMessenger  className= "contact_option-icon"/>
            <h4>Messenger</h4>
            <h5>Susan Poudel</h5>
            <a href="https://m.me/suxan.poudel" target='_blank'>Message me</a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className= "contact_option-icon"/>
            <h4>Whatsapp</h4>
            <h5>+1 9737876181</h5>
            <a href="https://api.whatsapp.com/send?phone=+19737876181" target='_blank'>Message me</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact