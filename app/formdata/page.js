"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Box, Button, Grid, Typography } from "@mui/material";
import FormInputSelect from "@/components/share/forminputs/FormInputSelect";
import FormInput from "@/components/share/forminputs/FormInput";
import FormDatePickerRange from "@/components/share/forminputs/FormDatePickerRange";
import StaticOptions from "@/components/staticoptions/StaticOptions";
import FormInputSelectAutoComplete from "@/components/share/forminputs/FormInputSelectAutoComplete";
import InputCheckBox from "@/components/share/forminputs/FormCheckbox";
import FormInputRadio from "@/components/share/forminputs/FormRadiobox";

function FormData() {
  const [formData, setFormData] = useState({
    gender: "",
  });
  const { control, handleSubmit, watch, setValue } = useForm({
    defaultValues: {
      startDate: "",
      endDate: "",
    },
  });

  const handleCheckboxChange = (event) => {
    const { name, value, type } = event.target;
    if (type === "radio") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  ///on submit handler
  const onSubmit = async (data) => {
    console.log("data", data);
  };

  let optionFilter = watch("optional");

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box className="login_form  w-full user-from-container text-center">
          <Typography variant="h5" className="m-5 mb-8 uppercase">
            Form with controller
          </Typography>
          <Grid
            container
            spacing={2}
            className="px-5  flex justify-center mb-10 "
          >
            <Box
              className=" border-stone-300 py-5 px-4  width-400 flex justify-center flex-row flex-wrap  w-full rounded-lg    shadow-lg !p-11 "
            >
              <Grid container spacing={2}>
                <Grid item md={6} xs={12} className="pt-4 px-2 ">
                  <FormDatePickerRange
                    setValue={setValue}
       
                    defaultStartDate="2024-03-10"
                    defaultEndDate="2024-03-15"
                  />
                </Grid>

                <Grid item md={6} xs={12} className="pt-4 px-2 ">
                  <FormInputSelect
                    name="portal"
                    label="Select Options"
                    options={StaticOptions.portalOptions}
                    defaultValue="All"
                    control={control}
                  />
                </Grid>

                <Grid item md={6} xs={12} className="pt-4 px-2 ">
                  <FormInputSelect
                    name="optional"
                    label="Select option "
                    options={StaticOptions.OptionalFilter}
                    control={control}
                  />
                </Grid>

                {(optionFilter === "BidId" || optionFilter === "JobTitle") &&
                  optionFilter !== 0 && (
                    <Grid item md={6} xs={12} className="pt-4 px-2">
                      <FormInput
                        className="shadow-lg relative"
                        name={optionFilter}
                        control={control}
                        label={optionFilter}
                      />
                    </Grid>
                  )}

                <Grid item md={6} xs={12} className="pt-4 px-2 ">
                <FormInput
                        className="shadow-lg relative"
                        name="text-field"
                        control={control}
                        label="text-field"
                      />
                </Grid>
                <Grid item md={12} xs={12} className="pt-4 px-2 ">
                  <FormInputSelectAutoComplete
                    name="auto"
                    control={control}
                    label="Select 2"
                    options={StaticOptions.statusOptionsForAdd}
                  />
                </Grid>

                <Grid item md={6} xs={12} className="pt-4 px-2 ">
                  <InputCheckBox
                    control={control}
                    name="hobbies"
                    label="Hobbies"
                    className="checkboxOuter"
                    checkBoxData={[
                      { label: "Travelling", value: "travelling" },
                      { label: "Listening Music", value: "listeningmusic" },
                    ]}
                  />
                </Grid>

                <Grid item md={6} xs={12} className="pt-4 px-2 ">
                  <FormInputRadio
                    control={control}
                    handleCheckboxChange={handleCheckboxChange}
                    formData={formData}
                    labelField="Gender"
                    name="gender"
                    className="checkboxOuter radio"
                    radioData={[
                      { label: "Male", value: "male" },
                      { label: "Female", value: "female" },
                      { label: "Other", value: "other" },
                    ]}
                  />
                </Grid>
                <Grid item md={12} xs={12} className="pt-4 px-2 ">
                  <FormInput
                    className="shadow-lg relative"
                    name="description"
                    control={control}
                    label="Description"
                    multiline
                    rows={4}
                  />
                </Grid>
                <Grid item md={12} xs={12} className="pt-4 px-2 ">
                  <Button
                    className="w-full h-full bg-red-800 text-white hover:text-blue-600"
                    variant="outlined"
                    position="fixed"
                    type="submit"
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Box>
      </form>
    </>
  );
}

export default FormData;
