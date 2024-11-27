import React, { useRef } from "react";
import "./Colors.scss";
import "../../styles.scss";
import Icon from "../../components/Icon/Icon";
import Image from "../../components/Image/Image";
import DescriptionList from "../../components/DescriptionList/DescriptionList";
import Card, { CardContent, CardHeader } from "../../components/Card/Card";

interface ColorsProps {}

export const Colors: React.FC<ColorsProps> = () => {
  const data = [
    {
      title: "Value",
      description:
        "The value is the unique visual attribute (hex code, rgba value) assigned to a token through the use of themes.",
    },
    {
      title: "Primitive Token",
      description:
        "A primitive token is the pure definition of a color. For example, $p-color-purple-400, $p-color-red-100, $p-color-blue-600.",
    },
    {
      title: "Semantic Token",
      description:
        "A semantic token is a simplified representation of the primitive token, in a more abstract way. For example, $--s-color-fill-success is the same as $p-color-green-600.",
    },
    {
      title: "Theme",
      description:
        "A theme is a collection of colors designed to create a specific aesthetic. Themes control the color value assigned to a token. The themes support both Dark and White mode, adjusting color palettes for optimal contrast and readability based on the selected mode.",
    },
  ];

  const colorsZeroz = [
    { hex: "var(--s-color-fill-default)" },
    { hex: "var(--s-color-fill-default-hover)" },
    { hex: "var(--s-color-fill-default-light)" },
    { hex: "var(--s-color-fill-disable)" },
    { hex: "var(--s-color-fill-highlight)" },
    { hex: "var(--s-color-fill-highlight-hover)" },
    { hex: "var(--s-color-fill-highlight-light)" },
    { hex: "var(--s-color-fill-success)" },
    { hex: "var(--s-color-fill-success-hover)" },
    { hex: "var(--s-color-fill-success-light)" },
    { hex: "var(--s-color-fill-warning)" },
    { hex: "var(--s-color-fill-warning-hover)" },
    { hex: "var(--s-color-fill-warning-light)" },
  ];

  const colorsCharts = [
    { hex: "var(--s-color-chart-1)" },
    { hex: "var(--s-color-chart-2)" },
    { hex: "var(--s-color-chart-3)" },
    { hex: "var(--s-color-chart-4)" },
    { hex: "var(--s-color-chart-5)" },
    { hex: "var(--s-color-chart-6)" },
    { hex: "var(--s-color-chart-7)" },
    { hex: "var(--s-color-chart-8)" },
    { hex: "var(--s-color-chart-9)" },
    { hex: "var(--s-color-chart-10)" },
  ];

  const ColorSquare: React.FC<{ color: string }> = ({ color }) => {
    return <div className="color-square" style={{ backgroundColor: color }} />;
  };

  return (
    <div className="colors">
      <header>
        <h1>Colors</h1>
        <p>
          Maintaining consistent and engaging digital interfaces across all
          platforms, whether applications or experiences, requires extended
          guidance on the use of colors. The following concepts provide the
          foundation as we strive to achieve balance and harmony through user
          interface design.
        </p>
        <ul>
          <li>
            <a href="#introduction" target="_self">
              <Icon icon="subdirectory_arrow_right" size="sm" />
              <h4>Introduction</h4>
            </a>
          </li>
          <li>
            <a href="#color-anatomy" target="_self">
              <Icon icon="subdirectory_arrow_right" size="sm" />
              <h4>Color anatomy</h4>
            </a>
          </li>
          <li>
            <a href="#chart-colors" target="_self">
              <Icon icon="subdirectory_arrow_right" size="sm" />
              <h4>Chart Colors</h4>
            </a>
          </li>
          <li>
            <a href="#implementing-color" target="_self">
              <Icon icon="subdirectory_arrow_right" size="sm" />
              <h4>Implementing color</h4>
            </a>
          </li>
          <li>
            <a href="#themes" target="_self">
              <Icon icon="subdirectory_arrow_right" size="sm" />
              <h4>Themes</h4>
            </a>
          </li>
        </ul>
      </header>
      <section id="introduction">
        <h2>Introduction</h2>
        <p>
          The application of the color palette brings a unified and recognizable
          consistency to the range of products and digital interfaces. This
          consistency is based on a well-defined set of rules on how to work
          with the ZeroZ component library in the context of dark and light
          themes.
        </p>
        <Image src="/colors.jpeg" width="auto" height="auto" />
      </section>
      <section id="color-anatomy">
        <h2>Color anatomy</h2>
        <p>
          The color palettes of the Zeroz design system are primarily derived
          from purple. The family of neutral gray tones is dominant, used to
          create distinct areas through subtle variations in hue, organizing
          content clearly. Other colors, such as green and red, are applied
          carefully and with specific purpose, indicating success or error while
          keeping the focus on the essential elements of the interface.
          Additionally, there is also a secondary color palette called
          WhiteLabel, derived from blue. The system also offers customization
          options, allowing for the creation of custom color palettes.
        </p>
        <div className="colors-list">
          {colorsZeroz.map((colorItem, index) => (
            <div key={index} className="color-item">
              <ColorSquare color={colorItem.hex} />
            </div>
          ))}
        </div>
      </section>
      <section id="chart-colors">
        <h2>Chart Colors</h2>
        <p>
          The ZeroZ design system includes a dedicated set of colors for
          creating clear and visually appealing charts. These colors are
          designed to maintain consistency and accessibility while offering
          flexibility for various types of data visualizations.
        </p>
        <p>
          The chart color palette consists of 10 predefined colors, which can be
          applied by referencing their corresponding CSS variables. These
          variables are named sequentially, ranging from{" "}
          <code>--s-color-chart-1</code> to <code>--s-color-chart-10</code>.
          This allows for easy implementation and ensures harmony across
          different chart components.
        </p>
        <p>Below is an example about these colors:</p>
        <div className="colors-list">
          {colorsCharts.map((colorItem, index) => (
            <div key={index} className="color-item">
              <ColorSquare color={colorItem.hex} />
            </div>
          ))}
        </div>
      </section>

      <section id="implementing-color">
        <h2>Implementing color</h2>
        <p>
          Zeroz uses tokens and themes to manage color. Tokens are role-based,
          and themes specify the color values that serve those roles in the UI.
        </p>
        <div>
          <DescriptionList direction="row" items={data} />
        </div>
      </section>
      <section id="themes">
        <h2>Themes</h2>
        <p>
          In ZeroZ, we provide two predefined themes: <strong>ZeroZ</strong> and{" "}
          <strong>WhiteLabel</strong>. Each theme is crafted to suit different
          visual needs and branding strategies, allowing you to choose the one
          that best fits your project.
        </p>
        <div className="themes">
          <Card
            header={<CardHeader title="ZeroZ" description="" />}
            content={
              <CardContent>
                <Image
                  src="/ZeroZ.png"
                  alt="ZeroZ Theme"
                  style={{ width: "100%" }}
                />
              </CardContent>
            }
          />

          <Card
            header={<CardHeader title="WhiteLabel" description="" />}
            content={
              <CardContent>
                <Image
                  src="/WhiteLabel.png"
                  alt="WhiteLabel Theme"
                  style={{ width: "100%" }}
                />
              </CardContent>
            }
          />
        </div>

        <p>
          In addition to the predefined themes, you can create your own custom
          theme! To do this, simply configure the following CSS variables in the{" "}
          <code>:root</code> of your stylesheet. The variables provide
          flexibility in defining the color scheme and visual style of your
          theme. Below is an example of how to set up the color variables for
          your theme:
        </p>

        <pre>
          {`:root {
    --b-color-darkness: #123123;  
    --b-color-dark: #123123;      
    --b-color-medium: #123123;    
    --b-color-base: #123123;     
    --b-color-soft: #123123;    
    --b-color-light: #123123;   
    --b-color-lightness: #123123;
  }`}
        </pre>
      </section>
    </div>
  );
};

export default {
  title: "Getting Started/Colors",
  tags: ["!autodocs"],
  parameters: {
    layout: "fullscreen",
    controls: { disabled: true },
  },
};

const Template = (args: ColorsProps) => <Colors {...args} />;
