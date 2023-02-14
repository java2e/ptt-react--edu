import { createStore } from "redux";



const listReducer=(state={veri:[]},action)=> {
  debugger
  if(action.type === 'ekle') {
    debugger
    return {
      veri:[...state.veri,action.data]
    }
  }
  else if(action.type === 'sil'){
      const {veri} = state;

     
      return {
        veri:veri.slice(0,-1)
      }
  }

  else if(action.type === 'kolonSil') {

    const {veri} = state;

    const lastVeri = veri.filter(v=> v.tc !== action.data.id)

    return {
      veri: lastVeri
    }

  }

  return state;
}




const store = createStore(listReducer);

export default store;