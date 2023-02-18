import React from 'react'
import { Appointment } from '../../API/interfaces/appointment'
import './AppointmentItems.scss'


interface Props {
    appointment:Appointment
}

function AppointmentItem(props: Props) {
    const {} = props

    return (
        <div className='row'>
        <div className='profile-image'>
             <img className='img' src={props.appointment.doctor.photoUrl}  />
        </div>
 
        <div className='detail'>
             <div>
                 <h3>
                     {props.appointment.doctor.name}
                 </h3>
                 <h4>Day : {props.appointment.date}</h4>
                 <strong>Appointment Confirmed</strong>
 
             </div>
 
             <div>
                 <span>Meeting Time : {props.appointment.time}</span>
                 <br></br>
                 <br></br>
                 <div className='bottom-section'>
                     <span></span>
                     <button className='button'>Join Meeting</button>
                 </div>
             </div>
        </div>
     </div>
    )
}

export default AppointmentItem
