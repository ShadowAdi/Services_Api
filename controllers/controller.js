const Service = require("../models/ServiceModel");

const CreateService = async (req, res, next) => {
    const { serviceName, description, price, category, availability } = req.body;

    if (!serviceName && !price) {
        return res.status(404).json({
            message: "Service Name And Price are must Important",
        });
    }

    const service = new Service({
        serviceName,
        description,
        price,
        category,
        availability,
    });

    try {
        const savedService = await service.save();
        res.status(201).json(savedService);
    } catch (error) {
        next(error);
    }
};



const GetAllServices = async (req, res, next) => {
    try {
        const {
            serviceName,
            price,
            category,
            sortBy,
            order = "asc",
            page = 1,
            limit = 10,
            availability,
        } = req.query;

        const filter = {};
        if (serviceName) filter.serviceName = serviceName;
        if (price) filter.price = price;
        if (category) filter.category = category;
        if (availability) filter.availability = availability;

        const sort = {};
        if (sortBy) {
            sort[sortBy] = order === "desc" ? -1 : 1;
        }
        const skip = (page - 1) * limit;

        const data = await Service.find(filter)
            .sort(sort)
            .skip(skip)
            .limit(parseInt(limit));
        res.status(200).json(data);
    } catch (error) {
        next(error);
    }
};

const GetService = async (req, res, next) => {
    const { id } = req.params;
    if (!id) {
        const error = new Error("Service ID is required.");
        error.statusCode = 400;
        return next(error);
    }

    try {
        const service = await Service.findById(id);
        if (!service) {
            const error = new Error("Service not found.");
            error.statusCode = 404;
            return next(error);
        }
        res.status(200).json(service);
    } catch (error) {
        next(error);
    }
};


const UpdateService = async (req, res, next) => {
    const { id } = req.params;
    const updateData = req.body;

    if (!id) {
        const error = new Error("SErvice ID is required.");
        error.statusCode = 400;
        return next(error);
    }

    try {
        const updateService = await Service.findByIdAndUpdate(id, updateData, {
            new: true,
            runValidators: true,
        });
        if (!updateService) {
            const error = new Error("Service not found.");
            error.statusCode = 404;
            return next(error);
        }

        res.status(200).json(updateService);
    } catch (error) {
        next(error);
    }
};


const DeleteService = async (req, res, next) => {
    const { id } = req.params;
  
    if (!id) {
      const error = new Error("Service ID is required.");
      error.statusCode = 400;
      return next(error);
    }
  
    try {
      const deleteService = await Service.findByIdAndDelete(id);
      if (!deleteService) {
        const error = new Error("Service not found.");
        error.statusCode = 404;
        return next(error);
      }
  
      res.status(200).json({
        service: deleteService,
        message: "Service  Deleted",
      });
    } catch (error) {
      next(error);
    }
  };


module.exports = {
    CreateService,
    GetAllServices,
    GetService,
    UpdateService,
    DeleteService
}
