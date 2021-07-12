import React from 'react'
import "./_courtGallery.scss"
const CourtGallery = () => {
    return (
        <>
        <h6 className="text-primary text-center">Court Gallery</h6>
        <div class="gallery">
            <figure class="gallery__item gallery__item--1">
                <img src="assets/images/samples/basket-salon2.jpg" class="gallery__img" alt="tournament court 1" />
            </figure>
            <figure class="gallery__item gallery__item--2">
                <img src="assets/images/samples/basket-salon1.jpg" class="gallery__img" alt="tournament court 2" />
            </figure>
            <figure class="gallery__item gallery__item--3">
                <img src="assets/images/samples/basket-salon2.jpg" class="gallery__img" alt="tournament court 3" />
            </figure>
            <figure class="gallery__item gallery__item--4">
                <img src="assets/images/samples/basket-salon2.jpg" class="gallery__img" alt="tournament court 4" />
            </figure>
            <figure class="gallery__item gallery__item--5">
                <img src="assets/images/samples/basket-salon1.jpg" class="gallery__img" alt="tournament court 5" />
            </figure>
            <figure class="gallery__item gallery__item--6">
                <img src="assets/images/samples/basket-salon2.jpg" class="gallery__img" alt="tournament court 6" />
            </figure>
        </div>
        </>
    )
}

export default CourtGallery
