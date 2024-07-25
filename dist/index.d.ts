import React, { ImgHTMLAttributes, ButtonHTMLAttributes, InputHTMLAttributes, ReactNode } from 'react';

type AppShellProps = {
    children: React.ReactNode;
};
declare const AppShell: React.NamedExoticComponent<AppShellProps>;

interface AsideProps {
    isOpen: boolean;
    title: string;
    description?: string;
    content?: React.ReactNode;
    footer?: React.ReactNode;
    toggleAside: () => void;
}
declare const Aside: React.FC<AsideProps>;

interface AsideContentProps {
    children: React.ReactNode;
}
declare const AsideContent: React.FC<AsideContentProps>;
interface AsideFooterProps {
    children: React.ReactNode;
}
declare const AsideFooter: React.FC<AsideFooterProps>;

type IconSize = "sm" | "md" | "lg";
interface AvatarProps {
    size: IconSize;
    src?: string;
    skeleton?: boolean;
    letter?: string;
}
declare const Avatar: React.FC<AvatarProps>;

interface BadgeProps {
    label: string;
    type: "default" | "light";
    variant: "default" | "primary" | "success" | "warning";
}
declare const Badge: React.FC<BadgeProps>;

interface BrandProps extends ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    alt?: string;
    size: "sm" | "md" | "lg";
}
declare const Brand: React.FC<BrandProps>;

interface BreadcrumbItem {
    pageName: string;
    href: string;
}
interface BreadcrumbProps {
    items: BreadcrumbItem[];
}
declare const Breadcrumb: React.FC<BreadcrumbProps>;

interface ButtonProps$1 extends ButtonHTMLAttributes<HTMLButtonElement> {
    disabled?: boolean;
    label?: string;
    size: "sm" | "md";
    variant: "primary" | "secondary" | "success" | "warning" | "is-loading";
    typeIcon?: string;
    skeleton?: boolean;
}
declare const Button: React.FC<ButtonProps$1>;

type ButtonVariant = "primary" | "secondary" | "success" | "warning" | "is-loading";
interface ButtonGroupProps {
    disableFirstButton?: boolean;
    disableSecondButton?: boolean;
    direction: "row" | "column";
    variantFirstButton: ButtonVariant;
    variantSecondButton: ButtonVariant;
    contentFirstButton: string;
    contentSecondButton: string;
    typeIconFirstButton?: string;
    typeIconSecondButton?: string;
    onClickFirstButton?: (e: React.MouseEvent) => void;
    onClickSecondButton?: (e: React.MouseEvent) => void;
    skeletonFirstButton?: boolean;
    skeletonSecondButton?: boolean;
}
declare const ButtonGroup: React.FC<ButtonGroupProps>;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant: "primary" | "secondary" | "success" | "warning" | "on-color";
    disabled?: boolean;
    buttonType: "plain" | "default";
    size: "sm" | "md";
    typeIcon: string;
    skeleton?: boolean;
}
declare const ButtonIcon: React.FC<ButtonProps>;

interface CardProps {
    content: React.ReactNode;
    footer?: React.ReactNode;
    image?: React.ReactNode;
    header?: React.ReactNode;
}
declare function Card(props: CardProps): React.JSX.Element;
declare function CardImage(props: {
    children: React.ReactNode;
}): React.JSX.Element;
interface CardHeaderProps {
    title: string;
    description: string;
}
declare function CardHeader(props: CardHeaderProps & {
    children?: React.ReactNode;
}): React.JSX.Element;
declare function CardContent(props: {
    children: React.ReactNode;
}): React.JSX.Element;
declare function CardFooter(props: {
    children: React.ReactNode;
}): React.JSX.Element;

interface CardDropdownProps {
    title: string;
    content?: React.ReactNode;
    description?: string;
    footer?: React.ReactNode;
}
declare const CardDropdown: React.FC<CardDropdownProps>;

interface DataPickerProps {
    label: string;
    placeholder: string;
    disabled?: boolean;
    onDateChange: (date: Date) => void;
    date: string;
}
declare const DataPicker: React.FC<DataPickerProps>;

