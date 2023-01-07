import InfoContainer from "./InfoContainer";

const CONTACT_INFO = [
  {
    name: "LinkedIn",
    text: "https://linkedin.com/in/wcrain",
    href: "https://linkedin.com/in/wcrain",
    isLink: true,
  },
  {
    name: "Github",
    text: "https://github.com/DeltaBreaker",
    href: "https://github.com/DeltaBreaker",
    isLink: true,
  },
];

export default function ContactContainer() {
  let info = [];
  for (const contact of CONTACT_INFO) {
    info.push(<InfoContainer {...contact} />);
  }
  return (
    <contact-me-container id="contact-me">
      <h2 class="header">Links</h2>
      <contact-information-container>{info}</contact-information-container>
    </contact-me-container>
  );
}
