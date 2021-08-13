const { CdktfProviderProject } = require('@cdktf/provider-project');
const project = new CdktfProviderProject({
  terraformProvider: "hashicorp/archive@~> 2.2"
});

project.synth();
