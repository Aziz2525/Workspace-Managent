import React from 'react'
import Sidenav from '../components/Sidenav'

function Home() {
    return (
        <div className="flex">
            <Sidenav />
            <div
                className="flex
                flex-auto 
                    h-screen
                    px-8
                    py-8
                    bg-white
                    dark:bg-gray-800 dark:border-gray-600
                    "
            >Anasayfa</div>

        </div>
    )
}

export default Home