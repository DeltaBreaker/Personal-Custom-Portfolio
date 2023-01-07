export default function WorkContainer(props) {
  return (
    <work-container
      class="sub-container"
      id={props.first ? "first-container" : ""}
    >
      <h3 class="sub-header">{props.name}</h3>
      <p>
        <img src={props.src} alt="Preview of the project" />
        {props.desc}
        <br></br>
        <br></br>
        {props.info}
        <br></br>
        <br></br>
        <a href={props.link}>Source</a>
        {props.depl ? <a href={props.depl}>View</a> : <></>}
      </p>
    </work-container>
  );
}
