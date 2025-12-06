const multer = require("multer");
const path = require("path");

// Onde salvar os arquivos
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../public/images/"));
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

// Filtro de tipos de arquivo
const fileFilter = (req, file, cb) => {
  const allowed = ["image/jpeg", "image/png", "image/jpg"];

  if (allowed.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Formato de arquivo inválido. Apenas JPG/PNG."), false);
  }
};

// Configuração final do multer
const upload = multer({
  storage,
  fileFilter,
});

module.exports = upload;
