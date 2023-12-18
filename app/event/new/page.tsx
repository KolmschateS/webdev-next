'use client'
import { useState } from 'react'
import Map from '@/components/Maps/dynamic/Map';

let activeButton = "m-3 bg-white text-black font-bold p-2"
let deActivateButton = "m-3 bg-neutral-400 text-black font-bold p-2"

export default function Event() {
    const [time, setTime] = useState(0)
    const [increment, setIncrement] = useState(0)
    const [privateGame, setPrivateGame] = useState(false)

    const [position, setPosition] = useState([0,0])
    const [promptAccepted, setPromptAccepted] = useState(false)

    const [pick, setPick] = useState(true)

    function handleCurrentButton()
    {
        setPosition([0,0])
        setPick(false)
    }

    function handleMapButton()
    {
        setPick(true)
    }

    function handleForm()
    {
        if(time == 0 || increment == 0)
        {
            ("Please fill in all fields")
            return
        }
    }

    return (
        <main className="flex min-h-screen flex-col items-center">
            {/* Brand text with a short subscription of the app */}
            <div className='mb-3 items-center'>
                <h2 className='text-2xl font-bold m-5 text-center'>Create event</h2>
            </div>
            <div className='flex'>
                <button className={!pick ? activeButton : deActivateButton} onClick={handleCurrentButton}>Current</button>
                <button className={pick ? activeButton : deActivateButton} onClick={handleMapButton}>Pick on map</button>
            </div>
            < Map pick={pick} position={position} setPosition={setPosition} promptAccepted={promptAccepted} setPromptAccepted={setPromptAccepted}/>
            {!promptAccepted ? <p className='text-center text-red-500'>Allow location to use current location</p> : null}
            <div className='text-center m-3'>
                <form action={handleForm}>
                <div className='bg-white text-black'>
                 <h1 className='text-2xl font-bold p-3'>Time control</h1>
                    <div className='p-3'>
                        <h2 className='font-bold'>Time</h2>
                        <div className='flex'>
                            <input className="bg-neutral-100 p-2" type="number" min="0" pattern="[0-9]*" value={time} onChange={(e) => setTime(parseInt(e.target.value))}></input>
                            <p className='text-black p-2'>minutes</p>
                        </div>
                    </div>
                    <div className='p-3'>
                        <h2 className='font-bold'>Increment</h2>
                        <div className='flex'>
                            <input className="bg-neutral-100 p-2" type="number" min="0" pattern="[0-9]*" value={increment} onChange={(e) => setIncrement(parseInt(e.target.value))}></input>
                            <p className='text-black p-2'>seconds</p>
                        </div>
                    </div>
                    <div className='p-3'>
                        <h2 className='font-bold'>Private</h2>
                        <div className='flex'>
                            <input type='checkbox' onChange={(e) => setPrivateGame(!privateGame)}></input>
                            <p className='text-black p-2'>private game</p>
                        </div>
                    </div>
                </div>
                <button className='m-3 bg-white text-black font-bold p-2'>Create event</button>
                </form>
            </div>
        </main>
    )
}