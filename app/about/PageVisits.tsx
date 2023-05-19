"use client"

import { useEffect, useState } from 'react';

import { updateCookie } from './actions';

// TODO research of optimistc UI updates can be used here
export default function Visits()
{
    const [visits, setVisits] = useState(0);

    useEffect(() => {
        setVisits(updateCookie());
    }, [])

    return (
        <div className='flex flex-col items-center bg-white mt-6 p-6 text-black'>
            <div>
                <p>You visited this page <span className='text-xl font-bold text-center'>{visits}</span> times</p>
            </div>
        </div>
        )
}