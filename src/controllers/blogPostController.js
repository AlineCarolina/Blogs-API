const blogPostService = require('../services/blogPostService');
const categorieSevice = require('../services/categorieService');
const { decodeToken } = require('../middlewares/token');

const create = async (req, res, next) => {
    try {
        const { authorization } = req.headers;

        const { title, content, categoryIds } = req.body;
 
        const verifyCategory = await categorieSevice.findCategorie(categoryIds);

        if (verifyCategory) {
            return res.status(400).json({ message: '"categoryIds" not found' });
        }

        const userId = decodeToken(authorization);

        const { id } = await blogPostService.create({ title, content, categoryIds });

        return res.status(201).json({ id, userId, title, content });
    } catch (error) {
        return next(error);
    }
};

const getAll = async (_req, res, next) => {
    try {
        const result = await blogPostService.getAll();

        return res.status(200).json(result);
    } catch (error) {
        return next(error);
    }
};

module.exports = {
    create,
    getAll,
};