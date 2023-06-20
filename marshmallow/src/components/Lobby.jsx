import React from 'react'

const Lobby = () => {
  return (
    <div className="p-10 flex justify-center mt-16">
      <div className="border-2 border-black h-auto w-[790px] flex flex-col justify-center items-center gap-8 py-8 rounded-md">
        <button className="bg-stone-200 p-2 text-2xl rounded-md px-12 hover:bg-[#4E9AD0] drop-shadow-dark hover:text-white">Quick Play</button>
        <button className="bg-stone-200 p-2 text-2xl rounded-md px-9 hover:bg-[#4E9AD0] drop-shadow-dark hover:text-white">Create Room</button>
        <button className="bg-stone-200 p-2 text-2xl rounded-md px-12 hover:bg-[#4E9AD0] drop-shadow-dark hover:text-white">Find Room</button>
      </div>
    </div>
  )
}

export default Lobby