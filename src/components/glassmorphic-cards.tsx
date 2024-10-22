'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { InfoIcon, Target, Eye, Key } from "lucide-react"

export function GlassmorphicCards() {
  return (
    // <div className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/placeholder.svg?height=1080&width=1920')" }}>
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { title: "About Us", icon: InfoIcon, description: `Synergy is more than a trading platform; we’re a community of traders dedicated to unlocking financial potential. Our proprietary tools and expertise support traders in their journey to mastering futures and equities markets. Join us in redefining the future of trading success` },
          { title: "Our Mission", icon: Target, description: `At Synergy, we are committed to creating a trading environment that empowers every individual to thrive. Our mission is to deliver innovative trading solutions, support continuous learning, and ensure that every trader—regardless of their experience—has access to the tools they need to succeed.`, gradient: "from-green-400 to-blue-500" },
          { title: "Our Vision", icon: Eye, description: `Our vision is to set the global standard in proprietary trading by continuously evolving and adapting to the needs of traders. We aim to foster a thriving, dynamic community where traders are empowered to achieve financial independence and long-term growth.` },
        ].map((item, index) => (
         
            <Card className="relative glassmorphism p-6 z-10 w-full hover:scale-95 transition-transform duration-300" key={index}>
              {/* Card Content */}
              <div className="mt-4">
                <CardHeader>
                  <item.icon className="w-10 h-10 text-white mb-2" />
                  <CardTitle className="text-purple-300 text-2xl font-semibold">{item.title}</CardTitle>
                </CardHeader>
                {/* <h2 className="text-purple-300 text-2xl font-semibold">
                  Brooknew Ltd.
                </h2> */}
                <CardContent>
                <p className="text-opacity-85 text-stone-100 text-base font-medium"> 
                  {item.description}                </p>
              </CardContent>
                {/* <p className="text-white text-base font-medium mb-4">
                  Integrity, innovation, and inclusivity are the pillars of Synergy. We believe in offering transparency in every transaction, constantly innovating our platform to provide cutting-edge tools, and fostering an inclusive community where traders of all levels can grow and succeed together.
                </p> */}

              </div>

              {/* Floating Add Button */}
              <div className="relative min-w-full">
              <CardFooter>
                <Button variant="secondary" className="w-full  bg-white bg-opacity-20 hover:bg-opacity-30 text-white border-white">
                  Learn More
                </Button>
              </CardFooter>
                {/* <div className="flex items-center justify-center w-8 h-8 bg-white rounded-full shadow-lg cursor-pointer">
                  <span className="text-black text-xl font-bold">+</span>
                </div> */}
              </div>
            </Card>
         
        ))}
      </div>
    </div>
    // </div>
  )
}