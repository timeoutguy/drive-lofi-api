'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('cities', 'video_id',
      {
        type: Sequelize.INTEGER,
        references: { model: 'videos', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
      })
  },

  down: (queryInterface) => {
    return queryInterface.removeColumn('cities', 'video_id')
  }
};
