// write your custom hook here to control your checkout form
import React, {useState} from 'react'

export const useForm = (initialValues) => {
    const [value, setValue] = useState(initialValues)

    const handleChanges = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        setValue(true);
      };

      return ([value, handleChanges, handleSubmit])
}