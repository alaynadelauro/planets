import { dbContext } from "../db/DbContext.js"

class ColonyService {
    async createColony(newColony) {
        const colony = await dbContext.Colony.create(newColony)
        return colony
    }
}

export const colonyService = new ColonyService()