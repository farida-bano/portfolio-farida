"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Calendar, GraduationCap, Briefcase, Code2, User,Rocket } from "lucide-react";
import Container from "@/components/Container";

const tabMenu = [
  { title: "Experience", value: "experience", icon: Briefcase },
  { title: "Education", value: "education", icon: GraduationCap },
  { title: "Skills", value: "skills", icon: Code2 },
  { title: "About me", value: "about", icon: User },
  { title: "Projects", value: "projects", icon: Rocket},
];

const tabContent = {
  experience: {
    title: "Professional Experience",
    items: [
      {
        role: "Junior Frontend Developer",
        company: "GIAIC",
        period: "2024 - Present",
        description:
          "Led React/Next.js app development, boosting performance by 40%. Mentored 5+ juniors, enforced code quality (TypeScript, Agile, CI/CD), and integrated Python for scalable backend solutions.",
        highlights: ["Python", "Next.js", "TypeScript",],
      },
      {
        role: "Full Stack Developer",
        company: "Allied Tech Solutions",
        period: "2024 - 2025",
        description:
          "Developed and maintained full-stack applications using modern JavaScript frameworks. Collaborated with cross-functional teams to deliver high-quality solutions.",
        highlights: ["React", "Canva", "CSS", "HTML","JavaScript"],
      },
    ],
  },
  education: {
    title: "Educational Background",
    items: [
      {
        degree: "Master of Eduction ",
        institution: "Karachi  University",
        period: "2010 - 2012",
        description:
          "Specialized in educational theory, curriculum design, and pedagogical strategies. Conducted research on modern educational technology and psychological",
        achievements: ["4.0 GPA", "Specialized in educational theory, curriculum design, and pedagogical strategies. Conducted research on modern educational technology and psychological"],
      },
      {
        degree: "Professional Degree in Education",
        institution: "Karachi University",
        period: "2004 - 2008",
        description:
          "Foundation , principles of Education , method of teaching and educational psychology",
        achievements: ["Thesis ", "Reserch"],
      },
    ],
  },
  skills: {
    title: "Technical Skills",
    categories: [
      {
        name: "Frontend Development",
        description:
          "Proficient in modern development tools and DevOps practices that enhance collaboration and efficiency. Skilled in implementing automation workflows, cloud infrastructure management, and continuous integration/continuous delivery pipelines. Experienced with containerization technologies and version control systems to streamline development workflows, ensure environment consistency, and enable rapid deployment of applications.",
        skills: [
          "React",
          "Next.js",
          "TypeScript",
          "Tailwind CSS",

        ],
      },
      {
        name: "Backend Development",
        description:
          "Skilled in designing, building, and maintaining scalable server-side systems and APIs. Proficient in Python for developing robust backend logic, coupled with expertise in database design and management using both relational (PostgreSQL) and NoSQL (MongoDB) systems. Experienced in optimizing database queries, implementing RESTful APIs, and integrating third-party services to deliver high-performance, secure, and maintainable solutions",
        skills: [ "Python", "PostgreSQL", "MongoDB"],
      },
      {
        name: "Tools & Others",
        description:
          "Proficient in modern development tools and DevOps practices that enhance collaboration and efficiency. Skilled in implementing automation workflows, cloud infrastructure management, and continuous integration/continuous delivery pipelines. Experienced with containerization technologies and version control systems to streamline development workflows, ensure environment consistency, and enable rapid deployment of applications.",
        skills: ["Git", "Docker", "AWS", "CI/CD"],
      },
    ],
  },
  about: {
    title: "About Me",
    bio: "Passionate software developer with over 2 years of experience in building modern web applications. Committed to writing clean, maintainable code and staying current with emerging technologies. Strong advocate for user-centric design and accessibility.",
    interests: [
      "Open Source Contributing",
      "Tech Blogging",
      "UI/UX Design",
      "Machine Learning",
    ],
    languages: ["English", "Urdu (Native)"],
  },
  projects: {
    title:"Projects",
    projects: [
      {
        name: "Hackathon Project",
        tech: "Streamlit, Python",
        github: "https://github.com/farida-bano",
        description: " E commeres built in 7 days"
      },
      {
        name: "npm Package",
        tech: "Node.js",
        npm: "https://www.npmjs.com/~fari32086",
        description: "OOP Managment System https://www.npmjs.com/package/fbano1-oop-sys-man-ent"
      }
    ]
  }

};

