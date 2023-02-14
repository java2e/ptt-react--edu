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
        veri:veri.slice(veri.length-1,veri.length)
      }
  }

  return state;
}




const store = createStore(listReducer);

export default store;