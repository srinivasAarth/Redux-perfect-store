import React from 'react'
import Usefechcustomhook from '../Utils/useFetchCustomHook';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { selectItem } from '../Redux/Actions/Actions';
function ProductHomepage() {
    const dispatch = useDispatch()
     Usefechcustomhook('https://jsonplaceholder.typicode.com/users')
     const myData = useSelector(state =>state)
    //  console.log(myData.manipulatingReducer)

     const mappedData = myData.apiReducer.TotalProducts.map(e =><div onClick = {()=>dispatch(selectItem(e))} key = {e.name}>{e.name}</div>)
    return (
        <div>
            {myData.apiReducer.status === 'Loading' && <h3>loading</h3>}
            {myData.apiReducer.status === 'success' && mappedData}
        </div>
    )
}

export default ProductHomepage;

