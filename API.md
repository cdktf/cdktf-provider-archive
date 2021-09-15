# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### ArchiveProvider <a name="@cdktf/provider-archive.ArchiveProvider"></a>

Represents a {@link https://www.terraform.io/docs/providers/archive archive}.

#### Initializer <a name="@cdktf/provider-archive.ArchiveProvider.Initializer"></a>

```typescript
import { ArchiveProvider } from '@cdktf/provider-archive'

new ArchiveProvider(scope: Construct, id: string, config?: ArchiveProviderConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-archive.ArchiveProvider.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-archive.ArchiveProvider.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="@cdktf/provider-archive.ArchiveProvider.parameter.config"></a>

- *Type:* [`@cdktf/provider-archive.ArchiveProviderConfig`](#@cdktf/provider-archive.ArchiveProviderConfig)

---

#### Methods <a name="Methods"></a>

##### `resetAlias` <a name="@cdktf/provider-archive.ArchiveProvider.resetAlias"></a>

```typescript
public resetAlias()
```


#### Properties <a name="Properties"></a>

##### `aliasInput`<sup>Optional</sup> <a name="@cdktf/provider-archive.ArchiveProvider.property.aliasInput"></a>

- *Type:* `string`

---

##### `alias`<sup>Optional</sup> <a name="@cdktf/provider-archive.ArchiveProvider.property.alias"></a>

- *Type:* `string`

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-archive.ArchiveProvider.property.tfResourceType"></a>

- *Type:* `string`

---

### DataArchiveFile <a name="@cdktf/provider-archive.DataArchiveFile"></a>

Represents a {@link https://www.terraform.io/docs/providers/archive/d/file.html archive_file}.

#### Initializer <a name="@cdktf/provider-archive.DataArchiveFile.Initializer"></a>

```typescript
import { DataArchiveFile } from '@cdktf/provider-archive'

new DataArchiveFile(scope: Construct, id: string, config: DataArchiveFileConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-archive.DataArchiveFile.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-archive.DataArchiveFile.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-archive.DataArchiveFile.parameter.config"></a>

- *Type:* [`@cdktf/provider-archive.DataArchiveFileConfig`](#@cdktf/provider-archive.DataArchiveFileConfig)

---

#### Methods <a name="Methods"></a>

##### `resetExcludes` <a name="@cdktf/provider-archive.DataArchiveFile.resetExcludes"></a>

```typescript
public resetExcludes()
```

##### `resetOutputFileMode` <a name="@cdktf/provider-archive.DataArchiveFile.resetOutputFileMode"></a>

```typescript
public resetOutputFileMode()
```

##### `resetSource` <a name="@cdktf/provider-archive.DataArchiveFile.resetSource"></a>

```typescript
public resetSource()
```

##### `resetSourceContent` <a name="@cdktf/provider-archive.DataArchiveFile.resetSourceContent"></a>

```typescript
public resetSourceContent()
```

##### `resetSourceContentFilename` <a name="@cdktf/provider-archive.DataArchiveFile.resetSourceContentFilename"></a>

```typescript
public resetSourceContentFilename()
```

##### `resetSourceDir` <a name="@cdktf/provider-archive.DataArchiveFile.resetSourceDir"></a>

```typescript
public resetSourceDir()
```

##### `resetSourceFile` <a name="@cdktf/provider-archive.DataArchiveFile.resetSourceFile"></a>

```typescript
public resetSourceFile()
```


#### Properties <a name="Properties"></a>

##### `id`<sup>Required</sup> <a name="@cdktf/provider-archive.DataArchiveFile.property.id"></a>

- *Type:* `string`

---

##### `outputBase64Sha256`<sup>Required</sup> <a name="@cdktf/provider-archive.DataArchiveFile.property.outputBase64Sha256"></a>

- *Type:* `string`

---

##### `outputMd5`<sup>Required</sup> <a name="@cdktf/provider-archive.DataArchiveFile.property.outputMd5"></a>

- *Type:* `string`

---

##### `outputPathInput`<sup>Required</sup> <a name="@cdktf/provider-archive.DataArchiveFile.property.outputPathInput"></a>

- *Type:* `string`

---

##### `outputSha`<sup>Required</sup> <a name="@cdktf/provider-archive.DataArchiveFile.property.outputSha"></a>

- *Type:* `string`

---

##### `outputSize`<sup>Required</sup> <a name="@cdktf/provider-archive.DataArchiveFile.property.outputSize"></a>

- *Type:* `number`

---

##### `typeInput`<sup>Required</sup> <a name="@cdktf/provider-archive.DataArchiveFile.property.typeInput"></a>

- *Type:* `string`

---

##### `excludesInput`<sup>Optional</sup> <a name="@cdktf/provider-archive.DataArchiveFile.property.excludesInput"></a>

- *Type:* `string`[]

---

##### `outputFileModeInput`<sup>Optional</sup> <a name="@cdktf/provider-archive.DataArchiveFile.property.outputFileModeInput"></a>

- *Type:* `string`

---

##### `sourceContentFilenameInput`<sup>Optional</sup> <a name="@cdktf/provider-archive.DataArchiveFile.property.sourceContentFilenameInput"></a>

- *Type:* `string`

---

##### `sourceContentInput`<sup>Optional</sup> <a name="@cdktf/provider-archive.DataArchiveFile.property.sourceContentInput"></a>

- *Type:* `string`

---

##### `sourceDirInput`<sup>Optional</sup> <a name="@cdktf/provider-archive.DataArchiveFile.property.sourceDirInput"></a>

- *Type:* `string`

---

##### `sourceFileInput`<sup>Optional</sup> <a name="@cdktf/provider-archive.DataArchiveFile.property.sourceFileInput"></a>

- *Type:* `string`

---

##### `sourceInput`<sup>Optional</sup> <a name="@cdktf/provider-archive.DataArchiveFile.property.sourceInput"></a>

- *Type:* [`@cdktf/provider-archive.DataArchiveFileSource`](#@cdktf/provider-archive.DataArchiveFileSource)[]

---

##### `excludes`<sup>Required</sup> <a name="@cdktf/provider-archive.DataArchiveFile.property.excludes"></a>

- *Type:* `string`[]

---

##### `outputFileMode`<sup>Required</sup> <a name="@cdktf/provider-archive.DataArchiveFile.property.outputFileMode"></a>

- *Type:* `string`

---

##### `outputPath`<sup>Required</sup> <a name="@cdktf/provider-archive.DataArchiveFile.property.outputPath"></a>

- *Type:* `string`

---

##### `source`<sup>Required</sup> <a name="@cdktf/provider-archive.DataArchiveFile.property.source"></a>

- *Type:* [`@cdktf/provider-archive.DataArchiveFileSource`](#@cdktf/provider-archive.DataArchiveFileSource)[]

---

##### `sourceContent`<sup>Required</sup> <a name="@cdktf/provider-archive.DataArchiveFile.property.sourceContent"></a>

- *Type:* `string`

---

##### `sourceContentFilename`<sup>Required</sup> <a name="@cdktf/provider-archive.DataArchiveFile.property.sourceContentFilename"></a>

- *Type:* `string`

---

##### `sourceDir`<sup>Required</sup> <a name="@cdktf/provider-archive.DataArchiveFile.property.sourceDir"></a>

- *Type:* `string`

---

##### `sourceFile`<sup>Required</sup> <a name="@cdktf/provider-archive.DataArchiveFile.property.sourceFile"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="@cdktf/provider-archive.DataArchiveFile.property.type"></a>

- *Type:* `string`

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-archive.DataArchiveFile.property.tfResourceType"></a>

- *Type:* `string`

---

### File <a name="@cdktf/provider-archive.File"></a>

Represents a {@link https://www.terraform.io/docs/providers/archive/r/file.html archive_file}.

#### Initializer <a name="@cdktf/provider-archive.File.Initializer"></a>

```typescript
import { File } from '@cdktf/provider-archive'

new File(scope: Construct, id: string, config: FileConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-archive.File.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-archive.File.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-archive.File.parameter.config"></a>

- *Type:* [`@cdktf/provider-archive.FileConfig`](#@cdktf/provider-archive.FileConfig)

---

#### Methods <a name="Methods"></a>

##### `resetExcludes` <a name="@cdktf/provider-archive.File.resetExcludes"></a>

```typescript
public resetExcludes()
```

##### `resetOutputFileMode` <a name="@cdktf/provider-archive.File.resetOutputFileMode"></a>

```typescript
public resetOutputFileMode()
```

##### `resetSource` <a name="@cdktf/provider-archive.File.resetSource"></a>

```typescript
public resetSource()
```

##### `resetSourceContent` <a name="@cdktf/provider-archive.File.resetSourceContent"></a>

```typescript
public resetSourceContent()
```

##### `resetSourceContentFilename` <a name="@cdktf/provider-archive.File.resetSourceContentFilename"></a>

```typescript
public resetSourceContentFilename()
```

##### `resetSourceDir` <a name="@cdktf/provider-archive.File.resetSourceDir"></a>

```typescript
public resetSourceDir()
```

##### `resetSourceFile` <a name="@cdktf/provider-archive.File.resetSourceFile"></a>

```typescript
public resetSourceFile()
```


#### Properties <a name="Properties"></a>

##### `id`<sup>Required</sup> <a name="@cdktf/provider-archive.File.property.id"></a>

- *Type:* `string`

---

##### `outputBase64Sha256`<sup>Required</sup> <a name="@cdktf/provider-archive.File.property.outputBase64Sha256"></a>

- *Type:* `string`

---

##### `outputMd5`<sup>Required</sup> <a name="@cdktf/provider-archive.File.property.outputMd5"></a>

- *Type:* `string`

---

##### `outputPathInput`<sup>Required</sup> <a name="@cdktf/provider-archive.File.property.outputPathInput"></a>

- *Type:* `string`

---

##### `outputSha`<sup>Required</sup> <a name="@cdktf/provider-archive.File.property.outputSha"></a>

- *Type:* `string`

---

##### `outputSize`<sup>Required</sup> <a name="@cdktf/provider-archive.File.property.outputSize"></a>

- *Type:* `number`

---

##### `typeInput`<sup>Required</sup> <a name="@cdktf/provider-archive.File.property.typeInput"></a>

- *Type:* `string`

---

##### `excludesInput`<sup>Optional</sup> <a name="@cdktf/provider-archive.File.property.excludesInput"></a>

- *Type:* `string`[]

---

##### `outputFileModeInput`<sup>Optional</sup> <a name="@cdktf/provider-archive.File.property.outputFileModeInput"></a>

- *Type:* `string`

---

##### `sourceContentFilenameInput`<sup>Optional</sup> <a name="@cdktf/provider-archive.File.property.sourceContentFilenameInput"></a>

- *Type:* `string`

---

##### `sourceContentInput`<sup>Optional</sup> <a name="@cdktf/provider-archive.File.property.sourceContentInput"></a>

- *Type:* `string`

---

##### `sourceDirInput`<sup>Optional</sup> <a name="@cdktf/provider-archive.File.property.sourceDirInput"></a>

- *Type:* `string`

---

##### `sourceFileInput`<sup>Optional</sup> <a name="@cdktf/provider-archive.File.property.sourceFileInput"></a>

- *Type:* `string`

---

##### `sourceInput`<sup>Optional</sup> <a name="@cdktf/provider-archive.File.property.sourceInput"></a>

- *Type:* [`@cdktf/provider-archive.FileSource`](#@cdktf/provider-archive.FileSource)[]

---

##### `excludes`<sup>Required</sup> <a name="@cdktf/provider-archive.File.property.excludes"></a>

- *Type:* `string`[]

---

##### `outputFileMode`<sup>Required</sup> <a name="@cdktf/provider-archive.File.property.outputFileMode"></a>

- *Type:* `string`

---

##### `outputPath`<sup>Required</sup> <a name="@cdktf/provider-archive.File.property.outputPath"></a>

- *Type:* `string`

---

##### `source`<sup>Required</sup> <a name="@cdktf/provider-archive.File.property.source"></a>

- *Type:* [`@cdktf/provider-archive.FileSource`](#@cdktf/provider-archive.FileSource)[]

---

##### `sourceContent`<sup>Required</sup> <a name="@cdktf/provider-archive.File.property.sourceContent"></a>

- *Type:* `string`

---

##### `sourceContentFilename`<sup>Required</sup> <a name="@cdktf/provider-archive.File.property.sourceContentFilename"></a>

- *Type:* `string`

---

##### `sourceDir`<sup>Required</sup> <a name="@cdktf/provider-archive.File.property.sourceDir"></a>

- *Type:* `string`

---

##### `sourceFile`<sup>Required</sup> <a name="@cdktf/provider-archive.File.property.sourceFile"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="@cdktf/provider-archive.File.property.type"></a>

- *Type:* `string`

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-archive.File.property.tfResourceType"></a>

- *Type:* `string`

---

## Structs <a name="Structs"></a>

### ArchiveProviderConfig <a name="@cdktf/provider-archive.ArchiveProviderConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ArchiveProviderConfig } from '@cdktf/provider-archive'

const archiveProviderConfig: ArchiveProviderConfig = { ... }
```

##### `alias`<sup>Optional</sup> <a name="@cdktf/provider-archive.ArchiveProviderConfig.property.alias"></a>

- *Type:* `string`

Alias name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/archive#alias ArchiveProvider#alias}

---

### DataArchiveFileConfig <a name="@cdktf/provider-archive.DataArchiveFileConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { DataArchiveFileConfig } from '@cdktf/provider-archive'

const dataArchiveFileConfig: DataArchiveFileConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-archive.DataArchiveFileConfig.property.count"></a>

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-archive.DataArchiveFileConfig.property.dependsOn"></a>

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-archive.DataArchiveFileConfig.property.lifecycle"></a>

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-archive.DataArchiveFileConfig.property.provider"></a>

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `outputPath`<sup>Required</sup> <a name="@cdktf/provider-archive.DataArchiveFileConfig.property.outputPath"></a>

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/archive/d/file.html#output_path DataArchiveFile#output_path}.

---

##### `type`<sup>Required</sup> <a name="@cdktf/provider-archive.DataArchiveFileConfig.property.type"></a>

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/archive/d/file.html#type DataArchiveFile#type}.

---

##### `excludes`<sup>Optional</sup> <a name="@cdktf/provider-archive.DataArchiveFileConfig.property.excludes"></a>

- *Type:* `string`[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/archive/d/file.html#excludes DataArchiveFile#excludes}.

---

##### `outputFileMode`<sup>Optional</sup> <a name="@cdktf/provider-archive.DataArchiveFileConfig.property.outputFileMode"></a>

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/archive/d/file.html#output_file_mode DataArchiveFile#output_file_mode}.

---

##### `source`<sup>Optional</sup> <a name="@cdktf/provider-archive.DataArchiveFileConfig.property.source"></a>

- *Type:* [`@cdktf/provider-archive.DataArchiveFileSource`](#@cdktf/provider-archive.DataArchiveFileSource)[]

source block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/archive/d/file.html#source DataArchiveFile#source}

---

##### `sourceContent`<sup>Optional</sup> <a name="@cdktf/provider-archive.DataArchiveFileConfig.property.sourceContent"></a>

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/archive/d/file.html#source_content DataArchiveFile#source_content}.

---

##### `sourceContentFilename`<sup>Optional</sup> <a name="@cdktf/provider-archive.DataArchiveFileConfig.property.sourceContentFilename"></a>

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/archive/d/file.html#source_content_filename DataArchiveFile#source_content_filename}.

---

##### `sourceDir`<sup>Optional</sup> <a name="@cdktf/provider-archive.DataArchiveFileConfig.property.sourceDir"></a>

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/archive/d/file.html#source_dir DataArchiveFile#source_dir}.

---

##### `sourceFile`<sup>Optional</sup> <a name="@cdktf/provider-archive.DataArchiveFileConfig.property.sourceFile"></a>

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/archive/d/file.html#source_file DataArchiveFile#source_file}.

---

### DataArchiveFileSource <a name="@cdktf/provider-archive.DataArchiveFileSource"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { DataArchiveFileSource } from '@cdktf/provider-archive'

const dataArchiveFileSource: DataArchiveFileSource = { ... }
```

##### `content`<sup>Required</sup> <a name="@cdktf/provider-archive.DataArchiveFileSource.property.content"></a>

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/archive/d/file.html#content DataArchiveFile#content}.

---

##### `filename`<sup>Required</sup> <a name="@cdktf/provider-archive.DataArchiveFileSource.property.filename"></a>

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/archive/d/file.html#filename DataArchiveFile#filename}.

---

### FileConfig <a name="@cdktf/provider-archive.FileConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { FileConfig } from '@cdktf/provider-archive'

const fileConfig: FileConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-archive.FileConfig.property.count"></a>

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-archive.FileConfig.property.dependsOn"></a>

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-archive.FileConfig.property.lifecycle"></a>

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-archive.FileConfig.property.provider"></a>

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `outputPath`<sup>Required</sup> <a name="@cdktf/provider-archive.FileConfig.property.outputPath"></a>

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/archive/r/file.html#output_path File#output_path}.

---

##### `type`<sup>Required</sup> <a name="@cdktf/provider-archive.FileConfig.property.type"></a>

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/archive/r/file.html#type File#type}.

---

##### `excludes`<sup>Optional</sup> <a name="@cdktf/provider-archive.FileConfig.property.excludes"></a>

- *Type:* `string`[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/archive/r/file.html#excludes File#excludes}.

---

##### `outputFileMode`<sup>Optional</sup> <a name="@cdktf/provider-archive.FileConfig.property.outputFileMode"></a>

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/archive/r/file.html#output_file_mode File#output_file_mode}.

---

##### `source`<sup>Optional</sup> <a name="@cdktf/provider-archive.FileConfig.property.source"></a>

- *Type:* [`@cdktf/provider-archive.FileSource`](#@cdktf/provider-archive.FileSource)[]

source block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/archive/r/file.html#source File#source}

---

##### `sourceContent`<sup>Optional</sup> <a name="@cdktf/provider-archive.FileConfig.property.sourceContent"></a>

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/archive/r/file.html#source_content File#source_content}.

---

##### `sourceContentFilename`<sup>Optional</sup> <a name="@cdktf/provider-archive.FileConfig.property.sourceContentFilename"></a>

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/archive/r/file.html#source_content_filename File#source_content_filename}.

---

##### `sourceDir`<sup>Optional</sup> <a name="@cdktf/provider-archive.FileConfig.property.sourceDir"></a>

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/archive/r/file.html#source_dir File#source_dir}.

---

##### `sourceFile`<sup>Optional</sup> <a name="@cdktf/provider-archive.FileConfig.property.sourceFile"></a>

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/archive/r/file.html#source_file File#source_file}.

---

### FileSource <a name="@cdktf/provider-archive.FileSource"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { FileSource } from '@cdktf/provider-archive'

const fileSource: FileSource = { ... }
```

##### `content`<sup>Required</sup> <a name="@cdktf/provider-archive.FileSource.property.content"></a>

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/archive/r/file.html#content File#content}.

---

##### `filename`<sup>Required</sup> <a name="@cdktf/provider-archive.FileSource.property.filename"></a>

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/archive/r/file.html#filename File#filename}.

---



