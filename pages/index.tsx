import { useSession } from "next-auth/react";
import Hero from "../components/Hero";

export default function Home() {
  const { data: session } = useSession()
  if (session) {
    return <>
      <Hero heading="Be part of a new trend in classical music."/>
    </>
  }
  return <>
    <Hero heading="Be part of a new trend in classical music."/>
  </>
}
