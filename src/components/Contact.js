import React from 'react'

export default function Contact() {
  return (
    <section id='contact' className='contact'>
        <h1>Get In Touch</h1>
        <form action=''>
            <label className='name' htmlFor='name'>Name:
                <input type='text' id='name' />
            </label>
            
            <label className='email' htmlFor='email:'>Email:
                <input type='email' id='email' />
            </label>

            <label className='message'>Message:
                <textarea name='message' id='message'></textarea>
            </label>

            <input className="contact-btn form-button" type="submit" value="Send"></input>
        </form>
    </section>
  )
}
