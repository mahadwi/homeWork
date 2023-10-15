import { UsersRepository } from "../repository";

class UsersServices {
  async getAllUsers() {
    return UsersRepository.getAllUsers();
  }

  async getUserById(id) {
    return UsersRepository.getUserById(id);
  }

  async deleteUser(id) {
    return UsersRepository.deleteUser(id);
  }

  async updateUser(body, id){
    return UsersRepository.updateUser(body, id);
  }

  async registerUser(body) {
    return UsersRepository.registerUser(body);
  }
}

export default new UsersServices();