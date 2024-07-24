import "../../styles.scss";
import { Card, CardContent, CardFooter, CardHeader, CardImage } from "./Card";
import Icon from "../Icon/Icon";
import ButtonGroup from "../ButtonGroup/ButtonGroup";
import { Title, Subtitle, Primary, Controls, Stories } from "@storybook/blocks";
var meta = {
    title: "Components/Card",
    component: Card,
    parameters: {
        layout: "centered",
        docs: {
            page: function () { return (<>
          <Title />
          <Subtitle>Component</Subtitle>
          <p>
            The <strong>Cards</strong> are used to group similar content and
            tasks. They help you read and do things.
          </p>
          <Primary />
          <Controls />
          <Stories />
        </>); },
        },
    },
    argTypes: {
        image: {
            description: "The image section of the card, accepts a React node.",
            control: { type: "object" },
            table: {
                category: "Content",
            },
        },
        header: {
            description: "The header section of the card, accepts a React node.",
            control: { type: "object" },
            table: {
                category: "Content",
            },
        },
        title: {
            description: "The title to be displayed in the card header.",
            control: { type: "text" },
            defaultValue: "Title",
            table: {
                category: "Content",
            },
        },
        description: {
            description: "The description to be displayed in the card header.",
            control: { type: "text" },
            defaultValue: "Description",
            table: {
                category: "Content",
            },
        },
        content: {
            description: "The content section of the card, accepts a React node.",
            control: { type: "object" },
            table: {
                category: "Content",
            },
        },
        footer: {
            description: "The footer section of the card, accepts a React node.",
            control: { type: "object" },
            table: {
                category: "Content",
            },
        },
    },
};
export default meta;
var Template = function (args) {
    var _a, _b, _c;
    return (<div style={{ width: "320px" }}>
      <Card header={(_a = args.header) !== null && _a !== void 0 ? _a : (<CardHeader title={args.title} description={args.description}/>)} content={(_b = args.content) !== null && _b !== void 0 ? _b : (<CardContent>
              <div className="slot">
                <Icon icon="refresh" size="md"/>
                Slot Content
              </div>
            </CardContent>)} footer={(_c = args.footer) !== null && _c !== void 0 ? _c : (<CardFooter>
              <div style={{ width: "min-content" }}>
                <ButtonGroup direction="row" variantFirstButton="primary" variantSecondButton="secondary" contentFirstButton="Button" contentSecondButton="Button"/>
              </div>
            </CardFooter>)}/>
    </div>);
};
export var Default = Template.bind({});
Default.args = {
    title: "Title",
    description: "Description",
};
var Template2 = function (args) {
    var _a, _b, _c, _d;
    return (<div style={{ width: "320px" }}>
      <Card image={(_a = args.image) !== null && _a !== void 0 ? _a : (<CardImage>
              <img src="https://picsum.photos/1200" alt="Card Image" height={200}/>
            </CardImage>)} header={(_b = args.header) !== null && _b !== void 0 ? _b : (<CardHeader title={args.title} description={args.description}/>)} content={(_c = args.content) !== null && _c !== void 0 ? _c : (<CardContent>
              <div className="slot">
                <Icon icon="refresh" size="md"/>
                Slot Content
              </div>
            </CardContent>)} footer={(_d = args.footer) !== null && _d !== void 0 ? _d : (<CardFooter>
              <div style={{ width: "min-content" }}>
                <ButtonGroup direction="row" variantFirstButton="primary" variantSecondButton="secondary" contentFirstButton="Button" contentSecondButton="Button"/>
              </div>
            </CardFooter>)}/>
    </div>);
};
export var WithImage = Template2.bind({});
WithImage.args = {
    title: "Title",
    description: "Description",
};
