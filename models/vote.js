const {Model, DataTypes} = require('sequelize');
const { default: ModelManager } = require('sequelize/types/lib/model-manager');
const sequelize = require('../config/connection');

class Vote extends Model {}

Vote.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }
    },
post_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
        model: 'post',
        key: 'id'
    }
}
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'vote'
}
    );

    module.exports = Vote;
