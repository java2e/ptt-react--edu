const Input = (props) => {
  return (
    <div>
      <label for={props.for}>{props.title} </label>
      <input id={props.id} value={props.value} onChange={props.onChange} />
    </div>
  );
};

export default Input;
