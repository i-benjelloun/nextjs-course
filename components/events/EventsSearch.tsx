import React from "react";
import Button from "../ui/Button";
import styles from "./EventsSearch.module.css";

function EventsSearch() {
  const yearOptions = ["2021", "2022"];
  const monthOptions = Array.from({ length: 12 }, (_, index) => index + 1);
  return (
    <form className={styles.form}>
      <div className={styles.controls}>
        <div className={styles.control}>
          <label htmlFor="year">Year</label>
          <select id="year">
            {yearOptions.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.control}>
          <label htmlFor="month">Month</label>
          <select id="month">
            {monthOptions.map((month) => (
              <option key={month} value={month.toString()}>
                {getMonthString(month)}
              </option>
            ))}
          </select>
        </div>
      </div>
      <Button onClick={() => {}}>Find events</Button>
    </form>
  );
}

export default EventsSearch;

function getMonthString(monthNumber: number) {
  const date = new Date();
  date.setMonth(monthNumber - 1);
  return date.toLocaleString("en-US", {
    month: "long",
  });
}
