import HeaderLink from "./HeaderLink.js";

const LINK_DATA = [
  {
    href: "#about-me",
    text: "About Me",
  },
  {
    href: "#my-work",
    text: "My Work",
  },
  {
    href: "#contact-me",
    text: "Contact Me",
  },
];

export default function HeaderLinkList() {
  let links = [];
  for (const link of LINK_DATA) {
    links.push(<HeaderLink {...link} />);
  }
  return <ul id="header-links">{links}</ul>;
}
