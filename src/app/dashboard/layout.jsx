import React from 'react'

const layout=({children})=> {
  return (
    <div className='flex'>
   
    <div>
    <aside className="w-64 bg-gray-300 shadow-md p-4 hidden md:block h-screen">
          <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
          <nav className="space-y-2">
            <a href="/dashboard" className="block px-3 py-2 rounded hover:bg-gray-200">
              Ana Sayfa
            </a>
            <a href="/dashboard/yorumlar" className="block px-3 py-2 rounded hover:bg-gray-200">
              Yorumlar
            </a>
            <a href="/dashboard/profile" className="block px-3 py-2 rounded hover:bg-gray-200">
              Profile
            </a>
          </nav>
        </aside>
    </div>
    <div>{children}</div>

    
    </div>
  )
}

export default layout