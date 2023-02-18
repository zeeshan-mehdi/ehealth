import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import './MainSection.scss'

const doctorImage = require('./../../images/doctor.png');

interface Props {}

function MainSection(props: Props) {
   const [speciality,setSpeciality] = useState<string>('')
   const [location,setLocation] = useState<string>('anywhere')

   const navigate = useNavigate();


    const onChange = (event:any)=>{
        setSpeciality(event.target.value);
    }

    const onChangeLocation = (event:any)=>{
        setLocation(event.target.value);
    }



    const searchDoctor = ()=>{
        navigate(`/search?location=${location}&speciality=${speciality}`)
    }


    return (
        <div className='main-section' role='search-item'>

            <div className='mainsection-left'>

                <div>
                    <h2>
                        Looking for a Doctor ?
                    </h2>

                    <h3>
                        Perhaps we can help
                    </h3>
                </div>

                <div className='search-box'>
                    <input type={'text'} onChange={onChange} className='search-input text-input' placeholder='Please input doctor specialization ?'/>
                    <select className='search-input' onChange={onChangeLocation}>
                        <option value={'berlin'}>Anywhere</option>
                        <option value={'hof'}>Hof</option>
                        <option value={'nuremberg'}>Nuremberg</option>
                        <option value={'munich'}>Munich</option>
                        <option value={'berlin'}>Berlin</option>
                    </select>
                    <button className='button' data-testid='search-test-id' onClick={searchDoctor}> Search</button>
                </div>

                <span>

                </span>

                <span>

                </span>

                <span></span>
                

            </div>

            <div className='mainsection-right'>
                <img src={doctorImage} />

            </div>


        </div>
    )
}

export default MainSection
