module.exports = (sequelize, Sequelize) => {
    const customers = sequelize.define('customer', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
          },
        Movie: {
            type: Sequelize.STRING
        }
    });
    return customers
}