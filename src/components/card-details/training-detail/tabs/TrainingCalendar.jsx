import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

const TrainingCalendar = () => {

    return (
        <div className="row">
            <FullCalendar
                plugins={[ dayGridPlugin ]}
                initialView="dayGridMonth"
                height="50vh"
            />
        </div>
    )
}

export default TrainingCalendar
