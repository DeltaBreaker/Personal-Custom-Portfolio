import React from "react";
import { useState } from "react";
import Header from "./header/Header.js";
import AboutMeContainer from "./AboutMeContainer.js";
import ContactContainer from "./info/ContactContainer.js";

export default function ContentContainer() {
  const [content, setContent] = useState(<AboutMeContainer />);

  return (
    <content-container>
      <Header stateChange={setContent} key="header" />
      {content}
      <ContactContainer />
    </content-container>
  );
}
