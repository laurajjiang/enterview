export default function ResourceCard(props) {
  return (
    <div>
      <img src={props.img} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
}
