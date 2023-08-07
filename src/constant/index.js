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
  tagline: "your main value proposition",
  summarize: "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.",
  image: heroImage,
}

