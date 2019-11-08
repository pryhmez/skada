import { SET_ALERT, REMOVE_ALERT } from '../Types';

export default (state, action) => {
  switch (action.type) {
    case SET_ALERT:
       console.log("+++++++++++++++")
      console.log(state)
      console.log("+++++++++++++++")
      return {...state, alerts:[action.payload]};
    case REMOVE_ALERT:
      console.log("+++++++++++++++")
      console.log(state)
      console.log("+++++++++++++++")
      console.log(state)
      const { alerts }  = state;
      const al = [...alerts];
      console.log(al)
      const  index =  al.findIndex((alert) => {
        console.log(alert.id,  action.payload)
        return  alert.id === action.payload})
      al.splice(index,1)
      console.log(index)
      return {...state,  alerts:  al}
    default:
      return state;
  }
};
