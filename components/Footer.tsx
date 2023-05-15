"use client"

import Image from 'next/image'

import { useState } from 'react'
import GDPR from './GDPR';
import Link from 'next/link';

export default function Footer() {
    return (
        < footer>
            <div className='flex flex-col items-center p-24'>
                <Image src="/otb.svg" alt="Over the board" width={64} height={64}  />
                <h1 className='text-center text-2xl font-bold'>Over the board</h1>
                < Link href="privacy ">Privacy</Link>
                <Image className='blur-md' src="/otb-footer.svg" alt="Over the board" width={1000} height={1000}  />
            </div>
        </footer>
    )
  }