import { dbContext } from "../db/DbContext.js";

class GalaxyService {
    async getGalaxies() {
        const galaxies = await dbContext.Galaxy.find()
        return galaxies
    }
    async makeGalaxy(newGalaxy) {
        const galaxy = await dbContext.Galaxy.create(newGalaxy)
        return (galaxy)
    }
}


export const galaxyService = new GalaxyService()