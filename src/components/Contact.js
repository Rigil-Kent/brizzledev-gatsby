import React from 'react'

export default function Contact() {
  return (
    <section className='contact'>
        <h1>Get In Touch</h1>
        <form action=''>
            <label className='contact-name' for='name'>Name:
                <input type='text' id='name' />
            </label>
            
            <label className='' for='email:'>Email:
                <input type='text' id='email' />
            </label>

            <label message='message'>Message:
                <textarea name='' id='message' className=''></textarea>
            </label>
        </form>
    </section>
  )
}
