const express = require("express");
const router = express.Router();

const upload = require("./helpers/upload");
const {
  createMemory,
  getMemories,
  getMemory,
  deleteMemory,
  updateMemory,
  toggleFavorite,
  addComment
} = require("./controllers/MemoryController");

// CREATE
router.post(
  "/",
  upload.single("image"),

  (req, res, next) => {
    if (!req.file) {
      return res.status(400).json({
        msg: "Envie uma imagem válida (JPG, JPEG ou PNG).",
      });
    }
    next();
  },

  createMemory
);

// ⚠ ROTAS ESPECÍFICAS DEVEM VIR PRIMEIRO
router.patch("/favorite/:id", toggleFavorite);

router.patch("/comment/:id", addComment);

// GET ALL
router.get("/", getMemories);

// GET by ID
router.get("/:id", getMemory);

// DELETE
router.delete("/:id", deleteMemory);

// UPDATE
router.patch("/:id", upload.single("image"), updateMemory);

module.exports = router;
