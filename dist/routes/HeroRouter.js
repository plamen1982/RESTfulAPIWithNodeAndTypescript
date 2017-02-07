"use strict";
const express_1 = require('express');
const Heroes = require('../../data');
class HeroRouter {
    /*
    * Initialize the HeroRouter
    *
    * */
    constructor() {
        this.router = express_1.Router();
        this.init();
    }
    /*
    * Get all heroes
    *
    * */
    getAll(req, res, next) {
        res.send(Heroes);
    }
    /*
    * GET one hero by id
    * */
    getOne(req, res, next) {
        let query = parseInt(req.params.id);
        let hero = Heroes.find(hero => hero.id === query);
        if (hero) {
            res.status(200)
                .send({
                message: 'Success',
                status: res.status,
                hero
            });
        }
        else {
            res.status(400)
                .send({
                message: 'No hero found with the given id',
                status: res.status
            });
        }
    }
    /*
    * Take each handler, and attach to one of the Express.Router's
    * endpoints
    * */
    init() {
        this.router.get('/', this.getAll);
        this.router.get('/:id', this.getOne);
    }
}
exports.HeroRouter = HeroRouter;
const heroRoutes = new HeroRouter();
heroRoutes.init();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = heroRoutes.router;
