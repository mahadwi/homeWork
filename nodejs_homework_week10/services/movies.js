import { MoviesRepository } from "../repository";

class MoviesServices {
  async getAllMovies(page, per_page) {
    return MoviesRepository.getAllMovies(page, per_page);
  }

  async getMovieById(id) {
    return MoviesRepository.getMovieById(id);
  }

  async deleteMovie(id) {
    return MoviesRepository.deleteMovie(id);
  }

  async insertMovie(body, filename) {
    return MoviesRepository.insertMovie(body, filename);
  }

  async updateMovie(filename, id) {
    return MoviesRepository.updateMovie(filename, id);
  }
}

export default new MoviesServices();