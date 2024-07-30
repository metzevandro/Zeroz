"use strict";

var React = require("react");

var AppShellContainer = function (_a) {
  var children = _a.children;
  return React.createElement("div", { className: "app-shell" }, children);
};
var AppShell = React.memo(AppShellContainer);

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */

var __assign = function () {
  __assign =
    Object.assign ||
    function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s)
          if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
    };
  return __assign.apply(this, arguments);
};

function __rest(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (
        e.indexOf(p[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(s, p[i])
      )
        t[p[i]] = s[p[i]];
    }
  return t;
}

function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P
      ? value
      : new P(function (resolve) {
          resolve(value);
        });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done
        ? resolve(result.value)
        : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = {
      label: 0,
      sent: function () {
        if (t[0] & 1) throw t[1];
        return t[1];
      },
      trys: [],
      ops: [],
    },
    f,
    y,
    t,
    g;
  return (
    (g = { next: verb(0), throw: verb(1), return: verb(2) }),
    typeof Symbol === "function" &&
      (g[Symbol.iterator] = function () {
        return this;
      }),
    g
  );
  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while ((g && ((g = 0), op[0] && (_ = 0)), _))
      try {
        if (
          ((f = 1),
          y &&
            (t =
              op[0] & 2
                ? y["return"]
                : op[0]
                  ? y["throw"] || ((t = y["return"]) && t.call(y), 0)
                  : y.next) &&
            !(t = t.call(y, op[1])).done)
        )
          return t;
        if (((y = 0), t)) op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _.label++;
            return { value: op[1], done: false };
          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (
              !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
              (op[0] === 6 || op[0] === 2)
            ) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            if (t[2]) _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    if (op[0] & 5) throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
}

function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2)
    for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
        if (!ar) ar = Array.prototype.slice.call(from, 0, i);
        ar[i] = from[i];
      }
    }
  return to.concat(ar || Array.prototype.slice.call(from));
}

typeof SuppressedError === "function"
  ? SuppressedError
  : function (error, suppressed, message) {
      var e = new Error(message);
      return (
        (e.name = "SuppressedError"),
        (e.error = error),
        (e.suppressed = suppressed),
        e
      );
    };

var Icon = function (_a) {
  var size = _a.size,
    fill = _a.fill,
    icon = _a.icon;
  var sizeClass = size;
  var fillStyle = "'FILL' ".concat(
    fill ? 1 : 0,
    ",\n    'GRAD' 0,\n    'opsz' 24",
  );
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      "span",
      {
        style: { fontVariationSettings: fillStyle },
        className: "material-symbols-outlined ".concat(sizeClass),
      },
      icon,
    ),
  );
};

function Skeleton(props) {
  return React.createElement("div", {
    className: "skeleton ".concat(
      props.circle === true ? "circle" : "no-circle",
    ),
    style: {
      width: "".concat(props.width, "px"),
      height: "".concat(props.height, "px"),
      borderRadius: props.circle ? "var(--s-border-radius-pill)" : "",
      backgroundSize: "".concat(props.width, "px"),
    },
  });
}

var ButtonIcon = function (_a) {
  var size = _a.size,
    buttonType = _a.buttonType,
    typeIcon = _a.typeIcon,
    variant = _a.variant,
    disabled = _a.disabled,
    skeleton = _a.skeleton,
    rest = __rest(_a, [
      "size",
      "buttonType",
      "typeIcon",
      "variant",
      "disabled",
      "skeleton",
    ]);
  var buttonRef = React.useRef(null);
  var _b = React.useState(null),
    dimensions = _b[0],
    setDimensions = _b[1];
  React.useEffect(
    function () {
      if (buttonRef.current) {
        var _a = buttonRef.current,
          height = _a.offsetHeight,
          width = _a.offsetWidth;
        setDimensions({ height: height, width: width });
      }
    },
    [size, variant],
  );
  return React.createElement(
    React.Fragment,
    null,
    skeleton && dimensions
      ? React.createElement(Skeleton, {
          height: "".concat(dimensions.height),
          width: "".concat(dimensions.width),
        })
      : React.createElement(
          "button",
          __assign({}, rest, {
            ref: buttonRef,
            disabled: disabled,
            className: "button-icon "
              .concat(variant, " ")
              .concat(size, " ")
              .concat(buttonType),
          }),
          typeIcon &&
            React.createElement(Icon, {
              icon: typeIcon,
              size: buttonType === "default" ? "md" : size,
            }),
        ),
  );
};

var Aside = function (_a) {
  var title = _a.title,
    isOpen = _a.isOpen,
    description = _a.description,
    toggleAside = _a.toggleAside,
    footer = _a.footer,
    content = _a.content;
  return React.createElement(
    React.Fragment,
    null,
    React.createElement("div", {
      className: "aside-overlay ".concat(isOpen ? "open" : "hidden"),
      onClick: toggleAside,
    }),
    React.createElement(
      "div",
      { className: "aside-root ".concat(isOpen ? "open" : "") },
      React.createElement(
        "div",
        { className: "aside" },
        React.createElement(
          "header",
          { className: "aside-header" },
          React.createElement(
            "div",
            { className: "aside-title" },
            React.createElement("div", null, title),
            React.createElement(ButtonIcon, {
              buttonType: "plain",
              variant: "primary",
              typeIcon: "close",
              size: "md",
              onClick: toggleAside,
            }),
          ),
          React.createElement(
            "div",
            { className: "aside-description" },
            description,
          ),
        ),
        React.createElement("main", { className: "aside-children" }, content),
        React.createElement("footer", { className: "aside-footer" }, footer),
      ),
    ),
  );
};
var AsideContent = function (_a) {
  var children = _a.children;
  return React.createElement("div", { className: "aside-content" }, children);
};
var AsideFooter = function (_a) {
  var children = _a.children;
  return React.createElement("div", null, children);
};

var Avatar = function (_a) {
  var _b;
  var size = _a.size,
    src = _a.src,
    skeleton = _a.skeleton,
    letter = _a.letter;
  var getSize = function (size) {
    switch (size) {
      case "sm":
        return 24;
      case "md":
        return 40;
      case "lg":
        return 64;
      default:
        return 32;
    }
  };
  var sizeInPixels = getSize(size);
  var getLetter = function (letter) {
    if (letter && letter.includes(" ")) {
      var _a = letter.split(" "),
        firstName = _a[0],
        lastName = _a[1];
      return ""
        .concat(
          firstName === null || firstName === void 0
            ? void 0
            : firstName.charAt(0),
        )
        .concat(
          lastName === null || lastName === void 0
            ? void 0
            : lastName.charAt(0),
        );
    } else if (letter && letter.length > 1) {
      return letter.charAt(0);
    }
    return letter;
  };
  return React.createElement(
    "div",
    { className: "avatar" },
    skeleton
      ? React.createElement(Skeleton, {
          height: "".concat(sizeInPixels),
          circle: true,
          width: "".concat(sizeInPixels),
        })
      : React.createElement(
          React.Fragment,
          null,
          src
            ? React.createElement(
                "label",
                { className: "avatar-image" },
                React.createElement("img", {
                  className: size,
                  src: src,
                  alt: "Avatar",
                }),
              )
            : React.createElement(
                React.Fragment,
                null,
                letter
                  ? React.createElement(
                      "label",
                      { className: "avatar-letter ".concat(size) },
                      (_b = getLetter(letter)) === null || _b === void 0
                        ? void 0
                        : _b.toLocaleUpperCase(),
                    )
                  : React.createElement(
                      "label",
                      { className: "avatar-icon ".concat(size) },
                      React.createElement(Icon, { size: size, icon: "person" }),
                    ),
              ),
        ),
  );
};

var Badge = function (_a) {
  var label = _a.label,
    type = _a.type,
    variant = _a.variant;
  return React.createElement(
    "div",
    { className: "badge ".concat(type, " ").concat(variant) },
    React.createElement("p", null, label),
  );
};

var Brand = function (_a) {
  var src = _a.src,
    alt = _a.alt,
    size = _a.size,
    rest = __rest(_a, ["src", "alt", "size"]);
  return React.createElement(
    "div",
    { className: "brand-root ".concat(size) },
    React.createElement("img", __assign({ src: src, alt: alt }, rest)),
  );
};

var Link = function (_a) {
  var content = _a.content,
    disabled = _a.disabled,
    rest = __rest(_a, ["content", "disabled"]);
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      "a",
      __assign({ className: "link ".concat(disabled ? "disabled" : "") }, rest),
      content,
    ),
  );
};

var Breadcrumb = function (_a) {
  var items = _a.items;
  return React.createElement(
    "div",
    { className: "breadcrumb" },
    items.map(function (item, index) {
      return React.createElement(
        React.Fragment,
        { key: index },
        React.createElement(Link, { content: item.pageName, href: item.href }),
        index < items.length - 1 &&
          React.createElement(Icon, {
            icon: "keyboard_arrow_right",
            size: "sm",
          }),
      );
    }),
  );
};

var Loading = function (_a) {
  var variant = _a.variant,
    message = _a.message;
  return React.createElement(
    React.Fragment,
    null,
    variant === "default" &&
      React.createElement(
        "div",
        { className: "loading-with-message" },
        React.createElement(
          "span",
          { className: "loading" },
          React.createElement(Icon, { size: "sm", icon: "progress_activity" }),
        ),
        message &&
          React.createElement("p", { className: "loading-message" }, message),
      ),
    variant === "large" &&
      React.createElement(
        "span",
        { className: "loading" },
        React.createElement(Icon, { size: "lg", icon: "progress_activity" }),
      ),
    variant === "success" &&
      React.createElement(
        "div",
        { className: "loading-with-message" },
        React.createElement(
          "span",
          { className: "success" },
          React.createElement(Icon, { size: "sm", icon: "check_circle" }),
        ),
        message &&
          React.createElement("p", { className: "loading-message" }, message),
        " ",
      ),
    variant === "warning" &&
      React.createElement(
        "div",
        { className: "loading-with-message" },
        React.createElement(
          "span",
          { className: "warning" },
          React.createElement(Icon, { size: "sm", icon: "error_outline" }),
        ),
        message &&
          React.createElement("p", { className: "loading-message" }, message),
        " ",
      ),
  );
};

var Button = function (_a) {
  var disabled = _a.disabled,
    label = _a.label,
    variant = _a.variant,
    typeIcon = _a.typeIcon,
    size = _a.size,
    skeleton = _a.skeleton,
    rest = __rest(_a, [
      "disabled",
      "label",
      "variant",
      "typeIcon",
      "size",
      "skeleton",
    ]);
  var buttonRef = React.useRef(null);
  var _b = React.useState(null),
    dimensions = _b[0],
    setDimensions = _b[1];
  React.useEffect(
    function () {
      if (buttonRef.current) {
        var _a = buttonRef.current,
          height = _a.offsetHeight,
          width = _a.offsetWidth;
        setDimensions({ height: height, width: width });
      }
    },
    [label, size, variant],
  );
  var buttonClass = "button ".concat(variant, " ").concat(size);
  return React.createElement(
    React.Fragment,
    null,
    skeleton && dimensions
      ? React.createElement(Skeleton, {
          height: "".concat(dimensions.height),
          width: "".concat(dimensions.width),
        })
      : label &&
          React.createElement(
            "button",
            __assign({}, rest, {
              ref: buttonRef,
              className: buttonClass,
              disabled: disabled,
            }),
            variant === "is-loading" &&
              React.createElement(Loading, { variant: "default" }),
            typeIcon &&
              React.createElement(Icon, { icon: typeIcon, size: "sm" }),
            label,
          ),
  );
};

var ButtonGroup = function (_a) {
  var direction = _a.direction,
    onClickSecondButton = _a.onClickSecondButton,
    typeIconSecondButton = _a.typeIconSecondButton,
    contentSecondButton = _a.contentSecondButton,
    variantSecondButton = _a.variantSecondButton,
    disableSecondButton = _a.disableSecondButton,
    disableFirstButton = _a.disableFirstButton,
    onClickFirstButton = _a.onClickFirstButton,
    contentFirstButton = _a.contentFirstButton,
    typeIconFirstButton = _a.typeIconFirstButton,
    variantFirstButton = _a.variantFirstButton,
    skeletonFirstButton = _a.skeletonFirstButton,
    skeletonSecondButton = _a.skeletonSecondButton;
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      "div",
      { className: "button-group ".concat(direction) },
      React.createElement(Button, {
        size: "md",
        disabled: disableFirstButton,
        onClick: onClickFirstButton,
        label: contentFirstButton,
        typeIcon: typeIconFirstButton,
        variant: variantFirstButton,
        skeleton: skeletonFirstButton,
      }),
      React.createElement(Button, {
        size: "md",
        disabled: disableSecondButton,
        onClick: onClickSecondButton,
        label: contentSecondButton,
        typeIcon: typeIconSecondButton,
        variant: variantSecondButton,
        skeleton: skeletonSecondButton,
      }),
    ),
  );
};

function Card(props) {
  return React.createElement(
    "div",
    { className: "card-root" },
    React.createElement("div", null, props.image),
    React.createElement("div", null, props.header),
    React.createElement("div", null, props.content),
    React.createElement("div", null, props.footer),
  );
}
function CardImage(props) {
  return React.createElement(
    "div",
    { className: "card-image" },
    props.children,
  );
}
function CardHeader(props) {
  return React.createElement(
    "div",
    { className: "card-header" },
    React.createElement("h1", null, props.title),
    React.createElement("p", null, props.description),
  );
}
function CardContent(props) {
  return React.createElement(
    "div",
    { className: "card-content" },
    props.children,
  );
}
function CardFooter(props) {
  return React.createElement(
    "div",
    { className: "card-footer" },
    props.children,
  );
}

var CardDropdown = function (_a) {
  var title = _a.title,
    content = _a.content,
    footer = _a.footer,
    description = _a.description;
  var _b = React.useState(false),
    isOpen = _b[0],
    setIsOpen = _b[1];
  var toggleDropDown = function () {
    setIsOpen(!isOpen);
  };
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      "div",
      { className: "card-dropdown" },
      React.createElement(
        "div",
        { className: "card-dropdown-header", onClick: toggleDropDown },
        React.createElement(
          "div",
          { className: "card-dropdown-title" },
          React.createElement("div", null, title),
          React.createElement(
            "div",
            {
              className: "card-dropdown-button ".concat(
                isOpen ? "open" : "close",
              ),
            },
            React.createElement(Icon, {
              size: "md",
              icon: "keyboard_arrow_down",
            }),
          ),
        ),
        React.createElement(
          "div",
          null,
          description && React.createElement("p", null, description),
        ),
      ),
      content &&
        React.createElement(
          "div",
          {
            className: "card-dropdown-content ".concat(
              isOpen ? "open" : "close",
            ),
          },
          content,
        ),
      footer &&
        React.createElement(
          "div",
          {
            className: "card-dropdown-footer ".concat(
              isOpen ? "open" : "close",
            ),
          },
          footer,
        ),
    ),
  );
};

