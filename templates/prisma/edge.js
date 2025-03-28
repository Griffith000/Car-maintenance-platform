
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
} = require('./runtime/edge.js')


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





/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.VehiculeScalarFieldEnum = {
  vin: 'vin',
  local: 'local',
  registation: 'registation',
  registration_type: 'registration_type',
  location: 'location'
};

exports.Prisma.MechanicScalarFieldEnum = {
  mechanic_id: 'mechanic_id',
  pay_per_hour: 'pay_per_hour',
  diagnosticDiagnostic_id: 'diagnosticDiagnostic_id',
  repairRepair_id: 'repairRepair_id'
};

exports.Prisma.HeadMechanicScalarFieldEnum = {
  mechanic_id: 'mechanic_id'
};

exports.Prisma.ReservationScalarFieldEnum = {
  reservation_id: 'reservation_id',
  mobile_phone: 'mobile_phone',
  date: 'date',
  base_fee: 'base_fee',
  repair_status: 'repair_status',
  vehicule_id: 'vehicule_id'
};

exports.Prisma.DiagnosticScalarFieldEnum = {
  diagnostic_id: 'diagnostic_id',
  responsible_id: 'responsible_id',
  reservation_id: 'reservation_id'
};

exports.Prisma.RepairScalarFieldEnum = {
  repair_id: 'repair_id',
  responsible_id: 'responsible_id',
  reservation_id: 'reservation_id',
  total_repair_hours: 'total_repair_hours'
};

exports.Prisma.RepairPartScalarFieldEnum = {
  part_id: 'part_id',
  price: 'price',
  repair_id: 'repair_id',
  vendor_id: 'vendor_id'
};

exports.Prisma.VendorScalarFieldEnum = {
  vendor_id: 'vendor_id',
  vendor_shop_name: 'vendor_shop_name',
  vendor_shop_address: 'vendor_shop_address'
};

exports.Prisma.UserScalarFieldEnum = {
  user_id: 'user_id',
  email: 'email',
  name: 'name'
};

