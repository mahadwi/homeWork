import express from "express";
import {MoviesController} from "../controller";
import multer from "../middleware/multer";

const router = express.Router();

router.get('/getAllMovies', MoviesController.getAllMovies);
router.get('/getMovieById/:id', MoviesController.getMovieById);
router.delete('/deleteMovie/:id', MoviesController.deleteMovie);
router.post('/insertMovie', multer.single("photo"), MoviesController.insertMovie);
router.put('/updateMovie/:id', multer.single("photo"), MoviesController.updateMovie);

export default router;