var Input = function (_a) {
  var typeIcon = _a.typeIcon,
    fillIcon = _a.fillIcon,
    label = _a.label,
    error = _a.error,
    disabled = _a.disabled,
    textError = _a.textError,
    value = _a.value,
    rest = __rest(_a, [
      "typeIcon",
      "fillIcon",
      "label",
      "error",
      "disabled",
      "textError",
      "value",
    ]);
  var inputRef = React.useRef(null);
  var handleDivClick = function () {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  return React.createElement(
    "div",
    { className: "input-root" },
    label &&
      React.createElement(
        "div",
        { className: "input-header" },
        React.createElement("label", null, label),
      ),
    React.createElement(
      "div",
      null,
      React.createElement(
        "div",
        {
          className: "input-content "
            .concat(disabled ? "disabled" : "", " ")
            .concat(error ? "error" : ""),
          onClick: handleDivClick,
        },
        React.createElement(
          "input",
          __assign({ size: 0 }, rest, {
            value: value,
            disabled: disabled,
            ref: inputRef,
          }),
        ),
        React.createElement(Icon, {
          icon: typeIcon,
          size: "md",
          fill: fillIcon,
        }),
      ),
      error &&
        React.createElement("div", { className: "input-error" }, textError),
    ),
  );
};

var DataPickerDay = function (_a) {
  var variant = _a.variant,
    day = _a.day,
    onClick = _a.onClick,
    onMouseEnter = _a.onMouseEnter;
  var formattedDay = day < 10 ? "0".concat(day) : "".concat(day);
  var buttonClass = "data-picker-day ".concat(variant);
  return React.createElement(
    "button",
    {
      disabled: variant === "disable",
      tabIndex: 0,
      className: buttonClass,
      onClick: onClick,
      onMouseEnter: onMouseEnter,
    },
    formattedDay,
  );
};
var DataPickerInputDate = function (_a) {
  var label = _a.label,
    value = _a.value,
    onChange = _a.onChange,
    onEnter = _a.onEnter,
    onClick = _a.onClick,
    placeholder = _a.placeholder,
    disabled = _a.disabled;
  var handleKeyDown = function (e) {
    if (e.key === "Enter") onEnter();
  };
  var hasValue = value.trim() !== "";
  var containerClass = hasValue ? "data-picker-value" : "";
  return React.createElement(
    "div",
    { className: containerClass },
    React.createElement(Input, {
      typeIcon: "calendar_month",
      fillIcon: true,
      label: label,
      type: "text",
      value: value,
      onChange: function (e) {
        return onChange(e.target.value);
      },
      onKeyDown: handleKeyDown,
      placeholder: placeholder,
      onClick: onClick,
      disabled: disabled,
    }),
  );
};
var DataPickerCalendar = function (_a) {
  var label = _a.label,
    placeholder = _a.placeholder,
    disabled = _a.disabled,
    onDateChange = _a.onDateChange,
    date = _a.date;
  var monthsOverflowContainerRef = React.useRef(null);
  var yearsOverflowContainerRef = React.useRef(null);
  var today = new Date();
  var _b = React.useState(new Date(date)),
    selectedDate = _b[0],
    setSelectedDate = _b[1];
  var _c = React.useState(date),
    inputDate = _c[0],
    setInputDate = _c[1];
  var _d = React.useState(new Date().getMonth()),
    currentMonth = _d[0],
    setCurrentMonth = _d[1];
  var _e = React.useState(new Date().getFullYear()),
    currentYear = _e[0],
    setCurrentYear = _e[1];
  var _f = React.useState(false),
    calendarOpen = _f[0],
    setCalendarOpen = _f[1];
  var _g = React.useState(false),
    secondModalOpen = _g[0],
    setSecondModalOpen = _g[1];
  var _h = React.useState(new Date().getMonth() + 1),
    selectedMonth = _h[0],
    setSelectedMonth = _h[1];
  var _j = React.useState(new Date().getFullYear()),
    selectedYear = _j[0],
    setSelectedYear = _j[1];
  var _k = React.useState(today.getDate()),
    selectedDay = _k[0],
    setSelectedDay = _k[1];
  React.useEffect(
    function () {
      if (date && typeof date === "string") {
        var _a = date.split("/").map(Number),
          day = _a[0],
          month = _a[1],
          year = _a[2];
        if (day && month && year) {
          var newSelectedDate = new Date(year, month - 1, day);
          setSelectedDate(newSelectedDate);
          setInputDate(
            newSelectedDate.toLocaleDateString("pt-BR", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            }),
          );
        }
      }
    },
    [date],
  );
  React.useEffect(
    function () {
      var handleDateChange = function () {
        if (selectedDate && !isNaN(selectedDate.getTime())) {
          onDateChange(selectedDate);
        }
      };
      if (
        selectedDate &&
        !isNaN(selectedDate.getTime()) &&
        selectedDate.getTime() !== new Date(date).getTime()
      ) {
        handleDateChange();
      }
    },
    [selectedDate, onDateChange, date],
  );
  var handleInputChange = function (value) {
    setInputDate(value);
    var _a = value.split("/").map(Number),
      day = _a[0],
      month = _a[1],
      year = _a[2];
    if (day !== undefined && month !== undefined && year !== undefined) {
      var isValidDate =
        day > 0 &&
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
      } else {
        console.log("Data inválida!");
      }
    } else {
      console.log("Data inválida!");
    }
  };
  var handleMonthSelect = function (selectedMonth) {
    setSelectedMonth(selectedMonth);
    setCurrentMonth(selectedMonth - 1);
    updateSelectedDateFormat(selectedMonth, selectedYear, selectedDay);
    var selectedMonthElement = document.querySelector(
      '.month-item[data-month="'.concat(selectedMonth, '"]'),
    );
    selectedMonthElement === null || selectedMonthElement === void 0
      ? void 0
      : selectedMonthElement.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
    centralizarOpcaoSelecionada(monthsOverflowContainerRef);
  };
  var handleYearSelect = function (selectedYear) {
    setSelectedYear(selectedYear);
    setCurrentYear(selectedYear);
    updateSelectedDateFormat(selectedMonth, selectedYear, selectedDay);
    var selectedYearElement = document.querySelector(
      '.year-item[data-year="'.concat(selectedYear, '"]'),
    );
    selectedYearElement === null || selectedYearElement === void 0
      ? void 0
      : selectedYearElement.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
    centralizarOpcaoSelecionada(yearsOverflowContainerRef);
  };
  var updateSelectedDateFormat = function (month, year, day) {
    var formattedDate = new Date(year, month - 1, day).toLocaleDateString(
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
  var handleDoneClick = function () {
    if (selectedDate) {
      var formattedDay = selectedDate.getDate().toString().padStart(2, "0");
      var formattedMonth = (selectedDate.getMonth() + 1)
        .toString()
        .padStart(2, "0");
      var formattedYear = selectedDate.getFullYear().toString();
      var formattedDate = ""
        .concat(formattedDay, "/")
        .concat(formattedMonth, "/")
        .concat(formattedYear);
      setInputDate(formattedDate);
      onDateChange(selectedDate);
      setCalendarOpen(false);
      setSecondModalOpen(false);
    } else {
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
    for (
      var i = prevMonthLastDay - prevMonthDays + 1;
      i <= prevMonthLastDay;
      i++
    ) {
      var date_1 = new Date(currentYear, currentMonth - 1, i);
      days.push(
        React.createElement(DataPickerDay, {
          key: "previous-month-".concat(i),
          variant: "disable",
          day: date_1.getDate(),
        }),
      );
    }
    var _loop_1 = function (i) {
      var date_2 = new Date(currentYear, currentMonth, i);
      var variant =
        selectedDate &&
        date_2.getDate() === selectedDate.getDate() &&
        date_2.getMonth() === selectedDate.getMonth() &&
        date_2.getFullYear() === selectedDate.getFullYear()
          ? "active"
          : i === today.getDate() &&
              currentMonth === today.getMonth() &&
              currentYear === today.getFullYear()
            ? "current-day"
            : "default";
      days.push(
        React.createElement(DataPickerDay, {
          key: "current-month-".concat(i),
          variant: variant,
          day: i,
          onClick: function () {
            return handleDateClick(date_2);
          },
        }),
      );
    };
    // Add days from the current month
    for (var i = 1; i <= totalDays; i++) {
      _loop_1(i);
    }
    // Add days from the next month
    for (var i = 1; i <= nextMonthDays; i++) {
      var date_3 = new Date(currentYear, currentMonth + 1, i);
      days.push(
        React.createElement(DataPickerDay, {
          key: "next-month-".concat(i),
          variant: "disable",
          day: date_3.getDate(),
        }),
      );
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
        label: "".concat(
          new Intl.DateTimeFormat("pt-BR", { month: "long" }).format(
            new Date(2000, month - 1),
          ),
        ),
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
    if (dateString.split(" - ").length < 2) {
      console.error("Invalid date format");
      return;
    }
    var dateParts = dateString.split("/");
    if (dateParts.length !== 3) {
      console.error("Invalid date format");
      return;
    }
    var _a = dateParts.map(Number),
      day = _a[0],
      month = _a[1],
      year = _a[2];
    if (
      day === undefined ||
      month === undefined ||
      year === undefined ||
      day <= 0 ||
      month <= 0 ||
      year <= 0 ||
      month > 12 ||
      day > new Date(year, month, 0).getDate()
    ) {
      console.error("Invalid date");
      return;
    }
    var selectedDate = new Date(year, month - 1, day);
    setSelectedDate(selectedDate);
    setCurrentMonth(selectedDate.getMonth());
    setCurrentYear(selectedDate.getFullYear());
  };
  var handleInputEnter = function () {
    var _a = inputDate.split("/").map(Number),
      day = _a[0],
      month = _a[1],
      year = _a[2];
    if (day !== undefined && month !== undefined && year !== undefined) {
      var isValidDate =
        day > 0 &&
        month > 0 &&
        year > 0 &&
        month <= 12 &&
        day <= new Date(year, month, 0).getDate();
      if (isValidDate) {
        var selectedDate_2 = new Date(year, month - 1, day);
        if (selectedDate_2.getTime() !== selectedDate_2.getTime()) {
          setSelectedDate(selectedDate_2);
          setCurrentMonth(selectedDate_2.getMonth());
          setCurrentYear(selectedDate_2.getFullYear());
          setSelectedDay(selectedDate_2.getDate());
          onDateChange(selectedDate_2);
        }
      } else {
        console.log("Data inválida!");
      }
    } else {
      console.log("Data inválida!");
    }
  };
  var handleResetAll = function () {
    var currentDate = new Date();
    setSelectedMonth(currentDate.getMonth() + 1);
    setSelectedYear(currentDate.getFullYear());
    updateSelectedDateFormat(
      currentDate.getMonth() + 1,
      currentDate.getFullYear(),
      selectedDay,
    );
    handleReset();
  };
  var handleReset = function () {
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
  var openSecondModal = function () {
    setSecondModalOpen(true);
    setCalendarOpen(false);
  };
  React.useEffect(
    function () {
      if (secondModalOpen) {
        centralizarOpcaoSelecionada(monthsOverflowContainerRef);
      }
    },
    [secondModalOpen, selectedMonth],
  );
  React.useEffect(
    function () {
      if (secondModalOpen) {
        centralizarOpcaoSelecionada(yearsOverflowContainerRef);
      }
    },
    [secondModalOpen, selectedYear],
  );
  var handleInputClick = function () {
    setCalendarOpen(true);
    setSecondModalOpen(false);
  };
  var centralizarOpcaoSelecionada = function (ref) {
    if (ref.current) {
      var overflowContainer = ref.current;
      var selectedElement = overflowContainer.querySelector(".selected");
      if (selectedElement) {
        var containerHeight = overflowContainer.clientHeight;
        var elementHeight = selectedElement.clientHeight;
        var scrollTop =
          selectedElement.offsetTop - (containerHeight - elementHeight);
        overflowContainer.scrollTop = scrollTop;
      }
    }
  };
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(DataPickerInputDate, {
      label: label,
      placeholder: placeholder,
      value: inputDate,
      onChange: handleInputChange,
      onEnter: handleInputEnter,
      onClick: handleInputClick,
      disabled: disabled,
    }),
    secondModalOpen &&
      React.createElement(
        "div",
        { className: "data-picker-root" },
        React.createElement(
          "div",
          { className: "data-picker" },
          React.createElement(
            "div",
            { className: "data-picker-month" },
            React.createElement(
              "div",
              { className: "data-picker-header", onClick: handleInputClick },
              ""
                .concat(
                  new Intl.DateTimeFormat("pt-BR", { month: "long" }).format(
                    new Date(currentYear, currentMonth),
                  ),
                  " ",
                )
                .concat(currentYear),
              React.createElement(ButtonIcon, {
                size: "sm",
                buttonType: "plain",
                typeIcon: "keyboard_arrow_down",
                variant: "primary",
              }),
            ),
          ),
          React.createElement(
            "div",
            { className: "data-picker-months-years" },
            React.createElement(
              "div",
              {
                className: "data-picker-overflow-container",
                ref: monthsOverflowContainerRef,
              },
              React.createElement(
                "div",
                { className: "data-picker-overflow-content" },
                generateMonthsAndYears().months.map(function (item, index) {
                  return React.createElement(
                    "div",
                    {
                      key: index,
                      className: "month-item ".concat(
                        selectedMonth === item.month ? "selected" : "",
                      ),
                      onClick: function () {
                        return handleMonthSelect(item.month);
                      },
                    },
                    item.label,
                  );
                }),
              ),
            ),
            React.createElement(
              "div",
              {
                className: "data-picker-overflow-container",
                ref: yearsOverflowContainerRef,
              },
              React.createElement(
                "div",
                { className: "data-picker-overflow-content" },
                generateMonthsAndYears().years.map(function (item, index) {
                  return React.createElement(
                    "div",
                    {
                      key: index,
                      className: "year-item ".concat(
                        selectedYear === item.year ? "selected" : "",
                      ),
                      onClick: function () {
                        return handleYearSelect(item.year);
                      },
                    },
                    item.label,
                  );
                }),
              ),
            ),
          ),
          React.createElement(
            "div",
            { className: "data-picker-buttons-actions" },
            React.createElement(Button, {
              size: "sm",
              variant: "secondary",
              label: "Reset",
              onClick: handleResetAll,
            }),
            React.createElement(Button, {
              size: "sm",
              variant: "primary",
              label: "Done",
              onClick: function () {
                if (selectedDate) {
                  handleDoneClick();
                }
              },
            }),
          ),
        ),
      ),
    calendarOpen &&
      React.createElement(
        "div",
        { className: "data-picker-root" },
        React.createElement(
          "div",
          { className: "data-picker" },
          React.createElement(
            "div",
            { className: "data-picker-month" },
            React.createElement(
              "div",
              { className: "data-picker-header", onClick: openSecondModal },
              ""
                .concat(
                  new Intl.DateTimeFormat("pt-BR", { month: "long" }).format(
                    new Date(currentYear, currentMonth),
                  ),
                  " ",
                )
                .concat(currentYear),
              React.createElement(ButtonIcon, {
                size: "sm",
                buttonType: "plain",
                typeIcon: "keyboard_arrow_right",
                variant: "secondary",
              }),
            ),
            React.createElement(
              "div",
              { style: { display: "flex", flexDirection: "row" } },
              React.createElement(ButtonIcon, {
                variant: "secondary",
                size: "sm",
                onClick: handlePrevMonth,
                typeIcon: "keyboard_arrow_left",
                buttonType: "plain",
              }),
              React.createElement(ButtonIcon, {
                variant: "secondary",
                buttonType: "plain",
                size: "sm",
                onClick: handleNextMonth,
                typeIcon: "keyboard_arrow_right",
              }),
            ),
          ),
          React.createElement(
            "div",
            null,
            React.createElement(
              "div",
              { className: "data-picker-week-days" },
              weekDays.map(function (day, index) {
                return React.createElement("p", { key: index }, day);
              }),
            ),
            React.createElement(
              "div",
              { className: "data-picker-days" },
              generateDaysOfMonth(),
            ),
          ),
          React.createElement(
            "div",
            { className: "data-picker-buttons-actions" },
            React.createElement(Button, {
              size: "sm",
              variant: "secondary",
              label: "Reset",
              onClick: handleResetAll,
            }),
            React.createElement(Button, {
              size: "sm",
              variant: "primary",
              label: "Done",
              onClick: function () {
                if (selectedDate) {
                  handleDoneClick();
                }
              },
            }),
          ),
        ),
      ),
  );
};
var DataPicker = function (_a) {
  var label = _a.label,
    placeholder = _a.placeholder,
    disabled = _a.disabled,
    onDateChange = _a.onDateChange,
    date = _a.date;
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      "div",
      null,
      React.createElement(DataPickerCalendar, {
        date: date,
        onDateChange: onDateChange,
        placeholder: placeholder,
        label: label,
        disabled: disabled,
      }),
    ),
  );
};

var InputSearch = function (props) {
  var _a = React.useState(""),
    inputValue = _a[0],
    setInputValue = _a[1];
  var _b = React.useState(false);
  _b[0];
  var setIsActive = _b[1];
  var inputRef = React.useRef(null);
  var handleChange = function (event) {
    var value = event.target.value;
    setInputValue(value);
    if (props.onChange) {
      props.onChange(value);
    }
  };
  var handleInputClick = function () {
    setIsActive(true);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  var handleInputBlur = function () {
    setIsActive(false);
  };
  var handleClearClick = function () {
    setInputValue("");
    if (props.onChange) {
      props.onChange("");
    }
  };
  return React.createElement(
    "div",
    {
      className: "input-search-root ".concat(props.disabled ? "disabled" : ""),
      onClick: handleInputClick,
    },
    React.createElement(
      "div",
      { className: "input-search" },
      React.createElement(Icon, { size: "md", icon: "search" }),
      React.createElement("input", {
        disabled: props.disabled,
        size: 1000,
        type: "text",
        placeholder: props.placeholder,
        value: inputValue,
        onChange: handleChange,
        onBlur: handleInputBlur,
        ref: inputRef,
      }),
      inputValue &&
        React.createElement(
          "button",
          {
            className: "input-search-button-close ".concat(
              inputValue && "visible",
            ),
            onClick: handleClearClick,
          },
          React.createElement(ButtonIcon, {
            variant: "primary",
            typeIcon: "close",
            buttonType: "plain",
            size: "sm",
          }),
        ),
    ),
  );
};

var PaginationItem = function (_a) {
  var arrow = _a.arrow,
    disabled = _a.disabled,
    click = _a.click;
  return React.createElement(
    React.Fragment,
    null,
    arrow === "left"
      ? React.createElement(
          "button",
          { className: "arrow_back", disabled: disabled, onClick: click },
          React.createElement(Icon, { icon: "arrow_back", size: "sm" }),
        )
      : arrow === "right"
        ? React.createElement(
            "button",
            { className: "arrow_forward", disabled: disabled, onClick: click },
            React.createElement(Icon, { icon: "arrow_forward", size: "sm" }),
          )
        : "error",
  );
};
var Pagination = function (_a) {
  var disabledRight = _a.disabledRight,
    disabledLeft = _a.disabledLeft,
    variant = _a.variant,
    onClickRight = _a.onClickRight,
    onClickLeft = _a.onClickLeft,
    label = _a.label;
  return React.createElement(
    "div",
    { className: "Pagination" },
    variant === "noLabel"
      ? React.createElement(
          "div",
          { className: "noLabel" },
          React.createElement(PaginationItem, {
            arrow: "left",
            disabled: disabledLeft,
            click: onClickLeft,
          }),
          React.createElement(PaginationItem, {
            arrow: "right",
            disabled: disabledRight,
            click: onClickRight,
          }),
        )
      : variant === "leftLabel"
        ? React.createElement(
            "div",
            { className: "leftLabel" },
            React.createElement("p", null, label),
            React.createElement(
              "div",
              { style: { display: "flex" } },
              React.createElement(PaginationItem, {
                arrow: "left",
                disabled: disabledLeft,
                click: onClickLeft,
              }),
              React.createElement(PaginationItem, {
                arrow: "right",
                disabled: disabledRight,
                click: onClickRight,
              }),
            ),
          )
        : variant === "centerLabel"
          ? React.createElement(
              "div",
              { className: "centerLabel" },
              React.createElement(PaginationItem, {
                arrow: "left",
                disabled: disabledLeft,
                click: onClickLeft,
              }),
              React.createElement("p", null, label),
              React.createElement(PaginationItem, {
                arrow: "right",
                disabled: disabledRight,
                click: onClickRight,
              }),
            )
          : "error",
  );
};

var InputCheckbox = function (_a) {
  var modelValue = _a.modelValue,
    value = _a.value,
    label = _a.label,
    id = _a.id,
    name = _a.name,
    required = _a.required,
    indeterminate = _a.indeterminate,
    noEvents = _a.noEvents,
    disabled = _a.disabled,
    onUpdate = _a.onUpdate;
  var _b = React.useState(
      modelValue !== null && modelValue !== void 0 ? modelValue : false,
    ),
    checked = _b[0],
    setChecked = _b[1];
  var uid = React.useMemo(
    function () {
      return id !== null && id !== void 0
        ? id
        : "ui-form-checkbox-".concat(Math.random().toString(36).substr(2, 9));
    },
    [id],
  );
  React.useEffect(
    function () {
      if (modelValue !== checked) {
        setChecked(modelValue);
      }
    },
    [modelValue],
  );
  var classList = React.useMemo(
    function () {
      return [disabled ? "-disabled" : "", noEvents ? "-no-events" : ""].join(
        " ",
      );
    },
    [disabled, noEvents],
  );
  var handleChange = function () {
    var newValue = !checked;
    setChecked(newValue);
    onUpdate === null || onUpdate === void 0 ? void 0 : onUpdate(newValue);
  };
  var handleKeyDown = function (event) {
    if (event.key === "Enter") {
      if (disabled === false) {
        handleChange();
      }
    }
  };
  return React.createElement(
    "label",
    {
      tabIndex: 0,
      className: "ui-form-checkbox ".concat(classList),
      htmlFor: uid,
      onKeyDown: handleKeyDown,
    },
    React.createElement("input", {
      type: "checkbox",
      id: uid,
      value: value,
      required: required,
      ref: function (el) {
        if (el)
          el.indeterminate =
            indeterminate !== null && indeterminate !== void 0
              ? indeterminate
              : false;
      },
      name: name,
      disabled: disabled,
      checked: checked,
      onChange: handleChange,
      tabIndex: -1,
    }),
    React.createElement("span", { className: "ui-form-checkbox-checkmark" }),
    label &&
      React.createElement("div", { className: "ui-form-checkbox-text" }, label),
  );
};

// Declaração
var EmptyState = function (_a) {
  var title = _a.title,
    description = _a.description,
    icon = _a.icon,
    buttonContentPrimary = _a.buttonContentPrimary,
    buttonContentSecondary = _a.buttonContentSecondary,
    onClickActionPrimary = _a.onClickActionPrimary,
    onClickActionSecondary = _a.onClickActionSecondary;
  return React.createElement(
    "div",
    { className: "empty-state-root" },
    React.createElement(Icon, { icon: icon, size: "lg" }),
    React.createElement(
      "div",
      { className: "empty-state-content" },
      React.createElement("h3", null, title),
      React.createElement("p", null, description),
    ),
    React.createElement(
      "div",
      { className: "empty-state-footer" },
      buttonContentPrimary &&
        React.createElement(Button, {
          size: "md",
          variant: "primary",
          label: buttonContentPrimary,
          onClick: onClickActionPrimary,
        }),
      buttonContentSecondary &&
        React.createElement(Button, {
          size: "md",
          variant: "secondary",
          label: buttonContentSecondary,
          onClick: onClickActionSecondary,
        }),
    ),
  );
};

var Modal = function (_a) {
  var title = _a.title,
    description = _a.description,
    content = _a.content,
    hideModal = _a.hideModal,
    isOpen = _a.isOpen,
    footer = _a.footer,
    dismissible = _a.dismissible;
  var modalClass = isOpen ? "modal-root visible" : "modal-root";
  var ghostClass = isOpen ? "modal-ghost visible" : "modal-ghost";
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      "div",
      { className: modalClass },
      React.createElement(
        "div",
        { className: "modal-header" },
        React.createElement(
          "div",
          { className: "modal-title" },
          React.createElement("div", null, title),
          dismissible &&
            React.createElement(ButtonIcon, {
              variant: "primary",
              size: "md",
              typeIcon: "close",
              buttonType: "plain",
              onClick: hideModal,
            }),
        ),
        React.createElement(
          "div",
          { className: "modal-description" },
          description,
        ),
      ),
      content,
      footer,
    ),
    React.createElement("div", {
      className: ghostClass,
      onClick: dismissible ? hideModal : undefined,
    }),
  );
};
var ContentModal = function (_a) {
  var children = _a.children;
  return React.createElement("div", { className: "modal-content" }, children);
};
var FooterModal = function (_a) {
  var children = _a.children;
  return React.createElement("div", { className: "modal-footer" }, children);
};

