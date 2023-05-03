import React from 'react'
import HowtoPlay from '../../public/images/howtoplay.png'
import Cards from '../../public/images/cardicon.png'
import Play from '../../public/images/playbutton.png'
import Image from 'next/image'
import Friends from '../../public/images/friendsicon.png'
import Syncrinity from '../../public/images/profilebutton.png'

export default function HomeNav() {
  return (
    <div style={{backgroundColor: '#4E9AD0'}} className="w-[100%] h-[200px] flex flex-row justify-between items-center px-10 pt-4">
        <div className="flex flex-row items-center gap-16">
            <div className="flex flex-col gap-2 cursor-pointer  hover:scale-105 ">
            <Image 
            src={HowtoPlay}
            className="h-[120px] w-[130px]"
            />
            <div className='text-white drop-shadow-dark text-center'>How to Play</div>
            </div>

            <div className="flex flex-col gap-4 cursor-pointer hover:scale-105">
            <Image src={Cards} className="h-[110px] w-[120px]"/>
            <div className='text-white drop-shadow-dark text-center'>Cards</div>
            </div>


        </div>

            <div className="flex flex-col gap-4 cursor-pointer hover:scale-105">
                <Image src={Play} className="h-[120px] w-[160px]" />
                <div className="text-white text-center drop-shadow-dark">Play</div>
            </div>

        
            <div className="flex flex-row items-center gap-16">
            <div className="flex flex-col gap-4 cursor-pointer hover:scale-105">
            <Image 
            src={Friends}
            className="h-[120px] w-[160px]"
            />
            <div className='text-white drop-shadow-dark text-center'>
                Friends
            </div>
            </div>

            <div className="flex flex-col gap-4 cursor-pointer hover:scale-105">
            <Image src={Syncrinity} className="h-[120px] w-[160px]" />
            <div className='text-white drop-shadow-dark text-center'>Synchrinity</div>
            </div>
        </div>

    </div>
  )
}
