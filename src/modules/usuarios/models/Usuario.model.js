import sequelize from "../../../config/DataBase.js";
import { DataTypes } from "sequelize";

export const UsuarioModel = sequelize.define(
  "Usuario",
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      validate: {
        isUUID: {
          args: 4,
          msg: "O id deve ser um UUID válido.",
        },
      },
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [5, 100],
          msg: "O nome deve ter entre 5 e 100 caracteres.",
        },
        notEmpty: {
          msg: "O campo de nome não pode ser vazio.",
        },
      },
    },
    matricula: {
      type: DataTypes.STRING(5),
      allowNull: false,
      validate: {
        is: {
          args: /^[A-Za-z]\d{4}$/,
          msg: "Matrícula inválida. Deve começar com uma letra (A–Z) seguida por 4 dígitos, ex.: A1234.",
        },
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {
          msg: "O email deve ser um endereço de email válido.",
        },
      },
    },
    senha: {
      type: DataTypes.STRING(15),
      allowNull: false,
      validate: {
        is: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%?])[A-Za-z\d@#$%?]{8}$/,
        msg: "A senha deve ter exatamente 8 caracteres e incluir pelo menos 1 letra maiúscula, 1 letra minúscula, 1 dígito e 1 dos caracteres especiais @ # $ % ?; não são permitidos outros caracteres.",
      },
    },
    perfil: {
      type: DataTypes.ENUM("admin", "client"),
      allowNull: false,
      validate: {
        isIn: {
          args: [["admin", "cliente"]],
          msg: "Perfil invalido",
        },
      },
    },
  },
  {
    tableName: "usuarios",
    createdAt: "criado_em",
    updatedAt: "atualizado_em",
    deletedAt: "excluido_em",
    paranoid: true
  },
);