var DataTable = function (_a) {
  var columns = _a.columns,
    originalData = _a.data,
    expandable = _a.expandable,
    selectable = _a.selectable,
    expandedData = _a.expandedData,
    itemPerPage = _a.itemPerPage,
    inputPlaceholder = _a.inputPlaceholder,
    selectableLabelSecondButton = _a.selectableLabelSecondButton,
    labelSecondButton = _a.labelSecondButton,
    typeIconSecondButton = _a.typeIconSecondButton,
    titleNoDataMessage = _a.titleNoDataMessage,
    labelButtonNoDataFilteredMessage = _a.labelButtonNoDataFilteredMessage,
    descriptionNoDataMessage = _a.descriptionNoDataMessage,
    selectableIconSecondButton = _a.selectableIconSecondButton,
    filters = _a.filters,
    titleNoDataFilteredMessage = _a.titleNoDataFilteredMessage,
    descriptionNoDataFilteredMessage = _a.descriptionNoDataFilteredMessage,
    pagesText = _a.pagesText;
  var _b = React.useState(1),
    currentPage = _b[0],
    setCurrentPage = _b[1];
  var itemsPerPage = itemPerPage;
  var _c = React.useState(originalData),
    filteredData = _c[0],
    setFilteredData = _c[1];
  var _d = React.useState(0),
    totalPages = _d[0],
    setTotalPages = _d[1];
  React.useEffect(
    function () {
      setFilteredData(originalData);
      var totalPages = Math.ceil(originalData.length / itemsPerPage);
      setTotalPages(totalPages);
    },
    [originalData, itemsPerPage],
  );
  var label =
    filteredData.length > 0
      ? "".concat(pagesText, " ").concat(currentPage, " - ").concat(totalPages)
      : "".concat(pagesText, " 0 - 0");
  var handleNextPage = function () {
    setCurrentPage(function (prevPage) {
      var nextPage = prevPage + 1;
      return nextPage > totalPages ? prevPage : nextPage;
    });
  };
  var handlePrevPage = function () {
    setCurrentPage(function (prevPage) {
      var newPage = prevPage - 1;
      return newPage < 1 ? prevPage : newPage;
    });
  };
  React.useEffect(
    function () {
      var totalPages = Math.ceil(filteredData.length / itemsPerPage);
      setTotalPages(totalPages);
    },
    [originalData, itemsPerPage, filteredData],
  );
  var _e = React.useState(originalData),
    originalDataState = _e[0],
    setOriginalDataState = _e[1];
  var _f = React.useState(false),
    selectAll = _f[0],
    setSelectAll = _f[1];
  var _g = React.useState([]),
    selectedRows = _g[0],
    setSelectedRows = _g[1];
  var _h = React.useState([]),
    expandedRows = _h[0],
    setExpandedRows = _h[1];
  var _j = React.useState(false),
    isAnyItemSelected = _j[0],
    setIsAnyItemSelected = _j[1];
  var _k = React.useState(""),
    searchTerm = _k[0],
    setSearchTerm = _k[1];
  var _l = React.useState(false),
    contentOverflowed = _l[0],
    setContentOverflowed = _l[1];
  var contentRef = React.useRef(null);
  var _m = React.useState(false),
    isOpenAside = _m[0],
    setIsOpenAside = _m[1];
  var _o = React.useState(
      columns.reduce(function (acc, column) {
        var _a;
        return __assign(__assign({}, acc), ((_a = {}), (_a[column] = []), _a));
      }, {}),
    ),
    filterOptions = _o[0],
    setFilterOptions = _o[1];
  var indexOfLastItem = currentPage * itemsPerPage;
  var indexOfFirstItem = indexOfLastItem - itemsPerPage;
  var _p = React.useState(false),
    allItemsExpanded = _p[0],
    setAllItemsExpanded = _p[1];
  React.useEffect(
    function () {
      setIsAnyItemSelected(selectedRows.length > 0);
      setSelectAll(selectedRows.length === filteredData.length);
    },
    [selectedRows, filteredData],
  );
  React.useEffect(function () {
    var checkOverflow = function () {
      var contentElement = contentRef.current;
      if (contentElement) {
        setContentOverflowed(
          contentElement.scrollWidth > contentElement.clientWidth,
        );
      }
    };
    var resizeObserver = new ResizeObserver(function () {
      checkOverflow();
    });
    var contentElement = contentRef.current;
    if (contentElement) {
      resizeObserver.observe(contentElement);
      checkOverflow();
    }
    return function () {
      if (contentElement) {
        resizeObserver.unobserve(contentElement);
      }
    };
  }, []);
  var toggleSelectAll = function () {
    var allIds = filteredData.map(function (item) {
      return item.id;
    });
    if (isAllSelected()) {
      setSelectAll(false);
      setSelectedRows([]);
    } else {
      setSelectAll(true);
      setSelectedRows(allIds);
    }
  };
  var isAllSelected = function () {
    var allIds = filteredData.map(function (item) {
      return item.id;
    });
    return selectedRows.length === allIds.length;
  };
  var toggleSelectRow = function (rowId) {
    if (selectedRows.includes(rowId)) {
      setSelectedRows(
        selectedRows.filter(function (id) {
          return id !== rowId;
        }),
      );
      setSelectAll(false);
    } else {
      setSelectedRows(
        __spreadArray(__spreadArray([], selectedRows, true), [rowId], false),
      );
      if (isAllSelected()) {
        setSelectAll(true);
      }
    }
  };
  var isIndeterminate =
    selectedRows.length > 0 &&
    selectedRows.length < filteredData.length &&
    !selectAll;
  function calculateGridTemplate(selectable, expandable) {
    if (selectable === void 0) {
      selectable = false;
    }
    if (expandable === void 0) {
      expandable = false;
    }
    if (selectable && expandable) {
      return {
        gridTemplateColumns: "56px 56px repeat(auto-fit, minmax(120px, 1fr))",
      };
    } else if (selectable || expandable) {
      return {
        gridTemplateColumns: "56px repeat(auto-fit, minmax(120px, 1fr))",
      };
    } else {
      return {};
    }
  }
  function calculateLeft(selectable, expandable) {
    if (selectable === void 0) {
      selectable = false;
    }
    if (expandable === void 0) {
      expandable = false;
    }
    if (selectable && expandable) {
      return {
        left: "112px",
      };
    } else if (selectable || expandable) {
      return {
        left: "56px",
      };
    } else {
      return {
        left: "0px",
      };
    }
  }
  function calculateLeftToCheckBox(expandable) {
    if (expandable === void 0) {
      expandable = false;
    }
    if (expandable) {
      return {
        left: "56px",
      };
    } else {
      return {
        left: "0px",
      };
    }
  }
  React.useEffect(
    function () {
      setIsAnyItemSelected(selectedRows.length > 0);
    },
    [selectedRows],
  );
  var toggleAside = function () {
    setIsOpenAside(!isOpenAside);
  };
  var _q = React.useState(false),
    isOpen = _q[0],
    setIsOpen = _q[1];
  var removeRow = function () {
    var updatedOriginalData = originalDataState.filter(function (item) {
      return !selectedRows.includes(item.id);
    });
    var updatedFilteredData = filteredData.filter(function (item) {
      return !selectedRows.includes(item.id);
    });
    setFilteredData(updatedFilteredData);
    setSelectedRows([]);
    setIsOpen(false);
    // Atualiza os dados originais sem as linhas removidas
    setOriginalDataState(updatedOriginalData);
  };
  var toggleModal = function () {
    setIsOpen(function (prevIsOpen) {
      return !prevIsOpen;
    });
  };
  var exportSelectedRowsAsCSV = function () {
    // Filter selected rows from the original data
    var selectedData = originalData.filter(function (row) {
      return selectedRows.includes(row.id);
    });
    // Extract column names
    var columnNames = columns;
    // Create the CSV content
    var csvContent = selectedData
      .map(function (row) {
        return columnNames
          .map(function (column) {
            return row[column];
          })
          .join(",");
      })
      .join("\n");
    // Add column names as the header
    var csvData = columnNames.join(",") + "\n" + csvContent;
    // Create a blob with the CSV data
    var csvBlob = new Blob([csvData], {
      type: "text/csv",
    });
    // Create a temporary URL for downloading
    var csvURL = window.URL.createObjectURL(csvBlob);
    // Create an anchor element for initiating the download
    var downloadLink = document.createElement("a");
    downloadLink.href = csvURL;
    downloadLink.download = "selected_data.csv";
    // Simulate a click to trigger the download
    document.body.appendChild(downloadLink);
    downloadLink.click();
    // Clean up by removing the temporary URL and anchor element
    window.URL.revokeObjectURL(csvURL);
    document.body.removeChild(downloadLink);
  };
  var renderHeader = function () {
    if (isAnyItemSelected) {
      return React.createElement(
        React.Fragment,
        null,
        React.createElement(Modal, {
          footer: React.createElement(
            FooterModal,
            null,
            React.createElement(
              "div",
              { style: { width: "min-content" } },
              React.createElement(ButtonGroup, {
                contentFirstButton: "Delete",
                contentSecondButton: "Cancel",
                direction: "row",
                variantFirstButton: "warning",
                variantSecondButton: "secondary",
                onClickFirstButton: removeRow,
                onClickSecondButton: toggleModal,
              }),
            ),
          ),
          description: "Are you sure that you want delete this row?",
          dismissible: true,
          title: "Delete",
          isOpen: isOpen,
          hideModal: toggleModal,
        }),
        React.createElement(
          "div",
          { className: "data-table-header-selected-items" },
          React.createElement(
            "div",
            { className: "data-table-header-selected-items-message" },
            React.createElement(
              "p",
              null,
              ""
                .concat(selectedRows.length, " item")
                .concat(selectedRows.length >= 2 ? "s" : "", " selected"),
            ),
          ),
          React.createElement(
            "div",
            { className: "data-table-header-selected-items-buttons" },
            React.createElement(Button, {
              size: "md",
              variant: "secondary",
              label: "Export",
              onClick: exportSelectedRowsAsCSV,
              typeIcon: "download",
            }),
            React.createElement(Button, {
              size: "md",
              variant: "secondary",
              label: selectableLabelSecondButton,
              onClick: toggleModal,
              typeIcon: selectableIconSecondButton,
            }),
          ),
        ),
      );
    }
    return React.createElement(
      "div",
      { className: "data-table-header" },
      React.createElement(InputSearch, {
        placeholder: inputPlaceholder,
        onChange: handleSearchChange,
      }),
      filters &&
        React.createElement(
          "div",
          { className: "data-table-header-actions" },
          React.createElement(
            "div",
            { style: { width: "100%" } },
            React.createElement(Button, {
              variant: "secondary",
              typeIcon: typeIconSecondButton,
              size: "md",
              label: labelSecondButton,
              onClick: toggleAside,
            }),
          ),
        ),
    );
  };
  var handleExpandRow = function (rowId) {
    if (expandedRows.includes(rowId)) {
      setExpandedRows(
        expandedRows.filter(function (id) {
          return id !== rowId;
        }),
      );
      setAllItemsExpanded(false);
    } else {
      setExpandedRows(
        __spreadArray(__spreadArray([], expandedRows, true), [rowId], false),
      );
      if (expandedRows.length + 1 === filteredData.length) {
        setAllItemsExpanded(true);
      }
    }
  };
  var toggleExpandAllRows = function () {
    if (allItemsExpanded) {
      setExpandedRows([]);
      setAllItemsExpanded(false);
    } else {
      var allIds = filteredData.map(function (item) {
        return item.id;
      });
      setExpandedRows(allIds);
      setAllItemsExpanded(true);
    }
  };
  var handleSearchChange = function (value) {
    setSearchTerm(value);
    var searchedData = __spreadArray([], originalData, true);
    if (value.trim() !== "") {
      searchedData = searchedData.filter(function (item) {
        return Object.values(item).some(function (val) {
          return typeof val === "string" ? val.includes(value) : false;
        });
      });
    }
    Object.entries(filterOptions).forEach(function (_a) {
      var columnName = _a[0],
        selectedValues = _a[1];
      if (selectedValues.length > 0) {
        searchedData = searchedData.filter(function (item) {
          return selectedValues.includes(String(item[columnName]));
        });
      }
    });
    setFilteredData(searchedData);
  };
  var DEFAULT_SORT_STATE = "default";
  var initialSortConfig =
    columns.length > 0
      ? columns.reduce(function (acc, column) {
          var _a;
          return __assign(
            __assign({}, acc),
            ((_a = {}), (_a[column] = DEFAULT_SORT_STATE), _a),
          );
        }, {})
      : {};
  var _r = React.useState(initialSortConfig),
    sortConfig = _r[0],
    setSortConfig = _r[1];
  var handleSort = function (column) {
    var _a;
    var currentSortState = sortConfig[column];
    var nextSortState;
    if (currentSortState === "asc") {
      nextSortState = "desc";
    } else if (currentSortState === "desc") {
      nextSortState = "default";
    } else {
      nextSortState = "asc";
    }
    var updatedSortConfig = __assign(
      __assign({}, initialSortConfig),
      ((_a = {}), (_a[column] = nextSortState), _a),
    );
    setSortConfig(updatedSortConfig);
    var sortedData = __spreadArray([], filteredData, true);
    if (nextSortState !== "default") {
      sortedData = sortedData.sort(function (a, b) {
        if (nextSortState === "asc") {
          return a[column] > b[column] ? 1 : -1;
        } else if (nextSortState === "desc") {
          return a[column] < b[column] ? 1 : -1;
        }
        return 0;
      });
    } else {
      if (
        Object.values(filterOptions).some(function (options) {
          return options.length > 0;
        })
      ) {
        var filteredOriginalData_1 = __spreadArray([], originalDataState, true);
        Object.entries(filterOptions).forEach(function (_a) {
          var filterColumn = _a[0],
            selectedValues = _a[1];
          if (selectedValues.length > 0) {
            filteredOriginalData_1 = filteredOriginalData_1.filter(
              function (item) {
                return selectedValues.includes(String(item[filterColumn]));
              },
            );
          }
        });
        sortedData = filteredOriginalData_1.sort(function (a, b) {
          if (a[column] > b[column]) return 1;
          if (a[column] < b[column]) return -1;
          return 0;
        });
      } else {
        sortedData = __spreadArray([], originalDataState, true);
      }
    }
    setFilteredData(sortedData);
  };
  React.useEffect(
    function () {
      var defaultSortConfig = columns.reduce(function (acc, column) {
        var _a;
        return __assign(
          __assign({}, acc),
          ((_a = {}), (_a[column] = DEFAULT_SORT_STATE), _a),
        );
      }, {});
      setSortConfig(defaultSortConfig);
    },
    [filterOptions],
  );
  var handleClearFilters = function () {
    var updatedFilteredData = __spreadArray([], originalData, true);
    var updatedFilterOptions = columns.reduce(function (acc, column) {
      var _a;
      return __assign(__assign({}, acc), ((_a = {}), (_a[column] = []), _a));
    }, {});
    setFilteredData(updatedFilteredData);
    setFilterOptions(updatedFilterOptions);
    setSearchTerm("");
  };
  var renderNoDataMessage = function () {
    return React.createElement(
      "div",
      { className: "render-no-data-message" },
      React.createElement(EmptyState, {
        icon: "search_off",
        title: titleNoDataMessage,
        description: descriptionNoDataMessage,
      }),
    );
  };
  var renderNoDataFilteredMessage = function () {
    return React.createElement(
      "div",
      { className: "render-no-data-message" },
      React.createElement(EmptyState, {
        icon: "search_off",
        title: titleNoDataFilteredMessage,
        description: descriptionNoDataFilteredMessage,
        buttonContentPrimary: labelButtonNoDataFilteredMessage,
        onClickActionPrimary: handleClearFilters,
      }),
    );
  };
  var hasSelectedFilters = Object.values(filterOptions).some(
    function (options) {
      return options.length > 0;
    },
  );
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      "div",
      { className: "data-table-root" },
      renderHeader(),
      React.createElement(
        "div",
        {
          ref: contentRef,
          className: "data-table-content ".concat(
            contentOverflowed ? "overflowed" : "",
          ),
        },
        filteredData.length > 0
          ? React.createElement(
              React.Fragment,
              null,
              React.createElement(
                "div",
                {
                  className: "data-table-content-header",
                  style: calculateGridTemplate(selectable, expandable),
                },
                expandable &&
                  React.createElement(
                    "div",
                    {
                      className: "data-table-content-header-expandable ".concat(
                        allItemsExpanded ? "up" : "down",
                      ),
                    },
                    React.createElement(ButtonIcon, {
                      size: "md",
                      buttonType: "plain",
                      typeIcon: "keyboard_arrow_down",
                      variant: "primary",
                      onClick: toggleExpandAllRows,
                    }),
                  ),
                selectable &&
                  React.createElement(
                    "div",
                    {
                      className: "data-table-content-header-checkbox",
                      style: calculateLeftToCheckBox(expandable),
                    },
                    React.createElement(InputCheckbox, {
                      modelValue: selectAll,
                      onUpdate: toggleSelectAll,
                      indeterminate: isIndeterminate,
                    }),
                  ),
                columns.map(function (column, columnIndex) {
                  return React.createElement(
                    "div",
                    {
                      className: "th ".concat(
                        columnIndex === 0 ? "sticky-first-column" : "",
                      ),
                      style: calculateLeft(selectable, expandable),
                      key: columnIndex,
                      onClick: function () {
                        return handleSort(column);
                      },
                    },
                    column,
                    React.createElement(
                      "div",
                      { className: "icon" },
                      sortConfig[column] === "asc"
                        ? React.createElement(Icon, {
                            icon: "arrow_upward",
                            size: "sm",
                          })
                        : sortConfig[column] === "desc"
                          ? React.createElement(Icon, {
                              icon: "arrow_downward",
                              size: "sm",
                            })
                          : React.createElement(Icon, {
                              icon: "swap_vert",
                              size: "sm",
                            }),
                    ),
                  );
                }),
              ),
              filteredData
                .slice(indexOfFirstItem, indexOfLastItem)
                .map(function (row) {
                  return React.createElement(
                    "div",
                    { className: "data-table-wrapper" },
                    React.createElement(
                      "div",
                      {
                        className: "data-table-content-body",
                        style: calculateGridTemplate(selectable, expandable),
                        key: row.id,
                      },
                      expandable &&
                        React.createElement(
                          "div",
                          {
                            className:
                              "data-table-content-body-expandable ".concat(
                                expandedRows.includes(row.id) ? "up" : "down",
                              ),
                            key: row.id,
                          },
                          React.createElement(ButtonIcon, {
                            size: "md",
                            buttonType: "plain",
                            typeIcon: "keyboard_arrow_down",
                            variant: "primary",
                            onClick: function () {
                              return handleExpandRow(row.id);
                            },
                          }),
                        ),
                      selectable &&
                        React.createElement(
                          "div",
                          {
                            className: "data-table-content-body-checkbox",
                            style: calculateLeftToCheckBox(expandable),
                            key: row.id,
                          },
                          React.createElement(InputCheckbox, {
                            modelValue: selectedRows.includes(row.id),
                            onUpdate: function () {
                              return toggleSelectRow(row.id);
                            },
                          }),
                        ),
                      columns.map(function (_, columnIndex) {
                        return React.createElement(
                          "div",
                          {
                            key: columnIndex,
                            className: "fixed ".concat(
                              columnIndex === 0 ? "sticky-first-column" : "",
                            ),
                            style: calculateLeft(selectable, expandable),
                          },
                          React.createElement(
                            "div",
                            { key: row.id },
                            React.createElement(
                              "div",
                              { className: "td", key: row.id },
                              row[Number(columnIndex)],
                            ),
                          ),
                        );
                      }),
                    ),
                    expandedRows.includes(row.id) &&
                      expandedData &&
                      React.createElement(
                        "div",
                        { className: "data-table-content-expandable" },
                        React.createElement("div", {
                          className: "space-expanded-content",
                        }),
                        React.createElement(
                          "div",
                          { className: "expanded-content" },
                          expandedData
                            .filter(function (expandedItem) {
                              return expandedItem.id === row.id;
                            })
                            .map(function (expandedItem) {
                              return React.createElement(
                                "div",
                                { key: expandedItem.id },
                                Object.keys(expandedItem)
                                  .filter(function (key) {
                                    return key !== "id";
                                  })
                                  .map(function (key) {
                                    return React.createElement(
                                      "div",
                                      { key: key },
                                      expandedItem[key],
                                    );
                                  }),
                              );
                            }),
                        ),
                      ),
                  );
                }),
            )
          : hasSelectedFilters || searchTerm
            ? renderNoDataFilteredMessage()
            : renderNoDataMessage(),
      ),
      React.createElement(
        "div",
        { className: "data-table-footer" },
        React.createElement(Pagination, {
          label: label,
          variant: "leftLabel",
          onClickRight: handleNextPage,
          onClickLeft: handlePrevPage,
        }),
      ),
    ),
  );
};

