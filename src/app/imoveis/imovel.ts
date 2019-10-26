export class Imovel {
  id_imovel: number;
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

  // constructor(id_imovel:Number,
  //             id_endereco:String,
  //             id_corretor:String,
  //             id_proprietario:String,
  //             financiado:Boolean,
  //             aceita_negociacao:Boolean,
  //             valor:String,
  //             imagem:String,
  //             data_cadastro:String,
  //             data_atualizacao:String,
  //             alarme_ultima_atualizacao:Boolean,
  //             usuario_ultima_atualizacao:String,
  //             ){
  //           this.id_imovel = id_imovel;
  //           this.id_endereco = id_endereco;
  //           this.id_corretor = id_corretor;
  //           this.id_proprietario = id_proprietario;
  //           this.financiado = financiado;
  //           this.aceita_negociacao = aceita_negociacao;
  //           this.valor = valor;
  //           this.imagem = imagem;
  //           this.data_cadastro = data_cadastro;
  //           this.data_atualizacao = data_atualizacao;
  //           this.alarme_ultima_atualizacao = alarme_ultima_atualizacao;
  //           this.usuario_ultima_atualizacao = usuario_ultima_atualizacao;
  //       }
}
