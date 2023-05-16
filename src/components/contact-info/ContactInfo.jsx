import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './contactinfo.css'


export default function ContactInfo() {
    const API_URL = "https://random-data-api.com/api/v2/users";

    let {id} = useParams();

    const [info, setInfo] = useState();
    useEffect(() => {
        const url = API_URL + '?size=1';
        fetch(API_URL)
            .then(data => data.json())
            .then(data => setInfo(data));

    }, [])


    if (info) {
        return (
            <div className='container'>
                <p>{info.first_name}</p>
                  <img src = {info.avatar} />
                    <p>{info.gender}</p>
            </div>
        )
    } else {
        return <p>deta is being fetched</p>
    }
}