import { signIn } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

const Hero = ({ heading }: { heading: string }) => {
    const providerSignIn = () => {
        signIn();
    }
    return (
        <div className='flex items-center justify-center h-screen min-h-[100vh] bg-fixed bg-center bg-cover custom-img'>
            {/* overlay */}
            <div className='absolute top-0 bottom-0 left-0 right-0 bg-slate-900/50' />
            <div className='text-white z-[2] p-8 mb-[5rem] border-spacing-1'>
                <h2 className='text-4xl mb-5'>{heading}</h2>
                <button className='border p-2 text-sm buttons buttons:hover' onClick={providerSignIn}>Get Early Access</button>
            </div>
            <div className='text-white z-[2]'>
            </div>
        </div>
    )
}

export default Hero