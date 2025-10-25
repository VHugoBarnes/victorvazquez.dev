'use client'

import { useState, useEffect } from 'react'
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Briefcase, ChevronRight, Code, FileText, Folder, Github, Home, Linkedin, Moon, Sun, User, X } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { motion, AnimatePresence } from "framer-motion"

interface ActiveFile {
  type: 'profile' | 'contact' | 'github' | 'linkedin' | 'skill' | 'project' | 'experience';
  content: any; // You can make this more specific based on your needs
}

export default function Component() {
  const [activeFolder, setActiveFolder] = useState('home')
  const [activeFile, setActiveFile] = useState<ActiveFile | null>(null)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setActiveFolder('about')
    setActiveFile({ type: 'profile', content: developer.bio })
  }, [])

  const developer = {
    name: "Victor Vazquez",
    title: "Fullstack Web Developer",
    email: "hugovg799@gmail.com",
    github: "https://github.com/vhugobarnes",
    linkedin: "https://www.linkedin.com/in/v%C3%ADctor-hugo-v%C3%A1zquez-g%C3%B3mez-5882a1171/",
    bio: "As a passionate Full Stack Web Developer, I bring over 4 years of experience dedicated to crafting dynamic and user-centric web solutions. Proficient in modern web development technologies, I specialize in creating applications with attention to detail and a proactive approach that ensures organized and responsible project execution.",
    skills: [
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Vue", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
      { name: "CodeIgniter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain-wordmark.svg" },
      { name: "Laravel", icon: "https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/laravel/laravel-line-wordmark.svg" },
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    ],
    projects: [
      // {
      //   title: "E-commerce Platform",
      //   description: "A full-featured e-commerce platform built with React, Node.js, and MongoDB.",
      //   link: "https://github.com/alexjohnson/ecommerce-platform"
      // },
      // {
      //   title: "Task Management App",
      //   description: "A real-time task management application using React, Socket.io, and PostgreSQL.",
      //   link: "https://github.com/alexjohnson/task-manager"
      // },
      // {
      //   title: "Weather Forecast App",
      //   description: "A weather forecast application using React, OpenWeatherMap API, and Geolocation.",
      //   link: "https://github.com/alexjohnson/weather-app"
      // }
    ],
    workExperience: [
      {
        company: "Ticketero",
        position: "Fullstack Web Developer",
        period: "February 2024 - Present",
        startDate: "2024-02-01",
        endDate: null,
        description: `
          As a FullStack Web Engineer at Ticketero, I focus on developing new modules and enhancing the user
          experience and interface in close collaboration with a designer. My work involves utilizing PHP frameworks
          such as Laravel and CodeIgniter 4, alongside Vue.js, to create robust and efficient web applications. By
          combining backend and frontend development, I contribute to delivering seamless and intuitive solutions that
          meet both user needs and business objectives.
        `
      },
      {
        company: "tgoat",
        position: "Lead Fullstack Developer",
        period: "June 2021 - March 2024",
        startDate: "2021-06-01",
        endDate: "2024-03-01",
        description: `
          In my role as a Fullstack Web Engineer, I spearheaded the design and development of the website
          architecture, collaborating closely with stakeholders to ensure a user-friendly experience. My responsibilities
          extended to mentoring new developers, establishing communication with service providers such as Stripe and
          PayPal, and incorporating user feedback to enhance website functionality.<br /><br />
          Notable accomplishments during my tenure include leading the development of the Minimum Viable Product
          (MVP), paving the way for a successful pre-seed funding round that secured approximately $1 million.
          These experiences showcase my holistic approach to web development, combining technical expertise with
          strategic contributions to drive project success.
        `
      },
      {
        company: "National Technological Institute of Mexico",
        position: "Backend Developer",
        period: "January 2021 - June 2021",
        startDate: "2021-01-01",
        endDate: "2021-06-20",
        description: `
          During my university tenure, I actively participated in the Social Service program, where I collaborated
          with fellow students to initiate the development of an Integral Information System tailored for the
          Master's degree students at the university. Over a dedicated six-month period, we laid the foundations
          for the system's architecture and functionality, leveraging technologies such as Laravel and MySQL.
          Despite not delivering a final product within the timeframe, our efforts proved instrumental in providing
          a robust framework for subsequent students to carry forward and complete the system.
        `,
      }
    ]
  }

  const FolderIcon = ({ name, icon: Icon, isActive, onClick }) => (
    <motion.div
      whileHover={{ scale: 1.02, x: 4 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <Button
        variant="ghost"
        className={`w-full justify-start transition-all duration-200 ${
          isActive
            ? 'bg-accent text-accent-foreground shadow-sm'
            : 'hover:bg-accent/50'
        }`}
        onClick={() => {
          onClick()
          setActiveFile(null)
        }}
      >
        <Icon className="mr-2 h-4 w-4" />
        {name}
      </Button>
    </motion.div>
  )

  const FileIcon = ({ name, icon: Icon, onClick }) => (
    <motion.div
      whileHover={{ scale: 1.02, x: 4 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <Button
        variant="ghost"
        className="w-full justify-start text-sm hover:bg-accent/50 transition-all duration-200"
        onClick={onClick}
      >
        <Icon className="mr-2 h-4 w-4" />
        <span
          dangerouslySetInnerHTML={{ __html: name }}
        ></span>
      </Button>
    </motion.div>
  )

  const HomeContent = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="space-y-2"
    >
      <FileIcon name="About" icon={User} onClick={() => setActiveFolder('about')} />
      <FileIcon name="Skills" icon={Code} onClick={() => setActiveFolder('skills')} />
      <FileIcon name="Projects" icon={Folder} onClick={() => setActiveFolder('projects')} />
      <FileIcon name="Experience" icon={Briefcase} onClick={() => setActiveFolder('experience')} />
    </motion.div>
  )

  const AboutContent = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="space-y-2"
    >
      <FileIcon name="Profile.txt" icon={FileText} onClick={() => setActiveFile({ type: 'profile', content: developer.bio })} />
      <FileIcon name="Contact.txt" icon={FileText} onClick={() => setActiveFile({ type: 'contact', content: developer.email })} />
      <FileIcon name="GitHub" icon={Github} onClick={() => setActiveFile({ type: 'github', content: developer.github })} />
      <FileIcon name="LinkedIn" icon={Linkedin} onClick={() => setActiveFile({ type: 'linkedin', content: developer.linkedin })} />
    </motion.div>
  )

  const SkillsContent = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="grid grid-cols-2 gap-2"
    >
      {developer.skills.map((skill, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.05, duration: 0.2 }}
        >
          <FileIcon
            name={skill.name}
            icon={() => <img src={skill.icon} alt={skill.name} className="w-4 h-4 mr-2" />}
            onClick={() => setActiveFile({ type: 'skill', content: skill.name })}
          />
        </motion.div>
      ))}
    </motion.div>
  )

  const ProjectsContent = () => {
    if (developer.projects.length === 0) {
      return <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex items-center justify-center h-full text-muted-foreground"
      >
        <p>No projects to display</p>
      </motion.div>
    } else {
      return <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="space-y-2"
      >
        {developer.projects.map((project: any, index) => (
          <FileIcon
            key={index}
            name={project.title}
            icon={FileText}
            onClick={() => setActiveFile({ type: 'project', content: project })}
          />
        ))}
      </motion.div>
    }

  }

  const ExperienceContent = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="space-y-2"
    >
      {developer.workExperience.map((job, index) => {
        const jobStartDate = new Date(job.startDate)
        const jobEndDate = job.endDate ? new Date(job.endDate) : new Date()
        const totalMonths = Math.floor((jobEndDate.getTime() - jobStartDate.getTime()) / (1000 * 60 * 60 * 24 * 30))
        const jobDurationInYears = Math.floor(totalMonths / 12)
        const jobDurationInMonthsRemainder = totalMonths % 12

        let jobDurationParts: string[] = []
        if (jobDurationInYears > 0) {
          jobDurationParts.push(`${jobDurationInYears} year${jobDurationInYears > 1 ? 's' : ''}`)
        }
        if (jobDurationInMonthsRemainder > 0) {
          jobDurationParts.push(`${jobDurationInMonthsRemainder} month${jobDurationInMonthsRemainder > 1 ? 's' : ''}`)
        }
        // Si ambos son 0, se muestra 0 month
        const jobDuration = jobDurationParts.length > 0 ? jobDurationParts.join(' ') : '0 month'

        return <FileIcon
          key={index}
          name={`${job.company} - ${job.position} (${jobDuration})`}
          icon={Briefcase}
          onClick={() => setActiveFile({ type: 'experience', content: job })}
        />
      })}
    </motion.div>
  )

  const FileContent = ({ file }) => {
    if (!file) return null

    const content = (() => {
      switch (file.type) {
        case 'profile':
        case 'contact':
        case 'github':
        case 'linkedin':
        case 'skill':
          return <p className="text-sm">{file.content}</p>
        case 'project':
          return (
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">{file.content.title}</h3>
              <p className="text-sm" dangerouslySetInnerHTML={{ __html: file.content.description }}></p>
              <a href={file.content.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">View Project</a>
            </div>
          )
        case 'experience':
          const jobStartDate = new Date(file.content.startDate)
          const jobEndDate = file.content.endDate ? new Date(file.content.endDate) : new Date()
          const totalMonths = Math.floor((jobEndDate.getTime() - jobStartDate.getTime()) / (1000 * 60 * 60 * 24 * 30))
          const jobDurationInYears = Math.floor(totalMonths / 12)
          const jobDurationInMonthsRemainder = totalMonths % 12

          let jobDurationParts: string[] = []
          if (jobDurationInYears > 0) {
            jobDurationParts.push(`${jobDurationInYears} year${jobDurationInYears > 1 ? 's' : ''}`)
          }
          if (jobDurationInMonthsRemainder > 0) {
            jobDurationParts.push(`${jobDurationInMonthsRemainder} month${jobDurationInMonthsRemainder > 1 ? 's' : ''}`)
          }
          const jobDurationInYearsAndMonths = jobDurationParts.length > 0 ? jobDurationParts.join(' ') : '0 month'

          return (
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">{file.content.position}</h3>
              <p className="text-sm font-medium">
                {file.content.company} | {file.content.period} ({jobDurationInYearsAndMonths})
              </p>
              <p className="text-sm" dangerouslySetInnerHTML={{ __html: file.content.description }}></p>
            </div>
          )
        default:
          return null
      }
    })()

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.2 }}
      >
        {content}
      </motion.div>
    )
  }

  const BreadcrumbNavigation = () => (
    <div className="flex items-center space-x-2 text-sm">
      <Button
        variant="ghost"
        size="sm"
        className="p-0"
        onClick={() => {
          setActiveFolder('home')
          setActiveFile(null)
        }}
      >
        <Home className="h-4 w-4" />
        <span className="sr-only">Home</span>
      </Button>
      {activeFolder !== 'home' && (
        <>
          <ChevronRight className="h-4 w-4" />
          <span>{activeFolder.charAt(0).toUpperCase() + activeFolder.slice(1)}</span>
        </>
      )}
      {activeFile && (
        <>
          <ChevronRight className="h-4 w-4" />
          <span className="text-muted-foreground">{activeFile.type.charAt(0).toUpperCase() + activeFile.type.slice(1)}</span>
        </>
      )}
    </div>
  )

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 dark:from-blue-600/30 dark:via-purple-600/30 dark:to-pink-600/30 overflow-hidden">
      {/* Additional gradient layers */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-400/10 via-transparent to-purple-400/10"></div>
      <div className="absolute inset-0 opacity-30 dark:opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.08'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      <div className="container mx-auto p-4 h-dvh flex flex-col text-foreground relative">
        <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 bg-background/70 backdrop-blur-xl border rounded-t-lg p-2 flex items-center justify-between shadow-lg"
      >
        <div className="flex items-center space-x-2">
          <div className="flex space-x-2">
            <motion.div
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
              className="w-3 h-3 rounded-full bg-red-500 cursor-pointer hover:bg-red-600 transition-colors shadow-sm"
            ></motion.div>
            <motion.div
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
              className="w-3 h-3 rounded-full bg-yellow-500 cursor-pointer hover:bg-yellow-600 transition-colors shadow-sm"
            ></motion.div>
            <motion.div
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
              className="w-3 h-3 rounded-full bg-green-500 cursor-pointer hover:bg-green-600 transition-colors shadow-sm"
            ></motion.div>
          </div>
          <h1 className="text-sm font-medium">{developer.name}&apos;s Portfolio</h1>
        </div>
        {mounted && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <motion.div whileHover={{ rotate: 180 }} transition={{ duration: 0.3 }}>
                <Button variant="ghost" size="icon">
                  {theme === 'dark' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </motion.div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="relative z-10 flex-1 bg-background/60 backdrop-blur-lg border-x border-b rounded-b-lg overflow-hidden flex flex-col shadow-2xl"
      >
        <div className="p-2 border-b lg:hidden">
          <BreadcrumbNavigation />
        </div>
        <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
          <div className="w-full lg:w-48 border-r p-2 hidden lg:block bg-background/40 backdrop-blur-md">
            <ScrollArea className="h-full">
              <FolderIcon name="Home" icon={Home} isActive={activeFolder === 'home'} onClick={() => setActiveFolder('home')} />
              <FolderIcon name="About" icon={User} isActive={activeFolder === 'about'} onClick={() => setActiveFolder('about')} />
              <FolderIcon name="Skills" icon={Code} isActive={activeFolder === 'skills'} onClick={() => setActiveFolder('skills')} />
              <FolderIcon name="Projects" icon={Folder} isActive={activeFolder === 'projects'} onClick={() => setActiveFolder('projects')} />
              <FolderIcon name="Experience" icon={Briefcase} isActive={activeFolder === 'experience'} onClick={() => setActiveFolder('experience')} />
            </ScrollArea>
          </div>
          <div className="flex-1 p-4 overflow-auto border-r">
            <ScrollArea className="h-full">
              <AnimatePresence mode="wait">
                {activeFolder === 'home' && <HomeContent key="home" />}
                {activeFolder === 'about' && <AboutContent key="about" />}
                {activeFolder === 'skills' && <SkillsContent key="skills" />}
                {activeFolder === 'projects' && <ProjectsContent key="projects" />}
                {activeFolder === 'experience' && <ExperienceContent key="experience" />}
              </AnimatePresence>
            </ScrollArea>
          </div>
          <div className="w-full lg:w-1/2 p-4 overflow-auto">
            <ScrollArea className="h-full">
              <AnimatePresence mode="wait">
                {activeFile ? (
                  <motion.div
                    key={activeFile.type}
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: -20 }}
                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    className="bg-background/40 backdrop-blur-xl p-6 rounded-lg shadow-xl border border-border/50"
                  >
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-xl font-semibold">{activeFile.type.charAt(0).toUpperCase() + activeFile.type.slice(1)}</h2>
                      <motion.div whileHover={{ scale: 1.1, rotate: 90 }} whileTap={{ scale: 0.9 }}>
                        <Button variant="ghost" size="icon" onClick={() => setActiveFile(null)}>
                          <X className="h-4 w-4" />
                        </Button>
                      </motion.div>
                    </div>
                    <FileContent file={activeFile} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center justify-center h-full text-muted-foreground"
                  >
                    <p>Select a file to view its contents</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </ScrollArea>
          </div>
        </div>
      </motion.div>
      </div>
    </div>
  )
}