import { Auth0Provider } from "@bcwdev/auth0provider";
import { planetService } from "../services/PlanetService.js";
import BaseController from "../utils/BaseController.js";

export class PlanetController extends BaseController {
    constructor() {
        super('api/planets')
        this.router
            .get('', this.getPlanets)
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('', this.createPlanet)
    }
    async getPlanets(req, res, next) {
        try {
            const planets = await planetService.getPlanets()
            return res.send(planets)
        } catch (error) {
            next(error)
        }
    }
    async createPlanet(req, res, next) {
        try {
            const newPlanet = req.body
            const userId = req.userInfo
            newPlanet.creatorId = userId.id
            const createdPlanet = await planetService.createPlanet(newPlanet)
            return res.send(createdPlanet)
        } catch (error) {
            next(error)
        }
    }
}