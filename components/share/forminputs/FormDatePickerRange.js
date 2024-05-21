import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { DateRangePicker } from "react-date-range";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { Button } from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import moment, * as moments from "moment";

function FormDatePickerRange({ setValue, defaultStartDate, defaultEndDate  , startDateName , endDateName }) {
  const [datePickerToggle, setDatePickerToggle] = useState(false);

  const [selectionRange, setSelectionRange] = useState({
    startDate: defaultStartDate ? new Date(defaultStartDate) : new Date(),
    endDate: defaultEndDate ? new Date(defaultEndDate) : new Date(),
    key: "selection",
  });

  const handleDatePickerOnChanage = (ranges) => {
    setSelectionRange({
      ...ranges.selection,
      key: "selection",
    });
  };

  const { endDate, startDate } = selectionRange;
  const handleDateFilterClose = () => {
    setDatePickerToggle(false);
    setValue(startDateName, moments(startDate).format("YYYY-MM-DD"));
    setValue(endDateName,  moments(endDate).format("YYYY-MM-DD"));
  };

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <Button
        className="w-full h-full"
        position="fixed"
        variant="outlined"
        startIcon={<FilterAltIcon />}
        onClick={() => setDatePickerToggle(!datePickerToggle)}
      >
        <h1>
          {moment(startDate).format("YYYY-MM-DD")}
          <b>/</b>
          {moments(endDate).format("YYYY-MM-DD")}
        </h1>
      </Button>

      <Dialog
        fullScreen={fullScreen}
        open={datePickerToggle}
        onClose={handleDateFilterClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Data Filter By User"}
        </DialogTitle>
        <DialogContent>
          {datePickerToggle ? (
            <div className="date">
              <DateRangePicker
                ranges={[selectionRange]}
                onChange={handleDatePickerOnChanage}
              />
            </div>
          ) : null}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDateFilterClose} autoFocus>
            close
          </Button>
          <Button onClick={handleDateFilterClose} autoFocus>
            ok
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default FormDatePickerRange;
