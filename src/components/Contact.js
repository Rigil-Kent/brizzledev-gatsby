import React, { useState } from 'react'
import axios from 'axios'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'


export default function Contact() {

    const { executeReCaptcha } = useGoogleReCaptcha()

    const [serverState, setServerState] = useState({
        submitting: false,
        status: null
    })

    // const [token, setToken] = useState('')

    async function thankyou(form) {
        form.firstChild.style.visibility = 'visible'
        await new Promise(resolve => setTimeout(resolve, 2000))
        // form.firstChild.style.visibility = 'hidden'
        form.firstChild.style.animation = 'thanksFadeOut 500ms forwards'
    }


    const handleResponse = (ok, msg, form) => {
        setServerState({
            submitting: false,
            status: {ok, msg}
        })

        if (ok) {
            form.reset()
            thankyou(form)
        }
    }

    const handleOnSubmit = async (e) => {
        e.preventDefault()

        // if (!executeReCaptcha) return

        // // TODO: field validation
        // const result = await executeReCaptcha('homepage')
        // setToken(result)
        
        const form = e.target

        setServerState({ submitting: true })
        axios({
            method: 'post',
            url: 'https://getform.io/f/6b25b4d1-28b4-4fba-8c70-fef2873c9012',
            data: new FormData(form)
        }).then( r => {
            handleResponse(true, "Thank you!", form)
        }).catch(r => {
            handleResponse(false, r.response.data.error, form)
        })
    }


  return (
    <section id='contact' className='contact'>
        <h1>Get In Touch</h1>
        <form acceptCharset='UTF-8'  method='POST' onSubmit={ handleOnSubmit }>
            <p className='thanks'>Thank you! I will get back to you as soon as possible.</p>
            <label className='name' htmlFor='name'>Name:
                <input type='text' name='name' id='name' />
            </label>
            
            <label className='email' htmlFor='email:'>Email:
                <input type='email' name='email' id='email' />
            </label>

            <label className='message'>Message:
                <textarea name='message' id='message'></textarea>
            </label>

            <input className="contact-btn form-button" type="submit" value="Send"></input>
        </form>
    </section>
  )
}
