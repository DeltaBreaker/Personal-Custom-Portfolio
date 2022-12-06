export default function InfoContainer(props) {
  return (
    <info-container class="info-container">
      <h3 class="sub-header info-header">{props.name}</h3>
      {props.isLink ? (
        <a href={props.href}>{props.text}</a>
      ) : (
        <p>{props.text}</p>
      )}
    </info-container>
  );
}
