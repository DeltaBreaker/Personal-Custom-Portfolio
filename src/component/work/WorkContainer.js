export default function WorkContainer(props) {
  return (
    <work-container
      class="sub-container"
      id={props.first ? "first-container" : ""}
    >
      <h3 class="sub-header">{props.name}</h3>
      <a href={props.link} target="_blank" rel="noreferrer">
        <img src={props.src} alt="Preview of the project" />
      </a>
    </work-container>
  );
}
