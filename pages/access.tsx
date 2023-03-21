import { AiFillApple, AiFillFacebook } from 'react-icons/ai';
import { FaGoogle, FaLinkedin } from 'react-icons/fa';
import { FacebookAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from "../firebase.config"
import { signIn } from "next-auth/react"
// import { nanoid } from 'nanoid';

export default function Access() {
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();
    // const linkedInToken = {
    //     redirectURI: process.env.NEXT_PUBLIC_LINKEDIN_REDIRECT_URI,
    //     urlEncoded: process.env.NEXT_PUBLIC_LINKEDIN_URLENCODE,
    //     clientId: process.env.NEXT_PUBLIC_LINKEDIN_CLIENT_ID,
    //     clientSecret: process.env.NEXT_PUBLIC_LINKEDIN_CLIENT_SECRET,
    //     permissions: ["r_liteprofile", "r_emailaddress"].join("&20")
    // }
    // const stateVar = nanoid()

    const googleSignIn = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider)
            console.log(result.user)
        } catch (error) {
            console.log(error)
        }
    }


    const facebookSignIn = async () => {
        try {
            const result = await signInWithPopup(auth, facebookProvider)
            console.log(result.user)
        } catch (error) {
            console.log(error)
        }
    }

    const linkedInSignIn = async () => {
        await signIn()
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
            <div className='inputBox'>
                <input type="password" placeholder=' ' />
                <span>Confirm Password</span>
            </div>
            {/* Login button */}
            <button className='border px-2 py-1 buttons buttons:hover max-w-[140px] fle text-center rounded-lg justify-between items-center p-4 text-white w-full z-10 ease-in duration-100'>
                Sign Up
            </button>
            <div className="text-center border-t-2 border-white w-[333px] z-10"></div>
            <div className="z-10">
                <button onClick={facebookSignIn} className="bg-blue-500 border-white border text-white font-bold py-2 pl-[20%] w-[333px] rounded inline-flex items-center">
                    <AiFillFacebook />
                    <span className='ml-2'>Sign up with Facebook</span>
                </button>
            </div>
            <div className="z-10">
                <button onClick={googleSignIn} className="bg-orange-500 border-white border text-white font-bold py-2 pl-[23%] w-[333px] rounded inline-flex items-center">
                    <FaGoogle />
                    <span className='ml-2'>Sign up with Google</span>
                </button>
            </div>
            <div className=" z-10">
                <button className="bg-black border-white border text-white font-bold py-2 pl-[24.5%] w-[333px] rounded inline-flex items-center">
                    <AiFillApple />
                    <span className='ml-2'>Sign up with Apple</span>
                </button>
            </div>
            <div className=" z-10">

                <button className="border-white border bg-blue-800 text-white font-bold py-2 pl-[21.5%] w-[333px] rounded inline-flex items-center" onClick={linkedInSignIn}>
                    <FaLinkedin />
                    <span className='ml-2'>Sign up with LinkedIn</span>
                </button>

            </div>
        </div>

    )
}
