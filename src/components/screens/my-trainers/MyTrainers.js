import React from 'react'
import FavouriteTrainerCard from '../../cards/favourite-trainers/FavouriteTrainerCard'
import TrainerSearch from '../../layouts/quick-search/trainer-search/TrainerSearch';
import TrainerWidget from '../../layouts/widgets/trainer-widget/TrainerWidget';

const MyTrainers = () => {
    return (
        <>
        <div className="col-md-8">
            <TrainerSearch />
            <section id="content-types">
                <div className="row">
                    {
                        [...Array(10)].map((match) => (
                            <FavouriteTrainerCard />
                        ))
                    }
                   
                </div>
            </section>
        </div>
        <TrainerWidget />
        </>
    )
}

export default MyTrainers
