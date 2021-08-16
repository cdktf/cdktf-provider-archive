const { CdktfProviderProject } = require('@cdktf/provider-project');
const project = new CdktfProviderProject({
  terraformProvider: "hashicorp/archive@~> 2.2",
  cdktfVersion: '^0.5',
  constructsVersion: "^3.0.4",
  minNodeVersion: "12.19.0"
});

project.synth();
