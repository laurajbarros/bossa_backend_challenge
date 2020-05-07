var express = require("express");
const ToolsController = require("../controllers/ToolsController");
var router = express.Router();

router.get("/", ToolsController.listTools);
router.get("/:id", ToolsController.getToolById);
router.post("/", ToolsController.createTool);
router.delete("/:id", ToolsController.deleteTool);

module.exports = router;
