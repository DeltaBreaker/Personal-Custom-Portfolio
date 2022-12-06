import Header from "./header/Header.js";
import AboutMeContainer from "./AboutMeContainer.js";
import MyWorkContainer from "./work/MyWorkContainer.js";
import ContactContainer from "./info/ContactContainer.js";

export default function ContentContainer() {
  return (
    <content-container>
      <Header />
      <AboutMeContainer />
      <MyWorkContainer />
      <ContactContainer />
    </content-container>
  );
}
