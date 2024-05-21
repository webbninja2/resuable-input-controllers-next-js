import React from "react";
import { Controller } from 'react-hook-form';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';

const InputCheckBox = ({ control, name, checkBoxData, label, className }) => {
  return (
    <div>
      <FormLabel className="text-left block" >{label}</FormLabel> 
      <div className={className}>
      {checkBoxData.map((item, index) => {
        return (
          <label className="" key={item.value}>
            <Controller
              name={`${name}[${item.value}]`}
              defaultValue={index === 0 ? true : false}
              control={control}
              render={({ field }) => (
                <FormControlLabel
                  {...field}
                  control={<Checkbox
                    checked={field.value}
                    value={item.value}
                  />}
                />
              )}
            />
            {item.label}
          </label>
        );
      })}
      </div>
    </div>
  );
};

export default InputCheckBox;
