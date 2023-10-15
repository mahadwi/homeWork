import { MoviesServices } from "../services";

class MoviesController {
  async getAllMovies(req, res, next) {
    try {
      const page = req.query.page;
      const per_page = req.query.per_page;
      const movies = await MoviesServices.getAllMovies(page, per_page);
      res.status(200).json({
        "success": true,
        "data": movies
      });
    } catch (error) {
      next(error);
    }
  }

  async getMovieById(req, res, next) {
    try {
      const id = req.params.id;
      const movie = await MoviesServices.getMovieById(id);
      res.status(200).json({
        "success": true,
        "data": movie
      });
    } catch (error) {
      next(error);
    }
  }

  async deleteMovie(req, res, next) {
    try {
      const id = req.params.id;
      await MoviesServices.deleteMovie(id);
      res.status(200).json({
        "success": true,
        "message": "Berhasil Delete Movie"
      })
    } catch (error) {
      next(error);
    }
  }

  async insertMovie(req, res, next) {
    try {
      const body = req.body;
      const file = req.file.path;
      const filename = req.file.filename;
      if (!file) {
        res.status(400).send({
          status: false,
          data: "No File is selected.",
        });
      }
      await MoviesServices.insertMovie(body, filename);
      res.status(200).json({
        "success": true,
        "message": "Berhasil Insert Data"
      })
    } catch (error) {
      next(error);
    }
  }

  async updateMovie(req, res, next) {
    try {
      const id = req.params.id;
      const file = req.file.path;
      const fileName = req.file.filename;
      if (!file) {
        res.status(400).send({
          status: false,
          data: "No File is selected.",
        });
      }
      await MoviesServices.updateMovie(fileName, id);
      res.status(200).json({
        "success": true,
        "message": "Berhasil Update Data"
      });
    } catch (error) {
      next(error);
    }
  }
}

export default new MoviesController();