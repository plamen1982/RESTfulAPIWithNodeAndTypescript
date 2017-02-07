import * as path from 'path'
import * as express from 'express'
import * as logger from 'morgan'
import * as bodyParser from 'body-parser'

import HeroRouter from './routes/HeroRouter'
import HumanRouter from './routes/HumanRouter'

// Creates and configures an ExpressJS web server.

class App {

    // ref to Express instance
    public express: express.Application

//Run configuration methods on the Express instance.

    constructor() {
        this.express = express()
        this.middleware()
        this.routes()
    }

    // Configure Express middleware.

    private middleware(): void {
        this.express.use(logger('dev'))
        this.express.use(bodyParser.json())
        this.express.use(bodyParser.urlencoded({extended: false}))
    }

// Configure API endpoints.

    private routes(): void {

        /* This is just to get up and running, and to make sure what we've got is
         * working so far. This function will change when we start to add more
         * API endpoints */

        let router = express.Router();
        router.get('/', (req, res, next) => {
            res.json({
                message: 'RESTFul API with Typescript and Node.js'
            })
        })
        this.express.use('/', router);
        this.express.use('/api/v1/heroes', HeroRouter)
        this.express.use('/api/v1/humans', HumanRouter)
    }
}

export default new App().express