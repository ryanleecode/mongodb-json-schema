import { JSONSchema4 } from 'json-schema'

export type MongoJSONSchema4TypeName =
  | 'double'
  | 'string'
  | 'object'
  | 'array'
  | 'binData'
  | 'undefined'
  | 'objectId'
  | 'bool'
  | 'date'
  | 'null'
  | 'regex'
  | 'dbPointer'
  | 'javascript'
  | 'symbol'
  | 'javascriptWithScope'
  | 'int'
  | 'timestamp'
  | 'long'
  | 'decimal'
  | 'minKey'
  | 'maxKey'

export type MongoJSONSchema4 = JSONSchema4 & {
  bsonType?: MongoJSONSchema4TypeName | MongoJSONSchema4TypeName[]
  type?: never
  additionalItems?: boolean | MongoJSONSchema4
  items?: MongoJSONSchema4 | MongoJSONSchema4[]
  additionalProperties?: boolean | MongoJSONSchema4
  definitions?: {
    [k: string]: MongoJSONSchema4
  }
  properties?: {
    [k: string]: MongoJSONSchema4
  }
  patternProperties?: {
    [k: string]: MongoJSONSchema4
  }
  dependencies?: {
    [k: string]: MongoJSONSchema4 | string[]
  }
  allOf?: MongoJSONSchema4[]
  anyOf?: MongoJSONSchema4[]
  oneOf?: MongoJSONSchema4[]
  not?: MongoJSONSchema4
}
