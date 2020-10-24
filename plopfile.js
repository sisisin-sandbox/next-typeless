const path = require('path');

module.exports = function generate(plop) {
  plop.setGenerator('feature', {
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'choose feature name in camelCase (e.g. myFeature)',
        basePath: '.',
      },
    ],
    actions: () => {
      return [
        {
          type: 'addMany',
          destination: path.join(__dirname, 'src/features'),
          base: '.blueprints/feature/modules',
          templateFiles: '.blueprints/feature/modules/**/**',
        },
        {
          type: 'addMany',
          destination: path.join(__dirname, 'src/pages'),
          base: '.blueprints/feature/page',
          templateFiles: '.blueprints/feature/page/**',
        },
      ];
    },
  });
  plop.setGenerator('module', {
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'choose module name in camelCase (e.g. myModule)',
        basePath: '.',
      },
    ],
    actions: [
      {
        type: 'addMany',
        destination: path.join(__dirname, 'src/features'),
        base: '.blueprints/module',
        templateFiles: '.blueprints/module/**/**',
      },
    ],
  });
};
