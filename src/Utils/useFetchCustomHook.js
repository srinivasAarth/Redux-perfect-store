import React from 'react';
import { useDispatch } from 'react-redux';
import {  loadingAction  , getDataAction, successAction, errorAction  } from '../Redux/Actions/Actions';


const Usefechcustomhook = (Link) => {
   const dispatch = useDispatch()
   
  
  

   const fetching = React.useCallback(async()=> {
      try{
       
         dispatch(loadingAction())
      const fetchedData = await fetch(Link)
      const jsonData = await fetchedData.json()
      
      dispatch(getDataAction(jsonData))
      dispatch(successAction())
    
      }
      catch(Error){
         dispatch(errorAction())
      }
   },[Link , dispatch])
   React.useEffect(() => {
      fetching()
   }, [fetching]);

 
   
   


  return [];
}
 

export default Usefechcustomhook;