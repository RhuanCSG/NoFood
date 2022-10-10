"use strict";

const repository = require("../repositories/produto-repository");
const validation = require("../bin/helpers/validation");
const ctrlBase = require("../bin/base/controller-base");
const _repo = new repository();

let _validationContract = new validation();

function produtoController() {}

produtoController.prototype.post = async (req, res) => {
  _validationContract.isRequired(req.body.nome, "Informe o nome do produto");
  _validationContract.isRequired(
    req.body.descricao,
    "Informe a descrição do produto"
  );
  _validationContract.isRequired(req.body.foto, "Adicione a foto do produto");
  _validationContract.isRequired(req.body.preco, "Informe o preço do produto");
  if (req.body.preco) {
    _validationContract.isTrue(
      req.body.preco == 0,
      "O preço deve ser maior que 0"
    );
  }
  ctrlBase.post(_repo, _validationContract, req, res);
};

produtoController.prototype.put = async (req, res) => {
  _validationContract.isRequired(req.body.nome, "Informe o nome do produto");
  _validationContract.isRequired(
    req.body.descricao,
    "Informe a descrição do produto"
  );
  _validationContract.isRequired(req.body.foto, "Adicione a foto do produto");
  _validationContract.isRequired(req.body.preco, "Informe o preço do produto");
  _validationContract.isRequired(req.params.id, "Informe o id do produto");
  if (req.body.preco) {
    _validationContract.isTrue(
      req.body.preco == 0,
      "O preço deve ser maior que 0"
    );
  }

  ctrlBase.put(_repo, _validationContract, req, res);
};

produtoController.prototype.get = async (req, res) => {
  ctrlBase.get(_repo, req, res);
};

produtoController.prototype.getById = async (req, res) => {
  _validationContract.isRequired(req.body.id, "Informe o id do produto");
  ctrlBase.getById(_repo, req, res);
};

produtoController.prototype.delete = async (req, res) => {
  _validationContract.isRequired(req.body.id, "Informe o id do produto");
  ctrlBase.delete(_repo, req, res);
};

module.exports = produtoController;
