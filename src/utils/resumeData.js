import { Facebook, Twitter, GitHub, WebOutlined } from "@mui/icons-material";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: "Ibnul",
  title: "Developer",
  birthday: "13 september 1997",
  email: "ibnulashir42@gmail.com",
  address: "6/2 North Adabor",
  phone: "+8801765427688",
  socials: {
    Facebook: {
      link: "https://facebook.com",
      text: "My Facebook",
      icon: <Facebook />,
    },
    Twitter: {
      link: "https://facebook.com",
      text: "My Twitter",
      icon: <Twitter />,
    },
    Github: {
      link: "https://facebook.com",
      text: "My Github",
      icon: <GitHub />,
    },
  },
  about: `Hi there, I'm Ibnul Ashir. I'm graduated from a university located in Dhaka, Bangladesh.\n
        My educational background is software engineering. In technologies`,
  experiences: [
    {
      title: "2019",
      date: "11/12/2019",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas et quae explicabo nisi blanditiis debitis atque perspiciatis, maxime numquam a",
    },
    {
      title: "2019",
      date: "11/12/2019",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas et quae explicabo nisi blanditiis debitis atque perspiciatis, maxime numquam a",
    },
    {
      title: "2019",
      date: "11/12/2019",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas et quae explicabo nisi blanditiis debitis atque perspiciatis, maxime numquam a",
    },
  ],
  education: [
    {
      title: "Eucation",
      date: "11/12/2019",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas et quae explicabo nisi blanditiis debitis atque perspiciatis, maxime numquam a",
    },
    {
      title: "Eucation2",
      date: "11/12/2019",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas et quae explicabo nisi blanditiis debitis atque perspiciatis, maxime numquam a",
    },
    {
      title: "Eucation3",
      date: "11/12/2019",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas et quae explicabo nisi blanditiis debitis atque perspiciatis, maxime numquam a",
    },
  ],
  services: [
    {
      title: 'web developer',
      description: "I'm a web developer",
      icon: <WebOutlined />
    },
    {
      title: 'web developer',
      description: "I'm a web developer",
      icon: <WebOutlined />
    },
    {
      title: 'web developer',
      description: "I'm a web developer",
      icon: <WebOutlined />
    }
  ],
  skills: [
    {
      title: 'front-end',
      description: [
        "reactjs",
        "javascript",
        "Bootstrap",
      ],      
    },
    {
      title: 'back-end',
      description: [
        "NodeJS",
        "Firebase",
        "MongoDB",
      ],      
    },
    {
      title: 'Source Control',
      description: [
        "Git",
        "Github",
      ],      
    },
  ]
};
