import React from "react";
import { FormControl, Autocomplete, TextField } from "@mui/material";
import { Controller } from "react-hook-form";

const FormInputSelectAutoComplete = ({
  name,
  control,
  label,
  options,
}) => {
  return (
    <FormControl fullWidth>
      <Controller
        name={name}
        className="autocomplete"
        control={control}
        render={({ field }) => (
          <Autocomplete
            {...field}
            options={options}
            getOptionLabel={(option) => option.label}
            onChange={(event) => {
              const valuee = event.target.innerText;
              field.onChange(valuee);

            }}
            renderInput={(params) => (
              <TextField
              {...field}
                className="autocomplete"
                {...params}
                label={label}
              />
            )}
          />
        )}
      />
    </FormControl>
  );
};

export default FormInputSelectAutoComplete;
