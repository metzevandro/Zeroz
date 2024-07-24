import React, { useEffect, useState, useRef } from "react";
import "./DataPicker.scss";
import ButtonIcon from "../ButtonIcon/ButtonIcon";
import Input from "../Input/Input";
import Button from "../Button/Button";
var DataPickerDay = function (_a) {
    var variant = _a.variant, day = _a.day, onClick = _a.onClick, onMouseEnter = _a.onMouseEnter;
    var formattedDay = day < 10 ? "0".concat(day) : "".concat(day);
    var buttonClass = "data-picker-day ".concat(variant);
    return (<button disabled={variant === "disable"} tabIndex={0} className={buttonClass} onClick={onClick} onMouseEnter={onMouseEnter}>
      {formattedDay}
    </button>);
};
var DataPickerInputDate = function (_a) {
    var label = _a.label, value = _a.value, onChange = _a.onChange, onEnter = _a.onEnter, onClick = _a.onClick, placeholder = _a.placeholder, disabled = _a.disabled;
    var handleKeyDown = function (e) {
        if (e.key === "Enter")
            onEnter();
    };
    var hasValue = value.trim() !== "";
    var containerClass = hasValue ? "data-picker-value" : "";
    return (<div className={containerClass}>
      <Input typeIcon="calendar_month" fillIcon={true} label={label} type="text" value={value} onChange={function (e) { return onChange(e.target.value); }} onKeyDown={handleKeyDown} placeholder={placeholder} onClick={onClick} disabled={disabled}/>
    </div>);
};
var DataPickerCalendar = function (_a) {
    var label = _a.label, placeholder = _a.placeholder, disabled = _a.disabled, onDateChange = _a.onDateChange, date = _a.date;
    var monthsOverflowContainerRef = useRef(null);
    var yearsOverflowContainerRef = useRef(null);
    var today = new Date();
    var _b = useState(new Date(date)), selectedDate = _b[0], setSelectedDate = _b[1];
    var _c = useState(date), inputDate = _c[0], setInputDate = _c[1];
    var _d = useState(new Date().getMonth()), currentMonth = _d[0], setCurrentMonth = _d[1];
    var _e = useState(new Date().getFullYear()), currentYear = _e[0], setCurrentYear = _e[1];
    var _f = useState(false), calendarOpen = _f[0], setCalendarOpen = _f[1];
    var _g = useState(false), secondModalOpen = _g[0], setSecondModalOpen = _g[1];
    var _h = useState(new Date().getMonth() + 1), selectedMonth = _h[0], setSelectedMonth = _h[1];
    var _j = useState(new Date().getFullYear()), selectedYear = _j[0], setSelectedYear = _j[1];
    var _k = useState(today.getDate()), selectedDay = _k[0], setSelectedDay = _k[1];
    useEffect(function () {
        if (date && typeof date === "string") {
            var _a = date.split("/").map(Number), day = _a[0], month = _a[1], year = _a[2];
            if (day && month && year) {
                var newSelectedDate = new Date(year, month - 1, day);
                setSelectedDate(newSelectedDate);
                setInputDate(newSelectedDate.toLocaleDateString("pt-BR", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                }));
            }
        }
    }, [date]);
    useEffect(function () {
        var handleDateChange = function () {
            if (selectedDate && !isNaN(selectedDate.getTime())) {
                onDateChange(selectedDate);
            }
        };
        if (selectedDate &&
            !isNaN(selectedDate.getTime()) &&
            selectedDate.getTime() !== new Date(date).getTime()) {
            handleDateChange();
        }
    }, [selectedDate, onDateChange, date]);
    var handleInputChange = function (value) {
        setInputDate(value);
        var _a = value.split("/").map(Number), day = _a[0], month = _a[1], year = _a[2];
        var isValidDate = day > 0 &&
            month > 0 &&
            year > 0 &&
            month <= 12 &&
            day <= new Date(year, month, 0).getDate();
        if (isValidDate) {
            var selectedDate_1 = new Date(year, month - 1, day);
            if (selectedDate_1.getTime() !== selectedDate_1.getTime()) {
                setSelectedDate(selectedDate_1);
                setCurrentMonth(selectedDate_1.getMonth());
                setCurrentYear(selectedDate_1.getFullYear());
                setSelectedDay(selectedDate_1.getDate());
                onDateChange(selectedDate_1);
            }
        }
        else {
            console.log("Data inválida!");
        }
    };
    var handleMonthSelect = function (selectedMonth) {
        setSelectedMonth(selectedMonth);
        setCurrentMonth(selectedMonth - 1);
        updateSelectedDateFormat(selectedMonth, selectedYear, selectedDay);
        var selectedMonthElement = document.querySelector(".month-item[data-month=\"".concat(selectedMonth, "\"]"));
        selectedMonthElement === null || selectedMonthElement === void 0 ? void 0 : selectedMonthElement.scrollIntoView({
            behavior: "smooth",
            block: "center",
        });
        centralizarOpcaoSelecionada(monthsOverflowContainerRef);
    };
    var handleYearSelect = function (selectedYear) {
        setSelectedYear(selectedYear);
        setCurrentYear(selectedYear);
        updateSelectedDateFormat(selectedMonth, selectedYear, selectedDay);
        var selectedYearElement = document.querySelector(".year-item[data-year=\"".concat(selectedYear, "\"]"));
        selectedYearElement === null || selectedYearElement === void 0 ? void 0 : selectedYearElement.scrollIntoView({
            behavior: "smooth",
            block: "center",
        });
        centralizarOpcaoSelecionada(yearsOverflowContainerRef);
    };
    var updateSelectedDateFormat = function (month, year, day) {
        var formattedDate = new Date(year, month - 1, day).toLocaleDateString("pt-BR", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
        });
        setInputDate(formattedDate);
        setSelectedDateFormat(formattedDate);
    };
    var handleDoneClick = function () {
        if (selectedDate) {
            var formattedDay = selectedDate.getDate().toString().padStart(2, "0");
            var formattedMonth = (selectedDate.getMonth() + 1)
                .toString()
                .padStart(2, "0");
            var formattedYear = selectedDate.getFullYear().toString();
            var formattedDate = "".concat(formattedDay, "/").concat(formattedMonth, "/").concat(formattedYear);
            setInputDate(formattedDate);
            onDateChange(selectedDate);
            setCalendarOpen(false);
            setSecondModalOpen(false);
        }
        else {
            console.error("Data inválida!");
        }
    };
    var handleDateClick = function (date) {
        setSelectedDate(date);
        setSelectedDay(date.getDate());
        var formattedDate = date.toLocaleDateString("pt-BR", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
        });
        setInputDate(formattedDate);
        setSelectedDateFormat(formattedDate);
        setSelectedMonth(date.getMonth() + 1);
        setSelectedYear(date.getFullYear());
    };
    var handleNextMonth = function () {
        setCurrentMonth(function (prevMonth) {
            var newMonth = prevMonth + 1;
            var newYear = currentYear + Math.floor(newMonth / 12);
            setCurrentYear(newYear);
            return newMonth % 12;
        });
    };
    var handlePrevMonth = function () {
        setCurrentMonth(function (prevMonth) {
            var newMonth = prevMonth - 1;
            var newYear = newMonth < 0 ? currentYear - 1 : currentYear;
            setCurrentYear(newYear);
            return (newMonth + 12) % 12;
        });
    };
    var weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];
    var generateDaysOfMonth = function () {
        var days = [];
        var totalDays = new Date(currentYear, currentMonth + 1, 0).getDate();
        var firstDayOfMonth = new Date(currentYear, currentMonth, 1);
        var lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);
        var startingDay = firstDayOfMonth.getDay();
        var endingDay = lastDayOfMonth.getDay();
        var prevMonthLastDay = new Date(currentYear, currentMonth, 0).getDate();
        var prevMonthDays = startingDay;
        var nextMonthDays = 6 - endingDay;
        // Add days from the previous month
        for (var i = prevMonthLastDay - prevMonthDays + 1; i <= prevMonthLastDay; i++) {
            var date_1 = new Date(currentYear, currentMonth - 1, i);
            days.push(<DataPickerDay key={"previous-month-".concat(i)} variant="disable" day={date_1.getDate()}/>);
        }
        var _loop_1 = function (i) {
            var date_2 = new Date(currentYear, currentMonth, i);
            var variant = selectedDate &&
                date_2.getDate() === selectedDate.getDate() &&
                date_2.getMonth() === selectedDate.getMonth() &&
                date_2.getFullYear() === selectedDate.getFullYear()
                ? "active"
                : i === today.getDate() &&
                    currentMonth === today.getMonth() &&
                    currentYear === today.getFullYear()
                    ? "current-day"
                    : "default";
            days.push(<DataPickerDay key={"current-month-".concat(i)} variant={variant} day={i} onClick={function () { return handleDateClick(date_2); }}/>);
        };
        // Add days from the current month
        for (var i = 1; i <= totalDays; i++) {
            _loop_1(i);
        }
        // Add days from the next month
        for (var i = 1; i <= nextMonthDays; i++) {
            var date_3 = new Date(currentYear, currentMonth + 1, i);
            days.push(<DataPickerDay key={"next-month-".concat(i)} variant="disable" day={date_3.getDate()}/>);
        }
        return days;
    };
    var generateMonthsAndYears = function () {
        var months = [];
        var years = [];
        var currentYear = new Date().getFullYear();
        for (var month = 1; month <= 12; month++) {
            months.push({
                month: month,
                label: "".concat(new Intl.DateTimeFormat("pt-BR", { month: "long" }).format(new Date(2000, month - 1))),
            });
        }
        for (var year = currentYear - 100; year <= currentYear + 50; year++) {
            years.push({
                year: year,
                label: "".concat(year),
            });
        }
        return { months: months, years: years };
    };
    var setSelectedDateFormat = function (dateString) {
        var _a = dateString
            .split(" - ")[0]
            .split("/")
            .map(Number), day = _a[0], month = _a[1], year = _a[2];
        var isValidDate = day > 0 &&
            month > 0 &&
            year > 0 &&
            month <= 12 &&
            day <= new Date(year, month, 0).getDate();
        if (isValidDate) {
            var selectedDate_2 = new Date(year, month - 1, day);
            setSelectedDate(selectedDate_2);
            setCurrentMonth(selectedDate_2.getMonth());
            setCurrentYear(selectedDate_2.getFullYear());
            setSelectedDay(selectedDate_2.getDate());
        }
        else {
            console.error("Data inválida!");
        }
    };
    var handleInputEnter = function () {
        var _a = inputDate.split(" - ")[0].split("/").map(Number), day = _a[0], month = _a[1], year = _a[2];
        var isValidDate = day > 0 &&
            month > 0 &&
            year > 0 &&
            month <= 12 &&
            day <= new Date(year, month, 0).getDate();
        if (isValidDate) {
            var selectedDate_3 = new Date(year, month - 1, day);
            setSelectedDate(selectedDate_3);
            setCurrentMonth(selectedDate_3.getMonth());
            setCurrentYear(selectedDate_3.getFullYear());
            setCalendarOpen(true);
        }
        else {
            console.error("Data inválida!");
        }
    };
    var handleResetAll = function () {
        var currentDate = new Date();
        setSelectedMonth(currentDate.getMonth() + 1);
        setSelectedYear(currentDate.getFullYear());
        updateSelectedDateFormat(currentDate.getMonth() + 1, currentDate.getFullYear(), selectedDay);
        handleReset();
    };
    var handleReset = function () {
        setSelectedDate(today);
        setInputDate(today.toLocaleDateString("pt-BR", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
        }));
        setCurrentMonth(today.getMonth());
        setCurrentYear(today.getFullYear());
        setSelectedDay(today.getDate());
    };
    var openSecondModal = function () {
        setSecondModalOpen(true);
        setCalendarOpen(false);
    };
    useEffect(function () {
        if (secondModalOpen) {
            centralizarOpcaoSelecionada(monthsOverflowContainerRef);
        }
    }, [secondModalOpen, selectedMonth]);
    useEffect(function () {
        if (secondModalOpen) {
            centralizarOpcaoSelecionada(yearsOverflowContainerRef);
        }
    }, [secondModalOpen, selectedYear]);
    var handleInputClick = function () {
        setCalendarOpen(true);
        setSecondModalOpen(false);
    };
    var handleInputClickClose = function () {
        setCalendarOpen(false);
    };
    var centralizarOpcaoSelecionada = function (ref) {
        if (ref.current) {
            var overflowContainer = ref.current;
            var selectedElement = overflowContainer.querySelector(".selected");
            if (selectedElement) {
                var containerHeight = overflowContainer.clientHeight;
                var elementHeight = selectedElement.clientHeight;
                var scrollTop = selectedElement.offsetTop - (containerHeight - elementHeight);
                overflowContainer.scrollTop = scrollTop;
            }
        }
    };
    return (<>
      <DataPickerInputDate label={label} placeholder={placeholder} value={inputDate} onChange={handleInputChange} onEnter={handleInputEnter} onClick={handleInputClick} disabled={disabled}/>
      {secondModalOpen && (<div className="data-picker-root">
          <div className="data-picker">
            <div className="data-picker-month">
              <div className="data-picker-header" onClick={handleInputClick}>
                {"".concat(new Intl.DateTimeFormat("pt-BR", { month: "long" }).format(new Date(currentYear, currentMonth)), " ").concat(currentYear)}
                <ButtonIcon size="sm" buttonType="plain" typeIcon="keyboard_arrow_down" variant="primary"/>
              </div>
            </div>
            <div className="data-picker-months-years">
              <div className="data-picker-overflow-container" ref={monthsOverflowContainerRef}>
                <div className="data-picker-overflow-content">
                  {generateMonthsAndYears().months.map(function (item, index) { return (<div key={index} className={"month-item ".concat(selectedMonth === item.month ? "selected" : "")} onClick={function () { return handleMonthSelect(item.month); }}>
                      {item.label}
                    </div>); })}
                </div>
              </div>

              <div className="data-picker-overflow-container" ref={yearsOverflowContainerRef}>
                <div className="data-picker-overflow-content">
                  {generateMonthsAndYears().years.map(function (item, index) { return (<div key={index} className={"year-item ".concat(selectedYear === item.year ? "selected" : "")} onClick={function () { return handleYearSelect(item.year); }}>
                      {item.label}
                    </div>); })}
                </div>
              </div>
            </div>
            <div className="data-picker-buttons-actions">
              <Button size="sm" variant="secondary" label="Reset" onClick={handleResetAll}/>
              <Button size="sm" variant="primary" label="Done" onClick={function () {
                if (selectedDate) {
                    handleDoneClick();
                }
            }}/>
            </div>
          </div>
        </div>)}
      {calendarOpen && (<div className="data-picker-root">
          <div className="data-picker">
            <div className="data-picker-month">
              <div className="data-picker-header" onClick={openSecondModal}>
                {"".concat(new Intl.DateTimeFormat("pt-BR", { month: "long" }).format(new Date(currentYear, currentMonth)), " ").concat(currentYear)}
                <ButtonIcon size="sm" buttonType="plain" typeIcon="keyboard_arrow_right" variant="secondary"/>
              </div>

              <div style={{ display: "flex", flexDirection: "row" }}>
                <ButtonIcon variant="secondary" size="sm" onClick={handlePrevMonth} typeIcon="keyboard_arrow_left" buttonType="plain"/>
                <ButtonIcon variant="secondary" buttonType="plain" size="sm" onClick={handleNextMonth} typeIcon="keyboard_arrow_right"/>
              </div>
            </div>
            <div>
              <div className="data-picker-week-days">
                {weekDays.map(function (day, index) { return (<p key={index}>{day}</p>); })}
              </div>
              <div className="data-picker-days">{generateDaysOfMonth()}</div>
            </div>

            <div className="data-picker-buttons-actions">
              <Button size="sm" variant="secondary" label="Reset" onClick={handleResetAll}/>
              <Button size="sm" variant="primary" label="Done" onClick={function () {
                if (selectedDate) {
                    handleDoneClick();
                }
            }}/>
            </div>
          </div>
        </div>)}
    </>);
};
var DataPicker = function (_a) {
    var label = _a.label, placeholder = _a.placeholder, disabled = _a.disabled, onDateChange = _a.onDateChange, date = _a.date;
    return (<>
      <div>
        <DataPickerCalendar date={date} onDateChange={onDateChange} placeholder={placeholder} label={label} disabled={disabled}/>
      </div>
    </>);
};
export default DataPicker;
