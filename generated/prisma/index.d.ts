
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model BlogArticle
 * 
 */
export type BlogArticle = $Result.DefaultSelection<Prisma.$BlogArticlePayload>
/**
 * Model BlogCategory
 * 
 */
export type BlogCategory = $Result.DefaultSelection<Prisma.$BlogCategoryPayload>
/**
 * Model BlogComment
 * 
 */
export type BlogComment = $Result.DefaultSelection<Prisma.$BlogCommentPayload>
/**
 * Model BlogReaction
 * 
 */
export type BlogReaction = $Result.DefaultSelection<Prisma.$BlogReactionPayload>
/**
 * Model CustomerCompany
 * 
 */
export type CustomerCompany = $Result.DefaultSelection<Prisma.$CustomerCompanyPayload>
/**
 * Model CustomerReview
 * 
 */
export type CustomerReview = $Result.DefaultSelection<Prisma.$CustomerReviewPayload>
/**
 * Model Employee
 * 
 */
export type Employee = $Result.DefaultSelection<Prisma.$EmployeePayload>
/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model Service
 * 
 */
export type Service = $Result.DefaultSelection<Prisma.$ServicePayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model UserRole
 * 
 */
export type UserRole = $Result.DefaultSelection<Prisma.$UserRolePayload>
/**
 * Model UserRolePermission
 * 
 */
export type UserRolePermission = $Result.DefaultSelection<Prisma.$UserRolePermissionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ReactionType: {
  LIKE: 'LIKE',
  DISLIKE: 'DISLIKE'
};

export type ReactionType = (typeof ReactionType)[keyof typeof ReactionType]


export const ContentStage: {
  PUBLISHED: 'PUBLISHED',
  DRAFT: 'DRAFT'
};

export type ContentStage = (typeof ContentStage)[keyof typeof ContentStage]


export const AccessType: {
  ADMIN: 'ADMIN',
  USER: 'USER'
};

export type AccessType = (typeof AccessType)[keyof typeof AccessType]


export const PermissionName: {
  USER: 'USER',
  EMPLOYEE: 'EMPLOYEE'
};

export type PermissionName = (typeof PermissionName)[keyof typeof PermissionName]


export const PermissionAction: {
  CREATE: 'CREATE',
  READ: 'READ',
  UPDATE: 'UPDATE',
  DELETE: 'DELETE',
  PUBLISH: 'PUBLISH',
  UNPUBLISH: 'UNPUBLISH'
};

export type PermissionAction = (typeof PermissionAction)[keyof typeof PermissionAction]

}

export type ReactionType = $Enums.ReactionType

export const ReactionType: typeof $Enums.ReactionType

export type ContentStage = $Enums.ContentStage

export const ContentStage: typeof $Enums.ContentStage

export type AccessType = $Enums.AccessType

export const AccessType: typeof $Enums.AccessType

export type PermissionName = $Enums.PermissionName

export const PermissionName: typeof $Enums.PermissionName

export type PermissionAction = $Enums.PermissionAction

