"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const watchController_1 = require("../CONTROLLERS/watchController");
const router = (0, express_1.Router)();
router.post('/', watchController_1.postWatch);
router.delete('/', watchController_1.deleteWatch);
exports.default = router;
//# sourceMappingURL=watchRouter.js.map