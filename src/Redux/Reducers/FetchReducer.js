import { typeValues } from "../ActionTypes/Actiontypes"

const initialValues = {
    TotalProducts : [

    ],
    error : false,
    status : 'idle',

}

const FetchReducer = (state = initialValues , action ) =>{
   switch(action.type){
       case typeValues.LOADING : {
         return {
             ...state,
             status : state.status = 'Loading'
         }
       }
       case typeValues.SUCCESS  :{
        return {
            ...state,
            status : state.status = 'success'
        }
       }
       case typeValues.ERROR : {
        return {
            ...state,
            error : state.error = true
        }
       }
       case typeValues.GET_DATA : {
         
        return {
            ...state,
            TotalProducts : state.TotalProducts = action.payload
        }
       }
       default : return state
   }
}
export default FetchReducer;