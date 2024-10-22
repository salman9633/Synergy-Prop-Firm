'use client'

import Image from 'next/image'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import logo from '@/./assets/synergy-logo.png'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { checkDisableCookie, joinWaitList } from '@/lib/actions/googleSpreadSheet.actions'
import { Toaster, toast } from 'sonner'
// import { cookies } from 'next/headers'


export function LandingPageComponent() {
  const [textToShow, setTextToShow] = useState('') // State for typed text
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isDisabled, setIsDisabled] = useState(false)

  const joinTheWaitlist = async () => {
    try {
      await joinWaitList({ name, email })
      setEmail('');
      setName('');
      setIsDisabled(true);
      toast.success(`${name} Added to Waitlist`)  // Disable inputs and button after the function is called
    } catch (error) {
      console.error('Error joining the waitlist:', error);
    }
  }

  // Text to display in the <p> tag (animated)
  const fullText =
    `  At Synergy, we provide futures traders with the tools and support they need to trade smarter and grow stronger.Be a part of the movement!`

  // Typing effect logic
  useEffect(() => {
    let index = 0

    const typingInterval = setInterval(() => {

      setTextToShow((prev) => prev + fullText[index])
      index++
      if (index === fullText.length - 1) {
        clearInterval(typingInterval) // Stop when the text is fully typed
      }
    }, 70) // Adjust speed here (50ms for each character)

    return () => clearInterval(typingInterval)
  }, [fullText])

  useEffect(() => {
    async function cookieCheck() {
      let res = await checkDisableCookie()
      console.log(res)
      if (res) setIsDisabled(true);

    }

    cookieCheck()
  }, [name, email])
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white relative">
      <div className="z-10 w-full max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8 text-center">
        <Image
          src={logo}
          alt="Logo"
          width={200}
          height={200}
          className="mx-auto"
        />
        {/* <p>aldkfna</p> */}
        <div className="inline-block bg-[#d73cbe]  text-black text-lg font-semibold px-5 py-2 rounded">
          COMING SOON
        </div>
        <h1 className="glitter-text text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
          Start You Trading Career With Synegy!
        </h1>
        <motion.p
          // className="text-sm mt-2"
          // Optional: You can add initial, animate props for fade-in
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-xl sm:text-2xl">
          {/* At Synergy, we provide  <span className="text-[#d73cbe]">futures traders with the tools and support</span> they need to trade smarter and grow stronger. Be a part of the movement! */}
          {textToShow}
        </motion.p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className="bg-gray-800 rounded-xl border-gray-700" disabled={isDisabled} />
          <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="bg-gray-800 rounded-xl border-gray-700" disabled={isDisabled} />
          {/* <select
            className="bg-gray-800 rounded-xl border-gray-700 text-white px-4 py-2 focus:outline-none"
            defaultValue=""
          >
            <option value="" disabled>
              Select your role
            </option>
            <option value="sponsor">Be a Sponsor</option>
            <option value="partner">Be a Partner</option>
            <option value="member">Be a Member</option>
          </select> */}
           <Toaster richColors/>
          <Button className=" bg-cyan-400 hover:bg-cyan-600 text-black  rounded-full" onClick={joinTheWaitlist} disabled={isDisabled}>
            Join the waitlist
          </Button>
        </div>

      </div>
    </div>
  )
}