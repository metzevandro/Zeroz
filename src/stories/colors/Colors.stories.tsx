import React, { useRef } from "react";
import "./Colors.scss";
import "../../styles.scss";
import Icon from "../../components/Icon/Icon";
import Image from "../../components/Image/Image";

// Defina um tipo para as props do componente Colors, mesmo que vazio
interface ColorsProps {}

export const Colors: React.FC<ColorsProps> = () => {
  const introRef = useRef<HTMLDivElement>(null);
  const anatomyRef = useRef<HTMLDivElement>(null);
  const implementColorRef = useRef<HTMLDivElement>(null);
  const themesRef = useRef<HTMLDivElement>(null);
  const tokensRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
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
          <li onClick={() => scrollToSection(introRef)}>
            <Icon icon="subdirectory_arrow_right" size="sm" />
            <h4>Introduction</h4>
          </li>
          <li onClick={() => scrollToSection(anatomyRef)}>
            <Icon icon="subdirectory_arrow_right" size="sm" />
            <h4>Color anatomy</h4>
          </li>
          <li onClick={() => scrollToSection(implementColorRef)}>
            <Icon icon="subdirectory_arrow_right" size="sm" />
            <h4>Implementing color</h4>
          </li>
          <li onClick={() => scrollToSection(themesRef)}>
            <Icon icon="subdirectory_arrow_right" size="sm" />
            <h4>Themes</h4>
          </li>
          <li onClick={() => scrollToSection(tokensRef)}>
            <Icon icon="subdirectory_arrow_right" size="sm" />
            <h4>Tokens</h4>
          </li>
        </ul>
      </header>
      <section ref={introRef}>
        <h2>Introduction</h2>
        <p>
          The application of the color palette brings a unified and recognizable
          consistency to the range of products and digital interfaces. This
          consistency is based on a well-defined set of rules on how to work
          with the ZeroZ component library in the context of dark and light
          themes.
        </p>
        <Image src="/colors.jpeg" />
      </section>
      <section ref={anatomyRef}>
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
      </section>
      <section ref={implementColorRef}>
        <h2>Implementing color</h2>
        {/* Conteúdo da seção */}
      </section>
      <section ref={themesRef}>
        <h2>Themes</h2>
        {/* Conteúdo da seção */}
      </section>
      <section ref={tokensRef}>
        <h2>Tokens</h2>
        {/* Conteúdo da seção */}
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