exports.Prisma.PostScalarFieldEnum = {
  post_id: 'post_id',
  title: 'title',
  content: 'content',
  published: 'published',
  authorId: 'authorId'
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

exports.Prisma.ModelName = {
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
      "value": "/home/slamzdank/dev/Car-maintenance-platform/templates/prisma",
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
    "schemaEnvPath": "../../.env"
  },
  "relativePath": "../../prisma",
  "clientVersion": "6.5.0",
  "engineVersion": "173f8d54f8d52e692c7e27e72a88314ec7aeff60",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "// This is your Prisma schema file,\n// learn more about it in the docs: https://pris.ly/d/prisma-schema\n\n// Looking for ways to speed up your queries, or scale easily with your serverless or edge functions?\n// Try Prisma Accelerate: https://pris.ly/cli/accelerate-init\n\ngenerator client {\n  provider = \"prisma-client-js\"\n  output   = \"../templates/prisma\"\n}\n\ndatasource db {\n  provider = \"postgresql\"\n  url      = env(\"DATABASE_URL\")\n}\n\n// creating models for the car\n// the models are to be inputted one by one and then linked\n// 1/ The models are being created (Somewhat done)\n// 2/ the models will be linked with each other (What i am currently doing)\n// 3/ test the relationship between these tables\n\n// Chb3a erreurat\n\nenum RegTypes {\n  TUN\n  RS\n  TRAC\n  PAT\n  CMD\n  CD\n  MD\n  MC\n  CC\n  REM\n  AA\n  ES\n  PE\n  IT\n}\n\nenum RepairStatus {\n  DIAGNOSTIC\n  REPAIR\n  SUCCESS\n  FAILURE\n}\n\nmodel Vehicule {\n  vin         String  @id\n  local       Boolean //for local in-house vehicules and the not local (imported) vehicules \n  registation String // to maybe set automatically when the registration type is selected\n\n  // define in-house vehicules (nullable)\n  registration_type RegTypes? // null if local is false\n\n  // define imported vehicules (nullable also) \n  location    String?\n  Reservation Reservation[]\n}\n\nmodel Mechanic {\n  mechanic_id             Int           @id\n  pay_per_hour            Float\n  HeadMechanic            HeadMechanic?\n  Diagnostic              Diagnostic?   @relation(fields: [diagnosticDiagnostic_id], references: [diagnostic_id])\n  diagnosticDiagnostic_id Int?\n  Repair                  Repair?       @relation(fields: [repairRepair_id], references: [repair_id])\n  repairRepair_id         Int?\n}\n\nmodel HeadMechanic {\n  mechanic_id Int          @unique\n  mechanic    Mechanic     @relation(fields: [mechanic_id], references: [mechanic_id])\n  Diagnostic  Diagnostic[]\n  Repair      Repair[]\n}\n\n// currently the phone number supports only the phones in tunisian format only (may support global phone numbers later)\n\nmodel Reservation {\n  reservation_id Int           @id @default(autoincrement())\n  mobile_phone   String        @db.VarChar(8)\n  date           DateTime\n  base_fee       Float? // if there is a fee or not\n  repair_status  RepairStatus? // to both get information about the repair and it's type\n  vehicule_id    String\n  vehicule       Vehicule      @relation(fields: [vehicule_id], references: [vin])\n\n  // to test later\n  // need to make this work for later @@db.check(\"mobile_phone ~ '^(2|5|9)[0-9]{7}$'\") \n  Diagnostic Diagnostic[]\n  Repair     Repair[]\n}\n\nmodel Diagnostic {\n  diagnostic_id    Int          @id @default(autoincrement())\n  responsible_id   Int\n  responsible      HeadMechanic @relation(fields: [responsible_id], references: [mechanic_id])\n  workers_employed Mechanic[]\n\n  reservation_id Int\n  reservation    Reservation @relation(fields: [reservation_id], references: [reservation_id]) // are names supposed to be the same?\n}\n\nmodel Repair {\n  repair_id        Int          @id @default(autoincrement())\n  responsible_id   Int\n  responsible      HeadMechanic @relation(fields: [responsible_id], references: [mechanic_id])\n  workers_employed Mechanic[]\n\n  reservation_id     Int\n  reservation        Reservation @relation(fields: [reservation_id], references: [reservation_id])\n  total_repair_hours Int\n}\n\nmodel RepairPart {\n  part_id   String @id\n  price     Float\n  repair_id Int[]\n  vendor_id Int[]\n}\n\n// the price is maybe problematic\n\nmodel Vendor {\n  vendor_id           Int    @id\n  vendor_shop_name    String\n  vendor_shop_address String\n}\n\n// models for TESTING puropses\nmodel User {\n  user_id Int     @id @default(autoincrement())\n  email   String  @unique\n  name    String?\n  posts   Post[]\n}\n\nmodel Post {\n  post_id   Int     @id @default(autoincrement())\n  title     String  @unique\n  content   String?\n  published Boolean @default(false)\n  authorId  Int\n  author    User    @relation(fields: [authorId], references: [user_id])\n}\n",
  "inlineSchemaHash": "6ee9b4f41ff414271c6bc503b28202b37e932040af904e50fbcc3c8e4d43cd6f",
  "copyEngine": false
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"Vehicule\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"vin\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"local\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"registation\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"registration_type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"RegTypes\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"location\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Reservation\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Reservation\",\"nativeType\":null,\"relationName\":\"ReservationToVehicule\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Mechanic\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"mechanic_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pay_per_hour\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"HeadMechanic\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"HeadMechanic\",\"nativeType\":null,\"relationName\":\"HeadMechanicToMechanic\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Diagnostic\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Diagnostic\",\"nativeType\":null,\"relationName\":\"DiagnosticToMechanic\",\"relationFromFields\":[\"diagnosticDiagnostic_id\"],\"relationToFields\":[\"diagnostic_id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"diagnosticDiagnostic_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Repair\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Repair\",\"nativeType\":null,\"relationName\":\"MechanicToRepair\",\"relationFromFields\":[\"repairRepair_id\"],\"relationToFields\":[\"repair_id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"repairRepair_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"HeadMechanic\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"mechanic_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mechanic\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Mechanic\",\"nativeType\":null,\"relationName\":\"HeadMechanicToMechanic\",\"relationFromFields\":[\"mechanic_id\"],\"relationToFields\":[\"mechanic_id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Diagnostic\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Diagnostic\",\"nativeType\":null,\"relationName\":\"DiagnosticToHeadMechanic\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Repair\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Repair\",\"nativeType\":null,\"relationName\":\"HeadMechanicToRepair\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Reservation\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"reservation_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mobile_phone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"8\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"base_fee\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"repair_status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"RepairStatus\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"vehicule_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"vehicule\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Vehicule\",\"nativeType\":null,\"relationName\":\"ReservationToVehicule\",\"relationFromFields\":[\"vehicule_id\"],\"relationToFields\":[\"vin\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Diagnostic\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Diagnostic\",\"nativeType\":null,\"relationName\":\"DiagnosticToReservation\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Repair\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Repair\",\"nativeType\":null,\"relationName\":\"RepairToReservation\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Diagnostic\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"diagnostic_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"responsible_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"responsible\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"HeadMechanic\",\"nativeType\":null,\"relationName\":\"DiagnosticToHeadMechanic\",\"relationFromFields\":[\"responsible_id\"],\"relationToFields\":[\"mechanic_id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"workers_employed\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Mechanic\",\"nativeType\":null,\"relationName\":\"DiagnosticToMechanic\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reservation_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reservation\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Reservation\",\"nativeType\":null,\"relationName\":\"DiagnosticToReservation\",\"relationFromFields\":[\"reservation_id\"],\"relationToFields\":[\"reservation_id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Repair\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"repair_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"responsible_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"responsible\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"HeadMechanic\",\"nativeType\":null,\"relationName\":\"HeadMechanicToRepair\",\"relationFromFields\":[\"responsible_id\"],\"relationToFields\":[\"mechanic_id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"workers_employed\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Mechanic\",\"nativeType\":null,\"relationName\":\"MechanicToRepair\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reservation_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reservation\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Reservation\",\"nativeType\":null,\"relationName\":\"RepairToReservation\",\"relationFromFields\":[\"reservation_id\"],\"relationToFields\":[\"reservation_id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"total_repair_hours\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"RepairPart\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"part_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"repair_id\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"vendor_id\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Vendor\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"vendor_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"vendor_shop_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"vendor_shop_address\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"User\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"posts\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Post\",\"nativeType\":null,\"relationName\":\"PostToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Post\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"post_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"content\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"published\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"authorId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"author\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"nativeType\":null,\"relationName\":\"PostToUser\",\"relationFromFields\":[\"authorId\"],\"relationToFields\":[\"user_id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"RegTypes\":{\"values\":[{\"name\":\"TUN\",\"dbName\":null},{\"name\":\"RS\",\"dbName\":null},{\"name\":\"TRAC\",\"dbName\":null},{\"name\":\"PAT\",\"dbName\":null},{\"name\":\"CMD\",\"dbName\":null},{\"name\":\"CD\",\"dbName\":null},{\"name\":\"MD\",\"dbName\":null},{\"name\":\"MC\",\"dbName\":null},{\"name\":\"CC\",\"dbName\":null},{\"name\":\"REM\",\"dbName\":null},{\"name\":\"AA\",\"dbName\":null},{\"name\":\"ES\",\"dbName\":null},{\"name\":\"PE\",\"dbName\":null},{\"name\":\"IT\",\"dbName\":null}],\"dbName\":null},\"RepairStatus\":{\"values\":[{\"name\":\"DIAGNOSTIC\",\"dbName\":null},{\"name\":\"REPAIR\",\"dbName\":null},{\"name\":\"SUCCESS\",\"dbName\":null},{\"name\":\"FAILURE\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined
config.compilerWasm = undefined

config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

