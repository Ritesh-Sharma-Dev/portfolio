import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";

export const DATA = {
  name: "Ritesh Sharma",
  initials: "RS",
  url: "https://riteshportfolio.com",
  location: "Gangtok, Sikkim 737102",
  locationLink: "https://www.google.com/maps/place/gangtok",
  description:
    "Frontend Developer & UI/UX Designer. I create beautiful, performant web experiences with modern technologies.",
  summary:
    "I am a passionate Frontend Developer and UI/UX Designer with 1.5 years of experience building modern web applications. I specialize in creating stunning, user-friendly interfaces using Next.js, React, and cutting-edge design tools. Currently working at [Bolds Innovation](/#work) as a Frontend and UI/UX Developer, I've successfully delivered multiple high-impact projects for diverse clients.",
  avatarUrl: "/dp.jpeg",
  skills: [
    { name: "Next.js", icon: NextjsIconDark },
    { name: "React", icon: ReactLight },
    { name: "HTML", icon: ReactLight },
    { name: "CSS", icon: ReactLight },
    { name: "Tailwind CSS", icon: ReactLight },
    { name: "Three.js", icon: ReactLight },
    { name: "Framer Motion", icon: ReactLight },
    { name: "Shadcn UI", icon: ReactLight },
    { name: "DaisyUI", icon: ReactLight },
    { name: "Adobe Photoshop", icon: ReactLight },
    { name: "Adobe After Effects", icon: ReactLight },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "riteshsharmacoder@gmail.com",
    tel: "+919679757185",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Ritesh-Sharma-Dev",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ritesh-sharma-8b7a553aa/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://twitter.com/riteshsharma",
        icon: Icons.x,

        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "https://youtube.com/@riteshsharma",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Bolds Innovation",
      href: "https://bolds.in",
      badges: [],
      location: "Remote",
      title: "Frontend & UI/UX Developer",
      logoUrl: "/bi.png",
      start: "Oct 2025",
      end: "Present",
      description:
        "Leading frontend development and UI/UX design for multiple client projects. Developed responsive, modern web applications using Next.js, React, and Tailwind CSS. Created engaging user interfaces with Framer Motion animations and Three.js 3D elements. Designed UI/UX workflows using Adobe Photoshop and After Effects. Successfully delivered 8+ production projects including IPGA, Gramin Link, and other high-impact applications.",
    },
  ],
  education: [
    {
      school: "SRM University",
      href: "https://srmuniversity.ac.in",
      degree: "Bachelor of Computer Applications (BCA)",
      logoUrl: "/srm.png",
      start: "2021",
      end: "2024",
    },
  ],
  projects: [
    {
      title: "Mokawaii",
      href: "https://mokawaii.com",
      dates: "2024",
      active: true,
      description:
        "Developed a modern e-commerce platform with stunning UI/UX design and smooth animations.",
      technologies: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "Framer Motion",
      ],
      links: [
        {
          type: "Website",
          href: "https://mokawaii.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "./moka.png",
      video: "",
    },
    {
      title: "Agarwal Tapes",
      href: "https://www.agarwaltapes.com",
      dates: "2024",
      active: true,
      description:
        "Corporate website for Agarwal Tapes with modern design and responsive layout.",
      technologies: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.agarwaltapes.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "./agar.png",
      video: "",
    },
    {
      title: "IPGA",
      href: "https://ipga.bolds.fun/",
      dates: "2024",
      active: true,
      description:
        "Interactive web application built for IPGA with advanced UI components and animations.",
      technologies: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "Three.js",
        "Framer Motion",
      ],
      links: [
        {
          type: "Website",
          href: "https://ipga.bolds.fun/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "./ipga.png",
      video: "",
    },
    {
      title: "Sikkimaa",
      href: "https://sikkimaa.org/",
      dates: "2024",
      active: true,
      description:
        "Official website for Sikkimaa organization with clean design and user-friendly interface.",
      technologies: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "DaisyUI",
      ],
      links: [
        {
          type: "Website",
          href: "https://sikkimaa.org/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "./ma.png",
      video: "",
    },
    {
      title: "GoSadam",
      href: "https://gosadam.com/",
      dates: "2024",
      active: true,
      description:
        "E-commerce platform with modern UI and seamless user experience.",
      technologies: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://gosadam.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "./sadam.png",
      video: "",
    },
    {
      title: "Thapa Holidays",
      href: "https://www.thapaholidays.com/",
      dates: "2024",
      active: true,
      description:
        "Travel and tourism website with beautiful imagery and intuitive booking interface.",
      technologies: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "Framer Motion",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.thapaholidays.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "./thapa.png",
      video: "",
    },
    {
      title: "Trip Vision",
      href: "https://tripvision.in/",
      dates: "2024",
      active: true,
      description:
        "Travel planning platform with interactive features and modern design.",
      technologies: [
        "Next.js",
        "React",
        "Tailwind CSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://tripvision.in/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "./trip.png",
      video: "",
    },
    {
      title: "Gramin Link",
      href: "https://graminlink.bolds.fun/",
      dates: "2024",
      active: true,
      description:
        "Rural connectivity platform with accessible design and responsive layout.",
      technologies: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://graminlink.bolds.fun/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "./gramin.png",
      video: "",
    },
  ],
  hackathons: [] as Array<{
    title: string;
    dates: string;
    location: string;
    description: string;
    image?: string;
    mlh?: string;
    win?: string;
    links?: Array<{
      title: string;
      icon: any;
      href: string;
    }>;
  }>,
} as const;
