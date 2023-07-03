const { sequelize } = require("../models");

const deleteUser = async () => {
    await sequelize.queryInterface.bulkDelete(`Users`, null, {
        truncate: true, restartIdentity: true, cascade: true
    })
}

// const deleteVehicles = async () => {
//     await sequelize.queryInterface.bulkDelete(`Vehicles`, null, {
//         truncate: true, restartIdentity: true, cascade: true
//     })
// }

// const deleteTypes = async () => {
//     await sequelize.queryInterface.bulkDelete(`Types`, null, {
//         truncate: true, restartIdentity: true, cascade: true
//     })
// }


module.exports = {deleteUser}