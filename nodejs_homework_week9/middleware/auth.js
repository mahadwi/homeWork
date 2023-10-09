import jwt from "jsonwebtoken";

const authentication = (req, res, next) => {
  const token = req.headers.authorization;

  try {
    if (!token) {
      throw new Error('Token tidak ditemukan');
    }

    const decodeToken = jwt.verify(token, "rahasia");

    if (decodeToken.role !== 'Admin') {
      throw new Error('Anda tidak memiliki izin untuk mengakses sumber daya ini');
    }

    // Menambahkan informasi pengguna ke dalam objek permintaan
    req.user = {
      id: decodeToken.id,
      role: decodeToken.role,
    };

    next();
  } catch (error) {
    next(error);
  }
};

export default authentication;