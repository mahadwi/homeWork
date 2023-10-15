import { UsersServices } from "../services";

class UsersController {
  async getAllUsers(req, res, next) {
    try {
      const users = await UsersServices.getAllUsers();
      res.status(200).json({
        "success": true,
        "data": users
      });
    } catch (error) {
      next(error);
    }
  }

  async getUserById(req, res, next) {
    try {
      const id = req.params.id;
      const users = await UsersServices.getUserById(id);
      res.status(200).json({
        "success": true,
        "data": users
      });
    } catch (error) {
      next(error);
    }
  }

  async deleteUser(req, res, next){
    try {
      const id = req.params.id;
      await UsersServices.deleteUser(id);
      res.status(200).json({
        "success": true,
        "message": "Berhasil Hapus Data"
      });
    } catch (error) {
      next(error);
    }
  }

  async updateUser(req, res, next){
    try {
      const id = req.params.id;
      const body = req.body;
      await UsersServices.updateUser(body, id);
      res.status(200).json({
        "success": true,
        "message": "Berhasil Update Data"
      });
    } catch (error) {
      next(error);
    }
  }

  async registerUser(req, res, next){
    try {
      const body = req.body;
      await UsersServices.registerUser(body);
      res.status(200).json({
        "success": true,
        "message": "Berhasil Register"
      });
    } catch (error) {
      next(error);
    }
  }
}

export default new UsersController();