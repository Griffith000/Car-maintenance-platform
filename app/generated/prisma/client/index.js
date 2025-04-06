
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime,
  createParam,
} = require('./runtime/library.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.5.0
 * Query Engine version: 173f8d54f8d52e692c7e27e72a88314ec7aeff60
 */
Prisma.prismaVersion = {
  client: "6.5.0",
  engine: "173f8d54f8d52e692c7e27e72a88314ec7aeff60"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}




  const path = require('path')

/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.VehicleScalarFieldEnum = {
  vin: 'vin',
  local: 'local',
  registration: 'registration',
  registrationType: 'registrationType',
  location: 'location'
};

exports.Prisma.MechanicScalarFieldEnum = {
  mechanicId: 'mechanicId',
  payPerHour: 'payPerHour',
  diagnosticDiagnosticId: 'diagnosticDiagnosticId',
  repairRepairId: 'repairRepairId'
};

exports.Prisma.HeadMechanicScalarFieldEnum = {
  mechanicId: 'mechanicId'
};

exports.Prisma.ReservationScalarFieldEnum = {
  reservationId: 'reservationId',
  mobilePhone: 'mobilePhone',
  date: 'date',
  baseFee: 'baseFee',
  repairStatus: 'repairStatus',
  vehicleId: 'vehicleId'
};

exports.Prisma.DiagnosticScalarFieldEnum = {
  diagnosticId: 'diagnosticId',
  responsibleId: 'responsibleId',
  reservationId: 'reservationId'
};

exports.Prisma.RepairScalarFieldEnum = {
  repairId: 'repairId',
  responsibleId: 'responsibleId',
  reservationId: 'reservationId',
  totalRepairHours: 'totalRepairHours'
};

exports.Prisma.RepairPartScalarFieldEnum = {
  partId: 'partId',
  price: 'price',
  repairId: 'repairId',
  vendorId: 'vendorId'
};

exports.Prisma.VendorScalarFieldEnum = {
  vendorId: 'vendorId',
  vendorShopName: 'vendorShopName',
  vendorShopAddress: 'vendorShopAddress'
};

exports.Prisma.UserScalarFieldEnum = {
  userId: 'userId',
  username: 'username',
  email: 'email',
  phone: 'phone',
  role: 'role',
  image: 'image'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.RegTypes = exports.$Enums.RegTypes = {
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

exports.RepairStatus = exports.$Enums.RepairStatus = {
  DIAGNOSTIC: 'DIAGNOSTIC',
  REPAIR: 'REPAIR',
  SUCCESS: 'SUCCESS',
  FAILURE: 'FAILURE'
};

exports.Roles = exports.$Enums.Roles = {
  PEASANT: 'PEASANT',
  ADMIN: 'ADMIN'
};

exports.Prisma.ModelName = {
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
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/home/slamzdank/dev/Car-maintenance-platform/app/generated/prisma/client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "debian-openssl-3.0.x",
        "native": true
      }
    ],
    "previewFeatures": [],
    "sourceFilePath": "/home/slamzdank/dev/Car-maintenance-platform/prisma/schema.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../../../.env"
  },
  "relativePath": "../../../../prisma",
  "clientVersion": "6.5.0",
  "engineVersion": "173f8d54f8d52e692c7e27e72a88314ec7aeff60",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "// This is your Prisma schema file,\n// learn more about it in the docs: https://pris.ly/d/prisma-schema\n\n// Looking for ways to speed up your queries, or scale easily with your serverless or edge functions?\n// Try Prisma Accelerate: https://pris.ly/cli/accelerate-init\n\ngenerator client {\n  provider = \"prisma-client-js\"\n  output   = \"../app/generated/prisma/client\"\n}\n\ndatasource db {\n  provider = \"postgresql\"\n  url      = env(\"DATABASE_URL\")\n}\n\n// creating models for the car\n// the models are to be inputted one by one and then linked\n// 1/ The models are being created (Somewhat done)\n// 2/ the models will be linked with each other (What i am currently doing)\n// 3/ test the relationship between these tables\n\n// Chb3a erreurat\n\nenum RegTypes {\n  TUN\n  RS\n  TRAC\n  PAT\n  CMD\n  CD\n  MD\n  MC\n  CC\n  REM\n  AA\n  ES\n  PE\n  IT\n}\n\nenum RepairStatus {\n  DIAGNOSTIC\n  REPAIR\n  SUCCESS\n  FAILURE\n}\n\nmodel Vehicle {\n  vin   String  @id\n  local Boolean //for local in-house vehicles and the not local (imported) vehicles \n\n  // define in-house vehicles (nullable)\n  registration     String? // to maybe set automatically when the registration type is selected\n  registrationType RegTypes? // null if local is false\n\n  // define imported vehicles (nullable also) \n  location    String?\n  reservation Reservation[]\n}\n\nmodel Mechanic {\n  mechanicId             Int           @id\n  payPerHour             Float\n  headMechanic           HeadMechanic?\n  diagnostic             Diagnostic?   @relation(fields: [diagnosticDiagnosticId], references: [diagnosticId])\n  diagnosticDiagnosticId Int?\n  repair                 Repair?       @relation(fields: [repairRepairId], references: [repairId])\n  repairRepairId         Int?\n}\n\nmodel HeadMechanic {\n  mechanicId Int          @unique\n  mechanic   Mechanic     @relation(fields: [mechanicId], references: [mechanicId])\n  diagnostic Diagnostic[]\n  repair     Repair[]\n}\n\n// currently the phone number supports only the phones in tunisian format only (may support global phone numbers later)\n\nenum Roles {\n  PEASANT\n  ADMIN\n}\n\nmodel Reservation {\n  reservationId Int           @id @default(autoincrement())\n  mobilePhone   String        @db.VarChar(8)\n  date          DateTime\n  baseFee       Float? // if there is a fee or not\n  repairStatus  RepairStatus? // to both get information about the repair and it's type\n  vehicleId     String\n  vehicle       Vehicle       @relation(fields: [vehicleId], references: [vin])\n\n  // to test later\n  // need to make this work for later @@db.check(\"mobile_phone ~ '^(2|5|9)[0-9]{7}$'\") \n  diagnostic Diagnostic[]\n  repair     Repair[]\n}\n\nmodel Diagnostic {\n  diagnosticId    Int          @id @default(autoincrement())\n  responsibleId   Int\n  responsible     HeadMechanic @relation(fields: [responsibleId], references: [mechanicId])\n  workersEmployed Mechanic[]\n\n  reservationId Int\n  reservation   Reservation @relation(fields: [reservationId], references: [reservationId]) // are names supposed to be the same?\n}\n\nmodel Repair {\n  repairId        Int          @id @default(autoincrement())\n  responsibleId   Int\n  responsible     HeadMechanic @relation(fields: [responsibleId], references: [mechanicId])\n  workersEmployed Mechanic[]\n\n  reservationId    Int\n  reservation      Reservation @relation(fields: [reservationId], references: [reservationId])\n  totalRepairHours Int\n}\n\nmodel RepairPart {\n  partId   String @id\n  price    Float\n  repairId Int[]\n  vendorId Int[]\n}\n\n// the price is maybe problematic\n\nmodel Vendor {\n  vendorId          Int    @id\n  vendorShopName    String\n  vendorShopAddress String\n}\n\n// models\nmodel User {\n  userId   Int     @id @default(autoincrement())\n  username String  @default(\"default_username\")\n  email    String  @unique\n  phone    String?\n  role     Roles   @default(PEASANT)\n  image    String?\n}\n",
  "inlineSchemaHash": "166c6060c7ea3a456ad19f6e15373d5e4fcf4d84786f86bda8e3695c2698bc14",
  "copyEngine": true
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "app/generated/prisma/client",
    "generated/prisma/client",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"Vehicle\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"vin\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"local\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"registration\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"registrationType\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"RegTypes\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"location\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reservation\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Reservation\",\"nativeType\":null,\"relationName\":\"ReservationToVehicle\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Mechanic\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"mechanicId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"payPerHour\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"headMechanic\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"HeadMechanic\",\"nativeType\":null,\"relationName\":\"HeadMechanicToMechanic\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"diagnostic\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Diagnostic\",\"nativeType\":null,\"relationName\":\"DiagnosticToMechanic\",\"relationFromFields\":[\"diagnosticDiagnosticId\"],\"relationToFields\":[\"diagnosticId\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"diagnosticDiagnosticId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"repair\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Repair\",\"nativeType\":null,\"relationName\":\"MechanicToRepair\",\"relationFromFields\":[\"repairRepairId\"],\"relationToFields\":[\"repairId\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"repairRepairId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"HeadMechanic\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"mechanicId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mechanic\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Mechanic\",\"nativeType\":null,\"relationName\":\"HeadMechanicToMechanic\",\"relationFromFields\":[\"mechanicId\"],\"relationToFields\":[\"mechanicId\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"diagnostic\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Diagnostic\",\"nativeType\":null,\"relationName\":\"DiagnosticToHeadMechanic\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"repair\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Repair\",\"nativeType\":null,\"relationName\":\"HeadMechanicToRepair\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Reservation\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"reservationId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mobilePhone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"8\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"baseFee\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"repairStatus\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"RepairStatus\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"vehicleId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"vehicle\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Vehicle\",\"nativeType\":null,\"relationName\":\"ReservationToVehicle\",\"relationFromFields\":[\"vehicleId\"],\"relationToFields\":[\"vin\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"diagnostic\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Diagnostic\",\"nativeType\":null,\"relationName\":\"DiagnosticToReservation\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"repair\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Repair\",\"nativeType\":null,\"relationName\":\"RepairToReservation\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Diagnostic\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"diagnosticId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"responsibleId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"responsible\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"HeadMechanic\",\"nativeType\":null,\"relationName\":\"DiagnosticToHeadMechanic\",\"relationFromFields\":[\"responsibleId\"],\"relationToFields\":[\"mechanicId\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"workersEmployed\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Mechanic\",\"nativeType\":null,\"relationName\":\"DiagnosticToMechanic\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reservationId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reservation\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Reservation\",\"nativeType\":null,\"relationName\":\"DiagnosticToReservation\",\"relationFromFields\":[\"reservationId\"],\"relationToFields\":[\"reservationId\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Repair\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"repairId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"responsibleId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"responsible\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"HeadMechanic\",\"nativeType\":null,\"relationName\":\"HeadMechanicToRepair\",\"relationFromFields\":[\"responsibleId\"],\"relationToFields\":[\"mechanicId\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"workersEmployed\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Mechanic\",\"nativeType\":null,\"relationName\":\"MechanicToRepair\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reservationId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reservation\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Reservation\",\"nativeType\":null,\"relationName\":\"RepairToReservation\",\"relationFromFields\":[\"reservationId\"],\"relationToFields\":[\"reservationId\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"totalRepairHours\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"RepairPart\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"partId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"repairId\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"vendorId\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Vendor\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"vendorId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"vendorShopName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"vendorShopAddress\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"User\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"username\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":\"default_username\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Roles\",\"nativeType\":null,\"default\":\"PEASANT\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"image\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"RegTypes\":{\"values\":[{\"name\":\"TUN\",\"dbName\":null},{\"name\":\"RS\",\"dbName\":null},{\"name\":\"TRAC\",\"dbName\":null},{\"name\":\"PAT\",\"dbName\":null},{\"name\":\"CMD\",\"dbName\":null},{\"name\":\"CD\",\"dbName\":null},{\"name\":\"MD\",\"dbName\":null},{\"name\":\"MC\",\"dbName\":null},{\"name\":\"CC\",\"dbName\":null},{\"name\":\"REM\",\"dbName\":null},{\"name\":\"AA\",\"dbName\":null},{\"name\":\"ES\",\"dbName\":null},{\"name\":\"PE\",\"dbName\":null},{\"name\":\"IT\",\"dbName\":null}],\"dbName\":null},\"RepairStatus\":{\"values\":[{\"name\":\"DIAGNOSTIC\",\"dbName\":null},{\"name\":\"REPAIR\",\"dbName\":null},{\"name\":\"SUCCESS\",\"dbName\":null},{\"name\":\"FAILURE\",\"dbName\":null}],\"dbName\":null},\"Roles\":{\"values\":[{\"name\":\"PEASANT\",\"dbName\":null},{\"name\":\"ADMIN\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined
config.compilerWasm = undefined


const { warnEnvConflicts } = require('./runtime/library.js')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, "libquery_engine-debian-openssl-3.0.x.so.node");
path.join(process.cwd(), "app/generated/prisma/client/libquery_engine-debian-openssl-3.0.x.so.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "app/generated/prisma/client/schema.prisma")
