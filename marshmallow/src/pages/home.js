import React, {useState, useEffect} from 'react'
import HomeNav from '<prefix>/components/HomeNav'
import { useRouter } from 'next/router'

export default function Home() {
    const router = useRouter()


    return (
      <div>
          <HomeNav />

          <button onClick={() => router.push("/")} className="absolute bottom-10 right-10 bg-orange-600 p-3 rounded-md drop-shadow-dark text-white hover:bg-stone-400">
              Return to Front Page
          </button>
      </div>
    )
}
