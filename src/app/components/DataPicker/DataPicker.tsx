import React, { useEffect, useState, useRef } from "react";
import "./DataPicker.scss";
import ButtonIcon from "../ButtonIcon/ButtonIcon";
import Input from "../Input/Input";
import Button from "../Button/Button";

interface DataPickerDayProps {
  variant: string;
  day: number;
  onClick?: () => void;
  onMouseEnter?: () => void;
}

const DataPickerDay: React.FC<DataPickerDayProps> = ({
  variant,
  day,
  onClick,
  onMouseEnter,
}) => {
  const formattedDay = day < 10 ? `0${day}` : `${day}`;
  const buttonClass = `data-picker-day ${variant}`;

  return (
    <button
      disabled={variant === "disable"}
      tabIndex={0}
      className={buttonClass}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
    >
      {formattedDay}
    </button>
  );
};

const DataPickerInputDate: React.FC<{
  label: string;
  value: string;
  onChange: (value: string) => void;
  onEnter: () => void;
  onClick: () => void;
  placeholder: string;
  disabled?: boolean;
}> = ({ label, value, onChange, onEnter, onClick, placeholder, disabled }) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") onEnter();
  };

  const hasValue = value.trim() !== "";
  const containerClass = hasValue ? "data-picker-value" : "";

  return (
    <div className={containerClass}>
      <Input
        typeIcon="calendar_month"
        fillIcon={true}
        label={label}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        onClick={onClick}
        disabled={disabled}
      />
    </div>
  );
};

interface DataPickerCalendarProps {
  label: string;
  placeholder: string;
  disabled?: boolean;
  onDateChange: (date: Date) => void;
  date: string;
}

