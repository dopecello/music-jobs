import type { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { ClientSafeProvider, getProviders, signIn } from "next-auth/react"
import { getServerSession } from "next-auth/next"
import { authOptions } from "../api/auth/[...nextauth]";
import { OAuthProviderType } from "next-auth/providers";
import Logo from "../../components/Logo";

export default function SignIn({ providers }: InferGetServerSidePropsType<typeof getServerSideProps>) {

  const defaultBtnStyles: string[] = ['border-white', 'border', 'text-white', 'font-bold', 'py-2', 'w-[333px]', 'rounded', 'inline-flex', 'items-center']

  const providerStyles = {
    linkedIn: {
      className: ['bg-blue-800', 'pl-[21.5%]']
    },
    facebook: {
      className: ['bg-blue-500', 'pl-[20%]']
    },
    google: {
      className: ['bg-orange-500', 'pl-[23%]']
    },
  }

  const assignStyles = (providers: ClientSafeProvider) => {
    if (providers.name === "LinkedIn") {
      return providerStyles.linkedIn.className.join(" ")
    } else if (providers.name === "Google") {
      return providerStyles.google.className.join(" ")
    } else if (providers.name === "Facebook") {
      return providerStyles.facebook.className.join(" ")
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
      <div className='inputBox'>
        <input type="password" placeholder=' ' />
        <span>Confirm Password</span>
      </div>
      {/* Login button */}
      <button className='border px-2 py-1 buttons buttons:hover max-w-[140px] fle text-center rounded-lg justify-between items-center p-4 text-white w-full z-10 ease-in duration-100'>
        Sign Up
      </button>
      <div className="text-center border-t-2 border-white w-[333px] z-10"></div>
      {Object.values(providers).map((provider) => (
        <div key={provider.name} className='z-10'>
          <button onClick={() => signIn(provider.id)}
            className={`${assignStyles(provider)} ` + defaultBtnStyles.join(" ")}>
            <Logo id={`${provider.id}`} name={`${provider.name}`} type={`${provider.type}`} signinUrl={`${provider.signinUrl}`} callbackUrl={`${provider.callbackUrl}`} />
            <span className='ml-2'>Sign in with {provider.name}</span>
          </button>
        </div>
      ))}
    </div>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions);

  // If the user is already logged in, redirect.
  // Note: Make sure not to redirect to the same page
  if (session) {
    return { redirect: { destination: "/" } };
  }

  const providers = await getProviders();

  return {
    props: { providers: providers ?? [] },
  }
}