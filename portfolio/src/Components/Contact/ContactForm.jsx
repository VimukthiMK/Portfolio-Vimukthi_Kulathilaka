import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { toast } from 'react-toastify'
import './Contact.css'

const ContactForm = () => {
    const form = useRef()

    // Enter emailjs service id,template id and public key
    const service_id = process.env.REACT_APP_SERVICEID
    const template_id = process.env.REACT_APP_TEMPLATEID
    const public_key = process.env.REACT_APP_PUBLICKEY

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await emailjs.sendForm(service_id, template_id, form.current, public_key)

            console.log('SUCCESS!', response.status, response.text)
            toast.success('Your response is submitted!', { position: toast.POSITION.TOP_CENTER })
        } catch (error) {
            console.error('FAILED...', error)
            toast.error('Failed to submit the form. Please try again later.', { position: toast.POSITION.TOP_CENTER })
        }

        // Reset form fields
        e.target.reset()
    }

    return (
        <div className='form_container'>
            <form className="form-contact" onSubmit={handleSubmit}>
                <input
                    type="text"
                    id="name"
                    name='name'
                    required
                    placeholder="Your Name"
                />

                <input
                    type="email"
                    id="email"
                    name='email'
                    required
                    placeholder="Your Email"
                />

                <input
                    type="number"
                    id="mobNumber"
                    name='mobNumber'
                    placeholder="Your Mobile No"
                />

                <textarea
                    id="message"
                    name='message'
                    rows="5"
                    required
                    placeholder="Your Message"
                />

                <div className="form-btn">
                    <button id="submit" type="submit">Send Message</button>
                </div>
            </form>
        </div>
    )
}
export default ContactForm
