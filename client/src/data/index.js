import {
  algorithms,
  devnotes,
  oscs,
  elcano,
  galileo,
  ticketByte,
} from "../assets";

export const navLinks = [
  {
    id: "hero",
    title: "Hero",
  },
  {
    id: "portfolio",
    title: "Portfolio",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const experiences = [
  {
    title: "Software Developer",
    company_name: "PUGG.io",
    date: "May 2022 - December 2022",
    details: [
      "Proficiently led MERN stack projects and hosted them on DigitalOcean, ensuring high performance and reliability.",
      "Spearheaded team of 2 developers and 3 graphic designers to develop p5js mini games in order to boost user engagement and retention. The games increased user retention by more than 80%.",
      "Implemented Discord and Twitter OAuth enhancing user authentication.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Iraj Web",
    date: "July 2021 - March 2022",
    details: [
      "Developed and deployed web applications for over 10 clients using React and Next including an ecommerce platform.",
      "Designed user interfaces for 4 websites in Figma, incorporating modern design trends such as glassmorphism.",
      "Integrated payment gateways including Stripe and Razorpay to facilitate secure transactions.",
      "Implemented and maintained CI/CD pipelines to streamline development and deployment."
    ],
  },
  {
    title: "Tech Team Director",
    company_name: "IEEE Student Branch University of Toronto",
    date: "November 2022 - Present",
    details: [
      "Organized workshops for 300+ students for DSA, edge AI, embedded system and full stack development.",
      "Developed embedded systems curriculum (guides, weekly worksheets and labs) to teach first year associates.",
    ],
  },
];

const portfolio = [
  {
    name: "Elcano",
    description:
      "A Course Selection Website for University of Toronto ECE Students (Faculty Approved)",
    image: elcano,
  },
  {
    name: "Galileo",
    description:
      "Developing Galileo to make learning about AI easier and more efficient by bringing together information from various sources such as academic papers, videos, and blogs. It leverages NLP to deliver this knowledge in a clear and concise manner, with a strong emphasis on using graphical representations to aid in understanding.",
    image: galileo,
  },
  {
    name: "ticketByte",
    description:
      "A blockchain-based platform for buying and managing concert tickets on the Hedera network, offering secure, transparent transactions, easy revenue claiming, and ticket freezing to prevent ticket scalping.",
    image: ticketByte,
  },
];

export { experiences, portfolio };

