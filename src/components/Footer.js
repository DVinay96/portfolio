import React from 'react'


const Footer = () => {
    return (
        <footer>
            <div className="container-xxl">
                <footer className='py-4'>
                    <div className='container-xxl'>
                        <div className='row'>
                            <div className='col-12'>
                                <p className='text-center mb-0 text-white'>
                                    ©{new Date().getFullYear()}: Powered by DV</p>
                            </div>

                        </div>
                    </div>
                </footer>
            </div>
        </footer>
    )
}

export default Footer