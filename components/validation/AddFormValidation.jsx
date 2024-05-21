
import * as Yup from "yup";

function AddFormValidation() {
  const addBidsValidationSchema = Yup.object().shape({
    portal: Yup.string().required("Portal is required"),
    profile: Yup.string().required("Profile is required"),
    job_url: Yup.string().required("Job URL is required").trim("The contact name cannot include leading and trailing spaces"),
    job_title: Yup.string().required("Job Title is required").trim("The contact name cannot include leading and trailing spaces"),
    start_date: Yup.date().required("Project Start date is required"),
    project_type: Yup.string().required("Project Type is required"),
    connects_used: Yup.string().required("Connects Used is required"),
    status: Yup.string().required("Status is required"),
    cover_letter: Yup.string().required("Cover Letter is required").trim("The contact name cannot include leading and trailing spaces"),
  });

  return addBidsValidationSchema;
}

export default AddFormValidation();
