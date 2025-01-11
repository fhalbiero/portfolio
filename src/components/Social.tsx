import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";


const SOCIALS = [
  { icon: FaGithub, path: "https://github.com/fhalbiero" },
  { icon: FaLinkedin, path: "https://www.linkedin.com/in/fabioalbiero/" },
];

type SocialProps = {
  containerStyle?: string;
  iconStyle?: string;
};

export default function Social({ containerStyle, iconStyle }: SocialProps) {
  return (
    <div className={containerStyle}>
      {SOCIALS.map((item, idx) => {
        const Icon = item.icon;
        return (
          <Link key={idx} href={item.path} className={iconStyle}>
            <Icon />
          </Link>
        );
      })}
    </div>
  )
}
