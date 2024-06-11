import React, { useState } from "react";
import "./DateTimeChecker.css";

const DateTimeChecker = () => {
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [message, setMessage] = useState("");

  const isLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  };

  const getDaysInMonth = (month, year) => {
    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (month === 2 && isLeapYear(year)) {
      return 29;
    }
    return daysInMonth[month - 1];
  };

  const checkDate = (day, month, year) => {
    if (month < 1 || month > 12) {
      return false;
    }
    const daysInMonth = getDaysInMonth(month, year);
    if (day < 1 || day > daysInMonth) {
      return false;
    }
    if (year < 1000 || year > 3000) {
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const dayValue = parseInt(day);
    const monthValue = parseInt(month);
    const yearValue = parseInt(year);

    let errorMessage = "";
    if (isNaN(yearValue)) {
      errorMessage += "Input for Year is in incorrect format!\n";
    }
    if (isNaN(monthValue)) {
      errorMessage += "Input for Month is in incorrect format!\n";
    }
    if (isNaN(dayValue)) {
      errorMessage += "Input for Day is in incorrect format!\n";
    }

    if (errorMessage) {
      setMessage(errorMessage);
      return;
    }

    const outOfRangeErrorMessage = outOfRange(dayValue, monthValue, yearValue);
    if (outOfRangeErrorMessage) {
      setMessage(outOfRangeErrorMessage);
      return;
    }

    if (checkDate(dayValue, monthValue, yearValue)) {
      setMessage("Valid Date");
    } else {
      setMessage("Invalid Date");
    }
  };

  const handleClear = () => {
    setYear("");
    setMonth("");
    setDay("");
    setMessage("");
  };

  const outOfRange = (day, month, year) => {
    let errorMessage = "";

    if (day < 1 || day > 31) {
      errorMessage += "Input for Day is out of range! \n";
    }

    if (month < 1 || month > 12) {
      errorMessage += "Input for Month is out of range! \n";
    }

    if (year < 1000 || year > 3000) {
      errorMessage += "Input for Year is out of range! \n";
    }

    return errorMessage;
  };

  return (
    <div className="datetime-checker">
      <img
        src="https://cdn.haitrieu.com/wp-content/uploads/2022/01/Logo-FPT.png"
        alt="Logo"
        className="logo"
      />
      <h1 className="title">Date Time Checker</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="year">Year:</label>
          <input
            type="text"
            id="year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="month">Month:</label>
          <input
            type="text"
            id="month"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="day">Day:</label>
          <input
            type="text"
            id="day"
            value={day}
            onChange={(e) => setDay(e.target.value)}
          />
        </div>
        <div className="button-group">
          <button type="submit">Check</button>
          <button type="button" onClick={handleClear}>
            Clear
          </button>
        </div>
      </form>
      {message && <div className="message">{message}</div>}
    </div>
  );
};

export default DateTimeChecker;