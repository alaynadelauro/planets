import { dbContext } from "../db/DbContext.js"

class SpeciesService {
    async getSpecies() {
        const species = await dbContext.Species.find()
        return species
    }
    async makeSpecies(newSpecies) {
        const species = await dbContext.Species.create(newSpecies)
        return species
    }
}

export const speciesService = new SpeciesService()