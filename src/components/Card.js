import { useSelector } from "react-redux";

const Card =()=> {

  const name = useSelector(state=>state.name)
  const surname= useSelector(state=>state.surname)

  return(
    <div>
      <p>Card !!!!!</p>
      <p>{"Adınız :"+name+" Soyadınız :"+surname}</p>
    </div>
  )

}

export default Card;