import "./Card.css";

function Card(props) {
  // white space is needed for concatenating classes together
  const classes = "card " + props.className;
  return (
    <div className={classes}>{props.children}</div>
  ) 
}

export default Card;