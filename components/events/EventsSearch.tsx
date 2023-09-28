import React, { useRef } from "react";
import Button from "../ui/Button";
import styles from "./EventsSearch.module.css";
import { FindEventsHandlerProps } from "@/pages/events";

function EventsSearch({
  onSearch,
}: {
  onSearch: ({ year, month }: FindEventsHandlerProps) => void;
}) {
  const yearInputRef = useRef<HTMLSelectElement>(null);
  const monthInputRef = useRef<HTMLSelectElement>(null);
  const yearOptions = ["2021", "2022"];
  const monthOptions = Array.from({ length: 12 }, (_, index) => index + 1);
  function submitHandler(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    event.preventDefault();
    const selectedYear = yearInputRef.current?.value;
    const selectedMonth = monthInputRef.current?.value;
    if (selectedYear && selectedMonth) {
      onSearch({ year: selectedYear, month: selectedMonth });
    }
  }
  return (
    <form className={styles.form}>
      <div className={styles.controls}>
        <div className={styles.control}>
          <label htmlFor="year">Year</label>
          <select id="year" ref={yearInputRef}>
            {yearOptions.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.control}>
          <label htmlFor="month">Month</label>
          <select id="month" ref={monthInputRef}>
            {monthOptions.map((month) => (
              <option key={month} value={month.toString()}>
                {getMonthString(month)}
              </option>
            ))}
          </select>
        </div>
      </div>
      <Button onClick={submitHandler}>Find events</Button>
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
