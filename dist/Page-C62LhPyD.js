import { jsx, jsxs } from 'react/jsx-runtime';
import { B as ButtonIcon } from './ButtonIcon-DWB2zXvl.js';

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
const Page = ({ children, namePage, withBackButton = false, onClickBackButton, actions, description, }) => {
    return (jsx("div", { style: {
            display: "flex",
            justifyContent: "center",
            width: "100%",
            height: "100%",
            backgroundColor: "var(--s-color-background-default)",
            overflowX: "hidden",
        }, children: jsxs("div", { className: "page-root", children: [jsxs("div", { children: [jsxs("div", { className: "page-header", children: [withBackButton && (jsx(ButtonIcon, { onClick: onClickBackButton, size: "md", appearance: "default", icon: "arrow_back", variant: "secondary" })), jsx("div", { className: "page-header-title", children: jsx("h1", { children: namePage }) }), actions && jsx("div", { className: "page-header-actions", children: actions })] }), description && (jsx("p", { className: `page-description ${withBackButton ? "with-back-button" : ""}`, children: description }))] }), children] }) }));
};
Page.displayName = "Page";

export { Page as P };
