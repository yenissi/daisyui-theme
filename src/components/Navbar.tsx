"use client";

import { ThemeContext } from '@/context/ThemeContext'
import Link from 'next/link'
import React, { useContext } from 'react'

const Navbar = () => {
        const {changeTheme} = useContext(ThemeContext);
    return (
        <div>
            <ul className='flex justify-between pt-5 items-center'>
                <div>
                    <Link href="/">
                        <li>Home</li>
                    </Link>
                </div>
                <div className='flex gap-5'>
                    <button className="btn" onClick={() => changeTheme("light")}>Light</button>
                    <button className="btn bg-gray-900 text-white" onClick={() => changeTheme("dark")}>Dark</button>
                    <button className="btn bg-yellow-500 text-black" onClick={() => changeTheme("retro")}>Retro</button>
                    <button className="btn bg-pink-400 text-white" onClick={() => changeTheme("valentine")}>Valentine</button>
                    <button className="btn bg-cyan-200 text-black" onClick={() => changeTheme("aqua")}>Aqua</button>
                    <button className="btn bg-slate-500 text-white" onClick={() => changeTheme("custom-theme")}>Default Theme</button>
                </div>
            </ul>
        </div>
    )
}

export default Navbar