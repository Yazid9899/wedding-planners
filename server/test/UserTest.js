const { User } = require(`../models/index`)

class UserTableTest {
  static async adduser({
    username = 'Jaja', email = 'jaja@gmail.com', password = '1234567', phoneNumber = '081285808133', role = 'customer', imageUrl = 'https://images.unsplash.com/photo-1616638411693-4bfa05b6ec66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2FuaXRhfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
  }) {
    const result = await User.create({
      username, email, password, phoneNumber, role, imageUrl
    })
    return {
      id: result.id,
      username: result.username,
      email: result.email,
      password: result.password,
      phoneNumber: result.phoneNumber,
      role: result.role,
      imageUrl: result.imageUrl
    }
  }

  static findUserByid(id) {
    return User.findOne({
      where: {
        id
      },
      attributes: {
        excludes: ['createdAt', 'updatedAt'],
      },
    })
  }

  static cleanTable() {
    return User.destroy({
      truncate: true,
      cascade: true,
      restartIdentity: true,
    });
  }
}

module.exports = UserTableTest