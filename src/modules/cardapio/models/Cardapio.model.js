import sequelize from "../../../config/DataBase";
import { DataTypes } from "sequelize";

export const CardapioModel = sequelize.define(
  "Cardapio",
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
    usuario_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      validate: {
        isUUID: {
          args: 4,
          msg: "O id deve ser um UUid válido."
        },
        references: {
          model: "usuarios",
          key: id
        }
      }
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [1, 100],
          msg: "O nome deve ter entre 5 e 100 caracteres.",
        },
        notEmpty: {
          msg: "O campo de nome não pode ser vazio.",
        },
      },
    },
    descricao: {
      type: DataTypes.STRING,
      allowNull: false,
      validade: {
        len: {
          args: [5, 250],
          msg: "O nome deve ter entre 5 e 100 caracteres.",
        }
      }
    },
    porcao: {
      type: DataTypes.CHAR(30),
      allowNull: false,
      validade: {
        notEmpty: {
          msg: "O campo de nome não pode ser vazio.",
        },
      }
    },
    preco: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validade: {
        isDecimal: {
          msg: "Insira um numero decimal."
        }
      }
    }

  },
  {
    tableName: "cardapio",
    createdAt: "criado_em",
    updatedAt: "atualizado_em",
    deletedAt: "excluido_em",
    paranoid: true
  },
);
