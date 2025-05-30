import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Script from 'next/script'
import HeroSection from '@/components/hero/HeroSection'
import ScrollProgressIndicator from '@/components/general/ScrollProgressIndicator'
import Footer from '@/components/footer/Footer'
import { ThemeProvider, ThemeToggle } from '@/components/general/GradientBackground'
import { ErrorBoundary } from '@/components/general/ErrorBoundary'
import GradientBackground from './GradientBackgroundClient'

// Lazy load components with loading states
const ProjectsSection = dynamic(() => import('@/components/projects/ProjectsSection'), {
  loading: () => <div className="h-screen animate-pulse bg-gray-800/20" />,
})
const SkillsSection = dynamic(() => import('@/components/skills/SkillsSection'), {
  loading: () => <div className="h-screen animate-pulse bg-gray-800/20" />,
})
const JourneySection = dynamic(() => import('@/components/journey/JourneySection'), {
  loading: () => <div className="h-screen animate-pulse bg-gray-800/20" />,
})
const ContactSection = dynamic(() => import('@/components/contact/ContactSection'), {
  loading: () => <div className="h-screen animate-pulse bg-gray-800/20" />,
})
const AboutSection = dynamic(() => import('@/components/about/AboutSection'), {
  loading: () => <div className="h-screen animate-pulse bg-gray-800/20" />,
})

export const metadata: Metadata = {
  title: 'Rahul Yaduvanshi - Web Developer & AI Enthusiast',
  description: 'Portfolio of a web developer specializing in Next.js, Python, and Generative AI',
  keywords: ['web developer', 'Next.js', 'Python', 'AI', 'portfolio', 'Rahul Yaduvanshi'],
  authors: [{ name: 'Rahul Yaduvanshi' }],
  alternates: {
    canonical: 'https://rahulyaduvanshi.vercer.app',
  },
}

export default function Home() {
  return (
    <>
      <Script
        id="schema-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Rahul Yaduvanshi',
            url: 'https://rahulyaduvanshi.vercer.app',
            jobTitle: 'Web Developer',
            description: 'Web developer specializing in Next.js, Python, and Generative AI',
            knowsAbout: ['Web Development', 'Next.js', 'Python', 'Artificial Intelligence'],
            image: 'https://rahulyaduvanshi.vercer.app/images/my_photo.png',
            sameAs: [
              'https://github.com/rahulyaduvanshi',
              'https://linkedin.com/in/rahulyaduvanshi',
            ],
          })
        }}
      />
      <main className="relative">
        <ThemeProvider>
          <ThemeToggle />
          <GradientBackground />
          <div className="relative z-10">
            <ScrollProgressIndicator />
            <ErrorBoundary>
              <HeroSection />
            </ErrorBoundary>
            
            <section className="space-y-32">
              <ErrorBoundary>
                <JourneySection />
              </ErrorBoundary>
              
              <ErrorBoundary>
                <ProjectsSection />
              </ErrorBoundary>
              
              <ErrorBoundary>
                <SkillsSection />
              </ErrorBoundary>
              
              <ErrorBoundary>
                <AboutSection />
              </ErrorBoundary>
              
              <ErrorBoundary>
                <ContactSection />
              </ErrorBoundary>
            </section>
            
            <ErrorBoundary>
              <Footer />
            </ErrorBoundary>
          </div>
        </ThemeProvider>
      </main>
    </>
  )
}