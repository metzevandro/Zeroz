const path = require('path');
const fs = require('fs');

function getComponentAliases() {
  const componentsDir = path.join(__dirname, 'src/components');
  const componentFolders = fs.readdirSync(componentsDir);

  const aliases = {};
  componentFolders.forEach(folder => {
    const folderPath = path.join(componentsDir, folder);
    const isDirectory = fs.statSync(folderPath).isDirectory();
    if (isDirectory) {
      aliases[`@components/${folder}`] = path.join(folderPath, 'index.tsx');
    }
  });

  return aliases;
}

module.exports = {
  webpack: (config) => {
    const aliases = getComponentAliases();
    config.resolve.alias = { ...config.resolve.alias, ...aliases };
    return config;
  },
};
