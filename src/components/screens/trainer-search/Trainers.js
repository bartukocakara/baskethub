import React from 'react'
import TrainerCard from '../../cards/trainers/TrainerCard';
import Search from '../../layouts/search/Search';
import PlayerWidget from '../../layouts/widgets/player-widget/PlayerWidget';

const Trainers = () => {
    return (
        <>
        <div className="col-8">
            <Search />
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
        <PlayerWidget />
        </>
    )
}

export default Trainers