const DataPickerCalendar: React.FC<DataPickerCalendarProps> = ({
  label,
  placeholder,
  disabled,
  onDateChange,
  date,
}) => {
  const monthsOverflowContainerRef = useRef<HTMLDivElement>(null);
  const yearsOverflowContainerRef = useRef<HTMLDivElement>(null);
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date(date));
  const [inputDate, setInputDate] = useState<string>(date);
  const [currentMonth, setCurrentMonth] = useState<number>(
    new Date().getMonth(),
  );
  const [currentYear, setCurrentYear] = useState<number>(
    new Date().getFullYear(),
  );
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [secondModalOpen, setSecondModalOpen] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState<number>(
    new Date().getMonth() + 1,
  );
  const [selectedYear, setSelectedYear] = useState<number>(
    new Date().getFullYear(),
  );
  const [selectedDay, setSelectedDay] = useState<number>(today.getDate());

  useEffect(() => {
    if (date && typeof date === "string") {
      const [day, month, year] = date.split("/").map(Number);
  
      if (day && month && year) {
        const parsedDate = new Date(year, month - 1, day);
        setSelectedDate(parsedDate);
        setInputDate(parsedDate.toLocaleString("en-US", {
          weekday: "short",
          month: "short",
          day: "2-digit",
          year: "numeric",
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          timeZoneName: "short"
        }));
      }
    }
  }, [date]);
  
  const handleInputChange = (value: string) => {
    setInputDate(value);
    const [day, month, year] = value.split("/").map(Number);
  
    const isValidDate =
      day > 0 &&
      month > 0 &&
      year > 0 &&
      month <= 12 &&
      day <= new Date(year, month, 0).getDate();
  
    if (isValidDate) {
      const selectedDate = new Date(year, month - 1, day);
      setSelectedDate(selectedDate);
      setCurrentMonth(selectedDate.getMonth());
      setCurrentYear(selectedDate.getFullYear());
      setSelectedDay(selectedDate.getDate());
      onDateChange(selectedDate);
    } else {
      console.log("Data inválida!");
    }
  };  

  const handleMonthSelect = (selectedMonth: number) => {
    setSelectedMonth(selectedMonth);
    setCurrentMonth(selectedMonth - 1);
    updateSelectedDateFormat(selectedMonth, selectedYear, selectedDay);
    const selectedMonthElement = document.querySelector(
      `.month-item[data-month="${selectedMonth}"]`,
    );
    selectedMonthElement?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });

    centralizarOpcaoSelecionada(monthsOverflowContainerRef);
  };

  const handleYearSelect = (selectedYear: number) => {
    setSelectedYear(selectedYear);
    setCurrentYear(selectedYear);
    updateSelectedDateFormat(selectedMonth, selectedYear, selectedDay);
    const selectedYearElement = document.querySelector(
      `.year-item[data-year="${selectedYear}"]`,
    );
    selectedYearElement?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });

    centralizarOpcaoSelecionada(yearsOverflowContainerRef);
  };

  const updateSelectedDateFormat = (
    month: number,
    year: number,
    day: number,
  ) => {
    const formattedDate = new Date(year, month - 1, day).toLocaleDateString(
      "pt-BR",
      {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      },
    );
    setInputDate(formattedDate);
    setSelectedDateFormat(formattedDate);
  };

  const handleDoneClick = () => {
    if (selectedDate) {
      const formattedDay = selectedDate.getDate().toString().padStart(2, "0");
      const formattedMonth = (selectedDate.getMonth() + 1)
        .toString()
        .padStart(2, "0");
      const formattedYear = selectedDate.getFullYear().toString();
      const formattedDate = `${formattedDay}/${formattedMonth}/${formattedYear}`;

      setInputDate(formattedDate);
      onDateChange(selectedDate);
      setCalendarOpen(false);
      setSecondModalOpen(false);
    } else {
      console.error("Data inválida!");
    }
  };

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
    setSelectedDay(date.getDate());

    const formattedDate = date.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });

    setInputDate(formattedDate);
    setSelectedDateFormat(formattedDate);

    setSelectedMonth(date.getMonth() + 1);
    setSelectedYear(date.getFullYear());
  };

  const handleNextMonth = () => {
    setCurrentMonth((prevMonth) => {
      const newMonth = prevMonth + 1;
      const newYear = currentYear + Math.floor(newMonth / 12);
      setCurrentYear(newYear);
      return newMonth % 12;
    });
  };

  const handlePrevMonth = () => {
    setCurrentMonth((prevMonth) => {
      const newMonth = prevMonth - 1;
      const newYear = newMonth < 0 ? currentYear - 1 : currentYear;
      setCurrentYear(newYear);
      return (newMonth + 12) % 12;
    });
  };

  const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];

  const generateDaysOfMonth = () => {
    const days = [];
    const totalDays = new Date(currentYear, currentMonth + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
    const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);
    const startingDay = firstDayOfMonth.getDay();
    const endingDay = lastDayOfMonth.getDay();

    const prevMonthLastDay = new Date(currentYear, currentMonth, 0).getDate();
    const prevMonthDays = startingDay;
    const nextMonthDays = 6 - endingDay;

    // Add days from the previous month
    for (
      let i = prevMonthLastDay - prevMonthDays + 1;
      i <= prevMonthLastDay;
      i++
    ) {
      const date = new Date(currentYear, currentMonth - 1, i);
      days.push(
        <DataPickerDay
          key={`previous-month-${i}`}
          variant="disable"
          day={date.getDate()}
        />,
      );
    }

    // Add days from the current month
    for (let i = 1; i <= totalDays; i++) {
      const date = new Date(currentYear, currentMonth, i);
      const variant =
        selectedDate &&
        date.getDate() === selectedDate.getDate() &&
        date.getMonth() === selectedDate.getMonth() &&
        date.getFullYear() === selectedDate.getFullYear()
          ? "active"
          : i === today.getDate() &&
              currentMonth === today.getMonth() &&
              currentYear === today.getFullYear()
            ? "current-day"
            : "default";

      days.push(
        <DataPickerDay
          key={`current-month-${i}`}
          variant={variant}
          day={i}
          onClick={() => handleDateClick(date)}
        />,
      );
    }

    // Add days from the next month
    for (let i = 1; i <= nextMonthDays; i++) {
      const date = new Date(currentYear, currentMonth + 1, i);
      days.push(
        <DataPickerDay
          key={`next-month-${i}`}
          variant="disable"
          day={date.getDate()}
        />,
      );
    }

    return days;
  };

  const generateMonthsAndYears = () => {
    const months = [];
    const years = [];
    const currentYear = new Date().getFullYear();

    for (let month = 1; month <= 12; month++) {
      months.push({
        month,
        label: `${new Intl.DateTimeFormat("pt-BR", { month: "long" }).format(
          new Date(2000, month - 1),
        )}`,
      });
    }

    for (let year = currentYear - 100; year <= currentYear + 50; year++) {
      years.push({
        year,
        label: `${year}`,
      });
    }

    return { months, years };
  };

  const setSelectedDateFormat = (dateString: string) => {
    const [day, month, year] = dateString
      .split(" - ")[0]
      .split("/")
      .map(Number);

    const isValidDate =
      day > 0 &&
      month > 0 &&
      year > 0 &&
      month <= 12 &&
      day <= new Date(year, month, 0).getDate();

    if (isValidDate) {
      const selectedDate = new Date(year, month - 1, day);
      setSelectedDate(selectedDate);
      setCurrentMonth(selectedDate.getMonth());
      setCurrentYear(selectedDate.getFullYear());
      setSelectedDay(selectedDate.getDate());
    } else {
      console.error("Data inválida!");
    }
  };

  const handleInputEnter = () => {
    const [day, month, year] = inputDate.split(" - ")[0].split("/").map(Number);

    const isValidDate =
      day > 0 &&
      month > 0 &&
      year > 0 &&
      month <= 12 &&
      day <= new Date(year, month, 0).getDate();

    if (isValidDate) {
      const selectedDate = new Date(year, month - 1, day);
      setSelectedDate(selectedDate);
      setCurrentMonth(selectedDate.getMonth());
      setCurrentYear(selectedDate.getFullYear());
      setCalendarOpen(true);
    } else {
      console.error("Data inválida!");
    }
  };

  const handleResetAll = () => {
    const currentDate = new Date();
    setSelectedMonth(currentDate.getMonth() + 1);
    setSelectedYear(currentDate.getFullYear());
    updateSelectedDateFormat(
      currentDate.getMonth() + 1,
      currentDate.getFullYear(),
      selectedDay,
    );

    handleReset();
  };

  const handleReset = () => {
    setSelectedDate(today);
    setInputDate(
      today.toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      }),
    );
    setCurrentMonth(today.getMonth());
    setCurrentYear(today.getFullYear());
    setSelectedDay(today.getDate());
  };

  const openSecondModal = () => {
    setSecondModalOpen(true);
    setCalendarOpen(false);
  };

  useEffect(() => {
    if (secondModalOpen) {
      centralizarOpcaoSelecionada(monthsOverflowContainerRef);
    }
  }, [secondModalOpen, selectedMonth]);

  useEffect(() => {
    if (secondModalOpen) {
      centralizarOpcaoSelecionada(yearsOverflowContainerRef);
    }
  }, [secondModalOpen, selectedYear]);

  const handleInputClick = () => {
    setCalendarOpen(true);
    setSecondModalOpen(false);
  };

  const handleInputClickClose = () => {
    setCalendarOpen(false);
  };

  const centralizarOpcaoSelecionada = (
    ref: React.RefObject<HTMLDivElement>,
  ) => {
    if (ref.current) {
      const overflowContainer = ref.current;
      const selectedElement = overflowContainer.querySelector(
        ".selected",
      ) as HTMLElement;

      if (selectedElement) {
        const containerHeight = overflowContainer.clientHeight;
        const elementHeight = selectedElement.clientHeight;
        const scrollTop =
          selectedElement.offsetTop - (containerHeight - elementHeight);

        overflowContainer.scrollTop = scrollTop;
      }
    }
  };

  return (
    <>
      <DataPickerInputDate
        label={label}
        placeholder={placeholder}
        value={inputDate}
        onChange={handleInputChange}
        onEnter={handleInputEnter}
        onClick={handleInputClick}
        disabled={disabled}
      />
      {secondModalOpen && (
        <div className="data-picker-root">
          <div className="data-picker">
            <div className="data-picker-month">
              <div className="data-picker-header" onClick={handleInputClick}>
                {`${new Intl.DateTimeFormat("pt-BR", { month: "long" }).format(
                  new Date(currentYear, currentMonth),
                )} ${currentYear}`}
                <ButtonIcon
                  size="sm"
                  type="plain"
                  typeIcon="keyboard_arrow_down"
                  variant="primary"
                />
              </div>
            </div>
            <div className="data-picker-months-years">
              <div
                className="data-picker-overflow-container"
                ref={monthsOverflowContainerRef}
              >
                <div className="data-picker-overflow-content">
                  {generateMonthsAndYears().months.map((item, index) => (
                    <div
                      key={index}
                      className={`month-item ${
                        selectedMonth === item.month ? "selected" : ""
                      }`}
                      onClick={() => handleMonthSelect(item.month)}
                    >
                      {item.label}
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="data-picker-overflow-container"
                ref={yearsOverflowContainerRef}
              >
                <div className="data-picker-overflow-content">
                  {generateMonthsAndYears().years.map((item, index) => (
                    <div
                      key={index}
                      className={`year-item ${
                        selectedYear === item.year ? "selected" : ""
                      }`}
                      onClick={() => handleYearSelect(item.year)}
                    >
                      {item.label}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="data-picker-buttons-actions">
              <Button
                size="sm"
                variant="secondary"
                label="Reset"
                onClick={handleResetAll}
              />
              <Button
                size="sm"
                variant="primary"
                label="Done"
                onClick={() => {
                    handleDoneClick();
                }}
              />
            </div>
          </div>
        </div>
      )}
      {calendarOpen && (
        <div className="data-picker-root">
          <div className="data-picker-ghost" onClick={handleInputClickClose} />
          <div className="data-picker">
            <div className="data-picker-month">
              <div className="data-picker-header" onClick={openSecondModal}>
                {`${new Intl.DateTimeFormat("pt-BR", { month: "long" }).format(
                  new Date(currentYear, currentMonth),
                )} ${currentYear}`}
                <ButtonIcon
                  size="sm"
                  type="plain"
                  typeIcon="keyboard_arrow_right"
                  variant="primary"
                />
              </div>

              <div style={{ display: "flex", flexDirection: "row" }}>
                <ButtonIcon
                  variant="primary"
                  size="sm"
                  onClick={handlePrevMonth}
                  typeIcon="keyboard_arrow_left"
                  type="plain"
                />
                <ButtonIcon
                  variant="primary"
                  type="plain"
                  size="sm"
                  onClick={handleNextMonth}
                  typeIcon="keyboard_arrow_right"
                />
              </div>
            </div>
            <div>
              <div className="data-picker-week-days">
                {weekDays.map((day, index) => (
                  <p key={index}>{day}</p>
                ))}
              </div>
              <div className="data-picker-days">{generateDaysOfMonth()}</div>
            </div>

            <div className="data-picker-buttons-actions">
              <Button
                size="sm"
                variant="secondary"
                label="Reset"
                onClick={handleResetAll}
              />
              <Button
                size="sm"
                variant="primary"
                label="Done"
                onClick={() => {
                  if (selectedDate) {
                    handleDoneClick();
                  }
                }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

interface DataPickerProps {
  label: string;
  placeholder: string;
  disabled?: boolean;
  onDateChange: (date: Date) => void;
  date: string;
}

const DataPicker: React.FC<DataPickerProps> = ({
  label,
  placeholder,
  disabled,
  onDateChange,
  date,
}) => {
  return (
    <>
      <div>
        <DataPickerCalendar
          date={date}
          onDateChange={onDateChange}
          placeholder={placeholder}
          label={label}
          disabled={disabled}
        />
      </div>
    </>
  );
};

export default DataPicker;
