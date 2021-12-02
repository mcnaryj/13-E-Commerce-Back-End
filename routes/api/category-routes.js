const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      // find all categories
      // be sure to include its associated Products
      include: [{ model: Category }],
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findAll({
      // find all categories
      // be sure to include its associated Products
      include: [{ model: Category }],
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', (req, res) => {
  try {
    const categoryData = await Category.findAll({
      // find all categories
      // be sure to include its associated Products
      include: [{ model: Category }],
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
  // create a new category
});

router.put('/:id', (req, res) => {
  try {
    const categoryData = await Category.findAll({
      // find all categories
      // be sure to include its associated Products
      include: [{ model: Category }],
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  try {
    const categoryData = await Category.findAll({
      // find all categories
      // be sure to include its associated Products
      include: [{ model: Category }],
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
  // delete a category by its `id` value
});

module.exports = router;