interface DataTableProps {
    columns: string[];
    data: {
        id: string;
        [key: string]: any;
    }[];
    expandedData?: Array<{
        id: string;
        [key: string]: React.ReactNode;
    }>;
    selectable?: boolean;
    expandable?: boolean;
    itemPerPage: number;
    pagesText: string;
    inputPlaceholder: string;
    typeIconSecondButton: string;
    labelSecondButton: string;
    selectableLabelSecondButton: string;
    selectableIconSecondButton: string;
    filters?: {
        [key: string]: string[];
    };
    asideTitle: string;
    firstButtonLabelAside: string;
    secondButtonLabelAside: string;
    titleNoDataMessage: string;
    descriptionNoDataMessage: string;
    titleNoDataFilteredMessage: string;
    labelButtonNoDataFilteredMessage: string;
    descriptionNoDataFilteredMessage: string;
}
declare const DataTable: React.FC<DataTableProps>;

interface DescriptionItem {
    title: string;
    description?: string;
}
interface DescriptionListProps {
    items: DescriptionItem[];
    direction: "row" | "column";
}
declare const DescriptionList: React.FC<DescriptionListProps>;

interface DropdownProps {
    children: React.ReactNode;
    dropdown: boolean;
}
declare const Dropdown: React.FC<DropdownProps>;
interface DropdownTitleProps {
    content: string;
}
declare const DropdownTitle: React.FC<DropdownTitleProps>;
interface DropdownItemProps {
    typeIcon?: string | undefined;
    content: string;
    onClick?: () => void;
}
declare const DropdownItem: React.FC<DropdownItemProps>;

interface EmptyStateProps {
    title: string;
    description: string;
    icon: string;
    buttonContentPrimary?: string;
    buttonContentSecondary?: string;
    onClickActionPrimary?: () => void;
    onClickActionSecondary?: () => void;
}
declare const EmptyState: React.FC<EmptyStateProps>;

interface FileUploaderProps {
    title: string;
    description?: string;
    multiple?: boolean;
    disabled?: boolean | undefined;
    maxFileSize?: number;
    buttonLabel: string;
    typeIconButton: string;
    onChange: (files: FileList | null) => void;
    value?: FileList | null;
}
declare const FileUploader: React.FC<FileUploaderProps>;

interface HeaderProps {
    children: React.ReactNode;
    breadcrumb: React.ReactNode;
    onClick: () => void;
    skeleton?: boolean;
}
declare const Header: React.FC<HeaderProps>;
interface HeaderProfileProps {
    name: string;
    children: React.ReactNode;
    avatar_src?: string;
    skeleton?: boolean;
    letter?: string;
}
declare const HeaderProfile: React.FC<HeaderProfileProps>;

interface IconProps {
    size: "sm" | "md" | "lg";
    icon: string | undefined;
    fill?: boolean;
}
declare const Icon: React.FC<IconProps>;

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    alt?: string;
    width?: string;
    height?: string;
    skeleton?: boolean;
}
declare const Image: React.FC<ImageProps>;

interface ImageUploaderProps {
    proportion: "9/16" | "16/9" | "1/1";
    description?: string;
    title?: string;
    disabled?: boolean;
    multiple?: boolean;
    maxFileSize?: number;
    labelDropzone: string;
    iconDropzone: string;
    onChange: (files: FileList | null) => void;
    value?: FileList | null;
}
declare const ImageUploader: React.FC<ImageUploaderProps>;

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    typeIcon?: string;
    fillIcon?: boolean;
    label?: string;
    error?: boolean;
    disabled?: boolean;
    textError?: string;
    value?: string;
}
declare const Input: React.FC<InputProps>;

interface CheckboxProps {
    modelValue?: any;
    value?: any;
    label?: string;
    id?: string;
    name?: string;
    required?: boolean;
    indeterminate?: boolean;
    noEvents?: boolean;
    disabled?: boolean;
    onUpdate?: (val: any) => void;
}
declare const InputCheckbox: React.FC<CheckboxProps>;

