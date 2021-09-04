import React from 'react'
import FavouriteTrainerCard from '../../components/cards/favourite-trainers/FavouriteTrainerCard'
import TrainerSearch from '../../components/layouts/quick-search/trainer-search/TrainerSearch';
import TrainerWidget from '../../components/layouts/widgets/trainer-widget/TrainerWidget';

const MyFavTrainers = () => {
    return (
        <>
        <div className="col-md-8">
            <TrainerSearch />
            <section id="content-types">
                <div className="row">
                    {
                        [...Array(10)].map((i, match) => (
                            <FavouriteTrainerCard key={i} />
                        ))
                    }
                   
                </div>
            </section>
        </div>
        <TrainerWidget />
        </>
    )
}

export default MyFavTrainers
