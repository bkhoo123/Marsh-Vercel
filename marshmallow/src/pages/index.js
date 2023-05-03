import Image from 'next/image'
import { Inter } from 'next/font/google'
import Logo from '../../public/images/logo.png'

const inter = Inter({ subsets: ['latin'] })

import React, {useState} from 'react'

export default function Home() {
  const router = useRouter()

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

    const post = await axios.post(`/api/NotionForm`, form)

    awaitsetForm({
      firstName: '',
      lastName: '',
      email: ''
    })

    if (post) alert("Successfully Submitted")
    
  }

  return (
    <div className="min-h-screen overflow-y-auto flex justify-center items-center p-12 sm:max-xl-px-10" style={{backgroundColor: "#4872B1"}}> 
      <main style={{backgroundColor:"#4872B1"}}>

        <div onClick={() => router.push('/home')} className="absolute top-5 right-5 text-white text-2xl bg-orange-600 flex p-2 rounded-md drop-shadow-dark cursor-pointer hover:bg-stone-500">Login</div>

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

          <div className="text-white text-4xl ">
            The marshmallow roasting card game
          </div>

          <div className="mt-20">
          <form onSubmit={handleSubmit} className="grid grid-cols-2 justify-center items-center mx-auto gap-5">
            <label className='col-span-1 flex gap-x-4 flex-col'>
              <input 
              className="border-2 border-black-400 p-2 rounded-md" 
              type="text" 
              placeholder='First Name'
              required
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
              onChange={handleChange}
              />
            </label>

            <button style={{backgroundColor: "#50BAF2"}} className=" col-span-2 text-white p-2 rounded-md ml-15 hover:bg-stone-400">Subscribe</button>

          </form>
          </div>

        </div>

       

      </main>
    </div>
  )
}
