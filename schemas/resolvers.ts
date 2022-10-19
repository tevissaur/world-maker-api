import { Character, Country, Class, City, Race, User, World, Religion, God, Monster, Region } from '../models'

import { signToken } from '../utils/auth'


const resolvers = {
    Query: {
        characters: async () => {
            return Character.find().populate('race')
        },
        cities: async () => {
            return City.find()
        },
        races: async () => {
            return Race.find()
        },
        countries: async () => {
            return Country.find()
        },
        classes: async () => {
            return Class.find()
        },
        me: async (parent, { _id }) => {
            return User.findById(_id)
        },
        worlds: async () => {
            return World.find()
        },
        userWorlds: async (parent, { creator }) => {
            try {
                const worlds = await World.find({ creator })
                return worlds
            } catch (err) {
                console.log(err)
                return err
            }
        },
        world: async (parent, { name }) => {
            try {
                return await World.findOne({ name })
            } catch (err) {
                return err
            }

        },
        singleCharacter: async (parent, { _id }) => {
            return await Character.findById(_id).populate('race')
        },
        singleReligion: async (parent, { _id }) => {
            try {
                return await Religion.findById(_id).populate('gods')
            } catch (error) {
                console.log(error)
                return error
            }
        },
        singleGod: async (parent, { _id }) => {
            try {
                return await God.findById(_id)
            } catch (error) {
                console.log(error)
                return error
            }
        },
        singleMonster: async (parent, { _id }) => {
            try {
                return await Monster.findById(_id)
            } catch (error) {
                console.log(error)
                return error
            }
        },
        singleRegion: async (parent, { _id }) => {
            try {
                return await Region.findById(_id)
            } catch (error) {
                console.log(error)
                return error
            }
        },
    },
    Mutation: {
        createUser: async (parent, args) => {
            try {

                const user = await User.create(args)
                const token = signToken(user)
                return { user, token }

            } catch (err) {
                console.log(err)
                return err
            }
        },
        updateToken: async (parents, args) => {

        },
        login: async (parent, { email, password }) => {
            try {
                const user = await User.findOne({ email })

                if (!user) {
                    throw new Error('No Profile with that email')
                }

                const correctPw = await user.isCorrectPassword(password)

                if (!correctPw) {
                    throw new Error('Incorrect password!');
                }
                const token = signToken(user)
                return { token, user }
            } catch (err) {
                console.log(err)
            }
        },
        createWorld: async (parent, { world }) => {
            try {
                return await World.create(world)
            } catch (err) {
                return err
            }
        },
        // TODO: Optimize this shit
        updateWorld: async (parent, { world }) => {
            try {
                return await World.findByIdAndUpdate(world._id, { $set: { ...world } }, { new: true })
            } catch (err) {
                return err
            }
        },
        deleteWorld: async (parent, { worldId }) => {
            try {
                await World.findByIdAndDelete(worldId)
                return worldId
            } catch (err) {
                return err
            }
        },
        createCharacter: async (parent, { character }) => {
            try {
                return await Character.create(character)
            } catch (error) {
                console.log(error)
            }

        },
        updateCharacter: async (parent, { character, worldId }) => {
            try {
                return await Character.findByIdAndUpdate(character._id, { $set: { ...character } }, { new: true })
                
            } catch (error) {
                return error
            }

        },
        deleteCharacter: async (parent, { characterId, worldId }) => {
            try {
                await Character.findByIdAndDelete(characterId)
                return characterId
            } catch (error) {
                return error
            }

        },
        createMonster: async (parent, { monster }) => {
            try {
                return await Monster.create(monster)
            } catch (error) {
                return error
            }
        },
        updateMonster: async (parent, { monster, worldId, regionId }) => {
            try {
                return await Monster.findById(monster._id, { $set: { ...monster } }, { new: true })
            } catch (error) {
                return error
            }
        },
        deleteMonster: async (parent, { monsterId, worldId, regionId }) => {
            try {
                return await Monster.findByIdAndDelete(monsterId)
                
            } catch (error) {
                return error
            }
        },
        createRegion: async (parent, { region, worldId }) => {
            try {
                const newRegion = await Region.create(region)
                const updatedWorld = await World.findOneAndUpdate({ _id: worldId }, {
                    $push: { regions: newRegion }
                }, {
                    new: true
                })
                return updatedWorld
            } catch (error) {
                console.log(error)
            }
        },
        updateRegion: async (parent, { region, worldId }) => {
            try {
                const updatedRegion = await Region.findByIdAndUpdate(region._id, { $set: { ...region } }, { new: true })
                const world = await World.findById(worldId).populate([
                    {
                        path: 'regions',
                        model: 'Region',
                        populate: {
                            path: 'countries',
                            model: 'Country',
                            populate: [
                                {
                                    path: 'cities',
                                    model: 'City'
                                },
                                {
                                    path: 'religions',
                                    model: 'Religion',
                                    populate: {
                                        path: 'gods',
                                        model: 'God'
                                    }
                                }
                            ]
                        }
                    },
                    {
                        path: 'religions',
                        model: 'Religion',
                        populate: {
                            path: 'gods',
                            model: 'God'
                        }
                    },
                    {
                        path: 'characters',
                        model: 'Character',
                        populate: {
                            path: 'race',
                            model: 'Race'
                        }
                    }
                ])
                return world
            } catch (error) {
                console.log(error)
            }
        },
        deleteRegion: async (parent, { regionId, worldId }) => {
            try {
                const deleted = await Region.findByIdAndDelete(regionId)
                const world = await World.findById(worldId).populate([
                    {
                        path: 'regions',
                        model: 'Region',
                        populate: {
                            path: 'countries',
                            model: 'Country',
                            populate: [
                                {
                                    path: 'cities',
                                    model: 'City'
                                },
                                {
                                    path: 'religions',
                                    model: 'Religion',
                                    populate: {
                                        path: 'gods',
                                        model: 'God'
                                    }
                                }
                            ]
                        }
                    },
                    {
                        path: 'religions',
                        model: 'Religion',
                        populate: {
                            path: 'gods',
                            model: 'God'
                        }
                    },
                    {
                        path: 'characters',
                        model: 'Character',
                        populate: {
                            path: 'race',
                            model: 'Race'
                        }
                    }
                ])
                return world
            } catch (error) {
                console.log(error)
            }
        },
        createReligion: async (parent, { religion, worldId }) => {
            try {
                const newReligion = await Religion.create(religion)
                const updatedWorld = await World.findOneAndUpdate({ _id: worldId }, {
                    $push: { religions: newReligion }
                }, {
                    new: true
                }).populate([
                    {
                        path: 'regions',
                        model: 'Region',
                        populate: {
                            path: 'countries',
                            model: 'Country',
                            populate: [
                                {
                                    path: 'cities',
                                    model: 'City'
                                },
                                {
                                    path: 'religions',
                                    model: 'Religion',
                                    populate: {
                                        path: 'gods',
                                        model: 'God'
                                    }
                                }
                            ]
                        }
                    },
                    {
                        path: 'religions',
                        model: 'Religion',
                        populate: {
                            path: 'gods',
                            model: 'God'
                        }
                    },
                    {
                        path: 'characters',
                        model: 'Character',
                        populate: {
                            path: 'race',
                            model: 'Race'
                        }
                    }
                ])
                return updatedWorld
            } catch (error) {
                console.log(error)
            }
        },
        updateReligion: async (parent, { religion, worldId }) => {
            try {
                const updatedReligion = await Religion.findByIdAndUpdate(religion._id, { $set: { ...religion } })
                const world = await World.findOneAndUpdate(worldId).populate([
                    {
                        path: 'regions',
                        model: 'Region',
                        populate: {
                            path: 'countries',
                            model: 'Country',
                            populate: [
                                {
                                    path: 'cities',
                                    model: 'City'
                                },
                                {
                                    path: 'religions',
                                    model: 'Religion',
                                    populate: {
                                        path: 'gods',
                                        model: 'God'
                                    }
                                }
                            ]
                        }
                    },
                    {
                        path: 'religions',
                        model: 'Religion',
                        populate: {
                            path: 'gods',
                            model: 'God'
                        }
                    },
                    {
                        path: 'characters',
                        model: 'Character',
                        populate: {
                            path: 'race',
                            model: 'Race'
                        }
                    }
                ])
                return world
            } catch (error) {
                console.log(error)
            }
        },
        deleteReligion: async (parent, { religionId, worldId }) => {
            try {
                const deleted = await Religion.findByIdAndDelete(religionId)
                const world = await World.findById(worldId).populate([
                    {
                        path: 'regions',
                        model: 'Region',
                        populate: {
                            path: 'countries',
                            model: 'Country',
                            populate: [
                                {
                                    path: 'cities',
                                    model: 'City'
                                },
                                {
                                    path: 'religions',
                                    model: 'Religion',
                                    populate: {
                                        path: 'gods',
                                        model: 'God'
                                    }
                                }
                            ]
                        }
                    },
                    {
                        path: 'religions',
                        model: 'Religion',
                        populate: {
                            path: 'gods',
                            model: 'God'
                        }
                    },
                    {
                        path: 'characters',
                        model: 'Character',
                        populate: {
                            path: 'race',
                            model: 'Race'
                        }
                    }
                ])
                return world
            } catch (error) {
                console.log(error)
            }
        },
        createGod: async (parent, { god, worldId, religionId }) => {
            try {
                const newGod = await God.create(god)
                const updatedReligion = await Religion.findByIdAndUpdate(religionId, {
                    $push: { gods: newGod }
                }, {
                    new: true
                })
                const world = await World.findById(worldId).populate([
                    {
                        path: 'regions',
                        model: 'Region',
                        populate: {
                            path: 'countries',
                            model: 'Country',
                            populate: [
                                {
                                    path: 'cities',
                                    model: 'City'
                                },
                                {
                                    path: 'religions',
                                    model: 'Religion',
                                    populate: {
                                        path: 'gods',
                                        model: 'God'
                                    }
                                }
                            ]
                        }
                    },
                    {
                        path: 'religions',
                        model: 'Religion',
                        populate: {
                            path: 'gods',
                            model: 'God'
                        }
                    },
                    {
                        path: 'characters',
                        model: 'Character',
                        populate: {
                            path: 'race',
                            model: 'Race'
                        }
                    }
                ])

                return world
            } catch (error) {
                console.log(error)
            }
        },
        updateGod: async (parent, { god, worldId }) => {
            try {
                const updatedGod = await god.findByIdAndUpdate(god._id, { $set: { ...god } })
                const world = await World.findOneAndUpdate(worldId).populate([
                    {
                        path: 'regions',
                        model: 'Region',
                        populate: {
                            path: 'countries',
                            model: 'Country',
                            populate: [
                                {
                                    path: 'cities',
                                    model: 'City'
                                },
                                {
                                    path: 'religions',
                                    model: 'Religion',
                                    populate: {
                                        path: 'gods',
                                        model: 'God'
                                    }
                                }
                            ]
                        }
                    },
                    {
                        path: 'religions',
                        model: 'Religion',
                        populate: {
                            path: 'gods',
                            model: 'God'
                        }
                    },
                    {
                        path: 'characters',
                        model: 'Character',
                        populate: {
                            path: 'race',
                            model: 'Race'
                        }
                    }
                ])
                return world
            } catch (error) {
                console.log(error)
            }
        },
        deleteGod: async (parent, { godId, worldId }) => {
            try {
                const deleted = await God.findByIdAndDelete(godId)
                const world = await World.findById(worldId).populate([
                    {
                        path: 'regions',
                        model: 'Region',
                        populate: {
                            path: 'countries',
                            model: 'Country',
                            populate: [
                                {
                                    path: 'cities',
                                    model: 'City'
                                },
                                {
                                    path: 'religions',
                                    model: 'Religion',
                                    populate: {
                                        path: 'gods',
                                        model: 'God'
                                    }
                                }
                            ]
                        }
                    },
                    {
                        path: 'religions',
                        model: 'Religion',
                        populate: {
                            path: 'gods',
                            model: 'God'
                        }
                    },
                    {
                        path: 'characters',
                        model: 'Character',
                        populate: {
                            path: 'race',
                            model: 'Race'
                        }
                    }
                ])
                return world
            } catch (error) {
                console.log(error)
            }
        }
    }

}

export default resolvers;