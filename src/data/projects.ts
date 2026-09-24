import { Project } from "@/types";

export const projectsData: Project[] = [
  {
    id: "project-1",
    title: "Islamabad Rent Cars",
    description:
      "A responsive car rental web application built from scratch based on client requirements and reference websites.",
    technologies: [
      "React.js",
      "Vite",
      "Tailwind CSS",
      "DaisyUI",
      "React Router",
    ],
    featured: true,
    category: "Frontend",
    image: "/images/projects/isl-rent-cars.png",
    liveUrl: "https://www.islamabadrentcars.com/",
    highlights: [
      "Developed the frontend using React, Vite, Tailwind CSS, and DaisyUI with reusable components and responsive layouts.",
      "Implemented client-side navigation using React Router.",
      "Optimized the interface for desktop, tablet, and mobile devices.",
      "Applied basic on-page SEO and performance optimization.",
      "Collaborated through Git/GitHub and deployed the website to a live production environment.",
    ],
  },

  {
    id: "project-2",
    title: "Sophy Experience",
    description:
      "A polished luxury event services website designed to showcase services, packages, galleries, testimonials, and enquiry opportunities.",
    technologies: ["WordPress", "Elementor Pro", "Figma", "GoHighLevel"],
    featured: true,
    category: "WordPress",
    image: "/images/projects/sophy-exp.png",
    liveUrl: "https://sophyexperience.co.uk/",
    highlights: [
      "Converted the client's Figma design into a responsive WordPress website using Elementor Pro.",
      "Built service, package, gallery, testimonial, FAQ, and enquiry sections.",
      "Created clear calls-to-action and lead-generation areas throughout the website.",
      "Integrated GoHighLevel forms and lead-capture workflows.",
      "Applied on-page SEO and performance optimization.",
    ],
  },

  {
    id: "project-3",
    title: "Leicester Google Ads",
    description:
      "A conversion-focused lead-generation website built to present services, pricing, case studies, testimonials, and enquiry options.",
    technologies: ["WordPress", "Elementor Pro", "Figma", "GoHighLevel"],
    featured: true,
    category: "WordPress",
    image: "/images/projects/leice-google.png",
    liveUrl: "https://leicestergoogleads.co.uk/",
    highlights: [
      "Translated the client's Figma design into a responsive WordPress website.",
      "Developed service, pricing, case study, testimonial, and FAQ sections.",
      "Implemented enquiry forms, WhatsApp integration, and conversion-focused CTAs.",
      "Integrated GoHighLevel forms and lead-capture workflows.",
      "Optimized the website for mobile responsiveness, performance, and on-page SEO.",
    ],
  },

  {
    id: "project-4",
    title: "Pro420 & CoastalNVG",
    description:
      "Custom e-commerce storefront development and functionality enhancements for production websites running on a proprietary commerce platform.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "jQuery",
      "Bootstrap 5",
      "SQL",
      "APIs",
    ],
    featured: true,
    category: "E-Commerce",
    image: "/images/projects/pro420.png",
    liveUrl: "https://pro420.bluetonemedia.com/",
    highlights: [
      "Customized product and shop pages within an existing e-commerce platform.",
      "Enhanced dynamic pricing, product displays, category navigation, wishlists, reviews, and interactive UI.",
      "Worked with existing APIs, SQL-driven functionality, endpoints, and template-based components.",
      "Improved storefront performance by frontend optimizations and better queries.",
      "Integrated and configured Klaviyo customer events, product data, and tracking functionality.",
      "Extended frontend functionality while working within the platform's existing architecture.",
    ],
  },

  {
    id: "project-5",
    title: "RZ Marble & Tile",
    description:
      "A professional business website focused on presenting services and company information through a clean and responsive interface.",
    technologies: [
      "WordPress",
      "Elementor Pro",
      "SEO",
      "Google Search Console",
    ],
    featured: true,
    category: "WordPress",
    image: "/images/projects/rz-marble.png",
    liveUrl: "https://rzmarbelandtile.com/",
    highlights: [
      "Developed and customized the website using WordPress and Elementor Pro.",
      "Created responsive desktop and mobile layouts.",
      "Structured service-focused content and navigation.",
      "Implemented on-page SEO, metadata, heading structure, and image optimization.",
      "Integrated and troubleshot Google Search Console.",
    ],
  },

  {
    id: "project-6",
    title: "MERN E-Commerce Application",
    description:
      "A full-stack e-commerce application built to demonstrate modern MERN stack development, authentication, API integration, and cloud services.",
    technologies: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "JWT",
      "Cloudinary",
      "REST APIs",
    ],
    featured: false,
    category: "Full Stack",
    image: "",
    githubUrl: "",
    liveUrl: "https://ecommerce-website-orpin-three.vercel.app/",
    highlights: [
      "Built REST APIs using Node.js and Express.js.",
      "Used MongoDB for application data and product management.",
      "Implemented JWT authentication and role-based access control.",
      "Built the frontend with React and integrated it with backend APIs.",
      "Implemented image uploads using Cloudinary.",
      "Integrated email functionality and deployed the application using modern cloud hosting platforms.",
    ],
  },
];
