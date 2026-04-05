import React from "react";
import type { PageProps } from "./Page.types";
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
declare const Page: React.FC<PageProps>;
export default Page;
