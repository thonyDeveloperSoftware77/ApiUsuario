"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const recomendacionController_1 = require("../CONTROLLERS/recomendacionController");
const router = (0, express_1.Router)();
router.get('/:id', recomendacionController_1.getRecomendacion);
exports.default = router;
//# sourceMappingURL=recomendacionRouter.js.map