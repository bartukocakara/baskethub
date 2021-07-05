import React from 'react'
import TrainerCard from '../../cards/trainers/TrainerCard';
import TrainerSearch from '../../layouts/quick-search/trainer-search/TrainerSearch';
import TrainerWidget from '../../layouts/widgets/trainer-widget/TrainerWidget';

const Trainers = () => {
    return (
        <>
        <div className="col-8">
            <TrainerSearch />
            <section id="content-types">
                <div className="row">
                    {
                        [...Array(10)].map((match) => (
                            <TrainerCard />
                        ))
                    }
                   
                </div>
            </section>
        </div>
        <TrainerWidget />
        </>
    )
}

export default Trainers
