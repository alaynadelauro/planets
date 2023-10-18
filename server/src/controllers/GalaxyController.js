import { Auth0Provider } from "@bcwdev/auth0provider";
import { galaxyService } from "../services/GalaxyService.js";
import BaseController from "../utils/BaseController.js";
import { planetService } from "../services/PlanetService.js";

export class GalaxyController extends BaseController {
    constructor() {
        super('api/galaxies')
        this.router
            .get('', this.getGalaxies)
            .get('/:galaxyId/planets', this.getPlanetsByGalaxy)
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('', this.makeGalaxy)
    }
    async getGalaxies(req, res, next) {
        try {
            const galaxy = await galaxyService.getGalaxies()
            return res.send(galaxy)
        } catch (error) {
            next(error)
        }
    }
    async getPlanetsByGalaxy(req, res, next) {
        try {
            const galaxyId = req.params.galaxyId
            const planets = await planetService.getPlanetsByGalaxy(galaxyId)
            return res.send(planets)
        } catch (error) {
            next(error)
        }
    }
    async makeGalaxy(req, res, next) {
        try {
            const newGalaxy = req.body
            const galaxyCreator = req.userInfo
            newGalaxy.creatorId = galaxyCreator.id
            const createdGalaxy = await galaxyService.makeGalaxy(newGalaxy)
            return res.send(createdGalaxy)
        } catch (error) {
            next(error)
        }
    }
}