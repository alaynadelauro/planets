import { dbContext } from "../db/DbContext.js"

class PlanetService {
    async getPlanets() {
        const planets = await dbContext.Planet.find()
        return planets
    }
    async getPlanetsByGalaxy(galaxyId) {
        const planets = await dbContext.Planet.find({ galaxy: galaxyId })
        return planets
    }
    async createPlanet(createdPlanet) {
        const planet = await dbContext.Planet.create(createdPlanet)
        return planet
    }
}

export const planetService = new PlanetService()