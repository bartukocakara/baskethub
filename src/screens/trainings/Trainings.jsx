import React from 'react'
import TrainingCard from '../../components/cards/trainings/TrainingCard'
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
                        [...Array(10)].map((i, training) => (
                            <TrainingCard key={i}/>
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
