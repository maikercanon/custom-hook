import { useEffect, useState } from 'react'

const useFetch = (url) => {
    const [state, setState]=useState({
        data: null,
        isLoading: true,
        hasError: null
    })
    const getQuotes=async()=>{
        setState({
            ...state,
            isLoading:true
        })
        const resp=await fetch(url)
        const data=await resp.json();
       
        setState({
            data,
            isLoading:false,
            hasError:null
        })
        console.log(data);
    }
    useEffect(()=>{
        getQuotes()
    },[url])

  return {data:    state.data,
        isLoading: state.isLoading,
        hasError:  state.hasError
};
   
  
}

export default useFetch
