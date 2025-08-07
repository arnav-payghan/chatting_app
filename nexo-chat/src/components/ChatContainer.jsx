import React from 'react'
import assets from '../assets/allAssets/assets.js'

const ChatContainer = ({ selectedUser, setSelectedUser }) => {
  return selectedUser ? (
    <div className="h-full overflow-scroll relative background-blur-lg">
      <div className="flex items-center gap-3 py-3 mx-4 border-b border-stone-500">
        <img src={assets.profile_martin} alt="" className="w-8 rounded-full" />
        <div className="flex items-center gap-2 flex-1 text-white text-lg">
          <p>Martin Johnson</p>
          <span className="w-2 h-2 rounded-full bg-green-500"></span>
        </div>
        <img onClick={()=> setSelectedUser(null)} src="./images/back.svg" alt="" className="md:hidden max-w-7" />
        <img src="./images/help.svg" alt="" className="max-md:hidden max-w-5" />
      </div>
    </div>
  ) : (
    <div className="flex flex-col items-center justify-center gap-2 text-gray-500 bg-white/10 max-md:hidden">
      <img src="./images/logoIcon.svg" alt="" className="max-w-16" />
      <p className="text-lg font-medium text-white">Your everyday chatting application.</p>
    </div>
  )
}

export default ChatContainer
