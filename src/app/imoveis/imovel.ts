export class Imovel {
  id_imovel: Bigint;
  id_endereco: Enderecos;
  id_corretor: Corretores;
  id_proprietario: Proprietarios;
  financiado: Boolean;
  aceita_negociacao: Boolean;
  valor: Float;
  imagem: BLOB;
  data_cadastro: Datetime;
  data_atualizacao: Datetime;
  alarme_ultima_atualizacao: Boolean;
  usuario_ultima_atualizacao: Usuarios;
}
