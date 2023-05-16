"use client"

import { useState, useEffect } from 'react'

import Cookies from 'js-cookie'

export default function PageVisits() {
  const [pageVisits, setPageVisits] = useState(0)

  useEffect(() => {
    // get page visits from cookie
    const pageVisitsCookie = Cookies.get('visits')
    if (pageVisitsCookie) {
      setPageVisits(parseInt(pageVisitsCookie))
    }

    postPageVisits()
  }, [])
  
  async function postPageVisits() {
    // api post request to about/api
    const res = await fetch('/about/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ pageVisits: pageVisits })
    })
  }

  return (
    <div className='flex flex-col items-center mt-6 p-6'>
      <p>You visited this page {pageVisits} times</p>
    </div>
  )
}