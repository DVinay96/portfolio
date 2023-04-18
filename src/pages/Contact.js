import React from 'react'
import ContactCard from '../components/ContactCard'
import { BsInstagram, BsGithub } from 'react-icons/bs'
import { BiPhoneCall } from 'react-icons/bi'
import { AiOutlineMail } from 'react-icons/ai'

const Contact = () => {
    return (
        <div className="contact-wrapper">
            <div className="container-xxl  ">
                <div className="row">
                    <div className="title d-flex justify-content-center p-5">
                        <h2>Howdy! How can I help you today?</h2>
                    </div>
                    <div className="row d-flex text-center">
                        <h5>I love getting to know people, so if you have a project idea I can help with or just want to say hi leave a message below</h5>
                    </div>
                </div>
                <div className='row'>
                    <div className='contact-inner-wrapper d-flex justify-content-between'>
                        <div className=' contact-left col-6 w-74 p-5'>
                            <ContactCard />
                        </div>
                        <div className=" contact-right col-6 w-24 d-flex justify-content-center align-content-center flex-wrap">

                            <h4 className='pt-5'>I'd love to get to know you!</h4>
                            <div className='footer-links d-flex flex-column  '>
                                <ul className='ps-0'>
                                    <li className='mb-3 fs-5 d-flex gap-15 align-items-center'>
                                        <BiPhoneCall className='fs-5' />
                                        <a className='text-dark' href='tel: +52 222 135 88 70'>+52 222 135 8870</a>
                                    </li>
                                    <li className='mb-3 fs-5 d-flex gap-15 align-items-center'>
                                        <AiOutlineMail className='fs-5' />
                                        <a className='text-dark' href='mailto:dvcoyotzi@gmail.com'>dvcoyotzi@gmail.com</a>
                                    </li>
                                    <li className='mb-3 fs-5 d-flex gap-15 align-items-center'>
                                        <BsGithub className='fs-5' />
                                        <a className='text-dark' href="https://github.com/DVinay96">DVinay96</a>
                                    </li>
                                    <li className='mb-3 fs-5 d-flex gap-15 align-items-center'>
                                        <BsInstagram className='fs-5' />
                                        <a className='text-dark' href="https://instagram.com/d.e.v.c.js?igshid=YmMyMTA2M2Y="> enriquevinay</a>
                                    </li>

                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact