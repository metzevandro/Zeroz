import React from "react";
import "./Card.scss";
interface CardProps {
    content: React.ReactNode;
    footer?: React.ReactNode;
    image?: React.ReactNode;
    header?: React.ReactNode;
}
export declare function Card(props: CardProps): React.JSX.Element;
export declare function CardImage(props: {
    children: React.ReactNode;
}): React.JSX.Element;
interface CardHeaderProps {
    title: string;
    description: string;
}
export declare function CardHeader(props: CardHeaderProps & {
    children?: React.ReactNode;
}): React.JSX.Element;
export declare function CardContent(props: {
    children: React.ReactNode;
}): React.JSX.Element;
export declare function CardFooter(props: {
    children: React.ReactNode;
}): React.JSX.Element;
export default Card;
