const Memory = require("../models/Memory");
const fs = require("fs");

// remove imagem antiga ao atualizar ou deletar
const removeOldImage = (memory) => {
  const filePath = `public/${memory.src}`;
  fs.unlink(filePath, (err) => {
    if (err) {
      console.log("Erro ao excluir imagem:", err);
    } else {
      console.log("Imagem excluída:", filePath);
    }
  });
};

const createMemory = async (req, res) => {
  try {
    const { title, description } = req.body;

    if (!req.file) {
      return res.status(400).json({ msg: "Nenhuma imagem enviada." });
    }

    if (!title || !description) {
      return res.status(400).json({ msg: "Preencha todos os campos." });
    }

    const src = `images/${req.file.filename}`;

    const newMemory = new Memory({
      title,
      src,
      description,
    });

    await newMemory.save();

    return res.json({
      msg: "Memória criada com sucesso!",
      memory: newMemory,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Erro no servidor." });
  }
};

// GET ALL
const getMemories = async (req, res) => {
  try {
    const memories = await Memory.find().sort({ createdAt: -1 });
    return res.json(memories);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Erro no servidor." });
  }
};

// GET by ID
const getMemory = async (req, res) => {
  try {
    const memory = await Memory.findById(req.params.id);

    if (!memory) {
      return res.status(404).json({ msg: "Memória não encontrada" });
    }

    return res.json(memory);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Erro no servidor." });
  }
};

// DELETE
const deleteMemory = async (req, res) => {
  try {
    const memory = await Memory.findByIdAndDelete(req.params.id);

    if (!memory) {
      return res.status(404).json({ msg: "Memória não encontrada!" });
    }

    removeOldImage(memory);

    return res.json({ msg: "Memória excluída com sucesso!" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Erro no servidor." });
  }
};

// UPDATE
const updateMemory = async (req, res) => {
  try {
    const { title, description } = req.body;

    let src = null;

    // se veio imagem nova
    if (req.file) {
      src = `images/${req.file.filename}`;
    }

    const memory = await Memory.findById(req.params.id);

    if (!memory) {
      return res.status(404).json({ msg: "Memória não encontrada!" });
    }

    // excluir imagem antiga caso tenha vindo uma nova
    if (src) {
      removeOldImage(memory);
    }

    const updateData = {};

    if (title) updateData.title = title;
    if (description) updateData.description = description;
    if (src) updateData.src = src;

    const updatedMemory = await Memory.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );

    return res.json({
      msg: "Memória atualizada com sucesso!",
      memory: updatedMemory,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Erro no servidor." });
  }
};

const toggleFavorite = async(req, res) =>{
   try {
    const memory = await Memory.findById(req.params.id);

    if (!memory) {
      return res.status(404).json({ msg: "Memória não encontrada!" });
    }

    memory.favorite = !memory.favorite

    memory.save()

    return res.json({ msg: "Adicionada aos favoritos", memory });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Erro no servidor." });
  }
}

module.exports = {
  createMemory,
  getMemories,
  getMemory,
  deleteMemory,
  updateMemory,
  toggleFavorite,
};