interface InputNumberProps {
    max?: number;
    min?: number;
    placeholder?: string;
    disabled?: boolean;
    label?: string;
    onChange?: (value: string) => void;
    error?: boolean;
    textError?: string;
    value?: string;
}
declare const InputNumber: React.FC<InputNumberProps>;

interface InputRadioButtonProps {
    label?: string;
    disabled?: boolean;
    onChange?: (isChecked: boolean) => void;
    checked?: boolean;
}
declare const InputRadioButton: React.FC<InputRadioButtonProps>;

interface InputSearchProps {
    disabled?: boolean;
    onChange?: (value: string) => void;
    placeholder: string;
}
declare const InputSearch: React.FC<InputSearchProps>;

interface InputSelectProps {
    options: string[];
    disabled?: boolean;
    label?: string;
    error?: boolean;
    errorMessage?: string;
    onChange: (value: string) => void;
    value?: string;
}
declare const InputSelect: React.FC<InputSelectProps>;

interface TextAreaProps {
    placeholder: string;
    label: string;
    disabled?: boolean;
    error?: boolean;
    errorText?: string;
    onChange?: (value: string) => void;
    value?: string;
}
declare const TextArea: React.FC<TextAreaProps>;

interface InputTimeProps {
    label: string;
    placeholder: string;
    disabled?: boolean;
    error?: boolean;
    textError?: string;
    onChange: (value: string) => void;
    value?: string;
}
declare const InputTime: React.FC<InputTimeProps>;

interface LayoutProps {
    children: React.ReactNode;
    columns: "1" | "2 - Symmetric" | "2 - Asymmetric" | "3 - Symmetric";
}
declare const Layout: React.FC<LayoutProps>;

interface LinkProps {
    href?: string;
    content: string;
    disabled?: boolean;
    target?: "_blank" | "_self" | "_parent" | "_top";
}
declare const Link: React.FC<LinkProps>;

interface LoadingProps {
    variant: "default" | "success" | "warning" | "large";
    message?: string;
}
declare const Loading: React.FC<LoadingProps>;

interface ModalProps {
    title: string;
    description: string;
    content?: React.ReactNode;
    dismissible?: boolean;
    hideModal: () => void;
    isOpen: boolean;
    footer?: React.ReactNode;
}
declare const Modal: React.FC<ModalProps>;
interface ContentModalProps {
    children: React.ReactNode;
}
declare const ContentModal: React.FC<ContentModalProps>;
declare const FooterModal: React.FC<ContentModalProps>;

interface NotificationProps {
    icon?: string;
    title: string;
    description?: string;
    variant: "primary" | "secondary" | "warning" | "success";
    type: "float" | "inline";
    isOpen?: boolean;
    dismissible?: boolean;
    withAction?: boolean;
    disableButton?: boolean;
    buttonLabel?: string;
    onClickButton?: () => void;
}
declare const Notification: React.FC<NotificationProps>;

interface PageProps {
    children?: React.ReactNode;
    namePage: string;
    withBackButton?: boolean;
    withActionPrimary?: boolean;
    withActionSecondary?: boolean;
    buttonContentPrimary?: string;
    buttonContentSecondary?: string;
    onClickActionPrimary?: () => void;
    onClickActionSecondary?: () => void;
    onClickBackButton?: () => void;
    iconButtonPrimary?: string;
    iconButtonSecondary?: string;
    skeletonButtonPrimary?: boolean;
    skeletonButtonSecondary?: boolean;
    description?: React.ReactNode;
}
declare const Page: React.FC<PageProps>;

interface PaginationProps {
    variant: "noLabel" | "leftLabel" | "centerLabel";
    disabledLeft?: boolean;
    disabledRight?: boolean;
    onClickLeft?: () => void;
    onClickRight?: () => void;
    label: string;
}
declare const Pagination: React.FC<PaginationProps>;

interface ProgressProps {
    value: number;
    error?: boolean;
    indeterminate?: boolean;
}
declare const Progress: React.FC<ProgressProps>;

