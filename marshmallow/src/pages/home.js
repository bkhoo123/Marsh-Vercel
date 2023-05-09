import React, {useState, useEffect} from 'react'
import HomeNav from '<prefix>/components/HomeNav'
import { useRouter } from 'next/router'
import HowToPlay from '<prefix>/components/HowToPlay'
import CardList from '<prefix>/components/CardList'
import Lobby from '<prefix>/components/Lobby'
import Friends from '<prefix>/components/Friends'
import Profile from '<prefix>/components/Profile'
import axios from 'axios'
import { useUser } from '@auth0/nextjs-auth0/client';


export default function Home() {
    const { user, error, isLoading } = useUser();
    const router = useRouter()
    const [activeSelection, setActiveSelection] = useState("Play")
    const [users, setUsers] = useState([])

    const selection = {
        "How to Play": <HowToPlay />,
        "Cards": <CardList />,
        "Play": <Lobby />,
        "Friends": <Friends />,
        "Profile": <Profile />
    }

    useEffect(() => {
      if (user) {
        const checkAndCreateUser = async () => {
          try {
            const { data } = await axios.get(`/api/user?email=${user?.email}`);
            // console.log(data)
  
            if (!data.length) {
              const payload = {
                email: user?.email,
                name: user?.name,
                profile_icon: 0,
              };
              await axios.post(`/api/user`, payload);
            }
          } catch (error) {
            console.error('Error checking or creating user:', error);
          }
        };
        checkAndCreateUser();
      }
    }, [user]);

    useEffect(() => {
      const fetchUsers = async () => {
        try {
          const response = await axios.get('/api/AllUsers')
          console.log(response, 'response')
          setUsers(response.data)
        } catch (error) {
          console.error('Error fetching users:', error)
        }
      }
  
      fetchUsers()
    }, [])

    console.log(users)
    
    

    return (
      <div>
          <HomeNav active={setActiveSelection} />
          <div>
            {selection[activeSelection]}
          </div>

          <a className="absolute bottom-20 right-20 mb-5 bg-orange-600 p-3 rounded-md drop-shadow-dark text-white hover:bg-stone-400" href="/api/auth/logout">Logout</a>
          <button onClick={() => router.push("/")} className="absolute bottom-10 right-10 bg-orange-600 p-3 rounded-md drop-shadow-dark text-white hover:bg-stone-400">
              Return to Front Page
          </button>
      </div>
    )
}