var DescriptionList = function (_a) {
  var items = _a.items,
    direction = _a.direction;
  return React.createElement(
    React.Fragment,
    null,
    items.map(function (item, index) {
      return React.createElement(
        React.Fragment,
        { key: index },
        React.createElement(
          "div",
          {
            className: "description-list-root ".concat(direction),
            style:
              index < items.length - 1
                ? {
                    borderBottom:
                      "var(--s-border-width-hairline) solid var(--s-color-border-default)",
                  }
                : undefined,
          },
          React.createElement("div", { className: "title" }, item.title),
          React.createElement(
            "div",
            { className: "description" },
            item.description,
          ),
        ),
      );
    }),
  );
};

var Dropdown = function (_a) {
  var children = _a.children,
    dropdown = _a.dropdown;
  return React.createElement(
    React.Fragment,
    null,
    dropdown === true &&
      React.createElement(
        "div",
        { className: "dropdown-menu-root" },
        React.createElement("div", { className: "dropdown-menu" }, children),
      ),
  );
};
var DropdownTitle = function (_a) {
  var content = _a.content;
  return React.createElement(
    React.Fragment,
    null,
    React.createElement("div", { className: "dropdown-menu-title" }, content),
  );
};
var DropdownItem = function (_a) {
  var typeIcon = _a.typeIcon,
    content = _a.content,
    onClick = _a.onClick;
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      "button",
      { className: "dropdown-menu-item", onClick: onClick },
      typeIcon && React.createElement(Icon, { size: "sm", icon: typeIcon }),
      content,
    ),
  );
};

