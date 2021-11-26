import { manipulateActionTypes, typeValues } from "../ActionTypes/Actiontypes"

export const loadingAction = () =>{
    return {
        type : typeValues.LOADING
    }
}
export const successAction = () =>{
    return {
        type : typeValues.SUCCESS
    }
}
export const errorAction = () =>{
    return {
        type : typeValues.ERROR
    }
}
export const getDataAction = (jsonData) =>{
    
    return {
        type : typeValues.GET_DATA,
        payload : jsonData

    }
}
export const selectItem = (selectElement) =>{
    return {
        type : typeValues.SELECT_ITEM,
        payload : selectElement
        
    }
}
export const removeItem = (removedItem) =>{
    return {
       type : manipulateActionTypes.REMOVE_SELECTED_ITEM,
        payload : removedItem
       
    }
}


