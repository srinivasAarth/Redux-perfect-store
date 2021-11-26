import { manipulateActionTypes, typeValues } from "../ActionTypes/Actiontypes";

const selectedData = {
    selectedElements : []
}
function ManipulatReducer(state = selectedData , action) {
    switch(action.type){
        case typeValues.SELECT_ITEM :{
            return {
                ...state,
                selectedElements : [...state.selectedElements, action.payload]
            }
        }
        case manipulateActionTypes.REMOVE_SELECTED_ITEM : {
            return {
                ...state,
                selectedElements : state.selectedElements.filter(el => el !==action.payload && el)
            }
        }
        default : return state 
    }
   
}

export default ManipulatReducer;
