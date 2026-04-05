'use strict';

var jsxRuntime = require('react/jsx-runtime');
var ButtonIcon = require('./ButtonIcon-D_zBPQVl.js');

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
    return (jsxRuntime.jsx("div", { style: {
            display: "flex",
            justifyContent: "center",
            width: "100%",
            height: "100%",
            backgroundColor: "var(--s-color-background-default)",
            overflowX: "hidden",
        }, children: jsxRuntime.jsxs("div", { className: "page-root", children: [jsxRuntime.jsxs("div", { children: [jsxRuntime.jsxs("div", { className: "page-header", children: [withBackButton && (jsxRuntime.jsx(ButtonIcon.ButtonIcon, { onClick: onClickBackButton, size: "md", appearance: "default", icon: "arrow_back", variant: "secondary" })), jsxRuntime.jsx("div", { className: "page-header-title", children: jsxRuntime.jsx("h1", { children: namePage }) }), actions && jsxRuntime.jsx("div", { className: "page-header-actions", children: actions })] }), description && (jsxRuntime.jsx("p", { className: `page-description ${withBackButton ? "with-back-button" : ""}`, children: description }))] }), children] }) }));
};
Page.displayName = "Page";

exports.Page = Page;
