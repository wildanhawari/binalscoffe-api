
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
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model Supplier
 * 
 */
export type Supplier = $Result.DefaultSelection<Prisma.$SupplierPayload>
/**
 * Model Carts
 * 
 */
export type Carts = $Result.DefaultSelection<Prisma.$CartsPayload>
/**
 * Model Orders
 * 
 */
export type Orders = $Result.DefaultSelection<Prisma.$OrdersPayload>
/**
 * Model Orderdetail
 * 
 */
export type Orderdetail = $Result.DefaultSelection<Prisma.$OrderdetailPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Orderreturn
 * 
 */
export type Orderreturn = $Result.DefaultSelection<Prisma.$OrderreturnPayload>
/**
 * Model Orderreturndetail
 * 
 */
export type Orderreturndetail = $Result.DefaultSelection<Prisma.$OrderreturndetailPayload>
/**
 * Model Purchase
 * 
 */
export type Purchase = $Result.DefaultSelection<Prisma.$PurchasePayload>
/**
 * Model Purchasedetail
 * 
 */
export type Purchasedetail = $Result.DefaultSelection<Prisma.$PurchasedetailPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Categories
 * const categories = await prisma.category.findMany()
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
   * // Fetch zero or more Categories
   * const categories = await prisma.category.findMany()
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
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.supplier`: Exposes CRUD operations for the **Supplier** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Suppliers
    * const suppliers = await prisma.supplier.findMany()
    * ```
    */
  get supplier(): Prisma.SupplierDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.carts`: Exposes CRUD operations for the **Carts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Carts
    * const carts = await prisma.carts.findMany()
    * ```
    */
  get carts(): Prisma.CartsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orders`: Exposes CRUD operations for the **Orders** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.orders.findMany()
    * ```
    */
  get orders(): Prisma.OrdersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orderdetail`: Exposes CRUD operations for the **Orderdetail** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orderdetails
    * const orderdetails = await prisma.orderdetail.findMany()
    * ```
    */
  get orderdetail(): Prisma.OrderdetailDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.orderreturn`: Exposes CRUD operations for the **Orderreturn** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orderreturns
    * const orderreturns = await prisma.orderreturn.findMany()
    * ```
    */
  get orderreturn(): Prisma.OrderreturnDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orderreturndetail`: Exposes CRUD operations for the **Orderreturndetail** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orderreturndetails
    * const orderreturndetails = await prisma.orderreturndetail.findMany()
    * ```
    */
  get orderreturndetail(): Prisma.OrderreturndetailDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.purchase`: Exposes CRUD operations for the **Purchase** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Purchases
    * const purchases = await prisma.purchase.findMany()
    * ```
    */
  get purchase(): Prisma.PurchaseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.purchasedetail`: Exposes CRUD operations for the **Purchasedetail** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Purchasedetails
    * const purchasedetails = await prisma.purchasedetail.findMany()
    * ```
    */
  get purchasedetail(): Prisma.PurchasedetailDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.12.0
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
    Category: 'Category',
    Product: 'Product',
    Supplier: 'Supplier',
    Carts: 'Carts',
    Orders: 'Orders',
    Orderdetail: 'Orderdetail',
    User: 'User',
    Orderreturn: 'Orderreturn',
    Orderreturndetail: 'Orderreturndetail',
    Purchase: 'Purchase',
    Purchasedetail: 'Purchasedetail'
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
      modelProps: "category" | "product" | "supplier" | "carts" | "orders" | "orderdetail" | "user" | "orderreturn" | "orderreturndetail" | "purchase" | "purchasedetail"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      Supplier: {
        payload: Prisma.$SupplierPayload<ExtArgs>
        fields: Prisma.SupplierFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SupplierFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SupplierFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          findFirst: {
            args: Prisma.SupplierFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SupplierFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          findMany: {
            args: Prisma.SupplierFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>[]
          }
          create: {
            args: Prisma.SupplierCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          createMany: {
            args: Prisma.SupplierCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SupplierDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          update: {
            args: Prisma.SupplierUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          deleteMany: {
            args: Prisma.SupplierDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SupplierUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SupplierUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          aggregate: {
            args: Prisma.SupplierAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSupplier>
          }
          groupBy: {
            args: Prisma.SupplierGroupByArgs<ExtArgs>
            result: $Utils.Optional<SupplierGroupByOutputType>[]
          }
          count: {
            args: Prisma.SupplierCountArgs<ExtArgs>
            result: $Utils.Optional<SupplierCountAggregateOutputType> | number
          }
        }
      }
      Carts: {
        payload: Prisma.$CartsPayload<ExtArgs>
        fields: Prisma.CartsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CartsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CartsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartsPayload>
          }
          findFirst: {
            args: Prisma.CartsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CartsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartsPayload>
          }
          findMany: {
            args: Prisma.CartsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartsPayload>[]
          }
          create: {
            args: Prisma.CartsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartsPayload>
          }
          createMany: {
            args: Prisma.CartsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CartsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartsPayload>
          }
          update: {
            args: Prisma.CartsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartsPayload>
          }
          deleteMany: {
            args: Prisma.CartsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CartsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CartsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartsPayload>
          }
          aggregate: {
            args: Prisma.CartsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCarts>
          }
          groupBy: {
            args: Prisma.CartsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CartsGroupByOutputType>[]
          }
          count: {
            args: Prisma.CartsCountArgs<ExtArgs>
            result: $Utils.Optional<CartsCountAggregateOutputType> | number
          }
        }
      }
      Orders: {
        payload: Prisma.$OrdersPayload<ExtArgs>
        fields: Prisma.OrdersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrdersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrdersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          findFirst: {
            args: Prisma.OrdersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrdersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          findMany: {
            args: Prisma.OrdersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>[]
          }
          create: {
            args: Prisma.OrdersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          createMany: {
            args: Prisma.OrdersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.OrdersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          update: {
            args: Prisma.OrdersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          deleteMany: {
            args: Prisma.OrdersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrdersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OrdersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          aggregate: {
            args: Prisma.OrdersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrders>
          }
          groupBy: {
            args: Prisma.OrdersGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrdersGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrdersCountArgs<ExtArgs>
            result: $Utils.Optional<OrdersCountAggregateOutputType> | number
          }
        }
      }
      Orderdetail: {
        payload: Prisma.$OrderdetailPayload<ExtArgs>
        fields: Prisma.OrderdetailFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderdetailFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderdetailPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderdetailFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderdetailPayload>
          }
          findFirst: {
            args: Prisma.OrderdetailFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderdetailPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderdetailFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderdetailPayload>
          }
          findMany: {
            args: Prisma.OrderdetailFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderdetailPayload>[]
          }
          create: {
            args: Prisma.OrderdetailCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderdetailPayload>
          }
          createMany: {
            args: Prisma.OrderdetailCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.OrderdetailDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderdetailPayload>
          }
          update: {
            args: Prisma.OrderdetailUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderdetailPayload>
          }
          deleteMany: {
            args: Prisma.OrderdetailDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderdetailUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OrderdetailUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderdetailPayload>
          }
          aggregate: {
            args: Prisma.OrderdetailAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrderdetail>
          }
          groupBy: {
            args: Prisma.OrderdetailGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderdetailGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderdetailCountArgs<ExtArgs>
            result: $Utils.Optional<OrderdetailCountAggregateOutputType> | number
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
      Orderreturn: {
        payload: Prisma.$OrderreturnPayload<ExtArgs>
        fields: Prisma.OrderreturnFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderreturnFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderreturnPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderreturnFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderreturnPayload>
          }
          findFirst: {
            args: Prisma.OrderreturnFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderreturnPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderreturnFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderreturnPayload>
          }
          findMany: {
            args: Prisma.OrderreturnFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderreturnPayload>[]
          }
          create: {
            args: Prisma.OrderreturnCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderreturnPayload>
          }
          createMany: {
            args: Prisma.OrderreturnCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.OrderreturnDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderreturnPayload>
          }
          update: {
            args: Prisma.OrderreturnUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderreturnPayload>
          }
          deleteMany: {
            args: Prisma.OrderreturnDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderreturnUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OrderreturnUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderreturnPayload>
          }
          aggregate: {
            args: Prisma.OrderreturnAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrderreturn>
          }
          groupBy: {
            args: Prisma.OrderreturnGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderreturnGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderreturnCountArgs<ExtArgs>
            result: $Utils.Optional<OrderreturnCountAggregateOutputType> | number
          }
        }
      }
      Orderreturndetail: {
        payload: Prisma.$OrderreturndetailPayload<ExtArgs>
        fields: Prisma.OrderreturndetailFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderreturndetailFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderreturndetailPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderreturndetailFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderreturndetailPayload>
          }
          findFirst: {
            args: Prisma.OrderreturndetailFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderreturndetailPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderreturndetailFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderreturndetailPayload>
          }
          findMany: {
            args: Prisma.OrderreturndetailFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderreturndetailPayload>[]
          }
          create: {
            args: Prisma.OrderreturndetailCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderreturndetailPayload>
          }
          createMany: {
            args: Prisma.OrderreturndetailCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.OrderreturndetailDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderreturndetailPayload>
          }
          update: {
            args: Prisma.OrderreturndetailUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderreturndetailPayload>
          }
          deleteMany: {
            args: Prisma.OrderreturndetailDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderreturndetailUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OrderreturndetailUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderreturndetailPayload>
          }
          aggregate: {
            args: Prisma.OrderreturndetailAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrderreturndetail>
          }
          groupBy: {
            args: Prisma.OrderreturndetailGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderreturndetailGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderreturndetailCountArgs<ExtArgs>
            result: $Utils.Optional<OrderreturndetailCountAggregateOutputType> | number
          }
        }
      }
      Purchase: {
        payload: Prisma.$PurchasePayload<ExtArgs>
        fields: Prisma.PurchaseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PurchaseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PurchaseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          findFirst: {
            args: Prisma.PurchaseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PurchaseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          findMany: {
            args: Prisma.PurchaseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>[]
          }
          create: {
            args: Prisma.PurchaseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          createMany: {
            args: Prisma.PurchaseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PurchaseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          update: {
            args: Prisma.PurchaseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          deleteMany: {
            args: Prisma.PurchaseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PurchaseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PurchaseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          aggregate: {
            args: Prisma.PurchaseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePurchase>
          }
          groupBy: {
            args: Prisma.PurchaseGroupByArgs<ExtArgs>
            result: $Utils.Optional<PurchaseGroupByOutputType>[]
          }
          count: {
            args: Prisma.PurchaseCountArgs<ExtArgs>
            result: $Utils.Optional<PurchaseCountAggregateOutputType> | number
          }
        }
      }
      Purchasedetail: {
        payload: Prisma.$PurchasedetailPayload<ExtArgs>
        fields: Prisma.PurchasedetailFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PurchasedetailFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasedetailPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PurchasedetailFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasedetailPayload>
          }
          findFirst: {
            args: Prisma.PurchasedetailFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasedetailPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PurchasedetailFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasedetailPayload>
          }
          findMany: {
            args: Prisma.PurchasedetailFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasedetailPayload>[]
          }
          create: {
            args: Prisma.PurchasedetailCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasedetailPayload>
          }
          createMany: {
            args: Prisma.PurchasedetailCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PurchasedetailDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasedetailPayload>
          }
          update: {
            args: Prisma.PurchasedetailUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasedetailPayload>
          }
          deleteMany: {
            args: Prisma.PurchasedetailDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PurchasedetailUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PurchasedetailUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasedetailPayload>
          }
          aggregate: {
            args: Prisma.PurchasedetailAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePurchasedetail>
          }
          groupBy: {
            args: Prisma.PurchasedetailGroupByArgs<ExtArgs>
            result: $Utils.Optional<PurchasedetailGroupByOutputType>[]
          }
          count: {
            args: Prisma.PurchasedetailCountArgs<ExtArgs>
            result: $Utils.Optional<PurchasedetailCountAggregateOutputType> | number
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
    category?: CategoryOmit
    product?: ProductOmit
    supplier?: SupplierOmit
    carts?: CartsOmit
    orders?: OrdersOmit
    orderdetail?: OrderdetailOmit
    user?: UserOmit
    orderreturn?: OrderreturnOmit
    orderreturndetail?: OrderreturndetailOmit
    purchase?: PurchaseOmit
    purchasedetail?: PurchasedetailOmit
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
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    Product: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Product?: boolean | CategoryCountOutputTypeCountProductArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    Carts: number
    Orderdetail: number
    Orderreturndetail: number
    Purchasedetail: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Carts?: boolean | ProductCountOutputTypeCountCartsArgs
    Orderdetail?: boolean | ProductCountOutputTypeCountOrderdetailArgs
    Orderreturndetail?: boolean | ProductCountOutputTypeCountOrderreturndetailArgs
    Purchasedetail?: boolean | ProductCountOutputTypeCountPurchasedetailArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountCartsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartsWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountOrderdetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderdetailWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountOrderreturndetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderreturndetailWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountPurchasedetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchasedetailWhereInput
  }


  /**
   * Count Type SupplierCountOutputType
   */

  export type SupplierCountOutputType = {
    Product: number
  }

  export type SupplierCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Product?: boolean | SupplierCountOutputTypeCountProductArgs
  }

  // Custom InputTypes
  /**
   * SupplierCountOutputType without action
   */
  export type SupplierCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierCountOutputType
     */
    select?: SupplierCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SupplierCountOutputType without action
   */
  export type SupplierCountOutputTypeCountProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }


  /**
   * Count Type OrdersCountOutputType
   */

  export type OrdersCountOutputType = {
    Orderdetail: number
    Orderreturn: number
  }

  export type OrdersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Orderdetail?: boolean | OrdersCountOutputTypeCountOrderdetailArgs
    Orderreturn?: boolean | OrdersCountOutputTypeCountOrderreturnArgs
  }

  // Custom InputTypes
  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdersCountOutputType
     */
    select?: OrdersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeCountOrderdetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderdetailWhereInput
  }

  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeCountOrderreturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderreturnWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    Carts: number
    Orders: number
    Orderreturn: number
    Purchase: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Carts?: boolean | UserCountOutputTypeCountCartsArgs
    Orders?: boolean | UserCountOutputTypeCountOrdersArgs
    Orderreturn?: boolean | UserCountOutputTypeCountOrderreturnArgs
    Purchase?: boolean | UserCountOutputTypeCountPurchaseArgs
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
  export type UserCountOutputTypeCountCartsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrdersWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrderreturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderreturnWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPurchaseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchaseWhereInput
  }


  /**
   * Count Type OrderreturnCountOutputType
   */

  export type OrderreturnCountOutputType = {
    Orderreturndetail: number
  }

  export type OrderreturnCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Orderreturndetail?: boolean | OrderreturnCountOutputTypeCountOrderreturndetailArgs
  }

  // Custom InputTypes
  /**
   * OrderreturnCountOutputType without action
   */
  export type OrderreturnCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderreturnCountOutputType
     */
    select?: OrderreturnCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrderreturnCountOutputType without action
   */
  export type OrderreturnCountOutputTypeCountOrderreturndetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderreturndetailWhereInput
  }


  /**
   * Count Type PurchaseCountOutputType
   */

  export type PurchaseCountOutputType = {
    Purchasedetail: number
  }

  export type PurchaseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Purchasedetail?: boolean | PurchaseCountOutputTypeCountPurchasedetailArgs
  }

  // Custom InputTypes
  /**
   * PurchaseCountOutputType without action
   */
  export type PurchaseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseCountOutputType
     */
    select?: PurchaseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PurchaseCountOutputType without action
   */
  export type PurchaseCountOutputTypeCountPurchasedetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchasedetailWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type CategorySumAggregateOutputType = {
    id: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: number | null
    kategoryName: string | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: number | null
    kategoryName: string | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    kategoryName: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    id?: true
  }

  export type CategorySumAggregateInputType = {
    id?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    kategoryName?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    kategoryName?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    kategoryName?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: number
    kategoryName: string
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    kategoryName?: boolean
    Product?: boolean | Category$ProductArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>



  export type CategorySelectScalar = {
    id?: boolean
    kategoryName?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "kategoryName", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Product?: boolean | Category$ProductArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      Product: Prisma.$ProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      kategoryName: string
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Product<T extends Category$ProductArgs<ExtArgs> = {}>(args?: Subset<T, Category$ProductArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'Int'>
    readonly kategoryName: FieldRef<"Category", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
  }

  /**
   * Category.Product
   */
  export type Category$ProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    id: number | null
    qty: number | null
    price: Decimal | null
    kategoryId: number | null
    supplierId: number | null
  }

  export type ProductSumAggregateOutputType = {
    id: number | null
    qty: number | null
    price: Decimal | null
    kategoryId: number | null
    supplierId: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: number | null
    code: string | null
    barcode: string | null
    productName: string | null
    image: string | null
    url: string | null
    qty: number | null
    price: Decimal | null
    kategoryId: number | null
    supplierId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductMaxAggregateOutputType = {
    id: number | null
    code: string | null
    barcode: string | null
    productName: string | null
    image: string | null
    url: string | null
    qty: number | null
    price: Decimal | null
    kategoryId: number | null
    supplierId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    code: number
    barcode: number
    productName: number
    image: number
    url: number
    qty: number
    price: number
    kategoryId: number
    supplierId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    id?: true
    qty?: true
    price?: true
    kategoryId?: true
    supplierId?: true
  }

  export type ProductSumAggregateInputType = {
    id?: true
    qty?: true
    price?: true
    kategoryId?: true
    supplierId?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    code?: true
    barcode?: true
    productName?: true
    image?: true
    url?: true
    qty?: true
    price?: true
    kategoryId?: true
    supplierId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    code?: true
    barcode?: true
    productName?: true
    image?: true
    url?: true
    qty?: true
    price?: true
    kategoryId?: true
    supplierId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    code?: true
    barcode?: true
    productName?: true
    image?: true
    url?: true
    qty?: true
    price?: true
    kategoryId?: true
    supplierId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: number
    code: string
    barcode: string | null
    productName: string
    image: string
    url: string
    qty: number
    price: Decimal
    kategoryId: number
    supplierId: number
    createdAt: Date
    updatedAt: Date
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    barcode?: boolean
    productName?: boolean
    image?: boolean
    url?: boolean
    qty?: boolean
    price?: boolean
    kategoryId?: boolean
    supplierId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    kategory?: boolean | CategoryDefaultArgs<ExtArgs>
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
    Carts?: boolean | Product$CartsArgs<ExtArgs>
    Orderdetail?: boolean | Product$OrderdetailArgs<ExtArgs>
    Orderreturndetail?: boolean | Product$OrderreturndetailArgs<ExtArgs>
    Purchasedetail?: boolean | Product$PurchasedetailArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>



  export type ProductSelectScalar = {
    id?: boolean
    code?: boolean
    barcode?: boolean
    productName?: boolean
    image?: boolean
    url?: boolean
    qty?: boolean
    price?: boolean
    kategoryId?: boolean
    supplierId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "barcode" | "productName" | "image" | "url" | "qty" | "price" | "kategoryId" | "supplierId" | "createdAt" | "updatedAt", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kategory?: boolean | CategoryDefaultArgs<ExtArgs>
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
    Carts?: boolean | Product$CartsArgs<ExtArgs>
    Orderdetail?: boolean | Product$OrderdetailArgs<ExtArgs>
    Orderreturndetail?: boolean | Product$OrderreturndetailArgs<ExtArgs>
    Purchasedetail?: boolean | Product$PurchasedetailArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      kategory: Prisma.$CategoryPayload<ExtArgs>
      supplier: Prisma.$SupplierPayload<ExtArgs>
      Carts: Prisma.$CartsPayload<ExtArgs>[]
      Orderdetail: Prisma.$OrderdetailPayload<ExtArgs>[]
      Orderreturndetail: Prisma.$OrderreturndetailPayload<ExtArgs>[]
      Purchasedetail: Prisma.$PurchasedetailPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      code: string
      barcode: string | null
      productName: string
      image: string
      url: string
      qty: number
      price: Prisma.Decimal
      kategoryId: number
      supplierId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
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
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    kategory<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    supplier<T extends SupplierDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SupplierDefaultArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Carts<T extends Product$CartsArgs<ExtArgs> = {}>(args?: Subset<T, Product$CartsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Orderdetail<T extends Product$OrderdetailArgs<ExtArgs> = {}>(args?: Subset<T, Product$OrderdetailArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderdetailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Orderreturndetail<T extends Product$OrderreturndetailArgs<ExtArgs> = {}>(args?: Subset<T, Product$OrderreturndetailArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderreturndetailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Purchasedetail<T extends Product$PurchasedetailArgs<ExtArgs> = {}>(args?: Subset<T, Product$PurchasedetailArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchasedetailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'Int'>
    readonly code: FieldRef<"Product", 'String'>
    readonly barcode: FieldRef<"Product", 'String'>
    readonly productName: FieldRef<"Product", 'String'>
    readonly image: FieldRef<"Product", 'String'>
    readonly url: FieldRef<"Product", 'String'>
    readonly qty: FieldRef<"Product", 'Int'>
    readonly price: FieldRef<"Product", 'Decimal'>
    readonly kategoryId: FieldRef<"Product", 'Int'>
    readonly supplierId: FieldRef<"Product", 'Int'>
    readonly createdAt: FieldRef<"Product", 'DateTime'>
    readonly updatedAt: FieldRef<"Product", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
  }

  /**
   * Product.Carts
   */
  export type Product$CartsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carts
     */
    select?: CartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carts
     */
    omit?: CartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartsInclude<ExtArgs> | null
    where?: CartsWhereInput
    orderBy?: CartsOrderByWithRelationInput | CartsOrderByWithRelationInput[]
    cursor?: CartsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CartsScalarFieldEnum | CartsScalarFieldEnum[]
  }

  /**
   * Product.Orderdetail
   */
  export type Product$OrderdetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orderdetail
     */
    select?: OrderdetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orderdetail
     */
    omit?: OrderdetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderdetailInclude<ExtArgs> | null
    where?: OrderdetailWhereInput
    orderBy?: OrderdetailOrderByWithRelationInput | OrderdetailOrderByWithRelationInput[]
    cursor?: OrderdetailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderdetailScalarFieldEnum | OrderdetailScalarFieldEnum[]
  }

  /**
   * Product.Orderreturndetail
   */
  export type Product$OrderreturndetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orderreturndetail
     */
    select?: OrderreturndetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orderreturndetail
     */
    omit?: OrderreturndetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderreturndetailInclude<ExtArgs> | null
    where?: OrderreturndetailWhereInput
    orderBy?: OrderreturndetailOrderByWithRelationInput | OrderreturndetailOrderByWithRelationInput[]
    cursor?: OrderreturndetailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderreturndetailScalarFieldEnum | OrderreturndetailScalarFieldEnum[]
  }

  /**
   * Product.Purchasedetail
   */
  export type Product$PurchasedetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchasedetail
     */
    select?: PurchasedetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchasedetail
     */
    omit?: PurchasedetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchasedetailInclude<ExtArgs> | null
    where?: PurchasedetailWhereInput
    orderBy?: PurchasedetailOrderByWithRelationInput | PurchasedetailOrderByWithRelationInput[]
    cursor?: PurchasedetailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PurchasedetailScalarFieldEnum | PurchasedetailScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model Supplier
   */

  export type AggregateSupplier = {
    _count: SupplierCountAggregateOutputType | null
    _avg: SupplierAvgAggregateOutputType | null
    _sum: SupplierSumAggregateOutputType | null
    _min: SupplierMinAggregateOutputType | null
    _max: SupplierMaxAggregateOutputType | null
  }

  export type SupplierAvgAggregateOutputType = {
    id: number | null
  }

  export type SupplierSumAggregateOutputType = {
    id: number | null
  }

  export type SupplierMinAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    phone: string | null
    email: string | null
    address: string | null
  }

  export type SupplierMaxAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    phone: string | null
    email: string | null
    address: string | null
  }

  export type SupplierCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    phone: number
    email: number
    address: number
    _all: number
  }


  export type SupplierAvgAggregateInputType = {
    id?: true
  }

  export type SupplierSumAggregateInputType = {
    id?: true
  }

  export type SupplierMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    phone?: true
    email?: true
    address?: true
  }

  export type SupplierMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    phone?: true
    email?: true
    address?: true
  }

  export type SupplierCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    phone?: true
    email?: true
    address?: true
    _all?: true
  }

  export type SupplierAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Supplier to aggregate.
     */
    where?: SupplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: SupplierOrderByWithRelationInput | SupplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SupplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Suppliers
    **/
    _count?: true | SupplierCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SupplierAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SupplierSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SupplierMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SupplierMaxAggregateInputType
  }

  export type GetSupplierAggregateType<T extends SupplierAggregateArgs> = {
        [P in keyof T & keyof AggregateSupplier]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSupplier[P]>
      : GetScalarType<T[P], AggregateSupplier[P]>
  }




  export type SupplierGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SupplierWhereInput
    orderBy?: SupplierOrderByWithAggregationInput | SupplierOrderByWithAggregationInput[]
    by: SupplierScalarFieldEnum[] | SupplierScalarFieldEnum
    having?: SupplierScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SupplierCountAggregateInputType | true
    _avg?: SupplierAvgAggregateInputType
    _sum?: SupplierSumAggregateInputType
    _min?: SupplierMinAggregateInputType
    _max?: SupplierMaxAggregateInputType
  }

  export type SupplierGroupByOutputType = {
    id: number
    firstName: string
    lastName: string | null
    phone: string
    email: string | null
    address: string
    _count: SupplierCountAggregateOutputType | null
    _avg: SupplierAvgAggregateOutputType | null
    _sum: SupplierSumAggregateOutputType | null
    _min: SupplierMinAggregateOutputType | null
    _max: SupplierMaxAggregateOutputType | null
  }

  type GetSupplierGroupByPayload<T extends SupplierGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SupplierGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SupplierGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SupplierGroupByOutputType[P]>
            : GetScalarType<T[P], SupplierGroupByOutputType[P]>
        }
      >
    >


  export type SupplierSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    phone?: boolean
    email?: boolean
    address?: boolean
    Product?: boolean | Supplier$ProductArgs<ExtArgs>
    _count?: boolean | SupplierCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["supplier"]>



  export type SupplierSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    phone?: boolean
    email?: boolean
    address?: boolean
  }

  export type SupplierOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "phone" | "email" | "address", ExtArgs["result"]["supplier"]>
  export type SupplierInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Product?: boolean | Supplier$ProductArgs<ExtArgs>
    _count?: boolean | SupplierCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $SupplierPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Supplier"
    objects: {
      Product: Prisma.$ProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      firstName: string
      lastName: string | null
      phone: string
      email: string | null
      address: string
    }, ExtArgs["result"]["supplier"]>
    composites: {}
  }

  type SupplierGetPayload<S extends boolean | null | undefined | SupplierDefaultArgs> = $Result.GetResult<Prisma.$SupplierPayload, S>

  type SupplierCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SupplierFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SupplierCountAggregateInputType | true
    }

  export interface SupplierDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Supplier'], meta: { name: 'Supplier' } }
    /**
     * Find zero or one Supplier that matches the filter.
     * @param {SupplierFindUniqueArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SupplierFindUniqueArgs>(args: SelectSubset<T, SupplierFindUniqueArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Supplier that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SupplierFindUniqueOrThrowArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SupplierFindUniqueOrThrowArgs>(args: SelectSubset<T, SupplierFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Supplier that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierFindFirstArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SupplierFindFirstArgs>(args?: SelectSubset<T, SupplierFindFirstArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Supplier that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierFindFirstOrThrowArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SupplierFindFirstOrThrowArgs>(args?: SelectSubset<T, SupplierFindFirstOrThrowArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Suppliers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Suppliers
     * const suppliers = await prisma.supplier.findMany()
     * 
     * // Get first 10 Suppliers
     * const suppliers = await prisma.supplier.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const supplierWithIdOnly = await prisma.supplier.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SupplierFindManyArgs>(args?: SelectSubset<T, SupplierFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Supplier.
     * @param {SupplierCreateArgs} args - Arguments to create a Supplier.
     * @example
     * // Create one Supplier
     * const Supplier = await prisma.supplier.create({
     *   data: {
     *     // ... data to create a Supplier
     *   }
     * })
     * 
     */
    create<T extends SupplierCreateArgs>(args: SelectSubset<T, SupplierCreateArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Suppliers.
     * @param {SupplierCreateManyArgs} args - Arguments to create many Suppliers.
     * @example
     * // Create many Suppliers
     * const supplier = await prisma.supplier.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SupplierCreateManyArgs>(args?: SelectSubset<T, SupplierCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Supplier.
     * @param {SupplierDeleteArgs} args - Arguments to delete one Supplier.
     * @example
     * // Delete one Supplier
     * const Supplier = await prisma.supplier.delete({
     *   where: {
     *     // ... filter to delete one Supplier
     *   }
     * })
     * 
     */
    delete<T extends SupplierDeleteArgs>(args: SelectSubset<T, SupplierDeleteArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Supplier.
     * @param {SupplierUpdateArgs} args - Arguments to update one Supplier.
     * @example
     * // Update one Supplier
     * const supplier = await prisma.supplier.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SupplierUpdateArgs>(args: SelectSubset<T, SupplierUpdateArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Suppliers.
     * @param {SupplierDeleteManyArgs} args - Arguments to filter Suppliers to delete.
     * @example
     * // Delete a few Suppliers
     * const { count } = await prisma.supplier.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SupplierDeleteManyArgs>(args?: SelectSubset<T, SupplierDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Suppliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Suppliers
     * const supplier = await prisma.supplier.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SupplierUpdateManyArgs>(args: SelectSubset<T, SupplierUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Supplier.
     * @param {SupplierUpsertArgs} args - Arguments to update or create a Supplier.
     * @example
     * // Update or create a Supplier
     * const supplier = await prisma.supplier.upsert({
     *   create: {
     *     // ... data to create a Supplier
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Supplier we want to update
     *   }
     * })
     */
    upsert<T extends SupplierUpsertArgs>(args: SelectSubset<T, SupplierUpsertArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Suppliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierCountArgs} args - Arguments to filter Suppliers to count.
     * @example
     * // Count the number of Suppliers
     * const count = await prisma.supplier.count({
     *   where: {
     *     // ... the filter for the Suppliers we want to count
     *   }
     * })
    **/
    count<T extends SupplierCountArgs>(
      args?: Subset<T, SupplierCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SupplierCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Supplier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SupplierAggregateArgs>(args: Subset<T, SupplierAggregateArgs>): Prisma.PrismaPromise<GetSupplierAggregateType<T>>

    /**
     * Group by Supplier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierGroupByArgs} args - Group by arguments.
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
      T extends SupplierGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SupplierGroupByArgs['orderBy'] }
        : { orderBy?: SupplierGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SupplierGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSupplierGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Supplier model
   */
  readonly fields: SupplierFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Supplier.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SupplierClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Product<T extends Supplier$ProductArgs<ExtArgs> = {}>(args?: Subset<T, Supplier$ProductArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Supplier model
   */
  interface SupplierFieldRefs {
    readonly id: FieldRef<"Supplier", 'Int'>
    readonly firstName: FieldRef<"Supplier", 'String'>
    readonly lastName: FieldRef<"Supplier", 'String'>
    readonly phone: FieldRef<"Supplier", 'String'>
    readonly email: FieldRef<"Supplier", 'String'>
    readonly address: FieldRef<"Supplier", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Supplier findUnique
   */
  export type SupplierFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Supplier to fetch.
     */
    where: SupplierWhereUniqueInput
  }

  /**
   * Supplier findUniqueOrThrow
   */
  export type SupplierFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Supplier to fetch.
     */
    where: SupplierWhereUniqueInput
  }

  /**
   * Supplier findFirst
   */
  export type SupplierFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Supplier to fetch.
     */
    where?: SupplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: SupplierOrderByWithRelationInput | SupplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Suppliers.
     */
    cursor?: SupplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Suppliers.
     */
    distinct?: SupplierScalarFieldEnum | SupplierScalarFieldEnum[]
  }

  /**
   * Supplier findFirstOrThrow
   */
  export type SupplierFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Supplier to fetch.
     */
    where?: SupplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: SupplierOrderByWithRelationInput | SupplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Suppliers.
     */
    cursor?: SupplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Suppliers.
     */
    distinct?: SupplierScalarFieldEnum | SupplierScalarFieldEnum[]
  }

  /**
   * Supplier findMany
   */
  export type SupplierFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Suppliers to fetch.
     */
    where?: SupplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: SupplierOrderByWithRelationInput | SupplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Suppliers.
     */
    cursor?: SupplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    distinct?: SupplierScalarFieldEnum | SupplierScalarFieldEnum[]
  }

  /**
   * Supplier create
   */
  export type SupplierCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * The data needed to create a Supplier.
     */
    data: XOR<SupplierCreateInput, SupplierUncheckedCreateInput>
  }

  /**
   * Supplier createMany
   */
  export type SupplierCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Suppliers.
     */
    data: SupplierCreateManyInput | SupplierCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Supplier update
   */
  export type SupplierUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * The data needed to update a Supplier.
     */
    data: XOR<SupplierUpdateInput, SupplierUncheckedUpdateInput>
    /**
     * Choose, which Supplier to update.
     */
    where: SupplierWhereUniqueInput
  }

  /**
   * Supplier updateMany
   */
  export type SupplierUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Suppliers.
     */
    data: XOR<SupplierUpdateManyMutationInput, SupplierUncheckedUpdateManyInput>
    /**
     * Filter which Suppliers to update
     */
    where?: SupplierWhereInput
  }

  /**
   * Supplier upsert
   */
  export type SupplierUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * The filter to search for the Supplier to update in case it exists.
     */
    where: SupplierWhereUniqueInput
    /**
     * In case the Supplier found by the `where` argument doesn't exist, create a new Supplier with this data.
     */
    create: XOR<SupplierCreateInput, SupplierUncheckedCreateInput>
    /**
     * In case the Supplier was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SupplierUpdateInput, SupplierUncheckedUpdateInput>
  }

  /**
   * Supplier delete
   */
  export type SupplierDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter which Supplier to delete.
     */
    where: SupplierWhereUniqueInput
  }

  /**
   * Supplier deleteMany
   */
  export type SupplierDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Suppliers to delete
     */
    where?: SupplierWhereInput
  }

  /**
   * Supplier.Product
   */
  export type Supplier$ProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Supplier without action
   */
  export type SupplierDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
  }


  /**
   * Model Carts
   */

  export type AggregateCarts = {
    _count: CartsCountAggregateOutputType | null
    _avg: CartsAvgAggregateOutputType | null
    _sum: CartsSumAggregateOutputType | null
    _min: CartsMinAggregateOutputType | null
    _max: CartsMaxAggregateOutputType | null
  }

  export type CartsAvgAggregateOutputType = {
    id: number | null
    price: Decimal | null
    qty: number | null
    totalPrice: Decimal | null
    productId: number | null
    userId: number | null
  }

  export type CartsSumAggregateOutputType = {
    id: number | null
    price: Decimal | null
    qty: number | null
    totalPrice: Decimal | null
    productId: number | null
    userId: number | null
  }

  export type CartsMinAggregateOutputType = {
    id: number | null
    price: Decimal | null
    productName: string | null
    qty: number | null
    totalPrice: Decimal | null
    note: string | null
    productId: number | null
    userId: number | null
  }

  export type CartsMaxAggregateOutputType = {
    id: number | null
    price: Decimal | null
    productName: string | null
    qty: number | null
    totalPrice: Decimal | null
    note: string | null
    productId: number | null
    userId: number | null
  }

  export type CartsCountAggregateOutputType = {
    id: number
    price: number
    productName: number
    qty: number
    totalPrice: number
    note: number
    productId: number
    userId: number
    _all: number
  }


  export type CartsAvgAggregateInputType = {
    id?: true
    price?: true
    qty?: true
    totalPrice?: true
    productId?: true
    userId?: true
  }

  export type CartsSumAggregateInputType = {
    id?: true
    price?: true
    qty?: true
    totalPrice?: true
    productId?: true
    userId?: true
  }

  export type CartsMinAggregateInputType = {
    id?: true
    price?: true
    productName?: true
    qty?: true
    totalPrice?: true
    note?: true
    productId?: true
    userId?: true
  }

  export type CartsMaxAggregateInputType = {
    id?: true
    price?: true
    productName?: true
    qty?: true
    totalPrice?: true
    note?: true
    productId?: true
    userId?: true
  }

  export type CartsCountAggregateInputType = {
    id?: true
    price?: true
    productName?: true
    qty?: true
    totalPrice?: true
    note?: true
    productId?: true
    userId?: true
    _all?: true
  }

  export type CartsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Carts to aggregate.
     */
    where?: CartsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carts to fetch.
     */
    orderBy?: CartsOrderByWithRelationInput | CartsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CartsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Carts
    **/
    _count?: true | CartsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CartsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CartsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CartsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CartsMaxAggregateInputType
  }

  export type GetCartsAggregateType<T extends CartsAggregateArgs> = {
        [P in keyof T & keyof AggregateCarts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCarts[P]>
      : GetScalarType<T[P], AggregateCarts[P]>
  }




  export type CartsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartsWhereInput
    orderBy?: CartsOrderByWithAggregationInput | CartsOrderByWithAggregationInput[]
    by: CartsScalarFieldEnum[] | CartsScalarFieldEnum
    having?: CartsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CartsCountAggregateInputType | true
    _avg?: CartsAvgAggregateInputType
    _sum?: CartsSumAggregateInputType
    _min?: CartsMinAggregateInputType
    _max?: CartsMaxAggregateInputType
  }

  export type CartsGroupByOutputType = {
    id: number
    price: Decimal
    productName: string
    qty: number
    totalPrice: Decimal
    note: string
    productId: number
    userId: number
    _count: CartsCountAggregateOutputType | null
    _avg: CartsAvgAggregateOutputType | null
    _sum: CartsSumAggregateOutputType | null
    _min: CartsMinAggregateOutputType | null
    _max: CartsMaxAggregateOutputType | null
  }

  type GetCartsGroupByPayload<T extends CartsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CartsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CartsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CartsGroupByOutputType[P]>
            : GetScalarType<T[P], CartsGroupByOutputType[P]>
        }
      >
    >


  export type CartsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    price?: boolean
    productName?: boolean
    qty?: boolean
    totalPrice?: boolean
    note?: boolean
    productId?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carts"]>



  export type CartsSelectScalar = {
    id?: boolean
    price?: boolean
    productName?: boolean
    qty?: boolean
    totalPrice?: boolean
    note?: boolean
    productId?: boolean
    userId?: boolean
  }

  export type CartsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "price" | "productName" | "qty" | "totalPrice" | "note" | "productId" | "userId", ExtArgs["result"]["carts"]>
  export type CartsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $CartsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Carts"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      price: Prisma.Decimal
      productName: string
      qty: number
      totalPrice: Prisma.Decimal
      note: string
      productId: number
      userId: number
    }, ExtArgs["result"]["carts"]>
    composites: {}
  }

  type CartsGetPayload<S extends boolean | null | undefined | CartsDefaultArgs> = $Result.GetResult<Prisma.$CartsPayload, S>

  type CartsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CartsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CartsCountAggregateInputType | true
    }

  export interface CartsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Carts'], meta: { name: 'Carts' } }
    /**
     * Find zero or one Carts that matches the filter.
     * @param {CartsFindUniqueArgs} args - Arguments to find a Carts
     * @example
     * // Get one Carts
     * const carts = await prisma.carts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CartsFindUniqueArgs>(args: SelectSubset<T, CartsFindUniqueArgs<ExtArgs>>): Prisma__CartsClient<$Result.GetResult<Prisma.$CartsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Carts that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CartsFindUniqueOrThrowArgs} args - Arguments to find a Carts
     * @example
     * // Get one Carts
     * const carts = await prisma.carts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CartsFindUniqueOrThrowArgs>(args: SelectSubset<T, CartsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CartsClient<$Result.GetResult<Prisma.$CartsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Carts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartsFindFirstArgs} args - Arguments to find a Carts
     * @example
     * // Get one Carts
     * const carts = await prisma.carts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CartsFindFirstArgs>(args?: SelectSubset<T, CartsFindFirstArgs<ExtArgs>>): Prisma__CartsClient<$Result.GetResult<Prisma.$CartsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Carts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartsFindFirstOrThrowArgs} args - Arguments to find a Carts
     * @example
     * // Get one Carts
     * const carts = await prisma.carts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CartsFindFirstOrThrowArgs>(args?: SelectSubset<T, CartsFindFirstOrThrowArgs<ExtArgs>>): Prisma__CartsClient<$Result.GetResult<Prisma.$CartsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Carts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Carts
     * const carts = await prisma.carts.findMany()
     * 
     * // Get first 10 Carts
     * const carts = await prisma.carts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cartsWithIdOnly = await prisma.carts.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CartsFindManyArgs>(args?: SelectSubset<T, CartsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Carts.
     * @param {CartsCreateArgs} args - Arguments to create a Carts.
     * @example
     * // Create one Carts
     * const Carts = await prisma.carts.create({
     *   data: {
     *     // ... data to create a Carts
     *   }
     * })
     * 
     */
    create<T extends CartsCreateArgs>(args: SelectSubset<T, CartsCreateArgs<ExtArgs>>): Prisma__CartsClient<$Result.GetResult<Prisma.$CartsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Carts.
     * @param {CartsCreateManyArgs} args - Arguments to create many Carts.
     * @example
     * // Create many Carts
     * const carts = await prisma.carts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CartsCreateManyArgs>(args?: SelectSubset<T, CartsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Carts.
     * @param {CartsDeleteArgs} args - Arguments to delete one Carts.
     * @example
     * // Delete one Carts
     * const Carts = await prisma.carts.delete({
     *   where: {
     *     // ... filter to delete one Carts
     *   }
     * })
     * 
     */
    delete<T extends CartsDeleteArgs>(args: SelectSubset<T, CartsDeleteArgs<ExtArgs>>): Prisma__CartsClient<$Result.GetResult<Prisma.$CartsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Carts.
     * @param {CartsUpdateArgs} args - Arguments to update one Carts.
     * @example
     * // Update one Carts
     * const carts = await prisma.carts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CartsUpdateArgs>(args: SelectSubset<T, CartsUpdateArgs<ExtArgs>>): Prisma__CartsClient<$Result.GetResult<Prisma.$CartsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Carts.
     * @param {CartsDeleteManyArgs} args - Arguments to filter Carts to delete.
     * @example
     * // Delete a few Carts
     * const { count } = await prisma.carts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CartsDeleteManyArgs>(args?: SelectSubset<T, CartsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Carts
     * const carts = await prisma.carts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CartsUpdateManyArgs>(args: SelectSubset<T, CartsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Carts.
     * @param {CartsUpsertArgs} args - Arguments to update or create a Carts.
     * @example
     * // Update or create a Carts
     * const carts = await prisma.carts.upsert({
     *   create: {
     *     // ... data to create a Carts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Carts we want to update
     *   }
     * })
     */
    upsert<T extends CartsUpsertArgs>(args: SelectSubset<T, CartsUpsertArgs<ExtArgs>>): Prisma__CartsClient<$Result.GetResult<Prisma.$CartsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartsCountArgs} args - Arguments to filter Carts to count.
     * @example
     * // Count the number of Carts
     * const count = await prisma.carts.count({
     *   where: {
     *     // ... the filter for the Carts we want to count
     *   }
     * })
    **/
    count<T extends CartsCountArgs>(
      args?: Subset<T, CartsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CartsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CartsAggregateArgs>(args: Subset<T, CartsAggregateArgs>): Prisma.PrismaPromise<GetCartsAggregateType<T>>

    /**
     * Group by Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartsGroupByArgs} args - Group by arguments.
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
      T extends CartsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CartsGroupByArgs['orderBy'] }
        : { orderBy?: CartsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CartsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCartsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Carts model
   */
  readonly fields: CartsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Carts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CartsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Carts model
   */
  interface CartsFieldRefs {
    readonly id: FieldRef<"Carts", 'Int'>
    readonly price: FieldRef<"Carts", 'Decimal'>
    readonly productName: FieldRef<"Carts", 'String'>
    readonly qty: FieldRef<"Carts", 'Int'>
    readonly totalPrice: FieldRef<"Carts", 'Decimal'>
    readonly note: FieldRef<"Carts", 'String'>
    readonly productId: FieldRef<"Carts", 'Int'>
    readonly userId: FieldRef<"Carts", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Carts findUnique
   */
  export type CartsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carts
     */
    select?: CartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carts
     */
    omit?: CartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartsInclude<ExtArgs> | null
    /**
     * Filter, which Carts to fetch.
     */
    where: CartsWhereUniqueInput
  }

  /**
   * Carts findUniqueOrThrow
   */
  export type CartsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carts
     */
    select?: CartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carts
     */
    omit?: CartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartsInclude<ExtArgs> | null
    /**
     * Filter, which Carts to fetch.
     */
    where: CartsWhereUniqueInput
  }

  /**
   * Carts findFirst
   */
  export type CartsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carts
     */
    select?: CartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carts
     */
    omit?: CartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartsInclude<ExtArgs> | null
    /**
     * Filter, which Carts to fetch.
     */
    where?: CartsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carts to fetch.
     */
    orderBy?: CartsOrderByWithRelationInput | CartsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Carts.
     */
    cursor?: CartsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Carts.
     */
    distinct?: CartsScalarFieldEnum | CartsScalarFieldEnum[]
  }

  /**
   * Carts findFirstOrThrow
   */
  export type CartsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carts
     */
    select?: CartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carts
     */
    omit?: CartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartsInclude<ExtArgs> | null
    /**
     * Filter, which Carts to fetch.
     */
    where?: CartsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carts to fetch.
     */
    orderBy?: CartsOrderByWithRelationInput | CartsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Carts.
     */
    cursor?: CartsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Carts.
     */
    distinct?: CartsScalarFieldEnum | CartsScalarFieldEnum[]
  }

  /**
   * Carts findMany
   */
  export type CartsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carts
     */
    select?: CartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carts
     */
    omit?: CartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartsInclude<ExtArgs> | null
    /**
     * Filter, which Carts to fetch.
     */
    where?: CartsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carts to fetch.
     */
    orderBy?: CartsOrderByWithRelationInput | CartsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Carts.
     */
    cursor?: CartsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carts.
     */
    skip?: number
    distinct?: CartsScalarFieldEnum | CartsScalarFieldEnum[]
  }

  /**
   * Carts create
   */
  export type CartsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carts
     */
    select?: CartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carts
     */
    omit?: CartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartsInclude<ExtArgs> | null
    /**
     * The data needed to create a Carts.
     */
    data: XOR<CartsCreateInput, CartsUncheckedCreateInput>
  }

  /**
   * Carts createMany
   */
  export type CartsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Carts.
     */
    data: CartsCreateManyInput | CartsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Carts update
   */
  export type CartsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carts
     */
    select?: CartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carts
     */
    omit?: CartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartsInclude<ExtArgs> | null
    /**
     * The data needed to update a Carts.
     */
    data: XOR<CartsUpdateInput, CartsUncheckedUpdateInput>
    /**
     * Choose, which Carts to update.
     */
    where: CartsWhereUniqueInput
  }

  /**
   * Carts updateMany
   */
  export type CartsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Carts.
     */
    data: XOR<CartsUpdateManyMutationInput, CartsUncheckedUpdateManyInput>
    /**
     * Filter which Carts to update
     */
    where?: CartsWhereInput
  }

  /**
   * Carts upsert
   */
  export type CartsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carts
     */
    select?: CartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carts
     */
    omit?: CartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartsInclude<ExtArgs> | null
    /**
     * The filter to search for the Carts to update in case it exists.
     */
    where: CartsWhereUniqueInput
    /**
     * In case the Carts found by the `where` argument doesn't exist, create a new Carts with this data.
     */
    create: XOR<CartsCreateInput, CartsUncheckedCreateInput>
    /**
     * In case the Carts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CartsUpdateInput, CartsUncheckedUpdateInput>
  }

  /**
   * Carts delete
   */
  export type CartsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carts
     */
    select?: CartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carts
     */
    omit?: CartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartsInclude<ExtArgs> | null
    /**
     * Filter which Carts to delete.
     */
    where: CartsWhereUniqueInput
  }

  /**
   * Carts deleteMany
   */
  export type CartsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Carts to delete
     */
    where?: CartsWhereInput
  }

  /**
   * Carts without action
   */
  export type CartsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carts
     */
    select?: CartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carts
     */
    omit?: CartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartsInclude<ExtArgs> | null
  }


  /**
   * Model Orders
   */

  export type AggregateOrders = {
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  export type OrdersAvgAggregateOutputType = {
    id: number | null
    total: Decimal | null
    ppn: Decimal | null
    grandTotal: Decimal | null
    userId: number | null
  }

  export type OrdersSumAggregateOutputType = {
    id: number | null
    total: Decimal | null
    ppn: Decimal | null
    grandTotal: Decimal | null
    userId: number | null
  }

  export type OrdersMinAggregateOutputType = {
    id: number | null
    date: Date | null
    code: string | null
    total: Decimal | null
    ppn: Decimal | null
    grandTotal: Decimal | null
    userId: number | null
  }

  export type OrdersMaxAggregateOutputType = {
    id: number | null
    date: Date | null
    code: string | null
    total: Decimal | null
    ppn: Decimal | null
    grandTotal: Decimal | null
    userId: number | null
  }

  export type OrdersCountAggregateOutputType = {
    id: number
    date: number
    code: number
    total: number
    ppn: number
    grandTotal: number
    userId: number
    _all: number
  }


  export type OrdersAvgAggregateInputType = {
    id?: true
    total?: true
    ppn?: true
    grandTotal?: true
    userId?: true
  }

  export type OrdersSumAggregateInputType = {
    id?: true
    total?: true
    ppn?: true
    grandTotal?: true
    userId?: true
  }

  export type OrdersMinAggregateInputType = {
    id?: true
    date?: true
    code?: true
    total?: true
    ppn?: true
    grandTotal?: true
    userId?: true
  }

  export type OrdersMaxAggregateInputType = {
    id?: true
    date?: true
    code?: true
    total?: true
    ppn?: true
    grandTotal?: true
    userId?: true
  }

  export type OrdersCountAggregateInputType = {
    id?: true
    date?: true
    code?: true
    total?: true
    ppn?: true
    grandTotal?: true
    userId?: true
    _all?: true
  }

  export type OrdersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to aggregate.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrdersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrdersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrdersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrdersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrdersMaxAggregateInputType
  }

  export type GetOrdersAggregateType<T extends OrdersAggregateArgs> = {
        [P in keyof T & keyof AggregateOrders]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrders[P]>
      : GetScalarType<T[P], AggregateOrders[P]>
  }




  export type OrdersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrdersWhereInput
    orderBy?: OrdersOrderByWithAggregationInput | OrdersOrderByWithAggregationInput[]
    by: OrdersScalarFieldEnum[] | OrdersScalarFieldEnum
    having?: OrdersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrdersCountAggregateInputType | true
    _avg?: OrdersAvgAggregateInputType
    _sum?: OrdersSumAggregateInputType
    _min?: OrdersMinAggregateInputType
    _max?: OrdersMaxAggregateInputType
  }

  export type OrdersGroupByOutputType = {
    id: number
    date: Date
    code: string
    total: Decimal
    ppn: Decimal
    grandTotal: Decimal
    userId: number
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  type GetOrdersGroupByPayload<T extends OrdersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrdersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrdersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrdersGroupByOutputType[P]>
            : GetScalarType<T[P], OrdersGroupByOutputType[P]>
        }
      >
    >


  export type OrdersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    code?: boolean
    total?: boolean
    ppn?: boolean
    grandTotal?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    Orderdetail?: boolean | Orders$OrderdetailArgs<ExtArgs>
    Orderreturn?: boolean | Orders$OrderreturnArgs<ExtArgs>
    _count?: boolean | OrdersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>



  export type OrdersSelectScalar = {
    id?: boolean
    date?: boolean
    code?: boolean
    total?: boolean
    ppn?: boolean
    grandTotal?: boolean
    userId?: boolean
  }

  export type OrdersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "date" | "code" | "total" | "ppn" | "grandTotal" | "userId", ExtArgs["result"]["orders"]>
  export type OrdersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    Orderdetail?: boolean | Orders$OrderdetailArgs<ExtArgs>
    Orderreturn?: boolean | Orders$OrderreturnArgs<ExtArgs>
    _count?: boolean | OrdersCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $OrdersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Orders"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      Orderdetail: Prisma.$OrderdetailPayload<ExtArgs>[]
      Orderreturn: Prisma.$OrderreturnPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      date: Date
      code: string
      total: Prisma.Decimal
      ppn: Prisma.Decimal
      grandTotal: Prisma.Decimal
      userId: number
    }, ExtArgs["result"]["orders"]>
    composites: {}
  }

  type OrdersGetPayload<S extends boolean | null | undefined | OrdersDefaultArgs> = $Result.GetResult<Prisma.$OrdersPayload, S>

  type OrdersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrdersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrdersCountAggregateInputType | true
    }

  export interface OrdersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Orders'], meta: { name: 'Orders' } }
    /**
     * Find zero or one Orders that matches the filter.
     * @param {OrdersFindUniqueArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrdersFindUniqueArgs>(args: SelectSubset<T, OrdersFindUniqueArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Orders that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrdersFindUniqueOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrdersFindUniqueOrThrowArgs>(args: SelectSubset<T, OrdersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersFindFirstArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrdersFindFirstArgs>(args?: SelectSubset<T, OrdersFindFirstArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orders that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersFindFirstOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrdersFindFirstOrThrowArgs>(args?: SelectSubset<T, OrdersFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.orders.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.orders.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ordersWithIdOnly = await prisma.orders.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrdersFindManyArgs>(args?: SelectSubset<T, OrdersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Orders.
     * @param {OrdersCreateArgs} args - Arguments to create a Orders.
     * @example
     * // Create one Orders
     * const Orders = await prisma.orders.create({
     *   data: {
     *     // ... data to create a Orders
     *   }
     * })
     * 
     */
    create<T extends OrdersCreateArgs>(args: SelectSubset<T, OrdersCreateArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {OrdersCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const orders = await prisma.orders.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrdersCreateManyArgs>(args?: SelectSubset<T, OrdersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Orders.
     * @param {OrdersDeleteArgs} args - Arguments to delete one Orders.
     * @example
     * // Delete one Orders
     * const Orders = await prisma.orders.delete({
     *   where: {
     *     // ... filter to delete one Orders
     *   }
     * })
     * 
     */
    delete<T extends OrdersDeleteArgs>(args: SelectSubset<T, OrdersDeleteArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Orders.
     * @param {OrdersUpdateArgs} args - Arguments to update one Orders.
     * @example
     * // Update one Orders
     * const orders = await prisma.orders.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrdersUpdateArgs>(args: SelectSubset<T, OrdersUpdateArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {OrdersDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.orders.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrdersDeleteManyArgs>(args?: SelectSubset<T, OrdersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const orders = await prisma.orders.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrdersUpdateManyArgs>(args: SelectSubset<T, OrdersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Orders.
     * @param {OrdersUpsertArgs} args - Arguments to update or create a Orders.
     * @example
     * // Update or create a Orders
     * const orders = await prisma.orders.upsert({
     *   create: {
     *     // ... data to create a Orders
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Orders we want to update
     *   }
     * })
     */
    upsert<T extends OrdersUpsertArgs>(args: SelectSubset<T, OrdersUpsertArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.orders.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrdersCountArgs>(
      args?: Subset<T, OrdersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrdersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrdersAggregateArgs>(args: Subset<T, OrdersAggregateArgs>): Prisma.PrismaPromise<GetOrdersAggregateType<T>>

    /**
     * Group by Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersGroupByArgs} args - Group by arguments.
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
      T extends OrdersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrdersGroupByArgs['orderBy'] }
        : { orderBy?: OrdersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrdersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrdersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Orders model
   */
  readonly fields: OrdersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Orders.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrdersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Orderdetail<T extends Orders$OrderdetailArgs<ExtArgs> = {}>(args?: Subset<T, Orders$OrderdetailArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderdetailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Orderreturn<T extends Orders$OrderreturnArgs<ExtArgs> = {}>(args?: Subset<T, Orders$OrderreturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderreturnPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Orders model
   */
  interface OrdersFieldRefs {
    readonly id: FieldRef<"Orders", 'Int'>
    readonly date: FieldRef<"Orders", 'DateTime'>
    readonly code: FieldRef<"Orders", 'String'>
    readonly total: FieldRef<"Orders", 'Decimal'>
    readonly ppn: FieldRef<"Orders", 'Decimal'>
    readonly grandTotal: FieldRef<"Orders", 'Decimal'>
    readonly userId: FieldRef<"Orders", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Orders findUnique
   */
  export type OrdersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders findUniqueOrThrow
   */
  export type OrdersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders findFirst
   */
  export type OrdersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * Orders findFirstOrThrow
   */
  export type OrdersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * Orders findMany
   */
  export type OrdersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * Orders create
   */
  export type OrdersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * The data needed to create a Orders.
     */
    data: XOR<OrdersCreateInput, OrdersUncheckedCreateInput>
  }

  /**
   * Orders createMany
   */
  export type OrdersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrdersCreateManyInput | OrdersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Orders update
   */
  export type OrdersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * The data needed to update a Orders.
     */
    data: XOR<OrdersUpdateInput, OrdersUncheckedUpdateInput>
    /**
     * Choose, which Orders to update.
     */
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders updateMany
   */
  export type OrdersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrdersUpdateManyMutationInput, OrdersUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrdersWhereInput
  }

  /**
   * Orders upsert
   */
  export type OrdersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * The filter to search for the Orders to update in case it exists.
     */
    where: OrdersWhereUniqueInput
    /**
     * In case the Orders found by the `where` argument doesn't exist, create a new Orders with this data.
     */
    create: XOR<OrdersCreateInput, OrdersUncheckedCreateInput>
    /**
     * In case the Orders was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrdersUpdateInput, OrdersUncheckedUpdateInput>
  }

  /**
   * Orders delete
   */
  export type OrdersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter which Orders to delete.
     */
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders deleteMany
   */
  export type OrdersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrdersWhereInput
  }

  /**
   * Orders.Orderdetail
   */
  export type Orders$OrderdetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orderdetail
     */
    select?: OrderdetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orderdetail
     */
    omit?: OrderdetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderdetailInclude<ExtArgs> | null
    where?: OrderdetailWhereInput
    orderBy?: OrderdetailOrderByWithRelationInput | OrderdetailOrderByWithRelationInput[]
    cursor?: OrderdetailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderdetailScalarFieldEnum | OrderdetailScalarFieldEnum[]
  }

  /**
   * Orders.Orderreturn
   */
  export type Orders$OrderreturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orderreturn
     */
    select?: OrderreturnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orderreturn
     */
    omit?: OrderreturnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderreturnInclude<ExtArgs> | null
    where?: OrderreturnWhereInput
    orderBy?: OrderreturnOrderByWithRelationInput | OrderreturnOrderByWithRelationInput[]
    cursor?: OrderreturnWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderreturnScalarFieldEnum | OrderreturnScalarFieldEnum[]
  }

  /**
   * Orders without action
   */
  export type OrdersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
  }


  /**
   * Model Orderdetail
   */

  export type AggregateOrderdetail = {
    _count: OrderdetailCountAggregateOutputType | null
    _avg: OrderdetailAvgAggregateOutputType | null
    _sum: OrderdetailSumAggregateOutputType | null
    _min: OrderdetailMinAggregateOutputType | null
    _max: OrderdetailMaxAggregateOutputType | null
  }

  export type OrderdetailAvgAggregateOutputType = {
    id: number | null
    price: Decimal | null
    qty: number | null
    totalPrice: Decimal | null
    productId: number | null
    orderId: number | null
  }

  export type OrderdetailSumAggregateOutputType = {
    id: number | null
    price: Decimal | null
    qty: number | null
    totalPrice: Decimal | null
    productId: number | null
    orderId: number | null
  }

  export type OrderdetailMinAggregateOutputType = {
    id: number | null
    price: Decimal | null
    productName: string | null
    qty: number | null
    totalPrice: Decimal | null
    note: string | null
    productId: number | null
    orderId: number | null
  }

  export type OrderdetailMaxAggregateOutputType = {
    id: number | null
    price: Decimal | null
    productName: string | null
    qty: number | null
    totalPrice: Decimal | null
    note: string | null
    productId: number | null
    orderId: number | null
  }

  export type OrderdetailCountAggregateOutputType = {
    id: number
    price: number
    productName: number
    qty: number
    totalPrice: number
    note: number
    productId: number
    orderId: number
    _all: number
  }


  export type OrderdetailAvgAggregateInputType = {
    id?: true
    price?: true
    qty?: true
    totalPrice?: true
    productId?: true
    orderId?: true
  }

  export type OrderdetailSumAggregateInputType = {
    id?: true
    price?: true
    qty?: true
    totalPrice?: true
    productId?: true
    orderId?: true
  }

  export type OrderdetailMinAggregateInputType = {
    id?: true
    price?: true
    productName?: true
    qty?: true
    totalPrice?: true
    note?: true
    productId?: true
    orderId?: true
  }

  export type OrderdetailMaxAggregateInputType = {
    id?: true
    price?: true
    productName?: true
    qty?: true
    totalPrice?: true
    note?: true
    productId?: true
    orderId?: true
  }

  export type OrderdetailCountAggregateInputType = {
    id?: true
    price?: true
    productName?: true
    qty?: true
    totalPrice?: true
    note?: true
    productId?: true
    orderId?: true
    _all?: true
  }

  export type OrderdetailAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orderdetail to aggregate.
     */
    where?: OrderdetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orderdetails to fetch.
     */
    orderBy?: OrderdetailOrderByWithRelationInput | OrderdetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderdetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orderdetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orderdetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orderdetails
    **/
    _count?: true | OrderdetailCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderdetailAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderdetailSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderdetailMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderdetailMaxAggregateInputType
  }

  export type GetOrderdetailAggregateType<T extends OrderdetailAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderdetail]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderdetail[P]>
      : GetScalarType<T[P], AggregateOrderdetail[P]>
  }




  export type OrderdetailGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderdetailWhereInput
    orderBy?: OrderdetailOrderByWithAggregationInput | OrderdetailOrderByWithAggregationInput[]
    by: OrderdetailScalarFieldEnum[] | OrderdetailScalarFieldEnum
    having?: OrderdetailScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderdetailCountAggregateInputType | true
    _avg?: OrderdetailAvgAggregateInputType
    _sum?: OrderdetailSumAggregateInputType
    _min?: OrderdetailMinAggregateInputType
    _max?: OrderdetailMaxAggregateInputType
  }

  export type OrderdetailGroupByOutputType = {
    id: number
    price: Decimal
    productName: string
    qty: number
    totalPrice: Decimal
    note: string
    productId: number
    orderId: number
    _count: OrderdetailCountAggregateOutputType | null
    _avg: OrderdetailAvgAggregateOutputType | null
    _sum: OrderdetailSumAggregateOutputType | null
    _min: OrderdetailMinAggregateOutputType | null
    _max: OrderdetailMaxAggregateOutputType | null
  }

  type GetOrderdetailGroupByPayload<T extends OrderdetailGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderdetailGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderdetailGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderdetailGroupByOutputType[P]>
            : GetScalarType<T[P], OrderdetailGroupByOutputType[P]>
        }
      >
    >


  export type OrderdetailSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    price?: boolean
    productName?: boolean
    qty?: boolean
    totalPrice?: boolean
    note?: boolean
    productId?: boolean
    orderId?: boolean
    order?: boolean | OrdersDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderdetail"]>



  export type OrderdetailSelectScalar = {
    id?: boolean
    price?: boolean
    productName?: boolean
    qty?: boolean
    totalPrice?: boolean
    note?: boolean
    productId?: boolean
    orderId?: boolean
  }

  export type OrderdetailOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "price" | "productName" | "qty" | "totalPrice" | "note" | "productId" | "orderId", ExtArgs["result"]["orderdetail"]>
  export type OrderdetailInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrdersDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $OrderdetailPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Orderdetail"
    objects: {
      order: Prisma.$OrdersPayload<ExtArgs>
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      price: Prisma.Decimal
      productName: string
      qty: number
      totalPrice: Prisma.Decimal
      note: string
      productId: number
      orderId: number
    }, ExtArgs["result"]["orderdetail"]>
    composites: {}
  }

  type OrderdetailGetPayload<S extends boolean | null | undefined | OrderdetailDefaultArgs> = $Result.GetResult<Prisma.$OrderdetailPayload, S>

  type OrderdetailCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderdetailFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderdetailCountAggregateInputType | true
    }

  export interface OrderdetailDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Orderdetail'], meta: { name: 'Orderdetail' } }
    /**
     * Find zero or one Orderdetail that matches the filter.
     * @param {OrderdetailFindUniqueArgs} args - Arguments to find a Orderdetail
     * @example
     * // Get one Orderdetail
     * const orderdetail = await prisma.orderdetail.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderdetailFindUniqueArgs>(args: SelectSubset<T, OrderdetailFindUniqueArgs<ExtArgs>>): Prisma__OrderdetailClient<$Result.GetResult<Prisma.$OrderdetailPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Orderdetail that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderdetailFindUniqueOrThrowArgs} args - Arguments to find a Orderdetail
     * @example
     * // Get one Orderdetail
     * const orderdetail = await prisma.orderdetail.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderdetailFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderdetailFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderdetailClient<$Result.GetResult<Prisma.$OrderdetailPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orderdetail that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderdetailFindFirstArgs} args - Arguments to find a Orderdetail
     * @example
     * // Get one Orderdetail
     * const orderdetail = await prisma.orderdetail.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderdetailFindFirstArgs>(args?: SelectSubset<T, OrderdetailFindFirstArgs<ExtArgs>>): Prisma__OrderdetailClient<$Result.GetResult<Prisma.$OrderdetailPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orderdetail that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderdetailFindFirstOrThrowArgs} args - Arguments to find a Orderdetail
     * @example
     * // Get one Orderdetail
     * const orderdetail = await prisma.orderdetail.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderdetailFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderdetailFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderdetailClient<$Result.GetResult<Prisma.$OrderdetailPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orderdetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderdetailFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orderdetails
     * const orderdetails = await prisma.orderdetail.findMany()
     * 
     * // Get first 10 Orderdetails
     * const orderdetails = await prisma.orderdetail.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderdetailWithIdOnly = await prisma.orderdetail.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderdetailFindManyArgs>(args?: SelectSubset<T, OrderdetailFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderdetailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Orderdetail.
     * @param {OrderdetailCreateArgs} args - Arguments to create a Orderdetail.
     * @example
     * // Create one Orderdetail
     * const Orderdetail = await prisma.orderdetail.create({
     *   data: {
     *     // ... data to create a Orderdetail
     *   }
     * })
     * 
     */
    create<T extends OrderdetailCreateArgs>(args: SelectSubset<T, OrderdetailCreateArgs<ExtArgs>>): Prisma__OrderdetailClient<$Result.GetResult<Prisma.$OrderdetailPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orderdetails.
     * @param {OrderdetailCreateManyArgs} args - Arguments to create many Orderdetails.
     * @example
     * // Create many Orderdetails
     * const orderdetail = await prisma.orderdetail.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderdetailCreateManyArgs>(args?: SelectSubset<T, OrderdetailCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Orderdetail.
     * @param {OrderdetailDeleteArgs} args - Arguments to delete one Orderdetail.
     * @example
     * // Delete one Orderdetail
     * const Orderdetail = await prisma.orderdetail.delete({
     *   where: {
     *     // ... filter to delete one Orderdetail
     *   }
     * })
     * 
     */
    delete<T extends OrderdetailDeleteArgs>(args: SelectSubset<T, OrderdetailDeleteArgs<ExtArgs>>): Prisma__OrderdetailClient<$Result.GetResult<Prisma.$OrderdetailPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Orderdetail.
     * @param {OrderdetailUpdateArgs} args - Arguments to update one Orderdetail.
     * @example
     * // Update one Orderdetail
     * const orderdetail = await prisma.orderdetail.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderdetailUpdateArgs>(args: SelectSubset<T, OrderdetailUpdateArgs<ExtArgs>>): Prisma__OrderdetailClient<$Result.GetResult<Prisma.$OrderdetailPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orderdetails.
     * @param {OrderdetailDeleteManyArgs} args - Arguments to filter Orderdetails to delete.
     * @example
     * // Delete a few Orderdetails
     * const { count } = await prisma.orderdetail.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderdetailDeleteManyArgs>(args?: SelectSubset<T, OrderdetailDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orderdetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderdetailUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orderdetails
     * const orderdetail = await prisma.orderdetail.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderdetailUpdateManyArgs>(args: SelectSubset<T, OrderdetailUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Orderdetail.
     * @param {OrderdetailUpsertArgs} args - Arguments to update or create a Orderdetail.
     * @example
     * // Update or create a Orderdetail
     * const orderdetail = await prisma.orderdetail.upsert({
     *   create: {
     *     // ... data to create a Orderdetail
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Orderdetail we want to update
     *   }
     * })
     */
    upsert<T extends OrderdetailUpsertArgs>(args: SelectSubset<T, OrderdetailUpsertArgs<ExtArgs>>): Prisma__OrderdetailClient<$Result.GetResult<Prisma.$OrderdetailPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orderdetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderdetailCountArgs} args - Arguments to filter Orderdetails to count.
     * @example
     * // Count the number of Orderdetails
     * const count = await prisma.orderdetail.count({
     *   where: {
     *     // ... the filter for the Orderdetails we want to count
     *   }
     * })
    **/
    count<T extends OrderdetailCountArgs>(
      args?: Subset<T, OrderdetailCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderdetailCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Orderdetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderdetailAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderdetailAggregateArgs>(args: Subset<T, OrderdetailAggregateArgs>): Prisma.PrismaPromise<GetOrderdetailAggregateType<T>>

    /**
     * Group by Orderdetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderdetailGroupByArgs} args - Group by arguments.
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
      T extends OrderdetailGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderdetailGroupByArgs['orderBy'] }
        : { orderBy?: OrderdetailGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrderdetailGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderdetailGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Orderdetail model
   */
  readonly fields: OrderdetailFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Orderdetail.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderdetailClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends OrdersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrdersDefaultArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Orderdetail model
   */
  interface OrderdetailFieldRefs {
    readonly id: FieldRef<"Orderdetail", 'Int'>
    readonly price: FieldRef<"Orderdetail", 'Decimal'>
    readonly productName: FieldRef<"Orderdetail", 'String'>
    readonly qty: FieldRef<"Orderdetail", 'Int'>
    readonly totalPrice: FieldRef<"Orderdetail", 'Decimal'>
    readonly note: FieldRef<"Orderdetail", 'String'>
    readonly productId: FieldRef<"Orderdetail", 'Int'>
    readonly orderId: FieldRef<"Orderdetail", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Orderdetail findUnique
   */
  export type OrderdetailFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orderdetail
     */
    select?: OrderdetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orderdetail
     */
    omit?: OrderdetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderdetailInclude<ExtArgs> | null
    /**
     * Filter, which Orderdetail to fetch.
     */
    where: OrderdetailWhereUniqueInput
  }

  /**
   * Orderdetail findUniqueOrThrow
   */
  export type OrderdetailFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orderdetail
     */
    select?: OrderdetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orderdetail
     */
    omit?: OrderdetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderdetailInclude<ExtArgs> | null
    /**
     * Filter, which Orderdetail to fetch.
     */
    where: OrderdetailWhereUniqueInput
  }

  /**
   * Orderdetail findFirst
   */
  export type OrderdetailFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orderdetail
     */
    select?: OrderdetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orderdetail
     */
    omit?: OrderdetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderdetailInclude<ExtArgs> | null
    /**
     * Filter, which Orderdetail to fetch.
     */
    where?: OrderdetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orderdetails to fetch.
     */
    orderBy?: OrderdetailOrderByWithRelationInput | OrderdetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orderdetails.
     */
    cursor?: OrderdetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orderdetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orderdetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orderdetails.
     */
    distinct?: OrderdetailScalarFieldEnum | OrderdetailScalarFieldEnum[]
  }

  /**
   * Orderdetail findFirstOrThrow
   */
  export type OrderdetailFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orderdetail
     */
    select?: OrderdetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orderdetail
     */
    omit?: OrderdetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderdetailInclude<ExtArgs> | null
    /**
     * Filter, which Orderdetail to fetch.
     */
    where?: OrderdetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orderdetails to fetch.
     */
    orderBy?: OrderdetailOrderByWithRelationInput | OrderdetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orderdetails.
     */
    cursor?: OrderdetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orderdetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orderdetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orderdetails.
     */
    distinct?: OrderdetailScalarFieldEnum | OrderdetailScalarFieldEnum[]
  }

  /**
   * Orderdetail findMany
   */
  export type OrderdetailFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orderdetail
     */
    select?: OrderdetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orderdetail
     */
    omit?: OrderdetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderdetailInclude<ExtArgs> | null
    /**
     * Filter, which Orderdetails to fetch.
     */
    where?: OrderdetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orderdetails to fetch.
     */
    orderBy?: OrderdetailOrderByWithRelationInput | OrderdetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orderdetails.
     */
    cursor?: OrderdetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orderdetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orderdetails.
     */
    skip?: number
    distinct?: OrderdetailScalarFieldEnum | OrderdetailScalarFieldEnum[]
  }

  /**
   * Orderdetail create
   */
  export type OrderdetailCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orderdetail
     */
    select?: OrderdetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orderdetail
     */
    omit?: OrderdetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderdetailInclude<ExtArgs> | null
    /**
     * The data needed to create a Orderdetail.
     */
    data: XOR<OrderdetailCreateInput, OrderdetailUncheckedCreateInput>
  }

  /**
   * Orderdetail createMany
   */
  export type OrderdetailCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orderdetails.
     */
    data: OrderdetailCreateManyInput | OrderdetailCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Orderdetail update
   */
  export type OrderdetailUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orderdetail
     */
    select?: OrderdetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orderdetail
     */
    omit?: OrderdetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderdetailInclude<ExtArgs> | null
    /**
     * The data needed to update a Orderdetail.
     */
    data: XOR<OrderdetailUpdateInput, OrderdetailUncheckedUpdateInput>
    /**
     * Choose, which Orderdetail to update.
     */
    where: OrderdetailWhereUniqueInput
  }

  /**
   * Orderdetail updateMany
   */
  export type OrderdetailUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orderdetails.
     */
    data: XOR<OrderdetailUpdateManyMutationInput, OrderdetailUncheckedUpdateManyInput>
    /**
     * Filter which Orderdetails to update
     */
    where?: OrderdetailWhereInput
  }

  /**
   * Orderdetail upsert
   */
  export type OrderdetailUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orderdetail
     */
    select?: OrderdetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orderdetail
     */
    omit?: OrderdetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderdetailInclude<ExtArgs> | null
    /**
     * The filter to search for the Orderdetail to update in case it exists.
     */
    where: OrderdetailWhereUniqueInput
    /**
     * In case the Orderdetail found by the `where` argument doesn't exist, create a new Orderdetail with this data.
     */
    create: XOR<OrderdetailCreateInput, OrderdetailUncheckedCreateInput>
    /**
     * In case the Orderdetail was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderdetailUpdateInput, OrderdetailUncheckedUpdateInput>
  }

  /**
   * Orderdetail delete
   */
  export type OrderdetailDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orderdetail
     */
    select?: OrderdetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orderdetail
     */
    omit?: OrderdetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderdetailInclude<ExtArgs> | null
    /**
     * Filter which Orderdetail to delete.
     */
    where: OrderdetailWhereUniqueInput
  }

  /**
   * Orderdetail deleteMany
   */
  export type OrderdetailDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orderdetails to delete
     */
    where?: OrderdetailWhereInput
  }

  /**
   * Orderdetail without action
   */
  export type OrderdetailDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orderdetail
     */
    select?: OrderdetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orderdetail
     */
    omit?: OrderdetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderdetailInclude<ExtArgs> | null
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
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    userName: string | null
    password: string | null
    name: string | null
    role: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    userName: string | null
    password: string | null
    name: string | null
    role: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    userName: number
    password: number
    name: number
    role: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    userName?: true
    password?: true
    name?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    userName?: true
    password?: true
    name?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    userName?: true
    password?: true
    name?: true
    role?: true
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
    id: number
    userName: string
    password: string
    name: string
    role: string
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
    id?: boolean
    userName?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    Carts?: boolean | User$CartsArgs<ExtArgs>
    Orders?: boolean | User$OrdersArgs<ExtArgs>
    Orderreturn?: boolean | User$OrderreturnArgs<ExtArgs>
    Purchase?: boolean | User$PurchaseArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    userName?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userName" | "password" | "name" | "role", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Carts?: boolean | User$CartsArgs<ExtArgs>
    Orders?: boolean | User$OrdersArgs<ExtArgs>
    Orderreturn?: boolean | User$OrderreturnArgs<ExtArgs>
    Purchase?: boolean | User$PurchaseArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Carts: Prisma.$CartsPayload<ExtArgs>[]
      Orders: Prisma.$OrdersPayload<ExtArgs>[]
      Orderreturn: Prisma.$OrderreturnPayload<ExtArgs>[]
      Purchase: Prisma.$PurchasePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userName: string
      password: string
      name: string
      role: string
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
    Carts<T extends User$CartsArgs<ExtArgs> = {}>(args?: Subset<T, User$CartsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Orders<T extends User$OrdersArgs<ExtArgs> = {}>(args?: Subset<T, User$OrdersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Orderreturn<T extends User$OrderreturnArgs<ExtArgs> = {}>(args?: Subset<T, User$OrderreturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderreturnPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Purchase<T extends User$PurchaseArgs<ExtArgs> = {}>(args?: Subset<T, User$PurchaseArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'Int'>
    readonly userName: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
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
  }

  /**
   * User.Carts
   */
  export type User$CartsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carts
     */
    select?: CartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carts
     */
    omit?: CartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartsInclude<ExtArgs> | null
    where?: CartsWhereInput
    orderBy?: CartsOrderByWithRelationInput | CartsOrderByWithRelationInput[]
    cursor?: CartsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CartsScalarFieldEnum | CartsScalarFieldEnum[]
  }

  /**
   * User.Orders
   */
  export type User$OrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    where?: OrdersWhereInput
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    cursor?: OrdersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * User.Orderreturn
   */
  export type User$OrderreturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orderreturn
     */
    select?: OrderreturnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orderreturn
     */
    omit?: OrderreturnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderreturnInclude<ExtArgs> | null
    where?: OrderreturnWhereInput
    orderBy?: OrderreturnOrderByWithRelationInput | OrderreturnOrderByWithRelationInput[]
    cursor?: OrderreturnWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderreturnScalarFieldEnum | OrderreturnScalarFieldEnum[]
  }

  /**
   * User.Purchase
   */
  export type User$PurchaseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    where?: PurchaseWhereInput
    orderBy?: PurchaseOrderByWithRelationInput | PurchaseOrderByWithRelationInput[]
    cursor?: PurchaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PurchaseScalarFieldEnum | PurchaseScalarFieldEnum[]
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
   * Model Orderreturn
   */

  export type AggregateOrderreturn = {
    _count: OrderreturnCountAggregateOutputType | null
    _avg: OrderreturnAvgAggregateOutputType | null
    _sum: OrderreturnSumAggregateOutputType | null
    _min: OrderreturnMinAggregateOutputType | null
    _max: OrderreturnMaxAggregateOutputType | null
  }

  export type OrderreturnAvgAggregateOutputType = {
    id: number | null
    orderId: number | null
    userId: number | null
  }

  export type OrderreturnSumAggregateOutputType = {
    id: number | null
    orderId: number | null
    userId: number | null
  }

  export type OrderreturnMinAggregateOutputType = {
    id: number | null
    code: string | null
    date: Date | null
    note: string | null
    orderId: number | null
    userId: number | null
  }

  export type OrderreturnMaxAggregateOutputType = {
    id: number | null
    code: string | null
    date: Date | null
    note: string | null
    orderId: number | null
    userId: number | null
  }

  export type OrderreturnCountAggregateOutputType = {
    id: number
    code: number
    date: number
    note: number
    orderId: number
    userId: number
    _all: number
  }


  export type OrderreturnAvgAggregateInputType = {
    id?: true
    orderId?: true
    userId?: true
  }

  export type OrderreturnSumAggregateInputType = {
    id?: true
    orderId?: true
    userId?: true
  }

  export type OrderreturnMinAggregateInputType = {
    id?: true
    code?: true
    date?: true
    note?: true
    orderId?: true
    userId?: true
  }

  export type OrderreturnMaxAggregateInputType = {
    id?: true
    code?: true
    date?: true
    note?: true
    orderId?: true
    userId?: true
  }

  export type OrderreturnCountAggregateInputType = {
    id?: true
    code?: true
    date?: true
    note?: true
    orderId?: true
    userId?: true
    _all?: true
  }

  export type OrderreturnAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orderreturn to aggregate.
     */
    where?: OrderreturnWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orderreturns to fetch.
     */
    orderBy?: OrderreturnOrderByWithRelationInput | OrderreturnOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderreturnWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orderreturns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orderreturns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orderreturns
    **/
    _count?: true | OrderreturnCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderreturnAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderreturnSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderreturnMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderreturnMaxAggregateInputType
  }

  export type GetOrderreturnAggregateType<T extends OrderreturnAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderreturn]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderreturn[P]>
      : GetScalarType<T[P], AggregateOrderreturn[P]>
  }




  export type OrderreturnGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderreturnWhereInput
    orderBy?: OrderreturnOrderByWithAggregationInput | OrderreturnOrderByWithAggregationInput[]
    by: OrderreturnScalarFieldEnum[] | OrderreturnScalarFieldEnum
    having?: OrderreturnScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderreturnCountAggregateInputType | true
    _avg?: OrderreturnAvgAggregateInputType
    _sum?: OrderreturnSumAggregateInputType
    _min?: OrderreturnMinAggregateInputType
    _max?: OrderreturnMaxAggregateInputType
  }

  export type OrderreturnGroupByOutputType = {
    id: number
    code: string
    date: Date
    note: string | null
    orderId: number
    userId: number
    _count: OrderreturnCountAggregateOutputType | null
    _avg: OrderreturnAvgAggregateOutputType | null
    _sum: OrderreturnSumAggregateOutputType | null
    _min: OrderreturnMinAggregateOutputType | null
    _max: OrderreturnMaxAggregateOutputType | null
  }

  type GetOrderreturnGroupByPayload<T extends OrderreturnGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderreturnGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderreturnGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderreturnGroupByOutputType[P]>
            : GetScalarType<T[P], OrderreturnGroupByOutputType[P]>
        }
      >
    >


  export type OrderreturnSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    date?: boolean
    note?: boolean
    orderId?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    order?: boolean | OrdersDefaultArgs<ExtArgs>
    Orderreturndetail?: boolean | Orderreturn$OrderreturndetailArgs<ExtArgs>
    _count?: boolean | OrderreturnCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderreturn"]>



  export type OrderreturnSelectScalar = {
    id?: boolean
    code?: boolean
    date?: boolean
    note?: boolean
    orderId?: boolean
    userId?: boolean
  }

  export type OrderreturnOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "date" | "note" | "orderId" | "userId", ExtArgs["result"]["orderreturn"]>
  export type OrderreturnInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    order?: boolean | OrdersDefaultArgs<ExtArgs>
    Orderreturndetail?: boolean | Orderreturn$OrderreturndetailArgs<ExtArgs>
    _count?: boolean | OrderreturnCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $OrderreturnPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Orderreturn"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      order: Prisma.$OrdersPayload<ExtArgs>
      Orderreturndetail: Prisma.$OrderreturndetailPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      code: string
      date: Date
      note: string | null
      orderId: number
      userId: number
    }, ExtArgs["result"]["orderreturn"]>
    composites: {}
  }

  type OrderreturnGetPayload<S extends boolean | null | undefined | OrderreturnDefaultArgs> = $Result.GetResult<Prisma.$OrderreturnPayload, S>

  type OrderreturnCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderreturnFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderreturnCountAggregateInputType | true
    }

  export interface OrderreturnDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Orderreturn'], meta: { name: 'Orderreturn' } }
    /**
     * Find zero or one Orderreturn that matches the filter.
     * @param {OrderreturnFindUniqueArgs} args - Arguments to find a Orderreturn
     * @example
     * // Get one Orderreturn
     * const orderreturn = await prisma.orderreturn.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderreturnFindUniqueArgs>(args: SelectSubset<T, OrderreturnFindUniqueArgs<ExtArgs>>): Prisma__OrderreturnClient<$Result.GetResult<Prisma.$OrderreturnPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Orderreturn that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderreturnFindUniqueOrThrowArgs} args - Arguments to find a Orderreturn
     * @example
     * // Get one Orderreturn
     * const orderreturn = await prisma.orderreturn.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderreturnFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderreturnFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderreturnClient<$Result.GetResult<Prisma.$OrderreturnPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orderreturn that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderreturnFindFirstArgs} args - Arguments to find a Orderreturn
     * @example
     * // Get one Orderreturn
     * const orderreturn = await prisma.orderreturn.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderreturnFindFirstArgs>(args?: SelectSubset<T, OrderreturnFindFirstArgs<ExtArgs>>): Prisma__OrderreturnClient<$Result.GetResult<Prisma.$OrderreturnPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orderreturn that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderreturnFindFirstOrThrowArgs} args - Arguments to find a Orderreturn
     * @example
     * // Get one Orderreturn
     * const orderreturn = await prisma.orderreturn.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderreturnFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderreturnFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderreturnClient<$Result.GetResult<Prisma.$OrderreturnPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orderreturns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderreturnFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orderreturns
     * const orderreturns = await prisma.orderreturn.findMany()
     * 
     * // Get first 10 Orderreturns
     * const orderreturns = await prisma.orderreturn.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderreturnWithIdOnly = await prisma.orderreturn.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderreturnFindManyArgs>(args?: SelectSubset<T, OrderreturnFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderreturnPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Orderreturn.
     * @param {OrderreturnCreateArgs} args - Arguments to create a Orderreturn.
     * @example
     * // Create one Orderreturn
     * const Orderreturn = await prisma.orderreturn.create({
     *   data: {
     *     // ... data to create a Orderreturn
     *   }
     * })
     * 
     */
    create<T extends OrderreturnCreateArgs>(args: SelectSubset<T, OrderreturnCreateArgs<ExtArgs>>): Prisma__OrderreturnClient<$Result.GetResult<Prisma.$OrderreturnPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orderreturns.
     * @param {OrderreturnCreateManyArgs} args - Arguments to create many Orderreturns.
     * @example
     * // Create many Orderreturns
     * const orderreturn = await prisma.orderreturn.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderreturnCreateManyArgs>(args?: SelectSubset<T, OrderreturnCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Orderreturn.
     * @param {OrderreturnDeleteArgs} args - Arguments to delete one Orderreturn.
     * @example
     * // Delete one Orderreturn
     * const Orderreturn = await prisma.orderreturn.delete({
     *   where: {
     *     // ... filter to delete one Orderreturn
     *   }
     * })
     * 
     */
    delete<T extends OrderreturnDeleteArgs>(args: SelectSubset<T, OrderreturnDeleteArgs<ExtArgs>>): Prisma__OrderreturnClient<$Result.GetResult<Prisma.$OrderreturnPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Orderreturn.
     * @param {OrderreturnUpdateArgs} args - Arguments to update one Orderreturn.
     * @example
     * // Update one Orderreturn
     * const orderreturn = await prisma.orderreturn.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderreturnUpdateArgs>(args: SelectSubset<T, OrderreturnUpdateArgs<ExtArgs>>): Prisma__OrderreturnClient<$Result.GetResult<Prisma.$OrderreturnPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orderreturns.
     * @param {OrderreturnDeleteManyArgs} args - Arguments to filter Orderreturns to delete.
     * @example
     * // Delete a few Orderreturns
     * const { count } = await prisma.orderreturn.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderreturnDeleteManyArgs>(args?: SelectSubset<T, OrderreturnDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orderreturns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderreturnUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orderreturns
     * const orderreturn = await prisma.orderreturn.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderreturnUpdateManyArgs>(args: SelectSubset<T, OrderreturnUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Orderreturn.
     * @param {OrderreturnUpsertArgs} args - Arguments to update or create a Orderreturn.
     * @example
     * // Update or create a Orderreturn
     * const orderreturn = await prisma.orderreturn.upsert({
     *   create: {
     *     // ... data to create a Orderreturn
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Orderreturn we want to update
     *   }
     * })
     */
    upsert<T extends OrderreturnUpsertArgs>(args: SelectSubset<T, OrderreturnUpsertArgs<ExtArgs>>): Prisma__OrderreturnClient<$Result.GetResult<Prisma.$OrderreturnPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orderreturns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderreturnCountArgs} args - Arguments to filter Orderreturns to count.
     * @example
     * // Count the number of Orderreturns
     * const count = await prisma.orderreturn.count({
     *   where: {
     *     // ... the filter for the Orderreturns we want to count
     *   }
     * })
    **/
    count<T extends OrderreturnCountArgs>(
      args?: Subset<T, OrderreturnCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderreturnCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Orderreturn.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderreturnAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderreturnAggregateArgs>(args: Subset<T, OrderreturnAggregateArgs>): Prisma.PrismaPromise<GetOrderreturnAggregateType<T>>

    /**
     * Group by Orderreturn.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderreturnGroupByArgs} args - Group by arguments.
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
      T extends OrderreturnGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderreturnGroupByArgs['orderBy'] }
        : { orderBy?: OrderreturnGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrderreturnGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderreturnGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Orderreturn model
   */
  readonly fields: OrderreturnFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Orderreturn.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderreturnClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    order<T extends OrdersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrdersDefaultArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Orderreturndetail<T extends Orderreturn$OrderreturndetailArgs<ExtArgs> = {}>(args?: Subset<T, Orderreturn$OrderreturndetailArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderreturndetailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Orderreturn model
   */
  interface OrderreturnFieldRefs {
    readonly id: FieldRef<"Orderreturn", 'Int'>
    readonly code: FieldRef<"Orderreturn", 'String'>
    readonly date: FieldRef<"Orderreturn", 'DateTime'>
    readonly note: FieldRef<"Orderreturn", 'String'>
    readonly orderId: FieldRef<"Orderreturn", 'Int'>
    readonly userId: FieldRef<"Orderreturn", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Orderreturn findUnique
   */
  export type OrderreturnFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orderreturn
     */
    select?: OrderreturnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orderreturn
     */
    omit?: OrderreturnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderreturnInclude<ExtArgs> | null
    /**
     * Filter, which Orderreturn to fetch.
     */
    where: OrderreturnWhereUniqueInput
  }

  /**
   * Orderreturn findUniqueOrThrow
   */
  export type OrderreturnFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orderreturn
     */
    select?: OrderreturnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orderreturn
     */
    omit?: OrderreturnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderreturnInclude<ExtArgs> | null
    /**
     * Filter, which Orderreturn to fetch.
     */
    where: OrderreturnWhereUniqueInput
  }

  /**
   * Orderreturn findFirst
   */
  export type OrderreturnFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orderreturn
     */
    select?: OrderreturnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orderreturn
     */
    omit?: OrderreturnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderreturnInclude<ExtArgs> | null
    /**
     * Filter, which Orderreturn to fetch.
     */
    where?: OrderreturnWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orderreturns to fetch.
     */
    orderBy?: OrderreturnOrderByWithRelationInput | OrderreturnOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orderreturns.
     */
    cursor?: OrderreturnWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orderreturns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orderreturns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orderreturns.
     */
    distinct?: OrderreturnScalarFieldEnum | OrderreturnScalarFieldEnum[]
  }

  /**
   * Orderreturn findFirstOrThrow
   */
  export type OrderreturnFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orderreturn
     */
    select?: OrderreturnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orderreturn
     */
    omit?: OrderreturnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderreturnInclude<ExtArgs> | null
    /**
     * Filter, which Orderreturn to fetch.
     */
    where?: OrderreturnWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orderreturns to fetch.
     */
    orderBy?: OrderreturnOrderByWithRelationInput | OrderreturnOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orderreturns.
     */
    cursor?: OrderreturnWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orderreturns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orderreturns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orderreturns.
     */
    distinct?: OrderreturnScalarFieldEnum | OrderreturnScalarFieldEnum[]
  }

  /**
   * Orderreturn findMany
   */
  export type OrderreturnFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orderreturn
     */
    select?: OrderreturnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orderreturn
     */
    omit?: OrderreturnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderreturnInclude<ExtArgs> | null
    /**
     * Filter, which Orderreturns to fetch.
     */
    where?: OrderreturnWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orderreturns to fetch.
     */
    orderBy?: OrderreturnOrderByWithRelationInput | OrderreturnOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orderreturns.
     */
    cursor?: OrderreturnWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orderreturns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orderreturns.
     */
    skip?: number
    distinct?: OrderreturnScalarFieldEnum | OrderreturnScalarFieldEnum[]
  }

  /**
   * Orderreturn create
   */
  export type OrderreturnCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orderreturn
     */
    select?: OrderreturnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orderreturn
     */
    omit?: OrderreturnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderreturnInclude<ExtArgs> | null
    /**
     * The data needed to create a Orderreturn.
     */
    data: XOR<OrderreturnCreateInput, OrderreturnUncheckedCreateInput>
  }

  /**
   * Orderreturn createMany
   */
  export type OrderreturnCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orderreturns.
     */
    data: OrderreturnCreateManyInput | OrderreturnCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Orderreturn update
   */
  export type OrderreturnUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orderreturn
     */
    select?: OrderreturnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orderreturn
     */
    omit?: OrderreturnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderreturnInclude<ExtArgs> | null
    /**
     * The data needed to update a Orderreturn.
     */
    data: XOR<OrderreturnUpdateInput, OrderreturnUncheckedUpdateInput>
    /**
     * Choose, which Orderreturn to update.
     */
    where: OrderreturnWhereUniqueInput
  }

  /**
   * Orderreturn updateMany
   */
  export type OrderreturnUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orderreturns.
     */
    data: XOR<OrderreturnUpdateManyMutationInput, OrderreturnUncheckedUpdateManyInput>
    /**
     * Filter which Orderreturns to update
     */
    where?: OrderreturnWhereInput
  }

  /**
   * Orderreturn upsert
   */
  export type OrderreturnUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orderreturn
     */
    select?: OrderreturnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orderreturn
     */
    omit?: OrderreturnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderreturnInclude<ExtArgs> | null
    /**
     * The filter to search for the Orderreturn to update in case it exists.
     */
    where: OrderreturnWhereUniqueInput
    /**
     * In case the Orderreturn found by the `where` argument doesn't exist, create a new Orderreturn with this data.
     */
    create: XOR<OrderreturnCreateInput, OrderreturnUncheckedCreateInput>
    /**
     * In case the Orderreturn was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderreturnUpdateInput, OrderreturnUncheckedUpdateInput>
  }

  /**
   * Orderreturn delete
   */
  export type OrderreturnDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orderreturn
     */
    select?: OrderreturnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orderreturn
     */
    omit?: OrderreturnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderreturnInclude<ExtArgs> | null
    /**
     * Filter which Orderreturn to delete.
     */
    where: OrderreturnWhereUniqueInput
  }

  /**
   * Orderreturn deleteMany
   */
  export type OrderreturnDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orderreturns to delete
     */
    where?: OrderreturnWhereInput
  }

  /**
   * Orderreturn.Orderreturndetail
   */
  export type Orderreturn$OrderreturndetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orderreturndetail
     */
    select?: OrderreturndetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orderreturndetail
     */
    omit?: OrderreturndetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderreturndetailInclude<ExtArgs> | null
    where?: OrderreturndetailWhereInput
    orderBy?: OrderreturndetailOrderByWithRelationInput | OrderreturndetailOrderByWithRelationInput[]
    cursor?: OrderreturndetailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderreturndetailScalarFieldEnum | OrderreturndetailScalarFieldEnum[]
  }

  /**
   * Orderreturn without action
   */
  export type OrderreturnDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orderreturn
     */
    select?: OrderreturnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orderreturn
     */
    omit?: OrderreturnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderreturnInclude<ExtArgs> | null
  }


  /**
   * Model Orderreturndetail
   */

  export type AggregateOrderreturndetail = {
    _count: OrderreturndetailCountAggregateOutputType | null
    _avg: OrderreturndetailAvgAggregateOutputType | null
    _sum: OrderreturndetailSumAggregateOutputType | null
    _min: OrderreturndetailMinAggregateOutputType | null
    _max: OrderreturndetailMaxAggregateOutputType | null
  }

  export type OrderreturndetailAvgAggregateOutputType = {
    id: number | null
    productId: number | null
    price: Decimal | null
    qty: number | null
    total: Decimal | null
    returnId: number | null
  }

  export type OrderreturndetailSumAggregateOutputType = {
    id: number | null
    productId: number | null
    price: Decimal | null
    qty: number | null
    total: Decimal | null
    returnId: number | null
  }

  export type OrderreturndetailMinAggregateOutputType = {
    id: number | null
    productId: number | null
    productName: string | null
    price: Decimal | null
    qty: number | null
    total: Decimal | null
    returnId: number | null
  }

  export type OrderreturndetailMaxAggregateOutputType = {
    id: number | null
    productId: number | null
    productName: string | null
    price: Decimal | null
    qty: number | null
    total: Decimal | null
    returnId: number | null
  }

  export type OrderreturndetailCountAggregateOutputType = {
    id: number
    productId: number
    productName: number
    price: number
    qty: number
    total: number
    returnId: number
    _all: number
  }


  export type OrderreturndetailAvgAggregateInputType = {
    id?: true
    productId?: true
    price?: true
    qty?: true
    total?: true
    returnId?: true
  }

  export type OrderreturndetailSumAggregateInputType = {
    id?: true
    productId?: true
    price?: true
    qty?: true
    total?: true
    returnId?: true
  }

  export type OrderreturndetailMinAggregateInputType = {
    id?: true
    productId?: true
    productName?: true
    price?: true
    qty?: true
    total?: true
    returnId?: true
  }

  export type OrderreturndetailMaxAggregateInputType = {
    id?: true
    productId?: true
    productName?: true
    price?: true
    qty?: true
    total?: true
    returnId?: true
  }

  export type OrderreturndetailCountAggregateInputType = {
    id?: true
    productId?: true
    productName?: true
    price?: true
    qty?: true
    total?: true
    returnId?: true
    _all?: true
  }

  export type OrderreturndetailAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orderreturndetail to aggregate.
     */
    where?: OrderreturndetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orderreturndetails to fetch.
     */
    orderBy?: OrderreturndetailOrderByWithRelationInput | OrderreturndetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderreturndetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orderreturndetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orderreturndetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orderreturndetails
    **/
    _count?: true | OrderreturndetailCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderreturndetailAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderreturndetailSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderreturndetailMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderreturndetailMaxAggregateInputType
  }

  export type GetOrderreturndetailAggregateType<T extends OrderreturndetailAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderreturndetail]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderreturndetail[P]>
      : GetScalarType<T[P], AggregateOrderreturndetail[P]>
  }




  export type OrderreturndetailGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderreturndetailWhereInput
    orderBy?: OrderreturndetailOrderByWithAggregationInput | OrderreturndetailOrderByWithAggregationInput[]
    by: OrderreturndetailScalarFieldEnum[] | OrderreturndetailScalarFieldEnum
    having?: OrderreturndetailScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderreturndetailCountAggregateInputType | true
    _avg?: OrderreturndetailAvgAggregateInputType
    _sum?: OrderreturndetailSumAggregateInputType
    _min?: OrderreturndetailMinAggregateInputType
    _max?: OrderreturndetailMaxAggregateInputType
  }

  export type OrderreturndetailGroupByOutputType = {
    id: number
    productId: number
    productName: string
    price: Decimal
    qty: number
    total: Decimal
    returnId: number
    _count: OrderreturndetailCountAggregateOutputType | null
    _avg: OrderreturndetailAvgAggregateOutputType | null
    _sum: OrderreturndetailSumAggregateOutputType | null
    _min: OrderreturndetailMinAggregateOutputType | null
    _max: OrderreturndetailMaxAggregateOutputType | null
  }

  type GetOrderreturndetailGroupByPayload<T extends OrderreturndetailGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderreturndetailGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderreturndetailGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderreturndetailGroupByOutputType[P]>
            : GetScalarType<T[P], OrderreturndetailGroupByOutputType[P]>
        }
      >
    >


  export type OrderreturndetailSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    productName?: boolean
    price?: boolean
    qty?: boolean
    total?: boolean
    returnId?: boolean
    orderreturn?: boolean | OrderreturnDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderreturndetail"]>



  export type OrderreturndetailSelectScalar = {
    id?: boolean
    productId?: boolean
    productName?: boolean
    price?: boolean
    qty?: boolean
    total?: boolean
    returnId?: boolean
  }

  export type OrderreturndetailOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productId" | "productName" | "price" | "qty" | "total" | "returnId", ExtArgs["result"]["orderreturndetail"]>
  export type OrderreturndetailInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderreturn?: boolean | OrderreturnDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $OrderreturndetailPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Orderreturndetail"
    objects: {
      orderreturn: Prisma.$OrderreturnPayload<ExtArgs>
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      productId: number
      productName: string
      price: Prisma.Decimal
      qty: number
      total: Prisma.Decimal
      returnId: number
    }, ExtArgs["result"]["orderreturndetail"]>
    composites: {}
  }

  type OrderreturndetailGetPayload<S extends boolean | null | undefined | OrderreturndetailDefaultArgs> = $Result.GetResult<Prisma.$OrderreturndetailPayload, S>

  type OrderreturndetailCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderreturndetailFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderreturndetailCountAggregateInputType | true
    }

  export interface OrderreturndetailDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Orderreturndetail'], meta: { name: 'Orderreturndetail' } }
    /**
     * Find zero or one Orderreturndetail that matches the filter.
     * @param {OrderreturndetailFindUniqueArgs} args - Arguments to find a Orderreturndetail
     * @example
     * // Get one Orderreturndetail
     * const orderreturndetail = await prisma.orderreturndetail.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderreturndetailFindUniqueArgs>(args: SelectSubset<T, OrderreturndetailFindUniqueArgs<ExtArgs>>): Prisma__OrderreturndetailClient<$Result.GetResult<Prisma.$OrderreturndetailPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Orderreturndetail that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderreturndetailFindUniqueOrThrowArgs} args - Arguments to find a Orderreturndetail
     * @example
     * // Get one Orderreturndetail
     * const orderreturndetail = await prisma.orderreturndetail.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderreturndetailFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderreturndetailFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderreturndetailClient<$Result.GetResult<Prisma.$OrderreturndetailPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orderreturndetail that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderreturndetailFindFirstArgs} args - Arguments to find a Orderreturndetail
     * @example
     * // Get one Orderreturndetail
     * const orderreturndetail = await prisma.orderreturndetail.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderreturndetailFindFirstArgs>(args?: SelectSubset<T, OrderreturndetailFindFirstArgs<ExtArgs>>): Prisma__OrderreturndetailClient<$Result.GetResult<Prisma.$OrderreturndetailPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orderreturndetail that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderreturndetailFindFirstOrThrowArgs} args - Arguments to find a Orderreturndetail
     * @example
     * // Get one Orderreturndetail
     * const orderreturndetail = await prisma.orderreturndetail.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderreturndetailFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderreturndetailFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderreturndetailClient<$Result.GetResult<Prisma.$OrderreturndetailPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orderreturndetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderreturndetailFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orderreturndetails
     * const orderreturndetails = await prisma.orderreturndetail.findMany()
     * 
     * // Get first 10 Orderreturndetails
     * const orderreturndetails = await prisma.orderreturndetail.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderreturndetailWithIdOnly = await prisma.orderreturndetail.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderreturndetailFindManyArgs>(args?: SelectSubset<T, OrderreturndetailFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderreturndetailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Orderreturndetail.
     * @param {OrderreturndetailCreateArgs} args - Arguments to create a Orderreturndetail.
     * @example
     * // Create one Orderreturndetail
     * const Orderreturndetail = await prisma.orderreturndetail.create({
     *   data: {
     *     // ... data to create a Orderreturndetail
     *   }
     * })
     * 
     */
    create<T extends OrderreturndetailCreateArgs>(args: SelectSubset<T, OrderreturndetailCreateArgs<ExtArgs>>): Prisma__OrderreturndetailClient<$Result.GetResult<Prisma.$OrderreturndetailPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orderreturndetails.
     * @param {OrderreturndetailCreateManyArgs} args - Arguments to create many Orderreturndetails.
     * @example
     * // Create many Orderreturndetails
     * const orderreturndetail = await prisma.orderreturndetail.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderreturndetailCreateManyArgs>(args?: SelectSubset<T, OrderreturndetailCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Orderreturndetail.
     * @param {OrderreturndetailDeleteArgs} args - Arguments to delete one Orderreturndetail.
     * @example
     * // Delete one Orderreturndetail
     * const Orderreturndetail = await prisma.orderreturndetail.delete({
     *   where: {
     *     // ... filter to delete one Orderreturndetail
     *   }
     * })
     * 
     */
    delete<T extends OrderreturndetailDeleteArgs>(args: SelectSubset<T, OrderreturndetailDeleteArgs<ExtArgs>>): Prisma__OrderreturndetailClient<$Result.GetResult<Prisma.$OrderreturndetailPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Orderreturndetail.
     * @param {OrderreturndetailUpdateArgs} args - Arguments to update one Orderreturndetail.
     * @example
     * // Update one Orderreturndetail
     * const orderreturndetail = await prisma.orderreturndetail.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderreturndetailUpdateArgs>(args: SelectSubset<T, OrderreturndetailUpdateArgs<ExtArgs>>): Prisma__OrderreturndetailClient<$Result.GetResult<Prisma.$OrderreturndetailPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orderreturndetails.
     * @param {OrderreturndetailDeleteManyArgs} args - Arguments to filter Orderreturndetails to delete.
     * @example
     * // Delete a few Orderreturndetails
     * const { count } = await prisma.orderreturndetail.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderreturndetailDeleteManyArgs>(args?: SelectSubset<T, OrderreturndetailDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orderreturndetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderreturndetailUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orderreturndetails
     * const orderreturndetail = await prisma.orderreturndetail.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderreturndetailUpdateManyArgs>(args: SelectSubset<T, OrderreturndetailUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Orderreturndetail.
     * @param {OrderreturndetailUpsertArgs} args - Arguments to update or create a Orderreturndetail.
     * @example
     * // Update or create a Orderreturndetail
     * const orderreturndetail = await prisma.orderreturndetail.upsert({
     *   create: {
     *     // ... data to create a Orderreturndetail
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Orderreturndetail we want to update
     *   }
     * })
     */
    upsert<T extends OrderreturndetailUpsertArgs>(args: SelectSubset<T, OrderreturndetailUpsertArgs<ExtArgs>>): Prisma__OrderreturndetailClient<$Result.GetResult<Prisma.$OrderreturndetailPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orderreturndetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderreturndetailCountArgs} args - Arguments to filter Orderreturndetails to count.
     * @example
     * // Count the number of Orderreturndetails
     * const count = await prisma.orderreturndetail.count({
     *   where: {
     *     // ... the filter for the Orderreturndetails we want to count
     *   }
     * })
    **/
    count<T extends OrderreturndetailCountArgs>(
      args?: Subset<T, OrderreturndetailCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderreturndetailCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Orderreturndetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderreturndetailAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderreturndetailAggregateArgs>(args: Subset<T, OrderreturndetailAggregateArgs>): Prisma.PrismaPromise<GetOrderreturndetailAggregateType<T>>

    /**
     * Group by Orderreturndetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderreturndetailGroupByArgs} args - Group by arguments.
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
      T extends OrderreturndetailGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderreturndetailGroupByArgs['orderBy'] }
        : { orderBy?: OrderreturndetailGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrderreturndetailGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderreturndetailGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Orderreturndetail model
   */
  readonly fields: OrderreturndetailFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Orderreturndetail.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderreturndetailClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orderreturn<T extends OrderreturnDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderreturnDefaultArgs<ExtArgs>>): Prisma__OrderreturnClient<$Result.GetResult<Prisma.$OrderreturnPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Orderreturndetail model
   */
  interface OrderreturndetailFieldRefs {
    readonly id: FieldRef<"Orderreturndetail", 'Int'>
    readonly productId: FieldRef<"Orderreturndetail", 'Int'>
    readonly productName: FieldRef<"Orderreturndetail", 'String'>
    readonly price: FieldRef<"Orderreturndetail", 'Decimal'>
    readonly qty: FieldRef<"Orderreturndetail", 'Int'>
    readonly total: FieldRef<"Orderreturndetail", 'Decimal'>
    readonly returnId: FieldRef<"Orderreturndetail", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Orderreturndetail findUnique
   */
  export type OrderreturndetailFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orderreturndetail
     */
    select?: OrderreturndetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orderreturndetail
     */
    omit?: OrderreturndetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderreturndetailInclude<ExtArgs> | null
    /**
     * Filter, which Orderreturndetail to fetch.
     */
    where: OrderreturndetailWhereUniqueInput
  }

  /**
   * Orderreturndetail findUniqueOrThrow
   */
  export type OrderreturndetailFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orderreturndetail
     */
    select?: OrderreturndetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orderreturndetail
     */
    omit?: OrderreturndetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderreturndetailInclude<ExtArgs> | null
    /**
     * Filter, which Orderreturndetail to fetch.
     */
    where: OrderreturndetailWhereUniqueInput
  }

  /**
   * Orderreturndetail findFirst
   */
  export type OrderreturndetailFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orderreturndetail
     */
    select?: OrderreturndetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orderreturndetail
     */
    omit?: OrderreturndetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderreturndetailInclude<ExtArgs> | null
    /**
     * Filter, which Orderreturndetail to fetch.
     */
    where?: OrderreturndetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orderreturndetails to fetch.
     */
    orderBy?: OrderreturndetailOrderByWithRelationInput | OrderreturndetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orderreturndetails.
     */
    cursor?: OrderreturndetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orderreturndetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orderreturndetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orderreturndetails.
     */
    distinct?: OrderreturndetailScalarFieldEnum | OrderreturndetailScalarFieldEnum[]
  }

  /**
   * Orderreturndetail findFirstOrThrow
   */
  export type OrderreturndetailFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orderreturndetail
     */
    select?: OrderreturndetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orderreturndetail
     */
    omit?: OrderreturndetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderreturndetailInclude<ExtArgs> | null
    /**
     * Filter, which Orderreturndetail to fetch.
     */
    where?: OrderreturndetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orderreturndetails to fetch.
     */
    orderBy?: OrderreturndetailOrderByWithRelationInput | OrderreturndetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orderreturndetails.
     */
    cursor?: OrderreturndetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orderreturndetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orderreturndetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orderreturndetails.
     */
    distinct?: OrderreturndetailScalarFieldEnum | OrderreturndetailScalarFieldEnum[]
  }

  /**
   * Orderreturndetail findMany
   */
  export type OrderreturndetailFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orderreturndetail
     */
    select?: OrderreturndetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orderreturndetail
     */
    omit?: OrderreturndetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderreturndetailInclude<ExtArgs> | null
    /**
     * Filter, which Orderreturndetails to fetch.
     */
    where?: OrderreturndetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orderreturndetails to fetch.
     */
    orderBy?: OrderreturndetailOrderByWithRelationInput | OrderreturndetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orderreturndetails.
     */
    cursor?: OrderreturndetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orderreturndetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orderreturndetails.
     */
    skip?: number
    distinct?: OrderreturndetailScalarFieldEnum | OrderreturndetailScalarFieldEnum[]
  }

  /**
   * Orderreturndetail create
   */
  export type OrderreturndetailCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orderreturndetail
     */
    select?: OrderreturndetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orderreturndetail
     */
    omit?: OrderreturndetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderreturndetailInclude<ExtArgs> | null
    /**
     * The data needed to create a Orderreturndetail.
     */
    data: XOR<OrderreturndetailCreateInput, OrderreturndetailUncheckedCreateInput>
  }

  /**
   * Orderreturndetail createMany
   */
  export type OrderreturndetailCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orderreturndetails.
     */
    data: OrderreturndetailCreateManyInput | OrderreturndetailCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Orderreturndetail update
   */
  export type OrderreturndetailUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orderreturndetail
     */
    select?: OrderreturndetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orderreturndetail
     */
    omit?: OrderreturndetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderreturndetailInclude<ExtArgs> | null
    /**
     * The data needed to update a Orderreturndetail.
     */
    data: XOR<OrderreturndetailUpdateInput, OrderreturndetailUncheckedUpdateInput>
    /**
     * Choose, which Orderreturndetail to update.
     */
    where: OrderreturndetailWhereUniqueInput
  }

  /**
   * Orderreturndetail updateMany
   */
  export type OrderreturndetailUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orderreturndetails.
     */
    data: XOR<OrderreturndetailUpdateManyMutationInput, OrderreturndetailUncheckedUpdateManyInput>
    /**
     * Filter which Orderreturndetails to update
     */
    where?: OrderreturndetailWhereInput
  }

  /**
   * Orderreturndetail upsert
   */
  export type OrderreturndetailUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orderreturndetail
     */
    select?: OrderreturndetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orderreturndetail
     */
    omit?: OrderreturndetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderreturndetailInclude<ExtArgs> | null
    /**
     * The filter to search for the Orderreturndetail to update in case it exists.
     */
    where: OrderreturndetailWhereUniqueInput
    /**
     * In case the Orderreturndetail found by the `where` argument doesn't exist, create a new Orderreturndetail with this data.
     */
    create: XOR<OrderreturndetailCreateInput, OrderreturndetailUncheckedCreateInput>
    /**
     * In case the Orderreturndetail was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderreturndetailUpdateInput, OrderreturndetailUncheckedUpdateInput>
  }

  /**
   * Orderreturndetail delete
   */
  export type OrderreturndetailDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orderreturndetail
     */
    select?: OrderreturndetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orderreturndetail
     */
    omit?: OrderreturndetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderreturndetailInclude<ExtArgs> | null
    /**
     * Filter which Orderreturndetail to delete.
     */
    where: OrderreturndetailWhereUniqueInput
  }

  /**
   * Orderreturndetail deleteMany
   */
  export type OrderreturndetailDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orderreturndetails to delete
     */
    where?: OrderreturndetailWhereInput
  }

  /**
   * Orderreturndetail without action
   */
  export type OrderreturndetailDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orderreturndetail
     */
    select?: OrderreturndetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orderreturndetail
     */
    omit?: OrderreturndetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderreturndetailInclude<ExtArgs> | null
  }


  /**
   * Model Purchase
   */

  export type AggregatePurchase = {
    _count: PurchaseCountAggregateOutputType | null
    _avg: PurchaseAvgAggregateOutputType | null
    _sum: PurchaseSumAggregateOutputType | null
    _min: PurchaseMinAggregateOutputType | null
    _max: PurchaseMaxAggregateOutputType | null
  }

  export type PurchaseAvgAggregateOutputType = {
    id: number | null
    total: Decimal | null
    ppn: Decimal | null
    grandTotal: Decimal | null
    userId: number | null
  }

  export type PurchaseSumAggregateOutputType = {
    id: number | null
    total: Decimal | null
    ppn: Decimal | null
    grandTotal: Decimal | null
    userId: number | null
  }

  export type PurchaseMinAggregateOutputType = {
    id: number | null
    code: string | null
    date: Date | null
    note: string | null
    total: Decimal | null
    ppn: Decimal | null
    grandTotal: Decimal | null
    userId: number | null
  }

  export type PurchaseMaxAggregateOutputType = {
    id: number | null
    code: string | null
    date: Date | null
    note: string | null
    total: Decimal | null
    ppn: Decimal | null
    grandTotal: Decimal | null
    userId: number | null
  }

  export type PurchaseCountAggregateOutputType = {
    id: number
    code: number
    date: number
    note: number
    total: number
    ppn: number
    grandTotal: number
    userId: number
    _all: number
  }


  export type PurchaseAvgAggregateInputType = {
    id?: true
    total?: true
    ppn?: true
    grandTotal?: true
    userId?: true
  }

  export type PurchaseSumAggregateInputType = {
    id?: true
    total?: true
    ppn?: true
    grandTotal?: true
    userId?: true
  }

  export type PurchaseMinAggregateInputType = {
    id?: true
    code?: true
    date?: true
    note?: true
    total?: true
    ppn?: true
    grandTotal?: true
    userId?: true
  }

  export type PurchaseMaxAggregateInputType = {
    id?: true
    code?: true
    date?: true
    note?: true
    total?: true
    ppn?: true
    grandTotal?: true
    userId?: true
  }

  export type PurchaseCountAggregateInputType = {
    id?: true
    code?: true
    date?: true
    note?: true
    total?: true
    ppn?: true
    grandTotal?: true
    userId?: true
    _all?: true
  }

  export type PurchaseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Purchase to aggregate.
     */
    where?: PurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Purchases to fetch.
     */
    orderBy?: PurchaseOrderByWithRelationInput | PurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Purchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Purchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Purchases
    **/
    _count?: true | PurchaseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PurchaseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PurchaseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PurchaseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PurchaseMaxAggregateInputType
  }

  export type GetPurchaseAggregateType<T extends PurchaseAggregateArgs> = {
        [P in keyof T & keyof AggregatePurchase]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePurchase[P]>
      : GetScalarType<T[P], AggregatePurchase[P]>
  }




  export type PurchaseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchaseWhereInput
    orderBy?: PurchaseOrderByWithAggregationInput | PurchaseOrderByWithAggregationInput[]
    by: PurchaseScalarFieldEnum[] | PurchaseScalarFieldEnum
    having?: PurchaseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PurchaseCountAggregateInputType | true
    _avg?: PurchaseAvgAggregateInputType
    _sum?: PurchaseSumAggregateInputType
    _min?: PurchaseMinAggregateInputType
    _max?: PurchaseMaxAggregateInputType
  }

  export type PurchaseGroupByOutputType = {
    id: number
    code: string
    date: Date
    note: string
    total: Decimal
    ppn: Decimal
    grandTotal: Decimal
    userId: number
    _count: PurchaseCountAggregateOutputType | null
    _avg: PurchaseAvgAggregateOutputType | null
    _sum: PurchaseSumAggregateOutputType | null
    _min: PurchaseMinAggregateOutputType | null
    _max: PurchaseMaxAggregateOutputType | null
  }

  type GetPurchaseGroupByPayload<T extends PurchaseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PurchaseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PurchaseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PurchaseGroupByOutputType[P]>
            : GetScalarType<T[P], PurchaseGroupByOutputType[P]>
        }
      >
    >


  export type PurchaseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    date?: boolean
    note?: boolean
    total?: boolean
    ppn?: boolean
    grandTotal?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    Purchasedetail?: boolean | Purchase$PurchasedetailArgs<ExtArgs>
    _count?: boolean | PurchaseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchase"]>



  export type PurchaseSelectScalar = {
    id?: boolean
    code?: boolean
    date?: boolean
    note?: boolean
    total?: boolean
    ppn?: boolean
    grandTotal?: boolean
    userId?: boolean
  }

  export type PurchaseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "date" | "note" | "total" | "ppn" | "grandTotal" | "userId", ExtArgs["result"]["purchase"]>
  export type PurchaseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    Purchasedetail?: boolean | Purchase$PurchasedetailArgs<ExtArgs>
    _count?: boolean | PurchaseCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PurchasePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Purchase"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      Purchasedetail: Prisma.$PurchasedetailPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      code: string
      date: Date
      note: string
      total: Prisma.Decimal
      ppn: Prisma.Decimal
      grandTotal: Prisma.Decimal
      userId: number
    }, ExtArgs["result"]["purchase"]>
    composites: {}
  }

  type PurchaseGetPayload<S extends boolean | null | undefined | PurchaseDefaultArgs> = $Result.GetResult<Prisma.$PurchasePayload, S>

  type PurchaseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PurchaseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PurchaseCountAggregateInputType | true
    }

  export interface PurchaseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Purchase'], meta: { name: 'Purchase' } }
    /**
     * Find zero or one Purchase that matches the filter.
     * @param {PurchaseFindUniqueArgs} args - Arguments to find a Purchase
     * @example
     * // Get one Purchase
     * const purchase = await prisma.purchase.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PurchaseFindUniqueArgs>(args: SelectSubset<T, PurchaseFindUniqueArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Purchase that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PurchaseFindUniqueOrThrowArgs} args - Arguments to find a Purchase
     * @example
     * // Get one Purchase
     * const purchase = await prisma.purchase.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PurchaseFindUniqueOrThrowArgs>(args: SelectSubset<T, PurchaseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Purchase that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseFindFirstArgs} args - Arguments to find a Purchase
     * @example
     * // Get one Purchase
     * const purchase = await prisma.purchase.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PurchaseFindFirstArgs>(args?: SelectSubset<T, PurchaseFindFirstArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Purchase that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseFindFirstOrThrowArgs} args - Arguments to find a Purchase
     * @example
     * // Get one Purchase
     * const purchase = await prisma.purchase.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PurchaseFindFirstOrThrowArgs>(args?: SelectSubset<T, PurchaseFindFirstOrThrowArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Purchases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Purchases
     * const purchases = await prisma.purchase.findMany()
     * 
     * // Get first 10 Purchases
     * const purchases = await prisma.purchase.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const purchaseWithIdOnly = await prisma.purchase.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PurchaseFindManyArgs>(args?: SelectSubset<T, PurchaseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Purchase.
     * @param {PurchaseCreateArgs} args - Arguments to create a Purchase.
     * @example
     * // Create one Purchase
     * const Purchase = await prisma.purchase.create({
     *   data: {
     *     // ... data to create a Purchase
     *   }
     * })
     * 
     */
    create<T extends PurchaseCreateArgs>(args: SelectSubset<T, PurchaseCreateArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Purchases.
     * @param {PurchaseCreateManyArgs} args - Arguments to create many Purchases.
     * @example
     * // Create many Purchases
     * const purchase = await prisma.purchase.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PurchaseCreateManyArgs>(args?: SelectSubset<T, PurchaseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Purchase.
     * @param {PurchaseDeleteArgs} args - Arguments to delete one Purchase.
     * @example
     * // Delete one Purchase
     * const Purchase = await prisma.purchase.delete({
     *   where: {
     *     // ... filter to delete one Purchase
     *   }
     * })
     * 
     */
    delete<T extends PurchaseDeleteArgs>(args: SelectSubset<T, PurchaseDeleteArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Purchase.
     * @param {PurchaseUpdateArgs} args - Arguments to update one Purchase.
     * @example
     * // Update one Purchase
     * const purchase = await prisma.purchase.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PurchaseUpdateArgs>(args: SelectSubset<T, PurchaseUpdateArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Purchases.
     * @param {PurchaseDeleteManyArgs} args - Arguments to filter Purchases to delete.
     * @example
     * // Delete a few Purchases
     * const { count } = await prisma.purchase.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PurchaseDeleteManyArgs>(args?: SelectSubset<T, PurchaseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Purchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Purchases
     * const purchase = await prisma.purchase.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PurchaseUpdateManyArgs>(args: SelectSubset<T, PurchaseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Purchase.
     * @param {PurchaseUpsertArgs} args - Arguments to update or create a Purchase.
     * @example
     * // Update or create a Purchase
     * const purchase = await prisma.purchase.upsert({
     *   create: {
     *     // ... data to create a Purchase
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Purchase we want to update
     *   }
     * })
     */
    upsert<T extends PurchaseUpsertArgs>(args: SelectSubset<T, PurchaseUpsertArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Purchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseCountArgs} args - Arguments to filter Purchases to count.
     * @example
     * // Count the number of Purchases
     * const count = await prisma.purchase.count({
     *   where: {
     *     // ... the filter for the Purchases we want to count
     *   }
     * })
    **/
    count<T extends PurchaseCountArgs>(
      args?: Subset<T, PurchaseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PurchaseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Purchase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PurchaseAggregateArgs>(args: Subset<T, PurchaseAggregateArgs>): Prisma.PrismaPromise<GetPurchaseAggregateType<T>>

    /**
     * Group by Purchase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseGroupByArgs} args - Group by arguments.
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
      T extends PurchaseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PurchaseGroupByArgs['orderBy'] }
        : { orderBy?: PurchaseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PurchaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPurchaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Purchase model
   */
  readonly fields: PurchaseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Purchase.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PurchaseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Purchasedetail<T extends Purchase$PurchasedetailArgs<ExtArgs> = {}>(args?: Subset<T, Purchase$PurchasedetailArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchasedetailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Purchase model
   */
  interface PurchaseFieldRefs {
    readonly id: FieldRef<"Purchase", 'Int'>
    readonly code: FieldRef<"Purchase", 'String'>
    readonly date: FieldRef<"Purchase", 'DateTime'>
    readonly note: FieldRef<"Purchase", 'String'>
    readonly total: FieldRef<"Purchase", 'Decimal'>
    readonly ppn: FieldRef<"Purchase", 'Decimal'>
    readonly grandTotal: FieldRef<"Purchase", 'Decimal'>
    readonly userId: FieldRef<"Purchase", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Purchase findUnique
   */
  export type PurchaseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter, which Purchase to fetch.
     */
    where: PurchaseWhereUniqueInput
  }

  /**
   * Purchase findUniqueOrThrow
   */
  export type PurchaseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter, which Purchase to fetch.
     */
    where: PurchaseWhereUniqueInput
  }

  /**
   * Purchase findFirst
   */
  export type PurchaseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter, which Purchase to fetch.
     */
    where?: PurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Purchases to fetch.
     */
    orderBy?: PurchaseOrderByWithRelationInput | PurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Purchases.
     */
    cursor?: PurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Purchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Purchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Purchases.
     */
    distinct?: PurchaseScalarFieldEnum | PurchaseScalarFieldEnum[]
  }

  /**
   * Purchase findFirstOrThrow
   */
  export type PurchaseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter, which Purchase to fetch.
     */
    where?: PurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Purchases to fetch.
     */
    orderBy?: PurchaseOrderByWithRelationInput | PurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Purchases.
     */
    cursor?: PurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Purchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Purchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Purchases.
     */
    distinct?: PurchaseScalarFieldEnum | PurchaseScalarFieldEnum[]
  }

  /**
   * Purchase findMany
   */
  export type PurchaseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter, which Purchases to fetch.
     */
    where?: PurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Purchases to fetch.
     */
    orderBy?: PurchaseOrderByWithRelationInput | PurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Purchases.
     */
    cursor?: PurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Purchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Purchases.
     */
    skip?: number
    distinct?: PurchaseScalarFieldEnum | PurchaseScalarFieldEnum[]
  }

  /**
   * Purchase create
   */
  export type PurchaseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * The data needed to create a Purchase.
     */
    data: XOR<PurchaseCreateInput, PurchaseUncheckedCreateInput>
  }

  /**
   * Purchase createMany
   */
  export type PurchaseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Purchases.
     */
    data: PurchaseCreateManyInput | PurchaseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Purchase update
   */
  export type PurchaseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * The data needed to update a Purchase.
     */
    data: XOR<PurchaseUpdateInput, PurchaseUncheckedUpdateInput>
    /**
     * Choose, which Purchase to update.
     */
    where: PurchaseWhereUniqueInput
  }

  /**
   * Purchase updateMany
   */
  export type PurchaseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Purchases.
     */
    data: XOR<PurchaseUpdateManyMutationInput, PurchaseUncheckedUpdateManyInput>
    /**
     * Filter which Purchases to update
     */
    where?: PurchaseWhereInput
  }

  /**
   * Purchase upsert
   */
  export type PurchaseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * The filter to search for the Purchase to update in case it exists.
     */
    where: PurchaseWhereUniqueInput
    /**
     * In case the Purchase found by the `where` argument doesn't exist, create a new Purchase with this data.
     */
    create: XOR<PurchaseCreateInput, PurchaseUncheckedCreateInput>
    /**
     * In case the Purchase was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PurchaseUpdateInput, PurchaseUncheckedUpdateInput>
  }

  /**
   * Purchase delete
   */
  export type PurchaseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter which Purchase to delete.
     */
    where: PurchaseWhereUniqueInput
  }

  /**
   * Purchase deleteMany
   */
  export type PurchaseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Purchases to delete
     */
    where?: PurchaseWhereInput
  }

  /**
   * Purchase.Purchasedetail
   */
  export type Purchase$PurchasedetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchasedetail
     */
    select?: PurchasedetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchasedetail
     */
    omit?: PurchasedetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchasedetailInclude<ExtArgs> | null
    where?: PurchasedetailWhereInput
    orderBy?: PurchasedetailOrderByWithRelationInput | PurchasedetailOrderByWithRelationInput[]
    cursor?: PurchasedetailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PurchasedetailScalarFieldEnum | PurchasedetailScalarFieldEnum[]
  }

  /**
   * Purchase without action
   */
  export type PurchaseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
  }


  /**
   * Model Purchasedetail
   */

  export type AggregatePurchasedetail = {
    _count: PurchasedetailCountAggregateOutputType | null
    _avg: PurchasedetailAvgAggregateOutputType | null
    _sum: PurchasedetailSumAggregateOutputType | null
    _min: PurchasedetailMinAggregateOutputType | null
    _max: PurchasedetailMaxAggregateOutputType | null
  }

  export type PurchasedetailAvgAggregateOutputType = {
    id: number | null
    productId: number | null
    price: Decimal | null
    qty: number | null
    total: Decimal | null
    purchaseId: number | null
  }

  export type PurchasedetailSumAggregateOutputType = {
    id: number | null
    productId: number | null
    price: Decimal | null
    qty: number | null
    total: Decimal | null
    purchaseId: number | null
  }

  export type PurchasedetailMinAggregateOutputType = {
    id: number | null
    productId: number | null
    productName: string | null
    price: Decimal | null
    qty: number | null
    total: Decimal | null
    purchaseId: number | null
  }

  export type PurchasedetailMaxAggregateOutputType = {
    id: number | null
    productId: number | null
    productName: string | null
    price: Decimal | null
    qty: number | null
    total: Decimal | null
    purchaseId: number | null
  }

  export type PurchasedetailCountAggregateOutputType = {
    id: number
    productId: number
    productName: number
    price: number
    qty: number
    total: number
    purchaseId: number
    _all: number
  }


  export type PurchasedetailAvgAggregateInputType = {
    id?: true
    productId?: true
    price?: true
    qty?: true
    total?: true
    purchaseId?: true
  }

  export type PurchasedetailSumAggregateInputType = {
    id?: true
    productId?: true
    price?: true
    qty?: true
    total?: true
    purchaseId?: true
  }

  export type PurchasedetailMinAggregateInputType = {
    id?: true
    productId?: true
    productName?: true
    price?: true
    qty?: true
    total?: true
    purchaseId?: true
  }

  export type PurchasedetailMaxAggregateInputType = {
    id?: true
    productId?: true
    productName?: true
    price?: true
    qty?: true
    total?: true
    purchaseId?: true
  }

  export type PurchasedetailCountAggregateInputType = {
    id?: true
    productId?: true
    productName?: true
    price?: true
    qty?: true
    total?: true
    purchaseId?: true
    _all?: true
  }

  export type PurchasedetailAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Purchasedetail to aggregate.
     */
    where?: PurchasedetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Purchasedetails to fetch.
     */
    orderBy?: PurchasedetailOrderByWithRelationInput | PurchasedetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PurchasedetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Purchasedetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Purchasedetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Purchasedetails
    **/
    _count?: true | PurchasedetailCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PurchasedetailAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PurchasedetailSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PurchasedetailMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PurchasedetailMaxAggregateInputType
  }

  export type GetPurchasedetailAggregateType<T extends PurchasedetailAggregateArgs> = {
        [P in keyof T & keyof AggregatePurchasedetail]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePurchasedetail[P]>
      : GetScalarType<T[P], AggregatePurchasedetail[P]>
  }




  export type PurchasedetailGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchasedetailWhereInput
    orderBy?: PurchasedetailOrderByWithAggregationInput | PurchasedetailOrderByWithAggregationInput[]
    by: PurchasedetailScalarFieldEnum[] | PurchasedetailScalarFieldEnum
    having?: PurchasedetailScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PurchasedetailCountAggregateInputType | true
    _avg?: PurchasedetailAvgAggregateInputType
    _sum?: PurchasedetailSumAggregateInputType
    _min?: PurchasedetailMinAggregateInputType
    _max?: PurchasedetailMaxAggregateInputType
  }

  export type PurchasedetailGroupByOutputType = {
    id: number
    productId: number
    productName: string
    price: Decimal
    qty: number
    total: Decimal
    purchaseId: number
    _count: PurchasedetailCountAggregateOutputType | null
    _avg: PurchasedetailAvgAggregateOutputType | null
    _sum: PurchasedetailSumAggregateOutputType | null
    _min: PurchasedetailMinAggregateOutputType | null
    _max: PurchasedetailMaxAggregateOutputType | null
  }

  type GetPurchasedetailGroupByPayload<T extends PurchasedetailGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PurchasedetailGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PurchasedetailGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PurchasedetailGroupByOutputType[P]>
            : GetScalarType<T[P], PurchasedetailGroupByOutputType[P]>
        }
      >
    >


  export type PurchasedetailSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    productName?: boolean
    price?: boolean
    qty?: boolean
    total?: boolean
    purchaseId?: boolean
    purchase?: boolean | PurchaseDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchasedetail"]>



  export type PurchasedetailSelectScalar = {
    id?: boolean
    productId?: boolean
    productName?: boolean
    price?: boolean
    qty?: boolean
    total?: boolean
    purchaseId?: boolean
  }

  export type PurchasedetailOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productId" | "productName" | "price" | "qty" | "total" | "purchaseId", ExtArgs["result"]["purchasedetail"]>
  export type PurchasedetailInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    purchase?: boolean | PurchaseDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $PurchasedetailPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Purchasedetail"
    objects: {
      purchase: Prisma.$PurchasePayload<ExtArgs>
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      productId: number
      productName: string
      price: Prisma.Decimal
      qty: number
      total: Prisma.Decimal
      purchaseId: number
    }, ExtArgs["result"]["purchasedetail"]>
    composites: {}
  }

  type PurchasedetailGetPayload<S extends boolean | null | undefined | PurchasedetailDefaultArgs> = $Result.GetResult<Prisma.$PurchasedetailPayload, S>

  type PurchasedetailCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PurchasedetailFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PurchasedetailCountAggregateInputType | true
    }

  export interface PurchasedetailDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Purchasedetail'], meta: { name: 'Purchasedetail' } }
    /**
     * Find zero or one Purchasedetail that matches the filter.
     * @param {PurchasedetailFindUniqueArgs} args - Arguments to find a Purchasedetail
     * @example
     * // Get one Purchasedetail
     * const purchasedetail = await prisma.purchasedetail.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PurchasedetailFindUniqueArgs>(args: SelectSubset<T, PurchasedetailFindUniqueArgs<ExtArgs>>): Prisma__PurchasedetailClient<$Result.GetResult<Prisma.$PurchasedetailPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Purchasedetail that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PurchasedetailFindUniqueOrThrowArgs} args - Arguments to find a Purchasedetail
     * @example
     * // Get one Purchasedetail
     * const purchasedetail = await prisma.purchasedetail.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PurchasedetailFindUniqueOrThrowArgs>(args: SelectSubset<T, PurchasedetailFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PurchasedetailClient<$Result.GetResult<Prisma.$PurchasedetailPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Purchasedetail that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchasedetailFindFirstArgs} args - Arguments to find a Purchasedetail
     * @example
     * // Get one Purchasedetail
     * const purchasedetail = await prisma.purchasedetail.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PurchasedetailFindFirstArgs>(args?: SelectSubset<T, PurchasedetailFindFirstArgs<ExtArgs>>): Prisma__PurchasedetailClient<$Result.GetResult<Prisma.$PurchasedetailPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Purchasedetail that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchasedetailFindFirstOrThrowArgs} args - Arguments to find a Purchasedetail
     * @example
     * // Get one Purchasedetail
     * const purchasedetail = await prisma.purchasedetail.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PurchasedetailFindFirstOrThrowArgs>(args?: SelectSubset<T, PurchasedetailFindFirstOrThrowArgs<ExtArgs>>): Prisma__PurchasedetailClient<$Result.GetResult<Prisma.$PurchasedetailPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Purchasedetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchasedetailFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Purchasedetails
     * const purchasedetails = await prisma.purchasedetail.findMany()
     * 
     * // Get first 10 Purchasedetails
     * const purchasedetails = await prisma.purchasedetail.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const purchasedetailWithIdOnly = await prisma.purchasedetail.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PurchasedetailFindManyArgs>(args?: SelectSubset<T, PurchasedetailFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchasedetailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Purchasedetail.
     * @param {PurchasedetailCreateArgs} args - Arguments to create a Purchasedetail.
     * @example
     * // Create one Purchasedetail
     * const Purchasedetail = await prisma.purchasedetail.create({
     *   data: {
     *     // ... data to create a Purchasedetail
     *   }
     * })
     * 
     */
    create<T extends PurchasedetailCreateArgs>(args: SelectSubset<T, PurchasedetailCreateArgs<ExtArgs>>): Prisma__PurchasedetailClient<$Result.GetResult<Prisma.$PurchasedetailPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Purchasedetails.
     * @param {PurchasedetailCreateManyArgs} args - Arguments to create many Purchasedetails.
     * @example
     * // Create many Purchasedetails
     * const purchasedetail = await prisma.purchasedetail.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PurchasedetailCreateManyArgs>(args?: SelectSubset<T, PurchasedetailCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Purchasedetail.
     * @param {PurchasedetailDeleteArgs} args - Arguments to delete one Purchasedetail.
     * @example
     * // Delete one Purchasedetail
     * const Purchasedetail = await prisma.purchasedetail.delete({
     *   where: {
     *     // ... filter to delete one Purchasedetail
     *   }
     * })
     * 
     */
    delete<T extends PurchasedetailDeleteArgs>(args: SelectSubset<T, PurchasedetailDeleteArgs<ExtArgs>>): Prisma__PurchasedetailClient<$Result.GetResult<Prisma.$PurchasedetailPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Purchasedetail.
     * @param {PurchasedetailUpdateArgs} args - Arguments to update one Purchasedetail.
     * @example
     * // Update one Purchasedetail
     * const purchasedetail = await prisma.purchasedetail.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PurchasedetailUpdateArgs>(args: SelectSubset<T, PurchasedetailUpdateArgs<ExtArgs>>): Prisma__PurchasedetailClient<$Result.GetResult<Prisma.$PurchasedetailPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Purchasedetails.
     * @param {PurchasedetailDeleteManyArgs} args - Arguments to filter Purchasedetails to delete.
     * @example
     * // Delete a few Purchasedetails
     * const { count } = await prisma.purchasedetail.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PurchasedetailDeleteManyArgs>(args?: SelectSubset<T, PurchasedetailDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Purchasedetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchasedetailUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Purchasedetails
     * const purchasedetail = await prisma.purchasedetail.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PurchasedetailUpdateManyArgs>(args: SelectSubset<T, PurchasedetailUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Purchasedetail.
     * @param {PurchasedetailUpsertArgs} args - Arguments to update or create a Purchasedetail.
     * @example
     * // Update or create a Purchasedetail
     * const purchasedetail = await prisma.purchasedetail.upsert({
     *   create: {
     *     // ... data to create a Purchasedetail
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Purchasedetail we want to update
     *   }
     * })
     */
    upsert<T extends PurchasedetailUpsertArgs>(args: SelectSubset<T, PurchasedetailUpsertArgs<ExtArgs>>): Prisma__PurchasedetailClient<$Result.GetResult<Prisma.$PurchasedetailPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Purchasedetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchasedetailCountArgs} args - Arguments to filter Purchasedetails to count.
     * @example
     * // Count the number of Purchasedetails
     * const count = await prisma.purchasedetail.count({
     *   where: {
     *     // ... the filter for the Purchasedetails we want to count
     *   }
     * })
    **/
    count<T extends PurchasedetailCountArgs>(
      args?: Subset<T, PurchasedetailCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PurchasedetailCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Purchasedetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchasedetailAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PurchasedetailAggregateArgs>(args: Subset<T, PurchasedetailAggregateArgs>): Prisma.PrismaPromise<GetPurchasedetailAggregateType<T>>

    /**
     * Group by Purchasedetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchasedetailGroupByArgs} args - Group by arguments.
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
      T extends PurchasedetailGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PurchasedetailGroupByArgs['orderBy'] }
        : { orderBy?: PurchasedetailGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PurchasedetailGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPurchasedetailGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Purchasedetail model
   */
  readonly fields: PurchasedetailFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Purchasedetail.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PurchasedetailClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    purchase<T extends PurchaseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PurchaseDefaultArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Purchasedetail model
   */
  interface PurchasedetailFieldRefs {
    readonly id: FieldRef<"Purchasedetail", 'Int'>
    readonly productId: FieldRef<"Purchasedetail", 'Int'>
    readonly productName: FieldRef<"Purchasedetail", 'String'>
    readonly price: FieldRef<"Purchasedetail", 'Decimal'>
    readonly qty: FieldRef<"Purchasedetail", 'Int'>
    readonly total: FieldRef<"Purchasedetail", 'Decimal'>
    readonly purchaseId: FieldRef<"Purchasedetail", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Purchasedetail findUnique
   */
  export type PurchasedetailFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchasedetail
     */
    select?: PurchasedetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchasedetail
     */
    omit?: PurchasedetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchasedetailInclude<ExtArgs> | null
    /**
     * Filter, which Purchasedetail to fetch.
     */
    where: PurchasedetailWhereUniqueInput
  }

  /**
   * Purchasedetail findUniqueOrThrow
   */
  export type PurchasedetailFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchasedetail
     */
    select?: PurchasedetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchasedetail
     */
    omit?: PurchasedetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchasedetailInclude<ExtArgs> | null
    /**
     * Filter, which Purchasedetail to fetch.
     */
    where: PurchasedetailWhereUniqueInput
  }

  /**
   * Purchasedetail findFirst
   */
  export type PurchasedetailFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchasedetail
     */
    select?: PurchasedetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchasedetail
     */
    omit?: PurchasedetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchasedetailInclude<ExtArgs> | null
    /**
     * Filter, which Purchasedetail to fetch.
     */
    where?: PurchasedetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Purchasedetails to fetch.
     */
    orderBy?: PurchasedetailOrderByWithRelationInput | PurchasedetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Purchasedetails.
     */
    cursor?: PurchasedetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Purchasedetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Purchasedetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Purchasedetails.
     */
    distinct?: PurchasedetailScalarFieldEnum | PurchasedetailScalarFieldEnum[]
  }

  /**
   * Purchasedetail findFirstOrThrow
   */
  export type PurchasedetailFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchasedetail
     */
    select?: PurchasedetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchasedetail
     */
    omit?: PurchasedetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchasedetailInclude<ExtArgs> | null
    /**
     * Filter, which Purchasedetail to fetch.
     */
    where?: PurchasedetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Purchasedetails to fetch.
     */
    orderBy?: PurchasedetailOrderByWithRelationInput | PurchasedetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Purchasedetails.
     */
    cursor?: PurchasedetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Purchasedetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Purchasedetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Purchasedetails.
     */
    distinct?: PurchasedetailScalarFieldEnum | PurchasedetailScalarFieldEnum[]
  }

  /**
   * Purchasedetail findMany
   */
  export type PurchasedetailFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchasedetail
     */
    select?: PurchasedetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchasedetail
     */
    omit?: PurchasedetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchasedetailInclude<ExtArgs> | null
    /**
     * Filter, which Purchasedetails to fetch.
     */
    where?: PurchasedetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Purchasedetails to fetch.
     */
    orderBy?: PurchasedetailOrderByWithRelationInput | PurchasedetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Purchasedetails.
     */
    cursor?: PurchasedetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Purchasedetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Purchasedetails.
     */
    skip?: number
    distinct?: PurchasedetailScalarFieldEnum | PurchasedetailScalarFieldEnum[]
  }

  /**
   * Purchasedetail create
   */
  export type PurchasedetailCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchasedetail
     */
    select?: PurchasedetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchasedetail
     */
    omit?: PurchasedetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchasedetailInclude<ExtArgs> | null
    /**
     * The data needed to create a Purchasedetail.
     */
    data: XOR<PurchasedetailCreateInput, PurchasedetailUncheckedCreateInput>
  }

  /**
   * Purchasedetail createMany
   */
  export type PurchasedetailCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Purchasedetails.
     */
    data: PurchasedetailCreateManyInput | PurchasedetailCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Purchasedetail update
   */
  export type PurchasedetailUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchasedetail
     */
    select?: PurchasedetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchasedetail
     */
    omit?: PurchasedetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchasedetailInclude<ExtArgs> | null
    /**
     * The data needed to update a Purchasedetail.
     */
    data: XOR<PurchasedetailUpdateInput, PurchasedetailUncheckedUpdateInput>
    /**
     * Choose, which Purchasedetail to update.
     */
    where: PurchasedetailWhereUniqueInput
  }

  /**
   * Purchasedetail updateMany
   */
  export type PurchasedetailUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Purchasedetails.
     */
    data: XOR<PurchasedetailUpdateManyMutationInput, PurchasedetailUncheckedUpdateManyInput>
    /**
     * Filter which Purchasedetails to update
     */
    where?: PurchasedetailWhereInput
  }

  /**
   * Purchasedetail upsert
   */
  export type PurchasedetailUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchasedetail
     */
    select?: PurchasedetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchasedetail
     */
    omit?: PurchasedetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchasedetailInclude<ExtArgs> | null
    /**
     * The filter to search for the Purchasedetail to update in case it exists.
     */
    where: PurchasedetailWhereUniqueInput
    /**
     * In case the Purchasedetail found by the `where` argument doesn't exist, create a new Purchasedetail with this data.
     */
    create: XOR<PurchasedetailCreateInput, PurchasedetailUncheckedCreateInput>
    /**
     * In case the Purchasedetail was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PurchasedetailUpdateInput, PurchasedetailUncheckedUpdateInput>
  }

  /**
   * Purchasedetail delete
   */
  export type PurchasedetailDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchasedetail
     */
    select?: PurchasedetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchasedetail
     */
    omit?: PurchasedetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchasedetailInclude<ExtArgs> | null
    /**
     * Filter which Purchasedetail to delete.
     */
    where: PurchasedetailWhereUniqueInput
  }

  /**
   * Purchasedetail deleteMany
   */
  export type PurchasedetailDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Purchasedetails to delete
     */
    where?: PurchasedetailWhereInput
  }

  /**
   * Purchasedetail without action
   */
  export type PurchasedetailDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchasedetail
     */
    select?: PurchasedetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchasedetail
     */
    omit?: PurchasedetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchasedetailInclude<ExtArgs> | null
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


  export const CategoryScalarFieldEnum: {
    id: 'id',
    kategoryName: 'kategoryName'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    code: 'code',
    barcode: 'barcode',
    productName: 'productName',
    image: 'image',
    url: 'url',
    qty: 'qty',
    price: 'price',
    kategoryId: 'kategoryId',
    supplierId: 'supplierId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const SupplierScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    phone: 'phone',
    email: 'email',
    address: 'address'
  };

  export type SupplierScalarFieldEnum = (typeof SupplierScalarFieldEnum)[keyof typeof SupplierScalarFieldEnum]


  export const CartsScalarFieldEnum: {
    id: 'id',
    price: 'price',
    productName: 'productName',
    qty: 'qty',
    totalPrice: 'totalPrice',
    note: 'note',
    productId: 'productId',
    userId: 'userId'
  };

  export type CartsScalarFieldEnum = (typeof CartsScalarFieldEnum)[keyof typeof CartsScalarFieldEnum]


  export const OrdersScalarFieldEnum: {
    id: 'id',
    date: 'date',
    code: 'code',
    total: 'total',
    ppn: 'ppn',
    grandTotal: 'grandTotal',
    userId: 'userId'
  };

  export type OrdersScalarFieldEnum = (typeof OrdersScalarFieldEnum)[keyof typeof OrdersScalarFieldEnum]


  export const OrderdetailScalarFieldEnum: {
    id: 'id',
    price: 'price',
    productName: 'productName',
    qty: 'qty',
    totalPrice: 'totalPrice',
    note: 'note',
    productId: 'productId',
    orderId: 'orderId'
  };

  export type OrderdetailScalarFieldEnum = (typeof OrderdetailScalarFieldEnum)[keyof typeof OrderdetailScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    userName: 'userName',
    password: 'password',
    name: 'name',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const OrderreturnScalarFieldEnum: {
    id: 'id',
    code: 'code',
    date: 'date',
    note: 'note',
    orderId: 'orderId',
    userId: 'userId'
  };

  export type OrderreturnScalarFieldEnum = (typeof OrderreturnScalarFieldEnum)[keyof typeof OrderreturnScalarFieldEnum]


  export const OrderreturndetailScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    productName: 'productName',
    price: 'price',
    qty: 'qty',
    total: 'total',
    returnId: 'returnId'
  };

  export type OrderreturndetailScalarFieldEnum = (typeof OrderreturndetailScalarFieldEnum)[keyof typeof OrderreturndetailScalarFieldEnum]


  export const PurchaseScalarFieldEnum: {
    id: 'id',
    code: 'code',
    date: 'date',
    note: 'note',
    total: 'total',
    ppn: 'ppn',
    grandTotal: 'grandTotal',
    userId: 'userId'
  };

  export type PurchaseScalarFieldEnum = (typeof PurchaseScalarFieldEnum)[keyof typeof PurchaseScalarFieldEnum]


  export const PurchasedetailScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    productName: 'productName',
    price: 'price',
    qty: 'qty',
    total: 'total',
    purchaseId: 'purchaseId'
  };

  export type PurchasedetailScalarFieldEnum = (typeof PurchasedetailScalarFieldEnum)[keyof typeof PurchasedetailScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


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


  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: IntFilter<"Category"> | number
    kategoryName?: StringFilter<"Category"> | string
    Product?: ProductListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    kategoryName?: SortOrder
    Product?: ProductOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    kategoryName?: StringFilter<"Category"> | string
    Product?: ProductListRelationFilter
  }, "id">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    kategoryName?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Category"> | number
    kategoryName?: StringWithAggregatesFilter<"Category"> | string
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: IntFilter<"Product"> | number
    code?: StringFilter<"Product"> | string
    barcode?: StringNullableFilter<"Product"> | string | null
    productName?: StringFilter<"Product"> | string
    image?: StringFilter<"Product"> | string
    url?: StringFilter<"Product"> | string
    qty?: IntFilter<"Product"> | number
    price?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    kategoryId?: IntFilter<"Product"> | number
    supplierId?: IntFilter<"Product"> | number
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    kategory?: XOR<CategoryRelationFilter, CategoryWhereInput>
    supplier?: XOR<SupplierRelationFilter, SupplierWhereInput>
    Carts?: CartsListRelationFilter
    Orderdetail?: OrderdetailListRelationFilter
    Orderreturndetail?: OrderreturndetailListRelationFilter
    Purchasedetail?: PurchasedetailListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    barcode?: SortOrderInput | SortOrder
    productName?: SortOrder
    image?: SortOrder
    url?: SortOrder
    qty?: SortOrder
    price?: SortOrder
    kategoryId?: SortOrder
    supplierId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    kategory?: CategoryOrderByWithRelationInput
    supplier?: SupplierOrderByWithRelationInput
    Carts?: CartsOrderByRelationAggregateInput
    Orderdetail?: OrderdetailOrderByRelationAggregateInput
    Orderreturndetail?: OrderreturndetailOrderByRelationAggregateInput
    Purchasedetail?: PurchasedetailOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    code?: string
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    barcode?: StringNullableFilter<"Product"> | string | null
    productName?: StringFilter<"Product"> | string
    image?: StringFilter<"Product"> | string
    url?: StringFilter<"Product"> | string
    qty?: IntFilter<"Product"> | number
    price?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    kategoryId?: IntFilter<"Product"> | number
    supplierId?: IntFilter<"Product"> | number
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    kategory?: XOR<CategoryRelationFilter, CategoryWhereInput>
    supplier?: XOR<SupplierRelationFilter, SupplierWhereInput>
    Carts?: CartsListRelationFilter
    Orderdetail?: OrderdetailListRelationFilter
    Orderreturndetail?: OrderreturndetailListRelationFilter
    Purchasedetail?: PurchasedetailListRelationFilter
  }, "id" | "code">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    barcode?: SortOrderInput | SortOrder
    productName?: SortOrder
    image?: SortOrder
    url?: SortOrder
    qty?: SortOrder
    price?: SortOrder
    kategoryId?: SortOrder
    supplierId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Product"> | number
    code?: StringWithAggregatesFilter<"Product"> | string
    barcode?: StringNullableWithAggregatesFilter<"Product"> | string | null
    productName?: StringWithAggregatesFilter<"Product"> | string
    image?: StringWithAggregatesFilter<"Product"> | string
    url?: StringWithAggregatesFilter<"Product"> | string
    qty?: IntWithAggregatesFilter<"Product"> | number
    price?: DecimalWithAggregatesFilter<"Product"> | Decimal | DecimalJsLike | number | string
    kategoryId?: IntWithAggregatesFilter<"Product"> | number
    supplierId?: IntWithAggregatesFilter<"Product"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
  }

  export type SupplierWhereInput = {
    AND?: SupplierWhereInput | SupplierWhereInput[]
    OR?: SupplierWhereInput[]
    NOT?: SupplierWhereInput | SupplierWhereInput[]
    id?: IntFilter<"Supplier"> | number
    firstName?: StringFilter<"Supplier"> | string
    lastName?: StringNullableFilter<"Supplier"> | string | null
    phone?: StringFilter<"Supplier"> | string
    email?: StringNullableFilter<"Supplier"> | string | null
    address?: StringFilter<"Supplier"> | string
    Product?: ProductListRelationFilter
  }

  export type SupplierOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrderInput | SortOrder
    phone?: SortOrder
    email?: SortOrderInput | SortOrder
    address?: SortOrder
    Product?: ProductOrderByRelationAggregateInput
  }

  export type SupplierWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SupplierWhereInput | SupplierWhereInput[]
    OR?: SupplierWhereInput[]
    NOT?: SupplierWhereInput | SupplierWhereInput[]
    firstName?: StringFilter<"Supplier"> | string
    lastName?: StringNullableFilter<"Supplier"> | string | null
    phone?: StringFilter<"Supplier"> | string
    email?: StringNullableFilter<"Supplier"> | string | null
    address?: StringFilter<"Supplier"> | string
    Product?: ProductListRelationFilter
  }, "id">

  export type SupplierOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrderInput | SortOrder
    phone?: SortOrder
    email?: SortOrderInput | SortOrder
    address?: SortOrder
    _count?: SupplierCountOrderByAggregateInput
    _avg?: SupplierAvgOrderByAggregateInput
    _max?: SupplierMaxOrderByAggregateInput
    _min?: SupplierMinOrderByAggregateInput
    _sum?: SupplierSumOrderByAggregateInput
  }

  export type SupplierScalarWhereWithAggregatesInput = {
    AND?: SupplierScalarWhereWithAggregatesInput | SupplierScalarWhereWithAggregatesInput[]
    OR?: SupplierScalarWhereWithAggregatesInput[]
    NOT?: SupplierScalarWhereWithAggregatesInput | SupplierScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Supplier"> | number
    firstName?: StringWithAggregatesFilter<"Supplier"> | string
    lastName?: StringNullableWithAggregatesFilter<"Supplier"> | string | null
    phone?: StringWithAggregatesFilter<"Supplier"> | string
    email?: StringNullableWithAggregatesFilter<"Supplier"> | string | null
    address?: StringWithAggregatesFilter<"Supplier"> | string
  }

  export type CartsWhereInput = {
    AND?: CartsWhereInput | CartsWhereInput[]
    OR?: CartsWhereInput[]
    NOT?: CartsWhereInput | CartsWhereInput[]
    id?: IntFilter<"Carts"> | number
    price?: DecimalFilter<"Carts"> | Decimal | DecimalJsLike | number | string
    productName?: StringFilter<"Carts"> | string
    qty?: IntFilter<"Carts"> | number
    totalPrice?: DecimalFilter<"Carts"> | Decimal | DecimalJsLike | number | string
    note?: StringFilter<"Carts"> | string
    productId?: IntFilter<"Carts"> | number
    userId?: IntFilter<"Carts"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
    product?: XOR<ProductRelationFilter, ProductWhereInput>
  }

  export type CartsOrderByWithRelationInput = {
    id?: SortOrder
    price?: SortOrder
    productName?: SortOrder
    qty?: SortOrder
    totalPrice?: SortOrder
    note?: SortOrder
    productId?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
  }

  export type CartsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CartsWhereInput | CartsWhereInput[]
    OR?: CartsWhereInput[]
    NOT?: CartsWhereInput | CartsWhereInput[]
    price?: DecimalFilter<"Carts"> | Decimal | DecimalJsLike | number | string
    productName?: StringFilter<"Carts"> | string
    qty?: IntFilter<"Carts"> | number
    totalPrice?: DecimalFilter<"Carts"> | Decimal | DecimalJsLike | number | string
    note?: StringFilter<"Carts"> | string
    productId?: IntFilter<"Carts"> | number
    userId?: IntFilter<"Carts"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
    product?: XOR<ProductRelationFilter, ProductWhereInput>
  }, "id">

  export type CartsOrderByWithAggregationInput = {
    id?: SortOrder
    price?: SortOrder
    productName?: SortOrder
    qty?: SortOrder
    totalPrice?: SortOrder
    note?: SortOrder
    productId?: SortOrder
    userId?: SortOrder
    _count?: CartsCountOrderByAggregateInput
    _avg?: CartsAvgOrderByAggregateInput
    _max?: CartsMaxOrderByAggregateInput
    _min?: CartsMinOrderByAggregateInput
    _sum?: CartsSumOrderByAggregateInput
  }

  export type CartsScalarWhereWithAggregatesInput = {
    AND?: CartsScalarWhereWithAggregatesInput | CartsScalarWhereWithAggregatesInput[]
    OR?: CartsScalarWhereWithAggregatesInput[]
    NOT?: CartsScalarWhereWithAggregatesInput | CartsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Carts"> | number
    price?: DecimalWithAggregatesFilter<"Carts"> | Decimal | DecimalJsLike | number | string
    productName?: StringWithAggregatesFilter<"Carts"> | string
    qty?: IntWithAggregatesFilter<"Carts"> | number
    totalPrice?: DecimalWithAggregatesFilter<"Carts"> | Decimal | DecimalJsLike | number | string
    note?: StringWithAggregatesFilter<"Carts"> | string
    productId?: IntWithAggregatesFilter<"Carts"> | number
    userId?: IntWithAggregatesFilter<"Carts"> | number
  }

  export type OrdersWhereInput = {
    AND?: OrdersWhereInput | OrdersWhereInput[]
    OR?: OrdersWhereInput[]
    NOT?: OrdersWhereInput | OrdersWhereInput[]
    id?: IntFilter<"Orders"> | number
    date?: DateTimeFilter<"Orders"> | Date | string
    code?: StringFilter<"Orders"> | string
    total?: DecimalFilter<"Orders"> | Decimal | DecimalJsLike | number | string
    ppn?: DecimalFilter<"Orders"> | Decimal | DecimalJsLike | number | string
    grandTotal?: DecimalFilter<"Orders"> | Decimal | DecimalJsLike | number | string
    userId?: IntFilter<"Orders"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
    Orderdetail?: OrderdetailListRelationFilter
    Orderreturn?: OrderreturnListRelationFilter
  }

  export type OrdersOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    code?: SortOrder
    total?: SortOrder
    ppn?: SortOrder
    grandTotal?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    Orderdetail?: OrderdetailOrderByRelationAggregateInput
    Orderreturn?: OrderreturnOrderByRelationAggregateInput
  }

  export type OrdersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    code?: string
    AND?: OrdersWhereInput | OrdersWhereInput[]
    OR?: OrdersWhereInput[]
    NOT?: OrdersWhereInput | OrdersWhereInput[]
    date?: DateTimeFilter<"Orders"> | Date | string
    total?: DecimalFilter<"Orders"> | Decimal | DecimalJsLike | number | string
    ppn?: DecimalFilter<"Orders"> | Decimal | DecimalJsLike | number | string
    grandTotal?: DecimalFilter<"Orders"> | Decimal | DecimalJsLike | number | string
    userId?: IntFilter<"Orders"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
    Orderdetail?: OrderdetailListRelationFilter
    Orderreturn?: OrderreturnListRelationFilter
  }, "id" | "code">

  export type OrdersOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    code?: SortOrder
    total?: SortOrder
    ppn?: SortOrder
    grandTotal?: SortOrder
    userId?: SortOrder
    _count?: OrdersCountOrderByAggregateInput
    _avg?: OrdersAvgOrderByAggregateInput
    _max?: OrdersMaxOrderByAggregateInput
    _min?: OrdersMinOrderByAggregateInput
    _sum?: OrdersSumOrderByAggregateInput
  }

  export type OrdersScalarWhereWithAggregatesInput = {
    AND?: OrdersScalarWhereWithAggregatesInput | OrdersScalarWhereWithAggregatesInput[]
    OR?: OrdersScalarWhereWithAggregatesInput[]
    NOT?: OrdersScalarWhereWithAggregatesInput | OrdersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Orders"> | number
    date?: DateTimeWithAggregatesFilter<"Orders"> | Date | string
    code?: StringWithAggregatesFilter<"Orders"> | string
    total?: DecimalWithAggregatesFilter<"Orders"> | Decimal | DecimalJsLike | number | string
    ppn?: DecimalWithAggregatesFilter<"Orders"> | Decimal | DecimalJsLike | number | string
    grandTotal?: DecimalWithAggregatesFilter<"Orders"> | Decimal | DecimalJsLike | number | string
    userId?: IntWithAggregatesFilter<"Orders"> | number
  }

  export type OrderdetailWhereInput = {
    AND?: OrderdetailWhereInput | OrderdetailWhereInput[]
    OR?: OrderdetailWhereInput[]
    NOT?: OrderdetailWhereInput | OrderdetailWhereInput[]
    id?: IntFilter<"Orderdetail"> | number
    price?: DecimalFilter<"Orderdetail"> | Decimal | DecimalJsLike | number | string
    productName?: StringFilter<"Orderdetail"> | string
    qty?: IntFilter<"Orderdetail"> | number
    totalPrice?: DecimalFilter<"Orderdetail"> | Decimal | DecimalJsLike | number | string
    note?: StringFilter<"Orderdetail"> | string
    productId?: IntFilter<"Orderdetail"> | number
    orderId?: IntFilter<"Orderdetail"> | number
    order?: XOR<OrdersRelationFilter, OrdersWhereInput>
    product?: XOR<ProductRelationFilter, ProductWhereInput>
  }

  export type OrderdetailOrderByWithRelationInput = {
    id?: SortOrder
    price?: SortOrder
    productName?: SortOrder
    qty?: SortOrder
    totalPrice?: SortOrder
    note?: SortOrder
    productId?: SortOrder
    orderId?: SortOrder
    order?: OrdersOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
  }

  export type OrderdetailWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OrderdetailWhereInput | OrderdetailWhereInput[]
    OR?: OrderdetailWhereInput[]
    NOT?: OrderdetailWhereInput | OrderdetailWhereInput[]
    price?: DecimalFilter<"Orderdetail"> | Decimal | DecimalJsLike | number | string
    productName?: StringFilter<"Orderdetail"> | string
    qty?: IntFilter<"Orderdetail"> | number
    totalPrice?: DecimalFilter<"Orderdetail"> | Decimal | DecimalJsLike | number | string
    note?: StringFilter<"Orderdetail"> | string
    productId?: IntFilter<"Orderdetail"> | number
    orderId?: IntFilter<"Orderdetail"> | number
    order?: XOR<OrdersRelationFilter, OrdersWhereInput>
    product?: XOR<ProductRelationFilter, ProductWhereInput>
  }, "id">

  export type OrderdetailOrderByWithAggregationInput = {
    id?: SortOrder
    price?: SortOrder
    productName?: SortOrder
    qty?: SortOrder
    totalPrice?: SortOrder
    note?: SortOrder
    productId?: SortOrder
    orderId?: SortOrder
    _count?: OrderdetailCountOrderByAggregateInput
    _avg?: OrderdetailAvgOrderByAggregateInput
    _max?: OrderdetailMaxOrderByAggregateInput
    _min?: OrderdetailMinOrderByAggregateInput
    _sum?: OrderdetailSumOrderByAggregateInput
  }

  export type OrderdetailScalarWhereWithAggregatesInput = {
    AND?: OrderdetailScalarWhereWithAggregatesInput | OrderdetailScalarWhereWithAggregatesInput[]
    OR?: OrderdetailScalarWhereWithAggregatesInput[]
    NOT?: OrderdetailScalarWhereWithAggregatesInput | OrderdetailScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Orderdetail"> | number
    price?: DecimalWithAggregatesFilter<"Orderdetail"> | Decimal | DecimalJsLike | number | string
    productName?: StringWithAggregatesFilter<"Orderdetail"> | string
    qty?: IntWithAggregatesFilter<"Orderdetail"> | number
    totalPrice?: DecimalWithAggregatesFilter<"Orderdetail"> | Decimal | DecimalJsLike | number | string
    note?: StringWithAggregatesFilter<"Orderdetail"> | string
    productId?: IntWithAggregatesFilter<"Orderdetail"> | number
    orderId?: IntWithAggregatesFilter<"Orderdetail"> | number
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    userName?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    Carts?: CartsListRelationFilter
    Orders?: OrdersListRelationFilter
    Orderreturn?: OrderreturnListRelationFilter
    Purchase?: PurchaseListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    userName?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    Carts?: CartsOrderByRelationAggregateInput
    Orders?: OrdersOrderByRelationAggregateInput
    Orderreturn?: OrderreturnOrderByRelationAggregateInput
    Purchase?: PurchaseOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userName?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    Carts?: CartsListRelationFilter
    Orders?: OrdersListRelationFilter
    Orderreturn?: OrderreturnListRelationFilter
    Purchase?: PurchaseListRelationFilter
  }, "id" | "userName">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    userName?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
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
    id?: IntWithAggregatesFilter<"User"> | number
    userName?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    role?: StringWithAggregatesFilter<"User"> | string
  }

  export type OrderreturnWhereInput = {
    AND?: OrderreturnWhereInput | OrderreturnWhereInput[]
    OR?: OrderreturnWhereInput[]
    NOT?: OrderreturnWhereInput | OrderreturnWhereInput[]
    id?: IntFilter<"Orderreturn"> | number
    code?: StringFilter<"Orderreturn"> | string
    date?: DateTimeFilter<"Orderreturn"> | Date | string
    note?: StringNullableFilter<"Orderreturn"> | string | null
    orderId?: IntFilter<"Orderreturn"> | number
    userId?: IntFilter<"Orderreturn"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
    order?: XOR<OrdersRelationFilter, OrdersWhereInput>
    Orderreturndetail?: OrderreturndetailListRelationFilter
  }

  export type OrderreturnOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    date?: SortOrder
    note?: SortOrderInput | SortOrder
    orderId?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    order?: OrdersOrderByWithRelationInput
    Orderreturndetail?: OrderreturndetailOrderByRelationAggregateInput
  }

  export type OrderreturnWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OrderreturnWhereInput | OrderreturnWhereInput[]
    OR?: OrderreturnWhereInput[]
    NOT?: OrderreturnWhereInput | OrderreturnWhereInput[]
    code?: StringFilter<"Orderreturn"> | string
    date?: DateTimeFilter<"Orderreturn"> | Date | string
    note?: StringNullableFilter<"Orderreturn"> | string | null
    orderId?: IntFilter<"Orderreturn"> | number
    userId?: IntFilter<"Orderreturn"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
    order?: XOR<OrdersRelationFilter, OrdersWhereInput>
    Orderreturndetail?: OrderreturndetailListRelationFilter
  }, "id">

  export type OrderreturnOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    date?: SortOrder
    note?: SortOrderInput | SortOrder
    orderId?: SortOrder
    userId?: SortOrder
    _count?: OrderreturnCountOrderByAggregateInput
    _avg?: OrderreturnAvgOrderByAggregateInput
    _max?: OrderreturnMaxOrderByAggregateInput
    _min?: OrderreturnMinOrderByAggregateInput
    _sum?: OrderreturnSumOrderByAggregateInput
  }

  export type OrderreturnScalarWhereWithAggregatesInput = {
    AND?: OrderreturnScalarWhereWithAggregatesInput | OrderreturnScalarWhereWithAggregatesInput[]
    OR?: OrderreturnScalarWhereWithAggregatesInput[]
    NOT?: OrderreturnScalarWhereWithAggregatesInput | OrderreturnScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Orderreturn"> | number
    code?: StringWithAggregatesFilter<"Orderreturn"> | string
    date?: DateTimeWithAggregatesFilter<"Orderreturn"> | Date | string
    note?: StringNullableWithAggregatesFilter<"Orderreturn"> | string | null
    orderId?: IntWithAggregatesFilter<"Orderreturn"> | number
    userId?: IntWithAggregatesFilter<"Orderreturn"> | number
  }

  export type OrderreturndetailWhereInput = {
    AND?: OrderreturndetailWhereInput | OrderreturndetailWhereInput[]
    OR?: OrderreturndetailWhereInput[]
    NOT?: OrderreturndetailWhereInput | OrderreturndetailWhereInput[]
    id?: IntFilter<"Orderreturndetail"> | number
    productId?: IntFilter<"Orderreturndetail"> | number
    productName?: StringFilter<"Orderreturndetail"> | string
    price?: DecimalFilter<"Orderreturndetail"> | Decimal | DecimalJsLike | number | string
    qty?: IntFilter<"Orderreturndetail"> | number
    total?: DecimalFilter<"Orderreturndetail"> | Decimal | DecimalJsLike | number | string
    returnId?: IntFilter<"Orderreturndetail"> | number
    orderreturn?: XOR<OrderreturnRelationFilter, OrderreturnWhereInput>
    product?: XOR<ProductRelationFilter, ProductWhereInput>
  }

  export type OrderreturndetailOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    productName?: SortOrder
    price?: SortOrder
    qty?: SortOrder
    total?: SortOrder
    returnId?: SortOrder
    orderreturn?: OrderreturnOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
  }

  export type OrderreturndetailWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OrderreturndetailWhereInput | OrderreturndetailWhereInput[]
    OR?: OrderreturndetailWhereInput[]
    NOT?: OrderreturndetailWhereInput | OrderreturndetailWhereInput[]
    productId?: IntFilter<"Orderreturndetail"> | number
    productName?: StringFilter<"Orderreturndetail"> | string
    price?: DecimalFilter<"Orderreturndetail"> | Decimal | DecimalJsLike | number | string
    qty?: IntFilter<"Orderreturndetail"> | number
    total?: DecimalFilter<"Orderreturndetail"> | Decimal | DecimalJsLike | number | string
    returnId?: IntFilter<"Orderreturndetail"> | number
    orderreturn?: XOR<OrderreturnRelationFilter, OrderreturnWhereInput>
    product?: XOR<ProductRelationFilter, ProductWhereInput>
  }, "id">

  export type OrderreturndetailOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    productName?: SortOrder
    price?: SortOrder
    qty?: SortOrder
    total?: SortOrder
    returnId?: SortOrder
    _count?: OrderreturndetailCountOrderByAggregateInput
    _avg?: OrderreturndetailAvgOrderByAggregateInput
    _max?: OrderreturndetailMaxOrderByAggregateInput
    _min?: OrderreturndetailMinOrderByAggregateInput
    _sum?: OrderreturndetailSumOrderByAggregateInput
  }

  export type OrderreturndetailScalarWhereWithAggregatesInput = {
    AND?: OrderreturndetailScalarWhereWithAggregatesInput | OrderreturndetailScalarWhereWithAggregatesInput[]
    OR?: OrderreturndetailScalarWhereWithAggregatesInput[]
    NOT?: OrderreturndetailScalarWhereWithAggregatesInput | OrderreturndetailScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Orderreturndetail"> | number
    productId?: IntWithAggregatesFilter<"Orderreturndetail"> | number
    productName?: StringWithAggregatesFilter<"Orderreturndetail"> | string
    price?: DecimalWithAggregatesFilter<"Orderreturndetail"> | Decimal | DecimalJsLike | number | string
    qty?: IntWithAggregatesFilter<"Orderreturndetail"> | number
    total?: DecimalWithAggregatesFilter<"Orderreturndetail"> | Decimal | DecimalJsLike | number | string
    returnId?: IntWithAggregatesFilter<"Orderreturndetail"> | number
  }

  export type PurchaseWhereInput = {
    AND?: PurchaseWhereInput | PurchaseWhereInput[]
    OR?: PurchaseWhereInput[]
    NOT?: PurchaseWhereInput | PurchaseWhereInput[]
    id?: IntFilter<"Purchase"> | number
    code?: StringFilter<"Purchase"> | string
    date?: DateTimeFilter<"Purchase"> | Date | string
    note?: StringFilter<"Purchase"> | string
    total?: DecimalFilter<"Purchase"> | Decimal | DecimalJsLike | number | string
    ppn?: DecimalFilter<"Purchase"> | Decimal | DecimalJsLike | number | string
    grandTotal?: DecimalFilter<"Purchase"> | Decimal | DecimalJsLike | number | string
    userId?: IntFilter<"Purchase"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
    Purchasedetail?: PurchasedetailListRelationFilter
  }

  export type PurchaseOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    date?: SortOrder
    note?: SortOrder
    total?: SortOrder
    ppn?: SortOrder
    grandTotal?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    Purchasedetail?: PurchasedetailOrderByRelationAggregateInput
  }

  export type PurchaseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PurchaseWhereInput | PurchaseWhereInput[]
    OR?: PurchaseWhereInput[]
    NOT?: PurchaseWhereInput | PurchaseWhereInput[]
    code?: StringFilter<"Purchase"> | string
    date?: DateTimeFilter<"Purchase"> | Date | string
    note?: StringFilter<"Purchase"> | string
    total?: DecimalFilter<"Purchase"> | Decimal | DecimalJsLike | number | string
    ppn?: DecimalFilter<"Purchase"> | Decimal | DecimalJsLike | number | string
    grandTotal?: DecimalFilter<"Purchase"> | Decimal | DecimalJsLike | number | string
    userId?: IntFilter<"Purchase"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
    Purchasedetail?: PurchasedetailListRelationFilter
  }, "id">

  export type PurchaseOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    date?: SortOrder
    note?: SortOrder
    total?: SortOrder
    ppn?: SortOrder
    grandTotal?: SortOrder
    userId?: SortOrder
    _count?: PurchaseCountOrderByAggregateInput
    _avg?: PurchaseAvgOrderByAggregateInput
    _max?: PurchaseMaxOrderByAggregateInput
    _min?: PurchaseMinOrderByAggregateInput
    _sum?: PurchaseSumOrderByAggregateInput
  }

  export type PurchaseScalarWhereWithAggregatesInput = {
    AND?: PurchaseScalarWhereWithAggregatesInput | PurchaseScalarWhereWithAggregatesInput[]
    OR?: PurchaseScalarWhereWithAggregatesInput[]
    NOT?: PurchaseScalarWhereWithAggregatesInput | PurchaseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Purchase"> | number
    code?: StringWithAggregatesFilter<"Purchase"> | string
    date?: DateTimeWithAggregatesFilter<"Purchase"> | Date | string
    note?: StringWithAggregatesFilter<"Purchase"> | string
    total?: DecimalWithAggregatesFilter<"Purchase"> | Decimal | DecimalJsLike | number | string
    ppn?: DecimalWithAggregatesFilter<"Purchase"> | Decimal | DecimalJsLike | number | string
    grandTotal?: DecimalWithAggregatesFilter<"Purchase"> | Decimal | DecimalJsLike | number | string
    userId?: IntWithAggregatesFilter<"Purchase"> | number
  }

  export type PurchasedetailWhereInput = {
    AND?: PurchasedetailWhereInput | PurchasedetailWhereInput[]
    OR?: PurchasedetailWhereInput[]
    NOT?: PurchasedetailWhereInput | PurchasedetailWhereInput[]
    id?: IntFilter<"Purchasedetail"> | number
    productId?: IntFilter<"Purchasedetail"> | number
    productName?: StringFilter<"Purchasedetail"> | string
    price?: DecimalFilter<"Purchasedetail"> | Decimal | DecimalJsLike | number | string
    qty?: IntFilter<"Purchasedetail"> | number
    total?: DecimalFilter<"Purchasedetail"> | Decimal | DecimalJsLike | number | string
    purchaseId?: IntFilter<"Purchasedetail"> | number
    purchase?: XOR<PurchaseRelationFilter, PurchaseWhereInput>
    product?: XOR<ProductRelationFilter, ProductWhereInput>
  }

  export type PurchasedetailOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    productName?: SortOrder
    price?: SortOrder
    qty?: SortOrder
    total?: SortOrder
    purchaseId?: SortOrder
    purchase?: PurchaseOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
  }

  export type PurchasedetailWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PurchasedetailWhereInput | PurchasedetailWhereInput[]
    OR?: PurchasedetailWhereInput[]
    NOT?: PurchasedetailWhereInput | PurchasedetailWhereInput[]
    productId?: IntFilter<"Purchasedetail"> | number
    productName?: StringFilter<"Purchasedetail"> | string
    price?: DecimalFilter<"Purchasedetail"> | Decimal | DecimalJsLike | number | string
    qty?: IntFilter<"Purchasedetail"> | number
    total?: DecimalFilter<"Purchasedetail"> | Decimal | DecimalJsLike | number | string
    purchaseId?: IntFilter<"Purchasedetail"> | number
    purchase?: XOR<PurchaseRelationFilter, PurchaseWhereInput>
    product?: XOR<ProductRelationFilter, ProductWhereInput>
  }, "id">

  export type PurchasedetailOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    productName?: SortOrder
    price?: SortOrder
    qty?: SortOrder
    total?: SortOrder
    purchaseId?: SortOrder
    _count?: PurchasedetailCountOrderByAggregateInput
    _avg?: PurchasedetailAvgOrderByAggregateInput
    _max?: PurchasedetailMaxOrderByAggregateInput
    _min?: PurchasedetailMinOrderByAggregateInput
    _sum?: PurchasedetailSumOrderByAggregateInput
  }

  export type PurchasedetailScalarWhereWithAggregatesInput = {
    AND?: PurchasedetailScalarWhereWithAggregatesInput | PurchasedetailScalarWhereWithAggregatesInput[]
    OR?: PurchasedetailScalarWhereWithAggregatesInput[]
    NOT?: PurchasedetailScalarWhereWithAggregatesInput | PurchasedetailScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Purchasedetail"> | number
    productId?: IntWithAggregatesFilter<"Purchasedetail"> | number
    productName?: StringWithAggregatesFilter<"Purchasedetail"> | string
    price?: DecimalWithAggregatesFilter<"Purchasedetail"> | Decimal | DecimalJsLike | number | string
    qty?: IntWithAggregatesFilter<"Purchasedetail"> | number
    total?: DecimalWithAggregatesFilter<"Purchasedetail"> | Decimal | DecimalJsLike | number | string
    purchaseId?: IntWithAggregatesFilter<"Purchasedetail"> | number
  }

  export type CategoryCreateInput = {
    kategoryName: string
    Product?: ProductCreateNestedManyWithoutKategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: number
    kategoryName: string
    Product?: ProductUncheckedCreateNestedManyWithoutKategoryInput
  }

  export type CategoryUpdateInput = {
    kategoryName?: StringFieldUpdateOperationsInput | string
    Product?: ProductUpdateManyWithoutKategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    kategoryName?: StringFieldUpdateOperationsInput | string
    Product?: ProductUncheckedUpdateManyWithoutKategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: number
    kategoryName: string
  }

  export type CategoryUpdateManyMutationInput = {
    kategoryName?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    kategoryName?: StringFieldUpdateOperationsInput | string
  }

  export type ProductCreateInput = {
    code: string
    barcode?: string | null
    productName: string
    image: string
    url: string
    qty: number
    price: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    kategory: CategoryCreateNestedOneWithoutProductInput
    supplier: SupplierCreateNestedOneWithoutProductInput
    Carts?: CartsCreateNestedManyWithoutProductInput
    Orderdetail?: OrderdetailCreateNestedManyWithoutProductInput
    Orderreturndetail?: OrderreturndetailCreateNestedManyWithoutProductInput
    Purchasedetail?: PurchasedetailCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: number
    code: string
    barcode?: string | null
    productName: string
    image: string
    url: string
    qty: number
    price: Decimal | DecimalJsLike | number | string
    kategoryId: number
    supplierId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    Carts?: CartsUncheckedCreateNestedManyWithoutProductInput
    Orderdetail?: OrderdetailUncheckedCreateNestedManyWithoutProductInput
    Orderreturndetail?: OrderreturndetailUncheckedCreateNestedManyWithoutProductInput
    Purchasedetail?: PurchasedetailUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    productName?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kategory?: CategoryUpdateOneRequiredWithoutProductNestedInput
    supplier?: SupplierUpdateOneRequiredWithoutProductNestedInput
    Carts?: CartsUpdateManyWithoutProductNestedInput
    Orderdetail?: OrderdetailUpdateManyWithoutProductNestedInput
    Orderreturndetail?: OrderreturndetailUpdateManyWithoutProductNestedInput
    Purchasedetail?: PurchasedetailUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    productName?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    kategoryId?: IntFieldUpdateOperationsInput | number
    supplierId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Carts?: CartsUncheckedUpdateManyWithoutProductNestedInput
    Orderdetail?: OrderdetailUncheckedUpdateManyWithoutProductNestedInput
    Orderreturndetail?: OrderreturndetailUncheckedUpdateManyWithoutProductNestedInput
    Purchasedetail?: PurchasedetailUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: number
    code: string
    barcode?: string | null
    productName: string
    image: string
    url: string
    qty: number
    price: Decimal | DecimalJsLike | number | string
    kategoryId: number
    supplierId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    productName?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    productName?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    kategoryId?: IntFieldUpdateOperationsInput | number
    supplierId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierCreateInput = {
    firstName: string
    lastName?: string | null
    phone: string
    email?: string | null
    address: string
    Product?: ProductCreateNestedManyWithoutSupplierInput
  }

  export type SupplierUncheckedCreateInput = {
    id?: number
    firstName: string
    lastName?: string | null
    phone: string
    email?: string | null
    address: string
    Product?: ProductUncheckedCreateNestedManyWithoutSupplierInput
  }

  export type SupplierUpdateInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    Product?: ProductUpdateManyWithoutSupplierNestedInput
  }

  export type SupplierUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    Product?: ProductUncheckedUpdateManyWithoutSupplierNestedInput
  }

  export type SupplierCreateManyInput = {
    id?: number
    firstName: string
    lastName?: string | null
    phone: string
    email?: string | null
    address: string
  }

  export type SupplierUpdateManyMutationInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
  }

  export type SupplierUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
  }

  export type CartsCreateInput = {
    price: Decimal | DecimalJsLike | number | string
    productName: string
    qty: number
    totalPrice: Decimal | DecimalJsLike | number | string
    note: string
    user: UserCreateNestedOneWithoutCartsInput
    product: ProductCreateNestedOneWithoutCartsInput
  }

  export type CartsUncheckedCreateInput = {
    id?: number
    price: Decimal | DecimalJsLike | number | string
    productName: string
    qty: number
    totalPrice: Decimal | DecimalJsLike | number | string
    note: string
    productId: number
    userId: number
  }

  export type CartsUpdateInput = {
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    productName?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    note?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutCartsNestedInput
    product?: ProductUpdateOneRequiredWithoutCartsNestedInput
  }

  export type CartsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    productName?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    note?: StringFieldUpdateOperationsInput | string
    productId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type CartsCreateManyInput = {
    id?: number
    price: Decimal | DecimalJsLike | number | string
    productName: string
    qty: number
    totalPrice: Decimal | DecimalJsLike | number | string
    note: string
    productId: number
    userId: number
  }

  export type CartsUpdateManyMutationInput = {
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    productName?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    note?: StringFieldUpdateOperationsInput | string
  }

  export type CartsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    productName?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    note?: StringFieldUpdateOperationsInput | string
    productId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type OrdersCreateInput = {
    date?: Date | string
    code: string
    total: Decimal | DecimalJsLike | number | string
    ppn: Decimal | DecimalJsLike | number | string
    grandTotal: Decimal | DecimalJsLike | number | string
    user: UserCreateNestedOneWithoutOrdersInput
    Orderdetail?: OrderdetailCreateNestedManyWithoutOrderInput
    Orderreturn?: OrderreturnCreateNestedManyWithoutOrderInput
  }

  export type OrdersUncheckedCreateInput = {
    id?: number
    date?: Date | string
    code: string
    total: Decimal | DecimalJsLike | number | string
    ppn: Decimal | DecimalJsLike | number | string
    grandTotal: Decimal | DecimalJsLike | number | string
    userId: number
    Orderdetail?: OrderdetailUncheckedCreateNestedManyWithoutOrderInput
    Orderreturn?: OrderreturnUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrdersUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    code?: StringFieldUpdateOperationsInput | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ppn?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    grandTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    user?: UserUpdateOneRequiredWithoutOrdersNestedInput
    Orderdetail?: OrderdetailUpdateManyWithoutOrderNestedInput
    Orderreturn?: OrderreturnUpdateManyWithoutOrderNestedInput
  }

  export type OrdersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    code?: StringFieldUpdateOperationsInput | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ppn?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    grandTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    userId?: IntFieldUpdateOperationsInput | number
    Orderdetail?: OrderdetailUncheckedUpdateManyWithoutOrderNestedInput
    Orderreturn?: OrderreturnUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrdersCreateManyInput = {
    id?: number
    date?: Date | string
    code: string
    total: Decimal | DecimalJsLike | number | string
    ppn: Decimal | DecimalJsLike | number | string
    grandTotal: Decimal | DecimalJsLike | number | string
    userId: number
  }

  export type OrdersUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    code?: StringFieldUpdateOperationsInput | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ppn?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    grandTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type OrdersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    code?: StringFieldUpdateOperationsInput | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ppn?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    grandTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type OrderdetailCreateInput = {
    price: Decimal | DecimalJsLike | number | string
    productName: string
    qty: number
    totalPrice: Decimal | DecimalJsLike | number | string
    note: string
    order: OrdersCreateNestedOneWithoutOrderdetailInput
    product: ProductCreateNestedOneWithoutOrderdetailInput
  }

  export type OrderdetailUncheckedCreateInput = {
    id?: number
    price: Decimal | DecimalJsLike | number | string
    productName: string
    qty: number
    totalPrice: Decimal | DecimalJsLike | number | string
    note: string
    productId: number
    orderId: number
  }

  export type OrderdetailUpdateInput = {
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    productName?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    note?: StringFieldUpdateOperationsInput | string
    order?: OrdersUpdateOneRequiredWithoutOrderdetailNestedInput
    product?: ProductUpdateOneRequiredWithoutOrderdetailNestedInput
  }

  export type OrderdetailUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    productName?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    note?: StringFieldUpdateOperationsInput | string
    productId?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
  }

  export type OrderdetailCreateManyInput = {
    id?: number
    price: Decimal | DecimalJsLike | number | string
    productName: string
    qty: number
    totalPrice: Decimal | DecimalJsLike | number | string
    note: string
    productId: number
    orderId: number
  }

  export type OrderdetailUpdateManyMutationInput = {
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    productName?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    note?: StringFieldUpdateOperationsInput | string
  }

  export type OrderdetailUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    productName?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    note?: StringFieldUpdateOperationsInput | string
    productId?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
  }

  export type UserCreateInput = {
    userName: string
    password: string
    name: string
    role: string
    Carts?: CartsCreateNestedManyWithoutUserInput
    Orders?: OrdersCreateNestedManyWithoutUserInput
    Orderreturn?: OrderreturnCreateNestedManyWithoutUserInput
    Purchase?: PurchaseCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    userName: string
    password: string
    name: string
    role: string
    Carts?: CartsUncheckedCreateNestedManyWithoutUserInput
    Orders?: OrdersUncheckedCreateNestedManyWithoutUserInput
    Orderreturn?: OrderreturnUncheckedCreateNestedManyWithoutUserInput
    Purchase?: PurchaseUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    userName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    Carts?: CartsUpdateManyWithoutUserNestedInput
    Orders?: OrdersUpdateManyWithoutUserNestedInput
    Orderreturn?: OrderreturnUpdateManyWithoutUserNestedInput
    Purchase?: PurchaseUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    Carts?: CartsUncheckedUpdateManyWithoutUserNestedInput
    Orders?: OrdersUncheckedUpdateManyWithoutUserNestedInput
    Orderreturn?: OrderreturnUncheckedUpdateManyWithoutUserNestedInput
    Purchase?: PurchaseUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    userName: string
    password: string
    name: string
    role: string
  }

  export type UserUpdateManyMutationInput = {
    userName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type OrderreturnCreateInput = {
    code: string
    date?: Date | string
    note?: string | null
    user: UserCreateNestedOneWithoutOrderreturnInput
    order: OrdersCreateNestedOneWithoutOrderreturnInput
    Orderreturndetail?: OrderreturndetailCreateNestedManyWithoutOrderreturnInput
  }

  export type OrderreturnUncheckedCreateInput = {
    id?: number
    code: string
    date?: Date | string
    note?: string | null
    orderId: number
    userId: number
    Orderreturndetail?: OrderreturndetailUncheckedCreateNestedManyWithoutOrderreturnInput
  }

  export type OrderreturnUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutOrderreturnNestedInput
    order?: OrdersUpdateOneRequiredWithoutOrderreturnNestedInput
    Orderreturndetail?: OrderreturndetailUpdateManyWithoutOrderreturnNestedInput
  }

  export type OrderreturnUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    orderId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    Orderreturndetail?: OrderreturndetailUncheckedUpdateManyWithoutOrderreturnNestedInput
  }

  export type OrderreturnCreateManyInput = {
    id?: number
    code: string
    date?: Date | string
    note?: string | null
    orderId: number
    userId: number
  }

  export type OrderreturnUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrderreturnUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    orderId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type OrderreturndetailCreateInput = {
    productName: string
    price: Decimal | DecimalJsLike | number | string
    qty: number
    total: Decimal | DecimalJsLike | number | string
    orderreturn: OrderreturnCreateNestedOneWithoutOrderreturndetailInput
    product: ProductCreateNestedOneWithoutOrderreturndetailInput
  }

  export type OrderreturndetailUncheckedCreateInput = {
    id?: number
    productId: number
    productName: string
    price: Decimal | DecimalJsLike | number | string
    qty: number
    total: Decimal | DecimalJsLike | number | string
    returnId: number
  }

  export type OrderreturndetailUpdateInput = {
    productName?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    qty?: IntFieldUpdateOperationsInput | number
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    orderreturn?: OrderreturnUpdateOneRequiredWithoutOrderreturndetailNestedInput
    product?: ProductUpdateOneRequiredWithoutOrderreturndetailNestedInput
  }

  export type OrderreturndetailUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    productName?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    qty?: IntFieldUpdateOperationsInput | number
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    returnId?: IntFieldUpdateOperationsInput | number
  }

  export type OrderreturndetailCreateManyInput = {
    id?: number
    productId: number
    productName: string
    price: Decimal | DecimalJsLike | number | string
    qty: number
    total: Decimal | DecimalJsLike | number | string
    returnId: number
  }

  export type OrderreturndetailUpdateManyMutationInput = {
    productName?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    qty?: IntFieldUpdateOperationsInput | number
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type OrderreturndetailUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    productName?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    qty?: IntFieldUpdateOperationsInput | number
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    returnId?: IntFieldUpdateOperationsInput | number
  }

  export type PurchaseCreateInput = {
    code: string
    date: Date | string
    note: string
    total: Decimal | DecimalJsLike | number | string
    ppn: Decimal | DecimalJsLike | number | string
    grandTotal: Decimal | DecimalJsLike | number | string
    user: UserCreateNestedOneWithoutPurchaseInput
    Purchasedetail?: PurchasedetailCreateNestedManyWithoutPurchaseInput
  }

  export type PurchaseUncheckedCreateInput = {
    id?: number
    code: string
    date: Date | string
    note: string
    total: Decimal | DecimalJsLike | number | string
    ppn: Decimal | DecimalJsLike | number | string
    grandTotal: Decimal | DecimalJsLike | number | string
    userId: number
    Purchasedetail?: PurchasedetailUncheckedCreateNestedManyWithoutPurchaseInput
  }

  export type PurchaseUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: StringFieldUpdateOperationsInput | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ppn?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    grandTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    user?: UserUpdateOneRequiredWithoutPurchaseNestedInput
    Purchasedetail?: PurchasedetailUpdateManyWithoutPurchaseNestedInput
  }

  export type PurchaseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: StringFieldUpdateOperationsInput | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ppn?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    grandTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    userId?: IntFieldUpdateOperationsInput | number
    Purchasedetail?: PurchasedetailUncheckedUpdateManyWithoutPurchaseNestedInput
  }

  export type PurchaseCreateManyInput = {
    id?: number
    code: string
    date: Date | string
    note: string
    total: Decimal | DecimalJsLike | number | string
    ppn: Decimal | DecimalJsLike | number | string
    grandTotal: Decimal | DecimalJsLike | number | string
    userId: number
  }

  export type PurchaseUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: StringFieldUpdateOperationsInput | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ppn?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    grandTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type PurchaseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: StringFieldUpdateOperationsInput | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ppn?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    grandTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type PurchasedetailCreateInput = {
    productName: string
    price: Decimal | DecimalJsLike | number | string
    qty: number
    total: Decimal | DecimalJsLike | number | string
    purchase: PurchaseCreateNestedOneWithoutPurchasedetailInput
    product: ProductCreateNestedOneWithoutPurchasedetailInput
  }

  export type PurchasedetailUncheckedCreateInput = {
    id?: number
    productId: number
    productName: string
    price: Decimal | DecimalJsLike | number | string
    qty: number
    total: Decimal | DecimalJsLike | number | string
    purchaseId: number
  }

  export type PurchasedetailUpdateInput = {
    productName?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    qty?: IntFieldUpdateOperationsInput | number
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    purchase?: PurchaseUpdateOneRequiredWithoutPurchasedetailNestedInput
    product?: ProductUpdateOneRequiredWithoutPurchasedetailNestedInput
  }

  export type PurchasedetailUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    productName?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    qty?: IntFieldUpdateOperationsInput | number
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    purchaseId?: IntFieldUpdateOperationsInput | number
  }

  export type PurchasedetailCreateManyInput = {
    id?: number
    productId: number
    productName: string
    price: Decimal | DecimalJsLike | number | string
    qty: number
    total: Decimal | DecimalJsLike | number | string
    purchaseId: number
  }

  export type PurchasedetailUpdateManyMutationInput = {
    productName?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    qty?: IntFieldUpdateOperationsInput | number
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type PurchasedetailUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    productName?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    qty?: IntFieldUpdateOperationsInput | number
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    purchaseId?: IntFieldUpdateOperationsInput | number
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

  export type ProductListRelationFilter = {
    every?: ProductWhereInput
    some?: ProductWhereInput
    none?: ProductWhereInput
  }

  export type ProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    kategoryName?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    kategoryName?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    kategoryName?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    id?: SortOrder
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

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
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

  export type CategoryRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type SupplierRelationFilter = {
    is?: SupplierWhereInput
    isNot?: SupplierWhereInput
  }

  export type CartsListRelationFilter = {
    every?: CartsWhereInput
    some?: CartsWhereInput
    none?: CartsWhereInput
  }

  export type OrderdetailListRelationFilter = {
    every?: OrderdetailWhereInput
    some?: OrderdetailWhereInput
    none?: OrderdetailWhereInput
  }

  export type OrderreturndetailListRelationFilter = {
    every?: OrderreturndetailWhereInput
    some?: OrderreturndetailWhereInput
    none?: OrderreturndetailWhereInput
  }

  export type PurchasedetailListRelationFilter = {
    every?: PurchasedetailWhereInput
    some?: PurchasedetailWhereInput
    none?: PurchasedetailWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CartsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderdetailOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderreturndetailOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PurchasedetailOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    barcode?: SortOrder
    productName?: SortOrder
    image?: SortOrder
    url?: SortOrder
    qty?: SortOrder
    price?: SortOrder
    kategoryId?: SortOrder
    supplierId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    id?: SortOrder
    qty?: SortOrder
    price?: SortOrder
    kategoryId?: SortOrder
    supplierId?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    barcode?: SortOrder
    productName?: SortOrder
    image?: SortOrder
    url?: SortOrder
    qty?: SortOrder
    price?: SortOrder
    kategoryId?: SortOrder
    supplierId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    barcode?: SortOrder
    productName?: SortOrder
    image?: SortOrder
    url?: SortOrder
    qty?: SortOrder
    price?: SortOrder
    kategoryId?: SortOrder
    supplierId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    id?: SortOrder
    qty?: SortOrder
    price?: SortOrder
    kategoryId?: SortOrder
    supplierId?: SortOrder
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

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
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

  export type SupplierCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    address?: SortOrder
  }

  export type SupplierAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SupplierMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    address?: SortOrder
  }

  export type SupplierMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    address?: SortOrder
  }

  export type SupplierSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ProductRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type CartsCountOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    productName?: SortOrder
    qty?: SortOrder
    totalPrice?: SortOrder
    note?: SortOrder
    productId?: SortOrder
    userId?: SortOrder
  }

  export type CartsAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    qty?: SortOrder
    totalPrice?: SortOrder
    productId?: SortOrder
    userId?: SortOrder
  }

  export type CartsMaxOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    productName?: SortOrder
    qty?: SortOrder
    totalPrice?: SortOrder
    note?: SortOrder
    productId?: SortOrder
    userId?: SortOrder
  }

  export type CartsMinOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    productName?: SortOrder
    qty?: SortOrder
    totalPrice?: SortOrder
    note?: SortOrder
    productId?: SortOrder
    userId?: SortOrder
  }

  export type CartsSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    qty?: SortOrder
    totalPrice?: SortOrder
    productId?: SortOrder
    userId?: SortOrder
  }

  export type OrderreturnListRelationFilter = {
    every?: OrderreturnWhereInput
    some?: OrderreturnWhereInput
    none?: OrderreturnWhereInput
  }

  export type OrderreturnOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrdersCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    code?: SortOrder
    total?: SortOrder
    ppn?: SortOrder
    grandTotal?: SortOrder
    userId?: SortOrder
  }

  export type OrdersAvgOrderByAggregateInput = {
    id?: SortOrder
    total?: SortOrder
    ppn?: SortOrder
    grandTotal?: SortOrder
    userId?: SortOrder
  }

  export type OrdersMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    code?: SortOrder
    total?: SortOrder
    ppn?: SortOrder
    grandTotal?: SortOrder
    userId?: SortOrder
  }

  export type OrdersMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    code?: SortOrder
    total?: SortOrder
    ppn?: SortOrder
    grandTotal?: SortOrder
    userId?: SortOrder
  }

  export type OrdersSumOrderByAggregateInput = {
    id?: SortOrder
    total?: SortOrder
    ppn?: SortOrder
    grandTotal?: SortOrder
    userId?: SortOrder
  }

  export type OrdersRelationFilter = {
    is?: OrdersWhereInput
    isNot?: OrdersWhereInput
  }

  export type OrderdetailCountOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    productName?: SortOrder
    qty?: SortOrder
    totalPrice?: SortOrder
    note?: SortOrder
    productId?: SortOrder
    orderId?: SortOrder
  }

  export type OrderdetailAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    qty?: SortOrder
    totalPrice?: SortOrder
    productId?: SortOrder
    orderId?: SortOrder
  }

  export type OrderdetailMaxOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    productName?: SortOrder
    qty?: SortOrder
    totalPrice?: SortOrder
    note?: SortOrder
    productId?: SortOrder
    orderId?: SortOrder
  }

  export type OrderdetailMinOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    productName?: SortOrder
    qty?: SortOrder
    totalPrice?: SortOrder
    note?: SortOrder
    productId?: SortOrder
    orderId?: SortOrder
  }

  export type OrderdetailSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    qty?: SortOrder
    totalPrice?: SortOrder
    productId?: SortOrder
    orderId?: SortOrder
  }

  export type OrdersListRelationFilter = {
    every?: OrdersWhereInput
    some?: OrdersWhereInput
    none?: OrdersWhereInput
  }

  export type PurchaseListRelationFilter = {
    every?: PurchaseWhereInput
    some?: PurchaseWhereInput
    none?: PurchaseWhereInput
  }

  export type OrdersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PurchaseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    userName?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    userName?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    userName?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type OrderreturnCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    date?: SortOrder
    note?: SortOrder
    orderId?: SortOrder
    userId?: SortOrder
  }

  export type OrderreturnAvgOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    userId?: SortOrder
  }

  export type OrderreturnMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    date?: SortOrder
    note?: SortOrder
    orderId?: SortOrder
    userId?: SortOrder
  }

  export type OrderreturnMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    date?: SortOrder
    note?: SortOrder
    orderId?: SortOrder
    userId?: SortOrder
  }

  export type OrderreturnSumOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    userId?: SortOrder
  }

  export type OrderreturnRelationFilter = {
    is?: OrderreturnWhereInput
    isNot?: OrderreturnWhereInput
  }

  export type OrderreturndetailCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    productName?: SortOrder
    price?: SortOrder
    qty?: SortOrder
    total?: SortOrder
    returnId?: SortOrder
  }

  export type OrderreturndetailAvgOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    price?: SortOrder
    qty?: SortOrder
    total?: SortOrder
    returnId?: SortOrder
  }

  export type OrderreturndetailMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    productName?: SortOrder
    price?: SortOrder
    qty?: SortOrder
    total?: SortOrder
    returnId?: SortOrder
  }

  export type OrderreturndetailMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    productName?: SortOrder
    price?: SortOrder
    qty?: SortOrder
    total?: SortOrder
    returnId?: SortOrder
  }

  export type OrderreturndetailSumOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    price?: SortOrder
    qty?: SortOrder
    total?: SortOrder
    returnId?: SortOrder
  }

  export type PurchaseCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    date?: SortOrder
    note?: SortOrder
    total?: SortOrder
    ppn?: SortOrder
    grandTotal?: SortOrder
    userId?: SortOrder
  }

  export type PurchaseAvgOrderByAggregateInput = {
    id?: SortOrder
    total?: SortOrder
    ppn?: SortOrder
    grandTotal?: SortOrder
    userId?: SortOrder
  }

  export type PurchaseMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    date?: SortOrder
    note?: SortOrder
    total?: SortOrder
    ppn?: SortOrder
    grandTotal?: SortOrder
    userId?: SortOrder
  }

  export type PurchaseMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    date?: SortOrder
    note?: SortOrder
    total?: SortOrder
    ppn?: SortOrder
    grandTotal?: SortOrder
    userId?: SortOrder
  }

  export type PurchaseSumOrderByAggregateInput = {
    id?: SortOrder
    total?: SortOrder
    ppn?: SortOrder
    grandTotal?: SortOrder
    userId?: SortOrder
  }

  export type PurchaseRelationFilter = {
    is?: PurchaseWhereInput
    isNot?: PurchaseWhereInput
  }

  export type PurchasedetailCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    productName?: SortOrder
    price?: SortOrder
    qty?: SortOrder
    total?: SortOrder
    purchaseId?: SortOrder
  }

  export type PurchasedetailAvgOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    price?: SortOrder
    qty?: SortOrder
    total?: SortOrder
    purchaseId?: SortOrder
  }

  export type PurchasedetailMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    productName?: SortOrder
    price?: SortOrder
    qty?: SortOrder
    total?: SortOrder
    purchaseId?: SortOrder
  }

  export type PurchasedetailMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    productName?: SortOrder
    price?: SortOrder
    qty?: SortOrder
    total?: SortOrder
    purchaseId?: SortOrder
  }

  export type PurchasedetailSumOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    price?: SortOrder
    qty?: SortOrder
    total?: SortOrder
    purchaseId?: SortOrder
  }

  export type ProductCreateNestedManyWithoutKategoryInput = {
    create?: XOR<ProductCreateWithoutKategoryInput, ProductUncheckedCreateWithoutKategoryInput> | ProductCreateWithoutKategoryInput[] | ProductUncheckedCreateWithoutKategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutKategoryInput | ProductCreateOrConnectWithoutKategoryInput[]
    createMany?: ProductCreateManyKategoryInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutKategoryInput = {
    create?: XOR<ProductCreateWithoutKategoryInput, ProductUncheckedCreateWithoutKategoryInput> | ProductCreateWithoutKategoryInput[] | ProductUncheckedCreateWithoutKategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutKategoryInput | ProductCreateOrConnectWithoutKategoryInput[]
    createMany?: ProductCreateManyKategoryInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type ProductUpdateManyWithoutKategoryNestedInput = {
    create?: XOR<ProductCreateWithoutKategoryInput, ProductUncheckedCreateWithoutKategoryInput> | ProductCreateWithoutKategoryInput[] | ProductUncheckedCreateWithoutKategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutKategoryInput | ProductCreateOrConnectWithoutKategoryInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutKategoryInput | ProductUpsertWithWhereUniqueWithoutKategoryInput[]
    createMany?: ProductCreateManyKategoryInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutKategoryInput | ProductUpdateWithWhereUniqueWithoutKategoryInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutKategoryInput | ProductUpdateManyWithWhereWithoutKategoryInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProductUncheckedUpdateManyWithoutKategoryNestedInput = {
    create?: XOR<ProductCreateWithoutKategoryInput, ProductUncheckedCreateWithoutKategoryInput> | ProductCreateWithoutKategoryInput[] | ProductUncheckedCreateWithoutKategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutKategoryInput | ProductCreateOrConnectWithoutKategoryInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutKategoryInput | ProductUpsertWithWhereUniqueWithoutKategoryInput[]
    createMany?: ProductCreateManyKategoryInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutKategoryInput | ProductUpdateWithWhereUniqueWithoutKategoryInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutKategoryInput | ProductUpdateManyWithWhereWithoutKategoryInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type CategoryCreateNestedOneWithoutProductInput = {
    create?: XOR<CategoryCreateWithoutProductInput, CategoryUncheckedCreateWithoutProductInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProductInput
    connect?: CategoryWhereUniqueInput
  }

  export type SupplierCreateNestedOneWithoutProductInput = {
    create?: XOR<SupplierCreateWithoutProductInput, SupplierUncheckedCreateWithoutProductInput>
    connectOrCreate?: SupplierCreateOrConnectWithoutProductInput
    connect?: SupplierWhereUniqueInput
  }

  export type CartsCreateNestedManyWithoutProductInput = {
    create?: XOR<CartsCreateWithoutProductInput, CartsUncheckedCreateWithoutProductInput> | CartsCreateWithoutProductInput[] | CartsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: CartsCreateOrConnectWithoutProductInput | CartsCreateOrConnectWithoutProductInput[]
    createMany?: CartsCreateManyProductInputEnvelope
    connect?: CartsWhereUniqueInput | CartsWhereUniqueInput[]
  }

  export type OrderdetailCreateNestedManyWithoutProductInput = {
    create?: XOR<OrderdetailCreateWithoutProductInput, OrderdetailUncheckedCreateWithoutProductInput> | OrderdetailCreateWithoutProductInput[] | OrderdetailUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderdetailCreateOrConnectWithoutProductInput | OrderdetailCreateOrConnectWithoutProductInput[]
    createMany?: OrderdetailCreateManyProductInputEnvelope
    connect?: OrderdetailWhereUniqueInput | OrderdetailWhereUniqueInput[]
  }

  export type OrderreturndetailCreateNestedManyWithoutProductInput = {
    create?: XOR<OrderreturndetailCreateWithoutProductInput, OrderreturndetailUncheckedCreateWithoutProductInput> | OrderreturndetailCreateWithoutProductInput[] | OrderreturndetailUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderreturndetailCreateOrConnectWithoutProductInput | OrderreturndetailCreateOrConnectWithoutProductInput[]
    createMany?: OrderreturndetailCreateManyProductInputEnvelope
    connect?: OrderreturndetailWhereUniqueInput | OrderreturndetailWhereUniqueInput[]
  }

  export type PurchasedetailCreateNestedManyWithoutProductInput = {
    create?: XOR<PurchasedetailCreateWithoutProductInput, PurchasedetailUncheckedCreateWithoutProductInput> | PurchasedetailCreateWithoutProductInput[] | PurchasedetailUncheckedCreateWithoutProductInput[]
    connectOrCreate?: PurchasedetailCreateOrConnectWithoutProductInput | PurchasedetailCreateOrConnectWithoutProductInput[]
    createMany?: PurchasedetailCreateManyProductInputEnvelope
    connect?: PurchasedetailWhereUniqueInput | PurchasedetailWhereUniqueInput[]
  }

  export type CartsUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<CartsCreateWithoutProductInput, CartsUncheckedCreateWithoutProductInput> | CartsCreateWithoutProductInput[] | CartsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: CartsCreateOrConnectWithoutProductInput | CartsCreateOrConnectWithoutProductInput[]
    createMany?: CartsCreateManyProductInputEnvelope
    connect?: CartsWhereUniqueInput | CartsWhereUniqueInput[]
  }

  export type OrderdetailUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<OrderdetailCreateWithoutProductInput, OrderdetailUncheckedCreateWithoutProductInput> | OrderdetailCreateWithoutProductInput[] | OrderdetailUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderdetailCreateOrConnectWithoutProductInput | OrderdetailCreateOrConnectWithoutProductInput[]
    createMany?: OrderdetailCreateManyProductInputEnvelope
    connect?: OrderdetailWhereUniqueInput | OrderdetailWhereUniqueInput[]
  }

  export type OrderreturndetailUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<OrderreturndetailCreateWithoutProductInput, OrderreturndetailUncheckedCreateWithoutProductInput> | OrderreturndetailCreateWithoutProductInput[] | OrderreturndetailUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderreturndetailCreateOrConnectWithoutProductInput | OrderreturndetailCreateOrConnectWithoutProductInput[]
    createMany?: OrderreturndetailCreateManyProductInputEnvelope
    connect?: OrderreturndetailWhereUniqueInput | OrderreturndetailWhereUniqueInput[]
  }

  export type PurchasedetailUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<PurchasedetailCreateWithoutProductInput, PurchasedetailUncheckedCreateWithoutProductInput> | PurchasedetailCreateWithoutProductInput[] | PurchasedetailUncheckedCreateWithoutProductInput[]
    connectOrCreate?: PurchasedetailCreateOrConnectWithoutProductInput | PurchasedetailCreateOrConnectWithoutProductInput[]
    createMany?: PurchasedetailCreateManyProductInputEnvelope
    connect?: PurchasedetailWhereUniqueInput | PurchasedetailWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CategoryUpdateOneRequiredWithoutProductNestedInput = {
    create?: XOR<CategoryCreateWithoutProductInput, CategoryUncheckedCreateWithoutProductInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProductInput
    upsert?: CategoryUpsertWithoutProductInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutProductInput, CategoryUpdateWithoutProductInput>, CategoryUncheckedUpdateWithoutProductInput>
  }

  export type SupplierUpdateOneRequiredWithoutProductNestedInput = {
    create?: XOR<SupplierCreateWithoutProductInput, SupplierUncheckedCreateWithoutProductInput>
    connectOrCreate?: SupplierCreateOrConnectWithoutProductInput
    upsert?: SupplierUpsertWithoutProductInput
    connect?: SupplierWhereUniqueInput
    update?: XOR<XOR<SupplierUpdateToOneWithWhereWithoutProductInput, SupplierUpdateWithoutProductInput>, SupplierUncheckedUpdateWithoutProductInput>
  }

  export type CartsUpdateManyWithoutProductNestedInput = {
    create?: XOR<CartsCreateWithoutProductInput, CartsUncheckedCreateWithoutProductInput> | CartsCreateWithoutProductInput[] | CartsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: CartsCreateOrConnectWithoutProductInput | CartsCreateOrConnectWithoutProductInput[]
    upsert?: CartsUpsertWithWhereUniqueWithoutProductInput | CartsUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: CartsCreateManyProductInputEnvelope
    set?: CartsWhereUniqueInput | CartsWhereUniqueInput[]
    disconnect?: CartsWhereUniqueInput | CartsWhereUniqueInput[]
    delete?: CartsWhereUniqueInput | CartsWhereUniqueInput[]
    connect?: CartsWhereUniqueInput | CartsWhereUniqueInput[]
    update?: CartsUpdateWithWhereUniqueWithoutProductInput | CartsUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: CartsUpdateManyWithWhereWithoutProductInput | CartsUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: CartsScalarWhereInput | CartsScalarWhereInput[]
  }

  export type OrderdetailUpdateManyWithoutProductNestedInput = {
    create?: XOR<OrderdetailCreateWithoutProductInput, OrderdetailUncheckedCreateWithoutProductInput> | OrderdetailCreateWithoutProductInput[] | OrderdetailUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderdetailCreateOrConnectWithoutProductInput | OrderdetailCreateOrConnectWithoutProductInput[]
    upsert?: OrderdetailUpsertWithWhereUniqueWithoutProductInput | OrderdetailUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: OrderdetailCreateManyProductInputEnvelope
    set?: OrderdetailWhereUniqueInput | OrderdetailWhereUniqueInput[]
    disconnect?: OrderdetailWhereUniqueInput | OrderdetailWhereUniqueInput[]
    delete?: OrderdetailWhereUniqueInput | OrderdetailWhereUniqueInput[]
    connect?: OrderdetailWhereUniqueInput | OrderdetailWhereUniqueInput[]
    update?: OrderdetailUpdateWithWhereUniqueWithoutProductInput | OrderdetailUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: OrderdetailUpdateManyWithWhereWithoutProductInput | OrderdetailUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: OrderdetailScalarWhereInput | OrderdetailScalarWhereInput[]
  }

  export type OrderreturndetailUpdateManyWithoutProductNestedInput = {
    create?: XOR<OrderreturndetailCreateWithoutProductInput, OrderreturndetailUncheckedCreateWithoutProductInput> | OrderreturndetailCreateWithoutProductInput[] | OrderreturndetailUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderreturndetailCreateOrConnectWithoutProductInput | OrderreturndetailCreateOrConnectWithoutProductInput[]
    upsert?: OrderreturndetailUpsertWithWhereUniqueWithoutProductInput | OrderreturndetailUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: OrderreturndetailCreateManyProductInputEnvelope
    set?: OrderreturndetailWhereUniqueInput | OrderreturndetailWhereUniqueInput[]
    disconnect?: OrderreturndetailWhereUniqueInput | OrderreturndetailWhereUniqueInput[]
    delete?: OrderreturndetailWhereUniqueInput | OrderreturndetailWhereUniqueInput[]
    connect?: OrderreturndetailWhereUniqueInput | OrderreturndetailWhereUniqueInput[]
    update?: OrderreturndetailUpdateWithWhereUniqueWithoutProductInput | OrderreturndetailUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: OrderreturndetailUpdateManyWithWhereWithoutProductInput | OrderreturndetailUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: OrderreturndetailScalarWhereInput | OrderreturndetailScalarWhereInput[]
  }

  export type PurchasedetailUpdateManyWithoutProductNestedInput = {
    create?: XOR<PurchasedetailCreateWithoutProductInput, PurchasedetailUncheckedCreateWithoutProductInput> | PurchasedetailCreateWithoutProductInput[] | PurchasedetailUncheckedCreateWithoutProductInput[]
    connectOrCreate?: PurchasedetailCreateOrConnectWithoutProductInput | PurchasedetailCreateOrConnectWithoutProductInput[]
    upsert?: PurchasedetailUpsertWithWhereUniqueWithoutProductInput | PurchasedetailUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: PurchasedetailCreateManyProductInputEnvelope
    set?: PurchasedetailWhereUniqueInput | PurchasedetailWhereUniqueInput[]
    disconnect?: PurchasedetailWhereUniqueInput | PurchasedetailWhereUniqueInput[]
    delete?: PurchasedetailWhereUniqueInput | PurchasedetailWhereUniqueInput[]
    connect?: PurchasedetailWhereUniqueInput | PurchasedetailWhereUniqueInput[]
    update?: PurchasedetailUpdateWithWhereUniqueWithoutProductInput | PurchasedetailUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: PurchasedetailUpdateManyWithWhereWithoutProductInput | PurchasedetailUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: PurchasedetailScalarWhereInput | PurchasedetailScalarWhereInput[]
  }

  export type CartsUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<CartsCreateWithoutProductInput, CartsUncheckedCreateWithoutProductInput> | CartsCreateWithoutProductInput[] | CartsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: CartsCreateOrConnectWithoutProductInput | CartsCreateOrConnectWithoutProductInput[]
    upsert?: CartsUpsertWithWhereUniqueWithoutProductInput | CartsUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: CartsCreateManyProductInputEnvelope
    set?: CartsWhereUniqueInput | CartsWhereUniqueInput[]
    disconnect?: CartsWhereUniqueInput | CartsWhereUniqueInput[]
    delete?: CartsWhereUniqueInput | CartsWhereUniqueInput[]
    connect?: CartsWhereUniqueInput | CartsWhereUniqueInput[]
    update?: CartsUpdateWithWhereUniqueWithoutProductInput | CartsUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: CartsUpdateManyWithWhereWithoutProductInput | CartsUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: CartsScalarWhereInput | CartsScalarWhereInput[]
  }

  export type OrderdetailUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<OrderdetailCreateWithoutProductInput, OrderdetailUncheckedCreateWithoutProductInput> | OrderdetailCreateWithoutProductInput[] | OrderdetailUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderdetailCreateOrConnectWithoutProductInput | OrderdetailCreateOrConnectWithoutProductInput[]
    upsert?: OrderdetailUpsertWithWhereUniqueWithoutProductInput | OrderdetailUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: OrderdetailCreateManyProductInputEnvelope
    set?: OrderdetailWhereUniqueInput | OrderdetailWhereUniqueInput[]
    disconnect?: OrderdetailWhereUniqueInput | OrderdetailWhereUniqueInput[]
    delete?: OrderdetailWhereUniqueInput | OrderdetailWhereUniqueInput[]
    connect?: OrderdetailWhereUniqueInput | OrderdetailWhereUniqueInput[]
    update?: OrderdetailUpdateWithWhereUniqueWithoutProductInput | OrderdetailUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: OrderdetailUpdateManyWithWhereWithoutProductInput | OrderdetailUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: OrderdetailScalarWhereInput | OrderdetailScalarWhereInput[]
  }

  export type OrderreturndetailUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<OrderreturndetailCreateWithoutProductInput, OrderreturndetailUncheckedCreateWithoutProductInput> | OrderreturndetailCreateWithoutProductInput[] | OrderreturndetailUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderreturndetailCreateOrConnectWithoutProductInput | OrderreturndetailCreateOrConnectWithoutProductInput[]
    upsert?: OrderreturndetailUpsertWithWhereUniqueWithoutProductInput | OrderreturndetailUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: OrderreturndetailCreateManyProductInputEnvelope
    set?: OrderreturndetailWhereUniqueInput | OrderreturndetailWhereUniqueInput[]
    disconnect?: OrderreturndetailWhereUniqueInput | OrderreturndetailWhereUniqueInput[]
    delete?: OrderreturndetailWhereUniqueInput | OrderreturndetailWhereUniqueInput[]
    connect?: OrderreturndetailWhereUniqueInput | OrderreturndetailWhereUniqueInput[]
    update?: OrderreturndetailUpdateWithWhereUniqueWithoutProductInput | OrderreturndetailUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: OrderreturndetailUpdateManyWithWhereWithoutProductInput | OrderreturndetailUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: OrderreturndetailScalarWhereInput | OrderreturndetailScalarWhereInput[]
  }

  export type PurchasedetailUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<PurchasedetailCreateWithoutProductInput, PurchasedetailUncheckedCreateWithoutProductInput> | PurchasedetailCreateWithoutProductInput[] | PurchasedetailUncheckedCreateWithoutProductInput[]
    connectOrCreate?: PurchasedetailCreateOrConnectWithoutProductInput | PurchasedetailCreateOrConnectWithoutProductInput[]
    upsert?: PurchasedetailUpsertWithWhereUniqueWithoutProductInput | PurchasedetailUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: PurchasedetailCreateManyProductInputEnvelope
    set?: PurchasedetailWhereUniqueInput | PurchasedetailWhereUniqueInput[]
    disconnect?: PurchasedetailWhereUniqueInput | PurchasedetailWhereUniqueInput[]
    delete?: PurchasedetailWhereUniqueInput | PurchasedetailWhereUniqueInput[]
    connect?: PurchasedetailWhereUniqueInput | PurchasedetailWhereUniqueInput[]
    update?: PurchasedetailUpdateWithWhereUniqueWithoutProductInput | PurchasedetailUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: PurchasedetailUpdateManyWithWhereWithoutProductInput | PurchasedetailUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: PurchasedetailScalarWhereInput | PurchasedetailScalarWhereInput[]
  }

  export type ProductCreateNestedManyWithoutSupplierInput = {
    create?: XOR<ProductCreateWithoutSupplierInput, ProductUncheckedCreateWithoutSupplierInput> | ProductCreateWithoutSupplierInput[] | ProductUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutSupplierInput | ProductCreateOrConnectWithoutSupplierInput[]
    createMany?: ProductCreateManySupplierInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutSupplierInput = {
    create?: XOR<ProductCreateWithoutSupplierInput, ProductUncheckedCreateWithoutSupplierInput> | ProductCreateWithoutSupplierInput[] | ProductUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutSupplierInput | ProductCreateOrConnectWithoutSupplierInput[]
    createMany?: ProductCreateManySupplierInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUpdateManyWithoutSupplierNestedInput = {
    create?: XOR<ProductCreateWithoutSupplierInput, ProductUncheckedCreateWithoutSupplierInput> | ProductCreateWithoutSupplierInput[] | ProductUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutSupplierInput | ProductCreateOrConnectWithoutSupplierInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutSupplierInput | ProductUpsertWithWhereUniqueWithoutSupplierInput[]
    createMany?: ProductCreateManySupplierInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutSupplierInput | ProductUpdateWithWhereUniqueWithoutSupplierInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutSupplierInput | ProductUpdateManyWithWhereWithoutSupplierInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutSupplierNestedInput = {
    create?: XOR<ProductCreateWithoutSupplierInput, ProductUncheckedCreateWithoutSupplierInput> | ProductCreateWithoutSupplierInput[] | ProductUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutSupplierInput | ProductCreateOrConnectWithoutSupplierInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutSupplierInput | ProductUpsertWithWhereUniqueWithoutSupplierInput[]
    createMany?: ProductCreateManySupplierInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutSupplierInput | ProductUpdateWithWhereUniqueWithoutSupplierInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutSupplierInput | ProductUpdateManyWithWhereWithoutSupplierInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCartsInput = {
    create?: XOR<UserCreateWithoutCartsInput, UserUncheckedCreateWithoutCartsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCartsInput
    connect?: UserWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutCartsInput = {
    create?: XOR<ProductCreateWithoutCartsInput, ProductUncheckedCreateWithoutCartsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutCartsInput
    connect?: ProductWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutCartsNestedInput = {
    create?: XOR<UserCreateWithoutCartsInput, UserUncheckedCreateWithoutCartsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCartsInput
    upsert?: UserUpsertWithoutCartsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCartsInput, UserUpdateWithoutCartsInput>, UserUncheckedUpdateWithoutCartsInput>
  }

  export type ProductUpdateOneRequiredWithoutCartsNestedInput = {
    create?: XOR<ProductCreateWithoutCartsInput, ProductUncheckedCreateWithoutCartsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutCartsInput
    upsert?: ProductUpsertWithoutCartsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutCartsInput, ProductUpdateWithoutCartsInput>, ProductUncheckedUpdateWithoutCartsInput>
  }

  export type UserCreateNestedOneWithoutOrdersInput = {
    create?: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput
    connect?: UserWhereUniqueInput
  }

  export type OrderdetailCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderdetailCreateWithoutOrderInput, OrderdetailUncheckedCreateWithoutOrderInput> | OrderdetailCreateWithoutOrderInput[] | OrderdetailUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderdetailCreateOrConnectWithoutOrderInput | OrderdetailCreateOrConnectWithoutOrderInput[]
    createMany?: OrderdetailCreateManyOrderInputEnvelope
    connect?: OrderdetailWhereUniqueInput | OrderdetailWhereUniqueInput[]
  }

  export type OrderreturnCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderreturnCreateWithoutOrderInput, OrderreturnUncheckedCreateWithoutOrderInput> | OrderreturnCreateWithoutOrderInput[] | OrderreturnUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderreturnCreateOrConnectWithoutOrderInput | OrderreturnCreateOrConnectWithoutOrderInput[]
    createMany?: OrderreturnCreateManyOrderInputEnvelope
    connect?: OrderreturnWhereUniqueInput | OrderreturnWhereUniqueInput[]
  }

  export type OrderdetailUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderdetailCreateWithoutOrderInput, OrderdetailUncheckedCreateWithoutOrderInput> | OrderdetailCreateWithoutOrderInput[] | OrderdetailUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderdetailCreateOrConnectWithoutOrderInput | OrderdetailCreateOrConnectWithoutOrderInput[]
    createMany?: OrderdetailCreateManyOrderInputEnvelope
    connect?: OrderdetailWhereUniqueInput | OrderdetailWhereUniqueInput[]
  }

  export type OrderreturnUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderreturnCreateWithoutOrderInput, OrderreturnUncheckedCreateWithoutOrderInput> | OrderreturnCreateWithoutOrderInput[] | OrderreturnUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderreturnCreateOrConnectWithoutOrderInput | OrderreturnCreateOrConnectWithoutOrderInput[]
    createMany?: OrderreturnCreateManyOrderInputEnvelope
    connect?: OrderreturnWhereUniqueInput | OrderreturnWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput
    upsert?: UserUpsertWithoutOrdersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOrdersInput, UserUpdateWithoutOrdersInput>, UserUncheckedUpdateWithoutOrdersInput>
  }

  export type OrderdetailUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderdetailCreateWithoutOrderInput, OrderdetailUncheckedCreateWithoutOrderInput> | OrderdetailCreateWithoutOrderInput[] | OrderdetailUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderdetailCreateOrConnectWithoutOrderInput | OrderdetailCreateOrConnectWithoutOrderInput[]
    upsert?: OrderdetailUpsertWithWhereUniqueWithoutOrderInput | OrderdetailUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderdetailCreateManyOrderInputEnvelope
    set?: OrderdetailWhereUniqueInput | OrderdetailWhereUniqueInput[]
    disconnect?: OrderdetailWhereUniqueInput | OrderdetailWhereUniqueInput[]
    delete?: OrderdetailWhereUniqueInput | OrderdetailWhereUniqueInput[]
    connect?: OrderdetailWhereUniqueInput | OrderdetailWhereUniqueInput[]
    update?: OrderdetailUpdateWithWhereUniqueWithoutOrderInput | OrderdetailUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderdetailUpdateManyWithWhereWithoutOrderInput | OrderdetailUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderdetailScalarWhereInput | OrderdetailScalarWhereInput[]
  }

  export type OrderreturnUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderreturnCreateWithoutOrderInput, OrderreturnUncheckedCreateWithoutOrderInput> | OrderreturnCreateWithoutOrderInput[] | OrderreturnUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderreturnCreateOrConnectWithoutOrderInput | OrderreturnCreateOrConnectWithoutOrderInput[]
    upsert?: OrderreturnUpsertWithWhereUniqueWithoutOrderInput | OrderreturnUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderreturnCreateManyOrderInputEnvelope
    set?: OrderreturnWhereUniqueInput | OrderreturnWhereUniqueInput[]
    disconnect?: OrderreturnWhereUniqueInput | OrderreturnWhereUniqueInput[]
    delete?: OrderreturnWhereUniqueInput | OrderreturnWhereUniqueInput[]
    connect?: OrderreturnWhereUniqueInput | OrderreturnWhereUniqueInput[]
    update?: OrderreturnUpdateWithWhereUniqueWithoutOrderInput | OrderreturnUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderreturnUpdateManyWithWhereWithoutOrderInput | OrderreturnUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderreturnScalarWhereInput | OrderreturnScalarWhereInput[]
  }

  export type OrderdetailUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderdetailCreateWithoutOrderInput, OrderdetailUncheckedCreateWithoutOrderInput> | OrderdetailCreateWithoutOrderInput[] | OrderdetailUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderdetailCreateOrConnectWithoutOrderInput | OrderdetailCreateOrConnectWithoutOrderInput[]
    upsert?: OrderdetailUpsertWithWhereUniqueWithoutOrderInput | OrderdetailUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderdetailCreateManyOrderInputEnvelope
    set?: OrderdetailWhereUniqueInput | OrderdetailWhereUniqueInput[]
    disconnect?: OrderdetailWhereUniqueInput | OrderdetailWhereUniqueInput[]
    delete?: OrderdetailWhereUniqueInput | OrderdetailWhereUniqueInput[]
    connect?: OrderdetailWhereUniqueInput | OrderdetailWhereUniqueInput[]
    update?: OrderdetailUpdateWithWhereUniqueWithoutOrderInput | OrderdetailUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderdetailUpdateManyWithWhereWithoutOrderInput | OrderdetailUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderdetailScalarWhereInput | OrderdetailScalarWhereInput[]
  }

  export type OrderreturnUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderreturnCreateWithoutOrderInput, OrderreturnUncheckedCreateWithoutOrderInput> | OrderreturnCreateWithoutOrderInput[] | OrderreturnUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderreturnCreateOrConnectWithoutOrderInput | OrderreturnCreateOrConnectWithoutOrderInput[]
    upsert?: OrderreturnUpsertWithWhereUniqueWithoutOrderInput | OrderreturnUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderreturnCreateManyOrderInputEnvelope
    set?: OrderreturnWhereUniqueInput | OrderreturnWhereUniqueInput[]
    disconnect?: OrderreturnWhereUniqueInput | OrderreturnWhereUniqueInput[]
    delete?: OrderreturnWhereUniqueInput | OrderreturnWhereUniqueInput[]
    connect?: OrderreturnWhereUniqueInput | OrderreturnWhereUniqueInput[]
    update?: OrderreturnUpdateWithWhereUniqueWithoutOrderInput | OrderreturnUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderreturnUpdateManyWithWhereWithoutOrderInput | OrderreturnUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderreturnScalarWhereInput | OrderreturnScalarWhereInput[]
  }

  export type OrdersCreateNestedOneWithoutOrderdetailInput = {
    create?: XOR<OrdersCreateWithoutOrderdetailInput, OrdersUncheckedCreateWithoutOrderdetailInput>
    connectOrCreate?: OrdersCreateOrConnectWithoutOrderdetailInput
    connect?: OrdersWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutOrderdetailInput = {
    create?: XOR<ProductCreateWithoutOrderdetailInput, ProductUncheckedCreateWithoutOrderdetailInput>
    connectOrCreate?: ProductCreateOrConnectWithoutOrderdetailInput
    connect?: ProductWhereUniqueInput
  }

  export type OrdersUpdateOneRequiredWithoutOrderdetailNestedInput = {
    create?: XOR<OrdersCreateWithoutOrderdetailInput, OrdersUncheckedCreateWithoutOrderdetailInput>
    connectOrCreate?: OrdersCreateOrConnectWithoutOrderdetailInput
    upsert?: OrdersUpsertWithoutOrderdetailInput
    connect?: OrdersWhereUniqueInput
    update?: XOR<XOR<OrdersUpdateToOneWithWhereWithoutOrderdetailInput, OrdersUpdateWithoutOrderdetailInput>, OrdersUncheckedUpdateWithoutOrderdetailInput>
  }

  export type ProductUpdateOneRequiredWithoutOrderdetailNestedInput = {
    create?: XOR<ProductCreateWithoutOrderdetailInput, ProductUncheckedCreateWithoutOrderdetailInput>
    connectOrCreate?: ProductCreateOrConnectWithoutOrderdetailInput
    upsert?: ProductUpsertWithoutOrderdetailInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutOrderdetailInput, ProductUpdateWithoutOrderdetailInput>, ProductUncheckedUpdateWithoutOrderdetailInput>
  }

  export type CartsCreateNestedManyWithoutUserInput = {
    create?: XOR<CartsCreateWithoutUserInput, CartsUncheckedCreateWithoutUserInput> | CartsCreateWithoutUserInput[] | CartsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CartsCreateOrConnectWithoutUserInput | CartsCreateOrConnectWithoutUserInput[]
    createMany?: CartsCreateManyUserInputEnvelope
    connect?: CartsWhereUniqueInput | CartsWhereUniqueInput[]
  }

  export type OrdersCreateNestedManyWithoutUserInput = {
    create?: XOR<OrdersCreateWithoutUserInput, OrdersUncheckedCreateWithoutUserInput> | OrdersCreateWithoutUserInput[] | OrdersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutUserInput | OrdersCreateOrConnectWithoutUserInput[]
    createMany?: OrdersCreateManyUserInputEnvelope
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
  }

  export type OrderreturnCreateNestedManyWithoutUserInput = {
    create?: XOR<OrderreturnCreateWithoutUserInput, OrderreturnUncheckedCreateWithoutUserInput> | OrderreturnCreateWithoutUserInput[] | OrderreturnUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderreturnCreateOrConnectWithoutUserInput | OrderreturnCreateOrConnectWithoutUserInput[]
    createMany?: OrderreturnCreateManyUserInputEnvelope
    connect?: OrderreturnWhereUniqueInput | OrderreturnWhereUniqueInput[]
  }

  export type PurchaseCreateNestedManyWithoutUserInput = {
    create?: XOR<PurchaseCreateWithoutUserInput, PurchaseUncheckedCreateWithoutUserInput> | PurchaseCreateWithoutUserInput[] | PurchaseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PurchaseCreateOrConnectWithoutUserInput | PurchaseCreateOrConnectWithoutUserInput[]
    createMany?: PurchaseCreateManyUserInputEnvelope
    connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
  }

  export type CartsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CartsCreateWithoutUserInput, CartsUncheckedCreateWithoutUserInput> | CartsCreateWithoutUserInput[] | CartsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CartsCreateOrConnectWithoutUserInput | CartsCreateOrConnectWithoutUserInput[]
    createMany?: CartsCreateManyUserInputEnvelope
    connect?: CartsWhereUniqueInput | CartsWhereUniqueInput[]
  }

  export type OrdersUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OrdersCreateWithoutUserInput, OrdersUncheckedCreateWithoutUserInput> | OrdersCreateWithoutUserInput[] | OrdersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutUserInput | OrdersCreateOrConnectWithoutUserInput[]
    createMany?: OrdersCreateManyUserInputEnvelope
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
  }

  export type OrderreturnUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OrderreturnCreateWithoutUserInput, OrderreturnUncheckedCreateWithoutUserInput> | OrderreturnCreateWithoutUserInput[] | OrderreturnUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderreturnCreateOrConnectWithoutUserInput | OrderreturnCreateOrConnectWithoutUserInput[]
    createMany?: OrderreturnCreateManyUserInputEnvelope
    connect?: OrderreturnWhereUniqueInput | OrderreturnWhereUniqueInput[]
  }

  export type PurchaseUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PurchaseCreateWithoutUserInput, PurchaseUncheckedCreateWithoutUserInput> | PurchaseCreateWithoutUserInput[] | PurchaseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PurchaseCreateOrConnectWithoutUserInput | PurchaseCreateOrConnectWithoutUserInput[]
    createMany?: PurchaseCreateManyUserInputEnvelope
    connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
  }

  export type CartsUpdateManyWithoutUserNestedInput = {
    create?: XOR<CartsCreateWithoutUserInput, CartsUncheckedCreateWithoutUserInput> | CartsCreateWithoutUserInput[] | CartsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CartsCreateOrConnectWithoutUserInput | CartsCreateOrConnectWithoutUserInput[]
    upsert?: CartsUpsertWithWhereUniqueWithoutUserInput | CartsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CartsCreateManyUserInputEnvelope
    set?: CartsWhereUniqueInput | CartsWhereUniqueInput[]
    disconnect?: CartsWhereUniqueInput | CartsWhereUniqueInput[]
    delete?: CartsWhereUniqueInput | CartsWhereUniqueInput[]
    connect?: CartsWhereUniqueInput | CartsWhereUniqueInput[]
    update?: CartsUpdateWithWhereUniqueWithoutUserInput | CartsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CartsUpdateManyWithWhereWithoutUserInput | CartsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CartsScalarWhereInput | CartsScalarWhereInput[]
  }

  export type OrdersUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrdersCreateWithoutUserInput, OrdersUncheckedCreateWithoutUserInput> | OrdersCreateWithoutUserInput[] | OrdersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutUserInput | OrdersCreateOrConnectWithoutUserInput[]
    upsert?: OrdersUpsertWithWhereUniqueWithoutUserInput | OrdersUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrdersCreateManyUserInputEnvelope
    set?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    disconnect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    delete?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    update?: OrdersUpdateWithWhereUniqueWithoutUserInput | OrdersUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrdersUpdateManyWithWhereWithoutUserInput | OrdersUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
  }

  export type OrderreturnUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrderreturnCreateWithoutUserInput, OrderreturnUncheckedCreateWithoutUserInput> | OrderreturnCreateWithoutUserInput[] | OrderreturnUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderreturnCreateOrConnectWithoutUserInput | OrderreturnCreateOrConnectWithoutUserInput[]
    upsert?: OrderreturnUpsertWithWhereUniqueWithoutUserInput | OrderreturnUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrderreturnCreateManyUserInputEnvelope
    set?: OrderreturnWhereUniqueInput | OrderreturnWhereUniqueInput[]
    disconnect?: OrderreturnWhereUniqueInput | OrderreturnWhereUniqueInput[]
    delete?: OrderreturnWhereUniqueInput | OrderreturnWhereUniqueInput[]
    connect?: OrderreturnWhereUniqueInput | OrderreturnWhereUniqueInput[]
    update?: OrderreturnUpdateWithWhereUniqueWithoutUserInput | OrderreturnUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrderreturnUpdateManyWithWhereWithoutUserInput | OrderreturnUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrderreturnScalarWhereInput | OrderreturnScalarWhereInput[]
  }

  export type PurchaseUpdateManyWithoutUserNestedInput = {
    create?: XOR<PurchaseCreateWithoutUserInput, PurchaseUncheckedCreateWithoutUserInput> | PurchaseCreateWithoutUserInput[] | PurchaseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PurchaseCreateOrConnectWithoutUserInput | PurchaseCreateOrConnectWithoutUserInput[]
    upsert?: PurchaseUpsertWithWhereUniqueWithoutUserInput | PurchaseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PurchaseCreateManyUserInputEnvelope
    set?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    disconnect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    delete?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    update?: PurchaseUpdateWithWhereUniqueWithoutUserInput | PurchaseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PurchaseUpdateManyWithWhereWithoutUserInput | PurchaseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PurchaseScalarWhereInput | PurchaseScalarWhereInput[]
  }

  export type CartsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CartsCreateWithoutUserInput, CartsUncheckedCreateWithoutUserInput> | CartsCreateWithoutUserInput[] | CartsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CartsCreateOrConnectWithoutUserInput | CartsCreateOrConnectWithoutUserInput[]
    upsert?: CartsUpsertWithWhereUniqueWithoutUserInput | CartsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CartsCreateManyUserInputEnvelope
    set?: CartsWhereUniqueInput | CartsWhereUniqueInput[]
    disconnect?: CartsWhereUniqueInput | CartsWhereUniqueInput[]
    delete?: CartsWhereUniqueInput | CartsWhereUniqueInput[]
    connect?: CartsWhereUniqueInput | CartsWhereUniqueInput[]
    update?: CartsUpdateWithWhereUniqueWithoutUserInput | CartsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CartsUpdateManyWithWhereWithoutUserInput | CartsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CartsScalarWhereInput | CartsScalarWhereInput[]
  }

  export type OrdersUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrdersCreateWithoutUserInput, OrdersUncheckedCreateWithoutUserInput> | OrdersCreateWithoutUserInput[] | OrdersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutUserInput | OrdersCreateOrConnectWithoutUserInput[]
    upsert?: OrdersUpsertWithWhereUniqueWithoutUserInput | OrdersUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrdersCreateManyUserInputEnvelope
    set?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    disconnect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    delete?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    update?: OrdersUpdateWithWhereUniqueWithoutUserInput | OrdersUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrdersUpdateManyWithWhereWithoutUserInput | OrdersUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
  }

  export type OrderreturnUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrderreturnCreateWithoutUserInput, OrderreturnUncheckedCreateWithoutUserInput> | OrderreturnCreateWithoutUserInput[] | OrderreturnUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderreturnCreateOrConnectWithoutUserInput | OrderreturnCreateOrConnectWithoutUserInput[]
    upsert?: OrderreturnUpsertWithWhereUniqueWithoutUserInput | OrderreturnUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrderreturnCreateManyUserInputEnvelope
    set?: OrderreturnWhereUniqueInput | OrderreturnWhereUniqueInput[]
    disconnect?: OrderreturnWhereUniqueInput | OrderreturnWhereUniqueInput[]
    delete?: OrderreturnWhereUniqueInput | OrderreturnWhereUniqueInput[]
    connect?: OrderreturnWhereUniqueInput | OrderreturnWhereUniqueInput[]
    update?: OrderreturnUpdateWithWhereUniqueWithoutUserInput | OrderreturnUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrderreturnUpdateManyWithWhereWithoutUserInput | OrderreturnUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrderreturnScalarWhereInput | OrderreturnScalarWhereInput[]
  }

  export type PurchaseUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PurchaseCreateWithoutUserInput, PurchaseUncheckedCreateWithoutUserInput> | PurchaseCreateWithoutUserInput[] | PurchaseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PurchaseCreateOrConnectWithoutUserInput | PurchaseCreateOrConnectWithoutUserInput[]
    upsert?: PurchaseUpsertWithWhereUniqueWithoutUserInput | PurchaseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PurchaseCreateManyUserInputEnvelope
    set?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    disconnect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    delete?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    update?: PurchaseUpdateWithWhereUniqueWithoutUserInput | PurchaseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PurchaseUpdateManyWithWhereWithoutUserInput | PurchaseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PurchaseScalarWhereInput | PurchaseScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutOrderreturnInput = {
    create?: XOR<UserCreateWithoutOrderreturnInput, UserUncheckedCreateWithoutOrderreturnInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrderreturnInput
    connect?: UserWhereUniqueInput
  }

  export type OrdersCreateNestedOneWithoutOrderreturnInput = {
    create?: XOR<OrdersCreateWithoutOrderreturnInput, OrdersUncheckedCreateWithoutOrderreturnInput>
    connectOrCreate?: OrdersCreateOrConnectWithoutOrderreturnInput
    connect?: OrdersWhereUniqueInput
  }

  export type OrderreturndetailCreateNestedManyWithoutOrderreturnInput = {
    create?: XOR<OrderreturndetailCreateWithoutOrderreturnInput, OrderreturndetailUncheckedCreateWithoutOrderreturnInput> | OrderreturndetailCreateWithoutOrderreturnInput[] | OrderreturndetailUncheckedCreateWithoutOrderreturnInput[]
    connectOrCreate?: OrderreturndetailCreateOrConnectWithoutOrderreturnInput | OrderreturndetailCreateOrConnectWithoutOrderreturnInput[]
    createMany?: OrderreturndetailCreateManyOrderreturnInputEnvelope
    connect?: OrderreturndetailWhereUniqueInput | OrderreturndetailWhereUniqueInput[]
  }

  export type OrderreturndetailUncheckedCreateNestedManyWithoutOrderreturnInput = {
    create?: XOR<OrderreturndetailCreateWithoutOrderreturnInput, OrderreturndetailUncheckedCreateWithoutOrderreturnInput> | OrderreturndetailCreateWithoutOrderreturnInput[] | OrderreturndetailUncheckedCreateWithoutOrderreturnInput[]
    connectOrCreate?: OrderreturndetailCreateOrConnectWithoutOrderreturnInput | OrderreturndetailCreateOrConnectWithoutOrderreturnInput[]
    createMany?: OrderreturndetailCreateManyOrderreturnInputEnvelope
    connect?: OrderreturndetailWhereUniqueInput | OrderreturndetailWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutOrderreturnNestedInput = {
    create?: XOR<UserCreateWithoutOrderreturnInput, UserUncheckedCreateWithoutOrderreturnInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrderreturnInput
    upsert?: UserUpsertWithoutOrderreturnInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOrderreturnInput, UserUpdateWithoutOrderreturnInput>, UserUncheckedUpdateWithoutOrderreturnInput>
  }

  export type OrdersUpdateOneRequiredWithoutOrderreturnNestedInput = {
    create?: XOR<OrdersCreateWithoutOrderreturnInput, OrdersUncheckedCreateWithoutOrderreturnInput>
    connectOrCreate?: OrdersCreateOrConnectWithoutOrderreturnInput
    upsert?: OrdersUpsertWithoutOrderreturnInput
    connect?: OrdersWhereUniqueInput
    update?: XOR<XOR<OrdersUpdateToOneWithWhereWithoutOrderreturnInput, OrdersUpdateWithoutOrderreturnInput>, OrdersUncheckedUpdateWithoutOrderreturnInput>
  }

  export type OrderreturndetailUpdateManyWithoutOrderreturnNestedInput = {
    create?: XOR<OrderreturndetailCreateWithoutOrderreturnInput, OrderreturndetailUncheckedCreateWithoutOrderreturnInput> | OrderreturndetailCreateWithoutOrderreturnInput[] | OrderreturndetailUncheckedCreateWithoutOrderreturnInput[]
    connectOrCreate?: OrderreturndetailCreateOrConnectWithoutOrderreturnInput | OrderreturndetailCreateOrConnectWithoutOrderreturnInput[]
    upsert?: OrderreturndetailUpsertWithWhereUniqueWithoutOrderreturnInput | OrderreturndetailUpsertWithWhereUniqueWithoutOrderreturnInput[]
    createMany?: OrderreturndetailCreateManyOrderreturnInputEnvelope
    set?: OrderreturndetailWhereUniqueInput | OrderreturndetailWhereUniqueInput[]
    disconnect?: OrderreturndetailWhereUniqueInput | OrderreturndetailWhereUniqueInput[]
    delete?: OrderreturndetailWhereUniqueInput | OrderreturndetailWhereUniqueInput[]
    connect?: OrderreturndetailWhereUniqueInput | OrderreturndetailWhereUniqueInput[]
    update?: OrderreturndetailUpdateWithWhereUniqueWithoutOrderreturnInput | OrderreturndetailUpdateWithWhereUniqueWithoutOrderreturnInput[]
    updateMany?: OrderreturndetailUpdateManyWithWhereWithoutOrderreturnInput | OrderreturndetailUpdateManyWithWhereWithoutOrderreturnInput[]
    deleteMany?: OrderreturndetailScalarWhereInput | OrderreturndetailScalarWhereInput[]
  }

  export type OrderreturndetailUncheckedUpdateManyWithoutOrderreturnNestedInput = {
    create?: XOR<OrderreturndetailCreateWithoutOrderreturnInput, OrderreturndetailUncheckedCreateWithoutOrderreturnInput> | OrderreturndetailCreateWithoutOrderreturnInput[] | OrderreturndetailUncheckedCreateWithoutOrderreturnInput[]
    connectOrCreate?: OrderreturndetailCreateOrConnectWithoutOrderreturnInput | OrderreturndetailCreateOrConnectWithoutOrderreturnInput[]
    upsert?: OrderreturndetailUpsertWithWhereUniqueWithoutOrderreturnInput | OrderreturndetailUpsertWithWhereUniqueWithoutOrderreturnInput[]
    createMany?: OrderreturndetailCreateManyOrderreturnInputEnvelope
    set?: OrderreturndetailWhereUniqueInput | OrderreturndetailWhereUniqueInput[]
    disconnect?: OrderreturndetailWhereUniqueInput | OrderreturndetailWhereUniqueInput[]
    delete?: OrderreturndetailWhereUniqueInput | OrderreturndetailWhereUniqueInput[]
    connect?: OrderreturndetailWhereUniqueInput | OrderreturndetailWhereUniqueInput[]
    update?: OrderreturndetailUpdateWithWhereUniqueWithoutOrderreturnInput | OrderreturndetailUpdateWithWhereUniqueWithoutOrderreturnInput[]
    updateMany?: OrderreturndetailUpdateManyWithWhereWithoutOrderreturnInput | OrderreturndetailUpdateManyWithWhereWithoutOrderreturnInput[]
    deleteMany?: OrderreturndetailScalarWhereInput | OrderreturndetailScalarWhereInput[]
  }

  export type OrderreturnCreateNestedOneWithoutOrderreturndetailInput = {
    create?: XOR<OrderreturnCreateWithoutOrderreturndetailInput, OrderreturnUncheckedCreateWithoutOrderreturndetailInput>
    connectOrCreate?: OrderreturnCreateOrConnectWithoutOrderreturndetailInput
    connect?: OrderreturnWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutOrderreturndetailInput = {
    create?: XOR<ProductCreateWithoutOrderreturndetailInput, ProductUncheckedCreateWithoutOrderreturndetailInput>
    connectOrCreate?: ProductCreateOrConnectWithoutOrderreturndetailInput
    connect?: ProductWhereUniqueInput
  }

  export type OrderreturnUpdateOneRequiredWithoutOrderreturndetailNestedInput = {
    create?: XOR<OrderreturnCreateWithoutOrderreturndetailInput, OrderreturnUncheckedCreateWithoutOrderreturndetailInput>
    connectOrCreate?: OrderreturnCreateOrConnectWithoutOrderreturndetailInput
    upsert?: OrderreturnUpsertWithoutOrderreturndetailInput
    connect?: OrderreturnWhereUniqueInput
    update?: XOR<XOR<OrderreturnUpdateToOneWithWhereWithoutOrderreturndetailInput, OrderreturnUpdateWithoutOrderreturndetailInput>, OrderreturnUncheckedUpdateWithoutOrderreturndetailInput>
  }

  export type ProductUpdateOneRequiredWithoutOrderreturndetailNestedInput = {
    create?: XOR<ProductCreateWithoutOrderreturndetailInput, ProductUncheckedCreateWithoutOrderreturndetailInput>
    connectOrCreate?: ProductCreateOrConnectWithoutOrderreturndetailInput
    upsert?: ProductUpsertWithoutOrderreturndetailInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutOrderreturndetailInput, ProductUpdateWithoutOrderreturndetailInput>, ProductUncheckedUpdateWithoutOrderreturndetailInput>
  }

  export type UserCreateNestedOneWithoutPurchaseInput = {
    create?: XOR<UserCreateWithoutPurchaseInput, UserUncheckedCreateWithoutPurchaseInput>
    connectOrCreate?: UserCreateOrConnectWithoutPurchaseInput
    connect?: UserWhereUniqueInput
  }

  export type PurchasedetailCreateNestedManyWithoutPurchaseInput = {
    create?: XOR<PurchasedetailCreateWithoutPurchaseInput, PurchasedetailUncheckedCreateWithoutPurchaseInput> | PurchasedetailCreateWithoutPurchaseInput[] | PurchasedetailUncheckedCreateWithoutPurchaseInput[]
    connectOrCreate?: PurchasedetailCreateOrConnectWithoutPurchaseInput | PurchasedetailCreateOrConnectWithoutPurchaseInput[]
    createMany?: PurchasedetailCreateManyPurchaseInputEnvelope
    connect?: PurchasedetailWhereUniqueInput | PurchasedetailWhereUniqueInput[]
  }

  export type PurchasedetailUncheckedCreateNestedManyWithoutPurchaseInput = {
    create?: XOR<PurchasedetailCreateWithoutPurchaseInput, PurchasedetailUncheckedCreateWithoutPurchaseInput> | PurchasedetailCreateWithoutPurchaseInput[] | PurchasedetailUncheckedCreateWithoutPurchaseInput[]
    connectOrCreate?: PurchasedetailCreateOrConnectWithoutPurchaseInput | PurchasedetailCreateOrConnectWithoutPurchaseInput[]
    createMany?: PurchasedetailCreateManyPurchaseInputEnvelope
    connect?: PurchasedetailWhereUniqueInput | PurchasedetailWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutPurchaseNestedInput = {
    create?: XOR<UserCreateWithoutPurchaseInput, UserUncheckedCreateWithoutPurchaseInput>
    connectOrCreate?: UserCreateOrConnectWithoutPurchaseInput
    upsert?: UserUpsertWithoutPurchaseInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPurchaseInput, UserUpdateWithoutPurchaseInput>, UserUncheckedUpdateWithoutPurchaseInput>
  }

  export type PurchasedetailUpdateManyWithoutPurchaseNestedInput = {
    create?: XOR<PurchasedetailCreateWithoutPurchaseInput, PurchasedetailUncheckedCreateWithoutPurchaseInput> | PurchasedetailCreateWithoutPurchaseInput[] | PurchasedetailUncheckedCreateWithoutPurchaseInput[]
    connectOrCreate?: PurchasedetailCreateOrConnectWithoutPurchaseInput | PurchasedetailCreateOrConnectWithoutPurchaseInput[]
    upsert?: PurchasedetailUpsertWithWhereUniqueWithoutPurchaseInput | PurchasedetailUpsertWithWhereUniqueWithoutPurchaseInput[]
    createMany?: PurchasedetailCreateManyPurchaseInputEnvelope
    set?: PurchasedetailWhereUniqueInput | PurchasedetailWhereUniqueInput[]
    disconnect?: PurchasedetailWhereUniqueInput | PurchasedetailWhereUniqueInput[]
    delete?: PurchasedetailWhereUniqueInput | PurchasedetailWhereUniqueInput[]
    connect?: PurchasedetailWhereUniqueInput | PurchasedetailWhereUniqueInput[]
    update?: PurchasedetailUpdateWithWhereUniqueWithoutPurchaseInput | PurchasedetailUpdateWithWhereUniqueWithoutPurchaseInput[]
    updateMany?: PurchasedetailUpdateManyWithWhereWithoutPurchaseInput | PurchasedetailUpdateManyWithWhereWithoutPurchaseInput[]
    deleteMany?: PurchasedetailScalarWhereInput | PurchasedetailScalarWhereInput[]
  }

  export type PurchasedetailUncheckedUpdateManyWithoutPurchaseNestedInput = {
    create?: XOR<PurchasedetailCreateWithoutPurchaseInput, PurchasedetailUncheckedCreateWithoutPurchaseInput> | PurchasedetailCreateWithoutPurchaseInput[] | PurchasedetailUncheckedCreateWithoutPurchaseInput[]
    connectOrCreate?: PurchasedetailCreateOrConnectWithoutPurchaseInput | PurchasedetailCreateOrConnectWithoutPurchaseInput[]
    upsert?: PurchasedetailUpsertWithWhereUniqueWithoutPurchaseInput | PurchasedetailUpsertWithWhereUniqueWithoutPurchaseInput[]
    createMany?: PurchasedetailCreateManyPurchaseInputEnvelope
    set?: PurchasedetailWhereUniqueInput | PurchasedetailWhereUniqueInput[]
    disconnect?: PurchasedetailWhereUniqueInput | PurchasedetailWhereUniqueInput[]
    delete?: PurchasedetailWhereUniqueInput | PurchasedetailWhereUniqueInput[]
    connect?: PurchasedetailWhereUniqueInput | PurchasedetailWhereUniqueInput[]
    update?: PurchasedetailUpdateWithWhereUniqueWithoutPurchaseInput | PurchasedetailUpdateWithWhereUniqueWithoutPurchaseInput[]
    updateMany?: PurchasedetailUpdateManyWithWhereWithoutPurchaseInput | PurchasedetailUpdateManyWithWhereWithoutPurchaseInput[]
    deleteMany?: PurchasedetailScalarWhereInput | PurchasedetailScalarWhereInput[]
  }

  export type PurchaseCreateNestedOneWithoutPurchasedetailInput = {
    create?: XOR<PurchaseCreateWithoutPurchasedetailInput, PurchaseUncheckedCreateWithoutPurchasedetailInput>
    connectOrCreate?: PurchaseCreateOrConnectWithoutPurchasedetailInput
    connect?: PurchaseWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutPurchasedetailInput = {
    create?: XOR<ProductCreateWithoutPurchasedetailInput, ProductUncheckedCreateWithoutPurchasedetailInput>
    connectOrCreate?: ProductCreateOrConnectWithoutPurchasedetailInput
    connect?: ProductWhereUniqueInput
  }

  export type PurchaseUpdateOneRequiredWithoutPurchasedetailNestedInput = {
    create?: XOR<PurchaseCreateWithoutPurchasedetailInput, PurchaseUncheckedCreateWithoutPurchasedetailInput>
    connectOrCreate?: PurchaseCreateOrConnectWithoutPurchasedetailInput
    upsert?: PurchaseUpsertWithoutPurchasedetailInput
    connect?: PurchaseWhereUniqueInput
    update?: XOR<XOR<PurchaseUpdateToOneWithWhereWithoutPurchasedetailInput, PurchaseUpdateWithoutPurchasedetailInput>, PurchaseUncheckedUpdateWithoutPurchasedetailInput>
  }

  export type ProductUpdateOneRequiredWithoutPurchasedetailNestedInput = {
    create?: XOR<ProductCreateWithoutPurchasedetailInput, ProductUncheckedCreateWithoutPurchasedetailInput>
    connectOrCreate?: ProductCreateOrConnectWithoutPurchasedetailInput
    upsert?: ProductUpsertWithoutPurchasedetailInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutPurchasedetailInput, ProductUpdateWithoutPurchasedetailInput>, ProductUncheckedUpdateWithoutPurchasedetailInput>
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

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
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

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
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

  export type ProductCreateWithoutKategoryInput = {
    code: string
    barcode?: string | null
    productName: string
    image: string
    url: string
    qty: number
    price: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    supplier: SupplierCreateNestedOneWithoutProductInput
    Carts?: CartsCreateNestedManyWithoutProductInput
    Orderdetail?: OrderdetailCreateNestedManyWithoutProductInput
    Orderreturndetail?: OrderreturndetailCreateNestedManyWithoutProductInput
    Purchasedetail?: PurchasedetailCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutKategoryInput = {
    id?: number
    code: string
    barcode?: string | null
    productName: string
    image: string
    url: string
    qty: number
    price: Decimal | DecimalJsLike | number | string
    supplierId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    Carts?: CartsUncheckedCreateNestedManyWithoutProductInput
    Orderdetail?: OrderdetailUncheckedCreateNestedManyWithoutProductInput
    Orderreturndetail?: OrderreturndetailUncheckedCreateNestedManyWithoutProductInput
    Purchasedetail?: PurchasedetailUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutKategoryInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutKategoryInput, ProductUncheckedCreateWithoutKategoryInput>
  }

  export type ProductCreateManyKategoryInputEnvelope = {
    data: ProductCreateManyKategoryInput | ProductCreateManyKategoryInput[]
    skipDuplicates?: boolean
  }

  export type ProductUpsertWithWhereUniqueWithoutKategoryInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutKategoryInput, ProductUncheckedUpdateWithoutKategoryInput>
    create: XOR<ProductCreateWithoutKategoryInput, ProductUncheckedCreateWithoutKategoryInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutKategoryInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutKategoryInput, ProductUncheckedUpdateWithoutKategoryInput>
  }

  export type ProductUpdateManyWithWhereWithoutKategoryInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutKategoryInput>
  }

  export type ProductScalarWhereInput = {
    AND?: ProductScalarWhereInput | ProductScalarWhereInput[]
    OR?: ProductScalarWhereInput[]
    NOT?: ProductScalarWhereInput | ProductScalarWhereInput[]
    id?: IntFilter<"Product"> | number
    code?: StringFilter<"Product"> | string
    barcode?: StringNullableFilter<"Product"> | string | null
    productName?: StringFilter<"Product"> | string
    image?: StringFilter<"Product"> | string
    url?: StringFilter<"Product"> | string
    qty?: IntFilter<"Product"> | number
    price?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    kategoryId?: IntFilter<"Product"> | number
    supplierId?: IntFilter<"Product"> | number
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
  }

  export type CategoryCreateWithoutProductInput = {
    kategoryName: string
  }

  export type CategoryUncheckedCreateWithoutProductInput = {
    id?: number
    kategoryName: string
  }

  export type CategoryCreateOrConnectWithoutProductInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutProductInput, CategoryUncheckedCreateWithoutProductInput>
  }

  export type SupplierCreateWithoutProductInput = {
    firstName: string
    lastName?: string | null
    phone: string
    email?: string | null
    address: string
  }

  export type SupplierUncheckedCreateWithoutProductInput = {
    id?: number
    firstName: string
    lastName?: string | null
    phone: string
    email?: string | null
    address: string
  }

  export type SupplierCreateOrConnectWithoutProductInput = {
    where: SupplierWhereUniqueInput
    create: XOR<SupplierCreateWithoutProductInput, SupplierUncheckedCreateWithoutProductInput>
  }

  export type CartsCreateWithoutProductInput = {
    price: Decimal | DecimalJsLike | number | string
    productName: string
    qty: number
    totalPrice: Decimal | DecimalJsLike | number | string
    note: string
    user: UserCreateNestedOneWithoutCartsInput
  }

  export type CartsUncheckedCreateWithoutProductInput = {
    id?: number
    price: Decimal | DecimalJsLike | number | string
    productName: string
    qty: number
    totalPrice: Decimal | DecimalJsLike | number | string
    note: string
    userId: number
  }

  export type CartsCreateOrConnectWithoutProductInput = {
    where: CartsWhereUniqueInput
    create: XOR<CartsCreateWithoutProductInput, CartsUncheckedCreateWithoutProductInput>
  }

  export type CartsCreateManyProductInputEnvelope = {
    data: CartsCreateManyProductInput | CartsCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type OrderdetailCreateWithoutProductInput = {
    price: Decimal | DecimalJsLike | number | string
    productName: string
    qty: number
    totalPrice: Decimal | DecimalJsLike | number | string
    note: string
    order: OrdersCreateNestedOneWithoutOrderdetailInput
  }

  export type OrderdetailUncheckedCreateWithoutProductInput = {
    id?: number
    price: Decimal | DecimalJsLike | number | string
    productName: string
    qty: number
    totalPrice: Decimal | DecimalJsLike | number | string
    note: string
    orderId: number
  }

  export type OrderdetailCreateOrConnectWithoutProductInput = {
    where: OrderdetailWhereUniqueInput
    create: XOR<OrderdetailCreateWithoutProductInput, OrderdetailUncheckedCreateWithoutProductInput>
  }

  export type OrderdetailCreateManyProductInputEnvelope = {
    data: OrderdetailCreateManyProductInput | OrderdetailCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type OrderreturndetailCreateWithoutProductInput = {
    productName: string
    price: Decimal | DecimalJsLike | number | string
    qty: number
    total: Decimal | DecimalJsLike | number | string
    orderreturn: OrderreturnCreateNestedOneWithoutOrderreturndetailInput
  }

  export type OrderreturndetailUncheckedCreateWithoutProductInput = {
    id?: number
    productName: string
    price: Decimal | DecimalJsLike | number | string
    qty: number
    total: Decimal | DecimalJsLike | number | string
    returnId: number
  }

  export type OrderreturndetailCreateOrConnectWithoutProductInput = {
    where: OrderreturndetailWhereUniqueInput
    create: XOR<OrderreturndetailCreateWithoutProductInput, OrderreturndetailUncheckedCreateWithoutProductInput>
  }

  export type OrderreturndetailCreateManyProductInputEnvelope = {
    data: OrderreturndetailCreateManyProductInput | OrderreturndetailCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type PurchasedetailCreateWithoutProductInput = {
    productName: string
    price: Decimal | DecimalJsLike | number | string
    qty: number
    total: Decimal | DecimalJsLike | number | string
    purchase: PurchaseCreateNestedOneWithoutPurchasedetailInput
  }

  export type PurchasedetailUncheckedCreateWithoutProductInput = {
    id?: number
    productName: string
    price: Decimal | DecimalJsLike | number | string
    qty: number
    total: Decimal | DecimalJsLike | number | string
    purchaseId: number
  }

  export type PurchasedetailCreateOrConnectWithoutProductInput = {
    where: PurchasedetailWhereUniqueInput
    create: XOR<PurchasedetailCreateWithoutProductInput, PurchasedetailUncheckedCreateWithoutProductInput>
  }

  export type PurchasedetailCreateManyProductInputEnvelope = {
    data: PurchasedetailCreateManyProductInput | PurchasedetailCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type CategoryUpsertWithoutProductInput = {
    update: XOR<CategoryUpdateWithoutProductInput, CategoryUncheckedUpdateWithoutProductInput>
    create: XOR<CategoryCreateWithoutProductInput, CategoryUncheckedCreateWithoutProductInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutProductInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutProductInput, CategoryUncheckedUpdateWithoutProductInput>
  }

  export type CategoryUpdateWithoutProductInput = {
    kategoryName?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    kategoryName?: StringFieldUpdateOperationsInput | string
  }

  export type SupplierUpsertWithoutProductInput = {
    update: XOR<SupplierUpdateWithoutProductInput, SupplierUncheckedUpdateWithoutProductInput>
    create: XOR<SupplierCreateWithoutProductInput, SupplierUncheckedCreateWithoutProductInput>
    where?: SupplierWhereInput
  }

  export type SupplierUpdateToOneWithWhereWithoutProductInput = {
    where?: SupplierWhereInput
    data: XOR<SupplierUpdateWithoutProductInput, SupplierUncheckedUpdateWithoutProductInput>
  }

  export type SupplierUpdateWithoutProductInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
  }

  export type SupplierUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
  }

  export type CartsUpsertWithWhereUniqueWithoutProductInput = {
    where: CartsWhereUniqueInput
    update: XOR<CartsUpdateWithoutProductInput, CartsUncheckedUpdateWithoutProductInput>
    create: XOR<CartsCreateWithoutProductInput, CartsUncheckedCreateWithoutProductInput>
  }

  export type CartsUpdateWithWhereUniqueWithoutProductInput = {
    where: CartsWhereUniqueInput
    data: XOR<CartsUpdateWithoutProductInput, CartsUncheckedUpdateWithoutProductInput>
  }

  export type CartsUpdateManyWithWhereWithoutProductInput = {
    where: CartsScalarWhereInput
    data: XOR<CartsUpdateManyMutationInput, CartsUncheckedUpdateManyWithoutProductInput>
  }

  export type CartsScalarWhereInput = {
    AND?: CartsScalarWhereInput | CartsScalarWhereInput[]
    OR?: CartsScalarWhereInput[]
    NOT?: CartsScalarWhereInput | CartsScalarWhereInput[]
    id?: IntFilter<"Carts"> | number
    price?: DecimalFilter<"Carts"> | Decimal | DecimalJsLike | number | string
    productName?: StringFilter<"Carts"> | string
    qty?: IntFilter<"Carts"> | number
    totalPrice?: DecimalFilter<"Carts"> | Decimal | DecimalJsLike | number | string
    note?: StringFilter<"Carts"> | string
    productId?: IntFilter<"Carts"> | number
    userId?: IntFilter<"Carts"> | number
  }

  export type OrderdetailUpsertWithWhereUniqueWithoutProductInput = {
    where: OrderdetailWhereUniqueInput
    update: XOR<OrderdetailUpdateWithoutProductInput, OrderdetailUncheckedUpdateWithoutProductInput>
    create: XOR<OrderdetailCreateWithoutProductInput, OrderdetailUncheckedCreateWithoutProductInput>
  }

  export type OrderdetailUpdateWithWhereUniqueWithoutProductInput = {
    where: OrderdetailWhereUniqueInput
    data: XOR<OrderdetailUpdateWithoutProductInput, OrderdetailUncheckedUpdateWithoutProductInput>
  }

  export type OrderdetailUpdateManyWithWhereWithoutProductInput = {
    where: OrderdetailScalarWhereInput
    data: XOR<OrderdetailUpdateManyMutationInput, OrderdetailUncheckedUpdateManyWithoutProductInput>
  }

  export type OrderdetailScalarWhereInput = {
    AND?: OrderdetailScalarWhereInput | OrderdetailScalarWhereInput[]
    OR?: OrderdetailScalarWhereInput[]
    NOT?: OrderdetailScalarWhereInput | OrderdetailScalarWhereInput[]
    id?: IntFilter<"Orderdetail"> | number
    price?: DecimalFilter<"Orderdetail"> | Decimal | DecimalJsLike | number | string
    productName?: StringFilter<"Orderdetail"> | string
    qty?: IntFilter<"Orderdetail"> | number
    totalPrice?: DecimalFilter<"Orderdetail"> | Decimal | DecimalJsLike | number | string
    note?: StringFilter<"Orderdetail"> | string
    productId?: IntFilter<"Orderdetail"> | number
    orderId?: IntFilter<"Orderdetail"> | number
  }

  export type OrderreturndetailUpsertWithWhereUniqueWithoutProductInput = {
    where: OrderreturndetailWhereUniqueInput
    update: XOR<OrderreturndetailUpdateWithoutProductInput, OrderreturndetailUncheckedUpdateWithoutProductInput>
    create: XOR<OrderreturndetailCreateWithoutProductInput, OrderreturndetailUncheckedCreateWithoutProductInput>
  }

  export type OrderreturndetailUpdateWithWhereUniqueWithoutProductInput = {
    where: OrderreturndetailWhereUniqueInput
    data: XOR<OrderreturndetailUpdateWithoutProductInput, OrderreturndetailUncheckedUpdateWithoutProductInput>
  }

  export type OrderreturndetailUpdateManyWithWhereWithoutProductInput = {
    where: OrderreturndetailScalarWhereInput
    data: XOR<OrderreturndetailUpdateManyMutationInput, OrderreturndetailUncheckedUpdateManyWithoutProductInput>
  }

  export type OrderreturndetailScalarWhereInput = {
    AND?: OrderreturndetailScalarWhereInput | OrderreturndetailScalarWhereInput[]
    OR?: OrderreturndetailScalarWhereInput[]
    NOT?: OrderreturndetailScalarWhereInput | OrderreturndetailScalarWhereInput[]
    id?: IntFilter<"Orderreturndetail"> | number
    productId?: IntFilter<"Orderreturndetail"> | number
    productName?: StringFilter<"Orderreturndetail"> | string
    price?: DecimalFilter<"Orderreturndetail"> | Decimal | DecimalJsLike | number | string
    qty?: IntFilter<"Orderreturndetail"> | number
    total?: DecimalFilter<"Orderreturndetail"> | Decimal | DecimalJsLike | number | string
    returnId?: IntFilter<"Orderreturndetail"> | number
  }

  export type PurchasedetailUpsertWithWhereUniqueWithoutProductInput = {
    where: PurchasedetailWhereUniqueInput
    update: XOR<PurchasedetailUpdateWithoutProductInput, PurchasedetailUncheckedUpdateWithoutProductInput>
    create: XOR<PurchasedetailCreateWithoutProductInput, PurchasedetailUncheckedCreateWithoutProductInput>
  }

  export type PurchasedetailUpdateWithWhereUniqueWithoutProductInput = {
    where: PurchasedetailWhereUniqueInput
    data: XOR<PurchasedetailUpdateWithoutProductInput, PurchasedetailUncheckedUpdateWithoutProductInput>
  }

  export type PurchasedetailUpdateManyWithWhereWithoutProductInput = {
    where: PurchasedetailScalarWhereInput
    data: XOR<PurchasedetailUpdateManyMutationInput, PurchasedetailUncheckedUpdateManyWithoutProductInput>
  }

  export type PurchasedetailScalarWhereInput = {
    AND?: PurchasedetailScalarWhereInput | PurchasedetailScalarWhereInput[]
    OR?: PurchasedetailScalarWhereInput[]
    NOT?: PurchasedetailScalarWhereInput | PurchasedetailScalarWhereInput[]
    id?: IntFilter<"Purchasedetail"> | number
    productId?: IntFilter<"Purchasedetail"> | number
    productName?: StringFilter<"Purchasedetail"> | string
    price?: DecimalFilter<"Purchasedetail"> | Decimal | DecimalJsLike | number | string
    qty?: IntFilter<"Purchasedetail"> | number
    total?: DecimalFilter<"Purchasedetail"> | Decimal | DecimalJsLike | number | string
    purchaseId?: IntFilter<"Purchasedetail"> | number
  }

  export type ProductCreateWithoutSupplierInput = {
    code: string
    barcode?: string | null
    productName: string
    image: string
    url: string
    qty: number
    price: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    kategory: CategoryCreateNestedOneWithoutProductInput
    Carts?: CartsCreateNestedManyWithoutProductInput
    Orderdetail?: OrderdetailCreateNestedManyWithoutProductInput
    Orderreturndetail?: OrderreturndetailCreateNestedManyWithoutProductInput
    Purchasedetail?: PurchasedetailCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutSupplierInput = {
    id?: number
    code: string
    barcode?: string | null
    productName: string
    image: string
    url: string
    qty: number
    price: Decimal | DecimalJsLike | number | string
    kategoryId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    Carts?: CartsUncheckedCreateNestedManyWithoutProductInput
    Orderdetail?: OrderdetailUncheckedCreateNestedManyWithoutProductInput
    Orderreturndetail?: OrderreturndetailUncheckedCreateNestedManyWithoutProductInput
    Purchasedetail?: PurchasedetailUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutSupplierInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutSupplierInput, ProductUncheckedCreateWithoutSupplierInput>
  }

  export type ProductCreateManySupplierInputEnvelope = {
    data: ProductCreateManySupplierInput | ProductCreateManySupplierInput[]
    skipDuplicates?: boolean
  }

  export type ProductUpsertWithWhereUniqueWithoutSupplierInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutSupplierInput, ProductUncheckedUpdateWithoutSupplierInput>
    create: XOR<ProductCreateWithoutSupplierInput, ProductUncheckedCreateWithoutSupplierInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutSupplierInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutSupplierInput, ProductUncheckedUpdateWithoutSupplierInput>
  }

  export type ProductUpdateManyWithWhereWithoutSupplierInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutSupplierInput>
  }

  export type UserCreateWithoutCartsInput = {
    userName: string
    password: string
    name: string
    role: string
    Orders?: OrdersCreateNestedManyWithoutUserInput
    Orderreturn?: OrderreturnCreateNestedManyWithoutUserInput
    Purchase?: PurchaseCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCartsInput = {
    id?: number
    userName: string
    password: string
    name: string
    role: string
    Orders?: OrdersUncheckedCreateNestedManyWithoutUserInput
    Orderreturn?: OrderreturnUncheckedCreateNestedManyWithoutUserInput
    Purchase?: PurchaseUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCartsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCartsInput, UserUncheckedCreateWithoutCartsInput>
  }

  export type ProductCreateWithoutCartsInput = {
    code: string
    barcode?: string | null
    productName: string
    image: string
    url: string
    qty: number
    price: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    kategory: CategoryCreateNestedOneWithoutProductInput
    supplier: SupplierCreateNestedOneWithoutProductInput
    Orderdetail?: OrderdetailCreateNestedManyWithoutProductInput
    Orderreturndetail?: OrderreturndetailCreateNestedManyWithoutProductInput
    Purchasedetail?: PurchasedetailCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutCartsInput = {
    id?: number
    code: string
    barcode?: string | null
    productName: string
    image: string
    url: string
    qty: number
    price: Decimal | DecimalJsLike | number | string
    kategoryId: number
    supplierId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    Orderdetail?: OrderdetailUncheckedCreateNestedManyWithoutProductInput
    Orderreturndetail?: OrderreturndetailUncheckedCreateNestedManyWithoutProductInput
    Purchasedetail?: PurchasedetailUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutCartsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutCartsInput, ProductUncheckedCreateWithoutCartsInput>
  }

  export type UserUpsertWithoutCartsInput = {
    update: XOR<UserUpdateWithoutCartsInput, UserUncheckedUpdateWithoutCartsInput>
    create: XOR<UserCreateWithoutCartsInput, UserUncheckedCreateWithoutCartsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCartsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCartsInput, UserUncheckedUpdateWithoutCartsInput>
  }

  export type UserUpdateWithoutCartsInput = {
    userName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    Orders?: OrdersUpdateManyWithoutUserNestedInput
    Orderreturn?: OrderreturnUpdateManyWithoutUserNestedInput
    Purchase?: PurchaseUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCartsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    Orders?: OrdersUncheckedUpdateManyWithoutUserNestedInput
    Orderreturn?: OrderreturnUncheckedUpdateManyWithoutUserNestedInput
    Purchase?: PurchaseUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProductUpsertWithoutCartsInput = {
    update: XOR<ProductUpdateWithoutCartsInput, ProductUncheckedUpdateWithoutCartsInput>
    create: XOR<ProductCreateWithoutCartsInput, ProductUncheckedCreateWithoutCartsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutCartsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutCartsInput, ProductUncheckedUpdateWithoutCartsInput>
  }

  export type ProductUpdateWithoutCartsInput = {
    code?: StringFieldUpdateOperationsInput | string
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    productName?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kategory?: CategoryUpdateOneRequiredWithoutProductNestedInput
    supplier?: SupplierUpdateOneRequiredWithoutProductNestedInput
    Orderdetail?: OrderdetailUpdateManyWithoutProductNestedInput
    Orderreturndetail?: OrderreturndetailUpdateManyWithoutProductNestedInput
    Purchasedetail?: PurchasedetailUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutCartsInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    productName?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    kategoryId?: IntFieldUpdateOperationsInput | number
    supplierId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Orderdetail?: OrderdetailUncheckedUpdateManyWithoutProductNestedInput
    Orderreturndetail?: OrderreturndetailUncheckedUpdateManyWithoutProductNestedInput
    Purchasedetail?: PurchasedetailUncheckedUpdateManyWithoutProductNestedInput
  }

  export type UserCreateWithoutOrdersInput = {
    userName: string
    password: string
    name: string
    role: string
    Carts?: CartsCreateNestedManyWithoutUserInput
    Orderreturn?: OrderreturnCreateNestedManyWithoutUserInput
    Purchase?: PurchaseCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOrdersInput = {
    id?: number
    userName: string
    password: string
    name: string
    role: string
    Carts?: CartsUncheckedCreateNestedManyWithoutUserInput
    Orderreturn?: OrderreturnUncheckedCreateNestedManyWithoutUserInput
    Purchase?: PurchaseUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOrdersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
  }

  export type OrderdetailCreateWithoutOrderInput = {
    price: Decimal | DecimalJsLike | number | string
    productName: string
    qty: number
    totalPrice: Decimal | DecimalJsLike | number | string
    note: string
    product: ProductCreateNestedOneWithoutOrderdetailInput
  }

  export type OrderdetailUncheckedCreateWithoutOrderInput = {
    id?: number
    price: Decimal | DecimalJsLike | number | string
    productName: string
    qty: number
    totalPrice: Decimal | DecimalJsLike | number | string
    note: string
    productId: number
  }

  export type OrderdetailCreateOrConnectWithoutOrderInput = {
    where: OrderdetailWhereUniqueInput
    create: XOR<OrderdetailCreateWithoutOrderInput, OrderdetailUncheckedCreateWithoutOrderInput>
  }

  export type OrderdetailCreateManyOrderInputEnvelope = {
    data: OrderdetailCreateManyOrderInput | OrderdetailCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type OrderreturnCreateWithoutOrderInput = {
    code: string
    date?: Date | string
    note?: string | null
    user: UserCreateNestedOneWithoutOrderreturnInput
    Orderreturndetail?: OrderreturndetailCreateNestedManyWithoutOrderreturnInput
  }

  export type OrderreturnUncheckedCreateWithoutOrderInput = {
    id?: number
    code: string
    date?: Date | string
    note?: string | null
    userId: number
    Orderreturndetail?: OrderreturndetailUncheckedCreateNestedManyWithoutOrderreturnInput
  }

  export type OrderreturnCreateOrConnectWithoutOrderInput = {
    where: OrderreturnWhereUniqueInput
    create: XOR<OrderreturnCreateWithoutOrderInput, OrderreturnUncheckedCreateWithoutOrderInput>
  }

  export type OrderreturnCreateManyOrderInputEnvelope = {
    data: OrderreturnCreateManyOrderInput | OrderreturnCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutOrdersInput = {
    update: XOR<UserUpdateWithoutOrdersInput, UserUncheckedUpdateWithoutOrdersInput>
    create: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOrdersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOrdersInput, UserUncheckedUpdateWithoutOrdersInput>
  }

  export type UserUpdateWithoutOrdersInput = {
    userName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    Carts?: CartsUpdateManyWithoutUserNestedInput
    Orderreturn?: OrderreturnUpdateManyWithoutUserNestedInput
    Purchase?: PurchaseUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    userName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    Carts?: CartsUncheckedUpdateManyWithoutUserNestedInput
    Orderreturn?: OrderreturnUncheckedUpdateManyWithoutUserNestedInput
    Purchase?: PurchaseUncheckedUpdateManyWithoutUserNestedInput
  }

  export type OrderdetailUpsertWithWhereUniqueWithoutOrderInput = {
    where: OrderdetailWhereUniqueInput
    update: XOR<OrderdetailUpdateWithoutOrderInput, OrderdetailUncheckedUpdateWithoutOrderInput>
    create: XOR<OrderdetailCreateWithoutOrderInput, OrderdetailUncheckedCreateWithoutOrderInput>
  }

  export type OrderdetailUpdateWithWhereUniqueWithoutOrderInput = {
    where: OrderdetailWhereUniqueInput
    data: XOR<OrderdetailUpdateWithoutOrderInput, OrderdetailUncheckedUpdateWithoutOrderInput>
  }

  export type OrderdetailUpdateManyWithWhereWithoutOrderInput = {
    where: OrderdetailScalarWhereInput
    data: XOR<OrderdetailUpdateManyMutationInput, OrderdetailUncheckedUpdateManyWithoutOrderInput>
  }

  export type OrderreturnUpsertWithWhereUniqueWithoutOrderInput = {
    where: OrderreturnWhereUniqueInput
    update: XOR<OrderreturnUpdateWithoutOrderInput, OrderreturnUncheckedUpdateWithoutOrderInput>
    create: XOR<OrderreturnCreateWithoutOrderInput, OrderreturnUncheckedCreateWithoutOrderInput>
  }

  export type OrderreturnUpdateWithWhereUniqueWithoutOrderInput = {
    where: OrderreturnWhereUniqueInput
    data: XOR<OrderreturnUpdateWithoutOrderInput, OrderreturnUncheckedUpdateWithoutOrderInput>
  }

  export type OrderreturnUpdateManyWithWhereWithoutOrderInput = {
    where: OrderreturnScalarWhereInput
    data: XOR<OrderreturnUpdateManyMutationInput, OrderreturnUncheckedUpdateManyWithoutOrderInput>
  }

  export type OrderreturnScalarWhereInput = {
    AND?: OrderreturnScalarWhereInput | OrderreturnScalarWhereInput[]
    OR?: OrderreturnScalarWhereInput[]
    NOT?: OrderreturnScalarWhereInput | OrderreturnScalarWhereInput[]
    id?: IntFilter<"Orderreturn"> | number
    code?: StringFilter<"Orderreturn"> | string
    date?: DateTimeFilter<"Orderreturn"> | Date | string
    note?: StringNullableFilter<"Orderreturn"> | string | null
    orderId?: IntFilter<"Orderreturn"> | number
    userId?: IntFilter<"Orderreturn"> | number
  }

  export type OrdersCreateWithoutOrderdetailInput = {
    date?: Date | string
    code: string
    total: Decimal | DecimalJsLike | number | string
    ppn: Decimal | DecimalJsLike | number | string
    grandTotal: Decimal | DecimalJsLike | number | string
    user: UserCreateNestedOneWithoutOrdersInput
    Orderreturn?: OrderreturnCreateNestedManyWithoutOrderInput
  }

  export type OrdersUncheckedCreateWithoutOrderdetailInput = {
    id?: number
    date?: Date | string
    code: string
    total: Decimal | DecimalJsLike | number | string
    ppn: Decimal | DecimalJsLike | number | string
    grandTotal: Decimal | DecimalJsLike | number | string
    userId: number
    Orderreturn?: OrderreturnUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrdersCreateOrConnectWithoutOrderdetailInput = {
    where: OrdersWhereUniqueInput
    create: XOR<OrdersCreateWithoutOrderdetailInput, OrdersUncheckedCreateWithoutOrderdetailInput>
  }

  export type ProductCreateWithoutOrderdetailInput = {
    code: string
    barcode?: string | null
    productName: string
    image: string
    url: string
    qty: number
    price: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    kategory: CategoryCreateNestedOneWithoutProductInput
    supplier: SupplierCreateNestedOneWithoutProductInput
    Carts?: CartsCreateNestedManyWithoutProductInput
    Orderreturndetail?: OrderreturndetailCreateNestedManyWithoutProductInput
    Purchasedetail?: PurchasedetailCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutOrderdetailInput = {
    id?: number
    code: string
    barcode?: string | null
    productName: string
    image: string
    url: string
    qty: number
    price: Decimal | DecimalJsLike | number | string
    kategoryId: number
    supplierId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    Carts?: CartsUncheckedCreateNestedManyWithoutProductInput
    Orderreturndetail?: OrderreturndetailUncheckedCreateNestedManyWithoutProductInput
    Purchasedetail?: PurchasedetailUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutOrderdetailInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutOrderdetailInput, ProductUncheckedCreateWithoutOrderdetailInput>
  }

  export type OrdersUpsertWithoutOrderdetailInput = {
    update: XOR<OrdersUpdateWithoutOrderdetailInput, OrdersUncheckedUpdateWithoutOrderdetailInput>
    create: XOR<OrdersCreateWithoutOrderdetailInput, OrdersUncheckedCreateWithoutOrderdetailInput>
    where?: OrdersWhereInput
  }

  export type OrdersUpdateToOneWithWhereWithoutOrderdetailInput = {
    where?: OrdersWhereInput
    data: XOR<OrdersUpdateWithoutOrderdetailInput, OrdersUncheckedUpdateWithoutOrderdetailInput>
  }

  export type OrdersUpdateWithoutOrderdetailInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    code?: StringFieldUpdateOperationsInput | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ppn?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    grandTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    user?: UserUpdateOneRequiredWithoutOrdersNestedInput
    Orderreturn?: OrderreturnUpdateManyWithoutOrderNestedInput
  }

  export type OrdersUncheckedUpdateWithoutOrderdetailInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    code?: StringFieldUpdateOperationsInput | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ppn?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    grandTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    userId?: IntFieldUpdateOperationsInput | number
    Orderreturn?: OrderreturnUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type ProductUpsertWithoutOrderdetailInput = {
    update: XOR<ProductUpdateWithoutOrderdetailInput, ProductUncheckedUpdateWithoutOrderdetailInput>
    create: XOR<ProductCreateWithoutOrderdetailInput, ProductUncheckedCreateWithoutOrderdetailInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutOrderdetailInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutOrderdetailInput, ProductUncheckedUpdateWithoutOrderdetailInput>
  }

  export type ProductUpdateWithoutOrderdetailInput = {
    code?: StringFieldUpdateOperationsInput | string
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    productName?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kategory?: CategoryUpdateOneRequiredWithoutProductNestedInput
    supplier?: SupplierUpdateOneRequiredWithoutProductNestedInput
    Carts?: CartsUpdateManyWithoutProductNestedInput
    Orderreturndetail?: OrderreturndetailUpdateManyWithoutProductNestedInput
    Purchasedetail?: PurchasedetailUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutOrderdetailInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    productName?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    kategoryId?: IntFieldUpdateOperationsInput | number
    supplierId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Carts?: CartsUncheckedUpdateManyWithoutProductNestedInput
    Orderreturndetail?: OrderreturndetailUncheckedUpdateManyWithoutProductNestedInput
    Purchasedetail?: PurchasedetailUncheckedUpdateManyWithoutProductNestedInput
  }

  export type CartsCreateWithoutUserInput = {
    price: Decimal | DecimalJsLike | number | string
    productName: string
    qty: number
    totalPrice: Decimal | DecimalJsLike | number | string
    note: string
    product: ProductCreateNestedOneWithoutCartsInput
  }

  export type CartsUncheckedCreateWithoutUserInput = {
    id?: number
    price: Decimal | DecimalJsLike | number | string
    productName: string
    qty: number
    totalPrice: Decimal | DecimalJsLike | number | string
    note: string
    productId: number
  }

  export type CartsCreateOrConnectWithoutUserInput = {
    where: CartsWhereUniqueInput
    create: XOR<CartsCreateWithoutUserInput, CartsUncheckedCreateWithoutUserInput>
  }

  export type CartsCreateManyUserInputEnvelope = {
    data: CartsCreateManyUserInput | CartsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type OrdersCreateWithoutUserInput = {
    date?: Date | string
    code: string
    total: Decimal | DecimalJsLike | number | string
    ppn: Decimal | DecimalJsLike | number | string
    grandTotal: Decimal | DecimalJsLike | number | string
    Orderdetail?: OrderdetailCreateNestedManyWithoutOrderInput
    Orderreturn?: OrderreturnCreateNestedManyWithoutOrderInput
  }

  export type OrdersUncheckedCreateWithoutUserInput = {
    id?: number
    date?: Date | string
    code: string
    total: Decimal | DecimalJsLike | number | string
    ppn: Decimal | DecimalJsLike | number | string
    grandTotal: Decimal | DecimalJsLike | number | string
    Orderdetail?: OrderdetailUncheckedCreateNestedManyWithoutOrderInput
    Orderreturn?: OrderreturnUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrdersCreateOrConnectWithoutUserInput = {
    where: OrdersWhereUniqueInput
    create: XOR<OrdersCreateWithoutUserInput, OrdersUncheckedCreateWithoutUserInput>
  }

  export type OrdersCreateManyUserInputEnvelope = {
    data: OrdersCreateManyUserInput | OrdersCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type OrderreturnCreateWithoutUserInput = {
    code: string
    date?: Date | string
    note?: string | null
    order: OrdersCreateNestedOneWithoutOrderreturnInput
    Orderreturndetail?: OrderreturndetailCreateNestedManyWithoutOrderreturnInput
  }

  export type OrderreturnUncheckedCreateWithoutUserInput = {
    id?: number
    code: string
    date?: Date | string
    note?: string | null
    orderId: number
    Orderreturndetail?: OrderreturndetailUncheckedCreateNestedManyWithoutOrderreturnInput
  }

  export type OrderreturnCreateOrConnectWithoutUserInput = {
    where: OrderreturnWhereUniqueInput
    create: XOR<OrderreturnCreateWithoutUserInput, OrderreturnUncheckedCreateWithoutUserInput>
  }

  export type OrderreturnCreateManyUserInputEnvelope = {
    data: OrderreturnCreateManyUserInput | OrderreturnCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PurchaseCreateWithoutUserInput = {
    code: string
    date: Date | string
    note: string
    total: Decimal | DecimalJsLike | number | string
    ppn: Decimal | DecimalJsLike | number | string
    grandTotal: Decimal | DecimalJsLike | number | string
    Purchasedetail?: PurchasedetailCreateNestedManyWithoutPurchaseInput
  }

  export type PurchaseUncheckedCreateWithoutUserInput = {
    id?: number
    code: string
    date: Date | string
    note: string
    total: Decimal | DecimalJsLike | number | string
    ppn: Decimal | DecimalJsLike | number | string
    grandTotal: Decimal | DecimalJsLike | number | string
    Purchasedetail?: PurchasedetailUncheckedCreateNestedManyWithoutPurchaseInput
  }

  export type PurchaseCreateOrConnectWithoutUserInput = {
    where: PurchaseWhereUniqueInput
    create: XOR<PurchaseCreateWithoutUserInput, PurchaseUncheckedCreateWithoutUserInput>
  }

  export type PurchaseCreateManyUserInputEnvelope = {
    data: PurchaseCreateManyUserInput | PurchaseCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CartsUpsertWithWhereUniqueWithoutUserInput = {
    where: CartsWhereUniqueInput
    update: XOR<CartsUpdateWithoutUserInput, CartsUncheckedUpdateWithoutUserInput>
    create: XOR<CartsCreateWithoutUserInput, CartsUncheckedCreateWithoutUserInput>
  }

  export type CartsUpdateWithWhereUniqueWithoutUserInput = {
    where: CartsWhereUniqueInput
    data: XOR<CartsUpdateWithoutUserInput, CartsUncheckedUpdateWithoutUserInput>
  }

  export type CartsUpdateManyWithWhereWithoutUserInput = {
    where: CartsScalarWhereInput
    data: XOR<CartsUpdateManyMutationInput, CartsUncheckedUpdateManyWithoutUserInput>
  }

  export type OrdersUpsertWithWhereUniqueWithoutUserInput = {
    where: OrdersWhereUniqueInput
    update: XOR<OrdersUpdateWithoutUserInput, OrdersUncheckedUpdateWithoutUserInput>
    create: XOR<OrdersCreateWithoutUserInput, OrdersUncheckedCreateWithoutUserInput>
  }

  export type OrdersUpdateWithWhereUniqueWithoutUserInput = {
    where: OrdersWhereUniqueInput
    data: XOR<OrdersUpdateWithoutUserInput, OrdersUncheckedUpdateWithoutUserInput>
  }

  export type OrdersUpdateManyWithWhereWithoutUserInput = {
    where: OrdersScalarWhereInput
    data: XOR<OrdersUpdateManyMutationInput, OrdersUncheckedUpdateManyWithoutUserInput>
  }

  export type OrdersScalarWhereInput = {
    AND?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
    OR?: OrdersScalarWhereInput[]
    NOT?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
    id?: IntFilter<"Orders"> | number
    date?: DateTimeFilter<"Orders"> | Date | string
    code?: StringFilter<"Orders"> | string
    total?: DecimalFilter<"Orders"> | Decimal | DecimalJsLike | number | string
    ppn?: DecimalFilter<"Orders"> | Decimal | DecimalJsLike | number | string
    grandTotal?: DecimalFilter<"Orders"> | Decimal | DecimalJsLike | number | string
    userId?: IntFilter<"Orders"> | number
  }

  export type OrderreturnUpsertWithWhereUniqueWithoutUserInput = {
    where: OrderreturnWhereUniqueInput
    update: XOR<OrderreturnUpdateWithoutUserInput, OrderreturnUncheckedUpdateWithoutUserInput>
    create: XOR<OrderreturnCreateWithoutUserInput, OrderreturnUncheckedCreateWithoutUserInput>
  }

  export type OrderreturnUpdateWithWhereUniqueWithoutUserInput = {
    where: OrderreturnWhereUniqueInput
    data: XOR<OrderreturnUpdateWithoutUserInput, OrderreturnUncheckedUpdateWithoutUserInput>
  }

  export type OrderreturnUpdateManyWithWhereWithoutUserInput = {
    where: OrderreturnScalarWhereInput
    data: XOR<OrderreturnUpdateManyMutationInput, OrderreturnUncheckedUpdateManyWithoutUserInput>
  }

  export type PurchaseUpsertWithWhereUniqueWithoutUserInput = {
    where: PurchaseWhereUniqueInput
    update: XOR<PurchaseUpdateWithoutUserInput, PurchaseUncheckedUpdateWithoutUserInput>
    create: XOR<PurchaseCreateWithoutUserInput, PurchaseUncheckedCreateWithoutUserInput>
  }

  export type PurchaseUpdateWithWhereUniqueWithoutUserInput = {
    where: PurchaseWhereUniqueInput
    data: XOR<PurchaseUpdateWithoutUserInput, PurchaseUncheckedUpdateWithoutUserInput>
  }

  export type PurchaseUpdateManyWithWhereWithoutUserInput = {
    where: PurchaseScalarWhereInput
    data: XOR<PurchaseUpdateManyMutationInput, PurchaseUncheckedUpdateManyWithoutUserInput>
  }

  export type PurchaseScalarWhereInput = {
    AND?: PurchaseScalarWhereInput | PurchaseScalarWhereInput[]
    OR?: PurchaseScalarWhereInput[]
    NOT?: PurchaseScalarWhereInput | PurchaseScalarWhereInput[]
    id?: IntFilter<"Purchase"> | number
    code?: StringFilter<"Purchase"> | string
    date?: DateTimeFilter<"Purchase"> | Date | string
    note?: StringFilter<"Purchase"> | string
    total?: DecimalFilter<"Purchase"> | Decimal | DecimalJsLike | number | string
    ppn?: DecimalFilter<"Purchase"> | Decimal | DecimalJsLike | number | string
    grandTotal?: DecimalFilter<"Purchase"> | Decimal | DecimalJsLike | number | string
    userId?: IntFilter<"Purchase"> | number
  }

  export type UserCreateWithoutOrderreturnInput = {
    userName: string
    password: string
    name: string
    role: string
    Carts?: CartsCreateNestedManyWithoutUserInput
    Orders?: OrdersCreateNestedManyWithoutUserInput
    Purchase?: PurchaseCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOrderreturnInput = {
    id?: number
    userName: string
    password: string
    name: string
    role: string
    Carts?: CartsUncheckedCreateNestedManyWithoutUserInput
    Orders?: OrdersUncheckedCreateNestedManyWithoutUserInput
    Purchase?: PurchaseUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOrderreturnInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrderreturnInput, UserUncheckedCreateWithoutOrderreturnInput>
  }

  export type OrdersCreateWithoutOrderreturnInput = {
    date?: Date | string
    code: string
    total: Decimal | DecimalJsLike | number | string
    ppn: Decimal | DecimalJsLike | number | string
    grandTotal: Decimal | DecimalJsLike | number | string
    user: UserCreateNestedOneWithoutOrdersInput
    Orderdetail?: OrderdetailCreateNestedManyWithoutOrderInput
  }

  export type OrdersUncheckedCreateWithoutOrderreturnInput = {
    id?: number
    date?: Date | string
    code: string
    total: Decimal | DecimalJsLike | number | string
    ppn: Decimal | DecimalJsLike | number | string
    grandTotal: Decimal | DecimalJsLike | number | string
    userId: number
    Orderdetail?: OrderdetailUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrdersCreateOrConnectWithoutOrderreturnInput = {
    where: OrdersWhereUniqueInput
    create: XOR<OrdersCreateWithoutOrderreturnInput, OrdersUncheckedCreateWithoutOrderreturnInput>
  }

  export type OrderreturndetailCreateWithoutOrderreturnInput = {
    productName: string
    price: Decimal | DecimalJsLike | number | string
    qty: number
    total: Decimal | DecimalJsLike | number | string
    product: ProductCreateNestedOneWithoutOrderreturndetailInput
  }

  export type OrderreturndetailUncheckedCreateWithoutOrderreturnInput = {
    id?: number
    productId: number
    productName: string
    price: Decimal | DecimalJsLike | number | string
    qty: number
    total: Decimal | DecimalJsLike | number | string
  }

  export type OrderreturndetailCreateOrConnectWithoutOrderreturnInput = {
    where: OrderreturndetailWhereUniqueInput
    create: XOR<OrderreturndetailCreateWithoutOrderreturnInput, OrderreturndetailUncheckedCreateWithoutOrderreturnInput>
  }

  export type OrderreturndetailCreateManyOrderreturnInputEnvelope = {
    data: OrderreturndetailCreateManyOrderreturnInput | OrderreturndetailCreateManyOrderreturnInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutOrderreturnInput = {
    update: XOR<UserUpdateWithoutOrderreturnInput, UserUncheckedUpdateWithoutOrderreturnInput>
    create: XOR<UserCreateWithoutOrderreturnInput, UserUncheckedCreateWithoutOrderreturnInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOrderreturnInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOrderreturnInput, UserUncheckedUpdateWithoutOrderreturnInput>
  }

  export type UserUpdateWithoutOrderreturnInput = {
    userName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    Carts?: CartsUpdateManyWithoutUserNestedInput
    Orders?: OrdersUpdateManyWithoutUserNestedInput
    Purchase?: PurchaseUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOrderreturnInput = {
    id?: IntFieldUpdateOperationsInput | number
    userName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    Carts?: CartsUncheckedUpdateManyWithoutUserNestedInput
    Orders?: OrdersUncheckedUpdateManyWithoutUserNestedInput
    Purchase?: PurchaseUncheckedUpdateManyWithoutUserNestedInput
  }

  export type OrdersUpsertWithoutOrderreturnInput = {
    update: XOR<OrdersUpdateWithoutOrderreturnInput, OrdersUncheckedUpdateWithoutOrderreturnInput>
    create: XOR<OrdersCreateWithoutOrderreturnInput, OrdersUncheckedCreateWithoutOrderreturnInput>
    where?: OrdersWhereInput
  }

  export type OrdersUpdateToOneWithWhereWithoutOrderreturnInput = {
    where?: OrdersWhereInput
    data: XOR<OrdersUpdateWithoutOrderreturnInput, OrdersUncheckedUpdateWithoutOrderreturnInput>
  }

  export type OrdersUpdateWithoutOrderreturnInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    code?: StringFieldUpdateOperationsInput | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ppn?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    grandTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    user?: UserUpdateOneRequiredWithoutOrdersNestedInput
    Orderdetail?: OrderdetailUpdateManyWithoutOrderNestedInput
  }

  export type OrdersUncheckedUpdateWithoutOrderreturnInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    code?: StringFieldUpdateOperationsInput | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ppn?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    grandTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    userId?: IntFieldUpdateOperationsInput | number
    Orderdetail?: OrderdetailUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderreturndetailUpsertWithWhereUniqueWithoutOrderreturnInput = {
    where: OrderreturndetailWhereUniqueInput
    update: XOR<OrderreturndetailUpdateWithoutOrderreturnInput, OrderreturndetailUncheckedUpdateWithoutOrderreturnInput>
    create: XOR<OrderreturndetailCreateWithoutOrderreturnInput, OrderreturndetailUncheckedCreateWithoutOrderreturnInput>
  }

  export type OrderreturndetailUpdateWithWhereUniqueWithoutOrderreturnInput = {
    where: OrderreturndetailWhereUniqueInput
    data: XOR<OrderreturndetailUpdateWithoutOrderreturnInput, OrderreturndetailUncheckedUpdateWithoutOrderreturnInput>
  }

  export type OrderreturndetailUpdateManyWithWhereWithoutOrderreturnInput = {
    where: OrderreturndetailScalarWhereInput
    data: XOR<OrderreturndetailUpdateManyMutationInput, OrderreturndetailUncheckedUpdateManyWithoutOrderreturnInput>
  }

  export type OrderreturnCreateWithoutOrderreturndetailInput = {
    code: string
    date?: Date | string
    note?: string | null
    user: UserCreateNestedOneWithoutOrderreturnInput
    order: OrdersCreateNestedOneWithoutOrderreturnInput
  }

  export type OrderreturnUncheckedCreateWithoutOrderreturndetailInput = {
    id?: number
    code: string
    date?: Date | string
    note?: string | null
    orderId: number
    userId: number
  }

  export type OrderreturnCreateOrConnectWithoutOrderreturndetailInput = {
    where: OrderreturnWhereUniqueInput
    create: XOR<OrderreturnCreateWithoutOrderreturndetailInput, OrderreturnUncheckedCreateWithoutOrderreturndetailInput>
  }

  export type ProductCreateWithoutOrderreturndetailInput = {
    code: string
    barcode?: string | null
    productName: string
    image: string
    url: string
    qty: number
    price: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    kategory: CategoryCreateNestedOneWithoutProductInput
    supplier: SupplierCreateNestedOneWithoutProductInput
    Carts?: CartsCreateNestedManyWithoutProductInput
    Orderdetail?: OrderdetailCreateNestedManyWithoutProductInput
    Purchasedetail?: PurchasedetailCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutOrderreturndetailInput = {
    id?: number
    code: string
    barcode?: string | null
    productName: string
    image: string
    url: string
    qty: number
    price: Decimal | DecimalJsLike | number | string
    kategoryId: number
    supplierId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    Carts?: CartsUncheckedCreateNestedManyWithoutProductInput
    Orderdetail?: OrderdetailUncheckedCreateNestedManyWithoutProductInput
    Purchasedetail?: PurchasedetailUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutOrderreturndetailInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutOrderreturndetailInput, ProductUncheckedCreateWithoutOrderreturndetailInput>
  }

  export type OrderreturnUpsertWithoutOrderreturndetailInput = {
    update: XOR<OrderreturnUpdateWithoutOrderreturndetailInput, OrderreturnUncheckedUpdateWithoutOrderreturndetailInput>
    create: XOR<OrderreturnCreateWithoutOrderreturndetailInput, OrderreturnUncheckedCreateWithoutOrderreturndetailInput>
    where?: OrderreturnWhereInput
  }

  export type OrderreturnUpdateToOneWithWhereWithoutOrderreturndetailInput = {
    where?: OrderreturnWhereInput
    data: XOR<OrderreturnUpdateWithoutOrderreturndetailInput, OrderreturnUncheckedUpdateWithoutOrderreturndetailInput>
  }

  export type OrderreturnUpdateWithoutOrderreturndetailInput = {
    code?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutOrderreturnNestedInput
    order?: OrdersUpdateOneRequiredWithoutOrderreturnNestedInput
  }

  export type OrderreturnUncheckedUpdateWithoutOrderreturndetailInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    orderId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductUpsertWithoutOrderreturndetailInput = {
    update: XOR<ProductUpdateWithoutOrderreturndetailInput, ProductUncheckedUpdateWithoutOrderreturndetailInput>
    create: XOR<ProductCreateWithoutOrderreturndetailInput, ProductUncheckedCreateWithoutOrderreturndetailInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutOrderreturndetailInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutOrderreturndetailInput, ProductUncheckedUpdateWithoutOrderreturndetailInput>
  }

  export type ProductUpdateWithoutOrderreturndetailInput = {
    code?: StringFieldUpdateOperationsInput | string
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    productName?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kategory?: CategoryUpdateOneRequiredWithoutProductNestedInput
    supplier?: SupplierUpdateOneRequiredWithoutProductNestedInput
    Carts?: CartsUpdateManyWithoutProductNestedInput
    Orderdetail?: OrderdetailUpdateManyWithoutProductNestedInput
    Purchasedetail?: PurchasedetailUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutOrderreturndetailInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    productName?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    kategoryId?: IntFieldUpdateOperationsInput | number
    supplierId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Carts?: CartsUncheckedUpdateManyWithoutProductNestedInput
    Orderdetail?: OrderdetailUncheckedUpdateManyWithoutProductNestedInput
    Purchasedetail?: PurchasedetailUncheckedUpdateManyWithoutProductNestedInput
  }

  export type UserCreateWithoutPurchaseInput = {
    userName: string
    password: string
    name: string
    role: string
    Carts?: CartsCreateNestedManyWithoutUserInput
    Orders?: OrdersCreateNestedManyWithoutUserInput
    Orderreturn?: OrderreturnCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPurchaseInput = {
    id?: number
    userName: string
    password: string
    name: string
    role: string
    Carts?: CartsUncheckedCreateNestedManyWithoutUserInput
    Orders?: OrdersUncheckedCreateNestedManyWithoutUserInput
    Orderreturn?: OrderreturnUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPurchaseInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPurchaseInput, UserUncheckedCreateWithoutPurchaseInput>
  }

  export type PurchasedetailCreateWithoutPurchaseInput = {
    productName: string
    price: Decimal | DecimalJsLike | number | string
    qty: number
    total: Decimal | DecimalJsLike | number | string
    product: ProductCreateNestedOneWithoutPurchasedetailInput
  }

  export type PurchasedetailUncheckedCreateWithoutPurchaseInput = {
    id?: number
    productId: number
    productName: string
    price: Decimal | DecimalJsLike | number | string
    qty: number
    total: Decimal | DecimalJsLike | number | string
  }

  export type PurchasedetailCreateOrConnectWithoutPurchaseInput = {
    where: PurchasedetailWhereUniqueInput
    create: XOR<PurchasedetailCreateWithoutPurchaseInput, PurchasedetailUncheckedCreateWithoutPurchaseInput>
  }

  export type PurchasedetailCreateManyPurchaseInputEnvelope = {
    data: PurchasedetailCreateManyPurchaseInput | PurchasedetailCreateManyPurchaseInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutPurchaseInput = {
    update: XOR<UserUpdateWithoutPurchaseInput, UserUncheckedUpdateWithoutPurchaseInput>
    create: XOR<UserCreateWithoutPurchaseInput, UserUncheckedCreateWithoutPurchaseInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPurchaseInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPurchaseInput, UserUncheckedUpdateWithoutPurchaseInput>
  }

  export type UserUpdateWithoutPurchaseInput = {
    userName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    Carts?: CartsUpdateManyWithoutUserNestedInput
    Orders?: OrdersUpdateManyWithoutUserNestedInput
    Orderreturn?: OrderreturnUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPurchaseInput = {
    id?: IntFieldUpdateOperationsInput | number
    userName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    Carts?: CartsUncheckedUpdateManyWithoutUserNestedInput
    Orders?: OrdersUncheckedUpdateManyWithoutUserNestedInput
    Orderreturn?: OrderreturnUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PurchasedetailUpsertWithWhereUniqueWithoutPurchaseInput = {
    where: PurchasedetailWhereUniqueInput
    update: XOR<PurchasedetailUpdateWithoutPurchaseInput, PurchasedetailUncheckedUpdateWithoutPurchaseInput>
    create: XOR<PurchasedetailCreateWithoutPurchaseInput, PurchasedetailUncheckedCreateWithoutPurchaseInput>
  }

  export type PurchasedetailUpdateWithWhereUniqueWithoutPurchaseInput = {
    where: PurchasedetailWhereUniqueInput
    data: XOR<PurchasedetailUpdateWithoutPurchaseInput, PurchasedetailUncheckedUpdateWithoutPurchaseInput>
  }

  export type PurchasedetailUpdateManyWithWhereWithoutPurchaseInput = {
    where: PurchasedetailScalarWhereInput
    data: XOR<PurchasedetailUpdateManyMutationInput, PurchasedetailUncheckedUpdateManyWithoutPurchaseInput>
  }

  export type PurchaseCreateWithoutPurchasedetailInput = {
    code: string
    date: Date | string
    note: string
    total: Decimal | DecimalJsLike | number | string
    ppn: Decimal | DecimalJsLike | number | string
    grandTotal: Decimal | DecimalJsLike | number | string
    user: UserCreateNestedOneWithoutPurchaseInput
  }

  export type PurchaseUncheckedCreateWithoutPurchasedetailInput = {
    id?: number
    code: string
    date: Date | string
    note: string
    total: Decimal | DecimalJsLike | number | string
    ppn: Decimal | DecimalJsLike | number | string
    grandTotal: Decimal | DecimalJsLike | number | string
    userId: number
  }

  export type PurchaseCreateOrConnectWithoutPurchasedetailInput = {
    where: PurchaseWhereUniqueInput
    create: XOR<PurchaseCreateWithoutPurchasedetailInput, PurchaseUncheckedCreateWithoutPurchasedetailInput>
  }

  export type ProductCreateWithoutPurchasedetailInput = {
    code: string
    barcode?: string | null
    productName: string
    image: string
    url: string
    qty: number
    price: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    kategory: CategoryCreateNestedOneWithoutProductInput
    supplier: SupplierCreateNestedOneWithoutProductInput
    Carts?: CartsCreateNestedManyWithoutProductInput
    Orderdetail?: OrderdetailCreateNestedManyWithoutProductInput
    Orderreturndetail?: OrderreturndetailCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutPurchasedetailInput = {
    id?: number
    code: string
    barcode?: string | null
    productName: string
    image: string
    url: string
    qty: number
    price: Decimal | DecimalJsLike | number | string
    kategoryId: number
    supplierId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    Carts?: CartsUncheckedCreateNestedManyWithoutProductInput
    Orderdetail?: OrderdetailUncheckedCreateNestedManyWithoutProductInput
    Orderreturndetail?: OrderreturndetailUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutPurchasedetailInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutPurchasedetailInput, ProductUncheckedCreateWithoutPurchasedetailInput>
  }

  export type PurchaseUpsertWithoutPurchasedetailInput = {
    update: XOR<PurchaseUpdateWithoutPurchasedetailInput, PurchaseUncheckedUpdateWithoutPurchasedetailInput>
    create: XOR<PurchaseCreateWithoutPurchasedetailInput, PurchaseUncheckedCreateWithoutPurchasedetailInput>
    where?: PurchaseWhereInput
  }

  export type PurchaseUpdateToOneWithWhereWithoutPurchasedetailInput = {
    where?: PurchaseWhereInput
    data: XOR<PurchaseUpdateWithoutPurchasedetailInput, PurchaseUncheckedUpdateWithoutPurchasedetailInput>
  }

  export type PurchaseUpdateWithoutPurchasedetailInput = {
    code?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: StringFieldUpdateOperationsInput | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ppn?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    grandTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    user?: UserUpdateOneRequiredWithoutPurchaseNestedInput
  }

  export type PurchaseUncheckedUpdateWithoutPurchasedetailInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: StringFieldUpdateOperationsInput | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ppn?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    grandTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductUpsertWithoutPurchasedetailInput = {
    update: XOR<ProductUpdateWithoutPurchasedetailInput, ProductUncheckedUpdateWithoutPurchasedetailInput>
    create: XOR<ProductCreateWithoutPurchasedetailInput, ProductUncheckedCreateWithoutPurchasedetailInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutPurchasedetailInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutPurchasedetailInput, ProductUncheckedUpdateWithoutPurchasedetailInput>
  }

  export type ProductUpdateWithoutPurchasedetailInput = {
    code?: StringFieldUpdateOperationsInput | string
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    productName?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kategory?: CategoryUpdateOneRequiredWithoutProductNestedInput
    supplier?: SupplierUpdateOneRequiredWithoutProductNestedInput
    Carts?: CartsUpdateManyWithoutProductNestedInput
    Orderdetail?: OrderdetailUpdateManyWithoutProductNestedInput
    Orderreturndetail?: OrderreturndetailUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutPurchasedetailInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    productName?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    kategoryId?: IntFieldUpdateOperationsInput | number
    supplierId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Carts?: CartsUncheckedUpdateManyWithoutProductNestedInput
    Orderdetail?: OrderdetailUncheckedUpdateManyWithoutProductNestedInput
    Orderreturndetail?: OrderreturndetailUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyKategoryInput = {
    id?: number
    code: string
    barcode?: string | null
    productName: string
    image: string
    url: string
    qty: number
    price: Decimal | DecimalJsLike | number | string
    supplierId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateWithoutKategoryInput = {
    code?: StringFieldUpdateOperationsInput | string
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    productName?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    supplier?: SupplierUpdateOneRequiredWithoutProductNestedInput
    Carts?: CartsUpdateManyWithoutProductNestedInput
    Orderdetail?: OrderdetailUpdateManyWithoutProductNestedInput
    Orderreturndetail?: OrderreturndetailUpdateManyWithoutProductNestedInput
    Purchasedetail?: PurchasedetailUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutKategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    productName?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    supplierId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Carts?: CartsUncheckedUpdateManyWithoutProductNestedInput
    Orderdetail?: OrderdetailUncheckedUpdateManyWithoutProductNestedInput
    Orderreturndetail?: OrderreturndetailUncheckedUpdateManyWithoutProductNestedInput
    Purchasedetail?: PurchasedetailUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutKategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    productName?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    supplierId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartsCreateManyProductInput = {
    id?: number
    price: Decimal | DecimalJsLike | number | string
    productName: string
    qty: number
    totalPrice: Decimal | DecimalJsLike | number | string
    note: string
    userId: number
  }

  export type OrderdetailCreateManyProductInput = {
    id?: number
    price: Decimal | DecimalJsLike | number | string
    productName: string
    qty: number
    totalPrice: Decimal | DecimalJsLike | number | string
    note: string
    orderId: number
  }

  export type OrderreturndetailCreateManyProductInput = {
    id?: number
    productName: string
    price: Decimal | DecimalJsLike | number | string
    qty: number
    total: Decimal | DecimalJsLike | number | string
    returnId: number
  }

  export type PurchasedetailCreateManyProductInput = {
    id?: number
    productName: string
    price: Decimal | DecimalJsLike | number | string
    qty: number
    total: Decimal | DecimalJsLike | number | string
    purchaseId: number
  }

  export type CartsUpdateWithoutProductInput = {
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    productName?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    note?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutCartsNestedInput
  }

  export type CartsUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    productName?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    note?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type CartsUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    productName?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    note?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type OrderdetailUpdateWithoutProductInput = {
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    productName?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    note?: StringFieldUpdateOperationsInput | string
    order?: OrdersUpdateOneRequiredWithoutOrderdetailNestedInput
  }

  export type OrderdetailUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    productName?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    note?: StringFieldUpdateOperationsInput | string
    orderId?: IntFieldUpdateOperationsInput | number
  }

  export type OrderdetailUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    productName?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    note?: StringFieldUpdateOperationsInput | string
    orderId?: IntFieldUpdateOperationsInput | number
  }

  export type OrderreturndetailUpdateWithoutProductInput = {
    productName?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    qty?: IntFieldUpdateOperationsInput | number
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    orderreturn?: OrderreturnUpdateOneRequiredWithoutOrderreturndetailNestedInput
  }

  export type OrderreturndetailUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    productName?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    qty?: IntFieldUpdateOperationsInput | number
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    returnId?: IntFieldUpdateOperationsInput | number
  }

  export type OrderreturndetailUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    productName?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    qty?: IntFieldUpdateOperationsInput | number
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    returnId?: IntFieldUpdateOperationsInput | number
  }

  export type PurchasedetailUpdateWithoutProductInput = {
    productName?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    qty?: IntFieldUpdateOperationsInput | number
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    purchase?: PurchaseUpdateOneRequiredWithoutPurchasedetailNestedInput
  }

  export type PurchasedetailUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    productName?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    qty?: IntFieldUpdateOperationsInput | number
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    purchaseId?: IntFieldUpdateOperationsInput | number
  }

  export type PurchasedetailUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    productName?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    qty?: IntFieldUpdateOperationsInput | number
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    purchaseId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductCreateManySupplierInput = {
    id?: number
    code: string
    barcode?: string | null
    productName: string
    image: string
    url: string
    qty: number
    price: Decimal | DecimalJsLike | number | string
    kategoryId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateWithoutSupplierInput = {
    code?: StringFieldUpdateOperationsInput | string
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    productName?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kategory?: CategoryUpdateOneRequiredWithoutProductNestedInput
    Carts?: CartsUpdateManyWithoutProductNestedInput
    Orderdetail?: OrderdetailUpdateManyWithoutProductNestedInput
    Orderreturndetail?: OrderreturndetailUpdateManyWithoutProductNestedInput
    Purchasedetail?: PurchasedetailUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutSupplierInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    productName?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    kategoryId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Carts?: CartsUncheckedUpdateManyWithoutProductNestedInput
    Orderdetail?: OrderdetailUncheckedUpdateManyWithoutProductNestedInput
    Orderreturndetail?: OrderreturndetailUncheckedUpdateManyWithoutProductNestedInput
    Purchasedetail?: PurchasedetailUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutSupplierInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    productName?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    kategoryId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderdetailCreateManyOrderInput = {
    id?: number
    price: Decimal | DecimalJsLike | number | string
    productName: string
    qty: number
    totalPrice: Decimal | DecimalJsLike | number | string
    note: string
    productId: number
  }

  export type OrderreturnCreateManyOrderInput = {
    id?: number
    code: string
    date?: Date | string
    note?: string | null
    userId: number
  }

  export type OrderdetailUpdateWithoutOrderInput = {
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    productName?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    note?: StringFieldUpdateOperationsInput | string
    product?: ProductUpdateOneRequiredWithoutOrderdetailNestedInput
  }

  export type OrderdetailUncheckedUpdateWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    productName?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    note?: StringFieldUpdateOperationsInput | string
    productId?: IntFieldUpdateOperationsInput | number
  }

  export type OrderdetailUncheckedUpdateManyWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    productName?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    note?: StringFieldUpdateOperationsInput | string
    productId?: IntFieldUpdateOperationsInput | number
  }

  export type OrderreturnUpdateWithoutOrderInput = {
    code?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutOrderreturnNestedInput
    Orderreturndetail?: OrderreturndetailUpdateManyWithoutOrderreturnNestedInput
  }

  export type OrderreturnUncheckedUpdateWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    Orderreturndetail?: OrderreturndetailUncheckedUpdateManyWithoutOrderreturnNestedInput
  }

  export type OrderreturnUncheckedUpdateManyWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type CartsCreateManyUserInput = {
    id?: number
    price: Decimal | DecimalJsLike | number | string
    productName: string
    qty: number
    totalPrice: Decimal | DecimalJsLike | number | string
    note: string
    productId: number
  }

  export type OrdersCreateManyUserInput = {
    id?: number
    date?: Date | string
    code: string
    total: Decimal | DecimalJsLike | number | string
    ppn: Decimal | DecimalJsLike | number | string
    grandTotal: Decimal | DecimalJsLike | number | string
  }

  export type OrderreturnCreateManyUserInput = {
    id?: number
    code: string
    date?: Date | string
    note?: string | null
    orderId: number
  }

  export type PurchaseCreateManyUserInput = {
    id?: number
    code: string
    date: Date | string
    note: string
    total: Decimal | DecimalJsLike | number | string
    ppn: Decimal | DecimalJsLike | number | string
    grandTotal: Decimal | DecimalJsLike | number | string
  }

  export type CartsUpdateWithoutUserInput = {
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    productName?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    note?: StringFieldUpdateOperationsInput | string
    product?: ProductUpdateOneRequiredWithoutCartsNestedInput
  }

  export type CartsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    productName?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    note?: StringFieldUpdateOperationsInput | string
    productId?: IntFieldUpdateOperationsInput | number
  }

  export type CartsUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    productName?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    note?: StringFieldUpdateOperationsInput | string
    productId?: IntFieldUpdateOperationsInput | number
  }

  export type OrdersUpdateWithoutUserInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    code?: StringFieldUpdateOperationsInput | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ppn?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    grandTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Orderdetail?: OrderdetailUpdateManyWithoutOrderNestedInput
    Orderreturn?: OrderreturnUpdateManyWithoutOrderNestedInput
  }

  export type OrdersUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    code?: StringFieldUpdateOperationsInput | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ppn?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    grandTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Orderdetail?: OrderdetailUncheckedUpdateManyWithoutOrderNestedInput
    Orderreturn?: OrderreturnUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrdersUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    code?: StringFieldUpdateOperationsInput | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ppn?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    grandTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type OrderreturnUpdateWithoutUserInput = {
    code?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    order?: OrdersUpdateOneRequiredWithoutOrderreturnNestedInput
    Orderreturndetail?: OrderreturndetailUpdateManyWithoutOrderreturnNestedInput
  }

  export type OrderreturnUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    orderId?: IntFieldUpdateOperationsInput | number
    Orderreturndetail?: OrderreturndetailUncheckedUpdateManyWithoutOrderreturnNestedInput
  }

  export type OrderreturnUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    orderId?: IntFieldUpdateOperationsInput | number
  }

  export type PurchaseUpdateWithoutUserInput = {
    code?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: StringFieldUpdateOperationsInput | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ppn?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    grandTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Purchasedetail?: PurchasedetailUpdateManyWithoutPurchaseNestedInput
  }

  export type PurchaseUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: StringFieldUpdateOperationsInput | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ppn?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    grandTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Purchasedetail?: PurchasedetailUncheckedUpdateManyWithoutPurchaseNestedInput
  }

  export type PurchaseUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: StringFieldUpdateOperationsInput | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ppn?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    grandTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type OrderreturndetailCreateManyOrderreturnInput = {
    id?: number
    productId: number
    productName: string
    price: Decimal | DecimalJsLike | number | string
    qty: number
    total: Decimal | DecimalJsLike | number | string
  }

  export type OrderreturndetailUpdateWithoutOrderreturnInput = {
    productName?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    qty?: IntFieldUpdateOperationsInput | number
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    product?: ProductUpdateOneRequiredWithoutOrderreturndetailNestedInput
  }

  export type OrderreturndetailUncheckedUpdateWithoutOrderreturnInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    productName?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    qty?: IntFieldUpdateOperationsInput | number
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type OrderreturndetailUncheckedUpdateManyWithoutOrderreturnInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    productName?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    qty?: IntFieldUpdateOperationsInput | number
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type PurchasedetailCreateManyPurchaseInput = {
    id?: number
    productId: number
    productName: string
    price: Decimal | DecimalJsLike | number | string
    qty: number
    total: Decimal | DecimalJsLike | number | string
  }

  export type PurchasedetailUpdateWithoutPurchaseInput = {
    productName?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    qty?: IntFieldUpdateOperationsInput | number
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    product?: ProductUpdateOneRequiredWithoutPurchasedetailNestedInput
  }

  export type PurchasedetailUncheckedUpdateWithoutPurchaseInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    productName?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    qty?: IntFieldUpdateOperationsInput | number
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type PurchasedetailUncheckedUpdateManyWithoutPurchaseInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    productName?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    qty?: IntFieldUpdateOperationsInput | number
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
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