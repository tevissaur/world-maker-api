import {
	Character,
	Country,
	Class,
	City,
	Race,
	User,
	World,
	Religion,
	God,
	Monster,
	Region,
	History,
	Organization,
} from "../../models";
import { MutationResolvers } from "../../__generated__/resolvers-types";

import { signToken } from "../../utils/auth";

const Mutation: MutationResolvers = {
	createUser: async (parent, args) => {
		try {
			const user = await User.create(args);
			const token = signToken(user);
			return { user, token };
		} catch (err) {
			return (err);
			return err;
		}
	},
	login: async (parent, { email, password }) => {
		try {
			const user = await User.findOne({ email });

			if (!user) throw new Error("No Profile with that email");

			const correctPw = await user.schema.methods.isCorrectPassword(password, user.password);

			if (!correctPw) throw new Error("Incorrect password!");
			const token = signToken(user);

			return { token, user };
		} catch (err) {
			return (err);
		}
	},
	createWorld: async (parent, { world }) => {
		try {
			return await World.create(world);
		} catch (err) {
			return err;
		}
	},
	// TODO: Optimize this shit
	updateWorld: async (parent, { world }) => {
		try {
			return await World.findByIdAndUpdate(
				world._id,
				{ $set: { ...world } },
				{ new: true }
			);
		} catch (err) {
			return err;
		}
	},
	deleteWorld: async (parent, { worldId }) => {
		try {
			await World.findByIdAndDelete(worldId);
			return worldId;
		} catch (err) {
			return err;
		}
	},
	createCharacter: async (parent, { character }) => {
		try {
			return await Character.create(character);
		} catch (error) {
			return (error);
		}
	},
	updateCharacter: async (parent, { character, worldId }) => {
		try {
			return await Character.findByIdAndUpdate(
				character._id,
				{ $set: { ...character } },
				{ new: true }
			);
		} catch (error) {
			return error;
		}
	},
	deleteCharacter: async (parent, { characterId, worldId }) => {
		try {
			await Character.findByIdAndDelete(characterId);
			return characterId;
		} catch (error) {
			return error;
		}
	},
	createMonster: async (parent, { monster }) => {
		try {
			return await Monster.create(monster);
		} catch (error) {
			return error;
		}
	},
	updateMonster: async (parent, { monster, worldId, regionId }) => {
		try {
			return await Monster.findById(
				monster._id,
				{ $set: { ...monster } },
				{ new: true }
			);
		} catch (error) {
			return error;
		}
	},
	deleteMonster: async (parent, { monsterId, worldId }) => {
		try {
			return await Monster.findByIdAndDelete(monsterId);
		} catch (error) {
			return error;
		}
	},
	createRegion: async (parent, { region, worldId }) => {
		try {
			const newRegion = await Region.create(region);
			const updatedWorld = await World.findOneAndUpdate(
				{ _id: worldId },
				{
					$push: { regions: newRegion },
				},
				{
					new: true,
				}
			);
			return newRegion;
		} catch (error) {
			return error;
		}
	},
	updateRegion: async (parent, { region, worldId }) => {
		try {
			const updatedRegion = await Region.findByIdAndUpdate(
				region._id,
				{ $set: { ...region } },
				{ new: true }
			);
			const world = await World.findById(worldId).populate([
				{
					path: "regions",
					model: "Region",
					populate: {
						path: "countries",
						model: "Country",
						populate: [
							{
								path: "cities",
								model: "City",
							},
							{
								path: "religions",
								model: "Religion",
								populate: {
									path: "gods",
									model: "God",
								},
							},
						],
					},
				},
				{
					path: "religions",
					model: "Religion",
					populate: {
						path: "gods",
						model: "God",
					},
				},
				{
					path: "characters",
					model: "Character",
					populate: {
						path: "race",
						model: "Race",
					},
				},
			]);
			return updatedRegion;
		} catch (error) {
			return error;
		}
	},
	deleteRegion: async (parent, { regionId, worldId }) => {
		try {
			const deleted = await Region.findByIdAndDelete(regionId);
			const world = await World.findById(worldId).populate([
				{
					path: "regions",
					model: "Region",
					populate: {
						path: "countries",
						model: "Country",
						populate: [
							{
								path: "cities",
								model: "City",
							},
							{
								path: "religions",
								model: "Religion",
								populate: {
									path: "gods",
									model: "God",
								},
							},
						],
					},
				},
				{
					path: "religions",
					model: "Religion",
					populate: {
						path: "gods",
						model: "God",
					},
				},
				{
					path: "characters",
					model: "Character",
					populate: {
						path: "race",
						model: "Race",
					},
				},
			]);
			return world;
		} catch (error) {
			return error;
		}
	},
	createReligion: async (parent, { religion, worldId }) => {
		try {
			const newReligion = await Religion.create(religion);
			const updatedWorld = await World.findOneAndUpdate(
				{ _id: worldId },
				{
					$push: { religions: newReligion },
				},
				{
					new: true,
				}
			).populate([
				{
					path: "regions",
					model: "Region",
					populate: {
						path: "countries",
						model: "Country",
						populate: [
							{
								path: "cities",
								model: "City",
							},
							{
								path: "religions",
								model: "Religion",
								populate: {
									path: "gods",
									model: "God",
								},
							},
						],
					},
				},
				{
					path: "religions",
					model: "Religion",
					populate: {
						path: "gods",
						model: "God",
					},
				},
				{
					path: "characters",
					model: "Character",
					populate: {
						path: "race",
						model: "Race",
					},
				},
			]);
			return newReligion;
		} catch (error) {
			return error;
		}
	},
	updateReligion: async (parent, { religion, worldId }) => {
		try {
			return await Religion.findByIdAndUpdate(religion._id, {
				$set: { ...religion },
			});
			
		} catch (error) {
			return (error);
		}
	},
	deleteReligion: async (parent, { religionId, worldId }) => {
		try {
			const deleted = await Religion.findByIdAndDelete(religionId);
			const world = await World.findById(worldId).populate([
				{
					path: "regions",
					model: "Region",
					populate: {
						path: "countries",
						model: "Country",
						populate: [
							{
								path: "cities",
								model: "City",
							},
							{
								path: "religions",
								model: "Religion",
								populate: {
									path: "gods",
									model: "God",
								},
							},
						],
					},
				},
				{
					path: "religions",
					model: "Religion",
					populate: {
						path: "gods",
						model: "God",
					},
				},
				{
					path: "characters",
					model: "Character",
					populate: {
						path: "race",
						model: "Race",
					},
				},
			]);
			return world;
		} catch (error) {
			return (error);
		}
	},
	createGod: async (parent, { god, worldId, religionId }) => {
		try {
			const newGod = await God.create(god);
			const updatedReligion = await Religion.findByIdAndUpdate(
				religionId,
				{
					$push: { gods: newGod },
				},
				{
					new: true,
				}
			);
			const world = await World.findById(worldId).populate([
				{
					path: "regions",
					model: "Region",
					populate: {
						path: "countries",
						model: "Country",
						populate: [
							{
								path: "cities",
								model: "City",
							},
							{
								path: "religions",
								model: "Religion",
								populate: {
									path: "gods",
									model: "God",
								},
							},
						],
					},
				},
				{
					path: "religions",
					model: "Religion",
					populate: {
						path: "gods",
						model: "God",
					},
				},
				{
					path: "characters",
					model: "Character",
					populate: {
						path: "race",
						model: "Race",
					},
				},
			]);

			return world;
		} catch (error) {
			return (error);
		}
	},
	updateGod: async (parent, { god, worldId }) => {
		try {
			return await God.findByIdAndUpdate(god._id, {
				$set: { ...god },
			});
		} catch (error) {
			return (error);
		}
	},
	deleteGod: async (parent, { godId, worldId }) => {
		try {
			return await God.findByIdAndDelete(godId);
		} catch (error) {
			return (error);
		}
	},
};

export default Mutation;
