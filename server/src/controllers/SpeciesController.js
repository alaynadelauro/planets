import { Auth0Provider } from "@bcwdev/auth0provider";
import { speciesService } from "../services/SpeciesService.js";
import BaseController from "../utils/BaseController.js";

export class SpeciesController extends BaseController {
    constructor() {
        super('api/species')
        this.router
            .get('', this.getSpecies)
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('', this.makeSpecies)
    }
    async getSpecies(req, res, next) {
        try {
            const species = await speciesService.getSpecies()
            return res.send(species)
        } catch (error) {
            next(error)
        }
    }
    async makeSpecies(req, res, next) {
        try {
            let newSpecies = req.body
            const Species = await speciesService.makeSpecies(newSpecies)
            return res.send(Species)
        } catch (error) {
            next(error)
        }
    }
}