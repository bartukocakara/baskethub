import React from 'react'
const CourtGallery = () => {
    return (
        <div className="mt-3">
        <h6 className="text-primary text-center my-4">Court Gallery</h6>
        <div class="gallery">
            {}
            <figure class="gallery__item gallery__item--1">
                <img src="assets/images/trainings/training-courts/court2.jpg" class="gallery__img" alt="tournament court 1" />
            </figure>
            <figure class="gallery__item gallery__item--2">
                <img src="assets/images/trainings/training-courts/court1.jpg" class="gallery__img" alt="tournament court 2" />
            </figure>
            <figure class="gallery__item gallery__item--3">
                <img src="assets/images/trainings/training-courts/court1.jpg" class="gallery__img" alt="tournament court 3" />
            </figure>
            <figure class="gallery__item gallery__item--4">
                <img src="assets/images/trainings/training-courts/court2.jpg" class="gallery__img" alt="tournament court 4" />
            </figure>
            <figure class="gallery__item gallery__item--5">
                <img src="assets/images/trainings/training-courts/court1.jpg" class="gallery__img" alt="tournament court 5" />
            </figure>
            <figure class="gallery__item gallery__item--6">
                <img src="assets/images/trainings/training-courts/court2.jpg" class="gallery__img" alt="tournament court 6" />
            </figure>
        </div>
        </div>
    )
}

export default CourtGallery
