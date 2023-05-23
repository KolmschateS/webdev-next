"use client"

import { useState, useEffect } from 'react'

import Image from "next/image";

import dynamic from 'next/dynamic'


const Map = dynamic(
    () => import('@/components/Map'), // replace '@components/map' with your component's location
    { 
    loading: () => <p>Loading...</p>,
    ssr: false // This line is important. It's what prevents server-side render
    }
)

export default function Game() {
    const maxPage = 2;
    const [mapLoaded, setMapLoaded] = useState<boolean>(false);

    const [longitude, setLongitude] = useState<number | null>(null);
    const [latitude, setLatitude] = useState<number | null>(null);

    const [timeWhite, setTimeWhite] = useState<string>("00:00:00");
    const [timeBlack, setTimeBlack] = useState<string>("00:00:00");
    const [incrementWhite, setIncrementWhite] = useState<string>("00:00:00");
    const [incrementBlack, setIncrementBlack] = useState<string>("00:00:00");

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
        });
    }, []);

    return (
        <main>
        <form className="p-5 flex-row">
            <h1 className='text-4xl font-bold text-white text-center'>New game</h1>
            <div>
                <h2 className='text-2xl font-bold text-white text-center m-3'>Location</h2>
                <Map height='30vh' />
            </div>
            
            <div>
                <h2 className='text-2xl font-bold text-white text-center m-3'>Time control</h2>
                <div className='flex'>
                    <div className="flex-1 text-white text-center m-3 pb-2">
                        <h3 className='flex-1 font-bold text-xl'>Black</h3>
                        <input className='bg-neutral-800 text-white p-2 m-1' type="time" step="1" onChange={(e) => setTimeBlack(e.target.value)} />
                        <div className=''>+</div>
                        <input className='bg-neutral-800 text-white p-2 m-1' type="time" step="1" onChange={(e) => setIncrementBlack(e.target.value)} />
                    </div>
                    <div className="flex-1 bg-white text-black text-center m-3 pb-2">
                        <h3 className='flex-1 font-bold text-xl'>White</h3>
                        <input className='bg-neutral-100 p-2 m-1' type="time" step="1" onChange={(e) => setTimeWhite(e.target.value)} />
                        <div className=''>+</div>
                        <input className='bg-neutral-100 p-2 m-1' type="time" step="1" onChange={(e) => setIncrementWhite(e.target.value)} />
                    </div>
                </div>
            </div>
            <div className=''>
                <button className=''>Create game</button>
            </div>
        </form>
    </main>
    )
}