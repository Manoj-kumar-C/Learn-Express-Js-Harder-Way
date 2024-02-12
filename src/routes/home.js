const express = require("express");
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Home
 *   description: API endpoints for testing
 */

/**
 * @swagger
 * /home:
 *   get:
 *     summary: Test endpoint
 *     tags: [Home]
 *     description: Returns a sample response
 *     responses:
 *       200:
 *         description: A successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 title:
 *                   type: string
 *                   example: Express Testing
 *                 message:
 *                   type: string
 *                   example: The app is working properly!
 */
router.get("/", async (req, res, next) => {
  return res.status(200).json({
    title: "Express Testing",
    message: "The app is working properly!",
  });
});

/**
 * @swagger
 * /home/testblue:
 *   get:
 *     summary: Test blue endpoint
 *     tags: [Home]
 *     description: Returns a sample response for blue test
 *     responses:
 *       200:
 *         description: A successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 title:
 *                   type: string
 *                   example: Express Testing
 *                 message:
 *                   type: string
 *                   example: The app is working properly!
 */
router.get("/testblue", async (req, res, next) => {
  return res.status(200).json({
    title: "Express Testing",
    message: "The app is working properly!",
  });
});

/**
 * @swagger
 * /home/testred:
 *   get:
 *     summary: Test red endpoint
 *     tags: [Home]
 *     description: Returns a sample response for red test
 *     responses:
 *       200:
 *         description: A successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 title:
 *                   type: string
 *                   example: Express Testing
 *                 message:
 *                   type: string
 *                   example: The app is working properly!
 */
router.get("/testred", async (req, res, next) => {
  return res.status(200).json({
    title: "Express Testing",
    message: "The app is working properly!",
  });
});

module.exports = router;
