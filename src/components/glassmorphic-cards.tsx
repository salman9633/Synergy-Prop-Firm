'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { InfoIcon, Target, Eye } from "lucide-react"

export function GlassmorphicCards() {
  return (
    // <div className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/placeholder.svg?height=1080&width=1920')" }}>
    <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[
        { title: "About Us", icon: InfoIcon, description: "Learn more about our company and our values.", gradient: "from-purple-400 to-pink-500" },
        { title: "Our Mission", icon: Target, description: "Discover our purpose and what drives us forward.", gradient: "from-green-400 to-blue-500" },
        { title: "Our Vision", icon: Eye, description: "See where we're headed and our plans for the future.", gradient: "from-yellow-400 to-orange-500" },
      ].map((item, index) => (
        <Card key={index} className={`overflow-hidden relative bg-gradient-to-br ${item.gradient}`}>
          <div className="absolute inset-0 bg-white bg-opacity-30 backdrop-filter backdrop-blur-lg"></div>
          <div className="relative z-10">
            <CardHeader>
              <item.icon className="w-10 h-10 text-white mb-2" />
              <CardTitle className="text-2xl font-bold text-white">{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-white">{item.description}</p>
            </CardContent>
            <CardFooter>
              <Button variant="secondary" className="w-full bg-white bg-opacity-20 hover:bg-opacity-30 text-white border-white">
                Learn More
              </Button>
            </CardFooter>
          </div>
        </Card>
      ))}
    </div>
  </div>
    // </div>
  )
}