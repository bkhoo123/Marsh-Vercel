import React, {useState, useEffect} from 'react'
import HomeNav from '<prefix>/components/HomeNav'
import { useRouter } from 'next/router'
import HowToPlay from '<prefix>/components/HowToPlay'
import CardList from '<prefix>/components/CardList'
import Lobby from '<prefix>/components/Lobby'
import Friends from '<prefix>/components/Friends'
import Profile from '<prefix>/components/Profile'

export default function Home() {
    const router = useRouter()
    const [activeSelection, setActiveSelection] = useState("Play")

    const selection = {
        "How to Play": <HowToPlay />,
        "Cards": <CardList />,
        "Play": <Lobby />,
        "Friends": <Friends />,
        "Profile": <Profile />
    }

    return (
      <div>
          <HomeNav active={setActiveSelection} />
          <div>
            {selection[activeSelection]}
          </div>

          <button onClick={() => router.push("/")} className="absolute bottom-10 right-10 bg-orange-600 p-3 rounded-md drop-shadow-dark text-white hover:bg-stone-400">
              Return to Front Page
          </button>
      </div>
    )
}
