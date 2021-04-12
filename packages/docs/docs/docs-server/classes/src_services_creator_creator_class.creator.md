---
id: "src_services_creator_creator_class.creator"
title: "Class: Creator"
sidebar_label: "Creator"
custom_edit_url: null
hide_title: true
---

# Class: Creator

[src/services/creator/creator.class](../modules/src_services_creator_creator_class.md).Creator

A class for ARC Creator service

## Hierarchy

* *Service*

  ↳ **Creator**

## Constructors

### constructor

\+ **new Creator**(`options`: *Partial*<SequelizeServiceOptions\>, `app`: [*Application*](../modules/src_declarations.md#application)): [*Creator*](src_services_creator_creator_class.creator.md)

#### Parameters:

Name | Type |
:------ | :------ |
`options` | *Partial*<SequelizeServiceOptions\> |
`app` | [*Application*](../modules/src_declarations.md#application) |

**Returns:** [*Creator*](src_services_creator_creator_class.creator.md)

Overrides: void

Defined in: [packages/server/src/services/creator/creator.class.ts:13](https://github.com/xr3ngine/xr3ngine/blob/7650c2bea/packages/server/src/services/creator/creator.class.ts#L13)

## Properties

### Model

• **Model**: *any*

Inherited from: void

Defined in: node_modules/feathers-sequelize/types/index.d.ts:11

___

### app

• **app**: [*Application*](../modules/src_declarations.md#application)

Defined in: [packages/server/src/services/creator/creator.class.ts:12](https://github.com/xr3ngine/xr3ngine/blob/7650c2bea/packages/server/src/services/creator/creator.class.ts#L12)

___

### docs

• **docs**: *any*

Defined in: [packages/server/src/services/creator/creator.class.ts:13](https://github.com/xr3ngine/xr3ngine/blob/7650c2bea/packages/server/src/services/creator/creator.class.ts#L13)

___

### options

• **options**: SequelizeServiceOptions

Inherited from: void

Defined in: node_modules/feathers-sequelize/types/index.d.ts:12

## Accessors

### events

• get **events**(): *string*[]

**Returns:** *string*[]

Defined in: node_modules/@feathersjs/adapter-commons/lib/service.d.ts:86

___

### id

• get **id**(): *string*

**Returns:** *string*

Defined in: node_modules/@feathersjs/adapter-commons/lib/service.d.ts:85

## Methods

### \_create

▸ **_create**(`data`: *Partial*<any\> \| *Partial*<any\>[], `params?`: Params): *Promise*<any\>

#### Parameters:

Name | Type |
:------ | :------ |
`data` | *Partial*<any\> \| *Partial*<any\>[] |
`params?` | Params |

**Returns:** *Promise*<any\>

Inherited from: void

Defined in: node_modules/feathers-sequelize/types/index.d.ts:20

___

### \_find

▸ **_find**(`params?`: Params): *Promise*<any\>

#### Parameters:

Name | Type |
:------ | :------ |
`params?` | Params |

**Returns:** *Promise*<any\>

Inherited from: void

Defined in: node_modules/feathers-sequelize/types/index.d.ts:18

___

### \_get

▸ **_get**(`id`: Id, `params?`: Params): *Promise*<any\>

#### Parameters:

Name | Type |
:------ | :------ |
`id` | Id |
`params?` | Params |

**Returns:** *Promise*<any\>

Inherited from: void

Defined in: node_modules/feathers-sequelize/types/index.d.ts:19

___

### \_patch

▸ **_patch**(`id`: Id, `data`: *Partial*<any\>, `params?`: Params): *Promise*<any\>

#### Parameters:

Name | Type |
:------ | :------ |
`id` | Id |
`data` | *Partial*<any\> |
`params?` | Params |

**Returns:** *Promise*<any\>

Inherited from: void

Defined in: node_modules/feathers-sequelize/types/index.d.ts:22

___

### \_remove

▸ **_remove**(`id`: Id, `params?`: Params): *Promise*<any\>

#### Parameters:

Name | Type |
:------ | :------ |
`id` | Id |
`params?` | Params |

**Returns:** *Promise*<any\>

Inherited from: void

Defined in: node_modules/feathers-sequelize/types/index.d.ts:23

___

### \_update

▸ **_update**(`id`: Id, `data`: *any*, `params?`: Params): *Promise*<any\>

#### Parameters:

Name | Type |
:------ | :------ |
`id` | Id |
`data` | *any* |
`params?` | Params |

**Returns:** *Promise*<any\>

Inherited from: void

Defined in: node_modules/feathers-sequelize/types/index.d.ts:21

___

### allowsMulti

▸ **allowsMulti**(`method`: *string*): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`method` | *string* |

**Returns:** *boolean*

Inherited from: void

Defined in: node_modules/@feathersjs/adapter-commons/lib/service.d.ts:95

___

### create

▸ **create**(`data`: *any*, `params?`: Params): *Promise*<any\>

#### Parameters:

Name | Type |
:------ | :------ |
`data` | *any* |
`params?` | Params |

**Returns:** *Promise*<any\>

Overrides: void

Defined in: [packages/server/src/services/creator/creator.class.ts:105](https://github.com/xr3ngine/xr3ngine/blob/7650c2bea/packages/server/src/services/creator/creator.class.ts#L105)

___

### filterQuery

▸ **filterQuery**(`params?`: Params, `opts?`: *any*): { [key: string]: *any*;  } & { `paginate`: *false* \| *Pick*<PaginationOptions, *max*\> \| { `default?`: *number* ; `max?`: *number*  }  }

#### Parameters:

Name | Type |
:------ | :------ |
`params?` | Params |
`opts?` | *any* |

**Returns:** { [key: string]: *any*;  } & { `paginate`: *false* \| *Pick*<PaginationOptions, *max*\> \| { `default?`: *number* ; `max?`: *number*  }  }

Inherited from: void

Defined in: node_modules/@feathersjs/adapter-commons/lib/service.d.ts:87

___

### find

▸ **find**(`params`: Params): *Promise*<any\>

**`function`** find it is used to find specific users

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`params` | Params | user id   |

**Returns:** *Promise*<any\>

{@Array} of found users

Overrides: void

Defined in: [packages/server/src/services/creator/creator.class.ts:27](https://github.com/xr3ngine/xr3ngine/blob/7650c2bea/packages/server/src/services/creator/creator.class.ts#L27)

___

### get

▸ **get**(`id`: Id, `params?`: Params): *Promise*<any\>

A function which is used to find specific project

**`author`** Vykliuk Tetiana

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`id` | Id | of single Creator   |
`params?` | Params | contains current user   |

**Returns:** *Promise*<any\>

{@Object} contains specific feed

Overrides: void

Defined in: [packages/server/src/services/creator/creator.class.ts:87](https://github.com/xr3ngine/xr3ngine/blob/7650c2bea/packages/server/src/services/creator/creator.class.ts#L87)

___

### getModel

▸ **getModel**(`params`: Params): *any*

#### Parameters:

Name | Type |
:------ | :------ |
`params` | Params |

**Returns:** *any*

Inherited from: void

Defined in: node_modules/feathers-sequelize/types/index.d.ts:16

___

### patch

▸ **patch**(`id`: *string*, `data?`: *any*, `params?`: Params): *Promise*<any\>

A function which is used to update creator data

**`author`** Vykliuk Tetiana

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`id` | *string* | of feed to update   |
`data?` | *any* | - |
`params?` | Params |  |

**Returns:** *Promise*<any\>

updated feed

Overrides: void

Defined in: [packages/server/src/services/creator/creator.class.ts:121](https://github.com/xr3ngine/xr3ngine/blob/7650c2bea/packages/server/src/services/creator/creator.class.ts#L121)

___

### remove

▸ **remove**(`id`: Id, `params?`: Params): *Promise*<any\>

#### Parameters:

Name | Type |
:------ | :------ |
`id` | Id |
`params?` | Params |

**Returns:** *Promise*<any\>

Inherited from: void

Defined in: node_modules/@feathersjs/adapter-commons/lib/service.d.ts:101

___

### update

▸ **update**(`id`: Id, `data`: *any*, `params?`: Params): *Promise*<any\>

#### Parameters:

Name | Type |
:------ | :------ |
`id` | Id |
`data` | *any* |
`params?` | Params |

**Returns:** *Promise*<any\>

Inherited from: void

Defined in: node_modules/@feathersjs/adapter-commons/lib/service.d.ts:99