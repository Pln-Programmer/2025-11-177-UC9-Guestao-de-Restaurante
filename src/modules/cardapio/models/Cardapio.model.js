import sequelize from "../../../config/DataBase";
import { DataTypes } from "sequelize";

const Cardapio = sequelize.define(
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
    numero: {
        type: DataTypes.String(3),
        isNumeric: true,
        validate: {
            msg: "Insira"
        }
    },
    capacidade: {

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