var FileUploader = function (_a) {
  var title = _a.title,
    description = _a.description,
    multiple = _a.multiple,
    disabled = _a.disabled,
    maxFileSize = _a.maxFileSize,
    buttonLabel = _a.buttonLabel,
    typeIconButton = _a.typeIconButton,
    onChange = _a.onChange,
    value = _a.value;
  var fileInputRef = React.useRef(null);
  var _b = React.useState([]),
    selectedFiles = _b[0],
    setSelectedFiles = _b[1];
  var _c = React.useState(false),
    isLoading = _c[0],
    setIsLoading = _c[1];
  var maxFileSizeBytes =
    maxFileSize !== undefined ? maxFileSize * 1024 * 1024 : undefined;
  React.useEffect(
    function () {
      // Atualiza os arquivos selecionados quando o valor de fora muda
      if (value && value.length > 0) {
        var updatedFiles_1 = [];
        Array.from(value).forEach(function (file) {
          var hasError =
            maxFileSizeBytes !== undefined && file.size > maxFileSizeBytes;
          var errorMessage = hasError
            ? 'O tamanho do arquivo "'
                .concat(file.name, '" excede o limite de ')
                .concat(maxFileSize, " MB.")
            : null;
          updatedFiles_1.push({
            file: file,
            hasError: hasError,
            errorMessage: errorMessage,
          });
          if (!hasError) {
            // Se não houver erro, processa o arquivo
            handleFile(file);
          }
        });
        setSelectedFiles(updatedFiles_1);
      } else {
        setSelectedFiles([]); // Limpa a lista de arquivos se o valor for nulo ou vazio
      }
    },
    [value, maxFileSizeBytes],
  );
  var handleFileChange = function (event) {
    return __awaiter(void 0, void 0, void 0, function () {
      var files, updatedFiles_2, updatedFileList_1;
      return __generator(this, function (_a) {
        files = event.target.files;
        if (files && files.length > 0) {
          updatedFiles_2 = [];
          Array.from(files).forEach(function (file) {
            var hasError =
              maxFileSizeBytes !== undefined && file.size > maxFileSizeBytes;
            var errorMessage = hasError
              ? 'O tamanho do arquivo "'
                  .concat(file.name, '" excede o limite de ')
                  .concat(maxFileSize, " MB.")
              : null;
            updatedFiles_2.push({
              file: file,
              hasError: hasError,
              errorMessage: errorMessage,
            });
            if (!hasError) {
              // Se não houver erro, processa o arquivo
              handleFile(file);
            }
          });
          // Limpar o valor do campo de entrada de arquivo
          event.target.value = "";
          if (multiple === false) {
            setSelectedFiles(updatedFiles_2);
          }
          if (multiple === true) {
            setSelectedFiles(function (prevFiles) {
              return __spreadArray(
                __spreadArray([], prevFiles, true),
                updatedFiles_2,
                true,
              );
            });
          }
          updatedFileList_1 = new DataTransfer();
          updatedFiles_2.forEach(function (fileObj) {
            updatedFileList_1.items.add(fileObj.file);
          });
          // Chama a função onChange com o novo FileList
          onChange(
            updatedFileList_1.files.length > 0 ? updatedFileList_1.files : null,
          );
        }
        return [2 /*return*/];
      });
    });
  };
  var handleFile = function (file) {
    setIsLoading(true); // Corrigido aqui
    var reader = new FileReader();
    reader.onload = function () {
      setIsLoading(false);
    };
    reader.onerror = function () {
      setIsLoading(false);
      // Tratar erro aqui se necessário
    };
    reader.readAsDataURL(file);
  };
  var handleButtonClick = function () {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  var handleRemoveFile = function (index) {
    var updatedFiles = __spreadArray([], selectedFiles, true);
    updatedFiles.splice(index, 1)[0];
    setSelectedFiles(updatedFiles);
    var updatedFileList = updatedFiles.map(function (fileObj) {
      return fileObj.file;
    });
    var updatedFileListAsFileList = new DataTransfer();
    updatedFileList.forEach(function (file) {
      updatedFileListAsFileList.items.add(file);
    });
    onChange(
      updatedFileListAsFileList.files.length > 0
        ? updatedFileListAsFileList.files
        : null,
    );
  };
  var _d = React.useState(null),
    tamanhoPai = _d[0],
    setTamanhoPai = _d[1];
  React.useEffect(function () {
    var updateTamanhoPai = function () {
      var paiElement = document.querySelector(".file-uploader");
      if (paiElement) {
        setTamanhoPai(paiElement.offsetWidth);
      }
    };
    updateTamanhoPai();
    window.addEventListener("resize", updateTamanhoPai);
    return function () {
      window.removeEventListener("resize", updateTamanhoPai);
    };
  }, []);
  var estiloFilha = tamanhoPai
    ? { maxWidth: "calc(".concat(tamanhoPai, "px - 60px)") }
    : {};
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      "div",
      { className: "file-uploader" },
      React.createElement(
        "div",
        { className: "file-uploader-header" },
        React.createElement("h1", null, title),
        React.createElement(
          "div",
          { className: "file-uploader-button" },
          React.createElement("input", {
            disabled: disabled,
            type: "file",
            ref: fileInputRef,
            multiple: !!multiple,
            style: { display: "none" },
            onChange: handleFileChange,
          }),
          React.createElement(Button, {
            variant: "primary",
            disabled: disabled,
            onClick: handleButtonClick,
            label: buttonLabel,
            typeIcon: typeIconButton,
            size: "md",
          }),
        ),
      ),
      React.createElement(
        "div",
        { className: "file-uploader-footer" },
        React.createElement("p", null, description),
        selectedFiles.length > 0 &&
          React.createElement(
            "ul",
            { className: "file-uploader-items" },
            selectedFiles.map(function (fileObj, index) {
              return React.createElement(
                "li",
                {
                  className: "file-uploader-item ".concat(
                    fileObj.hasError ? "file-uploader-item-error" : "",
                  ),
                  key: index,
                },
                React.createElement(
                  "div",
                  {
                    className: "file-uploaded ".concat(
                      fileObj.hasError ? "file-uploaded-error" : "",
                    ),
                  },
                  React.createElement(
                    "p",
                    { style: estiloFilha },
                    fileObj.file.name,
                  ),
                  React.createElement(
                    "p",
                    { className: "file-uploaded-icon" },
                    isLoading &&
                      React.createElement(Loading, { variant: "default" }),
                    React.createElement(
                      "div",
                      { className: "file-uploader-icon-error" },
                      fileObj.hasError &&
                        React.createElement(Icon, {
                          icon: "error_outline",
                          size: "sm",
                        }),
                    ),
                    React.createElement(ButtonIcon, {
                      variant: "primary",
                      buttonType: "plain",
                      onClick: function () {
                        return handleRemoveFile(index);
                      },
                      size: "sm",
                      typeIcon: "close",
                    }),
                  ),
                ),
                fileObj.hasError &&
                  fileObj.errorMessage &&
                  React.createElement(
                    "p",
                    { className: "file-uploader-error" },
                    fileObj.errorMessage,
                  ),
              );
            }),
          ),
      ),
    ),
  );
};

var Header = function (_a) {
  var children = _a.children,
    onClick = _a.onClick,
    breadcrumb = _a.breadcrumb;
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      "header",
      { className: "header-root" },
      React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          { className: "header-action" },
          React.createElement(ButtonIcon, {
            variant: "primary",
            buttonType: "plain",
            size: "md",
            typeIcon: "menu",
            onClick: onClick,
          }),
        ),
        React.createElement(
          "div",
          { className: "header-breadcrumb" },
          breadcrumb,
        ),
      ),
      children,
    ),
  );
};
var HeaderProfile = function (_a) {
  var name = _a.name,
    children = _a.children,
    avatar_src = _a.avatar_src,
    skeleton = _a.skeleton,
    letter = _a.letter;
  var _b = React.useState(false),
    isDropDownOpen = _b[0],
    setIsDropDownOpen = _b[1];
  var dropdownRef = React.useRef(null);
  var toggleDropDown = function () {
    setIsDropDownOpen(!isDropDownOpen);
  };
  var handleClickOutside = function (event) {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropDownOpen(false);
    }
  };
  React.useEffect(function () {
    document.addEventListener("mousedown", handleClickOutside);
    return function () {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      "div",
      { ref: dropdownRef, className: "profile-root" },
      React.createElement(
        "div",
        { className: "profile", tabIndex: 0, onClick: toggleDropDown },
        React.createElement(
          "div",
          { className: "avatar" },
          React.createElement(Avatar, {
            skeleton: skeleton,
            size: "md",
            src: avatar_src,
            letter: letter,
          }),
        ),
        skeleton
          ? React.createElement(
              React.Fragment,
              null,
              React.createElement(Skeleton, { height: "24", width: "70" }),
            )
          : React.createElement(
              React.Fragment,
              null,
              React.createElement("h1", { className: "name" }, name),
            ),
        React.createElement(
          "div",
          { className: "icon ".concat(isDropDownOpen ? "open" : "close") },
          React.createElement(Icon, {
            size: "sm",
            icon: "keyboard_arrow_down",
          }),
        ),
      ),
      React.createElement(
        "div",
        { className: "dropdown ".concat(isDropDownOpen ? "open" : "close") },
        children,
      ),
    ),
  );
};

var Image = function (_a) {
  var src = _a.src,
    alt = _a.alt,
    width = _a.width,
    height = _a.height,
    skeleton = _a.skeleton,
    props = __rest(_a, ["src", "alt", "width", "height", "skeleton"]);
  return React.createElement(
    React.Fragment,
    null,
    skeleton
      ? React.createElement(Skeleton, {
          width: "".concat(width),
          height: "".concat(height),
        })
      : React.createElement(
          "img",
          __assign(
            {
              className: "image-root",
              width: width,
              height: height,
              src: src,
              alt: alt,
            },
            props,
          ),
        ),
  );
};

