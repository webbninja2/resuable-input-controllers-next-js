const StaticOptions = {
  // static data for filter use :-


  //  portal options for filter use
  portalOptions: [
    { value: "All", label: "All" },
    { value: "Upwork", label: "Upwork" },
    { value: "Guru", label: "Guru" },
    { value: "Freelancer", label: "Freelancer" },
  ],

  // Optional filter use :-
  OptionalFilter: [
    { value: "BidId", label: "BidId" },
    { value: "JobTitle", label: "JobTitle" },
  ],

  // static data for filter use :-
  statusOptions: [
    { value: "All", label: "All" },
    { value: "Interview", label: "Interview" },
    { value: "Hire", label: "Hire" },
    { value: "Reject", label: "Reject" },
  ],
  // for bid add ;-
  statusOptionsForAdd: [
    { value: "New", label: "New" },
    { value: "Interview", label: "Interview" },
    { value: "Hire", label: "Hire" },
    { value: "Reject", label: "Reject" },
  ],

  hoobbies : [
    { label: "Travelling", value: "travelling" },
    { label: "Listening Music", value: "listeningmusic" },
    { label: "Dancing", value: "dancing" }
  ],
};

export default StaticOptions;
