import Image from 'next/image'
import { Inter } from 'next/font/google'
import AppHome from './Home/Home'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <AppHome />

    </>
  )
}
