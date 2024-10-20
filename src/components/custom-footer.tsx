'use client'

// import { Instagram } from 'lucide-react'
import {FaDiscord, FaFacebook, FaInstagram, FaTelegram, FaTwitter, FaWhatsapp} from 'react-icons/fa'
import Image from 'next/image'
import Link from 'next/link'
import logo from '@/./assets/synergy-logo.png'
import { BsWhatsapp } from 'react-icons/bs'

export function CustomFooter() {
  const socialLinks = [
    {
      icon: <FaInstagram className="w-6 h-6" />,
      link: 'https://www.instagram.com/synergyincorp/',
      title: 'Instagram'
    },
    {
      icon: <FaTwitter className="w-6 h-6" />,
      link: 'https://x.com/synergyincorp?t=-RF_7JqCqdZCVeq8PubxeA&s=08',
      title: 'Twitter'
    },
    {
      icon: <FaFacebook className="w-6 h-6" />,
      link: 'https://www.facebook.com/profile.php?id=61567126779098&is_tour_completed',
      title: 'Facebook'
    },
    {
      icon: <BsWhatsapp className="w-6 h-6" />,
      link: 'https://wa.me/+918078340665',
      title: 'Whatsapp'
    },
    {
      icon: <FaTelegram  className="w-6 h-6" />,
      link: 'https://t.me/synergyincorporation',
      title: 'Telegram'
    },
    {
      icon: <FaDiscord  className="w-6 h-6" />,
      link: 'https://discord.gg/AVGJxxqQ',
      title: 'Discord'
    },
  ]
  return (
    <footer className="w-full bg-white shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-6">
          <div className="flex-grow h-px bg-gray-300 max-w-full"></div>
          {
            socialLinks.map((item, index) => (
              <Link key={index} href={item.link} className="mx-4 text-gray-400 hover:text-gray-600 hover:scale-125 transition-transform duration-300 ease-out">
                {item.icon}
                <span className="sr-only">{item.title}</span>
              </Link>
            ))
          }
         
          <div className="flex-grow h-px bg-gray-300 max-w-full"></div>
        </div>
        <div className="flex justify-center items-center mb-6">
          <div className="w-20 h-20 bg-gray-200 rounded-full mr-3">
            <Image
            src={logo}
            alt='Synergy Logo'
            width={180}
            height={180}
            />
          </div>
          {/* <h2 className="text-2xl font-bold text-gray-800">Synergy Incorporation</h2> */}
        </div>
        <div className="text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Synergy, Inc.
        </div>
        <div className="flex justify-center space-x-4 mt-4 text-sm">
          {['Legal Stuff', 'Privacy Policy', 'Security', 'Website Accessibility', 'Manage Cookies'].map((item, index) => (
            <Link key={index} href="#" className="text-gray-600 hover:text-gray-800 hover:underline transition-transform duration-300 ease-out">
              {item}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}