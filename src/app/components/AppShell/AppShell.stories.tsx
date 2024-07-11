import React, { useState } from "react";
import type { Meta, StoryFn } from "@storybook/react";
import "../../styles.scss";
import { Title, Subtitle, Primary, Controls, Stories } from "@storybook/blocks";

import AppShell from "./AppShell";
import Sidebar, { SidebarTitle, SidebarItem } from "../Sidebar/Sidebar";
import Header, { HeaderProfile } from "../Header/Header";
import DropDownMenu, {
  DropDownMenuItem,
  DropDownMenuTitle,
} from "../DropdownMenu/DropdownMenu";
import Page from "../Page/Page";
import BreadcrumbRoot, { Breadcrumb } from "../Breadcrumb/Breadcrumb";
import Card, { CardContent, CardFooter, CardHeader } from "../Card/Card";
import Image from "../Image/Image";
import Button from "../Button/Button";

const meta: Meta = {
  title: "Templates/AppShell",
  component: AppShell,
  parameters: {
    layout: "fullscreen",
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>Template</Subtitle>
          <p>
            The <strong>AppShell</strong> template serves as the primary outer
            framework for an application, furnishing the fundamental structure
            to develop applications.
          </p>
          <div></div>
          <Primary />
          <Controls />
          <Stories />
        </>
      ),
    },
  },
  tags: ["autodocs"],
  argTypes: {
    username: {
      name: "Username",
      description: "Username displayed in the header profile.",
    },
    pageName: {
      name: "Page Name",
      description: "Page name displayed in the header and sidebar item.",
    },
    description: {
      name: "Page Description",
      description: "Page description displayed in the Page component.",
    },
    sidebarItemIcon: {
      name: "Sidebar Icon",
      description: "Icon displayed in the sidebar item.",
    },
    buttonContentPrimary: {
      name: "Primary Button Content",
      description: "Text displayed in the primary button.",
    },
    buttonContentSecondary: {
      name: "Secondary Button Content",
      description: "Text displayed in the secondary button.",
    },
    withActionPrimary: {
      name: "Enable Primary Action",
      description: "Determines if the primary action is enabled.",
    },
    withActionSecondary: {
      name: "Enable Secondary Action",
      description: "Determines if the secondary action is enabled.",
    },
    withBackButton: {
      name: "Enable Back Button",
      description: "Determines if the back button is present.",
    },
  },
};

export default meta;

type DefaultProps = {
  username: string;
  pageName: string;
  description: string;
  sidebarItemIcon: string;
  buttonContentPrimary: string;
  buttonContentSecondary: string;
  withActionPrimary: boolean;
  withActionSecondary: boolean;
  withBackButton: boolean;
};

