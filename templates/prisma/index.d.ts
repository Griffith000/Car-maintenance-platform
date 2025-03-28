
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
 * Model Vehicule
 * 
 */
export type Vehicule = $Result.DefaultSelection<Prisma.$VehiculePayload>
/**
 * Model Mechanic
 * 
 */
export type Mechanic = $Result.DefaultSelection<Prisma.$MechanicPayload>
/**
 * Model HeadMechanic
 * 
 */
export type HeadMechanic = $Result.DefaultSelection<Prisma.$HeadMechanicPayload>
/**
 * Model Reservation
 * 
 */
export type Reservation = $Result.DefaultSelection<Prisma.$ReservationPayload>
/**
 * Model Diagnostic
 * 
 */
export type Diagnostic = $Result.DefaultSelection<Prisma.$DiagnosticPayload>
/**
 * Model Repair
 * 
 */
export type Repair = $Result.DefaultSelection<Prisma.$RepairPayload>
/**
 * Model RepairPart
 * 
 */
export type RepairPart = $Result.DefaultSelection<Prisma.$RepairPartPayload>
/**
 * Model Vendor
 * 
 */
export type Vendor = $Result.DefaultSelection<Prisma.$VendorPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Post
 * 
 */
export type Post = $Result.DefaultSelection<Prisma.$PostPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const RegTypes: {
  TUN: 'TUN',
  RS: 'RS',
  TRAC: 'TRAC',
  PAT: 'PAT',
  CMD: 'CMD',
  CD: 'CD',
  MD: 'MD',
  MC: 'MC',
  CC: 'CC',
  REM: 'REM',
  AA: 'AA',
  ES: 'ES',
  PE: 'PE',
  IT: 'IT'
};

export type RegTypes = (typeof RegTypes)[keyof typeof RegTypes]


export const RepairStatus: {
  DIAGNOSTIC: 'DIAGNOSTIC',
  REPAIR: 'REPAIR',
  SUCCESS: 'SUCCESS',
  FAILURE: 'FAILURE'
};

export type RepairStatus = (typeof RepairStatus)[keyof typeof RepairStatus]

}

export type RegTypes = $Enums.RegTypes

export const RegTypes: typeof $Enums.RegTypes

export type RepairStatus = $Enums.RepairStatus

