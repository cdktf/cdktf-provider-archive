# `archive_file`

Refer to the Terraform Registory for docs: [`archive_file`](https://registry.terraform.io/providers/hashicorp/archive/2.3.0/docs/resources/file).

# `file` Submodule <a name="`file` Submodule" id="@cdktf/provider-archive.file"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### File <a name="File" id="@cdktf/provider-archive.file.File"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/archive/2.3.0/docs/resources/file archive_file}.

#### Initializers <a name="Initializers" id="@cdktf/provider-archive.file.File.Initializer"></a>

```python
from cdktf_cdktf_provider_archive import file

file.File(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  output_path: str,
  type: str,
  excludes: typing.List[str] = None,
  output_file_mode: str = None,
  source: typing.Union[typing.List[FileSource], IResolvable] = None,
  source_content: str = None,
  source_content_filename: str = None,
  source_dir: str = None,
  source_file: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-archive.file.File.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-archive.file.File.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-archive.file.File.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.File.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.File.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.File.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.File.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.File.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.File.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.File.Initializer.parameter.outputPath">output_path</a></code> | <code>str</code> | The output of the archive file. |
| <code><a href="#@cdktf/provider-archive.file.File.Initializer.parameter.type">type</a></code> | <code>str</code> | The type of archive to generate. NOTE: `zip` is supported. |
| <code><a href="#@cdktf/provider-archive.file.File.Initializer.parameter.excludes">excludes</a></code> | <code>typing.List[str]</code> | Specify files to ignore when reading the `source_dir`. |
| <code><a href="#@cdktf/provider-archive.file.File.Initializer.parameter.outputFileMode">output_file_mode</a></code> | <code>str</code> | String that specifies the octal file mode for all archived files. |
| <code><a href="#@cdktf/provider-archive.file.File.Initializer.parameter.source">source</a></code> | <code>typing.Union[typing.List[<a href="#@cdktf/provider-archive.file.FileSource">FileSource</a>], cdktf.IResolvable]</code> | source block. |
| <code><a href="#@cdktf/provider-archive.file.File.Initializer.parameter.sourceContent">source_content</a></code> | <code>str</code> | Add only this content to the archive with `source_content_filename` as the filename. |
| <code><a href="#@cdktf/provider-archive.file.File.Initializer.parameter.sourceContentFilename">source_content_filename</a></code> | <code>str</code> | Set this as the filename when using `source_content`. |
| <code><a href="#@cdktf/provider-archive.file.File.Initializer.parameter.sourceDir">source_dir</a></code> | <code>str</code> | Package entire contents of this directory into the archive. |
| <code><a href="#@cdktf/provider-archive.file.File.Initializer.parameter.sourceFile">source_file</a></code> | <code>str</code> | Package this file into the archive. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-archive.file.File.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-archive.file.File.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-archive.file.File.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-archive.file.File.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-archive.file.File.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-archive.file.File.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-archive.file.File.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-archive.file.File.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-archive.file.File.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `output_path`<sup>Required</sup> <a name="output_path" id="@cdktf/provider-archive.file.File.Initializer.parameter.outputPath"></a>

- *Type:* str

The output of the archive file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/archive/2.3.0/docs/resources/file#output_path File#output_path}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-archive.file.File.Initializer.parameter.type"></a>

- *Type:* str

The type of archive to generate. NOTE: `zip` is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/archive/2.3.0/docs/resources/file#type File#type}

---

##### `excludes`<sup>Optional</sup> <a name="excludes" id="@cdktf/provider-archive.file.File.Initializer.parameter.excludes"></a>

- *Type:* typing.List[str]

Specify files to ignore when reading the `source_dir`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/archive/2.3.0/docs/resources/file#excludes File#excludes}

---

##### `output_file_mode`<sup>Optional</sup> <a name="output_file_mode" id="@cdktf/provider-archive.file.File.Initializer.parameter.outputFileMode"></a>

- *Type:* str

String that specifies the octal file mode for all archived files.

For example: `"0666"`. Setting this will ensure that cross platform usage of this module will not vary the modes of archived files (and ultimately checksums) resulting in more deterministic behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/archive/2.3.0/docs/resources/file#output_file_mode File#output_file_mode}

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-archive.file.File.Initializer.parameter.source"></a>

- *Type:* typing.Union[typing.List[<a href="#@cdktf/provider-archive.file.FileSource">FileSource</a>], cdktf.IResolvable]

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/archive/2.3.0/docs/resources/file#source File#source}

---

##### `source_content`<sup>Optional</sup> <a name="source_content" id="@cdktf/provider-archive.file.File.Initializer.parameter.sourceContent"></a>

- *Type:* str

Add only this content to the archive with `source_content_filename` as the filename.

One and only one of `source`, `source_content_filename` (with `source_content`), `source_file`, or `source_dir` must be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/archive/2.3.0/docs/resources/file#source_content File#source_content}

---

##### `source_content_filename`<sup>Optional</sup> <a name="source_content_filename" id="@cdktf/provider-archive.file.File.Initializer.parameter.sourceContentFilename"></a>

- *Type:* str

Set this as the filename when using `source_content`.

One and only one of `source`, `source_content_filename` (with `source_content`), `source_file`, or `source_dir` must be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/archive/2.3.0/docs/resources/file#source_content_filename File#source_content_filename}

---

##### `source_dir`<sup>Optional</sup> <a name="source_dir" id="@cdktf/provider-archive.file.File.Initializer.parameter.sourceDir"></a>

- *Type:* str

Package entire contents of this directory into the archive.

One and only one of `source`, `source_content_filename` (with `source_content`), `source_file`, or `source_dir` must be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/archive/2.3.0/docs/resources/file#source_dir File#source_dir}

---

##### `source_file`<sup>Optional</sup> <a name="source_file" id="@cdktf/provider-archive.file.File.Initializer.parameter.sourceFile"></a>

- *Type:* str

Package this file into the archive.

One and only one of `source`, `source_content_filename` (with `source_content`), `source_file`, or `source_dir` must be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/archive/2.3.0/docs/resources/file#source_file File#source_file}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-archive.file.File.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-archive.file.File.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.File.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-archive.file.File.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-archive.file.File.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.File.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-archive.file.File.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.File.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.File.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.File.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.File.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.File.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.File.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.File.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.File.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.File.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.File.putSource">put_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.File.resetExcludes">reset_excludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.File.resetOutputFileMode">reset_output_file_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.File.resetSource">reset_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.File.resetSourceContent">reset_source_content</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.File.resetSourceContentFilename">reset_source_content_filename</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.File.resetSourceDir">reset_source_dir</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.File.resetSourceFile">reset_source_file</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-archive.file.File.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-archive.file.File.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-archive.file.File.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-archive.file.File.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-archive.file.File.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-archive.file.File.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-archive.file.File.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-archive.file.File.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-archive.file.File.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-archive.file.File.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-archive.file.File.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-archive.file.File.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-archive.file.File.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-archive.file.File.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-archive.file.File.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-archive.file.File.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-archive.file.File.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-archive.file.File.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-archive.file.File.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-archive.file.File.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-archive.file.File.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-archive.file.File.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-archive.file.File.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-archive.file.File.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-archive.file.File.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-archive.file.File.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-archive.file.File.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-archive.file.File.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-archive.file.File.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_source` <a name="put_source" id="@cdktf/provider-archive.file.File.putSource"></a>

```python
def put_source(
  value: typing.Union[typing.List[FileSource], IResolvable]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-archive.file.File.putSource.parameter.value"></a>

- *Type:* typing.Union[typing.List[<a href="#@cdktf/provider-archive.file.FileSource">FileSource</a>], cdktf.IResolvable]

---

##### `reset_excludes` <a name="reset_excludes" id="@cdktf/provider-archive.file.File.resetExcludes"></a>

```python
def reset_excludes() -> None
```

##### `reset_output_file_mode` <a name="reset_output_file_mode" id="@cdktf/provider-archive.file.File.resetOutputFileMode"></a>

```python
def reset_output_file_mode() -> None
```

##### `reset_source` <a name="reset_source" id="@cdktf/provider-archive.file.File.resetSource"></a>

```python
def reset_source() -> None
```

##### `reset_source_content` <a name="reset_source_content" id="@cdktf/provider-archive.file.File.resetSourceContent"></a>

```python
def reset_source_content() -> None
```

##### `reset_source_content_filename` <a name="reset_source_content_filename" id="@cdktf/provider-archive.file.File.resetSourceContentFilename"></a>

```python
def reset_source_content_filename() -> None
```

##### `reset_source_dir` <a name="reset_source_dir" id="@cdktf/provider-archive.file.File.resetSourceDir"></a>

```python
def reset_source_dir() -> None
```

##### `reset_source_file` <a name="reset_source_file" id="@cdktf/provider-archive.file.File.resetSourceFile"></a>

```python
def reset_source_file() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-archive.file.File.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-archive.file.File.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.File.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-archive.file.File.isConstruct"></a>

```python
from cdktf_cdktf_provider_archive import file

file.File.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-archive.file.File.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_archive import file

file.File.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-archive.file.File.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-archive.file.File.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_archive import file

file.File.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-archive.file.File.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-archive.file.File.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-archive.file.File.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.File.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.File.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.File.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.File.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.File.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.File.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.File.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.File.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.File.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.File.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.File.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.File.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.File.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.File.property.outputBase64Sha256">output_base64_sha256</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.File.property.outputMd5">output_md5</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.File.property.outputSha">output_sha</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.File.property.outputSize">output_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.File.property.source">source</a></code> | <code><a href="#@cdktf/provider-archive.file.FileSourceList">FileSourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.File.property.excludesInput">excludes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.File.property.outputFileModeInput">output_file_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.File.property.outputPathInput">output_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.File.property.sourceContentFilenameInput">source_content_filename_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.File.property.sourceContentInput">source_content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.File.property.sourceDirInput">source_dir_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.File.property.sourceFileInput">source_file_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.File.property.sourceInput">source_input</a></code> | <code>typing.Union[typing.List[<a href="#@cdktf/provider-archive.file.FileSource">FileSource</a>], cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.File.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.File.property.excludes">excludes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.File.property.outputFileMode">output_file_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.File.property.outputPath">output_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.File.property.sourceContent">source_content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.File.property.sourceContentFilename">source_content_filename</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.File.property.sourceDir">source_dir</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.File.property.sourceFile">source_file</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.File.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-archive.file.File.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-archive.file.File.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-archive.file.File.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-archive.file.File.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-archive.file.File.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-archive.file.File.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-archive.file.File.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-archive.file.File.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-archive.file.File.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-archive.file.File.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-archive.file.File.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-archive.file.File.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-archive.file.File.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-archive.file.File.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-archive.file.File.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `output_base64_sha256`<sup>Required</sup> <a name="output_base64_sha256" id="@cdktf/provider-archive.file.File.property.outputBase64Sha256"></a>

```python
output_base64_sha256: str
```

- *Type:* str

---

##### `output_md5`<sup>Required</sup> <a name="output_md5" id="@cdktf/provider-archive.file.File.property.outputMd5"></a>

```python
output_md5: str
```

- *Type:* str

---

##### `output_sha`<sup>Required</sup> <a name="output_sha" id="@cdktf/provider-archive.file.File.property.outputSha"></a>

```python
output_sha: str
```

- *Type:* str

---

##### `output_size`<sup>Required</sup> <a name="output_size" id="@cdktf/provider-archive.file.File.property.outputSize"></a>

```python
output_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-archive.file.File.property.source"></a>

```python
source: FileSourceList
```

- *Type:* <a href="#@cdktf/provider-archive.file.FileSourceList">FileSourceList</a>

---

##### `excludes_input`<sup>Optional</sup> <a name="excludes_input" id="@cdktf/provider-archive.file.File.property.excludesInput"></a>

```python
excludes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `output_file_mode_input`<sup>Optional</sup> <a name="output_file_mode_input" id="@cdktf/provider-archive.file.File.property.outputFileModeInput"></a>

```python
output_file_mode_input: str
```

- *Type:* str

---

##### `output_path_input`<sup>Optional</sup> <a name="output_path_input" id="@cdktf/provider-archive.file.File.property.outputPathInput"></a>

```python
output_path_input: str
```

- *Type:* str

---

##### `source_content_filename_input`<sup>Optional</sup> <a name="source_content_filename_input" id="@cdktf/provider-archive.file.File.property.sourceContentFilenameInput"></a>

```python
source_content_filename_input: str
```

- *Type:* str

---

##### `source_content_input`<sup>Optional</sup> <a name="source_content_input" id="@cdktf/provider-archive.file.File.property.sourceContentInput"></a>

```python
source_content_input: str
```

- *Type:* str

---

##### `source_dir_input`<sup>Optional</sup> <a name="source_dir_input" id="@cdktf/provider-archive.file.File.property.sourceDirInput"></a>

```python
source_dir_input: str
```

- *Type:* str

---

##### `source_file_input`<sup>Optional</sup> <a name="source_file_input" id="@cdktf/provider-archive.file.File.property.sourceFileInput"></a>

```python
source_file_input: str
```

- *Type:* str

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktf/provider-archive.file.File.property.sourceInput"></a>

```python
source_input: typing.Union[typing.List[FileSource], IResolvable]
```

- *Type:* typing.Union[typing.List[<a href="#@cdktf/provider-archive.file.FileSource">FileSource</a>], cdktf.IResolvable]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-archive.file.File.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `excludes`<sup>Required</sup> <a name="excludes" id="@cdktf/provider-archive.file.File.property.excludes"></a>

```python
excludes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `output_file_mode`<sup>Required</sup> <a name="output_file_mode" id="@cdktf/provider-archive.file.File.property.outputFileMode"></a>

```python
output_file_mode: str
```

- *Type:* str

---

##### `output_path`<sup>Required</sup> <a name="output_path" id="@cdktf/provider-archive.file.File.property.outputPath"></a>

```python
output_path: str
```

- *Type:* str

---

##### `source_content`<sup>Required</sup> <a name="source_content" id="@cdktf/provider-archive.file.File.property.sourceContent"></a>

```python
source_content: str
```

- *Type:* str

---

##### `source_content_filename`<sup>Required</sup> <a name="source_content_filename" id="@cdktf/provider-archive.file.File.property.sourceContentFilename"></a>

```python
source_content_filename: str
```

- *Type:* str

---

##### `source_dir`<sup>Required</sup> <a name="source_dir" id="@cdktf/provider-archive.file.File.property.sourceDir"></a>

```python
source_dir: str
```

- *Type:* str

---

##### `source_file`<sup>Required</sup> <a name="source_file" id="@cdktf/provider-archive.file.File.property.sourceFile"></a>

```python
source_file: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-archive.file.File.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-archive.file.File.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-archive.file.File.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### FileConfig <a name="FileConfig" id="@cdktf/provider-archive.file.FileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-archive.file.FileConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_archive import file

file.FileConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  output_path: str,
  type: str,
  excludes: typing.List[str] = None,
  output_file_mode: str = None,
  source: typing.Union[typing.List[FileSource], IResolvable] = None,
  source_content: str = None,
  source_content_filename: str = None,
  source_dir: str = None,
  source_file: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-archive.file.FileConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.FileConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.FileConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.FileConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.FileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.FileConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.FileConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.FileConfig.property.outputPath">output_path</a></code> | <code>str</code> | The output of the archive file. |
| <code><a href="#@cdktf/provider-archive.file.FileConfig.property.type">type</a></code> | <code>str</code> | The type of archive to generate. NOTE: `zip` is supported. |
| <code><a href="#@cdktf/provider-archive.file.FileConfig.property.excludes">excludes</a></code> | <code>typing.List[str]</code> | Specify files to ignore when reading the `source_dir`. |
| <code><a href="#@cdktf/provider-archive.file.FileConfig.property.outputFileMode">output_file_mode</a></code> | <code>str</code> | String that specifies the octal file mode for all archived files. |
| <code><a href="#@cdktf/provider-archive.file.FileConfig.property.source">source</a></code> | <code>typing.Union[typing.List[<a href="#@cdktf/provider-archive.file.FileSource">FileSource</a>], cdktf.IResolvable]</code> | source block. |
| <code><a href="#@cdktf/provider-archive.file.FileConfig.property.sourceContent">source_content</a></code> | <code>str</code> | Add only this content to the archive with `source_content_filename` as the filename. |
| <code><a href="#@cdktf/provider-archive.file.FileConfig.property.sourceContentFilename">source_content_filename</a></code> | <code>str</code> | Set this as the filename when using `source_content`. |
| <code><a href="#@cdktf/provider-archive.file.FileConfig.property.sourceDir">source_dir</a></code> | <code>str</code> | Package entire contents of this directory into the archive. |
| <code><a href="#@cdktf/provider-archive.file.FileConfig.property.sourceFile">source_file</a></code> | <code>str</code> | Package this file into the archive. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-archive.file.FileConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-archive.file.FileConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-archive.file.FileConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-archive.file.FileConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-archive.file.FileConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-archive.file.FileConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-archive.file.FileConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `output_path`<sup>Required</sup> <a name="output_path" id="@cdktf/provider-archive.file.FileConfig.property.outputPath"></a>

```python
output_path: str
```

- *Type:* str

The output of the archive file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/archive/2.3.0/docs/resources/file#output_path File#output_path}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-archive.file.FileConfig.property.type"></a>

```python
type: str
```

- *Type:* str

The type of archive to generate. NOTE: `zip` is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/archive/2.3.0/docs/resources/file#type File#type}

---

##### `excludes`<sup>Optional</sup> <a name="excludes" id="@cdktf/provider-archive.file.FileConfig.property.excludes"></a>

```python
excludes: typing.List[str]
```

- *Type:* typing.List[str]

Specify files to ignore when reading the `source_dir`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/archive/2.3.0/docs/resources/file#excludes File#excludes}

---

##### `output_file_mode`<sup>Optional</sup> <a name="output_file_mode" id="@cdktf/provider-archive.file.FileConfig.property.outputFileMode"></a>

```python
output_file_mode: str
```

- *Type:* str

String that specifies the octal file mode for all archived files.

For example: `"0666"`. Setting this will ensure that cross platform usage of this module will not vary the modes of archived files (and ultimately checksums) resulting in more deterministic behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/archive/2.3.0/docs/resources/file#output_file_mode File#output_file_mode}

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-archive.file.FileConfig.property.source"></a>

```python
source: typing.Union[typing.List[FileSource], IResolvable]
```

- *Type:* typing.Union[typing.List[<a href="#@cdktf/provider-archive.file.FileSource">FileSource</a>], cdktf.IResolvable]

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/archive/2.3.0/docs/resources/file#source File#source}

---

##### `source_content`<sup>Optional</sup> <a name="source_content" id="@cdktf/provider-archive.file.FileConfig.property.sourceContent"></a>

```python
source_content: str
```

- *Type:* str

Add only this content to the archive with `source_content_filename` as the filename.

One and only one of `source`, `source_content_filename` (with `source_content`), `source_file`, or `source_dir` must be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/archive/2.3.0/docs/resources/file#source_content File#source_content}

---

##### `source_content_filename`<sup>Optional</sup> <a name="source_content_filename" id="@cdktf/provider-archive.file.FileConfig.property.sourceContentFilename"></a>

```python
source_content_filename: str
```

- *Type:* str

Set this as the filename when using `source_content`.

One and only one of `source`, `source_content_filename` (with `source_content`), `source_file`, or `source_dir` must be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/archive/2.3.0/docs/resources/file#source_content_filename File#source_content_filename}

---

##### `source_dir`<sup>Optional</sup> <a name="source_dir" id="@cdktf/provider-archive.file.FileConfig.property.sourceDir"></a>

```python
source_dir: str
```

- *Type:* str

Package entire contents of this directory into the archive.

One and only one of `source`, `source_content_filename` (with `source_content`), `source_file`, or `source_dir` must be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/archive/2.3.0/docs/resources/file#source_dir File#source_dir}

---

##### `source_file`<sup>Optional</sup> <a name="source_file" id="@cdktf/provider-archive.file.FileConfig.property.sourceFile"></a>

```python
source_file: str
```

- *Type:* str

Package this file into the archive.

One and only one of `source`, `source_content_filename` (with `source_content`), `source_file`, or `source_dir` must be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/archive/2.3.0/docs/resources/file#source_file File#source_file}

---

### FileSource <a name="FileSource" id="@cdktf/provider-archive.file.FileSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-archive.file.FileSource.Initializer"></a>

```python
from cdktf_cdktf_provider_archive import file

file.FileSource(
  content: str,
  filename: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-archive.file.FileSource.property.content">content</a></code> | <code>str</code> | Add this content to the archive with `filename` as the filename. |
| <code><a href="#@cdktf/provider-archive.file.FileSource.property.filename">filename</a></code> | <code>str</code> | Set this as the filename when declaring a `source`. |

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-archive.file.FileSource.property.content"></a>

```python
content: str
```

- *Type:* str

Add this content to the archive with `filename` as the filename.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/archive/2.3.0/docs/resources/file#content File#content}

---

##### `filename`<sup>Required</sup> <a name="filename" id="@cdktf/provider-archive.file.FileSource.property.filename"></a>

```python
filename: str
```

- *Type:* str

Set this as the filename when declaring a `source`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/archive/2.3.0/docs/resources/file#filename File#filename}

---

## Classes <a name="Classes" id="Classes"></a>

### FileSourceList <a name="FileSourceList" id="@cdktf/provider-archive.file.FileSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-archive.file.FileSourceList.Initializer"></a>

```python
from cdktf_cdktf_provider_archive import file

file.FileSourceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-archive.file.FileSourceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-archive.file.FileSourceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-archive.file.FileSourceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-archive.file.FileSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-archive.file.FileSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-archive.file.FileSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-archive.file.FileSourceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.FileSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-archive.file.FileSourceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-archive.file.FileSourceList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-archive.file.FileSourceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-archive.file.FileSourceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-archive.file.FileSourceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-archive.file.FileSourceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-archive.file.FileSourceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FileSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-archive.file.FileSourceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-archive.file.FileSourceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-archive.file.FileSourceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.FileSourceList.property.internalValue">internal_value</a></code> | <code>typing.Union[typing.List[<a href="#@cdktf/provider-archive.file.FileSource">FileSource</a>], cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-archive.file.FileSourceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-archive.file.FileSourceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-archive.file.FileSourceList.property.internalValue"></a>

```python
internal_value: typing.Union[typing.List[FileSource], IResolvable]
```

- *Type:* typing.Union[typing.List[<a href="#@cdktf/provider-archive.file.FileSource">FileSource</a>], cdktf.IResolvable]

---


### FileSourceOutputReference <a name="FileSourceOutputReference" id="@cdktf/provider-archive.file.FileSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-archive.file.FileSourceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_archive import file

file.FileSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-archive.file.FileSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-archive.file.FileSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-archive.file.FileSourceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-archive.file.FileSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-archive.file.FileSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-archive.file.FileSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-archive.file.FileSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-archive.file.FileSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-archive.file.FileSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.FileSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.FileSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.FileSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.FileSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.FileSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.FileSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.FileSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.FileSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.FileSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.FileSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.FileSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-archive.file.FileSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-archive.file.FileSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-archive.file.FileSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-archive.file.FileSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-archive.file.FileSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-archive.file.FileSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-archive.file.FileSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-archive.file.FileSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-archive.file.FileSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-archive.file.FileSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-archive.file.FileSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-archive.file.FileSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-archive.file.FileSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-archive.file.FileSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-archive.file.FileSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-archive.file.FileSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-archive.file.FileSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-archive.file.FileSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-archive.file.FileSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-archive.file.FileSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-archive.file.FileSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-archive.file.FileSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-archive.file.FileSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-archive.file.FileSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-archive.file.FileSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-archive.file.FileSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-archive.file.FileSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.FileSourceOutputReference.property.contentInput">content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.FileSourceOutputReference.property.filenameInput">filename_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.FileSourceOutputReference.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.FileSourceOutputReference.property.filename">filename</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-archive.file.FileSourceOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-archive.file.FileSource">FileSource</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-archive.file.FileSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-archive.file.FileSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content_input`<sup>Optional</sup> <a name="content_input" id="@cdktf/provider-archive.file.FileSourceOutputReference.property.contentInput"></a>

```python
content_input: str
```

- *Type:* str

---

##### `filename_input`<sup>Optional</sup> <a name="filename_input" id="@cdktf/provider-archive.file.FileSourceOutputReference.property.filenameInput"></a>

```python
filename_input: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-archive.file.FileSourceOutputReference.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `filename`<sup>Required</sup> <a name="filename" id="@cdktf/provider-archive.file.FileSourceOutputReference.property.filename"></a>

```python
filename: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-archive.file.FileSourceOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[FileSource, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-archive.file.FileSource">FileSource</a>, cdktf.IResolvable]

---



