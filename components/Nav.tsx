import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { signOut, useSession } from 'next-auth/react'

const Nav = () => {
    const { data: session } = useSession()
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }
    if (session) {
        return (
            <div className='fixed left-0 top-0 w-full z-10 ease-in duration-100'>
                <div className='max-w-[1240px] flex justify-between items-center p-4 text-white'>
                    <div className='mr-10 flex justify-between items-center'>
                        <Link href='/'>
                            <Image
                                src='/opus-text-white.png'
                                alt='Logo'
                                width={200}
                                height={200}>
                            </Image>
                        </Link>
                        <ul className='hidden sm:flex right-[2%] absolute'>
                            <li>
                                <Link href='/about'>
                                    <button className='border px-2 py-1 mr-2 buttons buttons:hover'>
                                        About
                                    </button>
                                </Link>
                            </li>
                            <li>
                                <button className='border px-2 py-1 buttons buttons:hover' onClick={() => signOut()}>
                                    Sign Out
                                </button>
                            </li>
                        </ul>
                    </div>
                    {/* Mobile Button */}
                    <div className='block sm:hidden z-10'>
                        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                    </div>
                    {/* Mobile Menu */}
                    <div className={
                        nav ?
                            'sm:hidden absolute top-0 bottom-0 right-0 left-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
                            :
                            'sm:hidden absolute top-0 bottom-0 right-0 left-[-100%] flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
                    }>
                        <ul>
                            <li className='text-4xl hover:text-gray-500'>
                                <Link href='/about'>
                                    About
                                </Link>
                            </li>
                            <li>
                                <button className='text-4xl hover:text-gray-500' onClick={() => signOut()}>
                                    Sign Out
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className='fixed left-0 top-0 w-full z-10 ease-in duration-100'>
                <div className='max-w-[1240px] flex justify-between items-center p-4 text-white'>
                    <div className='mr-10 flex justify-between items-center'>
                        <Link href='/'>
                            <Image
                                src='/opus-text-white.png'
                                alt='Logo'
                                width={200}
                                height={200}>
                            </Image>
                        </Link>
                        <ul className='hidden sm:flex right-[2%] absolute'>
                            <li>
                                <Link href='/about'>
                                    <button className='border px-2 py-1 buttons buttons:hover'>
                                        About
                                    </button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    {/* Mobile Button */}
                    <div className='block sm:hidden z-10'>
                        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                    </div>
                    {/* Mobile Menu */}
                    <div className={
                        nav ?
                            'sm:hidden absolute top-0 bottom-0 right-0 left-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
                            :
                            'sm:hidden absolute top-0 bottom-0 right-0 left-[-100%] flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
                    }>
                        <ul>
                            <li className='text-4xl hover:text-gray-500'>
                                <Link href='/about'>
                                    About
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )

    }
}

export default Nav