export default function ResumePage() {
  return (
    <section className="flex flex-col justify-center text-white py-10">
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="w-full"
        >
          <Tabs
            defaultValue="experience"
            className="w-full flex flex-col md:flex-row gap-6 md:gap-10"
          >
            <TabsList className="flex md:flex-col h-full bg-transparent md:w-64 gap-4">
              {tabMenu.map((item) => (
                <TabsTrigger
                  key={item.value}
                  value={item.value}
                  className="bg-white/10 w-full py-2.5 text-white data-[state=active]:bg-hoverColor hover:bg-lightSky/50 text-xs sm:text-sm"
                >
                  <div className="flex items-center gap-1.5 md:w-[50%] md:gap-3">
                    <item.icon className="w-4 h-4 md:h-5 md:w-5" />
                    {item.title}
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>
            <div className="flex-1 min-h-[400px]">
              <TabsContent value="experience">
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-2xl font-bold mb-6 text-lightSky"
                >
                  {tabContent.experience.title}
                </motion.h2>
                <div className="space-y-6">
                  {tabContent.experience.items.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="border rounded-lg border-lightSky/20 p-6"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-lg font-semibold">{item.role}</h3>
                          <p className="text-muted-foreground">
                            {item.company}
                          </p>
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-2" />
                          {item.period}
                        </div>
                      </div>
                      <p className="mb-4">{item.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {item.highlights.map((highlight, i) => (
                          <Badge variant="secondary" key={i}>
                            {highlight}
                          </Badge>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="education">
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-2xl font-bold mb-6 text-lightSky"
                >
                  {tabContent.education.title}
                </motion.h2>
                <div className="space-y-6">
                  {tabContent.education.items.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="border rounded-lg border-lightSky/20 p-6"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-lg font-semibold">
                            {item.degree}
                          </h3>
                          <p className="text-muted-foreground">
                            {item.institution}
                          </p>
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-2" />
                          {item.period}
                        </div>
                      </div>
                      <p className="mb-4">{item.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {item.achievements.map((achievement, i) => (
                          <Badge variant="secondary" key={i}>
                            {achievement}
                          </Badge>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="skills">
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-2xl font-bold mb-6 text-lightSky"
                >
                  {tabContent.skills.title}
                </motion.h2>
                <div className="space-y-6">
                  {tabContent.skills.categories.map((category, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="border rounded-lg border-lightSky/20 p-6"
                    >
                      <h3 className="text-lg font-semibold mb-4">
                        {category.name}
                      </h3>
                      <p className="text-sm text-white/60 mb-4 font-normal leading-7">
                        {category.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill, i) => (
                          <Badge variant="secondary" key={i}>
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="about">
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-2xl font-bold mb-6 text-lightSky"
                >
                  {tabContent.about.title}
                </motion.h2>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="border rounded-lg border-lightSky/20 p-6"
                >
                  <p className="mb-6 text-lg">{tabContent.about.bio}</p>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Interests</h3>
                      <div className="flex flex-wrap gap-2">
                        {tabContent.about.interests.map((interest, i) => (
                          <Badge variant="secondary" key={i}>
                            {interest}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Languages</h3>
                      <div className="flex flex-wrap gap-2">
                        {tabContent.about.languages.map((language, i) => (
                          <Badge variant="secondary" key={i}>
                            {language}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </TabsContent>
              <TabsContent value="projects">
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-2xl font-bold mb-6 text-lightSky"
                >
                  {tabContent.projects.title}
                </motion.h2>
                <div className="space-y-6">
                  {tabContent.projects.projects.map((project, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="border rounded-lg border-lightSky/20 p-6"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-lg font-semibold">{project.name}</h3>
                          <p className="text-muted-foreground">{project.tech}</p>
                        </div>
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-lightSky hover:underline"
                          >
                            GitHub
                          </a>
                        )}
                        {project.npm && (
                          <a
                            href={project.npm}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-lightSky hover:underline ml-4"
                          >
                            NPM
                          </a>
                        )}
                      </div>
                      <p>{project.description}</p>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </motion.div>
      </Container>
    </section>
  );
}
