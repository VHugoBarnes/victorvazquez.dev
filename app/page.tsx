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
    <Button
      variant="ghost"
      className={`w-full justify-start ${isActive ? 'bg-accent text-accent-foreground' : ''}`}
      onClick={() => {
        onClick()
        setActiveFile(null)
      }}
    >
      <Icon className="mr-2 h-4 w-4" />
      {name}
    </Button>
  )

  const FileIcon = ({ name, icon: Icon, onClick }) => (
    <Button
      variant="ghost"
      className="w-full justify-start text-sm"
      onClick={onClick}
    >
      <Icon className="mr-2 h-4 w-4" />
      <span
        dangerouslySetInnerHTML={{ __html: name }}
      ></span>
    </Button>
  )

  const HomeContent = () => (
    <div className="space-y-2">
      <FileIcon name="About" icon={User} onClick={() => setActiveFolder('about')} />
      <FileIcon name="Skills" icon={Code} onClick={() => setActiveFolder('skills')} />
      <FileIcon name="Projects" icon={Folder} onClick={() => setActiveFolder('projects')} />
      <FileIcon name="Experience" icon={Briefcase} onClick={() => setActiveFolder('experience')} />
    </div>
  )

  const AboutContent = () => (
    <div className="space-y-2">
      <FileIcon name="Profile.txt" icon={FileText} onClick={() => setActiveFile({ type: 'profile', content: developer.bio })} />
      <FileIcon name="Contact.txt" icon={FileText} onClick={() => setActiveFile({ type: 'contact', content: developer.email })} />
      <FileIcon name="GitHub" icon={Github} onClick={() => setActiveFile({ type: 'github', content: developer.github })} />
      <FileIcon name="LinkedIn" icon={Linkedin} onClick={() => setActiveFile({ type: 'linkedin', content: developer.linkedin })} />
    </div>
  )

  const SkillsContent = () => (
    <div className="grid grid-cols-2 gap-2">
      {developer.skills.map((skill, index) => (
        <FileIcon
          key={index}
          name={skill.name}
          icon={() => <img src={skill.icon} alt={skill.name} className="w-4 h-4 mr-2" />}
          onClick={() => setActiveFile({ type: 'skill', content: skill.name })}
        />
      ))}
    </div>
  )

  const ProjectsContent = () => {
    if (developer.projects.length === 0) {
      return <div className="flex items-center justify-center h-full text-muted-foreground">
        <p>No projects to display</p>
      </div>
    } else {
      return <div className="space-y-2">
        {developer.projects.map((project: any, index) => (
          <FileIcon
            key={index}
            name={project.title}
            icon={FileText}
            onClick={() => setActiveFile({ type: 'project', content: project })}
          />
        ))}
      </div>
    }

  }

  const ExperienceContent = () => (
    <div className="space-y-2">
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
    </div>
  )

  const FileContent = ({ file }) => {
    if (!file) return null

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
    <div className="container mx-auto p-4 h-dvh flex flex-col bg-background text-foreground">
      <div className="bg-background border rounded-t-lg p-2 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <h1 className="text-sm font-medium">{developer.name}&apos;s Portfolio</h1>
        </div>
        {mounted && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                {theme === 'dark' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
                <span className="sr-only">Toggle theme</span>
              </Button>
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
      </div>
      <div className="flex-1 bg-background border-x border-b rounded-b-lg overflow-hidden flex flex-col">
        <div className="p-2 border-b lg:hidden">
          <BreadcrumbNavigation />
        </div>
        <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
          <div className="w-full lg:w-48 border-r p-2 hidden lg:block">
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
              {activeFolder === 'home' && <HomeContent />}
              {activeFolder === 'about' && <AboutContent />}
              {activeFolder === 'skills' && <SkillsContent />}
              {activeFolder === 'projects' && <ProjectsContent />}
              {activeFolder === 'experience' && <ExperienceContent />}
            </ScrollArea>
          </div>
          <div className="w-full lg:w-1/2 p-4 overflow-auto">
            <ScrollArea className="h-full">
              {activeFile ? (
                <div className="bg-card p-4 rounded-lg shadow">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">{activeFile.type.charAt(0).toUpperCase() + activeFile.type.slice(1)}</h2>
                    <Button variant="ghost" size="icon" onClick={() => setActiveFile(null)}>
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                  <FileContent file={activeFile} />
                </div>
              ) : (
                <div className="flex items-center justify-center h-full text-muted-foreground">
                  <p>Select a file to view its contents</p>
                </div>
              )}
            </ScrollArea>
          </div>
        </div>
      </div>
    </div>
  )
}