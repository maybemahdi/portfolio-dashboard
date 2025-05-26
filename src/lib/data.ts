export interface Blog {
    id: string
    title: string
    content: string
    thumbnail: string
    isDeleted: boolean
    isPublished: boolean
    authorId: string
    createdAt: Date
    updatedAt: Date
  }
  
  export interface Skill {
    id: string
    name: string
    logo: string
    isDeleted: boolean
    createdAt: Date
    updatedAt: Date
  }
  
  export interface Project {
    id: string
    title: string
    shortDescription: string
    longDescription: string
    thumbnail: string
    liveLink: string
    technologies: string[]
    isDeleted: boolean
    createdAt: Date
    updatedAt: Date
  }
  
  export interface Experience {
    id: string
    companyName: string
    position: string
    startDate: Date
    endDate?: Date
    description?: string
    isDeleted: boolean
    createdAt: Date
    updatedAt: Date
  }
  
  export const mockBlogs: Blog[] = [
    {
      id: "1",
      title: "Getting Started with Next.js 14",
      content: "A comprehensive guide to building modern web applications with Next.js 14...",
      thumbnail: "/placeholder.svg?height=200&width=300",
      isDeleted: false,
      isPublished: true,
      authorId: "user1",
      createdAt: new Date("2024-01-15"),
      updatedAt: new Date("2024-01-15"),
    },
    {
      id: "2",
      title: "TypeScript Best Practices",
      content: "Learn the best practices for writing maintainable TypeScript code...",
      thumbnail: "/placeholder.svg?height=200&width=300",
      isDeleted: false,
      isPublished: false,
      authorId: "user1",
      createdAt: new Date("2024-01-10"),
      updatedAt: new Date("2024-01-12"),
    },
    {
      id: "3",
      title: "Building Responsive UIs with Tailwind CSS",
      content: "Master the art of creating beautiful, responsive user interfaces...",
      thumbnail: "/placeholder.svg?height=200&width=300",
      isDeleted: false,
      isPublished: true,
      authorId: "user1",
      createdAt: new Date("2024-01-05"),
      updatedAt: new Date("2024-01-08"),
    },
  ]
  
  export const mockSkills: Skill[] = [
    {
      id: "1",
      name: "React",
      logo: "/placeholder.svg?height=40&width=40",
      isDeleted: false,
      createdAt: new Date("2024-01-01"),
      updatedAt: new Date("2024-01-01"),
    },
    {
      id: "2",
      name: "TypeScript",
      logo: "/placeholder.svg?height=40&width=40",
      isDeleted: false,
      createdAt: new Date("2024-01-02"),
      updatedAt: new Date("2024-01-02"),
    },
    {
      id: "3",
      name: "Node.js",
      logo: "/placeholder.svg?height=40&width=40",
      isDeleted: false,
      createdAt: new Date("2024-01-03"),
      updatedAt: new Date("2024-01-03"),
    },
    {
      id: "4",
      name: "Python",
      logo: "/placeholder.svg?height=40&width=40",
      isDeleted: false,
      createdAt: new Date("2024-01-04"),
      updatedAt: new Date("2024-01-04"),
    },
  ]
  
  export const mockProjects: Project[] = [
    {
      id: "1",
      title: "E-commerce Platform",
      shortDescription: "A full-stack e-commerce solution",
      longDescription:
        "Built a comprehensive e-commerce platform with user authentication, payment processing, and admin dashboard...",
      thumbnail: "/placeholder.svg?height=200&width=300",
      liveLink: "https://example.com",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      isDeleted: false,
      createdAt: new Date("2024-01-01"),
      updatedAt: new Date("2024-01-01"),
    },
    {
      id: "2",
      title: "Task Management App",
      shortDescription: "A collaborative task management tool",
      longDescription: "Developed a real-time task management application with team collaboration features...",
      thumbnail: "/placeholder.svg?height=200&width=300",
      liveLink: "https://example2.com",
      technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
      isDeleted: false,
      createdAt: new Date("2024-01-05"),
      updatedAt: new Date("2024-01-05"),
    },
    {
      id: "3",
      title: "Weather Dashboard",
      shortDescription: "Real-time weather monitoring dashboard",
      longDescription: "Created a responsive weather dashboard with location-based forecasts and historical data...",
      thumbnail: "/placeholder.svg?height=200&width=300",
      liveLink: "https://example3.com",
      technologies: ["Vue.js", "Express.js", "Redis", "Chart.js"],
      isDeleted: false,
      createdAt: new Date("2024-01-10"),
      updatedAt: new Date("2024-01-10"),
    },
  ]
  
  export const mockExperiences: Experience[] = [
    {
      id: "1",
      companyName: "Tech Solutions Inc.",
      position: "Senior Frontend Developer",
      startDate: new Date("2022-01-01"),
      endDate: new Date("2024-01-01"),
      description: "Led frontend development team, implemented modern React applications, and improved user experience.",
      isDeleted: false,
      createdAt: new Date("2024-01-01"),
      updatedAt: new Date("2024-01-01"),
    },
    {
      id: "2",
      companyName: "StartupXYZ",
      position: "Full Stack Developer",
      startDate: new Date("2020-06-01"),
      endDate: new Date("2021-12-31"),
      description:
        "Developed and maintained web applications using MERN stack, collaborated with cross-functional teams.",
      isDeleted: false,
      createdAt: new Date("2024-01-02"),
      updatedAt: new Date("2024-01-02"),
    },
    {
      id: "3",
      companyName: "Digital Agency Pro",
      position: "Frontend Developer",
      startDate: new Date("2024-02-01"),
      endDate: undefined,
      description: "Currently working on cutting-edge web applications and leading UI/UX implementation.",
      isDeleted: false,
      createdAt: new Date("2024-01-03"),
      updatedAt: new Date("2024-01-03"),
    },
  ]
  