import { useState } from "react";


const useForm = (initialForm={}) => {
    const [stateForm, setStateForm]=useState(initialForm)

   
    const setInputChange=({target})=>{
       const {name, value}=target;
       setStateForm({
        ...stateForm,
        [name]: value
       })
    }
    const onResetForm=()=>{
        setStateForm(initialForm)
    }
  
  
  
    return {
        ...stateForm,
        stateForm,
        setInputChange,
        onResetForm
  }
}

export default useForm