var ImageUploader = function (_a) {
  var proportion = _a.proportion,
    maxFileSize = _a.maxFileSize,
    description = _a.description,
    title = _a.title,
    disabled = _a.disabled,
    multiple = _a.multiple,
    labelDropzone = _a.labelDropzone,
    iconDropzone = _a.iconDropzone,
    onChange = _a.onChange,
    value = _a.value;
  var _b = React.useState(value !== undefined ? value : null),
    selectedFiles = _b[0],
    setSelectedFiles = _b[1];
  var _c = React.useState([]),
    imagePreviews = _c[0],
    setImagePreviews = _c[1];
  var _d = React.useState(false),
    isLoading = _d[0],
    setIsLoading = _d[1];
  var fileInputRef = React.useRef(null);
  var maxFileSizeBytes =
    maxFileSize !== undefined ? maxFileSize * 1024 * 1024 : undefined;
  var _e = React.useState(null),
    errorMessage = _e[0],
    setErrorMessage = _e[1];
  var _f = React.useState(false),
    fileRemoved = _f[0],
    setFileRemoved = _f[1];
  React.useEffect(
    function () {
      setSelectedFiles(value !== undefined ? value : null);
    },
    [value],
  );
  React.useEffect(
    function () {
      if (!selectedFiles) {
        setImagePreviews([]);
        return;
      }
      var readerPromises = [];
      Array.from(selectedFiles).forEach(function (file) {
        readerPromises.push(
          new Promise(function (resolve, reject) {
            var reader = new FileReader();
            reader.onload = function () {
              if (typeof reader.result === "string") {
                resolve(reader.result);
              } else {
                reject(new Error("Failed to convert file to data URL."));
              }
            };
            reader.onerror = reject;
            reader.readAsDataURL(file);
          }),
        );
      });
      Promise.all(readerPromises)
        .then(function (results) {
          setImagePreviews(results);
        })
        .catch(function (error) {
          console.error("Error loading image previews:", error);
          setImagePreviews([]);
        });
    },
    [selectedFiles],
  );
  var handleButtonClick = function () {
    var _a;
    (_a = fileInputRef.current) === null || _a === void 0 ? void 0 : _a.click();
  };
  var handleFileChange = function (event) {
    return __awaiter(void 0, void 0, void 0, function () {
      var files, updatedFiles_1, promises, newFileList_1;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            files = event.target.files;
            setIsLoading(true);
            setFileRemoved(false);
            if (!(files && files.length > 0)) return [3 /*break*/, 5];
            updatedFiles_1 = selectedFiles ? Array.from(selectedFiles) : [];
            _a.label = 1;
          case 1:
            _a.trys.push([1, 3, 4, 5]);
            promises = Array.from(files).map(function (file) {
              return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function (_a) {
                  switch (_a.label) {
                    case 0:
                      if (file.size > (maxFileSizeBytes || Infinity)) {
                        setErrorMessage(
                          "File ".concat(
                            file.name,
                            " exceeds the maximum file size limit.",
                          ),
                        );
                        return [2 /*return*/];
                      }
                      return [4 /*yield*/, handleFile(file)];
                    case 1:
                      _a.sent();
                      updatedFiles_1.push(file);
                      return [2 /*return*/];
                  }
                });
              });
            });
            return [4 /*yield*/, Promise.all(promises)];
          case 2:
            _a.sent();
            newFileList_1 = new DataTransfer();
            updatedFiles_1.forEach(function (file) {
              return newFileList_1.items.add(file);
            });
            setSelectedFiles(newFileList_1.files);
            onChange(newFileList_1.files);
            event.target.value = "";
            return [3 /*break*/, 5];
          case 3:
            _a.sent();
            setErrorMessage("Error handling files.");
            return [3 /*break*/, 5];
          case 4:
            setIsLoading(false);
            return [7 /*endfinally*/];
          case 5:
            return [2 /*return*/];
        }
      });
    });
  };
  var handleFile = function (file) {
    return __awaiter(void 0, void 0, void 0, function () {
      return __generator(this, function (_a) {
        if (!file) {
          throw new Error("File is undefined");
        }
        // Rest of the function
        return [
          2 /*return*/,
          new Promise(function (resolve, reject) {
            var reader = new FileReader();
            reader.onloadend = function () {
              setImagePreviews(function (prevPreviews) {
                return __spreadArray(
                  __spreadArray([], prevPreviews, true),
                  [reader.result],
                  false,
                );
              });
              resolve();
            };
            reader.onerror = function () {
              reject(new Error("Failed to read the file."));
            };
            reader.readAsDataURL(file);
          }),
        ];
      });
    });
  };
  var handleRemoveFile = function (index) {
    var updatedFiles = Array.from(selectedFiles || []);
    updatedFiles.splice(index, 1);
    var dataTransfer = new DataTransfer();
    updatedFiles.forEach(function (file) {
      return dataTransfer.items.add(file);
    });
    var newFileList = dataTransfer.files;
    setSelectedFiles(newFileList);
    onChange(newFileList);
    setImagePreviews(function (prevPreviews) {
      var newPreviews = __spreadArray([], prevPreviews, true);
      newPreviews.splice(index, 1);
      return newPreviews;
    });
    setFileRemoved(true);
  };
  var handleDragOver = function (event) {
    event.preventDefault();
  };
  var handleDrop = function (event) {
    event.preventDefault();
    var files = event.dataTransfer.files;
    if (files && files.length > 0) {
      handleFile(files[0]);
    }
  };
  return React.createElement(
    "div",
    {
      className: "image-uploader",
      onDragOver: handleDragOver,
      onDrop: handleDrop,
    },
    React.createElement("p", { className: "image-uploader-title" }, title),
    React.createElement(
      "div",
      { className: "image-previews" },
      selectedFiles &&
        imagePreviews &&
        !isLoading &&
        React.createElement(
          React.Fragment,
          null,
          Array.from(selectedFiles).map(function (file, index) {
            return React.createElement(
              "div",
              { key: index, className: "image-uploader-item" },
              React.createElement(
                "div",
                { className: "delete-button-container" },
                React.createElement(
                  "div",
                  { className: "delete-button" },
                  React.createElement(ButtonIcon, {
                    size: "sm",
                    buttonType: "default",
                    variant: "secondary",
                    typeIcon: "delete",
                    onClick: function () {
                      return handleRemoveFile(index);
                    },
                    disabled: disabled,
                  }),
                ),
              ),
              React.createElement("img", {
                style: {
                  aspectRatio: "calc(".concat(proportion, ")"),
                },
                src:
                  imagePreviews && imagePreviews[index]
                    ? imagePreviews[index]
                    : "",
                alt: "Preview",
                className: "image-preview",
              }),
            );
          }),
        ),
      (multiple || !selectedFiles || selectedFiles.length === 0) &&
        React.createElement(
          "div",
          {
            className: "image-uploader-content "
              .concat(disabled ? "image-uploader-content-disabled" : "", " ")
              .concat(
                (!multiple && fileRemoved) ||
                  (multiple && (!selectedFiles || selectedFiles.length === 0))
                  ? ""
                  : "hidden",
              ),
            style: {
              aspectRatio: "calc(".concat(proportion, ")"),
            },
          },
          React.createElement("input", {
            type: "file",
            accept: "image/*",
            onChange: handleFileChange,
            ref: fileInputRef,
            disabled: disabled,
            style: { display: "none" },
            multiple: multiple,
          }),
          React.createElement(
            "div",
            { className: "".concat(isLoading ? "hidden" : "uploader-item") },
            React.createElement(
              "button",
              {
                onClick: handleButtonClick,
                style: { aspectRatio: "calc(".concat(proportion, ")") },
                className: "image-uploader-dropzone ".concat(
                  disabled ? "image-uploader-dropzone-disabled" : "",
                ),
              },
              React.createElement(Icon, { icon: iconDropzone, size: "md" }),
              React.createElement("p", null, labelDropzone),
            ),
          ),
          isLoading &&
            React.createElement(
              "div",
              { className: "loading-screen" },
              React.createElement(Loading, { variant: "default" }),
            ),
        ),
    ),
    errorMessage &&
      React.createElement(
        "p",
        { className: "image-uploader-error-message" },
        errorMessage,
      ),
    description &&
      React.createElement(
        "p",
        { className: "image-uploader-description" },
        description,
      ),
  );
};

var InputNumber = function (_a) {
  var max = _a.max,
    min = _a.min,
    placeholder = _a.placeholder,
    disabled = _a.disabled,
    label = _a.label,
    onChange = _a.onChange,
    error = _a.error,
    textError = _a.textError,
    propValue = _a.value;
  var _b = React.useState(false),
    isHover = _b[0],
    setIsHover = _b[1];
  var _c = React.useState(function () {
      if (min !== undefined) {
        return min;
      }
      return undefined;
    }),
    numero = _c[0],
    setNumero = _c[1];
  React.useEffect(
    function () {
      if (propValue !== undefined) {
        var parsedValue = parseInt(propValue, 10);
        if (!isNaN(parsedValue)) {
          setNumero(parsedValue);
        }
      }
    },
    [propValue],
  );
  var addNum = function () {
    setNumero(function (prevNumero) {
      if (prevNumero === undefined) return min !== undefined ? min : 1;
      var newNum = prevNumero + 1;
      if (max !== undefined && newNum > max) {
        return prevNumero;
      }
      if (onChange) {
        onChange(newNum.toString());
      }
      return newNum;
    });
  };
  var subtractNum = function () {
    setNumero(function (prevNumero) {
      if (prevNumero === undefined) return min !== undefined ? min : -1;
      var newNum = prevNumero - 1;
      if (min !== undefined && newNum < min) {
        return prevNumero;
      }
      if (onChange) {
        onChange(newNum.toString());
      }
      return newNum;
    });
  };
  var handleInputChange = function (event) {
    var inputValue = event.target.value;
    var newNum;
    if (inputValue === "") {
      // Se o input estiver vazio, defina como undefined
      newNum = undefined;
    } else {
      newNum = parseInt(inputValue, 10);
      if (!isNaN(newNum)) {
        if (max !== undefined && newNum > max) {
          newNum = max;
        } else if (min !== undefined && newNum < min) {
          newNum = min;
        }
      } else {
        newNum = min !== undefined ? min : undefined;
      }
    }
    setNumero(newNum);
    if (onChange) {
      onChange(newNum !== undefined ? newNum.toString() : "");
    }
  };
  return React.createElement(
    "div",
    { className: "input-number-root" },
    label &&
      React.createElement("label", { className: "input-number-label" }, label),
    React.createElement(
      "div",
      { className: "input-number ".concat(disabled ? "disabled" : "") },
      React.createElement(
        "button",
        { disabled: disabled, className: "subtract", onClick: subtractNum },
        React.createElement(Icon, { size: "md", icon: "remove" }),
      ),
      React.createElement("input", {
        style: {
          borderRight: isHover
            ? "var(--s-border-width-hairline) solid var(--s-color-border-default-hover)"
            : "",
        },
        className: "input ".concat(error ? "error" : ""),
        type: "number",
        placeholder: placeholder,
        onChange: handleInputChange,
        value: numero !== undefined ? numero : "",
        max: max,
        min: min,
        disabled: disabled,
        inputMode: "numeric",
      }),
      React.createElement(
        "button",
        {
          disabled: disabled,
          onMouseEnter: function () {
            return setIsHover(true);
          },
          onMouseLeave: function () {
            return setIsHover(false);
          },
          className: "add",
          onClick: addNum,
        },
        React.createElement(Icon, { size: "md", icon: "add" }),
      ),
    ),
    error && React.createElement("div", { className: "textError" }, textError),
  );
};

var InputRadioButton = function (_a) {
  var disabled = _a.disabled,
    label = _a.label,
    onChange = _a.onChange,
    controlledChecked = _a.checked;
  var _b = React.useState(controlledChecked || false),
    isChecked = _b[0],
    setIsChecked = _b[1];
  React.useEffect(
    function () {
      if (controlledChecked !== undefined) {
        setIsChecked(controlledChecked);
      }
    },
    [controlledChecked],
  );
  var toggleRadioButton = function () {
    if (disabled) {
      return;
    } else {
      var newValue = !isChecked;
      setIsChecked(newValue);
      if (onChange) {
        onChange(newValue);
      }
    }
  };
  var handleKeyPress = function (e) {
    if (e.key === "Enter") {
      toggleRadioButton();
    }
  };
  return React.createElement(
    "div",
    { className: "radio-button-root  ".concat(disabled ? "disable" : "") },
    React.createElement(
      "div",
      {
        className: "radio-button "
          .concat(disabled ? "disable" : "", " ")
          .concat(isChecked ? "checked" : ""),
        onClick: toggleRadioButton,
        onKeyDown: handleKeyPress,
        role: "radio",
        "aria-checked": isChecked,
        tabIndex: 0,
      },
      React.createElement("span", {
        className: "radio-circle ".concat(isChecked ? "checked-circle" : ""),
      }),
    ),
    React.createElement(
      "label",
      {
        onClick: toggleRadioButton,
        className: "radio-button-label ".concat(disabled ? "disabled" : ""),
      },
      label,
    ),
  );
};

var InputSelect = function (_a) {
  var options = _a.options,
    label = _a.label,
    error = _a.error,
    errorMessage = _a.errorMessage,
    disabled = _a.disabled,
    onChange = _a.onChange,
    value = _a.value;
  var _b = React.useState(false),
    isOpen = _b[0],
    setIsOpen = _b[1];
  var _c = React.useState(value || undefined),
    selectedOption = _c[0],
    setSelectedOption = _c[1]; // Defina o valor inicial com a propriedade value
  React.useEffect(
    function () {
      // Atualiza o estado selectedOption quando a propriedade value mudar
      setSelectedOption(value || undefined);
    },
    [value],
  );
  var handleOptionChange = function (event) {
    var newValue = event.target.value;
    setSelectedOption(newValue);
    onChange(newValue);
  };
  var dropdownRef = React.useRef(null);
  var handleClickOutside = function (event) {
    if (
      isOpen &&
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target)
    ) {
      setIsOpen(false);
    }
  };
  React.useEffect(
    function () {
      document.addEventListener("mousedown", handleClickOutside);
      return function () {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    },
    [isOpen],
  );
  return React.createElement(
    "div",
    { className: "input-select-root" },
    React.createElement("div", { className: "input-select-label" }, label),
    React.createElement(
      "div",
      { className: "input-select" },
      React.createElement(
        "div",
        {
          className: "input-select-button "
            .concat(selectedOption && "option", " ")
            .concat(error && "error", " ")
            .concat(disabled && "disabled"),
        },
        React.createElement(
          "select",
          {
            className: "".concat(error && "select-error"),
            value: selectedOption || "",
            onChange: handleOptionChange,
            disabled: disabled || error,
          },
          options.map(function (option, index) {
            return React.createElement(
              "option",
              { key: index, value: option },
              option,
            );
          }),
        ),
      ),
    ),
    error &&
      React.createElement(
        "p",
        { className: "input-select-error-message" },
        errorMessage,
      ),
  );
};

var TextArea = function (_a) {
  var placeholder = _a.placeholder,
    label = _a.label,
    disabled = _a.disabled,
    error = _a.error,
    errorText = _a.errorText,
    onChange = _a.onChange,
    _b = _a.value,
    value = _b === void 0 ? "" : _b;
  var _c = React.useState(value),
    internalValue = _c[0],
    setInternalValue = _c[1];
  var textareaRef = React.useRef(null);
  React.useEffect(
    function () {
      setInternalValue(value);
    },
    [value],
  );
  var handleButtonClick = function () {
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  };
  var handleInputChange = function (event) {
    var newValue = event.target.value;
    setInternalValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };
  return React.createElement(
    "div",
    { className: "text-area-root" },
    React.createElement("label", { className: "text-area-label" }, label),
    React.createElement(
      "div",
      {
        tabIndex: 0,
        className: "text-area "
          .concat(disabled && "disabled", " ")
          .concat(error && !disabled ? "error" : ""),
        onClick: handleButtonClick,
      },
      React.createElement("textarea", {
        ref: textareaRef,
        placeholder: placeholder,
        disabled: disabled,
        onChange: handleInputChange,
        value: internalValue,
      }),
    ),
    error && React.createElement("p", { className: "description" }, errorText),
  );
};

