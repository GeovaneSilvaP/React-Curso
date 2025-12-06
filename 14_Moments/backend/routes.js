const express = require("express");
const router = express.Router();

const upload = require("./helpers/upload");
const { createMemory } = require("./controllers/MemoryController");

router.post(
  "/",
  upload.single("image"),

  (req, res, next) => {
    if (!req.file) {
      return res.status(400).json({
        msg: "Envie uma imagem válida (JPG, JPEG ou PNG)."
      });
    }
    next();
  },

  createMemory
);

module.exports = router;
