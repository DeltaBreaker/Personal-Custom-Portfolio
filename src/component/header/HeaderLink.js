export default function HeaderLink(props) {
  return (
    <li>
      <a
        href={props.href}
        class="link"
        onClick={() => {
          if (props.state) {
            props.stateChange(props.state);
          }
        }}
      >
        {props.text}
      </a>
    </li>
  );
}
