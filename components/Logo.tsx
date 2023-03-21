import React from 'react'
import { AiFillApple, AiFillFacebook } from 'react-icons/ai';
import { FaGoogle, FaLinkedin } from 'react-icons/fa';
import { ClientSafeProvider, getProviders } from 'next-auth/react';


const Logo = (provider: ClientSafeProvider) => {
  if (provider.name === "LinkedIn") {
    return <><FaLinkedin /></>
  } else {
     return null // JS functions return undefined if nothing is returned explicitly.
  }
}


export default Logo

export async function getServerSideProps() {
  
    const providers = await getProviders();
  
    return {
      props: { providers: providers ?? [] },
    }
  }