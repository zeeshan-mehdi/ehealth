import React, { useEffect, useState } from 'react'
import SearchItem from '../SearchItem/SearchItem'
import './SearchSection.scss'
import doctor from '../../API/interfaces/doctor'
import { getDoctorsByProfession, getDoctorsByProfessionAndLocation, getDoctorsByProfessionByLocation } from '../../API/api'
import { useSearchParams } from 'react-router-dom'



interface Props {}

function SearchSection(props: Props) {
   
    const [date,setDate] = useState<Date>(new Date());
    const [doctors,setDoctors] = useState<Array<doctor>>([]);
    const [searchParams, setSearchParams] = useSearchParams();


    useEffect(()=>{
        if(searchParams.get('location')=='anywhere'||searchParams.get('location') == 'Anywhere'){
            setDoctors(getDoctorsByProfession(searchParams.get('speciality') as string));
        }else if(searchParams.get('speciality')==''){
            setDoctors(getDoctorsByProfessionByLocation(searchParams.get('location') as string));
        }
        else{
            setDoctors(getDoctorsByProfessionAndLocation(searchParams.get('speciality') as string, searchParams.get('location') as string));
        }
    },[])
    return (
        <div className='search-list' data-testid='search-list'>
            

            {doctors.length>0 ?<span></span>: <h1>No Results Found</h1> }
            
            
            {doctors.map((doctor)=>{
                return (<div className='sr-main-section' data-testid='sr-main-section'>
                            <span></span>
                            <SearchItem doctor={doctor}/>
                            <span></span>
                        </div>
                        )

            })}
            

        </div>
    )
}

export default SearchSection
