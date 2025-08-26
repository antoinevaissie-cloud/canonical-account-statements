
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
 * Model AccountsReceivable
 * 
 */
export type AccountsReceivable = $Result.DefaultSelection<Prisma.$AccountsReceivablePayload>
/**
 * Model AccountsPayable
 * 
 */
export type AccountsPayable = $Result.DefaultSelection<Prisma.$AccountsPayablePayload>
/**
 * Model Balance
 * 
 */
export type Balance = $Result.DefaultSelection<Prisma.$BalancePayload>
/**
 * Model MonthlyBudget
 * 
 */
export type MonthlyBudget = $Result.DefaultSelection<Prisma.$MonthlyBudgetPayload>
/**
 * Model ReviewNote
 * 
 */
export type ReviewNote = $Result.DefaultSelection<Prisma.$ReviewNotePayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more AccountsReceivables
 * const accountsReceivables = await prisma.accountsReceivable.findMany()
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
   * // Fetch zero or more AccountsReceivables
   * const accountsReceivables = await prisma.accountsReceivable.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.accountsReceivable`: Exposes CRUD operations for the **AccountsReceivable** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AccountsReceivables
    * const accountsReceivables = await prisma.accountsReceivable.findMany()
    * ```
    */
  get accountsReceivable(): Prisma.AccountsReceivableDelegate<ExtArgs>;

  /**
   * `prisma.accountsPayable`: Exposes CRUD operations for the **AccountsPayable** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AccountsPayables
    * const accountsPayables = await prisma.accountsPayable.findMany()
    * ```
    */
  get accountsPayable(): Prisma.AccountsPayableDelegate<ExtArgs>;

  /**
   * `prisma.balance`: Exposes CRUD operations for the **Balance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Balances
    * const balances = await prisma.balance.findMany()
    * ```
    */
  get balance(): Prisma.BalanceDelegate<ExtArgs>;

  /**
   * `prisma.monthlyBudget`: Exposes CRUD operations for the **MonthlyBudget** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MonthlyBudgets
    * const monthlyBudgets = await prisma.monthlyBudget.findMany()
    * ```
    */
  get monthlyBudget(): Prisma.MonthlyBudgetDelegate<ExtArgs>;

  /**
   * `prisma.reviewNote`: Exposes CRUD operations for the **ReviewNote** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReviewNotes
    * const reviewNotes = await prisma.reviewNote.findMany()
    * ```
    */
  get reviewNote(): Prisma.ReviewNoteDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    AccountsReceivable: 'AccountsReceivable',
    AccountsPayable: 'AccountsPayable',
    Balance: 'Balance',
    MonthlyBudget: 'MonthlyBudget',
    ReviewNote: 'ReviewNote'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "accountsReceivable" | "accountsPayable" | "balance" | "monthlyBudget" | "reviewNote"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      AccountsReceivable: {
        payload: Prisma.$AccountsReceivablePayload<ExtArgs>
        fields: Prisma.AccountsReceivableFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountsReceivableFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountsReceivablePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountsReceivableFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountsReceivablePayload>
          }
          findFirst: {
            args: Prisma.AccountsReceivableFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountsReceivablePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountsReceivableFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountsReceivablePayload>
          }
          findMany: {
            args: Prisma.AccountsReceivableFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountsReceivablePayload>[]
          }
          create: {
            args: Prisma.AccountsReceivableCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountsReceivablePayload>
          }
          createMany: {
            args: Prisma.AccountsReceivableCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountsReceivableCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountsReceivablePayload>[]
          }
          delete: {
            args: Prisma.AccountsReceivableDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountsReceivablePayload>
          }
          update: {
            args: Prisma.AccountsReceivableUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountsReceivablePayload>
          }
          deleteMany: {
            args: Prisma.AccountsReceivableDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountsReceivableUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AccountsReceivableUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountsReceivablePayload>
          }
          aggregate: {
            args: Prisma.AccountsReceivableAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccountsReceivable>
          }
          groupBy: {
            args: Prisma.AccountsReceivableGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountsReceivableGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountsReceivableCountArgs<ExtArgs>
            result: $Utils.Optional<AccountsReceivableCountAggregateOutputType> | number
          }
        }
      }
      AccountsPayable: {
        payload: Prisma.$AccountsPayablePayload<ExtArgs>
        fields: Prisma.AccountsPayableFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountsPayableFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountsPayablePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountsPayableFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountsPayablePayload>
          }
          findFirst: {
            args: Prisma.AccountsPayableFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountsPayablePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountsPayableFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountsPayablePayload>
          }
          findMany: {
            args: Prisma.AccountsPayableFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountsPayablePayload>[]
          }
          create: {
            args: Prisma.AccountsPayableCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountsPayablePayload>
          }
          createMany: {
            args: Prisma.AccountsPayableCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountsPayableCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountsPayablePayload>[]
          }
          delete: {
            args: Prisma.AccountsPayableDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountsPayablePayload>
          }
          update: {
            args: Prisma.AccountsPayableUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountsPayablePayload>
          }
          deleteMany: {
            args: Prisma.AccountsPayableDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountsPayableUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AccountsPayableUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountsPayablePayload>
          }
          aggregate: {
            args: Prisma.AccountsPayableAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccountsPayable>
          }
          groupBy: {
            args: Prisma.AccountsPayableGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountsPayableGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountsPayableCountArgs<ExtArgs>
            result: $Utils.Optional<AccountsPayableCountAggregateOutputType> | number
          }
        }
      }
      Balance: {
        payload: Prisma.$BalancePayload<ExtArgs>
        fields: Prisma.BalanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BalanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BalanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalancePayload>
          }
          findFirst: {
            args: Prisma.BalanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BalanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalancePayload>
          }
          findMany: {
            args: Prisma.BalanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalancePayload>[]
          }
          create: {
            args: Prisma.BalanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalancePayload>
          }
          createMany: {
            args: Prisma.BalanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BalanceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalancePayload>[]
          }
          delete: {
            args: Prisma.BalanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalancePayload>
          }
          update: {
            args: Prisma.BalanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalancePayload>
          }
          deleteMany: {
            args: Prisma.BalanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BalanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BalanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalancePayload>
          }
          aggregate: {
            args: Prisma.BalanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBalance>
          }
          groupBy: {
            args: Prisma.BalanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<BalanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.BalanceCountArgs<ExtArgs>
            result: $Utils.Optional<BalanceCountAggregateOutputType> | number
          }
        }
      }
      MonthlyBudget: {
        payload: Prisma.$MonthlyBudgetPayload<ExtArgs>
        fields: Prisma.MonthlyBudgetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MonthlyBudgetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyBudgetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MonthlyBudgetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyBudgetPayload>
          }
          findFirst: {
            args: Prisma.MonthlyBudgetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyBudgetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MonthlyBudgetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyBudgetPayload>
          }
          findMany: {
            args: Prisma.MonthlyBudgetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyBudgetPayload>[]
          }
          create: {
            args: Prisma.MonthlyBudgetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyBudgetPayload>
          }
          createMany: {
            args: Prisma.MonthlyBudgetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MonthlyBudgetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyBudgetPayload>[]
          }
          delete: {
            args: Prisma.MonthlyBudgetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyBudgetPayload>
          }
          update: {
            args: Prisma.MonthlyBudgetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyBudgetPayload>
          }
          deleteMany: {
            args: Prisma.MonthlyBudgetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MonthlyBudgetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MonthlyBudgetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyBudgetPayload>
          }
          aggregate: {
            args: Prisma.MonthlyBudgetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMonthlyBudget>
          }
          groupBy: {
            args: Prisma.MonthlyBudgetGroupByArgs<ExtArgs>
            result: $Utils.Optional<MonthlyBudgetGroupByOutputType>[]
          }
          count: {
            args: Prisma.MonthlyBudgetCountArgs<ExtArgs>
            result: $Utils.Optional<MonthlyBudgetCountAggregateOutputType> | number
          }
        }
      }
      ReviewNote: {
        payload: Prisma.$ReviewNotePayload<ExtArgs>
        fields: Prisma.ReviewNoteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewNoteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewNotePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewNoteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewNotePayload>
          }
          findFirst: {
            args: Prisma.ReviewNoteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewNotePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewNoteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewNotePayload>
          }
          findMany: {
            args: Prisma.ReviewNoteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewNotePayload>[]
          }
          create: {
            args: Prisma.ReviewNoteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewNotePayload>
          }
          createMany: {
            args: Prisma.ReviewNoteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReviewNoteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewNotePayload>[]
          }
          delete: {
            args: Prisma.ReviewNoteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewNotePayload>
          }
          update: {
            args: Prisma.ReviewNoteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewNotePayload>
          }
          deleteMany: {
            args: Prisma.ReviewNoteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewNoteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReviewNoteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewNotePayload>
          }
          aggregate: {
            args: Prisma.ReviewNoteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReviewNote>
          }
          groupBy: {
            args: Prisma.ReviewNoteGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewNoteGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewNoteCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewNoteCountAggregateOutputType> | number
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
   * Models
   */

  /**
   * Model AccountsReceivable
   */

  export type AggregateAccountsReceivable = {
    _count: AccountsReceivableCountAggregateOutputType | null
    _avg: AccountsReceivableAvgAggregateOutputType | null
    _sum: AccountsReceivableSumAggregateOutputType | null
    _min: AccountsReceivableMinAggregateOutputType | null
    _max: AccountsReceivableMaxAggregateOutputType | null
  }

  export type AccountsReceivableAvgAggregateOutputType = {
    amountCents: number | null
  }

  export type AccountsReceivableSumAggregateOutputType = {
    amountCents: number | null
  }

  export type AccountsReceivableMinAggregateOutputType = {
    id: string | null
    owedBy: string | null
    description: string | null
    amountCents: number | null
    currency: string | null
    isPaid: boolean | null
    paymentDate: Date | null
    notes: string | null
    url: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountsReceivableMaxAggregateOutputType = {
    id: string | null
    owedBy: string | null
    description: string | null
    amountCents: number | null
    currency: string | null
    isPaid: boolean | null
    paymentDate: Date | null
    notes: string | null
    url: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountsReceivableCountAggregateOutputType = {
    id: number
    owedBy: number
    description: number
    amountCents: number
    currency: number
    isPaid: number
    paymentDate: number
    notes: number
    url: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccountsReceivableAvgAggregateInputType = {
    amountCents?: true
  }

  export type AccountsReceivableSumAggregateInputType = {
    amountCents?: true
  }

  export type AccountsReceivableMinAggregateInputType = {
    id?: true
    owedBy?: true
    description?: true
    amountCents?: true
    currency?: true
    isPaid?: true
    paymentDate?: true
    notes?: true
    url?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountsReceivableMaxAggregateInputType = {
    id?: true
    owedBy?: true
    description?: true
    amountCents?: true
    currency?: true
    isPaid?: true
    paymentDate?: true
    notes?: true
    url?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountsReceivableCountAggregateInputType = {
    id?: true
    owedBy?: true
    description?: true
    amountCents?: true
    currency?: true
    isPaid?: true
    paymentDate?: true
    notes?: true
    url?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AccountsReceivableAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AccountsReceivable to aggregate.
     */
    where?: AccountsReceivableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccountsReceivables to fetch.
     */
    orderBy?: AccountsReceivableOrderByWithRelationInput | AccountsReceivableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountsReceivableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccountsReceivables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccountsReceivables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AccountsReceivables
    **/
    _count?: true | AccountsReceivableCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountsReceivableAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountsReceivableSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountsReceivableMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountsReceivableMaxAggregateInputType
  }

  export type GetAccountsReceivableAggregateType<T extends AccountsReceivableAggregateArgs> = {
        [P in keyof T & keyof AggregateAccountsReceivable]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccountsReceivable[P]>
      : GetScalarType<T[P], AggregateAccountsReceivable[P]>
  }




  export type AccountsReceivableGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountsReceivableWhereInput
    orderBy?: AccountsReceivableOrderByWithAggregationInput | AccountsReceivableOrderByWithAggregationInput[]
    by: AccountsReceivableScalarFieldEnum[] | AccountsReceivableScalarFieldEnum
    having?: AccountsReceivableScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountsReceivableCountAggregateInputType | true
    _avg?: AccountsReceivableAvgAggregateInputType
    _sum?: AccountsReceivableSumAggregateInputType
    _min?: AccountsReceivableMinAggregateInputType
    _max?: AccountsReceivableMaxAggregateInputType
  }

  export type AccountsReceivableGroupByOutputType = {
    id: string
    owedBy: string | null
    description: string
    amountCents: number
    currency: string
    isPaid: boolean
    paymentDate: Date
    notes: string | null
    url: string | null
    createdAt: Date
    updatedAt: Date
    _count: AccountsReceivableCountAggregateOutputType | null
    _avg: AccountsReceivableAvgAggregateOutputType | null
    _sum: AccountsReceivableSumAggregateOutputType | null
    _min: AccountsReceivableMinAggregateOutputType | null
    _max: AccountsReceivableMaxAggregateOutputType | null
  }

  type GetAccountsReceivableGroupByPayload<T extends AccountsReceivableGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountsReceivableGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountsReceivableGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountsReceivableGroupByOutputType[P]>
            : GetScalarType<T[P], AccountsReceivableGroupByOutputType[P]>
        }
      >
    >


  export type AccountsReceivableSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    owedBy?: boolean
    description?: boolean
    amountCents?: boolean
    currency?: boolean
    isPaid?: boolean
    paymentDate?: boolean
    notes?: boolean
    url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["accountsReceivable"]>

  export type AccountsReceivableSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    owedBy?: boolean
    description?: boolean
    amountCents?: boolean
    currency?: boolean
    isPaid?: boolean
    paymentDate?: boolean
    notes?: boolean
    url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["accountsReceivable"]>

  export type AccountsReceivableSelectScalar = {
    id?: boolean
    owedBy?: boolean
    description?: boolean
    amountCents?: boolean
    currency?: boolean
    isPaid?: boolean
    paymentDate?: boolean
    notes?: boolean
    url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $AccountsReceivablePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AccountsReceivable"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      owedBy: string | null
      description: string
      amountCents: number
      currency: string
      isPaid: boolean
      paymentDate: Date
      notes: string | null
      url: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["accountsReceivable"]>
    composites: {}
  }

  type AccountsReceivableGetPayload<S extends boolean | null | undefined | AccountsReceivableDefaultArgs> = $Result.GetResult<Prisma.$AccountsReceivablePayload, S>

  type AccountsReceivableCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AccountsReceivableFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AccountsReceivableCountAggregateInputType | true
    }

  export interface AccountsReceivableDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AccountsReceivable'], meta: { name: 'AccountsReceivable' } }
    /**
     * Find zero or one AccountsReceivable that matches the filter.
     * @param {AccountsReceivableFindUniqueArgs} args - Arguments to find a AccountsReceivable
     * @example
     * // Get one AccountsReceivable
     * const accountsReceivable = await prisma.accountsReceivable.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountsReceivableFindUniqueArgs>(args: SelectSubset<T, AccountsReceivableFindUniqueArgs<ExtArgs>>): Prisma__AccountsReceivableClient<$Result.GetResult<Prisma.$AccountsReceivablePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AccountsReceivable that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AccountsReceivableFindUniqueOrThrowArgs} args - Arguments to find a AccountsReceivable
     * @example
     * // Get one AccountsReceivable
     * const accountsReceivable = await prisma.accountsReceivable.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountsReceivableFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountsReceivableFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountsReceivableClient<$Result.GetResult<Prisma.$AccountsReceivablePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AccountsReceivable that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountsReceivableFindFirstArgs} args - Arguments to find a AccountsReceivable
     * @example
     * // Get one AccountsReceivable
     * const accountsReceivable = await prisma.accountsReceivable.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountsReceivableFindFirstArgs>(args?: SelectSubset<T, AccountsReceivableFindFirstArgs<ExtArgs>>): Prisma__AccountsReceivableClient<$Result.GetResult<Prisma.$AccountsReceivablePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AccountsReceivable that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountsReceivableFindFirstOrThrowArgs} args - Arguments to find a AccountsReceivable
     * @example
     * // Get one AccountsReceivable
     * const accountsReceivable = await prisma.accountsReceivable.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountsReceivableFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountsReceivableFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountsReceivableClient<$Result.GetResult<Prisma.$AccountsReceivablePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AccountsReceivables that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountsReceivableFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AccountsReceivables
     * const accountsReceivables = await prisma.accountsReceivable.findMany()
     * 
     * // Get first 10 AccountsReceivables
     * const accountsReceivables = await prisma.accountsReceivable.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountsReceivableWithIdOnly = await prisma.accountsReceivable.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountsReceivableFindManyArgs>(args?: SelectSubset<T, AccountsReceivableFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountsReceivablePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AccountsReceivable.
     * @param {AccountsReceivableCreateArgs} args - Arguments to create a AccountsReceivable.
     * @example
     * // Create one AccountsReceivable
     * const AccountsReceivable = await prisma.accountsReceivable.create({
     *   data: {
     *     // ... data to create a AccountsReceivable
     *   }
     * })
     * 
     */
    create<T extends AccountsReceivableCreateArgs>(args: SelectSubset<T, AccountsReceivableCreateArgs<ExtArgs>>): Prisma__AccountsReceivableClient<$Result.GetResult<Prisma.$AccountsReceivablePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AccountsReceivables.
     * @param {AccountsReceivableCreateManyArgs} args - Arguments to create many AccountsReceivables.
     * @example
     * // Create many AccountsReceivables
     * const accountsReceivable = await prisma.accountsReceivable.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountsReceivableCreateManyArgs>(args?: SelectSubset<T, AccountsReceivableCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AccountsReceivables and returns the data saved in the database.
     * @param {AccountsReceivableCreateManyAndReturnArgs} args - Arguments to create many AccountsReceivables.
     * @example
     * // Create many AccountsReceivables
     * const accountsReceivable = await prisma.accountsReceivable.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AccountsReceivables and only return the `id`
     * const accountsReceivableWithIdOnly = await prisma.accountsReceivable.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountsReceivableCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountsReceivableCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountsReceivablePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AccountsReceivable.
     * @param {AccountsReceivableDeleteArgs} args - Arguments to delete one AccountsReceivable.
     * @example
     * // Delete one AccountsReceivable
     * const AccountsReceivable = await prisma.accountsReceivable.delete({
     *   where: {
     *     // ... filter to delete one AccountsReceivable
     *   }
     * })
     * 
     */
    delete<T extends AccountsReceivableDeleteArgs>(args: SelectSubset<T, AccountsReceivableDeleteArgs<ExtArgs>>): Prisma__AccountsReceivableClient<$Result.GetResult<Prisma.$AccountsReceivablePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AccountsReceivable.
     * @param {AccountsReceivableUpdateArgs} args - Arguments to update one AccountsReceivable.
     * @example
     * // Update one AccountsReceivable
     * const accountsReceivable = await prisma.accountsReceivable.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountsReceivableUpdateArgs>(args: SelectSubset<T, AccountsReceivableUpdateArgs<ExtArgs>>): Prisma__AccountsReceivableClient<$Result.GetResult<Prisma.$AccountsReceivablePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AccountsReceivables.
     * @param {AccountsReceivableDeleteManyArgs} args - Arguments to filter AccountsReceivables to delete.
     * @example
     * // Delete a few AccountsReceivables
     * const { count } = await prisma.accountsReceivable.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountsReceivableDeleteManyArgs>(args?: SelectSubset<T, AccountsReceivableDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AccountsReceivables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountsReceivableUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AccountsReceivables
     * const accountsReceivable = await prisma.accountsReceivable.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountsReceivableUpdateManyArgs>(args: SelectSubset<T, AccountsReceivableUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AccountsReceivable.
     * @param {AccountsReceivableUpsertArgs} args - Arguments to update or create a AccountsReceivable.
     * @example
     * // Update or create a AccountsReceivable
     * const accountsReceivable = await prisma.accountsReceivable.upsert({
     *   create: {
     *     // ... data to create a AccountsReceivable
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AccountsReceivable we want to update
     *   }
     * })
     */
    upsert<T extends AccountsReceivableUpsertArgs>(args: SelectSubset<T, AccountsReceivableUpsertArgs<ExtArgs>>): Prisma__AccountsReceivableClient<$Result.GetResult<Prisma.$AccountsReceivablePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AccountsReceivables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountsReceivableCountArgs} args - Arguments to filter AccountsReceivables to count.
     * @example
     * // Count the number of AccountsReceivables
     * const count = await prisma.accountsReceivable.count({
     *   where: {
     *     // ... the filter for the AccountsReceivables we want to count
     *   }
     * })
    **/
    count<T extends AccountsReceivableCountArgs>(
      args?: Subset<T, AccountsReceivableCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountsReceivableCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AccountsReceivable.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountsReceivableAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountsReceivableAggregateArgs>(args: Subset<T, AccountsReceivableAggregateArgs>): Prisma.PrismaPromise<GetAccountsReceivableAggregateType<T>>

    /**
     * Group by AccountsReceivable.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountsReceivableGroupByArgs} args - Group by arguments.
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
      T extends AccountsReceivableGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountsReceivableGroupByArgs['orderBy'] }
        : { orderBy?: AccountsReceivableGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AccountsReceivableGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountsReceivableGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AccountsReceivable model
   */
  readonly fields: AccountsReceivableFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AccountsReceivable.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountsReceivableClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the AccountsReceivable model
   */ 
  interface AccountsReceivableFieldRefs {
    readonly id: FieldRef<"AccountsReceivable", 'String'>
    readonly owedBy: FieldRef<"AccountsReceivable", 'String'>
    readonly description: FieldRef<"AccountsReceivable", 'String'>
    readonly amountCents: FieldRef<"AccountsReceivable", 'Int'>
    readonly currency: FieldRef<"AccountsReceivable", 'String'>
    readonly isPaid: FieldRef<"AccountsReceivable", 'Boolean'>
    readonly paymentDate: FieldRef<"AccountsReceivable", 'DateTime'>
    readonly notes: FieldRef<"AccountsReceivable", 'String'>
    readonly url: FieldRef<"AccountsReceivable", 'String'>
    readonly createdAt: FieldRef<"AccountsReceivable", 'DateTime'>
    readonly updatedAt: FieldRef<"AccountsReceivable", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AccountsReceivable findUnique
   */
  export type AccountsReceivableFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountsReceivable
     */
    select?: AccountsReceivableSelect<ExtArgs> | null
    /**
     * Filter, which AccountsReceivable to fetch.
     */
    where: AccountsReceivableWhereUniqueInput
  }

  /**
   * AccountsReceivable findUniqueOrThrow
   */
  export type AccountsReceivableFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountsReceivable
     */
    select?: AccountsReceivableSelect<ExtArgs> | null
    /**
     * Filter, which AccountsReceivable to fetch.
     */
    where: AccountsReceivableWhereUniqueInput
  }

  /**
   * AccountsReceivable findFirst
   */
  export type AccountsReceivableFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountsReceivable
     */
    select?: AccountsReceivableSelect<ExtArgs> | null
    /**
     * Filter, which AccountsReceivable to fetch.
     */
    where?: AccountsReceivableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccountsReceivables to fetch.
     */
    orderBy?: AccountsReceivableOrderByWithRelationInput | AccountsReceivableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AccountsReceivables.
     */
    cursor?: AccountsReceivableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccountsReceivables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccountsReceivables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AccountsReceivables.
     */
    distinct?: AccountsReceivableScalarFieldEnum | AccountsReceivableScalarFieldEnum[]
  }

  /**
   * AccountsReceivable findFirstOrThrow
   */
  export type AccountsReceivableFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountsReceivable
     */
    select?: AccountsReceivableSelect<ExtArgs> | null
    /**
     * Filter, which AccountsReceivable to fetch.
     */
    where?: AccountsReceivableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccountsReceivables to fetch.
     */
    orderBy?: AccountsReceivableOrderByWithRelationInput | AccountsReceivableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AccountsReceivables.
     */
    cursor?: AccountsReceivableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccountsReceivables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccountsReceivables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AccountsReceivables.
     */
    distinct?: AccountsReceivableScalarFieldEnum | AccountsReceivableScalarFieldEnum[]
  }

  /**
   * AccountsReceivable findMany
   */
  export type AccountsReceivableFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountsReceivable
     */
    select?: AccountsReceivableSelect<ExtArgs> | null
    /**
     * Filter, which AccountsReceivables to fetch.
     */
    where?: AccountsReceivableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccountsReceivables to fetch.
     */
    orderBy?: AccountsReceivableOrderByWithRelationInput | AccountsReceivableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AccountsReceivables.
     */
    cursor?: AccountsReceivableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccountsReceivables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccountsReceivables.
     */
    skip?: number
    distinct?: AccountsReceivableScalarFieldEnum | AccountsReceivableScalarFieldEnum[]
  }

  /**
   * AccountsReceivable create
   */
  export type AccountsReceivableCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountsReceivable
     */
    select?: AccountsReceivableSelect<ExtArgs> | null
    /**
     * The data needed to create a AccountsReceivable.
     */
    data: XOR<AccountsReceivableCreateInput, AccountsReceivableUncheckedCreateInput>
  }

  /**
   * AccountsReceivable createMany
   */
  export type AccountsReceivableCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AccountsReceivables.
     */
    data: AccountsReceivableCreateManyInput | AccountsReceivableCreateManyInput[]
  }

  /**
   * AccountsReceivable createManyAndReturn
   */
  export type AccountsReceivableCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountsReceivable
     */
    select?: AccountsReceivableSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AccountsReceivables.
     */
    data: AccountsReceivableCreateManyInput | AccountsReceivableCreateManyInput[]
  }

  /**
   * AccountsReceivable update
   */
  export type AccountsReceivableUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountsReceivable
     */
    select?: AccountsReceivableSelect<ExtArgs> | null
    /**
     * The data needed to update a AccountsReceivable.
     */
    data: XOR<AccountsReceivableUpdateInput, AccountsReceivableUncheckedUpdateInput>
    /**
     * Choose, which AccountsReceivable to update.
     */
    where: AccountsReceivableWhereUniqueInput
  }

  /**
   * AccountsReceivable updateMany
   */
  export type AccountsReceivableUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AccountsReceivables.
     */
    data: XOR<AccountsReceivableUpdateManyMutationInput, AccountsReceivableUncheckedUpdateManyInput>
    /**
     * Filter which AccountsReceivables to update
     */
    where?: AccountsReceivableWhereInput
  }

  /**
   * AccountsReceivable upsert
   */
  export type AccountsReceivableUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountsReceivable
     */
    select?: AccountsReceivableSelect<ExtArgs> | null
    /**
     * The filter to search for the AccountsReceivable to update in case it exists.
     */
    where: AccountsReceivableWhereUniqueInput
    /**
     * In case the AccountsReceivable found by the `where` argument doesn't exist, create a new AccountsReceivable with this data.
     */
    create: XOR<AccountsReceivableCreateInput, AccountsReceivableUncheckedCreateInput>
    /**
     * In case the AccountsReceivable was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountsReceivableUpdateInput, AccountsReceivableUncheckedUpdateInput>
  }

  /**
   * AccountsReceivable delete
   */
  export type AccountsReceivableDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountsReceivable
     */
    select?: AccountsReceivableSelect<ExtArgs> | null
    /**
     * Filter which AccountsReceivable to delete.
     */
    where: AccountsReceivableWhereUniqueInput
  }

  /**
   * AccountsReceivable deleteMany
   */
  export type AccountsReceivableDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AccountsReceivables to delete
     */
    where?: AccountsReceivableWhereInput
  }

  /**
   * AccountsReceivable without action
   */
  export type AccountsReceivableDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountsReceivable
     */
    select?: AccountsReceivableSelect<ExtArgs> | null
  }


  /**
   * Model AccountsPayable
   */

  export type AggregateAccountsPayable = {
    _count: AccountsPayableCountAggregateOutputType | null
    _avg: AccountsPayableAvgAggregateOutputType | null
    _sum: AccountsPayableSumAggregateOutputType | null
    _min: AccountsPayableMinAggregateOutputType | null
    _max: AccountsPayableMaxAggregateOutputType | null
  }

  export type AccountsPayableAvgAggregateOutputType = {
    amountCents: number | null
  }

  export type AccountsPayableSumAggregateOutputType = {
    amountCents: number | null
  }

  export type AccountsPayableMinAggregateOutputType = {
    id: string | null
    payee: string | null
    description: string | null
    amountCents: number | null
    currency: string | null
    isPaid: boolean | null
    paymentDate: Date | null
    notes: string | null
    url: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountsPayableMaxAggregateOutputType = {
    id: string | null
    payee: string | null
    description: string | null
    amountCents: number | null
    currency: string | null
    isPaid: boolean | null
    paymentDate: Date | null
    notes: string | null
    url: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountsPayableCountAggregateOutputType = {
    id: number
    payee: number
    description: number
    amountCents: number
    currency: number
    isPaid: number
    paymentDate: number
    notes: number
    url: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccountsPayableAvgAggregateInputType = {
    amountCents?: true
  }

  export type AccountsPayableSumAggregateInputType = {
    amountCents?: true
  }

  export type AccountsPayableMinAggregateInputType = {
    id?: true
    payee?: true
    description?: true
    amountCents?: true
    currency?: true
    isPaid?: true
    paymentDate?: true
    notes?: true
    url?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountsPayableMaxAggregateInputType = {
    id?: true
    payee?: true
    description?: true
    amountCents?: true
    currency?: true
    isPaid?: true
    paymentDate?: true
    notes?: true
    url?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountsPayableCountAggregateInputType = {
    id?: true
    payee?: true
    description?: true
    amountCents?: true
    currency?: true
    isPaid?: true
    paymentDate?: true
    notes?: true
    url?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AccountsPayableAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AccountsPayable to aggregate.
     */
    where?: AccountsPayableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccountsPayables to fetch.
     */
    orderBy?: AccountsPayableOrderByWithRelationInput | AccountsPayableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountsPayableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccountsPayables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccountsPayables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AccountsPayables
    **/
    _count?: true | AccountsPayableCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountsPayableAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountsPayableSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountsPayableMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountsPayableMaxAggregateInputType
  }

  export type GetAccountsPayableAggregateType<T extends AccountsPayableAggregateArgs> = {
        [P in keyof T & keyof AggregateAccountsPayable]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccountsPayable[P]>
      : GetScalarType<T[P], AggregateAccountsPayable[P]>
  }




  export type AccountsPayableGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountsPayableWhereInput
    orderBy?: AccountsPayableOrderByWithAggregationInput | AccountsPayableOrderByWithAggregationInput[]
    by: AccountsPayableScalarFieldEnum[] | AccountsPayableScalarFieldEnum
    having?: AccountsPayableScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountsPayableCountAggregateInputType | true
    _avg?: AccountsPayableAvgAggregateInputType
    _sum?: AccountsPayableSumAggregateInputType
    _min?: AccountsPayableMinAggregateInputType
    _max?: AccountsPayableMaxAggregateInputType
  }

  export type AccountsPayableGroupByOutputType = {
    id: string
    payee: string | null
    description: string | null
    amountCents: number
    currency: string
    isPaid: boolean
    paymentDate: Date
    notes: string | null
    url: string | null
    createdAt: Date
    updatedAt: Date
    _count: AccountsPayableCountAggregateOutputType | null
    _avg: AccountsPayableAvgAggregateOutputType | null
    _sum: AccountsPayableSumAggregateOutputType | null
    _min: AccountsPayableMinAggregateOutputType | null
    _max: AccountsPayableMaxAggregateOutputType | null
  }

  type GetAccountsPayableGroupByPayload<T extends AccountsPayableGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountsPayableGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountsPayableGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountsPayableGroupByOutputType[P]>
            : GetScalarType<T[P], AccountsPayableGroupByOutputType[P]>
        }
      >
    >


  export type AccountsPayableSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    payee?: boolean
    description?: boolean
    amountCents?: boolean
    currency?: boolean
    isPaid?: boolean
    paymentDate?: boolean
    notes?: boolean
    url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["accountsPayable"]>

  export type AccountsPayableSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    payee?: boolean
    description?: boolean
    amountCents?: boolean
    currency?: boolean
    isPaid?: boolean
    paymentDate?: boolean
    notes?: boolean
    url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["accountsPayable"]>

  export type AccountsPayableSelectScalar = {
    id?: boolean
    payee?: boolean
    description?: boolean
    amountCents?: boolean
    currency?: boolean
    isPaid?: boolean
    paymentDate?: boolean
    notes?: boolean
    url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $AccountsPayablePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AccountsPayable"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      payee: string | null
      description: string | null
      amountCents: number
      currency: string
      isPaid: boolean
      paymentDate: Date
      notes: string | null
      url: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["accountsPayable"]>
    composites: {}
  }

  type AccountsPayableGetPayload<S extends boolean | null | undefined | AccountsPayableDefaultArgs> = $Result.GetResult<Prisma.$AccountsPayablePayload, S>

  type AccountsPayableCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AccountsPayableFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AccountsPayableCountAggregateInputType | true
    }

  export interface AccountsPayableDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AccountsPayable'], meta: { name: 'AccountsPayable' } }
    /**
     * Find zero or one AccountsPayable that matches the filter.
     * @param {AccountsPayableFindUniqueArgs} args - Arguments to find a AccountsPayable
     * @example
     * // Get one AccountsPayable
     * const accountsPayable = await prisma.accountsPayable.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountsPayableFindUniqueArgs>(args: SelectSubset<T, AccountsPayableFindUniqueArgs<ExtArgs>>): Prisma__AccountsPayableClient<$Result.GetResult<Prisma.$AccountsPayablePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AccountsPayable that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AccountsPayableFindUniqueOrThrowArgs} args - Arguments to find a AccountsPayable
     * @example
     * // Get one AccountsPayable
     * const accountsPayable = await prisma.accountsPayable.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountsPayableFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountsPayableFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountsPayableClient<$Result.GetResult<Prisma.$AccountsPayablePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AccountsPayable that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountsPayableFindFirstArgs} args - Arguments to find a AccountsPayable
     * @example
     * // Get one AccountsPayable
     * const accountsPayable = await prisma.accountsPayable.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountsPayableFindFirstArgs>(args?: SelectSubset<T, AccountsPayableFindFirstArgs<ExtArgs>>): Prisma__AccountsPayableClient<$Result.GetResult<Prisma.$AccountsPayablePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AccountsPayable that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountsPayableFindFirstOrThrowArgs} args - Arguments to find a AccountsPayable
     * @example
     * // Get one AccountsPayable
     * const accountsPayable = await prisma.accountsPayable.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountsPayableFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountsPayableFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountsPayableClient<$Result.GetResult<Prisma.$AccountsPayablePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AccountsPayables that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountsPayableFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AccountsPayables
     * const accountsPayables = await prisma.accountsPayable.findMany()
     * 
     * // Get first 10 AccountsPayables
     * const accountsPayables = await prisma.accountsPayable.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountsPayableWithIdOnly = await prisma.accountsPayable.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountsPayableFindManyArgs>(args?: SelectSubset<T, AccountsPayableFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountsPayablePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AccountsPayable.
     * @param {AccountsPayableCreateArgs} args - Arguments to create a AccountsPayable.
     * @example
     * // Create one AccountsPayable
     * const AccountsPayable = await prisma.accountsPayable.create({
     *   data: {
     *     // ... data to create a AccountsPayable
     *   }
     * })
     * 
     */
    create<T extends AccountsPayableCreateArgs>(args: SelectSubset<T, AccountsPayableCreateArgs<ExtArgs>>): Prisma__AccountsPayableClient<$Result.GetResult<Prisma.$AccountsPayablePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AccountsPayables.
     * @param {AccountsPayableCreateManyArgs} args - Arguments to create many AccountsPayables.
     * @example
     * // Create many AccountsPayables
     * const accountsPayable = await prisma.accountsPayable.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountsPayableCreateManyArgs>(args?: SelectSubset<T, AccountsPayableCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AccountsPayables and returns the data saved in the database.
     * @param {AccountsPayableCreateManyAndReturnArgs} args - Arguments to create many AccountsPayables.
     * @example
     * // Create many AccountsPayables
     * const accountsPayable = await prisma.accountsPayable.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AccountsPayables and only return the `id`
     * const accountsPayableWithIdOnly = await prisma.accountsPayable.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountsPayableCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountsPayableCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountsPayablePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AccountsPayable.
     * @param {AccountsPayableDeleteArgs} args - Arguments to delete one AccountsPayable.
     * @example
     * // Delete one AccountsPayable
     * const AccountsPayable = await prisma.accountsPayable.delete({
     *   where: {
     *     // ... filter to delete one AccountsPayable
     *   }
     * })
     * 
     */
    delete<T extends AccountsPayableDeleteArgs>(args: SelectSubset<T, AccountsPayableDeleteArgs<ExtArgs>>): Prisma__AccountsPayableClient<$Result.GetResult<Prisma.$AccountsPayablePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AccountsPayable.
     * @param {AccountsPayableUpdateArgs} args - Arguments to update one AccountsPayable.
     * @example
     * // Update one AccountsPayable
     * const accountsPayable = await prisma.accountsPayable.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountsPayableUpdateArgs>(args: SelectSubset<T, AccountsPayableUpdateArgs<ExtArgs>>): Prisma__AccountsPayableClient<$Result.GetResult<Prisma.$AccountsPayablePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AccountsPayables.
     * @param {AccountsPayableDeleteManyArgs} args - Arguments to filter AccountsPayables to delete.
     * @example
     * // Delete a few AccountsPayables
     * const { count } = await prisma.accountsPayable.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountsPayableDeleteManyArgs>(args?: SelectSubset<T, AccountsPayableDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AccountsPayables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountsPayableUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AccountsPayables
     * const accountsPayable = await prisma.accountsPayable.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountsPayableUpdateManyArgs>(args: SelectSubset<T, AccountsPayableUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AccountsPayable.
     * @param {AccountsPayableUpsertArgs} args - Arguments to update or create a AccountsPayable.
     * @example
     * // Update or create a AccountsPayable
     * const accountsPayable = await prisma.accountsPayable.upsert({
     *   create: {
     *     // ... data to create a AccountsPayable
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AccountsPayable we want to update
     *   }
     * })
     */
    upsert<T extends AccountsPayableUpsertArgs>(args: SelectSubset<T, AccountsPayableUpsertArgs<ExtArgs>>): Prisma__AccountsPayableClient<$Result.GetResult<Prisma.$AccountsPayablePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AccountsPayables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountsPayableCountArgs} args - Arguments to filter AccountsPayables to count.
     * @example
     * // Count the number of AccountsPayables
     * const count = await prisma.accountsPayable.count({
     *   where: {
     *     // ... the filter for the AccountsPayables we want to count
     *   }
     * })
    **/
    count<T extends AccountsPayableCountArgs>(
      args?: Subset<T, AccountsPayableCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountsPayableCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AccountsPayable.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountsPayableAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountsPayableAggregateArgs>(args: Subset<T, AccountsPayableAggregateArgs>): Prisma.PrismaPromise<GetAccountsPayableAggregateType<T>>

    /**
     * Group by AccountsPayable.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountsPayableGroupByArgs} args - Group by arguments.
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
      T extends AccountsPayableGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountsPayableGroupByArgs['orderBy'] }
        : { orderBy?: AccountsPayableGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AccountsPayableGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountsPayableGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AccountsPayable model
   */
  readonly fields: AccountsPayableFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AccountsPayable.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountsPayableClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the AccountsPayable model
   */ 
  interface AccountsPayableFieldRefs {
    readonly id: FieldRef<"AccountsPayable", 'String'>
    readonly payee: FieldRef<"AccountsPayable", 'String'>
    readonly description: FieldRef<"AccountsPayable", 'String'>
    readonly amountCents: FieldRef<"AccountsPayable", 'Int'>
    readonly currency: FieldRef<"AccountsPayable", 'String'>
    readonly isPaid: FieldRef<"AccountsPayable", 'Boolean'>
    readonly paymentDate: FieldRef<"AccountsPayable", 'DateTime'>
    readonly notes: FieldRef<"AccountsPayable", 'String'>
    readonly url: FieldRef<"AccountsPayable", 'String'>
    readonly createdAt: FieldRef<"AccountsPayable", 'DateTime'>
    readonly updatedAt: FieldRef<"AccountsPayable", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AccountsPayable findUnique
   */
  export type AccountsPayableFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountsPayable
     */
    select?: AccountsPayableSelect<ExtArgs> | null
    /**
     * Filter, which AccountsPayable to fetch.
     */
    where: AccountsPayableWhereUniqueInput
  }

  /**
   * AccountsPayable findUniqueOrThrow
   */
  export type AccountsPayableFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountsPayable
     */
    select?: AccountsPayableSelect<ExtArgs> | null
    /**
     * Filter, which AccountsPayable to fetch.
     */
    where: AccountsPayableWhereUniqueInput
  }

  /**
   * AccountsPayable findFirst
   */
  export type AccountsPayableFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountsPayable
     */
    select?: AccountsPayableSelect<ExtArgs> | null
    /**
     * Filter, which AccountsPayable to fetch.
     */
    where?: AccountsPayableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccountsPayables to fetch.
     */
    orderBy?: AccountsPayableOrderByWithRelationInput | AccountsPayableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AccountsPayables.
     */
    cursor?: AccountsPayableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccountsPayables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccountsPayables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AccountsPayables.
     */
    distinct?: AccountsPayableScalarFieldEnum | AccountsPayableScalarFieldEnum[]
  }

  /**
   * AccountsPayable findFirstOrThrow
   */
  export type AccountsPayableFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountsPayable
     */
    select?: AccountsPayableSelect<ExtArgs> | null
    /**
     * Filter, which AccountsPayable to fetch.
     */
    where?: AccountsPayableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccountsPayables to fetch.
     */
    orderBy?: AccountsPayableOrderByWithRelationInput | AccountsPayableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AccountsPayables.
     */
    cursor?: AccountsPayableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccountsPayables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccountsPayables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AccountsPayables.
     */
    distinct?: AccountsPayableScalarFieldEnum | AccountsPayableScalarFieldEnum[]
  }

  /**
   * AccountsPayable findMany
   */
  export type AccountsPayableFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountsPayable
     */
    select?: AccountsPayableSelect<ExtArgs> | null
    /**
     * Filter, which AccountsPayables to fetch.
     */
    where?: AccountsPayableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccountsPayables to fetch.
     */
    orderBy?: AccountsPayableOrderByWithRelationInput | AccountsPayableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AccountsPayables.
     */
    cursor?: AccountsPayableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccountsPayables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccountsPayables.
     */
    skip?: number
    distinct?: AccountsPayableScalarFieldEnum | AccountsPayableScalarFieldEnum[]
  }

  /**
   * AccountsPayable create
   */
  export type AccountsPayableCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountsPayable
     */
    select?: AccountsPayableSelect<ExtArgs> | null
    /**
     * The data needed to create a AccountsPayable.
     */
    data: XOR<AccountsPayableCreateInput, AccountsPayableUncheckedCreateInput>
  }

  /**
   * AccountsPayable createMany
   */
  export type AccountsPayableCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AccountsPayables.
     */
    data: AccountsPayableCreateManyInput | AccountsPayableCreateManyInput[]
  }

  /**
   * AccountsPayable createManyAndReturn
   */
  export type AccountsPayableCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountsPayable
     */
    select?: AccountsPayableSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AccountsPayables.
     */
    data: AccountsPayableCreateManyInput | AccountsPayableCreateManyInput[]
  }

  /**
   * AccountsPayable update
   */
  export type AccountsPayableUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountsPayable
     */
    select?: AccountsPayableSelect<ExtArgs> | null
    /**
     * The data needed to update a AccountsPayable.
     */
    data: XOR<AccountsPayableUpdateInput, AccountsPayableUncheckedUpdateInput>
    /**
     * Choose, which AccountsPayable to update.
     */
    where: AccountsPayableWhereUniqueInput
  }

  /**
   * AccountsPayable updateMany
   */
  export type AccountsPayableUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AccountsPayables.
     */
    data: XOR<AccountsPayableUpdateManyMutationInput, AccountsPayableUncheckedUpdateManyInput>
    /**
     * Filter which AccountsPayables to update
     */
    where?: AccountsPayableWhereInput
  }

  /**
   * AccountsPayable upsert
   */
  export type AccountsPayableUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountsPayable
     */
    select?: AccountsPayableSelect<ExtArgs> | null
    /**
     * The filter to search for the AccountsPayable to update in case it exists.
     */
    where: AccountsPayableWhereUniqueInput
    /**
     * In case the AccountsPayable found by the `where` argument doesn't exist, create a new AccountsPayable with this data.
     */
    create: XOR<AccountsPayableCreateInput, AccountsPayableUncheckedCreateInput>
    /**
     * In case the AccountsPayable was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountsPayableUpdateInput, AccountsPayableUncheckedUpdateInput>
  }

  /**
   * AccountsPayable delete
   */
  export type AccountsPayableDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountsPayable
     */
    select?: AccountsPayableSelect<ExtArgs> | null
    /**
     * Filter which AccountsPayable to delete.
     */
    where: AccountsPayableWhereUniqueInput
  }

  /**
   * AccountsPayable deleteMany
   */
  export type AccountsPayableDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AccountsPayables to delete
     */
    where?: AccountsPayableWhereInput
  }

  /**
   * AccountsPayable without action
   */
  export type AccountsPayableDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountsPayable
     */
    select?: AccountsPayableSelect<ExtArgs> | null
  }


  /**
   * Model Balance
   */

  export type AggregateBalance = {
    _count: BalanceCountAggregateOutputType | null
    _avg: BalanceAvgAggregateOutputType | null
    _sum: BalanceSumAggregateOutputType | null
    _min: BalanceMinAggregateOutputType | null
    _max: BalanceMaxAggregateOutputType | null
  }

  export type BalanceAvgAggregateOutputType = {
    boursoramaCents: number | null
    boursoramaJointCents: number | null
    bnpCents: number | null
    revolutGbpCents: number | null
    otherAccountsCents: number | null
    sumOfCashCents: number | null
  }

  export type BalanceSumAggregateOutputType = {
    boursoramaCents: number | null
    boursoramaJointCents: number | null
    bnpCents: number | null
    revolutGbpCents: number | null
    otherAccountsCents: number | null
    sumOfCashCents: number | null
  }

  export type BalanceMinAggregateOutputType = {
    id: string | null
    month: Date | null
    boursoramaCents: number | null
    boursoramaJointCents: number | null
    bnpCents: number | null
    revolutGbpCents: number | null
    otherAccountsCents: number | null
    sumOfCashCents: number | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BalanceMaxAggregateOutputType = {
    id: string | null
    month: Date | null
    boursoramaCents: number | null
    boursoramaJointCents: number | null
    bnpCents: number | null
    revolutGbpCents: number | null
    otherAccountsCents: number | null
    sumOfCashCents: number | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BalanceCountAggregateOutputType = {
    id: number
    month: number
    boursoramaCents: number
    boursoramaJointCents: number
    bnpCents: number
    revolutGbpCents: number
    otherAccountsCents: number
    sumOfCashCents: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BalanceAvgAggregateInputType = {
    boursoramaCents?: true
    boursoramaJointCents?: true
    bnpCents?: true
    revolutGbpCents?: true
    otherAccountsCents?: true
    sumOfCashCents?: true
  }

  export type BalanceSumAggregateInputType = {
    boursoramaCents?: true
    boursoramaJointCents?: true
    bnpCents?: true
    revolutGbpCents?: true
    otherAccountsCents?: true
    sumOfCashCents?: true
  }

  export type BalanceMinAggregateInputType = {
    id?: true
    month?: true
    boursoramaCents?: true
    boursoramaJointCents?: true
    bnpCents?: true
    revolutGbpCents?: true
    otherAccountsCents?: true
    sumOfCashCents?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BalanceMaxAggregateInputType = {
    id?: true
    month?: true
    boursoramaCents?: true
    boursoramaJointCents?: true
    bnpCents?: true
    revolutGbpCents?: true
    otherAccountsCents?: true
    sumOfCashCents?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BalanceCountAggregateInputType = {
    id?: true
    month?: true
    boursoramaCents?: true
    boursoramaJointCents?: true
    bnpCents?: true
    revolutGbpCents?: true
    otherAccountsCents?: true
    sumOfCashCents?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BalanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Balance to aggregate.
     */
    where?: BalanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Balances to fetch.
     */
    orderBy?: BalanceOrderByWithRelationInput | BalanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BalanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Balances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Balances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Balances
    **/
    _count?: true | BalanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BalanceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BalanceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BalanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BalanceMaxAggregateInputType
  }

  export type GetBalanceAggregateType<T extends BalanceAggregateArgs> = {
        [P in keyof T & keyof AggregateBalance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBalance[P]>
      : GetScalarType<T[P], AggregateBalance[P]>
  }




  export type BalanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BalanceWhereInput
    orderBy?: BalanceOrderByWithAggregationInput | BalanceOrderByWithAggregationInput[]
    by: BalanceScalarFieldEnum[] | BalanceScalarFieldEnum
    having?: BalanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BalanceCountAggregateInputType | true
    _avg?: BalanceAvgAggregateInputType
    _sum?: BalanceSumAggregateInputType
    _min?: BalanceMinAggregateInputType
    _max?: BalanceMaxAggregateInputType
  }

  export type BalanceGroupByOutputType = {
    id: string
    month: Date
    boursoramaCents: number
    boursoramaJointCents: number
    bnpCents: number
    revolutGbpCents: number
    otherAccountsCents: number
    sumOfCashCents: number
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: BalanceCountAggregateOutputType | null
    _avg: BalanceAvgAggregateOutputType | null
    _sum: BalanceSumAggregateOutputType | null
    _min: BalanceMinAggregateOutputType | null
    _max: BalanceMaxAggregateOutputType | null
  }

  type GetBalanceGroupByPayload<T extends BalanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BalanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BalanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BalanceGroupByOutputType[P]>
            : GetScalarType<T[P], BalanceGroupByOutputType[P]>
        }
      >
    >


  export type BalanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    month?: boolean
    boursoramaCents?: boolean
    boursoramaJointCents?: boolean
    bnpCents?: boolean
    revolutGbpCents?: boolean
    otherAccountsCents?: boolean
    sumOfCashCents?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["balance"]>

  export type BalanceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    month?: boolean
    boursoramaCents?: boolean
    boursoramaJointCents?: boolean
    bnpCents?: boolean
    revolutGbpCents?: boolean
    otherAccountsCents?: boolean
    sumOfCashCents?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["balance"]>

  export type BalanceSelectScalar = {
    id?: boolean
    month?: boolean
    boursoramaCents?: boolean
    boursoramaJointCents?: boolean
    bnpCents?: boolean
    revolutGbpCents?: boolean
    otherAccountsCents?: boolean
    sumOfCashCents?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $BalancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Balance"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      month: Date
      boursoramaCents: number
      boursoramaJointCents: number
      bnpCents: number
      revolutGbpCents: number
      otherAccountsCents: number
      sumOfCashCents: number
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["balance"]>
    composites: {}
  }

  type BalanceGetPayload<S extends boolean | null | undefined | BalanceDefaultArgs> = $Result.GetResult<Prisma.$BalancePayload, S>

  type BalanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BalanceFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BalanceCountAggregateInputType | true
    }

  export interface BalanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Balance'], meta: { name: 'Balance' } }
    /**
     * Find zero or one Balance that matches the filter.
     * @param {BalanceFindUniqueArgs} args - Arguments to find a Balance
     * @example
     * // Get one Balance
     * const balance = await prisma.balance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BalanceFindUniqueArgs>(args: SelectSubset<T, BalanceFindUniqueArgs<ExtArgs>>): Prisma__BalanceClient<$Result.GetResult<Prisma.$BalancePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Balance that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {BalanceFindUniqueOrThrowArgs} args - Arguments to find a Balance
     * @example
     * // Get one Balance
     * const balance = await prisma.balance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BalanceFindUniqueOrThrowArgs>(args: SelectSubset<T, BalanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BalanceClient<$Result.GetResult<Prisma.$BalancePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Balance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BalanceFindFirstArgs} args - Arguments to find a Balance
     * @example
     * // Get one Balance
     * const balance = await prisma.balance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BalanceFindFirstArgs>(args?: SelectSubset<T, BalanceFindFirstArgs<ExtArgs>>): Prisma__BalanceClient<$Result.GetResult<Prisma.$BalancePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Balance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BalanceFindFirstOrThrowArgs} args - Arguments to find a Balance
     * @example
     * // Get one Balance
     * const balance = await prisma.balance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BalanceFindFirstOrThrowArgs>(args?: SelectSubset<T, BalanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__BalanceClient<$Result.GetResult<Prisma.$BalancePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Balances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BalanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Balances
     * const balances = await prisma.balance.findMany()
     * 
     * // Get first 10 Balances
     * const balances = await prisma.balance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const balanceWithIdOnly = await prisma.balance.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BalanceFindManyArgs>(args?: SelectSubset<T, BalanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BalancePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Balance.
     * @param {BalanceCreateArgs} args - Arguments to create a Balance.
     * @example
     * // Create one Balance
     * const Balance = await prisma.balance.create({
     *   data: {
     *     // ... data to create a Balance
     *   }
     * })
     * 
     */
    create<T extends BalanceCreateArgs>(args: SelectSubset<T, BalanceCreateArgs<ExtArgs>>): Prisma__BalanceClient<$Result.GetResult<Prisma.$BalancePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Balances.
     * @param {BalanceCreateManyArgs} args - Arguments to create many Balances.
     * @example
     * // Create many Balances
     * const balance = await prisma.balance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BalanceCreateManyArgs>(args?: SelectSubset<T, BalanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Balances and returns the data saved in the database.
     * @param {BalanceCreateManyAndReturnArgs} args - Arguments to create many Balances.
     * @example
     * // Create many Balances
     * const balance = await prisma.balance.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Balances and only return the `id`
     * const balanceWithIdOnly = await prisma.balance.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BalanceCreateManyAndReturnArgs>(args?: SelectSubset<T, BalanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BalancePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Balance.
     * @param {BalanceDeleteArgs} args - Arguments to delete one Balance.
     * @example
     * // Delete one Balance
     * const Balance = await prisma.balance.delete({
     *   where: {
     *     // ... filter to delete one Balance
     *   }
     * })
     * 
     */
    delete<T extends BalanceDeleteArgs>(args: SelectSubset<T, BalanceDeleteArgs<ExtArgs>>): Prisma__BalanceClient<$Result.GetResult<Prisma.$BalancePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Balance.
     * @param {BalanceUpdateArgs} args - Arguments to update one Balance.
     * @example
     * // Update one Balance
     * const balance = await prisma.balance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BalanceUpdateArgs>(args: SelectSubset<T, BalanceUpdateArgs<ExtArgs>>): Prisma__BalanceClient<$Result.GetResult<Prisma.$BalancePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Balances.
     * @param {BalanceDeleteManyArgs} args - Arguments to filter Balances to delete.
     * @example
     * // Delete a few Balances
     * const { count } = await prisma.balance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BalanceDeleteManyArgs>(args?: SelectSubset<T, BalanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Balances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BalanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Balances
     * const balance = await prisma.balance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BalanceUpdateManyArgs>(args: SelectSubset<T, BalanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Balance.
     * @param {BalanceUpsertArgs} args - Arguments to update or create a Balance.
     * @example
     * // Update or create a Balance
     * const balance = await prisma.balance.upsert({
     *   create: {
     *     // ... data to create a Balance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Balance we want to update
     *   }
     * })
     */
    upsert<T extends BalanceUpsertArgs>(args: SelectSubset<T, BalanceUpsertArgs<ExtArgs>>): Prisma__BalanceClient<$Result.GetResult<Prisma.$BalancePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Balances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BalanceCountArgs} args - Arguments to filter Balances to count.
     * @example
     * // Count the number of Balances
     * const count = await prisma.balance.count({
     *   where: {
     *     // ... the filter for the Balances we want to count
     *   }
     * })
    **/
    count<T extends BalanceCountArgs>(
      args?: Subset<T, BalanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BalanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Balance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BalanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BalanceAggregateArgs>(args: Subset<T, BalanceAggregateArgs>): Prisma.PrismaPromise<GetBalanceAggregateType<T>>

    /**
     * Group by Balance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BalanceGroupByArgs} args - Group by arguments.
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
      T extends BalanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BalanceGroupByArgs['orderBy'] }
        : { orderBy?: BalanceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BalanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBalanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Balance model
   */
  readonly fields: BalanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Balance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BalanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Balance model
   */ 
  interface BalanceFieldRefs {
    readonly id: FieldRef<"Balance", 'String'>
    readonly month: FieldRef<"Balance", 'DateTime'>
    readonly boursoramaCents: FieldRef<"Balance", 'Int'>
    readonly boursoramaJointCents: FieldRef<"Balance", 'Int'>
    readonly bnpCents: FieldRef<"Balance", 'Int'>
    readonly revolutGbpCents: FieldRef<"Balance", 'Int'>
    readonly otherAccountsCents: FieldRef<"Balance", 'Int'>
    readonly sumOfCashCents: FieldRef<"Balance", 'Int'>
    readonly notes: FieldRef<"Balance", 'String'>
    readonly createdAt: FieldRef<"Balance", 'DateTime'>
    readonly updatedAt: FieldRef<"Balance", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Balance findUnique
   */
  export type BalanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Balance
     */
    select?: BalanceSelect<ExtArgs> | null
    /**
     * Filter, which Balance to fetch.
     */
    where: BalanceWhereUniqueInput
  }

  /**
   * Balance findUniqueOrThrow
   */
  export type BalanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Balance
     */
    select?: BalanceSelect<ExtArgs> | null
    /**
     * Filter, which Balance to fetch.
     */
    where: BalanceWhereUniqueInput
  }

  /**
   * Balance findFirst
   */
  export type BalanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Balance
     */
    select?: BalanceSelect<ExtArgs> | null
    /**
     * Filter, which Balance to fetch.
     */
    where?: BalanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Balances to fetch.
     */
    orderBy?: BalanceOrderByWithRelationInput | BalanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Balances.
     */
    cursor?: BalanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Balances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Balances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Balances.
     */
    distinct?: BalanceScalarFieldEnum | BalanceScalarFieldEnum[]
  }

  /**
   * Balance findFirstOrThrow
   */
  export type BalanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Balance
     */
    select?: BalanceSelect<ExtArgs> | null
    /**
     * Filter, which Balance to fetch.
     */
    where?: BalanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Balances to fetch.
     */
    orderBy?: BalanceOrderByWithRelationInput | BalanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Balances.
     */
    cursor?: BalanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Balances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Balances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Balances.
     */
    distinct?: BalanceScalarFieldEnum | BalanceScalarFieldEnum[]
  }

  /**
   * Balance findMany
   */
  export type BalanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Balance
     */
    select?: BalanceSelect<ExtArgs> | null
    /**
     * Filter, which Balances to fetch.
     */
    where?: BalanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Balances to fetch.
     */
    orderBy?: BalanceOrderByWithRelationInput | BalanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Balances.
     */
    cursor?: BalanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Balances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Balances.
     */
    skip?: number
    distinct?: BalanceScalarFieldEnum | BalanceScalarFieldEnum[]
  }

  /**
   * Balance create
   */
  export type BalanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Balance
     */
    select?: BalanceSelect<ExtArgs> | null
    /**
     * The data needed to create a Balance.
     */
    data: XOR<BalanceCreateInput, BalanceUncheckedCreateInput>
  }

  /**
   * Balance createMany
   */
  export type BalanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Balances.
     */
    data: BalanceCreateManyInput | BalanceCreateManyInput[]
  }

  /**
   * Balance createManyAndReturn
   */
  export type BalanceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Balance
     */
    select?: BalanceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Balances.
     */
    data: BalanceCreateManyInput | BalanceCreateManyInput[]
  }

  /**
   * Balance update
   */
  export type BalanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Balance
     */
    select?: BalanceSelect<ExtArgs> | null
    /**
     * The data needed to update a Balance.
     */
    data: XOR<BalanceUpdateInput, BalanceUncheckedUpdateInput>
    /**
     * Choose, which Balance to update.
     */
    where: BalanceWhereUniqueInput
  }

  /**
   * Balance updateMany
   */
  export type BalanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Balances.
     */
    data: XOR<BalanceUpdateManyMutationInput, BalanceUncheckedUpdateManyInput>
    /**
     * Filter which Balances to update
     */
    where?: BalanceWhereInput
  }

  /**
   * Balance upsert
   */
  export type BalanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Balance
     */
    select?: BalanceSelect<ExtArgs> | null
    /**
     * The filter to search for the Balance to update in case it exists.
     */
    where: BalanceWhereUniqueInput
    /**
     * In case the Balance found by the `where` argument doesn't exist, create a new Balance with this data.
     */
    create: XOR<BalanceCreateInput, BalanceUncheckedCreateInput>
    /**
     * In case the Balance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BalanceUpdateInput, BalanceUncheckedUpdateInput>
  }

  /**
   * Balance delete
   */
  export type BalanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Balance
     */
    select?: BalanceSelect<ExtArgs> | null
    /**
     * Filter which Balance to delete.
     */
    where: BalanceWhereUniqueInput
  }

  /**
   * Balance deleteMany
   */
  export type BalanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Balances to delete
     */
    where?: BalanceWhereInput
  }

  /**
   * Balance without action
   */
  export type BalanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Balance
     */
    select?: BalanceSelect<ExtArgs> | null
  }


  /**
   * Model MonthlyBudget
   */

  export type AggregateMonthlyBudget = {
    _count: MonthlyBudgetCountAggregateOutputType | null
    _avg: MonthlyBudgetAvgAggregateOutputType | null
    _sum: MonthlyBudgetSumAggregateOutputType | null
    _min: MonthlyBudgetMinAggregateOutputType | null
    _max: MonthlyBudgetMaxAggregateOutputType | null
  }

  export type MonthlyBudgetAvgAggregateOutputType = {
    plannedInflowCents: number | null
    plannedOutflowCents: number | null
  }

  export type MonthlyBudgetSumAggregateOutputType = {
    plannedInflowCents: number | null
    plannedOutflowCents: number | null
  }

  export type MonthlyBudgetMinAggregateOutputType = {
    id: string | null
    month: Date | null
    category: string | null
    plannedInflowCents: number | null
    plannedOutflowCents: number | null
    currency: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MonthlyBudgetMaxAggregateOutputType = {
    id: string | null
    month: Date | null
    category: string | null
    plannedInflowCents: number | null
    plannedOutflowCents: number | null
    currency: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MonthlyBudgetCountAggregateOutputType = {
    id: number
    month: number
    category: number
    plannedInflowCents: number
    plannedOutflowCents: number
    currency: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MonthlyBudgetAvgAggregateInputType = {
    plannedInflowCents?: true
    plannedOutflowCents?: true
  }

  export type MonthlyBudgetSumAggregateInputType = {
    plannedInflowCents?: true
    plannedOutflowCents?: true
  }

  export type MonthlyBudgetMinAggregateInputType = {
    id?: true
    month?: true
    category?: true
    plannedInflowCents?: true
    plannedOutflowCents?: true
    currency?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MonthlyBudgetMaxAggregateInputType = {
    id?: true
    month?: true
    category?: true
    plannedInflowCents?: true
    plannedOutflowCents?: true
    currency?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MonthlyBudgetCountAggregateInputType = {
    id?: true
    month?: true
    category?: true
    plannedInflowCents?: true
    plannedOutflowCents?: true
    currency?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MonthlyBudgetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MonthlyBudget to aggregate.
     */
    where?: MonthlyBudgetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonthlyBudgets to fetch.
     */
    orderBy?: MonthlyBudgetOrderByWithRelationInput | MonthlyBudgetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MonthlyBudgetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonthlyBudgets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonthlyBudgets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MonthlyBudgets
    **/
    _count?: true | MonthlyBudgetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MonthlyBudgetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MonthlyBudgetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MonthlyBudgetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MonthlyBudgetMaxAggregateInputType
  }

  export type GetMonthlyBudgetAggregateType<T extends MonthlyBudgetAggregateArgs> = {
        [P in keyof T & keyof AggregateMonthlyBudget]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMonthlyBudget[P]>
      : GetScalarType<T[P], AggregateMonthlyBudget[P]>
  }




  export type MonthlyBudgetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MonthlyBudgetWhereInput
    orderBy?: MonthlyBudgetOrderByWithAggregationInput | MonthlyBudgetOrderByWithAggregationInput[]
    by: MonthlyBudgetScalarFieldEnum[] | MonthlyBudgetScalarFieldEnum
    having?: MonthlyBudgetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MonthlyBudgetCountAggregateInputType | true
    _avg?: MonthlyBudgetAvgAggregateInputType
    _sum?: MonthlyBudgetSumAggregateInputType
    _min?: MonthlyBudgetMinAggregateInputType
    _max?: MonthlyBudgetMaxAggregateInputType
  }

  export type MonthlyBudgetGroupByOutputType = {
    id: string
    month: Date
    category: string
    plannedInflowCents: number
    plannedOutflowCents: number
    currency: string
    createdAt: Date
    updatedAt: Date
    _count: MonthlyBudgetCountAggregateOutputType | null
    _avg: MonthlyBudgetAvgAggregateOutputType | null
    _sum: MonthlyBudgetSumAggregateOutputType | null
    _min: MonthlyBudgetMinAggregateOutputType | null
    _max: MonthlyBudgetMaxAggregateOutputType | null
  }

  type GetMonthlyBudgetGroupByPayload<T extends MonthlyBudgetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MonthlyBudgetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MonthlyBudgetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MonthlyBudgetGroupByOutputType[P]>
            : GetScalarType<T[P], MonthlyBudgetGroupByOutputType[P]>
        }
      >
    >


  export type MonthlyBudgetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    month?: boolean
    category?: boolean
    plannedInflowCents?: boolean
    plannedOutflowCents?: boolean
    currency?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["monthlyBudget"]>

  export type MonthlyBudgetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    month?: boolean
    category?: boolean
    plannedInflowCents?: boolean
    plannedOutflowCents?: boolean
    currency?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["monthlyBudget"]>

  export type MonthlyBudgetSelectScalar = {
    id?: boolean
    month?: boolean
    category?: boolean
    plannedInflowCents?: boolean
    plannedOutflowCents?: boolean
    currency?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $MonthlyBudgetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MonthlyBudget"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      month: Date
      category: string
      plannedInflowCents: number
      plannedOutflowCents: number
      currency: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["monthlyBudget"]>
    composites: {}
  }

  type MonthlyBudgetGetPayload<S extends boolean | null | undefined | MonthlyBudgetDefaultArgs> = $Result.GetResult<Prisma.$MonthlyBudgetPayload, S>

  type MonthlyBudgetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MonthlyBudgetFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MonthlyBudgetCountAggregateInputType | true
    }

  export interface MonthlyBudgetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MonthlyBudget'], meta: { name: 'MonthlyBudget' } }
    /**
     * Find zero or one MonthlyBudget that matches the filter.
     * @param {MonthlyBudgetFindUniqueArgs} args - Arguments to find a MonthlyBudget
     * @example
     * // Get one MonthlyBudget
     * const monthlyBudget = await prisma.monthlyBudget.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MonthlyBudgetFindUniqueArgs>(args: SelectSubset<T, MonthlyBudgetFindUniqueArgs<ExtArgs>>): Prisma__MonthlyBudgetClient<$Result.GetResult<Prisma.$MonthlyBudgetPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one MonthlyBudget that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MonthlyBudgetFindUniqueOrThrowArgs} args - Arguments to find a MonthlyBudget
     * @example
     * // Get one MonthlyBudget
     * const monthlyBudget = await prisma.monthlyBudget.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MonthlyBudgetFindUniqueOrThrowArgs>(args: SelectSubset<T, MonthlyBudgetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MonthlyBudgetClient<$Result.GetResult<Prisma.$MonthlyBudgetPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first MonthlyBudget that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlyBudgetFindFirstArgs} args - Arguments to find a MonthlyBudget
     * @example
     * // Get one MonthlyBudget
     * const monthlyBudget = await prisma.monthlyBudget.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MonthlyBudgetFindFirstArgs>(args?: SelectSubset<T, MonthlyBudgetFindFirstArgs<ExtArgs>>): Prisma__MonthlyBudgetClient<$Result.GetResult<Prisma.$MonthlyBudgetPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first MonthlyBudget that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlyBudgetFindFirstOrThrowArgs} args - Arguments to find a MonthlyBudget
     * @example
     * // Get one MonthlyBudget
     * const monthlyBudget = await prisma.monthlyBudget.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MonthlyBudgetFindFirstOrThrowArgs>(args?: SelectSubset<T, MonthlyBudgetFindFirstOrThrowArgs<ExtArgs>>): Prisma__MonthlyBudgetClient<$Result.GetResult<Prisma.$MonthlyBudgetPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more MonthlyBudgets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlyBudgetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MonthlyBudgets
     * const monthlyBudgets = await prisma.monthlyBudget.findMany()
     * 
     * // Get first 10 MonthlyBudgets
     * const monthlyBudgets = await prisma.monthlyBudget.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const monthlyBudgetWithIdOnly = await prisma.monthlyBudget.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MonthlyBudgetFindManyArgs>(args?: SelectSubset<T, MonthlyBudgetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonthlyBudgetPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a MonthlyBudget.
     * @param {MonthlyBudgetCreateArgs} args - Arguments to create a MonthlyBudget.
     * @example
     * // Create one MonthlyBudget
     * const MonthlyBudget = await prisma.monthlyBudget.create({
     *   data: {
     *     // ... data to create a MonthlyBudget
     *   }
     * })
     * 
     */
    create<T extends MonthlyBudgetCreateArgs>(args: SelectSubset<T, MonthlyBudgetCreateArgs<ExtArgs>>): Prisma__MonthlyBudgetClient<$Result.GetResult<Prisma.$MonthlyBudgetPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many MonthlyBudgets.
     * @param {MonthlyBudgetCreateManyArgs} args - Arguments to create many MonthlyBudgets.
     * @example
     * // Create many MonthlyBudgets
     * const monthlyBudget = await prisma.monthlyBudget.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MonthlyBudgetCreateManyArgs>(args?: SelectSubset<T, MonthlyBudgetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MonthlyBudgets and returns the data saved in the database.
     * @param {MonthlyBudgetCreateManyAndReturnArgs} args - Arguments to create many MonthlyBudgets.
     * @example
     * // Create many MonthlyBudgets
     * const monthlyBudget = await prisma.monthlyBudget.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MonthlyBudgets and only return the `id`
     * const monthlyBudgetWithIdOnly = await prisma.monthlyBudget.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MonthlyBudgetCreateManyAndReturnArgs>(args?: SelectSubset<T, MonthlyBudgetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonthlyBudgetPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a MonthlyBudget.
     * @param {MonthlyBudgetDeleteArgs} args - Arguments to delete one MonthlyBudget.
     * @example
     * // Delete one MonthlyBudget
     * const MonthlyBudget = await prisma.monthlyBudget.delete({
     *   where: {
     *     // ... filter to delete one MonthlyBudget
     *   }
     * })
     * 
     */
    delete<T extends MonthlyBudgetDeleteArgs>(args: SelectSubset<T, MonthlyBudgetDeleteArgs<ExtArgs>>): Prisma__MonthlyBudgetClient<$Result.GetResult<Prisma.$MonthlyBudgetPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one MonthlyBudget.
     * @param {MonthlyBudgetUpdateArgs} args - Arguments to update one MonthlyBudget.
     * @example
     * // Update one MonthlyBudget
     * const monthlyBudget = await prisma.monthlyBudget.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MonthlyBudgetUpdateArgs>(args: SelectSubset<T, MonthlyBudgetUpdateArgs<ExtArgs>>): Prisma__MonthlyBudgetClient<$Result.GetResult<Prisma.$MonthlyBudgetPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more MonthlyBudgets.
     * @param {MonthlyBudgetDeleteManyArgs} args - Arguments to filter MonthlyBudgets to delete.
     * @example
     * // Delete a few MonthlyBudgets
     * const { count } = await prisma.monthlyBudget.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MonthlyBudgetDeleteManyArgs>(args?: SelectSubset<T, MonthlyBudgetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MonthlyBudgets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlyBudgetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MonthlyBudgets
     * const monthlyBudget = await prisma.monthlyBudget.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MonthlyBudgetUpdateManyArgs>(args: SelectSubset<T, MonthlyBudgetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MonthlyBudget.
     * @param {MonthlyBudgetUpsertArgs} args - Arguments to update or create a MonthlyBudget.
     * @example
     * // Update or create a MonthlyBudget
     * const monthlyBudget = await prisma.monthlyBudget.upsert({
     *   create: {
     *     // ... data to create a MonthlyBudget
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MonthlyBudget we want to update
     *   }
     * })
     */
    upsert<T extends MonthlyBudgetUpsertArgs>(args: SelectSubset<T, MonthlyBudgetUpsertArgs<ExtArgs>>): Prisma__MonthlyBudgetClient<$Result.GetResult<Prisma.$MonthlyBudgetPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of MonthlyBudgets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlyBudgetCountArgs} args - Arguments to filter MonthlyBudgets to count.
     * @example
     * // Count the number of MonthlyBudgets
     * const count = await prisma.monthlyBudget.count({
     *   where: {
     *     // ... the filter for the MonthlyBudgets we want to count
     *   }
     * })
    **/
    count<T extends MonthlyBudgetCountArgs>(
      args?: Subset<T, MonthlyBudgetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MonthlyBudgetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MonthlyBudget.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlyBudgetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MonthlyBudgetAggregateArgs>(args: Subset<T, MonthlyBudgetAggregateArgs>): Prisma.PrismaPromise<GetMonthlyBudgetAggregateType<T>>

    /**
     * Group by MonthlyBudget.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlyBudgetGroupByArgs} args - Group by arguments.
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
      T extends MonthlyBudgetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MonthlyBudgetGroupByArgs['orderBy'] }
        : { orderBy?: MonthlyBudgetGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MonthlyBudgetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMonthlyBudgetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MonthlyBudget model
   */
  readonly fields: MonthlyBudgetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MonthlyBudget.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MonthlyBudgetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the MonthlyBudget model
   */ 
  interface MonthlyBudgetFieldRefs {
    readonly id: FieldRef<"MonthlyBudget", 'String'>
    readonly month: FieldRef<"MonthlyBudget", 'DateTime'>
    readonly category: FieldRef<"MonthlyBudget", 'String'>
    readonly plannedInflowCents: FieldRef<"MonthlyBudget", 'Int'>
    readonly plannedOutflowCents: FieldRef<"MonthlyBudget", 'Int'>
    readonly currency: FieldRef<"MonthlyBudget", 'String'>
    readonly createdAt: FieldRef<"MonthlyBudget", 'DateTime'>
    readonly updatedAt: FieldRef<"MonthlyBudget", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MonthlyBudget findUnique
   */
  export type MonthlyBudgetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyBudget
     */
    select?: MonthlyBudgetSelect<ExtArgs> | null
    /**
     * Filter, which MonthlyBudget to fetch.
     */
    where: MonthlyBudgetWhereUniqueInput
  }

  /**
   * MonthlyBudget findUniqueOrThrow
   */
  export type MonthlyBudgetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyBudget
     */
    select?: MonthlyBudgetSelect<ExtArgs> | null
    /**
     * Filter, which MonthlyBudget to fetch.
     */
    where: MonthlyBudgetWhereUniqueInput
  }

  /**
   * MonthlyBudget findFirst
   */
  export type MonthlyBudgetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyBudget
     */
    select?: MonthlyBudgetSelect<ExtArgs> | null
    /**
     * Filter, which MonthlyBudget to fetch.
     */
    where?: MonthlyBudgetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonthlyBudgets to fetch.
     */
    orderBy?: MonthlyBudgetOrderByWithRelationInput | MonthlyBudgetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MonthlyBudgets.
     */
    cursor?: MonthlyBudgetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonthlyBudgets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonthlyBudgets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MonthlyBudgets.
     */
    distinct?: MonthlyBudgetScalarFieldEnum | MonthlyBudgetScalarFieldEnum[]
  }

  /**
   * MonthlyBudget findFirstOrThrow
   */
  export type MonthlyBudgetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyBudget
     */
    select?: MonthlyBudgetSelect<ExtArgs> | null
    /**
     * Filter, which MonthlyBudget to fetch.
     */
    where?: MonthlyBudgetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonthlyBudgets to fetch.
     */
    orderBy?: MonthlyBudgetOrderByWithRelationInput | MonthlyBudgetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MonthlyBudgets.
     */
    cursor?: MonthlyBudgetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonthlyBudgets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonthlyBudgets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MonthlyBudgets.
     */
    distinct?: MonthlyBudgetScalarFieldEnum | MonthlyBudgetScalarFieldEnum[]
  }

  /**
   * MonthlyBudget findMany
   */
  export type MonthlyBudgetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyBudget
     */
    select?: MonthlyBudgetSelect<ExtArgs> | null
    /**
     * Filter, which MonthlyBudgets to fetch.
     */
    where?: MonthlyBudgetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonthlyBudgets to fetch.
     */
    orderBy?: MonthlyBudgetOrderByWithRelationInput | MonthlyBudgetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MonthlyBudgets.
     */
    cursor?: MonthlyBudgetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonthlyBudgets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonthlyBudgets.
     */
    skip?: number
    distinct?: MonthlyBudgetScalarFieldEnum | MonthlyBudgetScalarFieldEnum[]
  }

  /**
   * MonthlyBudget create
   */
  export type MonthlyBudgetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyBudget
     */
    select?: MonthlyBudgetSelect<ExtArgs> | null
    /**
     * The data needed to create a MonthlyBudget.
     */
    data: XOR<MonthlyBudgetCreateInput, MonthlyBudgetUncheckedCreateInput>
  }

  /**
   * MonthlyBudget createMany
   */
  export type MonthlyBudgetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MonthlyBudgets.
     */
    data: MonthlyBudgetCreateManyInput | MonthlyBudgetCreateManyInput[]
  }

  /**
   * MonthlyBudget createManyAndReturn
   */
  export type MonthlyBudgetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyBudget
     */
    select?: MonthlyBudgetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many MonthlyBudgets.
     */
    data: MonthlyBudgetCreateManyInput | MonthlyBudgetCreateManyInput[]
  }

  /**
   * MonthlyBudget update
   */
  export type MonthlyBudgetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyBudget
     */
    select?: MonthlyBudgetSelect<ExtArgs> | null
    /**
     * The data needed to update a MonthlyBudget.
     */
    data: XOR<MonthlyBudgetUpdateInput, MonthlyBudgetUncheckedUpdateInput>
    /**
     * Choose, which MonthlyBudget to update.
     */
    where: MonthlyBudgetWhereUniqueInput
  }

  /**
   * MonthlyBudget updateMany
   */
  export type MonthlyBudgetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MonthlyBudgets.
     */
    data: XOR<MonthlyBudgetUpdateManyMutationInput, MonthlyBudgetUncheckedUpdateManyInput>
    /**
     * Filter which MonthlyBudgets to update
     */
    where?: MonthlyBudgetWhereInput
  }

  /**
   * MonthlyBudget upsert
   */
  export type MonthlyBudgetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyBudget
     */
    select?: MonthlyBudgetSelect<ExtArgs> | null
    /**
     * The filter to search for the MonthlyBudget to update in case it exists.
     */
    where: MonthlyBudgetWhereUniqueInput
    /**
     * In case the MonthlyBudget found by the `where` argument doesn't exist, create a new MonthlyBudget with this data.
     */
    create: XOR<MonthlyBudgetCreateInput, MonthlyBudgetUncheckedCreateInput>
    /**
     * In case the MonthlyBudget was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MonthlyBudgetUpdateInput, MonthlyBudgetUncheckedUpdateInput>
  }

  /**
   * MonthlyBudget delete
   */
  export type MonthlyBudgetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyBudget
     */
    select?: MonthlyBudgetSelect<ExtArgs> | null
    /**
     * Filter which MonthlyBudget to delete.
     */
    where: MonthlyBudgetWhereUniqueInput
  }

  /**
   * MonthlyBudget deleteMany
   */
  export type MonthlyBudgetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MonthlyBudgets to delete
     */
    where?: MonthlyBudgetWhereInput
  }

  /**
   * MonthlyBudget without action
   */
  export type MonthlyBudgetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyBudget
     */
    select?: MonthlyBudgetSelect<ExtArgs> | null
  }


  /**
   * Model ReviewNote
   */

  export type AggregateReviewNote = {
    _count: ReviewNoteCountAggregateOutputType | null
    _min: ReviewNoteMinAggregateOutputType | null
    _max: ReviewNoteMaxAggregateOutputType | null
  }

  export type ReviewNoteMinAggregateOutputType = {
    id: string | null
    month: Date | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReviewNoteMaxAggregateOutputType = {
    id: string | null
    month: Date | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReviewNoteCountAggregateOutputType = {
    id: number
    month: number
    content: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ReviewNoteMinAggregateInputType = {
    id?: true
    month?: true
    content?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReviewNoteMaxAggregateInputType = {
    id?: true
    month?: true
    content?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReviewNoteCountAggregateInputType = {
    id?: true
    month?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ReviewNoteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReviewNote to aggregate.
     */
    where?: ReviewNoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewNotes to fetch.
     */
    orderBy?: ReviewNoteOrderByWithRelationInput | ReviewNoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewNoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewNotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReviewNotes
    **/
    _count?: true | ReviewNoteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewNoteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewNoteMaxAggregateInputType
  }

  export type GetReviewNoteAggregateType<T extends ReviewNoteAggregateArgs> = {
        [P in keyof T & keyof AggregateReviewNote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReviewNote[P]>
      : GetScalarType<T[P], AggregateReviewNote[P]>
  }




  export type ReviewNoteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewNoteWhereInput
    orderBy?: ReviewNoteOrderByWithAggregationInput | ReviewNoteOrderByWithAggregationInput[]
    by: ReviewNoteScalarFieldEnum[] | ReviewNoteScalarFieldEnum
    having?: ReviewNoteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewNoteCountAggregateInputType | true
    _min?: ReviewNoteMinAggregateInputType
    _max?: ReviewNoteMaxAggregateInputType
  }

  export type ReviewNoteGroupByOutputType = {
    id: string
    month: Date
    content: string
    createdAt: Date
    updatedAt: Date
    _count: ReviewNoteCountAggregateOutputType | null
    _min: ReviewNoteMinAggregateOutputType | null
    _max: ReviewNoteMaxAggregateOutputType | null
  }

  type GetReviewNoteGroupByPayload<T extends ReviewNoteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewNoteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewNoteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewNoteGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewNoteGroupByOutputType[P]>
        }
      >
    >


  export type ReviewNoteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    month?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["reviewNote"]>

  export type ReviewNoteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    month?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["reviewNote"]>

  export type ReviewNoteSelectScalar = {
    id?: boolean
    month?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $ReviewNotePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReviewNote"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      month: Date
      content: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["reviewNote"]>
    composites: {}
  }

  type ReviewNoteGetPayload<S extends boolean | null | undefined | ReviewNoteDefaultArgs> = $Result.GetResult<Prisma.$ReviewNotePayload, S>

  type ReviewNoteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ReviewNoteFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ReviewNoteCountAggregateInputType | true
    }

  export interface ReviewNoteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReviewNote'], meta: { name: 'ReviewNote' } }
    /**
     * Find zero or one ReviewNote that matches the filter.
     * @param {ReviewNoteFindUniqueArgs} args - Arguments to find a ReviewNote
     * @example
     * // Get one ReviewNote
     * const reviewNote = await prisma.reviewNote.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewNoteFindUniqueArgs>(args: SelectSubset<T, ReviewNoteFindUniqueArgs<ExtArgs>>): Prisma__ReviewNoteClient<$Result.GetResult<Prisma.$ReviewNotePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ReviewNote that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ReviewNoteFindUniqueOrThrowArgs} args - Arguments to find a ReviewNote
     * @example
     * // Get one ReviewNote
     * const reviewNote = await prisma.reviewNote.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewNoteFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewNoteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewNoteClient<$Result.GetResult<Prisma.$ReviewNotePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ReviewNote that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewNoteFindFirstArgs} args - Arguments to find a ReviewNote
     * @example
     * // Get one ReviewNote
     * const reviewNote = await prisma.reviewNote.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewNoteFindFirstArgs>(args?: SelectSubset<T, ReviewNoteFindFirstArgs<ExtArgs>>): Prisma__ReviewNoteClient<$Result.GetResult<Prisma.$ReviewNotePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ReviewNote that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewNoteFindFirstOrThrowArgs} args - Arguments to find a ReviewNote
     * @example
     * // Get one ReviewNote
     * const reviewNote = await prisma.reviewNote.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewNoteFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewNoteFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewNoteClient<$Result.GetResult<Prisma.$ReviewNotePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ReviewNotes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewNoteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReviewNotes
     * const reviewNotes = await prisma.reviewNote.findMany()
     * 
     * // Get first 10 ReviewNotes
     * const reviewNotes = await prisma.reviewNote.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewNoteWithIdOnly = await prisma.reviewNote.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewNoteFindManyArgs>(args?: SelectSubset<T, ReviewNoteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewNotePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ReviewNote.
     * @param {ReviewNoteCreateArgs} args - Arguments to create a ReviewNote.
     * @example
     * // Create one ReviewNote
     * const ReviewNote = await prisma.reviewNote.create({
     *   data: {
     *     // ... data to create a ReviewNote
     *   }
     * })
     * 
     */
    create<T extends ReviewNoteCreateArgs>(args: SelectSubset<T, ReviewNoteCreateArgs<ExtArgs>>): Prisma__ReviewNoteClient<$Result.GetResult<Prisma.$ReviewNotePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ReviewNotes.
     * @param {ReviewNoteCreateManyArgs} args - Arguments to create many ReviewNotes.
     * @example
     * // Create many ReviewNotes
     * const reviewNote = await prisma.reviewNote.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewNoteCreateManyArgs>(args?: SelectSubset<T, ReviewNoteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ReviewNotes and returns the data saved in the database.
     * @param {ReviewNoteCreateManyAndReturnArgs} args - Arguments to create many ReviewNotes.
     * @example
     * // Create many ReviewNotes
     * const reviewNote = await prisma.reviewNote.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ReviewNotes and only return the `id`
     * const reviewNoteWithIdOnly = await prisma.reviewNote.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReviewNoteCreateManyAndReturnArgs>(args?: SelectSubset<T, ReviewNoteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewNotePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ReviewNote.
     * @param {ReviewNoteDeleteArgs} args - Arguments to delete one ReviewNote.
     * @example
     * // Delete one ReviewNote
     * const ReviewNote = await prisma.reviewNote.delete({
     *   where: {
     *     // ... filter to delete one ReviewNote
     *   }
     * })
     * 
     */
    delete<T extends ReviewNoteDeleteArgs>(args: SelectSubset<T, ReviewNoteDeleteArgs<ExtArgs>>): Prisma__ReviewNoteClient<$Result.GetResult<Prisma.$ReviewNotePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ReviewNote.
     * @param {ReviewNoteUpdateArgs} args - Arguments to update one ReviewNote.
     * @example
     * // Update one ReviewNote
     * const reviewNote = await prisma.reviewNote.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewNoteUpdateArgs>(args: SelectSubset<T, ReviewNoteUpdateArgs<ExtArgs>>): Prisma__ReviewNoteClient<$Result.GetResult<Prisma.$ReviewNotePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ReviewNotes.
     * @param {ReviewNoteDeleteManyArgs} args - Arguments to filter ReviewNotes to delete.
     * @example
     * // Delete a few ReviewNotes
     * const { count } = await prisma.reviewNote.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewNoteDeleteManyArgs>(args?: SelectSubset<T, ReviewNoteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReviewNotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewNoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReviewNotes
     * const reviewNote = await prisma.reviewNote.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewNoteUpdateManyArgs>(args: SelectSubset<T, ReviewNoteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ReviewNote.
     * @param {ReviewNoteUpsertArgs} args - Arguments to update or create a ReviewNote.
     * @example
     * // Update or create a ReviewNote
     * const reviewNote = await prisma.reviewNote.upsert({
     *   create: {
     *     // ... data to create a ReviewNote
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReviewNote we want to update
     *   }
     * })
     */
    upsert<T extends ReviewNoteUpsertArgs>(args: SelectSubset<T, ReviewNoteUpsertArgs<ExtArgs>>): Prisma__ReviewNoteClient<$Result.GetResult<Prisma.$ReviewNotePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ReviewNotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewNoteCountArgs} args - Arguments to filter ReviewNotes to count.
     * @example
     * // Count the number of ReviewNotes
     * const count = await prisma.reviewNote.count({
     *   where: {
     *     // ... the filter for the ReviewNotes we want to count
     *   }
     * })
    **/
    count<T extends ReviewNoteCountArgs>(
      args?: Subset<T, ReviewNoteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewNoteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReviewNote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewNoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReviewNoteAggregateArgs>(args: Subset<T, ReviewNoteAggregateArgs>): Prisma.PrismaPromise<GetReviewNoteAggregateType<T>>

    /**
     * Group by ReviewNote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewNoteGroupByArgs} args - Group by arguments.
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
      T extends ReviewNoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewNoteGroupByArgs['orderBy'] }
        : { orderBy?: ReviewNoteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReviewNoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewNoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReviewNote model
   */
  readonly fields: ReviewNoteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReviewNote.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewNoteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the ReviewNote model
   */ 
  interface ReviewNoteFieldRefs {
    readonly id: FieldRef<"ReviewNote", 'String'>
    readonly month: FieldRef<"ReviewNote", 'DateTime'>
    readonly content: FieldRef<"ReviewNote", 'String'>
    readonly createdAt: FieldRef<"ReviewNote", 'DateTime'>
    readonly updatedAt: FieldRef<"ReviewNote", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ReviewNote findUnique
   */
  export type ReviewNoteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewNote
     */
    select?: ReviewNoteSelect<ExtArgs> | null
    /**
     * Filter, which ReviewNote to fetch.
     */
    where: ReviewNoteWhereUniqueInput
  }

  /**
   * ReviewNote findUniqueOrThrow
   */
  export type ReviewNoteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewNote
     */
    select?: ReviewNoteSelect<ExtArgs> | null
    /**
     * Filter, which ReviewNote to fetch.
     */
    where: ReviewNoteWhereUniqueInput
  }

  /**
   * ReviewNote findFirst
   */
  export type ReviewNoteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewNote
     */
    select?: ReviewNoteSelect<ExtArgs> | null
    /**
     * Filter, which ReviewNote to fetch.
     */
    where?: ReviewNoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewNotes to fetch.
     */
    orderBy?: ReviewNoteOrderByWithRelationInput | ReviewNoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReviewNotes.
     */
    cursor?: ReviewNoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewNotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReviewNotes.
     */
    distinct?: ReviewNoteScalarFieldEnum | ReviewNoteScalarFieldEnum[]
  }

  /**
   * ReviewNote findFirstOrThrow
   */
  export type ReviewNoteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewNote
     */
    select?: ReviewNoteSelect<ExtArgs> | null
    /**
     * Filter, which ReviewNote to fetch.
     */
    where?: ReviewNoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewNotes to fetch.
     */
    orderBy?: ReviewNoteOrderByWithRelationInput | ReviewNoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReviewNotes.
     */
    cursor?: ReviewNoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewNotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReviewNotes.
     */
    distinct?: ReviewNoteScalarFieldEnum | ReviewNoteScalarFieldEnum[]
  }

  /**
   * ReviewNote findMany
   */
  export type ReviewNoteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewNote
     */
    select?: ReviewNoteSelect<ExtArgs> | null
    /**
     * Filter, which ReviewNotes to fetch.
     */
    where?: ReviewNoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewNotes to fetch.
     */
    orderBy?: ReviewNoteOrderByWithRelationInput | ReviewNoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReviewNotes.
     */
    cursor?: ReviewNoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewNotes.
     */
    skip?: number
    distinct?: ReviewNoteScalarFieldEnum | ReviewNoteScalarFieldEnum[]
  }

  /**
   * ReviewNote create
   */
  export type ReviewNoteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewNote
     */
    select?: ReviewNoteSelect<ExtArgs> | null
    /**
     * The data needed to create a ReviewNote.
     */
    data: XOR<ReviewNoteCreateInput, ReviewNoteUncheckedCreateInput>
  }

  /**
   * ReviewNote createMany
   */
  export type ReviewNoteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReviewNotes.
     */
    data: ReviewNoteCreateManyInput | ReviewNoteCreateManyInput[]
  }

  /**
   * ReviewNote createManyAndReturn
   */
  export type ReviewNoteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewNote
     */
    select?: ReviewNoteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ReviewNotes.
     */
    data: ReviewNoteCreateManyInput | ReviewNoteCreateManyInput[]
  }

  /**
   * ReviewNote update
   */
  export type ReviewNoteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewNote
     */
    select?: ReviewNoteSelect<ExtArgs> | null
    /**
     * The data needed to update a ReviewNote.
     */
    data: XOR<ReviewNoteUpdateInput, ReviewNoteUncheckedUpdateInput>
    /**
     * Choose, which ReviewNote to update.
     */
    where: ReviewNoteWhereUniqueInput
  }

  /**
   * ReviewNote updateMany
   */
  export type ReviewNoteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReviewNotes.
     */
    data: XOR<ReviewNoteUpdateManyMutationInput, ReviewNoteUncheckedUpdateManyInput>
    /**
     * Filter which ReviewNotes to update
     */
    where?: ReviewNoteWhereInput
  }

  /**
   * ReviewNote upsert
   */
  export type ReviewNoteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewNote
     */
    select?: ReviewNoteSelect<ExtArgs> | null
    /**
     * The filter to search for the ReviewNote to update in case it exists.
     */
    where: ReviewNoteWhereUniqueInput
    /**
     * In case the ReviewNote found by the `where` argument doesn't exist, create a new ReviewNote with this data.
     */
    create: XOR<ReviewNoteCreateInput, ReviewNoteUncheckedCreateInput>
    /**
     * In case the ReviewNote was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewNoteUpdateInput, ReviewNoteUncheckedUpdateInput>
  }

  /**
   * ReviewNote delete
   */
  export type ReviewNoteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewNote
     */
    select?: ReviewNoteSelect<ExtArgs> | null
    /**
     * Filter which ReviewNote to delete.
     */
    where: ReviewNoteWhereUniqueInput
  }

  /**
   * ReviewNote deleteMany
   */
  export type ReviewNoteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReviewNotes to delete
     */
    where?: ReviewNoteWhereInput
  }

  /**
   * ReviewNote without action
   */
  export type ReviewNoteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewNote
     */
    select?: ReviewNoteSelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AccountsReceivableScalarFieldEnum: {
    id: 'id',
    owedBy: 'owedBy',
    description: 'description',
    amountCents: 'amountCents',
    currency: 'currency',
    isPaid: 'isPaid',
    paymentDate: 'paymentDate',
    notes: 'notes',
    url: 'url',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AccountsReceivableScalarFieldEnum = (typeof AccountsReceivableScalarFieldEnum)[keyof typeof AccountsReceivableScalarFieldEnum]


  export const AccountsPayableScalarFieldEnum: {
    id: 'id',
    payee: 'payee',
    description: 'description',
    amountCents: 'amountCents',
    currency: 'currency',
    isPaid: 'isPaid',
    paymentDate: 'paymentDate',
    notes: 'notes',
    url: 'url',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AccountsPayableScalarFieldEnum = (typeof AccountsPayableScalarFieldEnum)[keyof typeof AccountsPayableScalarFieldEnum]


  export const BalanceScalarFieldEnum: {
    id: 'id',
    month: 'month',
    boursoramaCents: 'boursoramaCents',
    boursoramaJointCents: 'boursoramaJointCents',
    bnpCents: 'bnpCents',
    revolutGbpCents: 'revolutGbpCents',
    otherAccountsCents: 'otherAccountsCents',
    sumOfCashCents: 'sumOfCashCents',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BalanceScalarFieldEnum = (typeof BalanceScalarFieldEnum)[keyof typeof BalanceScalarFieldEnum]


  export const MonthlyBudgetScalarFieldEnum: {
    id: 'id',
    month: 'month',
    category: 'category',
    plannedInflowCents: 'plannedInflowCents',
    plannedOutflowCents: 'plannedOutflowCents',
    currency: 'currency',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MonthlyBudgetScalarFieldEnum = (typeof MonthlyBudgetScalarFieldEnum)[keyof typeof MonthlyBudgetScalarFieldEnum]


  export const ReviewNoteScalarFieldEnum: {
    id: 'id',
    month: 'month',
    content: 'content',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ReviewNoteScalarFieldEnum = (typeof ReviewNoteScalarFieldEnum)[keyof typeof ReviewNoteScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type AccountsReceivableWhereInput = {
    AND?: AccountsReceivableWhereInput | AccountsReceivableWhereInput[]
    OR?: AccountsReceivableWhereInput[]
    NOT?: AccountsReceivableWhereInput | AccountsReceivableWhereInput[]
    id?: StringFilter<"AccountsReceivable"> | string
    owedBy?: StringNullableFilter<"AccountsReceivable"> | string | null
    description?: StringFilter<"AccountsReceivable"> | string
    amountCents?: IntFilter<"AccountsReceivable"> | number
    currency?: StringFilter<"AccountsReceivable"> | string
    isPaid?: BoolFilter<"AccountsReceivable"> | boolean
    paymentDate?: DateTimeFilter<"AccountsReceivable"> | Date | string
    notes?: StringNullableFilter<"AccountsReceivable"> | string | null
    url?: StringNullableFilter<"AccountsReceivable"> | string | null
    createdAt?: DateTimeFilter<"AccountsReceivable"> | Date | string
    updatedAt?: DateTimeFilter<"AccountsReceivable"> | Date | string
  }

  export type AccountsReceivableOrderByWithRelationInput = {
    id?: SortOrder
    owedBy?: SortOrderInput | SortOrder
    description?: SortOrder
    amountCents?: SortOrder
    currency?: SortOrder
    isPaid?: SortOrder
    paymentDate?: SortOrder
    notes?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountsReceivableWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AccountsReceivableWhereInput | AccountsReceivableWhereInput[]
    OR?: AccountsReceivableWhereInput[]
    NOT?: AccountsReceivableWhereInput | AccountsReceivableWhereInput[]
    owedBy?: StringNullableFilter<"AccountsReceivable"> | string | null
    description?: StringFilter<"AccountsReceivable"> | string
    amountCents?: IntFilter<"AccountsReceivable"> | number
    currency?: StringFilter<"AccountsReceivable"> | string
    isPaid?: BoolFilter<"AccountsReceivable"> | boolean
    paymentDate?: DateTimeFilter<"AccountsReceivable"> | Date | string
    notes?: StringNullableFilter<"AccountsReceivable"> | string | null
    url?: StringNullableFilter<"AccountsReceivable"> | string | null
    createdAt?: DateTimeFilter<"AccountsReceivable"> | Date | string
    updatedAt?: DateTimeFilter<"AccountsReceivable"> | Date | string
  }, "id">

  export type AccountsReceivableOrderByWithAggregationInput = {
    id?: SortOrder
    owedBy?: SortOrderInput | SortOrder
    description?: SortOrder
    amountCents?: SortOrder
    currency?: SortOrder
    isPaid?: SortOrder
    paymentDate?: SortOrder
    notes?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AccountsReceivableCountOrderByAggregateInput
    _avg?: AccountsReceivableAvgOrderByAggregateInput
    _max?: AccountsReceivableMaxOrderByAggregateInput
    _min?: AccountsReceivableMinOrderByAggregateInput
    _sum?: AccountsReceivableSumOrderByAggregateInput
  }

  export type AccountsReceivableScalarWhereWithAggregatesInput = {
    AND?: AccountsReceivableScalarWhereWithAggregatesInput | AccountsReceivableScalarWhereWithAggregatesInput[]
    OR?: AccountsReceivableScalarWhereWithAggregatesInput[]
    NOT?: AccountsReceivableScalarWhereWithAggregatesInput | AccountsReceivableScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AccountsReceivable"> | string
    owedBy?: StringNullableWithAggregatesFilter<"AccountsReceivable"> | string | null
    description?: StringWithAggregatesFilter<"AccountsReceivable"> | string
    amountCents?: IntWithAggregatesFilter<"AccountsReceivable"> | number
    currency?: StringWithAggregatesFilter<"AccountsReceivable"> | string
    isPaid?: BoolWithAggregatesFilter<"AccountsReceivable"> | boolean
    paymentDate?: DateTimeWithAggregatesFilter<"AccountsReceivable"> | Date | string
    notes?: StringNullableWithAggregatesFilter<"AccountsReceivable"> | string | null
    url?: StringNullableWithAggregatesFilter<"AccountsReceivable"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AccountsReceivable"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AccountsReceivable"> | Date | string
  }

  export type AccountsPayableWhereInput = {
    AND?: AccountsPayableWhereInput | AccountsPayableWhereInput[]
    OR?: AccountsPayableWhereInput[]
    NOT?: AccountsPayableWhereInput | AccountsPayableWhereInput[]
    id?: StringFilter<"AccountsPayable"> | string
    payee?: StringNullableFilter<"AccountsPayable"> | string | null
    description?: StringNullableFilter<"AccountsPayable"> | string | null
    amountCents?: IntFilter<"AccountsPayable"> | number
    currency?: StringFilter<"AccountsPayable"> | string
    isPaid?: BoolFilter<"AccountsPayable"> | boolean
    paymentDate?: DateTimeFilter<"AccountsPayable"> | Date | string
    notes?: StringNullableFilter<"AccountsPayable"> | string | null
    url?: StringNullableFilter<"AccountsPayable"> | string | null
    createdAt?: DateTimeFilter<"AccountsPayable"> | Date | string
    updatedAt?: DateTimeFilter<"AccountsPayable"> | Date | string
  }

  export type AccountsPayableOrderByWithRelationInput = {
    id?: SortOrder
    payee?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    amountCents?: SortOrder
    currency?: SortOrder
    isPaid?: SortOrder
    paymentDate?: SortOrder
    notes?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountsPayableWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AccountsPayableWhereInput | AccountsPayableWhereInput[]
    OR?: AccountsPayableWhereInput[]
    NOT?: AccountsPayableWhereInput | AccountsPayableWhereInput[]
    payee?: StringNullableFilter<"AccountsPayable"> | string | null
    description?: StringNullableFilter<"AccountsPayable"> | string | null
    amountCents?: IntFilter<"AccountsPayable"> | number
    currency?: StringFilter<"AccountsPayable"> | string
    isPaid?: BoolFilter<"AccountsPayable"> | boolean
    paymentDate?: DateTimeFilter<"AccountsPayable"> | Date | string
    notes?: StringNullableFilter<"AccountsPayable"> | string | null
    url?: StringNullableFilter<"AccountsPayable"> | string | null
    createdAt?: DateTimeFilter<"AccountsPayable"> | Date | string
    updatedAt?: DateTimeFilter<"AccountsPayable"> | Date | string
  }, "id">

  export type AccountsPayableOrderByWithAggregationInput = {
    id?: SortOrder
    payee?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    amountCents?: SortOrder
    currency?: SortOrder
    isPaid?: SortOrder
    paymentDate?: SortOrder
    notes?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AccountsPayableCountOrderByAggregateInput
    _avg?: AccountsPayableAvgOrderByAggregateInput
    _max?: AccountsPayableMaxOrderByAggregateInput
    _min?: AccountsPayableMinOrderByAggregateInput
    _sum?: AccountsPayableSumOrderByAggregateInput
  }

  export type AccountsPayableScalarWhereWithAggregatesInput = {
    AND?: AccountsPayableScalarWhereWithAggregatesInput | AccountsPayableScalarWhereWithAggregatesInput[]
    OR?: AccountsPayableScalarWhereWithAggregatesInput[]
    NOT?: AccountsPayableScalarWhereWithAggregatesInput | AccountsPayableScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AccountsPayable"> | string
    payee?: StringNullableWithAggregatesFilter<"AccountsPayable"> | string | null
    description?: StringNullableWithAggregatesFilter<"AccountsPayable"> | string | null
    amountCents?: IntWithAggregatesFilter<"AccountsPayable"> | number
    currency?: StringWithAggregatesFilter<"AccountsPayable"> | string
    isPaid?: BoolWithAggregatesFilter<"AccountsPayable"> | boolean
    paymentDate?: DateTimeWithAggregatesFilter<"AccountsPayable"> | Date | string
    notes?: StringNullableWithAggregatesFilter<"AccountsPayable"> | string | null
    url?: StringNullableWithAggregatesFilter<"AccountsPayable"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AccountsPayable"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AccountsPayable"> | Date | string
  }

  export type BalanceWhereInput = {
    AND?: BalanceWhereInput | BalanceWhereInput[]
    OR?: BalanceWhereInput[]
    NOT?: BalanceWhereInput | BalanceWhereInput[]
    id?: StringFilter<"Balance"> | string
    month?: DateTimeFilter<"Balance"> | Date | string
    boursoramaCents?: IntFilter<"Balance"> | number
    boursoramaJointCents?: IntFilter<"Balance"> | number
    bnpCents?: IntFilter<"Balance"> | number
    revolutGbpCents?: IntFilter<"Balance"> | number
    otherAccountsCents?: IntFilter<"Balance"> | number
    sumOfCashCents?: IntFilter<"Balance"> | number
    notes?: StringNullableFilter<"Balance"> | string | null
    createdAt?: DateTimeFilter<"Balance"> | Date | string
    updatedAt?: DateTimeFilter<"Balance"> | Date | string
  }

  export type BalanceOrderByWithRelationInput = {
    id?: SortOrder
    month?: SortOrder
    boursoramaCents?: SortOrder
    boursoramaJointCents?: SortOrder
    bnpCents?: SortOrder
    revolutGbpCents?: SortOrder
    otherAccountsCents?: SortOrder
    sumOfCashCents?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BalanceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    month?: Date | string
    AND?: BalanceWhereInput | BalanceWhereInput[]
    OR?: BalanceWhereInput[]
    NOT?: BalanceWhereInput | BalanceWhereInput[]
    boursoramaCents?: IntFilter<"Balance"> | number
    boursoramaJointCents?: IntFilter<"Balance"> | number
    bnpCents?: IntFilter<"Balance"> | number
    revolutGbpCents?: IntFilter<"Balance"> | number
    otherAccountsCents?: IntFilter<"Balance"> | number
    sumOfCashCents?: IntFilter<"Balance"> | number
    notes?: StringNullableFilter<"Balance"> | string | null
    createdAt?: DateTimeFilter<"Balance"> | Date | string
    updatedAt?: DateTimeFilter<"Balance"> | Date | string
  }, "id" | "month">

  export type BalanceOrderByWithAggregationInput = {
    id?: SortOrder
    month?: SortOrder
    boursoramaCents?: SortOrder
    boursoramaJointCents?: SortOrder
    bnpCents?: SortOrder
    revolutGbpCents?: SortOrder
    otherAccountsCents?: SortOrder
    sumOfCashCents?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BalanceCountOrderByAggregateInput
    _avg?: BalanceAvgOrderByAggregateInput
    _max?: BalanceMaxOrderByAggregateInput
    _min?: BalanceMinOrderByAggregateInput
    _sum?: BalanceSumOrderByAggregateInput
  }

  export type BalanceScalarWhereWithAggregatesInput = {
    AND?: BalanceScalarWhereWithAggregatesInput | BalanceScalarWhereWithAggregatesInput[]
    OR?: BalanceScalarWhereWithAggregatesInput[]
    NOT?: BalanceScalarWhereWithAggregatesInput | BalanceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Balance"> | string
    month?: DateTimeWithAggregatesFilter<"Balance"> | Date | string
    boursoramaCents?: IntWithAggregatesFilter<"Balance"> | number
    boursoramaJointCents?: IntWithAggregatesFilter<"Balance"> | number
    bnpCents?: IntWithAggregatesFilter<"Balance"> | number
    revolutGbpCents?: IntWithAggregatesFilter<"Balance"> | number
    otherAccountsCents?: IntWithAggregatesFilter<"Balance"> | number
    sumOfCashCents?: IntWithAggregatesFilter<"Balance"> | number
    notes?: StringNullableWithAggregatesFilter<"Balance"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Balance"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Balance"> | Date | string
  }

  export type MonthlyBudgetWhereInput = {
    AND?: MonthlyBudgetWhereInput | MonthlyBudgetWhereInput[]
    OR?: MonthlyBudgetWhereInput[]
    NOT?: MonthlyBudgetWhereInput | MonthlyBudgetWhereInput[]
    id?: StringFilter<"MonthlyBudget"> | string
    month?: DateTimeFilter<"MonthlyBudget"> | Date | string
    category?: StringFilter<"MonthlyBudget"> | string
    plannedInflowCents?: IntFilter<"MonthlyBudget"> | number
    plannedOutflowCents?: IntFilter<"MonthlyBudget"> | number
    currency?: StringFilter<"MonthlyBudget"> | string
    createdAt?: DateTimeFilter<"MonthlyBudget"> | Date | string
    updatedAt?: DateTimeFilter<"MonthlyBudget"> | Date | string
  }

  export type MonthlyBudgetOrderByWithRelationInput = {
    id?: SortOrder
    month?: SortOrder
    category?: SortOrder
    plannedInflowCents?: SortOrder
    plannedOutflowCents?: SortOrder
    currency?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MonthlyBudgetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    month_category?: MonthlyBudgetMonthCategoryCompoundUniqueInput
    AND?: MonthlyBudgetWhereInput | MonthlyBudgetWhereInput[]
    OR?: MonthlyBudgetWhereInput[]
    NOT?: MonthlyBudgetWhereInput | MonthlyBudgetWhereInput[]
    month?: DateTimeFilter<"MonthlyBudget"> | Date | string
    category?: StringFilter<"MonthlyBudget"> | string
    plannedInflowCents?: IntFilter<"MonthlyBudget"> | number
    plannedOutflowCents?: IntFilter<"MonthlyBudget"> | number
    currency?: StringFilter<"MonthlyBudget"> | string
    createdAt?: DateTimeFilter<"MonthlyBudget"> | Date | string
    updatedAt?: DateTimeFilter<"MonthlyBudget"> | Date | string
  }, "id" | "month_category">

  export type MonthlyBudgetOrderByWithAggregationInput = {
    id?: SortOrder
    month?: SortOrder
    category?: SortOrder
    plannedInflowCents?: SortOrder
    plannedOutflowCents?: SortOrder
    currency?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MonthlyBudgetCountOrderByAggregateInput
    _avg?: MonthlyBudgetAvgOrderByAggregateInput
    _max?: MonthlyBudgetMaxOrderByAggregateInput
    _min?: MonthlyBudgetMinOrderByAggregateInput
    _sum?: MonthlyBudgetSumOrderByAggregateInput
  }

  export type MonthlyBudgetScalarWhereWithAggregatesInput = {
    AND?: MonthlyBudgetScalarWhereWithAggregatesInput | MonthlyBudgetScalarWhereWithAggregatesInput[]
    OR?: MonthlyBudgetScalarWhereWithAggregatesInput[]
    NOT?: MonthlyBudgetScalarWhereWithAggregatesInput | MonthlyBudgetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MonthlyBudget"> | string
    month?: DateTimeWithAggregatesFilter<"MonthlyBudget"> | Date | string
    category?: StringWithAggregatesFilter<"MonthlyBudget"> | string
    plannedInflowCents?: IntWithAggregatesFilter<"MonthlyBudget"> | number
    plannedOutflowCents?: IntWithAggregatesFilter<"MonthlyBudget"> | number
    currency?: StringWithAggregatesFilter<"MonthlyBudget"> | string
    createdAt?: DateTimeWithAggregatesFilter<"MonthlyBudget"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MonthlyBudget"> | Date | string
  }

  export type ReviewNoteWhereInput = {
    AND?: ReviewNoteWhereInput | ReviewNoteWhereInput[]
    OR?: ReviewNoteWhereInput[]
    NOT?: ReviewNoteWhereInput | ReviewNoteWhereInput[]
    id?: StringFilter<"ReviewNote"> | string
    month?: DateTimeFilter<"ReviewNote"> | Date | string
    content?: StringFilter<"ReviewNote"> | string
    createdAt?: DateTimeFilter<"ReviewNote"> | Date | string
    updatedAt?: DateTimeFilter<"ReviewNote"> | Date | string
  }

  export type ReviewNoteOrderByWithRelationInput = {
    id?: SortOrder
    month?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewNoteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    month?: Date | string
    AND?: ReviewNoteWhereInput | ReviewNoteWhereInput[]
    OR?: ReviewNoteWhereInput[]
    NOT?: ReviewNoteWhereInput | ReviewNoteWhereInput[]
    content?: StringFilter<"ReviewNote"> | string
    createdAt?: DateTimeFilter<"ReviewNote"> | Date | string
    updatedAt?: DateTimeFilter<"ReviewNote"> | Date | string
  }, "id" | "month">

  export type ReviewNoteOrderByWithAggregationInput = {
    id?: SortOrder
    month?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ReviewNoteCountOrderByAggregateInput
    _max?: ReviewNoteMaxOrderByAggregateInput
    _min?: ReviewNoteMinOrderByAggregateInput
  }

  export type ReviewNoteScalarWhereWithAggregatesInput = {
    AND?: ReviewNoteScalarWhereWithAggregatesInput | ReviewNoteScalarWhereWithAggregatesInput[]
    OR?: ReviewNoteScalarWhereWithAggregatesInput[]
    NOT?: ReviewNoteScalarWhereWithAggregatesInput | ReviewNoteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ReviewNote"> | string
    month?: DateTimeWithAggregatesFilter<"ReviewNote"> | Date | string
    content?: StringWithAggregatesFilter<"ReviewNote"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ReviewNote"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ReviewNote"> | Date | string
  }

  export type AccountsReceivableCreateInput = {
    id?: string
    owedBy?: string | null
    description: string
    amountCents: number
    currency?: string
    isPaid?: boolean
    paymentDate: Date | string
    notes?: string | null
    url?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountsReceivableUncheckedCreateInput = {
    id?: string
    owedBy?: string | null
    description: string
    amountCents: number
    currency?: string
    isPaid?: boolean
    paymentDate: Date | string
    notes?: string | null
    url?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountsReceivableUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    owedBy?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    amountCents?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountsReceivableUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    owedBy?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    amountCents?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountsReceivableCreateManyInput = {
    id?: string
    owedBy?: string | null
    description: string
    amountCents: number
    currency?: string
    isPaid?: boolean
    paymentDate: Date | string
    notes?: string | null
    url?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountsReceivableUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    owedBy?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    amountCents?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountsReceivableUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    owedBy?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    amountCents?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountsPayableCreateInput = {
    id?: string
    payee?: string | null
    description?: string | null
    amountCents: number
    currency?: string
    isPaid?: boolean
    paymentDate: Date | string
    notes?: string | null
    url?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountsPayableUncheckedCreateInput = {
    id?: string
    payee?: string | null
    description?: string | null
    amountCents: number
    currency?: string
    isPaid?: boolean
    paymentDate: Date | string
    notes?: string | null
    url?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountsPayableUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    payee?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amountCents?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountsPayableUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    payee?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amountCents?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountsPayableCreateManyInput = {
    id?: string
    payee?: string | null
    description?: string | null
    amountCents: number
    currency?: string
    isPaid?: boolean
    paymentDate: Date | string
    notes?: string | null
    url?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountsPayableUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    payee?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amountCents?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountsPayableUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    payee?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amountCents?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BalanceCreateInput = {
    id?: string
    month: Date | string
    boursoramaCents?: number
    boursoramaJointCents?: number
    bnpCents?: number
    revolutGbpCents?: number
    otherAccountsCents?: number
    sumOfCashCents?: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BalanceUncheckedCreateInput = {
    id?: string
    month: Date | string
    boursoramaCents?: number
    boursoramaJointCents?: number
    bnpCents?: number
    revolutGbpCents?: number
    otherAccountsCents?: number
    sumOfCashCents?: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BalanceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    month?: DateTimeFieldUpdateOperationsInput | Date | string
    boursoramaCents?: IntFieldUpdateOperationsInput | number
    boursoramaJointCents?: IntFieldUpdateOperationsInput | number
    bnpCents?: IntFieldUpdateOperationsInput | number
    revolutGbpCents?: IntFieldUpdateOperationsInput | number
    otherAccountsCents?: IntFieldUpdateOperationsInput | number
    sumOfCashCents?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BalanceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    month?: DateTimeFieldUpdateOperationsInput | Date | string
    boursoramaCents?: IntFieldUpdateOperationsInput | number
    boursoramaJointCents?: IntFieldUpdateOperationsInput | number
    bnpCents?: IntFieldUpdateOperationsInput | number
    revolutGbpCents?: IntFieldUpdateOperationsInput | number
    otherAccountsCents?: IntFieldUpdateOperationsInput | number
    sumOfCashCents?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BalanceCreateManyInput = {
    id?: string
    month: Date | string
    boursoramaCents?: number
    boursoramaJointCents?: number
    bnpCents?: number
    revolutGbpCents?: number
    otherAccountsCents?: number
    sumOfCashCents?: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BalanceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    month?: DateTimeFieldUpdateOperationsInput | Date | string
    boursoramaCents?: IntFieldUpdateOperationsInput | number
    boursoramaJointCents?: IntFieldUpdateOperationsInput | number
    bnpCents?: IntFieldUpdateOperationsInput | number
    revolutGbpCents?: IntFieldUpdateOperationsInput | number
    otherAccountsCents?: IntFieldUpdateOperationsInput | number
    sumOfCashCents?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BalanceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    month?: DateTimeFieldUpdateOperationsInput | Date | string
    boursoramaCents?: IntFieldUpdateOperationsInput | number
    boursoramaJointCents?: IntFieldUpdateOperationsInput | number
    bnpCents?: IntFieldUpdateOperationsInput | number
    revolutGbpCents?: IntFieldUpdateOperationsInput | number
    otherAccountsCents?: IntFieldUpdateOperationsInput | number
    sumOfCashCents?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MonthlyBudgetCreateInput = {
    id?: string
    month: Date | string
    category: string
    plannedInflowCents?: number
    plannedOutflowCents?: number
    currency?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MonthlyBudgetUncheckedCreateInput = {
    id?: string
    month: Date | string
    category: string
    plannedInflowCents?: number
    plannedOutflowCents?: number
    currency?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MonthlyBudgetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    month?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: StringFieldUpdateOperationsInput | string
    plannedInflowCents?: IntFieldUpdateOperationsInput | number
    plannedOutflowCents?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MonthlyBudgetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    month?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: StringFieldUpdateOperationsInput | string
    plannedInflowCents?: IntFieldUpdateOperationsInput | number
    plannedOutflowCents?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MonthlyBudgetCreateManyInput = {
    id?: string
    month: Date | string
    category: string
    plannedInflowCents?: number
    plannedOutflowCents?: number
    currency?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MonthlyBudgetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    month?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: StringFieldUpdateOperationsInput | string
    plannedInflowCents?: IntFieldUpdateOperationsInput | number
    plannedOutflowCents?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MonthlyBudgetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    month?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: StringFieldUpdateOperationsInput | string
    plannedInflowCents?: IntFieldUpdateOperationsInput | number
    plannedOutflowCents?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewNoteCreateInput = {
    id?: string
    month: Date | string
    content?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewNoteUncheckedCreateInput = {
    id?: string
    month: Date | string
    content?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewNoteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    month?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewNoteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    month?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewNoteCreateManyInput = {
    id?: string
    month: Date | string
    content?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewNoteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    month?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewNoteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    month?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AccountsReceivableCountOrderByAggregateInput = {
    id?: SortOrder
    owedBy?: SortOrder
    description?: SortOrder
    amountCents?: SortOrder
    currency?: SortOrder
    isPaid?: SortOrder
    paymentDate?: SortOrder
    notes?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountsReceivableAvgOrderByAggregateInput = {
    amountCents?: SortOrder
  }

  export type AccountsReceivableMaxOrderByAggregateInput = {
    id?: SortOrder
    owedBy?: SortOrder
    description?: SortOrder
    amountCents?: SortOrder
    currency?: SortOrder
    isPaid?: SortOrder
    paymentDate?: SortOrder
    notes?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountsReceivableMinOrderByAggregateInput = {
    id?: SortOrder
    owedBy?: SortOrder
    description?: SortOrder
    amountCents?: SortOrder
    currency?: SortOrder
    isPaid?: SortOrder
    paymentDate?: SortOrder
    notes?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountsReceivableSumOrderByAggregateInput = {
    amountCents?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type AccountsPayableCountOrderByAggregateInput = {
    id?: SortOrder
    payee?: SortOrder
    description?: SortOrder
    amountCents?: SortOrder
    currency?: SortOrder
    isPaid?: SortOrder
    paymentDate?: SortOrder
    notes?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountsPayableAvgOrderByAggregateInput = {
    amountCents?: SortOrder
  }

  export type AccountsPayableMaxOrderByAggregateInput = {
    id?: SortOrder
    payee?: SortOrder
    description?: SortOrder
    amountCents?: SortOrder
    currency?: SortOrder
    isPaid?: SortOrder
    paymentDate?: SortOrder
    notes?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountsPayableMinOrderByAggregateInput = {
    id?: SortOrder
    payee?: SortOrder
    description?: SortOrder
    amountCents?: SortOrder
    currency?: SortOrder
    isPaid?: SortOrder
    paymentDate?: SortOrder
    notes?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountsPayableSumOrderByAggregateInput = {
    amountCents?: SortOrder
  }

  export type BalanceCountOrderByAggregateInput = {
    id?: SortOrder
    month?: SortOrder
    boursoramaCents?: SortOrder
    boursoramaJointCents?: SortOrder
    bnpCents?: SortOrder
    revolutGbpCents?: SortOrder
    otherAccountsCents?: SortOrder
    sumOfCashCents?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BalanceAvgOrderByAggregateInput = {
    boursoramaCents?: SortOrder
    boursoramaJointCents?: SortOrder
    bnpCents?: SortOrder
    revolutGbpCents?: SortOrder
    otherAccountsCents?: SortOrder
    sumOfCashCents?: SortOrder
  }

  export type BalanceMaxOrderByAggregateInput = {
    id?: SortOrder
    month?: SortOrder
    boursoramaCents?: SortOrder
    boursoramaJointCents?: SortOrder
    bnpCents?: SortOrder
    revolutGbpCents?: SortOrder
    otherAccountsCents?: SortOrder
    sumOfCashCents?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BalanceMinOrderByAggregateInput = {
    id?: SortOrder
    month?: SortOrder
    boursoramaCents?: SortOrder
    boursoramaJointCents?: SortOrder
    bnpCents?: SortOrder
    revolutGbpCents?: SortOrder
    otherAccountsCents?: SortOrder
    sumOfCashCents?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BalanceSumOrderByAggregateInput = {
    boursoramaCents?: SortOrder
    boursoramaJointCents?: SortOrder
    bnpCents?: SortOrder
    revolutGbpCents?: SortOrder
    otherAccountsCents?: SortOrder
    sumOfCashCents?: SortOrder
  }

  export type MonthlyBudgetMonthCategoryCompoundUniqueInput = {
    month: Date | string
    category: string
  }

  export type MonthlyBudgetCountOrderByAggregateInput = {
    id?: SortOrder
    month?: SortOrder
    category?: SortOrder
    plannedInflowCents?: SortOrder
    plannedOutflowCents?: SortOrder
    currency?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MonthlyBudgetAvgOrderByAggregateInput = {
    plannedInflowCents?: SortOrder
    plannedOutflowCents?: SortOrder
  }

  export type MonthlyBudgetMaxOrderByAggregateInput = {
    id?: SortOrder
    month?: SortOrder
    category?: SortOrder
    plannedInflowCents?: SortOrder
    plannedOutflowCents?: SortOrder
    currency?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MonthlyBudgetMinOrderByAggregateInput = {
    id?: SortOrder
    month?: SortOrder
    category?: SortOrder
    plannedInflowCents?: SortOrder
    plannedOutflowCents?: SortOrder
    currency?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MonthlyBudgetSumOrderByAggregateInput = {
    plannedInflowCents?: SortOrder
    plannedOutflowCents?: SortOrder
  }

  export type ReviewNoteCountOrderByAggregateInput = {
    id?: SortOrder
    month?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewNoteMaxOrderByAggregateInput = {
    id?: SortOrder
    month?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewNoteMinOrderByAggregateInput = {
    id?: SortOrder
    month?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use AccountsReceivableDefaultArgs instead
     */
    export type AccountsReceivableArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AccountsReceivableDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AccountsPayableDefaultArgs instead
     */
    export type AccountsPayableArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AccountsPayableDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BalanceDefaultArgs instead
     */
    export type BalanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BalanceDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MonthlyBudgetDefaultArgs instead
     */
    export type MonthlyBudgetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MonthlyBudgetDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ReviewNoteDefaultArgs instead
     */
    export type ReviewNoteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ReviewNoteDefaultArgs<ExtArgs>

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