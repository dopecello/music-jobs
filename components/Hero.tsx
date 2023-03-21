import Link from 'next/link'
import React from 'react'

const Hero = ({ heading, sessionState }: {heading: string, sessionState: string}) => {
    return (
        <div className='flex items-center justify-center h-screen min-h-[100vh] bg-fixed bg-center bg-cover custom-img'>
            {/* overlay */}
            <div className='absolute top-0 bottom-0 left-0 right-0 bg-slate-900/50' />
            <div className='text-white z-[2] p-8 mb-[5rem] border-spacing-1'>
                <h2 className='text-4xl mb-5'>{heading}</h2>
                <Link href='/access'>
                <button className='border p-2 text-sm buttons buttons:hover'>Get Early Access</button>
                </Link>
            </div>
            <div className='text-white z-[2]'>
            <span>{sessionState}</span>
            </div>
        </div>
    )
}

export default Hero