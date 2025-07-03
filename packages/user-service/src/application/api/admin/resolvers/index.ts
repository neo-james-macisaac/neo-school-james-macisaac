// ******** THIS FILE IS GENERATED, MANUAL CHANGES WILL BE OVERWRITTEN ******** //

import {
  Buffer,
  DateScalar,
  DateTimeScalar,
  getResolverSchemaMap,
  Long,
  ObjectID,
  ResolverSchemaMap,
  URL,
} from '@neofinancial/neo-framework';
import merge from 'lodash/merge';

import { UserResolver, UpdateUserDetailsResolver, UpdateUserContactResolver } from './user.resolver';
import { UsersResolver } from './users.resolver';

const resolversMap = (): ResolverSchemaMap => {
  return getResolverSchemaMap({
    Query: [UserResolver, UsersResolver],
    Mutation: [UpdateUserDetailsResolver, UpdateUserContactResolver],
  });
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getResolvers = (): any => {
  return merge(
    {
      Buffer,
      Date: DateScalar,
      DateTime: DateTimeScalar,
      Long,
      ObjectID,
      URL,
    },
    resolversMap().export(),
  );
};

// eslint-disable-next-line import/no-default-export
export default getResolvers;
export { resolversMap };
