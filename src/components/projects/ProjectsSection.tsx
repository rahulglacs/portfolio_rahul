'use client'

import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { ExternalLink } from 'lucide-react'
import Github from '../../../public/Github'
import ScrollAnimationWrapper from '../general/ScrollAnimationWrapper'
import { useTheme } from '@/components/general/GradientBackground'


type Project = {
  title: string
  description: string
  technologies: string[]
  imageUrl: string
  linkUrl: string
}

const projects: Project[] = [
  {
    title: "Portfolio Website",
    description: "A personal digital portfolio built using HTML, CSS, and JavaScript to showcase my skills, experience, and competitive programming achievements.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    imageUrl: "/project_images/portfolio.jpg",
    linkUrl: "#"
  },
  {
    title: "Amazon Clone",
    description: "Developed a responsive e-commerce clone inspired by Amazon with product listing, cart functionality, and checkout workflow.",
    technologies: ["React.js", "Node.js", "Express.js"],
    imageUrl: "/project_images/amazon-clone.jpg",
    linkUrl: "#"
  },
  {
    title: "Flipkart Clone",
    description: "Recreated the popular Flipkart UI/UX with functionality including filters, search, and authentication.",
    technologies: ["React.js", "MongoDB", "Express.js"],
    imageUrl: "/project_images/flipkart-clone.jpg",
    linkUrl: "#"
  },
  {
    title: "File Compression Tool",
    description: "Created a Java-based compression and decompression tool using Huffman Coding Algorithm for efficient file storage.",
    technologies: ["Java", "Huffman Coding"],
    imageUrl: "/project_images/compression-tool.jpg",
    linkUrl: "#"
  },
]

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false)

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    }),
    hover: {
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  }

  const overlayVariants = {
    hidden: {
      opacity: 0,
      backdropFilter: "blur(0px)"
    },
    visible: {
      opacity: 1,
      backdropFilter: "blur(3px)",
      transition: {
        duration: 0.3
      }
    }
  }

  const isGithubLink = project.linkUrl.includes('github.com')
  const { isDark } = useTheme()

  return (
    <ScrollAnimationWrapper>
      <motion.div
        className="relative rounded-xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700/50"
        variants={cardVariants}
        custom={index}
        initial="hidden"
        whileInView="visible"
        whileHover="hover"
        viewport={{ once: true, margin: "-50px" }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <div className="relative h-20 sm:h-20 overflow-hidden">
          <motion.div
            className="absolute inset-0 flex items-center justify-center bg-black/60"
            variants={overlayVariants}
            initial="hidden"
            animate={isHovered ? "visible" : "hidden"}
          >
            <a
              href={project.linkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-full hover:from-indigo-700 hover:to-purple-700 transform transition-all duration-300 hover:scale-105"
            >
              {isGithubLink ? <Github /> : <ExternalLink className="w-5 h-5" />}
              {isGithubLink ? 'View on GitHub' : 'Visit Project'}
            </a>
          </motion.div>
        </div>
        <div className="p-6">
          <h3 className={`text-2xl font-bold mb-3 bg-gradient-to-r ${isDark? 'from-indigo-400 to-purple-400':'from-indigo-600 to-purple-600'} bg-clip-text text-transparent`}>
            {project.title}
          </h3>
          <p className={`${isDark? 'text-gray-300':'text-gray-100'} mb-4 line-clamp-2 hover:line-clamp-none transition-all duration-300`}>
            {project.description}
          </p>
          <motion.div
            className="flex flex-wrap gap-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {project.technologies.map((tech, index) => (
              <motion.span
                key={index}
                className={`px-3 py-1 bg-gradient-to-r ${isDark? 'from-indigo-900/50 to-purple-900/50 text-indigo-200':'from-indigo-700/50 to-purple-700/50 text-white'} text-sm font-medium rounded-full border border-indigo-700/30`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </ScrollAnimationWrapper>
  )
}

const ProjectsSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <ScrollAnimationWrapper>
            <motion.h2
              className="text-5xl font-bold mb-16 text-center neon-text"
              variants={titleVariants}
            >
              Projects
            </motion.h2>
          </ScrollAnimationWrapper>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProjectsSection