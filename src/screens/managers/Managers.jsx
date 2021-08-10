import React from 'react'
import ManagersCard from '../../components/cards/managers/ManagersCard';
import TrainerSearch from '../../components/layouts/quick-search/trainer-search/TrainerSearch';
import ManagerWidget from '../../components/layouts/widgets/manager-widget/ManagerWidget';

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
        <ManagerWidget />
        </>
    )
}

export default Managers
