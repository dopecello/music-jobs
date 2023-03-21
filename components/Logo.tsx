import React from 'react'
import { AiFillFacebook } from 'react-icons/ai';
import { FaGoogle, FaLinkedin } from 'react-icons/fa';
import { ClientSafeProvider, getProviders } from 'next-auth/react';


const Logo = (provider: ClientSafeProvider) => {
  if (provider.name === "LinkedIn") {
    return <><FaLinkedin /></>
  } else if (provider.name === "Google"){
    return <><FaGoogle /></>
  } else if (provider.name === "Facebook"){
    return <><AiFillFacebook /></>
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