interface ProgressIndicatorProps {
    step: string;
    description?: string;
    state: "default" | "current" | "error" | "completed" | "disable";
    direction: "row" | "column";
    onClick?: () => void;
    widthFull?: boolean;
}
declare const ProgressIndicator: React.FC<ProgressIndicatorProps>;

interface SaveBarProps {
    onClickSave: (e: React.MouseEvent) => void;
    onClickCancel: () => void;
    labelSave: string;
    labelCancel: string;
    label: string;
}
declare const SaveBar: React.FC<SaveBarProps>;

interface SavebarTriggerProps {
    children: ReactNode;
    formChanged: boolean;
    handleSubmit: () => void;
    handleCancel: () => void;
    label: string;
    labelSave: string;
    labelCancel: string;
}
declare const SavebarTrigger: React.FC<SavebarTriggerProps>;

type SidebarProps = {
    brand: string;
    children: React.ReactNode;
    toggle: boolean;
    setToggleSidebar: (toggle: boolean) => void;
    brandSize: "sm" | "md" | "lg";
};
declare const Sidebar: React.FC<SidebarProps>;
interface SidebarTitleProps {
    title: string;
}
declare const SidebarTitle: React.FC<SidebarTitleProps>;
interface SidebarItemsProps {
    title: string;
    icon: string;
    fillIcon: boolean;
    children?: React.ReactNode;
    onClick?: () => void;
    isActive?: boolean;
}
declare const SidebarItem: React.FC<SidebarItemsProps>;
interface SidebarSubItemProps {
    title: string;
    onClick?: () => void;
    active: boolean;
}
declare const SidebarSubItem: React.FC<SidebarSubItemProps>;

interface SkeletonProps {
    width: string;
    height: string;
    circle?: boolean;
}
declare function Skeleton(props: SkeletonProps): React.JSX.Element;

interface SliderProps {
    step: number;
    min: number;
    max: number;
    value: string;
    label?: string;
    onChange?: (value: string) => void;
}
declare const Slider: React.FC<SliderProps>;

interface SwitchProps {
    modelValue?: any;
    value?: any;
    label?: string;
    id?: string;
    name?: string;
    required?: boolean;
    noEvents?: boolean;
    disabled?: boolean;
    onUpdate?: (val: any) => void;
}
declare const Switch: React.FC<SwitchProps>;

interface TabProps {
    label?: string;
    content: React.ReactNode;
}
interface TabsProps {
    tabs: TabProps[];
    widthFull?: boolean;
}
declare const Tabs: React.FC<TabsProps>;

interface TableListProps {
    columns: string[];
    data: any[][];
    size: "sm" | "md";
}
declare const TableList: React.FC<TableListProps>;

type typeVariant = "primary" | "secondary" | "success" | "warning";
interface TagProps {
    content: string;
    variant: typeVariant;
    onClose?: () => void;
}
declare function Tag(props: TagProps): React.JSX.Element;

interface TooltipProps {
    text: string;
    children: React.ReactNode;
    direction: "top" | "bottom" | "right" | "left";
}
declare const Tooltip: React.FC<TooltipProps>;

export { AppShell, Aside, AsideContent, AsideFooter, Avatar, Badge, Brand, Breadcrumb, Button, ButtonGroup, ButtonIcon, Card, CardContent, CardDropdown, CardFooter, CardHeader, CardImage, ContentModal, DataPicker, DataTable, DescriptionList, Dropdown, DropdownItem, DropdownTitle, EmptyState, FileUploader, FooterModal, Header, HeaderProfile, Icon, Image, ImageUploader, Input, InputCheckbox, InputNumber, InputRadioButton, InputSearch, InputSelect, TextArea as InputTextArea, InputTime, Layout, Link, Loading, Modal, Notification, Page, Pagination, Progress, ProgressIndicator, SaveBar, SavebarTrigger, Sidebar as SideBar, SidebarItem, SidebarSubItem, SidebarTitle, Skeleton, Slider, Switch, Tabs as Tab, TableList, Tag, Tooltip };
