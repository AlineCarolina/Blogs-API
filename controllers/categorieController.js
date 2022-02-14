const categorieService = require('../services/categorieService');

const create = async (req, res, next) => {
    const { name } = req.body;
    try {
        const result = await categorieService.create({ name });
        return res.status(201).json(result);
    } catch (error) {
        return next(error);
    }
};

const getAll = async (req, res, next) => {
    try {
        const result = await categorieService.getAll();

        return res.status(200).json(result);
    } catch (error) {
        return next(error);
    }
};

module.exports = {
    create,
    getAll,
};