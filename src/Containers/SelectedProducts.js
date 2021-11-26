import React from 'react'
import { useSelector } from 'react-redux'
import { removeItem } from '../Redux/Actions/Actions'
import { useDispatch } from 'react-redux'
function SelectedProducts() {
    const dispatch = useDispatch()
const selectedData = useSelector(state => state)
// console.log(selectedData.manipulatingReducer.selectedElements)
const mappedData = selectedData.manipulatingReducer.selectedElements.map(el =><div onClick = {() =>dispatch(removeItem(el))} key = {el.name} >{el.name}</div>)
    return (
        <div>
            {selectedData.manipulatingReducer.selectedElements.length !== 0 && mappedData}
        </div>
    )
}

export default SelectedProducts
