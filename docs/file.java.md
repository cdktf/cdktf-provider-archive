# `file` Submodule <a name="`file` Submodule" id="@cdktf/provider-archive.file"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### File <a name="File" id="@cdktf/provider-archive.file.File"></a>

Represents a {@link https://www.terraform.io/docs/providers/archive/r/file archive_file}.

#### Initializers <a name="Initializers" id="@cdktf/provider-archive.file.File.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.archive.file.File;

File.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .outputPath(java.lang.String)
    .type(java.lang.String)
//  .excludes(java.util.List<java.lang.String>)
//  .outputFileMode(java.lang.String)
//  .source(java.util.List<FileSource>)
//  .source(IResolvable)
//  .sourceContent(java.lang.String)
//  .sourceContentFilename(java.lang.String)
//  .sourceDir(java.lang.String)
//  .sourceFile(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-archive.file.File.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-archive.file.File.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-archive.file.File.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.File.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.File.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.File.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.File.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.File.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.File.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.File.Initializer.parameter.outputPath">outputPath</a></code> | <code>java.lang.String</code> | The output of the archive file. |
| <code><a href="#@cdktf/provider-archive.file.File.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | The type of archive to generate. NOTE: `zip` is supported. |
| <code><a href="#@cdktf/provider-archive.file.File.Initializer.parameter.excludes">excludes</a></code> | <code>java.util.List<java.lang.String></code> | Specify files to ignore when reading the `source_dir`. |
| <code><a href="#@cdktf/provider-archive.file.File.Initializer.parameter.outputFileMode">outputFileMode</a></code> | <code>java.lang.String</code> | String that specifies the octal file mode for all archived files. |
| <code><a href="#@cdktf/provider-archive.file.File.Initializer.parameter.source">source</a></code> | <code>java.util.List<<a href="#@cdktf/provider-archive.file.FileSource">FileSource</a>> OR com.hashicorp.cdktf.IResolvable</code> | source block. |
| <code><a href="#@cdktf/provider-archive.file.File.Initializer.parameter.sourceContent">sourceContent</a></code> | <code>java.lang.String</code> | Add only this content to the archive with `source_content_filename` as the filename. |
| <code><a href="#@cdktf/provider-archive.file.File.Initializer.parameter.sourceContentFilename">sourceContentFilename</a></code> | <code>java.lang.String</code> | Set this as the filename when using `source_content`. |
| <code><a href="#@cdktf/provider-archive.file.File.Initializer.parameter.sourceDir">sourceDir</a></code> | <code>java.lang.String</code> | Package entire contents of this directory into the archive. |
| <code><a href="#@cdktf/provider-archive.file.File.Initializer.parameter.sourceFile">sourceFile</a></code> | <code>java.lang.String</code> | Package this file into the archive. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-archive.file.File.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-archive.file.File.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-archive.file.File.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-archive.file.File.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-archive.file.File.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-archive.file.File.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-archive.file.File.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-archive.file.File.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-archive.file.File.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `outputPath`<sup>Required</sup> <a name="outputPath" id="@cdktf/provider-archive.file.File.Initializer.parameter.outputPath"></a>

- *Type:* java.lang.String

The output of the archive file.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/archive/r/file#output_path File#output_path}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-archive.file.File.Initializer.parameter.type"></a>

- *Type:* java.lang.String

The type of archive to generate. NOTE: `zip` is supported.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/archive/r/file#type File#type}

---

##### `excludes`<sup>Optional</sup> <a name="excludes" id="@cdktf/provider-archive.file.File.Initializer.parameter.excludes"></a>

- *Type:* java.util.List<java.lang.String>

Specify files to ignore when reading the `source_dir`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/archive/r/file#excludes File#excludes}

---

##### `outputFileMode`<sup>Optional</sup> <a name="outputFileMode" id="@cdktf/provider-archive.file.File.Initializer.parameter.outputFileMode"></a>

- *Type:* java.lang.String

String that specifies the octal file mode for all archived files.

For example: `"0666"`. Setting this will ensure that cross platform usage of this module will not vary the modes of archived files (and ultimately checksums) resulting in more deterministic behavior.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/archive/r/file#output_file_mode File#output_file_mode}

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-archive.file.File.Initializer.parameter.source"></a>

- *Type:* java.util.List<<a href="#@cdktf/provider-archive.file.FileSource">FileSource</a>> OR com.hashicorp.cdktf.IResolvable

source block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/archive/r/file#source File#source}

---

##### `sourceContent`<sup>Optional</sup> <a name="sourceContent" id="@cdktf/provider-archive.file.File.Initializer.parameter.sourceContent"></a>

- *Type:* java.lang.String

Add only this content to the archive with `source_content_filename` as the filename.

One and only one of `source`, `source_content_filename` (with `source_content`), `source_file`, or `source_dir` must be specified.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/archive/r/file#source_content File#source_content}

---

##### `sourceContentFilename`<sup>Optional</sup> <a name="sourceContentFilename" id="@cdktf/provider-archive.file.File.Initializer.parameter.sourceContentFilename"></a>

- *Type:* java.lang.String

Set this as the filename when using `source_content`.

One and only one of `source`, `source_content_filename` (with `source_content`), `source_file`, or `source_dir` must be specified.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/archive/r/file#source_content_filename File#source_content_filename}

---

##### `sourceDir`<sup>Optional</sup> <a name="sourceDir" id="@cdktf/provider-archive.file.File.Initializer.parameter.sourceDir"></a>

- *Type:* java.lang.String

Package entire contents of this directory into the archive.

One and only one of `source`, `source_content_filename` (with `source_content`), `source_file`, or `source_dir` must be specified.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/archive/r/file#source_dir File#source_dir}

---

##### `sourceFile`<sup>Optional</sup> <a name="sourceFile" id="@cdktf/provider-archive.file.File.Initializer.parameter.sourceFile"></a>

- *Type:* java.lang.String

Package this file into the archive.

One and only one of `source`, `source_content_filename` (with `source_content`), `source_file`, or `source_dir` must be specified.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/archive/r/file#source_file File#source_file}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-archive.file.File.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-archive.file.File.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.File.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-archive.file.File.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-archive.file.File.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.File.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-archive.file.File.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.File.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.File.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.File.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.File.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.File.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.File.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.File.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.File.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.File.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.File.putSource">putSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.File.resetExcludes">resetExcludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.File.resetOutputFileMode">resetOutputFileMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.File.resetSource">resetSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.File.resetSourceContent">resetSourceContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.File.resetSourceContentFilename">resetSourceContentFilename</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.File.resetSourceDir">resetSourceDir</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.File.resetSourceFile">resetSourceFile</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-archive.file.File.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-archive.file.File.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-archive.file.File.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-archive.file.File.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-archive.file.File.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-archive.file.File.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-archive.file.File.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-archive.file.File.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-archive.file.File.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-archive.file.File.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-archive.file.File.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-archive.file.File.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-archive.file.File.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-archive.file.File.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-archive.file.File.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-archive.file.File.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-archive.file.File.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-archive.file.File.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-archive.file.File.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-archive.file.File.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-archive.file.File.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-archive.file.File.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-archive.file.File.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-archive.file.File.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-archive.file.File.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-archive.file.File.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-archive.file.File.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-archive.file.File.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-archive.file.File.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putSource` <a name="putSource" id="@cdktf/provider-archive.file.File.putSource"></a>

```java
public void putSource(java.util.List<FileSource> OR IResolvable value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-archive.file.File.putSource.parameter.value"></a>

- *Type:* java.util.List<<a href="#@cdktf/provider-archive.file.FileSource">FileSource</a>> OR com.hashicorp.cdktf.IResolvable

---

##### `resetExcludes` <a name="resetExcludes" id="@cdktf/provider-archive.file.File.resetExcludes"></a>

```java
public void resetExcludes()
```

##### `resetOutputFileMode` <a name="resetOutputFileMode" id="@cdktf/provider-archive.file.File.resetOutputFileMode"></a>

```java
public void resetOutputFileMode()
```

##### `resetSource` <a name="resetSource" id="@cdktf/provider-archive.file.File.resetSource"></a>

```java
public void resetSource()
```

##### `resetSourceContent` <a name="resetSourceContent" id="@cdktf/provider-archive.file.File.resetSourceContent"></a>

```java
public void resetSourceContent()
```

##### `resetSourceContentFilename` <a name="resetSourceContentFilename" id="@cdktf/provider-archive.file.File.resetSourceContentFilename"></a>

```java
public void resetSourceContentFilename()
```

##### `resetSourceDir` <a name="resetSourceDir" id="@cdktf/provider-archive.file.File.resetSourceDir"></a>

```java
public void resetSourceDir()
```

##### `resetSourceFile` <a name="resetSourceFile" id="@cdktf/provider-archive.file.File.resetSourceFile"></a>

```java
public void resetSourceFile()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-archive.file.File.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-archive.file.File.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.File.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-archive.file.File.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.archive.file.File;

File.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-archive.file.File.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-archive.file.File.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.archive.file.File;

File.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-archive.file.File.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-archive.file.File.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.archive.file.File;

File.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-archive.file.File.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-archive.file.File.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-archive.file.File.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.File.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.File.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.File.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.File.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.File.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.File.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.File.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.File.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.File.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.File.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.File.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.File.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.File.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.File.property.outputBase64Sha256">outputBase64Sha256</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.File.property.outputMd5">outputMd5</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.File.property.outputSha">outputSha</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.File.property.outputSize">outputSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.File.property.source">source</a></code> | <code><a href="#@cdktf/provider-archive.file.FileSourceList">FileSourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.File.property.excludesInput">excludesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.File.property.outputFileModeInput">outputFileModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.File.property.outputPathInput">outputPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.File.property.sourceContentFilenameInput">sourceContentFilenameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.File.property.sourceContentInput">sourceContentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.File.property.sourceDirInput">sourceDirInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.File.property.sourceFileInput">sourceFileInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.File.property.sourceInput">sourceInput</a></code> | <code>java.util.List<<a href="#@cdktf/provider-archive.file.FileSource">FileSource</a>> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.File.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.File.property.excludes">excludes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.File.property.outputFileMode">outputFileMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.File.property.outputPath">outputPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.File.property.sourceContent">sourceContent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.File.property.sourceContentFilename">sourceContentFilename</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.File.property.sourceDir">sourceDir</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.File.property.sourceFile">sourceFile</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.File.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-archive.file.File.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-archive.file.File.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-archive.file.File.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-archive.file.File.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-archive.file.File.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-archive.file.File.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-archive.file.File.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-archive.file.File.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-archive.file.File.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-archive.file.File.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-archive.file.File.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-archive.file.File.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-archive.file.File.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-archive.file.File.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-archive.file.File.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `outputBase64Sha256`<sup>Required</sup> <a name="outputBase64Sha256" id="@cdktf/provider-archive.file.File.property.outputBase64Sha256"></a>

```java
public java.lang.String getOutputBase64Sha256();
```

- *Type:* java.lang.String

---

##### `outputMd5`<sup>Required</sup> <a name="outputMd5" id="@cdktf/provider-archive.file.File.property.outputMd5"></a>

```java
public java.lang.String getOutputMd5();
```

- *Type:* java.lang.String

---

##### `outputSha`<sup>Required</sup> <a name="outputSha" id="@cdktf/provider-archive.file.File.property.outputSha"></a>

```java
public java.lang.String getOutputSha();
```

- *Type:* java.lang.String

---

##### `outputSize`<sup>Required</sup> <a name="outputSize" id="@cdktf/provider-archive.file.File.property.outputSize"></a>

```java
public java.lang.Number getOutputSize();
```

- *Type:* java.lang.Number

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-archive.file.File.property.source"></a>

```java
public FileSourceList getSource();
```

- *Type:* <a href="#@cdktf/provider-archive.file.FileSourceList">FileSourceList</a>

---

##### `excludesInput`<sup>Optional</sup> <a name="excludesInput" id="@cdktf/provider-archive.file.File.property.excludesInput"></a>

```java
public java.util.List<java.lang.String> getExcludesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `outputFileModeInput`<sup>Optional</sup> <a name="outputFileModeInput" id="@cdktf/provider-archive.file.File.property.outputFileModeInput"></a>

```java
public java.lang.String getOutputFileModeInput();
```

- *Type:* java.lang.String

---

##### `outputPathInput`<sup>Optional</sup> <a name="outputPathInput" id="@cdktf/provider-archive.file.File.property.outputPathInput"></a>

```java
public java.lang.String getOutputPathInput();
```

- *Type:* java.lang.String

---

##### `sourceContentFilenameInput`<sup>Optional</sup> <a name="sourceContentFilenameInput" id="@cdktf/provider-archive.file.File.property.sourceContentFilenameInput"></a>

```java
public java.lang.String getSourceContentFilenameInput();
```

- *Type:* java.lang.String

---

##### `sourceContentInput`<sup>Optional</sup> <a name="sourceContentInput" id="@cdktf/provider-archive.file.File.property.sourceContentInput"></a>

```java
public java.lang.String getSourceContentInput();
```

- *Type:* java.lang.String

---

##### `sourceDirInput`<sup>Optional</sup> <a name="sourceDirInput" id="@cdktf/provider-archive.file.File.property.sourceDirInput"></a>

```java
public java.lang.String getSourceDirInput();
```

- *Type:* java.lang.String

---

##### `sourceFileInput`<sup>Optional</sup> <a name="sourceFileInput" id="@cdktf/provider-archive.file.File.property.sourceFileInput"></a>

```java
public java.lang.String getSourceFileInput();
```

- *Type:* java.lang.String

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-archive.file.File.property.sourceInput"></a>

```java
public java.lang.Object getSourceInput();
```

- *Type:* java.util.List<<a href="#@cdktf/provider-archive.file.FileSource">FileSource</a>> OR com.hashicorp.cdktf.IResolvable

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-archive.file.File.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `excludes`<sup>Required</sup> <a name="excludes" id="@cdktf/provider-archive.file.File.property.excludes"></a>

```java
public java.util.List<java.lang.String> getExcludes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `outputFileMode`<sup>Required</sup> <a name="outputFileMode" id="@cdktf/provider-archive.file.File.property.outputFileMode"></a>

```java
public java.lang.String getOutputFileMode();
```

- *Type:* java.lang.String

---

##### `outputPath`<sup>Required</sup> <a name="outputPath" id="@cdktf/provider-archive.file.File.property.outputPath"></a>

```java
public java.lang.String getOutputPath();
```

- *Type:* java.lang.String

---

##### `sourceContent`<sup>Required</sup> <a name="sourceContent" id="@cdktf/provider-archive.file.File.property.sourceContent"></a>

```java
public java.lang.String getSourceContent();
```

- *Type:* java.lang.String

---

##### `sourceContentFilename`<sup>Required</sup> <a name="sourceContentFilename" id="@cdktf/provider-archive.file.File.property.sourceContentFilename"></a>

```java
public java.lang.String getSourceContentFilename();
```

- *Type:* java.lang.String

---

##### `sourceDir`<sup>Required</sup> <a name="sourceDir" id="@cdktf/provider-archive.file.File.property.sourceDir"></a>

```java
public java.lang.String getSourceDir();
```

- *Type:* java.lang.String

---

##### `sourceFile`<sup>Required</sup> <a name="sourceFile" id="@cdktf/provider-archive.file.File.property.sourceFile"></a>

```java
public java.lang.String getSourceFile();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-archive.file.File.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-archive.file.File.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-archive.file.File.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### FileConfig <a name="FileConfig" id="@cdktf/provider-archive.file.FileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-archive.file.FileConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.archive.file.FileConfig;

FileConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .outputPath(java.lang.String)
    .type(java.lang.String)
//  .excludes(java.util.List<java.lang.String>)
//  .outputFileMode(java.lang.String)
//  .source(java.util.List<FileSource>)
//  .source(IResolvable)
//  .sourceContent(java.lang.String)
//  .sourceContentFilename(java.lang.String)
//  .sourceDir(java.lang.String)
//  .sourceFile(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-archive.file.FileConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.FileConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.FileConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.FileConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.FileConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.FileConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.FileConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.FileConfig.property.outputPath">outputPath</a></code> | <code>java.lang.String</code> | The output of the archive file. |
| <code><a href="#@cdktf/provider-archive.file.FileConfig.property.type">type</a></code> | <code>java.lang.String</code> | The type of archive to generate. NOTE: `zip` is supported. |
| <code><a href="#@cdktf/provider-archive.file.FileConfig.property.excludes">excludes</a></code> | <code>java.util.List<java.lang.String></code> | Specify files to ignore when reading the `source_dir`. |
| <code><a href="#@cdktf/provider-archive.file.FileConfig.property.outputFileMode">outputFileMode</a></code> | <code>java.lang.String</code> | String that specifies the octal file mode for all archived files. |
| <code><a href="#@cdktf/provider-archive.file.FileConfig.property.source">source</a></code> | <code>java.util.List<<a href="#@cdktf/provider-archive.file.FileSource">FileSource</a>> OR com.hashicorp.cdktf.IResolvable</code> | source block. |
| <code><a href="#@cdktf/provider-archive.file.FileConfig.property.sourceContent">sourceContent</a></code> | <code>java.lang.String</code> | Add only this content to the archive with `source_content_filename` as the filename. |
| <code><a href="#@cdktf/provider-archive.file.FileConfig.property.sourceContentFilename">sourceContentFilename</a></code> | <code>java.lang.String</code> | Set this as the filename when using `source_content`. |
| <code><a href="#@cdktf/provider-archive.file.FileConfig.property.sourceDir">sourceDir</a></code> | <code>java.lang.String</code> | Package entire contents of this directory into the archive. |
| <code><a href="#@cdktf/provider-archive.file.FileConfig.property.sourceFile">sourceFile</a></code> | <code>java.lang.String</code> | Package this file into the archive. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-archive.file.FileConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-archive.file.FileConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-archive.file.FileConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-archive.file.FileConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-archive.file.FileConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-archive.file.FileConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-archive.file.FileConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `outputPath`<sup>Required</sup> <a name="outputPath" id="@cdktf/provider-archive.file.FileConfig.property.outputPath"></a>

```java
public java.lang.String getOutputPath();
```

- *Type:* java.lang.String

The output of the archive file.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/archive/r/file#output_path File#output_path}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-archive.file.FileConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of archive to generate. NOTE: `zip` is supported.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/archive/r/file#type File#type}

---

##### `excludes`<sup>Optional</sup> <a name="excludes" id="@cdktf/provider-archive.file.FileConfig.property.excludes"></a>

```java
public java.util.List<java.lang.String> getExcludes();
```

- *Type:* java.util.List<java.lang.String>

Specify files to ignore when reading the `source_dir`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/archive/r/file#excludes File#excludes}

---

##### `outputFileMode`<sup>Optional</sup> <a name="outputFileMode" id="@cdktf/provider-archive.file.FileConfig.property.outputFileMode"></a>

```java
public java.lang.String getOutputFileMode();
```

- *Type:* java.lang.String

String that specifies the octal file mode for all archived files.

For example: `"0666"`. Setting this will ensure that cross platform usage of this module will not vary the modes of archived files (and ultimately checksums) resulting in more deterministic behavior.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/archive/r/file#output_file_mode File#output_file_mode}

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-archive.file.FileConfig.property.source"></a>

```java
public java.lang.Object getSource();
```

- *Type:* java.util.List<<a href="#@cdktf/provider-archive.file.FileSource">FileSource</a>> OR com.hashicorp.cdktf.IResolvable

source block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/archive/r/file#source File#source}

---

##### `sourceContent`<sup>Optional</sup> <a name="sourceContent" id="@cdktf/provider-archive.file.FileConfig.property.sourceContent"></a>

```java
public java.lang.String getSourceContent();
```

- *Type:* java.lang.String

Add only this content to the archive with `source_content_filename` as the filename.

One and only one of `source`, `source_content_filename` (with `source_content`), `source_file`, or `source_dir` must be specified.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/archive/r/file#source_content File#source_content}

---

##### `sourceContentFilename`<sup>Optional</sup> <a name="sourceContentFilename" id="@cdktf/provider-archive.file.FileConfig.property.sourceContentFilename"></a>

```java
public java.lang.String getSourceContentFilename();
```

- *Type:* java.lang.String

Set this as the filename when using `source_content`.

One and only one of `source`, `source_content_filename` (with `source_content`), `source_file`, or `source_dir` must be specified.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/archive/r/file#source_content_filename File#source_content_filename}

---

##### `sourceDir`<sup>Optional</sup> <a name="sourceDir" id="@cdktf/provider-archive.file.FileConfig.property.sourceDir"></a>

```java
public java.lang.String getSourceDir();
```

- *Type:* java.lang.String

Package entire contents of this directory into the archive.

One and only one of `source`, `source_content_filename` (with `source_content`), `source_file`, or `source_dir` must be specified.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/archive/r/file#source_dir File#source_dir}

---

##### `sourceFile`<sup>Optional</sup> <a name="sourceFile" id="@cdktf/provider-archive.file.FileConfig.property.sourceFile"></a>

```java
public java.lang.String getSourceFile();
```

- *Type:* java.lang.String

Package this file into the archive.

One and only one of `source`, `source_content_filename` (with `source_content`), `source_file`, or `source_dir` must be specified.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/archive/r/file#source_file File#source_file}

---

### FileSource <a name="FileSource" id="@cdktf/provider-archive.file.FileSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-archive.file.FileSource.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.archive.file.FileSource;

FileSource.builder()
    .content(java.lang.String)
    .filename(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-archive.file.FileSource.property.content">content</a></code> | <code>java.lang.String</code> | Add this content to the archive with `filename` as the filename. |
| <code><a href="#@cdktf/provider-archive.file.FileSource.property.filename">filename</a></code> | <code>java.lang.String</code> | Set this as the filename when declaring a `source`. |

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-archive.file.FileSource.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

Add this content to the archive with `filename` as the filename.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/archive/r/file#content File#content}

---

##### `filename`<sup>Required</sup> <a name="filename" id="@cdktf/provider-archive.file.FileSource.property.filename"></a>

```java
public java.lang.String getFilename();
```

- *Type:* java.lang.String

Set this as the filename when declaring a `source`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/archive/r/file#filename File#filename}

---

## Classes <a name="Classes" id="Classes"></a>

### FileSourceList <a name="FileSourceList" id="@cdktf/provider-archive.file.FileSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-archive.file.FileSourceList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.archive.file.FileSourceList;

new FileSourceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-archive.file.FileSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-archive.file.FileSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-archive.file.FileSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-archive.file.FileSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-archive.file.FileSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-archive.file.FileSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-archive.file.FileSourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.FileSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-archive.file.FileSourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-archive.file.FileSourceList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-archive.file.FileSourceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-archive.file.FileSourceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-archive.file.FileSourceList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-archive.file.FileSourceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-archive.file.FileSourceList.get"></a>

```java
public FileSourceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-archive.file.FileSourceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-archive.file.FileSourceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-archive.file.FileSourceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.FileSourceList.property.internalValue">internalValue</a></code> | <code>java.util.List<<a href="#@cdktf/provider-archive.file.FileSource">FileSource</a>> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-archive.file.FileSourceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-archive.file.FileSourceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-archive.file.FileSourceList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* java.util.List<<a href="#@cdktf/provider-archive.file.FileSource">FileSource</a>> OR com.hashicorp.cdktf.IResolvable

---


### FileSourceOutputReference <a name="FileSourceOutputReference" id="@cdktf/provider-archive.file.FileSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-archive.file.FileSourceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.archive.file.FileSourceOutputReference;

new FileSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-archive.file.FileSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-archive.file.FileSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-archive.file.FileSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-archive.file.FileSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-archive.file.FileSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-archive.file.FileSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-archive.file.FileSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-archive.file.FileSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-archive.file.FileSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.FileSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.FileSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.FileSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.FileSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.FileSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.FileSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.FileSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.FileSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.FileSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.FileSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.FileSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-archive.file.FileSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-archive.file.FileSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-archive.file.FileSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-archive.file.FileSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-archive.file.FileSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-archive.file.FileSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-archive.file.FileSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-archive.file.FileSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-archive.file.FileSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-archive.file.FileSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-archive.file.FileSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-archive.file.FileSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-archive.file.FileSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-archive.file.FileSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-archive.file.FileSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-archive.file.FileSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-archive.file.FileSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-archive.file.FileSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-archive.file.FileSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-archive.file.FileSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-archive.file.FileSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-archive.file.FileSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-archive.file.FileSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-archive.file.FileSourceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-archive.file.FileSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-archive.file.FileSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-archive.file.FileSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.FileSourceOutputReference.property.contentInput">contentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.FileSourceOutputReference.property.filenameInput">filenameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.FileSourceOutputReference.property.content">content</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.FileSourceOutputReference.property.filename">filename</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.FileSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-archive.file.FileSource">FileSource</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-archive.file.FileSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-archive.file.FileSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktf/provider-archive.file.FileSourceOutputReference.property.contentInput"></a>

```java
public java.lang.String getContentInput();
```

- *Type:* java.lang.String

---

##### `filenameInput`<sup>Optional</sup> <a name="filenameInput" id="@cdktf/provider-archive.file.FileSourceOutputReference.property.filenameInput"></a>

```java
public java.lang.String getFilenameInput();
```

- *Type:* java.lang.String

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-archive.file.FileSourceOutputReference.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

---

##### `filename`<sup>Required</sup> <a name="filename" id="@cdktf/provider-archive.file.FileSourceOutputReference.property.filename"></a>

```java
public java.lang.String getFilename();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-archive.file.FileSourceOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-archive.file.FileSource">FileSource</a> OR com.hashicorp.cdktf.IResolvable

---



