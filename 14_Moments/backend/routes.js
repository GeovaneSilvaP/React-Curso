const express = require("express");
const router = express.Router();

const upload = require("./helpers/upload");
const {
  createMemory,
  getMemories,
  getMemory,
  deleteMemory,
  updateMemory,
  toggleFavorite
} = require("./controllers/MemoryController");

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

// GET all
router.get("/", getMemories);

// GET by ID
router.get("/:id", getMemory);

// DELETE
router.delete("/:id", deleteMemory);

// UPDATE
router.patch("/:id", upload.single("image"), updateMemory);

router.patch("/favorite/:id", (req, res)=> toggleFavorite(req, res))

module.exports = router;
