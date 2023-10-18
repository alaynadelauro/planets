import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { colonyService } from "../services/ConolyService.js";

export class ColonyController extends BaseController {
    constructor() {
        super('api/colonies')
        this.router
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('', this.createColony)
    }
    async createColony(req, res, next) {
        try {
            let newColony = req.body
            const colony = await colonyService.createColony(newColony)
            return res.send(colony)
        }
        catch (error) {
            next(error)
        }
    }
}