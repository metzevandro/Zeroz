import React from "react";
import type { PageProps } from "./Page.types";
import ButtonIcon from "../ButtonIcon/ButtonIcon";
import "./Page.scss";

/**
 * ## Page
 *
 * Componente estrutural de layout que define a área principal de uma página.
 * Fornece header padronizado com título, botão de voltar, ações customizáveis e descrição.
 *
 * ### Quando usar
 * - Como wrapper de alto nível para cada rota/tela da aplicação
 * - Quando precisar de consistência visual entre páginas do produto
 *
 * ### Quando não usar
 * - Modais ou drawers — prefira um layout próprio para esses contextos
 *
 * @example
 * // Uso básico
 * <Page namePage="Usuários">
 *   <UserList />
 * </Page>
 *
 * @example
 * // Com botão de voltar e ações customizadas
 * <Page
 *   namePage="Detalhes"
 *   withBackButton
 *   onClickBackButton={() => navigate(-1)}
 *   actions={
 *     <Button variant="primary" onClick={handleSave}>
 *       Salvar
 *     </Button>
 *   }
 *   description="Gerencie os detalhes do item selecionado."
 * >
 *   <DetailForm />
 * </Page>
 */
const Page: React.FC<PageProps> = ({
  children,
  namePage,
  withBackButton = false,
  onClickBackButton,
  actions,
  description,
}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        backgroundColor: "var(--s-color-background-default)",
        overflowX: "hidden",
      }}
    >
      <div className="page-root">
        <div>
          <div className="page-header">
            {withBackButton && (
              <ButtonIcon
                onClick={onClickBackButton}
                size="md"
                appearance="default"
                icon="arrow_back"
                variant="secondary"
              />
            )}

            <div className="page-header-title">
              <h1>{namePage}</h1>
            </div>

            {actions && <div className="page-header-actions">{actions}</div>}
          </div>

          {description && (
            <p
              className={`page-description ${withBackButton ? "with-back-button" : ""}`}
            >
              {description}
            </p>
          )}
        </div>

        {children}
      </div>
    </div>
  );
};

Page.displayName = "Page";

export default Page;
