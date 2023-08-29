import { affordable, bug, chemical, linkedin, facebook, twitter, instagram, whatsappIcon, 
         photo8, photo5, photo3, photo1,
         photo16, photo18, photo11, photo17, photo19, photo9,
         commercial, residential, construction, industrial, government, restaurant,
         fly, cockroaches, bedbug,mosquito, termite, fleas, ants, rats, birds, disinfection,
         testimony, } from '../assets'

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "services",
    title: "Services",
  },
  {
    id: "why-us",
    title: "Why Us",
  },
  {
    id: "pests",
    title: "Pests Library",
  },
  {
    id: "news",
    title: "News & Tips"
  },
  {
    id: "contact-us",
    title: "Contact Us",
  },
];

export const BulletContent = [
  {
    id: 'affordable-price',
    title: 'Affordable Price',
    description: 'We have a great services yet we also offer an affordable price.',
    logo: affordable,
  },
  {
    id: 'our-services',
    title: 'Our Services',
    description: 'We provides various type of services',
    logo: bug,
  },
  {
    id: 'set-schedule',
    title: 'Save Chemical',
    description: 'Set your own schedule to get free inspection',
    logo: chemical,
  },
]

export const HeroContent ={
  id: "hero",
  tagline: "your main value proposition",
  summarize: "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.",
  image: [photo8, photo5, photo3, photo1 ],
}

export const AboutUsContent ={
  about : "Established in 2005, TITAN PEST SOLUTION SDN BHD is a company that provides professional pest management and termite control services in Malaysia. Our headquarter is situated in Cheras, Selangor. Exceptional customer service plays a major role in our company as we want customers to feel satisfied when they visit us. If you require any assistance, please do not hesitate to contact us.",
  hook : "Industry-Leading Exterminator Experience At TITAN PEST SOLUTION, we take a proactive approach to solve pest problem by offering you advice on how to make your premises less attractive to pest."
}

export const SlidersContent =[
  {
    alt : "photo8",
    image: photo11,
  },
  {
    alt : "photo8",
    image: photo16,
  },
  {
    alt : "photo8",
    image: photo18,
  },
  {
    alt : "photo8",
    image: photo17,
  },
  {
    alt : "photo8",
    image: photo19,
  },
  {
    alt : "photo8",
    image: photo9,
  },
]

export const WorkAreaContent = [
  {
    id: "commercial",
    title: "commercial",
    image: commercial,
  },
  {
    id: "residential",
    title: "residential",
    image: residential,
  },
  {
    id: "construction",
    title: "construction",
    image: construction,
  },
  {
    id: "industrial",
    title: "industrial",
    image: industrial,
  },
  {
    id: "government",
    title: "government",
    image: government,
  },
  {
    id: "restaurant",
    title: "food & beverage",
    image: restaurant,
  },
]

export const ServicesContent = [
  {
    id: "flies", name: "Flies", image: fly,
  },
  {
    id: "cockroaches", name: "Cockroaches", image: cockroaches,
  },
  {
    id: "bed-bug", name: "Bedbug", image: bedbug,
  },
  {
    id: "mosquito", name: "Mosquito", image: mosquito,
  },
  {
    id: "termite", name: "Termite", image: termite,
  },
  {
    id: "fleas", name: "Fleas", image: fleas,
  },
  {
    id: "ants", name: "Ants", image: ants,
  },
  {
    id: "rats-rodents", name: "Rats/Rodents", image: rats,
  },
  {
    id: "birds", name: "Birds", image: birds,
  },
  {
    id: "disinfection", name: "Disinfection", image: disinfection,
  },
]

export const TestimonyContent = [
  {
    id: "name",
    name: "sukiran",
    title: "manager of Titan Pest Solution",
    comment: "We had recurrent termite infestation in our house. We tried a few termite companies buy the termites kept coming back. Then, I found Ridpest. They investigated the problem and I liked it when they explained the steps to me. Ridpest's termite baiting system solved our problem in a short time. They gave me the level of assurance and comfort. I'm so happy with Ridpest.",
    image: testimony,
  },
  {
    id: "name",
    name: "cockroaches",
    title: "manager of Titan Pest Solution",
    comment: "We had recurrent termite infestation in our house. We tried a few termite companies buy the termites kept coming back. Then, I found Ridpest. They investigated the problem and I liked it when they explained the steps to me. Ridpest's termite baiting system solved our problem in a short time. They gave me the level of assurance and comfort. I'm so happy with Ridpest.",
    image: cockroaches,
  },
  {
    id: "name",
    name: "birds",
    title: "manager of Titan Pest Solution",
    comment: "We had recurrent termite infestation in our house. We tried a few termite companies buy the termites kept coming back. Then, I found Ridpest. They investigated the problem and I liked it when they explained the steps to me. Ridpest's termite baiting system solved our problem in a short time. They gave me the level of assurance and comfort. I'm so happy with Ridpest.",
    image: birds,
  },
]

export const footerLinks = [
  {
    title: "Address",
    name: "Titan Pest Solution Sdn.Bhd.",
    companyNum : "(QWER12-Q)",
    address: "No. 7, Jalan Wangsa Setia 1, Wangsa Melawati",
    city: "Bayan Baru",
    poscode: "12345",
    district: "Pulau Pinang",
    nation: "Malaysia",
  },
  {
    title: "Contact Info",
    contactNum: "1234567890",
    email: "youremail@gmail.com",
  },
  {
    title: "Explore",
    links: [
      {
        name: "About Us",
        link: "about",
      },
      {
        name: "Pest Library",
        link: "pests",
      },
      {
        name: "News & Tips",
        link: "news",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: whatsappIcon,
    link: "https://www.linkedin.com/",
  },
];
