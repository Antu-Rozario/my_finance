
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model VerificationToken
 * 
 */
export type VerificationToken = $Result.DefaultSelection<Prisma.$VerificationTokenPayload>
/**
 * Model FinanceAccount
 * 
 */
export type FinanceAccount = $Result.DefaultSelection<Prisma.$FinanceAccountPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model PayeePayer
 * 
 */
export type PayeePayer = $Result.DefaultSelection<Prisma.$PayeePayerPayload>
/**
 * Model PaymentMethod
 * 
 */
export type PaymentMethod = $Result.DefaultSelection<Prisma.$PaymentMethodPayload>
/**
 * Model Transaction
 * 
 */
export type Transaction = $Result.DefaultSelection<Prisma.$TransactionPayload>
/**
 * Model RecurringTransaction
 * 
 */
export type RecurringTransaction = $Result.DefaultSelection<Prisma.$RecurringTransactionPayload>
/**
 * Model Settings
 * 
 */
export type Settings = $Result.DefaultSelection<Prisma.$SettingsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const CategoryType: {
  INCOME: 'INCOME',
  EXPENSE: 'EXPENSE'
};

export type CategoryType = (typeof CategoryType)[keyof typeof CategoryType]


export const PayeePayerType: {
  PAYEE: 'PAYEE',
  PAYER: 'PAYER'
};

export type PayeePayerType = (typeof PayeePayerType)[keyof typeof PayeePayerType]


export const TransactionType: {
  INCOME: 'INCOME',
  EXPENSE: 'EXPENSE',
  TRANSFER: 'TRANSFER'
};

export type TransactionType = (typeof TransactionType)[keyof typeof TransactionType]


export const RecurringStatus: {
  PAID: 'PAID',
  UNPAID: 'UNPAID',
  PENDING: 'PENDING',
  RECEIVE: 'RECEIVE'
};

export type RecurringStatus = (typeof RecurringStatus)[keyof typeof RecurringStatus]


export const RecurringFrequency: {
  DAILY: 'DAILY',
  WEEKLY: 'WEEKLY',
  MONTHLY: 'MONTHLY',
  YEARLY: 'YEARLY'
};

export type RecurringFrequency = (typeof RecurringFrequency)[keyof typeof RecurringFrequency]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type CategoryType = $Enums.CategoryType

export const CategoryType: typeof $Enums.CategoryType

export type PayeePayerType = $Enums.PayeePayerType

export const PayeePayerType: typeof $Enums.PayeePayerType

export type TransactionType = $Enums.TransactionType

export const TransactionType: typeof $Enums.TransactionType

export type RecurringStatus = $Enums.RecurringStatus

export const RecurringStatus: typeof $Enums.RecurringStatus

export type RecurringFrequency = $Enums.RecurringFrequency

export const RecurringFrequency: typeof $Enums.RecurringFrequency

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verificationToken`: Exposes CRUD operations for the **VerificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationTokens
    * const verificationTokens = await prisma.verificationToken.findMany()
    * ```
    */
  get verificationToken(): Prisma.VerificationTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.financeAccount`: Exposes CRUD operations for the **FinanceAccount** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FinanceAccounts
    * const financeAccounts = await prisma.financeAccount.findMany()
    * ```
    */
  get financeAccount(): Prisma.FinanceAccountDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.payeePayer`: Exposes CRUD operations for the **PayeePayer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PayeePayers
    * const payeePayers = await prisma.payeePayer.findMany()
    * ```
    */
  get payeePayer(): Prisma.PayeePayerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.paymentMethod`: Exposes CRUD operations for the **PaymentMethod** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PaymentMethods
    * const paymentMethods = await prisma.paymentMethod.findMany()
    * ```
    */
  get paymentMethod(): Prisma.PaymentMethodDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transaction`: Exposes CRUD operations for the **Transaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transaction.findMany()
    * ```
    */
  get transaction(): Prisma.TransactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.recurringTransaction`: Exposes CRUD operations for the **RecurringTransaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RecurringTransactions
    * const recurringTransactions = await prisma.recurringTransaction.findMany()
    * ```
    */
  get recurringTransaction(): Prisma.RecurringTransactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.settings`: Exposes CRUD operations for the **Settings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Settings
    * const settings = await prisma.settings.findMany()
    * ```
    */
  get settings(): Prisma.SettingsDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.3.0
   * Query Engine version: 9d6ad21cbbceab97458517b147a6a09ff43aa735
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    User: 'User',
    Account: 'Account',
    Session: 'Session',
    VerificationToken: 'VerificationToken',
    FinanceAccount: 'FinanceAccount',
    Category: 'Category',
    PayeePayer: 'PayeePayer',
    PaymentMethod: 'PaymentMethod',
    Transaction: 'Transaction',
    RecurringTransaction: 'RecurringTransaction',
    Settings: 'Settings'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "account" | "session" | "verificationToken" | "financeAccount" | "category" | "payeePayer" | "paymentMethod" | "transaction" | "recurringTransaction" | "settings"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
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
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      VerificationToken: {
        payload: Prisma.$VerificationTokenPayload<ExtArgs>
        fields: Prisma.VerificationTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findFirst: {
            args: Prisma.VerificationTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findMany: {
            args: Prisma.VerificationTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          create: {
            args: Prisma.VerificationTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          createMany: {
            args: Prisma.VerificationTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          delete: {
            args: Prisma.VerificationTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          update: {
            args: Prisma.VerificationTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          deleteMany: {
            args: Prisma.VerificationTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          upsert: {
            args: Prisma.VerificationTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          aggregate: {
            args: Prisma.VerificationTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerificationToken>
          }
          groupBy: {
            args: Prisma.VerificationTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationTokenCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenCountAggregateOutputType> | number
          }
        }
      }
      FinanceAccount: {
        payload: Prisma.$FinanceAccountPayload<ExtArgs>
        fields: Prisma.FinanceAccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FinanceAccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinanceAccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FinanceAccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinanceAccountPayload>
          }
          findFirst: {
            args: Prisma.FinanceAccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinanceAccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FinanceAccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinanceAccountPayload>
          }
          findMany: {
            args: Prisma.FinanceAccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinanceAccountPayload>[]
          }
          create: {
            args: Prisma.FinanceAccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinanceAccountPayload>
          }
          createMany: {
            args: Prisma.FinanceAccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FinanceAccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinanceAccountPayload>[]
          }
          delete: {
            args: Prisma.FinanceAccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinanceAccountPayload>
          }
          update: {
            args: Prisma.FinanceAccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinanceAccountPayload>
          }
          deleteMany: {
            args: Prisma.FinanceAccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FinanceAccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FinanceAccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinanceAccountPayload>[]
          }
          upsert: {
            args: Prisma.FinanceAccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinanceAccountPayload>
          }
          aggregate: {
            args: Prisma.FinanceAccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFinanceAccount>
          }
          groupBy: {
            args: Prisma.FinanceAccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<FinanceAccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.FinanceAccountCountArgs<ExtArgs>
            result: $Utils.Optional<FinanceAccountCountAggregateOutputType> | number
          }
        }
      }
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
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
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
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
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
      PayeePayer: {
        payload: Prisma.$PayeePayerPayload<ExtArgs>
        fields: Prisma.PayeePayerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PayeePayerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayeePayerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PayeePayerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayeePayerPayload>
          }
          findFirst: {
            args: Prisma.PayeePayerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayeePayerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PayeePayerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayeePayerPayload>
          }
          findMany: {
            args: Prisma.PayeePayerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayeePayerPayload>[]
          }
          create: {
            args: Prisma.PayeePayerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayeePayerPayload>
          }
          createMany: {
            args: Prisma.PayeePayerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PayeePayerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayeePayerPayload>[]
          }
          delete: {
            args: Prisma.PayeePayerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayeePayerPayload>
          }
          update: {
            args: Prisma.PayeePayerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayeePayerPayload>
          }
          deleteMany: {
            args: Prisma.PayeePayerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PayeePayerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PayeePayerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayeePayerPayload>[]
          }
          upsert: {
            args: Prisma.PayeePayerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayeePayerPayload>
          }
          aggregate: {
            args: Prisma.PayeePayerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayeePayer>
          }
          groupBy: {
            args: Prisma.PayeePayerGroupByArgs<ExtArgs>
            result: $Utils.Optional<PayeePayerGroupByOutputType>[]
          }
          count: {
            args: Prisma.PayeePayerCountArgs<ExtArgs>
            result: $Utils.Optional<PayeePayerCountAggregateOutputType> | number
          }
        }
      }
      PaymentMethod: {
        payload: Prisma.$PaymentMethodPayload<ExtArgs>
        fields: Prisma.PaymentMethodFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentMethodFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentMethodFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload>
          }
          findFirst: {
            args: Prisma.PaymentMethodFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentMethodFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload>
          }
          findMany: {
            args: Prisma.PaymentMethodFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload>[]
          }
          create: {
            args: Prisma.PaymentMethodCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload>
          }
          createMany: {
            args: Prisma.PaymentMethodCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentMethodCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload>[]
          }
          delete: {
            args: Prisma.PaymentMethodDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload>
          }
          update: {
            args: Prisma.PaymentMethodUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload>
          }
          deleteMany: {
            args: Prisma.PaymentMethodDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentMethodUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentMethodUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload>[]
          }
          upsert: {
            args: Prisma.PaymentMethodUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload>
          }
          aggregate: {
            args: Prisma.PaymentMethodAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePaymentMethod>
          }
          groupBy: {
            args: Prisma.PaymentMethodGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentMethodGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentMethodCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentMethodCountAggregateOutputType> | number
          }
        }
      }
      Transaction: {
        payload: Prisma.$TransactionPayload<ExtArgs>
        fields: Prisma.TransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findFirst: {
            args: Prisma.TransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findMany: {
            args: Prisma.TransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          create: {
            args: Prisma.TransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          createMany: {
            args: Prisma.TransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          delete: {
            args: Prisma.TransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          update: {
            args: Prisma.TransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          deleteMany: {
            args: Prisma.TransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TransactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          upsert: {
            args: Prisma.TransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          aggregate: {
            args: Prisma.TransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaction>
          }
          groupBy: {
            args: Prisma.TransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionCountAggregateOutputType> | number
          }
        }
      }
      RecurringTransaction: {
        payload: Prisma.$RecurringTransactionPayload<ExtArgs>
        fields: Prisma.RecurringTransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RecurringTransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurringTransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RecurringTransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurringTransactionPayload>
          }
          findFirst: {
            args: Prisma.RecurringTransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurringTransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RecurringTransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurringTransactionPayload>
          }
          findMany: {
            args: Prisma.RecurringTransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurringTransactionPayload>[]
          }
          create: {
            args: Prisma.RecurringTransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurringTransactionPayload>
          }
          createMany: {
            args: Prisma.RecurringTransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RecurringTransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurringTransactionPayload>[]
          }
          delete: {
            args: Prisma.RecurringTransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurringTransactionPayload>
          }
          update: {
            args: Prisma.RecurringTransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurringTransactionPayload>
          }
          deleteMany: {
            args: Prisma.RecurringTransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RecurringTransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RecurringTransactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurringTransactionPayload>[]
          }
          upsert: {
            args: Prisma.RecurringTransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurringTransactionPayload>
          }
          aggregate: {
            args: Prisma.RecurringTransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecurringTransaction>
          }
          groupBy: {
            args: Prisma.RecurringTransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecurringTransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.RecurringTransactionCountArgs<ExtArgs>
            result: $Utils.Optional<RecurringTransactionCountAggregateOutputType> | number
          }
        }
      }
      Settings: {
        payload: Prisma.$SettingsPayload<ExtArgs>
        fields: Prisma.SettingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SettingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SettingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          findFirst: {
            args: Prisma.SettingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SettingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          findMany: {
            args: Prisma.SettingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>[]
          }
          create: {
            args: Prisma.SettingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          createMany: {
            args: Prisma.SettingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SettingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>[]
          }
          delete: {
            args: Prisma.SettingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          update: {
            args: Prisma.SettingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          deleteMany: {
            args: Prisma.SettingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SettingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SettingsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>[]
          }
          upsert: {
            args: Prisma.SettingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          aggregate: {
            args: Prisma.SettingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSettings>
          }
          groupBy: {
            args: Prisma.SettingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SettingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.SettingsCountArgs<ExtArgs>
            result: $Utils.Optional<SettingsCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    account?: AccountOmit
    session?: SessionOmit
    verificationToken?: VerificationTokenOmit
    financeAccount?: FinanceAccountOmit
    category?: CategoryOmit
    payeePayer?: PayeePayerOmit
    paymentMethod?: PaymentMethodOmit
    transaction?: TransactionOmit
    recurringTransaction?: RecurringTransactionOmit
    settings?: SettingsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    accounts: number
    sessions: number
    financeAccounts: number
    categories: number
    payeesPayers: number
    paymentMethods: number
    transactions: number
    recurringTransactions: number
    settings: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    financeAccounts?: boolean | UserCountOutputTypeCountFinanceAccountsArgs
    categories?: boolean | UserCountOutputTypeCountCategoriesArgs
    payeesPayers?: boolean | UserCountOutputTypeCountPayeesPayersArgs
    paymentMethods?: boolean | UserCountOutputTypeCountPaymentMethodsArgs
    transactions?: boolean | UserCountOutputTypeCountTransactionsArgs
    recurringTransactions?: boolean | UserCountOutputTypeCountRecurringTransactionsArgs
    settings?: boolean | UserCountOutputTypeCountSettingsArgs
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
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFinanceAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FinanceAccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPayeesPayersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PayeePayerWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPaymentMethodsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentMethodWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRecurringTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecurringTransactionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSettingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SettingsWhereInput
  }


  /**
   * Count Type FinanceAccountCountOutputType
   */

  export type FinanceAccountCountOutputType = {
    transactions: number
    recurringTransactions: number
    transfersTo: number
  }

  export type FinanceAccountCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | FinanceAccountCountOutputTypeCountTransactionsArgs
    recurringTransactions?: boolean | FinanceAccountCountOutputTypeCountRecurringTransactionsArgs
    transfersTo?: boolean | FinanceAccountCountOutputTypeCountTransfersToArgs
  }

  // Custom InputTypes
  /**
   * FinanceAccountCountOutputType without action
   */
  export type FinanceAccountCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinanceAccountCountOutputType
     */
    select?: FinanceAccountCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FinanceAccountCountOutputType without action
   */
  export type FinanceAccountCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }

  /**
   * FinanceAccountCountOutputType without action
   */
  export type FinanceAccountCountOutputTypeCountRecurringTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecurringTransactionWhereInput
  }

  /**
   * FinanceAccountCountOutputType without action
   */
  export type FinanceAccountCountOutputTypeCountTransfersToArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    transactions: number
    recurringTransactions: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | CategoryCountOutputTypeCountTransactionsArgs
    recurringTransactions?: boolean | CategoryCountOutputTypeCountRecurringTransactionsArgs
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
  export type CategoryCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountRecurringTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecurringTransactionWhereInput
  }


  /**
   * Count Type PayeePayerCountOutputType
   */

  export type PayeePayerCountOutputType = {
    payerTransactions: number
    payeeTransactions: number
    recurringAsPayer: number
    recurringAsPayee: number
  }

  export type PayeePayerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payerTransactions?: boolean | PayeePayerCountOutputTypeCountPayerTransactionsArgs
    payeeTransactions?: boolean | PayeePayerCountOutputTypeCountPayeeTransactionsArgs
    recurringAsPayer?: boolean | PayeePayerCountOutputTypeCountRecurringAsPayerArgs
    recurringAsPayee?: boolean | PayeePayerCountOutputTypeCountRecurringAsPayeeArgs
  }

  // Custom InputTypes
  /**
   * PayeePayerCountOutputType without action
   */
  export type PayeePayerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayeePayerCountOutputType
     */
    select?: PayeePayerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PayeePayerCountOutputType without action
   */
  export type PayeePayerCountOutputTypeCountPayerTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }

  /**
   * PayeePayerCountOutputType without action
   */
  export type PayeePayerCountOutputTypeCountPayeeTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }

  /**
   * PayeePayerCountOutputType without action
   */
  export type PayeePayerCountOutputTypeCountRecurringAsPayerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecurringTransactionWhereInput
  }

  /**
   * PayeePayerCountOutputType without action
   */
  export type PayeePayerCountOutputTypeCountRecurringAsPayeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecurringTransactionWhereInput
  }


  /**
   * Count Type PaymentMethodCountOutputType
   */

  export type PaymentMethodCountOutputType = {
    transactions: number
    recurringTransactions: number
  }

  export type PaymentMethodCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | PaymentMethodCountOutputTypeCountTransactionsArgs
    recurringTransactions?: boolean | PaymentMethodCountOutputTypeCountRecurringTransactionsArgs
  }

  // Custom InputTypes
  /**
   * PaymentMethodCountOutputType without action
   */
  export type PaymentMethodCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethodCountOutputType
     */
    select?: PaymentMethodCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PaymentMethodCountOutputType without action
   */
  export type PaymentMethodCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }

  /**
   * PaymentMethodCountOutputType without action
   */
  export type PaymentMethodCountOutputTypeCountRecurringTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecurringTransactionWhereInput
  }


  /**
   * Models
   */

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
    name: string | null
    email: string | null
    emailVerified: Date | null
    password: string | null
    role: $Enums.UserRole | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    password: string | null
    role: $Enums.UserRole | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    password: number
    role: number
    image: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    password?: true
    role?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    password?: true
    role?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    password?: true
    role?: true
    image?: true
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
    name: string | null
    email: string
    emailVerified: Date | null
    password: string
    role: $Enums.UserRole
    image: string | null
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
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    password?: boolean
    role?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    financeAccounts?: boolean | User$financeAccountsArgs<ExtArgs>
    categories?: boolean | User$categoriesArgs<ExtArgs>
    payeesPayers?: boolean | User$payeesPayersArgs<ExtArgs>
    paymentMethods?: boolean | User$paymentMethodsArgs<ExtArgs>
    transactions?: boolean | User$transactionsArgs<ExtArgs>
    recurringTransactions?: boolean | User$recurringTransactionsArgs<ExtArgs>
    settings?: boolean | User$settingsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    password?: boolean
    role?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    password?: boolean
    role?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    password?: boolean
    role?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "emailVerified" | "password" | "role" | "image" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    financeAccounts?: boolean | User$financeAccountsArgs<ExtArgs>
    categories?: boolean | User$categoriesArgs<ExtArgs>
    payeesPayers?: boolean | User$payeesPayersArgs<ExtArgs>
    paymentMethods?: boolean | User$paymentMethodsArgs<ExtArgs>
    transactions?: boolean | User$transactionsArgs<ExtArgs>
    recurringTransactions?: boolean | User$recurringTransactionsArgs<ExtArgs>
    settings?: boolean | User$settingsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      financeAccounts: Prisma.$FinanceAccountPayload<ExtArgs>[]
      categories: Prisma.$CategoryPayload<ExtArgs>[]
      payeesPayers: Prisma.$PayeePayerPayload<ExtArgs>[]
      paymentMethods: Prisma.$PaymentMethodPayload<ExtArgs>[]
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
      recurringTransactions: Prisma.$RecurringTransactionPayload<ExtArgs>[]
      settings: Prisma.$SettingsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string
      emailVerified: Date | null
      password: string
      role: $Enums.UserRole
      image: string | null
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
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    financeAccounts<T extends User$financeAccountsArgs<ExtArgs> = {}>(args?: Subset<T, User$financeAccountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinanceAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    categories<T extends User$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, User$categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payeesPayers<T extends User$payeesPayersArgs<ExtArgs> = {}>(args?: Subset<T, User$payeesPayersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayeePayerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    paymentMethods<T extends User$paymentMethodsArgs<ExtArgs> = {}>(args?: Subset<T, User$paymentMethodsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    transactions<T extends User$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, User$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    recurringTransactions<T extends User$recurringTransactionsArgs<ExtArgs> = {}>(args?: Subset<T, User$recurringTransactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecurringTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    settings<T extends User$settingsArgs<ExtArgs> = {}>(args?: Subset<T, User$settingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'DateTime'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly image: FieldRef<"User", 'String'>
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
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.financeAccounts
   */
  export type User$financeAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinanceAccount
     */
    select?: FinanceAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinanceAccount
     */
    omit?: FinanceAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinanceAccountInclude<ExtArgs> | null
    where?: FinanceAccountWhereInput
    orderBy?: FinanceAccountOrderByWithRelationInput | FinanceAccountOrderByWithRelationInput[]
    cursor?: FinanceAccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FinanceAccountScalarFieldEnum | FinanceAccountScalarFieldEnum[]
  }

  /**
   * User.categories
   */
  export type User$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    cursor?: CategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * User.payeesPayers
   */
  export type User$payeesPayersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayeePayer
     */
    select?: PayeePayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayeePayer
     */
    omit?: PayeePayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayeePayerInclude<ExtArgs> | null
    where?: PayeePayerWhereInput
    orderBy?: PayeePayerOrderByWithRelationInput | PayeePayerOrderByWithRelationInput[]
    cursor?: PayeePayerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PayeePayerScalarFieldEnum | PayeePayerScalarFieldEnum[]
  }

  /**
   * User.paymentMethods
   */
  export type User$paymentMethodsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethod
     */
    omit?: PaymentMethodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
    where?: PaymentMethodWhereInput
    orderBy?: PaymentMethodOrderByWithRelationInput | PaymentMethodOrderByWithRelationInput[]
    cursor?: PaymentMethodWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentMethodScalarFieldEnum | PaymentMethodScalarFieldEnum[]
  }

  /**
   * User.transactions
   */
  export type User$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * User.recurringTransactions
   */
  export type User$recurringTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringTransaction
     */
    select?: RecurringTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringTransaction
     */
    omit?: RecurringTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurringTransactionInclude<ExtArgs> | null
    where?: RecurringTransactionWhereInput
    orderBy?: RecurringTransactionOrderByWithRelationInput | RecurringTransactionOrderByWithRelationInput[]
    cursor?: RecurringTransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecurringTransactionScalarFieldEnum | RecurringTransactionScalarFieldEnum[]
  }

  /**
   * User.settings
   */
  export type User$settingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingsInclude<ExtArgs> | null
    where?: SettingsWhereInput
    orderBy?: SettingsOrderByWithRelationInput | SettingsOrderByWithRelationInput[]
    cursor?: SettingsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SettingsScalarFieldEnum | SettingsScalarFieldEnum[]
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
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountSumAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountMinAggregateOutputType = {
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountMaxAggregateOutputType = {
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountCountAggregateOutputType = {
    userId: number
    type: number
    provider: number
    providerAccountId: number
    refresh_token: number
    access_token: number
    expires_at: number
    token_type: number
    scope: number
    id_token: number
    session_state: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    expires_at?: true
  }

  export type AccountSumAggregateInputType = {
    expires_at?: true
  }

  export type AccountMinAggregateInputType = {
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountMaxAggregateInputType = {
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountCountAggregateInputType = {
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    createdAt: Date
    updatedAt: Date
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "type" | "provider" | "providerAccountId" | "refresh_token" | "access_token" | "expires_at" | "token_type" | "scope" | "id_token" | "session_state" | "createdAt" | "updatedAt", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      type: string
      provider: string
      providerAccountId: string
      refresh_token: string | null
      access_token: string | null
      expires_at: number | null
      token_type: string | null
      scope: string | null
      id_token: string | null
      session_state: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const accountWithUserIdOnly = await prisma.account.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `userId`
     * const accountWithUserIdOnly = await prisma.account.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `userId`
     * const accountWithUserIdOnly = await prisma.account.updateManyAndReturn({
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
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
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
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly userId: FieldRef<"Account", 'String'>
    readonly type: FieldRef<"Account", 'String'>
    readonly provider: FieldRef<"Account", 'String'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly refresh_token: FieldRef<"Account", 'String'>
    readonly access_token: FieldRef<"Account", 'String'>
    readonly expires_at: FieldRef<"Account", 'Int'>
    readonly token_type: FieldRef<"Account", 'String'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly id_token: FieldRef<"Account", 'String'>
    readonly session_state: FieldRef<"Account", 'String'>
    readonly createdAt: FieldRef<"Account", 'DateTime'>
    readonly updatedAt: FieldRef<"Account", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    sessionToken: string | null
    userId: string | null
    expires: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    sessionToken: string | null
    userId: string | null
    expires: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SessionCountAggregateOutputType = {
    sessionToken: number
    userId: number
    expires: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    sessionToken?: true
    userId?: true
    expires?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SessionMaxAggregateInputType = {
    sessionToken?: true
    userId?: true
    expires?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SessionCountAggregateInputType = {
    sessionToken?: true
    userId?: true
    expires?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    sessionToken: string
    userId: string
    expires: Date
    createdAt: Date
    updatedAt: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"sessionToken" | "userId" | "expires" | "createdAt" | "updatedAt", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      sessionToken: string
      userId: string
      expires: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `sessionToken`
     * const sessionWithSessionTokenOnly = await prisma.session.findMany({ select: { sessionToken: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `sessionToken`
     * const sessionWithSessionTokenOnly = await prisma.session.createManyAndReturn({
     *   select: { sessionToken: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `sessionToken`
     * const sessionWithSessionTokenOnly = await prisma.session.updateManyAndReturn({
     *   select: { sessionToken: true },
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
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly sessionToken: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly expires: FieldRef<"Session", 'DateTime'>
    readonly createdAt: FieldRef<"Session", 'DateTime'>
    readonly updatedAt: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model VerificationToken
   */

  export type AggregateVerificationToken = {
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  export type VerificationTokenMinAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenMaxAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenCountAggregateOutputType = {
    identifier: number
    token: number
    expires: number
    _all: number
  }


  export type VerificationTokenMinAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenMaxAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenCountAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
    _all?: true
  }

  export type VerificationTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationToken to aggregate.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationTokens
    **/
    _count?: true | VerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type GetVerificationTokenAggregateType<T extends VerificationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationToken[P]>
      : GetScalarType<T[P], AggregateVerificationToken[P]>
  }




  export type VerificationTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationTokenWhereInput
    orderBy?: VerificationTokenOrderByWithAggregationInput | VerificationTokenOrderByWithAggregationInput[]
    by: VerificationTokenScalarFieldEnum[] | VerificationTokenScalarFieldEnum
    having?: VerificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationTokenCountAggregateInputType | true
    _min?: VerificationTokenMinAggregateInputType
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type VerificationTokenGroupByOutputType = {
    identifier: string
    token: string
    expires: Date
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  type GetVerificationTokenGroupByPayload<T extends VerificationTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type VerificationTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectScalar = {
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }

  export type VerificationTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"identifier" | "token" | "expires", ExtArgs["result"]["verificationToken"]>

  export type $VerificationTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      identifier: string
      token: string
      expires: Date
    }, ExtArgs["result"]["verificationToken"]>
    composites: {}
  }

  type VerificationTokenGetPayload<S extends boolean | null | undefined | VerificationTokenDefaultArgs> = $Result.GetResult<Prisma.$VerificationTokenPayload, S>

  type VerificationTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationTokenCountAggregateInputType | true
    }

  export interface VerificationTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationToken'], meta: { name: 'VerificationToken' } }
    /**
     * Find zero or one VerificationToken that matches the filter.
     * @param {VerificationTokenFindUniqueArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationTokenFindUniqueArgs>(args: SelectSubset<T, VerificationTokenFindUniqueArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VerificationToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationTokenFindFirstArgs>(args?: SelectSubset<T, VerificationTokenFindFirstArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany()
     * 
     * // Get first 10 VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany({ take: 10 })
     * 
     * // Only select the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.findMany({ select: { identifier: true } })
     * 
     */
    findMany<T extends VerificationTokenFindManyArgs>(args?: SelectSubset<T, VerificationTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VerificationToken.
     * @param {VerificationTokenCreateArgs} args - Arguments to create a VerificationToken.
     * @example
     * // Create one VerificationToken
     * const VerificationToken = await prisma.verificationToken.create({
     *   data: {
     *     // ... data to create a VerificationToken
     *   }
     * })
     * 
     */
    create<T extends VerificationTokenCreateArgs>(args: SelectSubset<T, VerificationTokenCreateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VerificationTokens.
     * @param {VerificationTokenCreateManyArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationTokenCreateManyArgs>(args?: SelectSubset<T, VerificationTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VerificationTokens and returns the data saved in the database.
     * @param {VerificationTokenCreateManyAndReturnArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.createManyAndReturn({
     *   select: { identifier: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VerificationToken.
     * @param {VerificationTokenDeleteArgs} args - Arguments to delete one VerificationToken.
     * @example
     * // Delete one VerificationToken
     * const VerificationToken = await prisma.verificationToken.delete({
     *   where: {
     *     // ... filter to delete one VerificationToken
     *   }
     * })
     * 
     */
    delete<T extends VerificationTokenDeleteArgs>(args: SelectSubset<T, VerificationTokenDeleteArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VerificationToken.
     * @param {VerificationTokenUpdateArgs} args - Arguments to update one VerificationToken.
     * @example
     * // Update one VerificationToken
     * const verificationToken = await prisma.verificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationTokenUpdateArgs>(args: SelectSubset<T, VerificationTokenUpdateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VerificationTokens.
     * @param {VerificationTokenDeleteManyArgs} args - Arguments to filter VerificationTokens to delete.
     * @example
     * // Delete a few VerificationTokens
     * const { count } = await prisma.verificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationTokenDeleteManyArgs>(args?: SelectSubset<T, VerificationTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationTokenUpdateManyArgs>(args: SelectSubset<T, VerificationTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens and returns the data updated in the database.
     * @param {VerificationTokenUpdateManyAndReturnArgs} args - Arguments to update many VerificationTokens.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.updateManyAndReturn({
     *   select: { identifier: true },
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
    updateManyAndReturn<T extends VerificationTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VerificationToken.
     * @param {VerificationTokenUpsertArgs} args - Arguments to update or create a VerificationToken.
     * @example
     * // Update or create a VerificationToken
     * const verificationToken = await prisma.verificationToken.upsert({
     *   create: {
     *     // ... data to create a VerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationToken we want to update
     *   }
     * })
     */
    upsert<T extends VerificationTokenUpsertArgs>(args: SelectSubset<T, VerificationTokenUpsertArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenCountArgs} args - Arguments to filter VerificationTokens to count.
     * @example
     * // Count the number of VerificationTokens
     * const count = await prisma.verificationToken.count({
     *   where: {
     *     // ... the filter for the VerificationTokens we want to count
     *   }
     * })
    **/
    count<T extends VerificationTokenCountArgs>(
      args?: Subset<T, VerificationTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VerificationTokenAggregateArgs>(args: Subset<T, VerificationTokenAggregateArgs>): Prisma.PrismaPromise<GetVerificationTokenAggregateType<T>>

    /**
     * Group by VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenGroupByArgs} args - Group by arguments.
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
      T extends VerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: VerificationTokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VerificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationToken model
   */
  readonly fields: VerificationTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the VerificationToken model
   */
  interface VerificationTokenFieldRefs {
    readonly identifier: FieldRef<"VerificationToken", 'String'>
    readonly token: FieldRef<"VerificationToken", 'String'>
    readonly expires: FieldRef<"VerificationToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VerificationToken findUnique
   */
  export type VerificationTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findUniqueOrThrow
   */
  export type VerificationTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findFirst
   */
  export type VerificationTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findFirstOrThrow
   */
  export type VerificationTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findMany
   */
  export type VerificationTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationTokens to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken create
   */
  export type VerificationTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to create a VerificationToken.
     */
    data: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
  }

  /**
   * VerificationToken createMany
   */
  export type VerificationTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken createManyAndReturn
   */
  export type VerificationTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken update
   */
  export type VerificationTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to update a VerificationToken.
     */
    data: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
    /**
     * Choose, which VerificationToken to update.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken updateMany
   */
  export type VerificationTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken updateManyAndReturn
   */
  export type VerificationTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken upsert
   */
  export type VerificationTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The filter to search for the VerificationToken to update in case it exists.
     */
    where: VerificationTokenWhereUniqueInput
    /**
     * In case the VerificationToken found by the `where` argument doesn't exist, create a new VerificationToken with this data.
     */
    create: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
    /**
     * In case the VerificationToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
  }

  /**
   * VerificationToken delete
   */
  export type VerificationTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter which VerificationToken to delete.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken deleteMany
   */
  export type VerificationTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationTokens to delete
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to delete.
     */
    limit?: number
  }

  /**
   * VerificationToken without action
   */
  export type VerificationTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
  }


  /**
   * Model FinanceAccount
   */

  export type AggregateFinanceAccount = {
    _count: FinanceAccountCountAggregateOutputType | null
    _avg: FinanceAccountAvgAggregateOutputType | null
    _sum: FinanceAccountSumAggregateOutputType | null
    _min: FinanceAccountMinAggregateOutputType | null
    _max: FinanceAccountMaxAggregateOutputType | null
  }

  export type FinanceAccountAvgAggregateOutputType = {
    id: number | null
    openingBalance: number | null
  }

  export type FinanceAccountSumAggregateOutputType = {
    id: number | null
    openingBalance: number | null
  }

  export type FinanceAccountMinAggregateOutputType = {
    id: number | null
    userId: string | null
    name: string | null
    openingBalance: number | null
    note: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FinanceAccountMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    name: string | null
    openingBalance: number | null
    note: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FinanceAccountCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    openingBalance: number
    note: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FinanceAccountAvgAggregateInputType = {
    id?: true
    openingBalance?: true
  }

  export type FinanceAccountSumAggregateInputType = {
    id?: true
    openingBalance?: true
  }

  export type FinanceAccountMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    openingBalance?: true
    note?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FinanceAccountMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    openingBalance?: true
    note?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FinanceAccountCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    openingBalance?: true
    note?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FinanceAccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FinanceAccount to aggregate.
     */
    where?: FinanceAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FinanceAccounts to fetch.
     */
    orderBy?: FinanceAccountOrderByWithRelationInput | FinanceAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FinanceAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FinanceAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FinanceAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FinanceAccounts
    **/
    _count?: true | FinanceAccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FinanceAccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FinanceAccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FinanceAccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FinanceAccountMaxAggregateInputType
  }

  export type GetFinanceAccountAggregateType<T extends FinanceAccountAggregateArgs> = {
        [P in keyof T & keyof AggregateFinanceAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFinanceAccount[P]>
      : GetScalarType<T[P], AggregateFinanceAccount[P]>
  }




  export type FinanceAccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FinanceAccountWhereInput
    orderBy?: FinanceAccountOrderByWithAggregationInput | FinanceAccountOrderByWithAggregationInput[]
    by: FinanceAccountScalarFieldEnum[] | FinanceAccountScalarFieldEnum
    having?: FinanceAccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FinanceAccountCountAggregateInputType | true
    _avg?: FinanceAccountAvgAggregateInputType
    _sum?: FinanceAccountSumAggregateInputType
    _min?: FinanceAccountMinAggregateInputType
    _max?: FinanceAccountMaxAggregateInputType
  }

  export type FinanceAccountGroupByOutputType = {
    id: number
    userId: string
    name: string
    openingBalance: number
    note: string | null
    createdAt: Date
    updatedAt: Date
    _count: FinanceAccountCountAggregateOutputType | null
    _avg: FinanceAccountAvgAggregateOutputType | null
    _sum: FinanceAccountSumAggregateOutputType | null
    _min: FinanceAccountMinAggregateOutputType | null
    _max: FinanceAccountMaxAggregateOutputType | null
  }

  type GetFinanceAccountGroupByPayload<T extends FinanceAccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FinanceAccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FinanceAccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FinanceAccountGroupByOutputType[P]>
            : GetScalarType<T[P], FinanceAccountGroupByOutputType[P]>
        }
      >
    >


  export type FinanceAccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    openingBalance?: boolean
    note?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    transactions?: boolean | FinanceAccount$transactionsArgs<ExtArgs>
    recurringTransactions?: boolean | FinanceAccount$recurringTransactionsArgs<ExtArgs>
    transfersTo?: boolean | FinanceAccount$transfersToArgs<ExtArgs>
    _count?: boolean | FinanceAccountCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["financeAccount"]>

  export type FinanceAccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    openingBalance?: boolean
    note?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["financeAccount"]>

  export type FinanceAccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    openingBalance?: boolean
    note?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["financeAccount"]>

  export type FinanceAccountSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    openingBalance?: boolean
    note?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FinanceAccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name" | "openingBalance" | "note" | "createdAt" | "updatedAt", ExtArgs["result"]["financeAccount"]>
  export type FinanceAccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    transactions?: boolean | FinanceAccount$transactionsArgs<ExtArgs>
    recurringTransactions?: boolean | FinanceAccount$recurringTransactionsArgs<ExtArgs>
    transfersTo?: boolean | FinanceAccount$transfersToArgs<ExtArgs>
    _count?: boolean | FinanceAccountCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FinanceAccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FinanceAccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $FinanceAccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FinanceAccount"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
      recurringTransactions: Prisma.$RecurringTransactionPayload<ExtArgs>[]
      transfersTo: Prisma.$TransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      name: string
      openingBalance: number
      note: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["financeAccount"]>
    composites: {}
  }

  type FinanceAccountGetPayload<S extends boolean | null | undefined | FinanceAccountDefaultArgs> = $Result.GetResult<Prisma.$FinanceAccountPayload, S>

  type FinanceAccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FinanceAccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FinanceAccountCountAggregateInputType | true
    }

  export interface FinanceAccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FinanceAccount'], meta: { name: 'FinanceAccount' } }
    /**
     * Find zero or one FinanceAccount that matches the filter.
     * @param {FinanceAccountFindUniqueArgs} args - Arguments to find a FinanceAccount
     * @example
     * // Get one FinanceAccount
     * const financeAccount = await prisma.financeAccount.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FinanceAccountFindUniqueArgs>(args: SelectSubset<T, FinanceAccountFindUniqueArgs<ExtArgs>>): Prisma__FinanceAccountClient<$Result.GetResult<Prisma.$FinanceAccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FinanceAccount that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FinanceAccountFindUniqueOrThrowArgs} args - Arguments to find a FinanceAccount
     * @example
     * // Get one FinanceAccount
     * const financeAccount = await prisma.financeAccount.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FinanceAccountFindUniqueOrThrowArgs>(args: SelectSubset<T, FinanceAccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FinanceAccountClient<$Result.GetResult<Prisma.$FinanceAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FinanceAccount that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinanceAccountFindFirstArgs} args - Arguments to find a FinanceAccount
     * @example
     * // Get one FinanceAccount
     * const financeAccount = await prisma.financeAccount.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FinanceAccountFindFirstArgs>(args?: SelectSubset<T, FinanceAccountFindFirstArgs<ExtArgs>>): Prisma__FinanceAccountClient<$Result.GetResult<Prisma.$FinanceAccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FinanceAccount that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinanceAccountFindFirstOrThrowArgs} args - Arguments to find a FinanceAccount
     * @example
     * // Get one FinanceAccount
     * const financeAccount = await prisma.financeAccount.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FinanceAccountFindFirstOrThrowArgs>(args?: SelectSubset<T, FinanceAccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__FinanceAccountClient<$Result.GetResult<Prisma.$FinanceAccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FinanceAccounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinanceAccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FinanceAccounts
     * const financeAccounts = await prisma.financeAccount.findMany()
     * 
     * // Get first 10 FinanceAccounts
     * const financeAccounts = await prisma.financeAccount.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const financeAccountWithIdOnly = await prisma.financeAccount.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FinanceAccountFindManyArgs>(args?: SelectSubset<T, FinanceAccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinanceAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FinanceAccount.
     * @param {FinanceAccountCreateArgs} args - Arguments to create a FinanceAccount.
     * @example
     * // Create one FinanceAccount
     * const FinanceAccount = await prisma.financeAccount.create({
     *   data: {
     *     // ... data to create a FinanceAccount
     *   }
     * })
     * 
     */
    create<T extends FinanceAccountCreateArgs>(args: SelectSubset<T, FinanceAccountCreateArgs<ExtArgs>>): Prisma__FinanceAccountClient<$Result.GetResult<Prisma.$FinanceAccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FinanceAccounts.
     * @param {FinanceAccountCreateManyArgs} args - Arguments to create many FinanceAccounts.
     * @example
     * // Create many FinanceAccounts
     * const financeAccount = await prisma.financeAccount.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FinanceAccountCreateManyArgs>(args?: SelectSubset<T, FinanceAccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FinanceAccounts and returns the data saved in the database.
     * @param {FinanceAccountCreateManyAndReturnArgs} args - Arguments to create many FinanceAccounts.
     * @example
     * // Create many FinanceAccounts
     * const financeAccount = await prisma.financeAccount.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FinanceAccounts and only return the `id`
     * const financeAccountWithIdOnly = await prisma.financeAccount.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FinanceAccountCreateManyAndReturnArgs>(args?: SelectSubset<T, FinanceAccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinanceAccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FinanceAccount.
     * @param {FinanceAccountDeleteArgs} args - Arguments to delete one FinanceAccount.
     * @example
     * // Delete one FinanceAccount
     * const FinanceAccount = await prisma.financeAccount.delete({
     *   where: {
     *     // ... filter to delete one FinanceAccount
     *   }
     * })
     * 
     */
    delete<T extends FinanceAccountDeleteArgs>(args: SelectSubset<T, FinanceAccountDeleteArgs<ExtArgs>>): Prisma__FinanceAccountClient<$Result.GetResult<Prisma.$FinanceAccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FinanceAccount.
     * @param {FinanceAccountUpdateArgs} args - Arguments to update one FinanceAccount.
     * @example
     * // Update one FinanceAccount
     * const financeAccount = await prisma.financeAccount.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FinanceAccountUpdateArgs>(args: SelectSubset<T, FinanceAccountUpdateArgs<ExtArgs>>): Prisma__FinanceAccountClient<$Result.GetResult<Prisma.$FinanceAccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FinanceAccounts.
     * @param {FinanceAccountDeleteManyArgs} args - Arguments to filter FinanceAccounts to delete.
     * @example
     * // Delete a few FinanceAccounts
     * const { count } = await prisma.financeAccount.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FinanceAccountDeleteManyArgs>(args?: SelectSubset<T, FinanceAccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FinanceAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinanceAccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FinanceAccounts
     * const financeAccount = await prisma.financeAccount.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FinanceAccountUpdateManyArgs>(args: SelectSubset<T, FinanceAccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FinanceAccounts and returns the data updated in the database.
     * @param {FinanceAccountUpdateManyAndReturnArgs} args - Arguments to update many FinanceAccounts.
     * @example
     * // Update many FinanceAccounts
     * const financeAccount = await prisma.financeAccount.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FinanceAccounts and only return the `id`
     * const financeAccountWithIdOnly = await prisma.financeAccount.updateManyAndReturn({
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
    updateManyAndReturn<T extends FinanceAccountUpdateManyAndReturnArgs>(args: SelectSubset<T, FinanceAccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinanceAccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FinanceAccount.
     * @param {FinanceAccountUpsertArgs} args - Arguments to update or create a FinanceAccount.
     * @example
     * // Update or create a FinanceAccount
     * const financeAccount = await prisma.financeAccount.upsert({
     *   create: {
     *     // ... data to create a FinanceAccount
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FinanceAccount we want to update
     *   }
     * })
     */
    upsert<T extends FinanceAccountUpsertArgs>(args: SelectSubset<T, FinanceAccountUpsertArgs<ExtArgs>>): Prisma__FinanceAccountClient<$Result.GetResult<Prisma.$FinanceAccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FinanceAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinanceAccountCountArgs} args - Arguments to filter FinanceAccounts to count.
     * @example
     * // Count the number of FinanceAccounts
     * const count = await prisma.financeAccount.count({
     *   where: {
     *     // ... the filter for the FinanceAccounts we want to count
     *   }
     * })
    **/
    count<T extends FinanceAccountCountArgs>(
      args?: Subset<T, FinanceAccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FinanceAccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FinanceAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinanceAccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FinanceAccountAggregateArgs>(args: Subset<T, FinanceAccountAggregateArgs>): Prisma.PrismaPromise<GetFinanceAccountAggregateType<T>>

    /**
     * Group by FinanceAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinanceAccountGroupByArgs} args - Group by arguments.
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
      T extends FinanceAccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FinanceAccountGroupByArgs['orderBy'] }
        : { orderBy?: FinanceAccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FinanceAccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFinanceAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FinanceAccount model
   */
  readonly fields: FinanceAccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FinanceAccount.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FinanceAccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    transactions<T extends FinanceAccount$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, FinanceAccount$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    recurringTransactions<T extends FinanceAccount$recurringTransactionsArgs<ExtArgs> = {}>(args?: Subset<T, FinanceAccount$recurringTransactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecurringTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    transfersTo<T extends FinanceAccount$transfersToArgs<ExtArgs> = {}>(args?: Subset<T, FinanceAccount$transfersToArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the FinanceAccount model
   */
  interface FinanceAccountFieldRefs {
    readonly id: FieldRef<"FinanceAccount", 'Int'>
    readonly userId: FieldRef<"FinanceAccount", 'String'>
    readonly name: FieldRef<"FinanceAccount", 'String'>
    readonly openingBalance: FieldRef<"FinanceAccount", 'Float'>
    readonly note: FieldRef<"FinanceAccount", 'String'>
    readonly createdAt: FieldRef<"FinanceAccount", 'DateTime'>
    readonly updatedAt: FieldRef<"FinanceAccount", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FinanceAccount findUnique
   */
  export type FinanceAccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinanceAccount
     */
    select?: FinanceAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinanceAccount
     */
    omit?: FinanceAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinanceAccountInclude<ExtArgs> | null
    /**
     * Filter, which FinanceAccount to fetch.
     */
    where: FinanceAccountWhereUniqueInput
  }

  /**
   * FinanceAccount findUniqueOrThrow
   */
  export type FinanceAccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinanceAccount
     */
    select?: FinanceAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinanceAccount
     */
    omit?: FinanceAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinanceAccountInclude<ExtArgs> | null
    /**
     * Filter, which FinanceAccount to fetch.
     */
    where: FinanceAccountWhereUniqueInput
  }

  /**
   * FinanceAccount findFirst
   */
  export type FinanceAccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinanceAccount
     */
    select?: FinanceAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinanceAccount
     */
    omit?: FinanceAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinanceAccountInclude<ExtArgs> | null
    /**
     * Filter, which FinanceAccount to fetch.
     */
    where?: FinanceAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FinanceAccounts to fetch.
     */
    orderBy?: FinanceAccountOrderByWithRelationInput | FinanceAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FinanceAccounts.
     */
    cursor?: FinanceAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FinanceAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FinanceAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FinanceAccounts.
     */
    distinct?: FinanceAccountScalarFieldEnum | FinanceAccountScalarFieldEnum[]
  }

  /**
   * FinanceAccount findFirstOrThrow
   */
  export type FinanceAccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinanceAccount
     */
    select?: FinanceAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinanceAccount
     */
    omit?: FinanceAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinanceAccountInclude<ExtArgs> | null
    /**
     * Filter, which FinanceAccount to fetch.
     */
    where?: FinanceAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FinanceAccounts to fetch.
     */
    orderBy?: FinanceAccountOrderByWithRelationInput | FinanceAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FinanceAccounts.
     */
    cursor?: FinanceAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FinanceAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FinanceAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FinanceAccounts.
     */
    distinct?: FinanceAccountScalarFieldEnum | FinanceAccountScalarFieldEnum[]
  }

  /**
   * FinanceAccount findMany
   */
  export type FinanceAccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinanceAccount
     */
    select?: FinanceAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinanceAccount
     */
    omit?: FinanceAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinanceAccountInclude<ExtArgs> | null
    /**
     * Filter, which FinanceAccounts to fetch.
     */
    where?: FinanceAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FinanceAccounts to fetch.
     */
    orderBy?: FinanceAccountOrderByWithRelationInput | FinanceAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FinanceAccounts.
     */
    cursor?: FinanceAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FinanceAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FinanceAccounts.
     */
    skip?: number
    distinct?: FinanceAccountScalarFieldEnum | FinanceAccountScalarFieldEnum[]
  }

  /**
   * FinanceAccount create
   */
  export type FinanceAccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinanceAccount
     */
    select?: FinanceAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinanceAccount
     */
    omit?: FinanceAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinanceAccountInclude<ExtArgs> | null
    /**
     * The data needed to create a FinanceAccount.
     */
    data: XOR<FinanceAccountCreateInput, FinanceAccountUncheckedCreateInput>
  }

  /**
   * FinanceAccount createMany
   */
  export type FinanceAccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FinanceAccounts.
     */
    data: FinanceAccountCreateManyInput | FinanceAccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FinanceAccount createManyAndReturn
   */
  export type FinanceAccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinanceAccount
     */
    select?: FinanceAccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FinanceAccount
     */
    omit?: FinanceAccountOmit<ExtArgs> | null
    /**
     * The data used to create many FinanceAccounts.
     */
    data: FinanceAccountCreateManyInput | FinanceAccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinanceAccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FinanceAccount update
   */
  export type FinanceAccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinanceAccount
     */
    select?: FinanceAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinanceAccount
     */
    omit?: FinanceAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinanceAccountInclude<ExtArgs> | null
    /**
     * The data needed to update a FinanceAccount.
     */
    data: XOR<FinanceAccountUpdateInput, FinanceAccountUncheckedUpdateInput>
    /**
     * Choose, which FinanceAccount to update.
     */
    where: FinanceAccountWhereUniqueInput
  }

  /**
   * FinanceAccount updateMany
   */
  export type FinanceAccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FinanceAccounts.
     */
    data: XOR<FinanceAccountUpdateManyMutationInput, FinanceAccountUncheckedUpdateManyInput>
    /**
     * Filter which FinanceAccounts to update
     */
    where?: FinanceAccountWhereInput
    /**
     * Limit how many FinanceAccounts to update.
     */
    limit?: number
  }

  /**
   * FinanceAccount updateManyAndReturn
   */
  export type FinanceAccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinanceAccount
     */
    select?: FinanceAccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FinanceAccount
     */
    omit?: FinanceAccountOmit<ExtArgs> | null
    /**
     * The data used to update FinanceAccounts.
     */
    data: XOR<FinanceAccountUpdateManyMutationInput, FinanceAccountUncheckedUpdateManyInput>
    /**
     * Filter which FinanceAccounts to update
     */
    where?: FinanceAccountWhereInput
    /**
     * Limit how many FinanceAccounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinanceAccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FinanceAccount upsert
   */
  export type FinanceAccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinanceAccount
     */
    select?: FinanceAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinanceAccount
     */
    omit?: FinanceAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinanceAccountInclude<ExtArgs> | null
    /**
     * The filter to search for the FinanceAccount to update in case it exists.
     */
    where: FinanceAccountWhereUniqueInput
    /**
     * In case the FinanceAccount found by the `where` argument doesn't exist, create a new FinanceAccount with this data.
     */
    create: XOR<FinanceAccountCreateInput, FinanceAccountUncheckedCreateInput>
    /**
     * In case the FinanceAccount was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FinanceAccountUpdateInput, FinanceAccountUncheckedUpdateInput>
  }

  /**
   * FinanceAccount delete
   */
  export type FinanceAccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinanceAccount
     */
    select?: FinanceAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinanceAccount
     */
    omit?: FinanceAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinanceAccountInclude<ExtArgs> | null
    /**
     * Filter which FinanceAccount to delete.
     */
    where: FinanceAccountWhereUniqueInput
  }

  /**
   * FinanceAccount deleteMany
   */
  export type FinanceAccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FinanceAccounts to delete
     */
    where?: FinanceAccountWhereInput
    /**
     * Limit how many FinanceAccounts to delete.
     */
    limit?: number
  }

  /**
   * FinanceAccount.transactions
   */
  export type FinanceAccount$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * FinanceAccount.recurringTransactions
   */
  export type FinanceAccount$recurringTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringTransaction
     */
    select?: RecurringTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringTransaction
     */
    omit?: RecurringTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurringTransactionInclude<ExtArgs> | null
    where?: RecurringTransactionWhereInput
    orderBy?: RecurringTransactionOrderByWithRelationInput | RecurringTransactionOrderByWithRelationInput[]
    cursor?: RecurringTransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecurringTransactionScalarFieldEnum | RecurringTransactionScalarFieldEnum[]
  }

  /**
   * FinanceAccount.transfersTo
   */
  export type FinanceAccount$transfersToArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * FinanceAccount without action
   */
  export type FinanceAccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinanceAccount
     */
    select?: FinanceAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinanceAccount
     */
    omit?: FinanceAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinanceAccountInclude<ExtArgs> | null
  }


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
    userId: string | null
    name: string | null
    type: $Enums.CategoryType | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    name: string | null
    type: $Enums.CategoryType | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    type: number
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
    userId?: true
    name?: true
    type?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    type?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    type?: true
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
    userId: string
    name: string
    type: $Enums.CategoryType
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
    userId?: boolean
    name?: boolean
    type?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    transactions?: boolean | Category$transactionsArgs<ExtArgs>
    recurringTransactions?: boolean | Category$recurringTransactionsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    type?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    type?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    type?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name" | "type", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    transactions?: boolean | Category$transactionsArgs<ExtArgs>
    recurringTransactions?: boolean | Category$recurringTransactionsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
      recurringTransactions: Prisma.$RecurringTransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      name: string
      type: $Enums.CategoryType
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
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
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
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    transactions<T extends Category$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, Category$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    recurringTransactions<T extends Category$recurringTransactionsArgs<ExtArgs> = {}>(args?: Subset<T, Category$recurringTransactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecurringTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly userId: FieldRef<"Category", 'String'>
    readonly name: FieldRef<"Category", 'String'>
    readonly type: FieldRef<"Category", 'CategoryType'>
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
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryIncludeCreateManyAndReturn<ExtArgs> | null
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
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryIncludeUpdateManyAndReturn<ExtArgs> | null
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
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.transactions
   */
  export type Category$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Category.recurringTransactions
   */
  export type Category$recurringTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringTransaction
     */
    select?: RecurringTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringTransaction
     */
    omit?: RecurringTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurringTransactionInclude<ExtArgs> | null
    where?: RecurringTransactionWhereInput
    orderBy?: RecurringTransactionOrderByWithRelationInput | RecurringTransactionOrderByWithRelationInput[]
    cursor?: RecurringTransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecurringTransactionScalarFieldEnum | RecurringTransactionScalarFieldEnum[]
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
   * Model PayeePayer
   */

  export type AggregatePayeePayer = {
    _count: PayeePayerCountAggregateOutputType | null
    _avg: PayeePayerAvgAggregateOutputType | null
    _sum: PayeePayerSumAggregateOutputType | null
    _min: PayeePayerMinAggregateOutputType | null
    _max: PayeePayerMaxAggregateOutputType | null
  }

  export type PayeePayerAvgAggregateOutputType = {
    id: number | null
  }

  export type PayeePayerSumAggregateOutputType = {
    id: number | null
  }

  export type PayeePayerMinAggregateOutputType = {
    id: number | null
    userId: string | null
    name: string | null
    type: $Enums.PayeePayerType | null
  }

  export type PayeePayerMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    name: string | null
    type: $Enums.PayeePayerType | null
  }

  export type PayeePayerCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    type: number
    _all: number
  }


  export type PayeePayerAvgAggregateInputType = {
    id?: true
  }

  export type PayeePayerSumAggregateInputType = {
    id?: true
  }

  export type PayeePayerMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    type?: true
  }

  export type PayeePayerMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    type?: true
  }

  export type PayeePayerCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    type?: true
    _all?: true
  }

  export type PayeePayerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PayeePayer to aggregate.
     */
    where?: PayeePayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PayeePayers to fetch.
     */
    orderBy?: PayeePayerOrderByWithRelationInput | PayeePayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PayeePayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PayeePayers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PayeePayers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PayeePayers
    **/
    _count?: true | PayeePayerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PayeePayerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PayeePayerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PayeePayerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PayeePayerMaxAggregateInputType
  }

  export type GetPayeePayerAggregateType<T extends PayeePayerAggregateArgs> = {
        [P in keyof T & keyof AggregatePayeePayer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayeePayer[P]>
      : GetScalarType<T[P], AggregatePayeePayer[P]>
  }




  export type PayeePayerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PayeePayerWhereInput
    orderBy?: PayeePayerOrderByWithAggregationInput | PayeePayerOrderByWithAggregationInput[]
    by: PayeePayerScalarFieldEnum[] | PayeePayerScalarFieldEnum
    having?: PayeePayerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PayeePayerCountAggregateInputType | true
    _avg?: PayeePayerAvgAggregateInputType
    _sum?: PayeePayerSumAggregateInputType
    _min?: PayeePayerMinAggregateInputType
    _max?: PayeePayerMaxAggregateInputType
  }

  export type PayeePayerGroupByOutputType = {
    id: number
    userId: string
    name: string
    type: $Enums.PayeePayerType
    _count: PayeePayerCountAggregateOutputType | null
    _avg: PayeePayerAvgAggregateOutputType | null
    _sum: PayeePayerSumAggregateOutputType | null
    _min: PayeePayerMinAggregateOutputType | null
    _max: PayeePayerMaxAggregateOutputType | null
  }

  type GetPayeePayerGroupByPayload<T extends PayeePayerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PayeePayerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PayeePayerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PayeePayerGroupByOutputType[P]>
            : GetScalarType<T[P], PayeePayerGroupByOutputType[P]>
        }
      >
    >


  export type PayeePayerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    type?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    payerTransactions?: boolean | PayeePayer$payerTransactionsArgs<ExtArgs>
    payeeTransactions?: boolean | PayeePayer$payeeTransactionsArgs<ExtArgs>
    recurringAsPayer?: boolean | PayeePayer$recurringAsPayerArgs<ExtArgs>
    recurringAsPayee?: boolean | PayeePayer$recurringAsPayeeArgs<ExtArgs>
    _count?: boolean | PayeePayerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payeePayer"]>

  export type PayeePayerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    type?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payeePayer"]>

  export type PayeePayerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    type?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payeePayer"]>

  export type PayeePayerSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    type?: boolean
  }

  export type PayeePayerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name" | "type", ExtArgs["result"]["payeePayer"]>
  export type PayeePayerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    payerTransactions?: boolean | PayeePayer$payerTransactionsArgs<ExtArgs>
    payeeTransactions?: boolean | PayeePayer$payeeTransactionsArgs<ExtArgs>
    recurringAsPayer?: boolean | PayeePayer$recurringAsPayerArgs<ExtArgs>
    recurringAsPayee?: boolean | PayeePayer$recurringAsPayeeArgs<ExtArgs>
    _count?: boolean | PayeePayerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PayeePayerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PayeePayerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PayeePayerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PayeePayer"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      payerTransactions: Prisma.$TransactionPayload<ExtArgs>[]
      payeeTransactions: Prisma.$TransactionPayload<ExtArgs>[]
      recurringAsPayer: Prisma.$RecurringTransactionPayload<ExtArgs>[]
      recurringAsPayee: Prisma.$RecurringTransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      name: string
      type: $Enums.PayeePayerType
    }, ExtArgs["result"]["payeePayer"]>
    composites: {}
  }

  type PayeePayerGetPayload<S extends boolean | null | undefined | PayeePayerDefaultArgs> = $Result.GetResult<Prisma.$PayeePayerPayload, S>

  type PayeePayerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PayeePayerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PayeePayerCountAggregateInputType | true
    }

  export interface PayeePayerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PayeePayer'], meta: { name: 'PayeePayer' } }
    /**
     * Find zero or one PayeePayer that matches the filter.
     * @param {PayeePayerFindUniqueArgs} args - Arguments to find a PayeePayer
     * @example
     * // Get one PayeePayer
     * const payeePayer = await prisma.payeePayer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PayeePayerFindUniqueArgs>(args: SelectSubset<T, PayeePayerFindUniqueArgs<ExtArgs>>): Prisma__PayeePayerClient<$Result.GetResult<Prisma.$PayeePayerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PayeePayer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PayeePayerFindUniqueOrThrowArgs} args - Arguments to find a PayeePayer
     * @example
     * // Get one PayeePayer
     * const payeePayer = await prisma.payeePayer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PayeePayerFindUniqueOrThrowArgs>(args: SelectSubset<T, PayeePayerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PayeePayerClient<$Result.GetResult<Prisma.$PayeePayerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PayeePayer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayeePayerFindFirstArgs} args - Arguments to find a PayeePayer
     * @example
     * // Get one PayeePayer
     * const payeePayer = await prisma.payeePayer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PayeePayerFindFirstArgs>(args?: SelectSubset<T, PayeePayerFindFirstArgs<ExtArgs>>): Prisma__PayeePayerClient<$Result.GetResult<Prisma.$PayeePayerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PayeePayer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayeePayerFindFirstOrThrowArgs} args - Arguments to find a PayeePayer
     * @example
     * // Get one PayeePayer
     * const payeePayer = await prisma.payeePayer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PayeePayerFindFirstOrThrowArgs>(args?: SelectSubset<T, PayeePayerFindFirstOrThrowArgs<ExtArgs>>): Prisma__PayeePayerClient<$Result.GetResult<Prisma.$PayeePayerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PayeePayers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayeePayerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PayeePayers
     * const payeePayers = await prisma.payeePayer.findMany()
     * 
     * // Get first 10 PayeePayers
     * const payeePayers = await prisma.payeePayer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const payeePayerWithIdOnly = await prisma.payeePayer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PayeePayerFindManyArgs>(args?: SelectSubset<T, PayeePayerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayeePayerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PayeePayer.
     * @param {PayeePayerCreateArgs} args - Arguments to create a PayeePayer.
     * @example
     * // Create one PayeePayer
     * const PayeePayer = await prisma.payeePayer.create({
     *   data: {
     *     // ... data to create a PayeePayer
     *   }
     * })
     * 
     */
    create<T extends PayeePayerCreateArgs>(args: SelectSubset<T, PayeePayerCreateArgs<ExtArgs>>): Prisma__PayeePayerClient<$Result.GetResult<Prisma.$PayeePayerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PayeePayers.
     * @param {PayeePayerCreateManyArgs} args - Arguments to create many PayeePayers.
     * @example
     * // Create many PayeePayers
     * const payeePayer = await prisma.payeePayer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PayeePayerCreateManyArgs>(args?: SelectSubset<T, PayeePayerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PayeePayers and returns the data saved in the database.
     * @param {PayeePayerCreateManyAndReturnArgs} args - Arguments to create many PayeePayers.
     * @example
     * // Create many PayeePayers
     * const payeePayer = await prisma.payeePayer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PayeePayers and only return the `id`
     * const payeePayerWithIdOnly = await prisma.payeePayer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PayeePayerCreateManyAndReturnArgs>(args?: SelectSubset<T, PayeePayerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayeePayerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PayeePayer.
     * @param {PayeePayerDeleteArgs} args - Arguments to delete one PayeePayer.
     * @example
     * // Delete one PayeePayer
     * const PayeePayer = await prisma.payeePayer.delete({
     *   where: {
     *     // ... filter to delete one PayeePayer
     *   }
     * })
     * 
     */
    delete<T extends PayeePayerDeleteArgs>(args: SelectSubset<T, PayeePayerDeleteArgs<ExtArgs>>): Prisma__PayeePayerClient<$Result.GetResult<Prisma.$PayeePayerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PayeePayer.
     * @param {PayeePayerUpdateArgs} args - Arguments to update one PayeePayer.
     * @example
     * // Update one PayeePayer
     * const payeePayer = await prisma.payeePayer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PayeePayerUpdateArgs>(args: SelectSubset<T, PayeePayerUpdateArgs<ExtArgs>>): Prisma__PayeePayerClient<$Result.GetResult<Prisma.$PayeePayerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PayeePayers.
     * @param {PayeePayerDeleteManyArgs} args - Arguments to filter PayeePayers to delete.
     * @example
     * // Delete a few PayeePayers
     * const { count } = await prisma.payeePayer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PayeePayerDeleteManyArgs>(args?: SelectSubset<T, PayeePayerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PayeePayers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayeePayerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PayeePayers
     * const payeePayer = await prisma.payeePayer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PayeePayerUpdateManyArgs>(args: SelectSubset<T, PayeePayerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PayeePayers and returns the data updated in the database.
     * @param {PayeePayerUpdateManyAndReturnArgs} args - Arguments to update many PayeePayers.
     * @example
     * // Update many PayeePayers
     * const payeePayer = await prisma.payeePayer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PayeePayers and only return the `id`
     * const payeePayerWithIdOnly = await prisma.payeePayer.updateManyAndReturn({
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
    updateManyAndReturn<T extends PayeePayerUpdateManyAndReturnArgs>(args: SelectSubset<T, PayeePayerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayeePayerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PayeePayer.
     * @param {PayeePayerUpsertArgs} args - Arguments to update or create a PayeePayer.
     * @example
     * // Update or create a PayeePayer
     * const payeePayer = await prisma.payeePayer.upsert({
     *   create: {
     *     // ... data to create a PayeePayer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PayeePayer we want to update
     *   }
     * })
     */
    upsert<T extends PayeePayerUpsertArgs>(args: SelectSubset<T, PayeePayerUpsertArgs<ExtArgs>>): Prisma__PayeePayerClient<$Result.GetResult<Prisma.$PayeePayerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PayeePayers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayeePayerCountArgs} args - Arguments to filter PayeePayers to count.
     * @example
     * // Count the number of PayeePayers
     * const count = await prisma.payeePayer.count({
     *   where: {
     *     // ... the filter for the PayeePayers we want to count
     *   }
     * })
    **/
    count<T extends PayeePayerCountArgs>(
      args?: Subset<T, PayeePayerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PayeePayerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PayeePayer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayeePayerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PayeePayerAggregateArgs>(args: Subset<T, PayeePayerAggregateArgs>): Prisma.PrismaPromise<GetPayeePayerAggregateType<T>>

    /**
     * Group by PayeePayer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayeePayerGroupByArgs} args - Group by arguments.
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
      T extends PayeePayerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PayeePayerGroupByArgs['orderBy'] }
        : { orderBy?: PayeePayerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PayeePayerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPayeePayerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PayeePayer model
   */
  readonly fields: PayeePayerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PayeePayer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PayeePayerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    payerTransactions<T extends PayeePayer$payerTransactionsArgs<ExtArgs> = {}>(args?: Subset<T, PayeePayer$payerTransactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payeeTransactions<T extends PayeePayer$payeeTransactionsArgs<ExtArgs> = {}>(args?: Subset<T, PayeePayer$payeeTransactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    recurringAsPayer<T extends PayeePayer$recurringAsPayerArgs<ExtArgs> = {}>(args?: Subset<T, PayeePayer$recurringAsPayerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecurringTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    recurringAsPayee<T extends PayeePayer$recurringAsPayeeArgs<ExtArgs> = {}>(args?: Subset<T, PayeePayer$recurringAsPayeeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecurringTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the PayeePayer model
   */
  interface PayeePayerFieldRefs {
    readonly id: FieldRef<"PayeePayer", 'Int'>
    readonly userId: FieldRef<"PayeePayer", 'String'>
    readonly name: FieldRef<"PayeePayer", 'String'>
    readonly type: FieldRef<"PayeePayer", 'PayeePayerType'>
  }
    

  // Custom InputTypes
  /**
   * PayeePayer findUnique
   */
  export type PayeePayerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayeePayer
     */
    select?: PayeePayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayeePayer
     */
    omit?: PayeePayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayeePayerInclude<ExtArgs> | null
    /**
     * Filter, which PayeePayer to fetch.
     */
    where: PayeePayerWhereUniqueInput
  }

  /**
   * PayeePayer findUniqueOrThrow
   */
  export type PayeePayerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayeePayer
     */
    select?: PayeePayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayeePayer
     */
    omit?: PayeePayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayeePayerInclude<ExtArgs> | null
    /**
     * Filter, which PayeePayer to fetch.
     */
    where: PayeePayerWhereUniqueInput
  }

  /**
   * PayeePayer findFirst
   */
  export type PayeePayerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayeePayer
     */
    select?: PayeePayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayeePayer
     */
    omit?: PayeePayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayeePayerInclude<ExtArgs> | null
    /**
     * Filter, which PayeePayer to fetch.
     */
    where?: PayeePayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PayeePayers to fetch.
     */
    orderBy?: PayeePayerOrderByWithRelationInput | PayeePayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PayeePayers.
     */
    cursor?: PayeePayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PayeePayers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PayeePayers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PayeePayers.
     */
    distinct?: PayeePayerScalarFieldEnum | PayeePayerScalarFieldEnum[]
  }

  /**
   * PayeePayer findFirstOrThrow
   */
  export type PayeePayerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayeePayer
     */
    select?: PayeePayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayeePayer
     */
    omit?: PayeePayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayeePayerInclude<ExtArgs> | null
    /**
     * Filter, which PayeePayer to fetch.
     */
    where?: PayeePayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PayeePayers to fetch.
     */
    orderBy?: PayeePayerOrderByWithRelationInput | PayeePayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PayeePayers.
     */
    cursor?: PayeePayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PayeePayers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PayeePayers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PayeePayers.
     */
    distinct?: PayeePayerScalarFieldEnum | PayeePayerScalarFieldEnum[]
  }

  /**
   * PayeePayer findMany
   */
  export type PayeePayerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayeePayer
     */
    select?: PayeePayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayeePayer
     */
    omit?: PayeePayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayeePayerInclude<ExtArgs> | null
    /**
     * Filter, which PayeePayers to fetch.
     */
    where?: PayeePayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PayeePayers to fetch.
     */
    orderBy?: PayeePayerOrderByWithRelationInput | PayeePayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PayeePayers.
     */
    cursor?: PayeePayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PayeePayers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PayeePayers.
     */
    skip?: number
    distinct?: PayeePayerScalarFieldEnum | PayeePayerScalarFieldEnum[]
  }

  /**
   * PayeePayer create
   */
  export type PayeePayerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayeePayer
     */
    select?: PayeePayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayeePayer
     */
    omit?: PayeePayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayeePayerInclude<ExtArgs> | null
    /**
     * The data needed to create a PayeePayer.
     */
    data: XOR<PayeePayerCreateInput, PayeePayerUncheckedCreateInput>
  }

  /**
   * PayeePayer createMany
   */
  export type PayeePayerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PayeePayers.
     */
    data: PayeePayerCreateManyInput | PayeePayerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PayeePayer createManyAndReturn
   */
  export type PayeePayerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayeePayer
     */
    select?: PayeePayerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PayeePayer
     */
    omit?: PayeePayerOmit<ExtArgs> | null
    /**
     * The data used to create many PayeePayers.
     */
    data: PayeePayerCreateManyInput | PayeePayerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayeePayerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PayeePayer update
   */
  export type PayeePayerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayeePayer
     */
    select?: PayeePayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayeePayer
     */
    omit?: PayeePayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayeePayerInclude<ExtArgs> | null
    /**
     * The data needed to update a PayeePayer.
     */
    data: XOR<PayeePayerUpdateInput, PayeePayerUncheckedUpdateInput>
    /**
     * Choose, which PayeePayer to update.
     */
    where: PayeePayerWhereUniqueInput
  }

  /**
   * PayeePayer updateMany
   */
  export type PayeePayerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PayeePayers.
     */
    data: XOR<PayeePayerUpdateManyMutationInput, PayeePayerUncheckedUpdateManyInput>
    /**
     * Filter which PayeePayers to update
     */
    where?: PayeePayerWhereInput
    /**
     * Limit how many PayeePayers to update.
     */
    limit?: number
  }

  /**
   * PayeePayer updateManyAndReturn
   */
  export type PayeePayerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayeePayer
     */
    select?: PayeePayerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PayeePayer
     */
    omit?: PayeePayerOmit<ExtArgs> | null
    /**
     * The data used to update PayeePayers.
     */
    data: XOR<PayeePayerUpdateManyMutationInput, PayeePayerUncheckedUpdateManyInput>
    /**
     * Filter which PayeePayers to update
     */
    where?: PayeePayerWhereInput
    /**
     * Limit how many PayeePayers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayeePayerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PayeePayer upsert
   */
  export type PayeePayerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayeePayer
     */
    select?: PayeePayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayeePayer
     */
    omit?: PayeePayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayeePayerInclude<ExtArgs> | null
    /**
     * The filter to search for the PayeePayer to update in case it exists.
     */
    where: PayeePayerWhereUniqueInput
    /**
     * In case the PayeePayer found by the `where` argument doesn't exist, create a new PayeePayer with this data.
     */
    create: XOR<PayeePayerCreateInput, PayeePayerUncheckedCreateInput>
    /**
     * In case the PayeePayer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PayeePayerUpdateInput, PayeePayerUncheckedUpdateInput>
  }

  /**
   * PayeePayer delete
   */
  export type PayeePayerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayeePayer
     */
    select?: PayeePayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayeePayer
     */
    omit?: PayeePayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayeePayerInclude<ExtArgs> | null
    /**
     * Filter which PayeePayer to delete.
     */
    where: PayeePayerWhereUniqueInput
  }

  /**
   * PayeePayer deleteMany
   */
  export type PayeePayerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PayeePayers to delete
     */
    where?: PayeePayerWhereInput
    /**
     * Limit how many PayeePayers to delete.
     */
    limit?: number
  }

  /**
   * PayeePayer.payerTransactions
   */
  export type PayeePayer$payerTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * PayeePayer.payeeTransactions
   */
  export type PayeePayer$payeeTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * PayeePayer.recurringAsPayer
   */
  export type PayeePayer$recurringAsPayerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringTransaction
     */
    select?: RecurringTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringTransaction
     */
    omit?: RecurringTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurringTransactionInclude<ExtArgs> | null
    where?: RecurringTransactionWhereInput
    orderBy?: RecurringTransactionOrderByWithRelationInput | RecurringTransactionOrderByWithRelationInput[]
    cursor?: RecurringTransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecurringTransactionScalarFieldEnum | RecurringTransactionScalarFieldEnum[]
  }

  /**
   * PayeePayer.recurringAsPayee
   */
  export type PayeePayer$recurringAsPayeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringTransaction
     */
    select?: RecurringTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringTransaction
     */
    omit?: RecurringTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurringTransactionInclude<ExtArgs> | null
    where?: RecurringTransactionWhereInput
    orderBy?: RecurringTransactionOrderByWithRelationInput | RecurringTransactionOrderByWithRelationInput[]
    cursor?: RecurringTransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecurringTransactionScalarFieldEnum | RecurringTransactionScalarFieldEnum[]
  }

  /**
   * PayeePayer without action
   */
  export type PayeePayerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayeePayer
     */
    select?: PayeePayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayeePayer
     */
    omit?: PayeePayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayeePayerInclude<ExtArgs> | null
  }


  /**
   * Model PaymentMethod
   */

  export type AggregatePaymentMethod = {
    _count: PaymentMethodCountAggregateOutputType | null
    _avg: PaymentMethodAvgAggregateOutputType | null
    _sum: PaymentMethodSumAggregateOutputType | null
    _min: PaymentMethodMinAggregateOutputType | null
    _max: PaymentMethodMaxAggregateOutputType | null
  }

  export type PaymentMethodAvgAggregateOutputType = {
    id: number | null
  }

  export type PaymentMethodSumAggregateOutputType = {
    id: number | null
  }

  export type PaymentMethodMinAggregateOutputType = {
    id: number | null
    userId: string | null
    name: string | null
  }

  export type PaymentMethodMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    name: string | null
  }

  export type PaymentMethodCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    _all: number
  }


  export type PaymentMethodAvgAggregateInputType = {
    id?: true
  }

  export type PaymentMethodSumAggregateInputType = {
    id?: true
  }

  export type PaymentMethodMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
  }

  export type PaymentMethodMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
  }

  export type PaymentMethodCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    _all?: true
  }

  export type PaymentMethodAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentMethod to aggregate.
     */
    where?: PaymentMethodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentMethods to fetch.
     */
    orderBy?: PaymentMethodOrderByWithRelationInput | PaymentMethodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentMethodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentMethods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentMethods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PaymentMethods
    **/
    _count?: true | PaymentMethodCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentMethodAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentMethodSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMethodMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMethodMaxAggregateInputType
  }

  export type GetPaymentMethodAggregateType<T extends PaymentMethodAggregateArgs> = {
        [P in keyof T & keyof AggregatePaymentMethod]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaymentMethod[P]>
      : GetScalarType<T[P], AggregatePaymentMethod[P]>
  }




  export type PaymentMethodGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentMethodWhereInput
    orderBy?: PaymentMethodOrderByWithAggregationInput | PaymentMethodOrderByWithAggregationInput[]
    by: PaymentMethodScalarFieldEnum[] | PaymentMethodScalarFieldEnum
    having?: PaymentMethodScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentMethodCountAggregateInputType | true
    _avg?: PaymentMethodAvgAggregateInputType
    _sum?: PaymentMethodSumAggregateInputType
    _min?: PaymentMethodMinAggregateInputType
    _max?: PaymentMethodMaxAggregateInputType
  }

  export type PaymentMethodGroupByOutputType = {
    id: number
    userId: string
    name: string
    _count: PaymentMethodCountAggregateOutputType | null
    _avg: PaymentMethodAvgAggregateOutputType | null
    _sum: PaymentMethodSumAggregateOutputType | null
    _min: PaymentMethodMinAggregateOutputType | null
    _max: PaymentMethodMaxAggregateOutputType | null
  }

  type GetPaymentMethodGroupByPayload<T extends PaymentMethodGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentMethodGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentMethodGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentMethodGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentMethodGroupByOutputType[P]>
        }
      >
    >


  export type PaymentMethodSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    transactions?: boolean | PaymentMethod$transactionsArgs<ExtArgs>
    recurringTransactions?: boolean | PaymentMethod$recurringTransactionsArgs<ExtArgs>
    _count?: boolean | PaymentMethodCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentMethod"]>

  export type PaymentMethodSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentMethod"]>

  export type PaymentMethodSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentMethod"]>

  export type PaymentMethodSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
  }

  export type PaymentMethodOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name", ExtArgs["result"]["paymentMethod"]>
  export type PaymentMethodInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    transactions?: boolean | PaymentMethod$transactionsArgs<ExtArgs>
    recurringTransactions?: boolean | PaymentMethod$recurringTransactionsArgs<ExtArgs>
    _count?: boolean | PaymentMethodCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PaymentMethodIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PaymentMethodIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PaymentMethodPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PaymentMethod"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
      recurringTransactions: Prisma.$RecurringTransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      name: string
    }, ExtArgs["result"]["paymentMethod"]>
    composites: {}
  }

  type PaymentMethodGetPayload<S extends boolean | null | undefined | PaymentMethodDefaultArgs> = $Result.GetResult<Prisma.$PaymentMethodPayload, S>

  type PaymentMethodCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentMethodFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentMethodCountAggregateInputType | true
    }

  export interface PaymentMethodDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PaymentMethod'], meta: { name: 'PaymentMethod' } }
    /**
     * Find zero or one PaymentMethod that matches the filter.
     * @param {PaymentMethodFindUniqueArgs} args - Arguments to find a PaymentMethod
     * @example
     * // Get one PaymentMethod
     * const paymentMethod = await prisma.paymentMethod.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentMethodFindUniqueArgs>(args: SelectSubset<T, PaymentMethodFindUniqueArgs<ExtArgs>>): Prisma__PaymentMethodClient<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PaymentMethod that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentMethodFindUniqueOrThrowArgs} args - Arguments to find a PaymentMethod
     * @example
     * // Get one PaymentMethod
     * const paymentMethod = await prisma.paymentMethod.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentMethodFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentMethodFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentMethodClient<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaymentMethod that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodFindFirstArgs} args - Arguments to find a PaymentMethod
     * @example
     * // Get one PaymentMethod
     * const paymentMethod = await prisma.paymentMethod.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentMethodFindFirstArgs>(args?: SelectSubset<T, PaymentMethodFindFirstArgs<ExtArgs>>): Prisma__PaymentMethodClient<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaymentMethod that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodFindFirstOrThrowArgs} args - Arguments to find a PaymentMethod
     * @example
     * // Get one PaymentMethod
     * const paymentMethod = await prisma.paymentMethod.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentMethodFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentMethodFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentMethodClient<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PaymentMethods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PaymentMethods
     * const paymentMethods = await prisma.paymentMethod.findMany()
     * 
     * // Get first 10 PaymentMethods
     * const paymentMethods = await prisma.paymentMethod.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentMethodWithIdOnly = await prisma.paymentMethod.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentMethodFindManyArgs>(args?: SelectSubset<T, PaymentMethodFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PaymentMethod.
     * @param {PaymentMethodCreateArgs} args - Arguments to create a PaymentMethod.
     * @example
     * // Create one PaymentMethod
     * const PaymentMethod = await prisma.paymentMethod.create({
     *   data: {
     *     // ... data to create a PaymentMethod
     *   }
     * })
     * 
     */
    create<T extends PaymentMethodCreateArgs>(args: SelectSubset<T, PaymentMethodCreateArgs<ExtArgs>>): Prisma__PaymentMethodClient<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PaymentMethods.
     * @param {PaymentMethodCreateManyArgs} args - Arguments to create many PaymentMethods.
     * @example
     * // Create many PaymentMethods
     * const paymentMethod = await prisma.paymentMethod.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentMethodCreateManyArgs>(args?: SelectSubset<T, PaymentMethodCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PaymentMethods and returns the data saved in the database.
     * @param {PaymentMethodCreateManyAndReturnArgs} args - Arguments to create many PaymentMethods.
     * @example
     * // Create many PaymentMethods
     * const paymentMethod = await prisma.paymentMethod.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PaymentMethods and only return the `id`
     * const paymentMethodWithIdOnly = await prisma.paymentMethod.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentMethodCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentMethodCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PaymentMethod.
     * @param {PaymentMethodDeleteArgs} args - Arguments to delete one PaymentMethod.
     * @example
     * // Delete one PaymentMethod
     * const PaymentMethod = await prisma.paymentMethod.delete({
     *   where: {
     *     // ... filter to delete one PaymentMethod
     *   }
     * })
     * 
     */
    delete<T extends PaymentMethodDeleteArgs>(args: SelectSubset<T, PaymentMethodDeleteArgs<ExtArgs>>): Prisma__PaymentMethodClient<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PaymentMethod.
     * @param {PaymentMethodUpdateArgs} args - Arguments to update one PaymentMethod.
     * @example
     * // Update one PaymentMethod
     * const paymentMethod = await prisma.paymentMethod.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentMethodUpdateArgs>(args: SelectSubset<T, PaymentMethodUpdateArgs<ExtArgs>>): Prisma__PaymentMethodClient<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PaymentMethods.
     * @param {PaymentMethodDeleteManyArgs} args - Arguments to filter PaymentMethods to delete.
     * @example
     * // Delete a few PaymentMethods
     * const { count } = await prisma.paymentMethod.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentMethodDeleteManyArgs>(args?: SelectSubset<T, PaymentMethodDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentMethods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PaymentMethods
     * const paymentMethod = await prisma.paymentMethod.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentMethodUpdateManyArgs>(args: SelectSubset<T, PaymentMethodUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentMethods and returns the data updated in the database.
     * @param {PaymentMethodUpdateManyAndReturnArgs} args - Arguments to update many PaymentMethods.
     * @example
     * // Update many PaymentMethods
     * const paymentMethod = await prisma.paymentMethod.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PaymentMethods and only return the `id`
     * const paymentMethodWithIdOnly = await prisma.paymentMethod.updateManyAndReturn({
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
    updateManyAndReturn<T extends PaymentMethodUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentMethodUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PaymentMethod.
     * @param {PaymentMethodUpsertArgs} args - Arguments to update or create a PaymentMethod.
     * @example
     * // Update or create a PaymentMethod
     * const paymentMethod = await prisma.paymentMethod.upsert({
     *   create: {
     *     // ... data to create a PaymentMethod
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PaymentMethod we want to update
     *   }
     * })
     */
    upsert<T extends PaymentMethodUpsertArgs>(args: SelectSubset<T, PaymentMethodUpsertArgs<ExtArgs>>): Prisma__PaymentMethodClient<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PaymentMethods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodCountArgs} args - Arguments to filter PaymentMethods to count.
     * @example
     * // Count the number of PaymentMethods
     * const count = await prisma.paymentMethod.count({
     *   where: {
     *     // ... the filter for the PaymentMethods we want to count
     *   }
     * })
    **/
    count<T extends PaymentMethodCountArgs>(
      args?: Subset<T, PaymentMethodCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentMethodCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PaymentMethod.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentMethodAggregateArgs>(args: Subset<T, PaymentMethodAggregateArgs>): Prisma.PrismaPromise<GetPaymentMethodAggregateType<T>>

    /**
     * Group by PaymentMethod.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodGroupByArgs} args - Group by arguments.
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
      T extends PaymentMethodGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentMethodGroupByArgs['orderBy'] }
        : { orderBy?: PaymentMethodGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PaymentMethodGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentMethodGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PaymentMethod model
   */
  readonly fields: PaymentMethodFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PaymentMethod.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentMethodClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    transactions<T extends PaymentMethod$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, PaymentMethod$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    recurringTransactions<T extends PaymentMethod$recurringTransactionsArgs<ExtArgs> = {}>(args?: Subset<T, PaymentMethod$recurringTransactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecurringTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the PaymentMethod model
   */
  interface PaymentMethodFieldRefs {
    readonly id: FieldRef<"PaymentMethod", 'Int'>
    readonly userId: FieldRef<"PaymentMethod", 'String'>
    readonly name: FieldRef<"PaymentMethod", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PaymentMethod findUnique
   */
  export type PaymentMethodFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethod
     */
    omit?: PaymentMethodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
    /**
     * Filter, which PaymentMethod to fetch.
     */
    where: PaymentMethodWhereUniqueInput
  }

  /**
   * PaymentMethod findUniqueOrThrow
   */
  export type PaymentMethodFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethod
     */
    omit?: PaymentMethodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
    /**
     * Filter, which PaymentMethod to fetch.
     */
    where: PaymentMethodWhereUniqueInput
  }

  /**
   * PaymentMethod findFirst
   */
  export type PaymentMethodFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethod
     */
    omit?: PaymentMethodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
    /**
     * Filter, which PaymentMethod to fetch.
     */
    where?: PaymentMethodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentMethods to fetch.
     */
    orderBy?: PaymentMethodOrderByWithRelationInput | PaymentMethodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentMethods.
     */
    cursor?: PaymentMethodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentMethods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentMethods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentMethods.
     */
    distinct?: PaymentMethodScalarFieldEnum | PaymentMethodScalarFieldEnum[]
  }

  /**
   * PaymentMethod findFirstOrThrow
   */
  export type PaymentMethodFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethod
     */
    omit?: PaymentMethodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
    /**
     * Filter, which PaymentMethod to fetch.
     */
    where?: PaymentMethodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentMethods to fetch.
     */
    orderBy?: PaymentMethodOrderByWithRelationInput | PaymentMethodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentMethods.
     */
    cursor?: PaymentMethodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentMethods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentMethods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentMethods.
     */
    distinct?: PaymentMethodScalarFieldEnum | PaymentMethodScalarFieldEnum[]
  }

  /**
   * PaymentMethod findMany
   */
  export type PaymentMethodFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethod
     */
    omit?: PaymentMethodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
    /**
     * Filter, which PaymentMethods to fetch.
     */
    where?: PaymentMethodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentMethods to fetch.
     */
    orderBy?: PaymentMethodOrderByWithRelationInput | PaymentMethodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PaymentMethods.
     */
    cursor?: PaymentMethodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentMethods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentMethods.
     */
    skip?: number
    distinct?: PaymentMethodScalarFieldEnum | PaymentMethodScalarFieldEnum[]
  }

  /**
   * PaymentMethod create
   */
  export type PaymentMethodCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethod
     */
    omit?: PaymentMethodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
    /**
     * The data needed to create a PaymentMethod.
     */
    data: XOR<PaymentMethodCreateInput, PaymentMethodUncheckedCreateInput>
  }

  /**
   * PaymentMethod createMany
   */
  export type PaymentMethodCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PaymentMethods.
     */
    data: PaymentMethodCreateManyInput | PaymentMethodCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PaymentMethod createManyAndReturn
   */
  export type PaymentMethodCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethod
     */
    omit?: PaymentMethodOmit<ExtArgs> | null
    /**
     * The data used to create many PaymentMethods.
     */
    data: PaymentMethodCreateManyInput | PaymentMethodCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PaymentMethod update
   */
  export type PaymentMethodUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethod
     */
    omit?: PaymentMethodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
    /**
     * The data needed to update a PaymentMethod.
     */
    data: XOR<PaymentMethodUpdateInput, PaymentMethodUncheckedUpdateInput>
    /**
     * Choose, which PaymentMethod to update.
     */
    where: PaymentMethodWhereUniqueInput
  }

  /**
   * PaymentMethod updateMany
   */
  export type PaymentMethodUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PaymentMethods.
     */
    data: XOR<PaymentMethodUpdateManyMutationInput, PaymentMethodUncheckedUpdateManyInput>
    /**
     * Filter which PaymentMethods to update
     */
    where?: PaymentMethodWhereInput
    /**
     * Limit how many PaymentMethods to update.
     */
    limit?: number
  }

  /**
   * PaymentMethod updateManyAndReturn
   */
  export type PaymentMethodUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethod
     */
    omit?: PaymentMethodOmit<ExtArgs> | null
    /**
     * The data used to update PaymentMethods.
     */
    data: XOR<PaymentMethodUpdateManyMutationInput, PaymentMethodUncheckedUpdateManyInput>
    /**
     * Filter which PaymentMethods to update
     */
    where?: PaymentMethodWhereInput
    /**
     * Limit how many PaymentMethods to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PaymentMethod upsert
   */
  export type PaymentMethodUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethod
     */
    omit?: PaymentMethodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
    /**
     * The filter to search for the PaymentMethod to update in case it exists.
     */
    where: PaymentMethodWhereUniqueInput
    /**
     * In case the PaymentMethod found by the `where` argument doesn't exist, create a new PaymentMethod with this data.
     */
    create: XOR<PaymentMethodCreateInput, PaymentMethodUncheckedCreateInput>
    /**
     * In case the PaymentMethod was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentMethodUpdateInput, PaymentMethodUncheckedUpdateInput>
  }

  /**
   * PaymentMethod delete
   */
  export type PaymentMethodDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethod
     */
    omit?: PaymentMethodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
    /**
     * Filter which PaymentMethod to delete.
     */
    where: PaymentMethodWhereUniqueInput
  }

  /**
   * PaymentMethod deleteMany
   */
  export type PaymentMethodDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentMethods to delete
     */
    where?: PaymentMethodWhereInput
    /**
     * Limit how many PaymentMethods to delete.
     */
    limit?: number
  }

  /**
   * PaymentMethod.transactions
   */
  export type PaymentMethod$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * PaymentMethod.recurringTransactions
   */
  export type PaymentMethod$recurringTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringTransaction
     */
    select?: RecurringTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringTransaction
     */
    omit?: RecurringTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurringTransactionInclude<ExtArgs> | null
    where?: RecurringTransactionWhereInput
    orderBy?: RecurringTransactionOrderByWithRelationInput | RecurringTransactionOrderByWithRelationInput[]
    cursor?: RecurringTransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecurringTransactionScalarFieldEnum | RecurringTransactionScalarFieldEnum[]
  }

  /**
   * PaymentMethod without action
   */
  export type PaymentMethodDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethod
     */
    omit?: PaymentMethodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
  }


  /**
   * Model Transaction
   */

  export type AggregateTransaction = {
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  export type TransactionAvgAggregateOutputType = {
    id: number | null
    accountId: number | null
    categoryId: number | null
    amount: number | null
    payerId: number | null
    payeeId: number | null
    paymentMethodId: number | null
    debit: number | null
    credit: number | null
    balance: number | null
    linkedTransactionId: number | null
    transferToAccountId: number | null
  }

  export type TransactionSumAggregateOutputType = {
    id: number | null
    accountId: number | null
    categoryId: number | null
    amount: number | null
    payerId: number | null
    payeeId: number | null
    paymentMethodId: number | null
    debit: number | null
    credit: number | null
    balance: number | null
    linkedTransactionId: number | null
    transferToAccountId: number | null
  }

  export type TransactionMinAggregateOutputType = {
    id: number | null
    userId: string | null
    accountId: number | null
    date: Date | null
    type: $Enums.TransactionType | null
    categoryId: number | null
    amount: number | null
    payerId: number | null
    payeeId: number | null
    paymentMethodId: number | null
    reference: string | null
    note: string | null
    debit: number | null
    credit: number | null
    balance: number | null
    linkedTransactionId: number | null
    transferToAccountId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TransactionMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    accountId: number | null
    date: Date | null
    type: $Enums.TransactionType | null
    categoryId: number | null
    amount: number | null
    payerId: number | null
    payeeId: number | null
    paymentMethodId: number | null
    reference: string | null
    note: string | null
    debit: number | null
    credit: number | null
    balance: number | null
    linkedTransactionId: number | null
    transferToAccountId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TransactionCountAggregateOutputType = {
    id: number
    userId: number
    accountId: number
    date: number
    type: number
    categoryId: number
    amount: number
    payerId: number
    payeeId: number
    paymentMethodId: number
    reference: number
    note: number
    debit: number
    credit: number
    balance: number
    linkedTransactionId: number
    transferToAccountId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TransactionAvgAggregateInputType = {
    id?: true
    accountId?: true
    categoryId?: true
    amount?: true
    payerId?: true
    payeeId?: true
    paymentMethodId?: true
    debit?: true
    credit?: true
    balance?: true
    linkedTransactionId?: true
    transferToAccountId?: true
  }

  export type TransactionSumAggregateInputType = {
    id?: true
    accountId?: true
    categoryId?: true
    amount?: true
    payerId?: true
    payeeId?: true
    paymentMethodId?: true
    debit?: true
    credit?: true
    balance?: true
    linkedTransactionId?: true
    transferToAccountId?: true
  }

  export type TransactionMinAggregateInputType = {
    id?: true
    userId?: true
    accountId?: true
    date?: true
    type?: true
    categoryId?: true
    amount?: true
    payerId?: true
    payeeId?: true
    paymentMethodId?: true
    reference?: true
    note?: true
    debit?: true
    credit?: true
    balance?: true
    linkedTransactionId?: true
    transferToAccountId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TransactionMaxAggregateInputType = {
    id?: true
    userId?: true
    accountId?: true
    date?: true
    type?: true
    categoryId?: true
    amount?: true
    payerId?: true
    payeeId?: true
    paymentMethodId?: true
    reference?: true
    note?: true
    debit?: true
    credit?: true
    balance?: true
    linkedTransactionId?: true
    transferToAccountId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TransactionCountAggregateInputType = {
    id?: true
    userId?: true
    accountId?: true
    date?: true
    type?: true
    categoryId?: true
    amount?: true
    payerId?: true
    payeeId?: true
    paymentMethodId?: true
    reference?: true
    note?: true
    debit?: true
    credit?: true
    balance?: true
    linkedTransactionId?: true
    transferToAccountId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transaction to aggregate.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transactions
    **/
    _count?: true | TransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionMaxAggregateInputType
  }

  export type GetTransactionAggregateType<T extends TransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaction[P]>
      : GetScalarType<T[P], AggregateTransaction[P]>
  }




  export type TransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithAggregationInput | TransactionOrderByWithAggregationInput[]
    by: TransactionScalarFieldEnum[] | TransactionScalarFieldEnum
    having?: TransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionCountAggregateInputType | true
    _avg?: TransactionAvgAggregateInputType
    _sum?: TransactionSumAggregateInputType
    _min?: TransactionMinAggregateInputType
    _max?: TransactionMaxAggregateInputType
  }

  export type TransactionGroupByOutputType = {
    id: number
    userId: string
    accountId: number
    date: Date
    type: $Enums.TransactionType
    categoryId: number | null
    amount: number
    payerId: number | null
    payeeId: number | null
    paymentMethodId: number | null
    reference: string | null
    note: string | null
    debit: number
    credit: number
    balance: number
    linkedTransactionId: number | null
    transferToAccountId: number | null
    createdAt: Date
    updatedAt: Date
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  type GetTransactionGroupByPayload<T extends TransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionGroupByOutputType[P]>
        }
      >
    >


  export type TransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    accountId?: boolean
    date?: boolean
    type?: boolean
    categoryId?: boolean
    amount?: boolean
    payerId?: boolean
    payeeId?: boolean
    paymentMethodId?: boolean
    reference?: boolean
    note?: boolean
    debit?: boolean
    credit?: boolean
    balance?: boolean
    linkedTransactionId?: boolean
    transferToAccountId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    linkedTransaction?: boolean | Transaction$linkedTransactionArgs<ExtArgs>
    linkedBy?: boolean | Transaction$linkedByArgs<ExtArgs>
    transferToAccount?: boolean | Transaction$transferToAccountArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    account?: boolean | FinanceAccountDefaultArgs<ExtArgs>
    category?: boolean | Transaction$categoryArgs<ExtArgs>
    payer?: boolean | Transaction$payerArgs<ExtArgs>
    payee?: boolean | Transaction$payeeArgs<ExtArgs>
    paymentMethod?: boolean | Transaction$paymentMethodArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    accountId?: boolean
    date?: boolean
    type?: boolean
    categoryId?: boolean
    amount?: boolean
    payerId?: boolean
    payeeId?: boolean
    paymentMethodId?: boolean
    reference?: boolean
    note?: boolean
    debit?: boolean
    credit?: boolean
    balance?: boolean
    linkedTransactionId?: boolean
    transferToAccountId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    linkedTransaction?: boolean | Transaction$linkedTransactionArgs<ExtArgs>
    transferToAccount?: boolean | Transaction$transferToAccountArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    account?: boolean | FinanceAccountDefaultArgs<ExtArgs>
    category?: boolean | Transaction$categoryArgs<ExtArgs>
    payer?: boolean | Transaction$payerArgs<ExtArgs>
    payee?: boolean | Transaction$payeeArgs<ExtArgs>
    paymentMethod?: boolean | Transaction$paymentMethodArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    accountId?: boolean
    date?: boolean
    type?: boolean
    categoryId?: boolean
    amount?: boolean
    payerId?: boolean
    payeeId?: boolean
    paymentMethodId?: boolean
    reference?: boolean
    note?: boolean
    debit?: boolean
    credit?: boolean
    balance?: boolean
    linkedTransactionId?: boolean
    transferToAccountId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    linkedTransaction?: boolean | Transaction$linkedTransactionArgs<ExtArgs>
    transferToAccount?: boolean | Transaction$transferToAccountArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    account?: boolean | FinanceAccountDefaultArgs<ExtArgs>
    category?: boolean | Transaction$categoryArgs<ExtArgs>
    payer?: boolean | Transaction$payerArgs<ExtArgs>
    payee?: boolean | Transaction$payeeArgs<ExtArgs>
    paymentMethod?: boolean | Transaction$paymentMethodArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectScalar = {
    id?: boolean
    userId?: boolean
    accountId?: boolean
    date?: boolean
    type?: boolean
    categoryId?: boolean
    amount?: boolean
    payerId?: boolean
    payeeId?: boolean
    paymentMethodId?: boolean
    reference?: boolean
    note?: boolean
    debit?: boolean
    credit?: boolean
    balance?: boolean
    linkedTransactionId?: boolean
    transferToAccountId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "accountId" | "date" | "type" | "categoryId" | "amount" | "payerId" | "payeeId" | "paymentMethodId" | "reference" | "note" | "debit" | "credit" | "balance" | "linkedTransactionId" | "transferToAccountId" | "createdAt" | "updatedAt", ExtArgs["result"]["transaction"]>
  export type TransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    linkedTransaction?: boolean | Transaction$linkedTransactionArgs<ExtArgs>
    linkedBy?: boolean | Transaction$linkedByArgs<ExtArgs>
    transferToAccount?: boolean | Transaction$transferToAccountArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    account?: boolean | FinanceAccountDefaultArgs<ExtArgs>
    category?: boolean | Transaction$categoryArgs<ExtArgs>
    payer?: boolean | Transaction$payerArgs<ExtArgs>
    payee?: boolean | Transaction$payeeArgs<ExtArgs>
    paymentMethod?: boolean | Transaction$paymentMethodArgs<ExtArgs>
  }
  export type TransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    linkedTransaction?: boolean | Transaction$linkedTransactionArgs<ExtArgs>
    transferToAccount?: boolean | Transaction$transferToAccountArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    account?: boolean | FinanceAccountDefaultArgs<ExtArgs>
    category?: boolean | Transaction$categoryArgs<ExtArgs>
    payer?: boolean | Transaction$payerArgs<ExtArgs>
    payee?: boolean | Transaction$payeeArgs<ExtArgs>
    paymentMethod?: boolean | Transaction$paymentMethodArgs<ExtArgs>
  }
  export type TransactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    linkedTransaction?: boolean | Transaction$linkedTransactionArgs<ExtArgs>
    transferToAccount?: boolean | Transaction$transferToAccountArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    account?: boolean | FinanceAccountDefaultArgs<ExtArgs>
    category?: boolean | Transaction$categoryArgs<ExtArgs>
    payer?: boolean | Transaction$payerArgs<ExtArgs>
    payee?: boolean | Transaction$payeeArgs<ExtArgs>
    paymentMethod?: boolean | Transaction$paymentMethodArgs<ExtArgs>
  }

  export type $TransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transaction"
    objects: {
      linkedTransaction: Prisma.$TransactionPayload<ExtArgs> | null
      linkedBy: Prisma.$TransactionPayload<ExtArgs> | null
      transferToAccount: Prisma.$FinanceAccountPayload<ExtArgs> | null
      user: Prisma.$UserPayload<ExtArgs>
      account: Prisma.$FinanceAccountPayload<ExtArgs>
      category: Prisma.$CategoryPayload<ExtArgs> | null
      payer: Prisma.$PayeePayerPayload<ExtArgs> | null
      payee: Prisma.$PayeePayerPayload<ExtArgs> | null
      paymentMethod: Prisma.$PaymentMethodPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      accountId: number
      date: Date
      type: $Enums.TransactionType
      categoryId: number | null
      amount: number
      payerId: number | null
      payeeId: number | null
      paymentMethodId: number | null
      reference: string | null
      note: string | null
      debit: number
      credit: number
      balance: number
      linkedTransactionId: number | null
      transferToAccountId: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["transaction"]>
    composites: {}
  }

  type TransactionGetPayload<S extends boolean | null | undefined | TransactionDefaultArgs> = $Result.GetResult<Prisma.$TransactionPayload, S>

  type TransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionCountAggregateInputType | true
    }

  export interface TransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transaction'], meta: { name: 'Transaction' } }
    /**
     * Find zero or one Transaction that matches the filter.
     * @param {TransactionFindUniqueArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionFindUniqueArgs>(args: SelectSubset<T, TransactionFindUniqueArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransactionFindUniqueOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, TransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionFindFirstArgs>(args?: SelectSubset<T, TransactionFindFirstArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, TransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transaction.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionWithIdOnly = await prisma.transaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransactionFindManyArgs>(args?: SelectSubset<T, TransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transaction.
     * @param {TransactionCreateArgs} args - Arguments to create a Transaction.
     * @example
     * // Create one Transaction
     * const Transaction = await prisma.transaction.create({
     *   data: {
     *     // ... data to create a Transaction
     *   }
     * })
     * 
     */
    create<T extends TransactionCreateArgs>(args: SelectSubset<T, TransactionCreateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transactions.
     * @param {TransactionCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransactionCreateManyArgs>(args?: SelectSubset<T, TransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transactions and returns the data saved in the database.
     * @param {TransactionCreateManyAndReturnArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, TransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Transaction.
     * @param {TransactionDeleteArgs} args - Arguments to delete one Transaction.
     * @example
     * // Delete one Transaction
     * const Transaction = await prisma.transaction.delete({
     *   where: {
     *     // ... filter to delete one Transaction
     *   }
     * })
     * 
     */
    delete<T extends TransactionDeleteArgs>(args: SelectSubset<T, TransactionDeleteArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transaction.
     * @param {TransactionUpdateArgs} args - Arguments to update one Transaction.
     * @example
     * // Update one Transaction
     * const transaction = await prisma.transaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransactionUpdateArgs>(args: SelectSubset<T, TransactionUpdateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transactions.
     * @param {TransactionDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransactionDeleteManyArgs>(args?: SelectSubset<T, TransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransactionUpdateManyArgs>(args: SelectSubset<T, TransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions and returns the data updated in the database.
     * @param {TransactionUpdateManyAndReturnArgs} args - Arguments to update many Transactions.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.updateManyAndReturn({
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
    updateManyAndReturn<T extends TransactionUpdateManyAndReturnArgs>(args: SelectSubset<T, TransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Transaction.
     * @param {TransactionUpsertArgs} args - Arguments to update or create a Transaction.
     * @example
     * // Update or create a Transaction
     * const transaction = await prisma.transaction.upsert({
     *   create: {
     *     // ... data to create a Transaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction we want to update
     *   }
     * })
     */
    upsert<T extends TransactionUpsertArgs>(args: SelectSubset<T, TransactionUpsertArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transaction.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends TransactionCountArgs>(
      args?: Subset<T, TransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransactionAggregateArgs>(args: Subset<T, TransactionAggregateArgs>): Prisma.PrismaPromise<GetTransactionAggregateType<T>>

    /**
     * Group by Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionGroupByArgs} args - Group by arguments.
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
      T extends TransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionGroupByArgs['orderBy'] }
        : { orderBy?: TransactionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transaction model
   */
  readonly fields: TransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    linkedTransaction<T extends Transaction$linkedTransactionArgs<ExtArgs> = {}>(args?: Subset<T, Transaction$linkedTransactionArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    linkedBy<T extends Transaction$linkedByArgs<ExtArgs> = {}>(args?: Subset<T, Transaction$linkedByArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    transferToAccount<T extends Transaction$transferToAccountArgs<ExtArgs> = {}>(args?: Subset<T, Transaction$transferToAccountArgs<ExtArgs>>): Prisma__FinanceAccountClient<$Result.GetResult<Prisma.$FinanceAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    account<T extends FinanceAccountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FinanceAccountDefaultArgs<ExtArgs>>): Prisma__FinanceAccountClient<$Result.GetResult<Prisma.$FinanceAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    category<T extends Transaction$categoryArgs<ExtArgs> = {}>(args?: Subset<T, Transaction$categoryArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    payer<T extends Transaction$payerArgs<ExtArgs> = {}>(args?: Subset<T, Transaction$payerArgs<ExtArgs>>): Prisma__PayeePayerClient<$Result.GetResult<Prisma.$PayeePayerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    payee<T extends Transaction$payeeArgs<ExtArgs> = {}>(args?: Subset<T, Transaction$payeeArgs<ExtArgs>>): Prisma__PayeePayerClient<$Result.GetResult<Prisma.$PayeePayerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    paymentMethod<T extends Transaction$paymentMethodArgs<ExtArgs> = {}>(args?: Subset<T, Transaction$paymentMethodArgs<ExtArgs>>): Prisma__PaymentMethodClient<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Transaction model
   */
  interface TransactionFieldRefs {
    readonly id: FieldRef<"Transaction", 'Int'>
    readonly userId: FieldRef<"Transaction", 'String'>
    readonly accountId: FieldRef<"Transaction", 'Int'>
    readonly date: FieldRef<"Transaction", 'DateTime'>
    readonly type: FieldRef<"Transaction", 'TransactionType'>
    readonly categoryId: FieldRef<"Transaction", 'Int'>
    readonly amount: FieldRef<"Transaction", 'Float'>
    readonly payerId: FieldRef<"Transaction", 'Int'>
    readonly payeeId: FieldRef<"Transaction", 'Int'>
    readonly paymentMethodId: FieldRef<"Transaction", 'Int'>
    readonly reference: FieldRef<"Transaction", 'String'>
    readonly note: FieldRef<"Transaction", 'String'>
    readonly debit: FieldRef<"Transaction", 'Float'>
    readonly credit: FieldRef<"Transaction", 'Float'>
    readonly balance: FieldRef<"Transaction", 'Float'>
    readonly linkedTransactionId: FieldRef<"Transaction", 'Int'>
    readonly transferToAccountId: FieldRef<"Transaction", 'Int'>
    readonly createdAt: FieldRef<"Transaction", 'DateTime'>
    readonly updatedAt: FieldRef<"Transaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Transaction findUnique
   */
  export type TransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findUniqueOrThrow
   */
  export type TransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findFirst
   */
  export type TransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findFirstOrThrow
   */
  export type TransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findMany
   */
  export type TransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction create
   */
  export type TransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a Transaction.
     */
    data: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
  }

  /**
   * Transaction createMany
   */
  export type TransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transaction createManyAndReturn
   */
  export type TransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction update
   */
  export type TransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a Transaction.
     */
    data: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
    /**
     * Choose, which Transaction to update.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction updateMany
   */
  export type TransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
  }

  /**
   * Transaction updateManyAndReturn
   */
  export type TransactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction upsert
   */
  export type TransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the Transaction to update in case it exists.
     */
    where: TransactionWhereUniqueInput
    /**
     * In case the Transaction found by the `where` argument doesn't exist, create a new Transaction with this data.
     */
    create: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
    /**
     * In case the Transaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
  }

  /**
   * Transaction delete
   */
  export type TransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter which Transaction to delete.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction deleteMany
   */
  export type TransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transactions to delete
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to delete.
     */
    limit?: number
  }

  /**
   * Transaction.linkedTransaction
   */
  export type Transaction$linkedTransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
  }

  /**
   * Transaction.linkedBy
   */
  export type Transaction$linkedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
  }

  /**
   * Transaction.transferToAccount
   */
  export type Transaction$transferToAccountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinanceAccount
     */
    select?: FinanceAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinanceAccount
     */
    omit?: FinanceAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinanceAccountInclude<ExtArgs> | null
    where?: FinanceAccountWhereInput
  }

  /**
   * Transaction.category
   */
  export type Transaction$categoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: CategoryWhereInput
  }

  /**
   * Transaction.payer
   */
  export type Transaction$payerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayeePayer
     */
    select?: PayeePayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayeePayer
     */
    omit?: PayeePayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayeePayerInclude<ExtArgs> | null
    where?: PayeePayerWhereInput
  }

  /**
   * Transaction.payee
   */
  export type Transaction$payeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayeePayer
     */
    select?: PayeePayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayeePayer
     */
    omit?: PayeePayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayeePayerInclude<ExtArgs> | null
    where?: PayeePayerWhereInput
  }

  /**
   * Transaction.paymentMethod
   */
  export type Transaction$paymentMethodArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethod
     */
    omit?: PaymentMethodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
    where?: PaymentMethodWhereInput
  }

  /**
   * Transaction without action
   */
  export type TransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
  }


  /**
   * Model RecurringTransaction
   */

  export type AggregateRecurringTransaction = {
    _count: RecurringTransactionCountAggregateOutputType | null
    _avg: RecurringTransactionAvgAggregateOutputType | null
    _sum: RecurringTransactionSumAggregateOutputType | null
    _min: RecurringTransactionMinAggregateOutputType | null
    _max: RecurringTransactionMaxAggregateOutputType | null
  }

  export type RecurringTransactionAvgAggregateOutputType = {
    id: number | null
    accountId: number | null
    categoryId: number | null
    amount: number | null
    payerId: number | null
    payeeId: number | null
    paymentMethodId: number | null
  }

  export type RecurringTransactionSumAggregateOutputType = {
    id: number | null
    accountId: number | null
    categoryId: number | null
    amount: number | null
    payerId: number | null
    payeeId: number | null
    paymentMethodId: number | null
  }

  export type RecurringTransactionMinAggregateOutputType = {
    id: number | null
    userId: string | null
    accountId: number | null
    type: $Enums.TransactionType | null
    categoryId: number | null
    amount: number | null
    payerId: number | null
    payeeId: number | null
    paymentMethodId: number | null
    reference: string | null
    status: $Enums.RecurringStatus | null
    description: string | null
    startDate: Date | null
    nextDate: Date | null
    frequency: $Enums.RecurringFrequency | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RecurringTransactionMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    accountId: number | null
    type: $Enums.TransactionType | null
    categoryId: number | null
    amount: number | null
    payerId: number | null
    payeeId: number | null
    paymentMethodId: number | null
    reference: string | null
    status: $Enums.RecurringStatus | null
    description: string | null
    startDate: Date | null
    nextDate: Date | null
    frequency: $Enums.RecurringFrequency | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RecurringTransactionCountAggregateOutputType = {
    id: number
    userId: number
    accountId: number
    type: number
    categoryId: number
    amount: number
    payerId: number
    payeeId: number
    paymentMethodId: number
    reference: number
    status: number
    description: number
    startDate: number
    nextDate: number
    frequency: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RecurringTransactionAvgAggregateInputType = {
    id?: true
    accountId?: true
    categoryId?: true
    amount?: true
    payerId?: true
    payeeId?: true
    paymentMethodId?: true
  }

  export type RecurringTransactionSumAggregateInputType = {
    id?: true
    accountId?: true
    categoryId?: true
    amount?: true
    payerId?: true
    payeeId?: true
    paymentMethodId?: true
  }

  export type RecurringTransactionMinAggregateInputType = {
    id?: true
    userId?: true
    accountId?: true
    type?: true
    categoryId?: true
    amount?: true
    payerId?: true
    payeeId?: true
    paymentMethodId?: true
    reference?: true
    status?: true
    description?: true
    startDate?: true
    nextDate?: true
    frequency?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RecurringTransactionMaxAggregateInputType = {
    id?: true
    userId?: true
    accountId?: true
    type?: true
    categoryId?: true
    amount?: true
    payerId?: true
    payeeId?: true
    paymentMethodId?: true
    reference?: true
    status?: true
    description?: true
    startDate?: true
    nextDate?: true
    frequency?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RecurringTransactionCountAggregateInputType = {
    id?: true
    userId?: true
    accountId?: true
    type?: true
    categoryId?: true
    amount?: true
    payerId?: true
    payeeId?: true
    paymentMethodId?: true
    reference?: true
    status?: true
    description?: true
    startDate?: true
    nextDate?: true
    frequency?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RecurringTransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RecurringTransaction to aggregate.
     */
    where?: RecurringTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecurringTransactions to fetch.
     */
    orderBy?: RecurringTransactionOrderByWithRelationInput | RecurringTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RecurringTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecurringTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecurringTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RecurringTransactions
    **/
    _count?: true | RecurringTransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RecurringTransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RecurringTransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecurringTransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecurringTransactionMaxAggregateInputType
  }

  export type GetRecurringTransactionAggregateType<T extends RecurringTransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateRecurringTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecurringTransaction[P]>
      : GetScalarType<T[P], AggregateRecurringTransaction[P]>
  }




  export type RecurringTransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecurringTransactionWhereInput
    orderBy?: RecurringTransactionOrderByWithAggregationInput | RecurringTransactionOrderByWithAggregationInput[]
    by: RecurringTransactionScalarFieldEnum[] | RecurringTransactionScalarFieldEnum
    having?: RecurringTransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecurringTransactionCountAggregateInputType | true
    _avg?: RecurringTransactionAvgAggregateInputType
    _sum?: RecurringTransactionSumAggregateInputType
    _min?: RecurringTransactionMinAggregateInputType
    _max?: RecurringTransactionMaxAggregateInputType
  }

  export type RecurringTransactionGroupByOutputType = {
    id: number
    userId: string
    accountId: number
    type: $Enums.TransactionType
    categoryId: number
    amount: number
    payerId: number | null
    payeeId: number | null
    paymentMethodId: number | null
    reference: string | null
    status: $Enums.RecurringStatus
    description: string | null
    startDate: Date
    nextDate: Date | null
    frequency: $Enums.RecurringFrequency
    createdAt: Date
    updatedAt: Date
    _count: RecurringTransactionCountAggregateOutputType | null
    _avg: RecurringTransactionAvgAggregateOutputType | null
    _sum: RecurringTransactionSumAggregateOutputType | null
    _min: RecurringTransactionMinAggregateOutputType | null
    _max: RecurringTransactionMaxAggregateOutputType | null
  }

  type GetRecurringTransactionGroupByPayload<T extends RecurringTransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecurringTransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecurringTransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecurringTransactionGroupByOutputType[P]>
            : GetScalarType<T[P], RecurringTransactionGroupByOutputType[P]>
        }
      >
    >


  export type RecurringTransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    accountId?: boolean
    type?: boolean
    categoryId?: boolean
    amount?: boolean
    payerId?: boolean
    payeeId?: boolean
    paymentMethodId?: boolean
    reference?: boolean
    status?: boolean
    description?: boolean
    startDate?: boolean
    nextDate?: boolean
    frequency?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    account?: boolean | FinanceAccountDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    payer?: boolean | RecurringTransaction$payerArgs<ExtArgs>
    payee?: boolean | RecurringTransaction$payeeArgs<ExtArgs>
    paymentMethod?: boolean | RecurringTransaction$paymentMethodArgs<ExtArgs>
  }, ExtArgs["result"]["recurringTransaction"]>

  export type RecurringTransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    accountId?: boolean
    type?: boolean
    categoryId?: boolean
    amount?: boolean
    payerId?: boolean
    payeeId?: boolean
    paymentMethodId?: boolean
    reference?: boolean
    status?: boolean
    description?: boolean
    startDate?: boolean
    nextDate?: boolean
    frequency?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    account?: boolean | FinanceAccountDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    payer?: boolean | RecurringTransaction$payerArgs<ExtArgs>
    payee?: boolean | RecurringTransaction$payeeArgs<ExtArgs>
    paymentMethod?: boolean | RecurringTransaction$paymentMethodArgs<ExtArgs>
  }, ExtArgs["result"]["recurringTransaction"]>

  export type RecurringTransactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    accountId?: boolean
    type?: boolean
    categoryId?: boolean
    amount?: boolean
    payerId?: boolean
    payeeId?: boolean
    paymentMethodId?: boolean
    reference?: boolean
    status?: boolean
    description?: boolean
    startDate?: boolean
    nextDate?: boolean
    frequency?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    account?: boolean | FinanceAccountDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    payer?: boolean | RecurringTransaction$payerArgs<ExtArgs>
    payee?: boolean | RecurringTransaction$payeeArgs<ExtArgs>
    paymentMethod?: boolean | RecurringTransaction$paymentMethodArgs<ExtArgs>
  }, ExtArgs["result"]["recurringTransaction"]>

  export type RecurringTransactionSelectScalar = {
    id?: boolean
    userId?: boolean
    accountId?: boolean
    type?: boolean
    categoryId?: boolean
    amount?: boolean
    payerId?: boolean
    payeeId?: boolean
    paymentMethodId?: boolean
    reference?: boolean
    status?: boolean
    description?: boolean
    startDate?: boolean
    nextDate?: boolean
    frequency?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RecurringTransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "accountId" | "type" | "categoryId" | "amount" | "payerId" | "payeeId" | "paymentMethodId" | "reference" | "status" | "description" | "startDate" | "nextDate" | "frequency" | "createdAt" | "updatedAt", ExtArgs["result"]["recurringTransaction"]>
  export type RecurringTransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    account?: boolean | FinanceAccountDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    payer?: boolean | RecurringTransaction$payerArgs<ExtArgs>
    payee?: boolean | RecurringTransaction$payeeArgs<ExtArgs>
    paymentMethod?: boolean | RecurringTransaction$paymentMethodArgs<ExtArgs>
  }
  export type RecurringTransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    account?: boolean | FinanceAccountDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    payer?: boolean | RecurringTransaction$payerArgs<ExtArgs>
    payee?: boolean | RecurringTransaction$payeeArgs<ExtArgs>
    paymentMethod?: boolean | RecurringTransaction$paymentMethodArgs<ExtArgs>
  }
  export type RecurringTransactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    account?: boolean | FinanceAccountDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    payer?: boolean | RecurringTransaction$payerArgs<ExtArgs>
    payee?: boolean | RecurringTransaction$payeeArgs<ExtArgs>
    paymentMethod?: boolean | RecurringTransaction$paymentMethodArgs<ExtArgs>
  }

  export type $RecurringTransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RecurringTransaction"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      account: Prisma.$FinanceAccountPayload<ExtArgs>
      category: Prisma.$CategoryPayload<ExtArgs>
      payer: Prisma.$PayeePayerPayload<ExtArgs> | null
      payee: Prisma.$PayeePayerPayload<ExtArgs> | null
      paymentMethod: Prisma.$PaymentMethodPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      accountId: number
      type: $Enums.TransactionType
      categoryId: number
      amount: number
      payerId: number | null
      payeeId: number | null
      paymentMethodId: number | null
      reference: string | null
      status: $Enums.RecurringStatus
      description: string | null
      startDate: Date
      nextDate: Date | null
      frequency: $Enums.RecurringFrequency
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["recurringTransaction"]>
    composites: {}
  }

  type RecurringTransactionGetPayload<S extends boolean | null | undefined | RecurringTransactionDefaultArgs> = $Result.GetResult<Prisma.$RecurringTransactionPayload, S>

  type RecurringTransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RecurringTransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RecurringTransactionCountAggregateInputType | true
    }

  export interface RecurringTransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RecurringTransaction'], meta: { name: 'RecurringTransaction' } }
    /**
     * Find zero or one RecurringTransaction that matches the filter.
     * @param {RecurringTransactionFindUniqueArgs} args - Arguments to find a RecurringTransaction
     * @example
     * // Get one RecurringTransaction
     * const recurringTransaction = await prisma.recurringTransaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecurringTransactionFindUniqueArgs>(args: SelectSubset<T, RecurringTransactionFindUniqueArgs<ExtArgs>>): Prisma__RecurringTransactionClient<$Result.GetResult<Prisma.$RecurringTransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RecurringTransaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RecurringTransactionFindUniqueOrThrowArgs} args - Arguments to find a RecurringTransaction
     * @example
     * // Get one RecurringTransaction
     * const recurringTransaction = await prisma.recurringTransaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecurringTransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, RecurringTransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RecurringTransactionClient<$Result.GetResult<Prisma.$RecurringTransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RecurringTransaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecurringTransactionFindFirstArgs} args - Arguments to find a RecurringTransaction
     * @example
     * // Get one RecurringTransaction
     * const recurringTransaction = await prisma.recurringTransaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecurringTransactionFindFirstArgs>(args?: SelectSubset<T, RecurringTransactionFindFirstArgs<ExtArgs>>): Prisma__RecurringTransactionClient<$Result.GetResult<Prisma.$RecurringTransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RecurringTransaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecurringTransactionFindFirstOrThrowArgs} args - Arguments to find a RecurringTransaction
     * @example
     * // Get one RecurringTransaction
     * const recurringTransaction = await prisma.recurringTransaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecurringTransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, RecurringTransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__RecurringTransactionClient<$Result.GetResult<Prisma.$RecurringTransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RecurringTransactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecurringTransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RecurringTransactions
     * const recurringTransactions = await prisma.recurringTransaction.findMany()
     * 
     * // Get first 10 RecurringTransactions
     * const recurringTransactions = await prisma.recurringTransaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recurringTransactionWithIdOnly = await prisma.recurringTransaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RecurringTransactionFindManyArgs>(args?: SelectSubset<T, RecurringTransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecurringTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RecurringTransaction.
     * @param {RecurringTransactionCreateArgs} args - Arguments to create a RecurringTransaction.
     * @example
     * // Create one RecurringTransaction
     * const RecurringTransaction = await prisma.recurringTransaction.create({
     *   data: {
     *     // ... data to create a RecurringTransaction
     *   }
     * })
     * 
     */
    create<T extends RecurringTransactionCreateArgs>(args: SelectSubset<T, RecurringTransactionCreateArgs<ExtArgs>>): Prisma__RecurringTransactionClient<$Result.GetResult<Prisma.$RecurringTransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RecurringTransactions.
     * @param {RecurringTransactionCreateManyArgs} args - Arguments to create many RecurringTransactions.
     * @example
     * // Create many RecurringTransactions
     * const recurringTransaction = await prisma.recurringTransaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RecurringTransactionCreateManyArgs>(args?: SelectSubset<T, RecurringTransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RecurringTransactions and returns the data saved in the database.
     * @param {RecurringTransactionCreateManyAndReturnArgs} args - Arguments to create many RecurringTransactions.
     * @example
     * // Create many RecurringTransactions
     * const recurringTransaction = await prisma.recurringTransaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RecurringTransactions and only return the `id`
     * const recurringTransactionWithIdOnly = await prisma.recurringTransaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RecurringTransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, RecurringTransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecurringTransactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RecurringTransaction.
     * @param {RecurringTransactionDeleteArgs} args - Arguments to delete one RecurringTransaction.
     * @example
     * // Delete one RecurringTransaction
     * const RecurringTransaction = await prisma.recurringTransaction.delete({
     *   where: {
     *     // ... filter to delete one RecurringTransaction
     *   }
     * })
     * 
     */
    delete<T extends RecurringTransactionDeleteArgs>(args: SelectSubset<T, RecurringTransactionDeleteArgs<ExtArgs>>): Prisma__RecurringTransactionClient<$Result.GetResult<Prisma.$RecurringTransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RecurringTransaction.
     * @param {RecurringTransactionUpdateArgs} args - Arguments to update one RecurringTransaction.
     * @example
     * // Update one RecurringTransaction
     * const recurringTransaction = await prisma.recurringTransaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RecurringTransactionUpdateArgs>(args: SelectSubset<T, RecurringTransactionUpdateArgs<ExtArgs>>): Prisma__RecurringTransactionClient<$Result.GetResult<Prisma.$RecurringTransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RecurringTransactions.
     * @param {RecurringTransactionDeleteManyArgs} args - Arguments to filter RecurringTransactions to delete.
     * @example
     * // Delete a few RecurringTransactions
     * const { count } = await prisma.recurringTransaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RecurringTransactionDeleteManyArgs>(args?: SelectSubset<T, RecurringTransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RecurringTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecurringTransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RecurringTransactions
     * const recurringTransaction = await prisma.recurringTransaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RecurringTransactionUpdateManyArgs>(args: SelectSubset<T, RecurringTransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RecurringTransactions and returns the data updated in the database.
     * @param {RecurringTransactionUpdateManyAndReturnArgs} args - Arguments to update many RecurringTransactions.
     * @example
     * // Update many RecurringTransactions
     * const recurringTransaction = await prisma.recurringTransaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RecurringTransactions and only return the `id`
     * const recurringTransactionWithIdOnly = await prisma.recurringTransaction.updateManyAndReturn({
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
    updateManyAndReturn<T extends RecurringTransactionUpdateManyAndReturnArgs>(args: SelectSubset<T, RecurringTransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecurringTransactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RecurringTransaction.
     * @param {RecurringTransactionUpsertArgs} args - Arguments to update or create a RecurringTransaction.
     * @example
     * // Update or create a RecurringTransaction
     * const recurringTransaction = await prisma.recurringTransaction.upsert({
     *   create: {
     *     // ... data to create a RecurringTransaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RecurringTransaction we want to update
     *   }
     * })
     */
    upsert<T extends RecurringTransactionUpsertArgs>(args: SelectSubset<T, RecurringTransactionUpsertArgs<ExtArgs>>): Prisma__RecurringTransactionClient<$Result.GetResult<Prisma.$RecurringTransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RecurringTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecurringTransactionCountArgs} args - Arguments to filter RecurringTransactions to count.
     * @example
     * // Count the number of RecurringTransactions
     * const count = await prisma.recurringTransaction.count({
     *   where: {
     *     // ... the filter for the RecurringTransactions we want to count
     *   }
     * })
    **/
    count<T extends RecurringTransactionCountArgs>(
      args?: Subset<T, RecurringTransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecurringTransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RecurringTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecurringTransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RecurringTransactionAggregateArgs>(args: Subset<T, RecurringTransactionAggregateArgs>): Prisma.PrismaPromise<GetRecurringTransactionAggregateType<T>>

    /**
     * Group by RecurringTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecurringTransactionGroupByArgs} args - Group by arguments.
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
      T extends RecurringTransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecurringTransactionGroupByArgs['orderBy'] }
        : { orderBy?: RecurringTransactionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RecurringTransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecurringTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RecurringTransaction model
   */
  readonly fields: RecurringTransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RecurringTransaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RecurringTransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    account<T extends FinanceAccountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FinanceAccountDefaultArgs<ExtArgs>>): Prisma__FinanceAccountClient<$Result.GetResult<Prisma.$FinanceAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    payer<T extends RecurringTransaction$payerArgs<ExtArgs> = {}>(args?: Subset<T, RecurringTransaction$payerArgs<ExtArgs>>): Prisma__PayeePayerClient<$Result.GetResult<Prisma.$PayeePayerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    payee<T extends RecurringTransaction$payeeArgs<ExtArgs> = {}>(args?: Subset<T, RecurringTransaction$payeeArgs<ExtArgs>>): Prisma__PayeePayerClient<$Result.GetResult<Prisma.$PayeePayerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    paymentMethod<T extends RecurringTransaction$paymentMethodArgs<ExtArgs> = {}>(args?: Subset<T, RecurringTransaction$paymentMethodArgs<ExtArgs>>): Prisma__PaymentMethodClient<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RecurringTransaction model
   */
  interface RecurringTransactionFieldRefs {
    readonly id: FieldRef<"RecurringTransaction", 'Int'>
    readonly userId: FieldRef<"RecurringTransaction", 'String'>
    readonly accountId: FieldRef<"RecurringTransaction", 'Int'>
    readonly type: FieldRef<"RecurringTransaction", 'TransactionType'>
    readonly categoryId: FieldRef<"RecurringTransaction", 'Int'>
    readonly amount: FieldRef<"RecurringTransaction", 'Float'>
    readonly payerId: FieldRef<"RecurringTransaction", 'Int'>
    readonly payeeId: FieldRef<"RecurringTransaction", 'Int'>
    readonly paymentMethodId: FieldRef<"RecurringTransaction", 'Int'>
    readonly reference: FieldRef<"RecurringTransaction", 'String'>
    readonly status: FieldRef<"RecurringTransaction", 'RecurringStatus'>
    readonly description: FieldRef<"RecurringTransaction", 'String'>
    readonly startDate: FieldRef<"RecurringTransaction", 'DateTime'>
    readonly nextDate: FieldRef<"RecurringTransaction", 'DateTime'>
    readonly frequency: FieldRef<"RecurringTransaction", 'RecurringFrequency'>
    readonly createdAt: FieldRef<"RecurringTransaction", 'DateTime'>
    readonly updatedAt: FieldRef<"RecurringTransaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RecurringTransaction findUnique
   */
  export type RecurringTransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringTransaction
     */
    select?: RecurringTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringTransaction
     */
    omit?: RecurringTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurringTransactionInclude<ExtArgs> | null
    /**
     * Filter, which RecurringTransaction to fetch.
     */
    where: RecurringTransactionWhereUniqueInput
  }

  /**
   * RecurringTransaction findUniqueOrThrow
   */
  export type RecurringTransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringTransaction
     */
    select?: RecurringTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringTransaction
     */
    omit?: RecurringTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurringTransactionInclude<ExtArgs> | null
    /**
     * Filter, which RecurringTransaction to fetch.
     */
    where: RecurringTransactionWhereUniqueInput
  }

  /**
   * RecurringTransaction findFirst
   */
  export type RecurringTransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringTransaction
     */
    select?: RecurringTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringTransaction
     */
    omit?: RecurringTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurringTransactionInclude<ExtArgs> | null
    /**
     * Filter, which RecurringTransaction to fetch.
     */
    where?: RecurringTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecurringTransactions to fetch.
     */
    orderBy?: RecurringTransactionOrderByWithRelationInput | RecurringTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RecurringTransactions.
     */
    cursor?: RecurringTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecurringTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecurringTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecurringTransactions.
     */
    distinct?: RecurringTransactionScalarFieldEnum | RecurringTransactionScalarFieldEnum[]
  }

  /**
   * RecurringTransaction findFirstOrThrow
   */
  export type RecurringTransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringTransaction
     */
    select?: RecurringTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringTransaction
     */
    omit?: RecurringTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurringTransactionInclude<ExtArgs> | null
    /**
     * Filter, which RecurringTransaction to fetch.
     */
    where?: RecurringTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecurringTransactions to fetch.
     */
    orderBy?: RecurringTransactionOrderByWithRelationInput | RecurringTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RecurringTransactions.
     */
    cursor?: RecurringTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecurringTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecurringTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecurringTransactions.
     */
    distinct?: RecurringTransactionScalarFieldEnum | RecurringTransactionScalarFieldEnum[]
  }

  /**
   * RecurringTransaction findMany
   */
  export type RecurringTransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringTransaction
     */
    select?: RecurringTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringTransaction
     */
    omit?: RecurringTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurringTransactionInclude<ExtArgs> | null
    /**
     * Filter, which RecurringTransactions to fetch.
     */
    where?: RecurringTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecurringTransactions to fetch.
     */
    orderBy?: RecurringTransactionOrderByWithRelationInput | RecurringTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RecurringTransactions.
     */
    cursor?: RecurringTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecurringTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecurringTransactions.
     */
    skip?: number
    distinct?: RecurringTransactionScalarFieldEnum | RecurringTransactionScalarFieldEnum[]
  }

  /**
   * RecurringTransaction create
   */
  export type RecurringTransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringTransaction
     */
    select?: RecurringTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringTransaction
     */
    omit?: RecurringTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurringTransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a RecurringTransaction.
     */
    data: XOR<RecurringTransactionCreateInput, RecurringTransactionUncheckedCreateInput>
  }

  /**
   * RecurringTransaction createMany
   */
  export type RecurringTransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RecurringTransactions.
     */
    data: RecurringTransactionCreateManyInput | RecurringTransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RecurringTransaction createManyAndReturn
   */
  export type RecurringTransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringTransaction
     */
    select?: RecurringTransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringTransaction
     */
    omit?: RecurringTransactionOmit<ExtArgs> | null
    /**
     * The data used to create many RecurringTransactions.
     */
    data: RecurringTransactionCreateManyInput | RecurringTransactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurringTransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RecurringTransaction update
   */
  export type RecurringTransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringTransaction
     */
    select?: RecurringTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringTransaction
     */
    omit?: RecurringTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurringTransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a RecurringTransaction.
     */
    data: XOR<RecurringTransactionUpdateInput, RecurringTransactionUncheckedUpdateInput>
    /**
     * Choose, which RecurringTransaction to update.
     */
    where: RecurringTransactionWhereUniqueInput
  }

  /**
   * RecurringTransaction updateMany
   */
  export type RecurringTransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RecurringTransactions.
     */
    data: XOR<RecurringTransactionUpdateManyMutationInput, RecurringTransactionUncheckedUpdateManyInput>
    /**
     * Filter which RecurringTransactions to update
     */
    where?: RecurringTransactionWhereInput
    /**
     * Limit how many RecurringTransactions to update.
     */
    limit?: number
  }

  /**
   * RecurringTransaction updateManyAndReturn
   */
  export type RecurringTransactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringTransaction
     */
    select?: RecurringTransactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringTransaction
     */
    omit?: RecurringTransactionOmit<ExtArgs> | null
    /**
     * The data used to update RecurringTransactions.
     */
    data: XOR<RecurringTransactionUpdateManyMutationInput, RecurringTransactionUncheckedUpdateManyInput>
    /**
     * Filter which RecurringTransactions to update
     */
    where?: RecurringTransactionWhereInput
    /**
     * Limit how many RecurringTransactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurringTransactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RecurringTransaction upsert
   */
  export type RecurringTransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringTransaction
     */
    select?: RecurringTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringTransaction
     */
    omit?: RecurringTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurringTransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the RecurringTransaction to update in case it exists.
     */
    where: RecurringTransactionWhereUniqueInput
    /**
     * In case the RecurringTransaction found by the `where` argument doesn't exist, create a new RecurringTransaction with this data.
     */
    create: XOR<RecurringTransactionCreateInput, RecurringTransactionUncheckedCreateInput>
    /**
     * In case the RecurringTransaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecurringTransactionUpdateInput, RecurringTransactionUncheckedUpdateInput>
  }

  /**
   * RecurringTransaction delete
   */
  export type RecurringTransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringTransaction
     */
    select?: RecurringTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringTransaction
     */
    omit?: RecurringTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurringTransactionInclude<ExtArgs> | null
    /**
     * Filter which RecurringTransaction to delete.
     */
    where: RecurringTransactionWhereUniqueInput
  }

  /**
   * RecurringTransaction deleteMany
   */
  export type RecurringTransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RecurringTransactions to delete
     */
    where?: RecurringTransactionWhereInput
    /**
     * Limit how many RecurringTransactions to delete.
     */
    limit?: number
  }

  /**
   * RecurringTransaction.payer
   */
  export type RecurringTransaction$payerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayeePayer
     */
    select?: PayeePayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayeePayer
     */
    omit?: PayeePayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayeePayerInclude<ExtArgs> | null
    where?: PayeePayerWhereInput
  }

  /**
   * RecurringTransaction.payee
   */
  export type RecurringTransaction$payeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayeePayer
     */
    select?: PayeePayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayeePayer
     */
    omit?: PayeePayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayeePayerInclude<ExtArgs> | null
    where?: PayeePayerWhereInput
  }

  /**
   * RecurringTransaction.paymentMethod
   */
  export type RecurringTransaction$paymentMethodArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethod
     */
    omit?: PaymentMethodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
    where?: PaymentMethodWhereInput
  }

  /**
   * RecurringTransaction without action
   */
  export type RecurringTransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringTransaction
     */
    select?: RecurringTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringTransaction
     */
    omit?: RecurringTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurringTransactionInclude<ExtArgs> | null
  }


  /**
   * Model Settings
   */

  export type AggregateSettings = {
    _count: SettingsCountAggregateOutputType | null
    _avg: SettingsAvgAggregateOutputType | null
    _sum: SettingsSumAggregateOutputType | null
    _min: SettingsMinAggregateOutputType | null
    _max: SettingsMaxAggregateOutputType | null
  }

  export type SettingsAvgAggregateOutputType = {
    id: number | null
  }

  export type SettingsSumAggregateOutputType = {
    id: number | null
  }

  export type SettingsMinAggregateOutputType = {
    id: number | null
    userId: string | null
    key: string | null
    value: string | null
  }

  export type SettingsMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    key: string | null
    value: string | null
  }

  export type SettingsCountAggregateOutputType = {
    id: number
    userId: number
    key: number
    value: number
    _all: number
  }


  export type SettingsAvgAggregateInputType = {
    id?: true
  }

  export type SettingsSumAggregateInputType = {
    id?: true
  }

  export type SettingsMinAggregateInputType = {
    id?: true
    userId?: true
    key?: true
    value?: true
  }

  export type SettingsMaxAggregateInputType = {
    id?: true
    userId?: true
    key?: true
    value?: true
  }

  export type SettingsCountAggregateInputType = {
    id?: true
    userId?: true
    key?: true
    value?: true
    _all?: true
  }

  export type SettingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Settings to aggregate.
     */
    where?: SettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingsOrderByWithRelationInput | SettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Settings
    **/
    _count?: true | SettingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SettingsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SettingsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SettingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SettingsMaxAggregateInputType
  }

  export type GetSettingsAggregateType<T extends SettingsAggregateArgs> = {
        [P in keyof T & keyof AggregateSettings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSettings[P]>
      : GetScalarType<T[P], AggregateSettings[P]>
  }




  export type SettingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SettingsWhereInput
    orderBy?: SettingsOrderByWithAggregationInput | SettingsOrderByWithAggregationInput[]
    by: SettingsScalarFieldEnum[] | SettingsScalarFieldEnum
    having?: SettingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SettingsCountAggregateInputType | true
    _avg?: SettingsAvgAggregateInputType
    _sum?: SettingsSumAggregateInputType
    _min?: SettingsMinAggregateInputType
    _max?: SettingsMaxAggregateInputType
  }

  export type SettingsGroupByOutputType = {
    id: number
    userId: string
    key: string
    value: string
    _count: SettingsCountAggregateOutputType | null
    _avg: SettingsAvgAggregateOutputType | null
    _sum: SettingsSumAggregateOutputType | null
    _min: SettingsMinAggregateOutputType | null
    _max: SettingsMaxAggregateOutputType | null
  }

  type GetSettingsGroupByPayload<T extends SettingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SettingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SettingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SettingsGroupByOutputType[P]>
            : GetScalarType<T[P], SettingsGroupByOutputType[P]>
        }
      >
    >


  export type SettingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    key?: boolean
    value?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["settings"]>

  export type SettingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    key?: boolean
    value?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["settings"]>

  export type SettingsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    key?: boolean
    value?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["settings"]>

  export type SettingsSelectScalar = {
    id?: boolean
    userId?: boolean
    key?: boolean
    value?: boolean
  }

  export type SettingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "key" | "value", ExtArgs["result"]["settings"]>
  export type SettingsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SettingsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SettingsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SettingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Settings"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      key: string
      value: string
    }, ExtArgs["result"]["settings"]>
    composites: {}
  }

  type SettingsGetPayload<S extends boolean | null | undefined | SettingsDefaultArgs> = $Result.GetResult<Prisma.$SettingsPayload, S>

  type SettingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SettingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SettingsCountAggregateInputType | true
    }

  export interface SettingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Settings'], meta: { name: 'Settings' } }
    /**
     * Find zero or one Settings that matches the filter.
     * @param {SettingsFindUniqueArgs} args - Arguments to find a Settings
     * @example
     * // Get one Settings
     * const settings = await prisma.settings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SettingsFindUniqueArgs>(args: SelectSubset<T, SettingsFindUniqueArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Settings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SettingsFindUniqueOrThrowArgs} args - Arguments to find a Settings
     * @example
     * // Get one Settings
     * const settings = await prisma.settings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SettingsFindUniqueOrThrowArgs>(args: SelectSubset<T, SettingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Settings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsFindFirstArgs} args - Arguments to find a Settings
     * @example
     * // Get one Settings
     * const settings = await prisma.settings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SettingsFindFirstArgs>(args?: SelectSubset<T, SettingsFindFirstArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Settings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsFindFirstOrThrowArgs} args - Arguments to find a Settings
     * @example
     * // Get one Settings
     * const settings = await prisma.settings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SettingsFindFirstOrThrowArgs>(args?: SelectSubset<T, SettingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Settings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Settings
     * const settings = await prisma.settings.findMany()
     * 
     * // Get first 10 Settings
     * const settings = await prisma.settings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const settingsWithIdOnly = await prisma.settings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SettingsFindManyArgs>(args?: SelectSubset<T, SettingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Settings.
     * @param {SettingsCreateArgs} args - Arguments to create a Settings.
     * @example
     * // Create one Settings
     * const Settings = await prisma.settings.create({
     *   data: {
     *     // ... data to create a Settings
     *   }
     * })
     * 
     */
    create<T extends SettingsCreateArgs>(args: SelectSubset<T, SettingsCreateArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Settings.
     * @param {SettingsCreateManyArgs} args - Arguments to create many Settings.
     * @example
     * // Create many Settings
     * const settings = await prisma.settings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SettingsCreateManyArgs>(args?: SelectSubset<T, SettingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Settings and returns the data saved in the database.
     * @param {SettingsCreateManyAndReturnArgs} args - Arguments to create many Settings.
     * @example
     * // Create many Settings
     * const settings = await prisma.settings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Settings and only return the `id`
     * const settingsWithIdOnly = await prisma.settings.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SettingsCreateManyAndReturnArgs>(args?: SelectSubset<T, SettingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Settings.
     * @param {SettingsDeleteArgs} args - Arguments to delete one Settings.
     * @example
     * // Delete one Settings
     * const Settings = await prisma.settings.delete({
     *   where: {
     *     // ... filter to delete one Settings
     *   }
     * })
     * 
     */
    delete<T extends SettingsDeleteArgs>(args: SelectSubset<T, SettingsDeleteArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Settings.
     * @param {SettingsUpdateArgs} args - Arguments to update one Settings.
     * @example
     * // Update one Settings
     * const settings = await prisma.settings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SettingsUpdateArgs>(args: SelectSubset<T, SettingsUpdateArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Settings.
     * @param {SettingsDeleteManyArgs} args - Arguments to filter Settings to delete.
     * @example
     * // Delete a few Settings
     * const { count } = await prisma.settings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SettingsDeleteManyArgs>(args?: SelectSubset<T, SettingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Settings
     * const settings = await prisma.settings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SettingsUpdateManyArgs>(args: SelectSubset<T, SettingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Settings and returns the data updated in the database.
     * @param {SettingsUpdateManyAndReturnArgs} args - Arguments to update many Settings.
     * @example
     * // Update many Settings
     * const settings = await prisma.settings.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Settings and only return the `id`
     * const settingsWithIdOnly = await prisma.settings.updateManyAndReturn({
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
    updateManyAndReturn<T extends SettingsUpdateManyAndReturnArgs>(args: SelectSubset<T, SettingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Settings.
     * @param {SettingsUpsertArgs} args - Arguments to update or create a Settings.
     * @example
     * // Update or create a Settings
     * const settings = await prisma.settings.upsert({
     *   create: {
     *     // ... data to create a Settings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Settings we want to update
     *   }
     * })
     */
    upsert<T extends SettingsUpsertArgs>(args: SelectSubset<T, SettingsUpsertArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsCountArgs} args - Arguments to filter Settings to count.
     * @example
     * // Count the number of Settings
     * const count = await prisma.settings.count({
     *   where: {
     *     // ... the filter for the Settings we want to count
     *   }
     * })
    **/
    count<T extends SettingsCountArgs>(
      args?: Subset<T, SettingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SettingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SettingsAggregateArgs>(args: Subset<T, SettingsAggregateArgs>): Prisma.PrismaPromise<GetSettingsAggregateType<T>>

    /**
     * Group by Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsGroupByArgs} args - Group by arguments.
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
      T extends SettingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SettingsGroupByArgs['orderBy'] }
        : { orderBy?: SettingsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SettingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSettingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Settings model
   */
  readonly fields: SettingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Settings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SettingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Settings model
   */
  interface SettingsFieldRefs {
    readonly id: FieldRef<"Settings", 'Int'>
    readonly userId: FieldRef<"Settings", 'String'>
    readonly key: FieldRef<"Settings", 'String'>
    readonly value: FieldRef<"Settings", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Settings findUnique
   */
  export type SettingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingsInclude<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where: SettingsWhereUniqueInput
  }

  /**
   * Settings findUniqueOrThrow
   */
  export type SettingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingsInclude<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where: SettingsWhereUniqueInput
  }

  /**
   * Settings findFirst
   */
  export type SettingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingsInclude<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where?: SettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingsOrderByWithRelationInput | SettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Settings.
     */
    cursor?: SettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Settings.
     */
    distinct?: SettingsScalarFieldEnum | SettingsScalarFieldEnum[]
  }

  /**
   * Settings findFirstOrThrow
   */
  export type SettingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingsInclude<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where?: SettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingsOrderByWithRelationInput | SettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Settings.
     */
    cursor?: SettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Settings.
     */
    distinct?: SettingsScalarFieldEnum | SettingsScalarFieldEnum[]
  }

  /**
   * Settings findMany
   */
  export type SettingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingsInclude<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where?: SettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingsOrderByWithRelationInput | SettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Settings.
     */
    cursor?: SettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    distinct?: SettingsScalarFieldEnum | SettingsScalarFieldEnum[]
  }

  /**
   * Settings create
   */
  export type SettingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingsInclude<ExtArgs> | null
    /**
     * The data needed to create a Settings.
     */
    data: XOR<SettingsCreateInput, SettingsUncheckedCreateInput>
  }

  /**
   * Settings createMany
   */
  export type SettingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Settings.
     */
    data: SettingsCreateManyInput | SettingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Settings createManyAndReturn
   */
  export type SettingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * The data used to create many Settings.
     */
    data: SettingsCreateManyInput | SettingsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Settings update
   */
  export type SettingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingsInclude<ExtArgs> | null
    /**
     * The data needed to update a Settings.
     */
    data: XOR<SettingsUpdateInput, SettingsUncheckedUpdateInput>
    /**
     * Choose, which Settings to update.
     */
    where: SettingsWhereUniqueInput
  }

  /**
   * Settings updateMany
   */
  export type SettingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Settings.
     */
    data: XOR<SettingsUpdateManyMutationInput, SettingsUncheckedUpdateManyInput>
    /**
     * Filter which Settings to update
     */
    where?: SettingsWhereInput
    /**
     * Limit how many Settings to update.
     */
    limit?: number
  }

  /**
   * Settings updateManyAndReturn
   */
  export type SettingsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * The data used to update Settings.
     */
    data: XOR<SettingsUpdateManyMutationInput, SettingsUncheckedUpdateManyInput>
    /**
     * Filter which Settings to update
     */
    where?: SettingsWhereInput
    /**
     * Limit how many Settings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Settings upsert
   */
  export type SettingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingsInclude<ExtArgs> | null
    /**
     * The filter to search for the Settings to update in case it exists.
     */
    where: SettingsWhereUniqueInput
    /**
     * In case the Settings found by the `where` argument doesn't exist, create a new Settings with this data.
     */
    create: XOR<SettingsCreateInput, SettingsUncheckedCreateInput>
    /**
     * In case the Settings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SettingsUpdateInput, SettingsUncheckedUpdateInput>
  }

  /**
   * Settings delete
   */
  export type SettingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingsInclude<ExtArgs> | null
    /**
     * Filter which Settings to delete.
     */
    where: SettingsWhereUniqueInput
  }

  /**
   * Settings deleteMany
   */
  export type SettingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Settings to delete
     */
    where?: SettingsWhereInput
    /**
     * Limit how many Settings to delete.
     */
    limit?: number
  }

  /**
   * Settings without action
   */
  export type SettingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingsInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    password: 'password',
    role: 'role',
    image: 'image',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    expires_at: 'expires_at',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    sessionToken: 'sessionToken',
    userId: 'userId',
    expires: 'expires',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const VerificationTokenScalarFieldEnum: {
    identifier: 'identifier',
    token: 'token',
    expires: 'expires'
  };

  export type VerificationTokenScalarFieldEnum = (typeof VerificationTokenScalarFieldEnum)[keyof typeof VerificationTokenScalarFieldEnum]


  export const FinanceAccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    openingBalance: 'openingBalance',
    note: 'note',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FinanceAccountScalarFieldEnum = (typeof FinanceAccountScalarFieldEnum)[keyof typeof FinanceAccountScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    type: 'type'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const PayeePayerScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    type: 'type'
  };

  export type PayeePayerScalarFieldEnum = (typeof PayeePayerScalarFieldEnum)[keyof typeof PayeePayerScalarFieldEnum]


  export const PaymentMethodScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name'
  };

  export type PaymentMethodScalarFieldEnum = (typeof PaymentMethodScalarFieldEnum)[keyof typeof PaymentMethodScalarFieldEnum]


  export const TransactionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    accountId: 'accountId',
    date: 'date',
    type: 'type',
    categoryId: 'categoryId',
    amount: 'amount',
    payerId: 'payerId',
    payeeId: 'payeeId',
    paymentMethodId: 'paymentMethodId',
    reference: 'reference',
    note: 'note',
    debit: 'debit',
    credit: 'credit',
    balance: 'balance',
    linkedTransactionId: 'linkedTransactionId',
    transferToAccountId: 'transferToAccountId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TransactionScalarFieldEnum = (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum]


  export const RecurringTransactionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    accountId: 'accountId',
    type: 'type',
    categoryId: 'categoryId',
    amount: 'amount',
    payerId: 'payerId',
    payeeId: 'payeeId',
    paymentMethodId: 'paymentMethodId',
    reference: 'reference',
    status: 'status',
    description: 'description',
    startDate: 'startDate',
    nextDate: 'nextDate',
    frequency: 'frequency',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RecurringTransactionScalarFieldEnum = (typeof RecurringTransactionScalarFieldEnum)[keyof typeof RecurringTransactionScalarFieldEnum]


  export const SettingsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    key: 'key',
    value: 'value'
  };

  export type SettingsScalarFieldEnum = (typeof SettingsScalarFieldEnum)[keyof typeof SettingsScalarFieldEnum]


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
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


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
   * Reference to a field of type 'CategoryType'
   */
  export type EnumCategoryTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CategoryType'>
    


  /**
   * Reference to a field of type 'CategoryType[]'
   */
  export type ListEnumCategoryTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CategoryType[]'>
    


  /**
   * Reference to a field of type 'PayeePayerType'
   */
  export type EnumPayeePayerTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PayeePayerType'>
    


  /**
   * Reference to a field of type 'PayeePayerType[]'
   */
  export type ListEnumPayeePayerTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PayeePayerType[]'>
    


  /**
   * Reference to a field of type 'TransactionType'
   */
  export type EnumTransactionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionType'>
    


  /**
   * Reference to a field of type 'TransactionType[]'
   */
  export type ListEnumTransactionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionType[]'>
    


  /**
   * Reference to a field of type 'RecurringStatus'
   */
  export type EnumRecurringStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RecurringStatus'>
    


  /**
   * Reference to a field of type 'RecurringStatus[]'
   */
  export type ListEnumRecurringStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RecurringStatus[]'>
    


  /**
   * Reference to a field of type 'RecurringFrequency'
   */
  export type EnumRecurringFrequencyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RecurringFrequency'>
    


  /**
   * Reference to a field of type 'RecurringFrequency[]'
   */
  export type ListEnumRecurringFrequencyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RecurringFrequency[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    password?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    financeAccounts?: FinanceAccountListRelationFilter
    categories?: CategoryListRelationFilter
    payeesPayers?: PayeePayerListRelationFilter
    paymentMethods?: PaymentMethodListRelationFilter
    transactions?: TransactionListRelationFilter
    recurringTransactions?: RecurringTransactionListRelationFilter
    settings?: SettingsListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    emailVerified?: SortOrderInput | SortOrder
    password?: SortOrder
    role?: SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accounts?: AccountOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
    financeAccounts?: FinanceAccountOrderByRelationAggregateInput
    categories?: CategoryOrderByRelationAggregateInput
    payeesPayers?: PayeePayerOrderByRelationAggregateInput
    paymentMethods?: PaymentMethodOrderByRelationAggregateInput
    transactions?: TransactionOrderByRelationAggregateInput
    recurringTransactions?: RecurringTransactionOrderByRelationAggregateInput
    settings?: SettingsOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    password?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    financeAccounts?: FinanceAccountListRelationFilter
    categories?: CategoryListRelationFilter
    payeesPayers?: PayeePayerListRelationFilter
    paymentMethods?: PaymentMethodListRelationFilter
    transactions?: TransactionListRelationFilter
    recurringTransactions?: RecurringTransactionListRelationFilter
    settings?: SettingsListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    emailVerified?: SortOrderInput | SortOrder
    password?: SortOrder
    role?: SortOrder
    image?: SortOrderInput | SortOrder
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
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    emailVerified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "provider_providerAccountId">

  export type AccountOrderByWithAggregationInput = {
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"Account"> | string
    type?: StringWithAggregatesFilter<"Account"> | string
    provider?: StringWithAggregatesFilter<"Account"> | string
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string
    refresh_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    access_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    expires_at?: IntNullableWithAggregatesFilter<"Account"> | number | null
    token_type?: StringNullableWithAggregatesFilter<"Account"> | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    id_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    session_state?: StringNullableWithAggregatesFilter<"Account"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    sessionToken?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "sessionToken">

  export type SessionOrderByWithAggregationInput = {
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    sessionToken?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    expires?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type VerificationTokenWhereInput = {
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }

  export type VerificationTokenOrderByWithRelationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenWhereUniqueInput = Prisma.AtLeast<{
    identifier_token?: VerificationTokenIdentifierTokenCompoundUniqueInput
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }, "identifier_token">

  export type VerificationTokenOrderByWithAggregationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _count?: VerificationTokenCountOrderByAggregateInput
    _max?: VerificationTokenMaxOrderByAggregateInput
    _min?: VerificationTokenMinOrderByAggregateInput
  }

  export type VerificationTokenScalarWhereWithAggregatesInput = {
    AND?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    OR?: VerificationTokenScalarWhereWithAggregatesInput[]
    NOT?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    identifier?: StringWithAggregatesFilter<"VerificationToken"> | string
    token?: StringWithAggregatesFilter<"VerificationToken"> | string
    expires?: DateTimeWithAggregatesFilter<"VerificationToken"> | Date | string
  }

  export type FinanceAccountWhereInput = {
    AND?: FinanceAccountWhereInput | FinanceAccountWhereInput[]
    OR?: FinanceAccountWhereInput[]
    NOT?: FinanceAccountWhereInput | FinanceAccountWhereInput[]
    id?: IntFilter<"FinanceAccount"> | number
    userId?: StringFilter<"FinanceAccount"> | string
    name?: StringFilter<"FinanceAccount"> | string
    openingBalance?: FloatFilter<"FinanceAccount"> | number
    note?: StringNullableFilter<"FinanceAccount"> | string | null
    createdAt?: DateTimeFilter<"FinanceAccount"> | Date | string
    updatedAt?: DateTimeFilter<"FinanceAccount"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    transactions?: TransactionListRelationFilter
    recurringTransactions?: RecurringTransactionListRelationFilter
    transfersTo?: TransactionListRelationFilter
  }

  export type FinanceAccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    openingBalance?: SortOrder
    note?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    transactions?: TransactionOrderByRelationAggregateInput
    recurringTransactions?: RecurringTransactionOrderByRelationAggregateInput
    transfersTo?: TransactionOrderByRelationAggregateInput
  }

  export type FinanceAccountWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FinanceAccountWhereInput | FinanceAccountWhereInput[]
    OR?: FinanceAccountWhereInput[]
    NOT?: FinanceAccountWhereInput | FinanceAccountWhereInput[]
    userId?: StringFilter<"FinanceAccount"> | string
    name?: StringFilter<"FinanceAccount"> | string
    openingBalance?: FloatFilter<"FinanceAccount"> | number
    note?: StringNullableFilter<"FinanceAccount"> | string | null
    createdAt?: DateTimeFilter<"FinanceAccount"> | Date | string
    updatedAt?: DateTimeFilter<"FinanceAccount"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    transactions?: TransactionListRelationFilter
    recurringTransactions?: RecurringTransactionListRelationFilter
    transfersTo?: TransactionListRelationFilter
  }, "id">

  export type FinanceAccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    openingBalance?: SortOrder
    note?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FinanceAccountCountOrderByAggregateInput
    _avg?: FinanceAccountAvgOrderByAggregateInput
    _max?: FinanceAccountMaxOrderByAggregateInput
    _min?: FinanceAccountMinOrderByAggregateInput
    _sum?: FinanceAccountSumOrderByAggregateInput
  }

  export type FinanceAccountScalarWhereWithAggregatesInput = {
    AND?: FinanceAccountScalarWhereWithAggregatesInput | FinanceAccountScalarWhereWithAggregatesInput[]
    OR?: FinanceAccountScalarWhereWithAggregatesInput[]
    NOT?: FinanceAccountScalarWhereWithAggregatesInput | FinanceAccountScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FinanceAccount"> | number
    userId?: StringWithAggregatesFilter<"FinanceAccount"> | string
    name?: StringWithAggregatesFilter<"FinanceAccount"> | string
    openingBalance?: FloatWithAggregatesFilter<"FinanceAccount"> | number
    note?: StringNullableWithAggregatesFilter<"FinanceAccount"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"FinanceAccount"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FinanceAccount"> | Date | string
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: IntFilter<"Category"> | number
    userId?: StringFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    type?: EnumCategoryTypeFilter<"Category"> | $Enums.CategoryType
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    transactions?: TransactionListRelationFilter
    recurringTransactions?: RecurringTransactionListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    user?: UserOrderByWithRelationInput
    transactions?: TransactionOrderByRelationAggregateInput
    recurringTransactions?: RecurringTransactionOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_name_type?: CategoryUserIdNameTypeCompoundUniqueInput
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    userId?: StringFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    type?: EnumCategoryTypeFilter<"Category"> | $Enums.CategoryType
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    transactions?: TransactionListRelationFilter
    recurringTransactions?: RecurringTransactionListRelationFilter
  }, "id" | "userId_name_type">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    type?: SortOrder
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
    userId?: StringWithAggregatesFilter<"Category"> | string
    name?: StringWithAggregatesFilter<"Category"> | string
    type?: EnumCategoryTypeWithAggregatesFilter<"Category"> | $Enums.CategoryType
  }

  export type PayeePayerWhereInput = {
    AND?: PayeePayerWhereInput | PayeePayerWhereInput[]
    OR?: PayeePayerWhereInput[]
    NOT?: PayeePayerWhereInput | PayeePayerWhereInput[]
    id?: IntFilter<"PayeePayer"> | number
    userId?: StringFilter<"PayeePayer"> | string
    name?: StringFilter<"PayeePayer"> | string
    type?: EnumPayeePayerTypeFilter<"PayeePayer"> | $Enums.PayeePayerType
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    payerTransactions?: TransactionListRelationFilter
    payeeTransactions?: TransactionListRelationFilter
    recurringAsPayer?: RecurringTransactionListRelationFilter
    recurringAsPayee?: RecurringTransactionListRelationFilter
  }

  export type PayeePayerOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    user?: UserOrderByWithRelationInput
    payerTransactions?: TransactionOrderByRelationAggregateInput
    payeeTransactions?: TransactionOrderByRelationAggregateInput
    recurringAsPayer?: RecurringTransactionOrderByRelationAggregateInput
    recurringAsPayee?: RecurringTransactionOrderByRelationAggregateInput
  }

  export type PayeePayerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_name_type?: PayeePayerUserIdNameTypeCompoundUniqueInput
    AND?: PayeePayerWhereInput | PayeePayerWhereInput[]
    OR?: PayeePayerWhereInput[]
    NOT?: PayeePayerWhereInput | PayeePayerWhereInput[]
    userId?: StringFilter<"PayeePayer"> | string
    name?: StringFilter<"PayeePayer"> | string
    type?: EnumPayeePayerTypeFilter<"PayeePayer"> | $Enums.PayeePayerType
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    payerTransactions?: TransactionListRelationFilter
    payeeTransactions?: TransactionListRelationFilter
    recurringAsPayer?: RecurringTransactionListRelationFilter
    recurringAsPayee?: RecurringTransactionListRelationFilter
  }, "id" | "userId_name_type">

  export type PayeePayerOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    _count?: PayeePayerCountOrderByAggregateInput
    _avg?: PayeePayerAvgOrderByAggregateInput
    _max?: PayeePayerMaxOrderByAggregateInput
    _min?: PayeePayerMinOrderByAggregateInput
    _sum?: PayeePayerSumOrderByAggregateInput
  }

  export type PayeePayerScalarWhereWithAggregatesInput = {
    AND?: PayeePayerScalarWhereWithAggregatesInput | PayeePayerScalarWhereWithAggregatesInput[]
    OR?: PayeePayerScalarWhereWithAggregatesInput[]
    NOT?: PayeePayerScalarWhereWithAggregatesInput | PayeePayerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PayeePayer"> | number
    userId?: StringWithAggregatesFilter<"PayeePayer"> | string
    name?: StringWithAggregatesFilter<"PayeePayer"> | string
    type?: EnumPayeePayerTypeWithAggregatesFilter<"PayeePayer"> | $Enums.PayeePayerType
  }

  export type PaymentMethodWhereInput = {
    AND?: PaymentMethodWhereInput | PaymentMethodWhereInput[]
    OR?: PaymentMethodWhereInput[]
    NOT?: PaymentMethodWhereInput | PaymentMethodWhereInput[]
    id?: IntFilter<"PaymentMethod"> | number
    userId?: StringFilter<"PaymentMethod"> | string
    name?: StringFilter<"PaymentMethod"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    transactions?: TransactionListRelationFilter
    recurringTransactions?: RecurringTransactionListRelationFilter
  }

  export type PaymentMethodOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    user?: UserOrderByWithRelationInput
    transactions?: TransactionOrderByRelationAggregateInput
    recurringTransactions?: RecurringTransactionOrderByRelationAggregateInput
  }

  export type PaymentMethodWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_name?: PaymentMethodUserIdNameCompoundUniqueInput
    AND?: PaymentMethodWhereInput | PaymentMethodWhereInput[]
    OR?: PaymentMethodWhereInput[]
    NOT?: PaymentMethodWhereInput | PaymentMethodWhereInput[]
    userId?: StringFilter<"PaymentMethod"> | string
    name?: StringFilter<"PaymentMethod"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    transactions?: TransactionListRelationFilter
    recurringTransactions?: RecurringTransactionListRelationFilter
  }, "id" | "userId_name">

  export type PaymentMethodOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    _count?: PaymentMethodCountOrderByAggregateInput
    _avg?: PaymentMethodAvgOrderByAggregateInput
    _max?: PaymentMethodMaxOrderByAggregateInput
    _min?: PaymentMethodMinOrderByAggregateInput
    _sum?: PaymentMethodSumOrderByAggregateInput
  }

  export type PaymentMethodScalarWhereWithAggregatesInput = {
    AND?: PaymentMethodScalarWhereWithAggregatesInput | PaymentMethodScalarWhereWithAggregatesInput[]
    OR?: PaymentMethodScalarWhereWithAggregatesInput[]
    NOT?: PaymentMethodScalarWhereWithAggregatesInput | PaymentMethodScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PaymentMethod"> | number
    userId?: StringWithAggregatesFilter<"PaymentMethod"> | string
    name?: StringWithAggregatesFilter<"PaymentMethod"> | string
  }

  export type TransactionWhereInput = {
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    id?: IntFilter<"Transaction"> | number
    userId?: StringFilter<"Transaction"> | string
    accountId?: IntFilter<"Transaction"> | number
    date?: DateTimeFilter<"Transaction"> | Date | string
    type?: EnumTransactionTypeFilter<"Transaction"> | $Enums.TransactionType
    categoryId?: IntNullableFilter<"Transaction"> | number | null
    amount?: FloatFilter<"Transaction"> | number
    payerId?: IntNullableFilter<"Transaction"> | number | null
    payeeId?: IntNullableFilter<"Transaction"> | number | null
    paymentMethodId?: IntNullableFilter<"Transaction"> | number | null
    reference?: StringNullableFilter<"Transaction"> | string | null
    note?: StringNullableFilter<"Transaction"> | string | null
    debit?: FloatFilter<"Transaction"> | number
    credit?: FloatFilter<"Transaction"> | number
    balance?: FloatFilter<"Transaction"> | number
    linkedTransactionId?: IntNullableFilter<"Transaction"> | number | null
    transferToAccountId?: IntNullableFilter<"Transaction"> | number | null
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeFilter<"Transaction"> | Date | string
    linkedTransaction?: XOR<TransactionNullableScalarRelationFilter, TransactionWhereInput> | null
    linkedBy?: XOR<TransactionNullableScalarRelationFilter, TransactionWhereInput> | null
    transferToAccount?: XOR<FinanceAccountNullableScalarRelationFilter, FinanceAccountWhereInput> | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    account?: XOR<FinanceAccountScalarRelationFilter, FinanceAccountWhereInput>
    category?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
    payer?: XOR<PayeePayerNullableScalarRelationFilter, PayeePayerWhereInput> | null
    payee?: XOR<PayeePayerNullableScalarRelationFilter, PayeePayerWhereInput> | null
    paymentMethod?: XOR<PaymentMethodNullableScalarRelationFilter, PaymentMethodWhereInput> | null
  }

  export type TransactionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    accountId?: SortOrder
    date?: SortOrder
    type?: SortOrder
    categoryId?: SortOrderInput | SortOrder
    amount?: SortOrder
    payerId?: SortOrderInput | SortOrder
    payeeId?: SortOrderInput | SortOrder
    paymentMethodId?: SortOrderInput | SortOrder
    reference?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    debit?: SortOrder
    credit?: SortOrder
    balance?: SortOrder
    linkedTransactionId?: SortOrderInput | SortOrder
    transferToAccountId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    linkedTransaction?: TransactionOrderByWithRelationInput
    linkedBy?: TransactionOrderByWithRelationInput
    transferToAccount?: FinanceAccountOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    account?: FinanceAccountOrderByWithRelationInput
    category?: CategoryOrderByWithRelationInput
    payer?: PayeePayerOrderByWithRelationInput
    payee?: PayeePayerOrderByWithRelationInput
    paymentMethod?: PaymentMethodOrderByWithRelationInput
  }

  export type TransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    linkedTransactionId?: number
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    userId?: StringFilter<"Transaction"> | string
    accountId?: IntFilter<"Transaction"> | number
    date?: DateTimeFilter<"Transaction"> | Date | string
    type?: EnumTransactionTypeFilter<"Transaction"> | $Enums.TransactionType
    categoryId?: IntNullableFilter<"Transaction"> | number | null
    amount?: FloatFilter<"Transaction"> | number
    payerId?: IntNullableFilter<"Transaction"> | number | null
    payeeId?: IntNullableFilter<"Transaction"> | number | null
    paymentMethodId?: IntNullableFilter<"Transaction"> | number | null
    reference?: StringNullableFilter<"Transaction"> | string | null
    note?: StringNullableFilter<"Transaction"> | string | null
    debit?: FloatFilter<"Transaction"> | number
    credit?: FloatFilter<"Transaction"> | number
    balance?: FloatFilter<"Transaction"> | number
    transferToAccountId?: IntNullableFilter<"Transaction"> | number | null
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeFilter<"Transaction"> | Date | string
    linkedTransaction?: XOR<TransactionNullableScalarRelationFilter, TransactionWhereInput> | null
    linkedBy?: XOR<TransactionNullableScalarRelationFilter, TransactionWhereInput> | null
    transferToAccount?: XOR<FinanceAccountNullableScalarRelationFilter, FinanceAccountWhereInput> | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    account?: XOR<FinanceAccountScalarRelationFilter, FinanceAccountWhereInput>
    category?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
    payer?: XOR<PayeePayerNullableScalarRelationFilter, PayeePayerWhereInput> | null
    payee?: XOR<PayeePayerNullableScalarRelationFilter, PayeePayerWhereInput> | null
    paymentMethod?: XOR<PaymentMethodNullableScalarRelationFilter, PaymentMethodWhereInput> | null
  }, "id" | "linkedTransactionId">

  export type TransactionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    accountId?: SortOrder
    date?: SortOrder
    type?: SortOrder
    categoryId?: SortOrderInput | SortOrder
    amount?: SortOrder
    payerId?: SortOrderInput | SortOrder
    payeeId?: SortOrderInput | SortOrder
    paymentMethodId?: SortOrderInput | SortOrder
    reference?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    debit?: SortOrder
    credit?: SortOrder
    balance?: SortOrder
    linkedTransactionId?: SortOrderInput | SortOrder
    transferToAccountId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TransactionCountOrderByAggregateInput
    _avg?: TransactionAvgOrderByAggregateInput
    _max?: TransactionMaxOrderByAggregateInput
    _min?: TransactionMinOrderByAggregateInput
    _sum?: TransactionSumOrderByAggregateInput
  }

  export type TransactionScalarWhereWithAggregatesInput = {
    AND?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    OR?: TransactionScalarWhereWithAggregatesInput[]
    NOT?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Transaction"> | number
    userId?: StringWithAggregatesFilter<"Transaction"> | string
    accountId?: IntWithAggregatesFilter<"Transaction"> | number
    date?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
    type?: EnumTransactionTypeWithAggregatesFilter<"Transaction"> | $Enums.TransactionType
    categoryId?: IntNullableWithAggregatesFilter<"Transaction"> | number | null
    amount?: FloatWithAggregatesFilter<"Transaction"> | number
    payerId?: IntNullableWithAggregatesFilter<"Transaction"> | number | null
    payeeId?: IntNullableWithAggregatesFilter<"Transaction"> | number | null
    paymentMethodId?: IntNullableWithAggregatesFilter<"Transaction"> | number | null
    reference?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    note?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    debit?: FloatWithAggregatesFilter<"Transaction"> | number
    credit?: FloatWithAggregatesFilter<"Transaction"> | number
    balance?: FloatWithAggregatesFilter<"Transaction"> | number
    linkedTransactionId?: IntNullableWithAggregatesFilter<"Transaction"> | number | null
    transferToAccountId?: IntNullableWithAggregatesFilter<"Transaction"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
  }

  export type RecurringTransactionWhereInput = {
    AND?: RecurringTransactionWhereInput | RecurringTransactionWhereInput[]
    OR?: RecurringTransactionWhereInput[]
    NOT?: RecurringTransactionWhereInput | RecurringTransactionWhereInput[]
    id?: IntFilter<"RecurringTransaction"> | number
    userId?: StringFilter<"RecurringTransaction"> | string
    accountId?: IntFilter<"RecurringTransaction"> | number
    type?: EnumTransactionTypeFilter<"RecurringTransaction"> | $Enums.TransactionType
    categoryId?: IntFilter<"RecurringTransaction"> | number
    amount?: FloatFilter<"RecurringTransaction"> | number
    payerId?: IntNullableFilter<"RecurringTransaction"> | number | null
    payeeId?: IntNullableFilter<"RecurringTransaction"> | number | null
    paymentMethodId?: IntNullableFilter<"RecurringTransaction"> | number | null
    reference?: StringNullableFilter<"RecurringTransaction"> | string | null
    status?: EnumRecurringStatusFilter<"RecurringTransaction"> | $Enums.RecurringStatus
    description?: StringNullableFilter<"RecurringTransaction"> | string | null
    startDate?: DateTimeFilter<"RecurringTransaction"> | Date | string
    nextDate?: DateTimeNullableFilter<"RecurringTransaction"> | Date | string | null
    frequency?: EnumRecurringFrequencyFilter<"RecurringTransaction"> | $Enums.RecurringFrequency
    createdAt?: DateTimeFilter<"RecurringTransaction"> | Date | string
    updatedAt?: DateTimeFilter<"RecurringTransaction"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    account?: XOR<FinanceAccountScalarRelationFilter, FinanceAccountWhereInput>
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    payer?: XOR<PayeePayerNullableScalarRelationFilter, PayeePayerWhereInput> | null
    payee?: XOR<PayeePayerNullableScalarRelationFilter, PayeePayerWhereInput> | null
    paymentMethod?: XOR<PaymentMethodNullableScalarRelationFilter, PaymentMethodWhereInput> | null
  }

  export type RecurringTransactionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    accountId?: SortOrder
    type?: SortOrder
    categoryId?: SortOrder
    amount?: SortOrder
    payerId?: SortOrderInput | SortOrder
    payeeId?: SortOrderInput | SortOrder
    paymentMethodId?: SortOrderInput | SortOrder
    reference?: SortOrderInput | SortOrder
    status?: SortOrder
    description?: SortOrderInput | SortOrder
    startDate?: SortOrder
    nextDate?: SortOrderInput | SortOrder
    frequency?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    account?: FinanceAccountOrderByWithRelationInput
    category?: CategoryOrderByWithRelationInput
    payer?: PayeePayerOrderByWithRelationInput
    payee?: PayeePayerOrderByWithRelationInput
    paymentMethod?: PaymentMethodOrderByWithRelationInput
  }

  export type RecurringTransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RecurringTransactionWhereInput | RecurringTransactionWhereInput[]
    OR?: RecurringTransactionWhereInput[]
    NOT?: RecurringTransactionWhereInput | RecurringTransactionWhereInput[]
    userId?: StringFilter<"RecurringTransaction"> | string
    accountId?: IntFilter<"RecurringTransaction"> | number
    type?: EnumTransactionTypeFilter<"RecurringTransaction"> | $Enums.TransactionType
    categoryId?: IntFilter<"RecurringTransaction"> | number
    amount?: FloatFilter<"RecurringTransaction"> | number
    payerId?: IntNullableFilter<"RecurringTransaction"> | number | null
    payeeId?: IntNullableFilter<"RecurringTransaction"> | number | null
    paymentMethodId?: IntNullableFilter<"RecurringTransaction"> | number | null
    reference?: StringNullableFilter<"RecurringTransaction"> | string | null
    status?: EnumRecurringStatusFilter<"RecurringTransaction"> | $Enums.RecurringStatus
    description?: StringNullableFilter<"RecurringTransaction"> | string | null
    startDate?: DateTimeFilter<"RecurringTransaction"> | Date | string
    nextDate?: DateTimeNullableFilter<"RecurringTransaction"> | Date | string | null
    frequency?: EnumRecurringFrequencyFilter<"RecurringTransaction"> | $Enums.RecurringFrequency
    createdAt?: DateTimeFilter<"RecurringTransaction"> | Date | string
    updatedAt?: DateTimeFilter<"RecurringTransaction"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    account?: XOR<FinanceAccountScalarRelationFilter, FinanceAccountWhereInput>
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    payer?: XOR<PayeePayerNullableScalarRelationFilter, PayeePayerWhereInput> | null
    payee?: XOR<PayeePayerNullableScalarRelationFilter, PayeePayerWhereInput> | null
    paymentMethod?: XOR<PaymentMethodNullableScalarRelationFilter, PaymentMethodWhereInput> | null
  }, "id">

  export type RecurringTransactionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    accountId?: SortOrder
    type?: SortOrder
    categoryId?: SortOrder
    amount?: SortOrder
    payerId?: SortOrderInput | SortOrder
    payeeId?: SortOrderInput | SortOrder
    paymentMethodId?: SortOrderInput | SortOrder
    reference?: SortOrderInput | SortOrder
    status?: SortOrder
    description?: SortOrderInput | SortOrder
    startDate?: SortOrder
    nextDate?: SortOrderInput | SortOrder
    frequency?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RecurringTransactionCountOrderByAggregateInput
    _avg?: RecurringTransactionAvgOrderByAggregateInput
    _max?: RecurringTransactionMaxOrderByAggregateInput
    _min?: RecurringTransactionMinOrderByAggregateInput
    _sum?: RecurringTransactionSumOrderByAggregateInput
  }

  export type RecurringTransactionScalarWhereWithAggregatesInput = {
    AND?: RecurringTransactionScalarWhereWithAggregatesInput | RecurringTransactionScalarWhereWithAggregatesInput[]
    OR?: RecurringTransactionScalarWhereWithAggregatesInput[]
    NOT?: RecurringTransactionScalarWhereWithAggregatesInput | RecurringTransactionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RecurringTransaction"> | number
    userId?: StringWithAggregatesFilter<"RecurringTransaction"> | string
    accountId?: IntWithAggregatesFilter<"RecurringTransaction"> | number
    type?: EnumTransactionTypeWithAggregatesFilter<"RecurringTransaction"> | $Enums.TransactionType
    categoryId?: IntWithAggregatesFilter<"RecurringTransaction"> | number
    amount?: FloatWithAggregatesFilter<"RecurringTransaction"> | number
    payerId?: IntNullableWithAggregatesFilter<"RecurringTransaction"> | number | null
    payeeId?: IntNullableWithAggregatesFilter<"RecurringTransaction"> | number | null
    paymentMethodId?: IntNullableWithAggregatesFilter<"RecurringTransaction"> | number | null
    reference?: StringNullableWithAggregatesFilter<"RecurringTransaction"> | string | null
    status?: EnumRecurringStatusWithAggregatesFilter<"RecurringTransaction"> | $Enums.RecurringStatus
    description?: StringNullableWithAggregatesFilter<"RecurringTransaction"> | string | null
    startDate?: DateTimeWithAggregatesFilter<"RecurringTransaction"> | Date | string
    nextDate?: DateTimeNullableWithAggregatesFilter<"RecurringTransaction"> | Date | string | null
    frequency?: EnumRecurringFrequencyWithAggregatesFilter<"RecurringTransaction"> | $Enums.RecurringFrequency
    createdAt?: DateTimeWithAggregatesFilter<"RecurringTransaction"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RecurringTransaction"> | Date | string
  }

  export type SettingsWhereInput = {
    AND?: SettingsWhereInput | SettingsWhereInput[]
    OR?: SettingsWhereInput[]
    NOT?: SettingsWhereInput | SettingsWhereInput[]
    id?: IntFilter<"Settings"> | number
    userId?: StringFilter<"Settings"> | string
    key?: StringFilter<"Settings"> | string
    value?: StringFilter<"Settings"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SettingsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    key?: SortOrder
    value?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SettingsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_key?: SettingsUserIdKeyCompoundUniqueInput
    AND?: SettingsWhereInput | SettingsWhereInput[]
    OR?: SettingsWhereInput[]
    NOT?: SettingsWhereInput | SettingsWhereInput[]
    userId?: StringFilter<"Settings"> | string
    key?: StringFilter<"Settings"> | string
    value?: StringFilter<"Settings"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId_key">

  export type SettingsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    key?: SortOrder
    value?: SortOrder
    _count?: SettingsCountOrderByAggregateInput
    _avg?: SettingsAvgOrderByAggregateInput
    _max?: SettingsMaxOrderByAggregateInput
    _min?: SettingsMinOrderByAggregateInput
    _sum?: SettingsSumOrderByAggregateInput
  }

  export type SettingsScalarWhereWithAggregatesInput = {
    AND?: SettingsScalarWhereWithAggregatesInput | SettingsScalarWhereWithAggregatesInput[]
    OR?: SettingsScalarWhereWithAggregatesInput[]
    NOT?: SettingsScalarWhereWithAggregatesInput | SettingsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Settings"> | number
    userId?: StringWithAggregatesFilter<"Settings"> | string
    key?: StringWithAggregatesFilter<"Settings"> | string
    value?: StringWithAggregatesFilter<"Settings"> | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    password: string
    role?: $Enums.UserRole
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    financeAccounts?: FinanceAccountCreateNestedManyWithoutUserInput
    categories?: CategoryCreateNestedManyWithoutUserInput
    payeesPayers?: PayeePayerCreateNestedManyWithoutUserInput
    paymentMethods?: PaymentMethodCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    recurringTransactions?: RecurringTransactionCreateNestedManyWithoutUserInput
    settings?: SettingsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    password: string
    role?: $Enums.UserRole
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    financeAccounts?: FinanceAccountUncheckedCreateNestedManyWithoutUserInput
    categories?: CategoryUncheckedCreateNestedManyWithoutUserInput
    payeesPayers?: PayeePayerUncheckedCreateNestedManyWithoutUserInput
    paymentMethods?: PaymentMethodUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    recurringTransactions?: RecurringTransactionUncheckedCreateNestedManyWithoutUserInput
    settings?: SettingsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    financeAccounts?: FinanceAccountUpdateManyWithoutUserNestedInput
    categories?: CategoryUpdateManyWithoutUserNestedInput
    payeesPayers?: PayeePayerUpdateManyWithoutUserNestedInput
    paymentMethods?: PaymentMethodUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    recurringTransactions?: RecurringTransactionUpdateManyWithoutUserNestedInput
    settings?: SettingsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    financeAccounts?: FinanceAccountUncheckedUpdateManyWithoutUserNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutUserNestedInput
    payeesPayers?: PayeePayerUncheckedUpdateManyWithoutUserNestedInput
    paymentMethods?: PaymentMethodUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    recurringTransactions?: RecurringTransactionUncheckedUpdateManyWithoutUserNestedInput
    settings?: SettingsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    password: string
    role?: $Enums.UserRole
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateInput = {
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateManyInput = {
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateInput = {
    sessionToken: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    sessionToken: string
    userId: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUpdateInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    sessionToken: string
    userId: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUncheckedCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateManyInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateManyMutationInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateManyInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FinanceAccountCreateInput = {
    name: string
    openingBalance?: number
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutFinanceAccountsInput
    transactions?: TransactionCreateNestedManyWithoutAccountInput
    recurringTransactions?: RecurringTransactionCreateNestedManyWithoutAccountInput
    transfersTo?: TransactionCreateNestedManyWithoutTransferToAccountInput
  }

  export type FinanceAccountUncheckedCreateInput = {
    id?: number
    userId: string
    name: string
    openingBalance?: number
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionUncheckedCreateNestedManyWithoutAccountInput
    recurringTransactions?: RecurringTransactionUncheckedCreateNestedManyWithoutAccountInput
    transfersTo?: TransactionUncheckedCreateNestedManyWithoutTransferToAccountInput
  }

  export type FinanceAccountUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    openingBalance?: FloatFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFinanceAccountsNestedInput
    transactions?: TransactionUpdateManyWithoutAccountNestedInput
    recurringTransactions?: RecurringTransactionUpdateManyWithoutAccountNestedInput
    transfersTo?: TransactionUpdateManyWithoutTransferToAccountNestedInput
  }

  export type FinanceAccountUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    openingBalance?: FloatFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUncheckedUpdateManyWithoutAccountNestedInput
    recurringTransactions?: RecurringTransactionUncheckedUpdateManyWithoutAccountNestedInput
    transfersTo?: TransactionUncheckedUpdateManyWithoutTransferToAccountNestedInput
  }

  export type FinanceAccountCreateManyInput = {
    id?: number
    userId: string
    name: string
    openingBalance?: number
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FinanceAccountUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    openingBalance?: FloatFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FinanceAccountUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    openingBalance?: FloatFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateInput = {
    name: string
    type: $Enums.CategoryType
    user: UserCreateNestedOneWithoutCategoriesInput
    transactions?: TransactionCreateNestedManyWithoutCategoryInput
    recurringTransactions?: RecurringTransactionCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: number
    userId: string
    name: string
    type: $Enums.CategoryType
    transactions?: TransactionUncheckedCreateNestedManyWithoutCategoryInput
    recurringTransactions?: RecurringTransactionUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumCategoryTypeFieldUpdateOperationsInput | $Enums.CategoryType
    user?: UserUpdateOneRequiredWithoutCategoriesNestedInput
    transactions?: TransactionUpdateManyWithoutCategoryNestedInput
    recurringTransactions?: RecurringTransactionUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumCategoryTypeFieldUpdateOperationsInput | $Enums.CategoryType
    transactions?: TransactionUncheckedUpdateManyWithoutCategoryNestedInput
    recurringTransactions?: RecurringTransactionUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: number
    userId: string
    name: string
    type: $Enums.CategoryType
  }

  export type CategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumCategoryTypeFieldUpdateOperationsInput | $Enums.CategoryType
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumCategoryTypeFieldUpdateOperationsInput | $Enums.CategoryType
  }

  export type PayeePayerCreateInput = {
    name: string
    type: $Enums.PayeePayerType
    user: UserCreateNestedOneWithoutPayeesPayersInput
    payerTransactions?: TransactionCreateNestedManyWithoutPayerInput
    payeeTransactions?: TransactionCreateNestedManyWithoutPayeeInput
    recurringAsPayer?: RecurringTransactionCreateNestedManyWithoutPayerInput
    recurringAsPayee?: RecurringTransactionCreateNestedManyWithoutPayeeInput
  }

  export type PayeePayerUncheckedCreateInput = {
    id?: number
    userId: string
    name: string
    type: $Enums.PayeePayerType
    payerTransactions?: TransactionUncheckedCreateNestedManyWithoutPayerInput
    payeeTransactions?: TransactionUncheckedCreateNestedManyWithoutPayeeInput
    recurringAsPayer?: RecurringTransactionUncheckedCreateNestedManyWithoutPayerInput
    recurringAsPayee?: RecurringTransactionUncheckedCreateNestedManyWithoutPayeeInput
  }

  export type PayeePayerUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumPayeePayerTypeFieldUpdateOperationsInput | $Enums.PayeePayerType
    user?: UserUpdateOneRequiredWithoutPayeesPayersNestedInput
    payerTransactions?: TransactionUpdateManyWithoutPayerNestedInput
    payeeTransactions?: TransactionUpdateManyWithoutPayeeNestedInput
    recurringAsPayer?: RecurringTransactionUpdateManyWithoutPayerNestedInput
    recurringAsPayee?: RecurringTransactionUpdateManyWithoutPayeeNestedInput
  }

  export type PayeePayerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumPayeePayerTypeFieldUpdateOperationsInput | $Enums.PayeePayerType
    payerTransactions?: TransactionUncheckedUpdateManyWithoutPayerNestedInput
    payeeTransactions?: TransactionUncheckedUpdateManyWithoutPayeeNestedInput
    recurringAsPayer?: RecurringTransactionUncheckedUpdateManyWithoutPayerNestedInput
    recurringAsPayee?: RecurringTransactionUncheckedUpdateManyWithoutPayeeNestedInput
  }

  export type PayeePayerCreateManyInput = {
    id?: number
    userId: string
    name: string
    type: $Enums.PayeePayerType
  }

  export type PayeePayerUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumPayeePayerTypeFieldUpdateOperationsInput | $Enums.PayeePayerType
  }

  export type PayeePayerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumPayeePayerTypeFieldUpdateOperationsInput | $Enums.PayeePayerType
  }

  export type PaymentMethodCreateInput = {
    name: string
    user: UserCreateNestedOneWithoutPaymentMethodsInput
    transactions?: TransactionCreateNestedManyWithoutPaymentMethodInput
    recurringTransactions?: RecurringTransactionCreateNestedManyWithoutPaymentMethodInput
  }

  export type PaymentMethodUncheckedCreateInput = {
    id?: number
    userId: string
    name: string
    transactions?: TransactionUncheckedCreateNestedManyWithoutPaymentMethodInput
    recurringTransactions?: RecurringTransactionUncheckedCreateNestedManyWithoutPaymentMethodInput
  }

  export type PaymentMethodUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutPaymentMethodsNestedInput
    transactions?: TransactionUpdateManyWithoutPaymentMethodNestedInput
    recurringTransactions?: RecurringTransactionUpdateManyWithoutPaymentMethodNestedInput
  }

  export type PaymentMethodUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    transactions?: TransactionUncheckedUpdateManyWithoutPaymentMethodNestedInput
    recurringTransactions?: RecurringTransactionUncheckedUpdateManyWithoutPaymentMethodNestedInput
  }

  export type PaymentMethodCreateManyInput = {
    id?: number
    userId: string
    name: string
  }

  export type PaymentMethodUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentMethodUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TransactionCreateInput = {
    date: Date | string
    type: $Enums.TransactionType
    amount: number
    reference?: string | null
    note?: string | null
    debit?: number
    credit?: number
    balance?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    linkedTransaction?: TransactionCreateNestedOneWithoutLinkedByInput
    linkedBy?: TransactionCreateNestedOneWithoutLinkedTransactionInput
    transferToAccount?: FinanceAccountCreateNestedOneWithoutTransfersToInput
    user: UserCreateNestedOneWithoutTransactionsInput
    account: FinanceAccountCreateNestedOneWithoutTransactionsInput
    category?: CategoryCreateNestedOneWithoutTransactionsInput
    payer?: PayeePayerCreateNestedOneWithoutPayerTransactionsInput
    payee?: PayeePayerCreateNestedOneWithoutPayeeTransactionsInput
    paymentMethod?: PaymentMethodCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateInput = {
    id?: number
    userId: string
    accountId: number
    date: Date | string
    type: $Enums.TransactionType
    categoryId?: number | null
    amount: number
    payerId?: number | null
    payeeId?: number | null
    paymentMethodId?: number | null
    reference?: string | null
    note?: string | null
    debit?: number
    credit?: number
    balance?: number
    linkedTransactionId?: number | null
    transferToAccountId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    linkedBy?: TransactionUncheckedCreateNestedOneWithoutLinkedTransactionInput
  }

  export type TransactionUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amount?: FloatFieldUpdateOperationsInput | number
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    debit?: FloatFieldUpdateOperationsInput | number
    credit?: FloatFieldUpdateOperationsInput | number
    balance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    linkedTransaction?: TransactionUpdateOneWithoutLinkedByNestedInput
    linkedBy?: TransactionUpdateOneWithoutLinkedTransactionNestedInput
    transferToAccount?: FinanceAccountUpdateOneWithoutTransfersToNestedInput
    user?: UserUpdateOneRequiredWithoutTransactionsNestedInput
    account?: FinanceAccountUpdateOneRequiredWithoutTransactionsNestedInput
    category?: CategoryUpdateOneWithoutTransactionsNestedInput
    payer?: PayeePayerUpdateOneWithoutPayerTransactionsNestedInput
    payee?: PayeePayerUpdateOneWithoutPayeeTransactionsNestedInput
    paymentMethod?: PaymentMethodUpdateOneWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    accountId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: FloatFieldUpdateOperationsInput | number
    payerId?: NullableIntFieldUpdateOperationsInput | number | null
    payeeId?: NullableIntFieldUpdateOperationsInput | number | null
    paymentMethodId?: NullableIntFieldUpdateOperationsInput | number | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    debit?: FloatFieldUpdateOperationsInput | number
    credit?: FloatFieldUpdateOperationsInput | number
    balance?: FloatFieldUpdateOperationsInput | number
    linkedTransactionId?: NullableIntFieldUpdateOperationsInput | number | null
    transferToAccountId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    linkedBy?: TransactionUncheckedUpdateOneWithoutLinkedTransactionNestedInput
  }

  export type TransactionCreateManyInput = {
    id?: number
    userId: string
    accountId: number
    date: Date | string
    type: $Enums.TransactionType
    categoryId?: number | null
    amount: number
    payerId?: number | null
    payeeId?: number | null
    paymentMethodId?: number | null
    reference?: string | null
    note?: string | null
    debit?: number
    credit?: number
    balance?: number
    linkedTransactionId?: number | null
    transferToAccountId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amount?: FloatFieldUpdateOperationsInput | number
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    debit?: FloatFieldUpdateOperationsInput | number
    credit?: FloatFieldUpdateOperationsInput | number
    balance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    accountId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: FloatFieldUpdateOperationsInput | number
    payerId?: NullableIntFieldUpdateOperationsInput | number | null
    payeeId?: NullableIntFieldUpdateOperationsInput | number | null
    paymentMethodId?: NullableIntFieldUpdateOperationsInput | number | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    debit?: FloatFieldUpdateOperationsInput | number
    credit?: FloatFieldUpdateOperationsInput | number
    balance?: FloatFieldUpdateOperationsInput | number
    linkedTransactionId?: NullableIntFieldUpdateOperationsInput | number | null
    transferToAccountId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecurringTransactionCreateInput = {
    type: $Enums.TransactionType
    amount: number
    reference?: string | null
    status?: $Enums.RecurringStatus
    description?: string | null
    startDate: Date | string
    nextDate?: Date | string | null
    frequency: $Enums.RecurringFrequency
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutRecurringTransactionsInput
    account: FinanceAccountCreateNestedOneWithoutRecurringTransactionsInput
    category: CategoryCreateNestedOneWithoutRecurringTransactionsInput
    payer?: PayeePayerCreateNestedOneWithoutRecurringAsPayerInput
    payee?: PayeePayerCreateNestedOneWithoutRecurringAsPayeeInput
    paymentMethod?: PaymentMethodCreateNestedOneWithoutRecurringTransactionsInput
  }

  export type RecurringTransactionUncheckedCreateInput = {
    id?: number
    userId: string
    accountId: number
    type: $Enums.TransactionType
    categoryId: number
    amount: number
    payerId?: number | null
    payeeId?: number | null
    paymentMethodId?: number | null
    reference?: string | null
    status?: $Enums.RecurringStatus
    description?: string | null
    startDate: Date | string
    nextDate?: Date | string | null
    frequency: $Enums.RecurringFrequency
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RecurringTransactionUpdateInput = {
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amount?: FloatFieldUpdateOperationsInput | number
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRecurringStatusFieldUpdateOperationsInput | $Enums.RecurringStatus
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    nextDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    frequency?: EnumRecurringFrequencyFieldUpdateOperationsInput | $Enums.RecurringFrequency
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRecurringTransactionsNestedInput
    account?: FinanceAccountUpdateOneRequiredWithoutRecurringTransactionsNestedInput
    category?: CategoryUpdateOneRequiredWithoutRecurringTransactionsNestedInput
    payer?: PayeePayerUpdateOneWithoutRecurringAsPayerNestedInput
    payee?: PayeePayerUpdateOneWithoutRecurringAsPayeeNestedInput
    paymentMethod?: PaymentMethodUpdateOneWithoutRecurringTransactionsNestedInput
  }

  export type RecurringTransactionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    accountId?: IntFieldUpdateOperationsInput | number
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    categoryId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    payerId?: NullableIntFieldUpdateOperationsInput | number | null
    payeeId?: NullableIntFieldUpdateOperationsInput | number | null
    paymentMethodId?: NullableIntFieldUpdateOperationsInput | number | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRecurringStatusFieldUpdateOperationsInput | $Enums.RecurringStatus
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    nextDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    frequency?: EnumRecurringFrequencyFieldUpdateOperationsInput | $Enums.RecurringFrequency
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecurringTransactionCreateManyInput = {
    id?: number
    userId: string
    accountId: number
    type: $Enums.TransactionType
    categoryId: number
    amount: number
    payerId?: number | null
    payeeId?: number | null
    paymentMethodId?: number | null
    reference?: string | null
    status?: $Enums.RecurringStatus
    description?: string | null
    startDate: Date | string
    nextDate?: Date | string | null
    frequency: $Enums.RecurringFrequency
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RecurringTransactionUpdateManyMutationInput = {
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amount?: FloatFieldUpdateOperationsInput | number
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRecurringStatusFieldUpdateOperationsInput | $Enums.RecurringStatus
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    nextDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    frequency?: EnumRecurringFrequencyFieldUpdateOperationsInput | $Enums.RecurringFrequency
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecurringTransactionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    accountId?: IntFieldUpdateOperationsInput | number
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    categoryId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    payerId?: NullableIntFieldUpdateOperationsInput | number | null
    payeeId?: NullableIntFieldUpdateOperationsInput | number | null
    paymentMethodId?: NullableIntFieldUpdateOperationsInput | number | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRecurringStatusFieldUpdateOperationsInput | $Enums.RecurringStatus
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    nextDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    frequency?: EnumRecurringFrequencyFieldUpdateOperationsInput | $Enums.RecurringFrequency
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SettingsCreateInput = {
    key: string
    value: string
    user: UserCreateNestedOneWithoutSettingsInput
  }

  export type SettingsUncheckedCreateInput = {
    id?: number
    userId: string
    key: string
    value: string
  }

  export type SettingsUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutSettingsNestedInput
  }

  export type SettingsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type SettingsCreateManyInput = {
    id?: number
    userId: string
    key: string
    value: string
  }

  export type SettingsUpdateManyMutationInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type SettingsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
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

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type FinanceAccountListRelationFilter = {
    every?: FinanceAccountWhereInput
    some?: FinanceAccountWhereInput
    none?: FinanceAccountWhereInput
  }

  export type CategoryListRelationFilter = {
    every?: CategoryWhereInput
    some?: CategoryWhereInput
    none?: CategoryWhereInput
  }

  export type PayeePayerListRelationFilter = {
    every?: PayeePayerWhereInput
    some?: PayeePayerWhereInput
    none?: PayeePayerWhereInput
  }

  export type PaymentMethodListRelationFilter = {
    every?: PaymentMethodWhereInput
    some?: PaymentMethodWhereInput
    none?: PaymentMethodWhereInput
  }

  export type TransactionListRelationFilter = {
    every?: TransactionWhereInput
    some?: TransactionWhereInput
    none?: TransactionWhereInput
  }

  export type RecurringTransactionListRelationFilter = {
    every?: RecurringTransactionWhereInput
    some?: RecurringTransactionWhereInput
    none?: RecurringTransactionWhereInput
  }

  export type SettingsListRelationFilter = {
    every?: SettingsWhereInput
    some?: SettingsWhereInput
    none?: SettingsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FinanceAccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PayeePayerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaymentMethodOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RecurringTransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SettingsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    password?: SortOrder
    role?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    password?: SortOrder
    role?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    password?: SortOrder
    role?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    expires_at?: SortOrder
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

  export type SessionCountOrderByAggregateInput = {
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationTokenIdentifierTokenCompoundUniqueInput = {
    identifier: string
    token: string
  }

  export type VerificationTokenCountOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMaxOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMinOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
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

  export type FinanceAccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    openingBalance?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FinanceAccountAvgOrderByAggregateInput = {
    id?: SortOrder
    openingBalance?: SortOrder
  }

  export type FinanceAccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    openingBalance?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FinanceAccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    openingBalance?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FinanceAccountSumOrderByAggregateInput = {
    id?: SortOrder
    openingBalance?: SortOrder
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

  export type EnumCategoryTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CategoryType | EnumCategoryTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CategoryType[] | ListEnumCategoryTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CategoryType[] | ListEnumCategoryTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryTypeFilter<$PrismaModel> | $Enums.CategoryType
  }

  export type CategoryUserIdNameTypeCompoundUniqueInput = {
    userId: string
    name: string
    type: $Enums.CategoryType
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    type?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    type?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    type?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumCategoryTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CategoryType | EnumCategoryTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CategoryType[] | ListEnumCategoryTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CategoryType[] | ListEnumCategoryTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryTypeWithAggregatesFilter<$PrismaModel> | $Enums.CategoryType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCategoryTypeFilter<$PrismaModel>
    _max?: NestedEnumCategoryTypeFilter<$PrismaModel>
  }

  export type EnumPayeePayerTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PayeePayerType | EnumPayeePayerTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PayeePayerType[] | ListEnumPayeePayerTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PayeePayerType[] | ListEnumPayeePayerTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPayeePayerTypeFilter<$PrismaModel> | $Enums.PayeePayerType
  }

  export type PayeePayerUserIdNameTypeCompoundUniqueInput = {
    userId: string
    name: string
    type: $Enums.PayeePayerType
  }

  export type PayeePayerCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    type?: SortOrder
  }

  export type PayeePayerAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PayeePayerMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    type?: SortOrder
  }

  export type PayeePayerMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    type?: SortOrder
  }

  export type PayeePayerSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumPayeePayerTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PayeePayerType | EnumPayeePayerTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PayeePayerType[] | ListEnumPayeePayerTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PayeePayerType[] | ListEnumPayeePayerTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPayeePayerTypeWithAggregatesFilter<$PrismaModel> | $Enums.PayeePayerType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPayeePayerTypeFilter<$PrismaModel>
    _max?: NestedEnumPayeePayerTypeFilter<$PrismaModel>
  }

  export type PaymentMethodUserIdNameCompoundUniqueInput = {
    userId: string
    name: string
  }

  export type PaymentMethodCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
  }

  export type PaymentMethodAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PaymentMethodMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
  }

  export type PaymentMethodMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
  }

  export type PaymentMethodSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumTransactionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeFilter<$PrismaModel> | $Enums.TransactionType
  }

  export type TransactionNullableScalarRelationFilter = {
    is?: TransactionWhereInput | null
    isNot?: TransactionWhereInput | null
  }

  export type FinanceAccountNullableScalarRelationFilter = {
    is?: FinanceAccountWhereInput | null
    isNot?: FinanceAccountWhereInput | null
  }

  export type FinanceAccountScalarRelationFilter = {
    is?: FinanceAccountWhereInput
    isNot?: FinanceAccountWhereInput
  }

  export type CategoryNullableScalarRelationFilter = {
    is?: CategoryWhereInput | null
    isNot?: CategoryWhereInput | null
  }

  export type PayeePayerNullableScalarRelationFilter = {
    is?: PayeePayerWhereInput | null
    isNot?: PayeePayerWhereInput | null
  }

  export type PaymentMethodNullableScalarRelationFilter = {
    is?: PaymentMethodWhereInput | null
    isNot?: PaymentMethodWhereInput | null
  }

  export type TransactionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    accountId?: SortOrder
    date?: SortOrder
    type?: SortOrder
    categoryId?: SortOrder
    amount?: SortOrder
    payerId?: SortOrder
    payeeId?: SortOrder
    paymentMethodId?: SortOrder
    reference?: SortOrder
    note?: SortOrder
    debit?: SortOrder
    credit?: SortOrder
    balance?: SortOrder
    linkedTransactionId?: SortOrder
    transferToAccountId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransactionAvgOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    categoryId?: SortOrder
    amount?: SortOrder
    payerId?: SortOrder
    payeeId?: SortOrder
    paymentMethodId?: SortOrder
    debit?: SortOrder
    credit?: SortOrder
    balance?: SortOrder
    linkedTransactionId?: SortOrder
    transferToAccountId?: SortOrder
  }

  export type TransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    accountId?: SortOrder
    date?: SortOrder
    type?: SortOrder
    categoryId?: SortOrder
    amount?: SortOrder
    payerId?: SortOrder
    payeeId?: SortOrder
    paymentMethodId?: SortOrder
    reference?: SortOrder
    note?: SortOrder
    debit?: SortOrder
    credit?: SortOrder
    balance?: SortOrder
    linkedTransactionId?: SortOrder
    transferToAccountId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransactionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    accountId?: SortOrder
    date?: SortOrder
    type?: SortOrder
    categoryId?: SortOrder
    amount?: SortOrder
    payerId?: SortOrder
    payeeId?: SortOrder
    paymentMethodId?: SortOrder
    reference?: SortOrder
    note?: SortOrder
    debit?: SortOrder
    credit?: SortOrder
    balance?: SortOrder
    linkedTransactionId?: SortOrder
    transferToAccountId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransactionSumOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    categoryId?: SortOrder
    amount?: SortOrder
    payerId?: SortOrder
    payeeId?: SortOrder
    paymentMethodId?: SortOrder
    debit?: SortOrder
    credit?: SortOrder
    balance?: SortOrder
    linkedTransactionId?: SortOrder
    transferToAccountId?: SortOrder
  }

  export type EnumTransactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel> | $Enums.TransactionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionTypeFilter<$PrismaModel>
    _max?: NestedEnumTransactionTypeFilter<$PrismaModel>
  }

  export type EnumRecurringStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RecurringStatus | EnumRecurringStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RecurringStatus[] | ListEnumRecurringStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RecurringStatus[] | ListEnumRecurringStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRecurringStatusFilter<$PrismaModel> | $Enums.RecurringStatus
  }

  export type EnumRecurringFrequencyFilter<$PrismaModel = never> = {
    equals?: $Enums.RecurringFrequency | EnumRecurringFrequencyFieldRefInput<$PrismaModel>
    in?: $Enums.RecurringFrequency[] | ListEnumRecurringFrequencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.RecurringFrequency[] | ListEnumRecurringFrequencyFieldRefInput<$PrismaModel>
    not?: NestedEnumRecurringFrequencyFilter<$PrismaModel> | $Enums.RecurringFrequency
  }

  export type CategoryScalarRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type RecurringTransactionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    accountId?: SortOrder
    type?: SortOrder
    categoryId?: SortOrder
    amount?: SortOrder
    payerId?: SortOrder
    payeeId?: SortOrder
    paymentMethodId?: SortOrder
    reference?: SortOrder
    status?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    nextDate?: SortOrder
    frequency?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RecurringTransactionAvgOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    categoryId?: SortOrder
    amount?: SortOrder
    payerId?: SortOrder
    payeeId?: SortOrder
    paymentMethodId?: SortOrder
  }

  export type RecurringTransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    accountId?: SortOrder
    type?: SortOrder
    categoryId?: SortOrder
    amount?: SortOrder
    payerId?: SortOrder
    payeeId?: SortOrder
    paymentMethodId?: SortOrder
    reference?: SortOrder
    status?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    nextDate?: SortOrder
    frequency?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RecurringTransactionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    accountId?: SortOrder
    type?: SortOrder
    categoryId?: SortOrder
    amount?: SortOrder
    payerId?: SortOrder
    payeeId?: SortOrder
    paymentMethodId?: SortOrder
    reference?: SortOrder
    status?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    nextDate?: SortOrder
    frequency?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RecurringTransactionSumOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    categoryId?: SortOrder
    amount?: SortOrder
    payerId?: SortOrder
    payeeId?: SortOrder
    paymentMethodId?: SortOrder
  }

  export type EnumRecurringStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RecurringStatus | EnumRecurringStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RecurringStatus[] | ListEnumRecurringStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RecurringStatus[] | ListEnumRecurringStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRecurringStatusWithAggregatesFilter<$PrismaModel> | $Enums.RecurringStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRecurringStatusFilter<$PrismaModel>
    _max?: NestedEnumRecurringStatusFilter<$PrismaModel>
  }

  export type EnumRecurringFrequencyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RecurringFrequency | EnumRecurringFrequencyFieldRefInput<$PrismaModel>
    in?: $Enums.RecurringFrequency[] | ListEnumRecurringFrequencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.RecurringFrequency[] | ListEnumRecurringFrequencyFieldRefInput<$PrismaModel>
    not?: NestedEnumRecurringFrequencyWithAggregatesFilter<$PrismaModel> | $Enums.RecurringFrequency
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRecurringFrequencyFilter<$PrismaModel>
    _max?: NestedEnumRecurringFrequencyFilter<$PrismaModel>
  }

  export type SettingsUserIdKeyCompoundUniqueInput = {
    userId: string
    key: string
  }

  export type SettingsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    key?: SortOrder
    value?: SortOrder
  }

  export type SettingsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SettingsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    key?: SortOrder
    value?: SortOrder
  }

  export type SettingsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    key?: SortOrder
    value?: SortOrder
  }

  export type SettingsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type FinanceAccountCreateNestedManyWithoutUserInput = {
    create?: XOR<FinanceAccountCreateWithoutUserInput, FinanceAccountUncheckedCreateWithoutUserInput> | FinanceAccountCreateWithoutUserInput[] | FinanceAccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FinanceAccountCreateOrConnectWithoutUserInput | FinanceAccountCreateOrConnectWithoutUserInput[]
    createMany?: FinanceAccountCreateManyUserInputEnvelope
    connect?: FinanceAccountWhereUniqueInput | FinanceAccountWhereUniqueInput[]
  }

  export type CategoryCreateNestedManyWithoutUserInput = {
    create?: XOR<CategoryCreateWithoutUserInput, CategoryUncheckedCreateWithoutUserInput> | CategoryCreateWithoutUserInput[] | CategoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutUserInput | CategoryCreateOrConnectWithoutUserInput[]
    createMany?: CategoryCreateManyUserInputEnvelope
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type PayeePayerCreateNestedManyWithoutUserInput = {
    create?: XOR<PayeePayerCreateWithoutUserInput, PayeePayerUncheckedCreateWithoutUserInput> | PayeePayerCreateWithoutUserInput[] | PayeePayerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PayeePayerCreateOrConnectWithoutUserInput | PayeePayerCreateOrConnectWithoutUserInput[]
    createMany?: PayeePayerCreateManyUserInputEnvelope
    connect?: PayeePayerWhereUniqueInput | PayeePayerWhereUniqueInput[]
  }

  export type PaymentMethodCreateNestedManyWithoutUserInput = {
    create?: XOR<PaymentMethodCreateWithoutUserInput, PaymentMethodUncheckedCreateWithoutUserInput> | PaymentMethodCreateWithoutUserInput[] | PaymentMethodUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentMethodCreateOrConnectWithoutUserInput | PaymentMethodCreateOrConnectWithoutUserInput[]
    createMany?: PaymentMethodCreateManyUserInputEnvelope
    connect?: PaymentMethodWhereUniqueInput | PaymentMethodWhereUniqueInput[]
  }

  export type TransactionCreateNestedManyWithoutUserInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type RecurringTransactionCreateNestedManyWithoutUserInput = {
    create?: XOR<RecurringTransactionCreateWithoutUserInput, RecurringTransactionUncheckedCreateWithoutUserInput> | RecurringTransactionCreateWithoutUserInput[] | RecurringTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RecurringTransactionCreateOrConnectWithoutUserInput | RecurringTransactionCreateOrConnectWithoutUserInput[]
    createMany?: RecurringTransactionCreateManyUserInputEnvelope
    connect?: RecurringTransactionWhereUniqueInput | RecurringTransactionWhereUniqueInput[]
  }

  export type SettingsCreateNestedManyWithoutUserInput = {
    create?: XOR<SettingsCreateWithoutUserInput, SettingsUncheckedCreateWithoutUserInput> | SettingsCreateWithoutUserInput[] | SettingsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SettingsCreateOrConnectWithoutUserInput | SettingsCreateOrConnectWithoutUserInput[]
    createMany?: SettingsCreateManyUserInputEnvelope
    connect?: SettingsWhereUniqueInput | SettingsWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type FinanceAccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FinanceAccountCreateWithoutUserInput, FinanceAccountUncheckedCreateWithoutUserInput> | FinanceAccountCreateWithoutUserInput[] | FinanceAccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FinanceAccountCreateOrConnectWithoutUserInput | FinanceAccountCreateOrConnectWithoutUserInput[]
    createMany?: FinanceAccountCreateManyUserInputEnvelope
    connect?: FinanceAccountWhereUniqueInput | FinanceAccountWhereUniqueInput[]
  }

  export type CategoryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CategoryCreateWithoutUserInput, CategoryUncheckedCreateWithoutUserInput> | CategoryCreateWithoutUserInput[] | CategoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutUserInput | CategoryCreateOrConnectWithoutUserInput[]
    createMany?: CategoryCreateManyUserInputEnvelope
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type PayeePayerUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PayeePayerCreateWithoutUserInput, PayeePayerUncheckedCreateWithoutUserInput> | PayeePayerCreateWithoutUserInput[] | PayeePayerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PayeePayerCreateOrConnectWithoutUserInput | PayeePayerCreateOrConnectWithoutUserInput[]
    createMany?: PayeePayerCreateManyUserInputEnvelope
    connect?: PayeePayerWhereUniqueInput | PayeePayerWhereUniqueInput[]
  }

  export type PaymentMethodUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PaymentMethodCreateWithoutUserInput, PaymentMethodUncheckedCreateWithoutUserInput> | PaymentMethodCreateWithoutUserInput[] | PaymentMethodUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentMethodCreateOrConnectWithoutUserInput | PaymentMethodCreateOrConnectWithoutUserInput[]
    createMany?: PaymentMethodCreateManyUserInputEnvelope
    connect?: PaymentMethodWhereUniqueInput | PaymentMethodWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type RecurringTransactionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RecurringTransactionCreateWithoutUserInput, RecurringTransactionUncheckedCreateWithoutUserInput> | RecurringTransactionCreateWithoutUserInput[] | RecurringTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RecurringTransactionCreateOrConnectWithoutUserInput | RecurringTransactionCreateOrConnectWithoutUserInput[]
    createMany?: RecurringTransactionCreateManyUserInputEnvelope
    connect?: RecurringTransactionWhereUniqueInput | RecurringTransactionWhereUniqueInput[]
  }

  export type SettingsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SettingsCreateWithoutUserInput, SettingsUncheckedCreateWithoutUserInput> | SettingsCreateWithoutUserInput[] | SettingsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SettingsCreateOrConnectWithoutUserInput | SettingsCreateOrConnectWithoutUserInput[]
    createMany?: SettingsCreateManyUserInputEnvelope
    connect?: SettingsWhereUniqueInput | SettingsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type FinanceAccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<FinanceAccountCreateWithoutUserInput, FinanceAccountUncheckedCreateWithoutUserInput> | FinanceAccountCreateWithoutUserInput[] | FinanceAccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FinanceAccountCreateOrConnectWithoutUserInput | FinanceAccountCreateOrConnectWithoutUserInput[]
    upsert?: FinanceAccountUpsertWithWhereUniqueWithoutUserInput | FinanceAccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FinanceAccountCreateManyUserInputEnvelope
    set?: FinanceAccountWhereUniqueInput | FinanceAccountWhereUniqueInput[]
    disconnect?: FinanceAccountWhereUniqueInput | FinanceAccountWhereUniqueInput[]
    delete?: FinanceAccountWhereUniqueInput | FinanceAccountWhereUniqueInput[]
    connect?: FinanceAccountWhereUniqueInput | FinanceAccountWhereUniqueInput[]
    update?: FinanceAccountUpdateWithWhereUniqueWithoutUserInput | FinanceAccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FinanceAccountUpdateManyWithWhereWithoutUserInput | FinanceAccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FinanceAccountScalarWhereInput | FinanceAccountScalarWhereInput[]
  }

  export type CategoryUpdateManyWithoutUserNestedInput = {
    create?: XOR<CategoryCreateWithoutUserInput, CategoryUncheckedCreateWithoutUserInput> | CategoryCreateWithoutUserInput[] | CategoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutUserInput | CategoryCreateOrConnectWithoutUserInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutUserInput | CategoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CategoryCreateManyUserInputEnvelope
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutUserInput | CategoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutUserInput | CategoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type PayeePayerUpdateManyWithoutUserNestedInput = {
    create?: XOR<PayeePayerCreateWithoutUserInput, PayeePayerUncheckedCreateWithoutUserInput> | PayeePayerCreateWithoutUserInput[] | PayeePayerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PayeePayerCreateOrConnectWithoutUserInput | PayeePayerCreateOrConnectWithoutUserInput[]
    upsert?: PayeePayerUpsertWithWhereUniqueWithoutUserInput | PayeePayerUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PayeePayerCreateManyUserInputEnvelope
    set?: PayeePayerWhereUniqueInput | PayeePayerWhereUniqueInput[]
    disconnect?: PayeePayerWhereUniqueInput | PayeePayerWhereUniqueInput[]
    delete?: PayeePayerWhereUniqueInput | PayeePayerWhereUniqueInput[]
    connect?: PayeePayerWhereUniqueInput | PayeePayerWhereUniqueInput[]
    update?: PayeePayerUpdateWithWhereUniqueWithoutUserInput | PayeePayerUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PayeePayerUpdateManyWithWhereWithoutUserInput | PayeePayerUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PayeePayerScalarWhereInput | PayeePayerScalarWhereInput[]
  }

  export type PaymentMethodUpdateManyWithoutUserNestedInput = {
    create?: XOR<PaymentMethodCreateWithoutUserInput, PaymentMethodUncheckedCreateWithoutUserInput> | PaymentMethodCreateWithoutUserInput[] | PaymentMethodUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentMethodCreateOrConnectWithoutUserInput | PaymentMethodCreateOrConnectWithoutUserInput[]
    upsert?: PaymentMethodUpsertWithWhereUniqueWithoutUserInput | PaymentMethodUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PaymentMethodCreateManyUserInputEnvelope
    set?: PaymentMethodWhereUniqueInput | PaymentMethodWhereUniqueInput[]
    disconnect?: PaymentMethodWhereUniqueInput | PaymentMethodWhereUniqueInput[]
    delete?: PaymentMethodWhereUniqueInput | PaymentMethodWhereUniqueInput[]
    connect?: PaymentMethodWhereUniqueInput | PaymentMethodWhereUniqueInput[]
    update?: PaymentMethodUpdateWithWhereUniqueWithoutUserInput | PaymentMethodUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PaymentMethodUpdateManyWithWhereWithoutUserInput | PaymentMethodUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PaymentMethodScalarWhereInput | PaymentMethodScalarWhereInput[]
  }

  export type TransactionUpdateManyWithoutUserNestedInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutUserInput | TransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutUserInput | TransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutUserInput | TransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type RecurringTransactionUpdateManyWithoutUserNestedInput = {
    create?: XOR<RecurringTransactionCreateWithoutUserInput, RecurringTransactionUncheckedCreateWithoutUserInput> | RecurringTransactionCreateWithoutUserInput[] | RecurringTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RecurringTransactionCreateOrConnectWithoutUserInput | RecurringTransactionCreateOrConnectWithoutUserInput[]
    upsert?: RecurringTransactionUpsertWithWhereUniqueWithoutUserInput | RecurringTransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RecurringTransactionCreateManyUserInputEnvelope
    set?: RecurringTransactionWhereUniqueInput | RecurringTransactionWhereUniqueInput[]
    disconnect?: RecurringTransactionWhereUniqueInput | RecurringTransactionWhereUniqueInput[]
    delete?: RecurringTransactionWhereUniqueInput | RecurringTransactionWhereUniqueInput[]
    connect?: RecurringTransactionWhereUniqueInput | RecurringTransactionWhereUniqueInput[]
    update?: RecurringTransactionUpdateWithWhereUniqueWithoutUserInput | RecurringTransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RecurringTransactionUpdateManyWithWhereWithoutUserInput | RecurringTransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RecurringTransactionScalarWhereInput | RecurringTransactionScalarWhereInput[]
  }

  export type SettingsUpdateManyWithoutUserNestedInput = {
    create?: XOR<SettingsCreateWithoutUserInput, SettingsUncheckedCreateWithoutUserInput> | SettingsCreateWithoutUserInput[] | SettingsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SettingsCreateOrConnectWithoutUserInput | SettingsCreateOrConnectWithoutUserInput[]
    upsert?: SettingsUpsertWithWhereUniqueWithoutUserInput | SettingsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SettingsCreateManyUserInputEnvelope
    set?: SettingsWhereUniqueInput | SettingsWhereUniqueInput[]
    disconnect?: SettingsWhereUniqueInput | SettingsWhereUniqueInput[]
    delete?: SettingsWhereUniqueInput | SettingsWhereUniqueInput[]
    connect?: SettingsWhereUniqueInput | SettingsWhereUniqueInput[]
    update?: SettingsUpdateWithWhereUniqueWithoutUserInput | SettingsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SettingsUpdateManyWithWhereWithoutUserInput | SettingsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SettingsScalarWhereInput | SettingsScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type FinanceAccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FinanceAccountCreateWithoutUserInput, FinanceAccountUncheckedCreateWithoutUserInput> | FinanceAccountCreateWithoutUserInput[] | FinanceAccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FinanceAccountCreateOrConnectWithoutUserInput | FinanceAccountCreateOrConnectWithoutUserInput[]
    upsert?: FinanceAccountUpsertWithWhereUniqueWithoutUserInput | FinanceAccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FinanceAccountCreateManyUserInputEnvelope
    set?: FinanceAccountWhereUniqueInput | FinanceAccountWhereUniqueInput[]
    disconnect?: FinanceAccountWhereUniqueInput | FinanceAccountWhereUniqueInput[]
    delete?: FinanceAccountWhereUniqueInput | FinanceAccountWhereUniqueInput[]
    connect?: FinanceAccountWhereUniqueInput | FinanceAccountWhereUniqueInput[]
    update?: FinanceAccountUpdateWithWhereUniqueWithoutUserInput | FinanceAccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FinanceAccountUpdateManyWithWhereWithoutUserInput | FinanceAccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FinanceAccountScalarWhereInput | FinanceAccountScalarWhereInput[]
  }

  export type CategoryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CategoryCreateWithoutUserInput, CategoryUncheckedCreateWithoutUserInput> | CategoryCreateWithoutUserInput[] | CategoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutUserInput | CategoryCreateOrConnectWithoutUserInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutUserInput | CategoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CategoryCreateManyUserInputEnvelope
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutUserInput | CategoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutUserInput | CategoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type PayeePayerUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PayeePayerCreateWithoutUserInput, PayeePayerUncheckedCreateWithoutUserInput> | PayeePayerCreateWithoutUserInput[] | PayeePayerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PayeePayerCreateOrConnectWithoutUserInput | PayeePayerCreateOrConnectWithoutUserInput[]
    upsert?: PayeePayerUpsertWithWhereUniqueWithoutUserInput | PayeePayerUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PayeePayerCreateManyUserInputEnvelope
    set?: PayeePayerWhereUniqueInput | PayeePayerWhereUniqueInput[]
    disconnect?: PayeePayerWhereUniqueInput | PayeePayerWhereUniqueInput[]
    delete?: PayeePayerWhereUniqueInput | PayeePayerWhereUniqueInput[]
    connect?: PayeePayerWhereUniqueInput | PayeePayerWhereUniqueInput[]
    update?: PayeePayerUpdateWithWhereUniqueWithoutUserInput | PayeePayerUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PayeePayerUpdateManyWithWhereWithoutUserInput | PayeePayerUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PayeePayerScalarWhereInput | PayeePayerScalarWhereInput[]
  }

  export type PaymentMethodUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PaymentMethodCreateWithoutUserInput, PaymentMethodUncheckedCreateWithoutUserInput> | PaymentMethodCreateWithoutUserInput[] | PaymentMethodUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentMethodCreateOrConnectWithoutUserInput | PaymentMethodCreateOrConnectWithoutUserInput[]
    upsert?: PaymentMethodUpsertWithWhereUniqueWithoutUserInput | PaymentMethodUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PaymentMethodCreateManyUserInputEnvelope
    set?: PaymentMethodWhereUniqueInput | PaymentMethodWhereUniqueInput[]
    disconnect?: PaymentMethodWhereUniqueInput | PaymentMethodWhereUniqueInput[]
    delete?: PaymentMethodWhereUniqueInput | PaymentMethodWhereUniqueInput[]
    connect?: PaymentMethodWhereUniqueInput | PaymentMethodWhereUniqueInput[]
    update?: PaymentMethodUpdateWithWhereUniqueWithoutUserInput | PaymentMethodUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PaymentMethodUpdateManyWithWhereWithoutUserInput | PaymentMethodUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PaymentMethodScalarWhereInput | PaymentMethodScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutUserInput | TransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutUserInput | TransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutUserInput | TransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type RecurringTransactionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RecurringTransactionCreateWithoutUserInput, RecurringTransactionUncheckedCreateWithoutUserInput> | RecurringTransactionCreateWithoutUserInput[] | RecurringTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RecurringTransactionCreateOrConnectWithoutUserInput | RecurringTransactionCreateOrConnectWithoutUserInput[]
    upsert?: RecurringTransactionUpsertWithWhereUniqueWithoutUserInput | RecurringTransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RecurringTransactionCreateManyUserInputEnvelope
    set?: RecurringTransactionWhereUniqueInput | RecurringTransactionWhereUniqueInput[]
    disconnect?: RecurringTransactionWhereUniqueInput | RecurringTransactionWhereUniqueInput[]
    delete?: RecurringTransactionWhereUniqueInput | RecurringTransactionWhereUniqueInput[]
    connect?: RecurringTransactionWhereUniqueInput | RecurringTransactionWhereUniqueInput[]
    update?: RecurringTransactionUpdateWithWhereUniqueWithoutUserInput | RecurringTransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RecurringTransactionUpdateManyWithWhereWithoutUserInput | RecurringTransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RecurringTransactionScalarWhereInput | RecurringTransactionScalarWhereInput[]
  }

  export type SettingsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SettingsCreateWithoutUserInput, SettingsUncheckedCreateWithoutUserInput> | SettingsCreateWithoutUserInput[] | SettingsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SettingsCreateOrConnectWithoutUserInput | SettingsCreateOrConnectWithoutUserInput[]
    upsert?: SettingsUpsertWithWhereUniqueWithoutUserInput | SettingsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SettingsCreateManyUserInputEnvelope
    set?: SettingsWhereUniqueInput | SettingsWhereUniqueInput[]
    disconnect?: SettingsWhereUniqueInput | SettingsWhereUniqueInput[]
    delete?: SettingsWhereUniqueInput | SettingsWhereUniqueInput[]
    connect?: SettingsWhereUniqueInput | SettingsWhereUniqueInput[]
    update?: SettingsUpdateWithWhereUniqueWithoutUserInput | SettingsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SettingsUpdateManyWithWhereWithoutUserInput | SettingsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SettingsScalarWhereInput | SettingsScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserCreateNestedOneWithoutFinanceAccountsInput = {
    create?: XOR<UserCreateWithoutFinanceAccountsInput, UserUncheckedCreateWithoutFinanceAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFinanceAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type TransactionCreateNestedManyWithoutAccountInput = {
    create?: XOR<TransactionCreateWithoutAccountInput, TransactionUncheckedCreateWithoutAccountInput> | TransactionCreateWithoutAccountInput[] | TransactionUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutAccountInput | TransactionCreateOrConnectWithoutAccountInput[]
    createMany?: TransactionCreateManyAccountInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type RecurringTransactionCreateNestedManyWithoutAccountInput = {
    create?: XOR<RecurringTransactionCreateWithoutAccountInput, RecurringTransactionUncheckedCreateWithoutAccountInput> | RecurringTransactionCreateWithoutAccountInput[] | RecurringTransactionUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: RecurringTransactionCreateOrConnectWithoutAccountInput | RecurringTransactionCreateOrConnectWithoutAccountInput[]
    createMany?: RecurringTransactionCreateManyAccountInputEnvelope
    connect?: RecurringTransactionWhereUniqueInput | RecurringTransactionWhereUniqueInput[]
  }

  export type TransactionCreateNestedManyWithoutTransferToAccountInput = {
    create?: XOR<TransactionCreateWithoutTransferToAccountInput, TransactionUncheckedCreateWithoutTransferToAccountInput> | TransactionCreateWithoutTransferToAccountInput[] | TransactionUncheckedCreateWithoutTransferToAccountInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutTransferToAccountInput | TransactionCreateOrConnectWithoutTransferToAccountInput[]
    createMany?: TransactionCreateManyTransferToAccountInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutAccountInput = {
    create?: XOR<TransactionCreateWithoutAccountInput, TransactionUncheckedCreateWithoutAccountInput> | TransactionCreateWithoutAccountInput[] | TransactionUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutAccountInput | TransactionCreateOrConnectWithoutAccountInput[]
    createMany?: TransactionCreateManyAccountInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type RecurringTransactionUncheckedCreateNestedManyWithoutAccountInput = {
    create?: XOR<RecurringTransactionCreateWithoutAccountInput, RecurringTransactionUncheckedCreateWithoutAccountInput> | RecurringTransactionCreateWithoutAccountInput[] | RecurringTransactionUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: RecurringTransactionCreateOrConnectWithoutAccountInput | RecurringTransactionCreateOrConnectWithoutAccountInput[]
    createMany?: RecurringTransactionCreateManyAccountInputEnvelope
    connect?: RecurringTransactionWhereUniqueInput | RecurringTransactionWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutTransferToAccountInput = {
    create?: XOR<TransactionCreateWithoutTransferToAccountInput, TransactionUncheckedCreateWithoutTransferToAccountInput> | TransactionCreateWithoutTransferToAccountInput[] | TransactionUncheckedCreateWithoutTransferToAccountInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutTransferToAccountInput | TransactionCreateOrConnectWithoutTransferToAccountInput[]
    createMany?: TransactionCreateManyTransferToAccountInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutFinanceAccountsNestedInput = {
    create?: XOR<UserCreateWithoutFinanceAccountsInput, UserUncheckedCreateWithoutFinanceAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFinanceAccountsInput
    upsert?: UserUpsertWithoutFinanceAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFinanceAccountsInput, UserUpdateWithoutFinanceAccountsInput>, UserUncheckedUpdateWithoutFinanceAccountsInput>
  }

  export type TransactionUpdateManyWithoutAccountNestedInput = {
    create?: XOR<TransactionCreateWithoutAccountInput, TransactionUncheckedCreateWithoutAccountInput> | TransactionCreateWithoutAccountInput[] | TransactionUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutAccountInput | TransactionCreateOrConnectWithoutAccountInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutAccountInput | TransactionUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: TransactionCreateManyAccountInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutAccountInput | TransactionUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutAccountInput | TransactionUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type RecurringTransactionUpdateManyWithoutAccountNestedInput = {
    create?: XOR<RecurringTransactionCreateWithoutAccountInput, RecurringTransactionUncheckedCreateWithoutAccountInput> | RecurringTransactionCreateWithoutAccountInput[] | RecurringTransactionUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: RecurringTransactionCreateOrConnectWithoutAccountInput | RecurringTransactionCreateOrConnectWithoutAccountInput[]
    upsert?: RecurringTransactionUpsertWithWhereUniqueWithoutAccountInput | RecurringTransactionUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: RecurringTransactionCreateManyAccountInputEnvelope
    set?: RecurringTransactionWhereUniqueInput | RecurringTransactionWhereUniqueInput[]
    disconnect?: RecurringTransactionWhereUniqueInput | RecurringTransactionWhereUniqueInput[]
    delete?: RecurringTransactionWhereUniqueInput | RecurringTransactionWhereUniqueInput[]
    connect?: RecurringTransactionWhereUniqueInput | RecurringTransactionWhereUniqueInput[]
    update?: RecurringTransactionUpdateWithWhereUniqueWithoutAccountInput | RecurringTransactionUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: RecurringTransactionUpdateManyWithWhereWithoutAccountInput | RecurringTransactionUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: RecurringTransactionScalarWhereInput | RecurringTransactionScalarWhereInput[]
  }

  export type TransactionUpdateManyWithoutTransferToAccountNestedInput = {
    create?: XOR<TransactionCreateWithoutTransferToAccountInput, TransactionUncheckedCreateWithoutTransferToAccountInput> | TransactionCreateWithoutTransferToAccountInput[] | TransactionUncheckedCreateWithoutTransferToAccountInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutTransferToAccountInput | TransactionCreateOrConnectWithoutTransferToAccountInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutTransferToAccountInput | TransactionUpsertWithWhereUniqueWithoutTransferToAccountInput[]
    createMany?: TransactionCreateManyTransferToAccountInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutTransferToAccountInput | TransactionUpdateWithWhereUniqueWithoutTransferToAccountInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutTransferToAccountInput | TransactionUpdateManyWithWhereWithoutTransferToAccountInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TransactionUncheckedUpdateManyWithoutAccountNestedInput = {
    create?: XOR<TransactionCreateWithoutAccountInput, TransactionUncheckedCreateWithoutAccountInput> | TransactionCreateWithoutAccountInput[] | TransactionUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutAccountInput | TransactionCreateOrConnectWithoutAccountInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutAccountInput | TransactionUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: TransactionCreateManyAccountInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutAccountInput | TransactionUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutAccountInput | TransactionUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type RecurringTransactionUncheckedUpdateManyWithoutAccountNestedInput = {
    create?: XOR<RecurringTransactionCreateWithoutAccountInput, RecurringTransactionUncheckedCreateWithoutAccountInput> | RecurringTransactionCreateWithoutAccountInput[] | RecurringTransactionUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: RecurringTransactionCreateOrConnectWithoutAccountInput | RecurringTransactionCreateOrConnectWithoutAccountInput[]
    upsert?: RecurringTransactionUpsertWithWhereUniqueWithoutAccountInput | RecurringTransactionUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: RecurringTransactionCreateManyAccountInputEnvelope
    set?: RecurringTransactionWhereUniqueInput | RecurringTransactionWhereUniqueInput[]
    disconnect?: RecurringTransactionWhereUniqueInput | RecurringTransactionWhereUniqueInput[]
    delete?: RecurringTransactionWhereUniqueInput | RecurringTransactionWhereUniqueInput[]
    connect?: RecurringTransactionWhereUniqueInput | RecurringTransactionWhereUniqueInput[]
    update?: RecurringTransactionUpdateWithWhereUniqueWithoutAccountInput | RecurringTransactionUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: RecurringTransactionUpdateManyWithWhereWithoutAccountInput | RecurringTransactionUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: RecurringTransactionScalarWhereInput | RecurringTransactionScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutTransferToAccountNestedInput = {
    create?: XOR<TransactionCreateWithoutTransferToAccountInput, TransactionUncheckedCreateWithoutTransferToAccountInput> | TransactionCreateWithoutTransferToAccountInput[] | TransactionUncheckedCreateWithoutTransferToAccountInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutTransferToAccountInput | TransactionCreateOrConnectWithoutTransferToAccountInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutTransferToAccountInput | TransactionUpsertWithWhereUniqueWithoutTransferToAccountInput[]
    createMany?: TransactionCreateManyTransferToAccountInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutTransferToAccountInput | TransactionUpdateWithWhereUniqueWithoutTransferToAccountInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutTransferToAccountInput | TransactionUpdateManyWithWhereWithoutTransferToAccountInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCategoriesInput = {
    create?: XOR<UserCreateWithoutCategoriesInput, UserUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCategoriesInput
    connect?: UserWhereUniqueInput
  }

  export type TransactionCreateNestedManyWithoutCategoryInput = {
    create?: XOR<TransactionCreateWithoutCategoryInput, TransactionUncheckedCreateWithoutCategoryInput> | TransactionCreateWithoutCategoryInput[] | TransactionUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutCategoryInput | TransactionCreateOrConnectWithoutCategoryInput[]
    createMany?: TransactionCreateManyCategoryInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type RecurringTransactionCreateNestedManyWithoutCategoryInput = {
    create?: XOR<RecurringTransactionCreateWithoutCategoryInput, RecurringTransactionUncheckedCreateWithoutCategoryInput> | RecurringTransactionCreateWithoutCategoryInput[] | RecurringTransactionUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: RecurringTransactionCreateOrConnectWithoutCategoryInput | RecurringTransactionCreateOrConnectWithoutCategoryInput[]
    createMany?: RecurringTransactionCreateManyCategoryInputEnvelope
    connect?: RecurringTransactionWhereUniqueInput | RecurringTransactionWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<TransactionCreateWithoutCategoryInput, TransactionUncheckedCreateWithoutCategoryInput> | TransactionCreateWithoutCategoryInput[] | TransactionUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutCategoryInput | TransactionCreateOrConnectWithoutCategoryInput[]
    createMany?: TransactionCreateManyCategoryInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type RecurringTransactionUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<RecurringTransactionCreateWithoutCategoryInput, RecurringTransactionUncheckedCreateWithoutCategoryInput> | RecurringTransactionCreateWithoutCategoryInput[] | RecurringTransactionUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: RecurringTransactionCreateOrConnectWithoutCategoryInput | RecurringTransactionCreateOrConnectWithoutCategoryInput[]
    createMany?: RecurringTransactionCreateManyCategoryInputEnvelope
    connect?: RecurringTransactionWhereUniqueInput | RecurringTransactionWhereUniqueInput[]
  }

  export type EnumCategoryTypeFieldUpdateOperationsInput = {
    set?: $Enums.CategoryType
  }

  export type UserUpdateOneRequiredWithoutCategoriesNestedInput = {
    create?: XOR<UserCreateWithoutCategoriesInput, UserUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCategoriesInput
    upsert?: UserUpsertWithoutCategoriesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCategoriesInput, UserUpdateWithoutCategoriesInput>, UserUncheckedUpdateWithoutCategoriesInput>
  }

  export type TransactionUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<TransactionCreateWithoutCategoryInput, TransactionUncheckedCreateWithoutCategoryInput> | TransactionCreateWithoutCategoryInput[] | TransactionUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutCategoryInput | TransactionCreateOrConnectWithoutCategoryInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutCategoryInput | TransactionUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: TransactionCreateManyCategoryInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutCategoryInput | TransactionUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutCategoryInput | TransactionUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type RecurringTransactionUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<RecurringTransactionCreateWithoutCategoryInput, RecurringTransactionUncheckedCreateWithoutCategoryInput> | RecurringTransactionCreateWithoutCategoryInput[] | RecurringTransactionUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: RecurringTransactionCreateOrConnectWithoutCategoryInput | RecurringTransactionCreateOrConnectWithoutCategoryInput[]
    upsert?: RecurringTransactionUpsertWithWhereUniqueWithoutCategoryInput | RecurringTransactionUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: RecurringTransactionCreateManyCategoryInputEnvelope
    set?: RecurringTransactionWhereUniqueInput | RecurringTransactionWhereUniqueInput[]
    disconnect?: RecurringTransactionWhereUniqueInput | RecurringTransactionWhereUniqueInput[]
    delete?: RecurringTransactionWhereUniqueInput | RecurringTransactionWhereUniqueInput[]
    connect?: RecurringTransactionWhereUniqueInput | RecurringTransactionWhereUniqueInput[]
    update?: RecurringTransactionUpdateWithWhereUniqueWithoutCategoryInput | RecurringTransactionUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: RecurringTransactionUpdateManyWithWhereWithoutCategoryInput | RecurringTransactionUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: RecurringTransactionScalarWhereInput | RecurringTransactionScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<TransactionCreateWithoutCategoryInput, TransactionUncheckedCreateWithoutCategoryInput> | TransactionCreateWithoutCategoryInput[] | TransactionUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutCategoryInput | TransactionCreateOrConnectWithoutCategoryInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutCategoryInput | TransactionUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: TransactionCreateManyCategoryInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutCategoryInput | TransactionUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutCategoryInput | TransactionUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type RecurringTransactionUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<RecurringTransactionCreateWithoutCategoryInput, RecurringTransactionUncheckedCreateWithoutCategoryInput> | RecurringTransactionCreateWithoutCategoryInput[] | RecurringTransactionUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: RecurringTransactionCreateOrConnectWithoutCategoryInput | RecurringTransactionCreateOrConnectWithoutCategoryInput[]
    upsert?: RecurringTransactionUpsertWithWhereUniqueWithoutCategoryInput | RecurringTransactionUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: RecurringTransactionCreateManyCategoryInputEnvelope
    set?: RecurringTransactionWhereUniqueInput | RecurringTransactionWhereUniqueInput[]
    disconnect?: RecurringTransactionWhereUniqueInput | RecurringTransactionWhereUniqueInput[]
    delete?: RecurringTransactionWhereUniqueInput | RecurringTransactionWhereUniqueInput[]
    connect?: RecurringTransactionWhereUniqueInput | RecurringTransactionWhereUniqueInput[]
    update?: RecurringTransactionUpdateWithWhereUniqueWithoutCategoryInput | RecurringTransactionUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: RecurringTransactionUpdateManyWithWhereWithoutCategoryInput | RecurringTransactionUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: RecurringTransactionScalarWhereInput | RecurringTransactionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPayeesPayersInput = {
    create?: XOR<UserCreateWithoutPayeesPayersInput, UserUncheckedCreateWithoutPayeesPayersInput>
    connectOrCreate?: UserCreateOrConnectWithoutPayeesPayersInput
    connect?: UserWhereUniqueInput
  }

  export type TransactionCreateNestedManyWithoutPayerInput = {
    create?: XOR<TransactionCreateWithoutPayerInput, TransactionUncheckedCreateWithoutPayerInput> | TransactionCreateWithoutPayerInput[] | TransactionUncheckedCreateWithoutPayerInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutPayerInput | TransactionCreateOrConnectWithoutPayerInput[]
    createMany?: TransactionCreateManyPayerInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type TransactionCreateNestedManyWithoutPayeeInput = {
    create?: XOR<TransactionCreateWithoutPayeeInput, TransactionUncheckedCreateWithoutPayeeInput> | TransactionCreateWithoutPayeeInput[] | TransactionUncheckedCreateWithoutPayeeInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutPayeeInput | TransactionCreateOrConnectWithoutPayeeInput[]
    createMany?: TransactionCreateManyPayeeInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type RecurringTransactionCreateNestedManyWithoutPayerInput = {
    create?: XOR<RecurringTransactionCreateWithoutPayerInput, RecurringTransactionUncheckedCreateWithoutPayerInput> | RecurringTransactionCreateWithoutPayerInput[] | RecurringTransactionUncheckedCreateWithoutPayerInput[]
    connectOrCreate?: RecurringTransactionCreateOrConnectWithoutPayerInput | RecurringTransactionCreateOrConnectWithoutPayerInput[]
    createMany?: RecurringTransactionCreateManyPayerInputEnvelope
    connect?: RecurringTransactionWhereUniqueInput | RecurringTransactionWhereUniqueInput[]
  }

  export type RecurringTransactionCreateNestedManyWithoutPayeeInput = {
    create?: XOR<RecurringTransactionCreateWithoutPayeeInput, RecurringTransactionUncheckedCreateWithoutPayeeInput> | RecurringTransactionCreateWithoutPayeeInput[] | RecurringTransactionUncheckedCreateWithoutPayeeInput[]
    connectOrCreate?: RecurringTransactionCreateOrConnectWithoutPayeeInput | RecurringTransactionCreateOrConnectWithoutPayeeInput[]
    createMany?: RecurringTransactionCreateManyPayeeInputEnvelope
    connect?: RecurringTransactionWhereUniqueInput | RecurringTransactionWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutPayerInput = {
    create?: XOR<TransactionCreateWithoutPayerInput, TransactionUncheckedCreateWithoutPayerInput> | TransactionCreateWithoutPayerInput[] | TransactionUncheckedCreateWithoutPayerInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutPayerInput | TransactionCreateOrConnectWithoutPayerInput[]
    createMany?: TransactionCreateManyPayerInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutPayeeInput = {
    create?: XOR<TransactionCreateWithoutPayeeInput, TransactionUncheckedCreateWithoutPayeeInput> | TransactionCreateWithoutPayeeInput[] | TransactionUncheckedCreateWithoutPayeeInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutPayeeInput | TransactionCreateOrConnectWithoutPayeeInput[]
    createMany?: TransactionCreateManyPayeeInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type RecurringTransactionUncheckedCreateNestedManyWithoutPayerInput = {
    create?: XOR<RecurringTransactionCreateWithoutPayerInput, RecurringTransactionUncheckedCreateWithoutPayerInput> | RecurringTransactionCreateWithoutPayerInput[] | RecurringTransactionUncheckedCreateWithoutPayerInput[]
    connectOrCreate?: RecurringTransactionCreateOrConnectWithoutPayerInput | RecurringTransactionCreateOrConnectWithoutPayerInput[]
    createMany?: RecurringTransactionCreateManyPayerInputEnvelope
    connect?: RecurringTransactionWhereUniqueInput | RecurringTransactionWhereUniqueInput[]
  }

  export type RecurringTransactionUncheckedCreateNestedManyWithoutPayeeInput = {
    create?: XOR<RecurringTransactionCreateWithoutPayeeInput, RecurringTransactionUncheckedCreateWithoutPayeeInput> | RecurringTransactionCreateWithoutPayeeInput[] | RecurringTransactionUncheckedCreateWithoutPayeeInput[]
    connectOrCreate?: RecurringTransactionCreateOrConnectWithoutPayeeInput | RecurringTransactionCreateOrConnectWithoutPayeeInput[]
    createMany?: RecurringTransactionCreateManyPayeeInputEnvelope
    connect?: RecurringTransactionWhereUniqueInput | RecurringTransactionWhereUniqueInput[]
  }

  export type EnumPayeePayerTypeFieldUpdateOperationsInput = {
    set?: $Enums.PayeePayerType
  }

  export type UserUpdateOneRequiredWithoutPayeesPayersNestedInput = {
    create?: XOR<UserCreateWithoutPayeesPayersInput, UserUncheckedCreateWithoutPayeesPayersInput>
    connectOrCreate?: UserCreateOrConnectWithoutPayeesPayersInput
    upsert?: UserUpsertWithoutPayeesPayersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPayeesPayersInput, UserUpdateWithoutPayeesPayersInput>, UserUncheckedUpdateWithoutPayeesPayersInput>
  }

  export type TransactionUpdateManyWithoutPayerNestedInput = {
    create?: XOR<TransactionCreateWithoutPayerInput, TransactionUncheckedCreateWithoutPayerInput> | TransactionCreateWithoutPayerInput[] | TransactionUncheckedCreateWithoutPayerInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutPayerInput | TransactionCreateOrConnectWithoutPayerInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutPayerInput | TransactionUpsertWithWhereUniqueWithoutPayerInput[]
    createMany?: TransactionCreateManyPayerInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutPayerInput | TransactionUpdateWithWhereUniqueWithoutPayerInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutPayerInput | TransactionUpdateManyWithWhereWithoutPayerInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type TransactionUpdateManyWithoutPayeeNestedInput = {
    create?: XOR<TransactionCreateWithoutPayeeInput, TransactionUncheckedCreateWithoutPayeeInput> | TransactionCreateWithoutPayeeInput[] | TransactionUncheckedCreateWithoutPayeeInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutPayeeInput | TransactionCreateOrConnectWithoutPayeeInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutPayeeInput | TransactionUpsertWithWhereUniqueWithoutPayeeInput[]
    createMany?: TransactionCreateManyPayeeInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutPayeeInput | TransactionUpdateWithWhereUniqueWithoutPayeeInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutPayeeInput | TransactionUpdateManyWithWhereWithoutPayeeInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type RecurringTransactionUpdateManyWithoutPayerNestedInput = {
    create?: XOR<RecurringTransactionCreateWithoutPayerInput, RecurringTransactionUncheckedCreateWithoutPayerInput> | RecurringTransactionCreateWithoutPayerInput[] | RecurringTransactionUncheckedCreateWithoutPayerInput[]
    connectOrCreate?: RecurringTransactionCreateOrConnectWithoutPayerInput | RecurringTransactionCreateOrConnectWithoutPayerInput[]
    upsert?: RecurringTransactionUpsertWithWhereUniqueWithoutPayerInput | RecurringTransactionUpsertWithWhereUniqueWithoutPayerInput[]
    createMany?: RecurringTransactionCreateManyPayerInputEnvelope
    set?: RecurringTransactionWhereUniqueInput | RecurringTransactionWhereUniqueInput[]
    disconnect?: RecurringTransactionWhereUniqueInput | RecurringTransactionWhereUniqueInput[]
    delete?: RecurringTransactionWhereUniqueInput | RecurringTransactionWhereUniqueInput[]
    connect?: RecurringTransactionWhereUniqueInput | RecurringTransactionWhereUniqueInput[]
    update?: RecurringTransactionUpdateWithWhereUniqueWithoutPayerInput | RecurringTransactionUpdateWithWhereUniqueWithoutPayerInput[]
    updateMany?: RecurringTransactionUpdateManyWithWhereWithoutPayerInput | RecurringTransactionUpdateManyWithWhereWithoutPayerInput[]
    deleteMany?: RecurringTransactionScalarWhereInput | RecurringTransactionScalarWhereInput[]
  }

  export type RecurringTransactionUpdateManyWithoutPayeeNestedInput = {
    create?: XOR<RecurringTransactionCreateWithoutPayeeInput, RecurringTransactionUncheckedCreateWithoutPayeeInput> | RecurringTransactionCreateWithoutPayeeInput[] | RecurringTransactionUncheckedCreateWithoutPayeeInput[]
    connectOrCreate?: RecurringTransactionCreateOrConnectWithoutPayeeInput | RecurringTransactionCreateOrConnectWithoutPayeeInput[]
    upsert?: RecurringTransactionUpsertWithWhereUniqueWithoutPayeeInput | RecurringTransactionUpsertWithWhereUniqueWithoutPayeeInput[]
    createMany?: RecurringTransactionCreateManyPayeeInputEnvelope
    set?: RecurringTransactionWhereUniqueInput | RecurringTransactionWhereUniqueInput[]
    disconnect?: RecurringTransactionWhereUniqueInput | RecurringTransactionWhereUniqueInput[]
    delete?: RecurringTransactionWhereUniqueInput | RecurringTransactionWhereUniqueInput[]
    connect?: RecurringTransactionWhereUniqueInput | RecurringTransactionWhereUniqueInput[]
    update?: RecurringTransactionUpdateWithWhereUniqueWithoutPayeeInput | RecurringTransactionUpdateWithWhereUniqueWithoutPayeeInput[]
    updateMany?: RecurringTransactionUpdateManyWithWhereWithoutPayeeInput | RecurringTransactionUpdateManyWithWhereWithoutPayeeInput[]
    deleteMany?: RecurringTransactionScalarWhereInput | RecurringTransactionScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutPayerNestedInput = {
    create?: XOR<TransactionCreateWithoutPayerInput, TransactionUncheckedCreateWithoutPayerInput> | TransactionCreateWithoutPayerInput[] | TransactionUncheckedCreateWithoutPayerInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutPayerInput | TransactionCreateOrConnectWithoutPayerInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutPayerInput | TransactionUpsertWithWhereUniqueWithoutPayerInput[]
    createMany?: TransactionCreateManyPayerInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutPayerInput | TransactionUpdateWithWhereUniqueWithoutPayerInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutPayerInput | TransactionUpdateManyWithWhereWithoutPayerInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutPayeeNestedInput = {
    create?: XOR<TransactionCreateWithoutPayeeInput, TransactionUncheckedCreateWithoutPayeeInput> | TransactionCreateWithoutPayeeInput[] | TransactionUncheckedCreateWithoutPayeeInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutPayeeInput | TransactionCreateOrConnectWithoutPayeeInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutPayeeInput | TransactionUpsertWithWhereUniqueWithoutPayeeInput[]
    createMany?: TransactionCreateManyPayeeInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutPayeeInput | TransactionUpdateWithWhereUniqueWithoutPayeeInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutPayeeInput | TransactionUpdateManyWithWhereWithoutPayeeInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type RecurringTransactionUncheckedUpdateManyWithoutPayerNestedInput = {
    create?: XOR<RecurringTransactionCreateWithoutPayerInput, RecurringTransactionUncheckedCreateWithoutPayerInput> | RecurringTransactionCreateWithoutPayerInput[] | RecurringTransactionUncheckedCreateWithoutPayerInput[]
    connectOrCreate?: RecurringTransactionCreateOrConnectWithoutPayerInput | RecurringTransactionCreateOrConnectWithoutPayerInput[]
    upsert?: RecurringTransactionUpsertWithWhereUniqueWithoutPayerInput | RecurringTransactionUpsertWithWhereUniqueWithoutPayerInput[]
    createMany?: RecurringTransactionCreateManyPayerInputEnvelope
    set?: RecurringTransactionWhereUniqueInput | RecurringTransactionWhereUniqueInput[]
    disconnect?: RecurringTransactionWhereUniqueInput | RecurringTransactionWhereUniqueInput[]
    delete?: RecurringTransactionWhereUniqueInput | RecurringTransactionWhereUniqueInput[]
    connect?: RecurringTransactionWhereUniqueInput | RecurringTransactionWhereUniqueInput[]
    update?: RecurringTransactionUpdateWithWhereUniqueWithoutPayerInput | RecurringTransactionUpdateWithWhereUniqueWithoutPayerInput[]
    updateMany?: RecurringTransactionUpdateManyWithWhereWithoutPayerInput | RecurringTransactionUpdateManyWithWhereWithoutPayerInput[]
    deleteMany?: RecurringTransactionScalarWhereInput | RecurringTransactionScalarWhereInput[]
  }

  export type RecurringTransactionUncheckedUpdateManyWithoutPayeeNestedInput = {
    create?: XOR<RecurringTransactionCreateWithoutPayeeInput, RecurringTransactionUncheckedCreateWithoutPayeeInput> | RecurringTransactionCreateWithoutPayeeInput[] | RecurringTransactionUncheckedCreateWithoutPayeeInput[]
    connectOrCreate?: RecurringTransactionCreateOrConnectWithoutPayeeInput | RecurringTransactionCreateOrConnectWithoutPayeeInput[]
    upsert?: RecurringTransactionUpsertWithWhereUniqueWithoutPayeeInput | RecurringTransactionUpsertWithWhereUniqueWithoutPayeeInput[]
    createMany?: RecurringTransactionCreateManyPayeeInputEnvelope
    set?: RecurringTransactionWhereUniqueInput | RecurringTransactionWhereUniqueInput[]
    disconnect?: RecurringTransactionWhereUniqueInput | RecurringTransactionWhereUniqueInput[]
    delete?: RecurringTransactionWhereUniqueInput | RecurringTransactionWhereUniqueInput[]
    connect?: RecurringTransactionWhereUniqueInput | RecurringTransactionWhereUniqueInput[]
    update?: RecurringTransactionUpdateWithWhereUniqueWithoutPayeeInput | RecurringTransactionUpdateWithWhereUniqueWithoutPayeeInput[]
    updateMany?: RecurringTransactionUpdateManyWithWhereWithoutPayeeInput | RecurringTransactionUpdateManyWithWhereWithoutPayeeInput[]
    deleteMany?: RecurringTransactionScalarWhereInput | RecurringTransactionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPaymentMethodsInput = {
    create?: XOR<UserCreateWithoutPaymentMethodsInput, UserUncheckedCreateWithoutPaymentMethodsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentMethodsInput
    connect?: UserWhereUniqueInput
  }

  export type TransactionCreateNestedManyWithoutPaymentMethodInput = {
    create?: XOR<TransactionCreateWithoutPaymentMethodInput, TransactionUncheckedCreateWithoutPaymentMethodInput> | TransactionCreateWithoutPaymentMethodInput[] | TransactionUncheckedCreateWithoutPaymentMethodInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutPaymentMethodInput | TransactionCreateOrConnectWithoutPaymentMethodInput[]
    createMany?: TransactionCreateManyPaymentMethodInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type RecurringTransactionCreateNestedManyWithoutPaymentMethodInput = {
    create?: XOR<RecurringTransactionCreateWithoutPaymentMethodInput, RecurringTransactionUncheckedCreateWithoutPaymentMethodInput> | RecurringTransactionCreateWithoutPaymentMethodInput[] | RecurringTransactionUncheckedCreateWithoutPaymentMethodInput[]
    connectOrCreate?: RecurringTransactionCreateOrConnectWithoutPaymentMethodInput | RecurringTransactionCreateOrConnectWithoutPaymentMethodInput[]
    createMany?: RecurringTransactionCreateManyPaymentMethodInputEnvelope
    connect?: RecurringTransactionWhereUniqueInput | RecurringTransactionWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutPaymentMethodInput = {
    create?: XOR<TransactionCreateWithoutPaymentMethodInput, TransactionUncheckedCreateWithoutPaymentMethodInput> | TransactionCreateWithoutPaymentMethodInput[] | TransactionUncheckedCreateWithoutPaymentMethodInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutPaymentMethodInput | TransactionCreateOrConnectWithoutPaymentMethodInput[]
    createMany?: TransactionCreateManyPaymentMethodInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type RecurringTransactionUncheckedCreateNestedManyWithoutPaymentMethodInput = {
    create?: XOR<RecurringTransactionCreateWithoutPaymentMethodInput, RecurringTransactionUncheckedCreateWithoutPaymentMethodInput> | RecurringTransactionCreateWithoutPaymentMethodInput[] | RecurringTransactionUncheckedCreateWithoutPaymentMethodInput[]
    connectOrCreate?: RecurringTransactionCreateOrConnectWithoutPaymentMethodInput | RecurringTransactionCreateOrConnectWithoutPaymentMethodInput[]
    createMany?: RecurringTransactionCreateManyPaymentMethodInputEnvelope
    connect?: RecurringTransactionWhereUniqueInput | RecurringTransactionWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutPaymentMethodsNestedInput = {
    create?: XOR<UserCreateWithoutPaymentMethodsInput, UserUncheckedCreateWithoutPaymentMethodsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentMethodsInput
    upsert?: UserUpsertWithoutPaymentMethodsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPaymentMethodsInput, UserUpdateWithoutPaymentMethodsInput>, UserUncheckedUpdateWithoutPaymentMethodsInput>
  }

  export type TransactionUpdateManyWithoutPaymentMethodNestedInput = {
    create?: XOR<TransactionCreateWithoutPaymentMethodInput, TransactionUncheckedCreateWithoutPaymentMethodInput> | TransactionCreateWithoutPaymentMethodInput[] | TransactionUncheckedCreateWithoutPaymentMethodInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutPaymentMethodInput | TransactionCreateOrConnectWithoutPaymentMethodInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutPaymentMethodInput | TransactionUpsertWithWhereUniqueWithoutPaymentMethodInput[]
    createMany?: TransactionCreateManyPaymentMethodInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutPaymentMethodInput | TransactionUpdateWithWhereUniqueWithoutPaymentMethodInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutPaymentMethodInput | TransactionUpdateManyWithWhereWithoutPaymentMethodInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type RecurringTransactionUpdateManyWithoutPaymentMethodNestedInput = {
    create?: XOR<RecurringTransactionCreateWithoutPaymentMethodInput, RecurringTransactionUncheckedCreateWithoutPaymentMethodInput> | RecurringTransactionCreateWithoutPaymentMethodInput[] | RecurringTransactionUncheckedCreateWithoutPaymentMethodInput[]
    connectOrCreate?: RecurringTransactionCreateOrConnectWithoutPaymentMethodInput | RecurringTransactionCreateOrConnectWithoutPaymentMethodInput[]
    upsert?: RecurringTransactionUpsertWithWhereUniqueWithoutPaymentMethodInput | RecurringTransactionUpsertWithWhereUniqueWithoutPaymentMethodInput[]
    createMany?: RecurringTransactionCreateManyPaymentMethodInputEnvelope
    set?: RecurringTransactionWhereUniqueInput | RecurringTransactionWhereUniqueInput[]
    disconnect?: RecurringTransactionWhereUniqueInput | RecurringTransactionWhereUniqueInput[]
    delete?: RecurringTransactionWhereUniqueInput | RecurringTransactionWhereUniqueInput[]
    connect?: RecurringTransactionWhereUniqueInput | RecurringTransactionWhereUniqueInput[]
    update?: RecurringTransactionUpdateWithWhereUniqueWithoutPaymentMethodInput | RecurringTransactionUpdateWithWhereUniqueWithoutPaymentMethodInput[]
    updateMany?: RecurringTransactionUpdateManyWithWhereWithoutPaymentMethodInput | RecurringTransactionUpdateManyWithWhereWithoutPaymentMethodInput[]
    deleteMany?: RecurringTransactionScalarWhereInput | RecurringTransactionScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutPaymentMethodNestedInput = {
    create?: XOR<TransactionCreateWithoutPaymentMethodInput, TransactionUncheckedCreateWithoutPaymentMethodInput> | TransactionCreateWithoutPaymentMethodInput[] | TransactionUncheckedCreateWithoutPaymentMethodInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutPaymentMethodInput | TransactionCreateOrConnectWithoutPaymentMethodInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutPaymentMethodInput | TransactionUpsertWithWhereUniqueWithoutPaymentMethodInput[]
    createMany?: TransactionCreateManyPaymentMethodInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutPaymentMethodInput | TransactionUpdateWithWhereUniqueWithoutPaymentMethodInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutPaymentMethodInput | TransactionUpdateManyWithWhereWithoutPaymentMethodInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type RecurringTransactionUncheckedUpdateManyWithoutPaymentMethodNestedInput = {
    create?: XOR<RecurringTransactionCreateWithoutPaymentMethodInput, RecurringTransactionUncheckedCreateWithoutPaymentMethodInput> | RecurringTransactionCreateWithoutPaymentMethodInput[] | RecurringTransactionUncheckedCreateWithoutPaymentMethodInput[]
    connectOrCreate?: RecurringTransactionCreateOrConnectWithoutPaymentMethodInput | RecurringTransactionCreateOrConnectWithoutPaymentMethodInput[]
    upsert?: RecurringTransactionUpsertWithWhereUniqueWithoutPaymentMethodInput | RecurringTransactionUpsertWithWhereUniqueWithoutPaymentMethodInput[]
    createMany?: RecurringTransactionCreateManyPaymentMethodInputEnvelope
    set?: RecurringTransactionWhereUniqueInput | RecurringTransactionWhereUniqueInput[]
    disconnect?: RecurringTransactionWhereUniqueInput | RecurringTransactionWhereUniqueInput[]
    delete?: RecurringTransactionWhereUniqueInput | RecurringTransactionWhereUniqueInput[]
    connect?: RecurringTransactionWhereUniqueInput | RecurringTransactionWhereUniqueInput[]
    update?: RecurringTransactionUpdateWithWhereUniqueWithoutPaymentMethodInput | RecurringTransactionUpdateWithWhereUniqueWithoutPaymentMethodInput[]
    updateMany?: RecurringTransactionUpdateManyWithWhereWithoutPaymentMethodInput | RecurringTransactionUpdateManyWithWhereWithoutPaymentMethodInput[]
    deleteMany?: RecurringTransactionScalarWhereInput | RecurringTransactionScalarWhereInput[]
  }

  export type TransactionCreateNestedOneWithoutLinkedByInput = {
    create?: XOR<TransactionCreateWithoutLinkedByInput, TransactionUncheckedCreateWithoutLinkedByInput>
    connectOrCreate?: TransactionCreateOrConnectWithoutLinkedByInput
    connect?: TransactionWhereUniqueInput
  }

  export type TransactionCreateNestedOneWithoutLinkedTransactionInput = {
    create?: XOR<TransactionCreateWithoutLinkedTransactionInput, TransactionUncheckedCreateWithoutLinkedTransactionInput>
    connectOrCreate?: TransactionCreateOrConnectWithoutLinkedTransactionInput
    connect?: TransactionWhereUniqueInput
  }

  export type FinanceAccountCreateNestedOneWithoutTransfersToInput = {
    create?: XOR<FinanceAccountCreateWithoutTransfersToInput, FinanceAccountUncheckedCreateWithoutTransfersToInput>
    connectOrCreate?: FinanceAccountCreateOrConnectWithoutTransfersToInput
    connect?: FinanceAccountWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransactionsInput
    connect?: UserWhereUniqueInput
  }

  export type FinanceAccountCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<FinanceAccountCreateWithoutTransactionsInput, FinanceAccountUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: FinanceAccountCreateOrConnectWithoutTransactionsInput
    connect?: FinanceAccountWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<CategoryCreateWithoutTransactionsInput, CategoryUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutTransactionsInput
    connect?: CategoryWhereUniqueInput
  }

  export type PayeePayerCreateNestedOneWithoutPayerTransactionsInput = {
    create?: XOR<PayeePayerCreateWithoutPayerTransactionsInput, PayeePayerUncheckedCreateWithoutPayerTransactionsInput>
    connectOrCreate?: PayeePayerCreateOrConnectWithoutPayerTransactionsInput
    connect?: PayeePayerWhereUniqueInput
  }

  export type PayeePayerCreateNestedOneWithoutPayeeTransactionsInput = {
    create?: XOR<PayeePayerCreateWithoutPayeeTransactionsInput, PayeePayerUncheckedCreateWithoutPayeeTransactionsInput>
    connectOrCreate?: PayeePayerCreateOrConnectWithoutPayeeTransactionsInput
    connect?: PayeePayerWhereUniqueInput
  }

  export type PaymentMethodCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<PaymentMethodCreateWithoutTransactionsInput, PaymentMethodUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: PaymentMethodCreateOrConnectWithoutTransactionsInput
    connect?: PaymentMethodWhereUniqueInput
  }

  export type TransactionUncheckedCreateNestedOneWithoutLinkedTransactionInput = {
    create?: XOR<TransactionCreateWithoutLinkedTransactionInput, TransactionUncheckedCreateWithoutLinkedTransactionInput>
    connectOrCreate?: TransactionCreateOrConnectWithoutLinkedTransactionInput
    connect?: TransactionWhereUniqueInput
  }

  export type EnumTransactionTypeFieldUpdateOperationsInput = {
    set?: $Enums.TransactionType
  }

  export type TransactionUpdateOneWithoutLinkedByNestedInput = {
    create?: XOR<TransactionCreateWithoutLinkedByInput, TransactionUncheckedCreateWithoutLinkedByInput>
    connectOrCreate?: TransactionCreateOrConnectWithoutLinkedByInput
    upsert?: TransactionUpsertWithoutLinkedByInput
    disconnect?: TransactionWhereInput | boolean
    delete?: TransactionWhereInput | boolean
    connect?: TransactionWhereUniqueInput
    update?: XOR<XOR<TransactionUpdateToOneWithWhereWithoutLinkedByInput, TransactionUpdateWithoutLinkedByInput>, TransactionUncheckedUpdateWithoutLinkedByInput>
  }

  export type TransactionUpdateOneWithoutLinkedTransactionNestedInput = {
    create?: XOR<TransactionCreateWithoutLinkedTransactionInput, TransactionUncheckedCreateWithoutLinkedTransactionInput>
    connectOrCreate?: TransactionCreateOrConnectWithoutLinkedTransactionInput
    upsert?: TransactionUpsertWithoutLinkedTransactionInput
    disconnect?: TransactionWhereInput | boolean
    delete?: TransactionWhereInput | boolean
    connect?: TransactionWhereUniqueInput
    update?: XOR<XOR<TransactionUpdateToOneWithWhereWithoutLinkedTransactionInput, TransactionUpdateWithoutLinkedTransactionInput>, TransactionUncheckedUpdateWithoutLinkedTransactionInput>
  }

  export type FinanceAccountUpdateOneWithoutTransfersToNestedInput = {
    create?: XOR<FinanceAccountCreateWithoutTransfersToInput, FinanceAccountUncheckedCreateWithoutTransfersToInput>
    connectOrCreate?: FinanceAccountCreateOrConnectWithoutTransfersToInput
    upsert?: FinanceAccountUpsertWithoutTransfersToInput
    disconnect?: FinanceAccountWhereInput | boolean
    delete?: FinanceAccountWhereInput | boolean
    connect?: FinanceAccountWhereUniqueInput
    update?: XOR<XOR<FinanceAccountUpdateToOneWithWhereWithoutTransfersToInput, FinanceAccountUpdateWithoutTransfersToInput>, FinanceAccountUncheckedUpdateWithoutTransfersToInput>
  }

  export type UserUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransactionsInput
    upsert?: UserUpsertWithoutTransactionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTransactionsInput, UserUpdateWithoutTransactionsInput>, UserUncheckedUpdateWithoutTransactionsInput>
  }

  export type FinanceAccountUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<FinanceAccountCreateWithoutTransactionsInput, FinanceAccountUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: FinanceAccountCreateOrConnectWithoutTransactionsInput
    upsert?: FinanceAccountUpsertWithoutTransactionsInput
    connect?: FinanceAccountWhereUniqueInput
    update?: XOR<XOR<FinanceAccountUpdateToOneWithWhereWithoutTransactionsInput, FinanceAccountUpdateWithoutTransactionsInput>, FinanceAccountUncheckedUpdateWithoutTransactionsInput>
  }

  export type CategoryUpdateOneWithoutTransactionsNestedInput = {
    create?: XOR<CategoryCreateWithoutTransactionsInput, CategoryUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutTransactionsInput
    upsert?: CategoryUpsertWithoutTransactionsInput
    disconnect?: CategoryWhereInput | boolean
    delete?: CategoryWhereInput | boolean
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutTransactionsInput, CategoryUpdateWithoutTransactionsInput>, CategoryUncheckedUpdateWithoutTransactionsInput>
  }

  export type PayeePayerUpdateOneWithoutPayerTransactionsNestedInput = {
    create?: XOR<PayeePayerCreateWithoutPayerTransactionsInput, PayeePayerUncheckedCreateWithoutPayerTransactionsInput>
    connectOrCreate?: PayeePayerCreateOrConnectWithoutPayerTransactionsInput
    upsert?: PayeePayerUpsertWithoutPayerTransactionsInput
    disconnect?: PayeePayerWhereInput | boolean
    delete?: PayeePayerWhereInput | boolean
    connect?: PayeePayerWhereUniqueInput
    update?: XOR<XOR<PayeePayerUpdateToOneWithWhereWithoutPayerTransactionsInput, PayeePayerUpdateWithoutPayerTransactionsInput>, PayeePayerUncheckedUpdateWithoutPayerTransactionsInput>
  }

  export type PayeePayerUpdateOneWithoutPayeeTransactionsNestedInput = {
    create?: XOR<PayeePayerCreateWithoutPayeeTransactionsInput, PayeePayerUncheckedCreateWithoutPayeeTransactionsInput>
    connectOrCreate?: PayeePayerCreateOrConnectWithoutPayeeTransactionsInput
    upsert?: PayeePayerUpsertWithoutPayeeTransactionsInput
    disconnect?: PayeePayerWhereInput | boolean
    delete?: PayeePayerWhereInput | boolean
    connect?: PayeePayerWhereUniqueInput
    update?: XOR<XOR<PayeePayerUpdateToOneWithWhereWithoutPayeeTransactionsInput, PayeePayerUpdateWithoutPayeeTransactionsInput>, PayeePayerUncheckedUpdateWithoutPayeeTransactionsInput>
  }

  export type PaymentMethodUpdateOneWithoutTransactionsNestedInput = {
    create?: XOR<PaymentMethodCreateWithoutTransactionsInput, PaymentMethodUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: PaymentMethodCreateOrConnectWithoutTransactionsInput
    upsert?: PaymentMethodUpsertWithoutTransactionsInput
    disconnect?: PaymentMethodWhereInput | boolean
    delete?: PaymentMethodWhereInput | boolean
    connect?: PaymentMethodWhereUniqueInput
    update?: XOR<XOR<PaymentMethodUpdateToOneWithWhereWithoutTransactionsInput, PaymentMethodUpdateWithoutTransactionsInput>, PaymentMethodUncheckedUpdateWithoutTransactionsInput>
  }

  export type TransactionUncheckedUpdateOneWithoutLinkedTransactionNestedInput = {
    create?: XOR<TransactionCreateWithoutLinkedTransactionInput, TransactionUncheckedCreateWithoutLinkedTransactionInput>
    connectOrCreate?: TransactionCreateOrConnectWithoutLinkedTransactionInput
    upsert?: TransactionUpsertWithoutLinkedTransactionInput
    disconnect?: TransactionWhereInput | boolean
    delete?: TransactionWhereInput | boolean
    connect?: TransactionWhereUniqueInput
    update?: XOR<XOR<TransactionUpdateToOneWithWhereWithoutLinkedTransactionInput, TransactionUpdateWithoutLinkedTransactionInput>, TransactionUncheckedUpdateWithoutLinkedTransactionInput>
  }

  export type UserCreateNestedOneWithoutRecurringTransactionsInput = {
    create?: XOR<UserCreateWithoutRecurringTransactionsInput, UserUncheckedCreateWithoutRecurringTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRecurringTransactionsInput
    connect?: UserWhereUniqueInput
  }

  export type FinanceAccountCreateNestedOneWithoutRecurringTransactionsInput = {
    create?: XOR<FinanceAccountCreateWithoutRecurringTransactionsInput, FinanceAccountUncheckedCreateWithoutRecurringTransactionsInput>
    connectOrCreate?: FinanceAccountCreateOrConnectWithoutRecurringTransactionsInput
    connect?: FinanceAccountWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutRecurringTransactionsInput = {
    create?: XOR<CategoryCreateWithoutRecurringTransactionsInput, CategoryUncheckedCreateWithoutRecurringTransactionsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutRecurringTransactionsInput
    connect?: CategoryWhereUniqueInput
  }

  export type PayeePayerCreateNestedOneWithoutRecurringAsPayerInput = {
    create?: XOR<PayeePayerCreateWithoutRecurringAsPayerInput, PayeePayerUncheckedCreateWithoutRecurringAsPayerInput>
    connectOrCreate?: PayeePayerCreateOrConnectWithoutRecurringAsPayerInput
    connect?: PayeePayerWhereUniqueInput
  }

  export type PayeePayerCreateNestedOneWithoutRecurringAsPayeeInput = {
    create?: XOR<PayeePayerCreateWithoutRecurringAsPayeeInput, PayeePayerUncheckedCreateWithoutRecurringAsPayeeInput>
    connectOrCreate?: PayeePayerCreateOrConnectWithoutRecurringAsPayeeInput
    connect?: PayeePayerWhereUniqueInput
  }

  export type PaymentMethodCreateNestedOneWithoutRecurringTransactionsInput = {
    create?: XOR<PaymentMethodCreateWithoutRecurringTransactionsInput, PaymentMethodUncheckedCreateWithoutRecurringTransactionsInput>
    connectOrCreate?: PaymentMethodCreateOrConnectWithoutRecurringTransactionsInput
    connect?: PaymentMethodWhereUniqueInput
  }

  export type EnumRecurringStatusFieldUpdateOperationsInput = {
    set?: $Enums.RecurringStatus
  }

  export type EnumRecurringFrequencyFieldUpdateOperationsInput = {
    set?: $Enums.RecurringFrequency
  }

  export type UserUpdateOneRequiredWithoutRecurringTransactionsNestedInput = {
    create?: XOR<UserCreateWithoutRecurringTransactionsInput, UserUncheckedCreateWithoutRecurringTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRecurringTransactionsInput
    upsert?: UserUpsertWithoutRecurringTransactionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRecurringTransactionsInput, UserUpdateWithoutRecurringTransactionsInput>, UserUncheckedUpdateWithoutRecurringTransactionsInput>
  }

  export type FinanceAccountUpdateOneRequiredWithoutRecurringTransactionsNestedInput = {
    create?: XOR<FinanceAccountCreateWithoutRecurringTransactionsInput, FinanceAccountUncheckedCreateWithoutRecurringTransactionsInput>
    connectOrCreate?: FinanceAccountCreateOrConnectWithoutRecurringTransactionsInput
    upsert?: FinanceAccountUpsertWithoutRecurringTransactionsInput
    connect?: FinanceAccountWhereUniqueInput
    update?: XOR<XOR<FinanceAccountUpdateToOneWithWhereWithoutRecurringTransactionsInput, FinanceAccountUpdateWithoutRecurringTransactionsInput>, FinanceAccountUncheckedUpdateWithoutRecurringTransactionsInput>
  }

  export type CategoryUpdateOneRequiredWithoutRecurringTransactionsNestedInput = {
    create?: XOR<CategoryCreateWithoutRecurringTransactionsInput, CategoryUncheckedCreateWithoutRecurringTransactionsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutRecurringTransactionsInput
    upsert?: CategoryUpsertWithoutRecurringTransactionsInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutRecurringTransactionsInput, CategoryUpdateWithoutRecurringTransactionsInput>, CategoryUncheckedUpdateWithoutRecurringTransactionsInput>
  }

  export type PayeePayerUpdateOneWithoutRecurringAsPayerNestedInput = {
    create?: XOR<PayeePayerCreateWithoutRecurringAsPayerInput, PayeePayerUncheckedCreateWithoutRecurringAsPayerInput>
    connectOrCreate?: PayeePayerCreateOrConnectWithoutRecurringAsPayerInput
    upsert?: PayeePayerUpsertWithoutRecurringAsPayerInput
    disconnect?: PayeePayerWhereInput | boolean
    delete?: PayeePayerWhereInput | boolean
    connect?: PayeePayerWhereUniqueInput
    update?: XOR<XOR<PayeePayerUpdateToOneWithWhereWithoutRecurringAsPayerInput, PayeePayerUpdateWithoutRecurringAsPayerInput>, PayeePayerUncheckedUpdateWithoutRecurringAsPayerInput>
  }

  export type PayeePayerUpdateOneWithoutRecurringAsPayeeNestedInput = {
    create?: XOR<PayeePayerCreateWithoutRecurringAsPayeeInput, PayeePayerUncheckedCreateWithoutRecurringAsPayeeInput>
    connectOrCreate?: PayeePayerCreateOrConnectWithoutRecurringAsPayeeInput
    upsert?: PayeePayerUpsertWithoutRecurringAsPayeeInput
    disconnect?: PayeePayerWhereInput | boolean
    delete?: PayeePayerWhereInput | boolean
    connect?: PayeePayerWhereUniqueInput
    update?: XOR<XOR<PayeePayerUpdateToOneWithWhereWithoutRecurringAsPayeeInput, PayeePayerUpdateWithoutRecurringAsPayeeInput>, PayeePayerUncheckedUpdateWithoutRecurringAsPayeeInput>
  }

  export type PaymentMethodUpdateOneWithoutRecurringTransactionsNestedInput = {
    create?: XOR<PaymentMethodCreateWithoutRecurringTransactionsInput, PaymentMethodUncheckedCreateWithoutRecurringTransactionsInput>
    connectOrCreate?: PaymentMethodCreateOrConnectWithoutRecurringTransactionsInput
    upsert?: PaymentMethodUpsertWithoutRecurringTransactionsInput
    disconnect?: PaymentMethodWhereInput | boolean
    delete?: PaymentMethodWhereInput | boolean
    connect?: PaymentMethodWhereUniqueInput
    update?: XOR<XOR<PaymentMethodUpdateToOneWithWhereWithoutRecurringTransactionsInput, PaymentMethodUpdateWithoutRecurringTransactionsInput>, PaymentMethodUncheckedUpdateWithoutRecurringTransactionsInput>
  }

  export type UserCreateNestedOneWithoutSettingsInput = {
    create?: XOR<UserCreateWithoutSettingsInput, UserUncheckedCreateWithoutSettingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSettingsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSettingsNestedInput = {
    create?: XOR<UserCreateWithoutSettingsInput, UserUncheckedCreateWithoutSettingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSettingsInput
    upsert?: UserUpsertWithoutSettingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSettingsInput, UserUpdateWithoutSettingsInput>, UserUncheckedUpdateWithoutSettingsInput>
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
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

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
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

  export type NestedEnumCategoryTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CategoryType | EnumCategoryTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CategoryType[] | ListEnumCategoryTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CategoryType[] | ListEnumCategoryTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryTypeFilter<$PrismaModel> | $Enums.CategoryType
  }

  export type NestedEnumCategoryTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CategoryType | EnumCategoryTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CategoryType[] | ListEnumCategoryTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CategoryType[] | ListEnumCategoryTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryTypeWithAggregatesFilter<$PrismaModel> | $Enums.CategoryType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCategoryTypeFilter<$PrismaModel>
    _max?: NestedEnumCategoryTypeFilter<$PrismaModel>
  }

  export type NestedEnumPayeePayerTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PayeePayerType | EnumPayeePayerTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PayeePayerType[] | ListEnumPayeePayerTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PayeePayerType[] | ListEnumPayeePayerTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPayeePayerTypeFilter<$PrismaModel> | $Enums.PayeePayerType
  }

  export type NestedEnumPayeePayerTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PayeePayerType | EnumPayeePayerTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PayeePayerType[] | ListEnumPayeePayerTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PayeePayerType[] | ListEnumPayeePayerTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPayeePayerTypeWithAggregatesFilter<$PrismaModel> | $Enums.PayeePayerType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPayeePayerTypeFilter<$PrismaModel>
    _max?: NestedEnumPayeePayerTypeFilter<$PrismaModel>
  }

  export type NestedEnumTransactionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeFilter<$PrismaModel> | $Enums.TransactionType
  }

  export type NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel> | $Enums.TransactionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionTypeFilter<$PrismaModel>
    _max?: NestedEnumTransactionTypeFilter<$PrismaModel>
  }

  export type NestedEnumRecurringStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RecurringStatus | EnumRecurringStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RecurringStatus[] | ListEnumRecurringStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RecurringStatus[] | ListEnumRecurringStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRecurringStatusFilter<$PrismaModel> | $Enums.RecurringStatus
  }

  export type NestedEnumRecurringFrequencyFilter<$PrismaModel = never> = {
    equals?: $Enums.RecurringFrequency | EnumRecurringFrequencyFieldRefInput<$PrismaModel>
    in?: $Enums.RecurringFrequency[] | ListEnumRecurringFrequencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.RecurringFrequency[] | ListEnumRecurringFrequencyFieldRefInput<$PrismaModel>
    not?: NestedEnumRecurringFrequencyFilter<$PrismaModel> | $Enums.RecurringFrequency
  }

  export type NestedEnumRecurringStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RecurringStatus | EnumRecurringStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RecurringStatus[] | ListEnumRecurringStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RecurringStatus[] | ListEnumRecurringStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRecurringStatusWithAggregatesFilter<$PrismaModel> | $Enums.RecurringStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRecurringStatusFilter<$PrismaModel>
    _max?: NestedEnumRecurringStatusFilter<$PrismaModel>
  }

  export type NestedEnumRecurringFrequencyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RecurringFrequency | EnumRecurringFrequencyFieldRefInput<$PrismaModel>
    in?: $Enums.RecurringFrequency[] | ListEnumRecurringFrequencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.RecurringFrequency[] | ListEnumRecurringFrequencyFieldRefInput<$PrismaModel>
    not?: NestedEnumRecurringFrequencyWithAggregatesFilter<$PrismaModel> | $Enums.RecurringFrequency
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRecurringFrequencyFilter<$PrismaModel>
    _max?: NestedEnumRecurringFrequencyFilter<$PrismaModel>
  }

  export type AccountCreateWithoutUserInput = {
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUserInput = {
    sessionToken: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    sessionToken: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FinanceAccountCreateWithoutUserInput = {
    name: string
    openingBalance?: number
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionCreateNestedManyWithoutAccountInput
    recurringTransactions?: RecurringTransactionCreateNestedManyWithoutAccountInput
    transfersTo?: TransactionCreateNestedManyWithoutTransferToAccountInput
  }

  export type FinanceAccountUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    openingBalance?: number
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionUncheckedCreateNestedManyWithoutAccountInput
    recurringTransactions?: RecurringTransactionUncheckedCreateNestedManyWithoutAccountInput
    transfersTo?: TransactionUncheckedCreateNestedManyWithoutTransferToAccountInput
  }

  export type FinanceAccountCreateOrConnectWithoutUserInput = {
    where: FinanceAccountWhereUniqueInput
    create: XOR<FinanceAccountCreateWithoutUserInput, FinanceAccountUncheckedCreateWithoutUserInput>
  }

  export type FinanceAccountCreateManyUserInputEnvelope = {
    data: FinanceAccountCreateManyUserInput | FinanceAccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CategoryCreateWithoutUserInput = {
    name: string
    type: $Enums.CategoryType
    transactions?: TransactionCreateNestedManyWithoutCategoryInput
    recurringTransactions?: RecurringTransactionCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    type: $Enums.CategoryType
    transactions?: TransactionUncheckedCreateNestedManyWithoutCategoryInput
    recurringTransactions?: RecurringTransactionUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutUserInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutUserInput, CategoryUncheckedCreateWithoutUserInput>
  }

  export type CategoryCreateManyUserInputEnvelope = {
    data: CategoryCreateManyUserInput | CategoryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PayeePayerCreateWithoutUserInput = {
    name: string
    type: $Enums.PayeePayerType
    payerTransactions?: TransactionCreateNestedManyWithoutPayerInput
    payeeTransactions?: TransactionCreateNestedManyWithoutPayeeInput
    recurringAsPayer?: RecurringTransactionCreateNestedManyWithoutPayerInput
    recurringAsPayee?: RecurringTransactionCreateNestedManyWithoutPayeeInput
  }

  export type PayeePayerUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    type: $Enums.PayeePayerType
    payerTransactions?: TransactionUncheckedCreateNestedManyWithoutPayerInput
    payeeTransactions?: TransactionUncheckedCreateNestedManyWithoutPayeeInput
    recurringAsPayer?: RecurringTransactionUncheckedCreateNestedManyWithoutPayerInput
    recurringAsPayee?: RecurringTransactionUncheckedCreateNestedManyWithoutPayeeInput
  }

  export type PayeePayerCreateOrConnectWithoutUserInput = {
    where: PayeePayerWhereUniqueInput
    create: XOR<PayeePayerCreateWithoutUserInput, PayeePayerUncheckedCreateWithoutUserInput>
  }

  export type PayeePayerCreateManyUserInputEnvelope = {
    data: PayeePayerCreateManyUserInput | PayeePayerCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PaymentMethodCreateWithoutUserInput = {
    name: string
    transactions?: TransactionCreateNestedManyWithoutPaymentMethodInput
    recurringTransactions?: RecurringTransactionCreateNestedManyWithoutPaymentMethodInput
  }

  export type PaymentMethodUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    transactions?: TransactionUncheckedCreateNestedManyWithoutPaymentMethodInput
    recurringTransactions?: RecurringTransactionUncheckedCreateNestedManyWithoutPaymentMethodInput
  }

  export type PaymentMethodCreateOrConnectWithoutUserInput = {
    where: PaymentMethodWhereUniqueInput
    create: XOR<PaymentMethodCreateWithoutUserInput, PaymentMethodUncheckedCreateWithoutUserInput>
  }

  export type PaymentMethodCreateManyUserInputEnvelope = {
    data: PaymentMethodCreateManyUserInput | PaymentMethodCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TransactionCreateWithoutUserInput = {
    date: Date | string
    type: $Enums.TransactionType
    amount: number
    reference?: string | null
    note?: string | null
    debit?: number
    credit?: number
    balance?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    linkedTransaction?: TransactionCreateNestedOneWithoutLinkedByInput
    linkedBy?: TransactionCreateNestedOneWithoutLinkedTransactionInput
    transferToAccount?: FinanceAccountCreateNestedOneWithoutTransfersToInput
    account: FinanceAccountCreateNestedOneWithoutTransactionsInput
    category?: CategoryCreateNestedOneWithoutTransactionsInput
    payer?: PayeePayerCreateNestedOneWithoutPayerTransactionsInput
    payee?: PayeePayerCreateNestedOneWithoutPayeeTransactionsInput
    paymentMethod?: PaymentMethodCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateWithoutUserInput = {
    id?: number
    accountId: number
    date: Date | string
    type: $Enums.TransactionType
    categoryId?: number | null
    amount: number
    payerId?: number | null
    payeeId?: number | null
    paymentMethodId?: number | null
    reference?: string | null
    note?: string | null
    debit?: number
    credit?: number
    balance?: number
    linkedTransactionId?: number | null
    transferToAccountId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    linkedBy?: TransactionUncheckedCreateNestedOneWithoutLinkedTransactionInput
  }

  export type TransactionCreateOrConnectWithoutUserInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput>
  }

  export type TransactionCreateManyUserInputEnvelope = {
    data: TransactionCreateManyUserInput | TransactionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RecurringTransactionCreateWithoutUserInput = {
    type: $Enums.TransactionType
    amount: number
    reference?: string | null
    status?: $Enums.RecurringStatus
    description?: string | null
    startDate: Date | string
    nextDate?: Date | string | null
    frequency: $Enums.RecurringFrequency
    createdAt?: Date | string
    updatedAt?: Date | string
    account: FinanceAccountCreateNestedOneWithoutRecurringTransactionsInput
    category: CategoryCreateNestedOneWithoutRecurringTransactionsInput
    payer?: PayeePayerCreateNestedOneWithoutRecurringAsPayerInput
    payee?: PayeePayerCreateNestedOneWithoutRecurringAsPayeeInput
    paymentMethod?: PaymentMethodCreateNestedOneWithoutRecurringTransactionsInput
  }

  export type RecurringTransactionUncheckedCreateWithoutUserInput = {
    id?: number
    accountId: number
    type: $Enums.TransactionType
    categoryId: number
    amount: number
    payerId?: number | null
    payeeId?: number | null
    paymentMethodId?: number | null
    reference?: string | null
    status?: $Enums.RecurringStatus
    description?: string | null
    startDate: Date | string
    nextDate?: Date | string | null
    frequency: $Enums.RecurringFrequency
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RecurringTransactionCreateOrConnectWithoutUserInput = {
    where: RecurringTransactionWhereUniqueInput
    create: XOR<RecurringTransactionCreateWithoutUserInput, RecurringTransactionUncheckedCreateWithoutUserInput>
  }

  export type RecurringTransactionCreateManyUserInputEnvelope = {
    data: RecurringTransactionCreateManyUserInput | RecurringTransactionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SettingsCreateWithoutUserInput = {
    key: string
    value: string
  }

  export type SettingsUncheckedCreateWithoutUserInput = {
    id?: number
    key: string
    value: string
  }

  export type SettingsCreateOrConnectWithoutUserInput = {
    where: SettingsWhereUniqueInput
    create: XOR<SettingsCreateWithoutUserInput, SettingsUncheckedCreateWithoutUserInput>
  }

  export type SettingsCreateManyUserInputEnvelope = {
    data: SettingsCreateManyUserInput | SettingsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
  }

  export type FinanceAccountUpsertWithWhereUniqueWithoutUserInput = {
    where: FinanceAccountWhereUniqueInput
    update: XOR<FinanceAccountUpdateWithoutUserInput, FinanceAccountUncheckedUpdateWithoutUserInput>
    create: XOR<FinanceAccountCreateWithoutUserInput, FinanceAccountUncheckedCreateWithoutUserInput>
  }

  export type FinanceAccountUpdateWithWhereUniqueWithoutUserInput = {
    where: FinanceAccountWhereUniqueInput
    data: XOR<FinanceAccountUpdateWithoutUserInput, FinanceAccountUncheckedUpdateWithoutUserInput>
  }

  export type FinanceAccountUpdateManyWithWhereWithoutUserInput = {
    where: FinanceAccountScalarWhereInput
    data: XOR<FinanceAccountUpdateManyMutationInput, FinanceAccountUncheckedUpdateManyWithoutUserInput>
  }

  export type FinanceAccountScalarWhereInput = {
    AND?: FinanceAccountScalarWhereInput | FinanceAccountScalarWhereInput[]
    OR?: FinanceAccountScalarWhereInput[]
    NOT?: FinanceAccountScalarWhereInput | FinanceAccountScalarWhereInput[]
    id?: IntFilter<"FinanceAccount"> | number
    userId?: StringFilter<"FinanceAccount"> | string
    name?: StringFilter<"FinanceAccount"> | string
    openingBalance?: FloatFilter<"FinanceAccount"> | number
    note?: StringNullableFilter<"FinanceAccount"> | string | null
    createdAt?: DateTimeFilter<"FinanceAccount"> | Date | string
    updatedAt?: DateTimeFilter<"FinanceAccount"> | Date | string
  }

  export type CategoryUpsertWithWhereUniqueWithoutUserInput = {
    where: CategoryWhereUniqueInput
    update: XOR<CategoryUpdateWithoutUserInput, CategoryUncheckedUpdateWithoutUserInput>
    create: XOR<CategoryCreateWithoutUserInput, CategoryUncheckedCreateWithoutUserInput>
  }

  export type CategoryUpdateWithWhereUniqueWithoutUserInput = {
    where: CategoryWhereUniqueInput
    data: XOR<CategoryUpdateWithoutUserInput, CategoryUncheckedUpdateWithoutUserInput>
  }

  export type CategoryUpdateManyWithWhereWithoutUserInput = {
    where: CategoryScalarWhereInput
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyWithoutUserInput>
  }

  export type CategoryScalarWhereInput = {
    AND?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    OR?: CategoryScalarWhereInput[]
    NOT?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    id?: IntFilter<"Category"> | number
    userId?: StringFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    type?: EnumCategoryTypeFilter<"Category"> | $Enums.CategoryType
  }

  export type PayeePayerUpsertWithWhereUniqueWithoutUserInput = {
    where: PayeePayerWhereUniqueInput
    update: XOR<PayeePayerUpdateWithoutUserInput, PayeePayerUncheckedUpdateWithoutUserInput>
    create: XOR<PayeePayerCreateWithoutUserInput, PayeePayerUncheckedCreateWithoutUserInput>
  }

  export type PayeePayerUpdateWithWhereUniqueWithoutUserInput = {
    where: PayeePayerWhereUniqueInput
    data: XOR<PayeePayerUpdateWithoutUserInput, PayeePayerUncheckedUpdateWithoutUserInput>
  }

  export type PayeePayerUpdateManyWithWhereWithoutUserInput = {
    where: PayeePayerScalarWhereInput
    data: XOR<PayeePayerUpdateManyMutationInput, PayeePayerUncheckedUpdateManyWithoutUserInput>
  }

  export type PayeePayerScalarWhereInput = {
    AND?: PayeePayerScalarWhereInput | PayeePayerScalarWhereInput[]
    OR?: PayeePayerScalarWhereInput[]
    NOT?: PayeePayerScalarWhereInput | PayeePayerScalarWhereInput[]
    id?: IntFilter<"PayeePayer"> | number
    userId?: StringFilter<"PayeePayer"> | string
    name?: StringFilter<"PayeePayer"> | string
    type?: EnumPayeePayerTypeFilter<"PayeePayer"> | $Enums.PayeePayerType
  }

  export type PaymentMethodUpsertWithWhereUniqueWithoutUserInput = {
    where: PaymentMethodWhereUniqueInput
    update: XOR<PaymentMethodUpdateWithoutUserInput, PaymentMethodUncheckedUpdateWithoutUserInput>
    create: XOR<PaymentMethodCreateWithoutUserInput, PaymentMethodUncheckedCreateWithoutUserInput>
  }

  export type PaymentMethodUpdateWithWhereUniqueWithoutUserInput = {
    where: PaymentMethodWhereUniqueInput
    data: XOR<PaymentMethodUpdateWithoutUserInput, PaymentMethodUncheckedUpdateWithoutUserInput>
  }

  export type PaymentMethodUpdateManyWithWhereWithoutUserInput = {
    where: PaymentMethodScalarWhereInput
    data: XOR<PaymentMethodUpdateManyMutationInput, PaymentMethodUncheckedUpdateManyWithoutUserInput>
  }

  export type PaymentMethodScalarWhereInput = {
    AND?: PaymentMethodScalarWhereInput | PaymentMethodScalarWhereInput[]
    OR?: PaymentMethodScalarWhereInput[]
    NOT?: PaymentMethodScalarWhereInput | PaymentMethodScalarWhereInput[]
    id?: IntFilter<"PaymentMethod"> | number
    userId?: StringFilter<"PaymentMethod"> | string
    name?: StringFilter<"PaymentMethod"> | string
  }

  export type TransactionUpsertWithWhereUniqueWithoutUserInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutUserInput, TransactionUncheckedUpdateWithoutUserInput>
    create: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutUserInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutUserInput, TransactionUncheckedUpdateWithoutUserInput>
  }

  export type TransactionUpdateManyWithWhereWithoutUserInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutUserInput>
  }

  export type TransactionScalarWhereInput = {
    AND?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    OR?: TransactionScalarWhereInput[]
    NOT?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    id?: IntFilter<"Transaction"> | number
    userId?: StringFilter<"Transaction"> | string
    accountId?: IntFilter<"Transaction"> | number
    date?: DateTimeFilter<"Transaction"> | Date | string
    type?: EnumTransactionTypeFilter<"Transaction"> | $Enums.TransactionType
    categoryId?: IntNullableFilter<"Transaction"> | number | null
    amount?: FloatFilter<"Transaction"> | number
    payerId?: IntNullableFilter<"Transaction"> | number | null
    payeeId?: IntNullableFilter<"Transaction"> | number | null
    paymentMethodId?: IntNullableFilter<"Transaction"> | number | null
    reference?: StringNullableFilter<"Transaction"> | string | null
    note?: StringNullableFilter<"Transaction"> | string | null
    debit?: FloatFilter<"Transaction"> | number
    credit?: FloatFilter<"Transaction"> | number
    balance?: FloatFilter<"Transaction"> | number
    linkedTransactionId?: IntNullableFilter<"Transaction"> | number | null
    transferToAccountId?: IntNullableFilter<"Transaction"> | number | null
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeFilter<"Transaction"> | Date | string
  }

  export type RecurringTransactionUpsertWithWhereUniqueWithoutUserInput = {
    where: RecurringTransactionWhereUniqueInput
    update: XOR<RecurringTransactionUpdateWithoutUserInput, RecurringTransactionUncheckedUpdateWithoutUserInput>
    create: XOR<RecurringTransactionCreateWithoutUserInput, RecurringTransactionUncheckedCreateWithoutUserInput>
  }

  export type RecurringTransactionUpdateWithWhereUniqueWithoutUserInput = {
    where: RecurringTransactionWhereUniqueInput
    data: XOR<RecurringTransactionUpdateWithoutUserInput, RecurringTransactionUncheckedUpdateWithoutUserInput>
  }

  export type RecurringTransactionUpdateManyWithWhereWithoutUserInput = {
    where: RecurringTransactionScalarWhereInput
    data: XOR<RecurringTransactionUpdateManyMutationInput, RecurringTransactionUncheckedUpdateManyWithoutUserInput>
  }

  export type RecurringTransactionScalarWhereInput = {
    AND?: RecurringTransactionScalarWhereInput | RecurringTransactionScalarWhereInput[]
    OR?: RecurringTransactionScalarWhereInput[]
    NOT?: RecurringTransactionScalarWhereInput | RecurringTransactionScalarWhereInput[]
    id?: IntFilter<"RecurringTransaction"> | number
    userId?: StringFilter<"RecurringTransaction"> | string
    accountId?: IntFilter<"RecurringTransaction"> | number
    type?: EnumTransactionTypeFilter<"RecurringTransaction"> | $Enums.TransactionType
    categoryId?: IntFilter<"RecurringTransaction"> | number
    amount?: FloatFilter<"RecurringTransaction"> | number
    payerId?: IntNullableFilter<"RecurringTransaction"> | number | null
    payeeId?: IntNullableFilter<"RecurringTransaction"> | number | null
    paymentMethodId?: IntNullableFilter<"RecurringTransaction"> | number | null
    reference?: StringNullableFilter<"RecurringTransaction"> | string | null
    status?: EnumRecurringStatusFilter<"RecurringTransaction"> | $Enums.RecurringStatus
    description?: StringNullableFilter<"RecurringTransaction"> | string | null
    startDate?: DateTimeFilter<"RecurringTransaction"> | Date | string
    nextDate?: DateTimeNullableFilter<"RecurringTransaction"> | Date | string | null
    frequency?: EnumRecurringFrequencyFilter<"RecurringTransaction"> | $Enums.RecurringFrequency
    createdAt?: DateTimeFilter<"RecurringTransaction"> | Date | string
    updatedAt?: DateTimeFilter<"RecurringTransaction"> | Date | string
  }

  export type SettingsUpsertWithWhereUniqueWithoutUserInput = {
    where: SettingsWhereUniqueInput
    update: XOR<SettingsUpdateWithoutUserInput, SettingsUncheckedUpdateWithoutUserInput>
    create: XOR<SettingsCreateWithoutUserInput, SettingsUncheckedCreateWithoutUserInput>
  }

  export type SettingsUpdateWithWhereUniqueWithoutUserInput = {
    where: SettingsWhereUniqueInput
    data: XOR<SettingsUpdateWithoutUserInput, SettingsUncheckedUpdateWithoutUserInput>
  }

  export type SettingsUpdateManyWithWhereWithoutUserInput = {
    where: SettingsScalarWhereInput
    data: XOR<SettingsUpdateManyMutationInput, SettingsUncheckedUpdateManyWithoutUserInput>
  }

  export type SettingsScalarWhereInput = {
    AND?: SettingsScalarWhereInput | SettingsScalarWhereInput[]
    OR?: SettingsScalarWhereInput[]
    NOT?: SettingsScalarWhereInput | SettingsScalarWhereInput[]
    id?: IntFilter<"Settings"> | number
    userId?: StringFilter<"Settings"> | string
    key?: StringFilter<"Settings"> | string
    value?: StringFilter<"Settings"> | string
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    password: string
    role?: $Enums.UserRole
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    financeAccounts?: FinanceAccountCreateNestedManyWithoutUserInput
    categories?: CategoryCreateNestedManyWithoutUserInput
    payeesPayers?: PayeePayerCreateNestedManyWithoutUserInput
    paymentMethods?: PaymentMethodCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    recurringTransactions?: RecurringTransactionCreateNestedManyWithoutUserInput
    settings?: SettingsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    password: string
    role?: $Enums.UserRole
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    financeAccounts?: FinanceAccountUncheckedCreateNestedManyWithoutUserInput
    categories?: CategoryUncheckedCreateNestedManyWithoutUserInput
    payeesPayers?: PayeePayerUncheckedCreateNestedManyWithoutUserInput
    paymentMethods?: PaymentMethodUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    recurringTransactions?: RecurringTransactionUncheckedCreateNestedManyWithoutUserInput
    settings?: SettingsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    financeAccounts?: FinanceAccountUpdateManyWithoutUserNestedInput
    categories?: CategoryUpdateManyWithoutUserNestedInput
    payeesPayers?: PayeePayerUpdateManyWithoutUserNestedInput
    paymentMethods?: PaymentMethodUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    recurringTransactions?: RecurringTransactionUpdateManyWithoutUserNestedInput
    settings?: SettingsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    financeAccounts?: FinanceAccountUncheckedUpdateManyWithoutUserNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutUserNestedInput
    payeesPayers?: PayeePayerUncheckedUpdateManyWithoutUserNestedInput
    paymentMethods?: PaymentMethodUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    recurringTransactions?: RecurringTransactionUncheckedUpdateManyWithoutUserNestedInput
    settings?: SettingsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    password: string
    role?: $Enums.UserRole
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    financeAccounts?: FinanceAccountCreateNestedManyWithoutUserInput
    categories?: CategoryCreateNestedManyWithoutUserInput
    payeesPayers?: PayeePayerCreateNestedManyWithoutUserInput
    paymentMethods?: PaymentMethodCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    recurringTransactions?: RecurringTransactionCreateNestedManyWithoutUserInput
    settings?: SettingsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    password: string
    role?: $Enums.UserRole
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    financeAccounts?: FinanceAccountUncheckedCreateNestedManyWithoutUserInput
    categories?: CategoryUncheckedCreateNestedManyWithoutUserInput
    payeesPayers?: PayeePayerUncheckedCreateNestedManyWithoutUserInput
    paymentMethods?: PaymentMethodUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    recurringTransactions?: RecurringTransactionUncheckedCreateNestedManyWithoutUserInput
    settings?: SettingsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    financeAccounts?: FinanceAccountUpdateManyWithoutUserNestedInput
    categories?: CategoryUpdateManyWithoutUserNestedInput
    payeesPayers?: PayeePayerUpdateManyWithoutUserNestedInput
    paymentMethods?: PaymentMethodUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    recurringTransactions?: RecurringTransactionUpdateManyWithoutUserNestedInput
    settings?: SettingsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    financeAccounts?: FinanceAccountUncheckedUpdateManyWithoutUserNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutUserNestedInput
    payeesPayers?: PayeePayerUncheckedUpdateManyWithoutUserNestedInput
    paymentMethods?: PaymentMethodUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    recurringTransactions?: RecurringTransactionUncheckedUpdateManyWithoutUserNestedInput
    settings?: SettingsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutFinanceAccountsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    password: string
    role?: $Enums.UserRole
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    categories?: CategoryCreateNestedManyWithoutUserInput
    payeesPayers?: PayeePayerCreateNestedManyWithoutUserInput
    paymentMethods?: PaymentMethodCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    recurringTransactions?: RecurringTransactionCreateNestedManyWithoutUserInput
    settings?: SettingsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFinanceAccountsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    password: string
    role?: $Enums.UserRole
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    categories?: CategoryUncheckedCreateNestedManyWithoutUserInput
    payeesPayers?: PayeePayerUncheckedCreateNestedManyWithoutUserInput
    paymentMethods?: PaymentMethodUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    recurringTransactions?: RecurringTransactionUncheckedCreateNestedManyWithoutUserInput
    settings?: SettingsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFinanceAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFinanceAccountsInput, UserUncheckedCreateWithoutFinanceAccountsInput>
  }

  export type TransactionCreateWithoutAccountInput = {
    date: Date | string
    type: $Enums.TransactionType
    amount: number
    reference?: string | null
    note?: string | null
    debit?: number
    credit?: number
    balance?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    linkedTransaction?: TransactionCreateNestedOneWithoutLinkedByInput
    linkedBy?: TransactionCreateNestedOneWithoutLinkedTransactionInput
    transferToAccount?: FinanceAccountCreateNestedOneWithoutTransfersToInput
    user: UserCreateNestedOneWithoutTransactionsInput
    category?: CategoryCreateNestedOneWithoutTransactionsInput
    payer?: PayeePayerCreateNestedOneWithoutPayerTransactionsInput
    payee?: PayeePayerCreateNestedOneWithoutPayeeTransactionsInput
    paymentMethod?: PaymentMethodCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateWithoutAccountInput = {
    id?: number
    userId: string
    date: Date | string
    type: $Enums.TransactionType
    categoryId?: number | null
    amount: number
    payerId?: number | null
    payeeId?: number | null
    paymentMethodId?: number | null
    reference?: string | null
    note?: string | null
    debit?: number
    credit?: number
    balance?: number
    linkedTransactionId?: number | null
    transferToAccountId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    linkedBy?: TransactionUncheckedCreateNestedOneWithoutLinkedTransactionInput
  }

  export type TransactionCreateOrConnectWithoutAccountInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutAccountInput, TransactionUncheckedCreateWithoutAccountInput>
  }

  export type TransactionCreateManyAccountInputEnvelope = {
    data: TransactionCreateManyAccountInput | TransactionCreateManyAccountInput[]
    skipDuplicates?: boolean
  }

  export type RecurringTransactionCreateWithoutAccountInput = {
    type: $Enums.TransactionType
    amount: number
    reference?: string | null
    status?: $Enums.RecurringStatus
    description?: string | null
    startDate: Date | string
    nextDate?: Date | string | null
    frequency: $Enums.RecurringFrequency
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutRecurringTransactionsInput
    category: CategoryCreateNestedOneWithoutRecurringTransactionsInput
    payer?: PayeePayerCreateNestedOneWithoutRecurringAsPayerInput
    payee?: PayeePayerCreateNestedOneWithoutRecurringAsPayeeInput
    paymentMethod?: PaymentMethodCreateNestedOneWithoutRecurringTransactionsInput
  }

  export type RecurringTransactionUncheckedCreateWithoutAccountInput = {
    id?: number
    userId: string
    type: $Enums.TransactionType
    categoryId: number
    amount: number
    payerId?: number | null
    payeeId?: number | null
    paymentMethodId?: number | null
    reference?: string | null
    status?: $Enums.RecurringStatus
    description?: string | null
    startDate: Date | string
    nextDate?: Date | string | null
    frequency: $Enums.RecurringFrequency
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RecurringTransactionCreateOrConnectWithoutAccountInput = {
    where: RecurringTransactionWhereUniqueInput
    create: XOR<RecurringTransactionCreateWithoutAccountInput, RecurringTransactionUncheckedCreateWithoutAccountInput>
  }

  export type RecurringTransactionCreateManyAccountInputEnvelope = {
    data: RecurringTransactionCreateManyAccountInput | RecurringTransactionCreateManyAccountInput[]
    skipDuplicates?: boolean
  }

  export type TransactionCreateWithoutTransferToAccountInput = {
    date: Date | string
    type: $Enums.TransactionType
    amount: number
    reference?: string | null
    note?: string | null
    debit?: number
    credit?: number
    balance?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    linkedTransaction?: TransactionCreateNestedOneWithoutLinkedByInput
    linkedBy?: TransactionCreateNestedOneWithoutLinkedTransactionInput
    user: UserCreateNestedOneWithoutTransactionsInput
    account: FinanceAccountCreateNestedOneWithoutTransactionsInput
    category?: CategoryCreateNestedOneWithoutTransactionsInput
    payer?: PayeePayerCreateNestedOneWithoutPayerTransactionsInput
    payee?: PayeePayerCreateNestedOneWithoutPayeeTransactionsInput
    paymentMethod?: PaymentMethodCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateWithoutTransferToAccountInput = {
    id?: number
    userId: string
    accountId: number
    date: Date | string
    type: $Enums.TransactionType
    categoryId?: number | null
    amount: number
    payerId?: number | null
    payeeId?: number | null
    paymentMethodId?: number | null
    reference?: string | null
    note?: string | null
    debit?: number
    credit?: number
    balance?: number
    linkedTransactionId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    linkedBy?: TransactionUncheckedCreateNestedOneWithoutLinkedTransactionInput
  }

  export type TransactionCreateOrConnectWithoutTransferToAccountInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutTransferToAccountInput, TransactionUncheckedCreateWithoutTransferToAccountInput>
  }

  export type TransactionCreateManyTransferToAccountInputEnvelope = {
    data: TransactionCreateManyTransferToAccountInput | TransactionCreateManyTransferToAccountInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutFinanceAccountsInput = {
    update: XOR<UserUpdateWithoutFinanceAccountsInput, UserUncheckedUpdateWithoutFinanceAccountsInput>
    create: XOR<UserCreateWithoutFinanceAccountsInput, UserUncheckedCreateWithoutFinanceAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFinanceAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFinanceAccountsInput, UserUncheckedUpdateWithoutFinanceAccountsInput>
  }

  export type UserUpdateWithoutFinanceAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    categories?: CategoryUpdateManyWithoutUserNestedInput
    payeesPayers?: PayeePayerUpdateManyWithoutUserNestedInput
    paymentMethods?: PaymentMethodUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    recurringTransactions?: RecurringTransactionUpdateManyWithoutUserNestedInput
    settings?: SettingsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFinanceAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutUserNestedInput
    payeesPayers?: PayeePayerUncheckedUpdateManyWithoutUserNestedInput
    paymentMethods?: PaymentMethodUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    recurringTransactions?: RecurringTransactionUncheckedUpdateManyWithoutUserNestedInput
    settings?: SettingsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TransactionUpsertWithWhereUniqueWithoutAccountInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutAccountInput, TransactionUncheckedUpdateWithoutAccountInput>
    create: XOR<TransactionCreateWithoutAccountInput, TransactionUncheckedCreateWithoutAccountInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutAccountInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutAccountInput, TransactionUncheckedUpdateWithoutAccountInput>
  }

  export type TransactionUpdateManyWithWhereWithoutAccountInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutAccountInput>
  }

  export type RecurringTransactionUpsertWithWhereUniqueWithoutAccountInput = {
    where: RecurringTransactionWhereUniqueInput
    update: XOR<RecurringTransactionUpdateWithoutAccountInput, RecurringTransactionUncheckedUpdateWithoutAccountInput>
    create: XOR<RecurringTransactionCreateWithoutAccountInput, RecurringTransactionUncheckedCreateWithoutAccountInput>
  }

  export type RecurringTransactionUpdateWithWhereUniqueWithoutAccountInput = {
    where: RecurringTransactionWhereUniqueInput
    data: XOR<RecurringTransactionUpdateWithoutAccountInput, RecurringTransactionUncheckedUpdateWithoutAccountInput>
  }

  export type RecurringTransactionUpdateManyWithWhereWithoutAccountInput = {
    where: RecurringTransactionScalarWhereInput
    data: XOR<RecurringTransactionUpdateManyMutationInput, RecurringTransactionUncheckedUpdateManyWithoutAccountInput>
  }

  export type TransactionUpsertWithWhereUniqueWithoutTransferToAccountInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutTransferToAccountInput, TransactionUncheckedUpdateWithoutTransferToAccountInput>
    create: XOR<TransactionCreateWithoutTransferToAccountInput, TransactionUncheckedCreateWithoutTransferToAccountInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutTransferToAccountInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutTransferToAccountInput, TransactionUncheckedUpdateWithoutTransferToAccountInput>
  }

  export type TransactionUpdateManyWithWhereWithoutTransferToAccountInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutTransferToAccountInput>
  }

  export type UserCreateWithoutCategoriesInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    password: string
    role?: $Enums.UserRole
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    financeAccounts?: FinanceAccountCreateNestedManyWithoutUserInput
    payeesPayers?: PayeePayerCreateNestedManyWithoutUserInput
    paymentMethods?: PaymentMethodCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    recurringTransactions?: RecurringTransactionCreateNestedManyWithoutUserInput
    settings?: SettingsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCategoriesInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    password: string
    role?: $Enums.UserRole
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    financeAccounts?: FinanceAccountUncheckedCreateNestedManyWithoutUserInput
    payeesPayers?: PayeePayerUncheckedCreateNestedManyWithoutUserInput
    paymentMethods?: PaymentMethodUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    recurringTransactions?: RecurringTransactionUncheckedCreateNestedManyWithoutUserInput
    settings?: SettingsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCategoriesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCategoriesInput, UserUncheckedCreateWithoutCategoriesInput>
  }

  export type TransactionCreateWithoutCategoryInput = {
    date: Date | string
    type: $Enums.TransactionType
    amount: number
    reference?: string | null
    note?: string | null
    debit?: number
    credit?: number
    balance?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    linkedTransaction?: TransactionCreateNestedOneWithoutLinkedByInput
    linkedBy?: TransactionCreateNestedOneWithoutLinkedTransactionInput
    transferToAccount?: FinanceAccountCreateNestedOneWithoutTransfersToInput
    user: UserCreateNestedOneWithoutTransactionsInput
    account: FinanceAccountCreateNestedOneWithoutTransactionsInput
    payer?: PayeePayerCreateNestedOneWithoutPayerTransactionsInput
    payee?: PayeePayerCreateNestedOneWithoutPayeeTransactionsInput
    paymentMethod?: PaymentMethodCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateWithoutCategoryInput = {
    id?: number
    userId: string
    accountId: number
    date: Date | string
    type: $Enums.TransactionType
    amount: number
    payerId?: number | null
    payeeId?: number | null
    paymentMethodId?: number | null
    reference?: string | null
    note?: string | null
    debit?: number
    credit?: number
    balance?: number
    linkedTransactionId?: number | null
    transferToAccountId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    linkedBy?: TransactionUncheckedCreateNestedOneWithoutLinkedTransactionInput
  }

  export type TransactionCreateOrConnectWithoutCategoryInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutCategoryInput, TransactionUncheckedCreateWithoutCategoryInput>
  }

  export type TransactionCreateManyCategoryInputEnvelope = {
    data: TransactionCreateManyCategoryInput | TransactionCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type RecurringTransactionCreateWithoutCategoryInput = {
    type: $Enums.TransactionType
    amount: number
    reference?: string | null
    status?: $Enums.RecurringStatus
    description?: string | null
    startDate: Date | string
    nextDate?: Date | string | null
    frequency: $Enums.RecurringFrequency
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutRecurringTransactionsInput
    account: FinanceAccountCreateNestedOneWithoutRecurringTransactionsInput
    payer?: PayeePayerCreateNestedOneWithoutRecurringAsPayerInput
    payee?: PayeePayerCreateNestedOneWithoutRecurringAsPayeeInput
    paymentMethod?: PaymentMethodCreateNestedOneWithoutRecurringTransactionsInput
  }

  export type RecurringTransactionUncheckedCreateWithoutCategoryInput = {
    id?: number
    userId: string
    accountId: number
    type: $Enums.TransactionType
    amount: number
    payerId?: number | null
    payeeId?: number | null
    paymentMethodId?: number | null
    reference?: string | null
    status?: $Enums.RecurringStatus
    description?: string | null
    startDate: Date | string
    nextDate?: Date | string | null
    frequency: $Enums.RecurringFrequency
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RecurringTransactionCreateOrConnectWithoutCategoryInput = {
    where: RecurringTransactionWhereUniqueInput
    create: XOR<RecurringTransactionCreateWithoutCategoryInput, RecurringTransactionUncheckedCreateWithoutCategoryInput>
  }

  export type RecurringTransactionCreateManyCategoryInputEnvelope = {
    data: RecurringTransactionCreateManyCategoryInput | RecurringTransactionCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCategoriesInput = {
    update: XOR<UserUpdateWithoutCategoriesInput, UserUncheckedUpdateWithoutCategoriesInput>
    create: XOR<UserCreateWithoutCategoriesInput, UserUncheckedCreateWithoutCategoriesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCategoriesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCategoriesInput, UserUncheckedUpdateWithoutCategoriesInput>
  }

  export type UserUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    financeAccounts?: FinanceAccountUpdateManyWithoutUserNestedInput
    payeesPayers?: PayeePayerUpdateManyWithoutUserNestedInput
    paymentMethods?: PaymentMethodUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    recurringTransactions?: RecurringTransactionUpdateManyWithoutUserNestedInput
    settings?: SettingsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    financeAccounts?: FinanceAccountUncheckedUpdateManyWithoutUserNestedInput
    payeesPayers?: PayeePayerUncheckedUpdateManyWithoutUserNestedInput
    paymentMethods?: PaymentMethodUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    recurringTransactions?: RecurringTransactionUncheckedUpdateManyWithoutUserNestedInput
    settings?: SettingsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TransactionUpsertWithWhereUniqueWithoutCategoryInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutCategoryInput, TransactionUncheckedUpdateWithoutCategoryInput>
    create: XOR<TransactionCreateWithoutCategoryInput, TransactionUncheckedCreateWithoutCategoryInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutCategoryInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutCategoryInput, TransactionUncheckedUpdateWithoutCategoryInput>
  }

  export type TransactionUpdateManyWithWhereWithoutCategoryInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutCategoryInput>
  }

  export type RecurringTransactionUpsertWithWhereUniqueWithoutCategoryInput = {
    where: RecurringTransactionWhereUniqueInput
    update: XOR<RecurringTransactionUpdateWithoutCategoryInput, RecurringTransactionUncheckedUpdateWithoutCategoryInput>
    create: XOR<RecurringTransactionCreateWithoutCategoryInput, RecurringTransactionUncheckedCreateWithoutCategoryInput>
  }

  export type RecurringTransactionUpdateWithWhereUniqueWithoutCategoryInput = {
    where: RecurringTransactionWhereUniqueInput
    data: XOR<RecurringTransactionUpdateWithoutCategoryInput, RecurringTransactionUncheckedUpdateWithoutCategoryInput>
  }

  export type RecurringTransactionUpdateManyWithWhereWithoutCategoryInput = {
    where: RecurringTransactionScalarWhereInput
    data: XOR<RecurringTransactionUpdateManyMutationInput, RecurringTransactionUncheckedUpdateManyWithoutCategoryInput>
  }

  export type UserCreateWithoutPayeesPayersInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    password: string
    role?: $Enums.UserRole
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    financeAccounts?: FinanceAccountCreateNestedManyWithoutUserInput
    categories?: CategoryCreateNestedManyWithoutUserInput
    paymentMethods?: PaymentMethodCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    recurringTransactions?: RecurringTransactionCreateNestedManyWithoutUserInput
    settings?: SettingsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPayeesPayersInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    password: string
    role?: $Enums.UserRole
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    financeAccounts?: FinanceAccountUncheckedCreateNestedManyWithoutUserInput
    categories?: CategoryUncheckedCreateNestedManyWithoutUserInput
    paymentMethods?: PaymentMethodUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    recurringTransactions?: RecurringTransactionUncheckedCreateNestedManyWithoutUserInput
    settings?: SettingsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPayeesPayersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPayeesPayersInput, UserUncheckedCreateWithoutPayeesPayersInput>
  }

  export type TransactionCreateWithoutPayerInput = {
    date: Date | string
    type: $Enums.TransactionType
    amount: number
    reference?: string | null
    note?: string | null
    debit?: number
    credit?: number
    balance?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    linkedTransaction?: TransactionCreateNestedOneWithoutLinkedByInput
    linkedBy?: TransactionCreateNestedOneWithoutLinkedTransactionInput
    transferToAccount?: FinanceAccountCreateNestedOneWithoutTransfersToInput
    user: UserCreateNestedOneWithoutTransactionsInput
    account: FinanceAccountCreateNestedOneWithoutTransactionsInput
    category?: CategoryCreateNestedOneWithoutTransactionsInput
    payee?: PayeePayerCreateNestedOneWithoutPayeeTransactionsInput
    paymentMethod?: PaymentMethodCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateWithoutPayerInput = {
    id?: number
    userId: string
    accountId: number
    date: Date | string
    type: $Enums.TransactionType
    categoryId?: number | null
    amount: number
    payeeId?: number | null
    paymentMethodId?: number | null
    reference?: string | null
    note?: string | null
    debit?: number
    credit?: number
    balance?: number
    linkedTransactionId?: number | null
    transferToAccountId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    linkedBy?: TransactionUncheckedCreateNestedOneWithoutLinkedTransactionInput
  }

  export type TransactionCreateOrConnectWithoutPayerInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutPayerInput, TransactionUncheckedCreateWithoutPayerInput>
  }

  export type TransactionCreateManyPayerInputEnvelope = {
    data: TransactionCreateManyPayerInput | TransactionCreateManyPayerInput[]
    skipDuplicates?: boolean
  }

  export type TransactionCreateWithoutPayeeInput = {
    date: Date | string
    type: $Enums.TransactionType
    amount: number
    reference?: string | null
    note?: string | null
    debit?: number
    credit?: number
    balance?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    linkedTransaction?: TransactionCreateNestedOneWithoutLinkedByInput
    linkedBy?: TransactionCreateNestedOneWithoutLinkedTransactionInput
    transferToAccount?: FinanceAccountCreateNestedOneWithoutTransfersToInput
    user: UserCreateNestedOneWithoutTransactionsInput
    account: FinanceAccountCreateNestedOneWithoutTransactionsInput
    category?: CategoryCreateNestedOneWithoutTransactionsInput
    payer?: PayeePayerCreateNestedOneWithoutPayerTransactionsInput
    paymentMethod?: PaymentMethodCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateWithoutPayeeInput = {
    id?: number
    userId: string
    accountId: number
    date: Date | string
    type: $Enums.TransactionType
    categoryId?: number | null
    amount: number
    payerId?: number | null
    paymentMethodId?: number | null
    reference?: string | null
    note?: string | null
    debit?: number
    credit?: number
    balance?: number
    linkedTransactionId?: number | null
    transferToAccountId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    linkedBy?: TransactionUncheckedCreateNestedOneWithoutLinkedTransactionInput
  }

  export type TransactionCreateOrConnectWithoutPayeeInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutPayeeInput, TransactionUncheckedCreateWithoutPayeeInput>
  }

  export type TransactionCreateManyPayeeInputEnvelope = {
    data: TransactionCreateManyPayeeInput | TransactionCreateManyPayeeInput[]
    skipDuplicates?: boolean
  }

  export type RecurringTransactionCreateWithoutPayerInput = {
    type: $Enums.TransactionType
    amount: number
    reference?: string | null
    status?: $Enums.RecurringStatus
    description?: string | null
    startDate: Date | string
    nextDate?: Date | string | null
    frequency: $Enums.RecurringFrequency
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutRecurringTransactionsInput
    account: FinanceAccountCreateNestedOneWithoutRecurringTransactionsInput
    category: CategoryCreateNestedOneWithoutRecurringTransactionsInput
    payee?: PayeePayerCreateNestedOneWithoutRecurringAsPayeeInput
    paymentMethod?: PaymentMethodCreateNestedOneWithoutRecurringTransactionsInput
  }

  export type RecurringTransactionUncheckedCreateWithoutPayerInput = {
    id?: number
    userId: string
    accountId: number
    type: $Enums.TransactionType
    categoryId: number
    amount: number
    payeeId?: number | null
    paymentMethodId?: number | null
    reference?: string | null
    status?: $Enums.RecurringStatus
    description?: string | null
    startDate: Date | string
    nextDate?: Date | string | null
    frequency: $Enums.RecurringFrequency
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RecurringTransactionCreateOrConnectWithoutPayerInput = {
    where: RecurringTransactionWhereUniqueInput
    create: XOR<RecurringTransactionCreateWithoutPayerInput, RecurringTransactionUncheckedCreateWithoutPayerInput>
  }

  export type RecurringTransactionCreateManyPayerInputEnvelope = {
    data: RecurringTransactionCreateManyPayerInput | RecurringTransactionCreateManyPayerInput[]
    skipDuplicates?: boolean
  }

  export type RecurringTransactionCreateWithoutPayeeInput = {
    type: $Enums.TransactionType
    amount: number
    reference?: string | null
    status?: $Enums.RecurringStatus
    description?: string | null
    startDate: Date | string
    nextDate?: Date | string | null
    frequency: $Enums.RecurringFrequency
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutRecurringTransactionsInput
    account: FinanceAccountCreateNestedOneWithoutRecurringTransactionsInput
    category: CategoryCreateNestedOneWithoutRecurringTransactionsInput
    payer?: PayeePayerCreateNestedOneWithoutRecurringAsPayerInput
    paymentMethod?: PaymentMethodCreateNestedOneWithoutRecurringTransactionsInput
  }

  export type RecurringTransactionUncheckedCreateWithoutPayeeInput = {
    id?: number
    userId: string
    accountId: number
    type: $Enums.TransactionType
    categoryId: number
    amount: number
    payerId?: number | null
    paymentMethodId?: number | null
    reference?: string | null
    status?: $Enums.RecurringStatus
    description?: string | null
    startDate: Date | string
    nextDate?: Date | string | null
    frequency: $Enums.RecurringFrequency
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RecurringTransactionCreateOrConnectWithoutPayeeInput = {
    where: RecurringTransactionWhereUniqueInput
    create: XOR<RecurringTransactionCreateWithoutPayeeInput, RecurringTransactionUncheckedCreateWithoutPayeeInput>
  }

  export type RecurringTransactionCreateManyPayeeInputEnvelope = {
    data: RecurringTransactionCreateManyPayeeInput | RecurringTransactionCreateManyPayeeInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutPayeesPayersInput = {
    update: XOR<UserUpdateWithoutPayeesPayersInput, UserUncheckedUpdateWithoutPayeesPayersInput>
    create: XOR<UserCreateWithoutPayeesPayersInput, UserUncheckedCreateWithoutPayeesPayersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPayeesPayersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPayeesPayersInput, UserUncheckedUpdateWithoutPayeesPayersInput>
  }

  export type UserUpdateWithoutPayeesPayersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    financeAccounts?: FinanceAccountUpdateManyWithoutUserNestedInput
    categories?: CategoryUpdateManyWithoutUserNestedInput
    paymentMethods?: PaymentMethodUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    recurringTransactions?: RecurringTransactionUpdateManyWithoutUserNestedInput
    settings?: SettingsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPayeesPayersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    financeAccounts?: FinanceAccountUncheckedUpdateManyWithoutUserNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutUserNestedInput
    paymentMethods?: PaymentMethodUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    recurringTransactions?: RecurringTransactionUncheckedUpdateManyWithoutUserNestedInput
    settings?: SettingsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TransactionUpsertWithWhereUniqueWithoutPayerInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutPayerInput, TransactionUncheckedUpdateWithoutPayerInput>
    create: XOR<TransactionCreateWithoutPayerInput, TransactionUncheckedCreateWithoutPayerInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutPayerInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutPayerInput, TransactionUncheckedUpdateWithoutPayerInput>
  }

  export type TransactionUpdateManyWithWhereWithoutPayerInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutPayerInput>
  }

  export type TransactionUpsertWithWhereUniqueWithoutPayeeInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutPayeeInput, TransactionUncheckedUpdateWithoutPayeeInput>
    create: XOR<TransactionCreateWithoutPayeeInput, TransactionUncheckedCreateWithoutPayeeInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutPayeeInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutPayeeInput, TransactionUncheckedUpdateWithoutPayeeInput>
  }

  export type TransactionUpdateManyWithWhereWithoutPayeeInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutPayeeInput>
  }

  export type RecurringTransactionUpsertWithWhereUniqueWithoutPayerInput = {
    where: RecurringTransactionWhereUniqueInput
    update: XOR<RecurringTransactionUpdateWithoutPayerInput, RecurringTransactionUncheckedUpdateWithoutPayerInput>
    create: XOR<RecurringTransactionCreateWithoutPayerInput, RecurringTransactionUncheckedCreateWithoutPayerInput>
  }

  export type RecurringTransactionUpdateWithWhereUniqueWithoutPayerInput = {
    where: RecurringTransactionWhereUniqueInput
    data: XOR<RecurringTransactionUpdateWithoutPayerInput, RecurringTransactionUncheckedUpdateWithoutPayerInput>
  }

  export type RecurringTransactionUpdateManyWithWhereWithoutPayerInput = {
    where: RecurringTransactionScalarWhereInput
    data: XOR<RecurringTransactionUpdateManyMutationInput, RecurringTransactionUncheckedUpdateManyWithoutPayerInput>
  }

  export type RecurringTransactionUpsertWithWhereUniqueWithoutPayeeInput = {
    where: RecurringTransactionWhereUniqueInput
    update: XOR<RecurringTransactionUpdateWithoutPayeeInput, RecurringTransactionUncheckedUpdateWithoutPayeeInput>
    create: XOR<RecurringTransactionCreateWithoutPayeeInput, RecurringTransactionUncheckedCreateWithoutPayeeInput>
  }

  export type RecurringTransactionUpdateWithWhereUniqueWithoutPayeeInput = {
    where: RecurringTransactionWhereUniqueInput
    data: XOR<RecurringTransactionUpdateWithoutPayeeInput, RecurringTransactionUncheckedUpdateWithoutPayeeInput>
  }

  export type RecurringTransactionUpdateManyWithWhereWithoutPayeeInput = {
    where: RecurringTransactionScalarWhereInput
    data: XOR<RecurringTransactionUpdateManyMutationInput, RecurringTransactionUncheckedUpdateManyWithoutPayeeInput>
  }

  export type UserCreateWithoutPaymentMethodsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    password: string
    role?: $Enums.UserRole
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    financeAccounts?: FinanceAccountCreateNestedManyWithoutUserInput
    categories?: CategoryCreateNestedManyWithoutUserInput
    payeesPayers?: PayeePayerCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    recurringTransactions?: RecurringTransactionCreateNestedManyWithoutUserInput
    settings?: SettingsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPaymentMethodsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    password: string
    role?: $Enums.UserRole
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    financeAccounts?: FinanceAccountUncheckedCreateNestedManyWithoutUserInput
    categories?: CategoryUncheckedCreateNestedManyWithoutUserInput
    payeesPayers?: PayeePayerUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    recurringTransactions?: RecurringTransactionUncheckedCreateNestedManyWithoutUserInput
    settings?: SettingsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPaymentMethodsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPaymentMethodsInput, UserUncheckedCreateWithoutPaymentMethodsInput>
  }

  export type TransactionCreateWithoutPaymentMethodInput = {
    date: Date | string
    type: $Enums.TransactionType
    amount: number
    reference?: string | null
    note?: string | null
    debit?: number
    credit?: number
    balance?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    linkedTransaction?: TransactionCreateNestedOneWithoutLinkedByInput
    linkedBy?: TransactionCreateNestedOneWithoutLinkedTransactionInput
    transferToAccount?: FinanceAccountCreateNestedOneWithoutTransfersToInput
    user: UserCreateNestedOneWithoutTransactionsInput
    account: FinanceAccountCreateNestedOneWithoutTransactionsInput
    category?: CategoryCreateNestedOneWithoutTransactionsInput
    payer?: PayeePayerCreateNestedOneWithoutPayerTransactionsInput
    payee?: PayeePayerCreateNestedOneWithoutPayeeTransactionsInput
  }

  export type TransactionUncheckedCreateWithoutPaymentMethodInput = {
    id?: number
    userId: string
    accountId: number
    date: Date | string
    type: $Enums.TransactionType
    categoryId?: number | null
    amount: number
    payerId?: number | null
    payeeId?: number | null
    reference?: string | null
    note?: string | null
    debit?: number
    credit?: number
    balance?: number
    linkedTransactionId?: number | null
    transferToAccountId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    linkedBy?: TransactionUncheckedCreateNestedOneWithoutLinkedTransactionInput
  }

  export type TransactionCreateOrConnectWithoutPaymentMethodInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutPaymentMethodInput, TransactionUncheckedCreateWithoutPaymentMethodInput>
  }

  export type TransactionCreateManyPaymentMethodInputEnvelope = {
    data: TransactionCreateManyPaymentMethodInput | TransactionCreateManyPaymentMethodInput[]
    skipDuplicates?: boolean
  }

  export type RecurringTransactionCreateWithoutPaymentMethodInput = {
    type: $Enums.TransactionType
    amount: number
    reference?: string | null
    status?: $Enums.RecurringStatus
    description?: string | null
    startDate: Date | string
    nextDate?: Date | string | null
    frequency: $Enums.RecurringFrequency
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutRecurringTransactionsInput
    account: FinanceAccountCreateNestedOneWithoutRecurringTransactionsInput
    category: CategoryCreateNestedOneWithoutRecurringTransactionsInput
    payer?: PayeePayerCreateNestedOneWithoutRecurringAsPayerInput
    payee?: PayeePayerCreateNestedOneWithoutRecurringAsPayeeInput
  }

  export type RecurringTransactionUncheckedCreateWithoutPaymentMethodInput = {
    id?: number
    userId: string
    accountId: number
    type: $Enums.TransactionType
    categoryId: number
    amount: number
    payerId?: number | null
    payeeId?: number | null
    reference?: string | null
    status?: $Enums.RecurringStatus
    description?: string | null
    startDate: Date | string
    nextDate?: Date | string | null
    frequency: $Enums.RecurringFrequency
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RecurringTransactionCreateOrConnectWithoutPaymentMethodInput = {
    where: RecurringTransactionWhereUniqueInput
    create: XOR<RecurringTransactionCreateWithoutPaymentMethodInput, RecurringTransactionUncheckedCreateWithoutPaymentMethodInput>
  }

  export type RecurringTransactionCreateManyPaymentMethodInputEnvelope = {
    data: RecurringTransactionCreateManyPaymentMethodInput | RecurringTransactionCreateManyPaymentMethodInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutPaymentMethodsInput = {
    update: XOR<UserUpdateWithoutPaymentMethodsInput, UserUncheckedUpdateWithoutPaymentMethodsInput>
    create: XOR<UserCreateWithoutPaymentMethodsInput, UserUncheckedCreateWithoutPaymentMethodsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPaymentMethodsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPaymentMethodsInput, UserUncheckedUpdateWithoutPaymentMethodsInput>
  }

  export type UserUpdateWithoutPaymentMethodsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    financeAccounts?: FinanceAccountUpdateManyWithoutUserNestedInput
    categories?: CategoryUpdateManyWithoutUserNestedInput
    payeesPayers?: PayeePayerUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    recurringTransactions?: RecurringTransactionUpdateManyWithoutUserNestedInput
    settings?: SettingsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPaymentMethodsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    financeAccounts?: FinanceAccountUncheckedUpdateManyWithoutUserNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutUserNestedInput
    payeesPayers?: PayeePayerUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    recurringTransactions?: RecurringTransactionUncheckedUpdateManyWithoutUserNestedInput
    settings?: SettingsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TransactionUpsertWithWhereUniqueWithoutPaymentMethodInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutPaymentMethodInput, TransactionUncheckedUpdateWithoutPaymentMethodInput>
    create: XOR<TransactionCreateWithoutPaymentMethodInput, TransactionUncheckedCreateWithoutPaymentMethodInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutPaymentMethodInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutPaymentMethodInput, TransactionUncheckedUpdateWithoutPaymentMethodInput>
  }

  export type TransactionUpdateManyWithWhereWithoutPaymentMethodInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutPaymentMethodInput>
  }

  export type RecurringTransactionUpsertWithWhereUniqueWithoutPaymentMethodInput = {
    where: RecurringTransactionWhereUniqueInput
    update: XOR<RecurringTransactionUpdateWithoutPaymentMethodInput, RecurringTransactionUncheckedUpdateWithoutPaymentMethodInput>
    create: XOR<RecurringTransactionCreateWithoutPaymentMethodInput, RecurringTransactionUncheckedCreateWithoutPaymentMethodInput>
  }

  export type RecurringTransactionUpdateWithWhereUniqueWithoutPaymentMethodInput = {
    where: RecurringTransactionWhereUniqueInput
    data: XOR<RecurringTransactionUpdateWithoutPaymentMethodInput, RecurringTransactionUncheckedUpdateWithoutPaymentMethodInput>
  }

  export type RecurringTransactionUpdateManyWithWhereWithoutPaymentMethodInput = {
    where: RecurringTransactionScalarWhereInput
    data: XOR<RecurringTransactionUpdateManyMutationInput, RecurringTransactionUncheckedUpdateManyWithoutPaymentMethodInput>
  }

  export type TransactionCreateWithoutLinkedByInput = {
    date: Date | string
    type: $Enums.TransactionType
    amount: number
    reference?: string | null
    note?: string | null
    debit?: number
    credit?: number
    balance?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    linkedTransaction?: TransactionCreateNestedOneWithoutLinkedByInput
    transferToAccount?: FinanceAccountCreateNestedOneWithoutTransfersToInput
    user: UserCreateNestedOneWithoutTransactionsInput
    account: FinanceAccountCreateNestedOneWithoutTransactionsInput
    category?: CategoryCreateNestedOneWithoutTransactionsInput
    payer?: PayeePayerCreateNestedOneWithoutPayerTransactionsInput
    payee?: PayeePayerCreateNestedOneWithoutPayeeTransactionsInput
    paymentMethod?: PaymentMethodCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateWithoutLinkedByInput = {
    id?: number
    userId: string
    accountId: number
    date: Date | string
    type: $Enums.TransactionType
    categoryId?: number | null
    amount: number
    payerId?: number | null
    payeeId?: number | null
    paymentMethodId?: number | null
    reference?: string | null
    note?: string | null
    debit?: number
    credit?: number
    balance?: number
    linkedTransactionId?: number | null
    transferToAccountId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionCreateOrConnectWithoutLinkedByInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutLinkedByInput, TransactionUncheckedCreateWithoutLinkedByInput>
  }

  export type TransactionCreateWithoutLinkedTransactionInput = {
    date: Date | string
    type: $Enums.TransactionType
    amount: number
    reference?: string | null
    note?: string | null
    debit?: number
    credit?: number
    balance?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    linkedBy?: TransactionCreateNestedOneWithoutLinkedTransactionInput
    transferToAccount?: FinanceAccountCreateNestedOneWithoutTransfersToInput
    user: UserCreateNestedOneWithoutTransactionsInput
    account: FinanceAccountCreateNestedOneWithoutTransactionsInput
    category?: CategoryCreateNestedOneWithoutTransactionsInput
    payer?: PayeePayerCreateNestedOneWithoutPayerTransactionsInput
    payee?: PayeePayerCreateNestedOneWithoutPayeeTransactionsInput
    paymentMethod?: PaymentMethodCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateWithoutLinkedTransactionInput = {
    id?: number
    userId: string
    accountId: number
    date: Date | string
    type: $Enums.TransactionType
    categoryId?: number | null
    amount: number
    payerId?: number | null
    payeeId?: number | null
    paymentMethodId?: number | null
    reference?: string | null
    note?: string | null
    debit?: number
    credit?: number
    balance?: number
    transferToAccountId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    linkedBy?: TransactionUncheckedCreateNestedOneWithoutLinkedTransactionInput
  }

  export type TransactionCreateOrConnectWithoutLinkedTransactionInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutLinkedTransactionInput, TransactionUncheckedCreateWithoutLinkedTransactionInput>
  }

  export type FinanceAccountCreateWithoutTransfersToInput = {
    name: string
    openingBalance?: number
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutFinanceAccountsInput
    transactions?: TransactionCreateNestedManyWithoutAccountInput
    recurringTransactions?: RecurringTransactionCreateNestedManyWithoutAccountInput
  }

  export type FinanceAccountUncheckedCreateWithoutTransfersToInput = {
    id?: number
    userId: string
    name: string
    openingBalance?: number
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionUncheckedCreateNestedManyWithoutAccountInput
    recurringTransactions?: RecurringTransactionUncheckedCreateNestedManyWithoutAccountInput
  }

  export type FinanceAccountCreateOrConnectWithoutTransfersToInput = {
    where: FinanceAccountWhereUniqueInput
    create: XOR<FinanceAccountCreateWithoutTransfersToInput, FinanceAccountUncheckedCreateWithoutTransfersToInput>
  }

  export type UserCreateWithoutTransactionsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    password: string
    role?: $Enums.UserRole
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    financeAccounts?: FinanceAccountCreateNestedManyWithoutUserInput
    categories?: CategoryCreateNestedManyWithoutUserInput
    payeesPayers?: PayeePayerCreateNestedManyWithoutUserInput
    paymentMethods?: PaymentMethodCreateNestedManyWithoutUserInput
    recurringTransactions?: RecurringTransactionCreateNestedManyWithoutUserInput
    settings?: SettingsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTransactionsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    password: string
    role?: $Enums.UserRole
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    financeAccounts?: FinanceAccountUncheckedCreateNestedManyWithoutUserInput
    categories?: CategoryUncheckedCreateNestedManyWithoutUserInput
    payeesPayers?: PayeePayerUncheckedCreateNestedManyWithoutUserInput
    paymentMethods?: PaymentMethodUncheckedCreateNestedManyWithoutUserInput
    recurringTransactions?: RecurringTransactionUncheckedCreateNestedManyWithoutUserInput
    settings?: SettingsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTransactionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
  }

  export type FinanceAccountCreateWithoutTransactionsInput = {
    name: string
    openingBalance?: number
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutFinanceAccountsInput
    recurringTransactions?: RecurringTransactionCreateNestedManyWithoutAccountInput
    transfersTo?: TransactionCreateNestedManyWithoutTransferToAccountInput
  }

  export type FinanceAccountUncheckedCreateWithoutTransactionsInput = {
    id?: number
    userId: string
    name: string
    openingBalance?: number
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    recurringTransactions?: RecurringTransactionUncheckedCreateNestedManyWithoutAccountInput
    transfersTo?: TransactionUncheckedCreateNestedManyWithoutTransferToAccountInput
  }

  export type FinanceAccountCreateOrConnectWithoutTransactionsInput = {
    where: FinanceAccountWhereUniqueInput
    create: XOR<FinanceAccountCreateWithoutTransactionsInput, FinanceAccountUncheckedCreateWithoutTransactionsInput>
  }

  export type CategoryCreateWithoutTransactionsInput = {
    name: string
    type: $Enums.CategoryType
    user: UserCreateNestedOneWithoutCategoriesInput
    recurringTransactions?: RecurringTransactionCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutTransactionsInput = {
    id?: number
    userId: string
    name: string
    type: $Enums.CategoryType
    recurringTransactions?: RecurringTransactionUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutTransactionsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutTransactionsInput, CategoryUncheckedCreateWithoutTransactionsInput>
  }

  export type PayeePayerCreateWithoutPayerTransactionsInput = {
    name: string
    type: $Enums.PayeePayerType
    user: UserCreateNestedOneWithoutPayeesPayersInput
    payeeTransactions?: TransactionCreateNestedManyWithoutPayeeInput
    recurringAsPayer?: RecurringTransactionCreateNestedManyWithoutPayerInput
    recurringAsPayee?: RecurringTransactionCreateNestedManyWithoutPayeeInput
  }

  export type PayeePayerUncheckedCreateWithoutPayerTransactionsInput = {
    id?: number
    userId: string
    name: string
    type: $Enums.PayeePayerType
    payeeTransactions?: TransactionUncheckedCreateNestedManyWithoutPayeeInput
    recurringAsPayer?: RecurringTransactionUncheckedCreateNestedManyWithoutPayerInput
    recurringAsPayee?: RecurringTransactionUncheckedCreateNestedManyWithoutPayeeInput
  }

  export type PayeePayerCreateOrConnectWithoutPayerTransactionsInput = {
    where: PayeePayerWhereUniqueInput
    create: XOR<PayeePayerCreateWithoutPayerTransactionsInput, PayeePayerUncheckedCreateWithoutPayerTransactionsInput>
  }

  export type PayeePayerCreateWithoutPayeeTransactionsInput = {
    name: string
    type: $Enums.PayeePayerType
    user: UserCreateNestedOneWithoutPayeesPayersInput
    payerTransactions?: TransactionCreateNestedManyWithoutPayerInput
    recurringAsPayer?: RecurringTransactionCreateNestedManyWithoutPayerInput
    recurringAsPayee?: RecurringTransactionCreateNestedManyWithoutPayeeInput
  }

  export type PayeePayerUncheckedCreateWithoutPayeeTransactionsInput = {
    id?: number
    userId: string
    name: string
    type: $Enums.PayeePayerType
    payerTransactions?: TransactionUncheckedCreateNestedManyWithoutPayerInput
    recurringAsPayer?: RecurringTransactionUncheckedCreateNestedManyWithoutPayerInput
    recurringAsPayee?: RecurringTransactionUncheckedCreateNestedManyWithoutPayeeInput
  }

  export type PayeePayerCreateOrConnectWithoutPayeeTransactionsInput = {
    where: PayeePayerWhereUniqueInput
    create: XOR<PayeePayerCreateWithoutPayeeTransactionsInput, PayeePayerUncheckedCreateWithoutPayeeTransactionsInput>
  }

  export type PaymentMethodCreateWithoutTransactionsInput = {
    name: string
    user: UserCreateNestedOneWithoutPaymentMethodsInput
    recurringTransactions?: RecurringTransactionCreateNestedManyWithoutPaymentMethodInput
  }

  export type PaymentMethodUncheckedCreateWithoutTransactionsInput = {
    id?: number
    userId: string
    name: string
    recurringTransactions?: RecurringTransactionUncheckedCreateNestedManyWithoutPaymentMethodInput
  }

  export type PaymentMethodCreateOrConnectWithoutTransactionsInput = {
    where: PaymentMethodWhereUniqueInput
    create: XOR<PaymentMethodCreateWithoutTransactionsInput, PaymentMethodUncheckedCreateWithoutTransactionsInput>
  }

  export type TransactionUpsertWithoutLinkedByInput = {
    update: XOR<TransactionUpdateWithoutLinkedByInput, TransactionUncheckedUpdateWithoutLinkedByInput>
    create: XOR<TransactionCreateWithoutLinkedByInput, TransactionUncheckedCreateWithoutLinkedByInput>
    where?: TransactionWhereInput
  }

  export type TransactionUpdateToOneWithWhereWithoutLinkedByInput = {
    where?: TransactionWhereInput
    data: XOR<TransactionUpdateWithoutLinkedByInput, TransactionUncheckedUpdateWithoutLinkedByInput>
  }

  export type TransactionUpdateWithoutLinkedByInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amount?: FloatFieldUpdateOperationsInput | number
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    debit?: FloatFieldUpdateOperationsInput | number
    credit?: FloatFieldUpdateOperationsInput | number
    balance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    linkedTransaction?: TransactionUpdateOneWithoutLinkedByNestedInput
    transferToAccount?: FinanceAccountUpdateOneWithoutTransfersToNestedInput
    user?: UserUpdateOneRequiredWithoutTransactionsNestedInput
    account?: FinanceAccountUpdateOneRequiredWithoutTransactionsNestedInput
    category?: CategoryUpdateOneWithoutTransactionsNestedInput
    payer?: PayeePayerUpdateOneWithoutPayerTransactionsNestedInput
    payee?: PayeePayerUpdateOneWithoutPayeeTransactionsNestedInput
    paymentMethod?: PaymentMethodUpdateOneWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateWithoutLinkedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    accountId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: FloatFieldUpdateOperationsInput | number
    payerId?: NullableIntFieldUpdateOperationsInput | number | null
    payeeId?: NullableIntFieldUpdateOperationsInput | number | null
    paymentMethodId?: NullableIntFieldUpdateOperationsInput | number | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    debit?: FloatFieldUpdateOperationsInput | number
    credit?: FloatFieldUpdateOperationsInput | number
    balance?: FloatFieldUpdateOperationsInput | number
    linkedTransactionId?: NullableIntFieldUpdateOperationsInput | number | null
    transferToAccountId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUpsertWithoutLinkedTransactionInput = {
    update: XOR<TransactionUpdateWithoutLinkedTransactionInput, TransactionUncheckedUpdateWithoutLinkedTransactionInput>
    create: XOR<TransactionCreateWithoutLinkedTransactionInput, TransactionUncheckedCreateWithoutLinkedTransactionInput>
    where?: TransactionWhereInput
  }

  export type TransactionUpdateToOneWithWhereWithoutLinkedTransactionInput = {
    where?: TransactionWhereInput
    data: XOR<TransactionUpdateWithoutLinkedTransactionInput, TransactionUncheckedUpdateWithoutLinkedTransactionInput>
  }

  export type TransactionUpdateWithoutLinkedTransactionInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amount?: FloatFieldUpdateOperationsInput | number
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    debit?: FloatFieldUpdateOperationsInput | number
    credit?: FloatFieldUpdateOperationsInput | number
    balance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    linkedBy?: TransactionUpdateOneWithoutLinkedTransactionNestedInput
    transferToAccount?: FinanceAccountUpdateOneWithoutTransfersToNestedInput
    user?: UserUpdateOneRequiredWithoutTransactionsNestedInput
    account?: FinanceAccountUpdateOneRequiredWithoutTransactionsNestedInput
    category?: CategoryUpdateOneWithoutTransactionsNestedInput
    payer?: PayeePayerUpdateOneWithoutPayerTransactionsNestedInput
    payee?: PayeePayerUpdateOneWithoutPayeeTransactionsNestedInput
    paymentMethod?: PaymentMethodUpdateOneWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateWithoutLinkedTransactionInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    accountId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: FloatFieldUpdateOperationsInput | number
    payerId?: NullableIntFieldUpdateOperationsInput | number | null
    payeeId?: NullableIntFieldUpdateOperationsInput | number | null
    paymentMethodId?: NullableIntFieldUpdateOperationsInput | number | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    debit?: FloatFieldUpdateOperationsInput | number
    credit?: FloatFieldUpdateOperationsInput | number
    balance?: FloatFieldUpdateOperationsInput | number
    transferToAccountId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    linkedBy?: TransactionUncheckedUpdateOneWithoutLinkedTransactionNestedInput
  }

  export type FinanceAccountUpsertWithoutTransfersToInput = {
    update: XOR<FinanceAccountUpdateWithoutTransfersToInput, FinanceAccountUncheckedUpdateWithoutTransfersToInput>
    create: XOR<FinanceAccountCreateWithoutTransfersToInput, FinanceAccountUncheckedCreateWithoutTransfersToInput>
    where?: FinanceAccountWhereInput
  }

  export type FinanceAccountUpdateToOneWithWhereWithoutTransfersToInput = {
    where?: FinanceAccountWhereInput
    data: XOR<FinanceAccountUpdateWithoutTransfersToInput, FinanceAccountUncheckedUpdateWithoutTransfersToInput>
  }

  export type FinanceAccountUpdateWithoutTransfersToInput = {
    name?: StringFieldUpdateOperationsInput | string
    openingBalance?: FloatFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFinanceAccountsNestedInput
    transactions?: TransactionUpdateManyWithoutAccountNestedInput
    recurringTransactions?: RecurringTransactionUpdateManyWithoutAccountNestedInput
  }

  export type FinanceAccountUncheckedUpdateWithoutTransfersToInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    openingBalance?: FloatFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUncheckedUpdateManyWithoutAccountNestedInput
    recurringTransactions?: RecurringTransactionUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type UserUpsertWithoutTransactionsInput = {
    update: XOR<UserUpdateWithoutTransactionsInput, UserUncheckedUpdateWithoutTransactionsInput>
    create: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTransactionsInput, UserUncheckedUpdateWithoutTransactionsInput>
  }

  export type UserUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    financeAccounts?: FinanceAccountUpdateManyWithoutUserNestedInput
    categories?: CategoryUpdateManyWithoutUserNestedInput
    payeesPayers?: PayeePayerUpdateManyWithoutUserNestedInput
    paymentMethods?: PaymentMethodUpdateManyWithoutUserNestedInput
    recurringTransactions?: RecurringTransactionUpdateManyWithoutUserNestedInput
    settings?: SettingsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    financeAccounts?: FinanceAccountUncheckedUpdateManyWithoutUserNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutUserNestedInput
    payeesPayers?: PayeePayerUncheckedUpdateManyWithoutUserNestedInput
    paymentMethods?: PaymentMethodUncheckedUpdateManyWithoutUserNestedInput
    recurringTransactions?: RecurringTransactionUncheckedUpdateManyWithoutUserNestedInput
    settings?: SettingsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type FinanceAccountUpsertWithoutTransactionsInput = {
    update: XOR<FinanceAccountUpdateWithoutTransactionsInput, FinanceAccountUncheckedUpdateWithoutTransactionsInput>
    create: XOR<FinanceAccountCreateWithoutTransactionsInput, FinanceAccountUncheckedCreateWithoutTransactionsInput>
    where?: FinanceAccountWhereInput
  }

  export type FinanceAccountUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: FinanceAccountWhereInput
    data: XOR<FinanceAccountUpdateWithoutTransactionsInput, FinanceAccountUncheckedUpdateWithoutTransactionsInput>
  }

  export type FinanceAccountUpdateWithoutTransactionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    openingBalance?: FloatFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFinanceAccountsNestedInput
    recurringTransactions?: RecurringTransactionUpdateManyWithoutAccountNestedInput
    transfersTo?: TransactionUpdateManyWithoutTransferToAccountNestedInput
  }

  export type FinanceAccountUncheckedUpdateWithoutTransactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    openingBalance?: FloatFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recurringTransactions?: RecurringTransactionUncheckedUpdateManyWithoutAccountNestedInput
    transfersTo?: TransactionUncheckedUpdateManyWithoutTransferToAccountNestedInput
  }

  export type CategoryUpsertWithoutTransactionsInput = {
    update: XOR<CategoryUpdateWithoutTransactionsInput, CategoryUncheckedUpdateWithoutTransactionsInput>
    create: XOR<CategoryCreateWithoutTransactionsInput, CategoryUncheckedCreateWithoutTransactionsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutTransactionsInput, CategoryUncheckedUpdateWithoutTransactionsInput>
  }

  export type CategoryUpdateWithoutTransactionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumCategoryTypeFieldUpdateOperationsInput | $Enums.CategoryType
    user?: UserUpdateOneRequiredWithoutCategoriesNestedInput
    recurringTransactions?: RecurringTransactionUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutTransactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumCategoryTypeFieldUpdateOperationsInput | $Enums.CategoryType
    recurringTransactions?: RecurringTransactionUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type PayeePayerUpsertWithoutPayerTransactionsInput = {
    update: XOR<PayeePayerUpdateWithoutPayerTransactionsInput, PayeePayerUncheckedUpdateWithoutPayerTransactionsInput>
    create: XOR<PayeePayerCreateWithoutPayerTransactionsInput, PayeePayerUncheckedCreateWithoutPayerTransactionsInput>
    where?: PayeePayerWhereInput
  }

  export type PayeePayerUpdateToOneWithWhereWithoutPayerTransactionsInput = {
    where?: PayeePayerWhereInput
    data: XOR<PayeePayerUpdateWithoutPayerTransactionsInput, PayeePayerUncheckedUpdateWithoutPayerTransactionsInput>
  }

  export type PayeePayerUpdateWithoutPayerTransactionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumPayeePayerTypeFieldUpdateOperationsInput | $Enums.PayeePayerType
    user?: UserUpdateOneRequiredWithoutPayeesPayersNestedInput
    payeeTransactions?: TransactionUpdateManyWithoutPayeeNestedInput
    recurringAsPayer?: RecurringTransactionUpdateManyWithoutPayerNestedInput
    recurringAsPayee?: RecurringTransactionUpdateManyWithoutPayeeNestedInput
  }

  export type PayeePayerUncheckedUpdateWithoutPayerTransactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumPayeePayerTypeFieldUpdateOperationsInput | $Enums.PayeePayerType
    payeeTransactions?: TransactionUncheckedUpdateManyWithoutPayeeNestedInput
    recurringAsPayer?: RecurringTransactionUncheckedUpdateManyWithoutPayerNestedInput
    recurringAsPayee?: RecurringTransactionUncheckedUpdateManyWithoutPayeeNestedInput
  }

  export type PayeePayerUpsertWithoutPayeeTransactionsInput = {
    update: XOR<PayeePayerUpdateWithoutPayeeTransactionsInput, PayeePayerUncheckedUpdateWithoutPayeeTransactionsInput>
    create: XOR<PayeePayerCreateWithoutPayeeTransactionsInput, PayeePayerUncheckedCreateWithoutPayeeTransactionsInput>
    where?: PayeePayerWhereInput
  }

  export type PayeePayerUpdateToOneWithWhereWithoutPayeeTransactionsInput = {
    where?: PayeePayerWhereInput
    data: XOR<PayeePayerUpdateWithoutPayeeTransactionsInput, PayeePayerUncheckedUpdateWithoutPayeeTransactionsInput>
  }

  export type PayeePayerUpdateWithoutPayeeTransactionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumPayeePayerTypeFieldUpdateOperationsInput | $Enums.PayeePayerType
    user?: UserUpdateOneRequiredWithoutPayeesPayersNestedInput
    payerTransactions?: TransactionUpdateManyWithoutPayerNestedInput
    recurringAsPayer?: RecurringTransactionUpdateManyWithoutPayerNestedInput
    recurringAsPayee?: RecurringTransactionUpdateManyWithoutPayeeNestedInput
  }

  export type PayeePayerUncheckedUpdateWithoutPayeeTransactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumPayeePayerTypeFieldUpdateOperationsInput | $Enums.PayeePayerType
    payerTransactions?: TransactionUncheckedUpdateManyWithoutPayerNestedInput
    recurringAsPayer?: RecurringTransactionUncheckedUpdateManyWithoutPayerNestedInput
    recurringAsPayee?: RecurringTransactionUncheckedUpdateManyWithoutPayeeNestedInput
  }

  export type PaymentMethodUpsertWithoutTransactionsInput = {
    update: XOR<PaymentMethodUpdateWithoutTransactionsInput, PaymentMethodUncheckedUpdateWithoutTransactionsInput>
    create: XOR<PaymentMethodCreateWithoutTransactionsInput, PaymentMethodUncheckedCreateWithoutTransactionsInput>
    where?: PaymentMethodWhereInput
  }

  export type PaymentMethodUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: PaymentMethodWhereInput
    data: XOR<PaymentMethodUpdateWithoutTransactionsInput, PaymentMethodUncheckedUpdateWithoutTransactionsInput>
  }

  export type PaymentMethodUpdateWithoutTransactionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutPaymentMethodsNestedInput
    recurringTransactions?: RecurringTransactionUpdateManyWithoutPaymentMethodNestedInput
  }

  export type PaymentMethodUncheckedUpdateWithoutTransactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    recurringTransactions?: RecurringTransactionUncheckedUpdateManyWithoutPaymentMethodNestedInput
  }

  export type UserCreateWithoutRecurringTransactionsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    password: string
    role?: $Enums.UserRole
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    financeAccounts?: FinanceAccountCreateNestedManyWithoutUserInput
    categories?: CategoryCreateNestedManyWithoutUserInput
    payeesPayers?: PayeePayerCreateNestedManyWithoutUserInput
    paymentMethods?: PaymentMethodCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    settings?: SettingsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRecurringTransactionsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    password: string
    role?: $Enums.UserRole
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    financeAccounts?: FinanceAccountUncheckedCreateNestedManyWithoutUserInput
    categories?: CategoryUncheckedCreateNestedManyWithoutUserInput
    payeesPayers?: PayeePayerUncheckedCreateNestedManyWithoutUserInput
    paymentMethods?: PaymentMethodUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    settings?: SettingsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRecurringTransactionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRecurringTransactionsInput, UserUncheckedCreateWithoutRecurringTransactionsInput>
  }

  export type FinanceAccountCreateWithoutRecurringTransactionsInput = {
    name: string
    openingBalance?: number
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutFinanceAccountsInput
    transactions?: TransactionCreateNestedManyWithoutAccountInput
    transfersTo?: TransactionCreateNestedManyWithoutTransferToAccountInput
  }

  export type FinanceAccountUncheckedCreateWithoutRecurringTransactionsInput = {
    id?: number
    userId: string
    name: string
    openingBalance?: number
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionUncheckedCreateNestedManyWithoutAccountInput
    transfersTo?: TransactionUncheckedCreateNestedManyWithoutTransferToAccountInput
  }

  export type FinanceAccountCreateOrConnectWithoutRecurringTransactionsInput = {
    where: FinanceAccountWhereUniqueInput
    create: XOR<FinanceAccountCreateWithoutRecurringTransactionsInput, FinanceAccountUncheckedCreateWithoutRecurringTransactionsInput>
  }

  export type CategoryCreateWithoutRecurringTransactionsInput = {
    name: string
    type: $Enums.CategoryType
    user: UserCreateNestedOneWithoutCategoriesInput
    transactions?: TransactionCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutRecurringTransactionsInput = {
    id?: number
    userId: string
    name: string
    type: $Enums.CategoryType
    transactions?: TransactionUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutRecurringTransactionsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutRecurringTransactionsInput, CategoryUncheckedCreateWithoutRecurringTransactionsInput>
  }

  export type PayeePayerCreateWithoutRecurringAsPayerInput = {
    name: string
    type: $Enums.PayeePayerType
    user: UserCreateNestedOneWithoutPayeesPayersInput
    payerTransactions?: TransactionCreateNestedManyWithoutPayerInput
    payeeTransactions?: TransactionCreateNestedManyWithoutPayeeInput
    recurringAsPayee?: RecurringTransactionCreateNestedManyWithoutPayeeInput
  }

  export type PayeePayerUncheckedCreateWithoutRecurringAsPayerInput = {
    id?: number
    userId: string
    name: string
    type: $Enums.PayeePayerType
    payerTransactions?: TransactionUncheckedCreateNestedManyWithoutPayerInput
    payeeTransactions?: TransactionUncheckedCreateNestedManyWithoutPayeeInput
    recurringAsPayee?: RecurringTransactionUncheckedCreateNestedManyWithoutPayeeInput
  }

  export type PayeePayerCreateOrConnectWithoutRecurringAsPayerInput = {
    where: PayeePayerWhereUniqueInput
    create: XOR<PayeePayerCreateWithoutRecurringAsPayerInput, PayeePayerUncheckedCreateWithoutRecurringAsPayerInput>
  }

  export type PayeePayerCreateWithoutRecurringAsPayeeInput = {
    name: string
    type: $Enums.PayeePayerType
    user: UserCreateNestedOneWithoutPayeesPayersInput
    payerTransactions?: TransactionCreateNestedManyWithoutPayerInput
    payeeTransactions?: TransactionCreateNestedManyWithoutPayeeInput
    recurringAsPayer?: RecurringTransactionCreateNestedManyWithoutPayerInput
  }

  export type PayeePayerUncheckedCreateWithoutRecurringAsPayeeInput = {
    id?: number
    userId: string
    name: string
    type: $Enums.PayeePayerType
    payerTransactions?: TransactionUncheckedCreateNestedManyWithoutPayerInput
    payeeTransactions?: TransactionUncheckedCreateNestedManyWithoutPayeeInput
    recurringAsPayer?: RecurringTransactionUncheckedCreateNestedManyWithoutPayerInput
  }

  export type PayeePayerCreateOrConnectWithoutRecurringAsPayeeInput = {
    where: PayeePayerWhereUniqueInput
    create: XOR<PayeePayerCreateWithoutRecurringAsPayeeInput, PayeePayerUncheckedCreateWithoutRecurringAsPayeeInput>
  }

  export type PaymentMethodCreateWithoutRecurringTransactionsInput = {
    name: string
    user: UserCreateNestedOneWithoutPaymentMethodsInput
    transactions?: TransactionCreateNestedManyWithoutPaymentMethodInput
  }

  export type PaymentMethodUncheckedCreateWithoutRecurringTransactionsInput = {
    id?: number
    userId: string
    name: string
    transactions?: TransactionUncheckedCreateNestedManyWithoutPaymentMethodInput
  }

  export type PaymentMethodCreateOrConnectWithoutRecurringTransactionsInput = {
    where: PaymentMethodWhereUniqueInput
    create: XOR<PaymentMethodCreateWithoutRecurringTransactionsInput, PaymentMethodUncheckedCreateWithoutRecurringTransactionsInput>
  }

  export type UserUpsertWithoutRecurringTransactionsInput = {
    update: XOR<UserUpdateWithoutRecurringTransactionsInput, UserUncheckedUpdateWithoutRecurringTransactionsInput>
    create: XOR<UserCreateWithoutRecurringTransactionsInput, UserUncheckedCreateWithoutRecurringTransactionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRecurringTransactionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRecurringTransactionsInput, UserUncheckedUpdateWithoutRecurringTransactionsInput>
  }

  export type UserUpdateWithoutRecurringTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    financeAccounts?: FinanceAccountUpdateManyWithoutUserNestedInput
    categories?: CategoryUpdateManyWithoutUserNestedInput
    payeesPayers?: PayeePayerUpdateManyWithoutUserNestedInput
    paymentMethods?: PaymentMethodUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    settings?: SettingsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRecurringTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    financeAccounts?: FinanceAccountUncheckedUpdateManyWithoutUserNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutUserNestedInput
    payeesPayers?: PayeePayerUncheckedUpdateManyWithoutUserNestedInput
    paymentMethods?: PaymentMethodUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    settings?: SettingsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type FinanceAccountUpsertWithoutRecurringTransactionsInput = {
    update: XOR<FinanceAccountUpdateWithoutRecurringTransactionsInput, FinanceAccountUncheckedUpdateWithoutRecurringTransactionsInput>
    create: XOR<FinanceAccountCreateWithoutRecurringTransactionsInput, FinanceAccountUncheckedCreateWithoutRecurringTransactionsInput>
    where?: FinanceAccountWhereInput
  }

  export type FinanceAccountUpdateToOneWithWhereWithoutRecurringTransactionsInput = {
    where?: FinanceAccountWhereInput
    data: XOR<FinanceAccountUpdateWithoutRecurringTransactionsInput, FinanceAccountUncheckedUpdateWithoutRecurringTransactionsInput>
  }

  export type FinanceAccountUpdateWithoutRecurringTransactionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    openingBalance?: FloatFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFinanceAccountsNestedInput
    transactions?: TransactionUpdateManyWithoutAccountNestedInput
    transfersTo?: TransactionUpdateManyWithoutTransferToAccountNestedInput
  }

  export type FinanceAccountUncheckedUpdateWithoutRecurringTransactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    openingBalance?: FloatFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUncheckedUpdateManyWithoutAccountNestedInput
    transfersTo?: TransactionUncheckedUpdateManyWithoutTransferToAccountNestedInput
  }

  export type CategoryUpsertWithoutRecurringTransactionsInput = {
    update: XOR<CategoryUpdateWithoutRecurringTransactionsInput, CategoryUncheckedUpdateWithoutRecurringTransactionsInput>
    create: XOR<CategoryCreateWithoutRecurringTransactionsInput, CategoryUncheckedCreateWithoutRecurringTransactionsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutRecurringTransactionsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutRecurringTransactionsInput, CategoryUncheckedUpdateWithoutRecurringTransactionsInput>
  }

  export type CategoryUpdateWithoutRecurringTransactionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumCategoryTypeFieldUpdateOperationsInput | $Enums.CategoryType
    user?: UserUpdateOneRequiredWithoutCategoriesNestedInput
    transactions?: TransactionUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutRecurringTransactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumCategoryTypeFieldUpdateOperationsInput | $Enums.CategoryType
    transactions?: TransactionUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type PayeePayerUpsertWithoutRecurringAsPayerInput = {
    update: XOR<PayeePayerUpdateWithoutRecurringAsPayerInput, PayeePayerUncheckedUpdateWithoutRecurringAsPayerInput>
    create: XOR<PayeePayerCreateWithoutRecurringAsPayerInput, PayeePayerUncheckedCreateWithoutRecurringAsPayerInput>
    where?: PayeePayerWhereInput
  }

  export type PayeePayerUpdateToOneWithWhereWithoutRecurringAsPayerInput = {
    where?: PayeePayerWhereInput
    data: XOR<PayeePayerUpdateWithoutRecurringAsPayerInput, PayeePayerUncheckedUpdateWithoutRecurringAsPayerInput>
  }

  export type PayeePayerUpdateWithoutRecurringAsPayerInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumPayeePayerTypeFieldUpdateOperationsInput | $Enums.PayeePayerType
    user?: UserUpdateOneRequiredWithoutPayeesPayersNestedInput
    payerTransactions?: TransactionUpdateManyWithoutPayerNestedInput
    payeeTransactions?: TransactionUpdateManyWithoutPayeeNestedInput
    recurringAsPayee?: RecurringTransactionUpdateManyWithoutPayeeNestedInput
  }

  export type PayeePayerUncheckedUpdateWithoutRecurringAsPayerInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumPayeePayerTypeFieldUpdateOperationsInput | $Enums.PayeePayerType
    payerTransactions?: TransactionUncheckedUpdateManyWithoutPayerNestedInput
    payeeTransactions?: TransactionUncheckedUpdateManyWithoutPayeeNestedInput
    recurringAsPayee?: RecurringTransactionUncheckedUpdateManyWithoutPayeeNestedInput
  }

  export type PayeePayerUpsertWithoutRecurringAsPayeeInput = {
    update: XOR<PayeePayerUpdateWithoutRecurringAsPayeeInput, PayeePayerUncheckedUpdateWithoutRecurringAsPayeeInput>
    create: XOR<PayeePayerCreateWithoutRecurringAsPayeeInput, PayeePayerUncheckedCreateWithoutRecurringAsPayeeInput>
    where?: PayeePayerWhereInput
  }

  export type PayeePayerUpdateToOneWithWhereWithoutRecurringAsPayeeInput = {
    where?: PayeePayerWhereInput
    data: XOR<PayeePayerUpdateWithoutRecurringAsPayeeInput, PayeePayerUncheckedUpdateWithoutRecurringAsPayeeInput>
  }

  export type PayeePayerUpdateWithoutRecurringAsPayeeInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumPayeePayerTypeFieldUpdateOperationsInput | $Enums.PayeePayerType
    user?: UserUpdateOneRequiredWithoutPayeesPayersNestedInput
    payerTransactions?: TransactionUpdateManyWithoutPayerNestedInput
    payeeTransactions?: TransactionUpdateManyWithoutPayeeNestedInput
    recurringAsPayer?: RecurringTransactionUpdateManyWithoutPayerNestedInput
  }

  export type PayeePayerUncheckedUpdateWithoutRecurringAsPayeeInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumPayeePayerTypeFieldUpdateOperationsInput | $Enums.PayeePayerType
    payerTransactions?: TransactionUncheckedUpdateManyWithoutPayerNestedInput
    payeeTransactions?: TransactionUncheckedUpdateManyWithoutPayeeNestedInput
    recurringAsPayer?: RecurringTransactionUncheckedUpdateManyWithoutPayerNestedInput
  }

  export type PaymentMethodUpsertWithoutRecurringTransactionsInput = {
    update: XOR<PaymentMethodUpdateWithoutRecurringTransactionsInput, PaymentMethodUncheckedUpdateWithoutRecurringTransactionsInput>
    create: XOR<PaymentMethodCreateWithoutRecurringTransactionsInput, PaymentMethodUncheckedCreateWithoutRecurringTransactionsInput>
    where?: PaymentMethodWhereInput
  }

  export type PaymentMethodUpdateToOneWithWhereWithoutRecurringTransactionsInput = {
    where?: PaymentMethodWhereInput
    data: XOR<PaymentMethodUpdateWithoutRecurringTransactionsInput, PaymentMethodUncheckedUpdateWithoutRecurringTransactionsInput>
  }

  export type PaymentMethodUpdateWithoutRecurringTransactionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutPaymentMethodsNestedInput
    transactions?: TransactionUpdateManyWithoutPaymentMethodNestedInput
  }

  export type PaymentMethodUncheckedUpdateWithoutRecurringTransactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    transactions?: TransactionUncheckedUpdateManyWithoutPaymentMethodNestedInput
  }

  export type UserCreateWithoutSettingsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    password: string
    role?: $Enums.UserRole
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    financeAccounts?: FinanceAccountCreateNestedManyWithoutUserInput
    categories?: CategoryCreateNestedManyWithoutUserInput
    payeesPayers?: PayeePayerCreateNestedManyWithoutUserInput
    paymentMethods?: PaymentMethodCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    recurringTransactions?: RecurringTransactionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSettingsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    password: string
    role?: $Enums.UserRole
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    financeAccounts?: FinanceAccountUncheckedCreateNestedManyWithoutUserInput
    categories?: CategoryUncheckedCreateNestedManyWithoutUserInput
    payeesPayers?: PayeePayerUncheckedCreateNestedManyWithoutUserInput
    paymentMethods?: PaymentMethodUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    recurringTransactions?: RecurringTransactionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSettingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSettingsInput, UserUncheckedCreateWithoutSettingsInput>
  }

  export type UserUpsertWithoutSettingsInput = {
    update: XOR<UserUpdateWithoutSettingsInput, UserUncheckedUpdateWithoutSettingsInput>
    create: XOR<UserCreateWithoutSettingsInput, UserUncheckedCreateWithoutSettingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSettingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSettingsInput, UserUncheckedUpdateWithoutSettingsInput>
  }

  export type UserUpdateWithoutSettingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    financeAccounts?: FinanceAccountUpdateManyWithoutUserNestedInput
    categories?: CategoryUpdateManyWithoutUserNestedInput
    payeesPayers?: PayeePayerUpdateManyWithoutUserNestedInput
    paymentMethods?: PaymentMethodUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    recurringTransactions?: RecurringTransactionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSettingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    financeAccounts?: FinanceAccountUncheckedUpdateManyWithoutUserNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutUserNestedInput
    payeesPayers?: PayeePayerUncheckedUpdateManyWithoutUserNestedInput
    paymentMethods?: PaymentMethodUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    recurringTransactions?: RecurringTransactionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AccountCreateManyUserInput = {
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionCreateManyUserInput = {
    sessionToken: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FinanceAccountCreateManyUserInput = {
    id?: number
    name: string
    openingBalance?: number
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryCreateManyUserInput = {
    id?: number
    name: string
    type: $Enums.CategoryType
  }

  export type PayeePayerCreateManyUserInput = {
    id?: number
    name: string
    type: $Enums.PayeePayerType
  }

  export type PaymentMethodCreateManyUserInput = {
    id?: number
    name: string
  }

  export type TransactionCreateManyUserInput = {
    id?: number
    accountId: number
    date: Date | string
    type: $Enums.TransactionType
    categoryId?: number | null
    amount: number
    payerId?: number | null
    payeeId?: number | null
    paymentMethodId?: number | null
    reference?: string | null
    note?: string | null
    debit?: number
    credit?: number
    balance?: number
    linkedTransactionId?: number | null
    transferToAccountId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RecurringTransactionCreateManyUserInput = {
    id?: number
    accountId: number
    type: $Enums.TransactionType
    categoryId: number
    amount: number
    payerId?: number | null
    payeeId?: number | null
    paymentMethodId?: number | null
    reference?: string | null
    status?: $Enums.RecurringStatus
    description?: string | null
    startDate: Date | string
    nextDate?: Date | string | null
    frequency: $Enums.RecurringFrequency
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SettingsCreateManyUserInput = {
    id?: number
    key: string
    value: string
  }

  export type AccountUpdateWithoutUserInput = {
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUpdateWithoutUserInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FinanceAccountUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    openingBalance?: FloatFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUpdateManyWithoutAccountNestedInput
    recurringTransactions?: RecurringTransactionUpdateManyWithoutAccountNestedInput
    transfersTo?: TransactionUpdateManyWithoutTransferToAccountNestedInput
  }

  export type FinanceAccountUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    openingBalance?: FloatFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUncheckedUpdateManyWithoutAccountNestedInput
    recurringTransactions?: RecurringTransactionUncheckedUpdateManyWithoutAccountNestedInput
    transfersTo?: TransactionUncheckedUpdateManyWithoutTransferToAccountNestedInput
  }

  export type FinanceAccountUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    openingBalance?: FloatFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumCategoryTypeFieldUpdateOperationsInput | $Enums.CategoryType
    transactions?: TransactionUpdateManyWithoutCategoryNestedInput
    recurringTransactions?: RecurringTransactionUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumCategoryTypeFieldUpdateOperationsInput | $Enums.CategoryType
    transactions?: TransactionUncheckedUpdateManyWithoutCategoryNestedInput
    recurringTransactions?: RecurringTransactionUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumCategoryTypeFieldUpdateOperationsInput | $Enums.CategoryType
  }

  export type PayeePayerUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumPayeePayerTypeFieldUpdateOperationsInput | $Enums.PayeePayerType
    payerTransactions?: TransactionUpdateManyWithoutPayerNestedInput
    payeeTransactions?: TransactionUpdateManyWithoutPayeeNestedInput
    recurringAsPayer?: RecurringTransactionUpdateManyWithoutPayerNestedInput
    recurringAsPayee?: RecurringTransactionUpdateManyWithoutPayeeNestedInput
  }

  export type PayeePayerUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumPayeePayerTypeFieldUpdateOperationsInput | $Enums.PayeePayerType
    payerTransactions?: TransactionUncheckedUpdateManyWithoutPayerNestedInput
    payeeTransactions?: TransactionUncheckedUpdateManyWithoutPayeeNestedInput
    recurringAsPayer?: RecurringTransactionUncheckedUpdateManyWithoutPayerNestedInput
    recurringAsPayee?: RecurringTransactionUncheckedUpdateManyWithoutPayeeNestedInput
  }

  export type PayeePayerUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumPayeePayerTypeFieldUpdateOperationsInput | $Enums.PayeePayerType
  }

  export type PaymentMethodUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    transactions?: TransactionUpdateManyWithoutPaymentMethodNestedInput
    recurringTransactions?: RecurringTransactionUpdateManyWithoutPaymentMethodNestedInput
  }

  export type PaymentMethodUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    transactions?: TransactionUncheckedUpdateManyWithoutPaymentMethodNestedInput
    recurringTransactions?: RecurringTransactionUncheckedUpdateManyWithoutPaymentMethodNestedInput
  }

  export type PaymentMethodUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TransactionUpdateWithoutUserInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amount?: FloatFieldUpdateOperationsInput | number
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    debit?: FloatFieldUpdateOperationsInput | number
    credit?: FloatFieldUpdateOperationsInput | number
    balance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    linkedTransaction?: TransactionUpdateOneWithoutLinkedByNestedInput
    linkedBy?: TransactionUpdateOneWithoutLinkedTransactionNestedInput
    transferToAccount?: FinanceAccountUpdateOneWithoutTransfersToNestedInput
    account?: FinanceAccountUpdateOneRequiredWithoutTransactionsNestedInput
    category?: CategoryUpdateOneWithoutTransactionsNestedInput
    payer?: PayeePayerUpdateOneWithoutPayerTransactionsNestedInput
    payee?: PayeePayerUpdateOneWithoutPayeeTransactionsNestedInput
    paymentMethod?: PaymentMethodUpdateOneWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    accountId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: FloatFieldUpdateOperationsInput | number
    payerId?: NullableIntFieldUpdateOperationsInput | number | null
    payeeId?: NullableIntFieldUpdateOperationsInput | number | null
    paymentMethodId?: NullableIntFieldUpdateOperationsInput | number | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    debit?: FloatFieldUpdateOperationsInput | number
    credit?: FloatFieldUpdateOperationsInput | number
    balance?: FloatFieldUpdateOperationsInput | number
    linkedTransactionId?: NullableIntFieldUpdateOperationsInput | number | null
    transferToAccountId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    linkedBy?: TransactionUncheckedUpdateOneWithoutLinkedTransactionNestedInput
  }

  export type TransactionUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    accountId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: FloatFieldUpdateOperationsInput | number
    payerId?: NullableIntFieldUpdateOperationsInput | number | null
    payeeId?: NullableIntFieldUpdateOperationsInput | number | null
    paymentMethodId?: NullableIntFieldUpdateOperationsInput | number | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    debit?: FloatFieldUpdateOperationsInput | number
    credit?: FloatFieldUpdateOperationsInput | number
    balance?: FloatFieldUpdateOperationsInput | number
    linkedTransactionId?: NullableIntFieldUpdateOperationsInput | number | null
    transferToAccountId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecurringTransactionUpdateWithoutUserInput = {
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amount?: FloatFieldUpdateOperationsInput | number
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRecurringStatusFieldUpdateOperationsInput | $Enums.RecurringStatus
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    nextDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    frequency?: EnumRecurringFrequencyFieldUpdateOperationsInput | $Enums.RecurringFrequency
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: FinanceAccountUpdateOneRequiredWithoutRecurringTransactionsNestedInput
    category?: CategoryUpdateOneRequiredWithoutRecurringTransactionsNestedInput
    payer?: PayeePayerUpdateOneWithoutRecurringAsPayerNestedInput
    payee?: PayeePayerUpdateOneWithoutRecurringAsPayeeNestedInput
    paymentMethod?: PaymentMethodUpdateOneWithoutRecurringTransactionsNestedInput
  }

  export type RecurringTransactionUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    accountId?: IntFieldUpdateOperationsInput | number
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    categoryId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    payerId?: NullableIntFieldUpdateOperationsInput | number | null
    payeeId?: NullableIntFieldUpdateOperationsInput | number | null
    paymentMethodId?: NullableIntFieldUpdateOperationsInput | number | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRecurringStatusFieldUpdateOperationsInput | $Enums.RecurringStatus
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    nextDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    frequency?: EnumRecurringFrequencyFieldUpdateOperationsInput | $Enums.RecurringFrequency
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecurringTransactionUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    accountId?: IntFieldUpdateOperationsInput | number
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    categoryId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    payerId?: NullableIntFieldUpdateOperationsInput | number | null
    payeeId?: NullableIntFieldUpdateOperationsInput | number | null
    paymentMethodId?: NullableIntFieldUpdateOperationsInput | number | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRecurringStatusFieldUpdateOperationsInput | $Enums.RecurringStatus
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    nextDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    frequency?: EnumRecurringFrequencyFieldUpdateOperationsInput | $Enums.RecurringFrequency
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SettingsUpdateWithoutUserInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type SettingsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type SettingsUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type TransactionCreateManyAccountInput = {
    id?: number
    userId: string
    date: Date | string
    type: $Enums.TransactionType
    categoryId?: number | null
    amount: number
    payerId?: number | null
    payeeId?: number | null
    paymentMethodId?: number | null
    reference?: string | null
    note?: string | null
    debit?: number
    credit?: number
    balance?: number
    linkedTransactionId?: number | null
    transferToAccountId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RecurringTransactionCreateManyAccountInput = {
    id?: number
    userId: string
    type: $Enums.TransactionType
    categoryId: number
    amount: number
    payerId?: number | null
    payeeId?: number | null
    paymentMethodId?: number | null
    reference?: string | null
    status?: $Enums.RecurringStatus
    description?: string | null
    startDate: Date | string
    nextDate?: Date | string | null
    frequency: $Enums.RecurringFrequency
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionCreateManyTransferToAccountInput = {
    id?: number
    userId: string
    accountId: number
    date: Date | string
    type: $Enums.TransactionType
    categoryId?: number | null
    amount: number
    payerId?: number | null
    payeeId?: number | null
    paymentMethodId?: number | null
    reference?: string | null
    note?: string | null
    debit?: number
    credit?: number
    balance?: number
    linkedTransactionId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionUpdateWithoutAccountInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amount?: FloatFieldUpdateOperationsInput | number
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    debit?: FloatFieldUpdateOperationsInput | number
    credit?: FloatFieldUpdateOperationsInput | number
    balance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    linkedTransaction?: TransactionUpdateOneWithoutLinkedByNestedInput
    linkedBy?: TransactionUpdateOneWithoutLinkedTransactionNestedInput
    transferToAccount?: FinanceAccountUpdateOneWithoutTransfersToNestedInput
    user?: UserUpdateOneRequiredWithoutTransactionsNestedInput
    category?: CategoryUpdateOneWithoutTransactionsNestedInput
    payer?: PayeePayerUpdateOneWithoutPayerTransactionsNestedInput
    payee?: PayeePayerUpdateOneWithoutPayeeTransactionsNestedInput
    paymentMethod?: PaymentMethodUpdateOneWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateWithoutAccountInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: FloatFieldUpdateOperationsInput | number
    payerId?: NullableIntFieldUpdateOperationsInput | number | null
    payeeId?: NullableIntFieldUpdateOperationsInput | number | null
    paymentMethodId?: NullableIntFieldUpdateOperationsInput | number | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    debit?: FloatFieldUpdateOperationsInput | number
    credit?: FloatFieldUpdateOperationsInput | number
    balance?: FloatFieldUpdateOperationsInput | number
    linkedTransactionId?: NullableIntFieldUpdateOperationsInput | number | null
    transferToAccountId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    linkedBy?: TransactionUncheckedUpdateOneWithoutLinkedTransactionNestedInput
  }

  export type TransactionUncheckedUpdateManyWithoutAccountInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: FloatFieldUpdateOperationsInput | number
    payerId?: NullableIntFieldUpdateOperationsInput | number | null
    payeeId?: NullableIntFieldUpdateOperationsInput | number | null
    paymentMethodId?: NullableIntFieldUpdateOperationsInput | number | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    debit?: FloatFieldUpdateOperationsInput | number
    credit?: FloatFieldUpdateOperationsInput | number
    balance?: FloatFieldUpdateOperationsInput | number
    linkedTransactionId?: NullableIntFieldUpdateOperationsInput | number | null
    transferToAccountId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecurringTransactionUpdateWithoutAccountInput = {
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amount?: FloatFieldUpdateOperationsInput | number
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRecurringStatusFieldUpdateOperationsInput | $Enums.RecurringStatus
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    nextDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    frequency?: EnumRecurringFrequencyFieldUpdateOperationsInput | $Enums.RecurringFrequency
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRecurringTransactionsNestedInput
    category?: CategoryUpdateOneRequiredWithoutRecurringTransactionsNestedInput
    payer?: PayeePayerUpdateOneWithoutRecurringAsPayerNestedInput
    payee?: PayeePayerUpdateOneWithoutRecurringAsPayeeNestedInput
    paymentMethod?: PaymentMethodUpdateOneWithoutRecurringTransactionsNestedInput
  }

  export type RecurringTransactionUncheckedUpdateWithoutAccountInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    categoryId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    payerId?: NullableIntFieldUpdateOperationsInput | number | null
    payeeId?: NullableIntFieldUpdateOperationsInput | number | null
    paymentMethodId?: NullableIntFieldUpdateOperationsInput | number | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRecurringStatusFieldUpdateOperationsInput | $Enums.RecurringStatus
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    nextDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    frequency?: EnumRecurringFrequencyFieldUpdateOperationsInput | $Enums.RecurringFrequency
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecurringTransactionUncheckedUpdateManyWithoutAccountInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    categoryId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    payerId?: NullableIntFieldUpdateOperationsInput | number | null
    payeeId?: NullableIntFieldUpdateOperationsInput | number | null
    paymentMethodId?: NullableIntFieldUpdateOperationsInput | number | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRecurringStatusFieldUpdateOperationsInput | $Enums.RecurringStatus
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    nextDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    frequency?: EnumRecurringFrequencyFieldUpdateOperationsInput | $Enums.RecurringFrequency
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUpdateWithoutTransferToAccountInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amount?: FloatFieldUpdateOperationsInput | number
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    debit?: FloatFieldUpdateOperationsInput | number
    credit?: FloatFieldUpdateOperationsInput | number
    balance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    linkedTransaction?: TransactionUpdateOneWithoutLinkedByNestedInput
    linkedBy?: TransactionUpdateOneWithoutLinkedTransactionNestedInput
    user?: UserUpdateOneRequiredWithoutTransactionsNestedInput
    account?: FinanceAccountUpdateOneRequiredWithoutTransactionsNestedInput
    category?: CategoryUpdateOneWithoutTransactionsNestedInput
    payer?: PayeePayerUpdateOneWithoutPayerTransactionsNestedInput
    payee?: PayeePayerUpdateOneWithoutPayeeTransactionsNestedInput
    paymentMethod?: PaymentMethodUpdateOneWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateWithoutTransferToAccountInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    accountId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: FloatFieldUpdateOperationsInput | number
    payerId?: NullableIntFieldUpdateOperationsInput | number | null
    payeeId?: NullableIntFieldUpdateOperationsInput | number | null
    paymentMethodId?: NullableIntFieldUpdateOperationsInput | number | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    debit?: FloatFieldUpdateOperationsInput | number
    credit?: FloatFieldUpdateOperationsInput | number
    balance?: FloatFieldUpdateOperationsInput | number
    linkedTransactionId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    linkedBy?: TransactionUncheckedUpdateOneWithoutLinkedTransactionNestedInput
  }

  export type TransactionUncheckedUpdateManyWithoutTransferToAccountInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    accountId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: FloatFieldUpdateOperationsInput | number
    payerId?: NullableIntFieldUpdateOperationsInput | number | null
    payeeId?: NullableIntFieldUpdateOperationsInput | number | null
    paymentMethodId?: NullableIntFieldUpdateOperationsInput | number | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    debit?: FloatFieldUpdateOperationsInput | number
    credit?: FloatFieldUpdateOperationsInput | number
    balance?: FloatFieldUpdateOperationsInput | number
    linkedTransactionId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateManyCategoryInput = {
    id?: number
    userId: string
    accountId: number
    date: Date | string
    type: $Enums.TransactionType
    amount: number
    payerId?: number | null
    payeeId?: number | null
    paymentMethodId?: number | null
    reference?: string | null
    note?: string | null
    debit?: number
    credit?: number
    balance?: number
    linkedTransactionId?: number | null
    transferToAccountId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RecurringTransactionCreateManyCategoryInput = {
    id?: number
    userId: string
    accountId: number
    type: $Enums.TransactionType
    amount: number
    payerId?: number | null
    payeeId?: number | null
    paymentMethodId?: number | null
    reference?: string | null
    status?: $Enums.RecurringStatus
    description?: string | null
    startDate: Date | string
    nextDate?: Date | string | null
    frequency: $Enums.RecurringFrequency
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionUpdateWithoutCategoryInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amount?: FloatFieldUpdateOperationsInput | number
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    debit?: FloatFieldUpdateOperationsInput | number
    credit?: FloatFieldUpdateOperationsInput | number
    balance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    linkedTransaction?: TransactionUpdateOneWithoutLinkedByNestedInput
    linkedBy?: TransactionUpdateOneWithoutLinkedTransactionNestedInput
    transferToAccount?: FinanceAccountUpdateOneWithoutTransfersToNestedInput
    user?: UserUpdateOneRequiredWithoutTransactionsNestedInput
    account?: FinanceAccountUpdateOneRequiredWithoutTransactionsNestedInput
    payer?: PayeePayerUpdateOneWithoutPayerTransactionsNestedInput
    payee?: PayeePayerUpdateOneWithoutPayeeTransactionsNestedInput
    paymentMethod?: PaymentMethodUpdateOneWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    accountId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amount?: FloatFieldUpdateOperationsInput | number
    payerId?: NullableIntFieldUpdateOperationsInput | number | null
    payeeId?: NullableIntFieldUpdateOperationsInput | number | null
    paymentMethodId?: NullableIntFieldUpdateOperationsInput | number | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    debit?: FloatFieldUpdateOperationsInput | number
    credit?: FloatFieldUpdateOperationsInput | number
    balance?: FloatFieldUpdateOperationsInput | number
    linkedTransactionId?: NullableIntFieldUpdateOperationsInput | number | null
    transferToAccountId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    linkedBy?: TransactionUncheckedUpdateOneWithoutLinkedTransactionNestedInput
  }

  export type TransactionUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    accountId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amount?: FloatFieldUpdateOperationsInput | number
    payerId?: NullableIntFieldUpdateOperationsInput | number | null
    payeeId?: NullableIntFieldUpdateOperationsInput | number | null
    paymentMethodId?: NullableIntFieldUpdateOperationsInput | number | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    debit?: FloatFieldUpdateOperationsInput | number
    credit?: FloatFieldUpdateOperationsInput | number
    balance?: FloatFieldUpdateOperationsInput | number
    linkedTransactionId?: NullableIntFieldUpdateOperationsInput | number | null
    transferToAccountId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecurringTransactionUpdateWithoutCategoryInput = {
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amount?: FloatFieldUpdateOperationsInput | number
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRecurringStatusFieldUpdateOperationsInput | $Enums.RecurringStatus
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    nextDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    frequency?: EnumRecurringFrequencyFieldUpdateOperationsInput | $Enums.RecurringFrequency
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRecurringTransactionsNestedInput
    account?: FinanceAccountUpdateOneRequiredWithoutRecurringTransactionsNestedInput
    payer?: PayeePayerUpdateOneWithoutRecurringAsPayerNestedInput
    payee?: PayeePayerUpdateOneWithoutRecurringAsPayeeNestedInput
    paymentMethod?: PaymentMethodUpdateOneWithoutRecurringTransactionsNestedInput
  }

  export type RecurringTransactionUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    accountId?: IntFieldUpdateOperationsInput | number
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amount?: FloatFieldUpdateOperationsInput | number
    payerId?: NullableIntFieldUpdateOperationsInput | number | null
    payeeId?: NullableIntFieldUpdateOperationsInput | number | null
    paymentMethodId?: NullableIntFieldUpdateOperationsInput | number | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRecurringStatusFieldUpdateOperationsInput | $Enums.RecurringStatus
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    nextDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    frequency?: EnumRecurringFrequencyFieldUpdateOperationsInput | $Enums.RecurringFrequency
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecurringTransactionUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    accountId?: IntFieldUpdateOperationsInput | number
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amount?: FloatFieldUpdateOperationsInput | number
    payerId?: NullableIntFieldUpdateOperationsInput | number | null
    payeeId?: NullableIntFieldUpdateOperationsInput | number | null
    paymentMethodId?: NullableIntFieldUpdateOperationsInput | number | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRecurringStatusFieldUpdateOperationsInput | $Enums.RecurringStatus
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    nextDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    frequency?: EnumRecurringFrequencyFieldUpdateOperationsInput | $Enums.RecurringFrequency
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateManyPayerInput = {
    id?: number
    userId: string
    accountId: number
    date: Date | string
    type: $Enums.TransactionType
    categoryId?: number | null
    amount: number
    payeeId?: number | null
    paymentMethodId?: number | null
    reference?: string | null
    note?: string | null
    debit?: number
    credit?: number
    balance?: number
    linkedTransactionId?: number | null
    transferToAccountId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionCreateManyPayeeInput = {
    id?: number
    userId: string
    accountId: number
    date: Date | string
    type: $Enums.TransactionType
    categoryId?: number | null
    amount: number
    payerId?: number | null
    paymentMethodId?: number | null
    reference?: string | null
    note?: string | null
    debit?: number
    credit?: number
    balance?: number
    linkedTransactionId?: number | null
    transferToAccountId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RecurringTransactionCreateManyPayerInput = {
    id?: number
    userId: string
    accountId: number
    type: $Enums.TransactionType
    categoryId: number
    amount: number
    payeeId?: number | null
    paymentMethodId?: number | null
    reference?: string | null
    status?: $Enums.RecurringStatus
    description?: string | null
    startDate: Date | string
    nextDate?: Date | string | null
    frequency: $Enums.RecurringFrequency
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RecurringTransactionCreateManyPayeeInput = {
    id?: number
    userId: string
    accountId: number
    type: $Enums.TransactionType
    categoryId: number
    amount: number
    payerId?: number | null
    paymentMethodId?: number | null
    reference?: string | null
    status?: $Enums.RecurringStatus
    description?: string | null
    startDate: Date | string
    nextDate?: Date | string | null
    frequency: $Enums.RecurringFrequency
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionUpdateWithoutPayerInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amount?: FloatFieldUpdateOperationsInput | number
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    debit?: FloatFieldUpdateOperationsInput | number
    credit?: FloatFieldUpdateOperationsInput | number
    balance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    linkedTransaction?: TransactionUpdateOneWithoutLinkedByNestedInput
    linkedBy?: TransactionUpdateOneWithoutLinkedTransactionNestedInput
    transferToAccount?: FinanceAccountUpdateOneWithoutTransfersToNestedInput
    user?: UserUpdateOneRequiredWithoutTransactionsNestedInput
    account?: FinanceAccountUpdateOneRequiredWithoutTransactionsNestedInput
    category?: CategoryUpdateOneWithoutTransactionsNestedInput
    payee?: PayeePayerUpdateOneWithoutPayeeTransactionsNestedInput
    paymentMethod?: PaymentMethodUpdateOneWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateWithoutPayerInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    accountId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: FloatFieldUpdateOperationsInput | number
    payeeId?: NullableIntFieldUpdateOperationsInput | number | null
    paymentMethodId?: NullableIntFieldUpdateOperationsInput | number | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    debit?: FloatFieldUpdateOperationsInput | number
    credit?: FloatFieldUpdateOperationsInput | number
    balance?: FloatFieldUpdateOperationsInput | number
    linkedTransactionId?: NullableIntFieldUpdateOperationsInput | number | null
    transferToAccountId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    linkedBy?: TransactionUncheckedUpdateOneWithoutLinkedTransactionNestedInput
  }

  export type TransactionUncheckedUpdateManyWithoutPayerInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    accountId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: FloatFieldUpdateOperationsInput | number
    payeeId?: NullableIntFieldUpdateOperationsInput | number | null
    paymentMethodId?: NullableIntFieldUpdateOperationsInput | number | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    debit?: FloatFieldUpdateOperationsInput | number
    credit?: FloatFieldUpdateOperationsInput | number
    balance?: FloatFieldUpdateOperationsInput | number
    linkedTransactionId?: NullableIntFieldUpdateOperationsInput | number | null
    transferToAccountId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUpdateWithoutPayeeInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amount?: FloatFieldUpdateOperationsInput | number
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    debit?: FloatFieldUpdateOperationsInput | number
    credit?: FloatFieldUpdateOperationsInput | number
    balance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    linkedTransaction?: TransactionUpdateOneWithoutLinkedByNestedInput
    linkedBy?: TransactionUpdateOneWithoutLinkedTransactionNestedInput
    transferToAccount?: FinanceAccountUpdateOneWithoutTransfersToNestedInput
    user?: UserUpdateOneRequiredWithoutTransactionsNestedInput
    account?: FinanceAccountUpdateOneRequiredWithoutTransactionsNestedInput
    category?: CategoryUpdateOneWithoutTransactionsNestedInput
    payer?: PayeePayerUpdateOneWithoutPayerTransactionsNestedInput
    paymentMethod?: PaymentMethodUpdateOneWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateWithoutPayeeInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    accountId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: FloatFieldUpdateOperationsInput | number
    payerId?: NullableIntFieldUpdateOperationsInput | number | null
    paymentMethodId?: NullableIntFieldUpdateOperationsInput | number | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    debit?: FloatFieldUpdateOperationsInput | number
    credit?: FloatFieldUpdateOperationsInput | number
    balance?: FloatFieldUpdateOperationsInput | number
    linkedTransactionId?: NullableIntFieldUpdateOperationsInput | number | null
    transferToAccountId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    linkedBy?: TransactionUncheckedUpdateOneWithoutLinkedTransactionNestedInput
  }

  export type TransactionUncheckedUpdateManyWithoutPayeeInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    accountId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: FloatFieldUpdateOperationsInput | number
    payerId?: NullableIntFieldUpdateOperationsInput | number | null
    paymentMethodId?: NullableIntFieldUpdateOperationsInput | number | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    debit?: FloatFieldUpdateOperationsInput | number
    credit?: FloatFieldUpdateOperationsInput | number
    balance?: FloatFieldUpdateOperationsInput | number
    linkedTransactionId?: NullableIntFieldUpdateOperationsInput | number | null
    transferToAccountId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecurringTransactionUpdateWithoutPayerInput = {
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amount?: FloatFieldUpdateOperationsInput | number
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRecurringStatusFieldUpdateOperationsInput | $Enums.RecurringStatus
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    nextDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    frequency?: EnumRecurringFrequencyFieldUpdateOperationsInput | $Enums.RecurringFrequency
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRecurringTransactionsNestedInput
    account?: FinanceAccountUpdateOneRequiredWithoutRecurringTransactionsNestedInput
    category?: CategoryUpdateOneRequiredWithoutRecurringTransactionsNestedInput
    payee?: PayeePayerUpdateOneWithoutRecurringAsPayeeNestedInput
    paymentMethod?: PaymentMethodUpdateOneWithoutRecurringTransactionsNestedInput
  }

  export type RecurringTransactionUncheckedUpdateWithoutPayerInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    accountId?: IntFieldUpdateOperationsInput | number
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    categoryId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    payeeId?: NullableIntFieldUpdateOperationsInput | number | null
    paymentMethodId?: NullableIntFieldUpdateOperationsInput | number | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRecurringStatusFieldUpdateOperationsInput | $Enums.RecurringStatus
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    nextDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    frequency?: EnumRecurringFrequencyFieldUpdateOperationsInput | $Enums.RecurringFrequency
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecurringTransactionUncheckedUpdateManyWithoutPayerInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    accountId?: IntFieldUpdateOperationsInput | number
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    categoryId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    payeeId?: NullableIntFieldUpdateOperationsInput | number | null
    paymentMethodId?: NullableIntFieldUpdateOperationsInput | number | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRecurringStatusFieldUpdateOperationsInput | $Enums.RecurringStatus
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    nextDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    frequency?: EnumRecurringFrequencyFieldUpdateOperationsInput | $Enums.RecurringFrequency
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecurringTransactionUpdateWithoutPayeeInput = {
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amount?: FloatFieldUpdateOperationsInput | number
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRecurringStatusFieldUpdateOperationsInput | $Enums.RecurringStatus
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    nextDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    frequency?: EnumRecurringFrequencyFieldUpdateOperationsInput | $Enums.RecurringFrequency
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRecurringTransactionsNestedInput
    account?: FinanceAccountUpdateOneRequiredWithoutRecurringTransactionsNestedInput
    category?: CategoryUpdateOneRequiredWithoutRecurringTransactionsNestedInput
    payer?: PayeePayerUpdateOneWithoutRecurringAsPayerNestedInput
    paymentMethod?: PaymentMethodUpdateOneWithoutRecurringTransactionsNestedInput
  }

  export type RecurringTransactionUncheckedUpdateWithoutPayeeInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    accountId?: IntFieldUpdateOperationsInput | number
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    categoryId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    payerId?: NullableIntFieldUpdateOperationsInput | number | null
    paymentMethodId?: NullableIntFieldUpdateOperationsInput | number | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRecurringStatusFieldUpdateOperationsInput | $Enums.RecurringStatus
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    nextDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    frequency?: EnumRecurringFrequencyFieldUpdateOperationsInput | $Enums.RecurringFrequency
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecurringTransactionUncheckedUpdateManyWithoutPayeeInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    accountId?: IntFieldUpdateOperationsInput | number
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    categoryId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    payerId?: NullableIntFieldUpdateOperationsInput | number | null
    paymentMethodId?: NullableIntFieldUpdateOperationsInput | number | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRecurringStatusFieldUpdateOperationsInput | $Enums.RecurringStatus
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    nextDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    frequency?: EnumRecurringFrequencyFieldUpdateOperationsInput | $Enums.RecurringFrequency
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateManyPaymentMethodInput = {
    id?: number
    userId: string
    accountId: number
    date: Date | string
    type: $Enums.TransactionType
    categoryId?: number | null
    amount: number
    payerId?: number | null
    payeeId?: number | null
    reference?: string | null
    note?: string | null
    debit?: number
    credit?: number
    balance?: number
    linkedTransactionId?: number | null
    transferToAccountId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RecurringTransactionCreateManyPaymentMethodInput = {
    id?: number
    userId: string
    accountId: number
    type: $Enums.TransactionType
    categoryId: number
    amount: number
    payerId?: number | null
    payeeId?: number | null
    reference?: string | null
    status?: $Enums.RecurringStatus
    description?: string | null
    startDate: Date | string
    nextDate?: Date | string | null
    frequency: $Enums.RecurringFrequency
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionUpdateWithoutPaymentMethodInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amount?: FloatFieldUpdateOperationsInput | number
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    debit?: FloatFieldUpdateOperationsInput | number
    credit?: FloatFieldUpdateOperationsInput | number
    balance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    linkedTransaction?: TransactionUpdateOneWithoutLinkedByNestedInput
    linkedBy?: TransactionUpdateOneWithoutLinkedTransactionNestedInput
    transferToAccount?: FinanceAccountUpdateOneWithoutTransfersToNestedInput
    user?: UserUpdateOneRequiredWithoutTransactionsNestedInput
    account?: FinanceAccountUpdateOneRequiredWithoutTransactionsNestedInput
    category?: CategoryUpdateOneWithoutTransactionsNestedInput
    payer?: PayeePayerUpdateOneWithoutPayerTransactionsNestedInput
    payee?: PayeePayerUpdateOneWithoutPayeeTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateWithoutPaymentMethodInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    accountId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: FloatFieldUpdateOperationsInput | number
    payerId?: NullableIntFieldUpdateOperationsInput | number | null
    payeeId?: NullableIntFieldUpdateOperationsInput | number | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    debit?: FloatFieldUpdateOperationsInput | number
    credit?: FloatFieldUpdateOperationsInput | number
    balance?: FloatFieldUpdateOperationsInput | number
    linkedTransactionId?: NullableIntFieldUpdateOperationsInput | number | null
    transferToAccountId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    linkedBy?: TransactionUncheckedUpdateOneWithoutLinkedTransactionNestedInput
  }

  export type TransactionUncheckedUpdateManyWithoutPaymentMethodInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    accountId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: FloatFieldUpdateOperationsInput | number
    payerId?: NullableIntFieldUpdateOperationsInput | number | null
    payeeId?: NullableIntFieldUpdateOperationsInput | number | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    debit?: FloatFieldUpdateOperationsInput | number
    credit?: FloatFieldUpdateOperationsInput | number
    balance?: FloatFieldUpdateOperationsInput | number
    linkedTransactionId?: NullableIntFieldUpdateOperationsInput | number | null
    transferToAccountId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecurringTransactionUpdateWithoutPaymentMethodInput = {
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amount?: FloatFieldUpdateOperationsInput | number
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRecurringStatusFieldUpdateOperationsInput | $Enums.RecurringStatus
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    nextDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    frequency?: EnumRecurringFrequencyFieldUpdateOperationsInput | $Enums.RecurringFrequency
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRecurringTransactionsNestedInput
    account?: FinanceAccountUpdateOneRequiredWithoutRecurringTransactionsNestedInput
    category?: CategoryUpdateOneRequiredWithoutRecurringTransactionsNestedInput
    payer?: PayeePayerUpdateOneWithoutRecurringAsPayerNestedInput
    payee?: PayeePayerUpdateOneWithoutRecurringAsPayeeNestedInput
  }

  export type RecurringTransactionUncheckedUpdateWithoutPaymentMethodInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    accountId?: IntFieldUpdateOperationsInput | number
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    categoryId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    payerId?: NullableIntFieldUpdateOperationsInput | number | null
    payeeId?: NullableIntFieldUpdateOperationsInput | number | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRecurringStatusFieldUpdateOperationsInput | $Enums.RecurringStatus
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    nextDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    frequency?: EnumRecurringFrequencyFieldUpdateOperationsInput | $Enums.RecurringFrequency
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecurringTransactionUncheckedUpdateManyWithoutPaymentMethodInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    accountId?: IntFieldUpdateOperationsInput | number
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    categoryId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    payerId?: NullableIntFieldUpdateOperationsInput | number | null
    payeeId?: NullableIntFieldUpdateOperationsInput | number | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRecurringStatusFieldUpdateOperationsInput | $Enums.RecurringStatus
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    nextDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    frequency?: EnumRecurringFrequencyFieldUpdateOperationsInput | $Enums.RecurringFrequency
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