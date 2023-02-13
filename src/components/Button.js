const Button = (props) => {
  return (
    <div>
      <button onClick={props.click}>{props.title}</button>
    </div>
  );
};

export default Button;
