import { cookies } from 'next/headers';

export async function POST(request: Request) {
    // update the visits cookie by 1
    const cookieStore = cookies();

    const visits: number = parseInt(cookieStore.get('visits')?.value || "0");

    return new Response('Hello, Next.js!', {
        status: 200,
        headers: { 'Set-Cookie': `visits=${visits + 1}` },
      });
}