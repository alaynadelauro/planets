import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ValueSchema } from '../models/Value'
import { galaxySchema } from '../models/Galaxy.js';
import { planetSchema } from '../models/Planet.js';
import { speciesSchema } from '../models/Species.js';
import { colonySchema } from '../models/Colony.js';

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Galaxy = mongoose.model('Galaxy', galaxySchema);
  Planet = mongoose.model('Planet', planetSchema);
  Species = mongoose.model('Species', speciesSchema);
  Colony = mongoose.model('Colonies', colonySchema)
}

export const dbContext = new DbContext()
