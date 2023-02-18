import './Navigation.scss';

import React from 'react'
import { useNavigate } from 'react-router-dom';

interface Props {}

function Navigation(props: Props) {
    const {} = props
    const navigate = useNavigate();

    return (
        <div className='navigation'>
            <div className='left'>
                <div className='links' onClick={()=>navigate('/')}>Ehealth</div>
                {/* <div className='links'>Home</div> */}
                <div className='links' onClick={()=>navigate('/appointments')}>Appointments</div>
                <div className='links'>Register As a Doctor</div>
                <div className='links'>Pricing</div>
            </div>

            <div className='right'>
                {/* <span>TestUser</span> */}
                <div className='links'>Test User </div>
                <span>logout</span>
                {/* <button className='button'>Login</button> */}
            </div>
            
        </div>
    );
}

export default Navigation
