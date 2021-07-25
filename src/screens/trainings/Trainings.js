import React from 'react'
import TrainingCard from '../../components/cards/training-card/TrainingCard'
import TrainingSearch from '../../components/layouts/quick-search/traininig-search/TrainingSearch'
import TrainingWidget from '../../components/layouts/widgets/training-widget/TrainingWidget'

const Trainings = () => {
    return (
        <>
        <div className="col-md-8">
            <TrainingSearch />
            <section id="content-types">
                <div className="row">
                    {
                        [...Array(10)].map((match) => (
                            <TrainingCard />
                        ))
                    }
                   
                </div>
            </section>
        </div>
        <TrainingWidget />
        </>
    )
}

export default Trainings
