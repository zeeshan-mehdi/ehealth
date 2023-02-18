import React from 'react'
import { useNavigate } from 'react-router';
import doctor from '../../API/interfaces/doctor';
import './SearchItem.scss'


const doctorImage = require('./../../images/doctor.png');


interface Props{
    doctor:doctor
}

export default function SearchItem(props:Props) {
  const navigate = useNavigate();

  let bookAppointment = ()=>{
        navigate('/book-appointment',{state:{doctor:props.doctor}});
  }  


  return (
    <div className='row'>
       <div className='profile-image'>
            <img className='sc-img' src={props.doctor.photoUrl}  />
       </div>

       <div className='detail'>
            <div>
                <h3>
                    {props.doctor.name}
                </h3>
                <span>Location: {props.doctor.location}</span>
                <h4>{props.doctor.specialities}</h4>
                

            </div>

            <div>
                <span>{props.doctor.description.slice(0,250)} ...</span>
                <br></br>
                <br></br>
                <div className='bottom-section'>
                    <span></span>
                    <button className='button' onClick={bookAppointment}>Book An Appointment</button>
                </div>
            </div>
       </div>
    </div>
  )
}
