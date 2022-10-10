"use strict";

const repository = require("../repositories/categoria-repository");
const validation = require("../bin/helpers/validation");
const ctrlBase = require("../bin/base/controller-base");
const _repo = new repository();

let _validationContract = new validation();

function categoriaController() {}

categoriaController.prototype.post = async (req, res) => {
  _validationContract.isRequired(
    req.body.titulo,
    "Informe o título da categoria"
  );
  _validationContract.isRequired(
    req.body.foto,
    "Adicione uma foto da categoria"
  );
  ctrlBase.post(_repo, _validationContract, req, res);
};

categoriaController.prototype.put = async (req, res) => {
  _validationContract.isRequired(
    req.body.titulo,
    "Informe o título da categoria"
  );
  _validationContract.isRequired(
    req.body.foto,
    "Adicione uma foto da categoria"
  );
  _validationContract.isRequired(req.params.id, "Informe o id");
  ctrlBase.put(_repo, _validationContract, req, res);
};

categoriaController.prototype.get = async (req, res) => {
  ctrlBase.get(_repo, req, res);
};

categoriaController.prototype.getById = async (req, res) => {
  _validationContract.isRequired(req.params.id, "Informe o id da categori");
  ctrlBase.getById(_repo, req, res);
};

categoriaController.prototype.delete = async (req, res) => {
  _validationContract.isRequired(req.params.id, "Informa o id da categoria");
  ctrlBase.delete(_repo, req, res);
};

module.exports = categoriaController;
