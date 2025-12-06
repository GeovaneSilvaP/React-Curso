const Memory = require("../models/Memory");

const createMemory = async (req, res) => {
  try {
    const { title, description } = req.body;

    // Garantir que veio arquivo
    if (!req.file) {
      return res.status(400).json({ msg: "Nenhuma imagem enviada." });
    }

    const src = `images/${req.file.filename}`;

    if (!title || !description) {
      return res.status(400).json({ msg: "Preencha todos os campos." });
    }

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

module.exports = {
  createMemory,
};
