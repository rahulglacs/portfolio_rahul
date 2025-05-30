'use client'

import React from 'react'
import ScrollAnimationWrapper from '../general/ScrollAnimationWrapper'
import TypingAnimation from '../general/TypingAnimation'

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-8 md:px-16">
        <ScrollAnimationWrapper>
          <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center neon-text">
  About Me
  <span className="block">
    <TypingAnimation text="About Me" />
  </span>
</h2>
        </ScrollAnimationWrapper>
        
        <div className="max-w-4xl mx-auto text-lg text-gray-700 dark:text-gray-300">
          <ScrollAnimationWrapper>
            <p className="mb-6">
              Hello! I&#39;m Rahul Yaduvanshi, a passionate and driven web developer with a strong foundation in programming, data structures, and algorithms. I specialize in creating responsive, scalable, and dynamic web applications.
            </p>
            <p className="mb-6">
              I&#39;ve solved over <span className="font-bold text-indigo-600 dark:text-indigo-400">450+ problems</span> on LeetCode, completed the renowned Striver SDE Sheet, and achieved <span className="font-bold text-indigo-600 dark:text-indigo-400">4-star ratings</span> on both CodeChef and HackerRank. These experiences have enabled me to think critically, write efficient code, and tackle complex challenges with confidence.
            </p>
            <p>
              I am constantly looking for opportunities to grow and contribute to impactful projects. My journey is fueled by curiosity, continuous learning, and a desire to solve real-world problems through technology.
            </p>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  )
}
