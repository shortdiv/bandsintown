// 'use client';

import Image from 'next/image'
// import React, { useState, FormEvent } from 'react'
import { headers } from 'next/headers'

export default function Home() {
  // const [isLoading, setIsLoading] = useState<boolean>(false)
  // const [error, setError] = useState<string | null>(null)
  // const [name, setName] = useState<string | null>(null)

  const headersList = headers()
  const referer = headersList.get('referer')
  const connectionFrom = headersList.get('Fly-Region')

  // read headers
  const hskeys = []
  const hsvals = []
  for (const pair of headersList.entries()) {
    hskeys.push(pair[0])
    hsvals.push(pair[1])
  }

  // async function onSubmit(event: FormEvent<HTMLFormElement>) {
  //   event.preventDefault()
  //   setIsLoading(true)
  //   setError(null) // Clear previous errors when a new request starts
 
  //   try {
  //     const nameVal = (document.getElementById('name') as HTMLInputElement).value
  //     // post to supabase
  //     const response = await fetch('https://dvltiflrjdivpqmzxxxc.supabase.co/functions/v1/hello-world', {
  //       method: 'POST',
  //       body: JSON.stringify({
  //         name: nameVal
  //       }),
  //     })

  //     // const response = await fetch('/api/submit', {
  //     //   method: 'POST',
  //     //   body: formData,
  //     // })
 
  //     if (!response.ok) {
  //       throw new Error('Failed to submit the data. Please try again.')
  //     }
 
  //     // // Handle response if necessary
  //     const data = await response.json()
  //     console.log(data)
  //     setName(data.message)
  //     // ...
  //   } catch (error: any) {
  //     // Capture the error message to display to the user
  //     setError(error.message)
  //     console.error(error)
  //   } finally {
  //     setIsLoading(false)
  //   }
  // }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        {/* <form action="" onSubmit={onSubmit}>
          <label className="p-5" htmlFor="name">Name</label>
          <input type="text" id="name" className="text-black" placeholder="name" />
          <button type="submit" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
          Submit
          </button>
        </form> */}
        <div>Connecting from {connectionFrom}</div>
        <div>{ hskeys.map(k => <p key={k}>{k}</p>)}</div>
        <div>{ hsvals.map(v => <p key={v}>{v}</p>)}</div>
      </div>
    </main>
  )
}
