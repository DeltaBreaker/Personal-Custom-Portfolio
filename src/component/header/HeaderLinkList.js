import HeaderLink from "./HeaderLink.js";
import AboutMeContainer from "../AboutMeContainer.js";
import MyWorkContainer from "../work/MyWorkContainer.js";
// import ContactForm from "../info/ContactForm.js";

const LINK_DATA = [
  {
    href: "#",
    text: "About Me",
    state: <AboutMeContainer />,
  },
  {
    href: "#",
    text: "My Work",
    state: <MyWorkContainer />,
  },
  // {
  //   href: "#",
  //   text: "Contact Me",
  //   state: <ContactForm />,
  // },
];

export default function HeaderLinkList(props) {
  let links = [];
  for (const link of LINK_DATA) {
    links.push(<HeaderLink {...link} {...props} key={link.text} />);
  }
  return <ul id="header-links">{links}</ul>;
}
