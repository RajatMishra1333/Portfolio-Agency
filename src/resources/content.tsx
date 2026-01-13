import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Rajat",
  lastName: "Mishra",
  name: `AllCreates`,
  role: "Design Developer",
  avatar: "",
  email: "rajatmishra1333@gmail.com",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Hindi" , "Punjabi"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/RajatMishra1333",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/rajat_2458",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/rajat_2458",
    essential: false,
  },
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.com/rajat_2458",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:{rajatmishra1333@gmail.com}`,
    essential: true,
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
    I'm Rajat, a design developer at <Text as="span" size="xl" weight="strong">AllCreates</Text>, where I craft intuitive <br /> user experiences. After hours, I build my own projects.
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
    link: "https://cal.com",
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
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "WHY",
        timeframe: "2023 - 2024",
        role: "Full Stack Site ",
        achievements: [
          <>
            Redesigned the UI/UX for the WHY platform, resulting in a 20% increase in user
            engagement and 30% faster load times.
          </>,
          <>
            Spearheaded the integration of AI tools into design workflows, enabling designers to
            iterate 50% faster.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "AllCreates",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "BigsMall",
        timeframe: "2024 - 2024",
        role: "UI Improvement",
        achievements: [
          <>
            Developed a design system that unified the brand across multiple platforms, improving
            design consistency by 40%.
          </>
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
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
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
