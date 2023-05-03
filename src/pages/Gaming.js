import React from 'react'

const Gaming = () => {
    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <p>I grew up with a Game Boy in my hand. This gives you an idea of how much video games have been present in my life. My first gaming experiences started with my cousin and me playing The Legend of Zelda. Now, I have a passion for games like League of Legends, Elden Ring, and God of War.</p>
                        <p>PC gaming is my go-to and provides the best experience, in my opinion. However, I have to say that Nintendo will always have a place in my heart.</p>
                    </div>
                    <div className="col-lg-6 col-md-12 px-5">
                        <div id="demo" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                                <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                                <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={require('../images/zelda.jpg')} alt="zelda" className="d-block w-100" />
                                </div>
                                <div className="carousel-item">
                                    <img src={require('../images/smash.jpg')} alt="smash" className="d-block w-100" />
                                </div>
                                <div className="carousel-item">
                                    <img src={require('../images/god.jpg')} alt="god" className="d-block w-100" />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon"></span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                                <span className="carousel-control-next-icon"></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Gaming;
