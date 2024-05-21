# Reusable Input Controllers in Next JS

## Overview
This project implements reusable input controllers in React JS using Material-UI (MUI) components. These input controllers include various types such as text input, date picker, radio button, checkbox, and select. Each input controller is implemented as a custom component, allowing for easy reuse throughout the application.

## Available Input Controllers

1. **Text Input**: Allows users to input text.
2. **Date Picker**: Provides a calendar interface for selecting dates.
3. **Radio Button**: Presents a set of options where users can select only one.
4. **Checkbox**: Enables users to select multiple options.
5. **Select**: A dropdown menu for selecting options.


## Installation

Clone the repository:
1. git clone git@github.com:harjeevantanda/resuable-input-controllers-next-js.git
2. cd react-reusable-input-controllers

3. npm install 

4. npm start



## Usage

To use these input controllers, simply import the desired component and include it in your JSX code, passing any necessary props. Below is an example of how to use the `FormDatePickerRange` component:

```jsx
<FormDatePickerRange
    setValue={setValue}
    defaultStartDate="2024-03-10"
    defaultEndDate="2024-03-15"
/>

