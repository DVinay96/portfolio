import React from 'react'

const Gaming = () => {
    return (
        <>
            <section>
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-6">
                            <p>I grew up with a gameboy in my hand. </p>
                            <p>  I guess that can give you an idea on how much have video games been present in my life.</p>

                            <p>My first gaming experiences start with my cousin and I playing The Legend of Zelda, now it has evolved in a passion for League of Legends and other games like Elden Ring or God of War </p>

                            <p> Definitely PC gaming is my go to and the best experience in my opinion, but I have to say Nintendo will always have a place in my heart </p>
                        </div>
                        <div className="col-6 carousel px-5">
                            <div id="demo" class="carousel slide" data-bs-ride="carousel">


                                <div class="carousel-indicators">
                                    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
                                    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                                    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                                </div>


                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img src={require('../images/zelda.jpg')} alt="zelda" class="d-block w-100" />
                                    </div>
                                    <div class="carousel-item">
                                        <img src={require('../images/smash.jpg')} alt="smash" class="d-block w-100" />
                                    </div>
                                    <div class="carousel-item">
                                        <img src={require('../images/god.jpg')} alt="god" class="d-block w-100" />
                                    </div>
                                </div>


                                <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon"></span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                                    <span class="carousel-control-next-icon"></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Gaming