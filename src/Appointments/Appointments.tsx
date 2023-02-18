import React, { useEffect, useState } from 'react'
import { getAllAppointments } from '../API/api';
import { Appointment } from '../API/interfaces/appointment';
import AppointmentItem from './AppointmentItem/AppointmentItem';

import './Appointments.scss';



interface Props {}

function Appointments(props: Props) {
    const {} = props

    const [appointments,setAppointments] = useState<Array<Appointment>>()

    useEffect(()=>{
        setAppointments(getAllAppointments());
    },[])

    return (


        <div className='search-list'>
            <h1>Appointments</h1>
            {appointments?.map((appointment)=>{
                return (
                    <div className='sr-main-section'>
                        <span></span>
                        <AppointmentItem appointment={appointment}/>
                        <span></span>
                    </div>
                )
            })}
        </div>

        
    )
}

export default Appointments
