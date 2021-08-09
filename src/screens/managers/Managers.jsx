import React from 'react'
import ManagersCard from '../../components/cards/managers/ManagersCard';
import TrainerSearch from '../../components/layouts/quick-search/trainer-search/TrainerSearch';
import TrainerWidget from '../../components/layouts/widgets/trainer-widget/TrainerWidget';

const Managers = () => {
    return (
        <>
        <div className="col-md-8">
            <TrainerSearch />
            <section id="content-types">
                <div className="row">
                    {
                        [...Array(10)].map((match) => (
                            <ManagersCard />
                        ))
                    }
                   
                </div>
            </section>
        </div>
        <TrainerWidget />
        </>
    )
}

export default Managers
