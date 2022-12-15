import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Article = {
  __typename?: 'Article';
  _id?: Maybe<Scalars['ID']>;
  body?: Maybe<Scalars['String']>;
  category?: Maybe<Category>;
  subject?: Maybe<ArticleSubject>;
  subjectModel?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

/** Types */
export type ArticleSubject = Character | City | Class | Country | God | Landmark | Monster | Race | Region | Religion | User | World;

export enum ArticleSubjectModel {
  Character = 'CHARACTER',
  User = 'USER'
}

export type Auth = {
  __typename?: 'Auth';
  token: Scalars['ID'];
  user?: Maybe<User>;
};

export type Calendar = {
  __typename?: 'Calendar';
  _id?: Maybe<Scalars['ID']>;
  months?: Maybe<Array<Maybe<CalendarMonth>>>;
  numDaysPerYear?: Maybe<Scalars['Int']>;
  week?: Maybe<CalendarWeek>;
};

export type CalendarDay = {
  __typename?: 'CalendarDay';
  events?: Maybe<Array<Maybe<Scalars['String']>>>;
  name?: Maybe<Scalars['String']>;
};

export type CalendarMonth = {
  __typename?: 'CalendarMonth';
  name?: Maybe<Scalars['String']>;
  numDaysPerMonth?: Maybe<Scalars['Int']>;
};

export type CalendarWeek = {
  __typename?: 'CalendarWeek';
  days?: Maybe<Array<Maybe<CalendarDay>>>;
  numDaysPerWeek?: Maybe<Scalars['Int']>;
};

export type Category = {
  __typename?: 'Category';
  _id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  parentCategory?: Maybe<Category>;
  subCategories?: Maybe<Array<Maybe<Category>>>;
};

export type Character = {
  __typename?: 'Character';
  _id?: Maybe<Scalars['ID']>;
  alignment?: Maybe<Scalars['String']>;
  backstory?: Maybe<Scalars['String']>;
  classes?: Maybe<Array<Maybe<CharacterClasses>>>;
  creator?: Maybe<User>;
  description?: Maybe<Scalars['String']>;
  isNPC?: Maybe<Scalars['Boolean']>;
  motives?: Maybe<Motives>;
  name?: Maybe<Scalars['String']>;
  organizations?: Maybe<Array<Maybe<Organization>>>;
  race?: Maybe<Race>;
  residentCity?: Maybe<City>;
  size?: Maybe<Scalars['String']>;
  world?: Maybe<World>;
};

export type CharacterClasses = {
  __typename?: 'CharacterClasses';
  class?: Maybe<Class>;
  level?: Maybe<Scalars['Int']>;
  subClass?: Maybe<SubClass>;
};

export type CharacterInput = {
  _id?: InputMaybe<Scalars['ID']>;
  backstory?: InputMaybe<Scalars['String']>;
  bonds?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  class?: InputMaybe<ClassInput>;
  description?: InputMaybe<Scalars['String']>;
  fears?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  goals?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name?: InputMaybe<Scalars['String']>;
  race?: InputMaybe<RaceInput>;
  size?: InputMaybe<Scalars['String']>;
};

export type City = {
  __typename?: 'City';
  _id?: Maybe<Scalars['ID']>;
  country?: Maybe<Country>;
  name?: Maybe<Scalars['String']>;
  notableCharacters?: Maybe<Array<Maybe<Character>>>;
};

export type CityInput = {
  _id?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type Class = {
  __typename?: 'Class';
  _id?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
  features?: Maybe<Array<Maybe<ClassFeatures>>>;
  name?: Maybe<Scalars['String']>;
  subClasses?: Maybe<SubClass>;
};

export type ClassFeatures = {
  __typename?: 'ClassFeatures';
  name?: Maybe<Scalars['String']>;
  requiredLevel?: Maybe<Scalars['Int']>;
};

export type ClassInput = {
  _id?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type Country = {
  __typename?: 'Country';
  _id?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
  government?: Maybe<Government>;
  name?: Maybe<Scalars['String']>;
  region?: Maybe<Region>;
};

export type CountryInput = {
  _id?: InputMaybe<Scalars['ID']>;
  cities?: InputMaybe<Array<InputMaybe<CityInput>>>;
  description?: InputMaybe<Scalars['String']>;
  government?: InputMaybe<GovernmentInput>;
  name?: InputMaybe<Scalars['String']>;
  religions?: InputMaybe<Array<InputMaybe<ReligionInput>>>;
};

export type Event = {
  __typename?: 'Event';
  date?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type God = {
  __typename?: 'God';
  _id: Scalars['ID'];
  alignment?: Maybe<Scalars['String']>;
  description: Scalars['String'];
  domains?: Maybe<Array<Maybe<GodDomain>>>;
  name: Scalars['String'];
  religions?: Maybe<Array<Maybe<Religion>>>;
  symbol: Scalars['String'];
};

export type GodDomain = {
  __typename?: 'GodDomain';
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type GodInput = {
  _id?: InputMaybe<Scalars['ID']>;
  alignment?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  domains?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name?: InputMaybe<Scalars['String']>;
  symbol?: InputMaybe<Scalars['String']>;
};

export type Government = {
  __typename?: 'Government';
  keyMembers?: Maybe<Array<Maybe<GovernmentMember>>>;
  style?: Maybe<Scalars['String']>;
};

export type GovernmentInput = {
  _id?: InputMaybe<Scalars['ID']>;
  members?: InputMaybe<Array<InputMaybe<CharacterInput>>>;
  style?: InputMaybe<Scalars['String']>;
};

export type GovernmentMember = {
  __typename?: 'GovernmentMember';
  character?: Maybe<Character>;
  position?: Maybe<Scalars['String']>;
};

export type History = {
  __typename?: 'History';
  body?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

/** Input types */
export type HistoryInput = {
  _id?: InputMaybe<Scalars['ID']>;
  body?: InputMaybe<Scalars['String']>;
  date?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type Item = {
  __typename?: 'Item';
  name?: Maybe<Scalars['String']>;
};

export type Landmark = {
  __typename?: 'Landmark';
  _id?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  regions?: Maybe<Array<Maybe<Region>>>;
};

export type LandmarkInput = {
  _id?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type Monster = {
  __typename?: 'Monster';
  _id: Scalars['ID'];
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  regions?: Maybe<Array<Maybe<Region>>>;
  size?: Maybe<Scalars['String']>;
};

export type MonsterInput = {
  _id?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['String']>;
};

export type Motives = {
  __typename?: 'Motives';
  bonds?: Maybe<Array<Maybe<Scalars['String']>>>;
  fears?: Maybe<Array<Maybe<Scalars['String']>>>;
  goals?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createCharacter?: Maybe<Character>;
  createGod?: Maybe<God>;
  createMonster?: Maybe<Monster>;
  createRegion?: Maybe<Region>;
  createReligion?: Maybe<Religion>;
  createUser?: Maybe<Auth>;
  createWorld?: Maybe<World>;
  deleteCharacter?: Maybe<Character>;
  deleteGod?: Maybe<God>;
  deleteMonster?: Maybe<Monster>;
  deleteRegion?: Maybe<Region>;
  deleteReligion?: Maybe<Religion>;
  deleteWorld?: Maybe<World>;
  login?: Maybe<Auth>;
  updateCharacter?: Maybe<Character>;
  updateGod?: Maybe<God>;
  updateMonster?: Maybe<Monster>;
  updateRegion?: Maybe<Region>;
  updateReligion?: Maybe<Religion>;
  updateToken?: Maybe<Auth>;
  updateWorld?: Maybe<World>;
};


export type MutationCreateCharacterArgs = {
  character?: InputMaybe<CharacterInput>;
  worldId?: InputMaybe<Scalars['ID']>;
};


export type MutationCreateGodArgs = {
  god?: InputMaybe<GodInput>;
  religionId?: InputMaybe<Scalars['ID']>;
  worldId?: InputMaybe<Scalars['ID']>;
};


export type MutationCreateMonsterArgs = {
  monster?: InputMaybe<MonsterInput>;
  regionId?: InputMaybe<Scalars['ID']>;
  worldId?: InputMaybe<Scalars['ID']>;
};


export type MutationCreateRegionArgs = {
  region?: InputMaybe<RegionInput>;
  worldId?: InputMaybe<Scalars['ID']>;
};


export type MutationCreateReligionArgs = {
  religion?: InputMaybe<ReligionInput>;
  worldId?: InputMaybe<Scalars['ID']>;
};


export type MutationCreateUserArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationCreateWorldArgs = {
  world?: InputMaybe<WorldInput>;
};


export type MutationDeleteCharacterArgs = {
  characterId?: InputMaybe<Scalars['ID']>;
  worldId?: InputMaybe<Scalars['ID']>;
};


export type MutationDeleteGodArgs = {
  godId?: InputMaybe<Scalars['ID']>;
  worldId?: InputMaybe<Scalars['ID']>;
};


export type MutationDeleteMonsterArgs = {
  monsterId?: InputMaybe<Scalars['ID']>;
  worldId?: InputMaybe<Scalars['ID']>;
};


export type MutationDeleteRegionArgs = {
  regionId?: InputMaybe<Scalars['ID']>;
  worldId?: InputMaybe<Scalars['ID']>;
};


export type MutationDeleteReligionArgs = {
  religionId?: InputMaybe<Scalars['ID']>;
  worldId?: InputMaybe<Scalars['ID']>;
};


export type MutationDeleteWorldArgs = {
  worldId?: InputMaybe<Scalars['ID']>;
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationUpdateCharacterArgs = {
  character?: InputMaybe<CharacterInput>;
  worldId?: InputMaybe<Scalars['ID']>;
};


export type MutationUpdateGodArgs = {
  god?: InputMaybe<GodInput>;
  religionId?: InputMaybe<Scalars['ID']>;
  worldId?: InputMaybe<Scalars['ID']>;
};


export type MutationUpdateMonsterArgs = {
  monster?: InputMaybe<MonsterInput>;
  regionId?: InputMaybe<Scalars['ID']>;
  worldId?: InputMaybe<Scalars['ID']>;
};


export type MutationUpdateRegionArgs = {
  region?: InputMaybe<RegionInput>;
  worldId?: InputMaybe<Scalars['ID']>;
};


export type MutationUpdateReligionArgs = {
  religion?: InputMaybe<ReligionInput>;
  worldId?: InputMaybe<Scalars['ID']>;
};


export type MutationUpdateTokenArgs = {
  userId: Scalars['ID'];
};


export type MutationUpdateWorldArgs = {
  world?: InputMaybe<WorldInput>;
};

export type OrgRelationships = {
  __typename?: 'OrgRelationships';
  enemies?: Maybe<Array<Maybe<Organization>>>;
  friends?: Maybe<Array<Maybe<Organization>>>;
};

export type Organization = {
  __typename?: 'Organization';
  activeRegions?: Maybe<Array<Maybe<Region>>>;
  motives?: Maybe<Motives>;
  name?: Maybe<Scalars['String']>;
  relationships?: Maybe<OrgRelationships>;
};

export type Query = {
  __typename?: 'Query';
  getAllOfOneSubject?: Maybe<Array<Maybe<ArticleSubject>>>;
  getSingleSubject?: Maybe<ArticleSubject>;
};


export type QueryGetAllOfOneSubjectArgs = {
  modelName?: InputMaybe<Scalars['String']>;
};


export type QueryGetSingleSubjectArgs = {
  _id?: InputMaybe<Scalars['ID']>;
  modelName?: InputMaybe<Scalars['String']>;
};

export type Race = {
  __typename?: 'Race';
  _id?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type RaceInput = {
  _id?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type Region = {
  __typename?: 'Region';
  _id: Scalars['ID'];
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type RegionInput = {
  _id?: InputMaybe<Scalars['ID']>;
  countries?: InputMaybe<Array<InputMaybe<CountryInput>>>;
  landmarks?: InputMaybe<Array<InputMaybe<LandmarkInput>>>;
  monsters?: InputMaybe<Array<InputMaybe<MonsterInput>>>;
  name?: InputMaybe<Scalars['String']>;
};

export type Religion = {
  __typename?: 'Religion';
  _id: Scalars['ID'];
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type ReligionInput = {
  _id?: InputMaybe<Scalars['ID']>;
  gods?: InputMaybe<Array<InputMaybe<GodInput>>>;
  name?: InputMaybe<Scalars['String']>;
};

export type SubClass = {
  __typename?: 'SubClass';
  features?: Maybe<Array<Maybe<ClassFeatures>>>;
  title?: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  _id: Scalars['ID'];
  email: Scalars['String'];
  password: Scalars['String'];
  userCreated?: Maybe<Scalars['String']>;
  username: Scalars['String'];
  worlds?: Maybe<Array<Maybe<World>>>;
};

export type UserInput = {
  _id?: InputMaybe<Scalars['ID']>;
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
  worlds?: InputMaybe<Array<InputMaybe<WorldInput>>>;
};

export type Wiki = {
  __typename?: 'Wiki';
  categories?: Maybe<Array<Maybe<Category>>>;
  world?: Maybe<World>;
};

export type World = {
  __typename?: 'World';
  _id: Scalars['ID'];
  classes?: Maybe<Array<Maybe<Class>>>;
  creator?: Maybe<User>;
  description?: Maybe<Scalars['String']>;
  historicalEvents?: Maybe<Array<Maybe<History>>>;
  name?: Maybe<Scalars['String']>;
  races?: Maybe<Array<Maybe<Race>>>;
  regions?: Maybe<Array<Maybe<Region>>>;
  religions?: Maybe<Array<Maybe<Religion>>>;
  wiki?: Maybe<Wiki>;
};

export type WorldInput = {
  _id?: InputMaybe<Scalars['ID']>;
  creator?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  historicalEvents?: InputMaybe<Array<InputMaybe<HistoryInput>>>;
  name?: InputMaybe<Scalars['String']>;
  regions?: InputMaybe<Array<InputMaybe<RegionInput>>>;
  religions?: InputMaybe<Array<InputMaybe<ReligionInput>>>;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Article: ResolverTypeWrapper<Omit<Article, 'subject'> & { subject?: Maybe<ResolversTypes['ArticleSubject']> }>;
  ArticleSubject: ResolversTypes['Character'] | ResolversTypes['City'] | ResolversTypes['Class'] | ResolversTypes['Country'] | ResolversTypes['God'] | ResolversTypes['Landmark'] | ResolversTypes['Monster'] | ResolversTypes['Race'] | ResolversTypes['Region'] | ResolversTypes['Religion'] | ResolversTypes['User'] | ResolversTypes['World'];
  ArticleSubjectModel: ArticleSubjectModel;
  Auth: ResolverTypeWrapper<Auth>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Calendar: ResolverTypeWrapper<Calendar>;
  CalendarDay: ResolverTypeWrapper<CalendarDay>;
  CalendarMonth: ResolverTypeWrapper<CalendarMonth>;
  CalendarWeek: ResolverTypeWrapper<CalendarWeek>;
  Category: ResolverTypeWrapper<Category>;
  Character: ResolverTypeWrapper<Character>;
  CharacterClasses: ResolverTypeWrapper<CharacterClasses>;
  CharacterInput: CharacterInput;
  City: ResolverTypeWrapper<City>;
  CityInput: CityInput;
  Class: ResolverTypeWrapper<Class>;
  ClassFeatures: ResolverTypeWrapper<ClassFeatures>;
  ClassInput: ClassInput;
  Country: ResolverTypeWrapper<Country>;
  CountryInput: CountryInput;
  Event: ResolverTypeWrapper<Event>;
  God: ResolverTypeWrapper<God>;
  GodDomain: ResolverTypeWrapper<GodDomain>;
  GodInput: GodInput;
  Government: ResolverTypeWrapper<Government>;
  GovernmentInput: GovernmentInput;
  GovernmentMember: ResolverTypeWrapper<GovernmentMember>;
  History: ResolverTypeWrapper<History>;
  HistoryInput: HistoryInput;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Item: ResolverTypeWrapper<Item>;
  Landmark: ResolverTypeWrapper<Landmark>;
  LandmarkInput: LandmarkInput;
  Monster: ResolverTypeWrapper<Monster>;
  MonsterInput: MonsterInput;
  Motives: ResolverTypeWrapper<Motives>;
  Mutation: ResolverTypeWrapper<{}>;
  OrgRelationships: ResolverTypeWrapper<OrgRelationships>;
  Organization: ResolverTypeWrapper<Organization>;
  Query: ResolverTypeWrapper<{}>;
  Race: ResolverTypeWrapper<Race>;
  RaceInput: RaceInput;
  Region: ResolverTypeWrapper<Region>;
  RegionInput: RegionInput;
  Religion: ResolverTypeWrapper<Religion>;
  ReligionInput: ReligionInput;
  String: ResolverTypeWrapper<Scalars['String']>;
  SubClass: ResolverTypeWrapper<SubClass>;
  User: ResolverTypeWrapper<User>;
  UserInput: UserInput;
  Wiki: ResolverTypeWrapper<Wiki>;
  World: ResolverTypeWrapper<World>;
  WorldInput: WorldInput;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Article: Omit<Article, 'subject'> & { subject?: Maybe<ResolversParentTypes['ArticleSubject']> };
  ArticleSubject: ResolversParentTypes['Character'] | ResolversParentTypes['City'] | ResolversParentTypes['Class'] | ResolversParentTypes['Country'] | ResolversParentTypes['God'] | ResolversParentTypes['Landmark'] | ResolversParentTypes['Monster'] | ResolversParentTypes['Race'] | ResolversParentTypes['Region'] | ResolversParentTypes['Religion'] | ResolversParentTypes['User'] | ResolversParentTypes['World'];
  Auth: Auth;
  Boolean: Scalars['Boolean'];
  Calendar: Calendar;
  CalendarDay: CalendarDay;
  CalendarMonth: CalendarMonth;
  CalendarWeek: CalendarWeek;
  Category: Category;
  Character: Character;
  CharacterClasses: CharacterClasses;
  CharacterInput: CharacterInput;
  City: City;
  CityInput: CityInput;
  Class: Class;
  ClassFeatures: ClassFeatures;
  ClassInput: ClassInput;
  Country: Country;
  CountryInput: CountryInput;
  Event: Event;
  God: God;
  GodDomain: GodDomain;
  GodInput: GodInput;
  Government: Government;
  GovernmentInput: GovernmentInput;
  GovernmentMember: GovernmentMember;
  History: History;
  HistoryInput: HistoryInput;
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  Item: Item;
  Landmark: Landmark;
  LandmarkInput: LandmarkInput;
  Monster: Monster;
  MonsterInput: MonsterInput;
  Motives: Motives;
  Mutation: {};
  OrgRelationships: OrgRelationships;
  Organization: Organization;
  Query: {};
  Race: Race;
  RaceInput: RaceInput;
  Region: Region;
  RegionInput: RegionInput;
  Religion: Religion;
  ReligionInput: ReligionInput;
  String: Scalars['String'];
  SubClass: SubClass;
  User: User;
  UserInput: UserInput;
  Wiki: Wiki;
  World: World;
  WorldInput: WorldInput;
}>;

export type ArticleResolvers<ContextType = any, ParentType extends ResolversParentTypes['Article'] = ResolversParentTypes['Article']> = ResolversObject<{
  _id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  body?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType>;
  subject?: Resolver<Maybe<ResolversTypes['ArticleSubject']>, ParentType, ContextType>;
  subjectModel?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ArticleSubjectResolvers<ContextType = any, ParentType extends ResolversParentTypes['ArticleSubject'] = ResolversParentTypes['ArticleSubject']> = ResolversObject<{
  __resolveType: TypeResolveFn<'Character' | 'City' | 'Class' | 'Country' | 'God' | 'Landmark' | 'Monster' | 'Race' | 'Region' | 'Religion' | 'User' | 'World', ParentType, ContextType>;
}>;

export type AuthResolvers<ContextType = any, ParentType extends ResolversParentTypes['Auth'] = ResolversParentTypes['Auth']> = ResolversObject<{
  token?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CalendarResolvers<ContextType = any, ParentType extends ResolversParentTypes['Calendar'] = ResolversParentTypes['Calendar']> = ResolversObject<{
  _id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  months?: Resolver<Maybe<Array<Maybe<ResolversTypes['CalendarMonth']>>>, ParentType, ContextType>;
  numDaysPerYear?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  week?: Resolver<Maybe<ResolversTypes['CalendarWeek']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CalendarDayResolvers<ContextType = any, ParentType extends ResolversParentTypes['CalendarDay'] = ResolversParentTypes['CalendarDay']> = ResolversObject<{
  events?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CalendarMonthResolvers<ContextType = any, ParentType extends ResolversParentTypes['CalendarMonth'] = ResolversParentTypes['CalendarMonth']> = ResolversObject<{
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  numDaysPerMonth?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CalendarWeekResolvers<ContextType = any, ParentType extends ResolversParentTypes['CalendarWeek'] = ResolversParentTypes['CalendarWeek']> = ResolversObject<{
  days?: Resolver<Maybe<Array<Maybe<ResolversTypes['CalendarDay']>>>, ParentType, ContextType>;
  numDaysPerWeek?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CategoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Category'] = ResolversParentTypes['Category']> = ResolversObject<{
  _id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  parentCategory?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType>;
  subCategories?: Resolver<Maybe<Array<Maybe<ResolversTypes['Category']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CharacterResolvers<ContextType = any, ParentType extends ResolversParentTypes['Character'] = ResolversParentTypes['Character']> = ResolversObject<{
  _id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  alignment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  backstory?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  classes?: Resolver<Maybe<Array<Maybe<ResolversTypes['CharacterClasses']>>>, ParentType, ContextType>;
  creator?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isNPC?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  motives?: Resolver<Maybe<ResolversTypes['Motives']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  organizations?: Resolver<Maybe<Array<Maybe<ResolversTypes['Organization']>>>, ParentType, ContextType>;
  race?: Resolver<Maybe<ResolversTypes['Race']>, ParentType, ContextType>;
  residentCity?: Resolver<Maybe<ResolversTypes['City']>, ParentType, ContextType>;
  size?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  world?: Resolver<Maybe<ResolversTypes['World']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CharacterClassesResolvers<ContextType = any, ParentType extends ResolversParentTypes['CharacterClasses'] = ResolversParentTypes['CharacterClasses']> = ResolversObject<{
  class?: Resolver<Maybe<ResolversTypes['Class']>, ParentType, ContextType>;
  level?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  subClass?: Resolver<Maybe<ResolversTypes['SubClass']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CityResolvers<ContextType = any, ParentType extends ResolversParentTypes['City'] = ResolversParentTypes['City']> = ResolversObject<{
  _id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['Country']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  notableCharacters?: Resolver<Maybe<Array<Maybe<ResolversTypes['Character']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ClassResolvers<ContextType = any, ParentType extends ResolversParentTypes['Class'] = ResolversParentTypes['Class']> = ResolversObject<{
  _id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  features?: Resolver<Maybe<Array<Maybe<ResolversTypes['ClassFeatures']>>>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subClasses?: Resolver<Maybe<ResolversTypes['SubClass']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ClassFeaturesResolvers<ContextType = any, ParentType extends ResolversParentTypes['ClassFeatures'] = ResolversParentTypes['ClassFeatures']> = ResolversObject<{
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  requiredLevel?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CountryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Country'] = ResolversParentTypes['Country']> = ResolversObject<{
  _id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  government?: Resolver<Maybe<ResolversTypes['Government']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  region?: Resolver<Maybe<ResolversTypes['Region']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EventResolvers<ContextType = any, ParentType extends ResolversParentTypes['Event'] = ResolversParentTypes['Event']> = ResolversObject<{
  date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GodResolvers<ContextType = any, ParentType extends ResolversParentTypes['God'] = ResolversParentTypes['God']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  alignment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  domains?: Resolver<Maybe<Array<Maybe<ResolversTypes['GodDomain']>>>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  religions?: Resolver<Maybe<Array<Maybe<ResolversTypes['Religion']>>>, ParentType, ContextType>;
  symbol?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GodDomainResolvers<ContextType = any, ParentType extends ResolversParentTypes['GodDomain'] = ResolversParentTypes['GodDomain']> = ResolversObject<{
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GovernmentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Government'] = ResolversParentTypes['Government']> = ResolversObject<{
  keyMembers?: Resolver<Maybe<Array<Maybe<ResolversTypes['GovernmentMember']>>>, ParentType, ContextType>;
  style?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GovernmentMemberResolvers<ContextType = any, ParentType extends ResolversParentTypes['GovernmentMember'] = ResolversParentTypes['GovernmentMember']> = ResolversObject<{
  character?: Resolver<Maybe<ResolversTypes['Character']>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type HistoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['History'] = ResolversParentTypes['History']> = ResolversObject<{
  body?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['Item'] = ResolversParentTypes['Item']> = ResolversObject<{
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LandmarkResolvers<ContextType = any, ParentType extends ResolversParentTypes['Landmark'] = ResolversParentTypes['Landmark']> = ResolversObject<{
  _id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  regions?: Resolver<Maybe<Array<Maybe<ResolversTypes['Region']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MonsterResolvers<ContextType = any, ParentType extends ResolversParentTypes['Monster'] = ResolversParentTypes['Monster']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  regions?: Resolver<Maybe<Array<Maybe<ResolversTypes['Region']>>>, ParentType, ContextType>;
  size?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MotivesResolvers<ContextType = any, ParentType extends ResolversParentTypes['Motives'] = ResolversParentTypes['Motives']> = ResolversObject<{
  bonds?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  fears?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  goals?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  createCharacter?: Resolver<Maybe<ResolversTypes['Character']>, ParentType, ContextType, Partial<MutationCreateCharacterArgs>>;
  createGod?: Resolver<Maybe<ResolversTypes['God']>, ParentType, ContextType, Partial<MutationCreateGodArgs>>;
  createMonster?: Resolver<Maybe<ResolversTypes['Monster']>, ParentType, ContextType, Partial<MutationCreateMonsterArgs>>;
  createRegion?: Resolver<Maybe<ResolversTypes['Region']>, ParentType, ContextType, Partial<MutationCreateRegionArgs>>;
  createReligion?: Resolver<Maybe<ResolversTypes['Religion']>, ParentType, ContextType, Partial<MutationCreateReligionArgs>>;
  createUser?: Resolver<Maybe<ResolversTypes['Auth']>, ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'email' | 'password' | 'username'>>;
  createWorld?: Resolver<Maybe<ResolversTypes['World']>, ParentType, ContextType, Partial<MutationCreateWorldArgs>>;
  deleteCharacter?: Resolver<Maybe<ResolversTypes['Character']>, ParentType, ContextType, Partial<MutationDeleteCharacterArgs>>;
  deleteGod?: Resolver<Maybe<ResolversTypes['God']>, ParentType, ContextType, Partial<MutationDeleteGodArgs>>;
  deleteMonster?: Resolver<Maybe<ResolversTypes['Monster']>, ParentType, ContextType, Partial<MutationDeleteMonsterArgs>>;
  deleteRegion?: Resolver<Maybe<ResolversTypes['Region']>, ParentType, ContextType, Partial<MutationDeleteRegionArgs>>;
  deleteReligion?: Resolver<Maybe<ResolversTypes['Religion']>, ParentType, ContextType, Partial<MutationDeleteReligionArgs>>;
  deleteWorld?: Resolver<Maybe<ResolversTypes['World']>, ParentType, ContextType, Partial<MutationDeleteWorldArgs>>;
  login?: Resolver<Maybe<ResolversTypes['Auth']>, ParentType, ContextType, RequireFields<MutationLoginArgs, 'email' | 'password'>>;
  updateCharacter?: Resolver<Maybe<ResolversTypes['Character']>, ParentType, ContextType, Partial<MutationUpdateCharacterArgs>>;
  updateGod?: Resolver<Maybe<ResolversTypes['God']>, ParentType, ContextType, Partial<MutationUpdateGodArgs>>;
  updateMonster?: Resolver<Maybe<ResolversTypes['Monster']>, ParentType, ContextType, Partial<MutationUpdateMonsterArgs>>;
  updateRegion?: Resolver<Maybe<ResolversTypes['Region']>, ParentType, ContextType, Partial<MutationUpdateRegionArgs>>;
  updateReligion?: Resolver<Maybe<ResolversTypes['Religion']>, ParentType, ContextType, Partial<MutationUpdateReligionArgs>>;
  updateToken?: Resolver<Maybe<ResolversTypes['Auth']>, ParentType, ContextType, RequireFields<MutationUpdateTokenArgs, 'userId'>>;
  updateWorld?: Resolver<Maybe<ResolversTypes['World']>, ParentType, ContextType, Partial<MutationUpdateWorldArgs>>;
}>;

export type OrgRelationshipsResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrgRelationships'] = ResolversParentTypes['OrgRelationships']> = ResolversObject<{
  enemies?: Resolver<Maybe<Array<Maybe<ResolversTypes['Organization']>>>, ParentType, ContextType>;
  friends?: Resolver<Maybe<Array<Maybe<ResolversTypes['Organization']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrganizationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Organization'] = ResolversParentTypes['Organization']> = ResolversObject<{
  activeRegions?: Resolver<Maybe<Array<Maybe<ResolversTypes['Region']>>>, ParentType, ContextType>;
  motives?: Resolver<Maybe<ResolversTypes['Motives']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  relationships?: Resolver<Maybe<ResolversTypes['OrgRelationships']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  getAllOfOneSubject?: Resolver<Maybe<Array<Maybe<ResolversTypes['ArticleSubject']>>>, ParentType, ContextType, Partial<QueryGetAllOfOneSubjectArgs>>;
  getSingleSubject?: Resolver<Maybe<ResolversTypes['ArticleSubject']>, ParentType, ContextType, Partial<QueryGetSingleSubjectArgs>>;
}>;

export type RaceResolvers<ContextType = any, ParentType extends ResolversParentTypes['Race'] = ResolversParentTypes['Race']> = ResolversObject<{
  _id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RegionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Region'] = ResolversParentTypes['Region']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ReligionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Religion'] = ResolversParentTypes['Religion']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SubClassResolvers<ContextType = any, ParentType extends ResolversParentTypes['SubClass'] = ResolversParentTypes['SubClass']> = ResolversObject<{
  features?: Resolver<Maybe<Array<Maybe<ResolversTypes['ClassFeatures']>>>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  password?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  userCreated?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  worlds?: Resolver<Maybe<Array<Maybe<ResolversTypes['World']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type WikiResolvers<ContextType = any, ParentType extends ResolversParentTypes['Wiki'] = ResolversParentTypes['Wiki']> = ResolversObject<{
  categories?: Resolver<Maybe<Array<Maybe<ResolversTypes['Category']>>>, ParentType, ContextType>;
  world?: Resolver<Maybe<ResolversTypes['World']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type WorldResolvers<ContextType = any, ParentType extends ResolversParentTypes['World'] = ResolversParentTypes['World']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  classes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Class']>>>, ParentType, ContextType>;
  creator?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  historicalEvents?: Resolver<Maybe<Array<Maybe<ResolversTypes['History']>>>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  races?: Resolver<Maybe<Array<Maybe<ResolversTypes['Race']>>>, ParentType, ContextType>;
  regions?: Resolver<Maybe<Array<Maybe<ResolversTypes['Region']>>>, ParentType, ContextType>;
  religions?: Resolver<Maybe<Array<Maybe<ResolversTypes['Religion']>>>, ParentType, ContextType>;
  wiki?: Resolver<Maybe<ResolversTypes['Wiki']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  Article?: ArticleResolvers<ContextType>;
  ArticleSubject?: ArticleSubjectResolvers<ContextType>;
  Auth?: AuthResolvers<ContextType>;
  Calendar?: CalendarResolvers<ContextType>;
  CalendarDay?: CalendarDayResolvers<ContextType>;
  CalendarMonth?: CalendarMonthResolvers<ContextType>;
  CalendarWeek?: CalendarWeekResolvers<ContextType>;
  Category?: CategoryResolvers<ContextType>;
  Character?: CharacterResolvers<ContextType>;
  CharacterClasses?: CharacterClassesResolvers<ContextType>;
  City?: CityResolvers<ContextType>;
  Class?: ClassResolvers<ContextType>;
  ClassFeatures?: ClassFeaturesResolvers<ContextType>;
  Country?: CountryResolvers<ContextType>;
  Event?: EventResolvers<ContextType>;
  God?: GodResolvers<ContextType>;
  GodDomain?: GodDomainResolvers<ContextType>;
  Government?: GovernmentResolvers<ContextType>;
  GovernmentMember?: GovernmentMemberResolvers<ContextType>;
  History?: HistoryResolvers<ContextType>;
  Item?: ItemResolvers<ContextType>;
  Landmark?: LandmarkResolvers<ContextType>;
  Monster?: MonsterResolvers<ContextType>;
  Motives?: MotivesResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  OrgRelationships?: OrgRelationshipsResolvers<ContextType>;
  Organization?: OrganizationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Race?: RaceResolvers<ContextType>;
  Region?: RegionResolvers<ContextType>;
  Religion?: ReligionResolvers<ContextType>;
  SubClass?: SubClassResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  Wiki?: WikiResolvers<ContextType>;
  World?: WorldResolvers<ContextType>;
}>;

