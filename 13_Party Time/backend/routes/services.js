const router = require("express").Router();

const serviceController = require("../controllers/serviceController");

router
  .route("/services")
  .post(serviceController.create)
  .get(serviceController.getAll);

router
  .route("/services/:id")
  .get(serviceController.get)
  .delete(serviceController.delete)
  .put(serviceController.update);

module.exports = router;


