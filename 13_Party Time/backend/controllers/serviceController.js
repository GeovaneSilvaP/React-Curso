const { Service: ServiceModel } = require("../models/Service");

const serviceController = {
  create: async (req, res) => {
    try {
      const service = {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        image: req.body.image,
      };

      const response = await ServiceModel.create(service);

      res.status(201).json({ response, msg: "Serviço criado com sucesso!" });
    } catch (error) {
      res.status(500).json({ msg: "Erro no servidor", error });
    }
  },

  getAll: async (req, res) => {
    try {
      const services = await ServiceModel.find();
      res.json(services);
    } catch (error) {
      res.status(500).json({ msg: "Erro no servidor", error });
    }
  },

  get: async (req, res) => {
    try {
      const id = req.params.id;
      const service = await ServiceModel.findById(id);

      if (!service) {
        return res.status(404).json({ msg: "Serviço não encontrado" });
      }

      res.json(service);
    } catch (error) {
      res.status(500).json({ msg: "Erro no servidor", error });
    }
  },

  delete: async (req, res) => {
    try {
      const id = req.params.id;

      const service = await ServiceModel.findById(id);

      if (!service) {
        return res.status(404).json({ msg: "Serviço não encontrado" });
      }

      await ServiceModel.findByIdAndDelete(id);

      res.status(200).json({ msg: "Serviço excluído com sucesso!" });
    } catch (error) {
      res.status(500).json({ msg: "Erro no servidor", error });
    }
  },

  update: async (req, res) => {
    try {
      const id = req.params.id;

      const service = {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        image: req.body.image,
      };

      const updatedService = await ServiceModel.findByIdAndUpdate(id, service, {
        new: true,
      });

      if (!updatedService) {
        return res.status(404).json({ msg: "Serviço não encontrado" });
      }

      res.status(200).json({
        updatedService,
        msg: "Serviço atualizado com sucesso",
      });
    } catch (error) {
      res.status(500).json({ msg: "Erro no servidor", error });
    }
  },
};

module.exports = serviceController;
