'use client'

// import { Instagram } from 'lucide-react'
import { InstagramLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons'
import { FacebookIcon, LucidePhoneCall, Mail } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '@/./assets/synergy-logo.png'

export function CustomFooter() {
  const socialLinks = [
    {
      icon: <InstagramLogoIcon className="w-6 h-6" />,
      link: '#',
      title: 'Instagram'
    },
    {
      icon: <TwitterLogoIcon className="w-6 h-6" />,
      link: '#',
      title: 'Twitter'
    },
    {
      icon: <FacebookIcon className="w-6 h-6" />,
      link: '#',
      title: 'Facebook'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      link: '#',
      title: 'Facebook'
    },
    {
      icon: <LucidePhoneCall className="w-6 h-6" />,
      link: '#',
      title: 'Facebook'
    },
  ]
  return (
    <footer className="w-full bg-white shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-6">
          <div className="flex-grow h-px bg-gray-300 max-w-full"></div>
          {
            socialLinks.map((item, index) => (
              <Link key={index} href={item.link} className="mx-4 text-gray-400 hover:text-gray-600 transition-colors">
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
            <Link key={index} href="#" className="text-gray-600 hover:text-gray-800  hover:underline transition-transform duration-300 ease-out">
              {item}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}