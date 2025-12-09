import { FacebookIcon, InstagramIcon, LinkedinIcon, MailIcon, MapIcon, PhoneIcon, TwitterIcon } from "lucide-react";

const route = [
  {
    id: 1,
    name: "home",
    path: "/",
  },
  { id: 2, name: "about", path: "/about" },
  {
    id: 3,
    name: "services",
    path: "/services",
  },
  {
    id: 4,
    name: "career",
    path: "/career",
  },
];

const contacts = [
  {
    id: 1,
    name: "loaction",
    value: "123 Main St, Anytown, USA",
    icon: <MapIcon />,
  },
  {
    id: 2,
    name: "email",
    value: "info@example.com",
    icon: <MailIcon />,
  },
  {
    id: 3,
    name: "phone",
    value: "+1234567890",
    icon: <PhoneIcon />,
  },
];

const socialMedia = [
  {
    id: 1,
    name: "facebook",
    icon: <FacebookIcon />,
    url: "https://www.facebook.com/your-page",
  },
  {
    id: 2,
    name: "twitter",
    icon: <TwitterIcon />,
    url: "https://www.twitter.com/your-page",
  },
  {
    id: 3,
    name: "instagram",
    icon: <InstagramIcon />,
    url: "https://www.instagram.com/your-page",
  },

  {
    id: 4,
    name: "linkedin",
    icon: <LinkedinIcon />,
    url: "https://www.linkedin.com/your-page",
  },
];

export { route, contacts, socialMedia };
