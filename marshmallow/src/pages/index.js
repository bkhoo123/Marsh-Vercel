import Image from 'next/image'
import { Inter } from 'next/font/google'
import Logo from '../../public/images/logo.png'
import axios from 'axios'

const inter = Inter({ subsets: ['latin'] })

import React, {useState} from 'react'

export default function Home() {
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

    await setForm({
      firstName: '',
      lastName: '',
      email: ''
    })

    if (post) alert("Successfully Submitted")
    
  }

  return (
    <div style={{backgroundColor: "#4872B1"}} className="min-h-screen overflow-y-auto flex justify-center items-center p-4 sm:p-12">
      <main>
        <div className="flex flex-col items-center">
          <div className="w-1/2 sm:w-[80%]">
            <Image src={Logo} height={200} width={409} />
          </div>

          <div className="game-title">Marshmallow Party</div>

          <div className="text-white text-xl sm:text-4xl">
            The marshmallow roasting card game
          </div>

          <div className="mt-10 md:mt-20 w-full max-w-md sm:w-[80%]">
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 gap-5"
            >
              <label className="flex flex-col gap-y-2">
                <input
                  className="border-2 border-black-400 p-2 rounded-md"
                  type="text"
                  placeholder="First Name"
                  required
                  name="firstName"
                  onChange={handleChange}
                />
              </label>

              <label className="flex flex-col gap-y-2">
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

              <button
                type="submit"
                className="col-span-2 text-white p-2 rounded-md mt-4 md:mt-0 bg-cyan-500 hover:bg-stone-400 w-full"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}