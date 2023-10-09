import express from "express";
import Movies from "../controller/movies.js";
import authentication from "../middleware/auth.js";

const router = express.Router();

router.get('/get/:page/:per_page', async (req, res, next) => {
  try {
    const result = await Movies.getAllMovies(req, res);
    res.status(200).json({
      "success": true,
      "data": result.rows
    });
  } catch (error) {
    next(error);
  }
});

router.get('/getById/:id', async (req, res, next) => {
  try {
    const result = await Movies.getMoviesById(req, res);
    res.status(200).json({
      "success": true,
      "data": result.rows
    });
  } catch (error) {
    next(error);
  }
});

router.post('/add', authentication, async (req, res, next) => {
  try {
    const result = await Movies.insertMovies(req, res);
    res.status(200).json({
      "success": true,
      "respon": "Berhasil Insert Data"
    });
  } catch (error) {
    next(error);
  }
});

router.patch('/edit/:id', authentication, async (req, res, next) => {
  try {
    const result = await Movies.editMovies(req, res);
    res.status(200).json({
      "success": true,
      "respon": "Berhasil Update Data"
    });
  } catch (error) {
    next(error);
  }
});

router.delete('/delete/:id', authentication, async (req, res, next) => {
  try {
    const result = await Movies.deleteMoviesById(req, res);
    res.status(200).json({
      "success": true,
      "respon": "Berhasil delete Movie"
    });
  } catch (error) {
    next(error)
  }
});

export default router;