var InputTime = function (_a) {
  var label = _a.label,
    placeholder = _a.placeholder,
    disabled = _a.disabled,
    error = _a.error,
    textError = _a.textError,
    onChange = _a.onChange,
    controlledValue = _a.value,
    rest = __rest(_a, [
      "label",
      "placeholder",
      "disabled",
      "error",
      "textError",
      "onChange",
      "value",
    ]);
  var _b = React.useState(false),
    isModalOpen = _b[0],
    setIsModalOpen = _b[1];
  var _c = React.useState(""),
    selectedHour = _c[0],
    setSelectedHour = _c[1];
  var _d = React.useState(""),
    selectedMinute = _d[0],
    setSelectedMinute = _d[1];
  var modalRef = React.useRef(null);
  var openModal = function () {
    setIsModalOpen(!isModalOpen);
  };
  React.useEffect(function () {
    var handleClickOutside = function (event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsModalOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return function () {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  React.useEffect(
    function () {
      if (controlledValue !== undefined) {
        var _a = controlledValue.split(":"),
          hour = _a[0],
          minute = _a[1];
        setSelectedHour(hour || "");
        setSelectedMinute(minute || "");
      } else {
        setSelectedHour("");
        setSelectedMinute("");
      }
    },
    [controlledValue],
  );
  var handleInputChange = function (event) {
    var newValue = event.target.value;
    newValue = newValue.replace(/[^\d:]/g, "");
    if (newValue.length > 5) {
      newValue = newValue.substring(0, 5);
    }
    if (newValue.length === 2 && newValue.charAt(2) !== ":") {
      newValue = newValue.slice(0, 2) + ":" + newValue.slice(2);
    }
    event.target.value = newValue;
    onChange(newValue);
  };
  var renderButtons = React.useCallback(
    function (maxValue, isHour) {
      var buttons = [];
      var _loop_1 = function (i) {
        var formattedValue = i < 10 ? "0".concat(i) : "".concat(i);
        buttons.push(
          React.createElement(
            "button",
            {
              key: formattedValue,
              className: "input-time-buttons",
              onClick: function () {
                if (isHour) {
                  setSelectedHour(formattedValue);
                  onChange(
                    "".concat(formattedValue, ":").concat(selectedMinute),
                  );
                } else {
                  setSelectedMinute(formattedValue);
                  onChange("".concat(selectedHour, ":").concat(formattedValue));
                }
              },
              "aria-label": formattedValue,
            },
            formattedValue,
          ),
        );
      };
      for (var i = 0; i <= maxValue; i++) {
        _loop_1(i);
      }
      return buttons;
    },
    [onChange, selectedHour, selectedMinute],
  );
  return React.createElement(
    "div",
    { className: "input-time" },
    React.createElement(
      Input,
      __assign(
        {
          label: label,
          type: "text",
          value:
            controlledValue !== undefined && controlledValue !== null
              ? controlledValue
              : selectedHour && selectedMinute
                ? "".concat(selectedHour, ":").concat(selectedMinute)
                : "",
          placeholder: placeholder,
          typeIcon: "schedule",
          disabled: disabled,
          onClick: openModal,
          onChange: handleInputChange,
          error: error,
          textError: textError,
          inputMode: "numeric",
          pattern: "[0-9]*",
        },
        rest,
      ),
    ),
    isModalOpen &&
      React.createElement(
        "div",
        { className: "input-time-modal", ref: modalRef },
        React.createElement(
          "div",
          { className: "modal-section" },
          renderButtons(23, true),
        ),
        React.createElement(
          "div",
          { className: "modal-section" },
          renderButtons(59, false),
        ),
      ),
  );
};

var Layout = function (_a) {
  var children = _a.children,
    columns = _a.columns,
    rest = __rest(_a, ["children", "columns"]);
  var columnClassNames = {
    1: "one-column",
    "2 - Symmetric": "two-column-symmetric",
    "2 - Asymmetric": "two-column-asymmetric",
    "3 - Symmetric": "three-column-symmetric",
  };
  var columnClassName = columnClassNames[columns];
  return React.createElement(
    "div",
    __assign({}, rest, { className: "layout ".concat(columnClassName) }),
    children,
  );
};

var Notification = function (_a) {
  var icon = _a.icon,
    title = _a.title,
    description = _a.description,
    variant = _a.variant,
    type = _a.type,
    isOpen = _a.isOpen,
    dismissible = _a.dismissible,
    withAction = _a.withAction,
    disableButton = _a.disableButton,
    onClickButton = _a.onClickButton,
    buttonLabel = _a.buttonLabel;
  var _b = React.useState(true),
    isClose = _b[0],
    setIsClose = _b[1];
  var handleClickClose = function () {
    setIsClose(false);
  };
  // Condicional para mostrar a div pai
  var showContent = withAction || description;
  return React.createElement(
    React.Fragment,
    null,
    isClose &&
      React.createElement(
        "div",
        {
          className: "notification "
            .concat(variant, " ")
            .concat(type, " ")
            .concat(dismissible && "dismissible", " ")
            .concat(isOpen ? "open" : ""),
        },
        React.createElement(
          "div",
          { className: "notification-title ".concat(variant) },
          React.createElement(Icon, { icon: icon, size: "md" }),
          React.createElement("div", { className: "title" }, title),
          dismissible &&
            React.createElement(ButtonIcon, {
              variant: "on-color",
              size: "sm",
              typeIcon: "close",
              buttonType: "plain",
              onClick: handleClickClose,
            }),
        ),
        showContent &&
          React.createElement(
            "div",
            { className: "notification-content" },
            description &&
              React.createElement(
                "div",
                { className: "description" },
                description,
              ),
            withAction &&
              React.createElement(
                "div",
                { className: "notification-with-action" },
                React.createElement(Button, {
                  size: "md",
                  variant: variant,
                  disabled: disableButton,
                  label: buttonLabel,
                  onClick: onClickButton,
                }),
              ),
          ),
      ),
  );
};

// Declaração
var Page = function (_a) {
  var children = _a.children,
    namePage = _a.namePage,
    withBackButton = _a.withBackButton,
    withActionPrimary = _a.withActionPrimary,
    withActionSecondary = _a.withActionSecondary,
    buttonContentPrimary = _a.buttonContentPrimary,
    buttonContentSecondary = _a.buttonContentSecondary,
    onClickActionPrimary = _a.onClickActionPrimary,
    onClickActionSecondary = _a.onClickActionSecondary,
    onClickBackButton = _a.onClickBackButton,
    iconButtonPrimary = _a.iconButtonPrimary,
    iconButtonSecondary = _a.iconButtonSecondary,
    skeletonButtonPrimary = _a.skeletonButtonPrimary,
    skeletonButtonSecondary = _a.skeletonButtonSecondary,
    description = _a.description;
  return React.createElement(
    "div",
    {
      style: {
        display: "flex",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        background: "var(--s-color-background-default);",
        overflowX: "hidden",
      },
    },
    React.createElement(
      "div",
      { className: "page-root" },
      React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          { className: "page-header" },
          withBackButton &&
            React.createElement(ButtonIcon, {
              onClick: onClickBackButton,
              size: "md",
              buttonType: "default",
              typeIcon: "arrow_back",
              variant: "secondary",
            }),
          React.createElement(
            "div",
            { className: "page-header-title" },
            React.createElement("h1", null, namePage),
          ),
          React.createElement(
            "div",
            { className: "page-header-actions" },
            withActionSecondary &&
              React.createElement(
                React.Fragment,
                null,
                React.createElement(
                  "div",
                  { className: "button-icon-actions" },
                  React.createElement(ButtonIcon, {
                    buttonType: "default",
                    size: "md",
                    typeIcon: "".concat(iconButtonSecondary || "more_vert"),
                    variant: "secondary",
                    onClick: onClickActionSecondary,
                    skeleton: skeletonButtonSecondary,
                  }),
                ),
                React.createElement(
                  "div",
                  { className: "button-actions" },
                  React.createElement(Button, {
                    size: "md",
                    variant: "secondary",
                    label: buttonContentSecondary,
                    onClick: onClickActionSecondary,
                    typeIcon: iconButtonSecondary,
                    skeleton: skeletonButtonSecondary,
                  }),
                ),
              ),
            withActionPrimary &&
              React.createElement(
                React.Fragment,
                null,
                React.createElement(
                  "div",
                  { className: "button-icon-actions" },
                  React.createElement(ButtonIcon, {
                    buttonType: "default",
                    size: "md",
                    typeIcon: "".concat(iconButtonPrimary || "add"),
                    variant: "primary",
                    onClick: onClickActionPrimary,
                    skeleton: skeletonButtonPrimary,
                  }),
                ),
                React.createElement(
                  "div",
                  { className: "button-actions" },
                  React.createElement(Button, {
                    size: "md",
                    variant: "primary",
                    skeleton: skeletonButtonPrimary,
                    typeIcon: iconButtonPrimary,
                    label: buttonContentPrimary,
                    onClick: onClickActionPrimary,
                  }),
                ),
              ),
          ),
        ),
        React.createElement(
          "p",
          {
            className: "page-description ".concat(
              withBackButton ? "with-back-button" : "",
            ),
          },
          description,
        ),
      ),
      children,
    ),
  );
};

var Progress = function (_a) {
  var value = _a.value,
    error = _a.error,
    indeterminate = _a.indeterminate;
  var _b = React.useState(0),
    progress = _b[0],
    setProgress = _b[1];
  React.useEffect(
    function () {
      setProgress(value);
    },
    [value],
  );
  return React.createElement(
    "div",
    { className: "progress" },
    indeterminate === true
      ? React.createElement("div", { className: "progress-bar-loading" })
      : React.createElement("div", {
          className: "progress-bar "
            .concat(value === 100 ? "progress-bar-success" : "", " ")
            .concat(error ? "progress-bar-error" : ""),
          style: { width: "".concat(progress, "%") },
        }),
  );
};

var stateNames = {
  default: "circle",
  current: "trip_origin",
  error: "error",
  completed: "check_circle",
  disable: "circle",
};
var ProgressIndicator = function (_a) {
  var step = _a.step,
    description = _a.description,
    state = _a.state,
    direction = _a.direction,
    onClick = _a.onClick,
    widthFull = _a.widthFull;
  var displayName = stateNames[state] || state;
  var customizeWidthFull = function (widthFull) {
    if (widthFull === void 0) {
      widthFull = false;
    }
    if (widthFull) {
      return {
        width: "100%",
      };
    }
  };
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      "div",
      {
        className: "progress-indicator  ".concat(direction, " ").concat(state),
        onClick: onClick,
        style: customizeWidthFull(widthFull),
      },
      React.createElement(
        "div",
        { className: "header" },
        React.createElement(
          "div",
          { className: state },
          React.createElement(Icon, {
            icon: displayName,
            size: "sm",
            fill:
              displayName === "check_circle" || displayName === "error"
                ? true
                : false,
          }),
        ),
        React.createElement("h1", null, step),
      ),
      React.createElement("p", null, description),
    ),
  );
};

var SaveBar = function (_a) {
  var onClickSave = _a.onClickSave,
    onClickCancel = _a.onClickCancel,
    label = _a.label,
    labelSave = _a.labelSave,
    labelCancel = _a.labelCancel;
  var handleSaveClick = function (e) {
    e.stopPropagation();
    onClickSave(e);
  };
  return React.createElement(
    "div",
    { className: "save-bar" },
    React.createElement(
      "div",
      { className: "save-bar-content" },
      React.createElement("p", { className: "save-bar-label" }, label),
      React.createElement(
        "div",
        { className: "save-bar-buttons" },
        React.createElement(ButtonGroup, {
          variantFirstButton: "secondary",
          variantSecondButton: "success",
          direction: "row",
          contentFirstButton: labelCancel,
          contentSecondButton: labelSave,
          onClickFirstButton: onClickCancel,
          onClickSecondButton: handleSaveClick,
        }),
      ),
    ),
  );
};

var SavebarTrigger = function (_a) {
  var children = _a.children,
    formChanged = _a.formChanged,
    handleSubmit = _a.handleSubmit,
    label = _a.label,
    handleCancelProp = _a.handleCancel,
    labelSave = _a.labelSave,
    labelCancel = _a.labelCancel;
  var _b = React.useState({}),
    formData = _b[0],
    setFormData = _b[1];
  var _c = React.useState(null),
    tamanhoPai = _c[0],
    setTamanhoPai = _c[1];
  var _d = React.useState(false),
    saving = _d[0],
    setSaving = _d[1];
  var _e = React.useState(0),
    progressValue = _e[0],
    setProgressValue = _e[1]; // Progresso inicial é 0%
  var _f = React.useState(null);
  _f[0];
  var setElapsedTime = _f[1];
  React.useEffect(function () {
    var updateTamanhoPai = function () {
      var paiElement = document.querySelector(".header-root");
      if (paiElement) {
        setTamanhoPai(paiElement.offsetWidth);
      }
    };
    updateTamanhoPai();
    window.addEventListener("resize", updateTamanhoPai);
    return function () {
      window.removeEventListener("resize", updateTamanhoPai);
    };
  }, []);
  var estiloFilha = tamanhoPai
    ? { width: "calc(".concat(tamanhoPai, "px)") }
    : {};
  var handleInputChange = function (name, value) {
    setFormData(function (prevData) {
      var _a;
      return __assign(
        __assign({}, prevData),
        ((_a = {}), (_a[name] = value), _a),
      );
    });
  };
  var handleCancel = function () {
    console.log("Alterações canceladas");
    setSaving(false);
    setProgressValue(0);
    setElapsedTime(null);
    // Chame a função handleCancel recebida por props
    handleCancelProp();
  };
  var handleSave = function () {
    setSaving(true); // Define saving como true ao clicar em Save
    var totalTime = 500; // Tempo total em milissegundos para alcançar 100%
    var incrementInterval = 50; // Intervalo de tempo em milissegundos entre cada incremento
    var totalIncrements = totalTime / incrementInterval; // Número total de incrementos
    var incrementAmount = 100 / totalIncrements; // Quantidade de incremento para cada intervalo
    var currentProgress = 0; // Inicializa o progresso atual como 0
    var intervalId = setInterval(function () {
      // Aumenta o valor do progresso gradualmente até 100%
      currentProgress += incrementAmount;
      setProgressValue(currentProgress);
      if (currentProgress >= 100) {
        clearInterval(intervalId); // Limpa o intervalo quando o progresso atinge 100%
        setTimeout(function () {
          // Após um breve intervalo, redefine os estados para o estado inicial
          setSaving(false);
          setProgressValue(0);
        }, 500); // Define aqui o tempo em milissegundos antes de redefinir o estado
      }
      handleSubmit();
    }, incrementInterval); // Define aqui o intervalo de tempo entre cada aumento do progresso
  };
  var modifyChild = function (child, index) {
    if (React.isValidElement(child)) {
      var name_1 = child.props.name;
      return React.cloneElement(child, {
        onChange: function (e) {
          handleInputChange(name_1, e.target.value);
        },
        value: formData[name_1] || "", // Atualiza o valor do input de acordo com o estado atual do formulário
        name: name_1,
      });
    }
    return child;
  };
  var modifiedChildren = React.Children.map(children, modifyChild);
  return React.createElement(
    "div",
    { className: "form-register-root" },
    saving &&
      React.createElement(
        "div",
        { className: "form-register-progress" },
        React.createElement(Progress, { value: progressValue }),
      ),
    React.createElement(
      "div",
      { className: "form-register-save-bar", style: estiloFilha },
      formChanged &&
        !saving &&
        React.createElement(SaveBar, {
          labelCancel: labelCancel,
          labelSave: labelSave,
          label: label,
          onClickCancel: handleCancel,
          onClickSave: handleSave,
        }),
    ),
    React.createElement("div", null, modifiedChildren),
  );
};

var Sidebar = function (_a) {
  var brand = _a.brand,
    brandSize = _a.brandSize,
    children = _a.children,
    toggle = _a.toggle,
    setToggleSidebar = _a.setToggleSidebar;
  var _b = React.useState(null),
    activeItem = _b[0],
    setActiveItem = _b[1];
  var closeSidebar = function () {
    setToggleSidebar(false);
  };
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      "div",
      { className: "Sidebar ".concat(toggle ? "open" : "close") },
      React.createElement(
        "div",
        { className: "brand" },
        React.createElement(Brand, {
          alt: "Logo-marca",
          src: brand,
          size: brandSize,
        }),
      ),
      React.createElement(
        "div",
        { className: "Sidebar-list" },
        React.Children.map(children, function (child, index) {
          return React.isValidElement(child) &&
            child.type === SidebarItem &&
            child.props.children
            ? React.cloneElement(child, {
                isActive: activeItem === String(index),
                onClick: function () {
                  return setActiveItem(
                    activeItem === String(index) ? null : String(index),
                  );
                },
              })
            : child;
        }),
      ),
    ),
    React.createElement(
      "div",
      {
        onClick: closeSidebar,
        className: "Sidebar-overlay ".concat(toggle ? "open" : "close"),
      },
      React.createElement(ButtonIcon, {
        variant: "secondary",
        onClick: closeSidebar,
        buttonType: "default",
        size: "md",
        typeIcon: "close",
      }),
    ),
  );
};
var SidebarTitle = function (_a) {
  var title = _a.title;
  return React.createElement("h1", { className: "Sidebar-list-title" }, title);
};
var SidebarItem = function (_a) {
  var title = _a.title,
    icon = _a.icon,
    fillIcon = _a.fillIcon,
    children = _a.children,
    onClick = _a.onClick,
    isActive = _a.isActive;
  var handleKeyPress = function (event) {
    if (event.key === "Enter" && children) {
      onClick === null || onClick === void 0 ? void 0 : onClick();
    }
  };
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      "div",
      {
        className: "Sidebar-item "
          .concat(children ? "with-sub-item" : "", " ")
          .concat(children ? "" : isActive ? "active" : ""),
        onClick: onClick,
        tabIndex: 0,
        onKeyDown: handleKeyPress,
      },
      React.createElement(
        "div",
        { className: "Sidebar-item-header" },
        React.createElement(Icon, { size: "sm", icon: icon, fill: fillIcon }),
        React.createElement("div", null, title),
      ),
      children &&
        React.createElement(
          "div",
          {
            onKeyDown: handleKeyPress,
            onClick: onClick,
            className: "".concat(
              isActive
                ? "Sidebar-item-with-action-open"
                : "Sidebar-item-with-action-close",
            ),
          },
          React.createElement(Icon, {
            size: "sm",
            icon: "keyboard_arrow_down",
          }),
        ),
    ),
    isActive && React.createElement("div", null, children),
  );
};
var SidebarSubItem = function (_a) {
  var title = _a.title,
    onClick = _a.onClick,
    active = _a.active;
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      "div",
      {
        className: "Sidebar-sub-item ".concat(active && "active"),
        tabIndex: 0,
        onClick: onClick,
      },
      React.createElement(
        "div",
        { style: active === true ? { opacity: 1 } : undefined },
        React.createElement(Icon, {
          size: "sm",
          icon: "subdirectory_arrow_right",
          fill: true,
        }),
      ),
      React.createElement("div", null, title),
    ),
  );
};

