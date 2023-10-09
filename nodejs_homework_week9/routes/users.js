import express from "express";
import Users from "../controller/users";
import signToken from "../helper/signToken";

const router = express.Router();

router.get('/get', async (req, res, next) => {
  try {
    const result = await Users.getAll(req, res);
    res.status(200).json({
      "success": true,
      "data": result.rows
    });
  } catch (error) {
    next(error);
  }
});

router.post('/register', async (req, res, next) => {
  try {
    const result = await Users.register(req, res);
    res.status(200).json({
      "success": true,
      "respon": "Berhasil Insert Data"
    });
  } catch (error) {
    next(error);
  }
});

router.post('/login', async (req, res, next) => {
  try {
    const result = await Users.login(req, res);
    const token = signToken(result.rows[0]);

    return res.json({token});

  } catch (error) {
    next(error);
  }
})

export default router;