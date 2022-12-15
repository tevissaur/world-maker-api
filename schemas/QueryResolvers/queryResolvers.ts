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

const Query = {
	getSingleSubject: async (parent, { _id, modelName }) => {
		try {
			switch (modelName) {
				case "User":
					return await User.findById(_id);

				case "Character":
					return await Character.findById(_id);

				case "Religion":
					return await Religion.findById(_id);

				case "Region":
					return await Region.findById(_id);

				case "City":
					return await City.findById(_id);

				case "Country":
					return await Country.findById(_id);

				case "World":
					return await World.findById(_id);

				case "Monster":
					return await Monster.findById(_id);

				case "God":
					return await God.findById(_id);

				case "Class":
					return await Class.findById(_id);

				case "History":
					return await History.findById(_id);

				case "Race":
					return await Race.findById(_id);

				case "Organization":
					return await Organization.findById(_id);

				default:
					break;
			}
		} catch (error) {
			return error;
		}
	},
	getAllOfOneSubject: async (parent, { modelName }) => {
		try {
			console.log(modelName);
			switch (modelName) {
				case "User":
					return await User.find();

				case "Character":
					return await Character.find();

				case "Religion":
					return await Religion.find();

				case "Region":
					return await Region.find();

				case "City":
					return await City.find();

				case "Country":
					return await Country.find();

				case "World":
					return await World.find();

				case "Monster":
					return await Monster.find();

				case "God":
					return await God.find();

				case "Class":
					return await Class.find();

				case "History":
					return await History.find();

				case "Race":
					return await Race.find();

				case "Organization":
					return await Organization.find();

				default:
					break;
			}
		} catch (error) {
			return error;
		}
	},
};


export default Query