import { createStore } from "redux";


const counterReducer =(state={counter:20},action)=>{

  if(action.type === 'increment') {

    return {
      counter: state.counter + 1
    }

  }
  else if(action.type === 'decrement') {

    return {
      counter:state.counter - 1
    }

  }

  return state;

}

const dataReducer=(state={veri:[]},action) =>{

  if(action.type==="ekle") {

    return {
      name:action.data.name,
      surname:action.data.surname
    }

  }
  else if(action.type === 'sil'){
    return {
      name: "",
      surname:""
    }

  }

  return state;



}

const store = createStore(dataReducer);

export default store;