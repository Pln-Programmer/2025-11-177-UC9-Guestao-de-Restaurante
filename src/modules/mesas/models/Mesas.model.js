import sequelize from "../../../config/dataBase.js";
import { DataTypes } from "sequelize";

export const MesaModel = sequelize.define(
  "Mesa",
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
                key: "id"
            }
        }
    },
    numero: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            isInt: {
                msg: "Adicione um numero válido."
            }
        }
    },
    capacidade: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validade: {
            isNumeric: {
                msg: "Adicione um numero válido."
            }
        }
    }
    
  },
  {
    tableName: "mesas",
    createdAt: "criado_em",
    updatedAt: "atualizado_em",
    deletedAt: "excluido_em",
    paranoid: true
  },
);