const Template: StoryFn<DefaultProps> = (args) => {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);

  const toggleSidebar = () => {
    setIsOpenSidebar(!isOpenSidebar);
  };

  return (
    <>
      <AppShell>
        <Sidebar
          brandSize="lg"
          setToggleSidebar={toggleSidebar}
          brand="/ie.svg"
          toggle={isOpenSidebar}
        >
          <SidebarTitle title="Páginas" />
          <SidebarItem
            fillIcon={true}
            isActive={true}
            icon={args.sidebarItemIcon}
            title={args.pageName}
          />
          <SidebarItem
            fillIcon={true}
            isActive={false}
            icon="newspaper"
            title="Notícias"
          />
          <SidebarItem
            fillIcon={true}
            isActive={false}
            icon="event"
            title="Eventos"
          />
          <SidebarItem
            fillIcon={true}
            isActive={false}
            icon="volunteer_activism"
            title="Doações"
          />
          <SidebarItem
            fillIcon={true}
            isActive={false}
            icon="groups"
            title="Voluntários"
          />
        </Sidebar>
        <Header
          breadcrumb={
            <>
              <BreadcrumbRoot
                href=""
                pageName="Página-inicial"
              ></BreadcrumbRoot>
            </>
          }
          onClick={toggleSidebar}
        >
          {""}
        </Header>
        <Page
          namePage="Bem-vindo à Plataforma da IECLB - Estância Velha"
          buttonContentPrimary={args.buttonContentPrimary}
          buttonContentSecondary={args.buttonContentSecondary}
          withActionPrimary={args.withActionPrimary}
          withActionSecondary={args.withActionSecondary}
          withBackButton={args.withBackButton}
          iconButtonPrimary="dashboard"
        >
          <div style={{ display: "flex", gap: "24px" }}>
            <div className="col-12">
              <Card>
                <CardHeader
                  title="Devoção diária"
                  description="Isaías 43.13 e 1 Coríntios 3.21,23 - 10 de julho | IECLB"
                />
                <CardContent>
                  <div style={{ display: "flex", gap: "24px" }}>
                    <Image
                      width="500"
                      src="https://www.luterano.org.br/wp-content/uploads/2024/07/Senhas-Diarias-10-07-2024-1024x1024.jpg.avif"
                    ></Image>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "24px",
                        justifyContent: "center",
                      }}
                    >
                      <h5>
                        Isaías 43.13 - Ainda antes que houvesse dia, eu sou; e
                        não há quem possa livrar alguém das minhas mãos; agindo
                        eu, quem o impedirá?
                      </h5>{" "}
                      <h5>
                        1 Coríntios 3.21, 23 - Ninguém se glorie nos homens;
                        tudo é de vocês, e vocês são de Cristo, e Cristo é de
                        Deus.
                      </h5>
                      <h5>
                        LEMA DA SEMANA (07/07 - 13/07): A semente que caiu na
                        boa terra são os que, tendo ouvido de bom e reto
                        coração, retêm a palavra; estes frutificam com
                        perseverança. (Lucas 8.15)
                      </h5>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          <div style={{ display: "flex", gap: "24px" }}>
            <div className="col-6">
              <Card>
                <CardHeader
                  title="Notícias"
                  description="Concertos celebram os 200 Anos de Presença Luterana no Brasil"
                />
                <CardContent>
                  <Image
                    height="500"
                    src="https://www.luterano.org.br/wp-content/uploads/2024/07/Concertos-Camerata-Antiqua-200-anos.png.avif"
                  ></Image>
                </CardContent>
                <CardFooter>
                  <div style={{ width: "fit-content" }}>
                    <Button size="md" variant="primary" label="Ver mais" />
                  </div>
                </CardFooter>
              </Card>
            </div>
            <div className="col-6">
              <Card>
                <CardHeader
                  title="Eventos"
                  description="Dia Sinodal da Igreja comemora 200 Anos de Presença Luterana no Brasil"
                />
                <CardContent>
                  <Image
                    height="500"
                    src="https://www.luterano.org.br/wp-content/uploads/2024/07/Dia-Sinodal-da-Igreja-pavilhao.jpg.avif"
                  ></Image>
                </CardContent>
                <CardFooter>
                  <div style={{ width: "fit-content" }}>
                    <Button size="md" variant="primary" label="Ver mais" />
                  </div>
                </CardFooter>
              </Card>
            </div>
          </div>
          <div style={{ display: "flex", gap: "24px" }}>
            <div className="col-6">
              <Card>
                <CardHeader
                  title="Doações"
                  description="LELUT desenvolve ação de doações para pessoas atingidas pelas enchentes"
                />
                <CardContent>
                  <Image
                    height="500"
                    src="https://th.bing.com/th/id/R.56d05fbe4116d477998620ea0010749f?rik=NpuBEfKZqnkl4A&riu=http%3a%2f%2flavras.tv%2fsite%2fwp-content%2fuploads%2f2021%2f03%2fdoa-alimentos-1-2048x1365.jpg&ehk=OMhwVx7HLhss6anqbrkqRz5%2fvgrTen7AQoHxzAA%2f%2bGk%3d&risl=&pid=ImgRaw&r=0"
                  ></Image>
                </CardContent>
                <CardFooter>
                  <div style={{ width: "fit-content" }}>
                    <Button size="md" variant="primary" label="Ver mais" />
                  </div>
                </CardFooter>
              </Card>
            </div>
            <div className="col-6">
              <Card>
                <CardHeader
                  title="Voluntários"
                  description="Voluntários desenvolvem projeto com crianças"
                />
                <CardContent>
                  <Image
                    height="500"
                    src="https://th.bing.com/th/id/OIP.ai0ecZAo-3wMf6epesMtjAHaE7?rs=1&pid=ImgDetMain"
                  ></Image>
                </CardContent>
                <CardFooter>
                  <div style={{ width: "fit-content" }}>
                    <Button size="md" variant="primary" label="Ver mais" />
                  </div>
                </CardFooter>
              </Card>
            </div>
          </div>
        </Page>
      </AppShell>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  username: "Username",
  pageName: "Página inicial",
  sidebarItemIcon: "home",
  withBackButton: false,
  withActionPrimary: true,
  withActionSecondary: true,
};
