"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.withFilters = exports.withSelectableAndWithExpandable = exports.withExpandable = exports.withSelectable = exports.Default = void 0;
var react_1 = __importDefault(require("react"));
var DataTable_1 = __importDefault(require("./DataTable"));
require("../../styles.scss");
var blocks_1 = require("@storybook/blocks");
var meta = {
    title: "Components/Data Table",
    component: DataTable_1.default,
    parameters: {
        layout: "padded",
        docs: {
            page: function () { return (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(blocks_1.Title, null),
                react_1.default.createElement(blocks_1.Subtitle, null, "Component"),
                react_1.default.createElement("p", null,
                    "The ",
                    react_1.default.createElement("strong", null, "Data table"),
                    " help organize and display information in an easy-to-understand way. You can use filters and arrange the content to analyze and take action."),
                react_1.default.createElement(blocks_1.Primary, null),
                react_1.default.createElement(blocks_1.Controls, null),
                react_1.default.createElement(blocks_1.Stories, null))); },
        },
    },
    argTypes: {
        expandable: {
            description: "Enables expandable rows in the data table.",
            control: { type: "boolean" },
            defaultValue: false,
            table: {
                category: "Behavior",
            },
        },
        selectable: {
            description: "Enables selectable rows in the data table.",
            control: { type: "boolean" },
            defaultValue: false,
            table: {
                category: "Behavior",
            },
        },
        itemPerPage: {
            description: "Number of items to be displayed per page.",
            control: { type: "number" },
            defaultValue: 4,
            table: {
                category: "Pagination",
            },
        },
        pagesText: {
            description: "Text to be displayed for pagination.",
            control: { type: "text" },
            defaultValue: "Page",
            table: {
                category: "Pagination",
            },
        },
        inputPlaceholder: {
            description: "Placeholder text for the search input.",
            control: { type: "text" },
            defaultValue: "Search",
            table: {
                category: "Search",
            },
        },
        typeIconFirstButton: {
            description: "Icon type for the first button.",
            control: { type: "text" },
            defaultValue: "order",
            table: {
                category: "Buttons",
            },
        },
        typeIconSecondButton: {
            description: "Icon type for the second button.",
            control: { type: "text" },
            defaultValue: "filter_alt",
            table: {
                category: "Buttons",
            },
        },
        labelFirstButton: {
            description: "Label for the first button.",
            control: { type: "text" },
            defaultValue: "Order By",
            table: {
                category: "Buttons",
            },
        },
        labelSecondButton: {
            description: "Label for the second button.",
            control: { type: "text" },
            defaultValue: "Filter By",
            table: {
                category: "Buttons",
            },
        },
        onClickFirstButton: {
            description: "Click handler for the first button.",
            action: "clicked first button",
            table: {
                category: "Events",
            },
        },
        onClickSecondButton: {
            description: "Click handler for the second button.",
            action: "clicked second button",
            table: {
                category: "Events",
            },
        },
        selectableLabelFirstButton: {
            description: "Label for the first button when selectable is enabled.",
            control: { type: "text" },
            defaultValue: "Select",
            table: {
                category: "Selectable",
            },
        },
        selectableLabelSecondButton: {
            description: "Label for the second button when selectable is enabled.",
            control: { type: "text" },
            defaultValue: "Delete",
            table: {
                category: "Selectable",
            },
        },
        selectableOnClickFirstButton: {
            description: "Click handler for the first button when selectable is enabled.",
            action: "clicked selectable first button",
            table: {
                category: "Events",
            },
        },
        selectableOnClickSecondButton: {
            description: "Click handler for the second button when selectable is enabled.",
            action: "clicked selectable second button",
            table: {
                category: "Events",
            },
        },
        firstButtonLabelAside: {
            description: "Label for the first button in the aside section.",
            control: { type: "text" },
            defaultValue: "Apply",
            table: {
                category: "Aside",
            },
        },
        secondButtonLabelAside: {
            description: "Label for the second button in the aside section.",
            control: { type: "text" },
            defaultValue: "Cancel",
            table: {
                category: "Aside",
            },
        },
        titleNoDataMessage: {
            description: "Title for the no data message.",
            control: { type: "text" },
            defaultValue: "No Data Available",
            table: {
                category: "Messages",
            },
        },
        labelButtonNoDataFilteredMessage: {
            description: "Label for the button in the no data filtered message.",
            control: { type: "text" },
            defaultValue: "Remove filters",
            table: {
                category: "Messages",
            },
        },
        descriptionNoDataMessage: {
            description: "Description for the no data message.",
            control: { type: "text" },
            defaultValue: "This message indicates that there is currently no data present in the table. Please check back later or try refreshing the page.",
            table: {
                category: "Messages",
            },
        },
        asideTitle: {
            description: "Title for the aside section.",
            control: { type: "text" },
            defaultValue: "Filters",
            table: {
                category: "Aside",
            },
        },
        selectableIconFirstButton: {
            description: "Icon type for the first button when selectable is enabled.",
            control: { type: "text" },
            defaultValue: "select",
            table: {
                category: "Selectable",
            },
        },
        selectableIconSecondButton: {
            description: "Icon type for the second button when selectable is enabled.",
            control: { type: "text" },
            defaultValue: "delete",
            table: {
                category: "Selectable",
            },
        },
        filters: {
            description: "Available filters for the data table.",
            control: { type: "object" },
            defaultValue: {},
            table: {
                category: "Filters",
            },
        },
        columns: {
            description: "Columns to be displayed in the data table.",
            control: { type: "object" },
            defaultValue: ["Name", "Age", "Role", "Experience", "Company"],
            table: {
                category: "Data",
            },
        },
        data: {
            description: "Data to be displayed in the data table.",
            control: { type: "object" },
            defaultValue: [
                {
                    id: "1",
                    Name: "David",
                    Age: "25",
                    Role: "Developer",
                    Experience: "4 years",
                    Company: "Google",
                },
                {
                    id: "2",
                    Name: "Maria",
                    Age: "30",
                    Role: "Designer",
                    Experience: "1 year",
                    Company: "Microsoft",
                },
                {
                    id: "3",
                    Name: "Carlos",
                    Age: "30",
                    Role: "Data Analyst",
                    Experience: "1 month",
                    Company: "Netflix",
                },
                {
                    id: "4",
                    Name: "Roberto",
                    Age: "21",
                    Role: "Product Owner",
                    Experience: "2 years",
                    Company: "Instagram",
                },
                {
                    id: "5",
                    Name: "Juliana",
                    Age: "27",
                    Role: "Software Engineer",
                    Experience: "3 years",
                    Company: "Amazon",
                },
                {
                    id: "6",
                    Name: "Ana",
                    Age: "29",
                    Role: "UX Designer",
                    Experience: "2 years",
                    Company: "Apple",
                },
                {
                    id: "7",
                    Name: "Pedro",
                    Age: "26",
                    Role: "Data Scientist",
                    Experience: "6 months",
                    Company: "Facebook",
                },
                {
                    id: "8",
                    Name: "Mariana",
                    Age: "24",
                    Role: "Project Manager",
                    Experience: "1 year",
                    Company: "Twitter",
                },
            ],
            table: {
                category: "Data",
            },
        },
        expandedData: {
            description: "Expanded data to be displayed in the data table.",
            control: { type: "object" },
            defaultValue: [
                { id: "1", content: "First Content" },
                { id: "2", content: "Second Content" },
                { id: "3", content: "Third Content" },
                { id: "4", content: "Fourth Content" },
                { id: "5", content: "Fifth Content" },
                { id: "6", content: "Sixth Content" },
                { id: "7", content: "Seventh Content" },
                { id: "8", content: "Eighth Content" },
            ],
            table: {
                category: "Data",
            },
        },
        descriptionNoDataFilteredMessage: {
            description: "Description for the no data filtered message.",
            control: { type: "text" },
            defaultValue: "This option does not exist in your store, remove the filter and try again",
            table: {
                category: "Messages",
            },
        },
    },
};
exports.default = meta;
var Template = function (args) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(DataTable_1.default, { pagesText: args.pagesText, titleNoDataFilteredMessage: args.titleNoDataFilteredMessage, labelButtonNoDataFilteredMessage: args.labelButtonNoDataFilteredMessage, descriptionNoDataFilteredMessage: args.descriptionNoDataFilteredMessage, filters: args.filters, firstButtonLabelAside: args.firstButtonLabelAside, secondButtonLabelAside: args.secondButtonLabelAside, typeIconSecondButton: args.typeIconSecondButton, selectableLabelSecondButton: args.selectableLabelSecondButton, labelSecondButton: args.labelSecondButton, inputPlaceholder: args.inputPlaceholder, itemPerPage: args.itemPerPage, columns: args.columns, data: args.data, selectable: args.selectable, expandable: args.expandable, expandedData: args.expandedData, descriptionNoDataMessage: args.descriptionNoDataMessage, titleNoDataMessage: args.titleNoDataMessage, asideTitle: args.asideTitle, selectableIconSecondButton: args.selectableIconSecondButton })));
};
var columns = ["Name", "Age", "Role", "Experience", "Company"];
var data = [
    {
        id: "1",
        Name: "David",
        Age: "25",
        Role: "Developer",
        Experience: "4 years",
        Company: "Google",
    },
    {
        id: "2",
        Name: "Maria",
        Age: "30",
        Role: "Designer",
        Experience: "1 year",
        Company: "Microsoft",
    },
    {
        id: "3",
        Name: "Carlos",
        Age: "30",
        Role: "Data Analyst",
        Experience: "1 month",
        Company: "Netflix",
    },
    {
        id: "4",
        Name: "Roberto",
        Age: "21",
        Role: "Product Owner",
        Experience: "2 years",
        Company: "Instagram",
    },
    {
        id: "5",
        Name: "Juliana",
        Age: "27",
        Role: "Software Engineer",
        Experience: "3 years",
        Company: "Amazon",
    },
    {
        id: "6",
        Name: "Ana",
        Age: "29",
        Role: "UX Designer",
        Experience: "2 years",
        Company: "Apple",
    },
    {
        id: "7",
        Name: "Pedro",
        Age: "26",
        Role: "Data Scientist",
        Experience: "6 months",
        Company: "Facebook",
    },
    {
        id: "8",
        Name: "Mariana",
        Age: "24",
        Role: "Project Manager",
        Experience: "1 year",
        Company: "Twitter",
    },
];
var expandedData = [
    {
        id: "1",
        content: "First Content",
    },
    {
        id: "2",
        content: "Second Content",
    },
    {
        id: "3",
        content: "Third Content",
    },
    {
        id: "4",
        content: "Fourth Content",
    },
    {
        id: "5",
        content: "Fifth Content",
    },
    {
        id: "6",
        content: "Sixth Content",
    },
    {
        id: "7",
        content: "Seventh Content",
    },
    {
        id: "8",
        content: "Eighth Content",
    },
];
var availableFilters = {};
exports.Default = Template.bind({});
exports.Default.args = {
    itemPerPage: 4,
    pagesText: "Page",
    columns: columns,
    data: data,
    expandedData: expandedData,
    selectable: false,
    expandable: false,
    inputPlaceholder: "Search",
    labelFirstButton: "Order By",
    labelSecondButton: "Filter By",
    typeIconSecondButton: "filter_alt",
    selectableLabelSecondButton: "Delete",
    selectableIconSecondButton: "delete",
    asideTitle: "Filters",
    firstButtonLabelAside: "Apply",
    secondButtonLabelAside: "Cancel",
    descriptionNoDataFilteredMessage: "This option does not exist in your store, remove the filter and try again.",
    labelButtonNoDataFilteredMessage: "Remove filters",
    titleNoDataFilteredMessage: "Your filter did not return any results.",
};
exports.withSelectable = Template.bind({});
exports.withSelectable.args = {
    itemPerPage: 4,
    pagesText: "Page",
    columns: columns,
    data: data,
    expandedData: expandedData,
    selectable: true,
    expandable: false,
    inputPlaceholder: "Search",
    labelFirstButton: "Order By",
    labelSecondButton: "Filter By",
    typeIconSecondButton: "filter_alt",
    selectableLabelSecondButton: "Delete",
    selectableIconSecondButton: "delete",
    asideTitle: "Filters",
    firstButtonLabelAside: "Apply",
    secondButtonLabelAside: "Cancel",
    descriptionNoDataFilteredMessage: "This option does not exist in your store, remove the filter and try again.",
    labelButtonNoDataFilteredMessage: "Remove filters",
    titleNoDataFilteredMessage: "Your filter did not return any results.",
    titleNoDataMessage: "No Data Available",
    descriptionNoDataMessage: "This message indicates that there is currently no data present in the table. Please check back later or try refreshing the page.",
};
exports.withExpandable = Template.bind({});
exports.withExpandable.args = {
    itemPerPage: 4,
    pagesText: "Page",
    columns: columns,
    data: data,
    expandedData: expandedData,
    selectable: false,
    expandable: true,
    inputPlaceholder: "Search",
    labelFirstButton: "Order By",
    labelSecondButton: "Filter By",
    typeIconSecondButton: "filter_alt",
    selectableLabelSecondButton: "Delete",
    selectableIconSecondButton: "delete",
    asideTitle: "Filters",
    firstButtonLabelAside: "Apply",
    secondButtonLabelAside: "Cancel",
    descriptionNoDataFilteredMessage: "This option does not exist in your store, remove the filter and try again.",
    labelButtonNoDataFilteredMessage: "Remove filters",
    titleNoDataFilteredMessage: "Your filter did not return any results.",
    titleNoDataMessage: "No Data Available",
    descriptionNoDataMessage: "This message indicates that there is currently no data present in the table. Please check back later or try refreshing the page.",
};
exports.withSelectableAndWithExpandable = Template.bind({});
exports.withSelectableAndWithExpandable.args = {
    itemPerPage: 4,
    pagesText: "Page",
    columns: columns,
    data: data,
    expandedData: expandedData,
    selectable: true,
    expandable: true,
    inputPlaceholder: "Search",
    labelFirstButton: "Order By",
    labelSecondButton: "Filter By",
    typeIconSecondButton: "filter_alt",
    selectableLabelSecondButton: "Delete",
    selectableIconSecondButton: "delete",
    asideTitle: "Filters",
    firstButtonLabelAside: "Apply",
    secondButtonLabelAside: "Cancel",
    descriptionNoDataFilteredMessage: "This option does not exist in your store, remove the filter and try again.",
    labelButtonNoDataFilteredMessage: "Remove filters",
    titleNoDataFilteredMessage: "Your filter did not return any results.",
    titleNoDataMessage: "No Data Available",
    descriptionNoDataMessage: "This message indicates that there is currently no data present in the table. Please check back later or try refreshing the page.",
};
exports.withFilters = Template.bind({});
exports.withFilters.args = {
    filters: availableFilters,
    itemPerPage: 4,
    pagesText: "Page",
    columns: columns,
    data: data,
    expandedData: expandedData,
    selectable: true,
    expandable: true,
    inputPlaceholder: "Search",
    labelFirstButton: "Order By",
    labelSecondButton: "Filter By",
    typeIconSecondButton: "filter_alt",
    selectableLabelSecondButton: "Delete",
    selectableIconSecondButton: "delete",
    asideTitle: "Filters",
    firstButtonLabelAside: "Apply",
    secondButtonLabelAside: "Cancel",
    descriptionNoDataFilteredMessage: "This option does not exist in your store, remove the filter and try again.",
    labelButtonNoDataFilteredMessage: "Remove filters",
    titleNoDataFilteredMessage: "Your filter did not return any results.",
    titleNoDataMessage: "No Data Available",
    descriptionNoDataMessage: "This message indicates that there is currently no data present in the table. Please check back later or try refreshing the page.",
};
