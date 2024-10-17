const express = require("express")
const { CreateService, DeleteService, GetAllServices, GetService, UpdateService } = require("../controllers/controller")
const validateServiceInput = require("../middlewares/ValidationMiddleware")
const router = express.Router()

router.get("/", (req, res) => {
    res.send("Hii")
})

router.post("/addService", validateServiceInput, CreateService)
router.get("/getService/:id", GetService)
router.get("/getAllServices", GetAllServices)
router.delete("/deleteService/:id", DeleteService)
router.put("/updateService/:id", UpdateService)


module.exports = router