export const RepairStatus: typeof $Enums.RepairStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Vehicules
 * const vehicules = await prisma.vehicule.findMany()
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
   * // Fetch zero or more Vehicules
   * const vehicules = await prisma.vehicule.findMany()
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
   * `prisma.vehicule`: Exposes CRUD operations for the **Vehicule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vehicules
    * const vehicules = await prisma.vehicule.findMany()
    * ```
    */
  get vehicule(): Prisma.VehiculeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mechanic`: Exposes CRUD operations for the **Mechanic** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mechanics
    * const mechanics = await prisma.mechanic.findMany()
    * ```
    */
  get mechanic(): Prisma.MechanicDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.headMechanic`: Exposes CRUD operations for the **HeadMechanic** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HeadMechanics
    * const headMechanics = await prisma.headMechanic.findMany()
    * ```
    */
  get headMechanic(): Prisma.HeadMechanicDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reservation`: Exposes CRUD operations for the **Reservation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reservations
    * const reservations = await prisma.reservation.findMany()
    * ```
    */
  get reservation(): Prisma.ReservationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.diagnostic`: Exposes CRUD operations for the **Diagnostic** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Diagnostics
    * const diagnostics = await prisma.diagnostic.findMany()
    * ```
    */
  get diagnostic(): Prisma.DiagnosticDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.repair`: Exposes CRUD operations for the **Repair** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Repairs
    * const repairs = await prisma.repair.findMany()
    * ```
    */
  get repair(): Prisma.RepairDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.repairPart`: Exposes CRUD operations for the **RepairPart** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RepairParts
    * const repairParts = await prisma.repairPart.findMany()
    * ```
    */
  get repairPart(): Prisma.RepairPartDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vendor`: Exposes CRUD operations for the **Vendor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vendors
    * const vendors = await prisma.vendor.findMany()
    * ```
    */
  get vendor(): Prisma.VendorDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.5.0
   * Query Engine version: 173f8d54f8d52e692c7e27e72a88314ec7aeff60
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
    Vehicule: 'Vehicule',
    Mechanic: 'Mechanic',
    HeadMechanic: 'HeadMechanic',
    Reservation: 'Reservation',
    Diagnostic: 'Diagnostic',
    Repair: 'Repair',
    RepairPart: 'RepairPart',
    Vendor: 'Vendor',
    User: 'User',
    Post: 'Post'
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
      modelProps: "vehicule" | "mechanic" | "headMechanic" | "reservation" | "diagnostic" | "repair" | "repairPart" | "vendor" | "user" | "post"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Vehicule: {
        payload: Prisma.$VehiculePayload<ExtArgs>
        fields: Prisma.VehiculeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VehiculeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiculePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VehiculeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiculePayload>
          }
          findFirst: {
            args: Prisma.VehiculeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiculePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VehiculeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiculePayload>
          }
          findMany: {
            args: Prisma.VehiculeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiculePayload>[]
          }
          create: {
            args: Prisma.VehiculeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiculePayload>
          }
          createMany: {
            args: Prisma.VehiculeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VehiculeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiculePayload>[]
          }
          delete: {
            args: Prisma.VehiculeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiculePayload>
          }
          update: {
            args: Prisma.VehiculeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiculePayload>
          }
          deleteMany: {
            args: Prisma.VehiculeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VehiculeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VehiculeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiculePayload>[]
          }
          upsert: {
            args: Prisma.VehiculeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiculePayload>
          }
          aggregate: {
            args: Prisma.VehiculeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVehicule>
          }
          groupBy: {
            args: Prisma.VehiculeGroupByArgs<ExtArgs>
            result: $Utils.Optional<VehiculeGroupByOutputType>[]
          }
          count: {
            args: Prisma.VehiculeCountArgs<ExtArgs>
            result: $Utils.Optional<VehiculeCountAggregateOutputType> | number
          }
        }
      }
      Mechanic: {
        payload: Prisma.$MechanicPayload<ExtArgs>
        fields: Prisma.MechanicFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MechanicFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MechanicPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MechanicFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MechanicPayload>
          }
          findFirst: {
            args: Prisma.MechanicFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MechanicPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MechanicFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MechanicPayload>
          }
          findMany: {
            args: Prisma.MechanicFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MechanicPayload>[]
          }
          create: {
            args: Prisma.MechanicCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MechanicPayload>
          }
          createMany: {
            args: Prisma.MechanicCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MechanicCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MechanicPayload>[]
          }
          delete: {
            args: Prisma.MechanicDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MechanicPayload>
          }
          update: {
            args: Prisma.MechanicUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MechanicPayload>
          }
          deleteMany: {
            args: Prisma.MechanicDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MechanicUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MechanicUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MechanicPayload>[]
          }
          upsert: {
            args: Prisma.MechanicUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MechanicPayload>
          }
          aggregate: {
            args: Prisma.MechanicAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMechanic>
          }
          groupBy: {
            args: Prisma.MechanicGroupByArgs<ExtArgs>
            result: $Utils.Optional<MechanicGroupByOutputType>[]
          }
          count: {
            args: Prisma.MechanicCountArgs<ExtArgs>
            result: $Utils.Optional<MechanicCountAggregateOutputType> | number
          }
        }
      }
      HeadMechanic: {
        payload: Prisma.$HeadMechanicPayload<ExtArgs>
        fields: Prisma.HeadMechanicFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HeadMechanicFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeadMechanicPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HeadMechanicFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeadMechanicPayload>
          }
          findFirst: {
            args: Prisma.HeadMechanicFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeadMechanicPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HeadMechanicFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeadMechanicPayload>
          }
          findMany: {
            args: Prisma.HeadMechanicFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeadMechanicPayload>[]
          }
          create: {
            args: Prisma.HeadMechanicCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeadMechanicPayload>
          }
          createMany: {
            args: Prisma.HeadMechanicCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HeadMechanicCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeadMechanicPayload>[]
          }
          delete: {
            args: Prisma.HeadMechanicDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeadMechanicPayload>
          }
          update: {
            args: Prisma.HeadMechanicUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeadMechanicPayload>
          }
          deleteMany: {
            args: Prisma.HeadMechanicDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HeadMechanicUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HeadMechanicUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeadMechanicPayload>[]
          }
          upsert: {
            args: Prisma.HeadMechanicUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeadMechanicPayload>
          }
          aggregate: {
            args: Prisma.HeadMechanicAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHeadMechanic>
          }
          groupBy: {
            args: Prisma.HeadMechanicGroupByArgs<ExtArgs>
            result: $Utils.Optional<HeadMechanicGroupByOutputType>[]
          }
          count: {
            args: Prisma.HeadMechanicCountArgs<ExtArgs>
            result: $Utils.Optional<HeadMechanicCountAggregateOutputType> | number
          }
        }
      }
      Reservation: {
        payload: Prisma.$ReservationPayload<ExtArgs>
        fields: Prisma.ReservationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReservationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReservationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          findFirst: {
            args: Prisma.ReservationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReservationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          findMany: {
            args: Prisma.ReservationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>[]
          }
          create: {
            args: Prisma.ReservationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          createMany: {
            args: Prisma.ReservationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReservationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>[]
          }
          delete: {
            args: Prisma.ReservationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          update: {
            args: Prisma.ReservationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          deleteMany: {
            args: Prisma.ReservationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReservationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReservationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>[]
          }
          upsert: {
            args: Prisma.ReservationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          aggregate: {
            args: Prisma.ReservationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReservation>
          }
          groupBy: {
            args: Prisma.ReservationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReservationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReservationCountArgs<ExtArgs>
            result: $Utils.Optional<ReservationCountAggregateOutputType> | number
          }
        }
      }
      Diagnostic: {
        payload: Prisma.$DiagnosticPayload<ExtArgs>
        fields: Prisma.DiagnosticFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DiagnosticFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosticPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DiagnosticFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosticPayload>
          }
          findFirst: {
            args: Prisma.DiagnosticFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosticPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DiagnosticFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosticPayload>
          }
          findMany: {
            args: Prisma.DiagnosticFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosticPayload>[]
          }
          create: {
            args: Prisma.DiagnosticCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosticPayload>
          }
          createMany: {
            args: Prisma.DiagnosticCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DiagnosticCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosticPayload>[]
          }
          delete: {
            args: Prisma.DiagnosticDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosticPayload>
          }
          update: {
            args: Prisma.DiagnosticUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosticPayload>
          }
          deleteMany: {
            args: Prisma.DiagnosticDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DiagnosticUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DiagnosticUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosticPayload>[]
          }
          upsert: {
            args: Prisma.DiagnosticUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosticPayload>
          }
          aggregate: {
            args: Prisma.DiagnosticAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDiagnostic>
          }
          groupBy: {
            args: Prisma.DiagnosticGroupByArgs<ExtArgs>
            result: $Utils.Optional<DiagnosticGroupByOutputType>[]
          }
          count: {
            args: Prisma.DiagnosticCountArgs<ExtArgs>
            result: $Utils.Optional<DiagnosticCountAggregateOutputType> | number
          }
        }
      }
      Repair: {
        payload: Prisma.$RepairPayload<ExtArgs>
        fields: Prisma.RepairFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RepairFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RepairFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairPayload>
          }
          findFirst: {
            args: Prisma.RepairFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RepairFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairPayload>
          }
          findMany: {
            args: Prisma.RepairFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairPayload>[]
          }
          create: {
            args: Prisma.RepairCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairPayload>
          }
          createMany: {
            args: Prisma.RepairCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RepairCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairPayload>[]
          }
          delete: {
            args: Prisma.RepairDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairPayload>
          }
          update: {
            args: Prisma.RepairUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairPayload>
          }
          deleteMany: {
            args: Prisma.RepairDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RepairUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RepairUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairPayload>[]
          }
          upsert: {
            args: Prisma.RepairUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairPayload>
          }
          aggregate: {
            args: Prisma.RepairAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRepair>
          }
          groupBy: {
            args: Prisma.RepairGroupByArgs<ExtArgs>
            result: $Utils.Optional<RepairGroupByOutputType>[]
          }
          count: {
            args: Prisma.RepairCountArgs<ExtArgs>
            result: $Utils.Optional<RepairCountAggregateOutputType> | number
          }
        }
      }
      RepairPart: {
        payload: Prisma.$RepairPartPayload<ExtArgs>
        fields: Prisma.RepairPartFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RepairPartFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairPartPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RepairPartFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairPartPayload>
          }
          findFirst: {
            args: Prisma.RepairPartFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairPartPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RepairPartFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairPartPayload>
          }
          findMany: {
            args: Prisma.RepairPartFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairPartPayload>[]
          }
          create: {
            args: Prisma.RepairPartCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairPartPayload>
          }
          createMany: {
            args: Prisma.RepairPartCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RepairPartCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairPartPayload>[]
          }
          delete: {
            args: Prisma.RepairPartDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairPartPayload>
          }
          update: {
            args: Prisma.RepairPartUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairPartPayload>
          }
          deleteMany: {
            args: Prisma.RepairPartDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RepairPartUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RepairPartUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairPartPayload>[]
          }
          upsert: {
            args: Prisma.RepairPartUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairPartPayload>
          }
          aggregate: {
            args: Prisma.RepairPartAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRepairPart>
          }
          groupBy: {
            args: Prisma.RepairPartGroupByArgs<ExtArgs>
            result: $Utils.Optional<RepairPartGroupByOutputType>[]
          }
          count: {
            args: Prisma.RepairPartCountArgs<ExtArgs>
            result: $Utils.Optional<RepairPartCountAggregateOutputType> | number
          }
        }
      }
      Vendor: {
        payload: Prisma.$VendorPayload<ExtArgs>
        fields: Prisma.VendorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VendorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VendorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>
          }
          findFirst: {
            args: Prisma.VendorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VendorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>
          }
          findMany: {
            args: Prisma.VendorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>[]
          }
          create: {
            args: Prisma.VendorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>
          }
          createMany: {
            args: Prisma.VendorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VendorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>[]
          }
          delete: {
            args: Prisma.VendorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>
          }
          update: {
            args: Prisma.VendorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>
          }
          deleteMany: {
            args: Prisma.VendorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VendorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VendorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>[]
          }
          upsert: {
            args: Prisma.VendorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>
          }
          aggregate: {
            args: Prisma.VendorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVendor>
          }
          groupBy: {
            args: Prisma.VendorGroupByArgs<ExtArgs>
            result: $Utils.Optional<VendorGroupByOutputType>[]
          }
          count: {
            args: Prisma.VendorCountArgs<ExtArgs>
            result: $Utils.Optional<VendorCountAggregateOutputType> | number
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
      Post: {
        payload: Prisma.$PostPayload<ExtArgs>
        fields: Prisma.PostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findFirst: {
            args: Prisma.PostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findMany: {
            args: Prisma.PostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          create: {
            args: Prisma.PostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          createMany: {
            args: Prisma.PostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          delete: {
            args: Prisma.PostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          update: {
            args: Prisma.PostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          deleteMany: {
            args: Prisma.PostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          upsert: {
            args: Prisma.PostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          aggregate: {
            args: Prisma.PostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePost>
          }
          groupBy: {
            args: Prisma.PostGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostCountArgs<ExtArgs>
            result: $Utils.Optional<PostCountAggregateOutputType> | number
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
    vehicule?: VehiculeOmit
    mechanic?: MechanicOmit
    headMechanic?: HeadMechanicOmit
    reservation?: ReservationOmit
    diagnostic?: DiagnosticOmit
    repair?: RepairOmit
    repairPart?: RepairPartOmit
    vendor?: VendorOmit
    user?: UserOmit
    post?: PostOmit
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
   * Count Type VehiculeCountOutputType
   */

  export type VehiculeCountOutputType = {
    Reservation: number
  }

  export type VehiculeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Reservation?: boolean | VehiculeCountOutputTypeCountReservationArgs
  }

  // Custom InputTypes
  /**
   * VehiculeCountOutputType without action
   */
  export type VehiculeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehiculeCountOutputType
     */
    select?: VehiculeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VehiculeCountOutputType without action
   */
  export type VehiculeCountOutputTypeCountReservationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservationWhereInput
  }


  /**
   * Count Type HeadMechanicCountOutputType
   */

  export type HeadMechanicCountOutputType = {
    Diagnostic: number
    Repair: number
  }

  export type HeadMechanicCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Diagnostic?: boolean | HeadMechanicCountOutputTypeCountDiagnosticArgs
    Repair?: boolean | HeadMechanicCountOutputTypeCountRepairArgs
  }

  // Custom InputTypes
  /**
   * HeadMechanicCountOutputType without action
   */
  export type HeadMechanicCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeadMechanicCountOutputType
     */
    select?: HeadMechanicCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HeadMechanicCountOutputType without action
   */
  export type HeadMechanicCountOutputTypeCountDiagnosticArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiagnosticWhereInput
  }

  /**
   * HeadMechanicCountOutputType without action
   */
  export type HeadMechanicCountOutputTypeCountRepairArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RepairWhereInput
  }


  /**
   * Count Type ReservationCountOutputType
   */

  export type ReservationCountOutputType = {
    Diagnostic: number
    Repair: number
  }

  export type ReservationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Diagnostic?: boolean | ReservationCountOutputTypeCountDiagnosticArgs
    Repair?: boolean | ReservationCountOutputTypeCountRepairArgs
  }

  // Custom InputTypes
  /**
   * ReservationCountOutputType without action
   */
  export type ReservationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationCountOutputType
     */
    select?: ReservationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ReservationCountOutputType without action
   */
  export type ReservationCountOutputTypeCountDiagnosticArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiagnosticWhereInput
  }

  /**
   * ReservationCountOutputType without action
   */
  export type ReservationCountOutputTypeCountRepairArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RepairWhereInput
  }


  /**
   * Count Type DiagnosticCountOutputType
   */

  export type DiagnosticCountOutputType = {
    workers_employed: number
  }

  export type DiagnosticCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workers_employed?: boolean | DiagnosticCountOutputTypeCountWorkers_employedArgs
  }

  // Custom InputTypes
  /**
   * DiagnosticCountOutputType without action
   */
  export type DiagnosticCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiagnosticCountOutputType
     */
    select?: DiagnosticCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DiagnosticCountOutputType without action
   */
  export type DiagnosticCountOutputTypeCountWorkers_employedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MechanicWhereInput
  }


  /**
   * Count Type RepairCountOutputType
   */

  export type RepairCountOutputType = {
    workers_employed: number
  }

  export type RepairCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workers_employed?: boolean | RepairCountOutputTypeCountWorkers_employedArgs
  }

  // Custom InputTypes
  /**
   * RepairCountOutputType without action
   */
  export type RepairCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairCountOutputType
     */
    select?: RepairCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RepairCountOutputType without action
   */
  export type RepairCountOutputTypeCountWorkers_employedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MechanicWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    posts: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | UserCountOutputTypeCountPostsArgs
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
  export type UserCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Vehicule
   */

  export type AggregateVehicule = {
    _count: VehiculeCountAggregateOutputType | null
    _min: VehiculeMinAggregateOutputType | null
    _max: VehiculeMaxAggregateOutputType | null
  }

  export type VehiculeMinAggregateOutputType = {
    vin: string | null
    local: boolean | null
    registation: string | null
    registration_type: $Enums.RegTypes | null
    location: string | null
  }

  export type VehiculeMaxAggregateOutputType = {
    vin: string | null
    local: boolean | null
    registation: string | null
    registration_type: $Enums.RegTypes | null
    location: string | null
  }

  export type VehiculeCountAggregateOutputType = {
    vin: number
    local: number
    registation: number
    registration_type: number
    location: number
    _all: number
  }


  export type VehiculeMinAggregateInputType = {
    vin?: true
    local?: true
    registation?: true
    registration_type?: true
    location?: true
  }

  export type VehiculeMaxAggregateInputType = {
    vin?: true
    local?: true
    registation?: true
    registration_type?: true
    location?: true
  }

  export type VehiculeCountAggregateInputType = {
    vin?: true
    local?: true
    registation?: true
    registration_type?: true
    location?: true
    _all?: true
  }

  export type VehiculeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vehicule to aggregate.
     */
    where?: VehiculeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicules to fetch.
     */
    orderBy?: VehiculeOrderByWithRelationInput | VehiculeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VehiculeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vehicules
    **/
    _count?: true | VehiculeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VehiculeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VehiculeMaxAggregateInputType
  }

  export type GetVehiculeAggregateType<T extends VehiculeAggregateArgs> = {
        [P in keyof T & keyof AggregateVehicule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVehicule[P]>
      : GetScalarType<T[P], AggregateVehicule[P]>
  }




  export type VehiculeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehiculeWhereInput
    orderBy?: VehiculeOrderByWithAggregationInput | VehiculeOrderByWithAggregationInput[]
    by: VehiculeScalarFieldEnum[] | VehiculeScalarFieldEnum
    having?: VehiculeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VehiculeCountAggregateInputType | true
    _min?: VehiculeMinAggregateInputType
    _max?: VehiculeMaxAggregateInputType
  }

  export type VehiculeGroupByOutputType = {
    vin: string
    local: boolean
    registation: string
    registration_type: $Enums.RegTypes | null
    location: string | null
    _count: VehiculeCountAggregateOutputType | null
    _min: VehiculeMinAggregateOutputType | null
    _max: VehiculeMaxAggregateOutputType | null
  }

  type GetVehiculeGroupByPayload<T extends VehiculeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VehiculeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VehiculeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VehiculeGroupByOutputType[P]>
            : GetScalarType<T[P], VehiculeGroupByOutputType[P]>
        }
      >
    >


  export type VehiculeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    vin?: boolean
    local?: boolean
    registation?: boolean
    registration_type?: boolean
    location?: boolean
    Reservation?: boolean | Vehicule$ReservationArgs<ExtArgs>
    _count?: boolean | VehiculeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicule"]>

  export type VehiculeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    vin?: boolean
    local?: boolean
    registation?: boolean
    registration_type?: boolean
    location?: boolean
  }, ExtArgs["result"]["vehicule"]>

  export type VehiculeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    vin?: boolean
    local?: boolean
    registation?: boolean
    registration_type?: boolean
    location?: boolean
  }, ExtArgs["result"]["vehicule"]>

  export type VehiculeSelectScalar = {
    vin?: boolean
    local?: boolean
    registation?: boolean
    registration_type?: boolean
    location?: boolean
  }

  export type VehiculeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"vin" | "local" | "registation" | "registration_type" | "location", ExtArgs["result"]["vehicule"]>
  export type VehiculeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Reservation?: boolean | Vehicule$ReservationArgs<ExtArgs>
    _count?: boolean | VehiculeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VehiculeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type VehiculeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $VehiculePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vehicule"
    objects: {
      Reservation: Prisma.$ReservationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      vin: string
      local: boolean
      registation: string
      registration_type: $Enums.RegTypes | null
      location: string | null
    }, ExtArgs["result"]["vehicule"]>
    composites: {}
  }

  type VehiculeGetPayload<S extends boolean | null | undefined | VehiculeDefaultArgs> = $Result.GetResult<Prisma.$VehiculePayload, S>

  type VehiculeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VehiculeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VehiculeCountAggregateInputType | true
    }

  export interface VehiculeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vehicule'], meta: { name: 'Vehicule' } }
    /**
     * Find zero or one Vehicule that matches the filter.
     * @param {VehiculeFindUniqueArgs} args - Arguments to find a Vehicule
     * @example
     * // Get one Vehicule
     * const vehicule = await prisma.vehicule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VehiculeFindUniqueArgs>(args: SelectSubset<T, VehiculeFindUniqueArgs<ExtArgs>>): Prisma__VehiculeClient<$Result.GetResult<Prisma.$VehiculePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vehicule that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VehiculeFindUniqueOrThrowArgs} args - Arguments to find a Vehicule
     * @example
     * // Get one Vehicule
     * const vehicule = await prisma.vehicule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VehiculeFindUniqueOrThrowArgs>(args: SelectSubset<T, VehiculeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VehiculeClient<$Result.GetResult<Prisma.$VehiculePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vehicule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehiculeFindFirstArgs} args - Arguments to find a Vehicule
     * @example
     * // Get one Vehicule
     * const vehicule = await prisma.vehicule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VehiculeFindFirstArgs>(args?: SelectSubset<T, VehiculeFindFirstArgs<ExtArgs>>): Prisma__VehiculeClient<$Result.GetResult<Prisma.$VehiculePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vehicule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehiculeFindFirstOrThrowArgs} args - Arguments to find a Vehicule
     * @example
     * // Get one Vehicule
     * const vehicule = await prisma.vehicule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VehiculeFindFirstOrThrowArgs>(args?: SelectSubset<T, VehiculeFindFirstOrThrowArgs<ExtArgs>>): Prisma__VehiculeClient<$Result.GetResult<Prisma.$VehiculePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vehicules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehiculeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vehicules
     * const vehicules = await prisma.vehicule.findMany()
     * 
     * // Get first 10 Vehicules
     * const vehicules = await prisma.vehicule.findMany({ take: 10 })
     * 
     * // Only select the `vin`
     * const vehiculeWithVinOnly = await prisma.vehicule.findMany({ select: { vin: true } })
     * 
     */
    findMany<T extends VehiculeFindManyArgs>(args?: SelectSubset<T, VehiculeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiculePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vehicule.
     * @param {VehiculeCreateArgs} args - Arguments to create a Vehicule.
     * @example
     * // Create one Vehicule
     * const Vehicule = await prisma.vehicule.create({
     *   data: {
     *     // ... data to create a Vehicule
     *   }
     * })
     * 
     */
    create<T extends VehiculeCreateArgs>(args: SelectSubset<T, VehiculeCreateArgs<ExtArgs>>): Prisma__VehiculeClient<$Result.GetResult<Prisma.$VehiculePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vehicules.
     * @param {VehiculeCreateManyArgs} args - Arguments to create many Vehicules.
     * @example
     * // Create many Vehicules
     * const vehicule = await prisma.vehicule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VehiculeCreateManyArgs>(args?: SelectSubset<T, VehiculeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Vehicules and returns the data saved in the database.
     * @param {VehiculeCreateManyAndReturnArgs} args - Arguments to create many Vehicules.
     * @example
     * // Create many Vehicules
     * const vehicule = await prisma.vehicule.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Vehicules and only return the `vin`
     * const vehiculeWithVinOnly = await prisma.vehicule.createManyAndReturn({
     *   select: { vin: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VehiculeCreateManyAndReturnArgs>(args?: SelectSubset<T, VehiculeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiculePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Vehicule.
     * @param {VehiculeDeleteArgs} args - Arguments to delete one Vehicule.
     * @example
     * // Delete one Vehicule
     * const Vehicule = await prisma.vehicule.delete({
     *   where: {
     *     // ... filter to delete one Vehicule
     *   }
     * })
     * 
     */
    delete<T extends VehiculeDeleteArgs>(args: SelectSubset<T, VehiculeDeleteArgs<ExtArgs>>): Prisma__VehiculeClient<$Result.GetResult<Prisma.$VehiculePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vehicule.
     * @param {VehiculeUpdateArgs} args - Arguments to update one Vehicule.
     * @example
     * // Update one Vehicule
     * const vehicule = await prisma.vehicule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VehiculeUpdateArgs>(args: SelectSubset<T, VehiculeUpdateArgs<ExtArgs>>): Prisma__VehiculeClient<$Result.GetResult<Prisma.$VehiculePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vehicules.
     * @param {VehiculeDeleteManyArgs} args - Arguments to filter Vehicules to delete.
     * @example
     * // Delete a few Vehicules
     * const { count } = await prisma.vehicule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VehiculeDeleteManyArgs>(args?: SelectSubset<T, VehiculeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vehicules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehiculeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vehicules
     * const vehicule = await prisma.vehicule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VehiculeUpdateManyArgs>(args: SelectSubset<T, VehiculeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vehicules and returns the data updated in the database.
     * @param {VehiculeUpdateManyAndReturnArgs} args - Arguments to update many Vehicules.
     * @example
     * // Update many Vehicules
     * const vehicule = await prisma.vehicule.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Vehicules and only return the `vin`
     * const vehiculeWithVinOnly = await prisma.vehicule.updateManyAndReturn({
     *   select: { vin: true },
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
    updateManyAndReturn<T extends VehiculeUpdateManyAndReturnArgs>(args: SelectSubset<T, VehiculeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiculePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Vehicule.
     * @param {VehiculeUpsertArgs} args - Arguments to update or create a Vehicule.
     * @example
     * // Update or create a Vehicule
     * const vehicule = await prisma.vehicule.upsert({
     *   create: {
     *     // ... data to create a Vehicule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vehicule we want to update
     *   }
     * })
     */
    upsert<T extends VehiculeUpsertArgs>(args: SelectSubset<T, VehiculeUpsertArgs<ExtArgs>>): Prisma__VehiculeClient<$Result.GetResult<Prisma.$VehiculePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vehicules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehiculeCountArgs} args - Arguments to filter Vehicules to count.
     * @example
     * // Count the number of Vehicules
     * const count = await prisma.vehicule.count({
     *   where: {
     *     // ... the filter for the Vehicules we want to count
     *   }
     * })
    **/
    count<T extends VehiculeCountArgs>(
      args?: Subset<T, VehiculeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VehiculeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vehicule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehiculeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VehiculeAggregateArgs>(args: Subset<T, VehiculeAggregateArgs>): Prisma.PrismaPromise<GetVehiculeAggregateType<T>>

    /**
     * Group by Vehicule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehiculeGroupByArgs} args - Group by arguments.
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
      T extends VehiculeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VehiculeGroupByArgs['orderBy'] }
        : { orderBy?: VehiculeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VehiculeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVehiculeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vehicule model
   */
  readonly fields: VehiculeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vehicule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VehiculeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Reservation<T extends Vehicule$ReservationArgs<ExtArgs> = {}>(args?: Subset<T, Vehicule$ReservationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Vehicule model
   */ 
  interface VehiculeFieldRefs {
    readonly vin: FieldRef<"Vehicule", 'String'>
    readonly local: FieldRef<"Vehicule", 'Boolean'>
    readonly registation: FieldRef<"Vehicule", 'String'>
    readonly registration_type: FieldRef<"Vehicule", 'RegTypes'>
    readonly location: FieldRef<"Vehicule", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Vehicule findUnique
   */
  export type VehiculeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicule
     */
    select?: VehiculeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicule
     */
    omit?: VehiculeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculeInclude<ExtArgs> | null
    /**
     * Filter, which Vehicule to fetch.
     */
    where: VehiculeWhereUniqueInput
  }

  /**
   * Vehicule findUniqueOrThrow
   */
  export type VehiculeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicule
     */
    select?: VehiculeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicule
     */
    omit?: VehiculeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculeInclude<ExtArgs> | null
    /**
     * Filter, which Vehicule to fetch.
     */
    where: VehiculeWhereUniqueInput
  }

  /**
   * Vehicule findFirst
   */
  export type VehiculeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicule
     */
    select?: VehiculeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicule
     */
    omit?: VehiculeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculeInclude<ExtArgs> | null
    /**
     * Filter, which Vehicule to fetch.
     */
    where?: VehiculeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicules to fetch.
     */
    orderBy?: VehiculeOrderByWithRelationInput | VehiculeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vehicules.
     */
    cursor?: VehiculeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehicules.
     */
    distinct?: VehiculeScalarFieldEnum | VehiculeScalarFieldEnum[]
  }

  /**
   * Vehicule findFirstOrThrow
   */
  export type VehiculeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicule
     */
    select?: VehiculeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicule
     */
    omit?: VehiculeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculeInclude<ExtArgs> | null
    /**
     * Filter, which Vehicule to fetch.
     */
    where?: VehiculeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicules to fetch.
     */
    orderBy?: VehiculeOrderByWithRelationInput | VehiculeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vehicules.
     */
    cursor?: VehiculeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehicules.
     */
    distinct?: VehiculeScalarFieldEnum | VehiculeScalarFieldEnum[]
  }

  /**
   * Vehicule findMany
   */
  export type VehiculeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicule
     */
    select?: VehiculeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicule
     */
    omit?: VehiculeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculeInclude<ExtArgs> | null
    /**
     * Filter, which Vehicules to fetch.
     */
    where?: VehiculeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicules to fetch.
     */
    orderBy?: VehiculeOrderByWithRelationInput | VehiculeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vehicules.
     */
    cursor?: VehiculeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicules.
     */
    skip?: number
    distinct?: VehiculeScalarFieldEnum | VehiculeScalarFieldEnum[]
  }

  /**
   * Vehicule create
   */
  export type VehiculeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicule
     */
    select?: VehiculeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicule
     */
    omit?: VehiculeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculeInclude<ExtArgs> | null
    /**
     * The data needed to create a Vehicule.
     */
    data: XOR<VehiculeCreateInput, VehiculeUncheckedCreateInput>
  }

  /**
   * Vehicule createMany
   */
  export type VehiculeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vehicules.
     */
    data: VehiculeCreateManyInput | VehiculeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vehicule createManyAndReturn
   */
  export type VehiculeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicule
     */
    select?: VehiculeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicule
     */
    omit?: VehiculeOmit<ExtArgs> | null
    /**
     * The data used to create many Vehicules.
     */
    data: VehiculeCreateManyInput | VehiculeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vehicule update
   */
  export type VehiculeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicule
     */
    select?: VehiculeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicule
     */
    omit?: VehiculeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculeInclude<ExtArgs> | null
    /**
     * The data needed to update a Vehicule.
     */
    data: XOR<VehiculeUpdateInput, VehiculeUncheckedUpdateInput>
    /**
     * Choose, which Vehicule to update.
     */
    where: VehiculeWhereUniqueInput
  }

  /**
   * Vehicule updateMany
   */
  export type VehiculeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vehicules.
     */
    data: XOR<VehiculeUpdateManyMutationInput, VehiculeUncheckedUpdateManyInput>
    /**
     * Filter which Vehicules to update
     */
    where?: VehiculeWhereInput
    /**
     * Limit how many Vehicules to update.
     */
    limit?: number
  }

  /**
   * Vehicule updateManyAndReturn
   */
  export type VehiculeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicule
     */
    select?: VehiculeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicule
     */
    omit?: VehiculeOmit<ExtArgs> | null
    /**
     * The data used to update Vehicules.
     */
    data: XOR<VehiculeUpdateManyMutationInput, VehiculeUncheckedUpdateManyInput>
    /**
     * Filter which Vehicules to update
     */
    where?: VehiculeWhereInput
    /**
     * Limit how many Vehicules to update.
     */
    limit?: number
  }

  /**
   * Vehicule upsert
   */
  export type VehiculeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicule
     */
    select?: VehiculeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicule
     */
    omit?: VehiculeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculeInclude<ExtArgs> | null
    /**
     * The filter to search for the Vehicule to update in case it exists.
     */
    where: VehiculeWhereUniqueInput
    /**
     * In case the Vehicule found by the `where` argument doesn't exist, create a new Vehicule with this data.
     */
    create: XOR<VehiculeCreateInput, VehiculeUncheckedCreateInput>
    /**
     * In case the Vehicule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VehiculeUpdateInput, VehiculeUncheckedUpdateInput>
  }

  /**
   * Vehicule delete
   */
  export type VehiculeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicule
     */
    select?: VehiculeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicule
     */
    omit?: VehiculeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculeInclude<ExtArgs> | null
    /**
     * Filter which Vehicule to delete.
     */
    where: VehiculeWhereUniqueInput
  }

  /**
   * Vehicule deleteMany
   */
  export type VehiculeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vehicules to delete
     */
    where?: VehiculeWhereInput
    /**
     * Limit how many Vehicules to delete.
     */
    limit?: number
  }

  /**
   * Vehicule.Reservation
   */
  export type Vehicule$ReservationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    where?: ReservationWhereInput
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    cursor?: ReservationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * Vehicule without action
   */
  export type VehiculeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicule
     */
    select?: VehiculeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicule
     */
    omit?: VehiculeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculeInclude<ExtArgs> | null
  }


  /**
   * Model Mechanic
   */

  export type AggregateMechanic = {
    _count: MechanicCountAggregateOutputType | null
    _avg: MechanicAvgAggregateOutputType | null
    _sum: MechanicSumAggregateOutputType | null
    _min: MechanicMinAggregateOutputType | null
    _max: MechanicMaxAggregateOutputType | null
  }

  export type MechanicAvgAggregateOutputType = {
    mechanic_id: number | null
    pay_per_hour: number | null
    diagnosticDiagnostic_id: number | null
    repairRepair_id: number | null
  }

  export type MechanicSumAggregateOutputType = {
    mechanic_id: number | null
    pay_per_hour: number | null
    diagnosticDiagnostic_id: number | null
    repairRepair_id: number | null
  }

  export type MechanicMinAggregateOutputType = {
    mechanic_id: number | null
    pay_per_hour: number | null
    diagnosticDiagnostic_id: number | null
    repairRepair_id: number | null
  }

  export type MechanicMaxAggregateOutputType = {
    mechanic_id: number | null
    pay_per_hour: number | null
    diagnosticDiagnostic_id: number | null
    repairRepair_id: number | null
  }

  export type MechanicCountAggregateOutputType = {
    mechanic_id: number
    pay_per_hour: number
    diagnosticDiagnostic_id: number
    repairRepair_id: number
    _all: number
  }


  export type MechanicAvgAggregateInputType = {
    mechanic_id?: true
    pay_per_hour?: true
    diagnosticDiagnostic_id?: true
    repairRepair_id?: true
  }

  export type MechanicSumAggregateInputType = {
    mechanic_id?: true
    pay_per_hour?: true
    diagnosticDiagnostic_id?: true
    repairRepair_id?: true
  }

  export type MechanicMinAggregateInputType = {
    mechanic_id?: true
    pay_per_hour?: true
    diagnosticDiagnostic_id?: true
    repairRepair_id?: true
  }

  export type MechanicMaxAggregateInputType = {
    mechanic_id?: true
    pay_per_hour?: true
    diagnosticDiagnostic_id?: true
    repairRepair_id?: true
  }

  export type MechanicCountAggregateInputType = {
    mechanic_id?: true
    pay_per_hour?: true
    diagnosticDiagnostic_id?: true
    repairRepair_id?: true
    _all?: true
  }

  export type MechanicAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mechanic to aggregate.
     */
    where?: MechanicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mechanics to fetch.
     */
    orderBy?: MechanicOrderByWithRelationInput | MechanicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MechanicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mechanics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mechanics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Mechanics
    **/
    _count?: true | MechanicCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MechanicAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MechanicSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MechanicMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MechanicMaxAggregateInputType
  }

  export type GetMechanicAggregateType<T extends MechanicAggregateArgs> = {
        [P in keyof T & keyof AggregateMechanic]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMechanic[P]>
      : GetScalarType<T[P], AggregateMechanic[P]>
  }




  export type MechanicGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MechanicWhereInput
    orderBy?: MechanicOrderByWithAggregationInput | MechanicOrderByWithAggregationInput[]
    by: MechanicScalarFieldEnum[] | MechanicScalarFieldEnum
    having?: MechanicScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MechanicCountAggregateInputType | true
    _avg?: MechanicAvgAggregateInputType
    _sum?: MechanicSumAggregateInputType
    _min?: MechanicMinAggregateInputType
    _max?: MechanicMaxAggregateInputType
  }

  export type MechanicGroupByOutputType = {
    mechanic_id: number
    pay_per_hour: number
    diagnosticDiagnostic_id: number | null
    repairRepair_id: number | null
    _count: MechanicCountAggregateOutputType | null
    _avg: MechanicAvgAggregateOutputType | null
    _sum: MechanicSumAggregateOutputType | null
    _min: MechanicMinAggregateOutputType | null
    _max: MechanicMaxAggregateOutputType | null
  }

  type GetMechanicGroupByPayload<T extends MechanicGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MechanicGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MechanicGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MechanicGroupByOutputType[P]>
            : GetScalarType<T[P], MechanicGroupByOutputType[P]>
        }
      >
    >


  export type MechanicSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    mechanic_id?: boolean
    pay_per_hour?: boolean
    diagnosticDiagnostic_id?: boolean
    repairRepair_id?: boolean
    HeadMechanic?: boolean | Mechanic$HeadMechanicArgs<ExtArgs>
    Diagnostic?: boolean | Mechanic$DiagnosticArgs<ExtArgs>
    Repair?: boolean | Mechanic$RepairArgs<ExtArgs>
  }, ExtArgs["result"]["mechanic"]>

  export type MechanicSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    mechanic_id?: boolean
    pay_per_hour?: boolean
    diagnosticDiagnostic_id?: boolean
    repairRepair_id?: boolean
    Diagnostic?: boolean | Mechanic$DiagnosticArgs<ExtArgs>
    Repair?: boolean | Mechanic$RepairArgs<ExtArgs>
  }, ExtArgs["result"]["mechanic"]>

  export type MechanicSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    mechanic_id?: boolean
    pay_per_hour?: boolean
    diagnosticDiagnostic_id?: boolean
    repairRepair_id?: boolean
    Diagnostic?: boolean | Mechanic$DiagnosticArgs<ExtArgs>
    Repair?: boolean | Mechanic$RepairArgs<ExtArgs>
  }, ExtArgs["result"]["mechanic"]>

  export type MechanicSelectScalar = {
    mechanic_id?: boolean
    pay_per_hour?: boolean
    diagnosticDiagnostic_id?: boolean
    repairRepair_id?: boolean
  }

  export type MechanicOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"mechanic_id" | "pay_per_hour" | "diagnosticDiagnostic_id" | "repairRepair_id", ExtArgs["result"]["mechanic"]>
  export type MechanicInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    HeadMechanic?: boolean | Mechanic$HeadMechanicArgs<ExtArgs>
    Diagnostic?: boolean | Mechanic$DiagnosticArgs<ExtArgs>
    Repair?: boolean | Mechanic$RepairArgs<ExtArgs>
  }
  export type MechanicIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Diagnostic?: boolean | Mechanic$DiagnosticArgs<ExtArgs>
    Repair?: boolean | Mechanic$RepairArgs<ExtArgs>
  }
  export type MechanicIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Diagnostic?: boolean | Mechanic$DiagnosticArgs<ExtArgs>
    Repair?: boolean | Mechanic$RepairArgs<ExtArgs>
  }

  export type $MechanicPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Mechanic"
    objects: {
      HeadMechanic: Prisma.$HeadMechanicPayload<ExtArgs> | null
      Diagnostic: Prisma.$DiagnosticPayload<ExtArgs> | null
      Repair: Prisma.$RepairPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      mechanic_id: number
      pay_per_hour: number
      diagnosticDiagnostic_id: number | null
      repairRepair_id: number | null
    }, ExtArgs["result"]["mechanic"]>
    composites: {}
  }

  type MechanicGetPayload<S extends boolean | null | undefined | MechanicDefaultArgs> = $Result.GetResult<Prisma.$MechanicPayload, S>

  type MechanicCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MechanicFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MechanicCountAggregateInputType | true
    }

  export interface MechanicDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Mechanic'], meta: { name: 'Mechanic' } }
    /**
     * Find zero or one Mechanic that matches the filter.
     * @param {MechanicFindUniqueArgs} args - Arguments to find a Mechanic
     * @example
     * // Get one Mechanic
     * const mechanic = await prisma.mechanic.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MechanicFindUniqueArgs>(args: SelectSubset<T, MechanicFindUniqueArgs<ExtArgs>>): Prisma__MechanicClient<$Result.GetResult<Prisma.$MechanicPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Mechanic that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MechanicFindUniqueOrThrowArgs} args - Arguments to find a Mechanic
     * @example
     * // Get one Mechanic
     * const mechanic = await prisma.mechanic.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MechanicFindUniqueOrThrowArgs>(args: SelectSubset<T, MechanicFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MechanicClient<$Result.GetResult<Prisma.$MechanicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mechanic that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MechanicFindFirstArgs} args - Arguments to find a Mechanic
     * @example
     * // Get one Mechanic
     * const mechanic = await prisma.mechanic.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MechanicFindFirstArgs>(args?: SelectSubset<T, MechanicFindFirstArgs<ExtArgs>>): Prisma__MechanicClient<$Result.GetResult<Prisma.$MechanicPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mechanic that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MechanicFindFirstOrThrowArgs} args - Arguments to find a Mechanic
     * @example
     * // Get one Mechanic
     * const mechanic = await prisma.mechanic.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MechanicFindFirstOrThrowArgs>(args?: SelectSubset<T, MechanicFindFirstOrThrowArgs<ExtArgs>>): Prisma__MechanicClient<$Result.GetResult<Prisma.$MechanicPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Mechanics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MechanicFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mechanics
     * const mechanics = await prisma.mechanic.findMany()
     * 
     * // Get first 10 Mechanics
     * const mechanics = await prisma.mechanic.findMany({ take: 10 })
     * 
     * // Only select the `mechanic_id`
     * const mechanicWithMechanic_idOnly = await prisma.mechanic.findMany({ select: { mechanic_id: true } })
     * 
     */
    findMany<T extends MechanicFindManyArgs>(args?: SelectSubset<T, MechanicFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MechanicPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Mechanic.
     * @param {MechanicCreateArgs} args - Arguments to create a Mechanic.
     * @example
     * // Create one Mechanic
     * const Mechanic = await prisma.mechanic.create({
     *   data: {
     *     // ... data to create a Mechanic
     *   }
     * })
     * 
     */
    create<T extends MechanicCreateArgs>(args: SelectSubset<T, MechanicCreateArgs<ExtArgs>>): Prisma__MechanicClient<$Result.GetResult<Prisma.$MechanicPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Mechanics.
     * @param {MechanicCreateManyArgs} args - Arguments to create many Mechanics.
     * @example
     * // Create many Mechanics
     * const mechanic = await prisma.mechanic.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MechanicCreateManyArgs>(args?: SelectSubset<T, MechanicCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Mechanics and returns the data saved in the database.
     * @param {MechanicCreateManyAndReturnArgs} args - Arguments to create many Mechanics.
     * @example
     * // Create many Mechanics
     * const mechanic = await prisma.mechanic.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Mechanics and only return the `mechanic_id`
     * const mechanicWithMechanic_idOnly = await prisma.mechanic.createManyAndReturn({
     *   select: { mechanic_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MechanicCreateManyAndReturnArgs>(args?: SelectSubset<T, MechanicCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MechanicPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Mechanic.
     * @param {MechanicDeleteArgs} args - Arguments to delete one Mechanic.
     * @example
     * // Delete one Mechanic
     * const Mechanic = await prisma.mechanic.delete({
     *   where: {
     *     // ... filter to delete one Mechanic
     *   }
     * })
     * 
     */
    delete<T extends MechanicDeleteArgs>(args: SelectSubset<T, MechanicDeleteArgs<ExtArgs>>): Prisma__MechanicClient<$Result.GetResult<Prisma.$MechanicPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Mechanic.
     * @param {MechanicUpdateArgs} args - Arguments to update one Mechanic.
     * @example
     * // Update one Mechanic
     * const mechanic = await prisma.mechanic.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MechanicUpdateArgs>(args: SelectSubset<T, MechanicUpdateArgs<ExtArgs>>): Prisma__MechanicClient<$Result.GetResult<Prisma.$MechanicPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Mechanics.
     * @param {MechanicDeleteManyArgs} args - Arguments to filter Mechanics to delete.
     * @example
     * // Delete a few Mechanics
     * const { count } = await prisma.mechanic.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MechanicDeleteManyArgs>(args?: SelectSubset<T, MechanicDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mechanics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MechanicUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mechanics
     * const mechanic = await prisma.mechanic.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MechanicUpdateManyArgs>(args: SelectSubset<T, MechanicUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mechanics and returns the data updated in the database.
     * @param {MechanicUpdateManyAndReturnArgs} args - Arguments to update many Mechanics.
     * @example
     * // Update many Mechanics
     * const mechanic = await prisma.mechanic.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Mechanics and only return the `mechanic_id`
     * const mechanicWithMechanic_idOnly = await prisma.mechanic.updateManyAndReturn({
     *   select: { mechanic_id: true },
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
    updateManyAndReturn<T extends MechanicUpdateManyAndReturnArgs>(args: SelectSubset<T, MechanicUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MechanicPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Mechanic.
     * @param {MechanicUpsertArgs} args - Arguments to update or create a Mechanic.
     * @example
     * // Update or create a Mechanic
     * const mechanic = await prisma.mechanic.upsert({
     *   create: {
     *     // ... data to create a Mechanic
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mechanic we want to update
     *   }
     * })
     */
    upsert<T extends MechanicUpsertArgs>(args: SelectSubset<T, MechanicUpsertArgs<ExtArgs>>): Prisma__MechanicClient<$Result.GetResult<Prisma.$MechanicPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Mechanics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MechanicCountArgs} args - Arguments to filter Mechanics to count.
     * @example
     * // Count the number of Mechanics
     * const count = await prisma.mechanic.count({
     *   where: {
     *     // ... the filter for the Mechanics we want to count
     *   }
     * })
    **/
    count<T extends MechanicCountArgs>(
      args?: Subset<T, MechanicCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MechanicCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mechanic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MechanicAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MechanicAggregateArgs>(args: Subset<T, MechanicAggregateArgs>): Prisma.PrismaPromise<GetMechanicAggregateType<T>>

    /**
     * Group by Mechanic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MechanicGroupByArgs} args - Group by arguments.
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
      T extends MechanicGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MechanicGroupByArgs['orderBy'] }
        : { orderBy?: MechanicGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MechanicGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMechanicGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Mechanic model
   */
  readonly fields: MechanicFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Mechanic.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MechanicClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    HeadMechanic<T extends Mechanic$HeadMechanicArgs<ExtArgs> = {}>(args?: Subset<T, Mechanic$HeadMechanicArgs<ExtArgs>>): Prisma__HeadMechanicClient<$Result.GetResult<Prisma.$HeadMechanicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Diagnostic<T extends Mechanic$DiagnosticArgs<ExtArgs> = {}>(args?: Subset<T, Mechanic$DiagnosticArgs<ExtArgs>>): Prisma__DiagnosticClient<$Result.GetResult<Prisma.$DiagnosticPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Repair<T extends Mechanic$RepairArgs<ExtArgs> = {}>(args?: Subset<T, Mechanic$RepairArgs<ExtArgs>>): Prisma__RepairClient<$Result.GetResult<Prisma.$RepairPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Mechanic model
   */ 
  interface MechanicFieldRefs {
    readonly mechanic_id: FieldRef<"Mechanic", 'Int'>
    readonly pay_per_hour: FieldRef<"Mechanic", 'Float'>
    readonly diagnosticDiagnostic_id: FieldRef<"Mechanic", 'Int'>
    readonly repairRepair_id: FieldRef<"Mechanic", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Mechanic findUnique
   */
  export type MechanicFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mechanic
     */
    select?: MechanicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mechanic
     */
    omit?: MechanicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MechanicInclude<ExtArgs> | null
    /**
     * Filter, which Mechanic to fetch.
     */
    where: MechanicWhereUniqueInput
  }

  /**
   * Mechanic findUniqueOrThrow
   */
  export type MechanicFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mechanic
     */
    select?: MechanicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mechanic
     */
    omit?: MechanicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MechanicInclude<ExtArgs> | null
    /**
     * Filter, which Mechanic to fetch.
     */
    where: MechanicWhereUniqueInput
  }

  /**
   * Mechanic findFirst
   */
  export type MechanicFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mechanic
     */
    select?: MechanicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mechanic
     */
    omit?: MechanicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MechanicInclude<ExtArgs> | null
    /**
     * Filter, which Mechanic to fetch.
     */
    where?: MechanicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mechanics to fetch.
     */
    orderBy?: MechanicOrderByWithRelationInput | MechanicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mechanics.
     */
    cursor?: MechanicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mechanics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mechanics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mechanics.
     */
    distinct?: MechanicScalarFieldEnum | MechanicScalarFieldEnum[]
  }

  /**
   * Mechanic findFirstOrThrow
   */
  export type MechanicFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mechanic
     */
    select?: MechanicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mechanic
     */
    omit?: MechanicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MechanicInclude<ExtArgs> | null
    /**
     * Filter, which Mechanic to fetch.
     */
    where?: MechanicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mechanics to fetch.
     */
    orderBy?: MechanicOrderByWithRelationInput | MechanicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mechanics.
     */
    cursor?: MechanicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mechanics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mechanics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mechanics.
     */
    distinct?: MechanicScalarFieldEnum | MechanicScalarFieldEnum[]
  }

  /**
   * Mechanic findMany
   */
  export type MechanicFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mechanic
     */
    select?: MechanicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mechanic
     */
    omit?: MechanicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MechanicInclude<ExtArgs> | null
    /**
     * Filter, which Mechanics to fetch.
     */
    where?: MechanicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mechanics to fetch.
     */
    orderBy?: MechanicOrderByWithRelationInput | MechanicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Mechanics.
     */
    cursor?: MechanicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mechanics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mechanics.
     */
    skip?: number
    distinct?: MechanicScalarFieldEnum | MechanicScalarFieldEnum[]
  }

  /**
   * Mechanic create
   */
  export type MechanicCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mechanic
     */
    select?: MechanicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mechanic
     */
    omit?: MechanicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MechanicInclude<ExtArgs> | null
    /**
     * The data needed to create a Mechanic.
     */
    data: XOR<MechanicCreateInput, MechanicUncheckedCreateInput>
  }

  /**
   * Mechanic createMany
   */
  export type MechanicCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Mechanics.
     */
    data: MechanicCreateManyInput | MechanicCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Mechanic createManyAndReturn
   */
  export type MechanicCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mechanic
     */
    select?: MechanicSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Mechanic
     */
    omit?: MechanicOmit<ExtArgs> | null
    /**
     * The data used to create many Mechanics.
     */
    data: MechanicCreateManyInput | MechanicCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MechanicIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Mechanic update
   */
  export type MechanicUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mechanic
     */
    select?: MechanicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mechanic
     */
    omit?: MechanicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MechanicInclude<ExtArgs> | null
    /**
     * The data needed to update a Mechanic.
     */
    data: XOR<MechanicUpdateInput, MechanicUncheckedUpdateInput>
    /**
     * Choose, which Mechanic to update.
     */
    where: MechanicWhereUniqueInput
  }

  /**
   * Mechanic updateMany
   */
  export type MechanicUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Mechanics.
     */
    data: XOR<MechanicUpdateManyMutationInput, MechanicUncheckedUpdateManyInput>
    /**
     * Filter which Mechanics to update
     */
    where?: MechanicWhereInput
    /**
     * Limit how many Mechanics to update.
     */
    limit?: number
  }

  /**
   * Mechanic updateManyAndReturn
   */
  export type MechanicUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mechanic
     */
    select?: MechanicSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Mechanic
     */
    omit?: MechanicOmit<ExtArgs> | null
    /**
     * The data used to update Mechanics.
     */
    data: XOR<MechanicUpdateManyMutationInput, MechanicUncheckedUpdateManyInput>
    /**
     * Filter which Mechanics to update
     */
    where?: MechanicWhereInput
    /**
     * Limit how many Mechanics to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MechanicIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Mechanic upsert
   */
  export type MechanicUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mechanic
     */
    select?: MechanicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mechanic
     */
    omit?: MechanicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MechanicInclude<ExtArgs> | null
    /**
     * The filter to search for the Mechanic to update in case it exists.
     */
    where: MechanicWhereUniqueInput
    /**
     * In case the Mechanic found by the `where` argument doesn't exist, create a new Mechanic with this data.
     */
    create: XOR<MechanicCreateInput, MechanicUncheckedCreateInput>
    /**
     * In case the Mechanic was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MechanicUpdateInput, MechanicUncheckedUpdateInput>
  }

  /**
   * Mechanic delete
   */
  export type MechanicDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mechanic
     */
    select?: MechanicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mechanic
     */
    omit?: MechanicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MechanicInclude<ExtArgs> | null
    /**
     * Filter which Mechanic to delete.
     */
    where: MechanicWhereUniqueInput
  }

  /**
   * Mechanic deleteMany
   */
  export type MechanicDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mechanics to delete
     */
    where?: MechanicWhereInput
    /**
     * Limit how many Mechanics to delete.
     */
    limit?: number
  }

  /**
   * Mechanic.HeadMechanic
   */
  export type Mechanic$HeadMechanicArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeadMechanic
     */
    select?: HeadMechanicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HeadMechanic
     */
    omit?: HeadMechanicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeadMechanicInclude<ExtArgs> | null
    where?: HeadMechanicWhereInput
  }

  /**
   * Mechanic.Diagnostic
   */
  export type Mechanic$DiagnosticArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnostic
     */
    select?: DiagnosticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnostic
     */
    omit?: DiagnosticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticInclude<ExtArgs> | null
    where?: DiagnosticWhereInput
  }

  /**
   * Mechanic.Repair
   */
  export type Mechanic$RepairArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repair
     */
    select?: RepairSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repair
     */
    omit?: RepairOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairInclude<ExtArgs> | null
    where?: RepairWhereInput
  }

  /**
   * Mechanic without action
   */
  export type MechanicDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mechanic
     */
    select?: MechanicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mechanic
     */
    omit?: MechanicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MechanicInclude<ExtArgs> | null
  }


  /**
   * Model HeadMechanic
   */

  export type AggregateHeadMechanic = {
    _count: HeadMechanicCountAggregateOutputType | null
    _avg: HeadMechanicAvgAggregateOutputType | null
    _sum: HeadMechanicSumAggregateOutputType | null
    _min: HeadMechanicMinAggregateOutputType | null
    _max: HeadMechanicMaxAggregateOutputType | null
  }

  export type HeadMechanicAvgAggregateOutputType = {
    mechanic_id: number | null
  }

  export type HeadMechanicSumAggregateOutputType = {
    mechanic_id: number | null
  }

  export type HeadMechanicMinAggregateOutputType = {
    mechanic_id: number | null
  }

  export type HeadMechanicMaxAggregateOutputType = {
    mechanic_id: number | null
  }

  export type HeadMechanicCountAggregateOutputType = {
    mechanic_id: number
    _all: number
  }


  export type HeadMechanicAvgAggregateInputType = {
    mechanic_id?: true
  }

  export type HeadMechanicSumAggregateInputType = {
    mechanic_id?: true
  }

  export type HeadMechanicMinAggregateInputType = {
    mechanic_id?: true
  }

  export type HeadMechanicMaxAggregateInputType = {
    mechanic_id?: true
  }

  export type HeadMechanicCountAggregateInputType = {
    mechanic_id?: true
    _all?: true
  }

  export type HeadMechanicAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HeadMechanic to aggregate.
     */
    where?: HeadMechanicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HeadMechanics to fetch.
     */
    orderBy?: HeadMechanicOrderByWithRelationInput | HeadMechanicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HeadMechanicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HeadMechanics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HeadMechanics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HeadMechanics
    **/
    _count?: true | HeadMechanicCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HeadMechanicAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HeadMechanicSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HeadMechanicMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HeadMechanicMaxAggregateInputType
  }

  export type GetHeadMechanicAggregateType<T extends HeadMechanicAggregateArgs> = {
        [P in keyof T & keyof AggregateHeadMechanic]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHeadMechanic[P]>
      : GetScalarType<T[P], AggregateHeadMechanic[P]>
  }




  export type HeadMechanicGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HeadMechanicWhereInput
    orderBy?: HeadMechanicOrderByWithAggregationInput | HeadMechanicOrderByWithAggregationInput[]
    by: HeadMechanicScalarFieldEnum[] | HeadMechanicScalarFieldEnum
    having?: HeadMechanicScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HeadMechanicCountAggregateInputType | true
    _avg?: HeadMechanicAvgAggregateInputType
    _sum?: HeadMechanicSumAggregateInputType
    _min?: HeadMechanicMinAggregateInputType
    _max?: HeadMechanicMaxAggregateInputType
  }

  export type HeadMechanicGroupByOutputType = {
    mechanic_id: number
    _count: HeadMechanicCountAggregateOutputType | null
    _avg: HeadMechanicAvgAggregateOutputType | null
    _sum: HeadMechanicSumAggregateOutputType | null
    _min: HeadMechanicMinAggregateOutputType | null
    _max: HeadMechanicMaxAggregateOutputType | null
  }

  type GetHeadMechanicGroupByPayload<T extends HeadMechanicGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HeadMechanicGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HeadMechanicGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HeadMechanicGroupByOutputType[P]>
            : GetScalarType<T[P], HeadMechanicGroupByOutputType[P]>
        }
      >
    >


  export type HeadMechanicSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    mechanic_id?: boolean
    mechanic?: boolean | MechanicDefaultArgs<ExtArgs>
    Diagnostic?: boolean | HeadMechanic$DiagnosticArgs<ExtArgs>
    Repair?: boolean | HeadMechanic$RepairArgs<ExtArgs>
    _count?: boolean | HeadMechanicCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["headMechanic"]>

  export type HeadMechanicSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    mechanic_id?: boolean
    mechanic?: boolean | MechanicDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["headMechanic"]>

  export type HeadMechanicSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    mechanic_id?: boolean
    mechanic?: boolean | MechanicDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["headMechanic"]>

  export type HeadMechanicSelectScalar = {
    mechanic_id?: boolean
  }

  export type HeadMechanicOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"mechanic_id", ExtArgs["result"]["headMechanic"]>
  export type HeadMechanicInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mechanic?: boolean | MechanicDefaultArgs<ExtArgs>
    Diagnostic?: boolean | HeadMechanic$DiagnosticArgs<ExtArgs>
    Repair?: boolean | HeadMechanic$RepairArgs<ExtArgs>
    _count?: boolean | HeadMechanicCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type HeadMechanicIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mechanic?: boolean | MechanicDefaultArgs<ExtArgs>
  }
  export type HeadMechanicIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mechanic?: boolean | MechanicDefaultArgs<ExtArgs>
  }

  export type $HeadMechanicPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HeadMechanic"
    objects: {
      mechanic: Prisma.$MechanicPayload<ExtArgs>
      Diagnostic: Prisma.$DiagnosticPayload<ExtArgs>[]
      Repair: Prisma.$RepairPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      mechanic_id: number
    }, ExtArgs["result"]["headMechanic"]>
    composites: {}
  }

  type HeadMechanicGetPayload<S extends boolean | null | undefined | HeadMechanicDefaultArgs> = $Result.GetResult<Prisma.$HeadMechanicPayload, S>

  type HeadMechanicCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HeadMechanicFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HeadMechanicCountAggregateInputType | true
    }

  export interface HeadMechanicDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HeadMechanic'], meta: { name: 'HeadMechanic' } }
    /**
     * Find zero or one HeadMechanic that matches the filter.
     * @param {HeadMechanicFindUniqueArgs} args - Arguments to find a HeadMechanic
     * @example
     * // Get one HeadMechanic
     * const headMechanic = await prisma.headMechanic.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HeadMechanicFindUniqueArgs>(args: SelectSubset<T, HeadMechanicFindUniqueArgs<ExtArgs>>): Prisma__HeadMechanicClient<$Result.GetResult<Prisma.$HeadMechanicPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HeadMechanic that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HeadMechanicFindUniqueOrThrowArgs} args - Arguments to find a HeadMechanic
     * @example
     * // Get one HeadMechanic
     * const headMechanic = await prisma.headMechanic.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HeadMechanicFindUniqueOrThrowArgs>(args: SelectSubset<T, HeadMechanicFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HeadMechanicClient<$Result.GetResult<Prisma.$HeadMechanicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HeadMechanic that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeadMechanicFindFirstArgs} args - Arguments to find a HeadMechanic
     * @example
     * // Get one HeadMechanic
     * const headMechanic = await prisma.headMechanic.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HeadMechanicFindFirstArgs>(args?: SelectSubset<T, HeadMechanicFindFirstArgs<ExtArgs>>): Prisma__HeadMechanicClient<$Result.GetResult<Prisma.$HeadMechanicPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HeadMechanic that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeadMechanicFindFirstOrThrowArgs} args - Arguments to find a HeadMechanic
     * @example
     * // Get one HeadMechanic
     * const headMechanic = await prisma.headMechanic.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HeadMechanicFindFirstOrThrowArgs>(args?: SelectSubset<T, HeadMechanicFindFirstOrThrowArgs<ExtArgs>>): Prisma__HeadMechanicClient<$Result.GetResult<Prisma.$HeadMechanicPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HeadMechanics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeadMechanicFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HeadMechanics
     * const headMechanics = await prisma.headMechanic.findMany()
     * 
     * // Get first 10 HeadMechanics
     * const headMechanics = await prisma.headMechanic.findMany({ take: 10 })
     * 
     * // Only select the `mechanic_id`
     * const headMechanicWithMechanic_idOnly = await prisma.headMechanic.findMany({ select: { mechanic_id: true } })
     * 
     */
    findMany<T extends HeadMechanicFindManyArgs>(args?: SelectSubset<T, HeadMechanicFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HeadMechanicPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HeadMechanic.
     * @param {HeadMechanicCreateArgs} args - Arguments to create a HeadMechanic.
     * @example
     * // Create one HeadMechanic
     * const HeadMechanic = await prisma.headMechanic.create({
     *   data: {
     *     // ... data to create a HeadMechanic
     *   }
     * })
     * 
     */
    create<T extends HeadMechanicCreateArgs>(args: SelectSubset<T, HeadMechanicCreateArgs<ExtArgs>>): Prisma__HeadMechanicClient<$Result.GetResult<Prisma.$HeadMechanicPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HeadMechanics.
     * @param {HeadMechanicCreateManyArgs} args - Arguments to create many HeadMechanics.
     * @example
     * // Create many HeadMechanics
     * const headMechanic = await prisma.headMechanic.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HeadMechanicCreateManyArgs>(args?: SelectSubset<T, HeadMechanicCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HeadMechanics and returns the data saved in the database.
     * @param {HeadMechanicCreateManyAndReturnArgs} args - Arguments to create many HeadMechanics.
     * @example
     * // Create many HeadMechanics
     * const headMechanic = await prisma.headMechanic.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HeadMechanics and only return the `mechanic_id`
     * const headMechanicWithMechanic_idOnly = await prisma.headMechanic.createManyAndReturn({
     *   select: { mechanic_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HeadMechanicCreateManyAndReturnArgs>(args?: SelectSubset<T, HeadMechanicCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HeadMechanicPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a HeadMechanic.
     * @param {HeadMechanicDeleteArgs} args - Arguments to delete one HeadMechanic.
     * @example
     * // Delete one HeadMechanic
     * const HeadMechanic = await prisma.headMechanic.delete({
     *   where: {
     *     // ... filter to delete one HeadMechanic
     *   }
     * })
     * 
     */
    delete<T extends HeadMechanicDeleteArgs>(args: SelectSubset<T, HeadMechanicDeleteArgs<ExtArgs>>): Prisma__HeadMechanicClient<$Result.GetResult<Prisma.$HeadMechanicPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HeadMechanic.
     * @param {HeadMechanicUpdateArgs} args - Arguments to update one HeadMechanic.
     * @example
     * // Update one HeadMechanic
     * const headMechanic = await prisma.headMechanic.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HeadMechanicUpdateArgs>(args: SelectSubset<T, HeadMechanicUpdateArgs<ExtArgs>>): Prisma__HeadMechanicClient<$Result.GetResult<Prisma.$HeadMechanicPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HeadMechanics.
     * @param {HeadMechanicDeleteManyArgs} args - Arguments to filter HeadMechanics to delete.
     * @example
     * // Delete a few HeadMechanics
     * const { count } = await prisma.headMechanic.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HeadMechanicDeleteManyArgs>(args?: SelectSubset<T, HeadMechanicDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HeadMechanics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeadMechanicUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HeadMechanics
     * const headMechanic = await prisma.headMechanic.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HeadMechanicUpdateManyArgs>(args: SelectSubset<T, HeadMechanicUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HeadMechanics and returns the data updated in the database.
     * @param {HeadMechanicUpdateManyAndReturnArgs} args - Arguments to update many HeadMechanics.
     * @example
     * // Update many HeadMechanics
     * const headMechanic = await prisma.headMechanic.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more HeadMechanics and only return the `mechanic_id`
     * const headMechanicWithMechanic_idOnly = await prisma.headMechanic.updateManyAndReturn({
     *   select: { mechanic_id: true },
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
    updateManyAndReturn<T extends HeadMechanicUpdateManyAndReturnArgs>(args: SelectSubset<T, HeadMechanicUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HeadMechanicPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one HeadMechanic.
     * @param {HeadMechanicUpsertArgs} args - Arguments to update or create a HeadMechanic.
     * @example
     * // Update or create a HeadMechanic
     * const headMechanic = await prisma.headMechanic.upsert({
     *   create: {
     *     // ... data to create a HeadMechanic
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HeadMechanic we want to update
     *   }
     * })
     */
    upsert<T extends HeadMechanicUpsertArgs>(args: SelectSubset<T, HeadMechanicUpsertArgs<ExtArgs>>): Prisma__HeadMechanicClient<$Result.GetResult<Prisma.$HeadMechanicPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HeadMechanics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeadMechanicCountArgs} args - Arguments to filter HeadMechanics to count.
     * @example
     * // Count the number of HeadMechanics
     * const count = await prisma.headMechanic.count({
     *   where: {
     *     // ... the filter for the HeadMechanics we want to count
     *   }
     * })
    **/
    count<T extends HeadMechanicCountArgs>(
      args?: Subset<T, HeadMechanicCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HeadMechanicCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HeadMechanic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeadMechanicAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HeadMechanicAggregateArgs>(args: Subset<T, HeadMechanicAggregateArgs>): Prisma.PrismaPromise<GetHeadMechanicAggregateType<T>>

    /**
     * Group by HeadMechanic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeadMechanicGroupByArgs} args - Group by arguments.
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
      T extends HeadMechanicGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HeadMechanicGroupByArgs['orderBy'] }
        : { orderBy?: HeadMechanicGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HeadMechanicGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHeadMechanicGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HeadMechanic model
   */
  readonly fields: HeadMechanicFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HeadMechanic.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HeadMechanicClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mechanic<T extends MechanicDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MechanicDefaultArgs<ExtArgs>>): Prisma__MechanicClient<$Result.GetResult<Prisma.$MechanicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Diagnostic<T extends HeadMechanic$DiagnosticArgs<ExtArgs> = {}>(args?: Subset<T, HeadMechanic$DiagnosticArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiagnosticPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Repair<T extends HeadMechanic$RepairArgs<ExtArgs> = {}>(args?: Subset<T, HeadMechanic$RepairArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepairPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the HeadMechanic model
   */ 
  interface HeadMechanicFieldRefs {
    readonly mechanic_id: FieldRef<"HeadMechanic", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * HeadMechanic findUnique
   */
  export type HeadMechanicFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeadMechanic
     */
    select?: HeadMechanicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HeadMechanic
     */
    omit?: HeadMechanicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeadMechanicInclude<ExtArgs> | null
    /**
     * Filter, which HeadMechanic to fetch.
     */
    where: HeadMechanicWhereUniqueInput
  }

  /**
   * HeadMechanic findUniqueOrThrow
   */
  export type HeadMechanicFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeadMechanic
     */
    select?: HeadMechanicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HeadMechanic
     */
    omit?: HeadMechanicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeadMechanicInclude<ExtArgs> | null
    /**
     * Filter, which HeadMechanic to fetch.
     */
    where: HeadMechanicWhereUniqueInput
  }

  /**
   * HeadMechanic findFirst
   */
  export type HeadMechanicFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeadMechanic
     */
    select?: HeadMechanicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HeadMechanic
     */
    omit?: HeadMechanicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeadMechanicInclude<ExtArgs> | null
    /**
     * Filter, which HeadMechanic to fetch.
     */
    where?: HeadMechanicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HeadMechanics to fetch.
     */
    orderBy?: HeadMechanicOrderByWithRelationInput | HeadMechanicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HeadMechanics.
     */
    cursor?: HeadMechanicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HeadMechanics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HeadMechanics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HeadMechanics.
     */
    distinct?: HeadMechanicScalarFieldEnum | HeadMechanicScalarFieldEnum[]
  }

  /**
   * HeadMechanic findFirstOrThrow
   */
  export type HeadMechanicFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeadMechanic
     */
    select?: HeadMechanicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HeadMechanic
     */
    omit?: HeadMechanicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeadMechanicInclude<ExtArgs> | null
    /**
     * Filter, which HeadMechanic to fetch.
     */
    where?: HeadMechanicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HeadMechanics to fetch.
     */
    orderBy?: HeadMechanicOrderByWithRelationInput | HeadMechanicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HeadMechanics.
     */
    cursor?: HeadMechanicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HeadMechanics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HeadMechanics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HeadMechanics.
     */
    distinct?: HeadMechanicScalarFieldEnum | HeadMechanicScalarFieldEnum[]
  }

  /**
   * HeadMechanic findMany
   */
  export type HeadMechanicFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeadMechanic
     */
    select?: HeadMechanicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HeadMechanic
     */
    omit?: HeadMechanicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeadMechanicInclude<ExtArgs> | null
    /**
     * Filter, which HeadMechanics to fetch.
     */
    where?: HeadMechanicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HeadMechanics to fetch.
     */
    orderBy?: HeadMechanicOrderByWithRelationInput | HeadMechanicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HeadMechanics.
     */
    cursor?: HeadMechanicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HeadMechanics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HeadMechanics.
     */
    skip?: number
    distinct?: HeadMechanicScalarFieldEnum | HeadMechanicScalarFieldEnum[]
  }

  /**
   * HeadMechanic create
   */
  export type HeadMechanicCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeadMechanic
     */
    select?: HeadMechanicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HeadMechanic
     */
    omit?: HeadMechanicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeadMechanicInclude<ExtArgs> | null
    /**
     * The data needed to create a HeadMechanic.
     */
    data: XOR<HeadMechanicCreateInput, HeadMechanicUncheckedCreateInput>
  }

  /**
   * HeadMechanic createMany
   */
  export type HeadMechanicCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HeadMechanics.
     */
    data: HeadMechanicCreateManyInput | HeadMechanicCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HeadMechanic createManyAndReturn
   */
  export type HeadMechanicCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeadMechanic
     */
    select?: HeadMechanicSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HeadMechanic
     */
    omit?: HeadMechanicOmit<ExtArgs> | null
    /**
     * The data used to create many HeadMechanics.
     */
    data: HeadMechanicCreateManyInput | HeadMechanicCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeadMechanicIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * HeadMechanic update
   */
  export type HeadMechanicUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeadMechanic
     */
    select?: HeadMechanicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HeadMechanic
     */
    omit?: HeadMechanicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeadMechanicInclude<ExtArgs> | null
    /**
     * The data needed to update a HeadMechanic.
     */
    data: XOR<HeadMechanicUpdateInput, HeadMechanicUncheckedUpdateInput>
    /**
     * Choose, which HeadMechanic to update.
     */
    where: HeadMechanicWhereUniqueInput
  }

  /**
   * HeadMechanic updateMany
   */
  export type HeadMechanicUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HeadMechanics.
     */
    data: XOR<HeadMechanicUpdateManyMutationInput, HeadMechanicUncheckedUpdateManyInput>
    /**
     * Filter which HeadMechanics to update
     */
    where?: HeadMechanicWhereInput
    /**
     * Limit how many HeadMechanics to update.
     */
    limit?: number
  }

  /**
   * HeadMechanic updateManyAndReturn
   */
  export type HeadMechanicUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeadMechanic
     */
    select?: HeadMechanicSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HeadMechanic
     */
    omit?: HeadMechanicOmit<ExtArgs> | null
    /**
     * The data used to update HeadMechanics.
     */
    data: XOR<HeadMechanicUpdateManyMutationInput, HeadMechanicUncheckedUpdateManyInput>
    /**
     * Filter which HeadMechanics to update
     */
    where?: HeadMechanicWhereInput
    /**
     * Limit how many HeadMechanics to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeadMechanicIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * HeadMechanic upsert
   */
  export type HeadMechanicUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeadMechanic
     */
    select?: HeadMechanicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HeadMechanic
     */
    omit?: HeadMechanicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeadMechanicInclude<ExtArgs> | null
    /**
     * The filter to search for the HeadMechanic to update in case it exists.
     */
    where: HeadMechanicWhereUniqueInput
    /**
     * In case the HeadMechanic found by the `where` argument doesn't exist, create a new HeadMechanic with this data.
     */
    create: XOR<HeadMechanicCreateInput, HeadMechanicUncheckedCreateInput>
    /**
     * In case the HeadMechanic was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HeadMechanicUpdateInput, HeadMechanicUncheckedUpdateInput>
  }

  /**
   * HeadMechanic delete
   */
  export type HeadMechanicDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeadMechanic
     */
    select?: HeadMechanicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HeadMechanic
     */
    omit?: HeadMechanicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeadMechanicInclude<ExtArgs> | null
    /**
     * Filter which HeadMechanic to delete.
     */
    where: HeadMechanicWhereUniqueInput
  }

  /**
   * HeadMechanic deleteMany
   */
  export type HeadMechanicDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HeadMechanics to delete
     */
    where?: HeadMechanicWhereInput
    /**
     * Limit how many HeadMechanics to delete.
     */
    limit?: number
  }

  /**
   * HeadMechanic.Diagnostic
   */
  export type HeadMechanic$DiagnosticArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnostic
     */
    select?: DiagnosticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnostic
     */
    omit?: DiagnosticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticInclude<ExtArgs> | null
    where?: DiagnosticWhereInput
    orderBy?: DiagnosticOrderByWithRelationInput | DiagnosticOrderByWithRelationInput[]
    cursor?: DiagnosticWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DiagnosticScalarFieldEnum | DiagnosticScalarFieldEnum[]
  }

  /**
   * HeadMechanic.Repair
   */
  export type HeadMechanic$RepairArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repair
     */
    select?: RepairSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repair
     */
    omit?: RepairOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairInclude<ExtArgs> | null
    where?: RepairWhereInput
    orderBy?: RepairOrderByWithRelationInput | RepairOrderByWithRelationInput[]
    cursor?: RepairWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RepairScalarFieldEnum | RepairScalarFieldEnum[]
  }

  /**
   * HeadMechanic without action
   */
  export type HeadMechanicDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeadMechanic
     */
    select?: HeadMechanicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HeadMechanic
     */
    omit?: HeadMechanicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeadMechanicInclude<ExtArgs> | null
  }


  /**
   * Model Reservation
   */

  export type AggregateReservation = {
    _count: ReservationCountAggregateOutputType | null
    _avg: ReservationAvgAggregateOutputType | null
    _sum: ReservationSumAggregateOutputType | null
    _min: ReservationMinAggregateOutputType | null
    _max: ReservationMaxAggregateOutputType | null
  }

  export type ReservationAvgAggregateOutputType = {
    reservation_id: number | null
    base_fee: number | null
  }

  export type ReservationSumAggregateOutputType = {
    reservation_id: number | null
    base_fee: number | null
  }

  export type ReservationMinAggregateOutputType = {
    reservation_id: number | null
    mobile_phone: string | null
    date: Date | null
    base_fee: number | null
    repair_status: $Enums.RepairStatus | null
    vehicule_id: string | null
  }

  export type ReservationMaxAggregateOutputType = {
    reservation_id: number | null
    mobile_phone: string | null
    date: Date | null
    base_fee: number | null
    repair_status: $Enums.RepairStatus | null
    vehicule_id: string | null
  }

  export type ReservationCountAggregateOutputType = {
    reservation_id: number
    mobile_phone: number
    date: number
    base_fee: number
    repair_status: number
    vehicule_id: number
    _all: number
  }


  export type ReservationAvgAggregateInputType = {
    reservation_id?: true
    base_fee?: true
  }

  export type ReservationSumAggregateInputType = {
    reservation_id?: true
    base_fee?: true
  }

  export type ReservationMinAggregateInputType = {
    reservation_id?: true
    mobile_phone?: true
    date?: true
    base_fee?: true
    repair_status?: true
    vehicule_id?: true
  }

  export type ReservationMaxAggregateInputType = {
    reservation_id?: true
    mobile_phone?: true
    date?: true
    base_fee?: true
    repair_status?: true
    vehicule_id?: true
  }

  export type ReservationCountAggregateInputType = {
    reservation_id?: true
    mobile_phone?: true
    date?: true
    base_fee?: true
    repair_status?: true
    vehicule_id?: true
    _all?: true
  }

  export type ReservationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reservation to aggregate.
     */
    where?: ReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     */
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reservations
    **/
    _count?: true | ReservationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReservationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReservationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReservationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReservationMaxAggregateInputType
  }

  export type GetReservationAggregateType<T extends ReservationAggregateArgs> = {
        [P in keyof T & keyof AggregateReservation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReservation[P]>
      : GetScalarType<T[P], AggregateReservation[P]>
  }




  export type ReservationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservationWhereInput
    orderBy?: ReservationOrderByWithAggregationInput | ReservationOrderByWithAggregationInput[]
    by: ReservationScalarFieldEnum[] | ReservationScalarFieldEnum
    having?: ReservationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReservationCountAggregateInputType | true
    _avg?: ReservationAvgAggregateInputType
    _sum?: ReservationSumAggregateInputType
    _min?: ReservationMinAggregateInputType
    _max?: ReservationMaxAggregateInputType
  }

  export type ReservationGroupByOutputType = {
    reservation_id: number
    mobile_phone: string
    date: Date
    base_fee: number | null
    repair_status: $Enums.RepairStatus | null
    vehicule_id: string
    _count: ReservationCountAggregateOutputType | null
    _avg: ReservationAvgAggregateOutputType | null
    _sum: ReservationSumAggregateOutputType | null
    _min: ReservationMinAggregateOutputType | null
    _max: ReservationMaxAggregateOutputType | null
  }

  type GetReservationGroupByPayload<T extends ReservationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReservationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReservationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReservationGroupByOutputType[P]>
            : GetScalarType<T[P], ReservationGroupByOutputType[P]>
        }
      >
    >


  export type ReservationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    reservation_id?: boolean
    mobile_phone?: boolean
    date?: boolean
    base_fee?: boolean
    repair_status?: boolean
    vehicule_id?: boolean
    vehicule?: boolean | VehiculeDefaultArgs<ExtArgs>
    Diagnostic?: boolean | Reservation$DiagnosticArgs<ExtArgs>
    Repair?: boolean | Reservation$RepairArgs<ExtArgs>
    _count?: boolean | ReservationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reservation"]>

  export type ReservationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    reservation_id?: boolean
    mobile_phone?: boolean
    date?: boolean
    base_fee?: boolean
    repair_status?: boolean
    vehicule_id?: boolean
    vehicule?: boolean | VehiculeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reservation"]>

  export type ReservationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    reservation_id?: boolean
    mobile_phone?: boolean
    date?: boolean
    base_fee?: boolean
    repair_status?: boolean
    vehicule_id?: boolean
    vehicule?: boolean | VehiculeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reservation"]>

  export type ReservationSelectScalar = {
    reservation_id?: boolean
    mobile_phone?: boolean
    date?: boolean
    base_fee?: boolean
    repair_status?: boolean
    vehicule_id?: boolean
  }

  export type ReservationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"reservation_id" | "mobile_phone" | "date" | "base_fee" | "repair_status" | "vehicule_id", ExtArgs["result"]["reservation"]>
  export type ReservationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicule?: boolean | VehiculeDefaultArgs<ExtArgs>
    Diagnostic?: boolean | Reservation$DiagnosticArgs<ExtArgs>
    Repair?: boolean | Reservation$RepairArgs<ExtArgs>
    _count?: boolean | ReservationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ReservationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicule?: boolean | VehiculeDefaultArgs<ExtArgs>
  }
  export type ReservationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicule?: boolean | VehiculeDefaultArgs<ExtArgs>
  }

  export type $ReservationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reservation"
    objects: {
      vehicule: Prisma.$VehiculePayload<ExtArgs>
      Diagnostic: Prisma.$DiagnosticPayload<ExtArgs>[]
      Repair: Prisma.$RepairPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      reservation_id: number
      mobile_phone: string
      date: Date
      base_fee: number | null
      repair_status: $Enums.RepairStatus | null
      vehicule_id: string
    }, ExtArgs["result"]["reservation"]>
    composites: {}
  }

  type ReservationGetPayload<S extends boolean | null | undefined | ReservationDefaultArgs> = $Result.GetResult<Prisma.$ReservationPayload, S>

  type ReservationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReservationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReservationCountAggregateInputType | true
    }

  export interface ReservationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reservation'], meta: { name: 'Reservation' } }
    /**
     * Find zero or one Reservation that matches the filter.
     * @param {ReservationFindUniqueArgs} args - Arguments to find a Reservation
     * @example
     * // Get one Reservation
     * const reservation = await prisma.reservation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReservationFindUniqueArgs>(args: SelectSubset<T, ReservationFindUniqueArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reservation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReservationFindUniqueOrThrowArgs} args - Arguments to find a Reservation
     * @example
     * // Get one Reservation
     * const reservation = await prisma.reservation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReservationFindUniqueOrThrowArgs>(args: SelectSubset<T, ReservationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reservation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationFindFirstArgs} args - Arguments to find a Reservation
     * @example
     * // Get one Reservation
     * const reservation = await prisma.reservation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReservationFindFirstArgs>(args?: SelectSubset<T, ReservationFindFirstArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reservation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationFindFirstOrThrowArgs} args - Arguments to find a Reservation
     * @example
     * // Get one Reservation
     * const reservation = await prisma.reservation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReservationFindFirstOrThrowArgs>(args?: SelectSubset<T, ReservationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reservations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reservations
     * const reservations = await prisma.reservation.findMany()
     * 
     * // Get first 10 Reservations
     * const reservations = await prisma.reservation.findMany({ take: 10 })
     * 
     * // Only select the `reservation_id`
     * const reservationWithReservation_idOnly = await prisma.reservation.findMany({ select: { reservation_id: true } })
     * 
     */
    findMany<T extends ReservationFindManyArgs>(args?: SelectSubset<T, ReservationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reservation.
     * @param {ReservationCreateArgs} args - Arguments to create a Reservation.
     * @example
     * // Create one Reservation
     * const Reservation = await prisma.reservation.create({
     *   data: {
     *     // ... data to create a Reservation
     *   }
     * })
     * 
     */
    create<T extends ReservationCreateArgs>(args: SelectSubset<T, ReservationCreateArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reservations.
     * @param {ReservationCreateManyArgs} args - Arguments to create many Reservations.
     * @example
     * // Create many Reservations
     * const reservation = await prisma.reservation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReservationCreateManyArgs>(args?: SelectSubset<T, ReservationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reservations and returns the data saved in the database.
     * @param {ReservationCreateManyAndReturnArgs} args - Arguments to create many Reservations.
     * @example
     * // Create many Reservations
     * const reservation = await prisma.reservation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reservations and only return the `reservation_id`
     * const reservationWithReservation_idOnly = await prisma.reservation.createManyAndReturn({
     *   select: { reservation_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReservationCreateManyAndReturnArgs>(args?: SelectSubset<T, ReservationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Reservation.
     * @param {ReservationDeleteArgs} args - Arguments to delete one Reservation.
     * @example
     * // Delete one Reservation
     * const Reservation = await prisma.reservation.delete({
     *   where: {
     *     // ... filter to delete one Reservation
     *   }
     * })
     * 
     */
    delete<T extends ReservationDeleteArgs>(args: SelectSubset<T, ReservationDeleteArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reservation.
     * @param {ReservationUpdateArgs} args - Arguments to update one Reservation.
     * @example
     * // Update one Reservation
     * const reservation = await prisma.reservation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReservationUpdateArgs>(args: SelectSubset<T, ReservationUpdateArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reservations.
     * @param {ReservationDeleteManyArgs} args - Arguments to filter Reservations to delete.
     * @example
     * // Delete a few Reservations
     * const { count } = await prisma.reservation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReservationDeleteManyArgs>(args?: SelectSubset<T, ReservationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reservations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reservations
     * const reservation = await prisma.reservation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReservationUpdateManyArgs>(args: SelectSubset<T, ReservationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reservations and returns the data updated in the database.
     * @param {ReservationUpdateManyAndReturnArgs} args - Arguments to update many Reservations.
     * @example
     * // Update many Reservations
     * const reservation = await prisma.reservation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reservations and only return the `reservation_id`
     * const reservationWithReservation_idOnly = await prisma.reservation.updateManyAndReturn({
     *   select: { reservation_id: true },
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
    updateManyAndReturn<T extends ReservationUpdateManyAndReturnArgs>(args: SelectSubset<T, ReservationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Reservation.
     * @param {ReservationUpsertArgs} args - Arguments to update or create a Reservation.
     * @example
     * // Update or create a Reservation
     * const reservation = await prisma.reservation.upsert({
     *   create: {
     *     // ... data to create a Reservation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reservation we want to update
     *   }
     * })
     */
    upsert<T extends ReservationUpsertArgs>(args: SelectSubset<T, ReservationUpsertArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reservations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationCountArgs} args - Arguments to filter Reservations to count.
     * @example
     * // Count the number of Reservations
     * const count = await prisma.reservation.count({
     *   where: {
     *     // ... the filter for the Reservations we want to count
     *   }
     * })
    **/
    count<T extends ReservationCountArgs>(
      args?: Subset<T, ReservationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReservationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reservation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReservationAggregateArgs>(args: Subset<T, ReservationAggregateArgs>): Prisma.PrismaPromise<GetReservationAggregateType<T>>

    /**
     * Group by Reservation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationGroupByArgs} args - Group by arguments.
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
      T extends ReservationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReservationGroupByArgs['orderBy'] }
        : { orderBy?: ReservationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReservationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReservationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reservation model
   */
  readonly fields: ReservationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reservation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReservationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vehicule<T extends VehiculeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VehiculeDefaultArgs<ExtArgs>>): Prisma__VehiculeClient<$Result.GetResult<Prisma.$VehiculePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Diagnostic<T extends Reservation$DiagnosticArgs<ExtArgs> = {}>(args?: Subset<T, Reservation$DiagnosticArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiagnosticPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Repair<T extends Reservation$RepairArgs<ExtArgs> = {}>(args?: Subset<T, Reservation$RepairArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepairPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Reservation model
   */ 
  interface ReservationFieldRefs {
    readonly reservation_id: FieldRef<"Reservation", 'Int'>
    readonly mobile_phone: FieldRef<"Reservation", 'String'>
    readonly date: FieldRef<"Reservation", 'DateTime'>
    readonly base_fee: FieldRef<"Reservation", 'Float'>
    readonly repair_status: FieldRef<"Reservation", 'RepairStatus'>
    readonly vehicule_id: FieldRef<"Reservation", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Reservation findUnique
   */
  export type ReservationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter, which Reservation to fetch.
     */
    where: ReservationWhereUniqueInput
  }

  /**
   * Reservation findUniqueOrThrow
   */
  export type ReservationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter, which Reservation to fetch.
     */
    where: ReservationWhereUniqueInput
  }

  /**
   * Reservation findFirst
   */
  export type ReservationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter, which Reservation to fetch.
     */
    where?: ReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     */
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reservations.
     */
    cursor?: ReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reservations.
     */
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * Reservation findFirstOrThrow
   */
  export type ReservationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter, which Reservation to fetch.
     */
    where?: ReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     */
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reservations.
     */
    cursor?: ReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reservations.
     */
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * Reservation findMany
   */
  export type ReservationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter, which Reservations to fetch.
     */
    where?: ReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     */
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reservations.
     */
    cursor?: ReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservations.
     */
    skip?: number
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * Reservation create
   */
  export type ReservationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * The data needed to create a Reservation.
     */
    data: XOR<ReservationCreateInput, ReservationUncheckedCreateInput>
  }

  /**
   * Reservation createMany
   */
  export type ReservationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reservations.
     */
    data: ReservationCreateManyInput | ReservationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reservation createManyAndReturn
   */
  export type ReservationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * The data used to create many Reservations.
     */
    data: ReservationCreateManyInput | ReservationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reservation update
   */
  export type ReservationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * The data needed to update a Reservation.
     */
    data: XOR<ReservationUpdateInput, ReservationUncheckedUpdateInput>
    /**
     * Choose, which Reservation to update.
     */
    where: ReservationWhereUniqueInput
  }

  /**
   * Reservation updateMany
   */
  export type ReservationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reservations.
     */
    data: XOR<ReservationUpdateManyMutationInput, ReservationUncheckedUpdateManyInput>
    /**
     * Filter which Reservations to update
     */
    where?: ReservationWhereInput
    /**
     * Limit how many Reservations to update.
     */
    limit?: number
  }

  /**
   * Reservation updateManyAndReturn
   */
  export type ReservationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * The data used to update Reservations.
     */
    data: XOR<ReservationUpdateManyMutationInput, ReservationUncheckedUpdateManyInput>
    /**
     * Filter which Reservations to update
     */
    where?: ReservationWhereInput
    /**
     * Limit how many Reservations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reservation upsert
   */
  export type ReservationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * The filter to search for the Reservation to update in case it exists.
     */
    where: ReservationWhereUniqueInput
    /**
     * In case the Reservation found by the `where` argument doesn't exist, create a new Reservation with this data.
     */
    create: XOR<ReservationCreateInput, ReservationUncheckedCreateInput>
    /**
     * In case the Reservation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReservationUpdateInput, ReservationUncheckedUpdateInput>
  }

  /**
   * Reservation delete
   */
  export type ReservationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter which Reservation to delete.
     */
    where: ReservationWhereUniqueInput
  }

  /**
   * Reservation deleteMany
   */
  export type ReservationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reservations to delete
     */
    where?: ReservationWhereInput
    /**
     * Limit how many Reservations to delete.
     */
    limit?: number
  }

  /**
   * Reservation.Diagnostic
   */
  export type Reservation$DiagnosticArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnostic
     */
    select?: DiagnosticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnostic
     */
    omit?: DiagnosticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticInclude<ExtArgs> | null
    where?: DiagnosticWhereInput
    orderBy?: DiagnosticOrderByWithRelationInput | DiagnosticOrderByWithRelationInput[]
    cursor?: DiagnosticWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DiagnosticScalarFieldEnum | DiagnosticScalarFieldEnum[]
  }

  /**
   * Reservation.Repair
   */
  export type Reservation$RepairArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repair
     */
    select?: RepairSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repair
     */
    omit?: RepairOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairInclude<ExtArgs> | null
    where?: RepairWhereInput
    orderBy?: RepairOrderByWithRelationInput | RepairOrderByWithRelationInput[]
    cursor?: RepairWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RepairScalarFieldEnum | RepairScalarFieldEnum[]
  }

  /**
   * Reservation without action
   */
  export type ReservationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
  }


  /**
   * Model Diagnostic
   */

  export type AggregateDiagnostic = {
    _count: DiagnosticCountAggregateOutputType | null
    _avg: DiagnosticAvgAggregateOutputType | null
    _sum: DiagnosticSumAggregateOutputType | null
    _min: DiagnosticMinAggregateOutputType | null
    _max: DiagnosticMaxAggregateOutputType | null
  }

  export type DiagnosticAvgAggregateOutputType = {
    diagnostic_id: number | null
    responsible_id: number | null
    reservation_id: number | null
  }

  export type DiagnosticSumAggregateOutputType = {
    diagnostic_id: number | null
    responsible_id: number | null
    reservation_id: number | null
  }

  export type DiagnosticMinAggregateOutputType = {
    diagnostic_id: number | null
    responsible_id: number | null
    reservation_id: number | null
  }

  export type DiagnosticMaxAggregateOutputType = {
    diagnostic_id: number | null
    responsible_id: number | null
    reservation_id: number | null
  }

  export type DiagnosticCountAggregateOutputType = {
    diagnostic_id: number
    responsible_id: number
    reservation_id: number
    _all: number
  }


  export type DiagnosticAvgAggregateInputType = {
    diagnostic_id?: true
    responsible_id?: true
    reservation_id?: true
  }

  export type DiagnosticSumAggregateInputType = {
    diagnostic_id?: true
    responsible_id?: true
    reservation_id?: true
  }

  export type DiagnosticMinAggregateInputType = {
    diagnostic_id?: true
    responsible_id?: true
    reservation_id?: true
  }

  export type DiagnosticMaxAggregateInputType = {
    diagnostic_id?: true
    responsible_id?: true
    reservation_id?: true
  }

  export type DiagnosticCountAggregateInputType = {
    diagnostic_id?: true
    responsible_id?: true
    reservation_id?: true
    _all?: true
  }

  export type DiagnosticAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Diagnostic to aggregate.
     */
    where?: DiagnosticWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Diagnostics to fetch.
     */
    orderBy?: DiagnosticOrderByWithRelationInput | DiagnosticOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DiagnosticWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Diagnostics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Diagnostics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Diagnostics
    **/
    _count?: true | DiagnosticCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DiagnosticAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DiagnosticSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DiagnosticMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DiagnosticMaxAggregateInputType
  }

  export type GetDiagnosticAggregateType<T extends DiagnosticAggregateArgs> = {
        [P in keyof T & keyof AggregateDiagnostic]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDiagnostic[P]>
      : GetScalarType<T[P], AggregateDiagnostic[P]>
  }




  export type DiagnosticGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiagnosticWhereInput
    orderBy?: DiagnosticOrderByWithAggregationInput | DiagnosticOrderByWithAggregationInput[]
    by: DiagnosticScalarFieldEnum[] | DiagnosticScalarFieldEnum
    having?: DiagnosticScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DiagnosticCountAggregateInputType | true
    _avg?: DiagnosticAvgAggregateInputType
    _sum?: DiagnosticSumAggregateInputType
    _min?: DiagnosticMinAggregateInputType
    _max?: DiagnosticMaxAggregateInputType
  }

  export type DiagnosticGroupByOutputType = {
    diagnostic_id: number
    responsible_id: number
    reservation_id: number
    _count: DiagnosticCountAggregateOutputType | null
    _avg: DiagnosticAvgAggregateOutputType | null
    _sum: DiagnosticSumAggregateOutputType | null
    _min: DiagnosticMinAggregateOutputType | null
    _max: DiagnosticMaxAggregateOutputType | null
  }

  type GetDiagnosticGroupByPayload<T extends DiagnosticGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DiagnosticGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DiagnosticGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DiagnosticGroupByOutputType[P]>
            : GetScalarType<T[P], DiagnosticGroupByOutputType[P]>
        }
      >
    >


  export type DiagnosticSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    diagnostic_id?: boolean
    responsible_id?: boolean
    reservation_id?: boolean
    responsible?: boolean | HeadMechanicDefaultArgs<ExtArgs>
    workers_employed?: boolean | Diagnostic$workers_employedArgs<ExtArgs>
    reservation?: boolean | ReservationDefaultArgs<ExtArgs>
    _count?: boolean | DiagnosticCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["diagnostic"]>

  export type DiagnosticSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    diagnostic_id?: boolean
    responsible_id?: boolean
    reservation_id?: boolean
    responsible?: boolean | HeadMechanicDefaultArgs<ExtArgs>
    reservation?: boolean | ReservationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["diagnostic"]>

  export type DiagnosticSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    diagnostic_id?: boolean
    responsible_id?: boolean
    reservation_id?: boolean
    responsible?: boolean | HeadMechanicDefaultArgs<ExtArgs>
    reservation?: boolean | ReservationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["diagnostic"]>

  export type DiagnosticSelectScalar = {
    diagnostic_id?: boolean
    responsible_id?: boolean
    reservation_id?: boolean
  }

  export type DiagnosticOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"diagnostic_id" | "responsible_id" | "reservation_id", ExtArgs["result"]["diagnostic"]>
  export type DiagnosticInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    responsible?: boolean | HeadMechanicDefaultArgs<ExtArgs>
    workers_employed?: boolean | Diagnostic$workers_employedArgs<ExtArgs>
    reservation?: boolean | ReservationDefaultArgs<ExtArgs>
    _count?: boolean | DiagnosticCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DiagnosticIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    responsible?: boolean | HeadMechanicDefaultArgs<ExtArgs>
    reservation?: boolean | ReservationDefaultArgs<ExtArgs>
  }
  export type DiagnosticIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    responsible?: boolean | HeadMechanicDefaultArgs<ExtArgs>
    reservation?: boolean | ReservationDefaultArgs<ExtArgs>
  }

  export type $DiagnosticPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Diagnostic"
    objects: {
      responsible: Prisma.$HeadMechanicPayload<ExtArgs>
      workers_employed: Prisma.$MechanicPayload<ExtArgs>[]
      reservation: Prisma.$ReservationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      diagnostic_id: number
      responsible_id: number
      reservation_id: number
    }, ExtArgs["result"]["diagnostic"]>
    composites: {}
  }

  type DiagnosticGetPayload<S extends boolean | null | undefined | DiagnosticDefaultArgs> = $Result.GetResult<Prisma.$DiagnosticPayload, S>

  type DiagnosticCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DiagnosticFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DiagnosticCountAggregateInputType | true
    }

  export interface DiagnosticDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Diagnostic'], meta: { name: 'Diagnostic' } }
    /**
     * Find zero or one Diagnostic that matches the filter.
     * @param {DiagnosticFindUniqueArgs} args - Arguments to find a Diagnostic
     * @example
     * // Get one Diagnostic
     * const diagnostic = await prisma.diagnostic.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DiagnosticFindUniqueArgs>(args: SelectSubset<T, DiagnosticFindUniqueArgs<ExtArgs>>): Prisma__DiagnosticClient<$Result.GetResult<Prisma.$DiagnosticPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Diagnostic that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DiagnosticFindUniqueOrThrowArgs} args - Arguments to find a Diagnostic
     * @example
     * // Get one Diagnostic
     * const diagnostic = await prisma.diagnostic.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DiagnosticFindUniqueOrThrowArgs>(args: SelectSubset<T, DiagnosticFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DiagnosticClient<$Result.GetResult<Prisma.$DiagnosticPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Diagnostic that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosticFindFirstArgs} args - Arguments to find a Diagnostic
     * @example
     * // Get one Diagnostic
     * const diagnostic = await prisma.diagnostic.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DiagnosticFindFirstArgs>(args?: SelectSubset<T, DiagnosticFindFirstArgs<ExtArgs>>): Prisma__DiagnosticClient<$Result.GetResult<Prisma.$DiagnosticPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Diagnostic that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosticFindFirstOrThrowArgs} args - Arguments to find a Diagnostic
     * @example
     * // Get one Diagnostic
     * const diagnostic = await prisma.diagnostic.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DiagnosticFindFirstOrThrowArgs>(args?: SelectSubset<T, DiagnosticFindFirstOrThrowArgs<ExtArgs>>): Prisma__DiagnosticClient<$Result.GetResult<Prisma.$DiagnosticPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Diagnostics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosticFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Diagnostics
     * const diagnostics = await prisma.diagnostic.findMany()
     * 
     * // Get first 10 Diagnostics
     * const diagnostics = await prisma.diagnostic.findMany({ take: 10 })
     * 
     * // Only select the `diagnostic_id`
     * const diagnosticWithDiagnostic_idOnly = await prisma.diagnostic.findMany({ select: { diagnostic_id: true } })
     * 
     */
    findMany<T extends DiagnosticFindManyArgs>(args?: SelectSubset<T, DiagnosticFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiagnosticPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Diagnostic.
     * @param {DiagnosticCreateArgs} args - Arguments to create a Diagnostic.
     * @example
     * // Create one Diagnostic
     * const Diagnostic = await prisma.diagnostic.create({
     *   data: {
     *     // ... data to create a Diagnostic
     *   }
     * })
     * 
     */
    create<T extends DiagnosticCreateArgs>(args: SelectSubset<T, DiagnosticCreateArgs<ExtArgs>>): Prisma__DiagnosticClient<$Result.GetResult<Prisma.$DiagnosticPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Diagnostics.
     * @param {DiagnosticCreateManyArgs} args - Arguments to create many Diagnostics.
     * @example
     * // Create many Diagnostics
     * const diagnostic = await prisma.diagnostic.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DiagnosticCreateManyArgs>(args?: SelectSubset<T, DiagnosticCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Diagnostics and returns the data saved in the database.
     * @param {DiagnosticCreateManyAndReturnArgs} args - Arguments to create many Diagnostics.
     * @example
     * // Create many Diagnostics
     * const diagnostic = await prisma.diagnostic.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Diagnostics and only return the `diagnostic_id`
     * const diagnosticWithDiagnostic_idOnly = await prisma.diagnostic.createManyAndReturn({
     *   select: { diagnostic_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DiagnosticCreateManyAndReturnArgs>(args?: SelectSubset<T, DiagnosticCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiagnosticPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Diagnostic.
     * @param {DiagnosticDeleteArgs} args - Arguments to delete one Diagnostic.
     * @example
     * // Delete one Diagnostic
     * const Diagnostic = await prisma.diagnostic.delete({
     *   where: {
     *     // ... filter to delete one Diagnostic
     *   }
     * })
     * 
     */
    delete<T extends DiagnosticDeleteArgs>(args: SelectSubset<T, DiagnosticDeleteArgs<ExtArgs>>): Prisma__DiagnosticClient<$Result.GetResult<Prisma.$DiagnosticPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Diagnostic.
     * @param {DiagnosticUpdateArgs} args - Arguments to update one Diagnostic.
     * @example
     * // Update one Diagnostic
     * const diagnostic = await prisma.diagnostic.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DiagnosticUpdateArgs>(args: SelectSubset<T, DiagnosticUpdateArgs<ExtArgs>>): Prisma__DiagnosticClient<$Result.GetResult<Prisma.$DiagnosticPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Diagnostics.
     * @param {DiagnosticDeleteManyArgs} args - Arguments to filter Diagnostics to delete.
     * @example
     * // Delete a few Diagnostics
     * const { count } = await prisma.diagnostic.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DiagnosticDeleteManyArgs>(args?: SelectSubset<T, DiagnosticDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Diagnostics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosticUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Diagnostics
     * const diagnostic = await prisma.diagnostic.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DiagnosticUpdateManyArgs>(args: SelectSubset<T, DiagnosticUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Diagnostics and returns the data updated in the database.
     * @param {DiagnosticUpdateManyAndReturnArgs} args - Arguments to update many Diagnostics.
     * @example
     * // Update many Diagnostics
     * const diagnostic = await prisma.diagnostic.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Diagnostics and only return the `diagnostic_id`
     * const diagnosticWithDiagnostic_idOnly = await prisma.diagnostic.updateManyAndReturn({
     *   select: { diagnostic_id: true },
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
    updateManyAndReturn<T extends DiagnosticUpdateManyAndReturnArgs>(args: SelectSubset<T, DiagnosticUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiagnosticPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Diagnostic.
     * @param {DiagnosticUpsertArgs} args - Arguments to update or create a Diagnostic.
     * @example
     * // Update or create a Diagnostic
     * const diagnostic = await prisma.diagnostic.upsert({
     *   create: {
     *     // ... data to create a Diagnostic
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Diagnostic we want to update
     *   }
     * })
     */
    upsert<T extends DiagnosticUpsertArgs>(args: SelectSubset<T, DiagnosticUpsertArgs<ExtArgs>>): Prisma__DiagnosticClient<$Result.GetResult<Prisma.$DiagnosticPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Diagnostics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosticCountArgs} args - Arguments to filter Diagnostics to count.
     * @example
     * // Count the number of Diagnostics
     * const count = await prisma.diagnostic.count({
     *   where: {
     *     // ... the filter for the Diagnostics we want to count
     *   }
     * })
    **/
    count<T extends DiagnosticCountArgs>(
      args?: Subset<T, DiagnosticCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DiagnosticCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Diagnostic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosticAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DiagnosticAggregateArgs>(args: Subset<T, DiagnosticAggregateArgs>): Prisma.PrismaPromise<GetDiagnosticAggregateType<T>>

    /**
     * Group by Diagnostic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosticGroupByArgs} args - Group by arguments.
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
      T extends DiagnosticGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DiagnosticGroupByArgs['orderBy'] }
        : { orderBy?: DiagnosticGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DiagnosticGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDiagnosticGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Diagnostic model
   */
  readonly fields: DiagnosticFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Diagnostic.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DiagnosticClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    responsible<T extends HeadMechanicDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HeadMechanicDefaultArgs<ExtArgs>>): Prisma__HeadMechanicClient<$Result.GetResult<Prisma.$HeadMechanicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    workers_employed<T extends Diagnostic$workers_employedArgs<ExtArgs> = {}>(args?: Subset<T, Diagnostic$workers_employedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MechanicPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reservation<T extends ReservationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReservationDefaultArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Diagnostic model
   */ 
  interface DiagnosticFieldRefs {
    readonly diagnostic_id: FieldRef<"Diagnostic", 'Int'>
    readonly responsible_id: FieldRef<"Diagnostic", 'Int'>
    readonly reservation_id: FieldRef<"Diagnostic", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Diagnostic findUnique
   */
  export type DiagnosticFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnostic
     */
    select?: DiagnosticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnostic
     */
    omit?: DiagnosticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticInclude<ExtArgs> | null
    /**
     * Filter, which Diagnostic to fetch.
     */
    where: DiagnosticWhereUniqueInput
  }

  /**
   * Diagnostic findUniqueOrThrow
   */
  export type DiagnosticFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnostic
     */
    select?: DiagnosticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnostic
     */
    omit?: DiagnosticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticInclude<ExtArgs> | null
    /**
     * Filter, which Diagnostic to fetch.
     */
    where: DiagnosticWhereUniqueInput
  }

  /**
   * Diagnostic findFirst
   */
  export type DiagnosticFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnostic
     */
    select?: DiagnosticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnostic
     */
    omit?: DiagnosticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticInclude<ExtArgs> | null
    /**
     * Filter, which Diagnostic to fetch.
     */
    where?: DiagnosticWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Diagnostics to fetch.
     */
    orderBy?: DiagnosticOrderByWithRelationInput | DiagnosticOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Diagnostics.
     */
    cursor?: DiagnosticWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Diagnostics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Diagnostics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Diagnostics.
     */
    distinct?: DiagnosticScalarFieldEnum | DiagnosticScalarFieldEnum[]
  }

  /**
   * Diagnostic findFirstOrThrow
   */
  export type DiagnosticFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnostic
     */
    select?: DiagnosticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnostic
     */
    omit?: DiagnosticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticInclude<ExtArgs> | null
    /**
     * Filter, which Diagnostic to fetch.
     */
    where?: DiagnosticWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Diagnostics to fetch.
     */
    orderBy?: DiagnosticOrderByWithRelationInput | DiagnosticOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Diagnostics.
     */
    cursor?: DiagnosticWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Diagnostics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Diagnostics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Diagnostics.
     */
    distinct?: DiagnosticScalarFieldEnum | DiagnosticScalarFieldEnum[]
  }

  /**
   * Diagnostic findMany
   */
  export type DiagnosticFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnostic
     */
    select?: DiagnosticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnostic
     */
    omit?: DiagnosticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticInclude<ExtArgs> | null
    /**
     * Filter, which Diagnostics to fetch.
     */
    where?: DiagnosticWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Diagnostics to fetch.
     */
    orderBy?: DiagnosticOrderByWithRelationInput | DiagnosticOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Diagnostics.
     */
    cursor?: DiagnosticWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Diagnostics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Diagnostics.
     */
    skip?: number
    distinct?: DiagnosticScalarFieldEnum | DiagnosticScalarFieldEnum[]
  }

  /**
   * Diagnostic create
   */
  export type DiagnosticCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnostic
     */
    select?: DiagnosticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnostic
     */
    omit?: DiagnosticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticInclude<ExtArgs> | null
    /**
     * The data needed to create a Diagnostic.
     */
    data: XOR<DiagnosticCreateInput, DiagnosticUncheckedCreateInput>
  }

  /**
   * Diagnostic createMany
   */
  export type DiagnosticCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Diagnostics.
     */
    data: DiagnosticCreateManyInput | DiagnosticCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Diagnostic createManyAndReturn
   */
  export type DiagnosticCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnostic
     */
    select?: DiagnosticSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnostic
     */
    omit?: DiagnosticOmit<ExtArgs> | null
    /**
     * The data used to create many Diagnostics.
     */
    data: DiagnosticCreateManyInput | DiagnosticCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Diagnostic update
   */
  export type DiagnosticUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnostic
     */
    select?: DiagnosticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnostic
     */
    omit?: DiagnosticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticInclude<ExtArgs> | null
    /**
     * The data needed to update a Diagnostic.
     */
    data: XOR<DiagnosticUpdateInput, DiagnosticUncheckedUpdateInput>
    /**
     * Choose, which Diagnostic to update.
     */
    where: DiagnosticWhereUniqueInput
  }

  /**
   * Diagnostic updateMany
   */
  export type DiagnosticUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Diagnostics.
     */
    data: XOR<DiagnosticUpdateManyMutationInput, DiagnosticUncheckedUpdateManyInput>
    /**
     * Filter which Diagnostics to update
     */
    where?: DiagnosticWhereInput
    /**
     * Limit how many Diagnostics to update.
     */
    limit?: number
  }

  /**
   * Diagnostic updateManyAndReturn
   */
  export type DiagnosticUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnostic
     */
    select?: DiagnosticSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnostic
     */
    omit?: DiagnosticOmit<ExtArgs> | null
    /**
     * The data used to update Diagnostics.
     */
    data: XOR<DiagnosticUpdateManyMutationInput, DiagnosticUncheckedUpdateManyInput>
    /**
     * Filter which Diagnostics to update
     */
    where?: DiagnosticWhereInput
    /**
     * Limit how many Diagnostics to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Diagnostic upsert
   */
  export type DiagnosticUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnostic
     */
    select?: DiagnosticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnostic
     */
    omit?: DiagnosticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticInclude<ExtArgs> | null
    /**
     * The filter to search for the Diagnostic to update in case it exists.
     */
    where: DiagnosticWhereUniqueInput
    /**
     * In case the Diagnostic found by the `where` argument doesn't exist, create a new Diagnostic with this data.
     */
    create: XOR<DiagnosticCreateInput, DiagnosticUncheckedCreateInput>
    /**
     * In case the Diagnostic was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DiagnosticUpdateInput, DiagnosticUncheckedUpdateInput>
  }

  /**
   * Diagnostic delete
   */
  export type DiagnosticDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnostic
     */
    select?: DiagnosticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnostic
     */
    omit?: DiagnosticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticInclude<ExtArgs> | null
    /**
     * Filter which Diagnostic to delete.
     */
    where: DiagnosticWhereUniqueInput
  }

  /**
   * Diagnostic deleteMany
   */
  export type DiagnosticDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Diagnostics to delete
     */
    where?: DiagnosticWhereInput
    /**
     * Limit how many Diagnostics to delete.
     */
    limit?: number
  }

  /**
   * Diagnostic.workers_employed
   */
  export type Diagnostic$workers_employedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mechanic
     */
    select?: MechanicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mechanic
     */
    omit?: MechanicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MechanicInclude<ExtArgs> | null
    where?: MechanicWhereInput
    orderBy?: MechanicOrderByWithRelationInput | MechanicOrderByWithRelationInput[]
    cursor?: MechanicWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MechanicScalarFieldEnum | MechanicScalarFieldEnum[]
  }

  /**
   * Diagnostic without action
   */
  export type DiagnosticDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnostic
     */
    select?: DiagnosticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnostic
     */
    omit?: DiagnosticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticInclude<ExtArgs> | null
  }


  /**
   * Model Repair
   */

  export type AggregateRepair = {
    _count: RepairCountAggregateOutputType | null
    _avg: RepairAvgAggregateOutputType | null
    _sum: RepairSumAggregateOutputType | null
    _min: RepairMinAggregateOutputType | null
    _max: RepairMaxAggregateOutputType | null
  }

  export type RepairAvgAggregateOutputType = {
    repair_id: number | null
    responsible_id: number | null
    reservation_id: number | null
    total_repair_hours: number | null
  }

  export type RepairSumAggregateOutputType = {
    repair_id: number | null
    responsible_id: number | null
    reservation_id: number | null
    total_repair_hours: number | null
  }

  export type RepairMinAggregateOutputType = {
    repair_id: number | null
    responsible_id: number | null
    reservation_id: number | null
    total_repair_hours: number | null
  }

  export type RepairMaxAggregateOutputType = {
    repair_id: number | null
    responsible_id: number | null
    reservation_id: number | null
    total_repair_hours: number | null
  }

  export type RepairCountAggregateOutputType = {
    repair_id: number
    responsible_id: number
    reservation_id: number
    total_repair_hours: number
    _all: number
  }


  export type RepairAvgAggregateInputType = {
    repair_id?: true
    responsible_id?: true
    reservation_id?: true
    total_repair_hours?: true
  }

  export type RepairSumAggregateInputType = {
    repair_id?: true
    responsible_id?: true
    reservation_id?: true
    total_repair_hours?: true
  }

  export type RepairMinAggregateInputType = {
    repair_id?: true
    responsible_id?: true
    reservation_id?: true
    total_repair_hours?: true
  }

  export type RepairMaxAggregateInputType = {
    repair_id?: true
    responsible_id?: true
    reservation_id?: true
    total_repair_hours?: true
  }

  export type RepairCountAggregateInputType = {
    repair_id?: true
    responsible_id?: true
    reservation_id?: true
    total_repair_hours?: true
    _all?: true
  }

  export type RepairAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Repair to aggregate.
     */
    where?: RepairWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Repairs to fetch.
     */
    orderBy?: RepairOrderByWithRelationInput | RepairOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RepairWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Repairs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Repairs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Repairs
    **/
    _count?: true | RepairCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RepairAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RepairSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RepairMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RepairMaxAggregateInputType
  }

  export type GetRepairAggregateType<T extends RepairAggregateArgs> = {
        [P in keyof T & keyof AggregateRepair]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRepair[P]>
      : GetScalarType<T[P], AggregateRepair[P]>
  }




  export type RepairGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RepairWhereInput
    orderBy?: RepairOrderByWithAggregationInput | RepairOrderByWithAggregationInput[]
    by: RepairScalarFieldEnum[] | RepairScalarFieldEnum
    having?: RepairScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RepairCountAggregateInputType | true
    _avg?: RepairAvgAggregateInputType
    _sum?: RepairSumAggregateInputType
    _min?: RepairMinAggregateInputType
    _max?: RepairMaxAggregateInputType
  }

  export type RepairGroupByOutputType = {
    repair_id: number
    responsible_id: number
    reservation_id: number
    total_repair_hours: number
    _count: RepairCountAggregateOutputType | null
    _avg: RepairAvgAggregateOutputType | null
    _sum: RepairSumAggregateOutputType | null
    _min: RepairMinAggregateOutputType | null
    _max: RepairMaxAggregateOutputType | null
  }

  type GetRepairGroupByPayload<T extends RepairGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RepairGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RepairGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RepairGroupByOutputType[P]>
            : GetScalarType<T[P], RepairGroupByOutputType[P]>
        }
      >
    >


  export type RepairSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    repair_id?: boolean
    responsible_id?: boolean
    reservation_id?: boolean
    total_repair_hours?: boolean
    responsible?: boolean | HeadMechanicDefaultArgs<ExtArgs>
    workers_employed?: boolean | Repair$workers_employedArgs<ExtArgs>
    reservation?: boolean | ReservationDefaultArgs<ExtArgs>
    _count?: boolean | RepairCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["repair"]>

  export type RepairSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    repair_id?: boolean
    responsible_id?: boolean
    reservation_id?: boolean
    total_repair_hours?: boolean
    responsible?: boolean | HeadMechanicDefaultArgs<ExtArgs>
    reservation?: boolean | ReservationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["repair"]>

  export type RepairSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    repair_id?: boolean
    responsible_id?: boolean
    reservation_id?: boolean
    total_repair_hours?: boolean
    responsible?: boolean | HeadMechanicDefaultArgs<ExtArgs>
    reservation?: boolean | ReservationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["repair"]>

  export type RepairSelectScalar = {
    repair_id?: boolean
    responsible_id?: boolean
    reservation_id?: boolean
    total_repair_hours?: boolean
  }

  export type RepairOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"repair_id" | "responsible_id" | "reservation_id" | "total_repair_hours", ExtArgs["result"]["repair"]>
  export type RepairInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    responsible?: boolean | HeadMechanicDefaultArgs<ExtArgs>
    workers_employed?: boolean | Repair$workers_employedArgs<ExtArgs>
    reservation?: boolean | ReservationDefaultArgs<ExtArgs>
    _count?: boolean | RepairCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RepairIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    responsible?: boolean | HeadMechanicDefaultArgs<ExtArgs>
    reservation?: boolean | ReservationDefaultArgs<ExtArgs>
  }
  export type RepairIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    responsible?: boolean | HeadMechanicDefaultArgs<ExtArgs>
    reservation?: boolean | ReservationDefaultArgs<ExtArgs>
  }

  export type $RepairPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Repair"
    objects: {
      responsible: Prisma.$HeadMechanicPayload<ExtArgs>
      workers_employed: Prisma.$MechanicPayload<ExtArgs>[]
      reservation: Prisma.$ReservationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      repair_id: number
      responsible_id: number
      reservation_id: number
      total_repair_hours: number
    }, ExtArgs["result"]["repair"]>
    composites: {}
  }

  type RepairGetPayload<S extends boolean | null | undefined | RepairDefaultArgs> = $Result.GetResult<Prisma.$RepairPayload, S>

  type RepairCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RepairFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RepairCountAggregateInputType | true
    }

  export interface RepairDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Repair'], meta: { name: 'Repair' } }
    /**
     * Find zero or one Repair that matches the filter.
     * @param {RepairFindUniqueArgs} args - Arguments to find a Repair
     * @example
     * // Get one Repair
     * const repair = await prisma.repair.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RepairFindUniqueArgs>(args: SelectSubset<T, RepairFindUniqueArgs<ExtArgs>>): Prisma__RepairClient<$Result.GetResult<Prisma.$RepairPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Repair that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RepairFindUniqueOrThrowArgs} args - Arguments to find a Repair
     * @example
     * // Get one Repair
     * const repair = await prisma.repair.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RepairFindUniqueOrThrowArgs>(args: SelectSubset<T, RepairFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RepairClient<$Result.GetResult<Prisma.$RepairPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Repair that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepairFindFirstArgs} args - Arguments to find a Repair
     * @example
     * // Get one Repair
     * const repair = await prisma.repair.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RepairFindFirstArgs>(args?: SelectSubset<T, RepairFindFirstArgs<ExtArgs>>): Prisma__RepairClient<$Result.GetResult<Prisma.$RepairPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Repair that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepairFindFirstOrThrowArgs} args - Arguments to find a Repair
     * @example
     * // Get one Repair
     * const repair = await prisma.repair.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RepairFindFirstOrThrowArgs>(args?: SelectSubset<T, RepairFindFirstOrThrowArgs<ExtArgs>>): Prisma__RepairClient<$Result.GetResult<Prisma.$RepairPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Repairs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepairFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Repairs
     * const repairs = await prisma.repair.findMany()
     * 
     * // Get first 10 Repairs
     * const repairs = await prisma.repair.findMany({ take: 10 })
     * 
     * // Only select the `repair_id`
     * const repairWithRepair_idOnly = await prisma.repair.findMany({ select: { repair_id: true } })
     * 
     */
    findMany<T extends RepairFindManyArgs>(args?: SelectSubset<T, RepairFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepairPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Repair.
     * @param {RepairCreateArgs} args - Arguments to create a Repair.
     * @example
     * // Create one Repair
     * const Repair = await prisma.repair.create({
     *   data: {
     *     // ... data to create a Repair
     *   }
     * })
     * 
     */
    create<T extends RepairCreateArgs>(args: SelectSubset<T, RepairCreateArgs<ExtArgs>>): Prisma__RepairClient<$Result.GetResult<Prisma.$RepairPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Repairs.
     * @param {RepairCreateManyArgs} args - Arguments to create many Repairs.
     * @example
     * // Create many Repairs
     * const repair = await prisma.repair.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RepairCreateManyArgs>(args?: SelectSubset<T, RepairCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Repairs and returns the data saved in the database.
     * @param {RepairCreateManyAndReturnArgs} args - Arguments to create many Repairs.
     * @example
     * // Create many Repairs
     * const repair = await prisma.repair.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Repairs and only return the `repair_id`
     * const repairWithRepair_idOnly = await prisma.repair.createManyAndReturn({
     *   select: { repair_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RepairCreateManyAndReturnArgs>(args?: SelectSubset<T, RepairCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepairPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Repair.
     * @param {RepairDeleteArgs} args - Arguments to delete one Repair.
     * @example
     * // Delete one Repair
     * const Repair = await prisma.repair.delete({
     *   where: {
     *     // ... filter to delete one Repair
     *   }
     * })
     * 
     */
    delete<T extends RepairDeleteArgs>(args: SelectSubset<T, RepairDeleteArgs<ExtArgs>>): Prisma__RepairClient<$Result.GetResult<Prisma.$RepairPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Repair.
     * @param {RepairUpdateArgs} args - Arguments to update one Repair.
     * @example
     * // Update one Repair
     * const repair = await prisma.repair.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RepairUpdateArgs>(args: SelectSubset<T, RepairUpdateArgs<ExtArgs>>): Prisma__RepairClient<$Result.GetResult<Prisma.$RepairPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Repairs.
     * @param {RepairDeleteManyArgs} args - Arguments to filter Repairs to delete.
     * @example
     * // Delete a few Repairs
     * const { count } = await prisma.repair.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RepairDeleteManyArgs>(args?: SelectSubset<T, RepairDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Repairs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepairUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Repairs
     * const repair = await prisma.repair.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RepairUpdateManyArgs>(args: SelectSubset<T, RepairUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Repairs and returns the data updated in the database.
     * @param {RepairUpdateManyAndReturnArgs} args - Arguments to update many Repairs.
     * @example
     * // Update many Repairs
     * const repair = await prisma.repair.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Repairs and only return the `repair_id`
     * const repairWithRepair_idOnly = await prisma.repair.updateManyAndReturn({
     *   select: { repair_id: true },
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
    updateManyAndReturn<T extends RepairUpdateManyAndReturnArgs>(args: SelectSubset<T, RepairUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepairPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Repair.
     * @param {RepairUpsertArgs} args - Arguments to update or create a Repair.
     * @example
     * // Update or create a Repair
     * const repair = await prisma.repair.upsert({
     *   create: {
     *     // ... data to create a Repair
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Repair we want to update
     *   }
     * })
     */
    upsert<T extends RepairUpsertArgs>(args: SelectSubset<T, RepairUpsertArgs<ExtArgs>>): Prisma__RepairClient<$Result.GetResult<Prisma.$RepairPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Repairs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepairCountArgs} args - Arguments to filter Repairs to count.
     * @example
     * // Count the number of Repairs
     * const count = await prisma.repair.count({
     *   where: {
     *     // ... the filter for the Repairs we want to count
     *   }
     * })
    **/
    count<T extends RepairCountArgs>(
      args?: Subset<T, RepairCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RepairCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Repair.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepairAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RepairAggregateArgs>(args: Subset<T, RepairAggregateArgs>): Prisma.PrismaPromise<GetRepairAggregateType<T>>

    /**
     * Group by Repair.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepairGroupByArgs} args - Group by arguments.
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
      T extends RepairGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RepairGroupByArgs['orderBy'] }
        : { orderBy?: RepairGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RepairGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRepairGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Repair model
   */
  readonly fields: RepairFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Repair.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RepairClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    responsible<T extends HeadMechanicDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HeadMechanicDefaultArgs<ExtArgs>>): Prisma__HeadMechanicClient<$Result.GetResult<Prisma.$HeadMechanicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    workers_employed<T extends Repair$workers_employedArgs<ExtArgs> = {}>(args?: Subset<T, Repair$workers_employedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MechanicPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reservation<T extends ReservationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReservationDefaultArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Repair model
   */ 
  interface RepairFieldRefs {
    readonly repair_id: FieldRef<"Repair", 'Int'>
    readonly responsible_id: FieldRef<"Repair", 'Int'>
    readonly reservation_id: FieldRef<"Repair", 'Int'>
    readonly total_repair_hours: FieldRef<"Repair", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Repair findUnique
   */
  export type RepairFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repair
     */
    select?: RepairSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repair
     */
    omit?: RepairOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairInclude<ExtArgs> | null
    /**
     * Filter, which Repair to fetch.
     */
    where: RepairWhereUniqueInput
  }

  /**
   * Repair findUniqueOrThrow
   */
  export type RepairFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repair
     */
    select?: RepairSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repair
     */
    omit?: RepairOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairInclude<ExtArgs> | null
    /**
     * Filter, which Repair to fetch.
     */
    where: RepairWhereUniqueInput
  }

  /**
   * Repair findFirst
   */
  export type RepairFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repair
     */
    select?: RepairSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repair
     */
    omit?: RepairOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairInclude<ExtArgs> | null
    /**
     * Filter, which Repair to fetch.
     */
    where?: RepairWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Repairs to fetch.
     */
    orderBy?: RepairOrderByWithRelationInput | RepairOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Repairs.
     */
    cursor?: RepairWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Repairs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Repairs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Repairs.
     */
    distinct?: RepairScalarFieldEnum | RepairScalarFieldEnum[]
  }

  /**
   * Repair findFirstOrThrow
   */
  export type RepairFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repair
     */
    select?: RepairSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repair
     */
    omit?: RepairOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairInclude<ExtArgs> | null
    /**
     * Filter, which Repair to fetch.
     */
    where?: RepairWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Repairs to fetch.
     */
    orderBy?: RepairOrderByWithRelationInput | RepairOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Repairs.
     */
    cursor?: RepairWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Repairs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Repairs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Repairs.
     */
    distinct?: RepairScalarFieldEnum | RepairScalarFieldEnum[]
  }

  /**
   * Repair findMany
   */
  export type RepairFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repair
     */
    select?: RepairSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repair
     */
    omit?: RepairOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairInclude<ExtArgs> | null
    /**
     * Filter, which Repairs to fetch.
     */
    where?: RepairWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Repairs to fetch.
     */
    orderBy?: RepairOrderByWithRelationInput | RepairOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Repairs.
     */
    cursor?: RepairWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Repairs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Repairs.
     */
    skip?: number
    distinct?: RepairScalarFieldEnum | RepairScalarFieldEnum[]
  }

  /**
   * Repair create
   */
  export type RepairCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repair
     */
    select?: RepairSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repair
     */
    omit?: RepairOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairInclude<ExtArgs> | null
    /**
     * The data needed to create a Repair.
     */
    data: XOR<RepairCreateInput, RepairUncheckedCreateInput>
  }

  /**
   * Repair createMany
   */
  export type RepairCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Repairs.
     */
    data: RepairCreateManyInput | RepairCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Repair createManyAndReturn
   */
  export type RepairCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repair
     */
    select?: RepairSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Repair
     */
    omit?: RepairOmit<ExtArgs> | null
    /**
     * The data used to create many Repairs.
     */
    data: RepairCreateManyInput | RepairCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Repair update
   */
  export type RepairUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repair
     */
    select?: RepairSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repair
     */
    omit?: RepairOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairInclude<ExtArgs> | null
    /**
     * The data needed to update a Repair.
     */
    data: XOR<RepairUpdateInput, RepairUncheckedUpdateInput>
    /**
     * Choose, which Repair to update.
     */
    where: RepairWhereUniqueInput
  }

  /**
   * Repair updateMany
   */
  export type RepairUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Repairs.
     */
    data: XOR<RepairUpdateManyMutationInput, RepairUncheckedUpdateManyInput>
    /**
     * Filter which Repairs to update
     */
    where?: RepairWhereInput
    /**
     * Limit how many Repairs to update.
     */
    limit?: number
  }

  /**
   * Repair updateManyAndReturn
   */
  export type RepairUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repair
     */
    select?: RepairSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Repair
     */
    omit?: RepairOmit<ExtArgs> | null
    /**
     * The data used to update Repairs.
     */
    data: XOR<RepairUpdateManyMutationInput, RepairUncheckedUpdateManyInput>
    /**
     * Filter which Repairs to update
     */
    where?: RepairWhereInput
    /**
     * Limit how many Repairs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Repair upsert
   */
  export type RepairUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repair
     */
    select?: RepairSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repair
     */
    omit?: RepairOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairInclude<ExtArgs> | null
    /**
     * The filter to search for the Repair to update in case it exists.
     */
    where: RepairWhereUniqueInput
    /**
     * In case the Repair found by the `where` argument doesn't exist, create a new Repair with this data.
     */
    create: XOR<RepairCreateInput, RepairUncheckedCreateInput>
    /**
     * In case the Repair was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RepairUpdateInput, RepairUncheckedUpdateInput>
  }

  /**
   * Repair delete
   */
  export type RepairDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repair
     */
    select?: RepairSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repair
     */
    omit?: RepairOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairInclude<ExtArgs> | null
    /**
     * Filter which Repair to delete.
     */
    where: RepairWhereUniqueInput
  }

  /**
   * Repair deleteMany
   */
  export type RepairDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Repairs to delete
     */
    where?: RepairWhereInput
    /**
     * Limit how many Repairs to delete.
     */
    limit?: number
  }

  /**
   * Repair.workers_employed
   */
  export type Repair$workers_employedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mechanic
     */
    select?: MechanicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mechanic
     */
    omit?: MechanicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MechanicInclude<ExtArgs> | null
    where?: MechanicWhereInput
    orderBy?: MechanicOrderByWithRelationInput | MechanicOrderByWithRelationInput[]
    cursor?: MechanicWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MechanicScalarFieldEnum | MechanicScalarFieldEnum[]
  }

  /**
   * Repair without action
   */
  export type RepairDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repair
     */
    select?: RepairSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repair
     */
    omit?: RepairOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairInclude<ExtArgs> | null
  }


  /**
   * Model RepairPart
   */

  export type AggregateRepairPart = {
    _count: RepairPartCountAggregateOutputType | null
    _avg: RepairPartAvgAggregateOutputType | null
    _sum: RepairPartSumAggregateOutputType | null
    _min: RepairPartMinAggregateOutputType | null
    _max: RepairPartMaxAggregateOutputType | null
  }

  export type RepairPartAvgAggregateOutputType = {
    price: number | null
    repair_id: number | null
    vendor_id: number | null
  }

  export type RepairPartSumAggregateOutputType = {
    price: number | null
    repair_id: number[]
    vendor_id: number[]
  }

  export type RepairPartMinAggregateOutputType = {
    part_id: string | null
    price: number | null
  }

  export type RepairPartMaxAggregateOutputType = {
    part_id: string | null
    price: number | null
  }

  export type RepairPartCountAggregateOutputType = {
    part_id: number
    price: number
    repair_id: number
    vendor_id: number
    _all: number
  }


  export type RepairPartAvgAggregateInputType = {
    price?: true
    repair_id?: true
    vendor_id?: true
  }

  export type RepairPartSumAggregateInputType = {
    price?: true
    repair_id?: true
    vendor_id?: true
  }

  export type RepairPartMinAggregateInputType = {
    part_id?: true
    price?: true
  }

  export type RepairPartMaxAggregateInputType = {
    part_id?: true
    price?: true
  }

  export type RepairPartCountAggregateInputType = {
    part_id?: true
    price?: true
    repair_id?: true
    vendor_id?: true
    _all?: true
  }

  export type RepairPartAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RepairPart to aggregate.
     */
    where?: RepairPartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RepairParts to fetch.
     */
    orderBy?: RepairPartOrderByWithRelationInput | RepairPartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RepairPartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RepairParts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RepairParts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RepairParts
    **/
    _count?: true | RepairPartCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RepairPartAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RepairPartSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RepairPartMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RepairPartMaxAggregateInputType
  }

  export type GetRepairPartAggregateType<T extends RepairPartAggregateArgs> = {
        [P in keyof T & keyof AggregateRepairPart]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRepairPart[P]>
      : GetScalarType<T[P], AggregateRepairPart[P]>
  }




  export type RepairPartGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RepairPartWhereInput
    orderBy?: RepairPartOrderByWithAggregationInput | RepairPartOrderByWithAggregationInput[]
    by: RepairPartScalarFieldEnum[] | RepairPartScalarFieldEnum
    having?: RepairPartScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RepairPartCountAggregateInputType | true
    _avg?: RepairPartAvgAggregateInputType
    _sum?: RepairPartSumAggregateInputType
    _min?: RepairPartMinAggregateInputType
    _max?: RepairPartMaxAggregateInputType
  }

  export type RepairPartGroupByOutputType = {
    part_id: string
    price: number
    repair_id: number[]
    vendor_id: number[]
    _count: RepairPartCountAggregateOutputType | null
    _avg: RepairPartAvgAggregateOutputType | null
    _sum: RepairPartSumAggregateOutputType | null
    _min: RepairPartMinAggregateOutputType | null
    _max: RepairPartMaxAggregateOutputType | null
  }

  type GetRepairPartGroupByPayload<T extends RepairPartGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RepairPartGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RepairPartGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RepairPartGroupByOutputType[P]>
            : GetScalarType<T[P], RepairPartGroupByOutputType[P]>
        }
      >
    >


  export type RepairPartSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    part_id?: boolean
    price?: boolean
    repair_id?: boolean
    vendor_id?: boolean
  }, ExtArgs["result"]["repairPart"]>

  export type RepairPartSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    part_id?: boolean
    price?: boolean
    repair_id?: boolean
    vendor_id?: boolean
  }, ExtArgs["result"]["repairPart"]>

  export type RepairPartSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    part_id?: boolean
    price?: boolean
    repair_id?: boolean
    vendor_id?: boolean
  }, ExtArgs["result"]["repairPart"]>

  export type RepairPartSelectScalar = {
    part_id?: boolean
    price?: boolean
    repair_id?: boolean
    vendor_id?: boolean
  }

  export type RepairPartOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"part_id" | "price" | "repair_id" | "vendor_id", ExtArgs["result"]["repairPart"]>

  export type $RepairPartPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RepairPart"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      part_id: string
      price: number
      repair_id: number[]
      vendor_id: number[]
    }, ExtArgs["result"]["repairPart"]>
    composites: {}
  }

  type RepairPartGetPayload<S extends boolean | null | undefined | RepairPartDefaultArgs> = $Result.GetResult<Prisma.$RepairPartPayload, S>

  type RepairPartCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RepairPartFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RepairPartCountAggregateInputType | true
    }

  export interface RepairPartDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RepairPart'], meta: { name: 'RepairPart' } }
    /**
     * Find zero or one RepairPart that matches the filter.
     * @param {RepairPartFindUniqueArgs} args - Arguments to find a RepairPart
     * @example
     * // Get one RepairPart
     * const repairPart = await prisma.repairPart.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RepairPartFindUniqueArgs>(args: SelectSubset<T, RepairPartFindUniqueArgs<ExtArgs>>): Prisma__RepairPartClient<$Result.GetResult<Prisma.$RepairPartPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RepairPart that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RepairPartFindUniqueOrThrowArgs} args - Arguments to find a RepairPart
     * @example
     * // Get one RepairPart
     * const repairPart = await prisma.repairPart.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RepairPartFindUniqueOrThrowArgs>(args: SelectSubset<T, RepairPartFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RepairPartClient<$Result.GetResult<Prisma.$RepairPartPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RepairPart that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepairPartFindFirstArgs} args - Arguments to find a RepairPart
     * @example
     * // Get one RepairPart
     * const repairPart = await prisma.repairPart.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RepairPartFindFirstArgs>(args?: SelectSubset<T, RepairPartFindFirstArgs<ExtArgs>>): Prisma__RepairPartClient<$Result.GetResult<Prisma.$RepairPartPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RepairPart that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepairPartFindFirstOrThrowArgs} args - Arguments to find a RepairPart
     * @example
     * // Get one RepairPart
     * const repairPart = await prisma.repairPart.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RepairPartFindFirstOrThrowArgs>(args?: SelectSubset<T, RepairPartFindFirstOrThrowArgs<ExtArgs>>): Prisma__RepairPartClient<$Result.GetResult<Prisma.$RepairPartPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RepairParts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepairPartFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RepairParts
     * const repairParts = await prisma.repairPart.findMany()
     * 
     * // Get first 10 RepairParts
     * const repairParts = await prisma.repairPart.findMany({ take: 10 })
     * 
     * // Only select the `part_id`
     * const repairPartWithPart_idOnly = await prisma.repairPart.findMany({ select: { part_id: true } })
     * 
     */
    findMany<T extends RepairPartFindManyArgs>(args?: SelectSubset<T, RepairPartFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepairPartPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RepairPart.
     * @param {RepairPartCreateArgs} args - Arguments to create a RepairPart.
     * @example
     * // Create one RepairPart
     * const RepairPart = await prisma.repairPart.create({
     *   data: {
     *     // ... data to create a RepairPart
     *   }
     * })
     * 
     */
    create<T extends RepairPartCreateArgs>(args: SelectSubset<T, RepairPartCreateArgs<ExtArgs>>): Prisma__RepairPartClient<$Result.GetResult<Prisma.$RepairPartPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RepairParts.
     * @param {RepairPartCreateManyArgs} args - Arguments to create many RepairParts.
     * @example
     * // Create many RepairParts
     * const repairPart = await prisma.repairPart.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RepairPartCreateManyArgs>(args?: SelectSubset<T, RepairPartCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RepairParts and returns the data saved in the database.
     * @param {RepairPartCreateManyAndReturnArgs} args - Arguments to create many RepairParts.
     * @example
     * // Create many RepairParts
     * const repairPart = await prisma.repairPart.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RepairParts and only return the `part_id`
     * const repairPartWithPart_idOnly = await prisma.repairPart.createManyAndReturn({
     *   select: { part_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RepairPartCreateManyAndReturnArgs>(args?: SelectSubset<T, RepairPartCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepairPartPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RepairPart.
     * @param {RepairPartDeleteArgs} args - Arguments to delete one RepairPart.
     * @example
     * // Delete one RepairPart
     * const RepairPart = await prisma.repairPart.delete({
     *   where: {
     *     // ... filter to delete one RepairPart
     *   }
     * })
     * 
     */
    delete<T extends RepairPartDeleteArgs>(args: SelectSubset<T, RepairPartDeleteArgs<ExtArgs>>): Prisma__RepairPartClient<$Result.GetResult<Prisma.$RepairPartPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RepairPart.
     * @param {RepairPartUpdateArgs} args - Arguments to update one RepairPart.
     * @example
     * // Update one RepairPart
     * const repairPart = await prisma.repairPart.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RepairPartUpdateArgs>(args: SelectSubset<T, RepairPartUpdateArgs<ExtArgs>>): Prisma__RepairPartClient<$Result.GetResult<Prisma.$RepairPartPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RepairParts.
     * @param {RepairPartDeleteManyArgs} args - Arguments to filter RepairParts to delete.
     * @example
     * // Delete a few RepairParts
     * const { count } = await prisma.repairPart.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RepairPartDeleteManyArgs>(args?: SelectSubset<T, RepairPartDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RepairParts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepairPartUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RepairParts
     * const repairPart = await prisma.repairPart.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RepairPartUpdateManyArgs>(args: SelectSubset<T, RepairPartUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RepairParts and returns the data updated in the database.
     * @param {RepairPartUpdateManyAndReturnArgs} args - Arguments to update many RepairParts.
     * @example
     * // Update many RepairParts
     * const repairPart = await prisma.repairPart.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RepairParts and only return the `part_id`
     * const repairPartWithPart_idOnly = await prisma.repairPart.updateManyAndReturn({
     *   select: { part_id: true },
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
    updateManyAndReturn<T extends RepairPartUpdateManyAndReturnArgs>(args: SelectSubset<T, RepairPartUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepairPartPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RepairPart.
     * @param {RepairPartUpsertArgs} args - Arguments to update or create a RepairPart.
     * @example
     * // Update or create a RepairPart
     * const repairPart = await prisma.repairPart.upsert({
     *   create: {
     *     // ... data to create a RepairPart
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RepairPart we want to update
     *   }
     * })
     */
    upsert<T extends RepairPartUpsertArgs>(args: SelectSubset<T, RepairPartUpsertArgs<ExtArgs>>): Prisma__RepairPartClient<$Result.GetResult<Prisma.$RepairPartPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RepairParts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepairPartCountArgs} args - Arguments to filter RepairParts to count.
     * @example
     * // Count the number of RepairParts
     * const count = await prisma.repairPart.count({
     *   where: {
     *     // ... the filter for the RepairParts we want to count
     *   }
     * })
    **/
    count<T extends RepairPartCountArgs>(
      args?: Subset<T, RepairPartCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RepairPartCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RepairPart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepairPartAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RepairPartAggregateArgs>(args: Subset<T, RepairPartAggregateArgs>): Prisma.PrismaPromise<GetRepairPartAggregateType<T>>

    /**
     * Group by RepairPart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepairPartGroupByArgs} args - Group by arguments.
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
      T extends RepairPartGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RepairPartGroupByArgs['orderBy'] }
        : { orderBy?: RepairPartGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RepairPartGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRepairPartGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RepairPart model
   */
  readonly fields: RepairPartFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RepairPart.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RepairPartClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the RepairPart model
   */ 
  interface RepairPartFieldRefs {
    readonly part_id: FieldRef<"RepairPart", 'String'>
    readonly price: FieldRef<"RepairPart", 'Float'>
    readonly repair_id: FieldRef<"RepairPart", 'Int[]'>
    readonly vendor_id: FieldRef<"RepairPart", 'Int[]'>
  }
    

  // Custom InputTypes
  /**
   * RepairPart findUnique
   */
  export type RepairPartFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairPart
     */
    select?: RepairPartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepairPart
     */
    omit?: RepairPartOmit<ExtArgs> | null
    /**
     * Filter, which RepairPart to fetch.
     */
    where: RepairPartWhereUniqueInput
  }

  /**
   * RepairPart findUniqueOrThrow
   */
  export type RepairPartFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairPart
     */
    select?: RepairPartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepairPart
     */
    omit?: RepairPartOmit<ExtArgs> | null
    /**
     * Filter, which RepairPart to fetch.
     */
    where: RepairPartWhereUniqueInput
  }

  /**
   * RepairPart findFirst
   */
  export type RepairPartFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairPart
     */
    select?: RepairPartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepairPart
     */
    omit?: RepairPartOmit<ExtArgs> | null
    /**
     * Filter, which RepairPart to fetch.
     */
    where?: RepairPartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RepairParts to fetch.
     */
    orderBy?: RepairPartOrderByWithRelationInput | RepairPartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RepairParts.
     */
    cursor?: RepairPartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RepairParts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RepairParts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RepairParts.
     */
    distinct?: RepairPartScalarFieldEnum | RepairPartScalarFieldEnum[]
  }

  /**
   * RepairPart findFirstOrThrow
   */
  export type RepairPartFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairPart
     */
    select?: RepairPartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepairPart
     */
    omit?: RepairPartOmit<ExtArgs> | null
    /**
     * Filter, which RepairPart to fetch.
     */
    where?: RepairPartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RepairParts to fetch.
     */
    orderBy?: RepairPartOrderByWithRelationInput | RepairPartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RepairParts.
     */
    cursor?: RepairPartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RepairParts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RepairParts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RepairParts.
     */
    distinct?: RepairPartScalarFieldEnum | RepairPartScalarFieldEnum[]
  }

  /**
   * RepairPart findMany
   */
  export type RepairPartFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairPart
     */
    select?: RepairPartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepairPart
     */
    omit?: RepairPartOmit<ExtArgs> | null
    /**
     * Filter, which RepairParts to fetch.
     */
    where?: RepairPartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RepairParts to fetch.
     */
    orderBy?: RepairPartOrderByWithRelationInput | RepairPartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RepairParts.
     */
    cursor?: RepairPartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RepairParts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RepairParts.
     */
    skip?: number
    distinct?: RepairPartScalarFieldEnum | RepairPartScalarFieldEnum[]
  }

  /**
   * RepairPart create
   */
  export type RepairPartCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairPart
     */
    select?: RepairPartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepairPart
     */
    omit?: RepairPartOmit<ExtArgs> | null
    /**
     * The data needed to create a RepairPart.
     */
    data: XOR<RepairPartCreateInput, RepairPartUncheckedCreateInput>
  }

  /**
   * RepairPart createMany
   */
  export type RepairPartCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RepairParts.
     */
    data: RepairPartCreateManyInput | RepairPartCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RepairPart createManyAndReturn
   */
  export type RepairPartCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairPart
     */
    select?: RepairPartSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RepairPart
     */
    omit?: RepairPartOmit<ExtArgs> | null
    /**
     * The data used to create many RepairParts.
     */
    data: RepairPartCreateManyInput | RepairPartCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RepairPart update
   */
  export type RepairPartUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairPart
     */
    select?: RepairPartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepairPart
     */
    omit?: RepairPartOmit<ExtArgs> | null
    /**
     * The data needed to update a RepairPart.
     */
    data: XOR<RepairPartUpdateInput, RepairPartUncheckedUpdateInput>
    /**
     * Choose, which RepairPart to update.
     */
    where: RepairPartWhereUniqueInput
  }

  /**
   * RepairPart updateMany
   */
  export type RepairPartUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RepairParts.
     */
    data: XOR<RepairPartUpdateManyMutationInput, RepairPartUncheckedUpdateManyInput>
    /**
     * Filter which RepairParts to update
     */
    where?: RepairPartWhereInput
    /**
     * Limit how many RepairParts to update.
     */
    limit?: number
  }

  /**
   * RepairPart updateManyAndReturn
   */
  export type RepairPartUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairPart
     */
    select?: RepairPartSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RepairPart
     */
    omit?: RepairPartOmit<ExtArgs> | null
    /**
     * The data used to update RepairParts.
     */
    data: XOR<RepairPartUpdateManyMutationInput, RepairPartUncheckedUpdateManyInput>
    /**
     * Filter which RepairParts to update
     */
    where?: RepairPartWhereInput
    /**
     * Limit how many RepairParts to update.
     */
    limit?: number
  }

  /**
   * RepairPart upsert
   */
  export type RepairPartUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairPart
     */
    select?: RepairPartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepairPart
     */
    omit?: RepairPartOmit<ExtArgs> | null
    /**
     * The filter to search for the RepairPart to update in case it exists.
     */
    where: RepairPartWhereUniqueInput
    /**
     * In case the RepairPart found by the `where` argument doesn't exist, create a new RepairPart with this data.
     */
    create: XOR<RepairPartCreateInput, RepairPartUncheckedCreateInput>
    /**
     * In case the RepairPart was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RepairPartUpdateInput, RepairPartUncheckedUpdateInput>
  }

  /**
   * RepairPart delete
   */
  export type RepairPartDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairPart
     */
    select?: RepairPartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepairPart
     */
    omit?: RepairPartOmit<ExtArgs> | null
    /**
     * Filter which RepairPart to delete.
     */
    where: RepairPartWhereUniqueInput
  }

  /**
   * RepairPart deleteMany
   */
  export type RepairPartDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RepairParts to delete
     */
    where?: RepairPartWhereInput
    /**
     * Limit how many RepairParts to delete.
     */
    limit?: number
  }

  /**
   * RepairPart without action
   */
  export type RepairPartDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairPart
     */
    select?: RepairPartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepairPart
     */
    omit?: RepairPartOmit<ExtArgs> | null
  }


  /**
   * Model Vendor
   */

  export type AggregateVendor = {
    _count: VendorCountAggregateOutputType | null
    _avg: VendorAvgAggregateOutputType | null
    _sum: VendorSumAggregateOutputType | null
    _min: VendorMinAggregateOutputType | null
    _max: VendorMaxAggregateOutputType | null
  }

  export type VendorAvgAggregateOutputType = {
    vendor_id: number | null
  }

  export type VendorSumAggregateOutputType = {
    vendor_id: number | null
  }

  export type VendorMinAggregateOutputType = {
    vendor_id: number | null
    vendor_shop_name: string | null
    vendor_shop_address: string | null
  }

  export type VendorMaxAggregateOutputType = {
    vendor_id: number | null
    vendor_shop_name: string | null
    vendor_shop_address: string | null
  }

  export type VendorCountAggregateOutputType = {
    vendor_id: number
    vendor_shop_name: number
    vendor_shop_address: number
    _all: number
  }


  export type VendorAvgAggregateInputType = {
    vendor_id?: true
  }

  export type VendorSumAggregateInputType = {
    vendor_id?: true
  }

  export type VendorMinAggregateInputType = {
    vendor_id?: true
    vendor_shop_name?: true
    vendor_shop_address?: true
  }

  export type VendorMaxAggregateInputType = {
    vendor_id?: true
    vendor_shop_name?: true
    vendor_shop_address?: true
  }

  export type VendorCountAggregateInputType = {
    vendor_id?: true
    vendor_shop_name?: true
    vendor_shop_address?: true
    _all?: true
  }

  export type VendorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vendor to aggregate.
     */
    where?: VendorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vendors to fetch.
     */
    orderBy?: VendorOrderByWithRelationInput | VendorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VendorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vendors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vendors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vendors
    **/
    _count?: true | VendorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VendorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VendorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VendorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VendorMaxAggregateInputType
  }

  export type GetVendorAggregateType<T extends VendorAggregateArgs> = {
        [P in keyof T & keyof AggregateVendor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVendor[P]>
      : GetScalarType<T[P], AggregateVendor[P]>
  }




  export type VendorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VendorWhereInput
    orderBy?: VendorOrderByWithAggregationInput | VendorOrderByWithAggregationInput[]
    by: VendorScalarFieldEnum[] | VendorScalarFieldEnum
    having?: VendorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VendorCountAggregateInputType | true
    _avg?: VendorAvgAggregateInputType
    _sum?: VendorSumAggregateInputType
    _min?: VendorMinAggregateInputType
    _max?: VendorMaxAggregateInputType
  }

  export type VendorGroupByOutputType = {
    vendor_id: number
    vendor_shop_name: string
    vendor_shop_address: string
    _count: VendorCountAggregateOutputType | null
    _avg: VendorAvgAggregateOutputType | null
    _sum: VendorSumAggregateOutputType | null
    _min: VendorMinAggregateOutputType | null
    _max: VendorMaxAggregateOutputType | null
  }

  type GetVendorGroupByPayload<T extends VendorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VendorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VendorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VendorGroupByOutputType[P]>
            : GetScalarType<T[P], VendorGroupByOutputType[P]>
        }
      >
    >


  export type VendorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    vendor_id?: boolean
    vendor_shop_name?: boolean
    vendor_shop_address?: boolean
  }, ExtArgs["result"]["vendor"]>

  export type VendorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    vendor_id?: boolean
    vendor_shop_name?: boolean
    vendor_shop_address?: boolean
  }, ExtArgs["result"]["vendor"]>

  export type VendorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    vendor_id?: boolean
    vendor_shop_name?: boolean
    vendor_shop_address?: boolean
  }, ExtArgs["result"]["vendor"]>

  export type VendorSelectScalar = {
    vendor_id?: boolean
    vendor_shop_name?: boolean
    vendor_shop_address?: boolean
  }

  export type VendorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"vendor_id" | "vendor_shop_name" | "vendor_shop_address", ExtArgs["result"]["vendor"]>

  export type $VendorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vendor"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      vendor_id: number
      vendor_shop_name: string
      vendor_shop_address: string
    }, ExtArgs["result"]["vendor"]>
    composites: {}
  }

  type VendorGetPayload<S extends boolean | null | undefined | VendorDefaultArgs> = $Result.GetResult<Prisma.$VendorPayload, S>

  type VendorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VendorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VendorCountAggregateInputType | true
    }

  export interface VendorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vendor'], meta: { name: 'Vendor' } }
    /**
     * Find zero or one Vendor that matches the filter.
     * @param {VendorFindUniqueArgs} args - Arguments to find a Vendor
     * @example
     * // Get one Vendor
     * const vendor = await prisma.vendor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VendorFindUniqueArgs>(args: SelectSubset<T, VendorFindUniqueArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vendor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VendorFindUniqueOrThrowArgs} args - Arguments to find a Vendor
     * @example
     * // Get one Vendor
     * const vendor = await prisma.vendor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VendorFindUniqueOrThrowArgs>(args: SelectSubset<T, VendorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vendor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorFindFirstArgs} args - Arguments to find a Vendor
     * @example
     * // Get one Vendor
     * const vendor = await prisma.vendor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VendorFindFirstArgs>(args?: SelectSubset<T, VendorFindFirstArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vendor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorFindFirstOrThrowArgs} args - Arguments to find a Vendor
     * @example
     * // Get one Vendor
     * const vendor = await prisma.vendor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VendorFindFirstOrThrowArgs>(args?: SelectSubset<T, VendorFindFirstOrThrowArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vendors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vendors
     * const vendors = await prisma.vendor.findMany()
     * 
     * // Get first 10 Vendors
     * const vendors = await prisma.vendor.findMany({ take: 10 })
     * 
     * // Only select the `vendor_id`
     * const vendorWithVendor_idOnly = await prisma.vendor.findMany({ select: { vendor_id: true } })
     * 
     */
    findMany<T extends VendorFindManyArgs>(args?: SelectSubset<T, VendorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vendor.
     * @param {VendorCreateArgs} args - Arguments to create a Vendor.
     * @example
     * // Create one Vendor
     * const Vendor = await prisma.vendor.create({
     *   data: {
     *     // ... data to create a Vendor
     *   }
     * })
     * 
     */
    create<T extends VendorCreateArgs>(args: SelectSubset<T, VendorCreateArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vendors.
     * @param {VendorCreateManyArgs} args - Arguments to create many Vendors.
     * @example
     * // Create many Vendors
     * const vendor = await prisma.vendor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VendorCreateManyArgs>(args?: SelectSubset<T, VendorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Vendors and returns the data saved in the database.
     * @param {VendorCreateManyAndReturnArgs} args - Arguments to create many Vendors.
     * @example
     * // Create many Vendors
     * const vendor = await prisma.vendor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Vendors and only return the `vendor_id`
     * const vendorWithVendor_idOnly = await prisma.vendor.createManyAndReturn({
     *   select: { vendor_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VendorCreateManyAndReturnArgs>(args?: SelectSubset<T, VendorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Vendor.
     * @param {VendorDeleteArgs} args - Arguments to delete one Vendor.
     * @example
     * // Delete one Vendor
     * const Vendor = await prisma.vendor.delete({
     *   where: {
     *     // ... filter to delete one Vendor
     *   }
     * })
     * 
     */
    delete<T extends VendorDeleteArgs>(args: SelectSubset<T, VendorDeleteArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vendor.
     * @param {VendorUpdateArgs} args - Arguments to update one Vendor.
     * @example
     * // Update one Vendor
     * const vendor = await prisma.vendor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VendorUpdateArgs>(args: SelectSubset<T, VendorUpdateArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vendors.
     * @param {VendorDeleteManyArgs} args - Arguments to filter Vendors to delete.
     * @example
     * // Delete a few Vendors
     * const { count } = await prisma.vendor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VendorDeleteManyArgs>(args?: SelectSubset<T, VendorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vendors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vendors
     * const vendor = await prisma.vendor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VendorUpdateManyArgs>(args: SelectSubset<T, VendorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vendors and returns the data updated in the database.
     * @param {VendorUpdateManyAndReturnArgs} args - Arguments to update many Vendors.
     * @example
     * // Update many Vendors
     * const vendor = await prisma.vendor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Vendors and only return the `vendor_id`
     * const vendorWithVendor_idOnly = await prisma.vendor.updateManyAndReturn({
     *   select: { vendor_id: true },
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
    updateManyAndReturn<T extends VendorUpdateManyAndReturnArgs>(args: SelectSubset<T, VendorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Vendor.
     * @param {VendorUpsertArgs} args - Arguments to update or create a Vendor.
     * @example
     * // Update or create a Vendor
     * const vendor = await prisma.vendor.upsert({
     *   create: {
     *     // ... data to create a Vendor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vendor we want to update
     *   }
     * })
     */
    upsert<T extends VendorUpsertArgs>(args: SelectSubset<T, VendorUpsertArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vendors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorCountArgs} args - Arguments to filter Vendors to count.
     * @example
     * // Count the number of Vendors
     * const count = await prisma.vendor.count({
     *   where: {
     *     // ... the filter for the Vendors we want to count
     *   }
     * })
    **/
    count<T extends VendorCountArgs>(
      args?: Subset<T, VendorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VendorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vendor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VendorAggregateArgs>(args: Subset<T, VendorAggregateArgs>): Prisma.PrismaPromise<GetVendorAggregateType<T>>

    /**
     * Group by Vendor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorGroupByArgs} args - Group by arguments.
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
      T extends VendorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VendorGroupByArgs['orderBy'] }
        : { orderBy?: VendorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VendorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVendorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vendor model
   */
  readonly fields: VendorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vendor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VendorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Vendor model
   */ 
  interface VendorFieldRefs {
    readonly vendor_id: FieldRef<"Vendor", 'Int'>
    readonly vendor_shop_name: FieldRef<"Vendor", 'String'>
    readonly vendor_shop_address: FieldRef<"Vendor", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Vendor findUnique
   */
  export type VendorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Filter, which Vendor to fetch.
     */
    where: VendorWhereUniqueInput
  }

  /**
   * Vendor findUniqueOrThrow
   */
  export type VendorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Filter, which Vendor to fetch.
     */
    where: VendorWhereUniqueInput
  }

  /**
   * Vendor findFirst
   */
  export type VendorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Filter, which Vendor to fetch.
     */
    where?: VendorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vendors to fetch.
     */
    orderBy?: VendorOrderByWithRelationInput | VendorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vendors.
     */
    cursor?: VendorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vendors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vendors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vendors.
     */
    distinct?: VendorScalarFieldEnum | VendorScalarFieldEnum[]
  }

  /**
   * Vendor findFirstOrThrow
   */
  export type VendorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Filter, which Vendor to fetch.
     */
    where?: VendorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vendors to fetch.
     */
    orderBy?: VendorOrderByWithRelationInput | VendorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vendors.
     */
    cursor?: VendorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vendors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vendors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vendors.
     */
    distinct?: VendorScalarFieldEnum | VendorScalarFieldEnum[]
  }

  /**
   * Vendor findMany
   */
  export type VendorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Filter, which Vendors to fetch.
     */
    where?: VendorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vendors to fetch.
     */
    orderBy?: VendorOrderByWithRelationInput | VendorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vendors.
     */
    cursor?: VendorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vendors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vendors.
     */
    skip?: number
    distinct?: VendorScalarFieldEnum | VendorScalarFieldEnum[]
  }

  /**
   * Vendor create
   */
  export type VendorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * The data needed to create a Vendor.
     */
    data: XOR<VendorCreateInput, VendorUncheckedCreateInput>
  }

  /**
   * Vendor createMany
   */
  export type VendorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vendors.
     */
    data: VendorCreateManyInput | VendorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vendor createManyAndReturn
   */
  export type VendorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * The data used to create many Vendors.
     */
    data: VendorCreateManyInput | VendorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vendor update
   */
  export type VendorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * The data needed to update a Vendor.
     */
    data: XOR<VendorUpdateInput, VendorUncheckedUpdateInput>
    /**
     * Choose, which Vendor to update.
     */
    where: VendorWhereUniqueInput
  }

  /**
   * Vendor updateMany
   */
  export type VendorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vendors.
     */
    data: XOR<VendorUpdateManyMutationInput, VendorUncheckedUpdateManyInput>
    /**
     * Filter which Vendors to update
     */
    where?: VendorWhereInput
    /**
     * Limit how many Vendors to update.
     */
    limit?: number
  }

  /**
   * Vendor updateManyAndReturn
   */
  export type VendorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * The data used to update Vendors.
     */
    data: XOR<VendorUpdateManyMutationInput, VendorUncheckedUpdateManyInput>
    /**
     * Filter which Vendors to update
     */
    where?: VendorWhereInput
    /**
     * Limit how many Vendors to update.
     */
    limit?: number
  }

  /**
   * Vendor upsert
   */
  export type VendorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * The filter to search for the Vendor to update in case it exists.
     */
    where: VendorWhereUniqueInput
    /**
     * In case the Vendor found by the `where` argument doesn't exist, create a new Vendor with this data.
     */
    create: XOR<VendorCreateInput, VendorUncheckedCreateInput>
    /**
     * In case the Vendor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VendorUpdateInput, VendorUncheckedUpdateInput>
  }

  /**
   * Vendor delete
   */
  export type VendorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Filter which Vendor to delete.
     */
    where: VendorWhereUniqueInput
  }

  /**
   * Vendor deleteMany
   */
  export type VendorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vendors to delete
     */
    where?: VendorWhereInput
    /**
     * Limit how many Vendors to delete.
     */
    limit?: number
  }

  /**
   * Vendor without action
   */
  export type VendorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    user_id: number | null
  }

  export type UserSumAggregateOutputType = {
    user_id: number | null
  }

  export type UserMinAggregateOutputType = {
    user_id: number | null
    email: string | null
    name: string | null
  }

  export type UserMaxAggregateOutputType = {
    user_id: number | null
    email: string | null
    name: string | null
  }

  export type UserCountAggregateOutputType = {
    user_id: number
    email: number
    name: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    user_id?: true
  }

  export type UserSumAggregateInputType = {
    user_id?: true
  }

  export type UserMinAggregateInputType = {
    user_id?: true
    email?: true
    name?: true
  }

  export type UserMaxAggregateInputType = {
    user_id?: true
    email?: true
    name?: true
  }

  export type UserCountAggregateInputType = {
    user_id?: true
    email?: true
    name?: true
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    user_id: number
    email: string
    name: string | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
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
    user_id?: boolean
    email?: boolean
    name?: boolean
    posts?: boolean | User$postsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    email?: boolean
    name?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    email?: boolean
    name?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    user_id?: boolean
    email?: boolean
    name?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "email" | "name", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | User$postsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      posts: Prisma.$PostPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: number
      email: string
      name: string | null
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
     * // Only select the `user_id`
     * const userWithUser_idOnly = await prisma.user.findMany({ select: { user_id: true } })
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
     * // Create many Users and only return the `user_id`
     * const userWithUser_idOnly = await prisma.user.createManyAndReturn({
     *   select: { user_id: true },
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
     * // Update zero or more Users and only return the `user_id`
     * const userWithUser_idOnly = await prisma.user.updateManyAndReturn({
     *   select: { user_id: true },
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
    posts<T extends User$postsArgs<ExtArgs> = {}>(args?: Subset<T, User$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly user_id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
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
   * User.posts
   */
  export type User$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
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
   * Model Post
   */

  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostAvgAggregateOutputType = {
    post_id: number | null
    authorId: number | null
  }

  export type PostSumAggregateOutputType = {
    post_id: number | null
    authorId: number | null
  }

  export type PostMinAggregateOutputType = {
    post_id: number | null
    title: string | null
    content: string | null
    published: boolean | null
    authorId: number | null
  }

  export type PostMaxAggregateOutputType = {
    post_id: number | null
    title: string | null
    content: string | null
    published: boolean | null
    authorId: number | null
  }

  export type PostCountAggregateOutputType = {
    post_id: number
    title: number
    content: number
    published: number
    authorId: number
    _all: number
  }


  export type PostAvgAggregateInputType = {
    post_id?: true
    authorId?: true
  }

  export type PostSumAggregateInputType = {
    post_id?: true
    authorId?: true
  }

  export type PostMinAggregateInputType = {
    post_id?: true
    title?: true
    content?: true
    published?: true
    authorId?: true
  }

  export type PostMaxAggregateInputType = {
    post_id?: true
    title?: true
    content?: true
    published?: true
    authorId?: true
  }

  export type PostCountAggregateInputType = {
    post_id?: true
    title?: true
    content?: true
    published?: true
    authorId?: true
    _all?: true
  }

  export type PostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Post to aggregate.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
    orderBy?: PostOrderByWithAggregationInput | PostOrderByWithAggregationInput[]
    by: PostScalarFieldEnum[] | PostScalarFieldEnum
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _avg?: PostAvgAggregateInputType
    _sum?: PostSumAggregateInputType
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }

  export type PostGroupByOutputType = {
    post_id: number
    title: string
    content: string | null
    published: boolean
    authorId: number
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type PostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    post_id?: boolean
    title?: boolean
    content?: boolean
    published?: boolean
    authorId?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    post_id?: boolean
    title?: boolean
    content?: boolean
    published?: boolean
    authorId?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    post_id?: boolean
    title?: boolean
    content?: boolean
    published?: boolean
    authorId?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectScalar = {
    post_id?: boolean
    title?: boolean
    content?: boolean
    published?: boolean
    authorId?: boolean
  }

  export type PostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"post_id" | "title" | "content" | "published" | "authorId", ExtArgs["result"]["post"]>
  export type PostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Post"
    objects: {
      author: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      post_id: number
      title: string
      content: string | null
      published: boolean
      authorId: number
    }, ExtArgs["result"]["post"]>
    composites: {}
  }

  type PostGetPayload<S extends boolean | null | undefined | PostDefaultArgs> = $Result.GetResult<Prisma.$PostPayload, S>

  type PostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostCountAggregateInputType | true
    }

  export interface PostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Post'], meta: { name: 'Post' } }
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostFindUniqueArgs>(args: SelectSubset<T, PostFindUniqueArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Post that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs>(args: SelectSubset<T, PostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostFindFirstArgs>(args?: SelectSubset<T, PostFindFirstArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs>(args?: SelectSubset<T, PostFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `post_id`
     * const postWithPost_idOnly = await prisma.post.findMany({ select: { post_id: true } })
     * 
     */
    findMany<T extends PostFindManyArgs>(args?: SelectSubset<T, PostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
     */
    create<T extends PostCreateArgs>(args: SelectSubset<T, PostCreateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posts.
     * @param {PostCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostCreateManyArgs>(args?: SelectSubset<T, PostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Posts and returns the data saved in the database.
     * @param {PostCreateManyAndReturnArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Posts and only return the `post_id`
     * const postWithPost_idOnly = await prisma.post.createManyAndReturn({
     *   select: { post_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostCreateManyAndReturnArgs>(args?: SelectSubset<T, PostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
     */
    delete<T extends PostDeleteArgs>(args: SelectSubset<T, PostDeleteArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostUpdateArgs>(args: SelectSubset<T, PostUpdateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostDeleteManyArgs>(args?: SelectSubset<T, PostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostUpdateManyArgs>(args: SelectSubset<T, PostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts and returns the data updated in the database.
     * @param {PostUpdateManyAndReturnArgs} args - Arguments to update many Posts.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Posts and only return the `post_id`
     * const postWithPost_idOnly = await prisma.post.updateManyAndReturn({
     *   select: { post_id: true },
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
    updateManyAndReturn<T extends PostUpdateManyAndReturnArgs>(args: SelectSubset<T, PostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
     */
    upsert<T extends PostUpsertArgs>(args: SelectSubset<T, PostUpsertArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): Prisma.PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
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
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Post model
   */
  readonly fields: PostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Post model
   */ 
  interface PostFieldRefs {
    readonly post_id: FieldRef<"Post", 'Int'>
    readonly title: FieldRef<"Post", 'String'>
    readonly content: FieldRef<"Post", 'String'>
    readonly published: FieldRef<"Post", 'Boolean'>
    readonly authorId: FieldRef<"Post", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findFirst
   */
  export type PostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findMany
   */
  export type PostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post create
   */
  export type PostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to create a Post.
     */
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
  }

  /**
   * Post createMany
   */
  export type PostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Post createManyAndReturn
   */
  export type PostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post update
   */
  export type PostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to update a Post.
     */
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
  }

  /**
   * Post updateManyAndReturn
   */
  export type PostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post upsert
   */
  export type PostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The filter to search for the Post to update in case it exists.
     */
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     */
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
  }

  /**
   * Post delete
   */
  export type PostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter which Post to delete.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to delete.
     */
    limit?: number
  }

  /**
   * Post without action
   */
  export type PostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
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


  export const VehiculeScalarFieldEnum: {
    vin: 'vin',
    local: 'local',
    registation: 'registation',
    registration_type: 'registration_type',
    location: 'location'
  };

  export type VehiculeScalarFieldEnum = (typeof VehiculeScalarFieldEnum)[keyof typeof VehiculeScalarFieldEnum]


  export const MechanicScalarFieldEnum: {
    mechanic_id: 'mechanic_id',
    pay_per_hour: 'pay_per_hour',
    diagnosticDiagnostic_id: 'diagnosticDiagnostic_id',
    repairRepair_id: 'repairRepair_id'
  };

  export type MechanicScalarFieldEnum = (typeof MechanicScalarFieldEnum)[keyof typeof MechanicScalarFieldEnum]


  export const HeadMechanicScalarFieldEnum: {
    mechanic_id: 'mechanic_id'
  };

  export type HeadMechanicScalarFieldEnum = (typeof HeadMechanicScalarFieldEnum)[keyof typeof HeadMechanicScalarFieldEnum]


  export const ReservationScalarFieldEnum: {
    reservation_id: 'reservation_id',
    mobile_phone: 'mobile_phone',
    date: 'date',
    base_fee: 'base_fee',
    repair_status: 'repair_status',
    vehicule_id: 'vehicule_id'
  };

  export type ReservationScalarFieldEnum = (typeof ReservationScalarFieldEnum)[keyof typeof ReservationScalarFieldEnum]


  export const DiagnosticScalarFieldEnum: {
    diagnostic_id: 'diagnostic_id',
    responsible_id: 'responsible_id',
    reservation_id: 'reservation_id'
  };

  export type DiagnosticScalarFieldEnum = (typeof DiagnosticScalarFieldEnum)[keyof typeof DiagnosticScalarFieldEnum]


  export const RepairScalarFieldEnum: {
    repair_id: 'repair_id',
    responsible_id: 'responsible_id',
    reservation_id: 'reservation_id',
    total_repair_hours: 'total_repair_hours'
  };

  export type RepairScalarFieldEnum = (typeof RepairScalarFieldEnum)[keyof typeof RepairScalarFieldEnum]


  export const RepairPartScalarFieldEnum: {
    part_id: 'part_id',
    price: 'price',
    repair_id: 'repair_id',
    vendor_id: 'vendor_id'
  };

  export type RepairPartScalarFieldEnum = (typeof RepairPartScalarFieldEnum)[keyof typeof RepairPartScalarFieldEnum]


  export const VendorScalarFieldEnum: {
    vendor_id: 'vendor_id',
    vendor_shop_name: 'vendor_shop_name',
    vendor_shop_address: 'vendor_shop_address'
  };

  export type VendorScalarFieldEnum = (typeof VendorScalarFieldEnum)[keyof typeof VendorScalarFieldEnum]


  export const UserScalarFieldEnum: {
    user_id: 'user_id',
    email: 'email',
    name: 'name'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PostScalarFieldEnum: {
    post_id: 'post_id',
    title: 'title',
    content: 'content',
    published: 'published',
    authorId: 'authorId'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'RegTypes'
   */
  export type EnumRegTypesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RegTypes'>
    


  /**
   * Reference to a field of type 'RegTypes[]'
   */
  export type ListEnumRegTypesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RegTypes[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'RepairStatus'
   */
  export type EnumRepairStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RepairStatus'>
    


  /**
   * Reference to a field of type 'RepairStatus[]'
   */
  export type ListEnumRepairStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RepairStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type VehiculeWhereInput = {
    AND?: VehiculeWhereInput | VehiculeWhereInput[]
    OR?: VehiculeWhereInput[]
    NOT?: VehiculeWhereInput | VehiculeWhereInput[]
    vin?: StringFilter<"Vehicule"> | string
    local?: BoolFilter<"Vehicule"> | boolean
    registation?: StringFilter<"Vehicule"> | string
    registration_type?: EnumRegTypesNullableFilter<"Vehicule"> | $Enums.RegTypes | null
    location?: StringNullableFilter<"Vehicule"> | string | null
    Reservation?: ReservationListRelationFilter
  }

  export type VehiculeOrderByWithRelationInput = {
    vin?: SortOrder
    local?: SortOrder
    registation?: SortOrder
    registration_type?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    Reservation?: ReservationOrderByRelationAggregateInput
  }

  export type VehiculeWhereUniqueInput = Prisma.AtLeast<{
    vin?: string
    AND?: VehiculeWhereInput | VehiculeWhereInput[]
    OR?: VehiculeWhereInput[]
    NOT?: VehiculeWhereInput | VehiculeWhereInput[]
    local?: BoolFilter<"Vehicule"> | boolean
    registation?: StringFilter<"Vehicule"> | string
    registration_type?: EnumRegTypesNullableFilter<"Vehicule"> | $Enums.RegTypes | null
    location?: StringNullableFilter<"Vehicule"> | string | null
    Reservation?: ReservationListRelationFilter
  }, "vin">

  export type VehiculeOrderByWithAggregationInput = {
    vin?: SortOrder
    local?: SortOrder
    registation?: SortOrder
    registration_type?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    _count?: VehiculeCountOrderByAggregateInput
    _max?: VehiculeMaxOrderByAggregateInput
    _min?: VehiculeMinOrderByAggregateInput
  }

  export type VehiculeScalarWhereWithAggregatesInput = {
    AND?: VehiculeScalarWhereWithAggregatesInput | VehiculeScalarWhereWithAggregatesInput[]
    OR?: VehiculeScalarWhereWithAggregatesInput[]
    NOT?: VehiculeScalarWhereWithAggregatesInput | VehiculeScalarWhereWithAggregatesInput[]
    vin?: StringWithAggregatesFilter<"Vehicule"> | string
    local?: BoolWithAggregatesFilter<"Vehicule"> | boolean
    registation?: StringWithAggregatesFilter<"Vehicule"> | string
    registration_type?: EnumRegTypesNullableWithAggregatesFilter<"Vehicule"> | $Enums.RegTypes | null
    location?: StringNullableWithAggregatesFilter<"Vehicule"> | string | null
  }

  export type MechanicWhereInput = {
    AND?: MechanicWhereInput | MechanicWhereInput[]
    OR?: MechanicWhereInput[]
    NOT?: MechanicWhereInput | MechanicWhereInput[]
    mechanic_id?: IntFilter<"Mechanic"> | number
    pay_per_hour?: FloatFilter<"Mechanic"> | number
    diagnosticDiagnostic_id?: IntNullableFilter<"Mechanic"> | number | null
    repairRepair_id?: IntNullableFilter<"Mechanic"> | number | null
    HeadMechanic?: XOR<HeadMechanicNullableScalarRelationFilter, HeadMechanicWhereInput> | null
    Diagnostic?: XOR<DiagnosticNullableScalarRelationFilter, DiagnosticWhereInput> | null
    Repair?: XOR<RepairNullableScalarRelationFilter, RepairWhereInput> | null
  }

  export type MechanicOrderByWithRelationInput = {
    mechanic_id?: SortOrder
    pay_per_hour?: SortOrder
    diagnosticDiagnostic_id?: SortOrderInput | SortOrder
    repairRepair_id?: SortOrderInput | SortOrder
    HeadMechanic?: HeadMechanicOrderByWithRelationInput
    Diagnostic?: DiagnosticOrderByWithRelationInput
    Repair?: RepairOrderByWithRelationInput
  }

  export type MechanicWhereUniqueInput = Prisma.AtLeast<{
    mechanic_id?: number
    AND?: MechanicWhereInput | MechanicWhereInput[]
    OR?: MechanicWhereInput[]
    NOT?: MechanicWhereInput | MechanicWhereInput[]
    pay_per_hour?: FloatFilter<"Mechanic"> | number
    diagnosticDiagnostic_id?: IntNullableFilter<"Mechanic"> | number | null
    repairRepair_id?: IntNullableFilter<"Mechanic"> | number | null
    HeadMechanic?: XOR<HeadMechanicNullableScalarRelationFilter, HeadMechanicWhereInput> | null
    Diagnostic?: XOR<DiagnosticNullableScalarRelationFilter, DiagnosticWhereInput> | null
    Repair?: XOR<RepairNullableScalarRelationFilter, RepairWhereInput> | null
  }, "mechanic_id">

  export type MechanicOrderByWithAggregationInput = {
    mechanic_id?: SortOrder
    pay_per_hour?: SortOrder
    diagnosticDiagnostic_id?: SortOrderInput | SortOrder
    repairRepair_id?: SortOrderInput | SortOrder
    _count?: MechanicCountOrderByAggregateInput
    _avg?: MechanicAvgOrderByAggregateInput
    _max?: MechanicMaxOrderByAggregateInput
    _min?: MechanicMinOrderByAggregateInput
    _sum?: MechanicSumOrderByAggregateInput
  }

  export type MechanicScalarWhereWithAggregatesInput = {
    AND?: MechanicScalarWhereWithAggregatesInput | MechanicScalarWhereWithAggregatesInput[]
    OR?: MechanicScalarWhereWithAggregatesInput[]
    NOT?: MechanicScalarWhereWithAggregatesInput | MechanicScalarWhereWithAggregatesInput[]
    mechanic_id?: IntWithAggregatesFilter<"Mechanic"> | number
    pay_per_hour?: FloatWithAggregatesFilter<"Mechanic"> | number
    diagnosticDiagnostic_id?: IntNullableWithAggregatesFilter<"Mechanic"> | number | null
    repairRepair_id?: IntNullableWithAggregatesFilter<"Mechanic"> | number | null
  }

  export type HeadMechanicWhereInput = {
    AND?: HeadMechanicWhereInput | HeadMechanicWhereInput[]
    OR?: HeadMechanicWhereInput[]
    NOT?: HeadMechanicWhereInput | HeadMechanicWhereInput[]
    mechanic_id?: IntFilter<"HeadMechanic"> | number
    mechanic?: XOR<MechanicScalarRelationFilter, MechanicWhereInput>
    Diagnostic?: DiagnosticListRelationFilter
    Repair?: RepairListRelationFilter
  }

  export type HeadMechanicOrderByWithRelationInput = {
    mechanic_id?: SortOrder
    mechanic?: MechanicOrderByWithRelationInput
    Diagnostic?: DiagnosticOrderByRelationAggregateInput
    Repair?: RepairOrderByRelationAggregateInput
  }

  export type HeadMechanicWhereUniqueInput = Prisma.AtLeast<{
    mechanic_id?: number
    AND?: HeadMechanicWhereInput | HeadMechanicWhereInput[]
    OR?: HeadMechanicWhereInput[]
    NOT?: HeadMechanicWhereInput | HeadMechanicWhereInput[]
    mechanic?: XOR<MechanicScalarRelationFilter, MechanicWhereInput>
    Diagnostic?: DiagnosticListRelationFilter
    Repair?: RepairListRelationFilter
  }, "mechanic_id">

  export type HeadMechanicOrderByWithAggregationInput = {
    mechanic_id?: SortOrder
    _count?: HeadMechanicCountOrderByAggregateInput
    _avg?: HeadMechanicAvgOrderByAggregateInput
    _max?: HeadMechanicMaxOrderByAggregateInput
    _min?: HeadMechanicMinOrderByAggregateInput
    _sum?: HeadMechanicSumOrderByAggregateInput
  }

  export type HeadMechanicScalarWhereWithAggregatesInput = {
    AND?: HeadMechanicScalarWhereWithAggregatesInput | HeadMechanicScalarWhereWithAggregatesInput[]
    OR?: HeadMechanicScalarWhereWithAggregatesInput[]
    NOT?: HeadMechanicScalarWhereWithAggregatesInput | HeadMechanicScalarWhereWithAggregatesInput[]
    mechanic_id?: IntWithAggregatesFilter<"HeadMechanic"> | number
  }

  export type ReservationWhereInput = {
    AND?: ReservationWhereInput | ReservationWhereInput[]
    OR?: ReservationWhereInput[]
    NOT?: ReservationWhereInput | ReservationWhereInput[]
    reservation_id?: IntFilter<"Reservation"> | number
    mobile_phone?: StringFilter<"Reservation"> | string
    date?: DateTimeFilter<"Reservation"> | Date | string
    base_fee?: FloatNullableFilter<"Reservation"> | number | null
    repair_status?: EnumRepairStatusNullableFilter<"Reservation"> | $Enums.RepairStatus | null
    vehicule_id?: StringFilter<"Reservation"> | string
    vehicule?: XOR<VehiculeScalarRelationFilter, VehiculeWhereInput>
    Diagnostic?: DiagnosticListRelationFilter
    Repair?: RepairListRelationFilter
  }

  export type ReservationOrderByWithRelationInput = {
    reservation_id?: SortOrder
    mobile_phone?: SortOrder
    date?: SortOrder
    base_fee?: SortOrderInput | SortOrder
    repair_status?: SortOrderInput | SortOrder
    vehicule_id?: SortOrder
    vehicule?: VehiculeOrderByWithRelationInput
    Diagnostic?: DiagnosticOrderByRelationAggregateInput
    Repair?: RepairOrderByRelationAggregateInput
  }

  export type ReservationWhereUniqueInput = Prisma.AtLeast<{
    reservation_id?: number
    AND?: ReservationWhereInput | ReservationWhereInput[]
    OR?: ReservationWhereInput[]
    NOT?: ReservationWhereInput | ReservationWhereInput[]
    mobile_phone?: StringFilter<"Reservation"> | string
    date?: DateTimeFilter<"Reservation"> | Date | string
    base_fee?: FloatNullableFilter<"Reservation"> | number | null
    repair_status?: EnumRepairStatusNullableFilter<"Reservation"> | $Enums.RepairStatus | null
    vehicule_id?: StringFilter<"Reservation"> | string
    vehicule?: XOR<VehiculeScalarRelationFilter, VehiculeWhereInput>
    Diagnostic?: DiagnosticListRelationFilter
    Repair?: RepairListRelationFilter
  }, "reservation_id">

  export type ReservationOrderByWithAggregationInput = {
    reservation_id?: SortOrder
    mobile_phone?: SortOrder
    date?: SortOrder
    base_fee?: SortOrderInput | SortOrder
    repair_status?: SortOrderInput | SortOrder
    vehicule_id?: SortOrder
    _count?: ReservationCountOrderByAggregateInput
    _avg?: ReservationAvgOrderByAggregateInput
    _max?: ReservationMaxOrderByAggregateInput
    _min?: ReservationMinOrderByAggregateInput
    _sum?: ReservationSumOrderByAggregateInput
  }

  export type ReservationScalarWhereWithAggregatesInput = {
    AND?: ReservationScalarWhereWithAggregatesInput | ReservationScalarWhereWithAggregatesInput[]
    OR?: ReservationScalarWhereWithAggregatesInput[]
    NOT?: ReservationScalarWhereWithAggregatesInput | ReservationScalarWhereWithAggregatesInput[]
    reservation_id?: IntWithAggregatesFilter<"Reservation"> | number
    mobile_phone?: StringWithAggregatesFilter<"Reservation"> | string
    date?: DateTimeWithAggregatesFilter<"Reservation"> | Date | string
    base_fee?: FloatNullableWithAggregatesFilter<"Reservation"> | number | null
    repair_status?: EnumRepairStatusNullableWithAggregatesFilter<"Reservation"> | $Enums.RepairStatus | null
    vehicule_id?: StringWithAggregatesFilter<"Reservation"> | string
  }

  export type DiagnosticWhereInput = {
    AND?: DiagnosticWhereInput | DiagnosticWhereInput[]
    OR?: DiagnosticWhereInput[]
    NOT?: DiagnosticWhereInput | DiagnosticWhereInput[]
    diagnostic_id?: IntFilter<"Diagnostic"> | number
    responsible_id?: IntFilter<"Diagnostic"> | number
    reservation_id?: IntFilter<"Diagnostic"> | number
    responsible?: XOR<HeadMechanicScalarRelationFilter, HeadMechanicWhereInput>
    workers_employed?: MechanicListRelationFilter
    reservation?: XOR<ReservationScalarRelationFilter, ReservationWhereInput>
  }

  export type DiagnosticOrderByWithRelationInput = {
    diagnostic_id?: SortOrder
    responsible_id?: SortOrder
    reservation_id?: SortOrder
    responsible?: HeadMechanicOrderByWithRelationInput
    workers_employed?: MechanicOrderByRelationAggregateInput
    reservation?: ReservationOrderByWithRelationInput
  }

  export type DiagnosticWhereUniqueInput = Prisma.AtLeast<{
    diagnostic_id?: number
    AND?: DiagnosticWhereInput | DiagnosticWhereInput[]
    OR?: DiagnosticWhereInput[]
    NOT?: DiagnosticWhereInput | DiagnosticWhereInput[]
    responsible_id?: IntFilter<"Diagnostic"> | number
    reservation_id?: IntFilter<"Diagnostic"> | number
    responsible?: XOR<HeadMechanicScalarRelationFilter, HeadMechanicWhereInput>
    workers_employed?: MechanicListRelationFilter
    reservation?: XOR<ReservationScalarRelationFilter, ReservationWhereInput>
  }, "diagnostic_id">

  export type DiagnosticOrderByWithAggregationInput = {
    diagnostic_id?: SortOrder
    responsible_id?: SortOrder
    reservation_id?: SortOrder
    _count?: DiagnosticCountOrderByAggregateInput
    _avg?: DiagnosticAvgOrderByAggregateInput
    _max?: DiagnosticMaxOrderByAggregateInput
    _min?: DiagnosticMinOrderByAggregateInput
    _sum?: DiagnosticSumOrderByAggregateInput
  }

  export type DiagnosticScalarWhereWithAggregatesInput = {
    AND?: DiagnosticScalarWhereWithAggregatesInput | DiagnosticScalarWhereWithAggregatesInput[]
    OR?: DiagnosticScalarWhereWithAggregatesInput[]
    NOT?: DiagnosticScalarWhereWithAggregatesInput | DiagnosticScalarWhereWithAggregatesInput[]
    diagnostic_id?: IntWithAggregatesFilter<"Diagnostic"> | number
    responsible_id?: IntWithAggregatesFilter<"Diagnostic"> | number
    reservation_id?: IntWithAggregatesFilter<"Diagnostic"> | number
  }

  export type RepairWhereInput = {
    AND?: RepairWhereInput | RepairWhereInput[]
    OR?: RepairWhereInput[]
    NOT?: RepairWhereInput | RepairWhereInput[]
    repair_id?: IntFilter<"Repair"> | number
    responsible_id?: IntFilter<"Repair"> | number
    reservation_id?: IntFilter<"Repair"> | number
    total_repair_hours?: IntFilter<"Repair"> | number
    responsible?: XOR<HeadMechanicScalarRelationFilter, HeadMechanicWhereInput>
    workers_employed?: MechanicListRelationFilter
    reservation?: XOR<ReservationScalarRelationFilter, ReservationWhereInput>
  }

  export type RepairOrderByWithRelationInput = {
    repair_id?: SortOrder
    responsible_id?: SortOrder
    reservation_id?: SortOrder
    total_repair_hours?: SortOrder
    responsible?: HeadMechanicOrderByWithRelationInput
    workers_employed?: MechanicOrderByRelationAggregateInput
    reservation?: ReservationOrderByWithRelationInput
  }

  export type RepairWhereUniqueInput = Prisma.AtLeast<{
    repair_id?: number
    AND?: RepairWhereInput | RepairWhereInput[]
    OR?: RepairWhereInput[]
    NOT?: RepairWhereInput | RepairWhereInput[]
    responsible_id?: IntFilter<"Repair"> | number
    reservation_id?: IntFilter<"Repair"> | number
    total_repair_hours?: IntFilter<"Repair"> | number
    responsible?: XOR<HeadMechanicScalarRelationFilter, HeadMechanicWhereInput>
    workers_employed?: MechanicListRelationFilter
    reservation?: XOR<ReservationScalarRelationFilter, ReservationWhereInput>
  }, "repair_id">

  export type RepairOrderByWithAggregationInput = {
    repair_id?: SortOrder
    responsible_id?: SortOrder
    reservation_id?: SortOrder
    total_repair_hours?: SortOrder
    _count?: RepairCountOrderByAggregateInput
    _avg?: RepairAvgOrderByAggregateInput
    _max?: RepairMaxOrderByAggregateInput
    _min?: RepairMinOrderByAggregateInput
    _sum?: RepairSumOrderByAggregateInput
  }

  export type RepairScalarWhereWithAggregatesInput = {
    AND?: RepairScalarWhereWithAggregatesInput | RepairScalarWhereWithAggregatesInput[]
    OR?: RepairScalarWhereWithAggregatesInput[]
    NOT?: RepairScalarWhereWithAggregatesInput | RepairScalarWhereWithAggregatesInput[]
    repair_id?: IntWithAggregatesFilter<"Repair"> | number
    responsible_id?: IntWithAggregatesFilter<"Repair"> | number
    reservation_id?: IntWithAggregatesFilter<"Repair"> | number
    total_repair_hours?: IntWithAggregatesFilter<"Repair"> | number
  }

  export type RepairPartWhereInput = {
    AND?: RepairPartWhereInput | RepairPartWhereInput[]
    OR?: RepairPartWhereInput[]
    NOT?: RepairPartWhereInput | RepairPartWhereInput[]
    part_id?: StringFilter<"RepairPart"> | string
    price?: FloatFilter<"RepairPart"> | number
    repair_id?: IntNullableListFilter<"RepairPart">
    vendor_id?: IntNullableListFilter<"RepairPart">
  }

  export type RepairPartOrderByWithRelationInput = {
    part_id?: SortOrder
    price?: SortOrder
    repair_id?: SortOrder
    vendor_id?: SortOrder
  }

  export type RepairPartWhereUniqueInput = Prisma.AtLeast<{
    part_id?: string
    AND?: RepairPartWhereInput | RepairPartWhereInput[]
    OR?: RepairPartWhereInput[]
    NOT?: RepairPartWhereInput | RepairPartWhereInput[]
    price?: FloatFilter<"RepairPart"> | number
    repair_id?: IntNullableListFilter<"RepairPart">
    vendor_id?: IntNullableListFilter<"RepairPart">
  }, "part_id">

  export type RepairPartOrderByWithAggregationInput = {
    part_id?: SortOrder
    price?: SortOrder
    repair_id?: SortOrder
    vendor_id?: SortOrder
    _count?: RepairPartCountOrderByAggregateInput
    _avg?: RepairPartAvgOrderByAggregateInput
    _max?: RepairPartMaxOrderByAggregateInput
    _min?: RepairPartMinOrderByAggregateInput
    _sum?: RepairPartSumOrderByAggregateInput
  }

  export type RepairPartScalarWhereWithAggregatesInput = {
    AND?: RepairPartScalarWhereWithAggregatesInput | RepairPartScalarWhereWithAggregatesInput[]
    OR?: RepairPartScalarWhereWithAggregatesInput[]
    NOT?: RepairPartScalarWhereWithAggregatesInput | RepairPartScalarWhereWithAggregatesInput[]
    part_id?: StringWithAggregatesFilter<"RepairPart"> | string
    price?: FloatWithAggregatesFilter<"RepairPart"> | number
    repair_id?: IntNullableListFilter<"RepairPart">
    vendor_id?: IntNullableListFilter<"RepairPart">
  }

  export type VendorWhereInput = {
    AND?: VendorWhereInput | VendorWhereInput[]
    OR?: VendorWhereInput[]
    NOT?: VendorWhereInput | VendorWhereInput[]
    vendor_id?: IntFilter<"Vendor"> | number
    vendor_shop_name?: StringFilter<"Vendor"> | string
    vendor_shop_address?: StringFilter<"Vendor"> | string
  }

  export type VendorOrderByWithRelationInput = {
    vendor_id?: SortOrder
    vendor_shop_name?: SortOrder
    vendor_shop_address?: SortOrder
  }

  export type VendorWhereUniqueInput = Prisma.AtLeast<{
    vendor_id?: number
    AND?: VendorWhereInput | VendorWhereInput[]
    OR?: VendorWhereInput[]
    NOT?: VendorWhereInput | VendorWhereInput[]
    vendor_shop_name?: StringFilter<"Vendor"> | string
    vendor_shop_address?: StringFilter<"Vendor"> | string
  }, "vendor_id">

  export type VendorOrderByWithAggregationInput = {
    vendor_id?: SortOrder
    vendor_shop_name?: SortOrder
    vendor_shop_address?: SortOrder
    _count?: VendorCountOrderByAggregateInput
    _avg?: VendorAvgOrderByAggregateInput
    _max?: VendorMaxOrderByAggregateInput
    _min?: VendorMinOrderByAggregateInput
    _sum?: VendorSumOrderByAggregateInput
  }

  export type VendorScalarWhereWithAggregatesInput = {
    AND?: VendorScalarWhereWithAggregatesInput | VendorScalarWhereWithAggregatesInput[]
    OR?: VendorScalarWhereWithAggregatesInput[]
    NOT?: VendorScalarWhereWithAggregatesInput | VendorScalarWhereWithAggregatesInput[]
    vendor_id?: IntWithAggregatesFilter<"Vendor"> | number
    vendor_shop_name?: StringWithAggregatesFilter<"Vendor"> | string
    vendor_shop_address?: StringWithAggregatesFilter<"Vendor"> | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    user_id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    posts?: PostListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    user_id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    posts?: PostOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    user_id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    posts?: PostListRelationFilter
  }, "user_id" | "email">

  export type UserOrderByWithAggregationInput = {
    user_id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    user_id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type PostWhereInput = {
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    post_id?: IntFilter<"Post"> | number
    title?: StringFilter<"Post"> | string
    content?: StringNullableFilter<"Post"> | string | null
    published?: BoolFilter<"Post"> | boolean
    authorId?: IntFilter<"Post"> | number
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PostOrderByWithRelationInput = {
    post_id?: SortOrder
    title?: SortOrder
    content?: SortOrderInput | SortOrder
    published?: SortOrder
    authorId?: SortOrder
    author?: UserOrderByWithRelationInput
  }

  export type PostWhereUniqueInput = Prisma.AtLeast<{
    post_id?: number
    title?: string
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    content?: StringNullableFilter<"Post"> | string | null
    published?: BoolFilter<"Post"> | boolean
    authorId?: IntFilter<"Post"> | number
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "post_id" | "title">

  export type PostOrderByWithAggregationInput = {
    post_id?: SortOrder
    title?: SortOrder
    content?: SortOrderInput | SortOrder
    published?: SortOrder
    authorId?: SortOrder
    _count?: PostCountOrderByAggregateInput
    _avg?: PostAvgOrderByAggregateInput
    _max?: PostMaxOrderByAggregateInput
    _min?: PostMinOrderByAggregateInput
    _sum?: PostSumOrderByAggregateInput
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    OR?: PostScalarWhereWithAggregatesInput[]
    NOT?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    post_id?: IntWithAggregatesFilter<"Post"> | number
    title?: StringWithAggregatesFilter<"Post"> | string
    content?: StringNullableWithAggregatesFilter<"Post"> | string | null
    published?: BoolWithAggregatesFilter<"Post"> | boolean
    authorId?: IntWithAggregatesFilter<"Post"> | number
  }

  export type VehiculeCreateInput = {
    vin: string
    local: boolean
    registation: string
    registration_type?: $Enums.RegTypes | null
    location?: string | null
    Reservation?: ReservationCreateNestedManyWithoutVehiculeInput
  }

  export type VehiculeUncheckedCreateInput = {
    vin: string
    local: boolean
    registation: string
    registration_type?: $Enums.RegTypes | null
    location?: string | null
    Reservation?: ReservationUncheckedCreateNestedManyWithoutVehiculeInput
  }

  export type VehiculeUpdateInput = {
    vin?: StringFieldUpdateOperationsInput | string
    local?: BoolFieldUpdateOperationsInput | boolean
    registation?: StringFieldUpdateOperationsInput | string
    registration_type?: NullableEnumRegTypesFieldUpdateOperationsInput | $Enums.RegTypes | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    Reservation?: ReservationUpdateManyWithoutVehiculeNestedInput
  }

  export type VehiculeUncheckedUpdateInput = {
    vin?: StringFieldUpdateOperationsInput | string
    local?: BoolFieldUpdateOperationsInput | boolean
    registation?: StringFieldUpdateOperationsInput | string
    registration_type?: NullableEnumRegTypesFieldUpdateOperationsInput | $Enums.RegTypes | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    Reservation?: ReservationUncheckedUpdateManyWithoutVehiculeNestedInput
  }

  export type VehiculeCreateManyInput = {
    vin: string
    local: boolean
    registation: string
    registration_type?: $Enums.RegTypes | null
    location?: string | null
  }

  export type VehiculeUpdateManyMutationInput = {
    vin?: StringFieldUpdateOperationsInput | string
    local?: BoolFieldUpdateOperationsInput | boolean
    registation?: StringFieldUpdateOperationsInput | string
    registration_type?: NullableEnumRegTypesFieldUpdateOperationsInput | $Enums.RegTypes | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VehiculeUncheckedUpdateManyInput = {
    vin?: StringFieldUpdateOperationsInput | string
    local?: BoolFieldUpdateOperationsInput | boolean
    registation?: StringFieldUpdateOperationsInput | string
    registration_type?: NullableEnumRegTypesFieldUpdateOperationsInput | $Enums.RegTypes | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MechanicCreateInput = {
    mechanic_id: number
    pay_per_hour: number
    HeadMechanic?: HeadMechanicCreateNestedOneWithoutMechanicInput
    Diagnostic?: DiagnosticCreateNestedOneWithoutWorkers_employedInput
    Repair?: RepairCreateNestedOneWithoutWorkers_employedInput
  }

  export type MechanicUncheckedCreateInput = {
    mechanic_id: number
    pay_per_hour: number
    diagnosticDiagnostic_id?: number | null
    repairRepair_id?: number | null
    HeadMechanic?: HeadMechanicUncheckedCreateNestedOneWithoutMechanicInput
  }

  export type MechanicUpdateInput = {
    mechanic_id?: IntFieldUpdateOperationsInput | number
    pay_per_hour?: FloatFieldUpdateOperationsInput | number
    HeadMechanic?: HeadMechanicUpdateOneWithoutMechanicNestedInput
    Diagnostic?: DiagnosticUpdateOneWithoutWorkers_employedNestedInput
    Repair?: RepairUpdateOneWithoutWorkers_employedNestedInput
  }

  export type MechanicUncheckedUpdateInput = {
    mechanic_id?: IntFieldUpdateOperationsInput | number
    pay_per_hour?: FloatFieldUpdateOperationsInput | number
    diagnosticDiagnostic_id?: NullableIntFieldUpdateOperationsInput | number | null
    repairRepair_id?: NullableIntFieldUpdateOperationsInput | number | null
    HeadMechanic?: HeadMechanicUncheckedUpdateOneWithoutMechanicNestedInput
  }

  export type MechanicCreateManyInput = {
    mechanic_id: number
    pay_per_hour: number
    diagnosticDiagnostic_id?: number | null
    repairRepair_id?: number | null
  }

  export type MechanicUpdateManyMutationInput = {
    mechanic_id?: IntFieldUpdateOperationsInput | number
    pay_per_hour?: FloatFieldUpdateOperationsInput | number
  }

  export type MechanicUncheckedUpdateManyInput = {
    mechanic_id?: IntFieldUpdateOperationsInput | number
    pay_per_hour?: FloatFieldUpdateOperationsInput | number
    diagnosticDiagnostic_id?: NullableIntFieldUpdateOperationsInput | number | null
    repairRepair_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type HeadMechanicCreateInput = {
    mechanic: MechanicCreateNestedOneWithoutHeadMechanicInput
    Diagnostic?: DiagnosticCreateNestedManyWithoutResponsibleInput
    Repair?: RepairCreateNestedManyWithoutResponsibleInput
  }

  export type HeadMechanicUncheckedCreateInput = {
    mechanic_id: number
    Diagnostic?: DiagnosticUncheckedCreateNestedManyWithoutResponsibleInput
    Repair?: RepairUncheckedCreateNestedManyWithoutResponsibleInput
  }

  export type HeadMechanicUpdateInput = {
    mechanic?: MechanicUpdateOneRequiredWithoutHeadMechanicNestedInput
    Diagnostic?: DiagnosticUpdateManyWithoutResponsibleNestedInput
    Repair?: RepairUpdateManyWithoutResponsibleNestedInput
  }

  export type HeadMechanicUncheckedUpdateInput = {
    mechanic_id?: IntFieldUpdateOperationsInput | number
    Diagnostic?: DiagnosticUncheckedUpdateManyWithoutResponsibleNestedInput
    Repair?: RepairUncheckedUpdateManyWithoutResponsibleNestedInput
  }

  export type HeadMechanicCreateManyInput = {
    mechanic_id: number
  }

  export type HeadMechanicUpdateManyMutationInput = {

  }

  export type HeadMechanicUncheckedUpdateManyInput = {
    mechanic_id?: IntFieldUpdateOperationsInput | number
  }

  export type ReservationCreateInput = {
    mobile_phone: string
    date: Date | string
    base_fee?: number | null
    repair_status?: $Enums.RepairStatus | null
    vehicule: VehiculeCreateNestedOneWithoutReservationInput
    Diagnostic?: DiagnosticCreateNestedManyWithoutReservationInput
    Repair?: RepairCreateNestedManyWithoutReservationInput
  }

  export type ReservationUncheckedCreateInput = {
    reservation_id?: number
    mobile_phone: string
    date: Date | string
    base_fee?: number | null
    repair_status?: $Enums.RepairStatus | null
    vehicule_id: string
    Diagnostic?: DiagnosticUncheckedCreateNestedManyWithoutReservationInput
    Repair?: RepairUncheckedCreateNestedManyWithoutReservationInput
  }

  export type ReservationUpdateInput = {
    mobile_phone?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    base_fee?: NullableFloatFieldUpdateOperationsInput | number | null
    repair_status?: NullableEnumRepairStatusFieldUpdateOperationsInput | $Enums.RepairStatus | null
    vehicule?: VehiculeUpdateOneRequiredWithoutReservationNestedInput
    Diagnostic?: DiagnosticUpdateManyWithoutReservationNestedInput
    Repair?: RepairUpdateManyWithoutReservationNestedInput
  }

  export type ReservationUncheckedUpdateInput = {
    reservation_id?: IntFieldUpdateOperationsInput | number
    mobile_phone?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    base_fee?: NullableFloatFieldUpdateOperationsInput | number | null
    repair_status?: NullableEnumRepairStatusFieldUpdateOperationsInput | $Enums.RepairStatus | null
    vehicule_id?: StringFieldUpdateOperationsInput | string
    Diagnostic?: DiagnosticUncheckedUpdateManyWithoutReservationNestedInput
    Repair?: RepairUncheckedUpdateManyWithoutReservationNestedInput
  }

  export type ReservationCreateManyInput = {
    reservation_id?: number
    mobile_phone: string
    date: Date | string
    base_fee?: number | null
    repair_status?: $Enums.RepairStatus | null
    vehicule_id: string
  }

  export type ReservationUpdateManyMutationInput = {
    mobile_phone?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    base_fee?: NullableFloatFieldUpdateOperationsInput | number | null
    repair_status?: NullableEnumRepairStatusFieldUpdateOperationsInput | $Enums.RepairStatus | null
  }

  export type ReservationUncheckedUpdateManyInput = {
    reservation_id?: IntFieldUpdateOperationsInput | number
    mobile_phone?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    base_fee?: NullableFloatFieldUpdateOperationsInput | number | null
    repair_status?: NullableEnumRepairStatusFieldUpdateOperationsInput | $Enums.RepairStatus | null
    vehicule_id?: StringFieldUpdateOperationsInput | string
  }

  export type DiagnosticCreateInput = {
    responsible: HeadMechanicCreateNestedOneWithoutDiagnosticInput
    workers_employed?: MechanicCreateNestedManyWithoutDiagnosticInput
    reservation: ReservationCreateNestedOneWithoutDiagnosticInput
  }

  export type DiagnosticUncheckedCreateInput = {
    diagnostic_id?: number
    responsible_id: number
    reservation_id: number
    workers_employed?: MechanicUncheckedCreateNestedManyWithoutDiagnosticInput
  }

  export type DiagnosticUpdateInput = {
    responsible?: HeadMechanicUpdateOneRequiredWithoutDiagnosticNestedInput
    workers_employed?: MechanicUpdateManyWithoutDiagnosticNestedInput
    reservation?: ReservationUpdateOneRequiredWithoutDiagnosticNestedInput
  }

  export type DiagnosticUncheckedUpdateInput = {
    diagnostic_id?: IntFieldUpdateOperationsInput | number
    responsible_id?: IntFieldUpdateOperationsInput | number
    reservation_id?: IntFieldUpdateOperationsInput | number
    workers_employed?: MechanicUncheckedUpdateManyWithoutDiagnosticNestedInput
  }

  export type DiagnosticCreateManyInput = {
    diagnostic_id?: number
    responsible_id: number
    reservation_id: number
  }

  export type DiagnosticUpdateManyMutationInput = {

  }

  export type DiagnosticUncheckedUpdateManyInput = {
    diagnostic_id?: IntFieldUpdateOperationsInput | number
    responsible_id?: IntFieldUpdateOperationsInput | number
    reservation_id?: IntFieldUpdateOperationsInput | number
  }

  export type RepairCreateInput = {
    total_repair_hours: number
    responsible: HeadMechanicCreateNestedOneWithoutRepairInput
    workers_employed?: MechanicCreateNestedManyWithoutRepairInput
    reservation: ReservationCreateNestedOneWithoutRepairInput
  }

  export type RepairUncheckedCreateInput = {
    repair_id?: number
    responsible_id: number
    reservation_id: number
    total_repair_hours: number
    workers_employed?: MechanicUncheckedCreateNestedManyWithoutRepairInput
  }

  export type RepairUpdateInput = {
    total_repair_hours?: IntFieldUpdateOperationsInput | number
    responsible?: HeadMechanicUpdateOneRequiredWithoutRepairNestedInput
    workers_employed?: MechanicUpdateManyWithoutRepairNestedInput
    reservation?: ReservationUpdateOneRequiredWithoutRepairNestedInput
  }

  export type RepairUncheckedUpdateInput = {
    repair_id?: IntFieldUpdateOperationsInput | number
    responsible_id?: IntFieldUpdateOperationsInput | number
    reservation_id?: IntFieldUpdateOperationsInput | number
    total_repair_hours?: IntFieldUpdateOperationsInput | number
    workers_employed?: MechanicUncheckedUpdateManyWithoutRepairNestedInput
  }

  export type RepairCreateManyInput = {
    repair_id?: number
    responsible_id: number
    reservation_id: number
    total_repair_hours: number
  }

  export type RepairUpdateManyMutationInput = {
    total_repair_hours?: IntFieldUpdateOperationsInput | number
  }

  export type RepairUncheckedUpdateManyInput = {
    repair_id?: IntFieldUpdateOperationsInput | number
    responsible_id?: IntFieldUpdateOperationsInput | number
    reservation_id?: IntFieldUpdateOperationsInput | number
    total_repair_hours?: IntFieldUpdateOperationsInput | number
  }

  export type RepairPartCreateInput = {
    part_id: string
    price: number
    repair_id?: RepairPartCreaterepair_idInput | number[]
    vendor_id?: RepairPartCreatevendor_idInput | number[]
  }

  export type RepairPartUncheckedCreateInput = {
    part_id: string
    price: number
    repair_id?: RepairPartCreaterepair_idInput | number[]
    vendor_id?: RepairPartCreatevendor_idInput | number[]
  }

  export type RepairPartUpdateInput = {
    part_id?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    repair_id?: RepairPartUpdaterepair_idInput | number[]
    vendor_id?: RepairPartUpdatevendor_idInput | number[]
  }

  export type RepairPartUncheckedUpdateInput = {
    part_id?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    repair_id?: RepairPartUpdaterepair_idInput | number[]
    vendor_id?: RepairPartUpdatevendor_idInput | number[]
  }

  export type RepairPartCreateManyInput = {
    part_id: string
    price: number
    repair_id?: RepairPartCreaterepair_idInput | number[]
    vendor_id?: RepairPartCreatevendor_idInput | number[]
  }

  export type RepairPartUpdateManyMutationInput = {
    part_id?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    repair_id?: RepairPartUpdaterepair_idInput | number[]
    vendor_id?: RepairPartUpdatevendor_idInput | number[]
  }

  export type RepairPartUncheckedUpdateManyInput = {
    part_id?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    repair_id?: RepairPartUpdaterepair_idInput | number[]
    vendor_id?: RepairPartUpdatevendor_idInput | number[]
  }

  export type VendorCreateInput = {
    vendor_id: number
    vendor_shop_name: string
    vendor_shop_address: string
  }

  export type VendorUncheckedCreateInput = {
    vendor_id: number
    vendor_shop_name: string
    vendor_shop_address: string
  }

  export type VendorUpdateInput = {
    vendor_id?: IntFieldUpdateOperationsInput | number
    vendor_shop_name?: StringFieldUpdateOperationsInput | string
    vendor_shop_address?: StringFieldUpdateOperationsInput | string
  }

  export type VendorUncheckedUpdateInput = {
    vendor_id?: IntFieldUpdateOperationsInput | number
    vendor_shop_name?: StringFieldUpdateOperationsInput | string
    vendor_shop_address?: StringFieldUpdateOperationsInput | string
  }

  export type VendorCreateManyInput = {
    vendor_id: number
    vendor_shop_name: string
    vendor_shop_address: string
  }

  export type VendorUpdateManyMutationInput = {
    vendor_id?: IntFieldUpdateOperationsInput | number
    vendor_shop_name?: StringFieldUpdateOperationsInput | string
    vendor_shop_address?: StringFieldUpdateOperationsInput | string
  }

  export type VendorUncheckedUpdateManyInput = {
    vendor_id?: IntFieldUpdateOperationsInput | number
    vendor_shop_name?: StringFieldUpdateOperationsInput | string
    vendor_shop_address?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateInput = {
    email: string
    name?: string | null
    posts?: PostCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateInput = {
    user_id?: number
    email: string
    name?: string | null
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: PostUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type UserCreateManyInput = {
    user_id?: number
    email: string
    name?: string | null
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PostCreateInput = {
    title: string
    content?: string | null
    published?: boolean
    author: UserCreateNestedOneWithoutPostsInput
  }

  export type PostUncheckedCreateInput = {
    post_id?: number
    title: string
    content?: string | null
    published?: boolean
    authorId: number
  }

  export type PostUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    author?: UserUpdateOneRequiredWithoutPostsNestedInput
  }

  export type PostUncheckedUpdateInput = {
    post_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    authorId?: IntFieldUpdateOperationsInput | number
  }

  export type PostCreateManyInput = {
    post_id?: number
    title: string
    content?: string | null
    published?: boolean
    authorId: number
  }

  export type PostUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PostUncheckedUpdateManyInput = {
    post_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    authorId?: IntFieldUpdateOperationsInput | number
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumRegTypesNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.RegTypes | EnumRegTypesFieldRefInput<$PrismaModel> | null
    in?: $Enums.RegTypes[] | ListEnumRegTypesFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.RegTypes[] | ListEnumRegTypesFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRegTypesNullableFilter<$PrismaModel> | $Enums.RegTypes | null
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

  export type ReservationListRelationFilter = {
    every?: ReservationWhereInput
    some?: ReservationWhereInput
    none?: ReservationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ReservationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VehiculeCountOrderByAggregateInput = {
    vin?: SortOrder
    local?: SortOrder
    registation?: SortOrder
    registration_type?: SortOrder
    location?: SortOrder
  }

  export type VehiculeMaxOrderByAggregateInput = {
    vin?: SortOrder
    local?: SortOrder
    registation?: SortOrder
    registration_type?: SortOrder
    location?: SortOrder
  }

  export type VehiculeMinOrderByAggregateInput = {
    vin?: SortOrder
    local?: SortOrder
    registation?: SortOrder
    registration_type?: SortOrder
    location?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumRegTypesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RegTypes | EnumRegTypesFieldRefInput<$PrismaModel> | null
    in?: $Enums.RegTypes[] | ListEnumRegTypesFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.RegTypes[] | ListEnumRegTypesFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRegTypesNullableWithAggregatesFilter<$PrismaModel> | $Enums.RegTypes | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumRegTypesNullableFilter<$PrismaModel>
    _max?: NestedEnumRegTypesNullableFilter<$PrismaModel>
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type HeadMechanicNullableScalarRelationFilter = {
    is?: HeadMechanicWhereInput | null
    isNot?: HeadMechanicWhereInput | null
  }

  export type DiagnosticNullableScalarRelationFilter = {
    is?: DiagnosticWhereInput | null
    isNot?: DiagnosticWhereInput | null
  }

  export type RepairNullableScalarRelationFilter = {
    is?: RepairWhereInput | null
    isNot?: RepairWhereInput | null
  }

  export type MechanicCountOrderByAggregateInput = {
    mechanic_id?: SortOrder
    pay_per_hour?: SortOrder
    diagnosticDiagnostic_id?: SortOrder
    repairRepair_id?: SortOrder
  }

  export type MechanicAvgOrderByAggregateInput = {
    mechanic_id?: SortOrder
    pay_per_hour?: SortOrder
    diagnosticDiagnostic_id?: SortOrder
    repairRepair_id?: SortOrder
  }

  export type MechanicMaxOrderByAggregateInput = {
    mechanic_id?: SortOrder
    pay_per_hour?: SortOrder
    diagnosticDiagnostic_id?: SortOrder
    repairRepair_id?: SortOrder
  }

  export type MechanicMinOrderByAggregateInput = {
    mechanic_id?: SortOrder
    pay_per_hour?: SortOrder
    diagnosticDiagnostic_id?: SortOrder
    repairRepair_id?: SortOrder
  }

  export type MechanicSumOrderByAggregateInput = {
    mechanic_id?: SortOrder
    pay_per_hour?: SortOrder
    diagnosticDiagnostic_id?: SortOrder
    repairRepair_id?: SortOrder
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

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type MechanicScalarRelationFilter = {
    is?: MechanicWhereInput
    isNot?: MechanicWhereInput
  }

  export type DiagnosticListRelationFilter = {
    every?: DiagnosticWhereInput
    some?: DiagnosticWhereInput
    none?: DiagnosticWhereInput
  }

  export type RepairListRelationFilter = {
    every?: RepairWhereInput
    some?: RepairWhereInput
    none?: RepairWhereInput
  }

  export type DiagnosticOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RepairOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HeadMechanicCountOrderByAggregateInput = {
    mechanic_id?: SortOrder
  }

  export type HeadMechanicAvgOrderByAggregateInput = {
    mechanic_id?: SortOrder
  }

  export type HeadMechanicMaxOrderByAggregateInput = {
    mechanic_id?: SortOrder
  }

  export type HeadMechanicMinOrderByAggregateInput = {
    mechanic_id?: SortOrder
  }

  export type HeadMechanicSumOrderByAggregateInput = {
    mechanic_id?: SortOrder
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

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type EnumRepairStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.RepairStatus | EnumRepairStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.RepairStatus[] | ListEnumRepairStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.RepairStatus[] | ListEnumRepairStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRepairStatusNullableFilter<$PrismaModel> | $Enums.RepairStatus | null
  }

  export type VehiculeScalarRelationFilter = {
    is?: VehiculeWhereInput
    isNot?: VehiculeWhereInput
  }

  export type ReservationCountOrderByAggregateInput = {
    reservation_id?: SortOrder
    mobile_phone?: SortOrder
    date?: SortOrder
    base_fee?: SortOrder
    repair_status?: SortOrder
    vehicule_id?: SortOrder
  }

  export type ReservationAvgOrderByAggregateInput = {
    reservation_id?: SortOrder
    base_fee?: SortOrder
  }

  export type ReservationMaxOrderByAggregateInput = {
    reservation_id?: SortOrder
    mobile_phone?: SortOrder
    date?: SortOrder
    base_fee?: SortOrder
    repair_status?: SortOrder
    vehicule_id?: SortOrder
  }

  export type ReservationMinOrderByAggregateInput = {
    reservation_id?: SortOrder
    mobile_phone?: SortOrder
    date?: SortOrder
    base_fee?: SortOrder
    repair_status?: SortOrder
    vehicule_id?: SortOrder
  }

  export type ReservationSumOrderByAggregateInput = {
    reservation_id?: SortOrder
    base_fee?: SortOrder
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

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type EnumRepairStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RepairStatus | EnumRepairStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.RepairStatus[] | ListEnumRepairStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.RepairStatus[] | ListEnumRepairStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRepairStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.RepairStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumRepairStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumRepairStatusNullableFilter<$PrismaModel>
  }

  export type HeadMechanicScalarRelationFilter = {
    is?: HeadMechanicWhereInput
    isNot?: HeadMechanicWhereInput
  }

  export type MechanicListRelationFilter = {
    every?: MechanicWhereInput
    some?: MechanicWhereInput
    none?: MechanicWhereInput
  }

  export type ReservationScalarRelationFilter = {
    is?: ReservationWhereInput
    isNot?: ReservationWhereInput
  }

  export type MechanicOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DiagnosticCountOrderByAggregateInput = {
    diagnostic_id?: SortOrder
    responsible_id?: SortOrder
    reservation_id?: SortOrder
  }

  export type DiagnosticAvgOrderByAggregateInput = {
    diagnostic_id?: SortOrder
    responsible_id?: SortOrder
    reservation_id?: SortOrder
  }

  export type DiagnosticMaxOrderByAggregateInput = {
    diagnostic_id?: SortOrder
    responsible_id?: SortOrder
    reservation_id?: SortOrder
  }

  export type DiagnosticMinOrderByAggregateInput = {
    diagnostic_id?: SortOrder
    responsible_id?: SortOrder
    reservation_id?: SortOrder
  }

  export type DiagnosticSumOrderByAggregateInput = {
    diagnostic_id?: SortOrder
    responsible_id?: SortOrder
    reservation_id?: SortOrder
  }

  export type RepairCountOrderByAggregateInput = {
    repair_id?: SortOrder
    responsible_id?: SortOrder
    reservation_id?: SortOrder
    total_repair_hours?: SortOrder
  }

  export type RepairAvgOrderByAggregateInput = {
    repair_id?: SortOrder
    responsible_id?: SortOrder
    reservation_id?: SortOrder
    total_repair_hours?: SortOrder
  }

  export type RepairMaxOrderByAggregateInput = {
    repair_id?: SortOrder
    responsible_id?: SortOrder
    reservation_id?: SortOrder
    total_repair_hours?: SortOrder
  }

  export type RepairMinOrderByAggregateInput = {
    repair_id?: SortOrder
    responsible_id?: SortOrder
    reservation_id?: SortOrder
    total_repair_hours?: SortOrder
  }

  export type RepairSumOrderByAggregateInput = {
    repair_id?: SortOrder
    responsible_id?: SortOrder
    reservation_id?: SortOrder
    total_repair_hours?: SortOrder
  }

  export type IntNullableListFilter<$PrismaModel = never> = {
    equals?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    has?: number | IntFieldRefInput<$PrismaModel> | null
    hasEvery?: number[] | ListIntFieldRefInput<$PrismaModel>
    hasSome?: number[] | ListIntFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type RepairPartCountOrderByAggregateInput = {
    part_id?: SortOrder
    price?: SortOrder
    repair_id?: SortOrder
    vendor_id?: SortOrder
  }

  export type RepairPartAvgOrderByAggregateInput = {
    price?: SortOrder
    repair_id?: SortOrder
    vendor_id?: SortOrder
  }

  export type RepairPartMaxOrderByAggregateInput = {
    part_id?: SortOrder
    price?: SortOrder
  }

  export type RepairPartMinOrderByAggregateInput = {
    part_id?: SortOrder
    price?: SortOrder
  }

  export type RepairPartSumOrderByAggregateInput = {
    price?: SortOrder
    repair_id?: SortOrder
    vendor_id?: SortOrder
  }

  export type VendorCountOrderByAggregateInput = {
    vendor_id?: SortOrder
    vendor_shop_name?: SortOrder
    vendor_shop_address?: SortOrder
  }

  export type VendorAvgOrderByAggregateInput = {
    vendor_id?: SortOrder
  }

  export type VendorMaxOrderByAggregateInput = {
    vendor_id?: SortOrder
    vendor_shop_name?: SortOrder
    vendor_shop_address?: SortOrder
  }

  export type VendorMinOrderByAggregateInput = {
    vendor_id?: SortOrder
    vendor_shop_name?: SortOrder
    vendor_shop_address?: SortOrder
  }

  export type VendorSumOrderByAggregateInput = {
    vendor_id?: SortOrder
  }

  export type PostListRelationFilter = {
    every?: PostWhereInput
    some?: PostWhereInput
    none?: PostWhereInput
  }

  export type PostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    user_id?: SortOrder
    email?: SortOrder
    name?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    user_id?: SortOrder
    email?: SortOrder
    name?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    user_id?: SortOrder
    email?: SortOrder
    name?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PostCountOrderByAggregateInput = {
    post_id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    published?: SortOrder
    authorId?: SortOrder
  }

  export type PostAvgOrderByAggregateInput = {
    post_id?: SortOrder
    authorId?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    post_id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    published?: SortOrder
    authorId?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    post_id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    published?: SortOrder
    authorId?: SortOrder
  }

  export type PostSumOrderByAggregateInput = {
    post_id?: SortOrder
    authorId?: SortOrder
  }

  export type ReservationCreateNestedManyWithoutVehiculeInput = {
    create?: XOR<ReservationCreateWithoutVehiculeInput, ReservationUncheckedCreateWithoutVehiculeInput> | ReservationCreateWithoutVehiculeInput[] | ReservationUncheckedCreateWithoutVehiculeInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutVehiculeInput | ReservationCreateOrConnectWithoutVehiculeInput[]
    createMany?: ReservationCreateManyVehiculeInputEnvelope
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
  }

  export type ReservationUncheckedCreateNestedManyWithoutVehiculeInput = {
    create?: XOR<ReservationCreateWithoutVehiculeInput, ReservationUncheckedCreateWithoutVehiculeInput> | ReservationCreateWithoutVehiculeInput[] | ReservationUncheckedCreateWithoutVehiculeInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutVehiculeInput | ReservationCreateOrConnectWithoutVehiculeInput[]
    createMany?: ReservationCreateManyVehiculeInputEnvelope
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableEnumRegTypesFieldUpdateOperationsInput = {
    set?: $Enums.RegTypes | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ReservationUpdateManyWithoutVehiculeNestedInput = {
    create?: XOR<ReservationCreateWithoutVehiculeInput, ReservationUncheckedCreateWithoutVehiculeInput> | ReservationCreateWithoutVehiculeInput[] | ReservationUncheckedCreateWithoutVehiculeInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutVehiculeInput | ReservationCreateOrConnectWithoutVehiculeInput[]
    upsert?: ReservationUpsertWithWhereUniqueWithoutVehiculeInput | ReservationUpsertWithWhereUniqueWithoutVehiculeInput[]
    createMany?: ReservationCreateManyVehiculeInputEnvelope
    set?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    disconnect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    delete?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    update?: ReservationUpdateWithWhereUniqueWithoutVehiculeInput | ReservationUpdateWithWhereUniqueWithoutVehiculeInput[]
    updateMany?: ReservationUpdateManyWithWhereWithoutVehiculeInput | ReservationUpdateManyWithWhereWithoutVehiculeInput[]
    deleteMany?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
  }

  export type ReservationUncheckedUpdateManyWithoutVehiculeNestedInput = {
    create?: XOR<ReservationCreateWithoutVehiculeInput, ReservationUncheckedCreateWithoutVehiculeInput> | ReservationCreateWithoutVehiculeInput[] | ReservationUncheckedCreateWithoutVehiculeInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutVehiculeInput | ReservationCreateOrConnectWithoutVehiculeInput[]
    upsert?: ReservationUpsertWithWhereUniqueWithoutVehiculeInput | ReservationUpsertWithWhereUniqueWithoutVehiculeInput[]
    createMany?: ReservationCreateManyVehiculeInputEnvelope
    set?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    disconnect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    delete?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    update?: ReservationUpdateWithWhereUniqueWithoutVehiculeInput | ReservationUpdateWithWhereUniqueWithoutVehiculeInput[]
    updateMany?: ReservationUpdateManyWithWhereWithoutVehiculeInput | ReservationUpdateManyWithWhereWithoutVehiculeInput[]
    deleteMany?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
  }

  export type HeadMechanicCreateNestedOneWithoutMechanicInput = {
    create?: XOR<HeadMechanicCreateWithoutMechanicInput, HeadMechanicUncheckedCreateWithoutMechanicInput>
    connectOrCreate?: HeadMechanicCreateOrConnectWithoutMechanicInput
    connect?: HeadMechanicWhereUniqueInput
  }

  export type DiagnosticCreateNestedOneWithoutWorkers_employedInput = {
    create?: XOR<DiagnosticCreateWithoutWorkers_employedInput, DiagnosticUncheckedCreateWithoutWorkers_employedInput>
    connectOrCreate?: DiagnosticCreateOrConnectWithoutWorkers_employedInput
    connect?: DiagnosticWhereUniqueInput
  }

  export type RepairCreateNestedOneWithoutWorkers_employedInput = {
    create?: XOR<RepairCreateWithoutWorkers_employedInput, RepairUncheckedCreateWithoutWorkers_employedInput>
    connectOrCreate?: RepairCreateOrConnectWithoutWorkers_employedInput
    connect?: RepairWhereUniqueInput
  }

  export type HeadMechanicUncheckedCreateNestedOneWithoutMechanicInput = {
    create?: XOR<HeadMechanicCreateWithoutMechanicInput, HeadMechanicUncheckedCreateWithoutMechanicInput>
    connectOrCreate?: HeadMechanicCreateOrConnectWithoutMechanicInput
    connect?: HeadMechanicWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type HeadMechanicUpdateOneWithoutMechanicNestedInput = {
    create?: XOR<HeadMechanicCreateWithoutMechanicInput, HeadMechanicUncheckedCreateWithoutMechanicInput>
    connectOrCreate?: HeadMechanicCreateOrConnectWithoutMechanicInput
    upsert?: HeadMechanicUpsertWithoutMechanicInput
    disconnect?: HeadMechanicWhereInput | boolean
    delete?: HeadMechanicWhereInput | boolean
    connect?: HeadMechanicWhereUniqueInput
    update?: XOR<XOR<HeadMechanicUpdateToOneWithWhereWithoutMechanicInput, HeadMechanicUpdateWithoutMechanicInput>, HeadMechanicUncheckedUpdateWithoutMechanicInput>
  }

  export type DiagnosticUpdateOneWithoutWorkers_employedNestedInput = {
    create?: XOR<DiagnosticCreateWithoutWorkers_employedInput, DiagnosticUncheckedCreateWithoutWorkers_employedInput>
    connectOrCreate?: DiagnosticCreateOrConnectWithoutWorkers_employedInput
    upsert?: DiagnosticUpsertWithoutWorkers_employedInput
    disconnect?: DiagnosticWhereInput | boolean
    delete?: DiagnosticWhereInput | boolean
    connect?: DiagnosticWhereUniqueInput
    update?: XOR<XOR<DiagnosticUpdateToOneWithWhereWithoutWorkers_employedInput, DiagnosticUpdateWithoutWorkers_employedInput>, DiagnosticUncheckedUpdateWithoutWorkers_employedInput>
  }

  export type RepairUpdateOneWithoutWorkers_employedNestedInput = {
    create?: XOR<RepairCreateWithoutWorkers_employedInput, RepairUncheckedCreateWithoutWorkers_employedInput>
    connectOrCreate?: RepairCreateOrConnectWithoutWorkers_employedInput
    upsert?: RepairUpsertWithoutWorkers_employedInput
    disconnect?: RepairWhereInput | boolean
    delete?: RepairWhereInput | boolean
    connect?: RepairWhereUniqueInput
    update?: XOR<XOR<RepairUpdateToOneWithWhereWithoutWorkers_employedInput, RepairUpdateWithoutWorkers_employedInput>, RepairUncheckedUpdateWithoutWorkers_employedInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type HeadMechanicUncheckedUpdateOneWithoutMechanicNestedInput = {
    create?: XOR<HeadMechanicCreateWithoutMechanicInput, HeadMechanicUncheckedCreateWithoutMechanicInput>
    connectOrCreate?: HeadMechanicCreateOrConnectWithoutMechanicInput
    upsert?: HeadMechanicUpsertWithoutMechanicInput
    disconnect?: HeadMechanicWhereInput | boolean
    delete?: HeadMechanicWhereInput | boolean
    connect?: HeadMechanicWhereUniqueInput
    update?: XOR<XOR<HeadMechanicUpdateToOneWithWhereWithoutMechanicInput, HeadMechanicUpdateWithoutMechanicInput>, HeadMechanicUncheckedUpdateWithoutMechanicInput>
  }

  export type MechanicCreateNestedOneWithoutHeadMechanicInput = {
    create?: XOR<MechanicCreateWithoutHeadMechanicInput, MechanicUncheckedCreateWithoutHeadMechanicInput>
    connectOrCreate?: MechanicCreateOrConnectWithoutHeadMechanicInput
    connect?: MechanicWhereUniqueInput
  }

  export type DiagnosticCreateNestedManyWithoutResponsibleInput = {
    create?: XOR<DiagnosticCreateWithoutResponsibleInput, DiagnosticUncheckedCreateWithoutResponsibleInput> | DiagnosticCreateWithoutResponsibleInput[] | DiagnosticUncheckedCreateWithoutResponsibleInput[]
    connectOrCreate?: DiagnosticCreateOrConnectWithoutResponsibleInput | DiagnosticCreateOrConnectWithoutResponsibleInput[]
    createMany?: DiagnosticCreateManyResponsibleInputEnvelope
    connect?: DiagnosticWhereUniqueInput | DiagnosticWhereUniqueInput[]
  }

  export type RepairCreateNestedManyWithoutResponsibleInput = {
    create?: XOR<RepairCreateWithoutResponsibleInput, RepairUncheckedCreateWithoutResponsibleInput> | RepairCreateWithoutResponsibleInput[] | RepairUncheckedCreateWithoutResponsibleInput[]
    connectOrCreate?: RepairCreateOrConnectWithoutResponsibleInput | RepairCreateOrConnectWithoutResponsibleInput[]
    createMany?: RepairCreateManyResponsibleInputEnvelope
    connect?: RepairWhereUniqueInput | RepairWhereUniqueInput[]
  }

  export type DiagnosticUncheckedCreateNestedManyWithoutResponsibleInput = {
    create?: XOR<DiagnosticCreateWithoutResponsibleInput, DiagnosticUncheckedCreateWithoutResponsibleInput> | DiagnosticCreateWithoutResponsibleInput[] | DiagnosticUncheckedCreateWithoutResponsibleInput[]
    connectOrCreate?: DiagnosticCreateOrConnectWithoutResponsibleInput | DiagnosticCreateOrConnectWithoutResponsibleInput[]
    createMany?: DiagnosticCreateManyResponsibleInputEnvelope
    connect?: DiagnosticWhereUniqueInput | DiagnosticWhereUniqueInput[]
  }

  export type RepairUncheckedCreateNestedManyWithoutResponsibleInput = {
    create?: XOR<RepairCreateWithoutResponsibleInput, RepairUncheckedCreateWithoutResponsibleInput> | RepairCreateWithoutResponsibleInput[] | RepairUncheckedCreateWithoutResponsibleInput[]
    connectOrCreate?: RepairCreateOrConnectWithoutResponsibleInput | RepairCreateOrConnectWithoutResponsibleInput[]
    createMany?: RepairCreateManyResponsibleInputEnvelope
    connect?: RepairWhereUniqueInput | RepairWhereUniqueInput[]
  }

  export type MechanicUpdateOneRequiredWithoutHeadMechanicNestedInput = {
    create?: XOR<MechanicCreateWithoutHeadMechanicInput, MechanicUncheckedCreateWithoutHeadMechanicInput>
    connectOrCreate?: MechanicCreateOrConnectWithoutHeadMechanicInput
    upsert?: MechanicUpsertWithoutHeadMechanicInput
    connect?: MechanicWhereUniqueInput
    update?: XOR<XOR<MechanicUpdateToOneWithWhereWithoutHeadMechanicInput, MechanicUpdateWithoutHeadMechanicInput>, MechanicUncheckedUpdateWithoutHeadMechanicInput>
  }

  export type DiagnosticUpdateManyWithoutResponsibleNestedInput = {
    create?: XOR<DiagnosticCreateWithoutResponsibleInput, DiagnosticUncheckedCreateWithoutResponsibleInput> | DiagnosticCreateWithoutResponsibleInput[] | DiagnosticUncheckedCreateWithoutResponsibleInput[]
    connectOrCreate?: DiagnosticCreateOrConnectWithoutResponsibleInput | DiagnosticCreateOrConnectWithoutResponsibleInput[]
    upsert?: DiagnosticUpsertWithWhereUniqueWithoutResponsibleInput | DiagnosticUpsertWithWhereUniqueWithoutResponsibleInput[]
    createMany?: DiagnosticCreateManyResponsibleInputEnvelope
    set?: DiagnosticWhereUniqueInput | DiagnosticWhereUniqueInput[]
    disconnect?: DiagnosticWhereUniqueInput | DiagnosticWhereUniqueInput[]
    delete?: DiagnosticWhereUniqueInput | DiagnosticWhereUniqueInput[]
    connect?: DiagnosticWhereUniqueInput | DiagnosticWhereUniqueInput[]
    update?: DiagnosticUpdateWithWhereUniqueWithoutResponsibleInput | DiagnosticUpdateWithWhereUniqueWithoutResponsibleInput[]
    updateMany?: DiagnosticUpdateManyWithWhereWithoutResponsibleInput | DiagnosticUpdateManyWithWhereWithoutResponsibleInput[]
    deleteMany?: DiagnosticScalarWhereInput | DiagnosticScalarWhereInput[]
  }

  export type RepairUpdateManyWithoutResponsibleNestedInput = {
    create?: XOR<RepairCreateWithoutResponsibleInput, RepairUncheckedCreateWithoutResponsibleInput> | RepairCreateWithoutResponsibleInput[] | RepairUncheckedCreateWithoutResponsibleInput[]
    connectOrCreate?: RepairCreateOrConnectWithoutResponsibleInput | RepairCreateOrConnectWithoutResponsibleInput[]
    upsert?: RepairUpsertWithWhereUniqueWithoutResponsibleInput | RepairUpsertWithWhereUniqueWithoutResponsibleInput[]
    createMany?: RepairCreateManyResponsibleInputEnvelope
    set?: RepairWhereUniqueInput | RepairWhereUniqueInput[]
    disconnect?: RepairWhereUniqueInput | RepairWhereUniqueInput[]
    delete?: RepairWhereUniqueInput | RepairWhereUniqueInput[]
    connect?: RepairWhereUniqueInput | RepairWhereUniqueInput[]
    update?: RepairUpdateWithWhereUniqueWithoutResponsibleInput | RepairUpdateWithWhereUniqueWithoutResponsibleInput[]
    updateMany?: RepairUpdateManyWithWhereWithoutResponsibleInput | RepairUpdateManyWithWhereWithoutResponsibleInput[]
    deleteMany?: RepairScalarWhereInput | RepairScalarWhereInput[]
  }

  export type DiagnosticUncheckedUpdateManyWithoutResponsibleNestedInput = {
    create?: XOR<DiagnosticCreateWithoutResponsibleInput, DiagnosticUncheckedCreateWithoutResponsibleInput> | DiagnosticCreateWithoutResponsibleInput[] | DiagnosticUncheckedCreateWithoutResponsibleInput[]
    connectOrCreate?: DiagnosticCreateOrConnectWithoutResponsibleInput | DiagnosticCreateOrConnectWithoutResponsibleInput[]
    upsert?: DiagnosticUpsertWithWhereUniqueWithoutResponsibleInput | DiagnosticUpsertWithWhereUniqueWithoutResponsibleInput[]
    createMany?: DiagnosticCreateManyResponsibleInputEnvelope
    set?: DiagnosticWhereUniqueInput | DiagnosticWhereUniqueInput[]
    disconnect?: DiagnosticWhereUniqueInput | DiagnosticWhereUniqueInput[]
    delete?: DiagnosticWhereUniqueInput | DiagnosticWhereUniqueInput[]
    connect?: DiagnosticWhereUniqueInput | DiagnosticWhereUniqueInput[]
    update?: DiagnosticUpdateWithWhereUniqueWithoutResponsibleInput | DiagnosticUpdateWithWhereUniqueWithoutResponsibleInput[]
    updateMany?: DiagnosticUpdateManyWithWhereWithoutResponsibleInput | DiagnosticUpdateManyWithWhereWithoutResponsibleInput[]
    deleteMany?: DiagnosticScalarWhereInput | DiagnosticScalarWhereInput[]
  }

  export type RepairUncheckedUpdateManyWithoutResponsibleNestedInput = {
    create?: XOR<RepairCreateWithoutResponsibleInput, RepairUncheckedCreateWithoutResponsibleInput> | RepairCreateWithoutResponsibleInput[] | RepairUncheckedCreateWithoutResponsibleInput[]
    connectOrCreate?: RepairCreateOrConnectWithoutResponsibleInput | RepairCreateOrConnectWithoutResponsibleInput[]
    upsert?: RepairUpsertWithWhereUniqueWithoutResponsibleInput | RepairUpsertWithWhereUniqueWithoutResponsibleInput[]
    createMany?: RepairCreateManyResponsibleInputEnvelope
    set?: RepairWhereUniqueInput | RepairWhereUniqueInput[]
    disconnect?: RepairWhereUniqueInput | RepairWhereUniqueInput[]
    delete?: RepairWhereUniqueInput | RepairWhereUniqueInput[]
    connect?: RepairWhereUniqueInput | RepairWhereUniqueInput[]
    update?: RepairUpdateWithWhereUniqueWithoutResponsibleInput | RepairUpdateWithWhereUniqueWithoutResponsibleInput[]
    updateMany?: RepairUpdateManyWithWhereWithoutResponsibleInput | RepairUpdateManyWithWhereWithoutResponsibleInput[]
    deleteMany?: RepairScalarWhereInput | RepairScalarWhereInput[]
  }

  export type VehiculeCreateNestedOneWithoutReservationInput = {
    create?: XOR<VehiculeCreateWithoutReservationInput, VehiculeUncheckedCreateWithoutReservationInput>
    connectOrCreate?: VehiculeCreateOrConnectWithoutReservationInput
    connect?: VehiculeWhereUniqueInput
  }

  export type DiagnosticCreateNestedManyWithoutReservationInput = {
    create?: XOR<DiagnosticCreateWithoutReservationInput, DiagnosticUncheckedCreateWithoutReservationInput> | DiagnosticCreateWithoutReservationInput[] | DiagnosticUncheckedCreateWithoutReservationInput[]
    connectOrCreate?: DiagnosticCreateOrConnectWithoutReservationInput | DiagnosticCreateOrConnectWithoutReservationInput[]
    createMany?: DiagnosticCreateManyReservationInputEnvelope
    connect?: DiagnosticWhereUniqueInput | DiagnosticWhereUniqueInput[]
  }

  export type RepairCreateNestedManyWithoutReservationInput = {
    create?: XOR<RepairCreateWithoutReservationInput, RepairUncheckedCreateWithoutReservationInput> | RepairCreateWithoutReservationInput[] | RepairUncheckedCreateWithoutReservationInput[]
    connectOrCreate?: RepairCreateOrConnectWithoutReservationInput | RepairCreateOrConnectWithoutReservationInput[]
    createMany?: RepairCreateManyReservationInputEnvelope
    connect?: RepairWhereUniqueInput | RepairWhereUniqueInput[]
  }

  export type DiagnosticUncheckedCreateNestedManyWithoutReservationInput = {
    create?: XOR<DiagnosticCreateWithoutReservationInput, DiagnosticUncheckedCreateWithoutReservationInput> | DiagnosticCreateWithoutReservationInput[] | DiagnosticUncheckedCreateWithoutReservationInput[]
    connectOrCreate?: DiagnosticCreateOrConnectWithoutReservationInput | DiagnosticCreateOrConnectWithoutReservationInput[]
    createMany?: DiagnosticCreateManyReservationInputEnvelope
    connect?: DiagnosticWhereUniqueInput | DiagnosticWhereUniqueInput[]
  }

  export type RepairUncheckedCreateNestedManyWithoutReservationInput = {
    create?: XOR<RepairCreateWithoutReservationInput, RepairUncheckedCreateWithoutReservationInput> | RepairCreateWithoutReservationInput[] | RepairUncheckedCreateWithoutReservationInput[]
    connectOrCreate?: RepairCreateOrConnectWithoutReservationInput | RepairCreateOrConnectWithoutReservationInput[]
    createMany?: RepairCreateManyReservationInputEnvelope
    connect?: RepairWhereUniqueInput | RepairWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableEnumRepairStatusFieldUpdateOperationsInput = {
    set?: $Enums.RepairStatus | null
  }

  export type VehiculeUpdateOneRequiredWithoutReservationNestedInput = {
    create?: XOR<VehiculeCreateWithoutReservationInput, VehiculeUncheckedCreateWithoutReservationInput>
    connectOrCreate?: VehiculeCreateOrConnectWithoutReservationInput
    upsert?: VehiculeUpsertWithoutReservationInput
    connect?: VehiculeWhereUniqueInput
    update?: XOR<XOR<VehiculeUpdateToOneWithWhereWithoutReservationInput, VehiculeUpdateWithoutReservationInput>, VehiculeUncheckedUpdateWithoutReservationInput>
  }

  export type DiagnosticUpdateManyWithoutReservationNestedInput = {
    create?: XOR<DiagnosticCreateWithoutReservationInput, DiagnosticUncheckedCreateWithoutReservationInput> | DiagnosticCreateWithoutReservationInput[] | DiagnosticUncheckedCreateWithoutReservationInput[]
    connectOrCreate?: DiagnosticCreateOrConnectWithoutReservationInput | DiagnosticCreateOrConnectWithoutReservationInput[]
    upsert?: DiagnosticUpsertWithWhereUniqueWithoutReservationInput | DiagnosticUpsertWithWhereUniqueWithoutReservationInput[]
    createMany?: DiagnosticCreateManyReservationInputEnvelope
    set?: DiagnosticWhereUniqueInput | DiagnosticWhereUniqueInput[]
    disconnect?: DiagnosticWhereUniqueInput | DiagnosticWhereUniqueInput[]
    delete?: DiagnosticWhereUniqueInput | DiagnosticWhereUniqueInput[]
    connect?: DiagnosticWhereUniqueInput | DiagnosticWhereUniqueInput[]
    update?: DiagnosticUpdateWithWhereUniqueWithoutReservationInput | DiagnosticUpdateWithWhereUniqueWithoutReservationInput[]
    updateMany?: DiagnosticUpdateManyWithWhereWithoutReservationInput | DiagnosticUpdateManyWithWhereWithoutReservationInput[]
    deleteMany?: DiagnosticScalarWhereInput | DiagnosticScalarWhereInput[]
  }

  export type RepairUpdateManyWithoutReservationNestedInput = {
    create?: XOR<RepairCreateWithoutReservationInput, RepairUncheckedCreateWithoutReservationInput> | RepairCreateWithoutReservationInput[] | RepairUncheckedCreateWithoutReservationInput[]
    connectOrCreate?: RepairCreateOrConnectWithoutReservationInput | RepairCreateOrConnectWithoutReservationInput[]
    upsert?: RepairUpsertWithWhereUniqueWithoutReservationInput | RepairUpsertWithWhereUniqueWithoutReservationInput[]
    createMany?: RepairCreateManyReservationInputEnvelope
    set?: RepairWhereUniqueInput | RepairWhereUniqueInput[]
    disconnect?: RepairWhereUniqueInput | RepairWhereUniqueInput[]
    delete?: RepairWhereUniqueInput | RepairWhereUniqueInput[]
    connect?: RepairWhereUniqueInput | RepairWhereUniqueInput[]
    update?: RepairUpdateWithWhereUniqueWithoutReservationInput | RepairUpdateWithWhereUniqueWithoutReservationInput[]
    updateMany?: RepairUpdateManyWithWhereWithoutReservationInput | RepairUpdateManyWithWhereWithoutReservationInput[]
    deleteMany?: RepairScalarWhereInput | RepairScalarWhereInput[]
  }

  export type DiagnosticUncheckedUpdateManyWithoutReservationNestedInput = {
    create?: XOR<DiagnosticCreateWithoutReservationInput, DiagnosticUncheckedCreateWithoutReservationInput> | DiagnosticCreateWithoutReservationInput[] | DiagnosticUncheckedCreateWithoutReservationInput[]
    connectOrCreate?: DiagnosticCreateOrConnectWithoutReservationInput | DiagnosticCreateOrConnectWithoutReservationInput[]
    upsert?: DiagnosticUpsertWithWhereUniqueWithoutReservationInput | DiagnosticUpsertWithWhereUniqueWithoutReservationInput[]
    createMany?: DiagnosticCreateManyReservationInputEnvelope
    set?: DiagnosticWhereUniqueInput | DiagnosticWhereUniqueInput[]
    disconnect?: DiagnosticWhereUniqueInput | DiagnosticWhereUniqueInput[]
    delete?: DiagnosticWhereUniqueInput | DiagnosticWhereUniqueInput[]
    connect?: DiagnosticWhereUniqueInput | DiagnosticWhereUniqueInput[]
    update?: DiagnosticUpdateWithWhereUniqueWithoutReservationInput | DiagnosticUpdateWithWhereUniqueWithoutReservationInput[]
    updateMany?: DiagnosticUpdateManyWithWhereWithoutReservationInput | DiagnosticUpdateManyWithWhereWithoutReservationInput[]
    deleteMany?: DiagnosticScalarWhereInput | DiagnosticScalarWhereInput[]
  }

  export type RepairUncheckedUpdateManyWithoutReservationNestedInput = {
    create?: XOR<RepairCreateWithoutReservationInput, RepairUncheckedCreateWithoutReservationInput> | RepairCreateWithoutReservationInput[] | RepairUncheckedCreateWithoutReservationInput[]
    connectOrCreate?: RepairCreateOrConnectWithoutReservationInput | RepairCreateOrConnectWithoutReservationInput[]
    upsert?: RepairUpsertWithWhereUniqueWithoutReservationInput | RepairUpsertWithWhereUniqueWithoutReservationInput[]
    createMany?: RepairCreateManyReservationInputEnvelope
    set?: RepairWhereUniqueInput | RepairWhereUniqueInput[]
    disconnect?: RepairWhereUniqueInput | RepairWhereUniqueInput[]
    delete?: RepairWhereUniqueInput | RepairWhereUniqueInput[]
    connect?: RepairWhereUniqueInput | RepairWhereUniqueInput[]
    update?: RepairUpdateWithWhereUniqueWithoutReservationInput | RepairUpdateWithWhereUniqueWithoutReservationInput[]
    updateMany?: RepairUpdateManyWithWhereWithoutReservationInput | RepairUpdateManyWithWhereWithoutReservationInput[]
    deleteMany?: RepairScalarWhereInput | RepairScalarWhereInput[]
  }

  export type HeadMechanicCreateNestedOneWithoutDiagnosticInput = {
    create?: XOR<HeadMechanicCreateWithoutDiagnosticInput, HeadMechanicUncheckedCreateWithoutDiagnosticInput>
    connectOrCreate?: HeadMechanicCreateOrConnectWithoutDiagnosticInput
    connect?: HeadMechanicWhereUniqueInput
  }

  export type MechanicCreateNestedManyWithoutDiagnosticInput = {
    create?: XOR<MechanicCreateWithoutDiagnosticInput, MechanicUncheckedCreateWithoutDiagnosticInput> | MechanicCreateWithoutDiagnosticInput[] | MechanicUncheckedCreateWithoutDiagnosticInput[]
    connectOrCreate?: MechanicCreateOrConnectWithoutDiagnosticInput | MechanicCreateOrConnectWithoutDiagnosticInput[]
    createMany?: MechanicCreateManyDiagnosticInputEnvelope
    connect?: MechanicWhereUniqueInput | MechanicWhereUniqueInput[]
  }

  export type ReservationCreateNestedOneWithoutDiagnosticInput = {
    create?: XOR<ReservationCreateWithoutDiagnosticInput, ReservationUncheckedCreateWithoutDiagnosticInput>
    connectOrCreate?: ReservationCreateOrConnectWithoutDiagnosticInput
    connect?: ReservationWhereUniqueInput
  }

  export type MechanicUncheckedCreateNestedManyWithoutDiagnosticInput = {
    create?: XOR<MechanicCreateWithoutDiagnosticInput, MechanicUncheckedCreateWithoutDiagnosticInput> | MechanicCreateWithoutDiagnosticInput[] | MechanicUncheckedCreateWithoutDiagnosticInput[]
    connectOrCreate?: MechanicCreateOrConnectWithoutDiagnosticInput | MechanicCreateOrConnectWithoutDiagnosticInput[]
    createMany?: MechanicCreateManyDiagnosticInputEnvelope
    connect?: MechanicWhereUniqueInput | MechanicWhereUniqueInput[]
  }

  export type HeadMechanicUpdateOneRequiredWithoutDiagnosticNestedInput = {
    create?: XOR<HeadMechanicCreateWithoutDiagnosticInput, HeadMechanicUncheckedCreateWithoutDiagnosticInput>
    connectOrCreate?: HeadMechanicCreateOrConnectWithoutDiagnosticInput
    upsert?: HeadMechanicUpsertWithoutDiagnosticInput
    connect?: HeadMechanicWhereUniqueInput
    update?: XOR<XOR<HeadMechanicUpdateToOneWithWhereWithoutDiagnosticInput, HeadMechanicUpdateWithoutDiagnosticInput>, HeadMechanicUncheckedUpdateWithoutDiagnosticInput>
  }

  export type MechanicUpdateManyWithoutDiagnosticNestedInput = {
    create?: XOR<MechanicCreateWithoutDiagnosticInput, MechanicUncheckedCreateWithoutDiagnosticInput> | MechanicCreateWithoutDiagnosticInput[] | MechanicUncheckedCreateWithoutDiagnosticInput[]
    connectOrCreate?: MechanicCreateOrConnectWithoutDiagnosticInput | MechanicCreateOrConnectWithoutDiagnosticInput[]
    upsert?: MechanicUpsertWithWhereUniqueWithoutDiagnosticInput | MechanicUpsertWithWhereUniqueWithoutDiagnosticInput[]
    createMany?: MechanicCreateManyDiagnosticInputEnvelope
    set?: MechanicWhereUniqueInput | MechanicWhereUniqueInput[]
    disconnect?: MechanicWhereUniqueInput | MechanicWhereUniqueInput[]
    delete?: MechanicWhereUniqueInput | MechanicWhereUniqueInput[]
    connect?: MechanicWhereUniqueInput | MechanicWhereUniqueInput[]
    update?: MechanicUpdateWithWhereUniqueWithoutDiagnosticInput | MechanicUpdateWithWhereUniqueWithoutDiagnosticInput[]
    updateMany?: MechanicUpdateManyWithWhereWithoutDiagnosticInput | MechanicUpdateManyWithWhereWithoutDiagnosticInput[]
    deleteMany?: MechanicScalarWhereInput | MechanicScalarWhereInput[]
  }

  export type ReservationUpdateOneRequiredWithoutDiagnosticNestedInput = {
    create?: XOR<ReservationCreateWithoutDiagnosticInput, ReservationUncheckedCreateWithoutDiagnosticInput>
    connectOrCreate?: ReservationCreateOrConnectWithoutDiagnosticInput
    upsert?: ReservationUpsertWithoutDiagnosticInput
    connect?: ReservationWhereUniqueInput
    update?: XOR<XOR<ReservationUpdateToOneWithWhereWithoutDiagnosticInput, ReservationUpdateWithoutDiagnosticInput>, ReservationUncheckedUpdateWithoutDiagnosticInput>
  }

  export type MechanicUncheckedUpdateManyWithoutDiagnosticNestedInput = {
    create?: XOR<MechanicCreateWithoutDiagnosticInput, MechanicUncheckedCreateWithoutDiagnosticInput> | MechanicCreateWithoutDiagnosticInput[] | MechanicUncheckedCreateWithoutDiagnosticInput[]
    connectOrCreate?: MechanicCreateOrConnectWithoutDiagnosticInput | MechanicCreateOrConnectWithoutDiagnosticInput[]
    upsert?: MechanicUpsertWithWhereUniqueWithoutDiagnosticInput | MechanicUpsertWithWhereUniqueWithoutDiagnosticInput[]
    createMany?: MechanicCreateManyDiagnosticInputEnvelope
    set?: MechanicWhereUniqueInput | MechanicWhereUniqueInput[]
    disconnect?: MechanicWhereUniqueInput | MechanicWhereUniqueInput[]
    delete?: MechanicWhereUniqueInput | MechanicWhereUniqueInput[]
    connect?: MechanicWhereUniqueInput | MechanicWhereUniqueInput[]
    update?: MechanicUpdateWithWhereUniqueWithoutDiagnosticInput | MechanicUpdateWithWhereUniqueWithoutDiagnosticInput[]
    updateMany?: MechanicUpdateManyWithWhereWithoutDiagnosticInput | MechanicUpdateManyWithWhereWithoutDiagnosticInput[]
    deleteMany?: MechanicScalarWhereInput | MechanicScalarWhereInput[]
  }

  export type HeadMechanicCreateNestedOneWithoutRepairInput = {
    create?: XOR<HeadMechanicCreateWithoutRepairInput, HeadMechanicUncheckedCreateWithoutRepairInput>
    connectOrCreate?: HeadMechanicCreateOrConnectWithoutRepairInput
    connect?: HeadMechanicWhereUniqueInput
  }

  export type MechanicCreateNestedManyWithoutRepairInput = {
    create?: XOR<MechanicCreateWithoutRepairInput, MechanicUncheckedCreateWithoutRepairInput> | MechanicCreateWithoutRepairInput[] | MechanicUncheckedCreateWithoutRepairInput[]
    connectOrCreate?: MechanicCreateOrConnectWithoutRepairInput | MechanicCreateOrConnectWithoutRepairInput[]
    createMany?: MechanicCreateManyRepairInputEnvelope
    connect?: MechanicWhereUniqueInput | MechanicWhereUniqueInput[]
  }

  export type ReservationCreateNestedOneWithoutRepairInput = {
    create?: XOR<ReservationCreateWithoutRepairInput, ReservationUncheckedCreateWithoutRepairInput>
    connectOrCreate?: ReservationCreateOrConnectWithoutRepairInput
    connect?: ReservationWhereUniqueInput
  }

  export type MechanicUncheckedCreateNestedManyWithoutRepairInput = {
    create?: XOR<MechanicCreateWithoutRepairInput, MechanicUncheckedCreateWithoutRepairInput> | MechanicCreateWithoutRepairInput[] | MechanicUncheckedCreateWithoutRepairInput[]
    connectOrCreate?: MechanicCreateOrConnectWithoutRepairInput | MechanicCreateOrConnectWithoutRepairInput[]
    createMany?: MechanicCreateManyRepairInputEnvelope
    connect?: MechanicWhereUniqueInput | MechanicWhereUniqueInput[]
  }

  export type HeadMechanicUpdateOneRequiredWithoutRepairNestedInput = {
    create?: XOR<HeadMechanicCreateWithoutRepairInput, HeadMechanicUncheckedCreateWithoutRepairInput>
    connectOrCreate?: HeadMechanicCreateOrConnectWithoutRepairInput
    upsert?: HeadMechanicUpsertWithoutRepairInput
    connect?: HeadMechanicWhereUniqueInput
    update?: XOR<XOR<HeadMechanicUpdateToOneWithWhereWithoutRepairInput, HeadMechanicUpdateWithoutRepairInput>, HeadMechanicUncheckedUpdateWithoutRepairInput>
  }

  export type MechanicUpdateManyWithoutRepairNestedInput = {
    create?: XOR<MechanicCreateWithoutRepairInput, MechanicUncheckedCreateWithoutRepairInput> | MechanicCreateWithoutRepairInput[] | MechanicUncheckedCreateWithoutRepairInput[]
    connectOrCreate?: MechanicCreateOrConnectWithoutRepairInput | MechanicCreateOrConnectWithoutRepairInput[]
    upsert?: MechanicUpsertWithWhereUniqueWithoutRepairInput | MechanicUpsertWithWhereUniqueWithoutRepairInput[]
    createMany?: MechanicCreateManyRepairInputEnvelope
    set?: MechanicWhereUniqueInput | MechanicWhereUniqueInput[]
    disconnect?: MechanicWhereUniqueInput | MechanicWhereUniqueInput[]
    delete?: MechanicWhereUniqueInput | MechanicWhereUniqueInput[]
    connect?: MechanicWhereUniqueInput | MechanicWhereUniqueInput[]
    update?: MechanicUpdateWithWhereUniqueWithoutRepairInput | MechanicUpdateWithWhereUniqueWithoutRepairInput[]
    updateMany?: MechanicUpdateManyWithWhereWithoutRepairInput | MechanicUpdateManyWithWhereWithoutRepairInput[]
    deleteMany?: MechanicScalarWhereInput | MechanicScalarWhereInput[]
  }

  export type ReservationUpdateOneRequiredWithoutRepairNestedInput = {
    create?: XOR<ReservationCreateWithoutRepairInput, ReservationUncheckedCreateWithoutRepairInput>
    connectOrCreate?: ReservationCreateOrConnectWithoutRepairInput
    upsert?: ReservationUpsertWithoutRepairInput
    connect?: ReservationWhereUniqueInput
    update?: XOR<XOR<ReservationUpdateToOneWithWhereWithoutRepairInput, ReservationUpdateWithoutRepairInput>, ReservationUncheckedUpdateWithoutRepairInput>
  }

  export type MechanicUncheckedUpdateManyWithoutRepairNestedInput = {
    create?: XOR<MechanicCreateWithoutRepairInput, MechanicUncheckedCreateWithoutRepairInput> | MechanicCreateWithoutRepairInput[] | MechanicUncheckedCreateWithoutRepairInput[]
    connectOrCreate?: MechanicCreateOrConnectWithoutRepairInput | MechanicCreateOrConnectWithoutRepairInput[]
    upsert?: MechanicUpsertWithWhereUniqueWithoutRepairInput | MechanicUpsertWithWhereUniqueWithoutRepairInput[]
    createMany?: MechanicCreateManyRepairInputEnvelope
    set?: MechanicWhereUniqueInput | MechanicWhereUniqueInput[]
    disconnect?: MechanicWhereUniqueInput | MechanicWhereUniqueInput[]
    delete?: MechanicWhereUniqueInput | MechanicWhereUniqueInput[]
    connect?: MechanicWhereUniqueInput | MechanicWhereUniqueInput[]
    update?: MechanicUpdateWithWhereUniqueWithoutRepairInput | MechanicUpdateWithWhereUniqueWithoutRepairInput[]
    updateMany?: MechanicUpdateManyWithWhereWithoutRepairInput | MechanicUpdateManyWithWhereWithoutRepairInput[]
    deleteMany?: MechanicScalarWhereInput | MechanicScalarWhereInput[]
  }

  export type RepairPartCreaterepair_idInput = {
    set: number[]
  }

  export type RepairPartCreatevendor_idInput = {
    set: number[]
  }

  export type RepairPartUpdaterepair_idInput = {
    set?: number[]
    push?: number | number[]
  }

  export type RepairPartUpdatevendor_idInput = {
    set?: number[]
    push?: number | number[]
  }

  export type PostCreateNestedManyWithoutAuthorInput = {
    create?: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput> | PostCreateWithoutAuthorInput[] | PostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAuthorInput | PostCreateOrConnectWithoutAuthorInput[]
    createMany?: PostCreateManyAuthorInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type PostUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput> | PostCreateWithoutAuthorInput[] | PostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAuthorInput | PostCreateOrConnectWithoutAuthorInput[]
    createMany?: PostCreateManyAuthorInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type PostUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput> | PostCreateWithoutAuthorInput[] | PostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAuthorInput | PostCreateOrConnectWithoutAuthorInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutAuthorInput | PostUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: PostCreateManyAuthorInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutAuthorInput | PostUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: PostUpdateManyWithWhereWithoutAuthorInput | PostUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type PostUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput> | PostCreateWithoutAuthorInput[] | PostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAuthorInput | PostCreateOrConnectWithoutAuthorInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutAuthorInput | PostUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: PostCreateManyAuthorInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutAuthorInput | PostUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: PostUpdateManyWithWhereWithoutAuthorInput | PostUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPostsInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    upsert?: UserUpsertWithoutPostsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPostsInput, UserUpdateWithoutPostsInput>, UserUncheckedUpdateWithoutPostsInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumRegTypesNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.RegTypes | EnumRegTypesFieldRefInput<$PrismaModel> | null
    in?: $Enums.RegTypes[] | ListEnumRegTypesFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.RegTypes[] | ListEnumRegTypesFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRegTypesNullableFilter<$PrismaModel> | $Enums.RegTypes | null
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumRegTypesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RegTypes | EnumRegTypesFieldRefInput<$PrismaModel> | null
    in?: $Enums.RegTypes[] | ListEnumRegTypesFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.RegTypes[] | ListEnumRegTypesFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRegTypesNullableWithAggregatesFilter<$PrismaModel> | $Enums.RegTypes | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumRegTypesNullableFilter<$PrismaModel>
    _max?: NestedEnumRegTypesNullableFilter<$PrismaModel>
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type NestedEnumRepairStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.RepairStatus | EnumRepairStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.RepairStatus[] | ListEnumRepairStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.RepairStatus[] | ListEnumRepairStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRepairStatusNullableFilter<$PrismaModel> | $Enums.RepairStatus | null
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

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedEnumRepairStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RepairStatus | EnumRepairStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.RepairStatus[] | ListEnumRepairStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.RepairStatus[] | ListEnumRepairStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRepairStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.RepairStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumRepairStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumRepairStatusNullableFilter<$PrismaModel>
  }

  export type ReservationCreateWithoutVehiculeInput = {
    mobile_phone: string
    date: Date | string
    base_fee?: number | null
    repair_status?: $Enums.RepairStatus | null
    Diagnostic?: DiagnosticCreateNestedManyWithoutReservationInput
    Repair?: RepairCreateNestedManyWithoutReservationInput
  }

  export type ReservationUncheckedCreateWithoutVehiculeInput = {
    reservation_id?: number
    mobile_phone: string
    date: Date | string
    base_fee?: number | null
    repair_status?: $Enums.RepairStatus | null
    Diagnostic?: DiagnosticUncheckedCreateNestedManyWithoutReservationInput
    Repair?: RepairUncheckedCreateNestedManyWithoutReservationInput
  }

  export type ReservationCreateOrConnectWithoutVehiculeInput = {
    where: ReservationWhereUniqueInput
    create: XOR<ReservationCreateWithoutVehiculeInput, ReservationUncheckedCreateWithoutVehiculeInput>
  }

  export type ReservationCreateManyVehiculeInputEnvelope = {
    data: ReservationCreateManyVehiculeInput | ReservationCreateManyVehiculeInput[]
    skipDuplicates?: boolean
  }

  export type ReservationUpsertWithWhereUniqueWithoutVehiculeInput = {
    where: ReservationWhereUniqueInput
    update: XOR<ReservationUpdateWithoutVehiculeInput, ReservationUncheckedUpdateWithoutVehiculeInput>
    create: XOR<ReservationCreateWithoutVehiculeInput, ReservationUncheckedCreateWithoutVehiculeInput>
  }

  export type ReservationUpdateWithWhereUniqueWithoutVehiculeInput = {
    where: ReservationWhereUniqueInput
    data: XOR<ReservationUpdateWithoutVehiculeInput, ReservationUncheckedUpdateWithoutVehiculeInput>
  }

  export type ReservationUpdateManyWithWhereWithoutVehiculeInput = {
    where: ReservationScalarWhereInput
    data: XOR<ReservationUpdateManyMutationInput, ReservationUncheckedUpdateManyWithoutVehiculeInput>
  }

  export type ReservationScalarWhereInput = {
    AND?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
    OR?: ReservationScalarWhereInput[]
    NOT?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
    reservation_id?: IntFilter<"Reservation"> | number
    mobile_phone?: StringFilter<"Reservation"> | string
    date?: DateTimeFilter<"Reservation"> | Date | string
    base_fee?: FloatNullableFilter<"Reservation"> | number | null
    repair_status?: EnumRepairStatusNullableFilter<"Reservation"> | $Enums.RepairStatus | null
    vehicule_id?: StringFilter<"Reservation"> | string
  }

  export type HeadMechanicCreateWithoutMechanicInput = {
    Diagnostic?: DiagnosticCreateNestedManyWithoutResponsibleInput
    Repair?: RepairCreateNestedManyWithoutResponsibleInput
  }

  export type HeadMechanicUncheckedCreateWithoutMechanicInput = {
    Diagnostic?: DiagnosticUncheckedCreateNestedManyWithoutResponsibleInput
    Repair?: RepairUncheckedCreateNestedManyWithoutResponsibleInput
  }

  export type HeadMechanicCreateOrConnectWithoutMechanicInput = {
    where: HeadMechanicWhereUniqueInput
    create: XOR<HeadMechanicCreateWithoutMechanicInput, HeadMechanicUncheckedCreateWithoutMechanicInput>
  }

  export type DiagnosticCreateWithoutWorkers_employedInput = {
    responsible: HeadMechanicCreateNestedOneWithoutDiagnosticInput
    reservation: ReservationCreateNestedOneWithoutDiagnosticInput
  }

  export type DiagnosticUncheckedCreateWithoutWorkers_employedInput = {
    diagnostic_id?: number
    responsible_id: number
    reservation_id: number
  }

  export type DiagnosticCreateOrConnectWithoutWorkers_employedInput = {
    where: DiagnosticWhereUniqueInput
    create: XOR<DiagnosticCreateWithoutWorkers_employedInput, DiagnosticUncheckedCreateWithoutWorkers_employedInput>
  }

  export type RepairCreateWithoutWorkers_employedInput = {
    total_repair_hours: number
    responsible: HeadMechanicCreateNestedOneWithoutRepairInput
    reservation: ReservationCreateNestedOneWithoutRepairInput
  }

  export type RepairUncheckedCreateWithoutWorkers_employedInput = {
    repair_id?: number
    responsible_id: number
    reservation_id: number
    total_repair_hours: number
  }

  export type RepairCreateOrConnectWithoutWorkers_employedInput = {
    where: RepairWhereUniqueInput
    create: XOR<RepairCreateWithoutWorkers_employedInput, RepairUncheckedCreateWithoutWorkers_employedInput>
  }

  export type HeadMechanicUpsertWithoutMechanicInput = {
    update: XOR<HeadMechanicUpdateWithoutMechanicInput, HeadMechanicUncheckedUpdateWithoutMechanicInput>
    create: XOR<HeadMechanicCreateWithoutMechanicInput, HeadMechanicUncheckedCreateWithoutMechanicInput>
    where?: HeadMechanicWhereInput
  }

  export type HeadMechanicUpdateToOneWithWhereWithoutMechanicInput = {
    where?: HeadMechanicWhereInput
    data: XOR<HeadMechanicUpdateWithoutMechanicInput, HeadMechanicUncheckedUpdateWithoutMechanicInput>
  }

  export type HeadMechanicUpdateWithoutMechanicInput = {
    Diagnostic?: DiagnosticUpdateManyWithoutResponsibleNestedInput
    Repair?: RepairUpdateManyWithoutResponsibleNestedInput
  }

  export type HeadMechanicUncheckedUpdateWithoutMechanicInput = {
    Diagnostic?: DiagnosticUncheckedUpdateManyWithoutResponsibleNestedInput
    Repair?: RepairUncheckedUpdateManyWithoutResponsibleNestedInput
  }

  export type DiagnosticUpsertWithoutWorkers_employedInput = {
    update: XOR<DiagnosticUpdateWithoutWorkers_employedInput, DiagnosticUncheckedUpdateWithoutWorkers_employedInput>
    create: XOR<DiagnosticCreateWithoutWorkers_employedInput, DiagnosticUncheckedCreateWithoutWorkers_employedInput>
    where?: DiagnosticWhereInput
  }

  export type DiagnosticUpdateToOneWithWhereWithoutWorkers_employedInput = {
    where?: DiagnosticWhereInput
    data: XOR<DiagnosticUpdateWithoutWorkers_employedInput, DiagnosticUncheckedUpdateWithoutWorkers_employedInput>
  }

  export type DiagnosticUpdateWithoutWorkers_employedInput = {
    responsible?: HeadMechanicUpdateOneRequiredWithoutDiagnosticNestedInput
    reservation?: ReservationUpdateOneRequiredWithoutDiagnosticNestedInput
  }

  export type DiagnosticUncheckedUpdateWithoutWorkers_employedInput = {
    diagnostic_id?: IntFieldUpdateOperationsInput | number
    responsible_id?: IntFieldUpdateOperationsInput | number
    reservation_id?: IntFieldUpdateOperationsInput | number
  }

  export type RepairUpsertWithoutWorkers_employedInput = {
    update: XOR<RepairUpdateWithoutWorkers_employedInput, RepairUncheckedUpdateWithoutWorkers_employedInput>
    create: XOR<RepairCreateWithoutWorkers_employedInput, RepairUncheckedCreateWithoutWorkers_employedInput>
    where?: RepairWhereInput
  }

  export type RepairUpdateToOneWithWhereWithoutWorkers_employedInput = {
    where?: RepairWhereInput
    data: XOR<RepairUpdateWithoutWorkers_employedInput, RepairUncheckedUpdateWithoutWorkers_employedInput>
  }

  export type RepairUpdateWithoutWorkers_employedInput = {
    total_repair_hours?: IntFieldUpdateOperationsInput | number
    responsible?: HeadMechanicUpdateOneRequiredWithoutRepairNestedInput
    reservation?: ReservationUpdateOneRequiredWithoutRepairNestedInput
  }

  export type RepairUncheckedUpdateWithoutWorkers_employedInput = {
    repair_id?: IntFieldUpdateOperationsInput | number
    responsible_id?: IntFieldUpdateOperationsInput | number
    reservation_id?: IntFieldUpdateOperationsInput | number
    total_repair_hours?: IntFieldUpdateOperationsInput | number
  }

  export type MechanicCreateWithoutHeadMechanicInput = {
    mechanic_id: number
    pay_per_hour: number
    Diagnostic?: DiagnosticCreateNestedOneWithoutWorkers_employedInput
    Repair?: RepairCreateNestedOneWithoutWorkers_employedInput
  }

  export type MechanicUncheckedCreateWithoutHeadMechanicInput = {
    mechanic_id: number
    pay_per_hour: number
    diagnosticDiagnostic_id?: number | null
    repairRepair_id?: number | null
  }

  export type MechanicCreateOrConnectWithoutHeadMechanicInput = {
    where: MechanicWhereUniqueInput
    create: XOR<MechanicCreateWithoutHeadMechanicInput, MechanicUncheckedCreateWithoutHeadMechanicInput>
  }

  export type DiagnosticCreateWithoutResponsibleInput = {
    workers_employed?: MechanicCreateNestedManyWithoutDiagnosticInput
    reservation: ReservationCreateNestedOneWithoutDiagnosticInput
  }

  export type DiagnosticUncheckedCreateWithoutResponsibleInput = {
    diagnostic_id?: number
    reservation_id: number
    workers_employed?: MechanicUncheckedCreateNestedManyWithoutDiagnosticInput
  }

  export type DiagnosticCreateOrConnectWithoutResponsibleInput = {
    where: DiagnosticWhereUniqueInput
    create: XOR<DiagnosticCreateWithoutResponsibleInput, DiagnosticUncheckedCreateWithoutResponsibleInput>
  }

  export type DiagnosticCreateManyResponsibleInputEnvelope = {
    data: DiagnosticCreateManyResponsibleInput | DiagnosticCreateManyResponsibleInput[]
    skipDuplicates?: boolean
  }

  export type RepairCreateWithoutResponsibleInput = {
    total_repair_hours: number
    workers_employed?: MechanicCreateNestedManyWithoutRepairInput
    reservation: ReservationCreateNestedOneWithoutRepairInput
  }

  export type RepairUncheckedCreateWithoutResponsibleInput = {
    repair_id?: number
    reservation_id: number
    total_repair_hours: number
    workers_employed?: MechanicUncheckedCreateNestedManyWithoutRepairInput
  }

  export type RepairCreateOrConnectWithoutResponsibleInput = {
    where: RepairWhereUniqueInput
    create: XOR<RepairCreateWithoutResponsibleInput, RepairUncheckedCreateWithoutResponsibleInput>
  }

  export type RepairCreateManyResponsibleInputEnvelope = {
    data: RepairCreateManyResponsibleInput | RepairCreateManyResponsibleInput[]
    skipDuplicates?: boolean
  }

  export type MechanicUpsertWithoutHeadMechanicInput = {
    update: XOR<MechanicUpdateWithoutHeadMechanicInput, MechanicUncheckedUpdateWithoutHeadMechanicInput>
    create: XOR<MechanicCreateWithoutHeadMechanicInput, MechanicUncheckedCreateWithoutHeadMechanicInput>
    where?: MechanicWhereInput
  }

  export type MechanicUpdateToOneWithWhereWithoutHeadMechanicInput = {
    where?: MechanicWhereInput
    data: XOR<MechanicUpdateWithoutHeadMechanicInput, MechanicUncheckedUpdateWithoutHeadMechanicInput>
  }

  export type MechanicUpdateWithoutHeadMechanicInput = {
    mechanic_id?: IntFieldUpdateOperationsInput | number
    pay_per_hour?: FloatFieldUpdateOperationsInput | number
    Diagnostic?: DiagnosticUpdateOneWithoutWorkers_employedNestedInput
    Repair?: RepairUpdateOneWithoutWorkers_employedNestedInput
  }

  export type MechanicUncheckedUpdateWithoutHeadMechanicInput = {
    mechanic_id?: IntFieldUpdateOperationsInput | number
    pay_per_hour?: FloatFieldUpdateOperationsInput | number
    diagnosticDiagnostic_id?: NullableIntFieldUpdateOperationsInput | number | null
    repairRepair_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DiagnosticUpsertWithWhereUniqueWithoutResponsibleInput = {
    where: DiagnosticWhereUniqueInput
    update: XOR<DiagnosticUpdateWithoutResponsibleInput, DiagnosticUncheckedUpdateWithoutResponsibleInput>
    create: XOR<DiagnosticCreateWithoutResponsibleInput, DiagnosticUncheckedCreateWithoutResponsibleInput>
  }

  export type DiagnosticUpdateWithWhereUniqueWithoutResponsibleInput = {
    where: DiagnosticWhereUniqueInput
    data: XOR<DiagnosticUpdateWithoutResponsibleInput, DiagnosticUncheckedUpdateWithoutResponsibleInput>
  }

  export type DiagnosticUpdateManyWithWhereWithoutResponsibleInput = {
    where: DiagnosticScalarWhereInput
    data: XOR<DiagnosticUpdateManyMutationInput, DiagnosticUncheckedUpdateManyWithoutResponsibleInput>
  }

  export type DiagnosticScalarWhereInput = {
    AND?: DiagnosticScalarWhereInput | DiagnosticScalarWhereInput[]
    OR?: DiagnosticScalarWhereInput[]
    NOT?: DiagnosticScalarWhereInput | DiagnosticScalarWhereInput[]
    diagnostic_id?: IntFilter<"Diagnostic"> | number
    responsible_id?: IntFilter<"Diagnostic"> | number
    reservation_id?: IntFilter<"Diagnostic"> | number
  }

  export type RepairUpsertWithWhereUniqueWithoutResponsibleInput = {
    where: RepairWhereUniqueInput
    update: XOR<RepairUpdateWithoutResponsibleInput, RepairUncheckedUpdateWithoutResponsibleInput>
    create: XOR<RepairCreateWithoutResponsibleInput, RepairUncheckedCreateWithoutResponsibleInput>
  }

  export type RepairUpdateWithWhereUniqueWithoutResponsibleInput = {
    where: RepairWhereUniqueInput
    data: XOR<RepairUpdateWithoutResponsibleInput, RepairUncheckedUpdateWithoutResponsibleInput>
  }

  export type RepairUpdateManyWithWhereWithoutResponsibleInput = {
    where: RepairScalarWhereInput
    data: XOR<RepairUpdateManyMutationInput, RepairUncheckedUpdateManyWithoutResponsibleInput>
  }

  export type RepairScalarWhereInput = {
    AND?: RepairScalarWhereInput | RepairScalarWhereInput[]
    OR?: RepairScalarWhereInput[]
    NOT?: RepairScalarWhereInput | RepairScalarWhereInput[]
    repair_id?: IntFilter<"Repair"> | number
    responsible_id?: IntFilter<"Repair"> | number
    reservation_id?: IntFilter<"Repair"> | number
    total_repair_hours?: IntFilter<"Repair"> | number
  }

  export type VehiculeCreateWithoutReservationInput = {
    vin: string
    local: boolean
    registation: string
    registration_type?: $Enums.RegTypes | null
    location?: string | null
  }

  export type VehiculeUncheckedCreateWithoutReservationInput = {
    vin: string
    local: boolean
    registation: string
    registration_type?: $Enums.RegTypes | null
    location?: string | null
  }

  export type VehiculeCreateOrConnectWithoutReservationInput = {
    where: VehiculeWhereUniqueInput
    create: XOR<VehiculeCreateWithoutReservationInput, VehiculeUncheckedCreateWithoutReservationInput>
  }

  export type DiagnosticCreateWithoutReservationInput = {
    responsible: HeadMechanicCreateNestedOneWithoutDiagnosticInput
    workers_employed?: MechanicCreateNestedManyWithoutDiagnosticInput
  }

  export type DiagnosticUncheckedCreateWithoutReservationInput = {
    diagnostic_id?: number
    responsible_id: number
    workers_employed?: MechanicUncheckedCreateNestedManyWithoutDiagnosticInput
  }

  export type DiagnosticCreateOrConnectWithoutReservationInput = {
    where: DiagnosticWhereUniqueInput
    create: XOR<DiagnosticCreateWithoutReservationInput, DiagnosticUncheckedCreateWithoutReservationInput>
  }

  export type DiagnosticCreateManyReservationInputEnvelope = {
    data: DiagnosticCreateManyReservationInput | DiagnosticCreateManyReservationInput[]
    skipDuplicates?: boolean
  }

  export type RepairCreateWithoutReservationInput = {
    total_repair_hours: number
    responsible: HeadMechanicCreateNestedOneWithoutRepairInput
    workers_employed?: MechanicCreateNestedManyWithoutRepairInput
  }

  export type RepairUncheckedCreateWithoutReservationInput = {
    repair_id?: number
    responsible_id: number
    total_repair_hours: number
    workers_employed?: MechanicUncheckedCreateNestedManyWithoutRepairInput
  }

  export type RepairCreateOrConnectWithoutReservationInput = {
    where: RepairWhereUniqueInput
    create: XOR<RepairCreateWithoutReservationInput, RepairUncheckedCreateWithoutReservationInput>
  }

  export type RepairCreateManyReservationInputEnvelope = {
    data: RepairCreateManyReservationInput | RepairCreateManyReservationInput[]
    skipDuplicates?: boolean
  }

  export type VehiculeUpsertWithoutReservationInput = {
    update: XOR<VehiculeUpdateWithoutReservationInput, VehiculeUncheckedUpdateWithoutReservationInput>
    create: XOR<VehiculeCreateWithoutReservationInput, VehiculeUncheckedCreateWithoutReservationInput>
    where?: VehiculeWhereInput
  }

  export type VehiculeUpdateToOneWithWhereWithoutReservationInput = {
    where?: VehiculeWhereInput
    data: XOR<VehiculeUpdateWithoutReservationInput, VehiculeUncheckedUpdateWithoutReservationInput>
  }

  export type VehiculeUpdateWithoutReservationInput = {
    vin?: StringFieldUpdateOperationsInput | string
    local?: BoolFieldUpdateOperationsInput | boolean
    registation?: StringFieldUpdateOperationsInput | string
    registration_type?: NullableEnumRegTypesFieldUpdateOperationsInput | $Enums.RegTypes | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VehiculeUncheckedUpdateWithoutReservationInput = {
    vin?: StringFieldUpdateOperationsInput | string
    local?: BoolFieldUpdateOperationsInput | boolean
    registation?: StringFieldUpdateOperationsInput | string
    registration_type?: NullableEnumRegTypesFieldUpdateOperationsInput | $Enums.RegTypes | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DiagnosticUpsertWithWhereUniqueWithoutReservationInput = {
    where: DiagnosticWhereUniqueInput
    update: XOR<DiagnosticUpdateWithoutReservationInput, DiagnosticUncheckedUpdateWithoutReservationInput>
    create: XOR<DiagnosticCreateWithoutReservationInput, DiagnosticUncheckedCreateWithoutReservationInput>
  }

  export type DiagnosticUpdateWithWhereUniqueWithoutReservationInput = {
    where: DiagnosticWhereUniqueInput
    data: XOR<DiagnosticUpdateWithoutReservationInput, DiagnosticUncheckedUpdateWithoutReservationInput>
  }

  export type DiagnosticUpdateManyWithWhereWithoutReservationInput = {
    where: DiagnosticScalarWhereInput
    data: XOR<DiagnosticUpdateManyMutationInput, DiagnosticUncheckedUpdateManyWithoutReservationInput>
  }

  export type RepairUpsertWithWhereUniqueWithoutReservationInput = {
    where: RepairWhereUniqueInput
    update: XOR<RepairUpdateWithoutReservationInput, RepairUncheckedUpdateWithoutReservationInput>
    create: XOR<RepairCreateWithoutReservationInput, RepairUncheckedCreateWithoutReservationInput>
  }

  export type RepairUpdateWithWhereUniqueWithoutReservationInput = {
    where: RepairWhereUniqueInput
    data: XOR<RepairUpdateWithoutReservationInput, RepairUncheckedUpdateWithoutReservationInput>
  }

  export type RepairUpdateManyWithWhereWithoutReservationInput = {
    where: RepairScalarWhereInput
    data: XOR<RepairUpdateManyMutationInput, RepairUncheckedUpdateManyWithoutReservationInput>
  }

  export type HeadMechanicCreateWithoutDiagnosticInput = {
    mechanic: MechanicCreateNestedOneWithoutHeadMechanicInput
    Repair?: RepairCreateNestedManyWithoutResponsibleInput
  }

  export type HeadMechanicUncheckedCreateWithoutDiagnosticInput = {
    mechanic_id: number
    Repair?: RepairUncheckedCreateNestedManyWithoutResponsibleInput
  }

  export type HeadMechanicCreateOrConnectWithoutDiagnosticInput = {
    where: HeadMechanicWhereUniqueInput
    create: XOR<HeadMechanicCreateWithoutDiagnosticInput, HeadMechanicUncheckedCreateWithoutDiagnosticInput>
  }

  export type MechanicCreateWithoutDiagnosticInput = {
    mechanic_id: number
    pay_per_hour: number
    HeadMechanic?: HeadMechanicCreateNestedOneWithoutMechanicInput
    Repair?: RepairCreateNestedOneWithoutWorkers_employedInput
  }

  export type MechanicUncheckedCreateWithoutDiagnosticInput = {
    mechanic_id: number
    pay_per_hour: number
    repairRepair_id?: number | null
    HeadMechanic?: HeadMechanicUncheckedCreateNestedOneWithoutMechanicInput
  }

  export type MechanicCreateOrConnectWithoutDiagnosticInput = {
    where: MechanicWhereUniqueInput
    create: XOR<MechanicCreateWithoutDiagnosticInput, MechanicUncheckedCreateWithoutDiagnosticInput>
  }

  export type MechanicCreateManyDiagnosticInputEnvelope = {
    data: MechanicCreateManyDiagnosticInput | MechanicCreateManyDiagnosticInput[]
    skipDuplicates?: boolean
  }

  export type ReservationCreateWithoutDiagnosticInput = {
    mobile_phone: string
    date: Date | string
    base_fee?: number | null
    repair_status?: $Enums.RepairStatus | null
    vehicule: VehiculeCreateNestedOneWithoutReservationInput
    Repair?: RepairCreateNestedManyWithoutReservationInput
  }

  export type ReservationUncheckedCreateWithoutDiagnosticInput = {
    reservation_id?: number
    mobile_phone: string
    date: Date | string
    base_fee?: number | null
    repair_status?: $Enums.RepairStatus | null
    vehicule_id: string
    Repair?: RepairUncheckedCreateNestedManyWithoutReservationInput
  }

  export type ReservationCreateOrConnectWithoutDiagnosticInput = {
    where: ReservationWhereUniqueInput
    create: XOR<ReservationCreateWithoutDiagnosticInput, ReservationUncheckedCreateWithoutDiagnosticInput>
  }

  export type HeadMechanicUpsertWithoutDiagnosticInput = {
    update: XOR<HeadMechanicUpdateWithoutDiagnosticInput, HeadMechanicUncheckedUpdateWithoutDiagnosticInput>
    create: XOR<HeadMechanicCreateWithoutDiagnosticInput, HeadMechanicUncheckedCreateWithoutDiagnosticInput>
    where?: HeadMechanicWhereInput
  }

  export type HeadMechanicUpdateToOneWithWhereWithoutDiagnosticInput = {
    where?: HeadMechanicWhereInput
    data: XOR<HeadMechanicUpdateWithoutDiagnosticInput, HeadMechanicUncheckedUpdateWithoutDiagnosticInput>
  }

  export type HeadMechanicUpdateWithoutDiagnosticInput = {
    mechanic?: MechanicUpdateOneRequiredWithoutHeadMechanicNestedInput
    Repair?: RepairUpdateManyWithoutResponsibleNestedInput
  }

  export type HeadMechanicUncheckedUpdateWithoutDiagnosticInput = {
    mechanic_id?: IntFieldUpdateOperationsInput | number
    Repair?: RepairUncheckedUpdateManyWithoutResponsibleNestedInput
  }

  export type MechanicUpsertWithWhereUniqueWithoutDiagnosticInput = {
    where: MechanicWhereUniqueInput
    update: XOR<MechanicUpdateWithoutDiagnosticInput, MechanicUncheckedUpdateWithoutDiagnosticInput>
    create: XOR<MechanicCreateWithoutDiagnosticInput, MechanicUncheckedCreateWithoutDiagnosticInput>
  }

  export type MechanicUpdateWithWhereUniqueWithoutDiagnosticInput = {
    where: MechanicWhereUniqueInput
    data: XOR<MechanicUpdateWithoutDiagnosticInput, MechanicUncheckedUpdateWithoutDiagnosticInput>
  }

  export type MechanicUpdateManyWithWhereWithoutDiagnosticInput = {
    where: MechanicScalarWhereInput
    data: XOR<MechanicUpdateManyMutationInput, MechanicUncheckedUpdateManyWithoutDiagnosticInput>
  }

  export type MechanicScalarWhereInput = {
    AND?: MechanicScalarWhereInput | MechanicScalarWhereInput[]
    OR?: MechanicScalarWhereInput[]
    NOT?: MechanicScalarWhereInput | MechanicScalarWhereInput[]
    mechanic_id?: IntFilter<"Mechanic"> | number
    pay_per_hour?: FloatFilter<"Mechanic"> | number
    diagnosticDiagnostic_id?: IntNullableFilter<"Mechanic"> | number | null
    repairRepair_id?: IntNullableFilter<"Mechanic"> | number | null
  }

  export type ReservationUpsertWithoutDiagnosticInput = {
    update: XOR<ReservationUpdateWithoutDiagnosticInput, ReservationUncheckedUpdateWithoutDiagnosticInput>
    create: XOR<ReservationCreateWithoutDiagnosticInput, ReservationUncheckedCreateWithoutDiagnosticInput>
    where?: ReservationWhereInput
  }

  export type ReservationUpdateToOneWithWhereWithoutDiagnosticInput = {
    where?: ReservationWhereInput
    data: XOR<ReservationUpdateWithoutDiagnosticInput, ReservationUncheckedUpdateWithoutDiagnosticInput>
  }

  export type ReservationUpdateWithoutDiagnosticInput = {
    mobile_phone?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    base_fee?: NullableFloatFieldUpdateOperationsInput | number | null
    repair_status?: NullableEnumRepairStatusFieldUpdateOperationsInput | $Enums.RepairStatus | null
    vehicule?: VehiculeUpdateOneRequiredWithoutReservationNestedInput
    Repair?: RepairUpdateManyWithoutReservationNestedInput
  }

  export type ReservationUncheckedUpdateWithoutDiagnosticInput = {
    reservation_id?: IntFieldUpdateOperationsInput | number
    mobile_phone?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    base_fee?: NullableFloatFieldUpdateOperationsInput | number | null
    repair_status?: NullableEnumRepairStatusFieldUpdateOperationsInput | $Enums.RepairStatus | null
    vehicule_id?: StringFieldUpdateOperationsInput | string
    Repair?: RepairUncheckedUpdateManyWithoutReservationNestedInput
  }

  export type HeadMechanicCreateWithoutRepairInput = {
    mechanic: MechanicCreateNestedOneWithoutHeadMechanicInput
    Diagnostic?: DiagnosticCreateNestedManyWithoutResponsibleInput
  }

  export type HeadMechanicUncheckedCreateWithoutRepairInput = {
    mechanic_id: number
    Diagnostic?: DiagnosticUncheckedCreateNestedManyWithoutResponsibleInput
  }

  export type HeadMechanicCreateOrConnectWithoutRepairInput = {
    where: HeadMechanicWhereUniqueInput
    create: XOR<HeadMechanicCreateWithoutRepairInput, HeadMechanicUncheckedCreateWithoutRepairInput>
  }

  export type MechanicCreateWithoutRepairInput = {
    mechanic_id: number
    pay_per_hour: number
    HeadMechanic?: HeadMechanicCreateNestedOneWithoutMechanicInput
    Diagnostic?: DiagnosticCreateNestedOneWithoutWorkers_employedInput
  }

  export type MechanicUncheckedCreateWithoutRepairInput = {
    mechanic_id: number
    pay_per_hour: number
    diagnosticDiagnostic_id?: number | null
    HeadMechanic?: HeadMechanicUncheckedCreateNestedOneWithoutMechanicInput
  }

  export type MechanicCreateOrConnectWithoutRepairInput = {
    where: MechanicWhereUniqueInput
    create: XOR<MechanicCreateWithoutRepairInput, MechanicUncheckedCreateWithoutRepairInput>
  }

  export type MechanicCreateManyRepairInputEnvelope = {
    data: MechanicCreateManyRepairInput | MechanicCreateManyRepairInput[]
    skipDuplicates?: boolean
  }

  export type ReservationCreateWithoutRepairInput = {
    mobile_phone: string
    date: Date | string
    base_fee?: number | null
    repair_status?: $Enums.RepairStatus | null
    vehicule: VehiculeCreateNestedOneWithoutReservationInput
    Diagnostic?: DiagnosticCreateNestedManyWithoutReservationInput
  }

  export type ReservationUncheckedCreateWithoutRepairInput = {
    reservation_id?: number
    mobile_phone: string
    date: Date | string
    base_fee?: number | null
    repair_status?: $Enums.RepairStatus | null
    vehicule_id: string
    Diagnostic?: DiagnosticUncheckedCreateNestedManyWithoutReservationInput
  }

  export type ReservationCreateOrConnectWithoutRepairInput = {
    where: ReservationWhereUniqueInput
    create: XOR<ReservationCreateWithoutRepairInput, ReservationUncheckedCreateWithoutRepairInput>
  }

  export type HeadMechanicUpsertWithoutRepairInput = {
    update: XOR<HeadMechanicUpdateWithoutRepairInput, HeadMechanicUncheckedUpdateWithoutRepairInput>
    create: XOR<HeadMechanicCreateWithoutRepairInput, HeadMechanicUncheckedCreateWithoutRepairInput>
    where?: HeadMechanicWhereInput
  }

  export type HeadMechanicUpdateToOneWithWhereWithoutRepairInput = {
    where?: HeadMechanicWhereInput
    data: XOR<HeadMechanicUpdateWithoutRepairInput, HeadMechanicUncheckedUpdateWithoutRepairInput>
  }

  export type HeadMechanicUpdateWithoutRepairInput = {
    mechanic?: MechanicUpdateOneRequiredWithoutHeadMechanicNestedInput
    Diagnostic?: DiagnosticUpdateManyWithoutResponsibleNestedInput
  }

  export type HeadMechanicUncheckedUpdateWithoutRepairInput = {
    mechanic_id?: IntFieldUpdateOperationsInput | number
    Diagnostic?: DiagnosticUncheckedUpdateManyWithoutResponsibleNestedInput
  }

  export type MechanicUpsertWithWhereUniqueWithoutRepairInput = {
    where: MechanicWhereUniqueInput
    update: XOR<MechanicUpdateWithoutRepairInput, MechanicUncheckedUpdateWithoutRepairInput>
    create: XOR<MechanicCreateWithoutRepairInput, MechanicUncheckedCreateWithoutRepairInput>
  }

  export type MechanicUpdateWithWhereUniqueWithoutRepairInput = {
    where: MechanicWhereUniqueInput
    data: XOR<MechanicUpdateWithoutRepairInput, MechanicUncheckedUpdateWithoutRepairInput>
  }

  export type MechanicUpdateManyWithWhereWithoutRepairInput = {
    where: MechanicScalarWhereInput
    data: XOR<MechanicUpdateManyMutationInput, MechanicUncheckedUpdateManyWithoutRepairInput>
  }

  export type ReservationUpsertWithoutRepairInput = {
    update: XOR<ReservationUpdateWithoutRepairInput, ReservationUncheckedUpdateWithoutRepairInput>
    create: XOR<ReservationCreateWithoutRepairInput, ReservationUncheckedCreateWithoutRepairInput>
    where?: ReservationWhereInput
  }

  export type ReservationUpdateToOneWithWhereWithoutRepairInput = {
    where?: ReservationWhereInput
    data: XOR<ReservationUpdateWithoutRepairInput, ReservationUncheckedUpdateWithoutRepairInput>
  }

  export type ReservationUpdateWithoutRepairInput = {
    mobile_phone?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    base_fee?: NullableFloatFieldUpdateOperationsInput | number | null
    repair_status?: NullableEnumRepairStatusFieldUpdateOperationsInput | $Enums.RepairStatus | null
    vehicule?: VehiculeUpdateOneRequiredWithoutReservationNestedInput
    Diagnostic?: DiagnosticUpdateManyWithoutReservationNestedInput
  }

  export type ReservationUncheckedUpdateWithoutRepairInput = {
    reservation_id?: IntFieldUpdateOperationsInput | number
    mobile_phone?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    base_fee?: NullableFloatFieldUpdateOperationsInput | number | null
    repair_status?: NullableEnumRepairStatusFieldUpdateOperationsInput | $Enums.RepairStatus | null
    vehicule_id?: StringFieldUpdateOperationsInput | string
    Diagnostic?: DiagnosticUncheckedUpdateManyWithoutReservationNestedInput
  }

  export type PostCreateWithoutAuthorInput = {
    title: string
    content?: string | null
    published?: boolean
  }

  export type PostUncheckedCreateWithoutAuthorInput = {
    post_id?: number
    title: string
    content?: string | null
    published?: boolean
  }

  export type PostCreateOrConnectWithoutAuthorInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput>
  }

  export type PostCreateManyAuthorInputEnvelope = {
    data: PostCreateManyAuthorInput | PostCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type PostUpsertWithWhereUniqueWithoutAuthorInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutAuthorInput, PostUncheckedUpdateWithoutAuthorInput>
    create: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput>
  }

  export type PostUpdateWithWhereUniqueWithoutAuthorInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutAuthorInput, PostUncheckedUpdateWithoutAuthorInput>
  }

  export type PostUpdateManyWithWhereWithoutAuthorInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutAuthorInput>
  }

  export type PostScalarWhereInput = {
    AND?: PostScalarWhereInput | PostScalarWhereInput[]
    OR?: PostScalarWhereInput[]
    NOT?: PostScalarWhereInput | PostScalarWhereInput[]
    post_id?: IntFilter<"Post"> | number
    title?: StringFilter<"Post"> | string
    content?: StringNullableFilter<"Post"> | string | null
    published?: BoolFilter<"Post"> | boolean
    authorId?: IntFilter<"Post"> | number
  }

  export type UserCreateWithoutPostsInput = {
    email: string
    name?: string | null
  }

  export type UserUncheckedCreateWithoutPostsInput = {
    user_id?: number
    email: string
    name?: string | null
  }

  export type UserCreateOrConnectWithoutPostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
  }

  export type UserUpsertWithoutPostsInput = {
    update: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPostsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
  }

  export type UserUpdateWithoutPostsInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateWithoutPostsInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReservationCreateManyVehiculeInput = {
    reservation_id?: number
    mobile_phone: string
    date: Date | string
    base_fee?: number | null
    repair_status?: $Enums.RepairStatus | null
  }

  export type ReservationUpdateWithoutVehiculeInput = {
    mobile_phone?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    base_fee?: NullableFloatFieldUpdateOperationsInput | number | null
    repair_status?: NullableEnumRepairStatusFieldUpdateOperationsInput | $Enums.RepairStatus | null
    Diagnostic?: DiagnosticUpdateManyWithoutReservationNestedInput
    Repair?: RepairUpdateManyWithoutReservationNestedInput
  }

  export type ReservationUncheckedUpdateWithoutVehiculeInput = {
    reservation_id?: IntFieldUpdateOperationsInput | number
    mobile_phone?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    base_fee?: NullableFloatFieldUpdateOperationsInput | number | null
    repair_status?: NullableEnumRepairStatusFieldUpdateOperationsInput | $Enums.RepairStatus | null
    Diagnostic?: DiagnosticUncheckedUpdateManyWithoutReservationNestedInput
    Repair?: RepairUncheckedUpdateManyWithoutReservationNestedInput
  }

  export type ReservationUncheckedUpdateManyWithoutVehiculeInput = {
    reservation_id?: IntFieldUpdateOperationsInput | number
    mobile_phone?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    base_fee?: NullableFloatFieldUpdateOperationsInput | number | null
    repair_status?: NullableEnumRepairStatusFieldUpdateOperationsInput | $Enums.RepairStatus | null
  }

  export type DiagnosticCreateManyResponsibleInput = {
    diagnostic_id?: number
    reservation_id: number
  }

  export type RepairCreateManyResponsibleInput = {
    repair_id?: number
    reservation_id: number
    total_repair_hours: number
  }

  export type DiagnosticUpdateWithoutResponsibleInput = {
    workers_employed?: MechanicUpdateManyWithoutDiagnosticNestedInput
    reservation?: ReservationUpdateOneRequiredWithoutDiagnosticNestedInput
  }

  export type DiagnosticUncheckedUpdateWithoutResponsibleInput = {
    diagnostic_id?: IntFieldUpdateOperationsInput | number
    reservation_id?: IntFieldUpdateOperationsInput | number
    workers_employed?: MechanicUncheckedUpdateManyWithoutDiagnosticNestedInput
  }

  export type DiagnosticUncheckedUpdateManyWithoutResponsibleInput = {
    diagnostic_id?: IntFieldUpdateOperationsInput | number
    reservation_id?: IntFieldUpdateOperationsInput | number
  }

  export type RepairUpdateWithoutResponsibleInput = {
    total_repair_hours?: IntFieldUpdateOperationsInput | number
    workers_employed?: MechanicUpdateManyWithoutRepairNestedInput
    reservation?: ReservationUpdateOneRequiredWithoutRepairNestedInput
  }

  export type RepairUncheckedUpdateWithoutResponsibleInput = {
    repair_id?: IntFieldUpdateOperationsInput | number
    reservation_id?: IntFieldUpdateOperationsInput | number
    total_repair_hours?: IntFieldUpdateOperationsInput | number
    workers_employed?: MechanicUncheckedUpdateManyWithoutRepairNestedInput
  }

  export type RepairUncheckedUpdateManyWithoutResponsibleInput = {
    repair_id?: IntFieldUpdateOperationsInput | number
    reservation_id?: IntFieldUpdateOperationsInput | number
    total_repair_hours?: IntFieldUpdateOperationsInput | number
  }

  export type DiagnosticCreateManyReservationInput = {
    diagnostic_id?: number
    responsible_id: number
  }

  export type RepairCreateManyReservationInput = {
    repair_id?: number
    responsible_id: number
    total_repair_hours: number
  }

  export type DiagnosticUpdateWithoutReservationInput = {
    responsible?: HeadMechanicUpdateOneRequiredWithoutDiagnosticNestedInput
    workers_employed?: MechanicUpdateManyWithoutDiagnosticNestedInput
  }

  export type DiagnosticUncheckedUpdateWithoutReservationInput = {
    diagnostic_id?: IntFieldUpdateOperationsInput | number
    responsible_id?: IntFieldUpdateOperationsInput | number
    workers_employed?: MechanicUncheckedUpdateManyWithoutDiagnosticNestedInput
  }

  export type DiagnosticUncheckedUpdateManyWithoutReservationInput = {
    diagnostic_id?: IntFieldUpdateOperationsInput | number
    responsible_id?: IntFieldUpdateOperationsInput | number
  }

  export type RepairUpdateWithoutReservationInput = {
    total_repair_hours?: IntFieldUpdateOperationsInput | number
    responsible?: HeadMechanicUpdateOneRequiredWithoutRepairNestedInput
    workers_employed?: MechanicUpdateManyWithoutRepairNestedInput
  }

  export type RepairUncheckedUpdateWithoutReservationInput = {
    repair_id?: IntFieldUpdateOperationsInput | number
    responsible_id?: IntFieldUpdateOperationsInput | number
    total_repair_hours?: IntFieldUpdateOperationsInput | number
    workers_employed?: MechanicUncheckedUpdateManyWithoutRepairNestedInput
  }

  export type RepairUncheckedUpdateManyWithoutReservationInput = {
    repair_id?: IntFieldUpdateOperationsInput | number
    responsible_id?: IntFieldUpdateOperationsInput | number
    total_repair_hours?: IntFieldUpdateOperationsInput | number
  }

  export type MechanicCreateManyDiagnosticInput = {
    mechanic_id: number
    pay_per_hour: number
    repairRepair_id?: number | null
  }

  export type MechanicUpdateWithoutDiagnosticInput = {
    mechanic_id?: IntFieldUpdateOperationsInput | number
    pay_per_hour?: FloatFieldUpdateOperationsInput | number
    HeadMechanic?: HeadMechanicUpdateOneWithoutMechanicNestedInput
    Repair?: RepairUpdateOneWithoutWorkers_employedNestedInput
  }

  export type MechanicUncheckedUpdateWithoutDiagnosticInput = {
    mechanic_id?: IntFieldUpdateOperationsInput | number
    pay_per_hour?: FloatFieldUpdateOperationsInput | number
    repairRepair_id?: NullableIntFieldUpdateOperationsInput | number | null
    HeadMechanic?: HeadMechanicUncheckedUpdateOneWithoutMechanicNestedInput
  }

  export type MechanicUncheckedUpdateManyWithoutDiagnosticInput = {
    mechanic_id?: IntFieldUpdateOperationsInput | number
    pay_per_hour?: FloatFieldUpdateOperationsInput | number
    repairRepair_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MechanicCreateManyRepairInput = {
    mechanic_id: number
    pay_per_hour: number
    diagnosticDiagnostic_id?: number | null
  }

  export type MechanicUpdateWithoutRepairInput = {
    mechanic_id?: IntFieldUpdateOperationsInput | number
    pay_per_hour?: FloatFieldUpdateOperationsInput | number
    HeadMechanic?: HeadMechanicUpdateOneWithoutMechanicNestedInput
    Diagnostic?: DiagnosticUpdateOneWithoutWorkers_employedNestedInput
  }

  export type MechanicUncheckedUpdateWithoutRepairInput = {
    mechanic_id?: IntFieldUpdateOperationsInput | number
    pay_per_hour?: FloatFieldUpdateOperationsInput | number
    diagnosticDiagnostic_id?: NullableIntFieldUpdateOperationsInput | number | null
    HeadMechanic?: HeadMechanicUncheckedUpdateOneWithoutMechanicNestedInput
  }

  export type MechanicUncheckedUpdateManyWithoutRepairInput = {
    mechanic_id?: IntFieldUpdateOperationsInput | number
    pay_per_hour?: FloatFieldUpdateOperationsInput | number
    diagnosticDiagnostic_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PostCreateManyAuthorInput = {
    post_id?: number
    title: string
    content?: string | null
    published?: boolean
  }

  export type PostUpdateWithoutAuthorInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PostUncheckedUpdateWithoutAuthorInput = {
    post_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PostUncheckedUpdateManyWithoutAuthorInput = {
    post_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
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