export const PermissionAction: typeof $Enums.PermissionAction

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more BlogArticles
 * const blogArticles = await prisma.blogArticle.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more BlogArticles
   * const blogArticles = await prisma.blogArticle.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.blogArticle`: Exposes CRUD operations for the **BlogArticle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BlogArticles
    * const blogArticles = await prisma.blogArticle.findMany()
    * ```
    */
  get blogArticle(): Prisma.BlogArticleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.blogCategory`: Exposes CRUD operations for the **BlogCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BlogCategories
    * const blogCategories = await prisma.blogCategory.findMany()
    * ```
    */
  get blogCategory(): Prisma.BlogCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.blogComment`: Exposes CRUD operations for the **BlogComment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BlogComments
    * const blogComments = await prisma.blogComment.findMany()
    * ```
    */
  get blogComment(): Prisma.BlogCommentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.blogReaction`: Exposes CRUD operations for the **BlogReaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BlogReactions
    * const blogReactions = await prisma.blogReaction.findMany()
    * ```
    */
  get blogReaction(): Prisma.BlogReactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.customerCompany`: Exposes CRUD operations for the **CustomerCompany** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CustomerCompanies
    * const customerCompanies = await prisma.customerCompany.findMany()
    * ```
    */
  get customerCompany(): Prisma.CustomerCompanyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.customerReview`: Exposes CRUD operations for the **CustomerReview** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CustomerReviews
    * const customerReviews = await prisma.customerReview.findMany()
    * ```
    */
  get customerReview(): Prisma.CustomerReviewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.employee`: Exposes CRUD operations for the **Employee** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Employees
    * const employees = await prisma.employee.findMany()
    * ```
    */
  get employee(): Prisma.EmployeeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.service`: Exposes CRUD operations for the **Service** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Services
    * const services = await prisma.service.findMany()
    * ```
    */
  get service(): Prisma.ServiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userRole`: Exposes CRUD operations for the **UserRole** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserRoles
    * const userRoles = await prisma.userRole.findMany()
    * ```
    */
  get userRole(): Prisma.UserRoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userRolePermission`: Exposes CRUD operations for the **UserRolePermission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserRolePermissions
    * const userRolePermissions = await prisma.userRolePermission.findMany()
    * ```
    */
  get userRolePermission(): Prisma.UserRolePermissionDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    BlogArticle: 'BlogArticle',
    BlogCategory: 'BlogCategory',
    BlogComment: 'BlogComment',
    BlogReaction: 'BlogReaction',
    CustomerCompany: 'CustomerCompany',
    CustomerReview: 'CustomerReview',
    Employee: 'Employee',
    Project: 'Project',
    Service: 'Service',
    User: 'User',
    UserRole: 'UserRole',
    UserRolePermission: 'UserRolePermission'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "blogArticle" | "blogCategory" | "blogComment" | "blogReaction" | "customerCompany" | "customerReview" | "employee" | "project" | "service" | "user" | "userRole" | "userRolePermission"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      BlogArticle: {
        payload: Prisma.$BlogArticlePayload<ExtArgs>
        fields: Prisma.BlogArticleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlogArticleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogArticlePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlogArticleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogArticlePayload>
          }
          findFirst: {
            args: Prisma.BlogArticleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogArticlePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlogArticleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogArticlePayload>
          }
          findMany: {
            args: Prisma.BlogArticleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogArticlePayload>[]
          }
          create: {
            args: Prisma.BlogArticleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogArticlePayload>
          }
          createMany: {
            args: Prisma.BlogArticleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BlogArticleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogArticlePayload>[]
          }
          delete: {
            args: Prisma.BlogArticleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogArticlePayload>
          }
          update: {
            args: Prisma.BlogArticleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogArticlePayload>
          }
          deleteMany: {
            args: Prisma.BlogArticleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BlogArticleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BlogArticleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogArticlePayload>[]
          }
          upsert: {
            args: Prisma.BlogArticleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogArticlePayload>
          }
          aggregate: {
            args: Prisma.BlogArticleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlogArticle>
          }
          groupBy: {
            args: Prisma.BlogArticleGroupByArgs<ExtArgs>
            result: $Utils.Optional<BlogArticleGroupByOutputType>[]
          }
          count: {
            args: Prisma.BlogArticleCountArgs<ExtArgs>
            result: $Utils.Optional<BlogArticleCountAggregateOutputType> | number
          }
        }
      }
      BlogCategory: {
        payload: Prisma.$BlogCategoryPayload<ExtArgs>
        fields: Prisma.BlogCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlogCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlogCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogCategoryPayload>
          }
          findFirst: {
            args: Prisma.BlogCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlogCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogCategoryPayload>
          }
          findMany: {
            args: Prisma.BlogCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogCategoryPayload>[]
          }
          create: {
            args: Prisma.BlogCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogCategoryPayload>
          }
          createMany: {
            args: Prisma.BlogCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BlogCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogCategoryPayload>[]
          }
          delete: {
            args: Prisma.BlogCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogCategoryPayload>
          }
          update: {
            args: Prisma.BlogCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogCategoryPayload>
          }
          deleteMany: {
            args: Prisma.BlogCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BlogCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BlogCategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogCategoryPayload>[]
          }
          upsert: {
            args: Prisma.BlogCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogCategoryPayload>
          }
          aggregate: {
            args: Prisma.BlogCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlogCategory>
          }
          groupBy: {
            args: Prisma.BlogCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<BlogCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.BlogCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<BlogCategoryCountAggregateOutputType> | number
          }
        }
      }
      BlogComment: {
        payload: Prisma.$BlogCommentPayload<ExtArgs>
        fields: Prisma.BlogCommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlogCommentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogCommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlogCommentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogCommentPayload>
          }
          findFirst: {
            args: Prisma.BlogCommentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogCommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlogCommentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogCommentPayload>
          }
          findMany: {
            args: Prisma.BlogCommentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogCommentPayload>[]
          }
          create: {
            args: Prisma.BlogCommentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogCommentPayload>
          }
          createMany: {
            args: Prisma.BlogCommentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BlogCommentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogCommentPayload>[]
          }
          delete: {
            args: Prisma.BlogCommentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogCommentPayload>
          }
          update: {
            args: Prisma.BlogCommentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogCommentPayload>
          }
          deleteMany: {
            args: Prisma.BlogCommentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BlogCommentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BlogCommentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogCommentPayload>[]
          }
          upsert: {
            args: Prisma.BlogCommentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogCommentPayload>
          }
          aggregate: {
            args: Prisma.BlogCommentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlogComment>
          }
          groupBy: {
            args: Prisma.BlogCommentGroupByArgs<ExtArgs>
            result: $Utils.Optional<BlogCommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.BlogCommentCountArgs<ExtArgs>
            result: $Utils.Optional<BlogCommentCountAggregateOutputType> | number
          }
        }
      }
      BlogReaction: {
        payload: Prisma.$BlogReactionPayload<ExtArgs>
        fields: Prisma.BlogReactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlogReactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogReactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlogReactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogReactionPayload>
          }
          findFirst: {
            args: Prisma.BlogReactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogReactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlogReactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogReactionPayload>
          }
          findMany: {
            args: Prisma.BlogReactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogReactionPayload>[]
          }
          create: {
            args: Prisma.BlogReactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogReactionPayload>
          }
          createMany: {
            args: Prisma.BlogReactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BlogReactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogReactionPayload>[]
          }
          delete: {
            args: Prisma.BlogReactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogReactionPayload>
          }
          update: {
            args: Prisma.BlogReactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogReactionPayload>
          }
          deleteMany: {
            args: Prisma.BlogReactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BlogReactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BlogReactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogReactionPayload>[]
          }
          upsert: {
            args: Prisma.BlogReactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogReactionPayload>
          }
          aggregate: {
            args: Prisma.BlogReactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlogReaction>
          }
          groupBy: {
            args: Prisma.BlogReactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<BlogReactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.BlogReactionCountArgs<ExtArgs>
            result: $Utils.Optional<BlogReactionCountAggregateOutputType> | number
          }
        }
      }
      CustomerCompany: {
        payload: Prisma.$CustomerCompanyPayload<ExtArgs>
        fields: Prisma.CustomerCompanyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerCompanyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerCompanyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerCompanyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerCompanyPayload>
          }
          findFirst: {
            args: Prisma.CustomerCompanyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerCompanyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerCompanyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerCompanyPayload>
          }
          findMany: {
            args: Prisma.CustomerCompanyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerCompanyPayload>[]
          }
          create: {
            args: Prisma.CustomerCompanyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerCompanyPayload>
          }
          createMany: {
            args: Prisma.CustomerCompanyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomerCompanyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerCompanyPayload>[]
          }
          delete: {
            args: Prisma.CustomerCompanyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerCompanyPayload>
          }
          update: {
            args: Prisma.CustomerCompanyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerCompanyPayload>
          }
          deleteMany: {
            args: Prisma.CustomerCompanyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerCompanyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CustomerCompanyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerCompanyPayload>[]
          }
          upsert: {
            args: Prisma.CustomerCompanyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerCompanyPayload>
          }
          aggregate: {
            args: Prisma.CustomerCompanyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomerCompany>
          }
          groupBy: {
            args: Prisma.CustomerCompanyGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerCompanyGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerCompanyCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerCompanyCountAggregateOutputType> | number
          }
        }
      }
      CustomerReview: {
        payload: Prisma.$CustomerReviewPayload<ExtArgs>
        fields: Prisma.CustomerReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerReviewPayload>
          }
          findFirst: {
            args: Prisma.CustomerReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerReviewPayload>
          }
          findMany: {
            args: Prisma.CustomerReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerReviewPayload>[]
          }
          create: {
            args: Prisma.CustomerReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerReviewPayload>
          }
          createMany: {
            args: Prisma.CustomerReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomerReviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerReviewPayload>[]
          }
          delete: {
            args: Prisma.CustomerReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerReviewPayload>
          }
          update: {
            args: Prisma.CustomerReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerReviewPayload>
          }
          deleteMany: {
            args: Prisma.CustomerReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CustomerReviewUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerReviewPayload>[]
          }
          upsert: {
            args: Prisma.CustomerReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerReviewPayload>
          }
          aggregate: {
            args: Prisma.CustomerReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomerReview>
          }
          groupBy: {
            args: Prisma.CustomerReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerReviewCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerReviewCountAggregateOutputType> | number
          }
        }
      }
      Employee: {
        payload: Prisma.$EmployeePayload<ExtArgs>
        fields: Prisma.EmployeeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmployeeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmployeeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          findFirst: {
            args: Prisma.EmployeeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmployeeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          findMany: {
            args: Prisma.EmployeeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          create: {
            args: Prisma.EmployeeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          createMany: {
            args: Prisma.EmployeeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmployeeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          delete: {
            args: Prisma.EmployeeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          update: {
            args: Prisma.EmployeeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          deleteMany: {
            args: Prisma.EmployeeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmployeeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmployeeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          upsert: {
            args: Prisma.EmployeeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          aggregate: {
            args: Prisma.EmployeeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmployee>
          }
          groupBy: {
            args: Prisma.EmployeeGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmployeeGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmployeeCountArgs<ExtArgs>
            result: $Utils.Optional<EmployeeCountAggregateOutputType> | number
          }
        }
      }
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      Service: {
        payload: Prisma.$ServicePayload<ExtArgs>
        fields: Prisma.ServiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          findFirst: {
            args: Prisma.ServiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          findMany: {
            args: Prisma.ServiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          create: {
            args: Prisma.ServiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          createMany: {
            args: Prisma.ServiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          delete: {
            args: Prisma.ServiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          update: {
            args: Prisma.ServiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          deleteMany: {
            args: Prisma.ServiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ServiceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          upsert: {
            args: Prisma.ServiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          aggregate: {
            args: Prisma.ServiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateService>
          }
          groupBy: {
            args: Prisma.ServiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServiceCountArgs<ExtArgs>
            result: $Utils.Optional<ServiceCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      UserRole: {
        payload: Prisma.$UserRolePayload<ExtArgs>
        fields: Prisma.UserRoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserRoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserRoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          findFirst: {
            args: Prisma.UserRoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserRoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          findMany: {
            args: Prisma.UserRoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>[]
          }
          create: {
            args: Prisma.UserRoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          createMany: {
            args: Prisma.UserRoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserRoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>[]
          }
          delete: {
            args: Prisma.UserRoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          update: {
            args: Prisma.UserRoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          deleteMany: {
            args: Prisma.UserRoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserRoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserRoleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>[]
          }
          upsert: {
            args: Prisma.UserRoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          aggregate: {
            args: Prisma.UserRoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserRole>
          }
          groupBy: {
            args: Prisma.UserRoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserRoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserRoleCountArgs<ExtArgs>
            result: $Utils.Optional<UserRoleCountAggregateOutputType> | number
          }
        }
      }
      UserRolePermission: {
        payload: Prisma.$UserRolePermissionPayload<ExtArgs>
        fields: Prisma.UserRolePermissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserRolePermissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePermissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserRolePermissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePermissionPayload>
          }
          findFirst: {
            args: Prisma.UserRolePermissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePermissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserRolePermissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePermissionPayload>
          }
          findMany: {
            args: Prisma.UserRolePermissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePermissionPayload>[]
          }
          create: {
            args: Prisma.UserRolePermissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePermissionPayload>
          }
          createMany: {
            args: Prisma.UserRolePermissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserRolePermissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePermissionPayload>[]
          }
          delete: {
            args: Prisma.UserRolePermissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePermissionPayload>
          }
          update: {
            args: Prisma.UserRolePermissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePermissionPayload>
          }
          deleteMany: {
            args: Prisma.UserRolePermissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserRolePermissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserRolePermissionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePermissionPayload>[]
          }
          upsert: {
            args: Prisma.UserRolePermissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePermissionPayload>
          }
          aggregate: {
            args: Prisma.UserRolePermissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserRolePermission>
          }
          groupBy: {
            args: Prisma.UserRolePermissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserRolePermissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserRolePermissionCountArgs<ExtArgs>
            result: $Utils.Optional<UserRolePermissionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    blogArticle?: BlogArticleOmit
    blogCategory?: BlogCategoryOmit
    blogComment?: BlogCommentOmit
    blogReaction?: BlogReactionOmit
    customerCompany?: CustomerCompanyOmit
    customerReview?: CustomerReviewOmit
    employee?: EmployeeOmit
    project?: ProjectOmit
    service?: ServiceOmit
    user?: UserOmit
    userRole?: UserRoleOmit
    userRolePermission?: UserRolePermissionOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type BlogArticleCountOutputType
   */

  export type BlogArticleCountOutputType = {
    comments: number
    BlogReaction: number
  }

  export type BlogArticleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | BlogArticleCountOutputTypeCountCommentsArgs
    BlogReaction?: boolean | BlogArticleCountOutputTypeCountBlogReactionArgs
  }

  // Custom InputTypes
  /**
   * BlogArticleCountOutputType without action
   */
  export type BlogArticleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogArticleCountOutputType
     */
    select?: BlogArticleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BlogArticleCountOutputType without action
   */
  export type BlogArticleCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogCommentWhereInput
  }

  /**
   * BlogArticleCountOutputType without action
   */
  export type BlogArticleCountOutputTypeCountBlogReactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogReactionWhereInput
  }


  /**
   * Count Type BlogCategoryCountOutputType
   */

  export type BlogCategoryCountOutputType = {
    BlogArticle: number
  }

  export type BlogCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    BlogArticle?: boolean | BlogCategoryCountOutputTypeCountBlogArticleArgs
  }

  // Custom InputTypes
  /**
   * BlogCategoryCountOutputType without action
   */
  export type BlogCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogCategoryCountOutputType
     */
    select?: BlogCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BlogCategoryCountOutputType without action
   */
  export type BlogCategoryCountOutputTypeCountBlogArticleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogArticleWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    roles: number
    comments: number
    reactions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roles?: boolean | UserCountOutputTypeCountRolesArgs
    comments?: boolean | UserCountOutputTypeCountCommentsArgs
    reactions?: boolean | UserCountOutputTypeCountReactionsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserRoleWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogCommentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogReactionWhereInput
  }


  /**
   * Count Type UserRoleCountOutputType
   */

  export type UserRoleCountOutputType = {
    permissions: number
    users: number
  }

  export type UserRoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    permissions?: boolean | UserRoleCountOutputTypeCountPermissionsArgs
    users?: boolean | UserRoleCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * UserRoleCountOutputType without action
   */
  export type UserRoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRoleCountOutputType
     */
    select?: UserRoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserRoleCountOutputType without action
   */
  export type UserRoleCountOutputTypeCountPermissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserRolePermissionWhereInput
  }

  /**
   * UserRoleCountOutputType without action
   */
  export type UserRoleCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Models
   */

  /**
   * Model BlogArticle
   */

  export type AggregateBlogArticle = {
    _count: BlogArticleCountAggregateOutputType | null
    _avg: BlogArticleAvgAggregateOutputType | null
    _sum: BlogArticleSumAggregateOutputType | null
    _min: BlogArticleMinAggregateOutputType | null
    _max: BlogArticleMaxAggregateOutputType | null
  }

  export type BlogArticleAvgAggregateOutputType = {
    commentsCount: number | null
    reactionCount: number | null
  }

  export type BlogArticleSumAggregateOutputType = {
    commentsCount: number | null
    reactionCount: number | null
  }

  export type BlogArticleMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    title: string | null
    slug: string | null
    description: string | null
    content: string | null
    stage: $Enums.ContentStage | null
    categoryId: string | null
    commentsCount: number | null
    reactionCount: number | null
  }

  export type BlogArticleMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    title: string | null
    slug: string | null
    description: string | null
    content: string | null
    stage: $Enums.ContentStage | null
    categoryId: string | null
    commentsCount: number | null
    reactionCount: number | null
  }

  export type BlogArticleCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    title: number
    slug: number
    description: number
    content: number
    stage: number
    categoryId: number
    commentsCount: number
    reactionCount: number
    _all: number
  }


  export type BlogArticleAvgAggregateInputType = {
    commentsCount?: true
    reactionCount?: true
  }

  export type BlogArticleSumAggregateInputType = {
    commentsCount?: true
    reactionCount?: true
  }

  export type BlogArticleMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    slug?: true
    description?: true
    content?: true
    stage?: true
    categoryId?: true
    commentsCount?: true
    reactionCount?: true
  }

  export type BlogArticleMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    slug?: true
    description?: true
    content?: true
    stage?: true
    categoryId?: true
    commentsCount?: true
    reactionCount?: true
  }

  export type BlogArticleCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    slug?: true
    description?: true
    content?: true
    stage?: true
    categoryId?: true
    commentsCount?: true
    reactionCount?: true
    _all?: true
  }

  export type BlogArticleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlogArticle to aggregate.
     */
    where?: BlogArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogArticles to fetch.
     */
    orderBy?: BlogArticleOrderByWithRelationInput | BlogArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlogArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogArticles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogArticles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BlogArticles
    **/
    _count?: true | BlogArticleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BlogArticleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BlogArticleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlogArticleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlogArticleMaxAggregateInputType
  }

  export type GetBlogArticleAggregateType<T extends BlogArticleAggregateArgs> = {
        [P in keyof T & keyof AggregateBlogArticle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlogArticle[P]>
      : GetScalarType<T[P], AggregateBlogArticle[P]>
  }




  export type BlogArticleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogArticleWhereInput
    orderBy?: BlogArticleOrderByWithAggregationInput | BlogArticleOrderByWithAggregationInput[]
    by: BlogArticleScalarFieldEnum[] | BlogArticleScalarFieldEnum
    having?: BlogArticleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlogArticleCountAggregateInputType | true
    _avg?: BlogArticleAvgAggregateInputType
    _sum?: BlogArticleSumAggregateInputType
    _min?: BlogArticleMinAggregateInputType
    _max?: BlogArticleMaxAggregateInputType
  }

  export type BlogArticleGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    title: string
    slug: string
    description: string
    content: string
    stage: $Enums.ContentStage
    categoryId: string
    commentsCount: number
    reactionCount: number
    _count: BlogArticleCountAggregateOutputType | null
    _avg: BlogArticleAvgAggregateOutputType | null
    _sum: BlogArticleSumAggregateOutputType | null
    _min: BlogArticleMinAggregateOutputType | null
    _max: BlogArticleMaxAggregateOutputType | null
  }

  type GetBlogArticleGroupByPayload<T extends BlogArticleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlogArticleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlogArticleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlogArticleGroupByOutputType[P]>
            : GetScalarType<T[P], BlogArticleGroupByOutputType[P]>
        }
      >
    >


  export type BlogArticleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    slug?: boolean
    description?: boolean
    content?: boolean
    stage?: boolean
    categoryId?: boolean
    commentsCount?: boolean
    reactionCount?: boolean
    category?: boolean | BlogCategoryDefaultArgs<ExtArgs>
    comments?: boolean | BlogArticle$commentsArgs<ExtArgs>
    BlogReaction?: boolean | BlogArticle$BlogReactionArgs<ExtArgs>
    _count?: boolean | BlogArticleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blogArticle"]>

  export type BlogArticleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    slug?: boolean
    description?: boolean
    content?: boolean
    stage?: boolean
    categoryId?: boolean
    commentsCount?: boolean
    reactionCount?: boolean
    category?: boolean | BlogCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blogArticle"]>

  export type BlogArticleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    slug?: boolean
    description?: boolean
    content?: boolean
    stage?: boolean
    categoryId?: boolean
    commentsCount?: boolean
    reactionCount?: boolean
    category?: boolean | BlogCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blogArticle"]>

  export type BlogArticleSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    slug?: boolean
    description?: boolean
    content?: boolean
    stage?: boolean
    categoryId?: boolean
    commentsCount?: boolean
    reactionCount?: boolean
  }

  export type BlogArticleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "title" | "slug" | "description" | "content" | "stage" | "categoryId" | "commentsCount" | "reactionCount", ExtArgs["result"]["blogArticle"]>
  export type BlogArticleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | BlogCategoryDefaultArgs<ExtArgs>
    comments?: boolean | BlogArticle$commentsArgs<ExtArgs>
    BlogReaction?: boolean | BlogArticle$BlogReactionArgs<ExtArgs>
    _count?: boolean | BlogArticleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BlogArticleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | BlogCategoryDefaultArgs<ExtArgs>
  }
  export type BlogArticleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | BlogCategoryDefaultArgs<ExtArgs>
  }

  export type $BlogArticlePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BlogArticle"
    objects: {
      category: Prisma.$BlogCategoryPayload<ExtArgs>
      comments: Prisma.$BlogCommentPayload<ExtArgs>[]
      BlogReaction: Prisma.$BlogReactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      title: string
      slug: string
      description: string
      content: string
      stage: $Enums.ContentStage
      categoryId: string
      commentsCount: number
      reactionCount: number
    }, ExtArgs["result"]["blogArticle"]>
    composites: {}
  }

  type BlogArticleGetPayload<S extends boolean | null | undefined | BlogArticleDefaultArgs> = $Result.GetResult<Prisma.$BlogArticlePayload, S>

  type BlogArticleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BlogArticleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BlogArticleCountAggregateInputType | true
    }

  export interface BlogArticleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BlogArticle'], meta: { name: 'BlogArticle' } }
    /**
     * Find zero or one BlogArticle that matches the filter.
     * @param {BlogArticleFindUniqueArgs} args - Arguments to find a BlogArticle
     * @example
     * // Get one BlogArticle
     * const blogArticle = await prisma.blogArticle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BlogArticleFindUniqueArgs>(args: SelectSubset<T, BlogArticleFindUniqueArgs<ExtArgs>>): Prisma__BlogArticleClient<$Result.GetResult<Prisma.$BlogArticlePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BlogArticle that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BlogArticleFindUniqueOrThrowArgs} args - Arguments to find a BlogArticle
     * @example
     * // Get one BlogArticle
     * const blogArticle = await prisma.blogArticle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BlogArticleFindUniqueOrThrowArgs>(args: SelectSubset<T, BlogArticleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BlogArticleClient<$Result.GetResult<Prisma.$BlogArticlePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlogArticle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogArticleFindFirstArgs} args - Arguments to find a BlogArticle
     * @example
     * // Get one BlogArticle
     * const blogArticle = await prisma.blogArticle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BlogArticleFindFirstArgs>(args?: SelectSubset<T, BlogArticleFindFirstArgs<ExtArgs>>): Prisma__BlogArticleClient<$Result.GetResult<Prisma.$BlogArticlePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlogArticle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogArticleFindFirstOrThrowArgs} args - Arguments to find a BlogArticle
     * @example
     * // Get one BlogArticle
     * const blogArticle = await prisma.blogArticle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BlogArticleFindFirstOrThrowArgs>(args?: SelectSubset<T, BlogArticleFindFirstOrThrowArgs<ExtArgs>>): Prisma__BlogArticleClient<$Result.GetResult<Prisma.$BlogArticlePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BlogArticles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogArticleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BlogArticles
     * const blogArticles = await prisma.blogArticle.findMany()
     * 
     * // Get first 10 BlogArticles
     * const blogArticles = await prisma.blogArticle.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blogArticleWithIdOnly = await prisma.blogArticle.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BlogArticleFindManyArgs>(args?: SelectSubset<T, BlogArticleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogArticlePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BlogArticle.
     * @param {BlogArticleCreateArgs} args - Arguments to create a BlogArticle.
     * @example
     * // Create one BlogArticle
     * const BlogArticle = await prisma.blogArticle.create({
     *   data: {
     *     // ... data to create a BlogArticle
     *   }
     * })
     * 
     */
    create<T extends BlogArticleCreateArgs>(args: SelectSubset<T, BlogArticleCreateArgs<ExtArgs>>): Prisma__BlogArticleClient<$Result.GetResult<Prisma.$BlogArticlePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BlogArticles.
     * @param {BlogArticleCreateManyArgs} args - Arguments to create many BlogArticles.
     * @example
     * // Create many BlogArticles
     * const blogArticle = await prisma.blogArticle.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BlogArticleCreateManyArgs>(args?: SelectSubset<T, BlogArticleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BlogArticles and returns the data saved in the database.
     * @param {BlogArticleCreateManyAndReturnArgs} args - Arguments to create many BlogArticles.
     * @example
     * // Create many BlogArticles
     * const blogArticle = await prisma.blogArticle.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BlogArticles and only return the `id`
     * const blogArticleWithIdOnly = await prisma.blogArticle.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BlogArticleCreateManyAndReturnArgs>(args?: SelectSubset<T, BlogArticleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogArticlePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BlogArticle.
     * @param {BlogArticleDeleteArgs} args - Arguments to delete one BlogArticle.
     * @example
     * // Delete one BlogArticle
     * const BlogArticle = await prisma.blogArticle.delete({
     *   where: {
     *     // ... filter to delete one BlogArticle
     *   }
     * })
     * 
     */
    delete<T extends BlogArticleDeleteArgs>(args: SelectSubset<T, BlogArticleDeleteArgs<ExtArgs>>): Prisma__BlogArticleClient<$Result.GetResult<Prisma.$BlogArticlePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BlogArticle.
     * @param {BlogArticleUpdateArgs} args - Arguments to update one BlogArticle.
     * @example
     * // Update one BlogArticle
     * const blogArticle = await prisma.blogArticle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BlogArticleUpdateArgs>(args: SelectSubset<T, BlogArticleUpdateArgs<ExtArgs>>): Prisma__BlogArticleClient<$Result.GetResult<Prisma.$BlogArticlePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BlogArticles.
     * @param {BlogArticleDeleteManyArgs} args - Arguments to filter BlogArticles to delete.
     * @example
     * // Delete a few BlogArticles
     * const { count } = await prisma.blogArticle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BlogArticleDeleteManyArgs>(args?: SelectSubset<T, BlogArticleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlogArticles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogArticleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BlogArticles
     * const blogArticle = await prisma.blogArticle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BlogArticleUpdateManyArgs>(args: SelectSubset<T, BlogArticleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlogArticles and returns the data updated in the database.
     * @param {BlogArticleUpdateManyAndReturnArgs} args - Arguments to update many BlogArticles.
     * @example
     * // Update many BlogArticles
     * const blogArticle = await prisma.blogArticle.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BlogArticles and only return the `id`
     * const blogArticleWithIdOnly = await prisma.blogArticle.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BlogArticleUpdateManyAndReturnArgs>(args: SelectSubset<T, BlogArticleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogArticlePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BlogArticle.
     * @param {BlogArticleUpsertArgs} args - Arguments to update or create a BlogArticle.
     * @example
     * // Update or create a BlogArticle
     * const blogArticle = await prisma.blogArticle.upsert({
     *   create: {
     *     // ... data to create a BlogArticle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BlogArticle we want to update
     *   }
     * })
     */
    upsert<T extends BlogArticleUpsertArgs>(args: SelectSubset<T, BlogArticleUpsertArgs<ExtArgs>>): Prisma__BlogArticleClient<$Result.GetResult<Prisma.$BlogArticlePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BlogArticles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogArticleCountArgs} args - Arguments to filter BlogArticles to count.
     * @example
     * // Count the number of BlogArticles
     * const count = await prisma.blogArticle.count({
     *   where: {
     *     // ... the filter for the BlogArticles we want to count
     *   }
     * })
    **/
    count<T extends BlogArticleCountArgs>(
      args?: Subset<T, BlogArticleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlogArticleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BlogArticle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogArticleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BlogArticleAggregateArgs>(args: Subset<T, BlogArticleAggregateArgs>): Prisma.PrismaPromise<GetBlogArticleAggregateType<T>>

    /**
     * Group by BlogArticle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogArticleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BlogArticleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlogArticleGroupByArgs['orderBy'] }
        : { orderBy?: BlogArticleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BlogArticleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlogArticleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BlogArticle model
   */
  readonly fields: BlogArticleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BlogArticle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlogArticleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends BlogCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BlogCategoryDefaultArgs<ExtArgs>>): Prisma__BlogCategoryClient<$Result.GetResult<Prisma.$BlogCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    comments<T extends BlogArticle$commentsArgs<ExtArgs> = {}>(args?: Subset<T, BlogArticle$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogCommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    BlogReaction<T extends BlogArticle$BlogReactionArgs<ExtArgs> = {}>(args?: Subset<T, BlogArticle$BlogReactionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogReactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BlogArticle model
   */
  interface BlogArticleFieldRefs {
    readonly id: FieldRef<"BlogArticle", 'String'>
    readonly createdAt: FieldRef<"BlogArticle", 'DateTime'>
    readonly updatedAt: FieldRef<"BlogArticle", 'DateTime'>
    readonly title: FieldRef<"BlogArticle", 'String'>
    readonly slug: FieldRef<"BlogArticle", 'String'>
    readonly description: FieldRef<"BlogArticle", 'String'>
    readonly content: FieldRef<"BlogArticle", 'String'>
    readonly stage: FieldRef<"BlogArticle", 'ContentStage'>
    readonly categoryId: FieldRef<"BlogArticle", 'String'>
    readonly commentsCount: FieldRef<"BlogArticle", 'Int'>
    readonly reactionCount: FieldRef<"BlogArticle", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * BlogArticle findUnique
   */
  export type BlogArticleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogArticle
     */
    select?: BlogArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogArticle
     */
    omit?: BlogArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogArticleInclude<ExtArgs> | null
    /**
     * Filter, which BlogArticle to fetch.
     */
    where: BlogArticleWhereUniqueInput
  }

  /**
   * BlogArticle findUniqueOrThrow
   */
  export type BlogArticleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogArticle
     */
    select?: BlogArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogArticle
     */
    omit?: BlogArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogArticleInclude<ExtArgs> | null
    /**
     * Filter, which BlogArticle to fetch.
     */
    where: BlogArticleWhereUniqueInput
  }

  /**
   * BlogArticle findFirst
   */
  export type BlogArticleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogArticle
     */
    select?: BlogArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogArticle
     */
    omit?: BlogArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogArticleInclude<ExtArgs> | null
    /**
     * Filter, which BlogArticle to fetch.
     */
    where?: BlogArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogArticles to fetch.
     */
    orderBy?: BlogArticleOrderByWithRelationInput | BlogArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlogArticles.
     */
    cursor?: BlogArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogArticles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogArticles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlogArticles.
     */
    distinct?: BlogArticleScalarFieldEnum | BlogArticleScalarFieldEnum[]
  }

  /**
   * BlogArticle findFirstOrThrow
   */
  export type BlogArticleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogArticle
     */
    select?: BlogArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogArticle
     */
    omit?: BlogArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogArticleInclude<ExtArgs> | null
    /**
     * Filter, which BlogArticle to fetch.
     */
    where?: BlogArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogArticles to fetch.
     */
    orderBy?: BlogArticleOrderByWithRelationInput | BlogArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlogArticles.
     */
    cursor?: BlogArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogArticles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogArticles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlogArticles.
     */
    distinct?: BlogArticleScalarFieldEnum | BlogArticleScalarFieldEnum[]
  }

  /**
   * BlogArticle findMany
   */
  export type BlogArticleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogArticle
     */
    select?: BlogArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogArticle
     */
    omit?: BlogArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogArticleInclude<ExtArgs> | null
    /**
     * Filter, which BlogArticles to fetch.
     */
    where?: BlogArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogArticles to fetch.
     */
    orderBy?: BlogArticleOrderByWithRelationInput | BlogArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BlogArticles.
     */
    cursor?: BlogArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogArticles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogArticles.
     */
    skip?: number
    distinct?: BlogArticleScalarFieldEnum | BlogArticleScalarFieldEnum[]
  }

  /**
   * BlogArticle create
   */
  export type BlogArticleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogArticle
     */
    select?: BlogArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogArticle
     */
    omit?: BlogArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogArticleInclude<ExtArgs> | null
    /**
     * The data needed to create a BlogArticle.
     */
    data: XOR<BlogArticleCreateInput, BlogArticleUncheckedCreateInput>
  }

  /**
   * BlogArticle createMany
   */
  export type BlogArticleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BlogArticles.
     */
    data: BlogArticleCreateManyInput | BlogArticleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BlogArticle createManyAndReturn
   */
  export type BlogArticleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogArticle
     */
    select?: BlogArticleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BlogArticle
     */
    omit?: BlogArticleOmit<ExtArgs> | null
    /**
     * The data used to create many BlogArticles.
     */
    data: BlogArticleCreateManyInput | BlogArticleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogArticleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BlogArticle update
   */
  export type BlogArticleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogArticle
     */
    select?: BlogArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogArticle
     */
    omit?: BlogArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogArticleInclude<ExtArgs> | null
    /**
     * The data needed to update a BlogArticle.
     */
    data: XOR<BlogArticleUpdateInput, BlogArticleUncheckedUpdateInput>
    /**
     * Choose, which BlogArticle to update.
     */
    where: BlogArticleWhereUniqueInput
  }

  /**
   * BlogArticle updateMany
   */
  export type BlogArticleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BlogArticles.
     */
    data: XOR<BlogArticleUpdateManyMutationInput, BlogArticleUncheckedUpdateManyInput>
    /**
     * Filter which BlogArticles to update
     */
    where?: BlogArticleWhereInput
    /**
     * Limit how many BlogArticles to update.
     */
    limit?: number
  }

  /**
   * BlogArticle updateManyAndReturn
   */
  export type BlogArticleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogArticle
     */
    select?: BlogArticleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BlogArticle
     */
    omit?: BlogArticleOmit<ExtArgs> | null
    /**
     * The data used to update BlogArticles.
     */
    data: XOR<BlogArticleUpdateManyMutationInput, BlogArticleUncheckedUpdateManyInput>
    /**
     * Filter which BlogArticles to update
     */
    where?: BlogArticleWhereInput
    /**
     * Limit how many BlogArticles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogArticleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BlogArticle upsert
   */
  export type BlogArticleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogArticle
     */
    select?: BlogArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogArticle
     */
    omit?: BlogArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogArticleInclude<ExtArgs> | null
    /**
     * The filter to search for the BlogArticle to update in case it exists.
     */
    where: BlogArticleWhereUniqueInput
    /**
     * In case the BlogArticle found by the `where` argument doesn't exist, create a new BlogArticle with this data.
     */
    create: XOR<BlogArticleCreateInput, BlogArticleUncheckedCreateInput>
    /**
     * In case the BlogArticle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlogArticleUpdateInput, BlogArticleUncheckedUpdateInput>
  }

  /**
   * BlogArticle delete
   */
  export type BlogArticleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogArticle
     */
    select?: BlogArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogArticle
     */
    omit?: BlogArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogArticleInclude<ExtArgs> | null
    /**
     * Filter which BlogArticle to delete.
     */
    where: BlogArticleWhereUniqueInput
  }

  /**
   * BlogArticle deleteMany
   */
  export type BlogArticleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlogArticles to delete
     */
    where?: BlogArticleWhereInput
    /**
     * Limit how many BlogArticles to delete.
     */
    limit?: number
  }

  /**
   * BlogArticle.comments
   */
  export type BlogArticle$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogComment
     */
    select?: BlogCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogComment
     */
    omit?: BlogCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogCommentInclude<ExtArgs> | null
    where?: BlogCommentWhereInput
    orderBy?: BlogCommentOrderByWithRelationInput | BlogCommentOrderByWithRelationInput[]
    cursor?: BlogCommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BlogCommentScalarFieldEnum | BlogCommentScalarFieldEnum[]
  }

  /**
   * BlogArticle.BlogReaction
   */
  export type BlogArticle$BlogReactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogReaction
     */
    select?: BlogReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogReaction
     */
    omit?: BlogReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogReactionInclude<ExtArgs> | null
    where?: BlogReactionWhereInput
    orderBy?: BlogReactionOrderByWithRelationInput | BlogReactionOrderByWithRelationInput[]
    cursor?: BlogReactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BlogReactionScalarFieldEnum | BlogReactionScalarFieldEnum[]
  }

  /**
   * BlogArticle without action
   */
  export type BlogArticleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogArticle
     */
    select?: BlogArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogArticle
     */
    omit?: BlogArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogArticleInclude<ExtArgs> | null
  }


  /**
   * Model BlogCategory
   */

  export type AggregateBlogCategory = {
    _count: BlogCategoryCountAggregateOutputType | null
    _min: BlogCategoryMinAggregateOutputType | null
    _max: BlogCategoryMaxAggregateOutputType | null
  }

  export type BlogCategoryMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    title: string | null
    slug: string | null
    description: string | null
  }

  export type BlogCategoryMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    title: string | null
    slug: string | null
    description: string | null
  }

  export type BlogCategoryCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    title: number
    slug: number
    description: number
    _all: number
  }


  export type BlogCategoryMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    slug?: true
    description?: true
  }

  export type BlogCategoryMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    slug?: true
    description?: true
  }

  export type BlogCategoryCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    slug?: true
    description?: true
    _all?: true
  }

  export type BlogCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlogCategory to aggregate.
     */
    where?: BlogCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogCategories to fetch.
     */
    orderBy?: BlogCategoryOrderByWithRelationInput | BlogCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlogCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BlogCategories
    **/
    _count?: true | BlogCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlogCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlogCategoryMaxAggregateInputType
  }

  export type GetBlogCategoryAggregateType<T extends BlogCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateBlogCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlogCategory[P]>
      : GetScalarType<T[P], AggregateBlogCategory[P]>
  }




  export type BlogCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogCategoryWhereInput
    orderBy?: BlogCategoryOrderByWithAggregationInput | BlogCategoryOrderByWithAggregationInput[]
    by: BlogCategoryScalarFieldEnum[] | BlogCategoryScalarFieldEnum
    having?: BlogCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlogCategoryCountAggregateInputType | true
    _min?: BlogCategoryMinAggregateInputType
    _max?: BlogCategoryMaxAggregateInputType
  }

  export type BlogCategoryGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    title: string
    slug: string
    description: string
    _count: BlogCategoryCountAggregateOutputType | null
    _min: BlogCategoryMinAggregateOutputType | null
    _max: BlogCategoryMaxAggregateOutputType | null
  }

  type GetBlogCategoryGroupByPayload<T extends BlogCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlogCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlogCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlogCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], BlogCategoryGroupByOutputType[P]>
        }
      >
    >


  export type BlogCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    slug?: boolean
    description?: boolean
    BlogArticle?: boolean | BlogCategory$BlogArticleArgs<ExtArgs>
    _count?: boolean | BlogCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blogCategory"]>

  export type BlogCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    slug?: boolean
    description?: boolean
  }, ExtArgs["result"]["blogCategory"]>

  export type BlogCategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    slug?: boolean
    description?: boolean
  }, ExtArgs["result"]["blogCategory"]>

  export type BlogCategorySelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    slug?: boolean
    description?: boolean
  }

  export type BlogCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "title" | "slug" | "description", ExtArgs["result"]["blogCategory"]>
  export type BlogCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    BlogArticle?: boolean | BlogCategory$BlogArticleArgs<ExtArgs>
    _count?: boolean | BlogCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BlogCategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BlogCategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BlogCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BlogCategory"
    objects: {
      BlogArticle: Prisma.$BlogArticlePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      title: string
      slug: string
      description: string
    }, ExtArgs["result"]["blogCategory"]>
    composites: {}
  }

  type BlogCategoryGetPayload<S extends boolean | null | undefined | BlogCategoryDefaultArgs> = $Result.GetResult<Prisma.$BlogCategoryPayload, S>

  type BlogCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BlogCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BlogCategoryCountAggregateInputType | true
    }

  export interface BlogCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BlogCategory'], meta: { name: 'BlogCategory' } }
    /**
     * Find zero or one BlogCategory that matches the filter.
     * @param {BlogCategoryFindUniqueArgs} args - Arguments to find a BlogCategory
     * @example
     * // Get one BlogCategory
     * const blogCategory = await prisma.blogCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BlogCategoryFindUniqueArgs>(args: SelectSubset<T, BlogCategoryFindUniqueArgs<ExtArgs>>): Prisma__BlogCategoryClient<$Result.GetResult<Prisma.$BlogCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BlogCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BlogCategoryFindUniqueOrThrowArgs} args - Arguments to find a BlogCategory
     * @example
     * // Get one BlogCategory
     * const blogCategory = await prisma.blogCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BlogCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, BlogCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BlogCategoryClient<$Result.GetResult<Prisma.$BlogCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlogCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogCategoryFindFirstArgs} args - Arguments to find a BlogCategory
     * @example
     * // Get one BlogCategory
     * const blogCategory = await prisma.blogCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BlogCategoryFindFirstArgs>(args?: SelectSubset<T, BlogCategoryFindFirstArgs<ExtArgs>>): Prisma__BlogCategoryClient<$Result.GetResult<Prisma.$BlogCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlogCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogCategoryFindFirstOrThrowArgs} args - Arguments to find a BlogCategory
     * @example
     * // Get one BlogCategory
     * const blogCategory = await prisma.blogCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BlogCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, BlogCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__BlogCategoryClient<$Result.GetResult<Prisma.$BlogCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BlogCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BlogCategories
     * const blogCategories = await prisma.blogCategory.findMany()
     * 
     * // Get first 10 BlogCategories
     * const blogCategories = await prisma.blogCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blogCategoryWithIdOnly = await prisma.blogCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BlogCategoryFindManyArgs>(args?: SelectSubset<T, BlogCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BlogCategory.
     * @param {BlogCategoryCreateArgs} args - Arguments to create a BlogCategory.
     * @example
     * // Create one BlogCategory
     * const BlogCategory = await prisma.blogCategory.create({
     *   data: {
     *     // ... data to create a BlogCategory
     *   }
     * })
     * 
     */
    create<T extends BlogCategoryCreateArgs>(args: SelectSubset<T, BlogCategoryCreateArgs<ExtArgs>>): Prisma__BlogCategoryClient<$Result.GetResult<Prisma.$BlogCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BlogCategories.
     * @param {BlogCategoryCreateManyArgs} args - Arguments to create many BlogCategories.
     * @example
     * // Create many BlogCategories
     * const blogCategory = await prisma.blogCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BlogCategoryCreateManyArgs>(args?: SelectSubset<T, BlogCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BlogCategories and returns the data saved in the database.
     * @param {BlogCategoryCreateManyAndReturnArgs} args - Arguments to create many BlogCategories.
     * @example
     * // Create many BlogCategories
     * const blogCategory = await prisma.blogCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BlogCategories and only return the `id`
     * const blogCategoryWithIdOnly = await prisma.blogCategory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BlogCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, BlogCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogCategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BlogCategory.
     * @param {BlogCategoryDeleteArgs} args - Arguments to delete one BlogCategory.
     * @example
     * // Delete one BlogCategory
     * const BlogCategory = await prisma.blogCategory.delete({
     *   where: {
     *     // ... filter to delete one BlogCategory
     *   }
     * })
     * 
     */
    delete<T extends BlogCategoryDeleteArgs>(args: SelectSubset<T, BlogCategoryDeleteArgs<ExtArgs>>): Prisma__BlogCategoryClient<$Result.GetResult<Prisma.$BlogCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BlogCategory.
     * @param {BlogCategoryUpdateArgs} args - Arguments to update one BlogCategory.
     * @example
     * // Update one BlogCategory
     * const blogCategory = await prisma.blogCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BlogCategoryUpdateArgs>(args: SelectSubset<T, BlogCategoryUpdateArgs<ExtArgs>>): Prisma__BlogCategoryClient<$Result.GetResult<Prisma.$BlogCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BlogCategories.
     * @param {BlogCategoryDeleteManyArgs} args - Arguments to filter BlogCategories to delete.
     * @example
     * // Delete a few BlogCategories
     * const { count } = await prisma.blogCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BlogCategoryDeleteManyArgs>(args?: SelectSubset<T, BlogCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlogCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BlogCategories
     * const blogCategory = await prisma.blogCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BlogCategoryUpdateManyArgs>(args: SelectSubset<T, BlogCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlogCategories and returns the data updated in the database.
     * @param {BlogCategoryUpdateManyAndReturnArgs} args - Arguments to update many BlogCategories.
     * @example
     * // Update many BlogCategories
     * const blogCategory = await prisma.blogCategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BlogCategories and only return the `id`
     * const blogCategoryWithIdOnly = await prisma.blogCategory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BlogCategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, BlogCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogCategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BlogCategory.
     * @param {BlogCategoryUpsertArgs} args - Arguments to update or create a BlogCategory.
     * @example
     * // Update or create a BlogCategory
     * const blogCategory = await prisma.blogCategory.upsert({
     *   create: {
     *     // ... data to create a BlogCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BlogCategory we want to update
     *   }
     * })
     */
    upsert<T extends BlogCategoryUpsertArgs>(args: SelectSubset<T, BlogCategoryUpsertArgs<ExtArgs>>): Prisma__BlogCategoryClient<$Result.GetResult<Prisma.$BlogCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BlogCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogCategoryCountArgs} args - Arguments to filter BlogCategories to count.
     * @example
     * // Count the number of BlogCategories
     * const count = await prisma.blogCategory.count({
     *   where: {
     *     // ... the filter for the BlogCategories we want to count
     *   }
     * })
    **/
    count<T extends BlogCategoryCountArgs>(
      args?: Subset<T, BlogCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlogCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BlogCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BlogCategoryAggregateArgs>(args: Subset<T, BlogCategoryAggregateArgs>): Prisma.PrismaPromise<GetBlogCategoryAggregateType<T>>

    /**
     * Group by BlogCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogCategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BlogCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlogCategoryGroupByArgs['orderBy'] }
        : { orderBy?: BlogCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BlogCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlogCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BlogCategory model
   */
  readonly fields: BlogCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BlogCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlogCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    BlogArticle<T extends BlogCategory$BlogArticleArgs<ExtArgs> = {}>(args?: Subset<T, BlogCategory$BlogArticleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogArticlePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BlogCategory model
   */
  interface BlogCategoryFieldRefs {
    readonly id: FieldRef<"BlogCategory", 'String'>
    readonly createdAt: FieldRef<"BlogCategory", 'DateTime'>
    readonly updatedAt: FieldRef<"BlogCategory", 'DateTime'>
    readonly title: FieldRef<"BlogCategory", 'String'>
    readonly slug: FieldRef<"BlogCategory", 'String'>
    readonly description: FieldRef<"BlogCategory", 'String'>
  }
    

  // Custom InputTypes
  /**
   * BlogCategory findUnique
   */
  export type BlogCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogCategory
     */
    select?: BlogCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogCategory
     */
    omit?: BlogCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogCategoryInclude<ExtArgs> | null
    /**
     * Filter, which BlogCategory to fetch.
     */
    where: BlogCategoryWhereUniqueInput
  }

  /**
   * BlogCategory findUniqueOrThrow
   */
  export type BlogCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogCategory
     */
    select?: BlogCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogCategory
     */
    omit?: BlogCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogCategoryInclude<ExtArgs> | null
    /**
     * Filter, which BlogCategory to fetch.
     */
    where: BlogCategoryWhereUniqueInput
  }

  /**
   * BlogCategory findFirst
   */
  export type BlogCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogCategory
     */
    select?: BlogCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogCategory
     */
    omit?: BlogCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogCategoryInclude<ExtArgs> | null
    /**
     * Filter, which BlogCategory to fetch.
     */
    where?: BlogCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogCategories to fetch.
     */
    orderBy?: BlogCategoryOrderByWithRelationInput | BlogCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlogCategories.
     */
    cursor?: BlogCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlogCategories.
     */
    distinct?: BlogCategoryScalarFieldEnum | BlogCategoryScalarFieldEnum[]
  }

  /**
   * BlogCategory findFirstOrThrow
   */
  export type BlogCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogCategory
     */
    select?: BlogCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogCategory
     */
    omit?: BlogCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogCategoryInclude<ExtArgs> | null
    /**
     * Filter, which BlogCategory to fetch.
     */
    where?: BlogCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogCategories to fetch.
     */
    orderBy?: BlogCategoryOrderByWithRelationInput | BlogCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlogCategories.
     */
    cursor?: BlogCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlogCategories.
     */
    distinct?: BlogCategoryScalarFieldEnum | BlogCategoryScalarFieldEnum[]
  }

  /**
   * BlogCategory findMany
   */
  export type BlogCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogCategory
     */
    select?: BlogCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogCategory
     */
    omit?: BlogCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogCategoryInclude<ExtArgs> | null
    /**
     * Filter, which BlogCategories to fetch.
     */
    where?: BlogCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogCategories to fetch.
     */
    orderBy?: BlogCategoryOrderByWithRelationInput | BlogCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BlogCategories.
     */
    cursor?: BlogCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogCategories.
     */
    skip?: number
    distinct?: BlogCategoryScalarFieldEnum | BlogCategoryScalarFieldEnum[]
  }

  /**
   * BlogCategory create
   */
  export type BlogCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogCategory
     */
    select?: BlogCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogCategory
     */
    omit?: BlogCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a BlogCategory.
     */
    data: XOR<BlogCategoryCreateInput, BlogCategoryUncheckedCreateInput>
  }

  /**
   * BlogCategory createMany
   */
  export type BlogCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BlogCategories.
     */
    data: BlogCategoryCreateManyInput | BlogCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BlogCategory createManyAndReturn
   */
  export type BlogCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogCategory
     */
    select?: BlogCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BlogCategory
     */
    omit?: BlogCategoryOmit<ExtArgs> | null
    /**
     * The data used to create many BlogCategories.
     */
    data: BlogCategoryCreateManyInput | BlogCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BlogCategory update
   */
  export type BlogCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogCategory
     */
    select?: BlogCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogCategory
     */
    omit?: BlogCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a BlogCategory.
     */
    data: XOR<BlogCategoryUpdateInput, BlogCategoryUncheckedUpdateInput>
    /**
     * Choose, which BlogCategory to update.
     */
    where: BlogCategoryWhereUniqueInput
  }

  /**
   * BlogCategory updateMany
   */
  export type BlogCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BlogCategories.
     */
    data: XOR<BlogCategoryUpdateManyMutationInput, BlogCategoryUncheckedUpdateManyInput>
    /**
     * Filter which BlogCategories to update
     */
    where?: BlogCategoryWhereInput
    /**
     * Limit how many BlogCategories to update.
     */
    limit?: number
  }

  /**
   * BlogCategory updateManyAndReturn
   */
  export type BlogCategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogCategory
     */
    select?: BlogCategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BlogCategory
     */
    omit?: BlogCategoryOmit<ExtArgs> | null
    /**
     * The data used to update BlogCategories.
     */
    data: XOR<BlogCategoryUpdateManyMutationInput, BlogCategoryUncheckedUpdateManyInput>
    /**
     * Filter which BlogCategories to update
     */
    where?: BlogCategoryWhereInput
    /**
     * Limit how many BlogCategories to update.
     */
    limit?: number
  }

  /**
   * BlogCategory upsert
   */
  export type BlogCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogCategory
     */
    select?: BlogCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogCategory
     */
    omit?: BlogCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the BlogCategory to update in case it exists.
     */
    where: BlogCategoryWhereUniqueInput
    /**
     * In case the BlogCategory found by the `where` argument doesn't exist, create a new BlogCategory with this data.
     */
    create: XOR<BlogCategoryCreateInput, BlogCategoryUncheckedCreateInput>
    /**
     * In case the BlogCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlogCategoryUpdateInput, BlogCategoryUncheckedUpdateInput>
  }

  /**
   * BlogCategory delete
   */
  export type BlogCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogCategory
     */
    select?: BlogCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogCategory
     */
    omit?: BlogCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogCategoryInclude<ExtArgs> | null
    /**
     * Filter which BlogCategory to delete.
     */
    where: BlogCategoryWhereUniqueInput
  }

  /**
   * BlogCategory deleteMany
   */
  export type BlogCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlogCategories to delete
     */
    where?: BlogCategoryWhereInput
    /**
     * Limit how many BlogCategories to delete.
     */
    limit?: number
  }

  /**
   * BlogCategory.BlogArticle
   */
  export type BlogCategory$BlogArticleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogArticle
     */
    select?: BlogArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogArticle
     */
    omit?: BlogArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogArticleInclude<ExtArgs> | null
    where?: BlogArticleWhereInput
    orderBy?: BlogArticleOrderByWithRelationInput | BlogArticleOrderByWithRelationInput[]
    cursor?: BlogArticleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BlogArticleScalarFieldEnum | BlogArticleScalarFieldEnum[]
  }

  /**
   * BlogCategory without action
   */
  export type BlogCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogCategory
     */
    select?: BlogCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogCategory
     */
    omit?: BlogCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogCategoryInclude<ExtArgs> | null
  }


  /**
   * Model BlogComment
   */

  export type AggregateBlogComment = {
    _count: BlogCommentCountAggregateOutputType | null
    _min: BlogCommentMinAggregateOutputType | null
    _max: BlogCommentMaxAggregateOutputType | null
  }

  export type BlogCommentMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    content: string | null
    articleId: string | null
    userId: string | null
    stage: $Enums.ContentStage | null
  }

  export type BlogCommentMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    content: string | null
    articleId: string | null
    userId: string | null
    stage: $Enums.ContentStage | null
  }

  export type BlogCommentCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    content: number
    articleId: number
    userId: number
    stage: number
    _all: number
  }


  export type BlogCommentMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    content?: true
    articleId?: true
    userId?: true
    stage?: true
  }

  export type BlogCommentMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    content?: true
    articleId?: true
    userId?: true
    stage?: true
  }

  export type BlogCommentCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    content?: true
    articleId?: true
    userId?: true
    stage?: true
    _all?: true
  }

  export type BlogCommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlogComment to aggregate.
     */
    where?: BlogCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogComments to fetch.
     */
    orderBy?: BlogCommentOrderByWithRelationInput | BlogCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlogCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BlogComments
    **/
    _count?: true | BlogCommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlogCommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlogCommentMaxAggregateInputType
  }

  export type GetBlogCommentAggregateType<T extends BlogCommentAggregateArgs> = {
        [P in keyof T & keyof AggregateBlogComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlogComment[P]>
      : GetScalarType<T[P], AggregateBlogComment[P]>
  }




  export type BlogCommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogCommentWhereInput
    orderBy?: BlogCommentOrderByWithAggregationInput | BlogCommentOrderByWithAggregationInput[]
    by: BlogCommentScalarFieldEnum[] | BlogCommentScalarFieldEnum
    having?: BlogCommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlogCommentCountAggregateInputType | true
    _min?: BlogCommentMinAggregateInputType
    _max?: BlogCommentMaxAggregateInputType
  }

  export type BlogCommentGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    content: string
    articleId: string
    userId: string
    stage: $Enums.ContentStage
    _count: BlogCommentCountAggregateOutputType | null
    _min: BlogCommentMinAggregateOutputType | null
    _max: BlogCommentMaxAggregateOutputType | null
  }

  type GetBlogCommentGroupByPayload<T extends BlogCommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlogCommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlogCommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlogCommentGroupByOutputType[P]>
            : GetScalarType<T[P], BlogCommentGroupByOutputType[P]>
        }
      >
    >


  export type BlogCommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    content?: boolean
    articleId?: boolean
    userId?: boolean
    stage?: boolean
    article?: boolean | BlogArticleDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blogComment"]>

  export type BlogCommentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    content?: boolean
    articleId?: boolean
    userId?: boolean
    stage?: boolean
    article?: boolean | BlogArticleDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blogComment"]>

  export type BlogCommentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    content?: boolean
    articleId?: boolean
    userId?: boolean
    stage?: boolean
    article?: boolean | BlogArticleDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blogComment"]>

  export type BlogCommentSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    content?: boolean
    articleId?: boolean
    userId?: boolean
    stage?: boolean
  }

  export type BlogCommentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "content" | "articleId" | "userId" | "stage", ExtArgs["result"]["blogComment"]>
  export type BlogCommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    article?: boolean | BlogArticleDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BlogCommentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    article?: boolean | BlogArticleDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BlogCommentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    article?: boolean | BlogArticleDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BlogCommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BlogComment"
    objects: {
      article: Prisma.$BlogArticlePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      content: string
      articleId: string
      userId: string
      stage: $Enums.ContentStage
    }, ExtArgs["result"]["blogComment"]>
    composites: {}
  }

  type BlogCommentGetPayload<S extends boolean | null | undefined | BlogCommentDefaultArgs> = $Result.GetResult<Prisma.$BlogCommentPayload, S>

  type BlogCommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BlogCommentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BlogCommentCountAggregateInputType | true
    }

  export interface BlogCommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BlogComment'], meta: { name: 'BlogComment' } }
    /**
     * Find zero or one BlogComment that matches the filter.
     * @param {BlogCommentFindUniqueArgs} args - Arguments to find a BlogComment
     * @example
     * // Get one BlogComment
     * const blogComment = await prisma.blogComment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BlogCommentFindUniqueArgs>(args: SelectSubset<T, BlogCommentFindUniqueArgs<ExtArgs>>): Prisma__BlogCommentClient<$Result.GetResult<Prisma.$BlogCommentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BlogComment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BlogCommentFindUniqueOrThrowArgs} args - Arguments to find a BlogComment
     * @example
     * // Get one BlogComment
     * const blogComment = await prisma.blogComment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BlogCommentFindUniqueOrThrowArgs>(args: SelectSubset<T, BlogCommentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BlogCommentClient<$Result.GetResult<Prisma.$BlogCommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlogComment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogCommentFindFirstArgs} args - Arguments to find a BlogComment
     * @example
     * // Get one BlogComment
     * const blogComment = await prisma.blogComment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BlogCommentFindFirstArgs>(args?: SelectSubset<T, BlogCommentFindFirstArgs<ExtArgs>>): Prisma__BlogCommentClient<$Result.GetResult<Prisma.$BlogCommentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlogComment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogCommentFindFirstOrThrowArgs} args - Arguments to find a BlogComment
     * @example
     * // Get one BlogComment
     * const blogComment = await prisma.blogComment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BlogCommentFindFirstOrThrowArgs>(args?: SelectSubset<T, BlogCommentFindFirstOrThrowArgs<ExtArgs>>): Prisma__BlogCommentClient<$Result.GetResult<Prisma.$BlogCommentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BlogComments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogCommentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BlogComments
     * const blogComments = await prisma.blogComment.findMany()
     * 
     * // Get first 10 BlogComments
     * const blogComments = await prisma.blogComment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blogCommentWithIdOnly = await prisma.blogComment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BlogCommentFindManyArgs>(args?: SelectSubset<T, BlogCommentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogCommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BlogComment.
     * @param {BlogCommentCreateArgs} args - Arguments to create a BlogComment.
     * @example
     * // Create one BlogComment
     * const BlogComment = await prisma.blogComment.create({
     *   data: {
     *     // ... data to create a BlogComment
     *   }
     * })
     * 
     */
    create<T extends BlogCommentCreateArgs>(args: SelectSubset<T, BlogCommentCreateArgs<ExtArgs>>): Prisma__BlogCommentClient<$Result.GetResult<Prisma.$BlogCommentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BlogComments.
     * @param {BlogCommentCreateManyArgs} args - Arguments to create many BlogComments.
     * @example
     * // Create many BlogComments
     * const blogComment = await prisma.blogComment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BlogCommentCreateManyArgs>(args?: SelectSubset<T, BlogCommentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BlogComments and returns the data saved in the database.
     * @param {BlogCommentCreateManyAndReturnArgs} args - Arguments to create many BlogComments.
     * @example
     * // Create many BlogComments
     * const blogComment = await prisma.blogComment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BlogComments and only return the `id`
     * const blogCommentWithIdOnly = await prisma.blogComment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BlogCommentCreateManyAndReturnArgs>(args?: SelectSubset<T, BlogCommentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogCommentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BlogComment.
     * @param {BlogCommentDeleteArgs} args - Arguments to delete one BlogComment.
     * @example
     * // Delete one BlogComment
     * const BlogComment = await prisma.blogComment.delete({
     *   where: {
     *     // ... filter to delete one BlogComment
     *   }
     * })
     * 
     */
    delete<T extends BlogCommentDeleteArgs>(args: SelectSubset<T, BlogCommentDeleteArgs<ExtArgs>>): Prisma__BlogCommentClient<$Result.GetResult<Prisma.$BlogCommentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BlogComment.
     * @param {BlogCommentUpdateArgs} args - Arguments to update one BlogComment.
     * @example
     * // Update one BlogComment
     * const blogComment = await prisma.blogComment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BlogCommentUpdateArgs>(args: SelectSubset<T, BlogCommentUpdateArgs<ExtArgs>>): Prisma__BlogCommentClient<$Result.GetResult<Prisma.$BlogCommentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BlogComments.
     * @param {BlogCommentDeleteManyArgs} args - Arguments to filter BlogComments to delete.
     * @example
     * // Delete a few BlogComments
     * const { count } = await prisma.blogComment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BlogCommentDeleteManyArgs>(args?: SelectSubset<T, BlogCommentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlogComments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogCommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BlogComments
     * const blogComment = await prisma.blogComment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BlogCommentUpdateManyArgs>(args: SelectSubset<T, BlogCommentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlogComments and returns the data updated in the database.
     * @param {BlogCommentUpdateManyAndReturnArgs} args - Arguments to update many BlogComments.
     * @example
     * // Update many BlogComments
     * const blogComment = await prisma.blogComment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BlogComments and only return the `id`
     * const blogCommentWithIdOnly = await prisma.blogComment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BlogCommentUpdateManyAndReturnArgs>(args: SelectSubset<T, BlogCommentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogCommentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BlogComment.
     * @param {BlogCommentUpsertArgs} args - Arguments to update or create a BlogComment.
     * @example
     * // Update or create a BlogComment
     * const blogComment = await prisma.blogComment.upsert({
     *   create: {
     *     // ... data to create a BlogComment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BlogComment we want to update
     *   }
     * })
     */
    upsert<T extends BlogCommentUpsertArgs>(args: SelectSubset<T, BlogCommentUpsertArgs<ExtArgs>>): Prisma__BlogCommentClient<$Result.GetResult<Prisma.$BlogCommentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BlogComments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogCommentCountArgs} args - Arguments to filter BlogComments to count.
     * @example
     * // Count the number of BlogComments
     * const count = await prisma.blogComment.count({
     *   where: {
     *     // ... the filter for the BlogComments we want to count
     *   }
     * })
    **/
    count<T extends BlogCommentCountArgs>(
      args?: Subset<T, BlogCommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlogCommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BlogComment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogCommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BlogCommentAggregateArgs>(args: Subset<T, BlogCommentAggregateArgs>): Prisma.PrismaPromise<GetBlogCommentAggregateType<T>>

    /**
     * Group by BlogComment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogCommentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BlogCommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlogCommentGroupByArgs['orderBy'] }
        : { orderBy?: BlogCommentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BlogCommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlogCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BlogComment model
   */
  readonly fields: BlogCommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BlogComment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlogCommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    article<T extends BlogArticleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BlogArticleDefaultArgs<ExtArgs>>): Prisma__BlogArticleClient<$Result.GetResult<Prisma.$BlogArticlePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BlogComment model
   */
  interface BlogCommentFieldRefs {
    readonly id: FieldRef<"BlogComment", 'String'>
    readonly createdAt: FieldRef<"BlogComment", 'DateTime'>
    readonly updatedAt: FieldRef<"BlogComment", 'DateTime'>
    readonly content: FieldRef<"BlogComment", 'String'>
    readonly articleId: FieldRef<"BlogComment", 'String'>
    readonly userId: FieldRef<"BlogComment", 'String'>
    readonly stage: FieldRef<"BlogComment", 'ContentStage'>
  }
    

  // Custom InputTypes
  /**
   * BlogComment findUnique
   */
  export type BlogCommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogComment
     */
    select?: BlogCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogComment
     */
    omit?: BlogCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogCommentInclude<ExtArgs> | null
    /**
     * Filter, which BlogComment to fetch.
     */
    where: BlogCommentWhereUniqueInput
  }

  /**
   * BlogComment findUniqueOrThrow
   */
  export type BlogCommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogComment
     */
    select?: BlogCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogComment
     */
    omit?: BlogCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogCommentInclude<ExtArgs> | null
    /**
     * Filter, which BlogComment to fetch.
     */
    where: BlogCommentWhereUniqueInput
  }

  /**
   * BlogComment findFirst
   */
  export type BlogCommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogComment
     */
    select?: BlogCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogComment
     */
    omit?: BlogCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogCommentInclude<ExtArgs> | null
    /**
     * Filter, which BlogComment to fetch.
     */
    where?: BlogCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogComments to fetch.
     */
    orderBy?: BlogCommentOrderByWithRelationInput | BlogCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlogComments.
     */
    cursor?: BlogCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlogComments.
     */
    distinct?: BlogCommentScalarFieldEnum | BlogCommentScalarFieldEnum[]
  }

  /**
   * BlogComment findFirstOrThrow
   */
  export type BlogCommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogComment
     */
    select?: BlogCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogComment
     */
    omit?: BlogCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogCommentInclude<ExtArgs> | null
    /**
     * Filter, which BlogComment to fetch.
     */
    where?: BlogCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogComments to fetch.
     */
    orderBy?: BlogCommentOrderByWithRelationInput | BlogCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlogComments.
     */
    cursor?: BlogCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlogComments.
     */
    distinct?: BlogCommentScalarFieldEnum | BlogCommentScalarFieldEnum[]
  }

  /**
   * BlogComment findMany
   */
  export type BlogCommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogComment
     */
    select?: BlogCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogComment
     */
    omit?: BlogCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogCommentInclude<ExtArgs> | null
    /**
     * Filter, which BlogComments to fetch.
     */
    where?: BlogCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogComments to fetch.
     */
    orderBy?: BlogCommentOrderByWithRelationInput | BlogCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BlogComments.
     */
    cursor?: BlogCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogComments.
     */
    skip?: number
    distinct?: BlogCommentScalarFieldEnum | BlogCommentScalarFieldEnum[]
  }

  /**
   * BlogComment create
   */
  export type BlogCommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogComment
     */
    select?: BlogCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogComment
     */
    omit?: BlogCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogCommentInclude<ExtArgs> | null
    /**
     * The data needed to create a BlogComment.
     */
    data: XOR<BlogCommentCreateInput, BlogCommentUncheckedCreateInput>
  }

  /**
   * BlogComment createMany
   */
  export type BlogCommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BlogComments.
     */
    data: BlogCommentCreateManyInput | BlogCommentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BlogComment createManyAndReturn
   */
  export type BlogCommentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogComment
     */
    select?: BlogCommentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BlogComment
     */
    omit?: BlogCommentOmit<ExtArgs> | null
    /**
     * The data used to create many BlogComments.
     */
    data: BlogCommentCreateManyInput | BlogCommentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogCommentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BlogComment update
   */
  export type BlogCommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogComment
     */
    select?: BlogCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogComment
     */
    omit?: BlogCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogCommentInclude<ExtArgs> | null
    /**
     * The data needed to update a BlogComment.
     */
    data: XOR<BlogCommentUpdateInput, BlogCommentUncheckedUpdateInput>
    /**
     * Choose, which BlogComment to update.
     */
    where: BlogCommentWhereUniqueInput
  }

  /**
   * BlogComment updateMany
   */
  export type BlogCommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BlogComments.
     */
    data: XOR<BlogCommentUpdateManyMutationInput, BlogCommentUncheckedUpdateManyInput>
    /**
     * Filter which BlogComments to update
     */
    where?: BlogCommentWhereInput
    /**
     * Limit how many BlogComments to update.
     */
    limit?: number
  }

  /**
   * BlogComment updateManyAndReturn
   */
  export type BlogCommentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogComment
     */
    select?: BlogCommentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BlogComment
     */
    omit?: BlogCommentOmit<ExtArgs> | null
    /**
     * The data used to update BlogComments.
     */
    data: XOR<BlogCommentUpdateManyMutationInput, BlogCommentUncheckedUpdateManyInput>
    /**
     * Filter which BlogComments to update
     */
    where?: BlogCommentWhereInput
    /**
     * Limit how many BlogComments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogCommentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BlogComment upsert
   */
  export type BlogCommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogComment
     */
    select?: BlogCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogComment
     */
    omit?: BlogCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogCommentInclude<ExtArgs> | null
    /**
     * The filter to search for the BlogComment to update in case it exists.
     */
    where: BlogCommentWhereUniqueInput
    /**
     * In case the BlogComment found by the `where` argument doesn't exist, create a new BlogComment with this data.
     */
    create: XOR<BlogCommentCreateInput, BlogCommentUncheckedCreateInput>
    /**
     * In case the BlogComment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlogCommentUpdateInput, BlogCommentUncheckedUpdateInput>
  }

  /**
   * BlogComment delete
   */
  export type BlogCommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogComment
     */
    select?: BlogCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogComment
     */
    omit?: BlogCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogCommentInclude<ExtArgs> | null
    /**
     * Filter which BlogComment to delete.
     */
    where: BlogCommentWhereUniqueInput
  }

  /**
   * BlogComment deleteMany
   */
  export type BlogCommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlogComments to delete
     */
    where?: BlogCommentWhereInput
    /**
     * Limit how many BlogComments to delete.
     */
    limit?: number
  }

  /**
   * BlogComment without action
   */
  export type BlogCommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogComment
     */
    select?: BlogCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogComment
     */
    omit?: BlogCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogCommentInclude<ExtArgs> | null
  }


  /**
   * Model BlogReaction
   */

  export type AggregateBlogReaction = {
    _count: BlogReactionCountAggregateOutputType | null
    _min: BlogReactionMinAggregateOutputType | null
    _max: BlogReactionMaxAggregateOutputType | null
  }

  export type BlogReactionMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    articleId: string | null
    userId: string | null
    type: $Enums.ReactionType | null
  }

  export type BlogReactionMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    articleId: string | null
    userId: string | null
    type: $Enums.ReactionType | null
  }

  export type BlogReactionCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    articleId: number
    userId: number
    type: number
    _all: number
  }


  export type BlogReactionMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    articleId?: true
    userId?: true
    type?: true
  }

  export type BlogReactionMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    articleId?: true
    userId?: true
    type?: true
  }

  export type BlogReactionCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    articleId?: true
    userId?: true
    type?: true
    _all?: true
  }

  export type BlogReactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlogReaction to aggregate.
     */
    where?: BlogReactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogReactions to fetch.
     */
    orderBy?: BlogReactionOrderByWithRelationInput | BlogReactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlogReactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogReactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogReactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BlogReactions
    **/
    _count?: true | BlogReactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlogReactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlogReactionMaxAggregateInputType
  }

  export type GetBlogReactionAggregateType<T extends BlogReactionAggregateArgs> = {
        [P in keyof T & keyof AggregateBlogReaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlogReaction[P]>
      : GetScalarType<T[P], AggregateBlogReaction[P]>
  }




  export type BlogReactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogReactionWhereInput
    orderBy?: BlogReactionOrderByWithAggregationInput | BlogReactionOrderByWithAggregationInput[]
    by: BlogReactionScalarFieldEnum[] | BlogReactionScalarFieldEnum
    having?: BlogReactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlogReactionCountAggregateInputType | true
    _min?: BlogReactionMinAggregateInputType
    _max?: BlogReactionMaxAggregateInputType
  }

  export type BlogReactionGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    articleId: string
    userId: string
    type: $Enums.ReactionType
    _count: BlogReactionCountAggregateOutputType | null
    _min: BlogReactionMinAggregateOutputType | null
    _max: BlogReactionMaxAggregateOutputType | null
  }

  type GetBlogReactionGroupByPayload<T extends BlogReactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlogReactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlogReactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlogReactionGroupByOutputType[P]>
            : GetScalarType<T[P], BlogReactionGroupByOutputType[P]>
        }
      >
    >


  export type BlogReactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    articleId?: boolean
    userId?: boolean
    type?: boolean
    article?: boolean | BlogArticleDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blogReaction"]>

  export type BlogReactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    articleId?: boolean
    userId?: boolean
    type?: boolean
    article?: boolean | BlogArticleDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blogReaction"]>

  export type BlogReactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    articleId?: boolean
    userId?: boolean
    type?: boolean
    article?: boolean | BlogArticleDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blogReaction"]>

  export type BlogReactionSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    articleId?: boolean
    userId?: boolean
    type?: boolean
  }

  export type BlogReactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "articleId" | "userId" | "type", ExtArgs["result"]["blogReaction"]>
  export type BlogReactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    article?: boolean | BlogArticleDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BlogReactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    article?: boolean | BlogArticleDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BlogReactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    article?: boolean | BlogArticleDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BlogReactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BlogReaction"
    objects: {
      article: Prisma.$BlogArticlePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      articleId: string
      userId: string
      type: $Enums.ReactionType
    }, ExtArgs["result"]["blogReaction"]>
    composites: {}
  }

  type BlogReactionGetPayload<S extends boolean | null | undefined | BlogReactionDefaultArgs> = $Result.GetResult<Prisma.$BlogReactionPayload, S>

  type BlogReactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BlogReactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BlogReactionCountAggregateInputType | true
    }

  export interface BlogReactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BlogReaction'], meta: { name: 'BlogReaction' } }
    /**
     * Find zero or one BlogReaction that matches the filter.
     * @param {BlogReactionFindUniqueArgs} args - Arguments to find a BlogReaction
     * @example
     * // Get one BlogReaction
     * const blogReaction = await prisma.blogReaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BlogReactionFindUniqueArgs>(args: SelectSubset<T, BlogReactionFindUniqueArgs<ExtArgs>>): Prisma__BlogReactionClient<$Result.GetResult<Prisma.$BlogReactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BlogReaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BlogReactionFindUniqueOrThrowArgs} args - Arguments to find a BlogReaction
     * @example
     * // Get one BlogReaction
     * const blogReaction = await prisma.blogReaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BlogReactionFindUniqueOrThrowArgs>(args: SelectSubset<T, BlogReactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BlogReactionClient<$Result.GetResult<Prisma.$BlogReactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlogReaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogReactionFindFirstArgs} args - Arguments to find a BlogReaction
     * @example
     * // Get one BlogReaction
     * const blogReaction = await prisma.blogReaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BlogReactionFindFirstArgs>(args?: SelectSubset<T, BlogReactionFindFirstArgs<ExtArgs>>): Prisma__BlogReactionClient<$Result.GetResult<Prisma.$BlogReactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlogReaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogReactionFindFirstOrThrowArgs} args - Arguments to find a BlogReaction
     * @example
     * // Get one BlogReaction
     * const blogReaction = await prisma.blogReaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BlogReactionFindFirstOrThrowArgs>(args?: SelectSubset<T, BlogReactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__BlogReactionClient<$Result.GetResult<Prisma.$BlogReactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BlogReactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogReactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BlogReactions
     * const blogReactions = await prisma.blogReaction.findMany()
     * 
     * // Get first 10 BlogReactions
     * const blogReactions = await prisma.blogReaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blogReactionWithIdOnly = await prisma.blogReaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BlogReactionFindManyArgs>(args?: SelectSubset<T, BlogReactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogReactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BlogReaction.
     * @param {BlogReactionCreateArgs} args - Arguments to create a BlogReaction.
     * @example
     * // Create one BlogReaction
     * const BlogReaction = await prisma.blogReaction.create({
     *   data: {
     *     // ... data to create a BlogReaction
     *   }
     * })
     * 
     */
    create<T extends BlogReactionCreateArgs>(args: SelectSubset<T, BlogReactionCreateArgs<ExtArgs>>): Prisma__BlogReactionClient<$Result.GetResult<Prisma.$BlogReactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BlogReactions.
     * @param {BlogReactionCreateManyArgs} args - Arguments to create many BlogReactions.
     * @example
     * // Create many BlogReactions
     * const blogReaction = await prisma.blogReaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BlogReactionCreateManyArgs>(args?: SelectSubset<T, BlogReactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BlogReactions and returns the data saved in the database.
     * @param {BlogReactionCreateManyAndReturnArgs} args - Arguments to create many BlogReactions.
     * @example
     * // Create many BlogReactions
     * const blogReaction = await prisma.blogReaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BlogReactions and only return the `id`
     * const blogReactionWithIdOnly = await prisma.blogReaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BlogReactionCreateManyAndReturnArgs>(args?: SelectSubset<T, BlogReactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogReactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BlogReaction.
     * @param {BlogReactionDeleteArgs} args - Arguments to delete one BlogReaction.
     * @example
     * // Delete one BlogReaction
     * const BlogReaction = await prisma.blogReaction.delete({
     *   where: {
     *     // ... filter to delete one BlogReaction
     *   }
     * })
     * 
     */
    delete<T extends BlogReactionDeleteArgs>(args: SelectSubset<T, BlogReactionDeleteArgs<ExtArgs>>): Prisma__BlogReactionClient<$Result.GetResult<Prisma.$BlogReactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BlogReaction.
     * @param {BlogReactionUpdateArgs} args - Arguments to update one BlogReaction.
     * @example
     * // Update one BlogReaction
     * const blogReaction = await prisma.blogReaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BlogReactionUpdateArgs>(args: SelectSubset<T, BlogReactionUpdateArgs<ExtArgs>>): Prisma__BlogReactionClient<$Result.GetResult<Prisma.$BlogReactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BlogReactions.
     * @param {BlogReactionDeleteManyArgs} args - Arguments to filter BlogReactions to delete.
     * @example
     * // Delete a few BlogReactions
     * const { count } = await prisma.blogReaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BlogReactionDeleteManyArgs>(args?: SelectSubset<T, BlogReactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlogReactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogReactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BlogReactions
     * const blogReaction = await prisma.blogReaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BlogReactionUpdateManyArgs>(args: SelectSubset<T, BlogReactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlogReactions and returns the data updated in the database.
     * @param {BlogReactionUpdateManyAndReturnArgs} args - Arguments to update many BlogReactions.
     * @example
     * // Update many BlogReactions
     * const blogReaction = await prisma.blogReaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BlogReactions and only return the `id`
     * const blogReactionWithIdOnly = await prisma.blogReaction.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BlogReactionUpdateManyAndReturnArgs>(args: SelectSubset<T, BlogReactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogReactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BlogReaction.
     * @param {BlogReactionUpsertArgs} args - Arguments to update or create a BlogReaction.
     * @example
     * // Update or create a BlogReaction
     * const blogReaction = await prisma.blogReaction.upsert({
     *   create: {
     *     // ... data to create a BlogReaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BlogReaction we want to update
     *   }
     * })
     */
    upsert<T extends BlogReactionUpsertArgs>(args: SelectSubset<T, BlogReactionUpsertArgs<ExtArgs>>): Prisma__BlogReactionClient<$Result.GetResult<Prisma.$BlogReactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BlogReactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogReactionCountArgs} args - Arguments to filter BlogReactions to count.
     * @example
     * // Count the number of BlogReactions
     * const count = await prisma.blogReaction.count({
     *   where: {
     *     // ... the filter for the BlogReactions we want to count
     *   }
     * })
    **/
    count<T extends BlogReactionCountArgs>(
      args?: Subset<T, BlogReactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlogReactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BlogReaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogReactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BlogReactionAggregateArgs>(args: Subset<T, BlogReactionAggregateArgs>): Prisma.PrismaPromise<GetBlogReactionAggregateType<T>>

    /**
     * Group by BlogReaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogReactionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BlogReactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlogReactionGroupByArgs['orderBy'] }
        : { orderBy?: BlogReactionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BlogReactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlogReactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BlogReaction model
   */
  readonly fields: BlogReactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BlogReaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlogReactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    article<T extends BlogArticleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BlogArticleDefaultArgs<ExtArgs>>): Prisma__BlogArticleClient<$Result.GetResult<Prisma.$BlogArticlePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BlogReaction model
   */
  interface BlogReactionFieldRefs {
    readonly id: FieldRef<"BlogReaction", 'String'>
    readonly createdAt: FieldRef<"BlogReaction", 'DateTime'>
    readonly updatedAt: FieldRef<"BlogReaction", 'DateTime'>
    readonly articleId: FieldRef<"BlogReaction", 'String'>
    readonly userId: FieldRef<"BlogReaction", 'String'>
    readonly type: FieldRef<"BlogReaction", 'ReactionType'>
  }
    

  // Custom InputTypes
  /**
   * BlogReaction findUnique
   */
  export type BlogReactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogReaction
     */
    select?: BlogReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogReaction
     */
    omit?: BlogReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogReactionInclude<ExtArgs> | null
    /**
     * Filter, which BlogReaction to fetch.
     */
    where: BlogReactionWhereUniqueInput
  }

  /**
   * BlogReaction findUniqueOrThrow
   */
  export type BlogReactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogReaction
     */
    select?: BlogReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogReaction
     */
    omit?: BlogReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogReactionInclude<ExtArgs> | null
    /**
     * Filter, which BlogReaction to fetch.
     */
    where: BlogReactionWhereUniqueInput
  }

  /**
   * BlogReaction findFirst
   */
  export type BlogReactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogReaction
     */
    select?: BlogReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogReaction
     */
    omit?: BlogReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogReactionInclude<ExtArgs> | null
    /**
     * Filter, which BlogReaction to fetch.
     */
    where?: BlogReactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogReactions to fetch.
     */
    orderBy?: BlogReactionOrderByWithRelationInput | BlogReactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlogReactions.
     */
    cursor?: BlogReactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogReactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogReactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlogReactions.
     */
    distinct?: BlogReactionScalarFieldEnum | BlogReactionScalarFieldEnum[]
  }

  /**
   * BlogReaction findFirstOrThrow
   */
  export type BlogReactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogReaction
     */
    select?: BlogReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogReaction
     */
    omit?: BlogReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogReactionInclude<ExtArgs> | null
    /**
     * Filter, which BlogReaction to fetch.
     */
    where?: BlogReactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogReactions to fetch.
     */
    orderBy?: BlogReactionOrderByWithRelationInput | BlogReactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlogReactions.
     */
    cursor?: BlogReactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogReactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogReactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlogReactions.
     */
    distinct?: BlogReactionScalarFieldEnum | BlogReactionScalarFieldEnum[]
  }

  /**
   * BlogReaction findMany
   */
  export type BlogReactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogReaction
     */
    select?: BlogReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogReaction
     */
    omit?: BlogReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogReactionInclude<ExtArgs> | null
    /**
     * Filter, which BlogReactions to fetch.
     */
    where?: BlogReactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogReactions to fetch.
     */
    orderBy?: BlogReactionOrderByWithRelationInput | BlogReactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BlogReactions.
     */
    cursor?: BlogReactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogReactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogReactions.
     */
    skip?: number
    distinct?: BlogReactionScalarFieldEnum | BlogReactionScalarFieldEnum[]
  }

  /**
   * BlogReaction create
   */
  export type BlogReactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogReaction
     */
    select?: BlogReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogReaction
     */
    omit?: BlogReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogReactionInclude<ExtArgs> | null
    /**
     * The data needed to create a BlogReaction.
     */
    data: XOR<BlogReactionCreateInput, BlogReactionUncheckedCreateInput>
  }

  /**
   * BlogReaction createMany
   */
  export type BlogReactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BlogReactions.
     */
    data: BlogReactionCreateManyInput | BlogReactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BlogReaction createManyAndReturn
   */
  export type BlogReactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogReaction
     */
    select?: BlogReactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BlogReaction
     */
    omit?: BlogReactionOmit<ExtArgs> | null
    /**
     * The data used to create many BlogReactions.
     */
    data: BlogReactionCreateManyInput | BlogReactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogReactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BlogReaction update
   */
  export type BlogReactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogReaction
     */
    select?: BlogReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogReaction
     */
    omit?: BlogReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogReactionInclude<ExtArgs> | null
    /**
     * The data needed to update a BlogReaction.
     */
    data: XOR<BlogReactionUpdateInput, BlogReactionUncheckedUpdateInput>
    /**
     * Choose, which BlogReaction to update.
     */
    where: BlogReactionWhereUniqueInput
  }

  /**
   * BlogReaction updateMany
   */
  export type BlogReactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BlogReactions.
     */
    data: XOR<BlogReactionUpdateManyMutationInput, BlogReactionUncheckedUpdateManyInput>
    /**
     * Filter which BlogReactions to update
     */
    where?: BlogReactionWhereInput
    /**
     * Limit how many BlogReactions to update.
     */
    limit?: number
  }

  /**
   * BlogReaction updateManyAndReturn
   */
  export type BlogReactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogReaction
     */
    select?: BlogReactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BlogReaction
     */
    omit?: BlogReactionOmit<ExtArgs> | null
    /**
     * The data used to update BlogReactions.
     */
    data: XOR<BlogReactionUpdateManyMutationInput, BlogReactionUncheckedUpdateManyInput>
    /**
     * Filter which BlogReactions to update
     */
    where?: BlogReactionWhereInput
    /**
     * Limit how many BlogReactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogReactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BlogReaction upsert
   */
  export type BlogReactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogReaction
     */
    select?: BlogReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogReaction
     */
    omit?: BlogReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogReactionInclude<ExtArgs> | null
    /**
     * The filter to search for the BlogReaction to update in case it exists.
     */
    where: BlogReactionWhereUniqueInput
    /**
     * In case the BlogReaction found by the `where` argument doesn't exist, create a new BlogReaction with this data.
     */
    create: XOR<BlogReactionCreateInput, BlogReactionUncheckedCreateInput>
    /**
     * In case the BlogReaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlogReactionUpdateInput, BlogReactionUncheckedUpdateInput>
  }

  /**
   * BlogReaction delete
   */
  export type BlogReactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogReaction
     */
    select?: BlogReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogReaction
     */
    omit?: BlogReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogReactionInclude<ExtArgs> | null
    /**
     * Filter which BlogReaction to delete.
     */
    where: BlogReactionWhereUniqueInput
  }

  /**
   * BlogReaction deleteMany
   */
  export type BlogReactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlogReactions to delete
     */
    where?: BlogReactionWhereInput
    /**
     * Limit how many BlogReactions to delete.
     */
    limit?: number
  }

  /**
   * BlogReaction without action
   */
  export type BlogReactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogReaction
     */
    select?: BlogReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogReaction
     */
    omit?: BlogReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogReactionInclude<ExtArgs> | null
  }


  /**
   * Model CustomerCompany
   */

  export type AggregateCustomerCompany = {
    _count: CustomerCompanyCountAggregateOutputType | null
    _min: CustomerCompanyMinAggregateOutputType | null
    _max: CustomerCompanyMaxAggregateOutputType | null
  }

  export type CustomerCompanyMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    stage: $Enums.ContentStage | null
  }

  export type CustomerCompanyMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    stage: $Enums.ContentStage | null
  }

  export type CustomerCompanyCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    name: number
    stage: number
    _all: number
  }


  export type CustomerCompanyMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    stage?: true
  }

  export type CustomerCompanyMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    stage?: true
  }

  export type CustomerCompanyCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    stage?: true
    _all?: true
  }

  export type CustomerCompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustomerCompany to aggregate.
     */
    where?: CustomerCompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerCompanies to fetch.
     */
    orderBy?: CustomerCompanyOrderByWithRelationInput | CustomerCompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerCompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerCompanies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerCompanies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CustomerCompanies
    **/
    _count?: true | CustomerCompanyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerCompanyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerCompanyMaxAggregateInputType
  }

  export type GetCustomerCompanyAggregateType<T extends CustomerCompanyAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomerCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomerCompany[P]>
      : GetScalarType<T[P], AggregateCustomerCompany[P]>
  }




  export type CustomerCompanyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerCompanyWhereInput
    orderBy?: CustomerCompanyOrderByWithAggregationInput | CustomerCompanyOrderByWithAggregationInput[]
    by: CustomerCompanyScalarFieldEnum[] | CustomerCompanyScalarFieldEnum
    having?: CustomerCompanyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCompanyCountAggregateInputType | true
    _min?: CustomerCompanyMinAggregateInputType
    _max?: CustomerCompanyMaxAggregateInputType
  }

  export type CustomerCompanyGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    name: string
    stage: $Enums.ContentStage
    _count: CustomerCompanyCountAggregateOutputType | null
    _min: CustomerCompanyMinAggregateOutputType | null
    _max: CustomerCompanyMaxAggregateOutputType | null
  }

  type GetCustomerCompanyGroupByPayload<T extends CustomerCompanyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerCompanyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerCompanyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerCompanyGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerCompanyGroupByOutputType[P]>
        }
      >
    >


  export type CustomerCompanySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    stage?: boolean
  }, ExtArgs["result"]["customerCompany"]>

  export type CustomerCompanySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    stage?: boolean
  }, ExtArgs["result"]["customerCompany"]>

  export type CustomerCompanySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    stage?: boolean
  }, ExtArgs["result"]["customerCompany"]>

  export type CustomerCompanySelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    stage?: boolean
  }

  export type CustomerCompanyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "name" | "stage", ExtArgs["result"]["customerCompany"]>

  export type $CustomerCompanyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CustomerCompany"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      name: string
      stage: $Enums.ContentStage
    }, ExtArgs["result"]["customerCompany"]>
    composites: {}
  }

  type CustomerCompanyGetPayload<S extends boolean | null | undefined | CustomerCompanyDefaultArgs> = $Result.GetResult<Prisma.$CustomerCompanyPayload, S>

  type CustomerCompanyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomerCompanyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomerCompanyCountAggregateInputType | true
    }

  export interface CustomerCompanyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CustomerCompany'], meta: { name: 'CustomerCompany' } }
    /**
     * Find zero or one CustomerCompany that matches the filter.
     * @param {CustomerCompanyFindUniqueArgs} args - Arguments to find a CustomerCompany
     * @example
     * // Get one CustomerCompany
     * const customerCompany = await prisma.customerCompany.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerCompanyFindUniqueArgs>(args: SelectSubset<T, CustomerCompanyFindUniqueArgs<ExtArgs>>): Prisma__CustomerCompanyClient<$Result.GetResult<Prisma.$CustomerCompanyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CustomerCompany that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomerCompanyFindUniqueOrThrowArgs} args - Arguments to find a CustomerCompany
     * @example
     * // Get one CustomerCompany
     * const customerCompany = await prisma.customerCompany.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerCompanyFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerCompanyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerCompanyClient<$Result.GetResult<Prisma.$CustomerCompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CustomerCompany that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCompanyFindFirstArgs} args - Arguments to find a CustomerCompany
     * @example
     * // Get one CustomerCompany
     * const customerCompany = await prisma.customerCompany.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerCompanyFindFirstArgs>(args?: SelectSubset<T, CustomerCompanyFindFirstArgs<ExtArgs>>): Prisma__CustomerCompanyClient<$Result.GetResult<Prisma.$CustomerCompanyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CustomerCompany that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCompanyFindFirstOrThrowArgs} args - Arguments to find a CustomerCompany
     * @example
     * // Get one CustomerCompany
     * const customerCompany = await prisma.customerCompany.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerCompanyFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerCompanyFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerCompanyClient<$Result.GetResult<Prisma.$CustomerCompanyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CustomerCompanies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCompanyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CustomerCompanies
     * const customerCompanies = await prisma.customerCompany.findMany()
     * 
     * // Get first 10 CustomerCompanies
     * const customerCompanies = await prisma.customerCompany.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerCompanyWithIdOnly = await prisma.customerCompany.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomerCompanyFindManyArgs>(args?: SelectSubset<T, CustomerCompanyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerCompanyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CustomerCompany.
     * @param {CustomerCompanyCreateArgs} args - Arguments to create a CustomerCompany.
     * @example
     * // Create one CustomerCompany
     * const CustomerCompany = await prisma.customerCompany.create({
     *   data: {
     *     // ... data to create a CustomerCompany
     *   }
     * })
     * 
     */
    create<T extends CustomerCompanyCreateArgs>(args: SelectSubset<T, CustomerCompanyCreateArgs<ExtArgs>>): Prisma__CustomerCompanyClient<$Result.GetResult<Prisma.$CustomerCompanyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CustomerCompanies.
     * @param {CustomerCompanyCreateManyArgs} args - Arguments to create many CustomerCompanies.
     * @example
     * // Create many CustomerCompanies
     * const customerCompany = await prisma.customerCompany.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerCompanyCreateManyArgs>(args?: SelectSubset<T, CustomerCompanyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CustomerCompanies and returns the data saved in the database.
     * @param {CustomerCompanyCreateManyAndReturnArgs} args - Arguments to create many CustomerCompanies.
     * @example
     * // Create many CustomerCompanies
     * const customerCompany = await prisma.customerCompany.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CustomerCompanies and only return the `id`
     * const customerCompanyWithIdOnly = await prisma.customerCompany.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomerCompanyCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomerCompanyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerCompanyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CustomerCompany.
     * @param {CustomerCompanyDeleteArgs} args - Arguments to delete one CustomerCompany.
     * @example
     * // Delete one CustomerCompany
     * const CustomerCompany = await prisma.customerCompany.delete({
     *   where: {
     *     // ... filter to delete one CustomerCompany
     *   }
     * })
     * 
     */
    delete<T extends CustomerCompanyDeleteArgs>(args: SelectSubset<T, CustomerCompanyDeleteArgs<ExtArgs>>): Prisma__CustomerCompanyClient<$Result.GetResult<Prisma.$CustomerCompanyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CustomerCompany.
     * @param {CustomerCompanyUpdateArgs} args - Arguments to update one CustomerCompany.
     * @example
     * // Update one CustomerCompany
     * const customerCompany = await prisma.customerCompany.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerCompanyUpdateArgs>(args: SelectSubset<T, CustomerCompanyUpdateArgs<ExtArgs>>): Prisma__CustomerCompanyClient<$Result.GetResult<Prisma.$CustomerCompanyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CustomerCompanies.
     * @param {CustomerCompanyDeleteManyArgs} args - Arguments to filter CustomerCompanies to delete.
     * @example
     * // Delete a few CustomerCompanies
     * const { count } = await prisma.customerCompany.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerCompanyDeleteManyArgs>(args?: SelectSubset<T, CustomerCompanyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CustomerCompanies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCompanyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CustomerCompanies
     * const customerCompany = await prisma.customerCompany.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerCompanyUpdateManyArgs>(args: SelectSubset<T, CustomerCompanyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CustomerCompanies and returns the data updated in the database.
     * @param {CustomerCompanyUpdateManyAndReturnArgs} args - Arguments to update many CustomerCompanies.
     * @example
     * // Update many CustomerCompanies
     * const customerCompany = await prisma.customerCompany.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CustomerCompanies and only return the `id`
     * const customerCompanyWithIdOnly = await prisma.customerCompany.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CustomerCompanyUpdateManyAndReturnArgs>(args: SelectSubset<T, CustomerCompanyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerCompanyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CustomerCompany.
     * @param {CustomerCompanyUpsertArgs} args - Arguments to update or create a CustomerCompany.
     * @example
     * // Update or create a CustomerCompany
     * const customerCompany = await prisma.customerCompany.upsert({
     *   create: {
     *     // ... data to create a CustomerCompany
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CustomerCompany we want to update
     *   }
     * })
     */
    upsert<T extends CustomerCompanyUpsertArgs>(args: SelectSubset<T, CustomerCompanyUpsertArgs<ExtArgs>>): Prisma__CustomerCompanyClient<$Result.GetResult<Prisma.$CustomerCompanyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CustomerCompanies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCompanyCountArgs} args - Arguments to filter CustomerCompanies to count.
     * @example
     * // Count the number of CustomerCompanies
     * const count = await prisma.customerCompany.count({
     *   where: {
     *     // ... the filter for the CustomerCompanies we want to count
     *   }
     * })
    **/
    count<T extends CustomerCompanyCountArgs>(
      args?: Subset<T, CustomerCompanyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCompanyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CustomerCompany.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CustomerCompanyAggregateArgs>(args: Subset<T, CustomerCompanyAggregateArgs>): Prisma.PrismaPromise<GetCustomerCompanyAggregateType<T>>

    /**
     * Group by CustomerCompany.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCompanyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CustomerCompanyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerCompanyGroupByArgs['orderBy'] }
        : { orderBy?: CustomerCompanyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CustomerCompanyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CustomerCompany model
   */
  readonly fields: CustomerCompanyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CustomerCompany.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerCompanyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CustomerCompany model
   */
  interface CustomerCompanyFieldRefs {
    readonly id: FieldRef<"CustomerCompany", 'String'>
    readonly createdAt: FieldRef<"CustomerCompany", 'DateTime'>
    readonly updatedAt: FieldRef<"CustomerCompany", 'DateTime'>
    readonly name: FieldRef<"CustomerCompany", 'String'>
    readonly stage: FieldRef<"CustomerCompany", 'ContentStage'>
  }
    

  // Custom InputTypes
  /**
   * CustomerCompany findUnique
   */
  export type CustomerCompanyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCompany
     */
    select?: CustomerCompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerCompany
     */
    omit?: CustomerCompanyOmit<ExtArgs> | null
    /**
     * Filter, which CustomerCompany to fetch.
     */
    where: CustomerCompanyWhereUniqueInput
  }

  /**
   * CustomerCompany findUniqueOrThrow
   */
  export type CustomerCompanyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCompany
     */
    select?: CustomerCompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerCompany
     */
    omit?: CustomerCompanyOmit<ExtArgs> | null
    /**
     * Filter, which CustomerCompany to fetch.
     */
    where: CustomerCompanyWhereUniqueInput
  }

  /**
   * CustomerCompany findFirst
   */
  export type CustomerCompanyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCompany
     */
    select?: CustomerCompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerCompany
     */
    omit?: CustomerCompanyOmit<ExtArgs> | null
    /**
     * Filter, which CustomerCompany to fetch.
     */
    where?: CustomerCompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerCompanies to fetch.
     */
    orderBy?: CustomerCompanyOrderByWithRelationInput | CustomerCompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustomerCompanies.
     */
    cursor?: CustomerCompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerCompanies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerCompanies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomerCompanies.
     */
    distinct?: CustomerCompanyScalarFieldEnum | CustomerCompanyScalarFieldEnum[]
  }

  /**
   * CustomerCompany findFirstOrThrow
   */
  export type CustomerCompanyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCompany
     */
    select?: CustomerCompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerCompany
     */
    omit?: CustomerCompanyOmit<ExtArgs> | null
    /**
     * Filter, which CustomerCompany to fetch.
     */
    where?: CustomerCompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerCompanies to fetch.
     */
    orderBy?: CustomerCompanyOrderByWithRelationInput | CustomerCompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustomerCompanies.
     */
    cursor?: CustomerCompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerCompanies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerCompanies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomerCompanies.
     */
    distinct?: CustomerCompanyScalarFieldEnum | CustomerCompanyScalarFieldEnum[]
  }

  /**
   * CustomerCompany findMany
   */
  export type CustomerCompanyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCompany
     */
    select?: CustomerCompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerCompany
     */
    omit?: CustomerCompanyOmit<ExtArgs> | null
    /**
     * Filter, which CustomerCompanies to fetch.
     */
    where?: CustomerCompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerCompanies to fetch.
     */
    orderBy?: CustomerCompanyOrderByWithRelationInput | CustomerCompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CustomerCompanies.
     */
    cursor?: CustomerCompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerCompanies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerCompanies.
     */
    skip?: number
    distinct?: CustomerCompanyScalarFieldEnum | CustomerCompanyScalarFieldEnum[]
  }

  /**
   * CustomerCompany create
   */
  export type CustomerCompanyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCompany
     */
    select?: CustomerCompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerCompany
     */
    omit?: CustomerCompanyOmit<ExtArgs> | null
    /**
     * The data needed to create a CustomerCompany.
     */
    data: XOR<CustomerCompanyCreateInput, CustomerCompanyUncheckedCreateInput>
  }

  /**
   * CustomerCompany createMany
   */
  export type CustomerCompanyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CustomerCompanies.
     */
    data: CustomerCompanyCreateManyInput | CustomerCompanyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CustomerCompany createManyAndReturn
   */
  export type CustomerCompanyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCompany
     */
    select?: CustomerCompanySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerCompany
     */
    omit?: CustomerCompanyOmit<ExtArgs> | null
    /**
     * The data used to create many CustomerCompanies.
     */
    data: CustomerCompanyCreateManyInput | CustomerCompanyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CustomerCompany update
   */
  export type CustomerCompanyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCompany
     */
    select?: CustomerCompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerCompany
     */
    omit?: CustomerCompanyOmit<ExtArgs> | null
    /**
     * The data needed to update a CustomerCompany.
     */
    data: XOR<CustomerCompanyUpdateInput, CustomerCompanyUncheckedUpdateInput>
    /**
     * Choose, which CustomerCompany to update.
     */
    where: CustomerCompanyWhereUniqueInput
  }

  /**
   * CustomerCompany updateMany
   */
  export type CustomerCompanyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CustomerCompanies.
     */
    data: XOR<CustomerCompanyUpdateManyMutationInput, CustomerCompanyUncheckedUpdateManyInput>
    /**
     * Filter which CustomerCompanies to update
     */
    where?: CustomerCompanyWhereInput
    /**
     * Limit how many CustomerCompanies to update.
     */
    limit?: number
  }

  /**
   * CustomerCompany updateManyAndReturn
   */
  export type CustomerCompanyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCompany
     */
    select?: CustomerCompanySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerCompany
     */
    omit?: CustomerCompanyOmit<ExtArgs> | null
    /**
     * The data used to update CustomerCompanies.
     */
    data: XOR<CustomerCompanyUpdateManyMutationInput, CustomerCompanyUncheckedUpdateManyInput>
    /**
     * Filter which CustomerCompanies to update
     */
    where?: CustomerCompanyWhereInput
    /**
     * Limit how many CustomerCompanies to update.
     */
    limit?: number
  }

  /**
   * CustomerCompany upsert
   */
  export type CustomerCompanyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCompany
     */
    select?: CustomerCompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerCompany
     */
    omit?: CustomerCompanyOmit<ExtArgs> | null
    /**
     * The filter to search for the CustomerCompany to update in case it exists.
     */
    where: CustomerCompanyWhereUniqueInput
    /**
     * In case the CustomerCompany found by the `where` argument doesn't exist, create a new CustomerCompany with this data.
     */
    create: XOR<CustomerCompanyCreateInput, CustomerCompanyUncheckedCreateInput>
    /**
     * In case the CustomerCompany was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerCompanyUpdateInput, CustomerCompanyUncheckedUpdateInput>
  }

  /**
   * CustomerCompany delete
   */
  export type CustomerCompanyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCompany
     */
    select?: CustomerCompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerCompany
     */
    omit?: CustomerCompanyOmit<ExtArgs> | null
    /**
     * Filter which CustomerCompany to delete.
     */
    where: CustomerCompanyWhereUniqueInput
  }

  /**
   * CustomerCompany deleteMany
   */
  export type CustomerCompanyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustomerCompanies to delete
     */
    where?: CustomerCompanyWhereInput
    /**
     * Limit how many CustomerCompanies to delete.
     */
    limit?: number
  }

  /**
   * CustomerCompany without action
   */
  export type CustomerCompanyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCompany
     */
    select?: CustomerCompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerCompany
     */
    omit?: CustomerCompanyOmit<ExtArgs> | null
  }


  /**
   * Model CustomerReview
   */

  export type AggregateCustomerReview = {
    _count: CustomerReviewCountAggregateOutputType | null
    _min: CustomerReviewMinAggregateOutputType | null
    _max: CustomerReviewMaxAggregateOutputType | null
  }

  export type CustomerReviewMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    authorName: string | null
    authorPosition: string | null
    authorCompany: string | null
    content: string | null
    stage: $Enums.ContentStage | null
  }

  export type CustomerReviewMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    authorName: string | null
    authorPosition: string | null
    authorCompany: string | null
    content: string | null
    stage: $Enums.ContentStage | null
  }

  export type CustomerReviewCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    authorName: number
    authorPosition: number
    authorCompany: number
    content: number
    stage: number
    _all: number
  }


  export type CustomerReviewMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    authorName?: true
    authorPosition?: true
    authorCompany?: true
    content?: true
    stage?: true
  }

  export type CustomerReviewMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    authorName?: true
    authorPosition?: true
    authorCompany?: true
    content?: true
    stage?: true
  }

  export type CustomerReviewCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    authorName?: true
    authorPosition?: true
    authorCompany?: true
    content?: true
    stage?: true
    _all?: true
  }

  export type CustomerReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustomerReview to aggregate.
     */
    where?: CustomerReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerReviews to fetch.
     */
    orderBy?: CustomerReviewOrderByWithRelationInput | CustomerReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CustomerReviews
    **/
    _count?: true | CustomerReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerReviewMaxAggregateInputType
  }

  export type GetCustomerReviewAggregateType<T extends CustomerReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomerReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomerReview[P]>
      : GetScalarType<T[P], AggregateCustomerReview[P]>
  }




  export type CustomerReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerReviewWhereInput
    orderBy?: CustomerReviewOrderByWithAggregationInput | CustomerReviewOrderByWithAggregationInput[]
    by: CustomerReviewScalarFieldEnum[] | CustomerReviewScalarFieldEnum
    having?: CustomerReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerReviewCountAggregateInputType | true
    _min?: CustomerReviewMinAggregateInputType
    _max?: CustomerReviewMaxAggregateInputType
  }

  export type CustomerReviewGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    authorName: string
    authorPosition: string
    authorCompany: string
    content: string
    stage: $Enums.ContentStage
    _count: CustomerReviewCountAggregateOutputType | null
    _min: CustomerReviewMinAggregateOutputType | null
    _max: CustomerReviewMaxAggregateOutputType | null
  }

  type GetCustomerReviewGroupByPayload<T extends CustomerReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerReviewGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerReviewGroupByOutputType[P]>
        }
      >
    >


  export type CustomerReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    authorName?: boolean
    authorPosition?: boolean
    authorCompany?: boolean
    content?: boolean
    stage?: boolean
  }, ExtArgs["result"]["customerReview"]>

  export type CustomerReviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    authorName?: boolean
    authorPosition?: boolean
    authorCompany?: boolean
    content?: boolean
    stage?: boolean
  }, ExtArgs["result"]["customerReview"]>

  export type CustomerReviewSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    authorName?: boolean
    authorPosition?: boolean
    authorCompany?: boolean
    content?: boolean
    stage?: boolean
  }, ExtArgs["result"]["customerReview"]>

  export type CustomerReviewSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    authorName?: boolean
    authorPosition?: boolean
    authorCompany?: boolean
    content?: boolean
    stage?: boolean
  }

  export type CustomerReviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "authorName" | "authorPosition" | "authorCompany" | "content" | "stage", ExtArgs["result"]["customerReview"]>

  export type $CustomerReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CustomerReview"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      authorName: string
      authorPosition: string
      authorCompany: string
      content: string
      stage: $Enums.ContentStage
    }, ExtArgs["result"]["customerReview"]>
    composites: {}
  }

  type CustomerReviewGetPayload<S extends boolean | null | undefined | CustomerReviewDefaultArgs> = $Result.GetResult<Prisma.$CustomerReviewPayload, S>

  type CustomerReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomerReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomerReviewCountAggregateInputType | true
    }

  export interface CustomerReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CustomerReview'], meta: { name: 'CustomerReview' } }
    /**
     * Find zero or one CustomerReview that matches the filter.
     * @param {CustomerReviewFindUniqueArgs} args - Arguments to find a CustomerReview
     * @example
     * // Get one CustomerReview
     * const customerReview = await prisma.customerReview.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerReviewFindUniqueArgs>(args: SelectSubset<T, CustomerReviewFindUniqueArgs<ExtArgs>>): Prisma__CustomerReviewClient<$Result.GetResult<Prisma.$CustomerReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CustomerReview that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomerReviewFindUniqueOrThrowArgs} args - Arguments to find a CustomerReview
     * @example
     * // Get one CustomerReview
     * const customerReview = await prisma.customerReview.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerReviewClient<$Result.GetResult<Prisma.$CustomerReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CustomerReview that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerReviewFindFirstArgs} args - Arguments to find a CustomerReview
     * @example
     * // Get one CustomerReview
     * const customerReview = await prisma.customerReview.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerReviewFindFirstArgs>(args?: SelectSubset<T, CustomerReviewFindFirstArgs<ExtArgs>>): Prisma__CustomerReviewClient<$Result.GetResult<Prisma.$CustomerReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CustomerReview that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerReviewFindFirstOrThrowArgs} args - Arguments to find a CustomerReview
     * @example
     * // Get one CustomerReview
     * const customerReview = await prisma.customerReview.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerReviewClient<$Result.GetResult<Prisma.$CustomerReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CustomerReviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CustomerReviews
     * const customerReviews = await prisma.customerReview.findMany()
     * 
     * // Get first 10 CustomerReviews
     * const customerReviews = await prisma.customerReview.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerReviewWithIdOnly = await prisma.customerReview.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomerReviewFindManyArgs>(args?: SelectSubset<T, CustomerReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CustomerReview.
     * @param {CustomerReviewCreateArgs} args - Arguments to create a CustomerReview.
     * @example
     * // Create one CustomerReview
     * const CustomerReview = await prisma.customerReview.create({
     *   data: {
     *     // ... data to create a CustomerReview
     *   }
     * })
     * 
     */
    create<T extends CustomerReviewCreateArgs>(args: SelectSubset<T, CustomerReviewCreateArgs<ExtArgs>>): Prisma__CustomerReviewClient<$Result.GetResult<Prisma.$CustomerReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CustomerReviews.
     * @param {CustomerReviewCreateManyArgs} args - Arguments to create many CustomerReviews.
     * @example
     * // Create many CustomerReviews
     * const customerReview = await prisma.customerReview.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerReviewCreateManyArgs>(args?: SelectSubset<T, CustomerReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CustomerReviews and returns the data saved in the database.
     * @param {CustomerReviewCreateManyAndReturnArgs} args - Arguments to create many CustomerReviews.
     * @example
     * // Create many CustomerReviews
     * const customerReview = await prisma.customerReview.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CustomerReviews and only return the `id`
     * const customerReviewWithIdOnly = await prisma.customerReview.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomerReviewCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomerReviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerReviewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CustomerReview.
     * @param {CustomerReviewDeleteArgs} args - Arguments to delete one CustomerReview.
     * @example
     * // Delete one CustomerReview
     * const CustomerReview = await prisma.customerReview.delete({
     *   where: {
     *     // ... filter to delete one CustomerReview
     *   }
     * })
     * 
     */
    delete<T extends CustomerReviewDeleteArgs>(args: SelectSubset<T, CustomerReviewDeleteArgs<ExtArgs>>): Prisma__CustomerReviewClient<$Result.GetResult<Prisma.$CustomerReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CustomerReview.
     * @param {CustomerReviewUpdateArgs} args - Arguments to update one CustomerReview.
     * @example
     * // Update one CustomerReview
     * const customerReview = await prisma.customerReview.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerReviewUpdateArgs>(args: SelectSubset<T, CustomerReviewUpdateArgs<ExtArgs>>): Prisma__CustomerReviewClient<$Result.GetResult<Prisma.$CustomerReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CustomerReviews.
     * @param {CustomerReviewDeleteManyArgs} args - Arguments to filter CustomerReviews to delete.
     * @example
     * // Delete a few CustomerReviews
     * const { count } = await prisma.customerReview.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerReviewDeleteManyArgs>(args?: SelectSubset<T, CustomerReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CustomerReviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CustomerReviews
     * const customerReview = await prisma.customerReview.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerReviewUpdateManyArgs>(args: SelectSubset<T, CustomerReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CustomerReviews and returns the data updated in the database.
     * @param {CustomerReviewUpdateManyAndReturnArgs} args - Arguments to update many CustomerReviews.
     * @example
     * // Update many CustomerReviews
     * const customerReview = await prisma.customerReview.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CustomerReviews and only return the `id`
     * const customerReviewWithIdOnly = await prisma.customerReview.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CustomerReviewUpdateManyAndReturnArgs>(args: SelectSubset<T, CustomerReviewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerReviewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CustomerReview.
     * @param {CustomerReviewUpsertArgs} args - Arguments to update or create a CustomerReview.
     * @example
     * // Update or create a CustomerReview
     * const customerReview = await prisma.customerReview.upsert({
     *   create: {
     *     // ... data to create a CustomerReview
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CustomerReview we want to update
     *   }
     * })
     */
    upsert<T extends CustomerReviewUpsertArgs>(args: SelectSubset<T, CustomerReviewUpsertArgs<ExtArgs>>): Prisma__CustomerReviewClient<$Result.GetResult<Prisma.$CustomerReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CustomerReviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerReviewCountArgs} args - Arguments to filter CustomerReviews to count.
     * @example
     * // Count the number of CustomerReviews
     * const count = await prisma.customerReview.count({
     *   where: {
     *     // ... the filter for the CustomerReviews we want to count
     *   }
     * })
    **/
    count<T extends CustomerReviewCountArgs>(
      args?: Subset<T, CustomerReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CustomerReview.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CustomerReviewAggregateArgs>(args: Subset<T, CustomerReviewAggregateArgs>): Prisma.PrismaPromise<GetCustomerReviewAggregateType<T>>

    /**
     * Group by CustomerReview.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerReviewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CustomerReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerReviewGroupByArgs['orderBy'] }
        : { orderBy?: CustomerReviewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CustomerReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CustomerReview model
   */
  readonly fields: CustomerReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CustomerReview.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CustomerReview model
   */
  interface CustomerReviewFieldRefs {
    readonly id: FieldRef<"CustomerReview", 'String'>
    readonly createdAt: FieldRef<"CustomerReview", 'DateTime'>
    readonly updatedAt: FieldRef<"CustomerReview", 'DateTime'>
    readonly authorName: FieldRef<"CustomerReview", 'String'>
    readonly authorPosition: FieldRef<"CustomerReview", 'String'>
    readonly authorCompany: FieldRef<"CustomerReview", 'String'>
    readonly content: FieldRef<"CustomerReview", 'String'>
    readonly stage: FieldRef<"CustomerReview", 'ContentStage'>
  }
    

  // Custom InputTypes
  /**
   * CustomerReview findUnique
   */
  export type CustomerReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerReview
     */
    select?: CustomerReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerReview
     */
    omit?: CustomerReviewOmit<ExtArgs> | null
    /**
     * Filter, which CustomerReview to fetch.
     */
    where: CustomerReviewWhereUniqueInput
  }

  /**
   * CustomerReview findUniqueOrThrow
   */
  export type CustomerReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerReview
     */
    select?: CustomerReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerReview
     */
    omit?: CustomerReviewOmit<ExtArgs> | null
    /**
     * Filter, which CustomerReview to fetch.
     */
    where: CustomerReviewWhereUniqueInput
  }

  /**
   * CustomerReview findFirst
   */
  export type CustomerReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerReview
     */
    select?: CustomerReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerReview
     */
    omit?: CustomerReviewOmit<ExtArgs> | null
    /**
     * Filter, which CustomerReview to fetch.
     */
    where?: CustomerReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerReviews to fetch.
     */
    orderBy?: CustomerReviewOrderByWithRelationInput | CustomerReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustomerReviews.
     */
    cursor?: CustomerReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomerReviews.
     */
    distinct?: CustomerReviewScalarFieldEnum | CustomerReviewScalarFieldEnum[]
  }

  /**
   * CustomerReview findFirstOrThrow
   */
  export type CustomerReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerReview
     */
    select?: CustomerReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerReview
     */
    omit?: CustomerReviewOmit<ExtArgs> | null
    /**
     * Filter, which CustomerReview to fetch.
     */
    where?: CustomerReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerReviews to fetch.
     */
    orderBy?: CustomerReviewOrderByWithRelationInput | CustomerReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustomerReviews.
     */
    cursor?: CustomerReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomerReviews.
     */
    distinct?: CustomerReviewScalarFieldEnum | CustomerReviewScalarFieldEnum[]
  }

  /**
   * CustomerReview findMany
   */
  export type CustomerReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerReview
     */
    select?: CustomerReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerReview
     */
    omit?: CustomerReviewOmit<ExtArgs> | null
    /**
     * Filter, which CustomerReviews to fetch.
     */
    where?: CustomerReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerReviews to fetch.
     */
    orderBy?: CustomerReviewOrderByWithRelationInput | CustomerReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CustomerReviews.
     */
    cursor?: CustomerReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerReviews.
     */
    skip?: number
    distinct?: CustomerReviewScalarFieldEnum | CustomerReviewScalarFieldEnum[]
  }

  /**
   * CustomerReview create
   */
  export type CustomerReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerReview
     */
    select?: CustomerReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerReview
     */
    omit?: CustomerReviewOmit<ExtArgs> | null
    /**
     * The data needed to create a CustomerReview.
     */
    data: XOR<CustomerReviewCreateInput, CustomerReviewUncheckedCreateInput>
  }

  /**
   * CustomerReview createMany
   */
  export type CustomerReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CustomerReviews.
     */
    data: CustomerReviewCreateManyInput | CustomerReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CustomerReview createManyAndReturn
   */
  export type CustomerReviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerReview
     */
    select?: CustomerReviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerReview
     */
    omit?: CustomerReviewOmit<ExtArgs> | null
    /**
     * The data used to create many CustomerReviews.
     */
    data: CustomerReviewCreateManyInput | CustomerReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CustomerReview update
   */
  export type CustomerReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerReview
     */
    select?: CustomerReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerReview
     */
    omit?: CustomerReviewOmit<ExtArgs> | null
    /**
     * The data needed to update a CustomerReview.
     */
    data: XOR<CustomerReviewUpdateInput, CustomerReviewUncheckedUpdateInput>
    /**
     * Choose, which CustomerReview to update.
     */
    where: CustomerReviewWhereUniqueInput
  }

  /**
   * CustomerReview updateMany
   */
  export type CustomerReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CustomerReviews.
     */
    data: XOR<CustomerReviewUpdateManyMutationInput, CustomerReviewUncheckedUpdateManyInput>
    /**
     * Filter which CustomerReviews to update
     */
    where?: CustomerReviewWhereInput
    /**
     * Limit how many CustomerReviews to update.
     */
    limit?: number
  }

  /**
   * CustomerReview updateManyAndReturn
   */
  export type CustomerReviewUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerReview
     */
    select?: CustomerReviewSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerReview
     */
    omit?: CustomerReviewOmit<ExtArgs> | null
    /**
     * The data used to update CustomerReviews.
     */
    data: XOR<CustomerReviewUpdateManyMutationInput, CustomerReviewUncheckedUpdateManyInput>
    /**
     * Filter which CustomerReviews to update
     */
    where?: CustomerReviewWhereInput
    /**
     * Limit how many CustomerReviews to update.
     */
    limit?: number
  }

  /**
   * CustomerReview upsert
   */
  export type CustomerReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerReview
     */
    select?: CustomerReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerReview
     */
    omit?: CustomerReviewOmit<ExtArgs> | null
    /**
     * The filter to search for the CustomerReview to update in case it exists.
     */
    where: CustomerReviewWhereUniqueInput
    /**
     * In case the CustomerReview found by the `where` argument doesn't exist, create a new CustomerReview with this data.
     */
    create: XOR<CustomerReviewCreateInput, CustomerReviewUncheckedCreateInput>
    /**
     * In case the CustomerReview was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerReviewUpdateInput, CustomerReviewUncheckedUpdateInput>
  }

  /**
   * CustomerReview delete
   */
  export type CustomerReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerReview
     */
    select?: CustomerReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerReview
     */
    omit?: CustomerReviewOmit<ExtArgs> | null
    /**
     * Filter which CustomerReview to delete.
     */
    where: CustomerReviewWhereUniqueInput
  }

  /**
   * CustomerReview deleteMany
   */
  export type CustomerReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustomerReviews to delete
     */
    where?: CustomerReviewWhereInput
    /**
     * Limit how many CustomerReviews to delete.
     */
    limit?: number
  }

  /**
   * CustomerReview without action
   */
  export type CustomerReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerReview
     */
    select?: CustomerReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerReview
     */
    omit?: CustomerReviewOmit<ExtArgs> | null
  }


  /**
   * Model Employee
   */

  export type AggregateEmployee = {
    _count: EmployeeCountAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  export type EmployeeMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    firstName: string | null
    lastName: string | null
    position: string | null
    slug: string | null
    dob: Date | null
    userId: string | null
    stage: $Enums.ContentStage | null
    joinedAt: Date | null
  }

  export type EmployeeMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    firstName: string | null
    lastName: string | null
    position: string | null
    slug: string | null
    dob: Date | null
    userId: string | null
    stage: $Enums.ContentStage | null
    joinedAt: Date | null
  }

  export type EmployeeCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    firstName: number
    lastName: number
    position: number
    slug: number
    dob: number
    userId: number
    stage: number
    joinedAt: number
    _all: number
  }


  export type EmployeeMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    firstName?: true
    lastName?: true
    position?: true
    slug?: true
    dob?: true
    userId?: true
    stage?: true
    joinedAt?: true
  }

  export type EmployeeMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    firstName?: true
    lastName?: true
    position?: true
    slug?: true
    dob?: true
    userId?: true
    stage?: true
    joinedAt?: true
  }

  export type EmployeeCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    firstName?: true
    lastName?: true
    position?: true
    slug?: true
    dob?: true
    userId?: true
    stage?: true
    joinedAt?: true
    _all?: true
  }

  export type EmployeeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employee to aggregate.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Employees
    **/
    _count?: true | EmployeeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmployeeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmployeeMaxAggregateInputType
  }

  export type GetEmployeeAggregateType<T extends EmployeeAggregateArgs> = {
        [P in keyof T & keyof AggregateEmployee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployee[P]>
      : GetScalarType<T[P], AggregateEmployee[P]>
  }




  export type EmployeeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeWhereInput
    orderBy?: EmployeeOrderByWithAggregationInput | EmployeeOrderByWithAggregationInput[]
    by: EmployeeScalarFieldEnum[] | EmployeeScalarFieldEnum
    having?: EmployeeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmployeeCountAggregateInputType | true
    _min?: EmployeeMinAggregateInputType
    _max?: EmployeeMaxAggregateInputType
  }

  export type EmployeeGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    firstName: string
    lastName: string
    position: string
    slug: string
    dob: Date
    userId: string | null
    stage: $Enums.ContentStage
    joinedAt: Date
    _count: EmployeeCountAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  type GetEmployeeGroupByPayload<T extends EmployeeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmployeeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmployeeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
            : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
        }
      >
    >


  export type EmployeeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    firstName?: boolean
    lastName?: boolean
    position?: boolean
    slug?: boolean
    dob?: boolean
    userId?: boolean
    stage?: boolean
    joinedAt?: boolean
    user?: boolean | Employee$userArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    firstName?: boolean
    lastName?: boolean
    position?: boolean
    slug?: boolean
    dob?: boolean
    userId?: boolean
    stage?: boolean
    joinedAt?: boolean
    user?: boolean | Employee$userArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    firstName?: boolean
    lastName?: boolean
    position?: boolean
    slug?: boolean
    dob?: boolean
    userId?: boolean
    stage?: boolean
    joinedAt?: boolean
    user?: boolean | Employee$userArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    firstName?: boolean
    lastName?: boolean
    position?: boolean
    slug?: boolean
    dob?: boolean
    userId?: boolean
    stage?: boolean
    joinedAt?: boolean
  }

  export type EmployeeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "firstName" | "lastName" | "position" | "slug" | "dob" | "userId" | "stage" | "joinedAt", ExtArgs["result"]["employee"]>
  export type EmployeeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Employee$userArgs<ExtArgs>
  }
  export type EmployeeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Employee$userArgs<ExtArgs>
  }
  export type EmployeeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Employee$userArgs<ExtArgs>
  }

  export type $EmployeePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Employee"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      firstName: string
      lastName: string
      position: string
      slug: string
      dob: Date
      userId: string | null
      stage: $Enums.ContentStage
      joinedAt: Date
    }, ExtArgs["result"]["employee"]>
    composites: {}
  }

  type EmployeeGetPayload<S extends boolean | null | undefined | EmployeeDefaultArgs> = $Result.GetResult<Prisma.$EmployeePayload, S>

  type EmployeeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmployeeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmployeeCountAggregateInputType | true
    }

  export interface EmployeeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Employee'], meta: { name: 'Employee' } }
    /**
     * Find zero or one Employee that matches the filter.
     * @param {EmployeeFindUniqueArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmployeeFindUniqueArgs>(args: SelectSubset<T, EmployeeFindUniqueArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Employee that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmployeeFindUniqueOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmployeeFindUniqueOrThrowArgs>(args: SelectSubset<T, EmployeeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindFirstArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmployeeFindFirstArgs>(args?: SelectSubset<T, EmployeeFindFirstArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employee that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindFirstOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmployeeFindFirstOrThrowArgs>(args?: SelectSubset<T, EmployeeFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Employees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Employees
     * const employees = await prisma.employee.findMany()
     * 
     * // Get first 10 Employees
     * const employees = await prisma.employee.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const employeeWithIdOnly = await prisma.employee.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmployeeFindManyArgs>(args?: SelectSubset<T, EmployeeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Employee.
     * @param {EmployeeCreateArgs} args - Arguments to create a Employee.
     * @example
     * // Create one Employee
     * const Employee = await prisma.employee.create({
     *   data: {
     *     // ... data to create a Employee
     *   }
     * })
     * 
     */
    create<T extends EmployeeCreateArgs>(args: SelectSubset<T, EmployeeCreateArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Employees.
     * @param {EmployeeCreateManyArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employee = await prisma.employee.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmployeeCreateManyArgs>(args?: SelectSubset<T, EmployeeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Employees and returns the data saved in the database.
     * @param {EmployeeCreateManyAndReturnArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employee = await prisma.employee.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Employees and only return the `id`
     * const employeeWithIdOnly = await prisma.employee.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmployeeCreateManyAndReturnArgs>(args?: SelectSubset<T, EmployeeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Employee.
     * @param {EmployeeDeleteArgs} args - Arguments to delete one Employee.
     * @example
     * // Delete one Employee
     * const Employee = await prisma.employee.delete({
     *   where: {
     *     // ... filter to delete one Employee
     *   }
     * })
     * 
     */
    delete<T extends EmployeeDeleteArgs>(args: SelectSubset<T, EmployeeDeleteArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Employee.
     * @param {EmployeeUpdateArgs} args - Arguments to update one Employee.
     * @example
     * // Update one Employee
     * const employee = await prisma.employee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmployeeUpdateArgs>(args: SelectSubset<T, EmployeeUpdateArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Employees.
     * @param {EmployeeDeleteManyArgs} args - Arguments to filter Employees to delete.
     * @example
     * // Delete a few Employees
     * const { count } = await prisma.employee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmployeeDeleteManyArgs>(args?: SelectSubset<T, EmployeeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Employees
     * const employee = await prisma.employee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmployeeUpdateManyArgs>(args: SelectSubset<T, EmployeeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees and returns the data updated in the database.
     * @param {EmployeeUpdateManyAndReturnArgs} args - Arguments to update many Employees.
     * @example
     * // Update many Employees
     * const employee = await prisma.employee.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Employees and only return the `id`
     * const employeeWithIdOnly = await prisma.employee.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EmployeeUpdateManyAndReturnArgs>(args: SelectSubset<T, EmployeeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Employee.
     * @param {EmployeeUpsertArgs} args - Arguments to update or create a Employee.
     * @example
     * // Update or create a Employee
     * const employee = await prisma.employee.upsert({
     *   create: {
     *     // ... data to create a Employee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Employee we want to update
     *   }
     * })
     */
    upsert<T extends EmployeeUpsertArgs>(args: SelectSubset<T, EmployeeUpsertArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeCountArgs} args - Arguments to filter Employees to count.
     * @example
     * // Count the number of Employees
     * const count = await prisma.employee.count({
     *   where: {
     *     // ... the filter for the Employees we want to count
     *   }
     * })
    **/
    count<T extends EmployeeCountArgs>(
      args?: Subset<T, EmployeeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployeeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EmployeeAggregateArgs>(args: Subset<T, EmployeeAggregateArgs>): Prisma.PrismaPromise<GetEmployeeAggregateType<T>>

    /**
     * Group by Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EmployeeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmployeeGroupByArgs['orderBy'] }
        : { orderBy?: EmployeeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EmployeeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployeeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Employee model
   */
  readonly fields: EmployeeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Employee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmployeeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Employee$userArgs<ExtArgs> = {}>(args?: Subset<T, Employee$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Employee model
   */
  interface EmployeeFieldRefs {
    readonly id: FieldRef<"Employee", 'String'>
    readonly createdAt: FieldRef<"Employee", 'DateTime'>
    readonly updatedAt: FieldRef<"Employee", 'DateTime'>
    readonly firstName: FieldRef<"Employee", 'String'>
    readonly lastName: FieldRef<"Employee", 'String'>
    readonly position: FieldRef<"Employee", 'String'>
    readonly slug: FieldRef<"Employee", 'String'>
    readonly dob: FieldRef<"Employee", 'DateTime'>
    readonly userId: FieldRef<"Employee", 'String'>
    readonly stage: FieldRef<"Employee", 'ContentStage'>
    readonly joinedAt: FieldRef<"Employee", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Employee findUnique
   */
  export type EmployeeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee findUniqueOrThrow
   */
  export type EmployeeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee findFirst
   */
  export type EmployeeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee findFirstOrThrow
   */
  export type EmployeeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee findMany
   */
  export type EmployeeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employees to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee create
   */
  export type EmployeeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The data needed to create a Employee.
     */
    data: XOR<EmployeeCreateInput, EmployeeUncheckedCreateInput>
  }

  /**
   * Employee createMany
   */
  export type EmployeeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Employees.
     */
    data: EmployeeCreateManyInput | EmployeeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Employee createManyAndReturn
   */
  export type EmployeeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * The data used to create many Employees.
     */
    data: EmployeeCreateManyInput | EmployeeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Employee update
   */
  export type EmployeeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The data needed to update a Employee.
     */
    data: XOR<EmployeeUpdateInput, EmployeeUncheckedUpdateInput>
    /**
     * Choose, which Employee to update.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee updateMany
   */
  export type EmployeeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Employees.
     */
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyInput>
    /**
     * Filter which Employees to update
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to update.
     */
    limit?: number
  }

  /**
   * Employee updateManyAndReturn
   */
  export type EmployeeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * The data used to update Employees.
     */
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyInput>
    /**
     * Filter which Employees to update
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Employee upsert
   */
  export type EmployeeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The filter to search for the Employee to update in case it exists.
     */
    where: EmployeeWhereUniqueInput
    /**
     * In case the Employee found by the `where` argument doesn't exist, create a new Employee with this data.
     */
    create: XOR<EmployeeCreateInput, EmployeeUncheckedCreateInput>
    /**
     * In case the Employee was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmployeeUpdateInput, EmployeeUncheckedUpdateInput>
  }

  /**
   * Employee delete
   */
  export type EmployeeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter which Employee to delete.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee deleteMany
   */
  export type EmployeeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employees to delete
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to delete.
     */
    limit?: number
  }

  /**
   * Employee.user
   */
  export type Employee$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Employee without action
   */
  export type EmployeeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
  }


  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    title: string | null
    description: string | null
    content: string | null
    stage: $Enums.ContentStage | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    title: string | null
    description: string | null
    content: string | null
    stage: $Enums.ContentStage | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    title: number
    description: number
    content: number
    stage: number
    _all: number
  }


  export type ProjectMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    description?: true
    content?: true
    stage?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    description?: true
    content?: true
    stage?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    description?: true
    content?: true
    stage?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    title: string
    description: string
    content: string
    stage: $Enums.ContentStage
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    description?: boolean
    content?: boolean
    stage?: boolean
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    description?: boolean
    content?: boolean
    stage?: boolean
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    description?: boolean
    content?: boolean
    stage?: boolean
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    description?: boolean
    content?: boolean
    stage?: boolean
  }

  export type ProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "title" | "description" | "content" | "stage", ExtArgs["result"]["project"]>

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      title: string
      description: string
      content: string
      stage: $Enums.ContentStage
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCreateManyArgs>(args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {ProjectCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDeleteManyArgs>(args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectUpdateManyArgs>(args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects and returns the data updated in the database.
     * @param {ProjectUpdateManyAndReturnArgs} args - Arguments to update many Projects.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProjectUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Project model
   */
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", 'String'>
    readonly createdAt: FieldRef<"Project", 'DateTime'>
    readonly updatedAt: FieldRef<"Project", 'DateTime'>
    readonly title: FieldRef<"Project", 'String'>
    readonly description: FieldRef<"Project", 'String'>
    readonly content: FieldRef<"Project", 'String'>
    readonly stage: FieldRef<"Project", 'ContentStage'>
  }
    

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project createManyAndReturn
   */
  export type ProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project updateManyAndReturn
   */
  export type ProjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to delete.
     */
    limit?: number
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
  }


  /**
   * Model Service
   */

  export type AggregateService = {
    _count: ServiceCountAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  export type ServiceMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    title: string | null
    description: string | null
    content: string | null
    stage: $Enums.ContentStage | null
  }

  export type ServiceMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    title: string | null
    description: string | null
    content: string | null
    stage: $Enums.ContentStage | null
  }

  export type ServiceCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    title: number
    description: number
    content: number
    stage: number
    _all: number
  }


  export type ServiceMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    description?: true
    content?: true
    stage?: true
  }

  export type ServiceMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    description?: true
    content?: true
    stage?: true
  }

  export type ServiceCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    description?: true
    content?: true
    stage?: true
    _all?: true
  }

  export type ServiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Service to aggregate.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Services
    **/
    _count?: true | ServiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceMaxAggregateInputType
  }

  export type GetServiceAggregateType<T extends ServiceAggregateArgs> = {
        [P in keyof T & keyof AggregateService]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateService[P]>
      : GetScalarType<T[P], AggregateService[P]>
  }




  export type ServiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceWhereInput
    orderBy?: ServiceOrderByWithAggregationInput | ServiceOrderByWithAggregationInput[]
    by: ServiceScalarFieldEnum[] | ServiceScalarFieldEnum
    having?: ServiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceCountAggregateInputType | true
    _min?: ServiceMinAggregateInputType
    _max?: ServiceMaxAggregateInputType
  }

  export type ServiceGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    title: string
    description: string
    content: string
    stage: $Enums.ContentStage
    _count: ServiceCountAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  type GetServiceGroupByPayload<T extends ServiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceGroupByOutputType[P]>
        }
      >
    >


  export type ServiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    description?: boolean
    content?: boolean
    stage?: boolean
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    description?: boolean
    content?: boolean
    stage?: boolean
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    description?: boolean
    content?: boolean
    stage?: boolean
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    description?: boolean
    content?: boolean
    stage?: boolean
  }

  export type ServiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "title" | "description" | "content" | "stage", ExtArgs["result"]["service"]>

  export type $ServicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Service"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      title: string
      description: string
      content: string
      stage: $Enums.ContentStage
    }, ExtArgs["result"]["service"]>
    composites: {}
  }

  type ServiceGetPayload<S extends boolean | null | undefined | ServiceDefaultArgs> = $Result.GetResult<Prisma.$ServicePayload, S>

  type ServiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServiceCountAggregateInputType | true
    }

  export interface ServiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Service'], meta: { name: 'Service' } }
    /**
     * Find zero or one Service that matches the filter.
     * @param {ServiceFindUniqueArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceFindUniqueArgs>(args: SelectSubset<T, ServiceFindUniqueArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Service that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServiceFindUniqueOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceFindUniqueOrThrowArgs>(args: SelectSubset<T, ServiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Service that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceFindFirstArgs>(args?: SelectSubset<T, ServiceFindFirstArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Service that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceFindFirstOrThrowArgs>(args?: SelectSubset<T, ServiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Services that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Services
     * const services = await prisma.service.findMany()
     * 
     * // Get first 10 Services
     * const services = await prisma.service.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serviceWithIdOnly = await prisma.service.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServiceFindManyArgs>(args?: SelectSubset<T, ServiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Service.
     * @param {ServiceCreateArgs} args - Arguments to create a Service.
     * @example
     * // Create one Service
     * const Service = await prisma.service.create({
     *   data: {
     *     // ... data to create a Service
     *   }
     * })
     * 
     */
    create<T extends ServiceCreateArgs>(args: SelectSubset<T, ServiceCreateArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Services.
     * @param {ServiceCreateManyArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const service = await prisma.service.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServiceCreateManyArgs>(args?: SelectSubset<T, ServiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Services and returns the data saved in the database.
     * @param {ServiceCreateManyAndReturnArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const service = await prisma.service.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Services and only return the `id`
     * const serviceWithIdOnly = await prisma.service.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServiceCreateManyAndReturnArgs>(args?: SelectSubset<T, ServiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Service.
     * @param {ServiceDeleteArgs} args - Arguments to delete one Service.
     * @example
     * // Delete one Service
     * const Service = await prisma.service.delete({
     *   where: {
     *     // ... filter to delete one Service
     *   }
     * })
     * 
     */
    delete<T extends ServiceDeleteArgs>(args: SelectSubset<T, ServiceDeleteArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Service.
     * @param {ServiceUpdateArgs} args - Arguments to update one Service.
     * @example
     * // Update one Service
     * const service = await prisma.service.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServiceUpdateArgs>(args: SelectSubset<T, ServiceUpdateArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Services.
     * @param {ServiceDeleteManyArgs} args - Arguments to filter Services to delete.
     * @example
     * // Delete a few Services
     * const { count } = await prisma.service.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServiceDeleteManyArgs>(args?: SelectSubset<T, ServiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Services
     * const service = await prisma.service.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServiceUpdateManyArgs>(args: SelectSubset<T, ServiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services and returns the data updated in the database.
     * @param {ServiceUpdateManyAndReturnArgs} args - Arguments to update many Services.
     * @example
     * // Update many Services
     * const service = await prisma.service.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Services and only return the `id`
     * const serviceWithIdOnly = await prisma.service.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ServiceUpdateManyAndReturnArgs>(args: SelectSubset<T, ServiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Service.
     * @param {ServiceUpsertArgs} args - Arguments to update or create a Service.
     * @example
     * // Update or create a Service
     * const service = await prisma.service.upsert({
     *   create: {
     *     // ... data to create a Service
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Service we want to update
     *   }
     * })
     */
    upsert<T extends ServiceUpsertArgs>(args: SelectSubset<T, ServiceUpsertArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCountArgs} args - Arguments to filter Services to count.
     * @example
     * // Count the number of Services
     * const count = await prisma.service.count({
     *   where: {
     *     // ... the filter for the Services we want to count
     *   }
     * })
    **/
    count<T extends ServiceCountArgs>(
      args?: Subset<T, ServiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ServiceAggregateArgs>(args: Subset<T, ServiceAggregateArgs>): Prisma.PrismaPromise<GetServiceAggregateType<T>>

    /**
     * Group by Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ServiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceGroupByArgs['orderBy'] }
        : { orderBy?: ServiceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ServiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Service model
   */
  readonly fields: ServiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Service.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Service model
   */
  interface ServiceFieldRefs {
    readonly id: FieldRef<"Service", 'String'>
    readonly createdAt: FieldRef<"Service", 'DateTime'>
    readonly updatedAt: FieldRef<"Service", 'DateTime'>
    readonly title: FieldRef<"Service", 'String'>
    readonly description: FieldRef<"Service", 'String'>
    readonly content: FieldRef<"Service", 'String'>
    readonly stage: FieldRef<"Service", 'ContentStage'>
  }
    

  // Custom InputTypes
  /**
   * Service findUnique
   */
  export type ServiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service findUniqueOrThrow
   */
  export type ServiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service findFirst
   */
  export type ServiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service findFirstOrThrow
   */
  export type ServiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service findMany
   */
  export type ServiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Filter, which Services to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service create
   */
  export type ServiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * The data needed to create a Service.
     */
    data: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>
  }

  /**
   * Service createMany
   */
  export type ServiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Services.
     */
    data: ServiceCreateManyInput | ServiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Service createManyAndReturn
   */
  export type ServiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * The data used to create many Services.
     */
    data: ServiceCreateManyInput | ServiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Service update
   */
  export type ServiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * The data needed to update a Service.
     */
    data: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>
    /**
     * Choose, which Service to update.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service updateMany
   */
  export type ServiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Services.
     */
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyInput>
    /**
     * Filter which Services to update
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to update.
     */
    limit?: number
  }

  /**
   * Service updateManyAndReturn
   */
  export type ServiceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * The data used to update Services.
     */
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyInput>
    /**
     * Filter which Services to update
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to update.
     */
    limit?: number
  }

  /**
   * Service upsert
   */
  export type ServiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * The filter to search for the Service to update in case it exists.
     */
    where: ServiceWhereUniqueInput
    /**
     * In case the Service found by the `where` argument doesn't exist, create a new Service with this data.
     */
    create: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>
    /**
     * In case the Service was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>
  }

  /**
   * Service delete
   */
  export type ServiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Filter which Service to delete.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service deleteMany
   */
  export type ServiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Services to delete
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to delete.
     */
    limit?: number
  }

  /**
   * Service without action
   */
  export type ServiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    accessType: $Enums.AccessType | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    accessType: $Enums.AccessType | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    accessType: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    accessType?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    accessType?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    accessType?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    name: string
    accessType: $Enums.AccessType
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    accessType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    roles?: boolean | User$rolesArgs<ExtArgs>
    employee?: boolean | User$employeeArgs<ExtArgs>
    comments?: boolean | User$commentsArgs<ExtArgs>
    reactions?: boolean | User$reactionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    accessType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    accessType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    accessType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "name" | "accessType" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roles?: boolean | User$rolesArgs<ExtArgs>
    employee?: boolean | User$employeeArgs<ExtArgs>
    comments?: boolean | User$commentsArgs<ExtArgs>
    reactions?: boolean | User$reactionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      roles: Prisma.$UserRolePayload<ExtArgs>[]
      employee: Prisma.$EmployeePayload<ExtArgs> | null
      comments: Prisma.$BlogCommentPayload<ExtArgs>[]
      reactions: Prisma.$BlogReactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      name: string
      accessType: $Enums.AccessType
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    roles<T extends User$rolesArgs<ExtArgs> = {}>(args?: Subset<T, User$rolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    employee<T extends User$employeeArgs<ExtArgs> = {}>(args?: Subset<T, User$employeeArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    comments<T extends User$commentsArgs<ExtArgs> = {}>(args?: Subset<T, User$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogCommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reactions<T extends User$reactionsArgs<ExtArgs> = {}>(args?: Subset<T, User$reactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogReactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly accessType: FieldRef<"User", 'AccessType'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.roles
   */
  export type User$rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    where?: UserRoleWhereInput
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    cursor?: UserRoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }

  /**
   * User.employee
   */
  export type User$employeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    where?: EmployeeWhereInput
  }

  /**
   * User.comments
   */
  export type User$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogComment
     */
    select?: BlogCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogComment
     */
    omit?: BlogCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogCommentInclude<ExtArgs> | null
    where?: BlogCommentWhereInput
    orderBy?: BlogCommentOrderByWithRelationInput | BlogCommentOrderByWithRelationInput[]
    cursor?: BlogCommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BlogCommentScalarFieldEnum | BlogCommentScalarFieldEnum[]
  }

  /**
   * User.reactions
   */
  export type User$reactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogReaction
     */
    select?: BlogReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogReaction
     */
    omit?: BlogReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogReactionInclude<ExtArgs> | null
    where?: BlogReactionWhereInput
    orderBy?: BlogReactionOrderByWithRelationInput | BlogReactionOrderByWithRelationInput[]
    cursor?: BlogReactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BlogReactionScalarFieldEnum | BlogReactionScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model UserRole
   */

  export type AggregateUserRole = {
    _count: UserRoleCountAggregateOutputType | null
    _min: UserRoleMinAggregateOutputType | null
    _max: UserRoleMaxAggregateOutputType | null
  }

  export type UserRoleMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserRoleMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserRoleCountAggregateOutputType = {
    id: number
    name: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserRoleMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserRoleMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserRoleCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserRoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserRole to aggregate.
     */
    where?: UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoles to fetch.
     */
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserRoles
    **/
    _count?: true | UserRoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserRoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserRoleMaxAggregateInputType
  }

  export type GetUserRoleAggregateType<T extends UserRoleAggregateArgs> = {
        [P in keyof T & keyof AggregateUserRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserRole[P]>
      : GetScalarType<T[P], AggregateUserRole[P]>
  }




  export type UserRoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserRoleWhereInput
    orderBy?: UserRoleOrderByWithAggregationInput | UserRoleOrderByWithAggregationInput[]
    by: UserRoleScalarFieldEnum[] | UserRoleScalarFieldEnum
    having?: UserRoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserRoleCountAggregateInputType | true
    _min?: UserRoleMinAggregateInputType
    _max?: UserRoleMaxAggregateInputType
  }

  export type UserRoleGroupByOutputType = {
    id: string
    name: string
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserRoleCountAggregateOutputType | null
    _min: UserRoleMinAggregateOutputType | null
    _max: UserRoleMaxAggregateOutputType | null
  }

  type GetUserRoleGroupByPayload<T extends UserRoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserRoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserRoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserRoleGroupByOutputType[P]>
            : GetScalarType<T[P], UserRoleGroupByOutputType[P]>
        }
      >
    >


  export type UserRoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    permissions?: boolean | UserRole$permissionsArgs<ExtArgs>
    users?: boolean | UserRole$usersArgs<ExtArgs>
    _count?: boolean | UserRoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userRole"]>

  export type UserRoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["userRole"]>

  export type UserRoleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["userRole"]>

  export type UserRoleSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserRoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["userRole"]>
  export type UserRoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    permissions?: boolean | UserRole$permissionsArgs<ExtArgs>
    users?: boolean | UserRole$usersArgs<ExtArgs>
    _count?: boolean | UserRoleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserRoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserRoleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserRolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserRole"
    objects: {
      permissions: Prisma.$UserRolePermissionPayload<ExtArgs>[]
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userRole"]>
    composites: {}
  }

  type UserRoleGetPayload<S extends boolean | null | undefined | UserRoleDefaultArgs> = $Result.GetResult<Prisma.$UserRolePayload, S>

  type UserRoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserRoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserRoleCountAggregateInputType | true
    }

  export interface UserRoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserRole'], meta: { name: 'UserRole' } }
    /**
     * Find zero or one UserRole that matches the filter.
     * @param {UserRoleFindUniqueArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserRoleFindUniqueArgs>(args: SelectSubset<T, UserRoleFindUniqueArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserRole that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserRoleFindUniqueOrThrowArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserRoleFindUniqueOrThrowArgs>(args: SelectSubset<T, UserRoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserRole that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleFindFirstArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserRoleFindFirstArgs>(args?: SelectSubset<T, UserRoleFindFirstArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserRole that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleFindFirstOrThrowArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserRoleFindFirstOrThrowArgs>(args?: SelectSubset<T, UserRoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserRoles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserRoles
     * const userRoles = await prisma.userRole.findMany()
     * 
     * // Get first 10 UserRoles
     * const userRoles = await prisma.userRole.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userRoleWithIdOnly = await prisma.userRole.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserRoleFindManyArgs>(args?: SelectSubset<T, UserRoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserRole.
     * @param {UserRoleCreateArgs} args - Arguments to create a UserRole.
     * @example
     * // Create one UserRole
     * const UserRole = await prisma.userRole.create({
     *   data: {
     *     // ... data to create a UserRole
     *   }
     * })
     * 
     */
    create<T extends UserRoleCreateArgs>(args: SelectSubset<T, UserRoleCreateArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserRoles.
     * @param {UserRoleCreateManyArgs} args - Arguments to create many UserRoles.
     * @example
     * // Create many UserRoles
     * const userRole = await prisma.userRole.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserRoleCreateManyArgs>(args?: SelectSubset<T, UserRoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserRoles and returns the data saved in the database.
     * @param {UserRoleCreateManyAndReturnArgs} args - Arguments to create many UserRoles.
     * @example
     * // Create many UserRoles
     * const userRole = await prisma.userRole.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserRoles and only return the `id`
     * const userRoleWithIdOnly = await prisma.userRole.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserRoleCreateManyAndReturnArgs>(args?: SelectSubset<T, UserRoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserRole.
     * @param {UserRoleDeleteArgs} args - Arguments to delete one UserRole.
     * @example
     * // Delete one UserRole
     * const UserRole = await prisma.userRole.delete({
     *   where: {
     *     // ... filter to delete one UserRole
     *   }
     * })
     * 
     */
    delete<T extends UserRoleDeleteArgs>(args: SelectSubset<T, UserRoleDeleteArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserRole.
     * @param {UserRoleUpdateArgs} args - Arguments to update one UserRole.
     * @example
     * // Update one UserRole
     * const userRole = await prisma.userRole.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserRoleUpdateArgs>(args: SelectSubset<T, UserRoleUpdateArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserRoles.
     * @param {UserRoleDeleteManyArgs} args - Arguments to filter UserRoles to delete.
     * @example
     * // Delete a few UserRoles
     * const { count } = await prisma.userRole.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserRoleDeleteManyArgs>(args?: SelectSubset<T, UserRoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserRoles
     * const userRole = await prisma.userRole.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserRoleUpdateManyArgs>(args: SelectSubset<T, UserRoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserRoles and returns the data updated in the database.
     * @param {UserRoleUpdateManyAndReturnArgs} args - Arguments to update many UserRoles.
     * @example
     * // Update many UserRoles
     * const userRole = await prisma.userRole.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserRoles and only return the `id`
     * const userRoleWithIdOnly = await prisma.userRole.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserRoleUpdateManyAndReturnArgs>(args: SelectSubset<T, UserRoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserRole.
     * @param {UserRoleUpsertArgs} args - Arguments to update or create a UserRole.
     * @example
     * // Update or create a UserRole
     * const userRole = await prisma.userRole.upsert({
     *   create: {
     *     // ... data to create a UserRole
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserRole we want to update
     *   }
     * })
     */
    upsert<T extends UserRoleUpsertArgs>(args: SelectSubset<T, UserRoleUpsertArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleCountArgs} args - Arguments to filter UserRoles to count.
     * @example
     * // Count the number of UserRoles
     * const count = await prisma.userRole.count({
     *   where: {
     *     // ... the filter for the UserRoles we want to count
     *   }
     * })
    **/
    count<T extends UserRoleCountArgs>(
      args?: Subset<T, UserRoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserRoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserRoleAggregateArgs>(args: Subset<T, UserRoleAggregateArgs>): Prisma.PrismaPromise<GetUserRoleAggregateType<T>>

    /**
     * Group by UserRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserRoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserRoleGroupByArgs['orderBy'] }
        : { orderBy?: UserRoleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserRoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserRole model
   */
  readonly fields: UserRoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserRole.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserRoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    permissions<T extends UserRole$permissionsArgs<ExtArgs> = {}>(args?: Subset<T, UserRole$permissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRolePermissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends UserRole$usersArgs<ExtArgs> = {}>(args?: Subset<T, UserRole$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserRole model
   */
  interface UserRoleFieldRefs {
    readonly id: FieldRef<"UserRole", 'String'>
    readonly name: FieldRef<"UserRole", 'String'>
    readonly description: FieldRef<"UserRole", 'String'>
    readonly createdAt: FieldRef<"UserRole", 'DateTime'>
    readonly updatedAt: FieldRef<"UserRole", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserRole findUnique
   */
  export type UserRoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRole to fetch.
     */
    where: UserRoleWhereUniqueInput
  }

  /**
   * UserRole findUniqueOrThrow
   */
  export type UserRoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRole to fetch.
     */
    where: UserRoleWhereUniqueInput
  }

  /**
   * UserRole findFirst
   */
  export type UserRoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRole to fetch.
     */
    where?: UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoles to fetch.
     */
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserRoles.
     */
    cursor?: UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserRoles.
     */
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }

  /**
   * UserRole findFirstOrThrow
   */
  export type UserRoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRole to fetch.
     */
    where?: UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoles to fetch.
     */
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserRoles.
     */
    cursor?: UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserRoles.
     */
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }

  /**
   * UserRole findMany
   */
  export type UserRoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRoles to fetch.
     */
    where?: UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoles to fetch.
     */
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserRoles.
     */
    cursor?: UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoles.
     */
    skip?: number
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }

  /**
   * UserRole create
   */
  export type UserRoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * The data needed to create a UserRole.
     */
    data: XOR<UserRoleCreateInput, UserRoleUncheckedCreateInput>
  }

  /**
   * UserRole createMany
   */
  export type UserRoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserRoles.
     */
    data: UserRoleCreateManyInput | UserRoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserRole createManyAndReturn
   */
  export type UserRoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * The data used to create many UserRoles.
     */
    data: UserRoleCreateManyInput | UserRoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserRole update
   */
  export type UserRoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * The data needed to update a UserRole.
     */
    data: XOR<UserRoleUpdateInput, UserRoleUncheckedUpdateInput>
    /**
     * Choose, which UserRole to update.
     */
    where: UserRoleWhereUniqueInput
  }

  /**
   * UserRole updateMany
   */
  export type UserRoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserRoles.
     */
    data: XOR<UserRoleUpdateManyMutationInput, UserRoleUncheckedUpdateManyInput>
    /**
     * Filter which UserRoles to update
     */
    where?: UserRoleWhereInput
    /**
     * Limit how many UserRoles to update.
     */
    limit?: number
  }

  /**
   * UserRole updateManyAndReturn
   */
  export type UserRoleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * The data used to update UserRoles.
     */
    data: XOR<UserRoleUpdateManyMutationInput, UserRoleUncheckedUpdateManyInput>
    /**
     * Filter which UserRoles to update
     */
    where?: UserRoleWhereInput
    /**
     * Limit how many UserRoles to update.
     */
    limit?: number
  }

  /**
   * UserRole upsert
   */
  export type UserRoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * The filter to search for the UserRole to update in case it exists.
     */
    where: UserRoleWhereUniqueInput
    /**
     * In case the UserRole found by the `where` argument doesn't exist, create a new UserRole with this data.
     */
    create: XOR<UserRoleCreateInput, UserRoleUncheckedCreateInput>
    /**
     * In case the UserRole was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserRoleUpdateInput, UserRoleUncheckedUpdateInput>
  }

  /**
   * UserRole delete
   */
  export type UserRoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter which UserRole to delete.
     */
    where: UserRoleWhereUniqueInput
  }

  /**
   * UserRole deleteMany
   */
  export type UserRoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserRoles to delete
     */
    where?: UserRoleWhereInput
    /**
     * Limit how many UserRoles to delete.
     */
    limit?: number
  }

  /**
   * UserRole.permissions
   */
  export type UserRole$permissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRolePermission
     */
    select?: UserRolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRolePermission
     */
    omit?: UserRolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRolePermissionInclude<ExtArgs> | null
    where?: UserRolePermissionWhereInput
    orderBy?: UserRolePermissionOrderByWithRelationInput | UserRolePermissionOrderByWithRelationInput[]
    cursor?: UserRolePermissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserRolePermissionScalarFieldEnum | UserRolePermissionScalarFieldEnum[]
  }

  /**
   * UserRole.users
   */
  export type UserRole$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * UserRole without action
   */
  export type UserRoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
  }


  /**
   * Model UserRolePermission
   */

  export type AggregateUserRolePermission = {
    _count: UserRolePermissionCountAggregateOutputType | null
    _min: UserRolePermissionMinAggregateOutputType | null
    _max: UserRolePermissionMaxAggregateOutputType | null
  }

  export type UserRolePermissionMinAggregateOutputType = {
    id: string | null
    name: $Enums.PermissionName | null
    roleId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserRolePermissionMaxAggregateOutputType = {
    id: string | null
    name: $Enums.PermissionName | null
    roleId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserRolePermissionCountAggregateOutputType = {
    id: number
    name: number
    actions: number
    roleId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserRolePermissionMinAggregateInputType = {
    id?: true
    name?: true
    roleId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserRolePermissionMaxAggregateInputType = {
    id?: true
    name?: true
    roleId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserRolePermissionCountAggregateInputType = {
    id?: true
    name?: true
    actions?: true
    roleId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserRolePermissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserRolePermission to aggregate.
     */
    where?: UserRolePermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRolePermissions to fetch.
     */
    orderBy?: UserRolePermissionOrderByWithRelationInput | UserRolePermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserRolePermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRolePermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRolePermissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserRolePermissions
    **/
    _count?: true | UserRolePermissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserRolePermissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserRolePermissionMaxAggregateInputType
  }

  export type GetUserRolePermissionAggregateType<T extends UserRolePermissionAggregateArgs> = {
        [P in keyof T & keyof AggregateUserRolePermission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserRolePermission[P]>
      : GetScalarType<T[P], AggregateUserRolePermission[P]>
  }




  export type UserRolePermissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserRolePermissionWhereInput
    orderBy?: UserRolePermissionOrderByWithAggregationInput | UserRolePermissionOrderByWithAggregationInput[]
    by: UserRolePermissionScalarFieldEnum[] | UserRolePermissionScalarFieldEnum
    having?: UserRolePermissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserRolePermissionCountAggregateInputType | true
    _min?: UserRolePermissionMinAggregateInputType
    _max?: UserRolePermissionMaxAggregateInputType
  }

  export type UserRolePermissionGroupByOutputType = {
    id: string
    name: $Enums.PermissionName
    actions: $Enums.PermissionAction[]
    roleId: string
    createdAt: Date
    updatedAt: Date
    _count: UserRolePermissionCountAggregateOutputType | null
    _min: UserRolePermissionMinAggregateOutputType | null
    _max: UserRolePermissionMaxAggregateOutputType | null
  }

  type GetUserRolePermissionGroupByPayload<T extends UserRolePermissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserRolePermissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserRolePermissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserRolePermissionGroupByOutputType[P]>
            : GetScalarType<T[P], UserRolePermissionGroupByOutputType[P]>
        }
      >
    >


  export type UserRolePermissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    actions?: boolean
    roleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean | UserRoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userRolePermission"]>

  export type UserRolePermissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    actions?: boolean
    roleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean | UserRoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userRolePermission"]>

  export type UserRolePermissionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    actions?: boolean
    roleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean | UserRoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userRolePermission"]>

  export type UserRolePermissionSelectScalar = {
    id?: boolean
    name?: boolean
    actions?: boolean
    roleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserRolePermissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "actions" | "roleId" | "createdAt" | "updatedAt", ExtArgs["result"]["userRolePermission"]>
  export type UserRolePermissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | UserRoleDefaultArgs<ExtArgs>
  }
  export type UserRolePermissionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | UserRoleDefaultArgs<ExtArgs>
  }
  export type UserRolePermissionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | UserRoleDefaultArgs<ExtArgs>
  }

  export type $UserRolePermissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserRolePermission"
    objects: {
      role: Prisma.$UserRolePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: $Enums.PermissionName
      actions: $Enums.PermissionAction[]
      roleId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userRolePermission"]>
    composites: {}
  }

  type UserRolePermissionGetPayload<S extends boolean | null | undefined | UserRolePermissionDefaultArgs> = $Result.GetResult<Prisma.$UserRolePermissionPayload, S>

  type UserRolePermissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserRolePermissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserRolePermissionCountAggregateInputType | true
    }

  export interface UserRolePermissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserRolePermission'], meta: { name: 'UserRolePermission' } }
    /**
     * Find zero or one UserRolePermission that matches the filter.
     * @param {UserRolePermissionFindUniqueArgs} args - Arguments to find a UserRolePermission
     * @example
     * // Get one UserRolePermission
     * const userRolePermission = await prisma.userRolePermission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserRolePermissionFindUniqueArgs>(args: SelectSubset<T, UserRolePermissionFindUniqueArgs<ExtArgs>>): Prisma__UserRolePermissionClient<$Result.GetResult<Prisma.$UserRolePermissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserRolePermission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserRolePermissionFindUniqueOrThrowArgs} args - Arguments to find a UserRolePermission
     * @example
     * // Get one UserRolePermission
     * const userRolePermission = await prisma.userRolePermission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserRolePermissionFindUniqueOrThrowArgs>(args: SelectSubset<T, UserRolePermissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserRolePermissionClient<$Result.GetResult<Prisma.$UserRolePermissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserRolePermission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRolePermissionFindFirstArgs} args - Arguments to find a UserRolePermission
     * @example
     * // Get one UserRolePermission
     * const userRolePermission = await prisma.userRolePermission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserRolePermissionFindFirstArgs>(args?: SelectSubset<T, UserRolePermissionFindFirstArgs<ExtArgs>>): Prisma__UserRolePermissionClient<$Result.GetResult<Prisma.$UserRolePermissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserRolePermission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRolePermissionFindFirstOrThrowArgs} args - Arguments to find a UserRolePermission
     * @example
     * // Get one UserRolePermission
     * const userRolePermission = await prisma.userRolePermission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserRolePermissionFindFirstOrThrowArgs>(args?: SelectSubset<T, UserRolePermissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserRolePermissionClient<$Result.GetResult<Prisma.$UserRolePermissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserRolePermissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRolePermissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserRolePermissions
     * const userRolePermissions = await prisma.userRolePermission.findMany()
     * 
     * // Get first 10 UserRolePermissions
     * const userRolePermissions = await prisma.userRolePermission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userRolePermissionWithIdOnly = await prisma.userRolePermission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserRolePermissionFindManyArgs>(args?: SelectSubset<T, UserRolePermissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRolePermissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserRolePermission.
     * @param {UserRolePermissionCreateArgs} args - Arguments to create a UserRolePermission.
     * @example
     * // Create one UserRolePermission
     * const UserRolePermission = await prisma.userRolePermission.create({
     *   data: {
     *     // ... data to create a UserRolePermission
     *   }
     * })
     * 
     */
    create<T extends UserRolePermissionCreateArgs>(args: SelectSubset<T, UserRolePermissionCreateArgs<ExtArgs>>): Prisma__UserRolePermissionClient<$Result.GetResult<Prisma.$UserRolePermissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserRolePermissions.
     * @param {UserRolePermissionCreateManyArgs} args - Arguments to create many UserRolePermissions.
     * @example
     * // Create many UserRolePermissions
     * const userRolePermission = await prisma.userRolePermission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserRolePermissionCreateManyArgs>(args?: SelectSubset<T, UserRolePermissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserRolePermissions and returns the data saved in the database.
     * @param {UserRolePermissionCreateManyAndReturnArgs} args - Arguments to create many UserRolePermissions.
     * @example
     * // Create many UserRolePermissions
     * const userRolePermission = await prisma.userRolePermission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserRolePermissions and only return the `id`
     * const userRolePermissionWithIdOnly = await prisma.userRolePermission.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserRolePermissionCreateManyAndReturnArgs>(args?: SelectSubset<T, UserRolePermissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRolePermissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserRolePermission.
     * @param {UserRolePermissionDeleteArgs} args - Arguments to delete one UserRolePermission.
     * @example
     * // Delete one UserRolePermission
     * const UserRolePermission = await prisma.userRolePermission.delete({
     *   where: {
     *     // ... filter to delete one UserRolePermission
     *   }
     * })
     * 
     */
    delete<T extends UserRolePermissionDeleteArgs>(args: SelectSubset<T, UserRolePermissionDeleteArgs<ExtArgs>>): Prisma__UserRolePermissionClient<$Result.GetResult<Prisma.$UserRolePermissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserRolePermission.
     * @param {UserRolePermissionUpdateArgs} args - Arguments to update one UserRolePermission.
     * @example
     * // Update one UserRolePermission
     * const userRolePermission = await prisma.userRolePermission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserRolePermissionUpdateArgs>(args: SelectSubset<T, UserRolePermissionUpdateArgs<ExtArgs>>): Prisma__UserRolePermissionClient<$Result.GetResult<Prisma.$UserRolePermissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserRolePermissions.
     * @param {UserRolePermissionDeleteManyArgs} args - Arguments to filter UserRolePermissions to delete.
     * @example
     * // Delete a few UserRolePermissions
     * const { count } = await prisma.userRolePermission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserRolePermissionDeleteManyArgs>(args?: SelectSubset<T, UserRolePermissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserRolePermissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRolePermissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserRolePermissions
     * const userRolePermission = await prisma.userRolePermission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserRolePermissionUpdateManyArgs>(args: SelectSubset<T, UserRolePermissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserRolePermissions and returns the data updated in the database.
     * @param {UserRolePermissionUpdateManyAndReturnArgs} args - Arguments to update many UserRolePermissions.
     * @example
     * // Update many UserRolePermissions
     * const userRolePermission = await prisma.userRolePermission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserRolePermissions and only return the `id`
     * const userRolePermissionWithIdOnly = await prisma.userRolePermission.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserRolePermissionUpdateManyAndReturnArgs>(args: SelectSubset<T, UserRolePermissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRolePermissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserRolePermission.
     * @param {UserRolePermissionUpsertArgs} args - Arguments to update or create a UserRolePermission.
     * @example
     * // Update or create a UserRolePermission
     * const userRolePermission = await prisma.userRolePermission.upsert({
     *   create: {
     *     // ... data to create a UserRolePermission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserRolePermission we want to update
     *   }
     * })
     */
    upsert<T extends UserRolePermissionUpsertArgs>(args: SelectSubset<T, UserRolePermissionUpsertArgs<ExtArgs>>): Prisma__UserRolePermissionClient<$Result.GetResult<Prisma.$UserRolePermissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserRolePermissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRolePermissionCountArgs} args - Arguments to filter UserRolePermissions to count.
     * @example
     * // Count the number of UserRolePermissions
     * const count = await prisma.userRolePermission.count({
     *   where: {
     *     // ... the filter for the UserRolePermissions we want to count
     *   }
     * })
    **/
    count<T extends UserRolePermissionCountArgs>(
      args?: Subset<T, UserRolePermissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserRolePermissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserRolePermission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRolePermissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserRolePermissionAggregateArgs>(args: Subset<T, UserRolePermissionAggregateArgs>): Prisma.PrismaPromise<GetUserRolePermissionAggregateType<T>>

    /**
     * Group by UserRolePermission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRolePermissionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserRolePermissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserRolePermissionGroupByArgs['orderBy'] }
        : { orderBy?: UserRolePermissionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserRolePermissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserRolePermissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserRolePermission model
   */
  readonly fields: UserRolePermissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserRolePermission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserRolePermissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    role<T extends UserRoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserRoleDefaultArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserRolePermission model
   */
  interface UserRolePermissionFieldRefs {
    readonly id: FieldRef<"UserRolePermission", 'String'>
    readonly name: FieldRef<"UserRolePermission", 'PermissionName'>
    readonly actions: FieldRef<"UserRolePermission", 'PermissionAction[]'>
    readonly roleId: FieldRef<"UserRolePermission", 'String'>
    readonly createdAt: FieldRef<"UserRolePermission", 'DateTime'>
    readonly updatedAt: FieldRef<"UserRolePermission", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserRolePermission findUnique
   */
  export type UserRolePermissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRolePermission
     */
    select?: UserRolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRolePermission
     */
    omit?: UserRolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRolePermissionInclude<ExtArgs> | null
    /**
     * Filter, which UserRolePermission to fetch.
     */
    where: UserRolePermissionWhereUniqueInput
  }

  /**
   * UserRolePermission findUniqueOrThrow
   */
  export type UserRolePermissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRolePermission
     */
    select?: UserRolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRolePermission
     */
    omit?: UserRolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRolePermissionInclude<ExtArgs> | null
    /**
     * Filter, which UserRolePermission to fetch.
     */
    where: UserRolePermissionWhereUniqueInput
  }

  /**
   * UserRolePermission findFirst
   */
  export type UserRolePermissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRolePermission
     */
    select?: UserRolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRolePermission
     */
    omit?: UserRolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRolePermissionInclude<ExtArgs> | null
    /**
     * Filter, which UserRolePermission to fetch.
     */
    where?: UserRolePermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRolePermissions to fetch.
     */
    orderBy?: UserRolePermissionOrderByWithRelationInput | UserRolePermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserRolePermissions.
     */
    cursor?: UserRolePermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRolePermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRolePermissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserRolePermissions.
     */
    distinct?: UserRolePermissionScalarFieldEnum | UserRolePermissionScalarFieldEnum[]
  }

  /**
   * UserRolePermission findFirstOrThrow
   */
  export type UserRolePermissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRolePermission
     */
    select?: UserRolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRolePermission
     */
    omit?: UserRolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRolePermissionInclude<ExtArgs> | null
    /**
     * Filter, which UserRolePermission to fetch.
     */
    where?: UserRolePermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRolePermissions to fetch.
     */
    orderBy?: UserRolePermissionOrderByWithRelationInput | UserRolePermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserRolePermissions.
     */
    cursor?: UserRolePermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRolePermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRolePermissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserRolePermissions.
     */
    distinct?: UserRolePermissionScalarFieldEnum | UserRolePermissionScalarFieldEnum[]
  }

  /**
   * UserRolePermission findMany
   */
  export type UserRolePermissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRolePermission
     */
    select?: UserRolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRolePermission
     */
    omit?: UserRolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRolePermissionInclude<ExtArgs> | null
    /**
     * Filter, which UserRolePermissions to fetch.
     */
    where?: UserRolePermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRolePermissions to fetch.
     */
    orderBy?: UserRolePermissionOrderByWithRelationInput | UserRolePermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserRolePermissions.
     */
    cursor?: UserRolePermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRolePermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRolePermissions.
     */
    skip?: number
    distinct?: UserRolePermissionScalarFieldEnum | UserRolePermissionScalarFieldEnum[]
  }

  /**
   * UserRolePermission create
   */
  export type UserRolePermissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRolePermission
     */
    select?: UserRolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRolePermission
     */
    omit?: UserRolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRolePermissionInclude<ExtArgs> | null
    /**
     * The data needed to create a UserRolePermission.
     */
    data: XOR<UserRolePermissionCreateInput, UserRolePermissionUncheckedCreateInput>
  }

  /**
   * UserRolePermission createMany
   */
  export type UserRolePermissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserRolePermissions.
     */
    data: UserRolePermissionCreateManyInput | UserRolePermissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserRolePermission createManyAndReturn
   */
  export type UserRolePermissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRolePermission
     */
    select?: UserRolePermissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserRolePermission
     */
    omit?: UserRolePermissionOmit<ExtArgs> | null
    /**
     * The data used to create many UserRolePermissions.
     */
    data: UserRolePermissionCreateManyInput | UserRolePermissionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRolePermissionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserRolePermission update
   */
  export type UserRolePermissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRolePermission
     */
    select?: UserRolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRolePermission
     */
    omit?: UserRolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRolePermissionInclude<ExtArgs> | null
    /**
     * The data needed to update a UserRolePermission.
     */
    data: XOR<UserRolePermissionUpdateInput, UserRolePermissionUncheckedUpdateInput>
    /**
     * Choose, which UserRolePermission to update.
     */
    where: UserRolePermissionWhereUniqueInput
  }

  /**
   * UserRolePermission updateMany
   */
  export type UserRolePermissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserRolePermissions.
     */
    data: XOR<UserRolePermissionUpdateManyMutationInput, UserRolePermissionUncheckedUpdateManyInput>
    /**
     * Filter which UserRolePermissions to update
     */
    where?: UserRolePermissionWhereInput
    /**
     * Limit how many UserRolePermissions to update.
     */
    limit?: number
  }

  /**
   * UserRolePermission updateManyAndReturn
   */
  export type UserRolePermissionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRolePermission
     */
    select?: UserRolePermissionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserRolePermission
     */
    omit?: UserRolePermissionOmit<ExtArgs> | null
    /**
     * The data used to update UserRolePermissions.
     */
    data: XOR<UserRolePermissionUpdateManyMutationInput, UserRolePermissionUncheckedUpdateManyInput>
    /**
     * Filter which UserRolePermissions to update
     */
    where?: UserRolePermissionWhereInput
    /**
     * Limit how many UserRolePermissions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRolePermissionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserRolePermission upsert
   */
  export type UserRolePermissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRolePermission
     */
    select?: UserRolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRolePermission
     */
    omit?: UserRolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRolePermissionInclude<ExtArgs> | null
    /**
     * The filter to search for the UserRolePermission to update in case it exists.
     */
    where: UserRolePermissionWhereUniqueInput
    /**
     * In case the UserRolePermission found by the `where` argument doesn't exist, create a new UserRolePermission with this data.
     */
    create: XOR<UserRolePermissionCreateInput, UserRolePermissionUncheckedCreateInput>
    /**
     * In case the UserRolePermission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserRolePermissionUpdateInput, UserRolePermissionUncheckedUpdateInput>
  }

  /**
   * UserRolePermission delete
   */
  export type UserRolePermissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRolePermission
     */
    select?: UserRolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRolePermission
     */
    omit?: UserRolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRolePermissionInclude<ExtArgs> | null
    /**
     * Filter which UserRolePermission to delete.
     */
    where: UserRolePermissionWhereUniqueInput
  }

  /**
   * UserRolePermission deleteMany
   */
  export type UserRolePermissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserRolePermissions to delete
     */
    where?: UserRolePermissionWhereInput
    /**
     * Limit how many UserRolePermissions to delete.
     */
    limit?: number
  }

  /**
   * UserRolePermission without action
   */
  export type UserRolePermissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRolePermission
     */
    select?: UserRolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRolePermission
     */
    omit?: UserRolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRolePermissionInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const BlogArticleScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    title: 'title',
    slug: 'slug',
    description: 'description',
    content: 'content',
    stage: 'stage',
    categoryId: 'categoryId',
    commentsCount: 'commentsCount',
    reactionCount: 'reactionCount'
  };

  export type BlogArticleScalarFieldEnum = (typeof BlogArticleScalarFieldEnum)[keyof typeof BlogArticleScalarFieldEnum]


  export const BlogCategoryScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    title: 'title',
    slug: 'slug',
    description: 'description'
  };

  export type BlogCategoryScalarFieldEnum = (typeof BlogCategoryScalarFieldEnum)[keyof typeof BlogCategoryScalarFieldEnum]


  export const BlogCommentScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    content: 'content',
    articleId: 'articleId',
    userId: 'userId',
    stage: 'stage'
  };

  export type BlogCommentScalarFieldEnum = (typeof BlogCommentScalarFieldEnum)[keyof typeof BlogCommentScalarFieldEnum]


  export const BlogReactionScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    articleId: 'articleId',
    userId: 'userId',
    type: 'type'
  };

  export type BlogReactionScalarFieldEnum = (typeof BlogReactionScalarFieldEnum)[keyof typeof BlogReactionScalarFieldEnum]


  export const CustomerCompanyScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    name: 'name',
    stage: 'stage'
  };

  export type CustomerCompanyScalarFieldEnum = (typeof CustomerCompanyScalarFieldEnum)[keyof typeof CustomerCompanyScalarFieldEnum]


  export const CustomerReviewScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    authorName: 'authorName',
    authorPosition: 'authorPosition',
    authorCompany: 'authorCompany',
    content: 'content',
    stage: 'stage'
  };

  export type CustomerReviewScalarFieldEnum = (typeof CustomerReviewScalarFieldEnum)[keyof typeof CustomerReviewScalarFieldEnum]


  export const EmployeeScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    firstName: 'firstName',
    lastName: 'lastName',
    position: 'position',
    slug: 'slug',
    dob: 'dob',
    userId: 'userId',
    stage: 'stage',
    joinedAt: 'joinedAt'
  };

  export type EmployeeScalarFieldEnum = (typeof EmployeeScalarFieldEnum)[keyof typeof EmployeeScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    title: 'title',
    description: 'description',
    content: 'content',
    stage: 'stage'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const ServiceScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    title: 'title',
    description: 'description',
    content: 'content',
    stage: 'stage'
  };

  export type ServiceScalarFieldEnum = (typeof ServiceScalarFieldEnum)[keyof typeof ServiceScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name',
    accessType: 'accessType',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserRoleScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserRoleScalarFieldEnum = (typeof UserRoleScalarFieldEnum)[keyof typeof UserRoleScalarFieldEnum]


  export const UserRolePermissionScalarFieldEnum: {
    id: 'id',
    name: 'name',
    actions: 'actions',
    roleId: 'roleId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserRolePermissionScalarFieldEnum = (typeof UserRolePermissionScalarFieldEnum)[keyof typeof UserRolePermissionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'ContentStage'
   */
  export type EnumContentStageFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ContentStage'>
    


  /**
   * Reference to a field of type 'ContentStage[]'
   */
  export type ListEnumContentStageFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ContentStage[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'ReactionType'
   */
  export type EnumReactionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReactionType'>
    


  /**
   * Reference to a field of type 'ReactionType[]'
   */
  export type ListEnumReactionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReactionType[]'>
    


  /**
   * Reference to a field of type 'AccessType'
   */
  export type EnumAccessTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AccessType'>
    


  /**
   * Reference to a field of type 'AccessType[]'
   */
  export type ListEnumAccessTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AccessType[]'>
    


  /**
   * Reference to a field of type 'PermissionName'
   */
  export type EnumPermissionNameFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PermissionName'>
    


  /**
   * Reference to a field of type 'PermissionName[]'
   */
  export type ListEnumPermissionNameFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PermissionName[]'>
    


  /**
   * Reference to a field of type 'PermissionAction[]'
   */
  export type ListEnumPermissionActionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PermissionAction[]'>
    


  /**
   * Reference to a field of type 'PermissionAction'
   */
  export type EnumPermissionActionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PermissionAction'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type BlogArticleWhereInput = {
    AND?: BlogArticleWhereInput | BlogArticleWhereInput[]
    OR?: BlogArticleWhereInput[]
    NOT?: BlogArticleWhereInput | BlogArticleWhereInput[]
    id?: StringFilter<"BlogArticle"> | string
    createdAt?: DateTimeFilter<"BlogArticle"> | Date | string
    updatedAt?: DateTimeFilter<"BlogArticle"> | Date | string
    title?: StringFilter<"BlogArticle"> | string
    slug?: StringFilter<"BlogArticle"> | string
    description?: StringFilter<"BlogArticle"> | string
    content?: StringFilter<"BlogArticle"> | string
    stage?: EnumContentStageFilter<"BlogArticle"> | $Enums.ContentStage
    categoryId?: StringFilter<"BlogArticle"> | string
    commentsCount?: IntFilter<"BlogArticle"> | number
    reactionCount?: IntFilter<"BlogArticle"> | number
    category?: XOR<BlogCategoryScalarRelationFilter, BlogCategoryWhereInput>
    comments?: BlogCommentListRelationFilter
    BlogReaction?: BlogReactionListRelationFilter
  }

  export type BlogArticleOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    content?: SortOrder
    stage?: SortOrder
    categoryId?: SortOrder
    commentsCount?: SortOrder
    reactionCount?: SortOrder
    category?: BlogCategoryOrderByWithRelationInput
    comments?: BlogCommentOrderByRelationAggregateInput
    BlogReaction?: BlogReactionOrderByRelationAggregateInput
  }

  export type BlogArticleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: BlogArticleWhereInput | BlogArticleWhereInput[]
    OR?: BlogArticleWhereInput[]
    NOT?: BlogArticleWhereInput | BlogArticleWhereInput[]
    createdAt?: DateTimeFilter<"BlogArticle"> | Date | string
    updatedAt?: DateTimeFilter<"BlogArticle"> | Date | string
    title?: StringFilter<"BlogArticle"> | string
    description?: StringFilter<"BlogArticle"> | string
    content?: StringFilter<"BlogArticle"> | string
    stage?: EnumContentStageFilter<"BlogArticle"> | $Enums.ContentStage
    categoryId?: StringFilter<"BlogArticle"> | string
    commentsCount?: IntFilter<"BlogArticle"> | number
    reactionCount?: IntFilter<"BlogArticle"> | number
    category?: XOR<BlogCategoryScalarRelationFilter, BlogCategoryWhereInput>
    comments?: BlogCommentListRelationFilter
    BlogReaction?: BlogReactionListRelationFilter
  }, "id" | "slug">

  export type BlogArticleOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    content?: SortOrder
    stage?: SortOrder
    categoryId?: SortOrder
    commentsCount?: SortOrder
    reactionCount?: SortOrder
    _count?: BlogArticleCountOrderByAggregateInput
    _avg?: BlogArticleAvgOrderByAggregateInput
    _max?: BlogArticleMaxOrderByAggregateInput
    _min?: BlogArticleMinOrderByAggregateInput
    _sum?: BlogArticleSumOrderByAggregateInput
  }

  export type BlogArticleScalarWhereWithAggregatesInput = {
    AND?: BlogArticleScalarWhereWithAggregatesInput | BlogArticleScalarWhereWithAggregatesInput[]
    OR?: BlogArticleScalarWhereWithAggregatesInput[]
    NOT?: BlogArticleScalarWhereWithAggregatesInput | BlogArticleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BlogArticle"> | string
    createdAt?: DateTimeWithAggregatesFilter<"BlogArticle"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BlogArticle"> | Date | string
    title?: StringWithAggregatesFilter<"BlogArticle"> | string
    slug?: StringWithAggregatesFilter<"BlogArticle"> | string
    description?: StringWithAggregatesFilter<"BlogArticle"> | string
    content?: StringWithAggregatesFilter<"BlogArticle"> | string
    stage?: EnumContentStageWithAggregatesFilter<"BlogArticle"> | $Enums.ContentStage
    categoryId?: StringWithAggregatesFilter<"BlogArticle"> | string
    commentsCount?: IntWithAggregatesFilter<"BlogArticle"> | number
    reactionCount?: IntWithAggregatesFilter<"BlogArticle"> | number
  }

  export type BlogCategoryWhereInput = {
    AND?: BlogCategoryWhereInput | BlogCategoryWhereInput[]
    OR?: BlogCategoryWhereInput[]
    NOT?: BlogCategoryWhereInput | BlogCategoryWhereInput[]
    id?: StringFilter<"BlogCategory"> | string
    createdAt?: DateTimeFilter<"BlogCategory"> | Date | string
    updatedAt?: DateTimeFilter<"BlogCategory"> | Date | string
    title?: StringFilter<"BlogCategory"> | string
    slug?: StringFilter<"BlogCategory"> | string
    description?: StringFilter<"BlogCategory"> | string
    BlogArticle?: BlogArticleListRelationFilter
  }

  export type BlogCategoryOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    BlogArticle?: BlogArticleOrderByRelationAggregateInput
  }

  export type BlogCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: BlogCategoryWhereInput | BlogCategoryWhereInput[]
    OR?: BlogCategoryWhereInput[]
    NOT?: BlogCategoryWhereInput | BlogCategoryWhereInput[]
    createdAt?: DateTimeFilter<"BlogCategory"> | Date | string
    updatedAt?: DateTimeFilter<"BlogCategory"> | Date | string
    title?: StringFilter<"BlogCategory"> | string
    description?: StringFilter<"BlogCategory"> | string
    BlogArticle?: BlogArticleListRelationFilter
  }, "id" | "slug">

  export type BlogCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    _count?: BlogCategoryCountOrderByAggregateInput
    _max?: BlogCategoryMaxOrderByAggregateInput
    _min?: BlogCategoryMinOrderByAggregateInput
  }

  export type BlogCategoryScalarWhereWithAggregatesInput = {
    AND?: BlogCategoryScalarWhereWithAggregatesInput | BlogCategoryScalarWhereWithAggregatesInput[]
    OR?: BlogCategoryScalarWhereWithAggregatesInput[]
    NOT?: BlogCategoryScalarWhereWithAggregatesInput | BlogCategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BlogCategory"> | string
    createdAt?: DateTimeWithAggregatesFilter<"BlogCategory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BlogCategory"> | Date | string
    title?: StringWithAggregatesFilter<"BlogCategory"> | string
    slug?: StringWithAggregatesFilter<"BlogCategory"> | string
    description?: StringWithAggregatesFilter<"BlogCategory"> | string
  }

  export type BlogCommentWhereInput = {
    AND?: BlogCommentWhereInput | BlogCommentWhereInput[]
    OR?: BlogCommentWhereInput[]
    NOT?: BlogCommentWhereInput | BlogCommentWhereInput[]
    id?: StringFilter<"BlogComment"> | string
    createdAt?: DateTimeFilter<"BlogComment"> | Date | string
    updatedAt?: DateTimeFilter<"BlogComment"> | Date | string
    content?: StringFilter<"BlogComment"> | string
    articleId?: StringFilter<"BlogComment"> | string
    userId?: StringFilter<"BlogComment"> | string
    stage?: EnumContentStageFilter<"BlogComment"> | $Enums.ContentStage
    article?: XOR<BlogArticleScalarRelationFilter, BlogArticleWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type BlogCommentOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    content?: SortOrder
    articleId?: SortOrder
    userId?: SortOrder
    stage?: SortOrder
    article?: BlogArticleOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type BlogCommentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BlogCommentWhereInput | BlogCommentWhereInput[]
    OR?: BlogCommentWhereInput[]
    NOT?: BlogCommentWhereInput | BlogCommentWhereInput[]
    createdAt?: DateTimeFilter<"BlogComment"> | Date | string
    updatedAt?: DateTimeFilter<"BlogComment"> | Date | string
    content?: StringFilter<"BlogComment"> | string
    articleId?: StringFilter<"BlogComment"> | string
    userId?: StringFilter<"BlogComment"> | string
    stage?: EnumContentStageFilter<"BlogComment"> | $Enums.ContentStage
    article?: XOR<BlogArticleScalarRelationFilter, BlogArticleWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type BlogCommentOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    content?: SortOrder
    articleId?: SortOrder
    userId?: SortOrder
    stage?: SortOrder
    _count?: BlogCommentCountOrderByAggregateInput
    _max?: BlogCommentMaxOrderByAggregateInput
    _min?: BlogCommentMinOrderByAggregateInput
  }

  export type BlogCommentScalarWhereWithAggregatesInput = {
    AND?: BlogCommentScalarWhereWithAggregatesInput | BlogCommentScalarWhereWithAggregatesInput[]
    OR?: BlogCommentScalarWhereWithAggregatesInput[]
    NOT?: BlogCommentScalarWhereWithAggregatesInput | BlogCommentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BlogComment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"BlogComment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BlogComment"> | Date | string
    content?: StringWithAggregatesFilter<"BlogComment"> | string
    articleId?: StringWithAggregatesFilter<"BlogComment"> | string
    userId?: StringWithAggregatesFilter<"BlogComment"> | string
    stage?: EnumContentStageWithAggregatesFilter<"BlogComment"> | $Enums.ContentStage
  }

  export type BlogReactionWhereInput = {
    AND?: BlogReactionWhereInput | BlogReactionWhereInput[]
    OR?: BlogReactionWhereInput[]
    NOT?: BlogReactionWhereInput | BlogReactionWhereInput[]
    id?: StringFilter<"BlogReaction"> | string
    createdAt?: DateTimeFilter<"BlogReaction"> | Date | string
    updatedAt?: DateTimeFilter<"BlogReaction"> | Date | string
    articleId?: StringFilter<"BlogReaction"> | string
    userId?: StringFilter<"BlogReaction"> | string
    type?: EnumReactionTypeFilter<"BlogReaction"> | $Enums.ReactionType
    article?: XOR<BlogArticleScalarRelationFilter, BlogArticleWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type BlogReactionOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    articleId?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    article?: BlogArticleOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type BlogReactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_articleId?: BlogReactionUserId_articleIdCompoundUniqueInput
    AND?: BlogReactionWhereInput | BlogReactionWhereInput[]
    OR?: BlogReactionWhereInput[]
    NOT?: BlogReactionWhereInput | BlogReactionWhereInput[]
    createdAt?: DateTimeFilter<"BlogReaction"> | Date | string
    updatedAt?: DateTimeFilter<"BlogReaction"> | Date | string
    articleId?: StringFilter<"BlogReaction"> | string
    userId?: StringFilter<"BlogReaction"> | string
    type?: EnumReactionTypeFilter<"BlogReaction"> | $Enums.ReactionType
    article?: XOR<BlogArticleScalarRelationFilter, BlogArticleWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId_articleId">

  export type BlogReactionOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    articleId?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    _count?: BlogReactionCountOrderByAggregateInput
    _max?: BlogReactionMaxOrderByAggregateInput
    _min?: BlogReactionMinOrderByAggregateInput
  }

  export type BlogReactionScalarWhereWithAggregatesInput = {
    AND?: BlogReactionScalarWhereWithAggregatesInput | BlogReactionScalarWhereWithAggregatesInput[]
    OR?: BlogReactionScalarWhereWithAggregatesInput[]
    NOT?: BlogReactionScalarWhereWithAggregatesInput | BlogReactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BlogReaction"> | string
    createdAt?: DateTimeWithAggregatesFilter<"BlogReaction"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BlogReaction"> | Date | string
    articleId?: StringWithAggregatesFilter<"BlogReaction"> | string
    userId?: StringWithAggregatesFilter<"BlogReaction"> | string
    type?: EnumReactionTypeWithAggregatesFilter<"BlogReaction"> | $Enums.ReactionType
  }

  export type CustomerCompanyWhereInput = {
    AND?: CustomerCompanyWhereInput | CustomerCompanyWhereInput[]
    OR?: CustomerCompanyWhereInput[]
    NOT?: CustomerCompanyWhereInput | CustomerCompanyWhereInput[]
    id?: StringFilter<"CustomerCompany"> | string
    createdAt?: DateTimeFilter<"CustomerCompany"> | Date | string
    updatedAt?: DateTimeFilter<"CustomerCompany"> | Date | string
    name?: StringFilter<"CustomerCompany"> | string
    stage?: EnumContentStageFilter<"CustomerCompany"> | $Enums.ContentStage
  }

  export type CustomerCompanyOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    stage?: SortOrder
  }

  export type CustomerCompanyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CustomerCompanyWhereInput | CustomerCompanyWhereInput[]
    OR?: CustomerCompanyWhereInput[]
    NOT?: CustomerCompanyWhereInput | CustomerCompanyWhereInput[]
    createdAt?: DateTimeFilter<"CustomerCompany"> | Date | string
    updatedAt?: DateTimeFilter<"CustomerCompany"> | Date | string
    name?: StringFilter<"CustomerCompany"> | string
    stage?: EnumContentStageFilter<"CustomerCompany"> | $Enums.ContentStage
  }, "id">

  export type CustomerCompanyOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    stage?: SortOrder
    _count?: CustomerCompanyCountOrderByAggregateInput
    _max?: CustomerCompanyMaxOrderByAggregateInput
    _min?: CustomerCompanyMinOrderByAggregateInput
  }

  export type CustomerCompanyScalarWhereWithAggregatesInput = {
    AND?: CustomerCompanyScalarWhereWithAggregatesInput | CustomerCompanyScalarWhereWithAggregatesInput[]
    OR?: CustomerCompanyScalarWhereWithAggregatesInput[]
    NOT?: CustomerCompanyScalarWhereWithAggregatesInput | CustomerCompanyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CustomerCompany"> | string
    createdAt?: DateTimeWithAggregatesFilter<"CustomerCompany"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CustomerCompany"> | Date | string
    name?: StringWithAggregatesFilter<"CustomerCompany"> | string
    stage?: EnumContentStageWithAggregatesFilter<"CustomerCompany"> | $Enums.ContentStage
  }

  export type CustomerReviewWhereInput = {
    AND?: CustomerReviewWhereInput | CustomerReviewWhereInput[]
    OR?: CustomerReviewWhereInput[]
    NOT?: CustomerReviewWhereInput | CustomerReviewWhereInput[]
    id?: StringFilter<"CustomerReview"> | string
    createdAt?: DateTimeFilter<"CustomerReview"> | Date | string
    updatedAt?: DateTimeFilter<"CustomerReview"> | Date | string
    authorName?: StringFilter<"CustomerReview"> | string
    authorPosition?: StringFilter<"CustomerReview"> | string
    authorCompany?: StringFilter<"CustomerReview"> | string
    content?: StringFilter<"CustomerReview"> | string
    stage?: EnumContentStageFilter<"CustomerReview"> | $Enums.ContentStage
  }

  export type CustomerReviewOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    authorName?: SortOrder
    authorPosition?: SortOrder
    authorCompany?: SortOrder
    content?: SortOrder
    stage?: SortOrder
  }

  export type CustomerReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CustomerReviewWhereInput | CustomerReviewWhereInput[]
    OR?: CustomerReviewWhereInput[]
    NOT?: CustomerReviewWhereInput | CustomerReviewWhereInput[]
    createdAt?: DateTimeFilter<"CustomerReview"> | Date | string
    updatedAt?: DateTimeFilter<"CustomerReview"> | Date | string
    authorName?: StringFilter<"CustomerReview"> | string
    authorPosition?: StringFilter<"CustomerReview"> | string
    authorCompany?: StringFilter<"CustomerReview"> | string
    content?: StringFilter<"CustomerReview"> | string
    stage?: EnumContentStageFilter<"CustomerReview"> | $Enums.ContentStage
  }, "id">

  export type CustomerReviewOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    authorName?: SortOrder
    authorPosition?: SortOrder
    authorCompany?: SortOrder
    content?: SortOrder
    stage?: SortOrder
    _count?: CustomerReviewCountOrderByAggregateInput
    _max?: CustomerReviewMaxOrderByAggregateInput
    _min?: CustomerReviewMinOrderByAggregateInput
  }

  export type CustomerReviewScalarWhereWithAggregatesInput = {
    AND?: CustomerReviewScalarWhereWithAggregatesInput | CustomerReviewScalarWhereWithAggregatesInput[]
    OR?: CustomerReviewScalarWhereWithAggregatesInput[]
    NOT?: CustomerReviewScalarWhereWithAggregatesInput | CustomerReviewScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CustomerReview"> | string
    createdAt?: DateTimeWithAggregatesFilter<"CustomerReview"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CustomerReview"> | Date | string
    authorName?: StringWithAggregatesFilter<"CustomerReview"> | string
    authorPosition?: StringWithAggregatesFilter<"CustomerReview"> | string
    authorCompany?: StringWithAggregatesFilter<"CustomerReview"> | string
    content?: StringWithAggregatesFilter<"CustomerReview"> | string
    stage?: EnumContentStageWithAggregatesFilter<"CustomerReview"> | $Enums.ContentStage
  }

  export type EmployeeWhereInput = {
    AND?: EmployeeWhereInput | EmployeeWhereInput[]
    OR?: EmployeeWhereInput[]
    NOT?: EmployeeWhereInput | EmployeeWhereInput[]
    id?: StringFilter<"Employee"> | string
    createdAt?: DateTimeFilter<"Employee"> | Date | string
    updatedAt?: DateTimeFilter<"Employee"> | Date | string
    firstName?: StringFilter<"Employee"> | string
    lastName?: StringFilter<"Employee"> | string
    position?: StringFilter<"Employee"> | string
    slug?: StringFilter<"Employee"> | string
    dob?: DateTimeFilter<"Employee"> | Date | string
    userId?: StringNullableFilter<"Employee"> | string | null
    stage?: EnumContentStageFilter<"Employee"> | $Enums.ContentStage
    joinedAt?: DateTimeFilter<"Employee"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type EmployeeOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    position?: SortOrder
    slug?: SortOrder
    dob?: SortOrder
    userId?: SortOrderInput | SortOrder
    stage?: SortOrder
    joinedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type EmployeeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    userId?: string
    AND?: EmployeeWhereInput | EmployeeWhereInput[]
    OR?: EmployeeWhereInput[]
    NOT?: EmployeeWhereInput | EmployeeWhereInput[]
    createdAt?: DateTimeFilter<"Employee"> | Date | string
    updatedAt?: DateTimeFilter<"Employee"> | Date | string
    firstName?: StringFilter<"Employee"> | string
    lastName?: StringFilter<"Employee"> | string
    position?: StringFilter<"Employee"> | string
    dob?: DateTimeFilter<"Employee"> | Date | string
    stage?: EnumContentStageFilter<"Employee"> | $Enums.ContentStage
    joinedAt?: DateTimeFilter<"Employee"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id" | "slug" | "userId">

  export type EmployeeOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    position?: SortOrder
    slug?: SortOrder
    dob?: SortOrder
    userId?: SortOrderInput | SortOrder
    stage?: SortOrder
    joinedAt?: SortOrder
    _count?: EmployeeCountOrderByAggregateInput
    _max?: EmployeeMaxOrderByAggregateInput
    _min?: EmployeeMinOrderByAggregateInput
  }

  export type EmployeeScalarWhereWithAggregatesInput = {
    AND?: EmployeeScalarWhereWithAggregatesInput | EmployeeScalarWhereWithAggregatesInput[]
    OR?: EmployeeScalarWhereWithAggregatesInput[]
    NOT?: EmployeeScalarWhereWithAggregatesInput | EmployeeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Employee"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Employee"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Employee"> | Date | string
    firstName?: StringWithAggregatesFilter<"Employee"> | string
    lastName?: StringWithAggregatesFilter<"Employee"> | string
    position?: StringWithAggregatesFilter<"Employee"> | string
    slug?: StringWithAggregatesFilter<"Employee"> | string
    dob?: DateTimeWithAggregatesFilter<"Employee"> | Date | string
    userId?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    stage?: EnumContentStageWithAggregatesFilter<"Employee"> | $Enums.ContentStage
    joinedAt?: DateTimeWithAggregatesFilter<"Employee"> | Date | string
  }

  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: StringFilter<"Project"> | string
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    title?: StringFilter<"Project"> | string
    description?: StringFilter<"Project"> | string
    content?: StringFilter<"Project"> | string
    stage?: EnumContentStageFilter<"Project"> | $Enums.ContentStage
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    description?: SortOrder
    content?: SortOrder
    stage?: SortOrder
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    title?: StringFilter<"Project"> | string
    description?: StringFilter<"Project"> | string
    content?: StringFilter<"Project"> | string
    stage?: EnumContentStageFilter<"Project"> | $Enums.ContentStage
  }, "id">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    description?: SortOrder
    content?: SortOrder
    stage?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Project"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    title?: StringWithAggregatesFilter<"Project"> | string
    description?: StringWithAggregatesFilter<"Project"> | string
    content?: StringWithAggregatesFilter<"Project"> | string
    stage?: EnumContentStageWithAggregatesFilter<"Project"> | $Enums.ContentStage
  }

  export type ServiceWhereInput = {
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    id?: StringFilter<"Service"> | string
    createdAt?: DateTimeFilter<"Service"> | Date | string
    updatedAt?: DateTimeFilter<"Service"> | Date | string
    title?: StringFilter<"Service"> | string
    description?: StringFilter<"Service"> | string
    content?: StringFilter<"Service"> | string
    stage?: EnumContentStageFilter<"Service"> | $Enums.ContentStage
  }

  export type ServiceOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    description?: SortOrder
    content?: SortOrder
    stage?: SortOrder
  }

  export type ServiceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    createdAt?: DateTimeFilter<"Service"> | Date | string
    updatedAt?: DateTimeFilter<"Service"> | Date | string
    title?: StringFilter<"Service"> | string
    description?: StringFilter<"Service"> | string
    content?: StringFilter<"Service"> | string
    stage?: EnumContentStageFilter<"Service"> | $Enums.ContentStage
  }, "id">

  export type ServiceOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    description?: SortOrder
    content?: SortOrder
    stage?: SortOrder
    _count?: ServiceCountOrderByAggregateInput
    _max?: ServiceMaxOrderByAggregateInput
    _min?: ServiceMinOrderByAggregateInput
  }

  export type ServiceScalarWhereWithAggregatesInput = {
    AND?: ServiceScalarWhereWithAggregatesInput | ServiceScalarWhereWithAggregatesInput[]
    OR?: ServiceScalarWhereWithAggregatesInput[]
    NOT?: ServiceScalarWhereWithAggregatesInput | ServiceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Service"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Service"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Service"> | Date | string
    title?: StringWithAggregatesFilter<"Service"> | string
    description?: StringWithAggregatesFilter<"Service"> | string
    content?: StringWithAggregatesFilter<"Service"> | string
    stage?: EnumContentStageWithAggregatesFilter<"Service"> | $Enums.ContentStage
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    accessType?: EnumAccessTypeFilter<"User"> | $Enums.AccessType
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    roles?: UserRoleListRelationFilter
    employee?: XOR<EmployeeNullableScalarRelationFilter, EmployeeWhereInput> | null
    comments?: BlogCommentListRelationFilter
    reactions?: BlogReactionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    accessType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    roles?: UserRoleOrderByRelationAggregateInput
    employee?: EmployeeOrderByWithRelationInput
    comments?: BlogCommentOrderByRelationAggregateInput
    reactions?: BlogReactionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    accessType?: EnumAccessTypeFilter<"User"> | $Enums.AccessType
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    roles?: UserRoleListRelationFilter
    employee?: XOR<EmployeeNullableScalarRelationFilter, EmployeeWhereInput> | null
    comments?: BlogCommentListRelationFilter
    reactions?: BlogReactionListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    accessType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    accessType?: EnumAccessTypeWithAggregatesFilter<"User"> | $Enums.AccessType
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type UserRoleWhereInput = {
    AND?: UserRoleWhereInput | UserRoleWhereInput[]
    OR?: UserRoleWhereInput[]
    NOT?: UserRoleWhereInput | UserRoleWhereInput[]
    id?: StringFilter<"UserRole"> | string
    name?: StringFilter<"UserRole"> | string
    description?: StringNullableFilter<"UserRole"> | string | null
    createdAt?: DateTimeFilter<"UserRole"> | Date | string
    updatedAt?: DateTimeFilter<"UserRole"> | Date | string
    permissions?: UserRolePermissionListRelationFilter
    users?: UserListRelationFilter
  }

  export type UserRoleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    permissions?: UserRolePermissionOrderByRelationAggregateInput
    users?: UserOrderByRelationAggregateInput
  }

  export type UserRoleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: UserRoleWhereInput | UserRoleWhereInput[]
    OR?: UserRoleWhereInput[]
    NOT?: UserRoleWhereInput | UserRoleWhereInput[]
    description?: StringNullableFilter<"UserRole"> | string | null
    createdAt?: DateTimeFilter<"UserRole"> | Date | string
    updatedAt?: DateTimeFilter<"UserRole"> | Date | string
    permissions?: UserRolePermissionListRelationFilter
    users?: UserListRelationFilter
  }, "id" | "name">

  export type UserRoleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserRoleCountOrderByAggregateInput
    _max?: UserRoleMaxOrderByAggregateInput
    _min?: UserRoleMinOrderByAggregateInput
  }

  export type UserRoleScalarWhereWithAggregatesInput = {
    AND?: UserRoleScalarWhereWithAggregatesInput | UserRoleScalarWhereWithAggregatesInput[]
    OR?: UserRoleScalarWhereWithAggregatesInput[]
    NOT?: UserRoleScalarWhereWithAggregatesInput | UserRoleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserRole"> | string
    name?: StringWithAggregatesFilter<"UserRole"> | string
    description?: StringNullableWithAggregatesFilter<"UserRole"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"UserRole"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserRole"> | Date | string
  }

  export type UserRolePermissionWhereInput = {
    AND?: UserRolePermissionWhereInput | UserRolePermissionWhereInput[]
    OR?: UserRolePermissionWhereInput[]
    NOT?: UserRolePermissionWhereInput | UserRolePermissionWhereInput[]
    id?: StringFilter<"UserRolePermission"> | string
    name?: EnumPermissionNameFilter<"UserRolePermission"> | $Enums.PermissionName
    actions?: EnumPermissionActionNullableListFilter<"UserRolePermission">
    roleId?: StringFilter<"UserRolePermission"> | string
    createdAt?: DateTimeFilter<"UserRolePermission"> | Date | string
    updatedAt?: DateTimeFilter<"UserRolePermission"> | Date | string
    role?: XOR<UserRoleScalarRelationFilter, UserRoleWhereInput>
  }

  export type UserRolePermissionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    actions?: SortOrder
    roleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: UserRoleOrderByWithRelationInput
  }

  export type UserRolePermissionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    roleId_name?: UserRolePermissionRoleIdNameCompoundUniqueInput
    AND?: UserRolePermissionWhereInput | UserRolePermissionWhereInput[]
    OR?: UserRolePermissionWhereInput[]
    NOT?: UserRolePermissionWhereInput | UserRolePermissionWhereInput[]
    name?: EnumPermissionNameFilter<"UserRolePermission"> | $Enums.PermissionName
    actions?: EnumPermissionActionNullableListFilter<"UserRolePermission">
    roleId?: StringFilter<"UserRolePermission"> | string
    createdAt?: DateTimeFilter<"UserRolePermission"> | Date | string
    updatedAt?: DateTimeFilter<"UserRolePermission"> | Date | string
    role?: XOR<UserRoleScalarRelationFilter, UserRoleWhereInput>
  }, "id" | "roleId_name">

  export type UserRolePermissionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    actions?: SortOrder
    roleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserRolePermissionCountOrderByAggregateInput
    _max?: UserRolePermissionMaxOrderByAggregateInput
    _min?: UserRolePermissionMinOrderByAggregateInput
  }

  export type UserRolePermissionScalarWhereWithAggregatesInput = {
    AND?: UserRolePermissionScalarWhereWithAggregatesInput | UserRolePermissionScalarWhereWithAggregatesInput[]
    OR?: UserRolePermissionScalarWhereWithAggregatesInput[]
    NOT?: UserRolePermissionScalarWhereWithAggregatesInput | UserRolePermissionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserRolePermission"> | string
    name?: EnumPermissionNameWithAggregatesFilter<"UserRolePermission"> | $Enums.PermissionName
    actions?: EnumPermissionActionNullableListFilter<"UserRolePermission">
    roleId?: StringWithAggregatesFilter<"UserRolePermission"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UserRolePermission"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserRolePermission"> | Date | string
  }

  export type BlogArticleCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    slug: string
    description: string
    content: string
    stage?: $Enums.ContentStage
    commentsCount?: number
    reactionCount?: number
    category: BlogCategoryCreateNestedOneWithoutBlogArticleInput
    comments?: BlogCommentCreateNestedManyWithoutArticleInput
    BlogReaction?: BlogReactionCreateNestedManyWithoutArticleInput
  }

  export type BlogArticleUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    slug: string
    description: string
    content: string
    stage?: $Enums.ContentStage
    categoryId: string
    commentsCount?: number
    reactionCount?: number
    comments?: BlogCommentUncheckedCreateNestedManyWithoutArticleInput
    BlogReaction?: BlogReactionUncheckedCreateNestedManyWithoutArticleInput
  }

  export type BlogArticleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    stage?: EnumContentStageFieldUpdateOperationsInput | $Enums.ContentStage
    commentsCount?: IntFieldUpdateOperationsInput | number
    reactionCount?: IntFieldUpdateOperationsInput | number
    category?: BlogCategoryUpdateOneRequiredWithoutBlogArticleNestedInput
    comments?: BlogCommentUpdateManyWithoutArticleNestedInput
    BlogReaction?: BlogReactionUpdateManyWithoutArticleNestedInput
  }

  export type BlogArticleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    stage?: EnumContentStageFieldUpdateOperationsInput | $Enums.ContentStage
    categoryId?: StringFieldUpdateOperationsInput | string
    commentsCount?: IntFieldUpdateOperationsInput | number
    reactionCount?: IntFieldUpdateOperationsInput | number
    comments?: BlogCommentUncheckedUpdateManyWithoutArticleNestedInput
    BlogReaction?: BlogReactionUncheckedUpdateManyWithoutArticleNestedInput
  }

  export type BlogArticleCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    slug: string
    description: string
    content: string
    stage?: $Enums.ContentStage
    categoryId: string
    commentsCount?: number
    reactionCount?: number
  }

  export type BlogArticleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    stage?: EnumContentStageFieldUpdateOperationsInput | $Enums.ContentStage
    commentsCount?: IntFieldUpdateOperationsInput | number
    reactionCount?: IntFieldUpdateOperationsInput | number
  }

  export type BlogArticleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    stage?: EnumContentStageFieldUpdateOperationsInput | $Enums.ContentStage
    categoryId?: StringFieldUpdateOperationsInput | string
    commentsCount?: IntFieldUpdateOperationsInput | number
    reactionCount?: IntFieldUpdateOperationsInput | number
  }

  export type BlogCategoryCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    slug: string
    description: string
    BlogArticle?: BlogArticleCreateNestedManyWithoutCategoryInput
  }

  export type BlogCategoryUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    slug: string
    description: string
    BlogArticle?: BlogArticleUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type BlogCategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    BlogArticle?: BlogArticleUpdateManyWithoutCategoryNestedInput
  }

  export type BlogCategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    BlogArticle?: BlogArticleUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type BlogCategoryCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    slug: string
    description: string
  }

  export type BlogCategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type BlogCategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type BlogCommentCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    content: string
    stage?: $Enums.ContentStage
    article: BlogArticleCreateNestedOneWithoutCommentsInput
    user: UserCreateNestedOneWithoutCommentsInput
  }

  export type BlogCommentUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    content: string
    articleId: string
    userId: string
    stage?: $Enums.ContentStage
  }

  export type BlogCommentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    stage?: EnumContentStageFieldUpdateOperationsInput | $Enums.ContentStage
    article?: BlogArticleUpdateOneRequiredWithoutCommentsNestedInput
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type BlogCommentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    articleId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    stage?: EnumContentStageFieldUpdateOperationsInput | $Enums.ContentStage
  }

  export type BlogCommentCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    content: string
    articleId: string
    userId: string
    stage?: $Enums.ContentStage
  }

  export type BlogCommentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    stage?: EnumContentStageFieldUpdateOperationsInput | $Enums.ContentStage
  }

  export type BlogCommentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    articleId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    stage?: EnumContentStageFieldUpdateOperationsInput | $Enums.ContentStage
  }

  export type BlogReactionCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    type: $Enums.ReactionType
    article: BlogArticleCreateNestedOneWithoutBlogReactionInput
    user: UserCreateNestedOneWithoutReactionsInput
  }

  export type BlogReactionUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    articleId: string
    userId: string
    type: $Enums.ReactionType
  }

  export type BlogReactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumReactionTypeFieldUpdateOperationsInput | $Enums.ReactionType
    article?: BlogArticleUpdateOneRequiredWithoutBlogReactionNestedInput
    user?: UserUpdateOneRequiredWithoutReactionsNestedInput
  }

  export type BlogReactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    articleId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumReactionTypeFieldUpdateOperationsInput | $Enums.ReactionType
  }

  export type BlogReactionCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    articleId: string
    userId: string
    type: $Enums.ReactionType
  }

  export type BlogReactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumReactionTypeFieldUpdateOperationsInput | $Enums.ReactionType
  }

  export type BlogReactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    articleId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumReactionTypeFieldUpdateOperationsInput | $Enums.ReactionType
  }

  export type CustomerCompanyCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    stage?: $Enums.ContentStage
  }

  export type CustomerCompanyUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    stage?: $Enums.ContentStage
  }

  export type CustomerCompanyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    stage?: EnumContentStageFieldUpdateOperationsInput | $Enums.ContentStage
  }

  export type CustomerCompanyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    stage?: EnumContentStageFieldUpdateOperationsInput | $Enums.ContentStage
  }

  export type CustomerCompanyCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    stage?: $Enums.ContentStage
  }

  export type CustomerCompanyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    stage?: EnumContentStageFieldUpdateOperationsInput | $Enums.ContentStage
  }

  export type CustomerCompanyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    stage?: EnumContentStageFieldUpdateOperationsInput | $Enums.ContentStage
  }

  export type CustomerReviewCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    authorName: string
    authorPosition: string
    authorCompany: string
    content: string
    stage?: $Enums.ContentStage
  }

  export type CustomerReviewUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    authorName: string
    authorPosition: string
    authorCompany: string
    content: string
    stage?: $Enums.ContentStage
  }

  export type CustomerReviewUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorName?: StringFieldUpdateOperationsInput | string
    authorPosition?: StringFieldUpdateOperationsInput | string
    authorCompany?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    stage?: EnumContentStageFieldUpdateOperationsInput | $Enums.ContentStage
  }

  export type CustomerReviewUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorName?: StringFieldUpdateOperationsInput | string
    authorPosition?: StringFieldUpdateOperationsInput | string
    authorCompany?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    stage?: EnumContentStageFieldUpdateOperationsInput | $Enums.ContentStage
  }

  export type CustomerReviewCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    authorName: string
    authorPosition: string
    authorCompany: string
    content: string
    stage?: $Enums.ContentStage
  }

  export type CustomerReviewUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorName?: StringFieldUpdateOperationsInput | string
    authorPosition?: StringFieldUpdateOperationsInput | string
    authorCompany?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    stage?: EnumContentStageFieldUpdateOperationsInput | $Enums.ContentStage
  }

  export type CustomerReviewUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorName?: StringFieldUpdateOperationsInput | string
    authorPosition?: StringFieldUpdateOperationsInput | string
    authorCompany?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    stage?: EnumContentStageFieldUpdateOperationsInput | $Enums.ContentStage
  }

  export type EmployeeCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    firstName: string
    lastName: string
    position: string
    slug: string
    dob: Date | string
    stage?: $Enums.ContentStage
    joinedAt: Date | string
    user?: UserCreateNestedOneWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    firstName: string
    lastName: string
    position: string
    slug: string
    dob: Date | string
    userId?: string | null
    stage?: $Enums.ContentStage
    joinedAt: Date | string
  }

  export type EmployeeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    stage?: EnumContentStageFieldUpdateOperationsInput | $Enums.ContentStage
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    stage?: EnumContentStageFieldUpdateOperationsInput | $Enums.ContentStage
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    firstName: string
    lastName: string
    position: string
    slug: string
    dob: Date | string
    userId?: string | null
    stage?: $Enums.ContentStage
    joinedAt: Date | string
  }

  export type EmployeeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    stage?: EnumContentStageFieldUpdateOperationsInput | $Enums.ContentStage
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    stage?: EnumContentStageFieldUpdateOperationsInput | $Enums.ContentStage
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description: string
    content: string
    stage?: $Enums.ContentStage
  }

  export type ProjectUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description: string
    content: string
    stage?: $Enums.ContentStage
  }

  export type ProjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    stage?: EnumContentStageFieldUpdateOperationsInput | $Enums.ContentStage
  }

  export type ProjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    stage?: EnumContentStageFieldUpdateOperationsInput | $Enums.ContentStage
  }

  export type ProjectCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description: string
    content: string
    stage?: $Enums.ContentStage
  }

  export type ProjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    stage?: EnumContentStageFieldUpdateOperationsInput | $Enums.ContentStage
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    stage?: EnumContentStageFieldUpdateOperationsInput | $Enums.ContentStage
  }

  export type ServiceCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description: string
    content: string
    stage?: $Enums.ContentStage
  }

  export type ServiceUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description: string
    content: string
    stage?: $Enums.ContentStage
  }

  export type ServiceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    stage?: EnumContentStageFieldUpdateOperationsInput | $Enums.ContentStage
  }

  export type ServiceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    stage?: EnumContentStageFieldUpdateOperationsInput | $Enums.ContentStage
  }

  export type ServiceCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description: string
    content: string
    stage?: $Enums.ContentStage
  }

  export type ServiceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    stage?: EnumContentStageFieldUpdateOperationsInput | $Enums.ContentStage
  }

  export type ServiceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    stage?: EnumContentStageFieldUpdateOperationsInput | $Enums.ContentStage
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    name: string
    accessType?: $Enums.AccessType
    createdAt?: Date | string
    updatedAt?: Date | string
    roles?: UserRoleCreateNestedManyWithoutUsersInput
    employee?: EmployeeCreateNestedOneWithoutUserInput
    comments?: BlogCommentCreateNestedManyWithoutUserInput
    reactions?: BlogReactionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    name: string
    accessType?: $Enums.AccessType
    createdAt?: Date | string
    updatedAt?: Date | string
    roles?: UserRoleUncheckedCreateNestedManyWithoutUsersInput
    employee?: EmployeeUncheckedCreateNestedOneWithoutUserInput
    comments?: BlogCommentUncheckedCreateNestedManyWithoutUserInput
    reactions?: BlogReactionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    accessType?: EnumAccessTypeFieldUpdateOperationsInput | $Enums.AccessType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: UserRoleUpdateManyWithoutUsersNestedInput
    employee?: EmployeeUpdateOneWithoutUserNestedInput
    comments?: BlogCommentUpdateManyWithoutUserNestedInput
    reactions?: BlogReactionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    accessType?: EnumAccessTypeFieldUpdateOperationsInput | $Enums.AccessType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: UserRoleUncheckedUpdateManyWithoutUsersNestedInput
    employee?: EmployeeUncheckedUpdateOneWithoutUserNestedInput
    comments?: BlogCommentUncheckedUpdateManyWithoutUserNestedInput
    reactions?: BlogReactionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    name: string
    accessType?: $Enums.AccessType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    accessType?: EnumAccessTypeFieldUpdateOperationsInput | $Enums.AccessType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    accessType?: EnumAccessTypeFieldUpdateOperationsInput | $Enums.AccessType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRoleCreateInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    permissions?: UserRolePermissionCreateNestedManyWithoutRoleInput
    users?: UserCreateNestedManyWithoutRolesInput
  }

  export type UserRoleUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    permissions?: UserRolePermissionUncheckedCreateNestedManyWithoutRoleInput
    users?: UserUncheckedCreateNestedManyWithoutRolesInput
  }

  export type UserRoleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    permissions?: UserRolePermissionUpdateManyWithoutRoleNestedInput
    users?: UserUpdateManyWithoutRolesNestedInput
  }

  export type UserRoleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    permissions?: UserRolePermissionUncheckedUpdateManyWithoutRoleNestedInput
    users?: UserUncheckedUpdateManyWithoutRolesNestedInput
  }

  export type UserRoleCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserRoleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRoleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRolePermissionCreateInput = {
    id?: string
    name: $Enums.PermissionName
    actions?: UserRolePermissionCreateactionsInput | $Enums.PermissionAction[]
    createdAt?: Date | string
    updatedAt?: Date | string
    role: UserRoleCreateNestedOneWithoutPermissionsInput
  }

  export type UserRolePermissionUncheckedCreateInput = {
    id?: string
    name: $Enums.PermissionName
    actions?: UserRolePermissionCreateactionsInput | $Enums.PermissionAction[]
    roleId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserRolePermissionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: EnumPermissionNameFieldUpdateOperationsInput | $Enums.PermissionName
    actions?: UserRolePermissionUpdateactionsInput | $Enums.PermissionAction[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: UserRoleUpdateOneRequiredWithoutPermissionsNestedInput
  }

  export type UserRolePermissionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: EnumPermissionNameFieldUpdateOperationsInput | $Enums.PermissionName
    actions?: UserRolePermissionUpdateactionsInput | $Enums.PermissionAction[]
    roleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRolePermissionCreateManyInput = {
    id?: string
    name: $Enums.PermissionName
    actions?: UserRolePermissionCreateactionsInput | $Enums.PermissionAction[]
    roleId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserRolePermissionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: EnumPermissionNameFieldUpdateOperationsInput | $Enums.PermissionName
    actions?: UserRolePermissionUpdateactionsInput | $Enums.PermissionAction[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRolePermissionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: EnumPermissionNameFieldUpdateOperationsInput | $Enums.PermissionName
    actions?: UserRolePermissionUpdateactionsInput | $Enums.PermissionAction[]
    roleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EnumContentStageFilter<$PrismaModel = never> = {
    equals?: $Enums.ContentStage | EnumContentStageFieldRefInput<$PrismaModel>
    in?: $Enums.ContentStage[] | ListEnumContentStageFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContentStage[] | ListEnumContentStageFieldRefInput<$PrismaModel>
    not?: NestedEnumContentStageFilter<$PrismaModel> | $Enums.ContentStage
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BlogCategoryScalarRelationFilter = {
    is?: BlogCategoryWhereInput
    isNot?: BlogCategoryWhereInput
  }

  export type BlogCommentListRelationFilter = {
    every?: BlogCommentWhereInput
    some?: BlogCommentWhereInput
    none?: BlogCommentWhereInput
  }

  export type BlogReactionListRelationFilter = {
    every?: BlogReactionWhereInput
    some?: BlogReactionWhereInput
    none?: BlogReactionWhereInput
  }

  export type BlogCommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BlogReactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BlogArticleCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    content?: SortOrder
    stage?: SortOrder
    categoryId?: SortOrder
    commentsCount?: SortOrder
    reactionCount?: SortOrder
  }

  export type BlogArticleAvgOrderByAggregateInput = {
    commentsCount?: SortOrder
    reactionCount?: SortOrder
  }

  export type BlogArticleMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    content?: SortOrder
    stage?: SortOrder
    categoryId?: SortOrder
    commentsCount?: SortOrder
    reactionCount?: SortOrder
  }

  export type BlogArticleMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    content?: SortOrder
    stage?: SortOrder
    categoryId?: SortOrder
    commentsCount?: SortOrder
    reactionCount?: SortOrder
  }

  export type BlogArticleSumOrderByAggregateInput = {
    commentsCount?: SortOrder
    reactionCount?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumContentStageWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ContentStage | EnumContentStageFieldRefInput<$PrismaModel>
    in?: $Enums.ContentStage[] | ListEnumContentStageFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContentStage[] | ListEnumContentStageFieldRefInput<$PrismaModel>
    not?: NestedEnumContentStageWithAggregatesFilter<$PrismaModel> | $Enums.ContentStage
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumContentStageFilter<$PrismaModel>
    _max?: NestedEnumContentStageFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BlogArticleListRelationFilter = {
    every?: BlogArticleWhereInput
    some?: BlogArticleWhereInput
    none?: BlogArticleWhereInput
  }

  export type BlogArticleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BlogCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrder
  }

  export type BlogCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrder
  }

  export type BlogCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrder
  }

  export type BlogArticleScalarRelationFilter = {
    is?: BlogArticleWhereInput
    isNot?: BlogArticleWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type BlogCommentCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    content?: SortOrder
    articleId?: SortOrder
    userId?: SortOrder
    stage?: SortOrder
  }

  export type BlogCommentMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    content?: SortOrder
    articleId?: SortOrder
    userId?: SortOrder
    stage?: SortOrder
  }

  export type BlogCommentMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    content?: SortOrder
    articleId?: SortOrder
    userId?: SortOrder
    stage?: SortOrder
  }

  export type EnumReactionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ReactionType | EnumReactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ReactionType[] | ListEnumReactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReactionType[] | ListEnumReactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumReactionTypeFilter<$PrismaModel> | $Enums.ReactionType
  }

  export type BlogReactionUserId_articleIdCompoundUniqueInput = {
    userId: string
    articleId: string
  }

  export type BlogReactionCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    articleId?: SortOrder
    userId?: SortOrder
    type?: SortOrder
  }

  export type BlogReactionMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    articleId?: SortOrder
    userId?: SortOrder
    type?: SortOrder
  }

  export type BlogReactionMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    articleId?: SortOrder
    userId?: SortOrder
    type?: SortOrder
  }

  export type EnumReactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReactionType | EnumReactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ReactionType[] | ListEnumReactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReactionType[] | ListEnumReactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumReactionTypeWithAggregatesFilter<$PrismaModel> | $Enums.ReactionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReactionTypeFilter<$PrismaModel>
    _max?: NestedEnumReactionTypeFilter<$PrismaModel>
  }

  export type CustomerCompanyCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    stage?: SortOrder
  }

  export type CustomerCompanyMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    stage?: SortOrder
  }

  export type CustomerCompanyMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    stage?: SortOrder
  }

  export type CustomerReviewCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    authorName?: SortOrder
    authorPosition?: SortOrder
    authorCompany?: SortOrder
    content?: SortOrder
    stage?: SortOrder
  }

  export type CustomerReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    authorName?: SortOrder
    authorPosition?: SortOrder
    authorCompany?: SortOrder
    content?: SortOrder
    stage?: SortOrder
  }

  export type CustomerReviewMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    authorName?: SortOrder
    authorPosition?: SortOrder
    authorCompany?: SortOrder
    content?: SortOrder
    stage?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type EmployeeCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    position?: SortOrder
    slug?: SortOrder
    dob?: SortOrder
    userId?: SortOrder
    stage?: SortOrder
    joinedAt?: SortOrder
  }

  export type EmployeeMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    position?: SortOrder
    slug?: SortOrder
    dob?: SortOrder
    userId?: SortOrder
    stage?: SortOrder
    joinedAt?: SortOrder
  }

  export type EmployeeMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    position?: SortOrder
    slug?: SortOrder
    dob?: SortOrder
    userId?: SortOrder
    stage?: SortOrder
    joinedAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    description?: SortOrder
    content?: SortOrder
    stage?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    description?: SortOrder
    content?: SortOrder
    stage?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    description?: SortOrder
    content?: SortOrder
    stage?: SortOrder
  }

  export type ServiceCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    description?: SortOrder
    content?: SortOrder
    stage?: SortOrder
  }

  export type ServiceMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    description?: SortOrder
    content?: SortOrder
    stage?: SortOrder
  }

  export type ServiceMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    description?: SortOrder
    content?: SortOrder
    stage?: SortOrder
  }

  export type EnumAccessTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AccessType | EnumAccessTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AccessType[] | ListEnumAccessTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccessType[] | ListEnumAccessTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAccessTypeFilter<$PrismaModel> | $Enums.AccessType
  }

  export type UserRoleListRelationFilter = {
    every?: UserRoleWhereInput
    some?: UserRoleWhereInput
    none?: UserRoleWhereInput
  }

  export type EmployeeNullableScalarRelationFilter = {
    is?: EmployeeWhereInput | null
    isNot?: EmployeeWhereInput | null
  }

  export type UserRoleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    accessType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    accessType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    accessType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumAccessTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AccessType | EnumAccessTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AccessType[] | ListEnumAccessTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccessType[] | ListEnumAccessTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAccessTypeWithAggregatesFilter<$PrismaModel> | $Enums.AccessType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAccessTypeFilter<$PrismaModel>
    _max?: NestedEnumAccessTypeFilter<$PrismaModel>
  }

  export type UserRolePermissionListRelationFilter = {
    every?: UserRolePermissionWhereInput
    some?: UserRolePermissionWhereInput
    none?: UserRolePermissionWhereInput
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserRolePermissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserRoleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserRoleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserRoleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumPermissionNameFilter<$PrismaModel = never> = {
    equals?: $Enums.PermissionName | EnumPermissionNameFieldRefInput<$PrismaModel>
    in?: $Enums.PermissionName[] | ListEnumPermissionNameFieldRefInput<$PrismaModel>
    notIn?: $Enums.PermissionName[] | ListEnumPermissionNameFieldRefInput<$PrismaModel>
    not?: NestedEnumPermissionNameFilter<$PrismaModel> | $Enums.PermissionName
  }

  export type EnumPermissionActionNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.PermissionAction[] | ListEnumPermissionActionFieldRefInput<$PrismaModel> | null
    has?: $Enums.PermissionAction | EnumPermissionActionFieldRefInput<$PrismaModel> | null
    hasEvery?: $Enums.PermissionAction[] | ListEnumPermissionActionFieldRefInput<$PrismaModel>
    hasSome?: $Enums.PermissionAction[] | ListEnumPermissionActionFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type UserRoleScalarRelationFilter = {
    is?: UserRoleWhereInput
    isNot?: UserRoleWhereInput
  }

  export type UserRolePermissionRoleIdNameCompoundUniqueInput = {
    roleId: string
    name: $Enums.PermissionName
  }

  export type UserRolePermissionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    actions?: SortOrder
    roleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserRolePermissionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    roleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserRolePermissionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    roleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumPermissionNameWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PermissionName | EnumPermissionNameFieldRefInput<$PrismaModel>
    in?: $Enums.PermissionName[] | ListEnumPermissionNameFieldRefInput<$PrismaModel>
    notIn?: $Enums.PermissionName[] | ListEnumPermissionNameFieldRefInput<$PrismaModel>
    not?: NestedEnumPermissionNameWithAggregatesFilter<$PrismaModel> | $Enums.PermissionName
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPermissionNameFilter<$PrismaModel>
    _max?: NestedEnumPermissionNameFilter<$PrismaModel>
  }

  export type BlogCategoryCreateNestedOneWithoutBlogArticleInput = {
    create?: XOR<BlogCategoryCreateWithoutBlogArticleInput, BlogCategoryUncheckedCreateWithoutBlogArticleInput>
    connectOrCreate?: BlogCategoryCreateOrConnectWithoutBlogArticleInput
    connect?: BlogCategoryWhereUniqueInput
  }

  export type BlogCommentCreateNestedManyWithoutArticleInput = {
    create?: XOR<BlogCommentCreateWithoutArticleInput, BlogCommentUncheckedCreateWithoutArticleInput> | BlogCommentCreateWithoutArticleInput[] | BlogCommentUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: BlogCommentCreateOrConnectWithoutArticleInput | BlogCommentCreateOrConnectWithoutArticleInput[]
    createMany?: BlogCommentCreateManyArticleInputEnvelope
    connect?: BlogCommentWhereUniqueInput | BlogCommentWhereUniqueInput[]
  }

  export type BlogReactionCreateNestedManyWithoutArticleInput = {
    create?: XOR<BlogReactionCreateWithoutArticleInput, BlogReactionUncheckedCreateWithoutArticleInput> | BlogReactionCreateWithoutArticleInput[] | BlogReactionUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: BlogReactionCreateOrConnectWithoutArticleInput | BlogReactionCreateOrConnectWithoutArticleInput[]
    createMany?: BlogReactionCreateManyArticleInputEnvelope
    connect?: BlogReactionWhereUniqueInput | BlogReactionWhereUniqueInput[]
  }

  export type BlogCommentUncheckedCreateNestedManyWithoutArticleInput = {
    create?: XOR<BlogCommentCreateWithoutArticleInput, BlogCommentUncheckedCreateWithoutArticleInput> | BlogCommentCreateWithoutArticleInput[] | BlogCommentUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: BlogCommentCreateOrConnectWithoutArticleInput | BlogCommentCreateOrConnectWithoutArticleInput[]
    createMany?: BlogCommentCreateManyArticleInputEnvelope
    connect?: BlogCommentWhereUniqueInput | BlogCommentWhereUniqueInput[]
  }

  export type BlogReactionUncheckedCreateNestedManyWithoutArticleInput = {
    create?: XOR<BlogReactionCreateWithoutArticleInput, BlogReactionUncheckedCreateWithoutArticleInput> | BlogReactionCreateWithoutArticleInput[] | BlogReactionUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: BlogReactionCreateOrConnectWithoutArticleInput | BlogReactionCreateOrConnectWithoutArticleInput[]
    createMany?: BlogReactionCreateManyArticleInputEnvelope
    connect?: BlogReactionWhereUniqueInput | BlogReactionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumContentStageFieldUpdateOperationsInput = {
    set?: $Enums.ContentStage
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BlogCategoryUpdateOneRequiredWithoutBlogArticleNestedInput = {
    create?: XOR<BlogCategoryCreateWithoutBlogArticleInput, BlogCategoryUncheckedCreateWithoutBlogArticleInput>
    connectOrCreate?: BlogCategoryCreateOrConnectWithoutBlogArticleInput
    upsert?: BlogCategoryUpsertWithoutBlogArticleInput
    connect?: BlogCategoryWhereUniqueInput
    update?: XOR<XOR<BlogCategoryUpdateToOneWithWhereWithoutBlogArticleInput, BlogCategoryUpdateWithoutBlogArticleInput>, BlogCategoryUncheckedUpdateWithoutBlogArticleInput>
  }

  export type BlogCommentUpdateManyWithoutArticleNestedInput = {
    create?: XOR<BlogCommentCreateWithoutArticleInput, BlogCommentUncheckedCreateWithoutArticleInput> | BlogCommentCreateWithoutArticleInput[] | BlogCommentUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: BlogCommentCreateOrConnectWithoutArticleInput | BlogCommentCreateOrConnectWithoutArticleInput[]
    upsert?: BlogCommentUpsertWithWhereUniqueWithoutArticleInput | BlogCommentUpsertWithWhereUniqueWithoutArticleInput[]
    createMany?: BlogCommentCreateManyArticleInputEnvelope
    set?: BlogCommentWhereUniqueInput | BlogCommentWhereUniqueInput[]
    disconnect?: BlogCommentWhereUniqueInput | BlogCommentWhereUniqueInput[]
    delete?: BlogCommentWhereUniqueInput | BlogCommentWhereUniqueInput[]
    connect?: BlogCommentWhereUniqueInput | BlogCommentWhereUniqueInput[]
    update?: BlogCommentUpdateWithWhereUniqueWithoutArticleInput | BlogCommentUpdateWithWhereUniqueWithoutArticleInput[]
    updateMany?: BlogCommentUpdateManyWithWhereWithoutArticleInput | BlogCommentUpdateManyWithWhereWithoutArticleInput[]
    deleteMany?: BlogCommentScalarWhereInput | BlogCommentScalarWhereInput[]
  }

  export type BlogReactionUpdateManyWithoutArticleNestedInput = {
    create?: XOR<BlogReactionCreateWithoutArticleInput, BlogReactionUncheckedCreateWithoutArticleInput> | BlogReactionCreateWithoutArticleInput[] | BlogReactionUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: BlogReactionCreateOrConnectWithoutArticleInput | BlogReactionCreateOrConnectWithoutArticleInput[]
    upsert?: BlogReactionUpsertWithWhereUniqueWithoutArticleInput | BlogReactionUpsertWithWhereUniqueWithoutArticleInput[]
    createMany?: BlogReactionCreateManyArticleInputEnvelope
    set?: BlogReactionWhereUniqueInput | BlogReactionWhereUniqueInput[]
    disconnect?: BlogReactionWhereUniqueInput | BlogReactionWhereUniqueInput[]
    delete?: BlogReactionWhereUniqueInput | BlogReactionWhereUniqueInput[]
    connect?: BlogReactionWhereUniqueInput | BlogReactionWhereUniqueInput[]
    update?: BlogReactionUpdateWithWhereUniqueWithoutArticleInput | BlogReactionUpdateWithWhereUniqueWithoutArticleInput[]
    updateMany?: BlogReactionUpdateManyWithWhereWithoutArticleInput | BlogReactionUpdateManyWithWhereWithoutArticleInput[]
    deleteMany?: BlogReactionScalarWhereInput | BlogReactionScalarWhereInput[]
  }

  export type BlogCommentUncheckedUpdateManyWithoutArticleNestedInput = {
    create?: XOR<BlogCommentCreateWithoutArticleInput, BlogCommentUncheckedCreateWithoutArticleInput> | BlogCommentCreateWithoutArticleInput[] | BlogCommentUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: BlogCommentCreateOrConnectWithoutArticleInput | BlogCommentCreateOrConnectWithoutArticleInput[]
    upsert?: BlogCommentUpsertWithWhereUniqueWithoutArticleInput | BlogCommentUpsertWithWhereUniqueWithoutArticleInput[]
    createMany?: BlogCommentCreateManyArticleInputEnvelope
    set?: BlogCommentWhereUniqueInput | BlogCommentWhereUniqueInput[]
    disconnect?: BlogCommentWhereUniqueInput | BlogCommentWhereUniqueInput[]
    delete?: BlogCommentWhereUniqueInput | BlogCommentWhereUniqueInput[]
    connect?: BlogCommentWhereUniqueInput | BlogCommentWhereUniqueInput[]
    update?: BlogCommentUpdateWithWhereUniqueWithoutArticleInput | BlogCommentUpdateWithWhereUniqueWithoutArticleInput[]
    updateMany?: BlogCommentUpdateManyWithWhereWithoutArticleInput | BlogCommentUpdateManyWithWhereWithoutArticleInput[]
    deleteMany?: BlogCommentScalarWhereInput | BlogCommentScalarWhereInput[]
  }

  export type BlogReactionUncheckedUpdateManyWithoutArticleNestedInput = {
    create?: XOR<BlogReactionCreateWithoutArticleInput, BlogReactionUncheckedCreateWithoutArticleInput> | BlogReactionCreateWithoutArticleInput[] | BlogReactionUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: BlogReactionCreateOrConnectWithoutArticleInput | BlogReactionCreateOrConnectWithoutArticleInput[]
    upsert?: BlogReactionUpsertWithWhereUniqueWithoutArticleInput | BlogReactionUpsertWithWhereUniqueWithoutArticleInput[]
    createMany?: BlogReactionCreateManyArticleInputEnvelope
    set?: BlogReactionWhereUniqueInput | BlogReactionWhereUniqueInput[]
    disconnect?: BlogReactionWhereUniqueInput | BlogReactionWhereUniqueInput[]
    delete?: BlogReactionWhereUniqueInput | BlogReactionWhereUniqueInput[]
    connect?: BlogReactionWhereUniqueInput | BlogReactionWhereUniqueInput[]
    update?: BlogReactionUpdateWithWhereUniqueWithoutArticleInput | BlogReactionUpdateWithWhereUniqueWithoutArticleInput[]
    updateMany?: BlogReactionUpdateManyWithWhereWithoutArticleInput | BlogReactionUpdateManyWithWhereWithoutArticleInput[]
    deleteMany?: BlogReactionScalarWhereInput | BlogReactionScalarWhereInput[]
  }

  export type BlogArticleCreateNestedManyWithoutCategoryInput = {
    create?: XOR<BlogArticleCreateWithoutCategoryInput, BlogArticleUncheckedCreateWithoutCategoryInput> | BlogArticleCreateWithoutCategoryInput[] | BlogArticleUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: BlogArticleCreateOrConnectWithoutCategoryInput | BlogArticleCreateOrConnectWithoutCategoryInput[]
    createMany?: BlogArticleCreateManyCategoryInputEnvelope
    connect?: BlogArticleWhereUniqueInput | BlogArticleWhereUniqueInput[]
  }

  export type BlogArticleUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<BlogArticleCreateWithoutCategoryInput, BlogArticleUncheckedCreateWithoutCategoryInput> | BlogArticleCreateWithoutCategoryInput[] | BlogArticleUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: BlogArticleCreateOrConnectWithoutCategoryInput | BlogArticleCreateOrConnectWithoutCategoryInput[]
    createMany?: BlogArticleCreateManyCategoryInputEnvelope
    connect?: BlogArticleWhereUniqueInput | BlogArticleWhereUniqueInput[]
  }

  export type BlogArticleUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<BlogArticleCreateWithoutCategoryInput, BlogArticleUncheckedCreateWithoutCategoryInput> | BlogArticleCreateWithoutCategoryInput[] | BlogArticleUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: BlogArticleCreateOrConnectWithoutCategoryInput | BlogArticleCreateOrConnectWithoutCategoryInput[]
    upsert?: BlogArticleUpsertWithWhereUniqueWithoutCategoryInput | BlogArticleUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: BlogArticleCreateManyCategoryInputEnvelope
    set?: BlogArticleWhereUniqueInput | BlogArticleWhereUniqueInput[]
    disconnect?: BlogArticleWhereUniqueInput | BlogArticleWhereUniqueInput[]
    delete?: BlogArticleWhereUniqueInput | BlogArticleWhereUniqueInput[]
    connect?: BlogArticleWhereUniqueInput | BlogArticleWhereUniqueInput[]
    update?: BlogArticleUpdateWithWhereUniqueWithoutCategoryInput | BlogArticleUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: BlogArticleUpdateManyWithWhereWithoutCategoryInput | BlogArticleUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: BlogArticleScalarWhereInput | BlogArticleScalarWhereInput[]
  }

  export type BlogArticleUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<BlogArticleCreateWithoutCategoryInput, BlogArticleUncheckedCreateWithoutCategoryInput> | BlogArticleCreateWithoutCategoryInput[] | BlogArticleUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: BlogArticleCreateOrConnectWithoutCategoryInput | BlogArticleCreateOrConnectWithoutCategoryInput[]
    upsert?: BlogArticleUpsertWithWhereUniqueWithoutCategoryInput | BlogArticleUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: BlogArticleCreateManyCategoryInputEnvelope
    set?: BlogArticleWhereUniqueInput | BlogArticleWhereUniqueInput[]
    disconnect?: BlogArticleWhereUniqueInput | BlogArticleWhereUniqueInput[]
    delete?: BlogArticleWhereUniqueInput | BlogArticleWhereUniqueInput[]
    connect?: BlogArticleWhereUniqueInput | BlogArticleWhereUniqueInput[]
    update?: BlogArticleUpdateWithWhereUniqueWithoutCategoryInput | BlogArticleUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: BlogArticleUpdateManyWithWhereWithoutCategoryInput | BlogArticleUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: BlogArticleScalarWhereInput | BlogArticleScalarWhereInput[]
  }

  export type BlogArticleCreateNestedOneWithoutCommentsInput = {
    create?: XOR<BlogArticleCreateWithoutCommentsInput, BlogArticleUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: BlogArticleCreateOrConnectWithoutCommentsInput
    connect?: BlogArticleWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCommentsInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    connect?: UserWhereUniqueInput
  }

  export type BlogArticleUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<BlogArticleCreateWithoutCommentsInput, BlogArticleUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: BlogArticleCreateOrConnectWithoutCommentsInput
    upsert?: BlogArticleUpsertWithoutCommentsInput
    connect?: BlogArticleWhereUniqueInput
    update?: XOR<XOR<BlogArticleUpdateToOneWithWhereWithoutCommentsInput, BlogArticleUpdateWithoutCommentsInput>, BlogArticleUncheckedUpdateWithoutCommentsInput>
  }

  export type UserUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    upsert?: UserUpsertWithoutCommentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCommentsInput, UserUpdateWithoutCommentsInput>, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type BlogArticleCreateNestedOneWithoutBlogReactionInput = {
    create?: XOR<BlogArticleCreateWithoutBlogReactionInput, BlogArticleUncheckedCreateWithoutBlogReactionInput>
    connectOrCreate?: BlogArticleCreateOrConnectWithoutBlogReactionInput
    connect?: BlogArticleWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReactionsInput = {
    create?: XOR<UserCreateWithoutReactionsInput, UserUncheckedCreateWithoutReactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReactionsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumReactionTypeFieldUpdateOperationsInput = {
    set?: $Enums.ReactionType
  }

  export type BlogArticleUpdateOneRequiredWithoutBlogReactionNestedInput = {
    create?: XOR<BlogArticleCreateWithoutBlogReactionInput, BlogArticleUncheckedCreateWithoutBlogReactionInput>
    connectOrCreate?: BlogArticleCreateOrConnectWithoutBlogReactionInput
    upsert?: BlogArticleUpsertWithoutBlogReactionInput
    connect?: BlogArticleWhereUniqueInput
    update?: XOR<XOR<BlogArticleUpdateToOneWithWhereWithoutBlogReactionInput, BlogArticleUpdateWithoutBlogReactionInput>, BlogArticleUncheckedUpdateWithoutBlogReactionInput>
  }

  export type UserUpdateOneRequiredWithoutReactionsNestedInput = {
    create?: XOR<UserCreateWithoutReactionsInput, UserUncheckedCreateWithoutReactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReactionsInput
    upsert?: UserUpsertWithoutReactionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReactionsInput, UserUpdateWithoutReactionsInput>, UserUncheckedUpdateWithoutReactionsInput>
  }

  export type UserCreateNestedOneWithoutEmployeeInput = {
    create?: XOR<UserCreateWithoutEmployeeInput, UserUncheckedCreateWithoutEmployeeInput>
    connectOrCreate?: UserCreateOrConnectWithoutEmployeeInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneWithoutEmployeeNestedInput = {
    create?: XOR<UserCreateWithoutEmployeeInput, UserUncheckedCreateWithoutEmployeeInput>
    connectOrCreate?: UserCreateOrConnectWithoutEmployeeInput
    upsert?: UserUpsertWithoutEmployeeInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEmployeeInput, UserUpdateWithoutEmployeeInput>, UserUncheckedUpdateWithoutEmployeeInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserRoleCreateNestedManyWithoutUsersInput = {
    create?: XOR<UserRoleCreateWithoutUsersInput, UserRoleUncheckedCreateWithoutUsersInput> | UserRoleCreateWithoutUsersInput[] | UserRoleUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutUsersInput | UserRoleCreateOrConnectWithoutUsersInput[]
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
  }

  export type EmployeeCreateNestedOneWithoutUserInput = {
    create?: XOR<EmployeeCreateWithoutUserInput, EmployeeUncheckedCreateWithoutUserInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutUserInput
    connect?: EmployeeWhereUniqueInput
  }

  export type BlogCommentCreateNestedManyWithoutUserInput = {
    create?: XOR<BlogCommentCreateWithoutUserInput, BlogCommentUncheckedCreateWithoutUserInput> | BlogCommentCreateWithoutUserInput[] | BlogCommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BlogCommentCreateOrConnectWithoutUserInput | BlogCommentCreateOrConnectWithoutUserInput[]
    createMany?: BlogCommentCreateManyUserInputEnvelope
    connect?: BlogCommentWhereUniqueInput | BlogCommentWhereUniqueInput[]
  }

  export type BlogReactionCreateNestedManyWithoutUserInput = {
    create?: XOR<BlogReactionCreateWithoutUserInput, BlogReactionUncheckedCreateWithoutUserInput> | BlogReactionCreateWithoutUserInput[] | BlogReactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BlogReactionCreateOrConnectWithoutUserInput | BlogReactionCreateOrConnectWithoutUserInput[]
    createMany?: BlogReactionCreateManyUserInputEnvelope
    connect?: BlogReactionWhereUniqueInput | BlogReactionWhereUniqueInput[]
  }

  export type UserRoleUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<UserRoleCreateWithoutUsersInput, UserRoleUncheckedCreateWithoutUsersInput> | UserRoleCreateWithoutUsersInput[] | UserRoleUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutUsersInput | UserRoleCreateOrConnectWithoutUsersInput[]
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
  }

  export type EmployeeUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<EmployeeCreateWithoutUserInput, EmployeeUncheckedCreateWithoutUserInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutUserInput
    connect?: EmployeeWhereUniqueInput
  }

  export type BlogCommentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BlogCommentCreateWithoutUserInput, BlogCommentUncheckedCreateWithoutUserInput> | BlogCommentCreateWithoutUserInput[] | BlogCommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BlogCommentCreateOrConnectWithoutUserInput | BlogCommentCreateOrConnectWithoutUserInput[]
    createMany?: BlogCommentCreateManyUserInputEnvelope
    connect?: BlogCommentWhereUniqueInput | BlogCommentWhereUniqueInput[]
  }

  export type BlogReactionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BlogReactionCreateWithoutUserInput, BlogReactionUncheckedCreateWithoutUserInput> | BlogReactionCreateWithoutUserInput[] | BlogReactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BlogReactionCreateOrConnectWithoutUserInput | BlogReactionCreateOrConnectWithoutUserInput[]
    createMany?: BlogReactionCreateManyUserInputEnvelope
    connect?: BlogReactionWhereUniqueInput | BlogReactionWhereUniqueInput[]
  }

  export type EnumAccessTypeFieldUpdateOperationsInput = {
    set?: $Enums.AccessType
  }

  export type UserRoleUpdateManyWithoutUsersNestedInput = {
    create?: XOR<UserRoleCreateWithoutUsersInput, UserRoleUncheckedCreateWithoutUsersInput> | UserRoleCreateWithoutUsersInput[] | UserRoleUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutUsersInput | UserRoleCreateOrConnectWithoutUsersInput[]
    upsert?: UserRoleUpsertWithWhereUniqueWithoutUsersInput | UserRoleUpsertWithWhereUniqueWithoutUsersInput[]
    set?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    disconnect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    delete?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    update?: UserRoleUpdateWithWhereUniqueWithoutUsersInput | UserRoleUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: UserRoleUpdateManyWithWhereWithoutUsersInput | UserRoleUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[]
  }

  export type EmployeeUpdateOneWithoutUserNestedInput = {
    create?: XOR<EmployeeCreateWithoutUserInput, EmployeeUncheckedCreateWithoutUserInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutUserInput
    upsert?: EmployeeUpsertWithoutUserInput
    disconnect?: EmployeeWhereInput | boolean
    delete?: EmployeeWhereInput | boolean
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutUserInput, EmployeeUpdateWithoutUserInput>, EmployeeUncheckedUpdateWithoutUserInput>
  }

  export type BlogCommentUpdateManyWithoutUserNestedInput = {
    create?: XOR<BlogCommentCreateWithoutUserInput, BlogCommentUncheckedCreateWithoutUserInput> | BlogCommentCreateWithoutUserInput[] | BlogCommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BlogCommentCreateOrConnectWithoutUserInput | BlogCommentCreateOrConnectWithoutUserInput[]
    upsert?: BlogCommentUpsertWithWhereUniqueWithoutUserInput | BlogCommentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BlogCommentCreateManyUserInputEnvelope
    set?: BlogCommentWhereUniqueInput | BlogCommentWhereUniqueInput[]
    disconnect?: BlogCommentWhereUniqueInput | BlogCommentWhereUniqueInput[]
    delete?: BlogCommentWhereUniqueInput | BlogCommentWhereUniqueInput[]
    connect?: BlogCommentWhereUniqueInput | BlogCommentWhereUniqueInput[]
    update?: BlogCommentUpdateWithWhereUniqueWithoutUserInput | BlogCommentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BlogCommentUpdateManyWithWhereWithoutUserInput | BlogCommentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BlogCommentScalarWhereInput | BlogCommentScalarWhereInput[]
  }

  export type BlogReactionUpdateManyWithoutUserNestedInput = {
    create?: XOR<BlogReactionCreateWithoutUserInput, BlogReactionUncheckedCreateWithoutUserInput> | BlogReactionCreateWithoutUserInput[] | BlogReactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BlogReactionCreateOrConnectWithoutUserInput | BlogReactionCreateOrConnectWithoutUserInput[]
    upsert?: BlogReactionUpsertWithWhereUniqueWithoutUserInput | BlogReactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BlogReactionCreateManyUserInputEnvelope
    set?: BlogReactionWhereUniqueInput | BlogReactionWhereUniqueInput[]
    disconnect?: BlogReactionWhereUniqueInput | BlogReactionWhereUniqueInput[]
    delete?: BlogReactionWhereUniqueInput | BlogReactionWhereUniqueInput[]
    connect?: BlogReactionWhereUniqueInput | BlogReactionWhereUniqueInput[]
    update?: BlogReactionUpdateWithWhereUniqueWithoutUserInput | BlogReactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BlogReactionUpdateManyWithWhereWithoutUserInput | BlogReactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BlogReactionScalarWhereInput | BlogReactionScalarWhereInput[]
  }

  export type UserRoleUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<UserRoleCreateWithoutUsersInput, UserRoleUncheckedCreateWithoutUsersInput> | UserRoleCreateWithoutUsersInput[] | UserRoleUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutUsersInput | UserRoleCreateOrConnectWithoutUsersInput[]
    upsert?: UserRoleUpsertWithWhereUniqueWithoutUsersInput | UserRoleUpsertWithWhereUniqueWithoutUsersInput[]
    set?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    disconnect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    delete?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    update?: UserRoleUpdateWithWhereUniqueWithoutUsersInput | UserRoleUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: UserRoleUpdateManyWithWhereWithoutUsersInput | UserRoleUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[]
  }

  export type EmployeeUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<EmployeeCreateWithoutUserInput, EmployeeUncheckedCreateWithoutUserInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutUserInput
    upsert?: EmployeeUpsertWithoutUserInput
    disconnect?: EmployeeWhereInput | boolean
    delete?: EmployeeWhereInput | boolean
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutUserInput, EmployeeUpdateWithoutUserInput>, EmployeeUncheckedUpdateWithoutUserInput>
  }

  export type BlogCommentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BlogCommentCreateWithoutUserInput, BlogCommentUncheckedCreateWithoutUserInput> | BlogCommentCreateWithoutUserInput[] | BlogCommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BlogCommentCreateOrConnectWithoutUserInput | BlogCommentCreateOrConnectWithoutUserInput[]
    upsert?: BlogCommentUpsertWithWhereUniqueWithoutUserInput | BlogCommentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BlogCommentCreateManyUserInputEnvelope
    set?: BlogCommentWhereUniqueInput | BlogCommentWhereUniqueInput[]
    disconnect?: BlogCommentWhereUniqueInput | BlogCommentWhereUniqueInput[]
    delete?: BlogCommentWhereUniqueInput | BlogCommentWhereUniqueInput[]
    connect?: BlogCommentWhereUniqueInput | BlogCommentWhereUniqueInput[]
    update?: BlogCommentUpdateWithWhereUniqueWithoutUserInput | BlogCommentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BlogCommentUpdateManyWithWhereWithoutUserInput | BlogCommentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BlogCommentScalarWhereInput | BlogCommentScalarWhereInput[]
  }

  export type BlogReactionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BlogReactionCreateWithoutUserInput, BlogReactionUncheckedCreateWithoutUserInput> | BlogReactionCreateWithoutUserInput[] | BlogReactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BlogReactionCreateOrConnectWithoutUserInput | BlogReactionCreateOrConnectWithoutUserInput[]
    upsert?: BlogReactionUpsertWithWhereUniqueWithoutUserInput | BlogReactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BlogReactionCreateManyUserInputEnvelope
    set?: BlogReactionWhereUniqueInput | BlogReactionWhereUniqueInput[]
    disconnect?: BlogReactionWhereUniqueInput | BlogReactionWhereUniqueInput[]
    delete?: BlogReactionWhereUniqueInput | BlogReactionWhereUniqueInput[]
    connect?: BlogReactionWhereUniqueInput | BlogReactionWhereUniqueInput[]
    update?: BlogReactionUpdateWithWhereUniqueWithoutUserInput | BlogReactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BlogReactionUpdateManyWithWhereWithoutUserInput | BlogReactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BlogReactionScalarWhereInput | BlogReactionScalarWhereInput[]
  }

  export type UserRolePermissionCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserRolePermissionCreateWithoutRoleInput, UserRolePermissionUncheckedCreateWithoutRoleInput> | UserRolePermissionCreateWithoutRoleInput[] | UserRolePermissionUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserRolePermissionCreateOrConnectWithoutRoleInput | UserRolePermissionCreateOrConnectWithoutRoleInput[]
    createMany?: UserRolePermissionCreateManyRoleInputEnvelope
    connect?: UserRolePermissionWhereUniqueInput | UserRolePermissionWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutRolesInput = {
    create?: XOR<UserCreateWithoutRolesInput, UserUncheckedCreateWithoutRolesInput> | UserCreateWithoutRolesInput[] | UserUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRolesInput | UserCreateOrConnectWithoutRolesInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserRolePermissionUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserRolePermissionCreateWithoutRoleInput, UserRolePermissionUncheckedCreateWithoutRoleInput> | UserRolePermissionCreateWithoutRoleInput[] | UserRolePermissionUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserRolePermissionCreateOrConnectWithoutRoleInput | UserRolePermissionCreateOrConnectWithoutRoleInput[]
    createMany?: UserRolePermissionCreateManyRoleInputEnvelope
    connect?: UserRolePermissionWhereUniqueInput | UserRolePermissionWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutRolesInput = {
    create?: XOR<UserCreateWithoutRolesInput, UserUncheckedCreateWithoutRolesInput> | UserCreateWithoutRolesInput[] | UserUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRolesInput | UserCreateOrConnectWithoutRolesInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserRolePermissionUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserRolePermissionCreateWithoutRoleInput, UserRolePermissionUncheckedCreateWithoutRoleInput> | UserRolePermissionCreateWithoutRoleInput[] | UserRolePermissionUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserRolePermissionCreateOrConnectWithoutRoleInput | UserRolePermissionCreateOrConnectWithoutRoleInput[]
    upsert?: UserRolePermissionUpsertWithWhereUniqueWithoutRoleInput | UserRolePermissionUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserRolePermissionCreateManyRoleInputEnvelope
    set?: UserRolePermissionWhereUniqueInput | UserRolePermissionWhereUniqueInput[]
    disconnect?: UserRolePermissionWhereUniqueInput | UserRolePermissionWhereUniqueInput[]
    delete?: UserRolePermissionWhereUniqueInput | UserRolePermissionWhereUniqueInput[]
    connect?: UserRolePermissionWhereUniqueInput | UserRolePermissionWhereUniqueInput[]
    update?: UserRolePermissionUpdateWithWhereUniqueWithoutRoleInput | UserRolePermissionUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserRolePermissionUpdateManyWithWhereWithoutRoleInput | UserRolePermissionUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserRolePermissionScalarWhereInput | UserRolePermissionScalarWhereInput[]
  }

  export type UserUpdateManyWithoutRolesNestedInput = {
    create?: XOR<UserCreateWithoutRolesInput, UserUncheckedCreateWithoutRolesInput> | UserCreateWithoutRolesInput[] | UserUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRolesInput | UserCreateOrConnectWithoutRolesInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRolesInput | UserUpsertWithWhereUniqueWithoutRolesInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRolesInput | UserUpdateWithWhereUniqueWithoutRolesInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRolesInput | UserUpdateManyWithWhereWithoutRolesInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserRolePermissionUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserRolePermissionCreateWithoutRoleInput, UserRolePermissionUncheckedCreateWithoutRoleInput> | UserRolePermissionCreateWithoutRoleInput[] | UserRolePermissionUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserRolePermissionCreateOrConnectWithoutRoleInput | UserRolePermissionCreateOrConnectWithoutRoleInput[]
    upsert?: UserRolePermissionUpsertWithWhereUniqueWithoutRoleInput | UserRolePermissionUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserRolePermissionCreateManyRoleInputEnvelope
    set?: UserRolePermissionWhereUniqueInput | UserRolePermissionWhereUniqueInput[]
    disconnect?: UserRolePermissionWhereUniqueInput | UserRolePermissionWhereUniqueInput[]
    delete?: UserRolePermissionWhereUniqueInput | UserRolePermissionWhereUniqueInput[]
    connect?: UserRolePermissionWhereUniqueInput | UserRolePermissionWhereUniqueInput[]
    update?: UserRolePermissionUpdateWithWhereUniqueWithoutRoleInput | UserRolePermissionUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserRolePermissionUpdateManyWithWhereWithoutRoleInput | UserRolePermissionUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserRolePermissionScalarWhereInput | UserRolePermissionScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutRolesNestedInput = {
    create?: XOR<UserCreateWithoutRolesInput, UserUncheckedCreateWithoutRolesInput> | UserCreateWithoutRolesInput[] | UserUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRolesInput | UserCreateOrConnectWithoutRolesInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRolesInput | UserUpsertWithWhereUniqueWithoutRolesInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRolesInput | UserUpdateWithWhereUniqueWithoutRolesInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRolesInput | UserUpdateManyWithWhereWithoutRolesInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserRolePermissionCreateactionsInput = {
    set: $Enums.PermissionAction[]
  }

  export type UserRoleCreateNestedOneWithoutPermissionsInput = {
    create?: XOR<UserRoleCreateWithoutPermissionsInput, UserRoleUncheckedCreateWithoutPermissionsInput>
    connectOrCreate?: UserRoleCreateOrConnectWithoutPermissionsInput
    connect?: UserRoleWhereUniqueInput
  }

  export type EnumPermissionNameFieldUpdateOperationsInput = {
    set?: $Enums.PermissionName
  }

  export type UserRolePermissionUpdateactionsInput = {
    set?: $Enums.PermissionAction[]
    push?: $Enums.PermissionAction | $Enums.PermissionAction[]
  }

  export type UserRoleUpdateOneRequiredWithoutPermissionsNestedInput = {
    create?: XOR<UserRoleCreateWithoutPermissionsInput, UserRoleUncheckedCreateWithoutPermissionsInput>
    connectOrCreate?: UserRoleCreateOrConnectWithoutPermissionsInput
    upsert?: UserRoleUpsertWithoutPermissionsInput
    connect?: UserRoleWhereUniqueInput
    update?: XOR<XOR<UserRoleUpdateToOneWithWhereWithoutPermissionsInput, UserRoleUpdateWithoutPermissionsInput>, UserRoleUncheckedUpdateWithoutPermissionsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumContentStageFilter<$PrismaModel = never> = {
    equals?: $Enums.ContentStage | EnumContentStageFieldRefInput<$PrismaModel>
    in?: $Enums.ContentStage[] | ListEnumContentStageFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContentStage[] | ListEnumContentStageFieldRefInput<$PrismaModel>
    not?: NestedEnumContentStageFilter<$PrismaModel> | $Enums.ContentStage
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumContentStageWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ContentStage | EnumContentStageFieldRefInput<$PrismaModel>
    in?: $Enums.ContentStage[] | ListEnumContentStageFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContentStage[] | ListEnumContentStageFieldRefInput<$PrismaModel>
    not?: NestedEnumContentStageWithAggregatesFilter<$PrismaModel> | $Enums.ContentStage
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumContentStageFilter<$PrismaModel>
    _max?: NestedEnumContentStageFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumReactionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ReactionType | EnumReactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ReactionType[] | ListEnumReactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReactionType[] | ListEnumReactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumReactionTypeFilter<$PrismaModel> | $Enums.ReactionType
  }

  export type NestedEnumReactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReactionType | EnumReactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ReactionType[] | ListEnumReactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReactionType[] | ListEnumReactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumReactionTypeWithAggregatesFilter<$PrismaModel> | $Enums.ReactionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReactionTypeFilter<$PrismaModel>
    _max?: NestedEnumReactionTypeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumAccessTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AccessType | EnumAccessTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AccessType[] | ListEnumAccessTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccessType[] | ListEnumAccessTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAccessTypeFilter<$PrismaModel> | $Enums.AccessType
  }

  export type NestedEnumAccessTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AccessType | EnumAccessTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AccessType[] | ListEnumAccessTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccessType[] | ListEnumAccessTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAccessTypeWithAggregatesFilter<$PrismaModel> | $Enums.AccessType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAccessTypeFilter<$PrismaModel>
    _max?: NestedEnumAccessTypeFilter<$PrismaModel>
  }

  export type NestedEnumPermissionNameFilter<$PrismaModel = never> = {
    equals?: $Enums.PermissionName | EnumPermissionNameFieldRefInput<$PrismaModel>
    in?: $Enums.PermissionName[] | ListEnumPermissionNameFieldRefInput<$PrismaModel>
    notIn?: $Enums.PermissionName[] | ListEnumPermissionNameFieldRefInput<$PrismaModel>
    not?: NestedEnumPermissionNameFilter<$PrismaModel> | $Enums.PermissionName
  }

  export type NestedEnumPermissionNameWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PermissionName | EnumPermissionNameFieldRefInput<$PrismaModel>
    in?: $Enums.PermissionName[] | ListEnumPermissionNameFieldRefInput<$PrismaModel>
    notIn?: $Enums.PermissionName[] | ListEnumPermissionNameFieldRefInput<$PrismaModel>
    not?: NestedEnumPermissionNameWithAggregatesFilter<$PrismaModel> | $Enums.PermissionName
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPermissionNameFilter<$PrismaModel>
    _max?: NestedEnumPermissionNameFilter<$PrismaModel>
  }

  export type BlogCategoryCreateWithoutBlogArticleInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    slug: string
    description: string
  }

  export type BlogCategoryUncheckedCreateWithoutBlogArticleInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    slug: string
    description: string
  }

  export type BlogCategoryCreateOrConnectWithoutBlogArticleInput = {
    where: BlogCategoryWhereUniqueInput
    create: XOR<BlogCategoryCreateWithoutBlogArticleInput, BlogCategoryUncheckedCreateWithoutBlogArticleInput>
  }

  export type BlogCommentCreateWithoutArticleInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    content: string
    stage?: $Enums.ContentStage
    user: UserCreateNestedOneWithoutCommentsInput
  }

  export type BlogCommentUncheckedCreateWithoutArticleInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    content: string
    userId: string
    stage?: $Enums.ContentStage
  }

  export type BlogCommentCreateOrConnectWithoutArticleInput = {
    where: BlogCommentWhereUniqueInput
    create: XOR<BlogCommentCreateWithoutArticleInput, BlogCommentUncheckedCreateWithoutArticleInput>
  }

  export type BlogCommentCreateManyArticleInputEnvelope = {
    data: BlogCommentCreateManyArticleInput | BlogCommentCreateManyArticleInput[]
    skipDuplicates?: boolean
  }

  export type BlogReactionCreateWithoutArticleInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    type: $Enums.ReactionType
    user: UserCreateNestedOneWithoutReactionsInput
  }

  export type BlogReactionUncheckedCreateWithoutArticleInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    type: $Enums.ReactionType
  }

  export type BlogReactionCreateOrConnectWithoutArticleInput = {
    where: BlogReactionWhereUniqueInput
    create: XOR<BlogReactionCreateWithoutArticleInput, BlogReactionUncheckedCreateWithoutArticleInput>
  }

  export type BlogReactionCreateManyArticleInputEnvelope = {
    data: BlogReactionCreateManyArticleInput | BlogReactionCreateManyArticleInput[]
    skipDuplicates?: boolean
  }

  export type BlogCategoryUpsertWithoutBlogArticleInput = {
    update: XOR<BlogCategoryUpdateWithoutBlogArticleInput, BlogCategoryUncheckedUpdateWithoutBlogArticleInput>
    create: XOR<BlogCategoryCreateWithoutBlogArticleInput, BlogCategoryUncheckedCreateWithoutBlogArticleInput>
    where?: BlogCategoryWhereInput
  }

  export type BlogCategoryUpdateToOneWithWhereWithoutBlogArticleInput = {
    where?: BlogCategoryWhereInput
    data: XOR<BlogCategoryUpdateWithoutBlogArticleInput, BlogCategoryUncheckedUpdateWithoutBlogArticleInput>
  }

  export type BlogCategoryUpdateWithoutBlogArticleInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type BlogCategoryUncheckedUpdateWithoutBlogArticleInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type BlogCommentUpsertWithWhereUniqueWithoutArticleInput = {
    where: BlogCommentWhereUniqueInput
    update: XOR<BlogCommentUpdateWithoutArticleInput, BlogCommentUncheckedUpdateWithoutArticleInput>
    create: XOR<BlogCommentCreateWithoutArticleInput, BlogCommentUncheckedCreateWithoutArticleInput>
  }

  export type BlogCommentUpdateWithWhereUniqueWithoutArticleInput = {
    where: BlogCommentWhereUniqueInput
    data: XOR<BlogCommentUpdateWithoutArticleInput, BlogCommentUncheckedUpdateWithoutArticleInput>
  }

  export type BlogCommentUpdateManyWithWhereWithoutArticleInput = {
    where: BlogCommentScalarWhereInput
    data: XOR<BlogCommentUpdateManyMutationInput, BlogCommentUncheckedUpdateManyWithoutArticleInput>
  }

  export type BlogCommentScalarWhereInput = {
    AND?: BlogCommentScalarWhereInput | BlogCommentScalarWhereInput[]
    OR?: BlogCommentScalarWhereInput[]
    NOT?: BlogCommentScalarWhereInput | BlogCommentScalarWhereInput[]
    id?: StringFilter<"BlogComment"> | string
    createdAt?: DateTimeFilter<"BlogComment"> | Date | string
    updatedAt?: DateTimeFilter<"BlogComment"> | Date | string
    content?: StringFilter<"BlogComment"> | string
    articleId?: StringFilter<"BlogComment"> | string
    userId?: StringFilter<"BlogComment"> | string
    stage?: EnumContentStageFilter<"BlogComment"> | $Enums.ContentStage
  }

  export type BlogReactionUpsertWithWhereUniqueWithoutArticleInput = {
    where: BlogReactionWhereUniqueInput
    update: XOR<BlogReactionUpdateWithoutArticleInput, BlogReactionUncheckedUpdateWithoutArticleInput>
    create: XOR<BlogReactionCreateWithoutArticleInput, BlogReactionUncheckedCreateWithoutArticleInput>
  }

  export type BlogReactionUpdateWithWhereUniqueWithoutArticleInput = {
    where: BlogReactionWhereUniqueInput
    data: XOR<BlogReactionUpdateWithoutArticleInput, BlogReactionUncheckedUpdateWithoutArticleInput>
  }

  export type BlogReactionUpdateManyWithWhereWithoutArticleInput = {
    where: BlogReactionScalarWhereInput
    data: XOR<BlogReactionUpdateManyMutationInput, BlogReactionUncheckedUpdateManyWithoutArticleInput>
  }

  export type BlogReactionScalarWhereInput = {
    AND?: BlogReactionScalarWhereInput | BlogReactionScalarWhereInput[]
    OR?: BlogReactionScalarWhereInput[]
    NOT?: BlogReactionScalarWhereInput | BlogReactionScalarWhereInput[]
    id?: StringFilter<"BlogReaction"> | string
    createdAt?: DateTimeFilter<"BlogReaction"> | Date | string
    updatedAt?: DateTimeFilter<"BlogReaction"> | Date | string
    articleId?: StringFilter<"BlogReaction"> | string
    userId?: StringFilter<"BlogReaction"> | string
    type?: EnumReactionTypeFilter<"BlogReaction"> | $Enums.ReactionType
  }

  export type BlogArticleCreateWithoutCategoryInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    slug: string
    description: string
    content: string
    stage?: $Enums.ContentStage
    commentsCount?: number
    reactionCount?: number
    comments?: BlogCommentCreateNestedManyWithoutArticleInput
    BlogReaction?: BlogReactionCreateNestedManyWithoutArticleInput
  }

  export type BlogArticleUncheckedCreateWithoutCategoryInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    slug: string
    description: string
    content: string
    stage?: $Enums.ContentStage
    commentsCount?: number
    reactionCount?: number
    comments?: BlogCommentUncheckedCreateNestedManyWithoutArticleInput
    BlogReaction?: BlogReactionUncheckedCreateNestedManyWithoutArticleInput
  }

  export type BlogArticleCreateOrConnectWithoutCategoryInput = {
    where: BlogArticleWhereUniqueInput
    create: XOR<BlogArticleCreateWithoutCategoryInput, BlogArticleUncheckedCreateWithoutCategoryInput>
  }

  export type BlogArticleCreateManyCategoryInputEnvelope = {
    data: BlogArticleCreateManyCategoryInput | BlogArticleCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type BlogArticleUpsertWithWhereUniqueWithoutCategoryInput = {
    where: BlogArticleWhereUniqueInput
    update: XOR<BlogArticleUpdateWithoutCategoryInput, BlogArticleUncheckedUpdateWithoutCategoryInput>
    create: XOR<BlogArticleCreateWithoutCategoryInput, BlogArticleUncheckedCreateWithoutCategoryInput>
  }

  export type BlogArticleUpdateWithWhereUniqueWithoutCategoryInput = {
    where: BlogArticleWhereUniqueInput
    data: XOR<BlogArticleUpdateWithoutCategoryInput, BlogArticleUncheckedUpdateWithoutCategoryInput>
  }

  export type BlogArticleUpdateManyWithWhereWithoutCategoryInput = {
    where: BlogArticleScalarWhereInput
    data: XOR<BlogArticleUpdateManyMutationInput, BlogArticleUncheckedUpdateManyWithoutCategoryInput>
  }

  export type BlogArticleScalarWhereInput = {
    AND?: BlogArticleScalarWhereInput | BlogArticleScalarWhereInput[]
    OR?: BlogArticleScalarWhereInput[]
    NOT?: BlogArticleScalarWhereInput | BlogArticleScalarWhereInput[]
    id?: StringFilter<"BlogArticle"> | string
    createdAt?: DateTimeFilter<"BlogArticle"> | Date | string
    updatedAt?: DateTimeFilter<"BlogArticle"> | Date | string
    title?: StringFilter<"BlogArticle"> | string
    slug?: StringFilter<"BlogArticle"> | string
    description?: StringFilter<"BlogArticle"> | string
    content?: StringFilter<"BlogArticle"> | string
    stage?: EnumContentStageFilter<"BlogArticle"> | $Enums.ContentStage
    categoryId?: StringFilter<"BlogArticle"> | string
    commentsCount?: IntFilter<"BlogArticle"> | number
    reactionCount?: IntFilter<"BlogArticle"> | number
  }

  export type BlogArticleCreateWithoutCommentsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    slug: string
    description: string
    content: string
    stage?: $Enums.ContentStage
    commentsCount?: number
    reactionCount?: number
    category: BlogCategoryCreateNestedOneWithoutBlogArticleInput
    BlogReaction?: BlogReactionCreateNestedManyWithoutArticleInput
  }

  export type BlogArticleUncheckedCreateWithoutCommentsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    slug: string
    description: string
    content: string
    stage?: $Enums.ContentStage
    categoryId: string
    commentsCount?: number
    reactionCount?: number
    BlogReaction?: BlogReactionUncheckedCreateNestedManyWithoutArticleInput
  }

  export type BlogArticleCreateOrConnectWithoutCommentsInput = {
    where: BlogArticleWhereUniqueInput
    create: XOR<BlogArticleCreateWithoutCommentsInput, BlogArticleUncheckedCreateWithoutCommentsInput>
  }

  export type UserCreateWithoutCommentsInput = {
    id?: string
    email: string
    password: string
    name: string
    accessType?: $Enums.AccessType
    createdAt?: Date | string
    updatedAt?: Date | string
    roles?: UserRoleCreateNestedManyWithoutUsersInput
    employee?: EmployeeCreateNestedOneWithoutUserInput
    reactions?: BlogReactionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCommentsInput = {
    id?: string
    email: string
    password: string
    name: string
    accessType?: $Enums.AccessType
    createdAt?: Date | string
    updatedAt?: Date | string
    roles?: UserRoleUncheckedCreateNestedManyWithoutUsersInput
    employee?: EmployeeUncheckedCreateNestedOneWithoutUserInput
    reactions?: BlogReactionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCommentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
  }

  export type BlogArticleUpsertWithoutCommentsInput = {
    update: XOR<BlogArticleUpdateWithoutCommentsInput, BlogArticleUncheckedUpdateWithoutCommentsInput>
    create: XOR<BlogArticleCreateWithoutCommentsInput, BlogArticleUncheckedCreateWithoutCommentsInput>
    where?: BlogArticleWhereInput
  }

  export type BlogArticleUpdateToOneWithWhereWithoutCommentsInput = {
    where?: BlogArticleWhereInput
    data: XOR<BlogArticleUpdateWithoutCommentsInput, BlogArticleUncheckedUpdateWithoutCommentsInput>
  }

  export type BlogArticleUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    stage?: EnumContentStageFieldUpdateOperationsInput | $Enums.ContentStage
    commentsCount?: IntFieldUpdateOperationsInput | number
    reactionCount?: IntFieldUpdateOperationsInput | number
    category?: BlogCategoryUpdateOneRequiredWithoutBlogArticleNestedInput
    BlogReaction?: BlogReactionUpdateManyWithoutArticleNestedInput
  }

  export type BlogArticleUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    stage?: EnumContentStageFieldUpdateOperationsInput | $Enums.ContentStage
    categoryId?: StringFieldUpdateOperationsInput | string
    commentsCount?: IntFieldUpdateOperationsInput | number
    reactionCount?: IntFieldUpdateOperationsInput | number
    BlogReaction?: BlogReactionUncheckedUpdateManyWithoutArticleNestedInput
  }

  export type UserUpsertWithoutCommentsInput = {
    update: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCommentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type UserUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    accessType?: EnumAccessTypeFieldUpdateOperationsInput | $Enums.AccessType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: UserRoleUpdateManyWithoutUsersNestedInput
    employee?: EmployeeUpdateOneWithoutUserNestedInput
    reactions?: BlogReactionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    accessType?: EnumAccessTypeFieldUpdateOperationsInput | $Enums.AccessType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: UserRoleUncheckedUpdateManyWithoutUsersNestedInput
    employee?: EmployeeUncheckedUpdateOneWithoutUserNestedInput
    reactions?: BlogReactionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BlogArticleCreateWithoutBlogReactionInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    slug: string
    description: string
    content: string
    stage?: $Enums.ContentStage
    commentsCount?: number
    reactionCount?: number
    category: BlogCategoryCreateNestedOneWithoutBlogArticleInput
    comments?: BlogCommentCreateNestedManyWithoutArticleInput
  }

  export type BlogArticleUncheckedCreateWithoutBlogReactionInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    slug: string
    description: string
    content: string
    stage?: $Enums.ContentStage
    categoryId: string
    commentsCount?: number
    reactionCount?: number
    comments?: BlogCommentUncheckedCreateNestedManyWithoutArticleInput
  }

  export type BlogArticleCreateOrConnectWithoutBlogReactionInput = {
    where: BlogArticleWhereUniqueInput
    create: XOR<BlogArticleCreateWithoutBlogReactionInput, BlogArticleUncheckedCreateWithoutBlogReactionInput>
  }

  export type UserCreateWithoutReactionsInput = {
    id?: string
    email: string
    password: string
    name: string
    accessType?: $Enums.AccessType
    createdAt?: Date | string
    updatedAt?: Date | string
    roles?: UserRoleCreateNestedManyWithoutUsersInput
    employee?: EmployeeCreateNestedOneWithoutUserInput
    comments?: BlogCommentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReactionsInput = {
    id?: string
    email: string
    password: string
    name: string
    accessType?: $Enums.AccessType
    createdAt?: Date | string
    updatedAt?: Date | string
    roles?: UserRoleUncheckedCreateNestedManyWithoutUsersInput
    employee?: EmployeeUncheckedCreateNestedOneWithoutUserInput
    comments?: BlogCommentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReactionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReactionsInput, UserUncheckedCreateWithoutReactionsInput>
  }

  export type BlogArticleUpsertWithoutBlogReactionInput = {
    update: XOR<BlogArticleUpdateWithoutBlogReactionInput, BlogArticleUncheckedUpdateWithoutBlogReactionInput>
    create: XOR<BlogArticleCreateWithoutBlogReactionInput, BlogArticleUncheckedCreateWithoutBlogReactionInput>
    where?: BlogArticleWhereInput
  }

  export type BlogArticleUpdateToOneWithWhereWithoutBlogReactionInput = {
    where?: BlogArticleWhereInput
    data: XOR<BlogArticleUpdateWithoutBlogReactionInput, BlogArticleUncheckedUpdateWithoutBlogReactionInput>
  }

  export type BlogArticleUpdateWithoutBlogReactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    stage?: EnumContentStageFieldUpdateOperationsInput | $Enums.ContentStage
    commentsCount?: IntFieldUpdateOperationsInput | number
    reactionCount?: IntFieldUpdateOperationsInput | number
    category?: BlogCategoryUpdateOneRequiredWithoutBlogArticleNestedInput
    comments?: BlogCommentUpdateManyWithoutArticleNestedInput
  }

  export type BlogArticleUncheckedUpdateWithoutBlogReactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    stage?: EnumContentStageFieldUpdateOperationsInput | $Enums.ContentStage
    categoryId?: StringFieldUpdateOperationsInput | string
    commentsCount?: IntFieldUpdateOperationsInput | number
    reactionCount?: IntFieldUpdateOperationsInput | number
    comments?: BlogCommentUncheckedUpdateManyWithoutArticleNestedInput
  }

  export type UserUpsertWithoutReactionsInput = {
    update: XOR<UserUpdateWithoutReactionsInput, UserUncheckedUpdateWithoutReactionsInput>
    create: XOR<UserCreateWithoutReactionsInput, UserUncheckedCreateWithoutReactionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReactionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReactionsInput, UserUncheckedUpdateWithoutReactionsInput>
  }

  export type UserUpdateWithoutReactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    accessType?: EnumAccessTypeFieldUpdateOperationsInput | $Enums.AccessType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: UserRoleUpdateManyWithoutUsersNestedInput
    employee?: EmployeeUpdateOneWithoutUserNestedInput
    comments?: BlogCommentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    accessType?: EnumAccessTypeFieldUpdateOperationsInput | $Enums.AccessType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: UserRoleUncheckedUpdateManyWithoutUsersNestedInput
    employee?: EmployeeUncheckedUpdateOneWithoutUserNestedInput
    comments?: BlogCommentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutEmployeeInput = {
    id?: string
    email: string
    password: string
    name: string
    accessType?: $Enums.AccessType
    createdAt?: Date | string
    updatedAt?: Date | string
    roles?: UserRoleCreateNestedManyWithoutUsersInput
    comments?: BlogCommentCreateNestedManyWithoutUserInput
    reactions?: BlogReactionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutEmployeeInput = {
    id?: string
    email: string
    password: string
    name: string
    accessType?: $Enums.AccessType
    createdAt?: Date | string
    updatedAt?: Date | string
    roles?: UserRoleUncheckedCreateNestedManyWithoutUsersInput
    comments?: BlogCommentUncheckedCreateNestedManyWithoutUserInput
    reactions?: BlogReactionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutEmployeeInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEmployeeInput, UserUncheckedCreateWithoutEmployeeInput>
  }

  export type UserUpsertWithoutEmployeeInput = {
    update: XOR<UserUpdateWithoutEmployeeInput, UserUncheckedUpdateWithoutEmployeeInput>
    create: XOR<UserCreateWithoutEmployeeInput, UserUncheckedCreateWithoutEmployeeInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEmployeeInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEmployeeInput, UserUncheckedUpdateWithoutEmployeeInput>
  }

  export type UserUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    accessType?: EnumAccessTypeFieldUpdateOperationsInput | $Enums.AccessType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: UserRoleUpdateManyWithoutUsersNestedInput
    comments?: BlogCommentUpdateManyWithoutUserNestedInput
    reactions?: BlogReactionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    accessType?: EnumAccessTypeFieldUpdateOperationsInput | $Enums.AccessType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: UserRoleUncheckedUpdateManyWithoutUsersNestedInput
    comments?: BlogCommentUncheckedUpdateManyWithoutUserNestedInput
    reactions?: BlogReactionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserRoleCreateWithoutUsersInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    permissions?: UserRolePermissionCreateNestedManyWithoutRoleInput
  }

  export type UserRoleUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    permissions?: UserRolePermissionUncheckedCreateNestedManyWithoutRoleInput
  }

  export type UserRoleCreateOrConnectWithoutUsersInput = {
    where: UserRoleWhereUniqueInput
    create: XOR<UserRoleCreateWithoutUsersInput, UserRoleUncheckedCreateWithoutUsersInput>
  }

  export type EmployeeCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    firstName: string
    lastName: string
    position: string
    slug: string
    dob: Date | string
    stage?: $Enums.ContentStage
    joinedAt: Date | string
  }

  export type EmployeeUncheckedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    firstName: string
    lastName: string
    position: string
    slug: string
    dob: Date | string
    stage?: $Enums.ContentStage
    joinedAt: Date | string
  }

  export type EmployeeCreateOrConnectWithoutUserInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutUserInput, EmployeeUncheckedCreateWithoutUserInput>
  }

  export type BlogCommentCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    content: string
    stage?: $Enums.ContentStage
    article: BlogArticleCreateNestedOneWithoutCommentsInput
  }

  export type BlogCommentUncheckedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    content: string
    articleId: string
    stage?: $Enums.ContentStage
  }

  export type BlogCommentCreateOrConnectWithoutUserInput = {
    where: BlogCommentWhereUniqueInput
    create: XOR<BlogCommentCreateWithoutUserInput, BlogCommentUncheckedCreateWithoutUserInput>
  }

  export type BlogCommentCreateManyUserInputEnvelope = {
    data: BlogCommentCreateManyUserInput | BlogCommentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BlogReactionCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    type: $Enums.ReactionType
    article: BlogArticleCreateNestedOneWithoutBlogReactionInput
  }

  export type BlogReactionUncheckedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    articleId: string
    type: $Enums.ReactionType
  }

  export type BlogReactionCreateOrConnectWithoutUserInput = {
    where: BlogReactionWhereUniqueInput
    create: XOR<BlogReactionCreateWithoutUserInput, BlogReactionUncheckedCreateWithoutUserInput>
  }

  export type BlogReactionCreateManyUserInputEnvelope = {
    data: BlogReactionCreateManyUserInput | BlogReactionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserRoleUpsertWithWhereUniqueWithoutUsersInput = {
    where: UserRoleWhereUniqueInput
    update: XOR<UserRoleUpdateWithoutUsersInput, UserRoleUncheckedUpdateWithoutUsersInput>
    create: XOR<UserRoleCreateWithoutUsersInput, UserRoleUncheckedCreateWithoutUsersInput>
  }

  export type UserRoleUpdateWithWhereUniqueWithoutUsersInput = {
    where: UserRoleWhereUniqueInput
    data: XOR<UserRoleUpdateWithoutUsersInput, UserRoleUncheckedUpdateWithoutUsersInput>
  }

  export type UserRoleUpdateManyWithWhereWithoutUsersInput = {
    where: UserRoleScalarWhereInput
    data: XOR<UserRoleUpdateManyMutationInput, UserRoleUncheckedUpdateManyWithoutUsersInput>
  }

  export type UserRoleScalarWhereInput = {
    AND?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[]
    OR?: UserRoleScalarWhereInput[]
    NOT?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[]
    id?: StringFilter<"UserRole"> | string
    name?: StringFilter<"UserRole"> | string
    description?: StringNullableFilter<"UserRole"> | string | null
    createdAt?: DateTimeFilter<"UserRole"> | Date | string
    updatedAt?: DateTimeFilter<"UserRole"> | Date | string
  }

  export type EmployeeUpsertWithoutUserInput = {
    update: XOR<EmployeeUpdateWithoutUserInput, EmployeeUncheckedUpdateWithoutUserInput>
    create: XOR<EmployeeCreateWithoutUserInput, EmployeeUncheckedCreateWithoutUserInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutUserInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutUserInput, EmployeeUncheckedUpdateWithoutUserInput>
  }

  export type EmployeeUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    stage?: EnumContentStageFieldUpdateOperationsInput | $Enums.ContentStage
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    stage?: EnumContentStageFieldUpdateOperationsInput | $Enums.ContentStage
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogCommentUpsertWithWhereUniqueWithoutUserInput = {
    where: BlogCommentWhereUniqueInput
    update: XOR<BlogCommentUpdateWithoutUserInput, BlogCommentUncheckedUpdateWithoutUserInput>
    create: XOR<BlogCommentCreateWithoutUserInput, BlogCommentUncheckedCreateWithoutUserInput>
  }

  export type BlogCommentUpdateWithWhereUniqueWithoutUserInput = {
    where: BlogCommentWhereUniqueInput
    data: XOR<BlogCommentUpdateWithoutUserInput, BlogCommentUncheckedUpdateWithoutUserInput>
  }

  export type BlogCommentUpdateManyWithWhereWithoutUserInput = {
    where: BlogCommentScalarWhereInput
    data: XOR<BlogCommentUpdateManyMutationInput, BlogCommentUncheckedUpdateManyWithoutUserInput>
  }

  export type BlogReactionUpsertWithWhereUniqueWithoutUserInput = {
    where: BlogReactionWhereUniqueInput
    update: XOR<BlogReactionUpdateWithoutUserInput, BlogReactionUncheckedUpdateWithoutUserInput>
    create: XOR<BlogReactionCreateWithoutUserInput, BlogReactionUncheckedCreateWithoutUserInput>
  }

  export type BlogReactionUpdateWithWhereUniqueWithoutUserInput = {
    where: BlogReactionWhereUniqueInput
    data: XOR<BlogReactionUpdateWithoutUserInput, BlogReactionUncheckedUpdateWithoutUserInput>
  }

  export type BlogReactionUpdateManyWithWhereWithoutUserInput = {
    where: BlogReactionScalarWhereInput
    data: XOR<BlogReactionUpdateManyMutationInput, BlogReactionUncheckedUpdateManyWithoutUserInput>
  }

  export type UserRolePermissionCreateWithoutRoleInput = {
    id?: string
    name: $Enums.PermissionName
    actions?: UserRolePermissionCreateactionsInput | $Enums.PermissionAction[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserRolePermissionUncheckedCreateWithoutRoleInput = {
    id?: string
    name: $Enums.PermissionName
    actions?: UserRolePermissionCreateactionsInput | $Enums.PermissionAction[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserRolePermissionCreateOrConnectWithoutRoleInput = {
    where: UserRolePermissionWhereUniqueInput
    create: XOR<UserRolePermissionCreateWithoutRoleInput, UserRolePermissionUncheckedCreateWithoutRoleInput>
  }

  export type UserRolePermissionCreateManyRoleInputEnvelope = {
    data: UserRolePermissionCreateManyRoleInput | UserRolePermissionCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutRolesInput = {
    id?: string
    email: string
    password: string
    name: string
    accessType?: $Enums.AccessType
    createdAt?: Date | string
    updatedAt?: Date | string
    employee?: EmployeeCreateNestedOneWithoutUserInput
    comments?: BlogCommentCreateNestedManyWithoutUserInput
    reactions?: BlogReactionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRolesInput = {
    id?: string
    email: string
    password: string
    name: string
    accessType?: $Enums.AccessType
    createdAt?: Date | string
    updatedAt?: Date | string
    employee?: EmployeeUncheckedCreateNestedOneWithoutUserInput
    comments?: BlogCommentUncheckedCreateNestedManyWithoutUserInput
    reactions?: BlogReactionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRolesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRolesInput, UserUncheckedCreateWithoutRolesInput>
  }

  export type UserRolePermissionUpsertWithWhereUniqueWithoutRoleInput = {
    where: UserRolePermissionWhereUniqueInput
    update: XOR<UserRolePermissionUpdateWithoutRoleInput, UserRolePermissionUncheckedUpdateWithoutRoleInput>
    create: XOR<UserRolePermissionCreateWithoutRoleInput, UserRolePermissionUncheckedCreateWithoutRoleInput>
  }

  export type UserRolePermissionUpdateWithWhereUniqueWithoutRoleInput = {
    where: UserRolePermissionWhereUniqueInput
    data: XOR<UserRolePermissionUpdateWithoutRoleInput, UserRolePermissionUncheckedUpdateWithoutRoleInput>
  }

  export type UserRolePermissionUpdateManyWithWhereWithoutRoleInput = {
    where: UserRolePermissionScalarWhereInput
    data: XOR<UserRolePermissionUpdateManyMutationInput, UserRolePermissionUncheckedUpdateManyWithoutRoleInput>
  }

  export type UserRolePermissionScalarWhereInput = {
    AND?: UserRolePermissionScalarWhereInput | UserRolePermissionScalarWhereInput[]
    OR?: UserRolePermissionScalarWhereInput[]
    NOT?: UserRolePermissionScalarWhereInput | UserRolePermissionScalarWhereInput[]
    id?: StringFilter<"UserRolePermission"> | string
    name?: EnumPermissionNameFilter<"UserRolePermission"> | $Enums.PermissionName
    actions?: EnumPermissionActionNullableListFilter<"UserRolePermission">
    roleId?: StringFilter<"UserRolePermission"> | string
    createdAt?: DateTimeFilter<"UserRolePermission"> | Date | string
    updatedAt?: DateTimeFilter<"UserRolePermission"> | Date | string
  }

  export type UserUpsertWithWhereUniqueWithoutRolesInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutRolesInput, UserUncheckedUpdateWithoutRolesInput>
    create: XOR<UserCreateWithoutRolesInput, UserUncheckedCreateWithoutRolesInput>
  }

  export type UserUpdateWithWhereUniqueWithoutRolesInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutRolesInput, UserUncheckedUpdateWithoutRolesInput>
  }

  export type UserUpdateManyWithWhereWithoutRolesInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutRolesInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    accessType?: EnumAccessTypeFilter<"User"> | $Enums.AccessType
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserRoleCreateWithoutPermissionsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutRolesInput
  }

  export type UserRoleUncheckedCreateWithoutPermissionsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutRolesInput
  }

  export type UserRoleCreateOrConnectWithoutPermissionsInput = {
    where: UserRoleWhereUniqueInput
    create: XOR<UserRoleCreateWithoutPermissionsInput, UserRoleUncheckedCreateWithoutPermissionsInput>
  }

  export type UserRoleUpsertWithoutPermissionsInput = {
    update: XOR<UserRoleUpdateWithoutPermissionsInput, UserRoleUncheckedUpdateWithoutPermissionsInput>
    create: XOR<UserRoleCreateWithoutPermissionsInput, UserRoleUncheckedCreateWithoutPermissionsInput>
    where?: UserRoleWhereInput
  }

  export type UserRoleUpdateToOneWithWhereWithoutPermissionsInput = {
    where?: UserRoleWhereInput
    data: XOR<UserRoleUpdateWithoutPermissionsInput, UserRoleUncheckedUpdateWithoutPermissionsInput>
  }

  export type UserRoleUpdateWithoutPermissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutRolesNestedInput
  }

  export type UserRoleUncheckedUpdateWithoutPermissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutRolesNestedInput
  }

  export type BlogCommentCreateManyArticleInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    content: string
    userId: string
    stage?: $Enums.ContentStage
  }

  export type BlogReactionCreateManyArticleInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    type: $Enums.ReactionType
  }

  export type BlogCommentUpdateWithoutArticleInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    stage?: EnumContentStageFieldUpdateOperationsInput | $Enums.ContentStage
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type BlogCommentUncheckedUpdateWithoutArticleInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    stage?: EnumContentStageFieldUpdateOperationsInput | $Enums.ContentStage
  }

  export type BlogCommentUncheckedUpdateManyWithoutArticleInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    stage?: EnumContentStageFieldUpdateOperationsInput | $Enums.ContentStage
  }

  export type BlogReactionUpdateWithoutArticleInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumReactionTypeFieldUpdateOperationsInput | $Enums.ReactionType
    user?: UserUpdateOneRequiredWithoutReactionsNestedInput
  }

  export type BlogReactionUncheckedUpdateWithoutArticleInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumReactionTypeFieldUpdateOperationsInput | $Enums.ReactionType
  }

  export type BlogReactionUncheckedUpdateManyWithoutArticleInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumReactionTypeFieldUpdateOperationsInput | $Enums.ReactionType
  }

  export type BlogArticleCreateManyCategoryInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    slug: string
    description: string
    content: string
    stage?: $Enums.ContentStage
    commentsCount?: number
    reactionCount?: number
  }

  export type BlogArticleUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    stage?: EnumContentStageFieldUpdateOperationsInput | $Enums.ContentStage
    commentsCount?: IntFieldUpdateOperationsInput | number
    reactionCount?: IntFieldUpdateOperationsInput | number
    comments?: BlogCommentUpdateManyWithoutArticleNestedInput
    BlogReaction?: BlogReactionUpdateManyWithoutArticleNestedInput
  }

  export type BlogArticleUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    stage?: EnumContentStageFieldUpdateOperationsInput | $Enums.ContentStage
    commentsCount?: IntFieldUpdateOperationsInput | number
    reactionCount?: IntFieldUpdateOperationsInput | number
    comments?: BlogCommentUncheckedUpdateManyWithoutArticleNestedInput
    BlogReaction?: BlogReactionUncheckedUpdateManyWithoutArticleNestedInput
  }

  export type BlogArticleUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    stage?: EnumContentStageFieldUpdateOperationsInput | $Enums.ContentStage
    commentsCount?: IntFieldUpdateOperationsInput | number
    reactionCount?: IntFieldUpdateOperationsInput | number
  }

  export type BlogCommentCreateManyUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    content: string
    articleId: string
    stage?: $Enums.ContentStage
  }

  export type BlogReactionCreateManyUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    articleId: string
    type: $Enums.ReactionType
  }

  export type UserRoleUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    permissions?: UserRolePermissionUpdateManyWithoutRoleNestedInput
  }

  export type UserRoleUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    permissions?: UserRolePermissionUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type UserRoleUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogCommentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    stage?: EnumContentStageFieldUpdateOperationsInput | $Enums.ContentStage
    article?: BlogArticleUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type BlogCommentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    articleId?: StringFieldUpdateOperationsInput | string
    stage?: EnumContentStageFieldUpdateOperationsInput | $Enums.ContentStage
  }

  export type BlogCommentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    articleId?: StringFieldUpdateOperationsInput | string
    stage?: EnumContentStageFieldUpdateOperationsInput | $Enums.ContentStage
  }

  export type BlogReactionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumReactionTypeFieldUpdateOperationsInput | $Enums.ReactionType
    article?: BlogArticleUpdateOneRequiredWithoutBlogReactionNestedInput
  }

  export type BlogReactionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    articleId?: StringFieldUpdateOperationsInput | string
    type?: EnumReactionTypeFieldUpdateOperationsInput | $Enums.ReactionType
  }

  export type BlogReactionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    articleId?: StringFieldUpdateOperationsInput | string
    type?: EnumReactionTypeFieldUpdateOperationsInput | $Enums.ReactionType
  }

  export type UserRolePermissionCreateManyRoleInput = {
    id?: string
    name: $Enums.PermissionName
    actions?: UserRolePermissionCreateactionsInput | $Enums.PermissionAction[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserRolePermissionUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: EnumPermissionNameFieldUpdateOperationsInput | $Enums.PermissionName
    actions?: UserRolePermissionUpdateactionsInput | $Enums.PermissionAction[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRolePermissionUncheckedUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: EnumPermissionNameFieldUpdateOperationsInput | $Enums.PermissionName
    actions?: UserRolePermissionUpdateactionsInput | $Enums.PermissionAction[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRolePermissionUncheckedUpdateManyWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: EnumPermissionNameFieldUpdateOperationsInput | $Enums.PermissionName
    actions?: UserRolePermissionUpdateactionsInput | $Enums.PermissionAction[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpdateWithoutRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    accessType?: EnumAccessTypeFieldUpdateOperationsInput | $Enums.AccessType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: EmployeeUpdateOneWithoutUserNestedInput
    comments?: BlogCommentUpdateManyWithoutUserNestedInput
    reactions?: BlogReactionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    accessType?: EnumAccessTypeFieldUpdateOperationsInput | $Enums.AccessType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: EmployeeUncheckedUpdateOneWithoutUserNestedInput
    comments?: BlogCommentUncheckedUpdateManyWithoutUserNestedInput
    reactions?: BlogReactionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    accessType?: EnumAccessTypeFieldUpdateOperationsInput | $Enums.AccessType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}