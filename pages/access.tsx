import Link from 'next/link';
import { AiFillApple, AiFillFacebook } from 'react-icons/ai';
import { FaGoogle, FaLinkedin } from 'react-icons/fa';
import { FacebookAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase/clientApp';
// import SignUp from '../components/SignUp';
// import { db } from '../firebase/clientApp';
// import { useState } from 'react';
// import { addDoc, collection } from 'firebase/firestore';

export default function Access() {

    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    const googleSignIn = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider)
            console.log(result.user)
        } catch (error) {
            console.log(error)
        }
    }

    //Sign in with Facebook
    const facebookSignIn = async () => {
        try {
            const result = await signInWithPopup(auth, facebookProvider)
            console.log(result.user)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='flex items-center justify-center h-screen min-h-[100vh] flex-col gap-[30px] bg-fixed bg-center bg-cover custom-img'>
            <div className='absolute top-0 bottom-0 left-0 right-0 bg-slate-900/50' />
            <div className='inputBox'>
                <input type="text" placeholder=' ' />
                <span>Email</span>
            </div>
            <div className='inputBox'>
                <input type="password" placeholder=' ' />
                <span>Password</span>
            </div>
            <div className="flex justify-between space-x-10 text-white z-10">
                <div>
                    <input type="checkbox" />
                    <label className="pl-2">Keep me signed in</label>
                </div>
                <div className='underline underline-offset-[6px]'>
                    <Link href={''}>Forgot Password?</Link>
                </div>
            </div>
            {/* Login button */}
            <button className='border px-2 py-1 buttons buttons:hover max-w-[140px] fle text-center rounded-lg justify-between items-center p-4 text-white w-full z-10 ease-in duration-100'>
                Log in
            </button>
            <div className="text-center border-t-2 border-white w-[333px] z-10"></div>
            <div className="z-10">
                <button onClick={facebookSignIn} className="bg-blue-500 border-white border text-white font-bold py-2 pl-[22%] w-[333px] rounded inline-flex items-center">
                    <AiFillFacebook />
                    <span className='ml-2'>Log in with Facebook</span>
                </button>
            </div>
            <div className="z-10">
                <button onClick={googleSignIn} className="bg-orange-500 border-white border text-white font-bold py-2 pl-[25%] w-[333px] rounded inline-flex items-center">
                    <FaGoogle />
                    <span className='ml-2'>Log in with Google</span>
                </button>
            </div>
            <div className=" z-10">
                <button className="bg-black border-white border text-white font-bold py-2 pl-[26%] w-[333px] rounded inline-flex items-center">
                    <AiFillApple />
                    <span className='ml-2'>Log in with Apple</span>
                </button>
            </div>
            <div className=" z-10">
                <button className="bg-black border-white border text-white font-bold py-2 pl-[26%] w-[333px] rounded inline-flex items-center">
                    <FaLinkedin />
                    <span className='ml-2'>Log in with LinkedIn</span>
                </button>
            </div>
            <div className="z-10">
                <p className="text-center text-white">
                    Don&apos;t have an account? <span className='underline underline-offset-[6px]'><Link href="">Sign Up</Link></span>
                </p>
            </div>
        </div>

    )
}