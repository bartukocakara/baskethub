import React from 'react'
import CoachesCard from '../../components/cards/coaches/CoachesCard';
import TrainerSearch from '../../components/layouts/quick-search/trainer-search/TrainerSearch';
import CoachWidget from '../../components/layouts/widgets/coach-widget/CoachWidget';
import TrainerWidget from '../../components/layouts/widgets/trainer-widget/TrainerWidget';

const Coaches = () => {
    return (
        <>
        <div className="col-md-8">
            <TrainerSearch />
            <section id="content-types">
                <div className="row">
                    {
                        [...Array(10)].map((match) => (
                            <CoachesCard />
                        ))
                    }
                   
                </div>
            </section>
        </div>
        <CoachWidget />
        </>
    )
}

export default Coaches
