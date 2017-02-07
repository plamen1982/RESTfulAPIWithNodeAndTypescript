import {Router, Request, Response, NextFunction} from 'express'
const Humans = require('../../data-h');

class HumanRouter {
    router: Router;

    constructor(){
        this.router = Router();
        this.init()
    }
    getAll(request: Request, respose: Response, next: NextFunction){
     respose.send(Humans)
}

        init(){
        this.router.get('/', this.getAll)
    }
}

const humanRouter = new HumanRouter()
humanRouter.init()

export default humanRouter.router