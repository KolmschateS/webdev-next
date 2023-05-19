"use server"

import { cookies } from 'next/headers';

export async function updateCookie()
  {
    // get visits
    const visitsCookie = cookies().get('visits')
      
    // set visits and return value
    if (visitsCookie == undefined)
    {
        // @ts-ignore
        cookies().set('visits', 0);
        return 0;
    }
    else{
        // @ts-ignore
        cookies().set('visits', Number(visitsCookie.value) + 1);
        return Number(visitsCookie.value) + 1;
    }
  }