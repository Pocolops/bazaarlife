import Image from 'next/image'
import Hero from '../app/components/Hero/hero';

export default function Home() {
  return (
    <main className="min-h-screen flex-col items-center justify-between pt-32">
      <div className="max-w-full flex flex-col">
      <Hero/>
      <h1>BazaarLifeeee</h1>
      <h2>hi</h2>
      <h3><b>"Discover, Shop, and Connect – Your Ultimate Ecommerce Experience with BazaarLife!"</b></h3>
      </div>
 
    </main>
  )
}
