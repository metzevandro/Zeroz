/**
 * Props do componente Page.
 */
export interface PageProps {
  /** Conteúdo principal da página, renderizado abaixo do header. */
  children?: React.ReactNode;

  /** Título principal da página, exibido no header. */
  namePage: string;

  /** Exibe o botão de voltar no início do header quando `true`. @default false */
  withBackButton?: boolean;

  /** Callback disparado ao clicar no botão de voltar. */
  onClickBackButton?: () => void;

  /**
   * Ações renderizadas no lado direito do header.
   * Aceita qualquer ReactNode — botões, menus, etc.
   */
  actions?: React.ReactNode;

  /** Conteúdo descritivo exibido abaixo do header. Aceita texto ou elementos React. */
  description?: React.ReactNode;
}
