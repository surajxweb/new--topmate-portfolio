import { fetchProjects } from "@/lib/actions";
import styles from "./Projects.module.css";
import ProjectCard from "@/components/ProjectCard";

const Page = async () => {
  const projects = await fetchProjects(20);
  return (
    <div className="page">
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
    </div>
  );
};

export default Page;