var Slider = function (_a) {
  var step = _a.step,
    min = _a.min,
    max = _a.max,
    value = _a.value,
    label = _a.label,
    onChange = _a.onChange;
  var _b = React.useState(((parseInt(value) - min) / (max - min)) * 100),
    progress = _b[0],
    setProgress = _b[1];
  var _c = React.useState(value),
    currentValue = _c[0],
    setCurrentValue = _c[1];
  var isDragging = React.useRef(false);
  React.useEffect(
    function () {
      var newValue = parseInt(value);
      setCurrentValue(value);
      setProgress(((newValue - min) / (max - min)) * 100);
    },
    [value, min, max],
  );
  var handleArrowKeyPress = function (e) {
    if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
      e.preventDefault();
      var change = e.key === "ArrowLeft" ? -step : step;
      var newValue = parseInt(currentValue) + change;
      var alignedValue = Math.round(newValue / step) * step;
      newValue = Math.min(Math.max(alignedValue, min), max);
      updateProgress(newValue);
    }
  };
  var updateProgress = function (newValue) {
    var clampedValue = Math.min(Math.max(newValue, min), max);
    setProgress(((clampedValue - min) / (max - min)) * 100);
    setCurrentValue(String(clampedValue));
    if (onChange) {
      onChange(String(clampedValue));
    }
  };
  var handleDragStart = function (e) {
    isDragging.current = true;
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("mouseup", handleDragEnd);
    window.addEventListener("touchend", handleDragEnd);
    if (e instanceof MouseEvent) {
      handleMouseMove(e);
    } else if (e instanceof TouchEvent) {
      handleTouchMove(e);
    }
  };
  var handleSliderClick = function (e) {
    handleDragStart(e);
  };
  var handleMouseMove = function (e) {
    if (e.clientX !== undefined) {
      handleDragMove(e.clientX);
    }
  };
  var handleTouchMove = function (e) {
    var _a, _b;
    if (e.touches.length > 0) {
      handleDragMove(
        (_b =
          (_a = e.touches[0]) === null || _a === void 0
            ? void 0
            : _a.clientX) !== null && _b !== void 0
          ? _b
          : 0,
      );
    }
  };
  var handleDragMove = function (clientX) {
    if (isDragging.current) {
      var slider = document.getElementById("slider-background");
      if (slider) {
        var rect = slider.getBoundingClientRect();
        var mouseX = clientX - rect.left;
        var rawPercentage = (mouseX / rect.width) * 100;
        if (rawPercentage > 100) {
          rawPercentage = 100;
        } else if (rawPercentage < 0) {
          rawPercentage = 0;
        }
        var calculatedValue = (rawPercentage / 100) * (max - min) + min;
        var alignedValue = Math.round(calculatedValue / step) * step;
        updateProgress(alignedValue);
      }
    }
  };
  var handleDragEnd = function () {
    isDragging.current = false;
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("touchmove", handleTouchMove);
    window.removeEventListener("mouseup", handleDragEnd);
    window.removeEventListener("touchend", handleDragEnd);
  };
  var handleInputChange = function (e) {
    var newValue = parseInt(e.target.value);
    updateProgress(newValue);
  };
  return React.createElement(
    "div",
    { className: "slider" },
    React.createElement(
      "label",
      { className: "slider-label", htmlFor: "sliderInput" },
      label,
    ),
    React.createElement(
      "div",
      { className: "slider-container" },
      React.createElement("div", { className: "slider-max-min" }, min),
      React.createElement(
        "div",
        {
          style: {
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            cursor: "grabbing",
          },
        },
        React.createElement(
          "div",
          {
            id: "slider-background",
            className: "slider-background",
            onMouseDown: function (e) {
              return handleSliderClick(e);
            },
          },
          React.createElement("div", {
            className: "slider-progress-bar",
            style: { width: "".concat(progress, "%") },
          }),
          React.createElement("div", {
            className: "slider-button",
            tabIndex: 0,
            style: { left: "calc(".concat(progress, "% - 10px)") },
            onKeyDown: handleArrowKeyPress,
          }),
        ),
      ),
      React.createElement("div", { className: "slider-max-min" }, max),
      React.createElement("input", {
        inputMode: "numeric",
        className: "slider-input",
        type: "number",
        min: min,
        max: max,
        step: step,
        value: currentValue,
        onChange: handleInputChange,
        id: "sliderInput",
      }),
    ),
  );
};

var Switch = function (_a) {
  var modelValue = _a.modelValue,
    value = _a.value,
    label = _a.label,
    id = _a.id,
    name = _a.name,
    required = _a.required,
    noEvents = _a.noEvents,
    disabled = _a.disabled,
    onUpdate = _a.onUpdate;
  var _b = React.useState(
      modelValue !== null && modelValue !== void 0 ? modelValue : false,
    ),
    checked = _b[0],
    setChecked = _b[1];
  var uid = React.useMemo(
    function () {
      return id !== null && id !== void 0
        ? id
        : "ui-form-switch-".concat(Math.random().toString(36).substr(2, 9));
    },
    [id],
  );
  React.useEffect(
    function () {
      if (modelValue !== checked) {
        setChecked(modelValue);
      }
    },
    [modelValue],
  );
  var classList = React.useMemo(
    function () {
      return [
        "ui-form-switch",
        "-switch",
        disabled ? "-disabled" : "",
        noEvents ? "-no-events" : "",
      ].join(" ");
    },
    [disabled, noEvents],
  );
  var handleChange = function () {
    var newValue = !checked;
    setChecked(newValue);
    onUpdate === null || onUpdate === void 0 ? void 0 : onUpdate(newValue);
  };
  var handleKeyDown = function (event) {
    if (event.key === "Enter") {
      if (disabled === false) {
        handleChange();
      }
    }
  };
  return React.createElement(
    "label",
    {
      className: classList,
      htmlFor: uid,
      onKeyDown: handleKeyDown,
      tabIndex: 0,
    },
    React.createElement("input", {
      type: "checkbox",
      id: uid,
      value: value,
      required: required,
      name: name,
      disabled: disabled,
      checked: checked,
      onChange: handleChange,
    }),
    React.createElement("span", { className: "ui-form-checkbox-checkmark" }),
    label &&
      React.createElement("div", { className: "ui-form-checkbox-text" }, label),
  );
};

var Tab = function (_a) {
  var content = _a.content;
  return React.createElement(
    "div",
    { className: "tab-root" },
    React.createElement("div", null, content),
  );
};
var Tabs = function (_a) {
  var tabs = _a.tabs,
    widthFull = _a.widthFull;
  var _b = React.useState(0),
    activeTab = _b[0],
    setActiveTab = _b[1];
  var tabItemGroupRef = React.useRef(null);
  var handleTabClick = function (index) {
    if (!tabItemGroupRef.current) {
      return;
    }
    var tabItems = tabItemGroupRef.current.children;
    if (!tabItems || index >= tabItems.length) {
      return;
    }
    var activeTabItem = tabItems[index];
    if (!activeTabItem) {
      return;
    }
    var activeTabItemWidth = activeTabItem.getBoundingClientRect().width;
    var scrollLeft = tabItemGroupRef.current.scrollLeft;
    var activeTabItemOffsetLeft = activeTabItem.getBoundingClientRect().left;
    var centerScroll =
      activeTabItemOffsetLeft -
      (tabItemGroupRef.current.clientWidth - activeTabItemWidth) / 2;
    tabItemGroupRef.current.scrollTo({
      left: centerScroll + scrollLeft,
      behavior: "smooth",
    });
  };
  var customizeWidthFull = function (widthFull) {
    if (widthFull === void 0) {
      widthFull = false;
    }
    if (widthFull) {
      return {
        width: "100%",
      };
    }
  };
  return React.createElement(
    "div",
    { className: "tab-root" },
    React.createElement(
      "div",
      { className: "tab-item-group", ref: tabItemGroupRef },
      tabs.map(function (tab, index) {
        return React.createElement(
          "button",
          {
            style: customizeWidthFull(widthFull),
            className: "tab-item ".concat(
              index === activeTab && "tab-item-active",
            ),
            key: index,
            onClick: function () {
              setActiveTab(index);
              handleTabClick(index);
            },
          },
          tab.label,
        );
      }),
    ),
    React.createElement(
      "div",
      { className: "tab-content" },
      tabs[activeTab] &&
        React.createElement(Tab, { content: tabs[activeTab].content }),
    ),
  );
};

var TableList = function (_a) {
  var columns = _a.columns,
    data = _a.data,
    size = _a.size;
  var _b = React.useState(false),
    isOverflowed = _b[0],
    setIsOverflowed = _b[1];
  var tableListRef = React.useRef(null);
  React.useEffect(function () {
    var checkOverflow = function () {
      var tableListElement = tableListRef.current;
      if (tableListElement) {
        setIsOverflowed(
          tableListElement.scrollWidth > tableListElement.clientWidth,
        );
      }
    };
    var resizeObserver = new ResizeObserver(function () {
      checkOverflow();
    });
    var tableListElement = tableListRef.current;
    if (tableListElement) {
      resizeObserver.observe(tableListElement);
      checkOverflow();
    }
    return function () {
      if (tableListElement) {
        resizeObserver.unobserve(tableListElement);
      }
    };
  }, []);
  var transposedData = columns.map(function (_, columnIndex) {
    return data.map(function (row) {
      return row[columnIndex];
    });
  });
  return React.createElement(
    "div",
    {
      className: "table-list-root ".concat(
        isOverflowed ? "overflow-ativo" : "",
      ),
      ref: tableListRef,
    },
    React.createElement(
      "div",
      { className: "table" },
      React.createElement(
        "div",
        { className: "table-container" },
        columns.map(function (column, columnIndex) {
          return React.createElement(
            "div",
            { className: "th", key: columnIndex },
            column,
          );
        }),
      ),
      React.createElement(
        "div",
        { className: "table-container" },
        transposedData.map(function (column, columnIndex) {
          return React.createElement(
            "div",
            { key: columnIndex, className: "table-column" },
            column.map(function (cell, cellIndex) {
              return React.createElement(
                "div",
                { className: "td ".concat(size, " border"), key: cellIndex },
                cell,
              );
            }),
          );
        }),
      ),
    ),
  );
};

function Tag(props) {
  var _a = React.useState(false),
    closed = _a[0],
    setClosed = _a[1];
  var handleCloseTag = function () {
    setClosed(true);
    if (props.onClose) {
      props.onClose();
    }
  };
  return React.createElement(
    React.Fragment,
    null,
    !closed &&
      React.createElement(
        "div",
        { className: "tag-root ".concat(props.variant) },
        props.content,
        React.createElement(
          "span",
          null,
          React.createElement(ButtonIcon, {
            buttonType: "plain",
            size: "sm",
            typeIcon: "close",
            variant: props.variant === "secondary" ? "primary" : "on-color",
            onClick: handleCloseTag,
          }),
        ),
      ),
  );
}

// Tooltip.tsx
var Tooltip = function (_a) {
  var text = _a.text,
    children = _a.children,
    direction = _a.direction;
  var _b = React.useState(false),
    isVisible = _b[0],
    setIsVisible = _b[1];
  var handleMouseEnter = function () {
    setIsVisible(true);
  };
  var handleMouseLeave = function () {
    setIsVisible(false);
  };
  return React.createElement(
    "div",
    {
      className: "tooltip-root ".concat(direction),
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
    },
    children,
    isVisible &&
      React.createElement(
        "div",
        { className: "tooltip-container ".concat(direction) },
        React.createElement("div", {
          className: "tooltip-icon ".concat(direction),
        }),
        React.createElement("p", null, text),
      ),
  );
};

exports.AppShell = AppShell;
exports.Aside = Aside;
exports.AsideContent = AsideContent;
exports.AsideFooter = AsideFooter;
exports.Avatar = Avatar;
exports.Badge = Badge;
exports.Brand = Brand;
exports.Breadcrumb = Breadcrumb;
exports.Button = Button;
exports.ButtonGroup = ButtonGroup;
exports.ButtonIcon = ButtonIcon;
exports.Card = Card;
exports.CardContent = CardContent;
exports.CardDropdown = CardDropdown;
exports.CardFooter = CardFooter;
exports.CardHeader = CardHeader;
exports.CardImage = CardImage;
exports.ContentModal = ContentModal;
exports.DataPicker = DataPicker;
exports.DataTable = DataTable;
exports.DescriptionList = DescriptionList;
exports.Dropdown = Dropdown;
exports.DropdownItem = DropdownItem;
exports.DropdownTitle = DropdownTitle;
exports.EmptyState = EmptyState;
exports.FileUploader = FileUploader;
exports.FooterModal = FooterModal;
exports.Header = Header;
exports.HeaderProfile = HeaderProfile;
exports.Icon = Icon;
exports.Image = Image;
exports.ImageUploader = ImageUploader;
exports.Input = Input;
exports.InputCheckbox = InputCheckbox;
exports.InputNumber = InputNumber;
exports.InputRadioButton = InputRadioButton;
exports.InputSearch = InputSearch;
exports.InputSelect = InputSelect;
exports.InputTextArea = TextArea;
exports.InputTime = InputTime;
exports.Layout = Layout;
exports.Link = Link;
exports.Loading = Loading;
exports.Modal = Modal;
exports.Notification = Notification;
exports.Page = Page;
exports.Pagination = Pagination;
exports.Progress = Progress;
exports.ProgressIndicator = ProgressIndicator;
exports.SaveBar = SaveBar;
exports.SavebarTrigger = SavebarTrigger;
exports.SideBar = Sidebar;
exports.SidebarItem = SidebarItem;
exports.SidebarSubItem = SidebarSubItem;
exports.SidebarTitle = SidebarTitle;
exports.Skeleton = Skeleton;
exports.Slider = Slider;
exports.Switch = Switch;
exports.Tab = Tabs;
exports.TableList = TableList;
exports.Tag = Tag;
exports.Tooltip = Tooltip;
