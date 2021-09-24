import { Facebook, Twitter, GitHub } from '@mui/icons-material';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    name: "Ibnul",
    title: "Developer",
    birthday: "13 september 1997",
    email: "ibnulashir42@gmail.com",
    address: "6/2 North Adabor",
    phone: "+8801765427688",
    socials:{
        Facebook: {
            link: 'https://facebook.com',
            text: "My Facebook",
            icon: <Facebook />
        },
        Twitter: {
            link: 'https://facebook.com',
            text: "My Twitter",
            icon: <Twitter />
        },
        Github: {
            link: 'https://facebook.com',
            text: "My Github",
            icon: <GitHub />
        }
    },
    about:
        `Hi there, I'm Ibnul Ashir. I'm graduated from a university located in Dhaka, Bangladesh.\n
        My educational background is software engineering. In technologies`,
}