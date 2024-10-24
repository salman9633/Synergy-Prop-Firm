'use client'

import Image from 'next/image'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
// import logo from '@/./assets/synergy-logo.png'
import synLogo from '@/./assets/SYNERGY.svg'
import { motion } from 'framer-motion'
import { ChangeEvent, useEffect, useState } from 'react'
import { checkDisableCookie, GoogleSpreadSheet, joinWaitList } from '@/lib/actions/googleSpreadSheet.actions'
import { Toaster, toast } from 'sonner'
import { CheckIcon, LucideLoaderCircle, PlusIcon } from 'lucide-react'
// import { cookies } from 'next/headers'
import { z } from 'zod';
import { userSchema } from '@/lib/utils'

export function LandingPageComponent() {
  const [textToShow, setTextToShow] = useState('') // State for typed text
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isDisabled, setIsDisabled] = useState(false)
  const [loading, setLoading] = useState(false);


  async function validateUserInput(data: GoogleSpreadSheet) {
    try {
      // Parse will throw an error if validation fails
      userSchema.parse(data);
      return { success: true, errors: null };
    } catch (err: any) {
      // Return the validation errors
      return { success: false, errors: err.errors[0].message };
    }
  }

  const joinTheWaitlist = async () => {
    try {
      const validationResult = await validateUserInput({ name, email });
      if (!validationResult.success) {
        toast.error(`${validationResult.errors}`)
        return
      }
      setLoading(true);
      await joinWaitList({ name, email })
      setEmail('');
      setName('');
      setLoading(false);
      setIsDisabled(true);
      toast.success(`${name} Added to Waitlist`)  // Disable inputs and button after the function is called
    } catch (error) {
      toast.error(`${error}`)
    }
  }

  // Text to display in the <p> tag (animated)
  const fullText = `   At Synergy, we provide futures traders with the tools and support they need to trade smarter and grow stronger.Be a part of the movement!`

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

  const validateName = (name: string) => {
    if (name.length < 3) {
      setNameError('Name must be at least 3 characters long.');
      return false;
    } else {
      setNameError('');
      return true;
    }
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address.');
      return false;
    } else {
      setEmailError('');
      return true;
    }
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setName(value);
    validateName(value);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    validateEmail(value);
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white relative">
      <div className="z-10 w-full max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8 text-center">
        <Image
          src={synLogo}
          alt="Logo"
          width={400}
          height={400}
          className="mx-auto"
        />
        {/* <p>aldkfna</p> */}
        {/* <div className="glassmorphism inline-block text-gray-400 text-2xl font-bold px-10 py-2  rounded">
          STAY TUNED
        </div> */}
        <div className='glitter-text text-4xl sm:text-5xl md:text-6xl font-bold leading-tight'>
          <h1 className='mb-10 !text-4xl'>
            STAY TUNED
          </h1>
          <h1 >
            {/* Start You Trading Career With Synegy! */}
            Ebark Your Futures Trading With Syneggy!
          </h1>
        </div>
        <motion.p
          // className="text-sm mt-2"
          // Optional: You can add initial, animate props for fade-in
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ type: "spring", mass: 0.5 }}

          className="text-xl sm:text-2xl">
          {/* At Synergy, we provide  <span className="text-[#d73cbe]">futures traders with the tools and support</span> they need to trade smarter and grow stronger. Be a part of the movement! */}
          {textToShow}
        </motion.p>


        <div className="flex flex-col sm:flex-row gap-4">
          {/* Name Input */}
          <div className="flex flex-col w-full">
            <Input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => handleNameChange(e)}
              className={`bg-gray-800 rounded-xl border-gray-700 h-10 w-full sm:w-auto ${nameError ? 'border-red-500' : ''
                }`}
              disabled={isDisabled}
            />
            {nameError && <p className="text-red-500 text-sm mt-1">{nameError}</p>}
          </div>

          {/* Email Input */}
          <div className="flex flex-col w-full ">
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => handleEmailChange(e)}
              className={`bg-gray-800 rounded-xl border-gray-700 h-10 w-full sm:w-auto ${emailError ? 'border-red-500' : ''
                }`}
              disabled={isDisabled}
            />
            {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
          </div>

          {/* Toaster for notifications */}
          <Toaster richColors />

          {/* Button */}
          <Button
            className="glassmorphism-comingsoon bg-cyan-400 hover:bg-c text-white h-10 w-full sm:w-auto rounded-full"
            onClick={joinTheWaitlist}
            disabled={isDisabled || loading}  // Disable button when loading or already added
          >
            {loading ? (
              <LucideLoaderCircle className="animate-spin" />  // Show loader while loading
            ) : isDisabled ? (
              <>
                Added To Waitlist <CheckIcon />
              </>
            ) : (
              <>
                Join the waitlist <PlusIcon />
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  )
}