import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

/** Information about a GOI on the SCP Wiki */
export type Goi = {
  __typename?: 'GOI';
  /** The creation date of the GOI */
  createdAt: Scalars['String']['output'];
  /** The creator of the GOI */
  creator: Scalars['String']['output'];
  /** A list of paths representing hubs the GOI is part of */
  hubs: Array<Scalars['String']['output']>;
  /** The rating of the GOI */
  rating: Scalars['Int']['output'];
  /** The tags of the GOI */
  tags: Array<Scalars['String']['output']>;
  /** The title of the GOI */
  title: Scalars['String']['output'];
  /** The URL of the GOI */
  url: Scalars['String']['output'];
};

/** Information about a hub on the SCP Wiki */
export type Hub = {
  __typename?: 'Hub';
  /** The creation date of the hub */
  createdAt: Scalars['String']['output'];
  /** A list of paths representing articles and tales that are part of the hub */
  references: Array<Scalars['String']['output']>;
  /** The tags of the hub */
  tags: Array<Scalars['String']['output']>;
  /** The title of the hub */
  title: Scalars['String']['output'];
  /** The URL of the hub */
  url: Scalars['String']['output'];
};

/** Information about an item on the SCP Wiki */
export type Item = {
  __typename?: 'Item';
  /** The creation date of the item */
  createdAt: Scalars['String']['output'];
  /** The creator of the item */
  creator: Scalars['String']['output'];
  /** A list of paths representing hubs the item is part of */
  hubs: Array<Scalars['String']['output']>;
  /** A list of image URLs for each image on the item page */
  images: Array<Scalars['String']['output']>;
  /** The rating of the item */
  rating: Scalars['Int']['output'];
  /** A list of paths representing articles and tales that are related to the item */
  references: Array<Scalars['String']['output']>;
  /** The series of the item */
  series: Scalars['String']['output'];
  /** The tags of the item */
  tags: Array<Scalars['String']['output']>;
  /** The title of the item */
  title: Scalars['String']['output'];
  /** The URL of the item */
  url: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  /** Get information about a specific GOI on the SCP Wiki */
  goi: Goi;
  /** Get all the GOIs on the SCP Wiki */
  gois: Array<Goi>;
  /** Get information about a specific hub on the SCP Wiki */
  hub: Hub;
  /** Get all the hubs on the SCP Wiki */
  hubs: Array<Hub>;
  /** Get information about a specific item on the SCP Wiki */
  item: Item;
  /** Get all the items on the SCP Wiki */
  items: Array<Item>;
  /** Get information about a specific tale on the SCP Wiki */
  tale: Tale;
  /** Get all the tales on the SCP Wiki */
  tales: Array<Tale>;
};


export type QueryGoiArgs = {
  path: Scalars['String']['input'];
};


export type QueryHubArgs = {
  path: Scalars['String']['input'];
};


export type QueryItemArgs = {
  path: Scalars['String']['input'];
};


export type QueryTaleArgs = {
  path: Scalars['String']['input'];
};

/** Information about a tale on the SCP Wiki */
export type Tale = {
  __typename?: 'Tale';
  /** The creation date of the tale */
  createdAt: Scalars['String']['output'];
  /** The creator of the tale */
  creator: Scalars['String']['output'];
  /** A list of paths representing hubs the tale is part of */
  hubs: Array<Scalars['String']['output']>;
  /** A list of image URLs for each image on the tale page */
  images: Array<Scalars['String']['output']>;
  /** The rating of the tale */
  rating: Scalars['Int']['output'];
  /** A list of paths representing articles and tales that are related to the tale */
  references: Array<Scalars['String']['output']>;
  /** The tags of the tale */
  tags: Array<Scalars['String']['output']>;
  /** The title of the tale */
  title: Scalars['String']['output'];
  /** The URL of the tale */
  url: Scalars['String']['output'];
};



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
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  GOI: ResolverTypeWrapper<Goi>;
  Hub: ResolverTypeWrapper<Hub>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Item: ResolverTypeWrapper<Item>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Tale: ResolverTypeWrapper<Tale>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean']['output'];
  GOI: Goi;
  Hub: Hub;
  Int: Scalars['Int']['output'];
  Item: Item;
  Query: {};
  String: Scalars['String']['output'];
  Tale: Tale;
};

export type GoiResolvers<ContextType = any, ParentType extends ResolversParentTypes['GOI'] = ResolversParentTypes['GOI']> = {
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  creator?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hubs?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  rating?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  tags?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HubResolvers<ContextType = any, ParentType extends ResolversParentTypes['Hub'] = ResolversParentTypes['Hub']> = {
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  references?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  tags?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['Item'] = ResolversParentTypes['Item']> = {
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  creator?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hubs?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  images?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  rating?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  references?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  series?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tags?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  goi?: Resolver<ResolversTypes['GOI'], ParentType, ContextType, RequireFields<QueryGoiArgs, 'path'>>;
  gois?: Resolver<Array<ResolversTypes['GOI']>, ParentType, ContextType>;
  hub?: Resolver<ResolversTypes['Hub'], ParentType, ContextType, RequireFields<QueryHubArgs, 'path'>>;
  hubs?: Resolver<Array<ResolversTypes['Hub']>, ParentType, ContextType>;
  item?: Resolver<ResolversTypes['Item'], ParentType, ContextType, RequireFields<QueryItemArgs, 'path'>>;
  items?: Resolver<Array<ResolversTypes['Item']>, ParentType, ContextType>;
  tale?: Resolver<ResolversTypes['Tale'], ParentType, ContextType, RequireFields<QueryTaleArgs, 'path'>>;
  tales?: Resolver<Array<ResolversTypes['Tale']>, ParentType, ContextType>;
};

export type TaleResolvers<ContextType = any, ParentType extends ResolversParentTypes['Tale'] = ResolversParentTypes['Tale']> = {
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  creator?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hubs?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  images?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  rating?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  references?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  tags?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  GOI?: GoiResolvers<ContextType>;
  Hub?: HubResolvers<ContextType>;
  Item?: ItemResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Tale?: TaleResolvers<ContextType>;
};

