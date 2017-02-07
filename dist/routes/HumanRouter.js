"use strict";
const express_1 = require('express');
const Humans = require('../../data-h');
class HumanRouter {
    constructor() {
        this.router = express_1.Router();
        this.init();
    }
    getAll(request, respose, next) {
        respose.send(Humans);
    }
    init() {
        this.router.get('/', this.getAll);
    }
}
const humanRouter = new HumanRouter();
humanRouter.init();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = humanRouter.router;
