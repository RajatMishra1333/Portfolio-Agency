import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Rajat",
  lastName: "Mishra",
  name: `Rajat Mishra`,
  role: "full-stack developer",
  avatar: "/images/avatar.jpg",
  email: "rajatmishra1333@gmail.com",
  location: "Asia/Kolkata",
  languages: ["English", "Hindi", "Punjabi"],
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about web development and technology</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/RajatMishra1333",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/rajat2458",
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/rajat_2458/",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Think. Design. Develop. Launch. Repeat.</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">AllCreates</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I'm Rajat Mishra, a Web Developer at AllCreates{" "}
      <Logo
        dark
        icon="public/trademarks/wordmark-dark.svg"
        style={{ display: "inline-flex", top: "0.25em", marginLeft: "-0.25em" }}
      />
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://wa.me/917800582481?text=HII!! I want to sechedule a call meeting with you.",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Rajat is a Ludhiana-based full-stack developer with hands-on experience in building responsive web applications and e-commerce platforms. Proficient in the MERN stack, he has a strong focus on clean code practices and scalable architecture
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "FLY",
        timeframe: "2022 - Present",
        role: "Senior Design Engineer",
        achievements: [
          <>
            Designed and developed a professional showcase website for a
            Chartered Accountant to highlight services and achievements.
          </>,
          <>
            Implemented a clean, responsive, and SEO-friendly UI for mobile
            and desktop.
          </>,
          <>
            Integrated interactive sections for client testimonials, contact
            forms, and service inquiries.
          </>,
        ],
        images: [
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "AllCreates Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Wellship Clinic",
        timeframe: "May 2023 - Dec 2023",
        role: "Full-Stack Developer",
        achievements: [
          <>
            Designed and developed a responsive healthcare website from scratch
            (SDLC).
          </>,
          <>
            Implemented appointment booking, services section, and Google
            Maps API.
          </>,
          <>
            Built contact forms with backend integration for data collection.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "Bachelor of Commerce (B.Com)",
        description: <>Aug 2024 - Pursuing (CGPA: 7.1)</>,
      },
      {
        name: "Senior Secondary School",
        description: <>Aug 2023 - Jul 2024 (71%)</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "Frameworks & Libraries",
        description: (
          <>Proficient in the MERN stack and modern styling libraries.</>
        ),
        tags: [
          { name: "React.js", icon: "react" },
          { name: "Node.js", icon: "nodejs" },
          { name: "Express.js", icon: "express" },
          { name: "Tailwind CSS", icon: "tailwind" },
          { name: "Bootstrap", icon: "bootstrap" },
        ],
        images: [],
      },
      {
        title: "Database & Tools",
        description: (
          <>Experienced with NoSQL/SQL databases and development tools.</>
        ),
        tags: [
          { name: "MongoDB", icon: "mongodb" },
          { name: "MySQL", icon: "mysql" },
          { name: "Git", icon: "git" },
          { name: "GitHub", icon: "github" },
          { name: "DevOps", icon: "devops" },
        ],
        images: [],
      },
      {
        title: "Programming Languages",
        description: (
          <>Core languages for web and backend development.</>
        ),
        tags: [
          { name: "JavaScript", icon: "javascript" },
          { name: "Python", icon: "python" },
          { name: "HTML5", icon: "html" },
          { name: "CSS3", icon: "css" },
          { name: "SQL", icon: "sql" },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about web development and tech...",
  description: `Read what ${person.name} has been up to recently`,
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Full-stack and web projects by ${person.name}`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
