import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

const ProfileCalendar = () => {
    return (
        <>
             <FullCalendar
                    plugins={[ dayGridPlugin ]}
                    initialView="dayGridMonth"
                />
        </>
    )
}

export default ProfileCalendar
