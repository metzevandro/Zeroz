"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
require("./DataPicker.scss");
var _ButtonIcon = _interopRequireDefault(require("../ButtonIcon/ButtonIcon"));
var _Input = _interopRequireDefault(require("../Input/Input"));
var _Button = _interopRequireDefault(require("../Button/Button"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var DataPickerDay = function DataPickerDay(_ref) {
  var variant = _ref.variant,
    day = _ref.day,
    onClick = _ref.onClick,
    onMouseEnter = _ref.onMouseEnter;
  var formattedDay = day < 10 ? "0".concat(day) : "".concat(day);
  var buttonClass = "data-picker-day ".concat(variant);
  return <button disabled={variant === "disable"} tabIndex={0} className={buttonClass} onClick={onClick} onMouseEnter={onMouseEnter}>
      {formattedDay}
    </button>;
};
var DataPickerInputDate = function DataPickerInputDate(_ref2) {
  var label = _ref2.label,
    value = _ref2.value,
    onChange = _ref2.onChange,
    onEnter = _ref2.onEnter,
    onClick = _ref2.onClick,
    placeholder = _ref2.placeholder,
    disabled = _ref2.disabled;
  var handleKeyDown = function handleKeyDown(e) {
    if (e.key === "Enter") onEnter();
  };
  var hasValue = value.trim() !== "";
  var containerClass = hasValue ? "data-picker-value" : "";
  return <div className={containerClass}>
      <_Input.default typeIcon="calendar_month" fillIcon={true} label={label} type="text" value={value} onChange={function (e) {
      return onChange(e.target.value);
    }} onKeyDown={handleKeyDown} placeholder={placeholder} onClick={onClick} disabled={disabled} />
    </div>;
};
var DataPickerCalendar = function DataPickerCalendar(_ref3) {
  var label = _ref3.label,
    placeholder = _ref3.placeholder,
    disabled = _ref3.disabled,
    onDateChange = _ref3.onDateChange,
    date = _ref3.date;
  var monthsOverflowContainerRef = (0, _react.useRef)(null);
  var yearsOverflowContainerRef = (0, _react.useRef)(null);
  var today = new Date();
  var _useState = (0, _react.useState)(new Date(date)),
    _useState2 = _slicedToArray(_useState, 2),
    selectedDate = _useState2[0],
    setSelectedDate = _useState2[1];
  var _useState3 = (0, _react.useState)(date),
    _useState4 = _slicedToArray(_useState3, 2),
    inputDate = _useState4[0],
    setInputDate = _useState4[1];
  var _useState5 = (0, _react.useState)(new Date().getMonth()),
    _useState6 = _slicedToArray(_useState5, 2),
    currentMonth = _useState6[0],
    setCurrentMonth = _useState6[1];
  var _useState7 = (0, _react.useState)(new Date().getFullYear()),
    _useState8 = _slicedToArray(_useState7, 2),
    currentYear = _useState8[0],
    setCurrentYear = _useState8[1];
  var _useState9 = (0, _react.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    calendarOpen = _useState10[0],
    setCalendarOpen = _useState10[1];
  var _useState11 = (0, _react.useState)(false),
    _useState12 = _slicedToArray(_useState11, 2),
    secondModalOpen = _useState12[0],
    setSecondModalOpen = _useState12[1];
  var _useState13 = (0, _react.useState)(new Date().getMonth() + 1),
    _useState14 = _slicedToArray(_useState13, 2),
    selectedMonth = _useState14[0],
    setSelectedMonth = _useState14[1];
  var _useState15 = (0, _react.useState)(new Date().getFullYear()),
    _useState16 = _slicedToArray(_useState15, 2),
    selectedYear = _useState16[0],
    setSelectedYear = _useState16[1];
  var _useState17 = (0, _react.useState)(today.getDate()),
    _useState18 = _slicedToArray(_useState17, 2),
    selectedDay = _useState18[0],
    setSelectedDay = _useState18[1];
  (0, _react.useEffect)(function () {
    if (date && typeof date === "string") {
      var _date$split$map = date.split("/").map(Number),
        _date$split$map2 = _slicedToArray(_date$split$map, 3),
        day = _date$split$map2[0],
        month = _date$split$map2[1],
        year = _date$split$map2[2];
      if (day && month && year) {
        var newSelectedDate = new Date(year, month - 1, day);
        setSelectedDate(newSelectedDate);
        setInputDate(newSelectedDate.toLocaleDateString("pt-BR", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric"
        }));
      }
    }
  }, [date]);
  (0, _react.useEffect)(function () {
    var handleDateChange = function handleDateChange() {
      if (selectedDate && !isNaN(selectedDate.getTime())) {
        onDateChange(selectedDate);
      }
    };
    if (selectedDate && !isNaN(selectedDate.getTime()) && selectedDate.getTime() !== new Date(date).getTime()) {
      handleDateChange();
    }
  }, [selectedDate, onDateChange, date]);
  var handleInputChange = function handleInputChange(value) {
    setInputDate(value);
    var _value$split$map = value.split("/").map(Number),
      _value$split$map2 = _slicedToArray(_value$split$map, 3),
      day = _value$split$map2[0],
      month = _value$split$map2[1],
      year = _value$split$map2[2];
    if (day !== undefined && month !== undefined && year !== undefined) {
      var isValidDate = day > 0 && month > 0 && year > 0 && month <= 12 && day <= new Date(year, month, 0).getDate();
      if (isValidDate) {
        var _selectedDate = new Date(year, month - 1, day);
        if (_selectedDate.getTime() !== _selectedDate.getTime()) {
          setSelectedDate(_selectedDate);
          setCurrentMonth(_selectedDate.getMonth());
          setCurrentYear(_selectedDate.getFullYear());
          setSelectedDay(_selectedDate.getDate());
          onDateChange(_selectedDate);
        }
      } else {
        console.log("Data inválida!");
      }
    } else {
      console.log("Data inválida!");
    }
  };
  var handleMonthSelect = function handleMonthSelect(selectedMonth) {
    setSelectedMonth(selectedMonth);
    setCurrentMonth(selectedMonth - 1);
    updateSelectedDateFormat(selectedMonth, selectedYear, selectedDay);
    var selectedMonthElement = document.querySelector(".month-item[data-month=\"".concat(selectedMonth, "\"]"));
    selectedMonthElement === null || selectedMonthElement === void 0 || selectedMonthElement.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
    centralizarOpcaoSelecionada(monthsOverflowContainerRef);
  };
  var handleYearSelect = function handleYearSelect(selectedYear) {
    setSelectedYear(selectedYear);
    setCurrentYear(selectedYear);
    updateSelectedDateFormat(selectedMonth, selectedYear, selectedDay);
    var selectedYearElement = document.querySelector(".year-item[data-year=\"".concat(selectedYear, "\"]"));
    selectedYearElement === null || selectedYearElement === void 0 || selectedYearElement.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
    centralizarOpcaoSelecionada(yearsOverflowContainerRef);
  };
  var updateSelectedDateFormat = function updateSelectedDateFormat(month, year, day) {
    var formattedDate = new Date(year, month - 1, day).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric"
    });
    setInputDate(formattedDate);
    setSelectedDateFormat(formattedDate);
  };
  var handleDoneClick = function handleDoneClick() {
    if (selectedDate) {
      var formattedDay = selectedDate.getDate().toString().padStart(2, "0");
      var formattedMonth = (selectedDate.getMonth() + 1).toString().padStart(2, "0");
      var formattedYear = selectedDate.getFullYear().toString();
      var formattedDate = "".concat(formattedDay, "/").concat(formattedMonth, "/").concat(formattedYear);
      setInputDate(formattedDate);
      onDateChange(selectedDate);
      setCalendarOpen(false);
      setSecondModalOpen(false);
    } else {
      console.error("Data inválida!");
    }
  };
  var handleDateClick = function handleDateClick(date) {
    setSelectedDate(date);
    setSelectedDay(date.getDate());
    var formattedDate = date.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric"
    });
    setInputDate(formattedDate);
    setSelectedDateFormat(formattedDate);
    setSelectedMonth(date.getMonth() + 1);
    setSelectedYear(date.getFullYear());
  };
  var handleNextMonth = function handleNextMonth() {
    setCurrentMonth(function (prevMonth) {
      var newMonth = prevMonth + 1;
      var newYear = currentYear + Math.floor(newMonth / 12);
      setCurrentYear(newYear);
      return newMonth % 12;
    });
  };
  var handlePrevMonth = function handlePrevMonth() {
    setCurrentMonth(function (prevMonth) {
      var newMonth = prevMonth - 1;
      var newYear = newMonth < 0 ? currentYear - 1 : currentYear;
      setCurrentYear(newYear);
      return (newMonth + 12) % 12;
    });
  };
  var weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];
  var generateDaysOfMonth = function generateDaysOfMonth() {
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
      var _date = new Date(currentYear, currentMonth - 1, i);
      days.push(<DataPickerDay key={"previous-month-".concat(i)} variant="disable" day={_date.getDate()} />);
    }

    // Add days from the current month
    var _loop = function _loop() {
      var date = new Date(currentYear, currentMonth, _i);
      var variant = selectedDate && date.getDate() === selectedDate.getDate() && date.getMonth() === selectedDate.getMonth() && date.getFullYear() === selectedDate.getFullYear() ? "active" : _i === today.getDate() && currentMonth === today.getMonth() && currentYear === today.getFullYear() ? "current-day" : "default";
      days.push(<DataPickerDay key={"current-month-".concat(_i)} variant={variant} day={_i} onClick={function () {
        return handleDateClick(date);
      }} />);
    };
    for (var _i = 1; _i <= totalDays; _i++) {
      _loop();
    }

    // Add days from the next month
    for (var _i2 = 1; _i2 <= nextMonthDays; _i2++) {
      var _date2 = new Date(currentYear, currentMonth + 1, _i2);
      days.push(<DataPickerDay key={"next-month-".concat(_i2)} variant="disable" day={_date2.getDate()} />);
    }
    return days;
  };
  var generateMonthsAndYears = function generateMonthsAndYears() {
    var months = [];
    var years = [];
    var currentYear = new Date().getFullYear();
    for (var month = 1; month <= 12; month++) {
      months.push({
        month: month,
        label: "".concat(new Intl.DateTimeFormat("pt-BR", {
          month: "long"
        }).format(new Date(2000, month - 1)))
      });
    }
    for (var year = currentYear - 100; year <= currentYear + 50; year++) {
      years.push({
        year: year,
        label: "".concat(year)
      });
    }
    return {
      months: months,
      years: years
    };
  };
  var setSelectedDateFormat = function setSelectedDateFormat(dateString) {
    if (dateString.split(" - ").length < 2) {
      console.error("Invalid date format");
      return;
    }
    var dateParts = dateString.split("/");
    if (dateParts.length !== 3) {
      console.error("Invalid date format");
      return;
    }
    var _dateParts$map = dateParts.map(Number),
      _dateParts$map2 = _slicedToArray(_dateParts$map, 3),
      day = _dateParts$map2[0],
      month = _dateParts$map2[1],
      year = _dateParts$map2[2];
    if (day === undefined || month === undefined || year === undefined || day <= 0 || month <= 0 || year <= 0 || month > 12 || day > new Date(year, month, 0).getDate()) {
      console.error("Invalid date");
      return;
    }
    var selectedDate = new Date(year, month - 1, day);
    setSelectedDate(selectedDate);
    setCurrentMonth(selectedDate.getMonth());
    setCurrentYear(selectedDate.getFullYear());
  };
  var handleInputEnter = function handleInputEnter() {
    var _inputDate$split$map = inputDate.split("/").map(Number),
      _inputDate$split$map2 = _slicedToArray(_inputDate$split$map, 3),
      day = _inputDate$split$map2[0],
      month = _inputDate$split$map2[1],
      year = _inputDate$split$map2[2];
    if (day !== undefined && month !== undefined && year !== undefined) {
      var isValidDate = day > 0 && month > 0 && year > 0 && month <= 12 && day <= new Date(year, month, 0).getDate();
      if (isValidDate) {
        var _selectedDate2 = new Date(year, month - 1, day);
        if (_selectedDate2.getTime() !== _selectedDate2.getTime()) {
          setSelectedDate(_selectedDate2);
          setCurrentMonth(_selectedDate2.getMonth());
          setCurrentYear(_selectedDate2.getFullYear());
          setSelectedDay(_selectedDate2.getDate());
          onDateChange(_selectedDate2);
        }
      } else {
        console.log("Data inválida!");
      }
    } else {
      console.log("Data inválida!");
    }
  };
  var handleResetAll = function handleResetAll() {
    var currentDate = new Date();
    setSelectedMonth(currentDate.getMonth() + 1);
    setSelectedYear(currentDate.getFullYear());
    updateSelectedDateFormat(currentDate.getMonth() + 1, currentDate.getFullYear(), selectedDay);
    handleReset();
  };
  var handleReset = function handleReset() {
    setSelectedDate(today);
    setInputDate(today.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric"
    }));
    setCurrentMonth(today.getMonth());
    setCurrentYear(today.getFullYear());
    setSelectedDay(today.getDate());
  };
  var openSecondModal = function openSecondModal() {
    setSecondModalOpen(true);
    setCalendarOpen(false);
  };
  (0, _react.useEffect)(function () {
    if (secondModalOpen) {
      centralizarOpcaoSelecionada(monthsOverflowContainerRef);
    }
  }, [secondModalOpen, selectedMonth]);
  (0, _react.useEffect)(function () {
    if (secondModalOpen) {
      centralizarOpcaoSelecionada(yearsOverflowContainerRef);
    }
  }, [secondModalOpen, selectedYear]);
  var handleInputClick = function handleInputClick() {
    setCalendarOpen(true);
    setSecondModalOpen(false);
  };
  var handleInputClickClose = function handleInputClickClose() {
    setCalendarOpen(false);
  };
  var centralizarOpcaoSelecionada = function centralizarOpcaoSelecionada(ref) {
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
  return <>
      <DataPickerInputDate label={label} placeholder={placeholder} value={inputDate} onChange={handleInputChange} onEnter={handleInputEnter} onClick={handleInputClick} disabled={disabled} />
      {secondModalOpen && <div className="data-picker-root">
          <div className="data-picker">
            <div className="data-picker-month">
              <div className="data-picker-header" onClick={handleInputClick}>
                {"".concat(new Intl.DateTimeFormat("pt-BR", {
              month: "long"
            }).format(new Date(currentYear, currentMonth)), " ").concat(currentYear)}
                <_ButtonIcon.default size="sm" buttonType="plain" typeIcon="keyboard_arrow_down" variant="primary" />
              </div>
            </div>
            <div className="data-picker-months-years">
              <div className="data-picker-overflow-container" ref={monthsOverflowContainerRef}>
                <div className="data-picker-overflow-content">
                  {generateMonthsAndYears().months.map(function (item, index) {
                return <div key={index} className={"month-item ".concat(selectedMonth === item.month ? "selected" : "")} onClick={function () {
                  return handleMonthSelect(item.month);
                }}>
                      {item.label}
                    </div>;
              })}
                </div>
              </div>

              <div className="data-picker-overflow-container" ref={yearsOverflowContainerRef}>
                <div className="data-picker-overflow-content">
                  {generateMonthsAndYears().years.map(function (item, index) {
                return <div key={index} className={"year-item ".concat(selectedYear === item.year ? "selected" : "")} onClick={function () {
                  return handleYearSelect(item.year);
                }}>
                      {item.label}
                    </div>;
              })}
                </div>
              </div>
            </div>
            <div className="data-picker-buttons-actions">
              <_Button.default size="sm" variant="secondary" label="Reset" onClick={handleResetAll} />
              <_Button.default size="sm" variant="primary" label="Done" onClick={function () {
            if (selectedDate) {
              handleDoneClick();
            }
          }} />
            </div>
          </div>
        </div>}
      {calendarOpen && <div className="data-picker-root">
          <div className="data-picker">
            <div className="data-picker-month">
              <div className="data-picker-header" onClick={openSecondModal}>
                {"".concat(new Intl.DateTimeFormat("pt-BR", {
              month: "long"
            }).format(new Date(currentYear, currentMonth)), " ").concat(currentYear)}
                <_ButtonIcon.default size="sm" buttonType="plain" typeIcon="keyboard_arrow_right" variant="secondary" />
              </div>

              <div style={{
            display: "flex",
            flexDirection: "row"
          }}>
                <_ButtonIcon.default variant="secondary" size="sm" onClick={handlePrevMonth} typeIcon="keyboard_arrow_left" buttonType="plain" />
                <_ButtonIcon.default variant="secondary" buttonType="plain" size="sm" onClick={handleNextMonth} typeIcon="keyboard_arrow_right" />
              </div>
            </div>
            <div>
              <div className="data-picker-week-days">
                {weekDays.map(function (day, index) {
              return <p key={index}>{day}</p>;
            })}
              </div>
              <div className="data-picker-days">{generateDaysOfMonth()}</div>
            </div>

            <div className="data-picker-buttons-actions">
              <_Button.default size="sm" variant="secondary" label="Reset" onClick={handleResetAll} />
              <_Button.default size="sm" variant="primary" label="Done" onClick={function () {
            if (selectedDate) {
              handleDoneClick();
            }
          }} />
            </div>
          </div>
        </div>}
    </>;
};
var DataPicker = function DataPicker(_ref4) {
  var label = _ref4.label,
    placeholder = _ref4.placeholder,
    disabled = _ref4.disabled,
    onDateChange = _ref4.onDateChange,
    date = _ref4.date;
  return <>
      <div>
        <DataPickerCalendar date={date} onDateChange={onDateChange} placeholder={placeholder} label={label} disabled={disabled} />
      </div>
    </>;
};
var _default = exports["default"] = DataPicker;