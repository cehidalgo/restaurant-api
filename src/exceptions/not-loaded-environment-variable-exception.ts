import { DefaultException } from '.';

export class NotLoadedEnvironmentVariableException implements DefaultException {
  className: string;
  message: string;

  constructor() {
    this.className = `NotLoadedEnvironmentVariableException`;
    this.message = `Alguma variável de ambiente não foi carregada corretamente durante a inicialização do projeto. Veja se está tudo ok antes de subir o projeto.`;
  }
}
