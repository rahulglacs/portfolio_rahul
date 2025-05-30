'use client'

import dynamic from 'next/dynamic'

const GradientBackground = dynamic(
  () => import('@/components/general/GradientBackground'), 
  { ssr: false }
)

export default GradientBackground
