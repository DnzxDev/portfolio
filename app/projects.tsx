"use client"

import { ProjectCard } from "./projects-card"

const projects = [
  {
    title: "Dashboard - Primary Version",
    description: "In this project we used Next.js together with typescript, to make the back end work, we made an API, in Nest.js, which takes all the information from the database (MySQL), from which the information is used in the dashboard!",
    technologies: ["Next.js", "React", "NestJS", "MySQL", "Tailwind"],
    imageUrl: "https://r2.fivemanage.com/h1RaORAfpynzso56Pcf6Z/image.png",
    isPrivate: true
  },
  {
    title: "Landing Page - Primary Version",
    description: "The project used Next.JS, in its slightly older version, the basis of the project is components, and it was done in JSX, there is no back end, it's just a landing page!",
    technologies: ["Next.js", "React", "Sass"],
    imageUrl: "https://r2.fivemanage.com/h1RaORAfpynzso56Pcf6Z/dash.png",
    isPrivate: true
  },
  {
    title: "Landing Page + Dashboard",
    description: "Now Yes! this project is a version of the first two projects, but much improved! here we have a landing page with the fixed dark theme, when you log in with discord, and access the dashboard, you can change themes, there is a shopping system, inventory and information, to buy something, you must have gems! In addition, when you buy something, a message is sent to an API in FiveM, the API does the work of adding the benefits, which are: Properties, Cars, Vips and more!",
    technologies: ["Next.js", "React", "Tailwind", "Nhost", "Typescript", "Javascript", "GraphQL"],
    imageUrl: "https://media.discordapp.net/attachments/1260466849804456036/1320602340100935680/image.png?ex=676a3245&is=6768e0c5&hm=583ddf308535277f1e7f7c45dfb99e74925902501006f0aa16d0a861ec6f5a4c&=&format=webp&quality=lossless&width=1029&height=558",
    isPrivate: true
  },
  {
    title: "Admin Panel",
    description: "Do you remember the previous project? the landing page together with a dashboard? Well, if there are to be products, there must be a way to add them. In the admin dashboard you can do this and others, such as supervising your server, players and bans!",
    technologies: ["Next.js", "React", "Tailwind", "Typescript", "Javascript", "MySQL"],
    imageUrl: "https://media.discordapp.net/attachments/1286715591993856011/1320075291879538800/image.png?ex=676998eb&is=6768476b&hm=69f9c95aa4a5504d00262c583ca13c9a66b346680099d40faf3096cdcb4885b8&=&format=webp&quality=lossless&width=1035&height=557",
    isPrivate: true
  },
  {
    title: "Storage",
    description: "This project acts as a storage for images and files, made for basic use, considering that only files inside the public folder are accepted, in the future it is possible to add support for some host platform to make file management easier!",
    technologies: ["Next.js", "React", "Tailwind", "Typescript"],
    imageUrl: "https://media.discordapp.net/attachments/1260466849804456036/1320603413133660190/image.png?ex=676a3345&is=6768e1c5&hm=682526dc395a1c9a9c1bde8510d4f01c2e40a998777d22189a054298c7ca8d91&=&format=webp&quality=lossless&width=1025&height=558",
    isPrivate: true
  },
  {
    title: "API - Licenses",
    description: "Well, let's go to the Back End? here we have an API that creates and checks licenses in the supabase database, this is an old project, at the time I didn't have that much experience, good news, this is public!",
    technologies: ["Javascript", "Supabase"],
    isPrivate: false,
    github: {
      owner: "Dn099z1",
      repo: "api-supabase"
    }
  },
  {
    title: "Website Connection",
    description: "Moving on to the fivem side, I have a basic connection system, to connect your fivem server to a website or vice versa, the javascript executes events in lua, by post or get method !",
    technologies: ["Lua", "Javascript"],
    isPrivate: false,
    github: {
      owner: "Dn099z1",
      repo: "connection",
      path: 'backend'
    }
  }
];

export function ProjectsSection() {
  return (
    <section id="projects" className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}