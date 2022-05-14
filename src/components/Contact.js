import React from 'react'

export default function Contact() {
  return (
    <section className='contact'>
        <h1>Get In Touch</h1>
        <form action=''>
            <label className='name' for='name'>Name:
                <input type='text' id='name' />
            </label>
            
            <label className='email' for='email:'>Email:
                <input type='email' id='email' />
            </label>

            <label className='message'>Message:
                <textarea name='message' id='message'></textarea>
            </label>

            <input class="contact-btn form-button" type="submit" value="Send"></input>
        </form>
    </section>
  )
}
