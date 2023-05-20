"use server"

import { cookies } from 'next/headers';

export async function updateCookie()
  {
    // get visits
    const visitsCookie = cookies().get('visits')
      
    // set visits and return value
    if (visitsCookie == undefined)
    {
      // set cookie with visits or 0, set with httpOnly and secure
        // @ts-ignore
        cookies().set('visits', 0,
        {
            httpOnly: true,
            secure: true,
            sameSite: 'strict'
        });
        return 0;
    }
    else{
        // @ts-ignore
        cookies().set('visits', Number(visitsCookie.value) + 1, 
        {
            httpOnly: true,
            secure: true,
            sameSite: 'strict'
        });
        return Number(visitsCookie.value) + 1;
    }
  }