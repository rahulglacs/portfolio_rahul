'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image';
import { useTheme } from '@/components/general/GradientBackground'

interface TimelineEvent {
  date: string
  title: string
  description: string
  icon: string
}

const timelineEvents: TimelineEvent[] = [
  {
    date:"2021-08",
    title: "Started B.Tech in Computer Science",
    description: "Began Bachelor's degree in Computer Science Engineering at GLA University",
    icon: "/journey_logo/college.svg"
  },
  {
    date:"2022-01",
    title: "Started Competitive Programming",
    description: "Began solving problems on LeetCode, CodeChef and HackerRank",
    icon: "/journey_logo/coding.svg"
  },
  {
    date:"2022-06",
    title: "Completed Striver's SDE Sheet",
    description: "Solved all problems in the comprehensive DSA sheet",
    icon: "/journey_logo/dsa.svg"
  },
  {
    date:"2023-01",
    title: "Built Amazon and Flipkart Clones",
    description: "Developed full-stack e-commerce applications using React and Node.js",
    icon: "/journey_logo/ecommerce.svg"
  },
  {
    date:"2023-06",
    title: "Created File Compression Tool",
    description: "Developed a Java-based compression tool using Huffman Coding Algorithm",
    icon: "/journey_logo/java.svg"
  },
  {
    date:"2025-06",
    title: "Expected Graduation",
    description: "Will complete B.Tech in Computer Science from GLA University",
    icon: "/journey_logo/graduation.svg"
  }
]

const TimelineEvent: React.FC<{ event: TimelineEvent; isActive: boolean; isLeft: boolean; index: number }> = ({ 
  event, 
  isActive, 
  isLeft,
}) => {
  const containerVariants = {
    offscreen: { 
      opacity: 0,
      y: 50
    },
    onscreen: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.1,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      y: -50,
      transition: {
        duration: 0.5,
        ease: "easeIn"
      }
    }
  }

  const contentVariants = {
    inactive: {
      scale: 1,
      opacity: 0.9,
      transition: {
        duration: 0.3
      }
    },
    active: {
      scale: 1.02,
      opacity: 1,
      transition: {
        duration: 0.3
      }
    }
  }

  const iconVariants = {
    inactive: {
      scale: 1,
      transition: {
        duration: 0.3
      }
    },
    active: {
      scale: 1.1,
      transition: {
        duration: 0.3
      }
    }
  }
  const { isDark } = useTheme()

  return (
    <motion.div 
      className={`mb-12 flex items-center ${isLeft ? 'flex-row-reverse' : 'flex-row'}`}
      variants={containerVariants}
      initial="offscreen"
      whileInView="onscreen"
      exit="exit"
      viewport={{ 
        once: false, 
        margin: "-100px",
        amount: 0.2 
      }}
    >
      <motion.div 
        className={`w-1/2 ${isLeft ? 'text-right pr-8' : 'text-left pl-8'}`}
        variants={contentVariants}
        animate={isActive ? "active" : "inactive"}
      >
        <div className={`text-sm font-semibold ${isDark? 'text-indigo-400':'text-indigo-600'} mb-1`}>{event.date}</div>
        <h3 className={`text-xl font-bold mb-2 ${isDark? 'text-white':'text-black'}`}>{event.title}</h3>
        <p className={`${isDark? 'text-gray-300':'text-gray-500'} text-sm`}>{event.description}</p>
      </motion.div>
      <motion.div 
        className={`flex items-center justify-center w-16 h-16 rounded-full ${isDark? 'bg-gray-800':'bg-gray-300'} border-4 border-indigo-700 text-2xl z-10 overflow-hidden`}
        variants={iconVariants}
        animate={isActive ? "active" : "inactive"}
      >
        <Image 
          src={event.icon} 
          width={36} 
          height={36} 
          alt="Logo" 
          className="object-contain"
        />
      </motion.div>
      <div className="w-1/2"></div>
    </motion.div>
  )
}

const InteractiveTimeline: React.FC = () => {
  const [activeEvent, setActiveEvent] = useState<string | null>(null)

  const lineVariants = {
    offscreen: { 
      height: 0, 
      opacity: 0 
    },
    onscreen: { 
      height: "100%", 
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0.2
      }
    },
    exit: {
      height: 0,
      opacity: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <div className="relative py-8">
      <motion.div 
        className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-r from-blue-600 to-purple-600"
        variants={lineVariants}
        initial="offscreen"
        whileInView="onscreen"
        exit="exit"
        viewport={{ once: false }}
      />
      {timelineEvents.map((event, index) => (
        <div 
          key={event.date} 
          className="relative z-10"
          onMouseEnter={() => setActiveEvent(event.date)}
          onMouseLeave={() => setActiveEvent(null)}
        >
          <TimelineEvent 
            event={event} 
            isActive={activeEvent === event.date} 
            isLeft={index % 2 === 0}
            index={index}
          />
        </div>
      ))}
    </div>
  )
}

export default InteractiveTimeline