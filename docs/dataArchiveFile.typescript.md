# `data_archive_file`

Refer to the Terraform Registory for docs: [`data_archive_file`](https://www.terraform.io/docs/providers/archive/d/file).

# `dataArchiveFile` Submodule <a name="`dataArchiveFile` Submodule" id="@cdktf/provider-archive.dataArchiveFile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataArchiveFile <a name="DataArchiveFile" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFile"></a>

Represents a {@link https://www.terraform.io/docs/providers/archive/d/file archive_file}.

#### Initializers <a name="Initializers" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.Initializer"></a>

```typescript
import { dataArchiveFile } from '@cdktf/provider-archive'

new dataArchiveFile.DataArchiveFile(scope: Construct, id: string, config: DataArchiveFileConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFileConfig">DataArchiveFileConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFileConfig">DataArchiveFileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.putSource">putSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.resetExcludes">resetExcludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.resetOutputFileMode">resetOutputFileMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.resetSource">resetSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.resetSourceContent">resetSourceContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.resetSourceContentFilename">resetSourceContentFilename</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.resetSourceDir">resetSourceDir</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.resetSourceFile">resetSourceFile</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putSource` <a name="putSource" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.putSource"></a>

```typescript
public putSource(value: IResolvable | DataArchiveFileSource[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.putSource.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFileSource">DataArchiveFileSource</a>[]

---

##### `resetExcludes` <a name="resetExcludes" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.resetExcludes"></a>

```typescript
public resetExcludes(): void
```

##### `resetOutputFileMode` <a name="resetOutputFileMode" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.resetOutputFileMode"></a>

```typescript
public resetOutputFileMode(): void
```

##### `resetSource` <a name="resetSource" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.resetSource"></a>

```typescript
public resetSource(): void
```

##### `resetSourceContent` <a name="resetSourceContent" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.resetSourceContent"></a>

```typescript
public resetSourceContent(): void
```

##### `resetSourceContentFilename` <a name="resetSourceContentFilename" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.resetSourceContentFilename"></a>

```typescript
public resetSourceContentFilename(): void
```

##### `resetSourceDir` <a name="resetSourceDir" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.resetSourceDir"></a>

```typescript
public resetSourceDir(): void
```

##### `resetSourceFile` <a name="resetSourceFile" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.resetSourceFile"></a>

```typescript
public resetSourceFile(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.isConstruct"></a>

```typescript
import { dataArchiveFile } from '@cdktf/provider-archive'

dataArchiveFile.DataArchiveFile.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.isTerraformElement"></a>

```typescript
import { dataArchiveFile } from '@cdktf/provider-archive'

dataArchiveFile.DataArchiveFile.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.isTerraformDataSource"></a>

```typescript
import { dataArchiveFile } from '@cdktf/provider-archive'

dataArchiveFile.DataArchiveFile.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.property.outputBase64Sha256">outputBase64Sha256</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.property.outputMd5">outputMd5</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.property.outputSha">outputSha</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.property.outputSize">outputSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.property.source">source</a></code> | <code><a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFileSourceList">DataArchiveFileSourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.property.excludesInput">excludesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.property.outputFileModeInput">outputFileModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.property.outputPathInput">outputPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.property.sourceContentFilenameInput">sourceContentFilenameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.property.sourceContentInput">sourceContentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.property.sourceDirInput">sourceDirInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.property.sourceFileInput">sourceFileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.property.sourceInput">sourceInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFileSource">DataArchiveFileSource</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.property.excludes">excludes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.property.outputFileMode">outputFileMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.property.outputPath">outputPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.property.sourceContent">sourceContent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.property.sourceContentFilename">sourceContentFilename</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.property.sourceDir">sourceDir</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.property.sourceFile">sourceFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `outputBase64Sha256`<sup>Required</sup> <a name="outputBase64Sha256" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.property.outputBase64Sha256"></a>

```typescript
public readonly outputBase64Sha256: string;
```

- *Type:* string

---

##### `outputMd5`<sup>Required</sup> <a name="outputMd5" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.property.outputMd5"></a>

```typescript
public readonly outputMd5: string;
```

- *Type:* string

---

##### `outputSha`<sup>Required</sup> <a name="outputSha" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.property.outputSha"></a>

```typescript
public readonly outputSha: string;
```

- *Type:* string

---

##### `outputSize`<sup>Required</sup> <a name="outputSize" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.property.outputSize"></a>

```typescript
public readonly outputSize: number;
```

- *Type:* number

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.property.source"></a>

```typescript
public readonly source: DataArchiveFileSourceList;
```

- *Type:* <a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFileSourceList">DataArchiveFileSourceList</a>

---

##### `excludesInput`<sup>Optional</sup> <a name="excludesInput" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.property.excludesInput"></a>

```typescript
public readonly excludesInput: string[];
```

- *Type:* string[]

---

##### `outputFileModeInput`<sup>Optional</sup> <a name="outputFileModeInput" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.property.outputFileModeInput"></a>

```typescript
public readonly outputFileModeInput: string;
```

- *Type:* string

---

##### `outputPathInput`<sup>Optional</sup> <a name="outputPathInput" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.property.outputPathInput"></a>

```typescript
public readonly outputPathInput: string;
```

- *Type:* string

---

##### `sourceContentFilenameInput`<sup>Optional</sup> <a name="sourceContentFilenameInput" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.property.sourceContentFilenameInput"></a>

```typescript
public readonly sourceContentFilenameInput: string;
```

- *Type:* string

---

##### `sourceContentInput`<sup>Optional</sup> <a name="sourceContentInput" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.property.sourceContentInput"></a>

```typescript
public readonly sourceContentInput: string;
```

- *Type:* string

---

##### `sourceDirInput`<sup>Optional</sup> <a name="sourceDirInput" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.property.sourceDirInput"></a>

```typescript
public readonly sourceDirInput: string;
```

- *Type:* string

---

##### `sourceFileInput`<sup>Optional</sup> <a name="sourceFileInput" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.property.sourceFileInput"></a>

```typescript
public readonly sourceFileInput: string;
```

- *Type:* string

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.property.sourceInput"></a>

```typescript
public readonly sourceInput: IResolvable | DataArchiveFileSource[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFileSource">DataArchiveFileSource</a>[]

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `excludes`<sup>Required</sup> <a name="excludes" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.property.excludes"></a>

```typescript
public readonly excludes: string[];
```

- *Type:* string[]

---

##### `outputFileMode`<sup>Required</sup> <a name="outputFileMode" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.property.outputFileMode"></a>

```typescript
public readonly outputFileMode: string;
```

- *Type:* string

---

##### `outputPath`<sup>Required</sup> <a name="outputPath" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.property.outputPath"></a>

```typescript
public readonly outputPath: string;
```

- *Type:* string

---

##### `sourceContent`<sup>Required</sup> <a name="sourceContent" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.property.sourceContent"></a>

```typescript
public readonly sourceContent: string;
```

- *Type:* string

---

##### `sourceContentFilename`<sup>Required</sup> <a name="sourceContentFilename" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.property.sourceContentFilename"></a>

```typescript
public readonly sourceContentFilename: string;
```

- *Type:* string

---

##### `sourceDir`<sup>Required</sup> <a name="sourceDir" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.property.sourceDir"></a>

```typescript
public readonly sourceDir: string;
```

- *Type:* string

---

##### `sourceFile`<sup>Required</sup> <a name="sourceFile" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.property.sourceFile"></a>

```typescript
public readonly sourceFile: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFile.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataArchiveFileConfig <a name="DataArchiveFileConfig" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFileConfig.Initializer"></a>

```typescript
import { dataArchiveFile } from '@cdktf/provider-archive'

const dataArchiveFileConfig: dataArchiveFile.DataArchiveFileConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFileConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFileConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFileConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFileConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFileConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFileConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFileConfig.property.outputPath">outputPath</a></code> | <code>string</code> | The output of the archive file. |
| <code><a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFileConfig.property.type">type</a></code> | <code>string</code> | The type of archive to generate. NOTE: `zip` is supported. |
| <code><a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFileConfig.property.excludes">excludes</a></code> | <code>string[]</code> | Specify files to ignore when reading the `source_dir`. |
| <code><a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFileConfig.property.outputFileMode">outputFileMode</a></code> | <code>string</code> | String that specifies the octal file mode for all archived files. |
| <code><a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFileConfig.property.source">source</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFileSource">DataArchiveFileSource</a>[]</code> | source block. |
| <code><a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFileConfig.property.sourceContent">sourceContent</a></code> | <code>string</code> | Add only this content to the archive with `source_content_filename` as the filename. |
| <code><a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFileConfig.property.sourceContentFilename">sourceContentFilename</a></code> | <code>string</code> | Set this as the filename when using `source_content`. |
| <code><a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFileConfig.property.sourceDir">sourceDir</a></code> | <code>string</code> | Package entire contents of this directory into the archive. |
| <code><a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFileConfig.property.sourceFile">sourceFile</a></code> | <code>string</code> | Package this file into the archive. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFileConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFileConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFileConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFileConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFileConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFileConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFileConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `outputPath`<sup>Required</sup> <a name="outputPath" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFileConfig.property.outputPath"></a>

```typescript
public readonly outputPath: string;
```

- *Type:* string

The output of the archive file.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/archive/d/file#output_path DataArchiveFile#output_path}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFileConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of archive to generate. NOTE: `zip` is supported.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/archive/d/file#type DataArchiveFile#type}

---

##### `excludes`<sup>Optional</sup> <a name="excludes" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFileConfig.property.excludes"></a>

```typescript
public readonly excludes: string[];
```

- *Type:* string[]

Specify files to ignore when reading the `source_dir`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/archive/d/file#excludes DataArchiveFile#excludes}

---

##### `outputFileMode`<sup>Optional</sup> <a name="outputFileMode" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFileConfig.property.outputFileMode"></a>

```typescript
public readonly outputFileMode: string;
```

- *Type:* string

String that specifies the octal file mode for all archived files.

For example: `"0666"`. Setting this will ensure that cross platform usage of this module will not vary the modes of archived files (and ultimately checksums) resulting in more deterministic behavior.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/archive/d/file#output_file_mode DataArchiveFile#output_file_mode}

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFileConfig.property.source"></a>

```typescript
public readonly source: IResolvable | DataArchiveFileSource[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFileSource">DataArchiveFileSource</a>[]

source block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/archive/d/file#source DataArchiveFile#source}

---

##### `sourceContent`<sup>Optional</sup> <a name="sourceContent" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFileConfig.property.sourceContent"></a>

```typescript
public readonly sourceContent: string;
```

- *Type:* string

Add only this content to the archive with `source_content_filename` as the filename.

One and only one of `source`, `source_content_filename` (with `source_content`), `source_file`, or `source_dir` must be specified.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/archive/d/file#source_content DataArchiveFile#source_content}

---

##### `sourceContentFilename`<sup>Optional</sup> <a name="sourceContentFilename" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFileConfig.property.sourceContentFilename"></a>

```typescript
public readonly sourceContentFilename: string;
```

- *Type:* string

Set this as the filename when using `source_content`.

One and only one of `source`, `source_content_filename` (with `source_content`), `source_file`, or `source_dir` must be specified.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/archive/d/file#source_content_filename DataArchiveFile#source_content_filename}

---

##### `sourceDir`<sup>Optional</sup> <a name="sourceDir" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFileConfig.property.sourceDir"></a>

```typescript
public readonly sourceDir: string;
```

- *Type:* string

Package entire contents of this directory into the archive.

One and only one of `source`, `source_content_filename` (with `source_content`), `source_file`, or `source_dir` must be specified.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/archive/d/file#source_dir DataArchiveFile#source_dir}

---

##### `sourceFile`<sup>Optional</sup> <a name="sourceFile" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFileConfig.property.sourceFile"></a>

```typescript
public readonly sourceFile: string;
```

- *Type:* string

Package this file into the archive.

One and only one of `source`, `source_content_filename` (with `source_content`), `source_file`, or `source_dir` must be specified.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/archive/d/file#source_file DataArchiveFile#source_file}

---

### DataArchiveFileSource <a name="DataArchiveFileSource" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFileSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFileSource.Initializer"></a>

```typescript
import { dataArchiveFile } from '@cdktf/provider-archive'

const dataArchiveFileSource: dataArchiveFile.DataArchiveFileSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFileSource.property.content">content</a></code> | <code>string</code> | Add this content to the archive with `filename` as the filename. |
| <code><a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFileSource.property.filename">filename</a></code> | <code>string</code> | Set this as the filename when declaring a `source`. |

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFileSource.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

Add this content to the archive with `filename` as the filename.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/archive/d/file#content DataArchiveFile#content}

---

##### `filename`<sup>Required</sup> <a name="filename" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFileSource.property.filename"></a>

```typescript
public readonly filename: string;
```

- *Type:* string

Set this as the filename when declaring a `source`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/archive/d/file#filename DataArchiveFile#filename}

---

## Classes <a name="Classes" id="Classes"></a>

### DataArchiveFileSourceList <a name="DataArchiveFileSourceList" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFileSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFileSourceList.Initializer"></a>

```typescript
import { dataArchiveFile } from '@cdktf/provider-archive'

new dataArchiveFile.DataArchiveFileSourceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFileSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFileSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFileSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFileSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFileSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFileSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFileSourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFileSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFileSourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFileSourceList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFileSourceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFileSourceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFileSourceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFileSourceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFileSourceList.get"></a>

```typescript
public get(index: number): DataArchiveFileSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFileSourceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFileSourceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFileSourceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFileSourceList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFileSource">DataArchiveFileSource</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFileSourceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFileSourceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFileSourceList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataArchiveFileSource[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFileSource">DataArchiveFileSource</a>[]

---


### DataArchiveFileSourceOutputReference <a name="DataArchiveFileSourceOutputReference" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFileSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFileSourceOutputReference.Initializer"></a>

```typescript
import { dataArchiveFile } from '@cdktf/provider-archive'

new dataArchiveFile.DataArchiveFileSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFileSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFileSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFileSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFileSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFileSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFileSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFileSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFileSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFileSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFileSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFileSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFileSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFileSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFileSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFileSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFileSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFileSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFileSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFileSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFileSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFileSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFileSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFileSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFileSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFileSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFileSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFileSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFileSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFileSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFileSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFileSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFileSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFileSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFileSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFileSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFileSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFileSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFileSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFileSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFileSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFileSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFileSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFileSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFileSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFileSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFileSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFileSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFileSourceOutputReference.property.contentInput">contentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFileSourceOutputReference.property.filenameInput">filenameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFileSourceOutputReference.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFileSourceOutputReference.property.filename">filename</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFileSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFileSource">DataArchiveFileSource</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFileSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFileSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFileSourceOutputReference.property.contentInput"></a>

```typescript
public readonly contentInput: string;
```

- *Type:* string

---

##### `filenameInput`<sup>Optional</sup> <a name="filenameInput" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFileSourceOutputReference.property.filenameInput"></a>

```typescript
public readonly filenameInput: string;
```

- *Type:* string

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFileSourceOutputReference.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `filename`<sup>Required</sup> <a name="filename" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFileSourceOutputReference.property.filename"></a>

```typescript
public readonly filename: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-archive.dataArchiveFile.DataArchiveFileSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataArchiveFileSource | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-archive.dataArchiveFile.DataArchiveFileSource">DataArchiveFileSource</a> | cdktf.IResolvable

---



