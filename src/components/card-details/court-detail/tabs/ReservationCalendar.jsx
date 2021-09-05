import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

const ReservationCalendar = () => {
    return (
        <>
            <h5 className="text-center">2021</h5>
            <div class="col-md-12">
                <FullCalendar
                    plugins={[ dayGridPlugin ]}
                    initialView="dayGridMonth"
                />
            </div>
        </>
    )
}

export default ReservationCalendar
