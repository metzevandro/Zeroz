import React, { useState, useEffect, useRef } from "react";
import "./DataPicker.scss";
import ButtonIcon from "../ButtonIcon/ButtonIcon";
import Input from "../Input/Input";
import Tooltip from "../Tooltip/Tooltip";
import Icon from "../Icon/Icon";
import Button from "../Button/Button";

interface DataPickerDayProps {
  day: number;
  type: string;
  onSelect: (day: number, type: string) => void;
}

const DataPickerDay = (props: DataPickerDayProps & { isSelected: boolean }) => {
  const { day, type, onSelect, isSelected } = props;
  return (
    <button
      className={`data-picker-day ${type === "other" ? "other-month" : ""} ${isSelected ? "selected" : ""}`}
      onClick={() => onSelect(day, type)}
    >
      {day}
    </button>
  );
};

function DataPickerCalendar({
  onSelectDate,
  selectedDate,
  onClose,
  onRevert,
}: {
  onSelectDate: (date: Date) => void;
  selectedDate: Date | null;
  onClose: () => void;
  onRevert: () => void;
}) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [internalSelectedDate, setInternalSelectedDate] = useState<Date | null>(
    null,
  );
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const monthNames = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const daysInPrevMonth = new Date(year, month, 0).getDate();

  const days = [];
  for (let i = firstDayOfMonth - 1; i >= 0; i--) {
    days.push({ day: daysInPrevMonth - i, type: "other" });
  }
  for (let i = 1; i <= daysInMonth; i++) {
    days.push({ day: i, type: "current" });
  }
  const remainingDays = 42 - days.length;
  for (let i = 1; i <= remainingDays; i++) {
    days.push({ day: i, type: "other" });
  }

  const handlePrevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const handleSelectDay = (day: number, type: string) => {
    let newDate;
    if (type === "other") {
      if (day > 15) {
        newDate = new Date(year, month - 1, day);
        setCurrentDate(new Date(year, month - 1, 1));
      } else {
        newDate = new Date(year, month + 1, day);
        setCurrentDate(new Date(year, month + 1, 1));
      }
    } else {
      newDate = new Date(year, month, day);
    }
    setInternalSelectedDate(newDate);
    onSelectDate(newDate);
  };

  useEffect(() => {
    if (selectedDate) {
      setCurrentDate(
        new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1),
      );
      monthRefs.current[selectedDate.getMonth()]?.scrollIntoView({
        block: "center",
        behavior: "smooth",
      });
      yearRefs.current[
        selectedDate.getFullYear() - (currentRealYear - 70)
      ]?.scrollIntoView({ block: "center", behavior: "smooth" });
    }
  }, [selectedDate]);

  useEffect(() => {
    if (!selectedDate) {
      monthRefs.current[month]?.scrollIntoView({
        block: "center",
        behavior: "smooth",
      });
      yearRefs.current[year - (currentRealYear - 70)]?.scrollIntoView({
        block: "center",
        behavior: "smooth",
      });
    }
  }, []);

  useEffect(() => {
    if (selectedDate) {
      setInternalSelectedDate(selectedDate);
    }
  }, []);

  const [openModalMonthAndYears, setOpenModalMonthAndYears] = useState(false);

  const toggleModalMonthAndYears = () => {
    setOpenModalMonthAndYears(!openModalMonthAndYears);
  };

  const monthRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const yearRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const handleSelectMonth = (month: number) => {
    const day = internalSelectedDate ? internalSelectedDate.getDate() : 1;
    const daysInNewMonth = new Date(year, month + 1, 0).getDate();
    const newDay = day > daysInNewMonth ? daysInNewMonth : day;
    const newDate = new Date(year, month, newDay);
    setCurrentDate(newDate);
    setInternalSelectedDate(newDate);
    onSelectDate(newDate);
    monthRefs.current[month]?.scrollIntoView({
      block: "center",
      behavior: "smooth",
    });
  };

  const handleSelectYear = (year: number) => {
    const day = internalSelectedDate ? internalSelectedDate.getDate() : 1;
    const daysInNewMonth = new Date(year, month + 1, 0).getDate();
    const newDay = day > daysInNewMonth ? daysInNewMonth : day;
    const newDate = new Date(year, month, newDay);
    setCurrentDate(newDate);
    setInternalSelectedDate(newDate);
    onSelectDate(newDate);
    yearRefs.current[year - (currentRealYear - 70)]?.scrollIntoView({
      block: "center",
      behavior: "smooth",
    });
  };

  const currentRealYear = new Date().getFullYear();

  return (
    <div className="data-picker-calendar">
      <div className="data-picker-header">
        <div
          onClick={toggleModalMonthAndYears}
          className={`data-picker-header-date ${openModalMonthAndYears ? "open" : ""}`}
        >
          {`${monthNames[month]} ${year}`}{" "}
          <ButtonIcon
            buttonType="plain"
            variant="secondary"
            typeIcon="keyboard_arrow_right"
            size="sm"
          />
        </div>
        <div
          className={`data-picker-header-buttons ${openModalMonthAndYears ? "hidden" : ""}`}
        >
          <ButtonIcon
            variant="secondary"
            size="sm"
            typeIcon="keyboard_arrow_left"
            buttonType="plain"
            onClick={handlePrevMonth}
          />
          <ButtonIcon
            variant="secondary"
            buttonType="plain"
            size="sm"
            typeIcon="keyboard_arrow_right"
            onClick={handleNextMonth}
          />
        </div>
      </div>
      <div className="data-picker-body-container">
        <div
          className={`data-picker-body-months-years ${openModalMonthAndYears ? "" : "hidden"}`}
        >
          <div className="data-picker-months">
            {monthNames.map((monthName, index) => (
              <button
                key={index}
                ref={(el) => (monthRefs.current[index] = el)}
                className={`months ${month === index ? "selected" : ""}`}
                onClick={() => handleSelectMonth(index)}
              >
                {monthName}
              </button>
            ))}
          </div>
          <div className="data-picker-years">
            {Array.from({ length: 96 }, (_, i) => currentRealYear - 70 + i).map(
              (yearValue, index) => (
                <button
                  key={yearValue}
                  ref={(el) => (yearRefs.current[index] = el)}
                  className={`years ${year === yearValue ? "selected" : ""}`}
                  onClick={() => handleSelectYear(yearValue)}
                >
                  {yearValue}
                </button>
              ),
            )}
          </div>
        </div>
        <div
          className={`data-picker-body ${openModalMonthAndYears ? "hidden" : ""}`}
        >
          <div className="data-picker-weekdays">
            {[
              "Domingo",
              "Segunda",
              "Terça",
              "Quarta",
              "Quinta",
              "Sexta",
              "Sábado",
            ].map((day, index) => (
              <div translate="no" key={index} className="data-picker-week-day">
                {day[0]}
              </div>
            ))}
          </div>
          <div className="data-picker-days">
            {days.map((day, index) => (
              <DataPickerDay
                key={index}
                day={day.day}
                type={day.type}
                onSelect={(day, type) => handleSelectDay(day, type)}
                isSelected={
                  selectedDate?.getDate() === day.day &&
                  selectedDate?.getMonth() === month &&
                  selectedDate?.getFullYear() === year &&
                  day.type === "current"
                }
              />
            ))}
          </div>
        </div>
      </div>
      <div className="data-picker-footer">
        <Button size="sm" variant="secondary" onClick={onRevert}>
          Resetar
        </Button>
        <Button size="sm" variant="primary" onClick={onClose}>
          Concluir
        </Button>
      </div>
    </div>
  );
}

