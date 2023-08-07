import { people, service, schedule, heroImage } from '../assets'

export const navLinks = [
  {
    id: "services",
    title: "Services",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "location",
    title: "Location",
  },
  {
    id: "contact-us",
    title: "Contact Us",
  },
];

export const BulletContent = [
  {
    id: 'about-us',
    title: 'About Us',
    description: 'We have a great team that can help you.',
    logo: people,
  },
  {
    id: 'our-services',
    title: 'Our Services',
    description: 'We provides various type of services',
    logo: service,
  },
  {
    id: 'set-schedule',
    title: 'Set a Schedule',
    description: 'Set your own schedule to get free inspection',
    logo: schedule,
  },
]

export const HeroContent ={
  id: "hero",
  tagline: "youre main value proposition",
  summarize: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
  image: heroImage,
}

