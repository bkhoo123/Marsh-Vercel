import Image from 'next/image'
import { Inter } from 'next/font/google'
import Logo from '../../public/images/logo.png'
import Smoke from '../../public/images/smoke.png'
import { useRouter } from 'next/router'
const inter = Inter({ subsets: ['latin'] })
import React, {useState} from 'react'
import axios from 'axios'
import { useUser } from '@auth0/nextjs-auth0/client';


export default function Home() {
  const router = useRouter()
  const {user, error, isLoading} = useUser()

  if (user) router.push("/home")

  const [modal, setModal] = useState(false)

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault()

    axios.post(`/api/NotionForm`, form)
    .then((response) => {
      if (response) {
        setModal(true)
        setForm({
          firstName: '',
          lastName: '',
          email: ''
        })
      }
    })
    .catch((error) => {
      console.error("Error Submitting Form:", error)
    })
    
  }

  return (
    <div className="min-h-screen overflow-y-auto flex justify-center items-center p-12 " style={{backgroundColor: "#4872B1"}}> 
      <main style={{backgroundColor:"#4872B1"}}>

        <div className="absolute top-5 right-5 text-white text-2xl bg-orange-600 flex p-2 rounded-md drop-shadow-dark cursor-pointer hover:bg-stone-500"><a href="/api/auth/login">Login</a></div>

        <div className="my-15 flex justify-items-center flex-col items-center">
          <div>
          <Image
          src={Logo}
          height={400}
          width={818}
          
          />
          </div>

          <div className="game-title">
            Marshmallow Party
          </div>

          <div className="text-white text-4xl text-center min-[300px]:max-lg:text-2xl  ">
            The marshmallow roasting card game
          </div>

          <div className={modal ? "absolute z-1 left-[40%] top-[40%] bg-white p-6 h-auto w-[20%] text-center rounded-md min-[270px]:max-lg:w-auto min-[270px]:max-lg:left-[5%] min-[270px]:max-lg:mr-5" : 'hidden'}>
              You have successfully subscribed!
              <div className="border-t-2 mt-8 text-center">
                  <button onClick={() => setModal(false)} className="mt-4 p-2 bg-cyan-500 text-white rounded-md">Close</button>
              </div>
          </div>

          <div className="mt-12">
          <form onSubmit={handleSubmit} className="grid grid-cols-2 justify-center items-center mx-auto gap-5">
            <label className='col-span-1 flex gap-x-4 flex-col'>
              <input 
              className="border-2 border-black-400 p-2 rounded-md" 
              type="text" 
              placeholder='First Name'
              required
              value={form.firstName}
              name="firstName"
              onChange={handleChange}
              />
            
            </label>

            <label className="col-span-1 flex flex-col gap-x-4">
              
              <input 
              className="border-2 border-black-400 p-2 rounded-md" 
              type="text" 
              placeholder="Last Name"
              name="lastName"
              value={form.lastName}
              required
              onChange={handleChange}
              />
            
            </label>

            <label className="col-span-2">
              <input 
              className="border-2 border-black-400 p-2 rounded-md w-full" 
              type="email" 
              placeholder="Email Address"
              required
              name="email"
              value={form.email}
              onChange={handleChange}
              />
            </label>

            <button type="submit" className="col-span-2 text-white p-2 rounded-md ml-15 bg-cyan-500 hover:bg-stone-400 drop-shadow-dark">Subscribe</button>

          </form>
          </div>

        </div>

      </main>
    </div>
  )
}
