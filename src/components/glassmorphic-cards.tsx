'use client'

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { InfoIcon, Target, Eye } from "lucide-react"
import { DialogDemo } from "./inputModal"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect } from "react"

export function GlassmorphicCards() {
  // Set up Intersection Observer to trigger animations when cards are in view
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,  // Trigger when 10% of the card is in view
  })

  const controls = useAnimation()

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  // Animation variants for Framer Motion
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  }

  const textVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.5 } }
  }

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            title: "About Us",
            icon: InfoIcon,
            description: `Synergy is more than a trading platform; we’re a community of traders dedicated to unlocking financial potential. Our proprietary tools and expertise support traders in their journey to mastering futures and equities markets. Join us in redefining the future of trading success`
          },
          {
            title: "Our Mission",
            icon: Target,
            description: `At Synergy, we are committed to creating a trading environment that empowers every individual to thrive. Our mission is to deliver innovative trading solutions, support continuous learning, and ensure that every trader—regardless of their experience—has access to the tools they need to succeed.`,
            gradient: "from-green-400 to-blue-500"
          },
          {
            title: "Our Vision",
            icon: Eye,
            description: `Our vision is to set the global standard in proprietary trading by continuously evolving and adapting to the needs of traders. We aim to foster a thriving, dynamic community where traders are empowered to achieve financial independence and long-term growth.`
          }
        ].map((item, index) => (
          <motion.div
            key={index}
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}  // Hover animation for scaling
            className="relative glassmorphism p-6 z-10 w-full hover:shadow-lg transition-shadow duration-300 bg"
          >
            {/* <Card className=""> */}
              <motion.div variants={textVariants}>
                <CardHeader>
                  <item.icon className="w-10 h-10 text-white mb-2" />
                  <CardTitle className="text-purple-300 text-2xl font-semibold">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-opacity-85 text-stone-100 text-base font-medium">{item.description}</p>
                </CardContent>
              </motion.div>

              <div className="relative min-w-full">
                <CardFooter>
                  <DialogDemo />
                </CardFooter>
              </div>
            {/* </Card> */}
          </motion.div>
        ))}
      </div>
    </div>
  )
}
