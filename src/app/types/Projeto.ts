export interface Projeto {
  nome: string;
  descricao: string;
  tags: string[]; // Supondo que esteja se referindo a 'topics' disponíveis via API
  tamanho: number;
  linguagem: string;
  html_url: string; // A URL da imagem precisa ser manipulada ou inferida separadamente, pois a API do GitHub não fornece diretamente a url para repositórios
}
