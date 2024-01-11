import Image from "next/image";
import styles from "./page.module.css";
import { fetchProjects } from "@/lib/actions";
import Link from "next/link";
import { FaDownLong } from "react-icons/fa6";
import ProjectCard from "@/components/ProjectCard";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Suraj Codes",
  description: "A Developer Portfolio.",
};

export default async function Home() {
  const projects = await fetchProjects(4);

  return (
    <main className="page">
      <div className={styles.section}>
        <h2 className={styles.title}>About Me</h2>
        <div className={styles.content}>
          As a proficient web developer with over a year of experience in an
          e-commerce startup environment, I am actively seeking new
          opportunities to leverage my expertise in JavaScript, React, Next.js
          and MongoDB to turn your ideas into beautiful web experiences.
          <Link className={styles.resume} href={"resume"} target="_blank">
            Download Resume <FaDownLong />
          </Link>
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.title}>Projects</h2>
        <div className={styles.projectList}>
          {projects?.map((project: any) => (
            <ProjectCard
              image={project.projectImage.url}
              title={project.projectName}
              bio={project.projectDescription}
              code={project.codeurl}
              demo={project.siteurl}
              tech={project.techUsed}
              key={project.id}
            />
          ))}
        </div>
        <div className={styles.showMore}>
          <Link href={"/projects"}>Show more</Link>
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.title}>Work Experience</h2>
        <div className={styles.content}>
          <div></div>
          <div></div>
        </div>{" "}
      </div>

      <div className={styles.section}>
        <h2 className={styles.title}>My Skillset</h2>
        <div className={styles.content}>
          HTML, CSS, JavaScript, TypeScript, Nextjs, React, Redux Toolkit, React Testing Library, Jest, React
          Hook Form, Zod Validation, Framer Motion, CSS Modules, Styled
          Components, Tailwind CSS, Shadcn, Redix UI, Material UI, Nodejs,
          MongoDB, GraphQL, Postman and Git Version Control.
          <div></div>
        </div>{" "}
      </div>

      <div className={styles.section}>
        <h2 className={styles.title}>Education</h2>
        <div className={styles.content}>
          <div>Masters in Computer Applications</div>
          <div>Vellore Institute of Technology, Vellore</div>
          <div>8.64 CGPA</div>
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.title}>More about me</h2>
        <div className={styles.content}>
          I enjoy reading books and writing blogs, and I find astronomy
          fascinating. Cinema is a significant interest of mine, and I have a
          particular love for Star Wars, Batman, Spiderman, and John Wick. Among
          all films, Interstellar holds a special place as my favorite.
        </div>
      </div>
    </main>
  );
}
