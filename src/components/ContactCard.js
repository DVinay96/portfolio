import React from 'react'


const ContactCard = () => {
    return (


        <div className='contact-card pt-5 '>
            <h3 className='contact-title'>Work? Just want to chat? Hit me up!</h3>

            <form className=' contact-form d-flex flex-column gap-15' >
                <div>
                    <input type='text' className='form-control' placeholder='Name'></input>
                </div>
                <div>
                    <input type='emai' className='form-control' placeholder='Email'></input>
                </div>
                <div>
                    <input type='phone' className='form-control' placeholder='Phone'></input>
                </div>
                <div>
                    <textarea name='message' id='' className='w-100 form-control' cols='30' rows='10' placeholder='Your message' ></textarea>
                </div>
                <div>
                    <button type="button" class="btn btn-outline-light">Send</button>
                </div>
            </form>
        </div>
    )
}

export default ContactCard