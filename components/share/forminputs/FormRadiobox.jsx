import React from 'react'
import Radio from '@mui/material/Radio';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from "@mui/material/RadioGroup";
import { Controller } from 'react-hook-form'

const FormInputRadio = ({ control, handleCheckboxChange, formData, labelField, radioData, name, className }) => {
  return (
    <>
      <FormLabel className={className}>{labelField}</FormLabel>
      <Controller control={control} name={name}
        rules={{ required: "This field is required" }}
        render={({ field }) => (
            <div className={className}>
          <RadioGroup className={className} name="controlled-radio-buttons-group" {...field}>
            {radioData.map((item,index) => (
              <FormControlLabel
              key={index}
                value={item.value}
                control={<Radio
                  checked={formData.gender == item.value }
                  onChange={handleCheckboxChange}
                  name={name}
                  value={item.value}
                />
                }
                label={item.label} />
            ))} 
          </RadioGroup>
          </div>

        )} />
    </>
  )
}

export default FormInputRadio 
