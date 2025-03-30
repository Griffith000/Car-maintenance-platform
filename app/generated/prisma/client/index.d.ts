
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
 * Model Vehicle
 * 
 */
export type Vehicle = $Result.DefaultSelection<Prisma.$VehiclePayload>
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
 * // Fetch zero or more Vehicles
 * const vehicles = await prisma.vehicle.findMany()
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
   * // Fetch zero or more Vehicles
   * const vehicles = await prisma.vehicle.findMany()
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
   * `prisma.vehicle`: Exposes CRUD operations for the **Vehicle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vehicles
    * const vehicles = await prisma.vehicle.findMany()
    * ```
    */
  get vehicle(): Prisma.VehicleDelegate<ExtArgs, ClientOptions>;

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
    Vehicle: 'Vehicle',
    Mechanic: 'Mechanic',
    HeadMechanic: 'HeadMechanic',
    Reservation: 'Reservation',
    Diagnostic: 'Diagnostic',
    Repair: 'Repair',
    RepairPart: 'RepairPart',
    Vendor: 'Vendor',
    User: 'User'
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
      modelProps: "vehicle" | "mechanic" | "headMechanic" | "reservation" | "diagnostic" | "repair" | "repairPart" | "vendor" | "user"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Vehicle: {
        payload: Prisma.$VehiclePayload<ExtArgs>
        fields: Prisma.VehicleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VehicleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VehicleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          findFirst: {
            args: Prisma.VehicleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VehicleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          findMany: {
            args: Prisma.VehicleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>[]
          }
          create: {
            args: Prisma.VehicleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          createMany: {
            args: Prisma.VehicleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VehicleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>[]
          }
          delete: {
            args: Prisma.VehicleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          update: {
            args: Prisma.VehicleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          deleteMany: {
            args: Prisma.VehicleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VehicleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VehicleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>[]
          }
          upsert: {
            args: Prisma.VehicleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          aggregate: {
            args: Prisma.VehicleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVehicle>
          }
          groupBy: {
            args: Prisma.VehicleGroupByArgs<ExtArgs>
            result: $Utils.Optional<VehicleGroupByOutputType>[]
          }
          count: {
            args: Prisma.VehicleCountArgs<ExtArgs>
            result: $Utils.Optional<VehicleCountAggregateOutputType> | number
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
    vehicle?: VehicleOmit
    mechanic?: MechanicOmit
    headMechanic?: HeadMechanicOmit
    reservation?: ReservationOmit
    diagnostic?: DiagnosticOmit
    repair?: RepairOmit
    repairPart?: RepairPartOmit
    vendor?: VendorOmit
    user?: UserOmit
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
   * Count Type VehicleCountOutputType
   */

  export type VehicleCountOutputType = {
    reservation: number
  }

  export type VehicleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservation?: boolean | VehicleCountOutputTypeCountReservationArgs
  }

  // Custom InputTypes
  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleCountOutputType
     */
    select?: VehicleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeCountReservationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservationWhereInput
  }


  /**
   * Count Type HeadMechanicCountOutputType
   */

  export type HeadMechanicCountOutputType = {
    diagnostic: number
    repair: number
  }

  export type HeadMechanicCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    diagnostic?: boolean | HeadMechanicCountOutputTypeCountDiagnosticArgs
    repair?: boolean | HeadMechanicCountOutputTypeCountRepairArgs
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
    diagnostic: number
    repair: number
  }

  export type ReservationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    diagnostic?: boolean | ReservationCountOutputTypeCountDiagnosticArgs
    repair?: boolean | ReservationCountOutputTypeCountRepairArgs
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
    workersEmployed: number
  }

  export type DiagnosticCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workersEmployed?: boolean | DiagnosticCountOutputTypeCountWorkersEmployedArgs
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
  export type DiagnosticCountOutputTypeCountWorkersEmployedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MechanicWhereInput
  }


  /**
   * Count Type RepairCountOutputType
   */

  export type RepairCountOutputType = {
    workersEmployed: number
  }

  export type RepairCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workersEmployed?: boolean | RepairCountOutputTypeCountWorkersEmployedArgs
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
  export type RepairCountOutputTypeCountWorkersEmployedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MechanicWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Vehicle
   */

  export type AggregateVehicle = {
    _count: VehicleCountAggregateOutputType | null
    _min: VehicleMinAggregateOutputType | null
    _max: VehicleMaxAggregateOutputType | null
  }

  export type VehicleMinAggregateOutputType = {
    vin: string | null
    local: boolean | null
    registration: string | null
    registrationType: $Enums.RegTypes | null
    location: string | null
  }

  export type VehicleMaxAggregateOutputType = {
    vin: string | null
    local: boolean | null
    registration: string | null
    registrationType: $Enums.RegTypes | null
    location: string | null
  }

  export type VehicleCountAggregateOutputType = {
    vin: number
    local: number
    registration: number
    registrationType: number
    location: number
    _all: number
  }


  export type VehicleMinAggregateInputType = {
    vin?: true
    local?: true
    registration?: true
    registrationType?: true
    location?: true
  }

  export type VehicleMaxAggregateInputType = {
    vin?: true
    local?: true
    registration?: true
    registrationType?: true
    location?: true
  }

  export type VehicleCountAggregateInputType = {
    vin?: true
    local?: true
    registration?: true
    registrationType?: true
    location?: true
    _all?: true
  }

  export type VehicleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vehicle to aggregate.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vehicles
    **/
    _count?: true | VehicleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VehicleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VehicleMaxAggregateInputType
  }

  export type GetVehicleAggregateType<T extends VehicleAggregateArgs> = {
        [P in keyof T & keyof AggregateVehicle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVehicle[P]>
      : GetScalarType<T[P], AggregateVehicle[P]>
  }




  export type VehicleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehicleWhereInput
    orderBy?: VehicleOrderByWithAggregationInput | VehicleOrderByWithAggregationInput[]
    by: VehicleScalarFieldEnum[] | VehicleScalarFieldEnum
    having?: VehicleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VehicleCountAggregateInputType | true
    _min?: VehicleMinAggregateInputType
    _max?: VehicleMaxAggregateInputType
  }

  export type VehicleGroupByOutputType = {
    vin: string
    local: boolean
    registration: string | null
    registrationType: $Enums.RegTypes | null
    location: string | null
    _count: VehicleCountAggregateOutputType | null
    _min: VehicleMinAggregateOutputType | null
    _max: VehicleMaxAggregateOutputType | null
  }

  type GetVehicleGroupByPayload<T extends VehicleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VehicleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VehicleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VehicleGroupByOutputType[P]>
            : GetScalarType<T[P], VehicleGroupByOutputType[P]>
        }
      >
    >


  export type VehicleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    vin?: boolean
    local?: boolean
    registration?: boolean
    registrationType?: boolean
    location?: boolean
    reservation?: boolean | Vehicle$reservationArgs<ExtArgs>
    _count?: boolean | VehicleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicle"]>

  export type VehicleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    vin?: boolean
    local?: boolean
    registration?: boolean
    registrationType?: boolean
    location?: boolean
  }, ExtArgs["result"]["vehicle"]>

  export type VehicleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    vin?: boolean
    local?: boolean
    registration?: boolean
    registrationType?: boolean
    location?: boolean
  }, ExtArgs["result"]["vehicle"]>

  export type VehicleSelectScalar = {
    vin?: boolean
    local?: boolean
    registration?: boolean
    registrationType?: boolean
    location?: boolean
  }

  export type VehicleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"vin" | "local" | "registration" | "registrationType" | "location", ExtArgs["result"]["vehicle"]>
  export type VehicleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservation?: boolean | Vehicle$reservationArgs<ExtArgs>
    _count?: boolean | VehicleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VehicleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type VehicleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $VehiclePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vehicle"
    objects: {
      reservation: Prisma.$ReservationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      vin: string
      local: boolean
      registration: string | null
      registrationType: $Enums.RegTypes | null
      location: string | null
    }, ExtArgs["result"]["vehicle"]>
    composites: {}
  }

  type VehicleGetPayload<S extends boolean | null | undefined | VehicleDefaultArgs> = $Result.GetResult<Prisma.$VehiclePayload, S>

  type VehicleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VehicleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VehicleCountAggregateInputType | true
    }

  export interface VehicleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vehicle'], meta: { name: 'Vehicle' } }
    /**
     * Find zero or one Vehicle that matches the filter.
     * @param {VehicleFindUniqueArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VehicleFindUniqueArgs>(args: SelectSubset<T, VehicleFindUniqueArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vehicle that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VehicleFindUniqueOrThrowArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VehicleFindUniqueOrThrowArgs>(args: SelectSubset<T, VehicleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vehicle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleFindFirstArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VehicleFindFirstArgs>(args?: SelectSubset<T, VehicleFindFirstArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vehicle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleFindFirstOrThrowArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VehicleFindFirstOrThrowArgs>(args?: SelectSubset<T, VehicleFindFirstOrThrowArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vehicles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vehicles
     * const vehicles = await prisma.vehicle.findMany()
     * 
     * // Get first 10 Vehicles
     * const vehicles = await prisma.vehicle.findMany({ take: 10 })
     * 
     * // Only select the `vin`
     * const vehicleWithVinOnly = await prisma.vehicle.findMany({ select: { vin: true } })
     * 
     */
    findMany<T extends VehicleFindManyArgs>(args?: SelectSubset<T, VehicleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vehicle.
     * @param {VehicleCreateArgs} args - Arguments to create a Vehicle.
     * @example
     * // Create one Vehicle
     * const Vehicle = await prisma.vehicle.create({
     *   data: {
     *     // ... data to create a Vehicle
     *   }
     * })
     * 
     */
    create<T extends VehicleCreateArgs>(args: SelectSubset<T, VehicleCreateArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vehicles.
     * @param {VehicleCreateManyArgs} args - Arguments to create many Vehicles.
     * @example
     * // Create many Vehicles
     * const vehicle = await prisma.vehicle.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VehicleCreateManyArgs>(args?: SelectSubset<T, VehicleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Vehicles and returns the data saved in the database.
     * @param {VehicleCreateManyAndReturnArgs} args - Arguments to create many Vehicles.
     * @example
     * // Create many Vehicles
     * const vehicle = await prisma.vehicle.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Vehicles and only return the `vin`
     * const vehicleWithVinOnly = await prisma.vehicle.createManyAndReturn({
     *   select: { vin: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VehicleCreateManyAndReturnArgs>(args?: SelectSubset<T, VehicleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Vehicle.
     * @param {VehicleDeleteArgs} args - Arguments to delete one Vehicle.
     * @example
     * // Delete one Vehicle
     * const Vehicle = await prisma.vehicle.delete({
     *   where: {
     *     // ... filter to delete one Vehicle
     *   }
     * })
     * 
     */
    delete<T extends VehicleDeleteArgs>(args: SelectSubset<T, VehicleDeleteArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vehicle.
     * @param {VehicleUpdateArgs} args - Arguments to update one Vehicle.
     * @example
     * // Update one Vehicle
     * const vehicle = await prisma.vehicle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VehicleUpdateArgs>(args: SelectSubset<T, VehicleUpdateArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vehicles.
     * @param {VehicleDeleteManyArgs} args - Arguments to filter Vehicles to delete.
     * @example
     * // Delete a few Vehicles
     * const { count } = await prisma.vehicle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VehicleDeleteManyArgs>(args?: SelectSubset<T, VehicleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vehicles
     * const vehicle = await prisma.vehicle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VehicleUpdateManyArgs>(args: SelectSubset<T, VehicleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vehicles and returns the data updated in the database.
     * @param {VehicleUpdateManyAndReturnArgs} args - Arguments to update many Vehicles.
     * @example
     * // Update many Vehicles
     * const vehicle = await prisma.vehicle.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Vehicles and only return the `vin`
     * const vehicleWithVinOnly = await prisma.vehicle.updateManyAndReturn({
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
    updateManyAndReturn<T extends VehicleUpdateManyAndReturnArgs>(args: SelectSubset<T, VehicleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Vehicle.
     * @param {VehicleUpsertArgs} args - Arguments to update or create a Vehicle.
     * @example
     * // Update or create a Vehicle
     * const vehicle = await prisma.vehicle.upsert({
     *   create: {
     *     // ... data to create a Vehicle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vehicle we want to update
     *   }
     * })
     */
    upsert<T extends VehicleUpsertArgs>(args: SelectSubset<T, VehicleUpsertArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleCountArgs} args - Arguments to filter Vehicles to count.
     * @example
     * // Count the number of Vehicles
     * const count = await prisma.vehicle.count({
     *   where: {
     *     // ... the filter for the Vehicles we want to count
     *   }
     * })
    **/
    count<T extends VehicleCountArgs>(
      args?: Subset<T, VehicleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VehicleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vehicle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VehicleAggregateArgs>(args: Subset<T, VehicleAggregateArgs>): Prisma.PrismaPromise<GetVehicleAggregateType<T>>

    /**
     * Group by Vehicle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleGroupByArgs} args - Group by arguments.
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
      T extends VehicleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VehicleGroupByArgs['orderBy'] }
        : { orderBy?: VehicleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VehicleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVehicleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vehicle model
   */
  readonly fields: VehicleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vehicle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VehicleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reservation<T extends Vehicle$reservationArgs<ExtArgs> = {}>(args?: Subset<T, Vehicle$reservationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Vehicle model
   */ 
  interface VehicleFieldRefs {
    readonly vin: FieldRef<"Vehicle", 'String'>
    readonly local: FieldRef<"Vehicle", 'Boolean'>
    readonly registration: FieldRef<"Vehicle", 'String'>
    readonly registrationType: FieldRef<"Vehicle", 'RegTypes'>
    readonly location: FieldRef<"Vehicle", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Vehicle findUnique
   */
  export type VehicleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle findUniqueOrThrow
   */
  export type VehicleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle findFirst
   */
  export type VehicleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vehicles.
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehicles.
     */
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * Vehicle findFirstOrThrow
   */
  export type VehicleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vehicles.
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehicles.
     */
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * Vehicle findMany
   */
  export type VehicleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicles to fetch.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vehicles.
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * Vehicle create
   */
  export type VehicleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * The data needed to create a Vehicle.
     */
    data: XOR<VehicleCreateInput, VehicleUncheckedCreateInput>
  }

  /**
   * Vehicle createMany
   */
  export type VehicleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vehicles.
     */
    data: VehicleCreateManyInput | VehicleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vehicle createManyAndReturn
   */
  export type VehicleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * The data used to create many Vehicles.
     */
    data: VehicleCreateManyInput | VehicleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vehicle update
   */
  export type VehicleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * The data needed to update a Vehicle.
     */
    data: XOR<VehicleUpdateInput, VehicleUncheckedUpdateInput>
    /**
     * Choose, which Vehicle to update.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle updateMany
   */
  export type VehicleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vehicles.
     */
    data: XOR<VehicleUpdateManyMutationInput, VehicleUncheckedUpdateManyInput>
    /**
     * Filter which Vehicles to update
     */
    where?: VehicleWhereInput
    /**
     * Limit how many Vehicles to update.
     */
    limit?: number
  }

  /**
   * Vehicle updateManyAndReturn
   */
  export type VehicleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * The data used to update Vehicles.
     */
    data: XOR<VehicleUpdateManyMutationInput, VehicleUncheckedUpdateManyInput>
    /**
     * Filter which Vehicles to update
     */
    where?: VehicleWhereInput
    /**
     * Limit how many Vehicles to update.
     */
    limit?: number
  }

  /**
   * Vehicle upsert
   */
  export type VehicleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * The filter to search for the Vehicle to update in case it exists.
     */
    where: VehicleWhereUniqueInput
    /**
     * In case the Vehicle found by the `where` argument doesn't exist, create a new Vehicle with this data.
     */
    create: XOR<VehicleCreateInput, VehicleUncheckedCreateInput>
    /**
     * In case the Vehicle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VehicleUpdateInput, VehicleUncheckedUpdateInput>
  }

  /**
   * Vehicle delete
   */
  export type VehicleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter which Vehicle to delete.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle deleteMany
   */
  export type VehicleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vehicles to delete
     */
    where?: VehicleWhereInput
    /**
     * Limit how many Vehicles to delete.
     */
    limit?: number
  }

  /**
   * Vehicle.reservation
   */
  export type Vehicle$reservationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Vehicle without action
   */
  export type VehicleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
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
    mechanicId: number | null
    payPerHour: number | null
    diagnosticDiagnosticId: number | null
    repairRepairId: number | null
  }

  export type MechanicSumAggregateOutputType = {
    mechanicId: number | null
    payPerHour: number | null
    diagnosticDiagnosticId: number | null
    repairRepairId: number | null
  }

  export type MechanicMinAggregateOutputType = {
    mechanicId: number | null
    payPerHour: number | null
    diagnosticDiagnosticId: number | null
    repairRepairId: number | null
  }

  export type MechanicMaxAggregateOutputType = {
    mechanicId: number | null
    payPerHour: number | null
    diagnosticDiagnosticId: number | null
    repairRepairId: number | null
  }

  export type MechanicCountAggregateOutputType = {
    mechanicId: number
    payPerHour: number
    diagnosticDiagnosticId: number
    repairRepairId: number
    _all: number
  }


  export type MechanicAvgAggregateInputType = {
    mechanicId?: true
    payPerHour?: true
    diagnosticDiagnosticId?: true
    repairRepairId?: true
  }

  export type MechanicSumAggregateInputType = {
    mechanicId?: true
    payPerHour?: true
    diagnosticDiagnosticId?: true
    repairRepairId?: true
  }

  export type MechanicMinAggregateInputType = {
    mechanicId?: true
    payPerHour?: true
    diagnosticDiagnosticId?: true
    repairRepairId?: true
  }

  export type MechanicMaxAggregateInputType = {
    mechanicId?: true
    payPerHour?: true
    diagnosticDiagnosticId?: true
    repairRepairId?: true
  }

  export type MechanicCountAggregateInputType = {
    mechanicId?: true
    payPerHour?: true
    diagnosticDiagnosticId?: true
    repairRepairId?: true
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
    mechanicId: number
    payPerHour: number
    diagnosticDiagnosticId: number | null
    repairRepairId: number | null
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
    mechanicId?: boolean
    payPerHour?: boolean
    diagnosticDiagnosticId?: boolean
    repairRepairId?: boolean
    headMechanic?: boolean | Mechanic$headMechanicArgs<ExtArgs>
    diagnostic?: boolean | Mechanic$diagnosticArgs<ExtArgs>
    repair?: boolean | Mechanic$repairArgs<ExtArgs>
  }, ExtArgs["result"]["mechanic"]>

  export type MechanicSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    mechanicId?: boolean
    payPerHour?: boolean
    diagnosticDiagnosticId?: boolean
    repairRepairId?: boolean
    diagnostic?: boolean | Mechanic$diagnosticArgs<ExtArgs>
    repair?: boolean | Mechanic$repairArgs<ExtArgs>
  }, ExtArgs["result"]["mechanic"]>

  export type MechanicSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    mechanicId?: boolean
    payPerHour?: boolean
    diagnosticDiagnosticId?: boolean
    repairRepairId?: boolean
    diagnostic?: boolean | Mechanic$diagnosticArgs<ExtArgs>
    repair?: boolean | Mechanic$repairArgs<ExtArgs>
  }, ExtArgs["result"]["mechanic"]>

  export type MechanicSelectScalar = {
    mechanicId?: boolean
    payPerHour?: boolean
    diagnosticDiagnosticId?: boolean
    repairRepairId?: boolean
  }

  export type MechanicOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"mechanicId" | "payPerHour" | "diagnosticDiagnosticId" | "repairRepairId", ExtArgs["result"]["mechanic"]>
  export type MechanicInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    headMechanic?: boolean | Mechanic$headMechanicArgs<ExtArgs>
    diagnostic?: boolean | Mechanic$diagnosticArgs<ExtArgs>
    repair?: boolean | Mechanic$repairArgs<ExtArgs>
  }
  export type MechanicIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    diagnostic?: boolean | Mechanic$diagnosticArgs<ExtArgs>
    repair?: boolean | Mechanic$repairArgs<ExtArgs>
  }
  export type MechanicIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    diagnostic?: boolean | Mechanic$diagnosticArgs<ExtArgs>
    repair?: boolean | Mechanic$repairArgs<ExtArgs>
  }

  export type $MechanicPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Mechanic"
    objects: {
      headMechanic: Prisma.$HeadMechanicPayload<ExtArgs> | null
      diagnostic: Prisma.$DiagnosticPayload<ExtArgs> | null
      repair: Prisma.$RepairPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      mechanicId: number
      payPerHour: number
      diagnosticDiagnosticId: number | null
      repairRepairId: number | null
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
     * // Only select the `mechanicId`
     * const mechanicWithMechanicIdOnly = await prisma.mechanic.findMany({ select: { mechanicId: true } })
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
     * // Create many Mechanics and only return the `mechanicId`
     * const mechanicWithMechanicIdOnly = await prisma.mechanic.createManyAndReturn({
     *   select: { mechanicId: true },
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
     * // Update zero or more Mechanics and only return the `mechanicId`
     * const mechanicWithMechanicIdOnly = await prisma.mechanic.updateManyAndReturn({
     *   select: { mechanicId: true },
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
    headMechanic<T extends Mechanic$headMechanicArgs<ExtArgs> = {}>(args?: Subset<T, Mechanic$headMechanicArgs<ExtArgs>>): Prisma__HeadMechanicClient<$Result.GetResult<Prisma.$HeadMechanicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    diagnostic<T extends Mechanic$diagnosticArgs<ExtArgs> = {}>(args?: Subset<T, Mechanic$diagnosticArgs<ExtArgs>>): Prisma__DiagnosticClient<$Result.GetResult<Prisma.$DiagnosticPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    repair<T extends Mechanic$repairArgs<ExtArgs> = {}>(args?: Subset<T, Mechanic$repairArgs<ExtArgs>>): Prisma__RepairClient<$Result.GetResult<Prisma.$RepairPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
    readonly mechanicId: FieldRef<"Mechanic", 'Int'>
    readonly payPerHour: FieldRef<"Mechanic", 'Float'>
    readonly diagnosticDiagnosticId: FieldRef<"Mechanic", 'Int'>
    readonly repairRepairId: FieldRef<"Mechanic", 'Int'>
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
   * Mechanic.headMechanic
   */
  export type Mechanic$headMechanicArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Mechanic.diagnostic
   */
  export type Mechanic$diagnosticArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Mechanic.repair
   */
  export type Mechanic$repairArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    mechanicId: number | null
  }

  export type HeadMechanicSumAggregateOutputType = {
    mechanicId: number | null
  }

  export type HeadMechanicMinAggregateOutputType = {
    mechanicId: number | null
  }

  export type HeadMechanicMaxAggregateOutputType = {
    mechanicId: number | null
  }

  export type HeadMechanicCountAggregateOutputType = {
    mechanicId: number
    _all: number
  }


  export type HeadMechanicAvgAggregateInputType = {
    mechanicId?: true
  }

  export type HeadMechanicSumAggregateInputType = {
    mechanicId?: true
  }

  export type HeadMechanicMinAggregateInputType = {
    mechanicId?: true
  }

  export type HeadMechanicMaxAggregateInputType = {
    mechanicId?: true
  }

  export type HeadMechanicCountAggregateInputType = {
    mechanicId?: true
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
    mechanicId: number
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
    mechanicId?: boolean
    mechanic?: boolean | MechanicDefaultArgs<ExtArgs>
    diagnostic?: boolean | HeadMechanic$diagnosticArgs<ExtArgs>
    repair?: boolean | HeadMechanic$repairArgs<ExtArgs>
    _count?: boolean | HeadMechanicCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["headMechanic"]>

  export type HeadMechanicSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    mechanicId?: boolean
    mechanic?: boolean | MechanicDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["headMechanic"]>

  export type HeadMechanicSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    mechanicId?: boolean
    mechanic?: boolean | MechanicDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["headMechanic"]>

  export type HeadMechanicSelectScalar = {
    mechanicId?: boolean
  }

  export type HeadMechanicOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"mechanicId", ExtArgs["result"]["headMechanic"]>
  export type HeadMechanicInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mechanic?: boolean | MechanicDefaultArgs<ExtArgs>
    diagnostic?: boolean | HeadMechanic$diagnosticArgs<ExtArgs>
    repair?: boolean | HeadMechanic$repairArgs<ExtArgs>
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
      diagnostic: Prisma.$DiagnosticPayload<ExtArgs>[]
      repair: Prisma.$RepairPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      mechanicId: number
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
     * // Only select the `mechanicId`
     * const headMechanicWithMechanicIdOnly = await prisma.headMechanic.findMany({ select: { mechanicId: true } })
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
     * // Create many HeadMechanics and only return the `mechanicId`
     * const headMechanicWithMechanicIdOnly = await prisma.headMechanic.createManyAndReturn({
     *   select: { mechanicId: true },
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
     * // Update zero or more HeadMechanics and only return the `mechanicId`
     * const headMechanicWithMechanicIdOnly = await prisma.headMechanic.updateManyAndReturn({
     *   select: { mechanicId: true },
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
    diagnostic<T extends HeadMechanic$diagnosticArgs<ExtArgs> = {}>(args?: Subset<T, HeadMechanic$diagnosticArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiagnosticPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    repair<T extends HeadMechanic$repairArgs<ExtArgs> = {}>(args?: Subset<T, HeadMechanic$repairArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepairPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly mechanicId: FieldRef<"HeadMechanic", 'Int'>
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
   * HeadMechanic.diagnostic
   */
  export type HeadMechanic$diagnosticArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * HeadMechanic.repair
   */
  export type HeadMechanic$repairArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    reservationId: number | null
    baseFee: number | null
  }

  export type ReservationSumAggregateOutputType = {
    reservationId: number | null
    baseFee: number | null
  }

  export type ReservationMinAggregateOutputType = {
    reservationId: number | null
    mobilePhone: string | null
    date: Date | null
    baseFee: number | null
    repairStatus: $Enums.RepairStatus | null
    vehicleId: string | null
  }

  export type ReservationMaxAggregateOutputType = {
    reservationId: number | null
    mobilePhone: string | null
    date: Date | null
    baseFee: number | null
    repairStatus: $Enums.RepairStatus | null
    vehicleId: string | null
  }

  export type ReservationCountAggregateOutputType = {
    reservationId: number
    mobilePhone: number
    date: number
    baseFee: number
    repairStatus: number
    vehicleId: number
    _all: number
  }


  export type ReservationAvgAggregateInputType = {
    reservationId?: true
    baseFee?: true
  }

  export type ReservationSumAggregateInputType = {
    reservationId?: true
    baseFee?: true
  }

  export type ReservationMinAggregateInputType = {
    reservationId?: true
    mobilePhone?: true
    date?: true
    baseFee?: true
    repairStatus?: true
    vehicleId?: true
  }

  export type ReservationMaxAggregateInputType = {
    reservationId?: true
    mobilePhone?: true
    date?: true
    baseFee?: true
    repairStatus?: true
    vehicleId?: true
  }

  export type ReservationCountAggregateInputType = {
    reservationId?: true
    mobilePhone?: true
    date?: true
    baseFee?: true
    repairStatus?: true
    vehicleId?: true
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
    reservationId: number
    mobilePhone: string
    date: Date
    baseFee: number | null
    repairStatus: $Enums.RepairStatus | null
    vehicleId: string
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
    reservationId?: boolean
    mobilePhone?: boolean
    date?: boolean
    baseFee?: boolean
    repairStatus?: boolean
    vehicleId?: boolean
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    diagnostic?: boolean | Reservation$diagnosticArgs<ExtArgs>
    repair?: boolean | Reservation$repairArgs<ExtArgs>
    _count?: boolean | ReservationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reservation"]>

  export type ReservationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    reservationId?: boolean
    mobilePhone?: boolean
    date?: boolean
    baseFee?: boolean
    repairStatus?: boolean
    vehicleId?: boolean
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reservation"]>

  export type ReservationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    reservationId?: boolean
    mobilePhone?: boolean
    date?: boolean
    baseFee?: boolean
    repairStatus?: boolean
    vehicleId?: boolean
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reservation"]>

  export type ReservationSelectScalar = {
    reservationId?: boolean
    mobilePhone?: boolean
    date?: boolean
    baseFee?: boolean
    repairStatus?: boolean
    vehicleId?: boolean
  }

  export type ReservationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"reservationId" | "mobilePhone" | "date" | "baseFee" | "repairStatus" | "vehicleId", ExtArgs["result"]["reservation"]>
  export type ReservationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    diagnostic?: boolean | Reservation$diagnosticArgs<ExtArgs>
    repair?: boolean | Reservation$repairArgs<ExtArgs>
    _count?: boolean | ReservationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ReservationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
  }
  export type ReservationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
  }

  export type $ReservationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reservation"
    objects: {
      vehicle: Prisma.$VehiclePayload<ExtArgs>
      diagnostic: Prisma.$DiagnosticPayload<ExtArgs>[]
      repair: Prisma.$RepairPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      reservationId: number
      mobilePhone: string
      date: Date
      baseFee: number | null
      repairStatus: $Enums.RepairStatus | null
      vehicleId: string
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
     * // Only select the `reservationId`
     * const reservationWithReservationIdOnly = await prisma.reservation.findMany({ select: { reservationId: true } })
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
     * // Create many Reservations and only return the `reservationId`
     * const reservationWithReservationIdOnly = await prisma.reservation.createManyAndReturn({
     *   select: { reservationId: true },
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
     * // Update zero or more Reservations and only return the `reservationId`
     * const reservationWithReservationIdOnly = await prisma.reservation.updateManyAndReturn({
     *   select: { reservationId: true },
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
    vehicle<T extends VehicleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VehicleDefaultArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    diagnostic<T extends Reservation$diagnosticArgs<ExtArgs> = {}>(args?: Subset<T, Reservation$diagnosticArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiagnosticPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    repair<T extends Reservation$repairArgs<ExtArgs> = {}>(args?: Subset<T, Reservation$repairArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepairPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly reservationId: FieldRef<"Reservation", 'Int'>
    readonly mobilePhone: FieldRef<"Reservation", 'String'>
    readonly date: FieldRef<"Reservation", 'DateTime'>
    readonly baseFee: FieldRef<"Reservation", 'Float'>
    readonly repairStatus: FieldRef<"Reservation", 'RepairStatus'>
    readonly vehicleId: FieldRef<"Reservation", 'String'>
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
   * Reservation.diagnostic
   */
  export type Reservation$diagnosticArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Reservation.repair
   */
  export type Reservation$repairArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    diagnosticId: number | null
    responsibleId: number | null
    reservationId: number | null
  }

  export type DiagnosticSumAggregateOutputType = {
    diagnosticId: number | null
    responsibleId: number | null
    reservationId: number | null
  }

  export type DiagnosticMinAggregateOutputType = {
    diagnosticId: number | null
    responsibleId: number | null
    reservationId: number | null
  }

  export type DiagnosticMaxAggregateOutputType = {
    diagnosticId: number | null
    responsibleId: number | null
    reservationId: number | null
  }

  export type DiagnosticCountAggregateOutputType = {
    diagnosticId: number
    responsibleId: number
    reservationId: number
    _all: number
  }


  export type DiagnosticAvgAggregateInputType = {
    diagnosticId?: true
    responsibleId?: true
    reservationId?: true
  }

  export type DiagnosticSumAggregateInputType = {
    diagnosticId?: true
    responsibleId?: true
    reservationId?: true
  }

  export type DiagnosticMinAggregateInputType = {
    diagnosticId?: true
    responsibleId?: true
    reservationId?: true
  }

  export type DiagnosticMaxAggregateInputType = {
    diagnosticId?: true
    responsibleId?: true
    reservationId?: true
  }

  export type DiagnosticCountAggregateInputType = {
    diagnosticId?: true
    responsibleId?: true
    reservationId?: true
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
    diagnosticId: number
    responsibleId: number
    reservationId: number
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
    diagnosticId?: boolean
    responsibleId?: boolean
    reservationId?: boolean
    responsible?: boolean | HeadMechanicDefaultArgs<ExtArgs>
    workersEmployed?: boolean | Diagnostic$workersEmployedArgs<ExtArgs>
    reservation?: boolean | ReservationDefaultArgs<ExtArgs>
    _count?: boolean | DiagnosticCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["diagnostic"]>

  export type DiagnosticSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    diagnosticId?: boolean
    responsibleId?: boolean
    reservationId?: boolean
    responsible?: boolean | HeadMechanicDefaultArgs<ExtArgs>
    reservation?: boolean | ReservationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["diagnostic"]>

  export type DiagnosticSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    diagnosticId?: boolean
    responsibleId?: boolean
    reservationId?: boolean
    responsible?: boolean | HeadMechanicDefaultArgs<ExtArgs>
    reservation?: boolean | ReservationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["diagnostic"]>

  export type DiagnosticSelectScalar = {
    diagnosticId?: boolean
    responsibleId?: boolean
    reservationId?: boolean
  }

  export type DiagnosticOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"diagnosticId" | "responsibleId" | "reservationId", ExtArgs["result"]["diagnostic"]>
  export type DiagnosticInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    responsible?: boolean | HeadMechanicDefaultArgs<ExtArgs>
    workersEmployed?: boolean | Diagnostic$workersEmployedArgs<ExtArgs>
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
      workersEmployed: Prisma.$MechanicPayload<ExtArgs>[]
      reservation: Prisma.$ReservationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      diagnosticId: number
      responsibleId: number
      reservationId: number
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
     * // Only select the `diagnosticId`
     * const diagnosticWithDiagnosticIdOnly = await prisma.diagnostic.findMany({ select: { diagnosticId: true } })
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
     * // Create many Diagnostics and only return the `diagnosticId`
     * const diagnosticWithDiagnosticIdOnly = await prisma.diagnostic.createManyAndReturn({
     *   select: { diagnosticId: true },
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
     * // Update zero or more Diagnostics and only return the `diagnosticId`
     * const diagnosticWithDiagnosticIdOnly = await prisma.diagnostic.updateManyAndReturn({
     *   select: { diagnosticId: true },
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
    workersEmployed<T extends Diagnostic$workersEmployedArgs<ExtArgs> = {}>(args?: Subset<T, Diagnostic$workersEmployedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MechanicPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly diagnosticId: FieldRef<"Diagnostic", 'Int'>
    readonly responsibleId: FieldRef<"Diagnostic", 'Int'>
    readonly reservationId: FieldRef<"Diagnostic", 'Int'>
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
   * Diagnostic.workersEmployed
   */
  export type Diagnostic$workersEmployedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    repairId: number | null
    responsibleId: number | null
    reservationId: number | null
    totalRepairHours: number | null
  }

  export type RepairSumAggregateOutputType = {
    repairId: number | null
    responsibleId: number | null
    reservationId: number | null
    totalRepairHours: number | null
  }

  export type RepairMinAggregateOutputType = {
    repairId: number | null
    responsibleId: number | null
    reservationId: number | null
    totalRepairHours: number | null
  }

  export type RepairMaxAggregateOutputType = {
    repairId: number | null
    responsibleId: number | null
    reservationId: number | null
    totalRepairHours: number | null
  }

  export type RepairCountAggregateOutputType = {
    repairId: number
    responsibleId: number
    reservationId: number
    totalRepairHours: number
    _all: number
  }


  export type RepairAvgAggregateInputType = {
    repairId?: true
    responsibleId?: true
    reservationId?: true
    totalRepairHours?: true
  }

  export type RepairSumAggregateInputType = {
    repairId?: true
    responsibleId?: true
    reservationId?: true
    totalRepairHours?: true
  }

  export type RepairMinAggregateInputType = {
    repairId?: true
    responsibleId?: true
    reservationId?: true
    totalRepairHours?: true
  }

  export type RepairMaxAggregateInputType = {
    repairId?: true
    responsibleId?: true
    reservationId?: true
    totalRepairHours?: true
  }

  export type RepairCountAggregateInputType = {
    repairId?: true
    responsibleId?: true
    reservationId?: true
    totalRepairHours?: true
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
    repairId: number
    responsibleId: number
    reservationId: number
    totalRepairHours: number
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
    repairId?: boolean
    responsibleId?: boolean
    reservationId?: boolean
    totalRepairHours?: boolean
    responsible?: boolean | HeadMechanicDefaultArgs<ExtArgs>
    workersEmployed?: boolean | Repair$workersEmployedArgs<ExtArgs>
    reservation?: boolean | ReservationDefaultArgs<ExtArgs>
    _count?: boolean | RepairCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["repair"]>

  export type RepairSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    repairId?: boolean
    responsibleId?: boolean
    reservationId?: boolean
    totalRepairHours?: boolean
    responsible?: boolean | HeadMechanicDefaultArgs<ExtArgs>
    reservation?: boolean | ReservationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["repair"]>

  export type RepairSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    repairId?: boolean
    responsibleId?: boolean
    reservationId?: boolean
    totalRepairHours?: boolean
    responsible?: boolean | HeadMechanicDefaultArgs<ExtArgs>
    reservation?: boolean | ReservationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["repair"]>

  export type RepairSelectScalar = {
    repairId?: boolean
    responsibleId?: boolean
    reservationId?: boolean
    totalRepairHours?: boolean
  }

  export type RepairOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"repairId" | "responsibleId" | "reservationId" | "totalRepairHours", ExtArgs["result"]["repair"]>
  export type RepairInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    responsible?: boolean | HeadMechanicDefaultArgs<ExtArgs>
    workersEmployed?: boolean | Repair$workersEmployedArgs<ExtArgs>
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
      workersEmployed: Prisma.$MechanicPayload<ExtArgs>[]
      reservation: Prisma.$ReservationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      repairId: number
      responsibleId: number
      reservationId: number
      totalRepairHours: number
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
     * // Only select the `repairId`
     * const repairWithRepairIdOnly = await prisma.repair.findMany({ select: { repairId: true } })
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
     * // Create many Repairs and only return the `repairId`
     * const repairWithRepairIdOnly = await prisma.repair.createManyAndReturn({
     *   select: { repairId: true },
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
     * // Update zero or more Repairs and only return the `repairId`
     * const repairWithRepairIdOnly = await prisma.repair.updateManyAndReturn({
     *   select: { repairId: true },
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
    workersEmployed<T extends Repair$workersEmployedArgs<ExtArgs> = {}>(args?: Subset<T, Repair$workersEmployedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MechanicPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly repairId: FieldRef<"Repair", 'Int'>
    readonly responsibleId: FieldRef<"Repair", 'Int'>
    readonly reservationId: FieldRef<"Repair", 'Int'>
    readonly totalRepairHours: FieldRef<"Repair", 'Int'>
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
   * Repair.workersEmployed
   */
  export type Repair$workersEmployedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    repairId: number | null
    vendorId: number | null
  }

  export type RepairPartSumAggregateOutputType = {
    price: number | null
    repairId: number[]
    vendorId: number[]
  }

  export type RepairPartMinAggregateOutputType = {
    partId: string | null
    price: number | null
  }

  export type RepairPartMaxAggregateOutputType = {
    partId: string | null
    price: number | null
  }

  export type RepairPartCountAggregateOutputType = {
    partId: number
    price: number
    repairId: number
    vendorId: number
    _all: number
  }


  export type RepairPartAvgAggregateInputType = {
    price?: true
    repairId?: true
    vendorId?: true
  }

  export type RepairPartSumAggregateInputType = {
    price?: true
    repairId?: true
    vendorId?: true
  }

  export type RepairPartMinAggregateInputType = {
    partId?: true
    price?: true
  }

  export type RepairPartMaxAggregateInputType = {
    partId?: true
    price?: true
  }

  export type RepairPartCountAggregateInputType = {
    partId?: true
    price?: true
    repairId?: true
    vendorId?: true
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
    partId: string
    price: number
    repairId: number[]
    vendorId: number[]
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
    partId?: boolean
    price?: boolean
    repairId?: boolean
    vendorId?: boolean
  }, ExtArgs["result"]["repairPart"]>

  export type RepairPartSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    partId?: boolean
    price?: boolean
    repairId?: boolean
    vendorId?: boolean
  }, ExtArgs["result"]["repairPart"]>

  export type RepairPartSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    partId?: boolean
    price?: boolean
    repairId?: boolean
    vendorId?: boolean
  }, ExtArgs["result"]["repairPart"]>

  export type RepairPartSelectScalar = {
    partId?: boolean
    price?: boolean
    repairId?: boolean
    vendorId?: boolean
  }

  export type RepairPartOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"partId" | "price" | "repairId" | "vendorId", ExtArgs["result"]["repairPart"]>

  export type $RepairPartPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RepairPart"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      partId: string
      price: number
      repairId: number[]
      vendorId: number[]
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
     * // Only select the `partId`
     * const repairPartWithPartIdOnly = await prisma.repairPart.findMany({ select: { partId: true } })
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
     * // Create many RepairParts and only return the `partId`
     * const repairPartWithPartIdOnly = await prisma.repairPart.createManyAndReturn({
     *   select: { partId: true },
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
     * // Update zero or more RepairParts and only return the `partId`
     * const repairPartWithPartIdOnly = await prisma.repairPart.updateManyAndReturn({
     *   select: { partId: true },
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
    readonly partId: FieldRef<"RepairPart", 'String'>
    readonly price: FieldRef<"RepairPart", 'Float'>
    readonly repairId: FieldRef<"RepairPart", 'Int[]'>
    readonly vendorId: FieldRef<"RepairPart", 'Int[]'>
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
    vendorId: number | null
  }

  export type VendorSumAggregateOutputType = {
    vendorId: number | null
  }

  export type VendorMinAggregateOutputType = {
    vendorId: number | null
    vendorShopName: string | null
    vendorShopAddress: string | null
  }

  export type VendorMaxAggregateOutputType = {
    vendorId: number | null
    vendorShopName: string | null
    vendorShopAddress: string | null
  }

  export type VendorCountAggregateOutputType = {
    vendorId: number
    vendorShopName: number
    vendorShopAddress: number
    _all: number
  }


  export type VendorAvgAggregateInputType = {
    vendorId?: true
  }

  export type VendorSumAggregateInputType = {
    vendorId?: true
  }

  export type VendorMinAggregateInputType = {
    vendorId?: true
    vendorShopName?: true
    vendorShopAddress?: true
  }

  export type VendorMaxAggregateInputType = {
    vendorId?: true
    vendorShopName?: true
    vendorShopAddress?: true
  }

  export type VendorCountAggregateInputType = {
    vendorId?: true
    vendorShopName?: true
    vendorShopAddress?: true
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
    vendorId: number
    vendorShopName: string
    vendorShopAddress: string
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
    vendorId?: boolean
    vendorShopName?: boolean
    vendorShopAddress?: boolean
  }, ExtArgs["result"]["vendor"]>

  export type VendorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    vendorId?: boolean
    vendorShopName?: boolean
    vendorShopAddress?: boolean
  }, ExtArgs["result"]["vendor"]>

  export type VendorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    vendorId?: boolean
    vendorShopName?: boolean
    vendorShopAddress?: boolean
  }, ExtArgs["result"]["vendor"]>

  export type VendorSelectScalar = {
    vendorId?: boolean
    vendorShopName?: boolean
    vendorShopAddress?: boolean
  }

  export type VendorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"vendorId" | "vendorShopName" | "vendorShopAddress", ExtArgs["result"]["vendor"]>

  export type $VendorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vendor"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      vendorId: number
      vendorShopName: string
      vendorShopAddress: string
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
     * // Only select the `vendorId`
     * const vendorWithVendorIdOnly = await prisma.vendor.findMany({ select: { vendorId: true } })
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
     * // Create many Vendors and only return the `vendorId`
     * const vendorWithVendorIdOnly = await prisma.vendor.createManyAndReturn({
     *   select: { vendorId: true },
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
     * // Update zero or more Vendors and only return the `vendorId`
     * const vendorWithVendorIdOnly = await prisma.vendor.updateManyAndReturn({
     *   select: { vendorId: true },
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
    readonly vendorId: FieldRef<"Vendor", 'Int'>
    readonly vendorShopName: FieldRef<"Vendor", 'String'>
    readonly vendorShopAddress: FieldRef<"Vendor", 'String'>
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
    userId: number | null
  }

  export type UserSumAggregateOutputType = {
    userId: number | null
  }

  export type UserMinAggregateOutputType = {
    userId: number | null
    username: string | null
    email: string | null
    phone: string | null
  }

  export type UserMaxAggregateOutputType = {
    userId: number | null
    username: string | null
    email: string | null
    phone: string | null
  }

  export type UserCountAggregateOutputType = {
    userId: number
    username: number
    email: number
    phone: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    userId?: true
  }

  export type UserSumAggregateInputType = {
    userId?: true
  }

  export type UserMinAggregateInputType = {
    userId?: true
    username?: true
    email?: true
    phone?: true
  }

  export type UserMaxAggregateInputType = {
    userId?: true
    username?: true
    email?: true
    phone?: true
  }

  export type UserCountAggregateInputType = {
    userId?: true
    username?: true
    email?: true
    phone?: true
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
    userId: number
    username: string
    email: string
    phone: string | null
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
    userId?: boolean
    username?: boolean
    email?: boolean
    phone?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    username?: boolean
    email?: boolean
    phone?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    username?: boolean
    email?: boolean
    phone?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    userId?: boolean
    username?: boolean
    email?: boolean
    phone?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "username" | "email" | "phone", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      userId: number
      username: string
      email: string
      phone: string | null
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
     * // Only select the `userId`
     * const userWithUserIdOnly = await prisma.user.findMany({ select: { userId: true } })
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
     * // Create many Users and only return the `userId`
     * const userWithUserIdOnly = await prisma.user.createManyAndReturn({
     *   select: { userId: true },
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
     * // Update zero or more Users and only return the `userId`
     * const userWithUserIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { userId: true },
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
    readonly userId: FieldRef<"User", 'Int'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
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


  export const VehicleScalarFieldEnum: {
    vin: 'vin',
    local: 'local',
    registration: 'registration',
    registrationType: 'registrationType',
    location: 'location'
  };

  export type VehicleScalarFieldEnum = (typeof VehicleScalarFieldEnum)[keyof typeof VehicleScalarFieldEnum]


  export const MechanicScalarFieldEnum: {
    mechanicId: 'mechanicId',
    payPerHour: 'payPerHour',
    diagnosticDiagnosticId: 'diagnosticDiagnosticId',
    repairRepairId: 'repairRepairId'
  };

  export type MechanicScalarFieldEnum = (typeof MechanicScalarFieldEnum)[keyof typeof MechanicScalarFieldEnum]


  export const HeadMechanicScalarFieldEnum: {
    mechanicId: 'mechanicId'
  };

  export type HeadMechanicScalarFieldEnum = (typeof HeadMechanicScalarFieldEnum)[keyof typeof HeadMechanicScalarFieldEnum]


  export const ReservationScalarFieldEnum: {
    reservationId: 'reservationId',
    mobilePhone: 'mobilePhone',
    date: 'date',
    baseFee: 'baseFee',
    repairStatus: 'repairStatus',
    vehicleId: 'vehicleId'
  };

  export type ReservationScalarFieldEnum = (typeof ReservationScalarFieldEnum)[keyof typeof ReservationScalarFieldEnum]


  export const DiagnosticScalarFieldEnum: {
    diagnosticId: 'diagnosticId',
    responsibleId: 'responsibleId',
    reservationId: 'reservationId'
  };

  export type DiagnosticScalarFieldEnum = (typeof DiagnosticScalarFieldEnum)[keyof typeof DiagnosticScalarFieldEnum]


  export const RepairScalarFieldEnum: {
    repairId: 'repairId',
    responsibleId: 'responsibleId',
    reservationId: 'reservationId',
    totalRepairHours: 'totalRepairHours'
  };

  export type RepairScalarFieldEnum = (typeof RepairScalarFieldEnum)[keyof typeof RepairScalarFieldEnum]


  export const RepairPartScalarFieldEnum: {
    partId: 'partId',
    price: 'price',
    repairId: 'repairId',
    vendorId: 'vendorId'
  };

  export type RepairPartScalarFieldEnum = (typeof RepairPartScalarFieldEnum)[keyof typeof RepairPartScalarFieldEnum]


  export const VendorScalarFieldEnum: {
    vendorId: 'vendorId',
    vendorShopName: 'vendorShopName',
    vendorShopAddress: 'vendorShopAddress'
  };

  export type VendorScalarFieldEnum = (typeof VendorScalarFieldEnum)[keyof typeof VendorScalarFieldEnum]


  export const UserScalarFieldEnum: {
    userId: 'userId',
    username: 'username',
    email: 'email',
    phone: 'phone'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


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


  export type VehicleWhereInput = {
    AND?: VehicleWhereInput | VehicleWhereInput[]
    OR?: VehicleWhereInput[]
    NOT?: VehicleWhereInput | VehicleWhereInput[]
    vin?: StringFilter<"Vehicle"> | string
    local?: BoolFilter<"Vehicle"> | boolean
    registration?: StringNullableFilter<"Vehicle"> | string | null
    registrationType?: EnumRegTypesNullableFilter<"Vehicle"> | $Enums.RegTypes | null
    location?: StringNullableFilter<"Vehicle"> | string | null
    reservation?: ReservationListRelationFilter
  }

  export type VehicleOrderByWithRelationInput = {
    vin?: SortOrder
    local?: SortOrder
    registration?: SortOrderInput | SortOrder
    registrationType?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    reservation?: ReservationOrderByRelationAggregateInput
  }

  export type VehicleWhereUniqueInput = Prisma.AtLeast<{
    vin?: string
    AND?: VehicleWhereInput | VehicleWhereInput[]
    OR?: VehicleWhereInput[]
    NOT?: VehicleWhereInput | VehicleWhereInput[]
    local?: BoolFilter<"Vehicle"> | boolean
    registration?: StringNullableFilter<"Vehicle"> | string | null
    registrationType?: EnumRegTypesNullableFilter<"Vehicle"> | $Enums.RegTypes | null
    location?: StringNullableFilter<"Vehicle"> | string | null
    reservation?: ReservationListRelationFilter
  }, "vin">

  export type VehicleOrderByWithAggregationInput = {
    vin?: SortOrder
    local?: SortOrder
    registration?: SortOrderInput | SortOrder
    registrationType?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    _count?: VehicleCountOrderByAggregateInput
    _max?: VehicleMaxOrderByAggregateInput
    _min?: VehicleMinOrderByAggregateInput
  }

  export type VehicleScalarWhereWithAggregatesInput = {
    AND?: VehicleScalarWhereWithAggregatesInput | VehicleScalarWhereWithAggregatesInput[]
    OR?: VehicleScalarWhereWithAggregatesInput[]
    NOT?: VehicleScalarWhereWithAggregatesInput | VehicleScalarWhereWithAggregatesInput[]
    vin?: StringWithAggregatesFilter<"Vehicle"> | string
    local?: BoolWithAggregatesFilter<"Vehicle"> | boolean
    registration?: StringNullableWithAggregatesFilter<"Vehicle"> | string | null
    registrationType?: EnumRegTypesNullableWithAggregatesFilter<"Vehicle"> | $Enums.RegTypes | null
    location?: StringNullableWithAggregatesFilter<"Vehicle"> | string | null
  }

  export type MechanicWhereInput = {
    AND?: MechanicWhereInput | MechanicWhereInput[]
    OR?: MechanicWhereInput[]
    NOT?: MechanicWhereInput | MechanicWhereInput[]
    mechanicId?: IntFilter<"Mechanic"> | number
    payPerHour?: FloatFilter<"Mechanic"> | number
    diagnosticDiagnosticId?: IntNullableFilter<"Mechanic"> | number | null
    repairRepairId?: IntNullableFilter<"Mechanic"> | number | null
    headMechanic?: XOR<HeadMechanicNullableScalarRelationFilter, HeadMechanicWhereInput> | null
    diagnostic?: XOR<DiagnosticNullableScalarRelationFilter, DiagnosticWhereInput> | null
    repair?: XOR<RepairNullableScalarRelationFilter, RepairWhereInput> | null
  }

  export type MechanicOrderByWithRelationInput = {
    mechanicId?: SortOrder
    payPerHour?: SortOrder
    diagnosticDiagnosticId?: SortOrderInput | SortOrder
    repairRepairId?: SortOrderInput | SortOrder
    headMechanic?: HeadMechanicOrderByWithRelationInput
    diagnostic?: DiagnosticOrderByWithRelationInput
    repair?: RepairOrderByWithRelationInput
  }

  export type MechanicWhereUniqueInput = Prisma.AtLeast<{
    mechanicId?: number
    AND?: MechanicWhereInput | MechanicWhereInput[]
    OR?: MechanicWhereInput[]
    NOT?: MechanicWhereInput | MechanicWhereInput[]
    payPerHour?: FloatFilter<"Mechanic"> | number
    diagnosticDiagnosticId?: IntNullableFilter<"Mechanic"> | number | null
    repairRepairId?: IntNullableFilter<"Mechanic"> | number | null
    headMechanic?: XOR<HeadMechanicNullableScalarRelationFilter, HeadMechanicWhereInput> | null
    diagnostic?: XOR<DiagnosticNullableScalarRelationFilter, DiagnosticWhereInput> | null
    repair?: XOR<RepairNullableScalarRelationFilter, RepairWhereInput> | null
  }, "mechanicId">

  export type MechanicOrderByWithAggregationInput = {
    mechanicId?: SortOrder
    payPerHour?: SortOrder
    diagnosticDiagnosticId?: SortOrderInput | SortOrder
    repairRepairId?: SortOrderInput | SortOrder
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
    mechanicId?: IntWithAggregatesFilter<"Mechanic"> | number
    payPerHour?: FloatWithAggregatesFilter<"Mechanic"> | number
    diagnosticDiagnosticId?: IntNullableWithAggregatesFilter<"Mechanic"> | number | null
    repairRepairId?: IntNullableWithAggregatesFilter<"Mechanic"> | number | null
  }

  export type HeadMechanicWhereInput = {
    AND?: HeadMechanicWhereInput | HeadMechanicWhereInput[]
    OR?: HeadMechanicWhereInput[]
    NOT?: HeadMechanicWhereInput | HeadMechanicWhereInput[]
    mechanicId?: IntFilter<"HeadMechanic"> | number
    mechanic?: XOR<MechanicScalarRelationFilter, MechanicWhereInput>
    diagnostic?: DiagnosticListRelationFilter
    repair?: RepairListRelationFilter
  }

  export type HeadMechanicOrderByWithRelationInput = {
    mechanicId?: SortOrder
    mechanic?: MechanicOrderByWithRelationInput
    diagnostic?: DiagnosticOrderByRelationAggregateInput
    repair?: RepairOrderByRelationAggregateInput
  }

  export type HeadMechanicWhereUniqueInput = Prisma.AtLeast<{
    mechanicId?: number
    AND?: HeadMechanicWhereInput | HeadMechanicWhereInput[]
    OR?: HeadMechanicWhereInput[]
    NOT?: HeadMechanicWhereInput | HeadMechanicWhereInput[]
    mechanic?: XOR<MechanicScalarRelationFilter, MechanicWhereInput>
    diagnostic?: DiagnosticListRelationFilter
    repair?: RepairListRelationFilter
  }, "mechanicId">

  export type HeadMechanicOrderByWithAggregationInput = {
    mechanicId?: SortOrder
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
    mechanicId?: IntWithAggregatesFilter<"HeadMechanic"> | number
  }

  export type ReservationWhereInput = {
    AND?: ReservationWhereInput | ReservationWhereInput[]
    OR?: ReservationWhereInput[]
    NOT?: ReservationWhereInput | ReservationWhereInput[]
    reservationId?: IntFilter<"Reservation"> | number
    mobilePhone?: StringFilter<"Reservation"> | string
    date?: DateTimeFilter<"Reservation"> | Date | string
    baseFee?: FloatNullableFilter<"Reservation"> | number | null
    repairStatus?: EnumRepairStatusNullableFilter<"Reservation"> | $Enums.RepairStatus | null
    vehicleId?: StringFilter<"Reservation"> | string
    vehicle?: XOR<VehicleScalarRelationFilter, VehicleWhereInput>
    diagnostic?: DiagnosticListRelationFilter
    repair?: RepairListRelationFilter
  }

  export type ReservationOrderByWithRelationInput = {
    reservationId?: SortOrder
    mobilePhone?: SortOrder
    date?: SortOrder
    baseFee?: SortOrderInput | SortOrder
    repairStatus?: SortOrderInput | SortOrder
    vehicleId?: SortOrder
    vehicle?: VehicleOrderByWithRelationInput
    diagnostic?: DiagnosticOrderByRelationAggregateInput
    repair?: RepairOrderByRelationAggregateInput
  }

  export type ReservationWhereUniqueInput = Prisma.AtLeast<{
    reservationId?: number
    AND?: ReservationWhereInput | ReservationWhereInput[]
    OR?: ReservationWhereInput[]
    NOT?: ReservationWhereInput | ReservationWhereInput[]
    mobilePhone?: StringFilter<"Reservation"> | string
    date?: DateTimeFilter<"Reservation"> | Date | string
    baseFee?: FloatNullableFilter<"Reservation"> | number | null
    repairStatus?: EnumRepairStatusNullableFilter<"Reservation"> | $Enums.RepairStatus | null
    vehicleId?: StringFilter<"Reservation"> | string
    vehicle?: XOR<VehicleScalarRelationFilter, VehicleWhereInput>
    diagnostic?: DiagnosticListRelationFilter
    repair?: RepairListRelationFilter
  }, "reservationId">

  export type ReservationOrderByWithAggregationInput = {
    reservationId?: SortOrder
    mobilePhone?: SortOrder
    date?: SortOrder
    baseFee?: SortOrderInput | SortOrder
    repairStatus?: SortOrderInput | SortOrder
    vehicleId?: SortOrder
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
    reservationId?: IntWithAggregatesFilter<"Reservation"> | number
    mobilePhone?: StringWithAggregatesFilter<"Reservation"> | string
    date?: DateTimeWithAggregatesFilter<"Reservation"> | Date | string
    baseFee?: FloatNullableWithAggregatesFilter<"Reservation"> | number | null
    repairStatus?: EnumRepairStatusNullableWithAggregatesFilter<"Reservation"> | $Enums.RepairStatus | null
    vehicleId?: StringWithAggregatesFilter<"Reservation"> | string
  }

  export type DiagnosticWhereInput = {
    AND?: DiagnosticWhereInput | DiagnosticWhereInput[]
    OR?: DiagnosticWhereInput[]
    NOT?: DiagnosticWhereInput | DiagnosticWhereInput[]
    diagnosticId?: IntFilter<"Diagnostic"> | number
    responsibleId?: IntFilter<"Diagnostic"> | number
    reservationId?: IntFilter<"Diagnostic"> | number
    responsible?: XOR<HeadMechanicScalarRelationFilter, HeadMechanicWhereInput>
    workersEmployed?: MechanicListRelationFilter
    reservation?: XOR<ReservationScalarRelationFilter, ReservationWhereInput>
  }

  export type DiagnosticOrderByWithRelationInput = {
    diagnosticId?: SortOrder
    responsibleId?: SortOrder
    reservationId?: SortOrder
    responsible?: HeadMechanicOrderByWithRelationInput
    workersEmployed?: MechanicOrderByRelationAggregateInput
    reservation?: ReservationOrderByWithRelationInput
  }

  export type DiagnosticWhereUniqueInput = Prisma.AtLeast<{
    diagnosticId?: number
    AND?: DiagnosticWhereInput | DiagnosticWhereInput[]
    OR?: DiagnosticWhereInput[]
    NOT?: DiagnosticWhereInput | DiagnosticWhereInput[]
    responsibleId?: IntFilter<"Diagnostic"> | number
    reservationId?: IntFilter<"Diagnostic"> | number
    responsible?: XOR<HeadMechanicScalarRelationFilter, HeadMechanicWhereInput>
    workersEmployed?: MechanicListRelationFilter
    reservation?: XOR<ReservationScalarRelationFilter, ReservationWhereInput>
  }, "diagnosticId">

  export type DiagnosticOrderByWithAggregationInput = {
    diagnosticId?: SortOrder
    responsibleId?: SortOrder
    reservationId?: SortOrder
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
    diagnosticId?: IntWithAggregatesFilter<"Diagnostic"> | number
    responsibleId?: IntWithAggregatesFilter<"Diagnostic"> | number
    reservationId?: IntWithAggregatesFilter<"Diagnostic"> | number
  }

  export type RepairWhereInput = {
    AND?: RepairWhereInput | RepairWhereInput[]
    OR?: RepairWhereInput[]
    NOT?: RepairWhereInput | RepairWhereInput[]
    repairId?: IntFilter<"Repair"> | number
    responsibleId?: IntFilter<"Repair"> | number
    reservationId?: IntFilter<"Repair"> | number
    totalRepairHours?: IntFilter<"Repair"> | number
    responsible?: XOR<HeadMechanicScalarRelationFilter, HeadMechanicWhereInput>
    workersEmployed?: MechanicListRelationFilter
    reservation?: XOR<ReservationScalarRelationFilter, ReservationWhereInput>
  }

  export type RepairOrderByWithRelationInput = {
    repairId?: SortOrder
    responsibleId?: SortOrder
    reservationId?: SortOrder
    totalRepairHours?: SortOrder
    responsible?: HeadMechanicOrderByWithRelationInput
    workersEmployed?: MechanicOrderByRelationAggregateInput
    reservation?: ReservationOrderByWithRelationInput
  }

  export type RepairWhereUniqueInput = Prisma.AtLeast<{
    repairId?: number
    AND?: RepairWhereInput | RepairWhereInput[]
    OR?: RepairWhereInput[]
    NOT?: RepairWhereInput | RepairWhereInput[]
    responsibleId?: IntFilter<"Repair"> | number
    reservationId?: IntFilter<"Repair"> | number
    totalRepairHours?: IntFilter<"Repair"> | number
    responsible?: XOR<HeadMechanicScalarRelationFilter, HeadMechanicWhereInput>
    workersEmployed?: MechanicListRelationFilter
    reservation?: XOR<ReservationScalarRelationFilter, ReservationWhereInput>
  }, "repairId">

  export type RepairOrderByWithAggregationInput = {
    repairId?: SortOrder
    responsibleId?: SortOrder
    reservationId?: SortOrder
    totalRepairHours?: SortOrder
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
    repairId?: IntWithAggregatesFilter<"Repair"> | number
    responsibleId?: IntWithAggregatesFilter<"Repair"> | number
    reservationId?: IntWithAggregatesFilter<"Repair"> | number
    totalRepairHours?: IntWithAggregatesFilter<"Repair"> | number
  }

  export type RepairPartWhereInput = {
    AND?: RepairPartWhereInput | RepairPartWhereInput[]
    OR?: RepairPartWhereInput[]
    NOT?: RepairPartWhereInput | RepairPartWhereInput[]
    partId?: StringFilter<"RepairPart"> | string
    price?: FloatFilter<"RepairPart"> | number
    repairId?: IntNullableListFilter<"RepairPart">
    vendorId?: IntNullableListFilter<"RepairPart">
  }

  export type RepairPartOrderByWithRelationInput = {
    partId?: SortOrder
    price?: SortOrder
    repairId?: SortOrder
    vendorId?: SortOrder
  }

  export type RepairPartWhereUniqueInput = Prisma.AtLeast<{
    partId?: string
    AND?: RepairPartWhereInput | RepairPartWhereInput[]
    OR?: RepairPartWhereInput[]
    NOT?: RepairPartWhereInput | RepairPartWhereInput[]
    price?: FloatFilter<"RepairPart"> | number
    repairId?: IntNullableListFilter<"RepairPart">
    vendorId?: IntNullableListFilter<"RepairPart">
  }, "partId">

  export type RepairPartOrderByWithAggregationInput = {
    partId?: SortOrder
    price?: SortOrder
    repairId?: SortOrder
    vendorId?: SortOrder
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
    partId?: StringWithAggregatesFilter<"RepairPart"> | string
    price?: FloatWithAggregatesFilter<"RepairPart"> | number
    repairId?: IntNullableListFilter<"RepairPart">
    vendorId?: IntNullableListFilter<"RepairPart">
  }

  export type VendorWhereInput = {
    AND?: VendorWhereInput | VendorWhereInput[]
    OR?: VendorWhereInput[]
    NOT?: VendorWhereInput | VendorWhereInput[]
    vendorId?: IntFilter<"Vendor"> | number
    vendorShopName?: StringFilter<"Vendor"> | string
    vendorShopAddress?: StringFilter<"Vendor"> | string
  }

  export type VendorOrderByWithRelationInput = {
    vendorId?: SortOrder
    vendorShopName?: SortOrder
    vendorShopAddress?: SortOrder
  }

  export type VendorWhereUniqueInput = Prisma.AtLeast<{
    vendorId?: number
    AND?: VendorWhereInput | VendorWhereInput[]
    OR?: VendorWhereInput[]
    NOT?: VendorWhereInput | VendorWhereInput[]
    vendorShopName?: StringFilter<"Vendor"> | string
    vendorShopAddress?: StringFilter<"Vendor"> | string
  }, "vendorId">

  export type VendorOrderByWithAggregationInput = {
    vendorId?: SortOrder
    vendorShopName?: SortOrder
    vendorShopAddress?: SortOrder
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
    vendorId?: IntWithAggregatesFilter<"Vendor"> | number
    vendorShopName?: StringWithAggregatesFilter<"Vendor"> | string
    vendorShopAddress?: StringWithAggregatesFilter<"Vendor"> | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    userId?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
  }

  export type UserOrderByWithRelationInput = {
    userId?: SortOrder
    username?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    userId?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    username?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
  }, "userId" | "email">

  export type UserOrderByWithAggregationInput = {
    userId?: SortOrder
    username?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
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
    userId?: IntWithAggregatesFilter<"User"> | number
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type VehicleCreateInput = {
    vin: string
    local: boolean
    registration?: string | null
    registrationType?: $Enums.RegTypes | null
    location?: string | null
    reservation?: ReservationCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUncheckedCreateInput = {
    vin: string
    local: boolean
    registration?: string | null
    registrationType?: $Enums.RegTypes | null
    location?: string | null
    reservation?: ReservationUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUpdateInput = {
    vin?: StringFieldUpdateOperationsInput | string
    local?: BoolFieldUpdateOperationsInput | boolean
    registration?: NullableStringFieldUpdateOperationsInput | string | null
    registrationType?: NullableEnumRegTypesFieldUpdateOperationsInput | $Enums.RegTypes | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    reservation?: ReservationUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateInput = {
    vin?: StringFieldUpdateOperationsInput | string
    local?: BoolFieldUpdateOperationsInput | boolean
    registration?: NullableStringFieldUpdateOperationsInput | string | null
    registrationType?: NullableEnumRegTypesFieldUpdateOperationsInput | $Enums.RegTypes | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    reservation?: ReservationUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleCreateManyInput = {
    vin: string
    local: boolean
    registration?: string | null
    registrationType?: $Enums.RegTypes | null
    location?: string | null
  }

  export type VehicleUpdateManyMutationInput = {
    vin?: StringFieldUpdateOperationsInput | string
    local?: BoolFieldUpdateOperationsInput | boolean
    registration?: NullableStringFieldUpdateOperationsInput | string | null
    registrationType?: NullableEnumRegTypesFieldUpdateOperationsInput | $Enums.RegTypes | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VehicleUncheckedUpdateManyInput = {
    vin?: StringFieldUpdateOperationsInput | string
    local?: BoolFieldUpdateOperationsInput | boolean
    registration?: NullableStringFieldUpdateOperationsInput | string | null
    registrationType?: NullableEnumRegTypesFieldUpdateOperationsInput | $Enums.RegTypes | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MechanicCreateInput = {
    mechanicId: number
    payPerHour: number
    headMechanic?: HeadMechanicCreateNestedOneWithoutMechanicInput
    diagnostic?: DiagnosticCreateNestedOneWithoutWorkersEmployedInput
    repair?: RepairCreateNestedOneWithoutWorkersEmployedInput
  }

  export type MechanicUncheckedCreateInput = {
    mechanicId: number
    payPerHour: number
    diagnosticDiagnosticId?: number | null
    repairRepairId?: number | null
    headMechanic?: HeadMechanicUncheckedCreateNestedOneWithoutMechanicInput
  }

  export type MechanicUpdateInput = {
    mechanicId?: IntFieldUpdateOperationsInput | number
    payPerHour?: FloatFieldUpdateOperationsInput | number
    headMechanic?: HeadMechanicUpdateOneWithoutMechanicNestedInput
    diagnostic?: DiagnosticUpdateOneWithoutWorkersEmployedNestedInput
    repair?: RepairUpdateOneWithoutWorkersEmployedNestedInput
  }

  export type MechanicUncheckedUpdateInput = {
    mechanicId?: IntFieldUpdateOperationsInput | number
    payPerHour?: FloatFieldUpdateOperationsInput | number
    diagnosticDiagnosticId?: NullableIntFieldUpdateOperationsInput | number | null
    repairRepairId?: NullableIntFieldUpdateOperationsInput | number | null
    headMechanic?: HeadMechanicUncheckedUpdateOneWithoutMechanicNestedInput
  }

  export type MechanicCreateManyInput = {
    mechanicId: number
    payPerHour: number
    diagnosticDiagnosticId?: number | null
    repairRepairId?: number | null
  }

  export type MechanicUpdateManyMutationInput = {
    mechanicId?: IntFieldUpdateOperationsInput | number
    payPerHour?: FloatFieldUpdateOperationsInput | number
  }

  export type MechanicUncheckedUpdateManyInput = {
    mechanicId?: IntFieldUpdateOperationsInput | number
    payPerHour?: FloatFieldUpdateOperationsInput | number
    diagnosticDiagnosticId?: NullableIntFieldUpdateOperationsInput | number | null
    repairRepairId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type HeadMechanicCreateInput = {
    mechanic: MechanicCreateNestedOneWithoutHeadMechanicInput
    diagnostic?: DiagnosticCreateNestedManyWithoutResponsibleInput
    repair?: RepairCreateNestedManyWithoutResponsibleInput
  }

  export type HeadMechanicUncheckedCreateInput = {
    mechanicId: number
    diagnostic?: DiagnosticUncheckedCreateNestedManyWithoutResponsibleInput
    repair?: RepairUncheckedCreateNestedManyWithoutResponsibleInput
  }

  export type HeadMechanicUpdateInput = {
    mechanic?: MechanicUpdateOneRequiredWithoutHeadMechanicNestedInput
    diagnostic?: DiagnosticUpdateManyWithoutResponsibleNestedInput
    repair?: RepairUpdateManyWithoutResponsibleNestedInput
  }

  export type HeadMechanicUncheckedUpdateInput = {
    mechanicId?: IntFieldUpdateOperationsInput | number
    diagnostic?: DiagnosticUncheckedUpdateManyWithoutResponsibleNestedInput
    repair?: RepairUncheckedUpdateManyWithoutResponsibleNestedInput
  }

  export type HeadMechanicCreateManyInput = {
    mechanicId: number
  }

  export type HeadMechanicUpdateManyMutationInput = {

  }

  export type HeadMechanicUncheckedUpdateManyInput = {
    mechanicId?: IntFieldUpdateOperationsInput | number
  }

  export type ReservationCreateInput = {
    mobilePhone: string
    date: Date | string
    baseFee?: number | null
    repairStatus?: $Enums.RepairStatus | null
    vehicle: VehicleCreateNestedOneWithoutReservationInput
    diagnostic?: DiagnosticCreateNestedManyWithoutReservationInput
    repair?: RepairCreateNestedManyWithoutReservationInput
  }

  export type ReservationUncheckedCreateInput = {
    reservationId?: number
    mobilePhone: string
    date: Date | string
    baseFee?: number | null
    repairStatus?: $Enums.RepairStatus | null
    vehicleId: string
    diagnostic?: DiagnosticUncheckedCreateNestedManyWithoutReservationInput
    repair?: RepairUncheckedCreateNestedManyWithoutReservationInput
  }

  export type ReservationUpdateInput = {
    mobilePhone?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    baseFee?: NullableFloatFieldUpdateOperationsInput | number | null
    repairStatus?: NullableEnumRepairStatusFieldUpdateOperationsInput | $Enums.RepairStatus | null
    vehicle?: VehicleUpdateOneRequiredWithoutReservationNestedInput
    diagnostic?: DiagnosticUpdateManyWithoutReservationNestedInput
    repair?: RepairUpdateManyWithoutReservationNestedInput
  }

  export type ReservationUncheckedUpdateInput = {
    reservationId?: IntFieldUpdateOperationsInput | number
    mobilePhone?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    baseFee?: NullableFloatFieldUpdateOperationsInput | number | null
    repairStatus?: NullableEnumRepairStatusFieldUpdateOperationsInput | $Enums.RepairStatus | null
    vehicleId?: StringFieldUpdateOperationsInput | string
    diagnostic?: DiagnosticUncheckedUpdateManyWithoutReservationNestedInput
    repair?: RepairUncheckedUpdateManyWithoutReservationNestedInput
  }

  export type ReservationCreateManyInput = {
    reservationId?: number
    mobilePhone: string
    date: Date | string
    baseFee?: number | null
    repairStatus?: $Enums.RepairStatus | null
    vehicleId: string
  }

  export type ReservationUpdateManyMutationInput = {
    mobilePhone?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    baseFee?: NullableFloatFieldUpdateOperationsInput | number | null
    repairStatus?: NullableEnumRepairStatusFieldUpdateOperationsInput | $Enums.RepairStatus | null
  }

  export type ReservationUncheckedUpdateManyInput = {
    reservationId?: IntFieldUpdateOperationsInput | number
    mobilePhone?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    baseFee?: NullableFloatFieldUpdateOperationsInput | number | null
    repairStatus?: NullableEnumRepairStatusFieldUpdateOperationsInput | $Enums.RepairStatus | null
    vehicleId?: StringFieldUpdateOperationsInput | string
  }

  export type DiagnosticCreateInput = {
    responsible: HeadMechanicCreateNestedOneWithoutDiagnosticInput
    workersEmployed?: MechanicCreateNestedManyWithoutDiagnosticInput
    reservation: ReservationCreateNestedOneWithoutDiagnosticInput
  }

  export type DiagnosticUncheckedCreateInput = {
    diagnosticId?: number
    responsibleId: number
    reservationId: number
    workersEmployed?: MechanicUncheckedCreateNestedManyWithoutDiagnosticInput
  }

  export type DiagnosticUpdateInput = {
    responsible?: HeadMechanicUpdateOneRequiredWithoutDiagnosticNestedInput
    workersEmployed?: MechanicUpdateManyWithoutDiagnosticNestedInput
    reservation?: ReservationUpdateOneRequiredWithoutDiagnosticNestedInput
  }

  export type DiagnosticUncheckedUpdateInput = {
    diagnosticId?: IntFieldUpdateOperationsInput | number
    responsibleId?: IntFieldUpdateOperationsInput | number
    reservationId?: IntFieldUpdateOperationsInput | number
    workersEmployed?: MechanicUncheckedUpdateManyWithoutDiagnosticNestedInput
  }

  export type DiagnosticCreateManyInput = {
    diagnosticId?: number
    responsibleId: number
    reservationId: number
  }

  export type DiagnosticUpdateManyMutationInput = {

  }

  export type DiagnosticUncheckedUpdateManyInput = {
    diagnosticId?: IntFieldUpdateOperationsInput | number
    responsibleId?: IntFieldUpdateOperationsInput | number
    reservationId?: IntFieldUpdateOperationsInput | number
  }

  export type RepairCreateInput = {
    totalRepairHours: number
    responsible: HeadMechanicCreateNestedOneWithoutRepairInput
    workersEmployed?: MechanicCreateNestedManyWithoutRepairInput
    reservation: ReservationCreateNestedOneWithoutRepairInput
  }

  export type RepairUncheckedCreateInput = {
    repairId?: number
    responsibleId: number
    reservationId: number
    totalRepairHours: number
    workersEmployed?: MechanicUncheckedCreateNestedManyWithoutRepairInput
  }

  export type RepairUpdateInput = {
    totalRepairHours?: IntFieldUpdateOperationsInput | number
    responsible?: HeadMechanicUpdateOneRequiredWithoutRepairNestedInput
    workersEmployed?: MechanicUpdateManyWithoutRepairNestedInput
    reservation?: ReservationUpdateOneRequiredWithoutRepairNestedInput
  }

  export type RepairUncheckedUpdateInput = {
    repairId?: IntFieldUpdateOperationsInput | number
    responsibleId?: IntFieldUpdateOperationsInput | number
    reservationId?: IntFieldUpdateOperationsInput | number
    totalRepairHours?: IntFieldUpdateOperationsInput | number
    workersEmployed?: MechanicUncheckedUpdateManyWithoutRepairNestedInput
  }

  export type RepairCreateManyInput = {
    repairId?: number
    responsibleId: number
    reservationId: number
    totalRepairHours: number
  }

  export type RepairUpdateManyMutationInput = {
    totalRepairHours?: IntFieldUpdateOperationsInput | number
  }

  export type RepairUncheckedUpdateManyInput = {
    repairId?: IntFieldUpdateOperationsInput | number
    responsibleId?: IntFieldUpdateOperationsInput | number
    reservationId?: IntFieldUpdateOperationsInput | number
    totalRepairHours?: IntFieldUpdateOperationsInput | number
  }

  export type RepairPartCreateInput = {
    partId: string
    price: number
    repairId?: RepairPartCreaterepairIdInput | number[]
    vendorId?: RepairPartCreatevendorIdInput | number[]
  }

  export type RepairPartUncheckedCreateInput = {
    partId: string
    price: number
    repairId?: RepairPartCreaterepairIdInput | number[]
    vendorId?: RepairPartCreatevendorIdInput | number[]
  }

  export type RepairPartUpdateInput = {
    partId?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    repairId?: RepairPartUpdaterepairIdInput | number[]
    vendorId?: RepairPartUpdatevendorIdInput | number[]
  }

  export type RepairPartUncheckedUpdateInput = {
    partId?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    repairId?: RepairPartUpdaterepairIdInput | number[]
    vendorId?: RepairPartUpdatevendorIdInput | number[]
  }

  export type RepairPartCreateManyInput = {
    partId: string
    price: number
    repairId?: RepairPartCreaterepairIdInput | number[]
    vendorId?: RepairPartCreatevendorIdInput | number[]
  }

  export type RepairPartUpdateManyMutationInput = {
    partId?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    repairId?: RepairPartUpdaterepairIdInput | number[]
    vendorId?: RepairPartUpdatevendorIdInput | number[]
  }

  export type RepairPartUncheckedUpdateManyInput = {
    partId?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    repairId?: RepairPartUpdaterepairIdInput | number[]
    vendorId?: RepairPartUpdatevendorIdInput | number[]
  }

  export type VendorCreateInput = {
    vendorId: number
    vendorShopName: string
    vendorShopAddress: string
  }

  export type VendorUncheckedCreateInput = {
    vendorId: number
    vendorShopName: string
    vendorShopAddress: string
  }

  export type VendorUpdateInput = {
    vendorId?: IntFieldUpdateOperationsInput | number
    vendorShopName?: StringFieldUpdateOperationsInput | string
    vendorShopAddress?: StringFieldUpdateOperationsInput | string
  }

  export type VendorUncheckedUpdateInput = {
    vendorId?: IntFieldUpdateOperationsInput | number
    vendorShopName?: StringFieldUpdateOperationsInput | string
    vendorShopAddress?: StringFieldUpdateOperationsInput | string
  }

  export type VendorCreateManyInput = {
    vendorId: number
    vendorShopName: string
    vendorShopAddress: string
  }

  export type VendorUpdateManyMutationInput = {
    vendorId?: IntFieldUpdateOperationsInput | number
    vendorShopName?: StringFieldUpdateOperationsInput | string
    vendorShopAddress?: StringFieldUpdateOperationsInput | string
  }

  export type VendorUncheckedUpdateManyInput = {
    vendorId?: IntFieldUpdateOperationsInput | number
    vendorShopName?: StringFieldUpdateOperationsInput | string
    vendorShopAddress?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateInput = {
    username?: string
    email: string
    phone?: string | null
  }

  export type UserUncheckedCreateInput = {
    userId?: number
    username?: string
    email: string
    phone?: string | null
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateManyInput = {
    userId?: number
    username?: string
    email: string
    phone?: string | null
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    userId?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type EnumRegTypesNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.RegTypes | EnumRegTypesFieldRefInput<$PrismaModel> | null
    in?: $Enums.RegTypes[] | ListEnumRegTypesFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.RegTypes[] | ListEnumRegTypesFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRegTypesNullableFilter<$PrismaModel> | $Enums.RegTypes | null
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

  export type VehicleCountOrderByAggregateInput = {
    vin?: SortOrder
    local?: SortOrder
    registration?: SortOrder
    registrationType?: SortOrder
    location?: SortOrder
  }

  export type VehicleMaxOrderByAggregateInput = {
    vin?: SortOrder
    local?: SortOrder
    registration?: SortOrder
    registrationType?: SortOrder
    location?: SortOrder
  }

  export type VehicleMinOrderByAggregateInput = {
    vin?: SortOrder
    local?: SortOrder
    registration?: SortOrder
    registrationType?: SortOrder
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

  export type EnumRegTypesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RegTypes | EnumRegTypesFieldRefInput<$PrismaModel> | null
    in?: $Enums.RegTypes[] | ListEnumRegTypesFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.RegTypes[] | ListEnumRegTypesFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRegTypesNullableWithAggregatesFilter<$PrismaModel> | $Enums.RegTypes | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumRegTypesNullableFilter<$PrismaModel>
    _max?: NestedEnumRegTypesNullableFilter<$PrismaModel>
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
    mechanicId?: SortOrder
    payPerHour?: SortOrder
    diagnosticDiagnosticId?: SortOrder
    repairRepairId?: SortOrder
  }

  export type MechanicAvgOrderByAggregateInput = {
    mechanicId?: SortOrder
    payPerHour?: SortOrder
    diagnosticDiagnosticId?: SortOrder
    repairRepairId?: SortOrder
  }

  export type MechanicMaxOrderByAggregateInput = {
    mechanicId?: SortOrder
    payPerHour?: SortOrder
    diagnosticDiagnosticId?: SortOrder
    repairRepairId?: SortOrder
  }

  export type MechanicMinOrderByAggregateInput = {
    mechanicId?: SortOrder
    payPerHour?: SortOrder
    diagnosticDiagnosticId?: SortOrder
    repairRepairId?: SortOrder
  }

  export type MechanicSumOrderByAggregateInput = {
    mechanicId?: SortOrder
    payPerHour?: SortOrder
    diagnosticDiagnosticId?: SortOrder
    repairRepairId?: SortOrder
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
    mechanicId?: SortOrder
  }

  export type HeadMechanicAvgOrderByAggregateInput = {
    mechanicId?: SortOrder
  }

  export type HeadMechanicMaxOrderByAggregateInput = {
    mechanicId?: SortOrder
  }

  export type HeadMechanicMinOrderByAggregateInput = {
    mechanicId?: SortOrder
  }

  export type HeadMechanicSumOrderByAggregateInput = {
    mechanicId?: SortOrder
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

  export type VehicleScalarRelationFilter = {
    is?: VehicleWhereInput
    isNot?: VehicleWhereInput
  }

  export type ReservationCountOrderByAggregateInput = {
    reservationId?: SortOrder
    mobilePhone?: SortOrder
    date?: SortOrder
    baseFee?: SortOrder
    repairStatus?: SortOrder
    vehicleId?: SortOrder
  }

  export type ReservationAvgOrderByAggregateInput = {
    reservationId?: SortOrder
    baseFee?: SortOrder
  }

  export type ReservationMaxOrderByAggregateInput = {
    reservationId?: SortOrder
    mobilePhone?: SortOrder
    date?: SortOrder
    baseFee?: SortOrder
    repairStatus?: SortOrder
    vehicleId?: SortOrder
  }

  export type ReservationMinOrderByAggregateInput = {
    reservationId?: SortOrder
    mobilePhone?: SortOrder
    date?: SortOrder
    baseFee?: SortOrder
    repairStatus?: SortOrder
    vehicleId?: SortOrder
  }

  export type ReservationSumOrderByAggregateInput = {
    reservationId?: SortOrder
    baseFee?: SortOrder
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
    diagnosticId?: SortOrder
    responsibleId?: SortOrder
    reservationId?: SortOrder
  }

  export type DiagnosticAvgOrderByAggregateInput = {
    diagnosticId?: SortOrder
    responsibleId?: SortOrder
    reservationId?: SortOrder
  }

  export type DiagnosticMaxOrderByAggregateInput = {
    diagnosticId?: SortOrder
    responsibleId?: SortOrder
    reservationId?: SortOrder
  }

  export type DiagnosticMinOrderByAggregateInput = {
    diagnosticId?: SortOrder
    responsibleId?: SortOrder
    reservationId?: SortOrder
  }

  export type DiagnosticSumOrderByAggregateInput = {
    diagnosticId?: SortOrder
    responsibleId?: SortOrder
    reservationId?: SortOrder
  }

  export type RepairCountOrderByAggregateInput = {
    repairId?: SortOrder
    responsibleId?: SortOrder
    reservationId?: SortOrder
    totalRepairHours?: SortOrder
  }

  export type RepairAvgOrderByAggregateInput = {
    repairId?: SortOrder
    responsibleId?: SortOrder
    reservationId?: SortOrder
    totalRepairHours?: SortOrder
  }

  export type RepairMaxOrderByAggregateInput = {
    repairId?: SortOrder
    responsibleId?: SortOrder
    reservationId?: SortOrder
    totalRepairHours?: SortOrder
  }

  export type RepairMinOrderByAggregateInput = {
    repairId?: SortOrder
    responsibleId?: SortOrder
    reservationId?: SortOrder
    totalRepairHours?: SortOrder
  }

  export type RepairSumOrderByAggregateInput = {
    repairId?: SortOrder
    responsibleId?: SortOrder
    reservationId?: SortOrder
    totalRepairHours?: SortOrder
  }

  export type IntNullableListFilter<$PrismaModel = never> = {
    equals?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    has?: number | IntFieldRefInput<$PrismaModel> | null
    hasEvery?: number[] | ListIntFieldRefInput<$PrismaModel>
    hasSome?: number[] | ListIntFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type RepairPartCountOrderByAggregateInput = {
    partId?: SortOrder
    price?: SortOrder
    repairId?: SortOrder
    vendorId?: SortOrder
  }

  export type RepairPartAvgOrderByAggregateInput = {
    price?: SortOrder
    repairId?: SortOrder
    vendorId?: SortOrder
  }

  export type RepairPartMaxOrderByAggregateInput = {
    partId?: SortOrder
    price?: SortOrder
  }

  export type RepairPartMinOrderByAggregateInput = {
    partId?: SortOrder
    price?: SortOrder
  }

  export type RepairPartSumOrderByAggregateInput = {
    price?: SortOrder
    repairId?: SortOrder
    vendorId?: SortOrder
  }

  export type VendorCountOrderByAggregateInput = {
    vendorId?: SortOrder
    vendorShopName?: SortOrder
    vendorShopAddress?: SortOrder
  }

  export type VendorAvgOrderByAggregateInput = {
    vendorId?: SortOrder
  }

  export type VendorMaxOrderByAggregateInput = {
    vendorId?: SortOrder
    vendorShopName?: SortOrder
    vendorShopAddress?: SortOrder
  }

  export type VendorMinOrderByAggregateInput = {
    vendorId?: SortOrder
    vendorShopName?: SortOrder
    vendorShopAddress?: SortOrder
  }

  export type VendorSumOrderByAggregateInput = {
    vendorId?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    userId?: SortOrder
    username?: SortOrder
    email?: SortOrder
    phone?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    userId?: SortOrder
    username?: SortOrder
    email?: SortOrder
    phone?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    userId?: SortOrder
    username?: SortOrder
    email?: SortOrder
    phone?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type ReservationCreateNestedManyWithoutVehicleInput = {
    create?: XOR<ReservationCreateWithoutVehicleInput, ReservationUncheckedCreateWithoutVehicleInput> | ReservationCreateWithoutVehicleInput[] | ReservationUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutVehicleInput | ReservationCreateOrConnectWithoutVehicleInput[]
    createMany?: ReservationCreateManyVehicleInputEnvelope
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
  }

  export type ReservationUncheckedCreateNestedManyWithoutVehicleInput = {
    create?: XOR<ReservationCreateWithoutVehicleInput, ReservationUncheckedCreateWithoutVehicleInput> | ReservationCreateWithoutVehicleInput[] | ReservationUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutVehicleInput | ReservationCreateOrConnectWithoutVehicleInput[]
    createMany?: ReservationCreateManyVehicleInputEnvelope
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableEnumRegTypesFieldUpdateOperationsInput = {
    set?: $Enums.RegTypes | null
  }

  export type ReservationUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<ReservationCreateWithoutVehicleInput, ReservationUncheckedCreateWithoutVehicleInput> | ReservationCreateWithoutVehicleInput[] | ReservationUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutVehicleInput | ReservationCreateOrConnectWithoutVehicleInput[]
    upsert?: ReservationUpsertWithWhereUniqueWithoutVehicleInput | ReservationUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: ReservationCreateManyVehicleInputEnvelope
    set?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    disconnect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    delete?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    update?: ReservationUpdateWithWhereUniqueWithoutVehicleInput | ReservationUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: ReservationUpdateManyWithWhereWithoutVehicleInput | ReservationUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
  }

  export type ReservationUncheckedUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<ReservationCreateWithoutVehicleInput, ReservationUncheckedCreateWithoutVehicleInput> | ReservationCreateWithoutVehicleInput[] | ReservationUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutVehicleInput | ReservationCreateOrConnectWithoutVehicleInput[]
    upsert?: ReservationUpsertWithWhereUniqueWithoutVehicleInput | ReservationUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: ReservationCreateManyVehicleInputEnvelope
    set?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    disconnect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    delete?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    update?: ReservationUpdateWithWhereUniqueWithoutVehicleInput | ReservationUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: ReservationUpdateManyWithWhereWithoutVehicleInput | ReservationUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
  }

  export type HeadMechanicCreateNestedOneWithoutMechanicInput = {
    create?: XOR<HeadMechanicCreateWithoutMechanicInput, HeadMechanicUncheckedCreateWithoutMechanicInput>
    connectOrCreate?: HeadMechanicCreateOrConnectWithoutMechanicInput
    connect?: HeadMechanicWhereUniqueInput
  }

  export type DiagnosticCreateNestedOneWithoutWorkersEmployedInput = {
    create?: XOR<DiagnosticCreateWithoutWorkersEmployedInput, DiagnosticUncheckedCreateWithoutWorkersEmployedInput>
    connectOrCreate?: DiagnosticCreateOrConnectWithoutWorkersEmployedInput
    connect?: DiagnosticWhereUniqueInput
  }

  export type RepairCreateNestedOneWithoutWorkersEmployedInput = {
    create?: XOR<RepairCreateWithoutWorkersEmployedInput, RepairUncheckedCreateWithoutWorkersEmployedInput>
    connectOrCreate?: RepairCreateOrConnectWithoutWorkersEmployedInput
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

  export type DiagnosticUpdateOneWithoutWorkersEmployedNestedInput = {
    create?: XOR<DiagnosticCreateWithoutWorkersEmployedInput, DiagnosticUncheckedCreateWithoutWorkersEmployedInput>
    connectOrCreate?: DiagnosticCreateOrConnectWithoutWorkersEmployedInput
    upsert?: DiagnosticUpsertWithoutWorkersEmployedInput
    disconnect?: DiagnosticWhereInput | boolean
    delete?: DiagnosticWhereInput | boolean
    connect?: DiagnosticWhereUniqueInput
    update?: XOR<XOR<DiagnosticUpdateToOneWithWhereWithoutWorkersEmployedInput, DiagnosticUpdateWithoutWorkersEmployedInput>, DiagnosticUncheckedUpdateWithoutWorkersEmployedInput>
  }

  export type RepairUpdateOneWithoutWorkersEmployedNestedInput = {
    create?: XOR<RepairCreateWithoutWorkersEmployedInput, RepairUncheckedCreateWithoutWorkersEmployedInput>
    connectOrCreate?: RepairCreateOrConnectWithoutWorkersEmployedInput
    upsert?: RepairUpsertWithoutWorkersEmployedInput
    disconnect?: RepairWhereInput | boolean
    delete?: RepairWhereInput | boolean
    connect?: RepairWhereUniqueInput
    update?: XOR<XOR<RepairUpdateToOneWithWhereWithoutWorkersEmployedInput, RepairUpdateWithoutWorkersEmployedInput>, RepairUncheckedUpdateWithoutWorkersEmployedInput>
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

  export type VehicleCreateNestedOneWithoutReservationInput = {
    create?: XOR<VehicleCreateWithoutReservationInput, VehicleUncheckedCreateWithoutReservationInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutReservationInput
    connect?: VehicleWhereUniqueInput
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

  export type VehicleUpdateOneRequiredWithoutReservationNestedInput = {
    create?: XOR<VehicleCreateWithoutReservationInput, VehicleUncheckedCreateWithoutReservationInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutReservationInput
    upsert?: VehicleUpsertWithoutReservationInput
    connect?: VehicleWhereUniqueInput
    update?: XOR<XOR<VehicleUpdateToOneWithWhereWithoutReservationInput, VehicleUpdateWithoutReservationInput>, VehicleUncheckedUpdateWithoutReservationInput>
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

  export type RepairPartCreaterepairIdInput = {
    set: number[]
  }

  export type RepairPartCreatevendorIdInput = {
    set: number[]
  }

  export type RepairPartUpdaterepairIdInput = {
    set?: number[]
    push?: number | number[]
  }

  export type RepairPartUpdatevendorIdInput = {
    set?: number[]
    push?: number | number[]
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

  export type NestedEnumRegTypesNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.RegTypes | EnumRegTypesFieldRefInput<$PrismaModel> | null
    in?: $Enums.RegTypes[] | ListEnumRegTypesFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.RegTypes[] | ListEnumRegTypesFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRegTypesNullableFilter<$PrismaModel> | $Enums.RegTypes | null
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

  export type NestedEnumRegTypesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RegTypes | EnumRegTypesFieldRefInput<$PrismaModel> | null
    in?: $Enums.RegTypes[] | ListEnumRegTypesFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.RegTypes[] | ListEnumRegTypesFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRegTypesNullableWithAggregatesFilter<$PrismaModel> | $Enums.RegTypes | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumRegTypesNullableFilter<$PrismaModel>
    _max?: NestedEnumRegTypesNullableFilter<$PrismaModel>
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

  export type ReservationCreateWithoutVehicleInput = {
    mobilePhone: string
    date: Date | string
    baseFee?: number | null
    repairStatus?: $Enums.RepairStatus | null
    diagnostic?: DiagnosticCreateNestedManyWithoutReservationInput
    repair?: RepairCreateNestedManyWithoutReservationInput
  }

  export type ReservationUncheckedCreateWithoutVehicleInput = {
    reservationId?: number
    mobilePhone: string
    date: Date | string
    baseFee?: number | null
    repairStatus?: $Enums.RepairStatus | null
    diagnostic?: DiagnosticUncheckedCreateNestedManyWithoutReservationInput
    repair?: RepairUncheckedCreateNestedManyWithoutReservationInput
  }

  export type ReservationCreateOrConnectWithoutVehicleInput = {
    where: ReservationWhereUniqueInput
    create: XOR<ReservationCreateWithoutVehicleInput, ReservationUncheckedCreateWithoutVehicleInput>
  }

  export type ReservationCreateManyVehicleInputEnvelope = {
    data: ReservationCreateManyVehicleInput | ReservationCreateManyVehicleInput[]
    skipDuplicates?: boolean
  }

  export type ReservationUpsertWithWhereUniqueWithoutVehicleInput = {
    where: ReservationWhereUniqueInput
    update: XOR<ReservationUpdateWithoutVehicleInput, ReservationUncheckedUpdateWithoutVehicleInput>
    create: XOR<ReservationCreateWithoutVehicleInput, ReservationUncheckedCreateWithoutVehicleInput>
  }

  export type ReservationUpdateWithWhereUniqueWithoutVehicleInput = {
    where: ReservationWhereUniqueInput
    data: XOR<ReservationUpdateWithoutVehicleInput, ReservationUncheckedUpdateWithoutVehicleInput>
  }

  export type ReservationUpdateManyWithWhereWithoutVehicleInput = {
    where: ReservationScalarWhereInput
    data: XOR<ReservationUpdateManyMutationInput, ReservationUncheckedUpdateManyWithoutVehicleInput>
  }

  export type ReservationScalarWhereInput = {
    AND?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
    OR?: ReservationScalarWhereInput[]
    NOT?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
    reservationId?: IntFilter<"Reservation"> | number
    mobilePhone?: StringFilter<"Reservation"> | string
    date?: DateTimeFilter<"Reservation"> | Date | string
    baseFee?: FloatNullableFilter<"Reservation"> | number | null
    repairStatus?: EnumRepairStatusNullableFilter<"Reservation"> | $Enums.RepairStatus | null
    vehicleId?: StringFilter<"Reservation"> | string
  }

  export type HeadMechanicCreateWithoutMechanicInput = {
    diagnostic?: DiagnosticCreateNestedManyWithoutResponsibleInput
    repair?: RepairCreateNestedManyWithoutResponsibleInput
  }

  export type HeadMechanicUncheckedCreateWithoutMechanicInput = {
    diagnostic?: DiagnosticUncheckedCreateNestedManyWithoutResponsibleInput
    repair?: RepairUncheckedCreateNestedManyWithoutResponsibleInput
  }

  export type HeadMechanicCreateOrConnectWithoutMechanicInput = {
    where: HeadMechanicWhereUniqueInput
    create: XOR<HeadMechanicCreateWithoutMechanicInput, HeadMechanicUncheckedCreateWithoutMechanicInput>
  }

  export type DiagnosticCreateWithoutWorkersEmployedInput = {
    responsible: HeadMechanicCreateNestedOneWithoutDiagnosticInput
    reservation: ReservationCreateNestedOneWithoutDiagnosticInput
  }

  export type DiagnosticUncheckedCreateWithoutWorkersEmployedInput = {
    diagnosticId?: number
    responsibleId: number
    reservationId: number
  }

  export type DiagnosticCreateOrConnectWithoutWorkersEmployedInput = {
    where: DiagnosticWhereUniqueInput
    create: XOR<DiagnosticCreateWithoutWorkersEmployedInput, DiagnosticUncheckedCreateWithoutWorkersEmployedInput>
  }

  export type RepairCreateWithoutWorkersEmployedInput = {
    totalRepairHours: number
    responsible: HeadMechanicCreateNestedOneWithoutRepairInput
    reservation: ReservationCreateNestedOneWithoutRepairInput
  }

  export type RepairUncheckedCreateWithoutWorkersEmployedInput = {
    repairId?: number
    responsibleId: number
    reservationId: number
    totalRepairHours: number
  }

  export type RepairCreateOrConnectWithoutWorkersEmployedInput = {
    where: RepairWhereUniqueInput
    create: XOR<RepairCreateWithoutWorkersEmployedInput, RepairUncheckedCreateWithoutWorkersEmployedInput>
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
    diagnostic?: DiagnosticUpdateManyWithoutResponsibleNestedInput
    repair?: RepairUpdateManyWithoutResponsibleNestedInput
  }

  export type HeadMechanicUncheckedUpdateWithoutMechanicInput = {
    diagnostic?: DiagnosticUncheckedUpdateManyWithoutResponsibleNestedInput
    repair?: RepairUncheckedUpdateManyWithoutResponsibleNestedInput
  }

  export type DiagnosticUpsertWithoutWorkersEmployedInput = {
    update: XOR<DiagnosticUpdateWithoutWorkersEmployedInput, DiagnosticUncheckedUpdateWithoutWorkersEmployedInput>
    create: XOR<DiagnosticCreateWithoutWorkersEmployedInput, DiagnosticUncheckedCreateWithoutWorkersEmployedInput>
    where?: DiagnosticWhereInput
  }

  export type DiagnosticUpdateToOneWithWhereWithoutWorkersEmployedInput = {
    where?: DiagnosticWhereInput
    data: XOR<DiagnosticUpdateWithoutWorkersEmployedInput, DiagnosticUncheckedUpdateWithoutWorkersEmployedInput>
  }

  export type DiagnosticUpdateWithoutWorkersEmployedInput = {
    responsible?: HeadMechanicUpdateOneRequiredWithoutDiagnosticNestedInput
    reservation?: ReservationUpdateOneRequiredWithoutDiagnosticNestedInput
  }

  export type DiagnosticUncheckedUpdateWithoutWorkersEmployedInput = {
    diagnosticId?: IntFieldUpdateOperationsInput | number
    responsibleId?: IntFieldUpdateOperationsInput | number
    reservationId?: IntFieldUpdateOperationsInput | number
  }

  export type RepairUpsertWithoutWorkersEmployedInput = {
    update: XOR<RepairUpdateWithoutWorkersEmployedInput, RepairUncheckedUpdateWithoutWorkersEmployedInput>
    create: XOR<RepairCreateWithoutWorkersEmployedInput, RepairUncheckedCreateWithoutWorkersEmployedInput>
    where?: RepairWhereInput
  }

  export type RepairUpdateToOneWithWhereWithoutWorkersEmployedInput = {
    where?: RepairWhereInput
    data: XOR<RepairUpdateWithoutWorkersEmployedInput, RepairUncheckedUpdateWithoutWorkersEmployedInput>
  }

  export type RepairUpdateWithoutWorkersEmployedInput = {
    totalRepairHours?: IntFieldUpdateOperationsInput | number
    responsible?: HeadMechanicUpdateOneRequiredWithoutRepairNestedInput
    reservation?: ReservationUpdateOneRequiredWithoutRepairNestedInput
  }

  export type RepairUncheckedUpdateWithoutWorkersEmployedInput = {
    repairId?: IntFieldUpdateOperationsInput | number
    responsibleId?: IntFieldUpdateOperationsInput | number
    reservationId?: IntFieldUpdateOperationsInput | number
    totalRepairHours?: IntFieldUpdateOperationsInput | number
  }

  export type MechanicCreateWithoutHeadMechanicInput = {
    mechanicId: number
    payPerHour: number
    diagnostic?: DiagnosticCreateNestedOneWithoutWorkersEmployedInput
    repair?: RepairCreateNestedOneWithoutWorkersEmployedInput
  }

  export type MechanicUncheckedCreateWithoutHeadMechanicInput = {
    mechanicId: number
    payPerHour: number
    diagnosticDiagnosticId?: number | null
    repairRepairId?: number | null
  }

  export type MechanicCreateOrConnectWithoutHeadMechanicInput = {
    where: MechanicWhereUniqueInput
    create: XOR<MechanicCreateWithoutHeadMechanicInput, MechanicUncheckedCreateWithoutHeadMechanicInput>
  }

  export type DiagnosticCreateWithoutResponsibleInput = {
    workersEmployed?: MechanicCreateNestedManyWithoutDiagnosticInput
    reservation: ReservationCreateNestedOneWithoutDiagnosticInput
  }

  export type DiagnosticUncheckedCreateWithoutResponsibleInput = {
    diagnosticId?: number
    reservationId: number
    workersEmployed?: MechanicUncheckedCreateNestedManyWithoutDiagnosticInput
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
    totalRepairHours: number
    workersEmployed?: MechanicCreateNestedManyWithoutRepairInput
    reservation: ReservationCreateNestedOneWithoutRepairInput
  }

  export type RepairUncheckedCreateWithoutResponsibleInput = {
    repairId?: number
    reservationId: number
    totalRepairHours: number
    workersEmployed?: MechanicUncheckedCreateNestedManyWithoutRepairInput
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
    mechanicId?: IntFieldUpdateOperationsInput | number
    payPerHour?: FloatFieldUpdateOperationsInput | number
    diagnostic?: DiagnosticUpdateOneWithoutWorkersEmployedNestedInput
    repair?: RepairUpdateOneWithoutWorkersEmployedNestedInput
  }

  export type MechanicUncheckedUpdateWithoutHeadMechanicInput = {
    mechanicId?: IntFieldUpdateOperationsInput | number
    payPerHour?: FloatFieldUpdateOperationsInput | number
    diagnosticDiagnosticId?: NullableIntFieldUpdateOperationsInput | number | null
    repairRepairId?: NullableIntFieldUpdateOperationsInput | number | null
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
    diagnosticId?: IntFilter<"Diagnostic"> | number
    responsibleId?: IntFilter<"Diagnostic"> | number
    reservationId?: IntFilter<"Diagnostic"> | number
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
    repairId?: IntFilter<"Repair"> | number
    responsibleId?: IntFilter<"Repair"> | number
    reservationId?: IntFilter<"Repair"> | number
    totalRepairHours?: IntFilter<"Repair"> | number
  }

  export type VehicleCreateWithoutReservationInput = {
    vin: string
    local: boolean
    registration?: string | null
    registrationType?: $Enums.RegTypes | null
    location?: string | null
  }

  export type VehicleUncheckedCreateWithoutReservationInput = {
    vin: string
    local: boolean
    registration?: string | null
    registrationType?: $Enums.RegTypes | null
    location?: string | null
  }

  export type VehicleCreateOrConnectWithoutReservationInput = {
    where: VehicleWhereUniqueInput
    create: XOR<VehicleCreateWithoutReservationInput, VehicleUncheckedCreateWithoutReservationInput>
  }

  export type DiagnosticCreateWithoutReservationInput = {
    responsible: HeadMechanicCreateNestedOneWithoutDiagnosticInput
    workersEmployed?: MechanicCreateNestedManyWithoutDiagnosticInput
  }

  export type DiagnosticUncheckedCreateWithoutReservationInput = {
    diagnosticId?: number
    responsibleId: number
    workersEmployed?: MechanicUncheckedCreateNestedManyWithoutDiagnosticInput
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
    totalRepairHours: number
    responsible: HeadMechanicCreateNestedOneWithoutRepairInput
    workersEmployed?: MechanicCreateNestedManyWithoutRepairInput
  }

  export type RepairUncheckedCreateWithoutReservationInput = {
    repairId?: number
    responsibleId: number
    totalRepairHours: number
    workersEmployed?: MechanicUncheckedCreateNestedManyWithoutRepairInput
  }

  export type RepairCreateOrConnectWithoutReservationInput = {
    where: RepairWhereUniqueInput
    create: XOR<RepairCreateWithoutReservationInput, RepairUncheckedCreateWithoutReservationInput>
  }

  export type RepairCreateManyReservationInputEnvelope = {
    data: RepairCreateManyReservationInput | RepairCreateManyReservationInput[]
    skipDuplicates?: boolean
  }

  export type VehicleUpsertWithoutReservationInput = {
    update: XOR<VehicleUpdateWithoutReservationInput, VehicleUncheckedUpdateWithoutReservationInput>
    create: XOR<VehicleCreateWithoutReservationInput, VehicleUncheckedCreateWithoutReservationInput>
    where?: VehicleWhereInput
  }

  export type VehicleUpdateToOneWithWhereWithoutReservationInput = {
    where?: VehicleWhereInput
    data: XOR<VehicleUpdateWithoutReservationInput, VehicleUncheckedUpdateWithoutReservationInput>
  }

  export type VehicleUpdateWithoutReservationInput = {
    vin?: StringFieldUpdateOperationsInput | string
    local?: BoolFieldUpdateOperationsInput | boolean
    registration?: NullableStringFieldUpdateOperationsInput | string | null
    registrationType?: NullableEnumRegTypesFieldUpdateOperationsInput | $Enums.RegTypes | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VehicleUncheckedUpdateWithoutReservationInput = {
    vin?: StringFieldUpdateOperationsInput | string
    local?: BoolFieldUpdateOperationsInput | boolean
    registration?: NullableStringFieldUpdateOperationsInput | string | null
    registrationType?: NullableEnumRegTypesFieldUpdateOperationsInput | $Enums.RegTypes | null
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
    repair?: RepairCreateNestedManyWithoutResponsibleInput
  }

  export type HeadMechanicUncheckedCreateWithoutDiagnosticInput = {
    mechanicId: number
    repair?: RepairUncheckedCreateNestedManyWithoutResponsibleInput
  }

  export type HeadMechanicCreateOrConnectWithoutDiagnosticInput = {
    where: HeadMechanicWhereUniqueInput
    create: XOR<HeadMechanicCreateWithoutDiagnosticInput, HeadMechanicUncheckedCreateWithoutDiagnosticInput>
  }

  export type MechanicCreateWithoutDiagnosticInput = {
    mechanicId: number
    payPerHour: number
    headMechanic?: HeadMechanicCreateNestedOneWithoutMechanicInput
    repair?: RepairCreateNestedOneWithoutWorkersEmployedInput
  }

  export type MechanicUncheckedCreateWithoutDiagnosticInput = {
    mechanicId: number
    payPerHour: number
    repairRepairId?: number | null
    headMechanic?: HeadMechanicUncheckedCreateNestedOneWithoutMechanicInput
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
    mobilePhone: string
    date: Date | string
    baseFee?: number | null
    repairStatus?: $Enums.RepairStatus | null
    vehicle: VehicleCreateNestedOneWithoutReservationInput
    repair?: RepairCreateNestedManyWithoutReservationInput
  }

  export type ReservationUncheckedCreateWithoutDiagnosticInput = {
    reservationId?: number
    mobilePhone: string
    date: Date | string
    baseFee?: number | null
    repairStatus?: $Enums.RepairStatus | null
    vehicleId: string
    repair?: RepairUncheckedCreateNestedManyWithoutReservationInput
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
    repair?: RepairUpdateManyWithoutResponsibleNestedInput
  }

  export type HeadMechanicUncheckedUpdateWithoutDiagnosticInput = {
    mechanicId?: IntFieldUpdateOperationsInput | number
    repair?: RepairUncheckedUpdateManyWithoutResponsibleNestedInput
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
    mechanicId?: IntFilter<"Mechanic"> | number
    payPerHour?: FloatFilter<"Mechanic"> | number
    diagnosticDiagnosticId?: IntNullableFilter<"Mechanic"> | number | null
    repairRepairId?: IntNullableFilter<"Mechanic"> | number | null
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
    mobilePhone?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    baseFee?: NullableFloatFieldUpdateOperationsInput | number | null
    repairStatus?: NullableEnumRepairStatusFieldUpdateOperationsInput | $Enums.RepairStatus | null
    vehicle?: VehicleUpdateOneRequiredWithoutReservationNestedInput
    repair?: RepairUpdateManyWithoutReservationNestedInput
  }

  export type ReservationUncheckedUpdateWithoutDiagnosticInput = {
    reservationId?: IntFieldUpdateOperationsInput | number
    mobilePhone?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    baseFee?: NullableFloatFieldUpdateOperationsInput | number | null
    repairStatus?: NullableEnumRepairStatusFieldUpdateOperationsInput | $Enums.RepairStatus | null
    vehicleId?: StringFieldUpdateOperationsInput | string
    repair?: RepairUncheckedUpdateManyWithoutReservationNestedInput
  }

  export type HeadMechanicCreateWithoutRepairInput = {
    mechanic: MechanicCreateNestedOneWithoutHeadMechanicInput
    diagnostic?: DiagnosticCreateNestedManyWithoutResponsibleInput
  }

  export type HeadMechanicUncheckedCreateWithoutRepairInput = {
    mechanicId: number
    diagnostic?: DiagnosticUncheckedCreateNestedManyWithoutResponsibleInput
  }

  export type HeadMechanicCreateOrConnectWithoutRepairInput = {
    where: HeadMechanicWhereUniqueInput
    create: XOR<HeadMechanicCreateWithoutRepairInput, HeadMechanicUncheckedCreateWithoutRepairInput>
  }

  export type MechanicCreateWithoutRepairInput = {
    mechanicId: number
    payPerHour: number
    headMechanic?: HeadMechanicCreateNestedOneWithoutMechanicInput
    diagnostic?: DiagnosticCreateNestedOneWithoutWorkersEmployedInput
  }

  export type MechanicUncheckedCreateWithoutRepairInput = {
    mechanicId: number
    payPerHour: number
    diagnosticDiagnosticId?: number | null
    headMechanic?: HeadMechanicUncheckedCreateNestedOneWithoutMechanicInput
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
    mobilePhone: string
    date: Date | string
    baseFee?: number | null
    repairStatus?: $Enums.RepairStatus | null
    vehicle: VehicleCreateNestedOneWithoutReservationInput
    diagnostic?: DiagnosticCreateNestedManyWithoutReservationInput
  }

  export type ReservationUncheckedCreateWithoutRepairInput = {
    reservationId?: number
    mobilePhone: string
    date: Date | string
    baseFee?: number | null
    repairStatus?: $Enums.RepairStatus | null
    vehicleId: string
    diagnostic?: DiagnosticUncheckedCreateNestedManyWithoutReservationInput
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
    diagnostic?: DiagnosticUpdateManyWithoutResponsibleNestedInput
  }

  export type HeadMechanicUncheckedUpdateWithoutRepairInput = {
    mechanicId?: IntFieldUpdateOperationsInput | number
    diagnostic?: DiagnosticUncheckedUpdateManyWithoutResponsibleNestedInput
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
    mobilePhone?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    baseFee?: NullableFloatFieldUpdateOperationsInput | number | null
    repairStatus?: NullableEnumRepairStatusFieldUpdateOperationsInput | $Enums.RepairStatus | null
    vehicle?: VehicleUpdateOneRequiredWithoutReservationNestedInput
    diagnostic?: DiagnosticUpdateManyWithoutReservationNestedInput
  }

  export type ReservationUncheckedUpdateWithoutRepairInput = {
    reservationId?: IntFieldUpdateOperationsInput | number
    mobilePhone?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    baseFee?: NullableFloatFieldUpdateOperationsInput | number | null
    repairStatus?: NullableEnumRepairStatusFieldUpdateOperationsInput | $Enums.RepairStatus | null
    vehicleId?: StringFieldUpdateOperationsInput | string
    diagnostic?: DiagnosticUncheckedUpdateManyWithoutReservationNestedInput
  }

  export type ReservationCreateManyVehicleInput = {
    reservationId?: number
    mobilePhone: string
    date: Date | string
    baseFee?: number | null
    repairStatus?: $Enums.RepairStatus | null
  }

  export type ReservationUpdateWithoutVehicleInput = {
    mobilePhone?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    baseFee?: NullableFloatFieldUpdateOperationsInput | number | null
    repairStatus?: NullableEnumRepairStatusFieldUpdateOperationsInput | $Enums.RepairStatus | null
    diagnostic?: DiagnosticUpdateManyWithoutReservationNestedInput
    repair?: RepairUpdateManyWithoutReservationNestedInput
  }

  export type ReservationUncheckedUpdateWithoutVehicleInput = {
    reservationId?: IntFieldUpdateOperationsInput | number
    mobilePhone?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    baseFee?: NullableFloatFieldUpdateOperationsInput | number | null
    repairStatus?: NullableEnumRepairStatusFieldUpdateOperationsInput | $Enums.RepairStatus | null
    diagnostic?: DiagnosticUncheckedUpdateManyWithoutReservationNestedInput
    repair?: RepairUncheckedUpdateManyWithoutReservationNestedInput
  }

  export type ReservationUncheckedUpdateManyWithoutVehicleInput = {
    reservationId?: IntFieldUpdateOperationsInput | number
    mobilePhone?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    baseFee?: NullableFloatFieldUpdateOperationsInput | number | null
    repairStatus?: NullableEnumRepairStatusFieldUpdateOperationsInput | $Enums.RepairStatus | null
  }

  export type DiagnosticCreateManyResponsibleInput = {
    diagnosticId?: number
    reservationId: number
  }

  export type RepairCreateManyResponsibleInput = {
    repairId?: number
    reservationId: number
    totalRepairHours: number
  }

  export type DiagnosticUpdateWithoutResponsibleInput = {
    workersEmployed?: MechanicUpdateManyWithoutDiagnosticNestedInput
    reservation?: ReservationUpdateOneRequiredWithoutDiagnosticNestedInput
  }

  export type DiagnosticUncheckedUpdateWithoutResponsibleInput = {
    diagnosticId?: IntFieldUpdateOperationsInput | number
    reservationId?: IntFieldUpdateOperationsInput | number
    workersEmployed?: MechanicUncheckedUpdateManyWithoutDiagnosticNestedInput
  }

  export type DiagnosticUncheckedUpdateManyWithoutResponsibleInput = {
    diagnosticId?: IntFieldUpdateOperationsInput | number
    reservationId?: IntFieldUpdateOperationsInput | number
  }

  export type RepairUpdateWithoutResponsibleInput = {
    totalRepairHours?: IntFieldUpdateOperationsInput | number
    workersEmployed?: MechanicUpdateManyWithoutRepairNestedInput
    reservation?: ReservationUpdateOneRequiredWithoutRepairNestedInput
  }

  export type RepairUncheckedUpdateWithoutResponsibleInput = {
    repairId?: IntFieldUpdateOperationsInput | number
    reservationId?: IntFieldUpdateOperationsInput | number
    totalRepairHours?: IntFieldUpdateOperationsInput | number
    workersEmployed?: MechanicUncheckedUpdateManyWithoutRepairNestedInput
  }

  export type RepairUncheckedUpdateManyWithoutResponsibleInput = {
    repairId?: IntFieldUpdateOperationsInput | number
    reservationId?: IntFieldUpdateOperationsInput | number
    totalRepairHours?: IntFieldUpdateOperationsInput | number
  }

  export type DiagnosticCreateManyReservationInput = {
    diagnosticId?: number
    responsibleId: number
  }

  export type RepairCreateManyReservationInput = {
    repairId?: number
    responsibleId: number
    totalRepairHours: number
  }

  export type DiagnosticUpdateWithoutReservationInput = {
    responsible?: HeadMechanicUpdateOneRequiredWithoutDiagnosticNestedInput
    workersEmployed?: MechanicUpdateManyWithoutDiagnosticNestedInput
  }

  export type DiagnosticUncheckedUpdateWithoutReservationInput = {
    diagnosticId?: IntFieldUpdateOperationsInput | number
    responsibleId?: IntFieldUpdateOperationsInput | number
    workersEmployed?: MechanicUncheckedUpdateManyWithoutDiagnosticNestedInput
  }

  export type DiagnosticUncheckedUpdateManyWithoutReservationInput = {
    diagnosticId?: IntFieldUpdateOperationsInput | number
    responsibleId?: IntFieldUpdateOperationsInput | number
  }

  export type RepairUpdateWithoutReservationInput = {
    totalRepairHours?: IntFieldUpdateOperationsInput | number
    responsible?: HeadMechanicUpdateOneRequiredWithoutRepairNestedInput
    workersEmployed?: MechanicUpdateManyWithoutRepairNestedInput
  }

  export type RepairUncheckedUpdateWithoutReservationInput = {
    repairId?: IntFieldUpdateOperationsInput | number
    responsibleId?: IntFieldUpdateOperationsInput | number
    totalRepairHours?: IntFieldUpdateOperationsInput | number
    workersEmployed?: MechanicUncheckedUpdateManyWithoutRepairNestedInput
  }

  export type RepairUncheckedUpdateManyWithoutReservationInput = {
    repairId?: IntFieldUpdateOperationsInput | number
    responsibleId?: IntFieldUpdateOperationsInput | number
    totalRepairHours?: IntFieldUpdateOperationsInput | number
  }

  export type MechanicCreateManyDiagnosticInput = {
    mechanicId: number
    payPerHour: number
    repairRepairId?: number | null
  }

  export type MechanicUpdateWithoutDiagnosticInput = {
    mechanicId?: IntFieldUpdateOperationsInput | number
    payPerHour?: FloatFieldUpdateOperationsInput | number
    headMechanic?: HeadMechanicUpdateOneWithoutMechanicNestedInput
    repair?: RepairUpdateOneWithoutWorkersEmployedNestedInput
  }

  export type MechanicUncheckedUpdateWithoutDiagnosticInput = {
    mechanicId?: IntFieldUpdateOperationsInput | number
    payPerHour?: FloatFieldUpdateOperationsInput | number
    repairRepairId?: NullableIntFieldUpdateOperationsInput | number | null
    headMechanic?: HeadMechanicUncheckedUpdateOneWithoutMechanicNestedInput
  }

  export type MechanicUncheckedUpdateManyWithoutDiagnosticInput = {
    mechanicId?: IntFieldUpdateOperationsInput | number
    payPerHour?: FloatFieldUpdateOperationsInput | number
    repairRepairId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MechanicCreateManyRepairInput = {
    mechanicId: number
    payPerHour: number
    diagnosticDiagnosticId?: number | null
  }

  export type MechanicUpdateWithoutRepairInput = {
    mechanicId?: IntFieldUpdateOperationsInput | number
    payPerHour?: FloatFieldUpdateOperationsInput | number
    headMechanic?: HeadMechanicUpdateOneWithoutMechanicNestedInput
    diagnostic?: DiagnosticUpdateOneWithoutWorkersEmployedNestedInput
  }

  export type MechanicUncheckedUpdateWithoutRepairInput = {
    mechanicId?: IntFieldUpdateOperationsInput | number
    payPerHour?: FloatFieldUpdateOperationsInput | number
    diagnosticDiagnosticId?: NullableIntFieldUpdateOperationsInput | number | null
    headMechanic?: HeadMechanicUncheckedUpdateOneWithoutMechanicNestedInput
  }

  export type MechanicUncheckedUpdateManyWithoutRepairInput = {
    mechanicId?: IntFieldUpdateOperationsInput | number
    payPerHour?: FloatFieldUpdateOperationsInput | number
    diagnosticDiagnosticId?: NullableIntFieldUpdateOperationsInput | number | null
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