import Image from "next/image";
import styles from "./ProfileCard.module.css";
import avatar from "@/public/images/dp.png";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

const ProfileCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image
          src={avatar}
          height={400}
          width={400}
          alt="profile picture of suraj"
        />
      </div>
      <h1 className={styles.name}>Hi, I&#39;m Suraj Katyayan</h1>
      <div className={styles.bio}>
        Experienced Frontend Developer with a versatile skill set that extends
        to Backend technologies. Proficient in{" "}
        <span>
          {" "}
          JavaScript, React, TypeScript, Nextjs, Node, MongoDB and GraphQL;
        </span>{" "}
        and specialized in turning conceptual ideas into elegant code.
      </div>
      <div className={styles.links}>
        <FaLinkedin className={styles.linkedin} size={"2em"} />
        <FaGithub className={styles.github} size={"2em"} />
        <FaXTwitter className={styles.twitter} size={"2em"} />
        <FaInstagram className={styles.instagram} size={"2em"} />
      </div>
      <button className={styles.button}>
        Contact me <IoMail className="react-icons" />
      </button>
    </div>
  );
};

export default ProfileCard;
