import HeaderLinkList from "./HeaderLinkList.js";

export default function Header(props) {
  return (
    <header>
      <h1 class="header" id="main-header">
        William Crain
      </h1>
      <HeaderLinkList {...props} />
    </header>
  );
}
