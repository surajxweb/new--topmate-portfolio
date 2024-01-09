import Image from "next/image";
import styles from "./ProjectCard.module.css";
import Link from "next/link";

const ProjectCard = ({
  image,
  title,
  bio,
  demo,
  code,
  tech,
}: {
  image: string;
  title: string;
  bio: string;
  demo: string;
  code: string;
  tech: string;
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image src={image} height={200} width={421} alt="project image" />
        {/* <Image src={image} height={180} width={378} alt="project image" /> */}
      </div>
      <div className={styles.info}>
        <div className={styles.title}>{title}</div>
        <div className={styles.bio}>{bio}</div>
        <div className={styles.tech}>Tech Stack Used: {tech}</div>
        <div className={styles.links}>
          <Link target="_blank" className={styles.demo} href={demo}>
            Show Deployed Site
          </Link>
          <Link target="_blank" className={styles.code} href={code}>
            Show Code
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