function DataPicker({
  value,
  onChange,
  label,
  disabled = false,
  skeleton = false,
}: {
  value?: string;
  onChange: (value: string) => void;
  label: string;
  disabled?: boolean;
  skeleton?: boolean;
}) {
  const formatDate = (date: Date) => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [inputValue, setInputValue] = useState<string>(
    value || formatDate(new Date()),
  );
  const [error, setError] = useState<boolean>(false);
  const [textError, setTextError] = useState<string>("");
  const [openCalendar, setOpenCalendar] = useState(false);

  useEffect(() => {
    setInputValue(value || formatDate(new Date()));
    const parsedDate = parseDate(value || formatDate(new Date()));
    if (parsedDate) {
      setSelectedDate(parsedDate);
    }
  }, [value]);

  const handleSelectDate = (date: Date) => {
    setSelectedDate(date);
    const formattedDate = formatDate(date);
    setInputValue(formattedDate);
    onChange(formattedDate);
    setError(false);
    setTextError("");
  };

  const parseDate = (value: string): Date | null => {
    const parts = value.split("/").map((part) => parseInt(part, 10));
    if (
      parts.length === 3 &&
      !isNaN(parts[0]) &&
      !isNaN(parts[1]) &&
      !isNaN(parts[2])
    ) {
      const date = new Date(parts[2], parts[1] - 1, parts[0]);
      if (
        date.getDate() === parts[0] &&
        date.getMonth() === parts[1] - 1 &&
        date.getFullYear() === parts[2]
      ) {
        return date;
      }
    }
    return null;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/[^\d]/g, "");
    value = value.slice(0, 8);

    let formattedValue = value;
    if (value.length > 2) {
      formattedValue = `${value.slice(0, 2)}/${value.slice(2)}`;
    }
    if (value.length > 4) {
      formattedValue = `${value.slice(0, 2)}/${value.slice(2, 4)}/${value.slice(4)}`;
    }

    setInputValue(formattedValue);
    onChange(formattedValue);

    if (formattedValue.length === 10) {
      const parts = formattedValue.split("/").map((part) => parseInt(part, 10));
      let day = parts[0];
      let month = parts[1];
      const year = parts[2];

      if (day < 1) day = 1;
      if (day > 31) day = 31;
      if (month < 1) month = 1;
      if (month > 12) month = 12;

      const clampedDate = new Date(year, month - 1, day);
      const clampedFormattedValue = formatDate(clampedDate);
      setInputValue(clampedFormattedValue);
      onChange(clampedFormattedValue);

      if (
        clampedDate.getDate() === day &&
        clampedDate.getMonth() === month - 1 &&
        clampedDate.getFullYear() === year
      ) {
        setSelectedDate(clampedDate);
        setError(false);
        setTextError("");
      } else {
        setError(true);
        setTextError("Data inválida");
      }
    } else {
      setError(false);
      setTextError("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace") {
      e.preventDefault();
      let value = inputValue.replace(/[^\d]/g, "");
      value = value.slice(0, -1);

      let formattedValue = value;
      if (value.length > 2) {
        formattedValue = `${value.slice(0, 2)}/${value.slice(2)}`;
      }
      if (value.length > 4) {
        formattedValue = `${value.slice(0, 2)}/${value.slice(2, 4)}/${value.slice(4)}`;
      }

      setInputValue(formattedValue);
      onChange(formattedValue);

      if (formattedValue.length === 10) {
        const parsedDate = parseDate(formattedValue);
        if (parsedDate) {
          setSelectedDate(parsedDate);
          setError(false);
          setTextError("");
        } else {
          setError(true);
          setTextError("Data inválida");
        }
      } else {
        setError(false);
        setTextError("");
      }
    }
  };

  const toogleCalendar = () => {
    setOpenCalendar(!openCalendar);
  };

  const handleCloseCalendar = () => {
    setOpenCalendar(false);
  };

  const handleRevertDate = () => {
    const currentDate = new Date();
    handleSelectDate(currentDate);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Input
        label={label}
        onClick={toogleCalendar}
        error={error}
        textError={textError}
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        typeIcon="calendar_month"
        fillIcon
        disabled={disabled}
        skeleton={skeleton}
      />
      <div className={`data-picker ${openCalendar ? "open" : ""}`}>
        <DataPickerCalendar
          onSelectDate={handleSelectDate}
          selectedDate={selectedDate}
          onClose={handleCloseCalendar}
          onRevert={handleRevertDate}
        />
      </div>
    </div>
  );
}

export default DataPicker;
