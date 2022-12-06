export default function HeaderLink(props) {
  return (
    <li>
      <a href={props.href} class="link">
        {props.text}
      </a>
    </li>
  );
}
