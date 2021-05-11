// module.exports = {
//   root: true,
//   env: {
//     node: true
//   },
//   'extends': [
//     'plugin:vue/essential',
//     '@vue/standard'
//   ],
//   rules: {
//     'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
//     'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
//     indent: 'off'
//   },
//   parserOptions: {
//     parser: 'babel-eslint'
//   }
// }


module.exports = {
  "root": true,
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "globals": {
    "expect": true
  },
  "extends": [
    "airbnb-base",
    "plugin:vue/recommended"
  ],
  "plugins": [
    "vue",
    "es-beautifier"
  ],
  "parserOptions": {
    "parser": "babel-eslint",
    "sourceType": "module"
  },
  "rules": {
    "indent": "off",
    "no-tabs": "error",
    "import/no-unresolved": 0,
    "no-param-reassign": 0,
    "import/no-unassigned-import": 0,
    "semi": ["error", "never"],
    "no-console": "off",
    "import/no-extraneous-dependencies": ["off"],
    "max-len": ["error", { "code": 120 }],
      "space-before-function-paren": [
    "error",
    {
      "anonymous": "always",
      "named": "always",
      "asyncArrow": "always"
    }
  ],
  "vue/html-indent": [
    "error",
    2,
    {
      "attribute": 1,
      "baseIndent": 1,
      "closeBracket": 0,
      "alignAttributesVertically": true,
      "ignores": []
    }
  ],
  "vue/script-indent": ["warn", 2, {
    "baseIndent": 1
  }],
  "linebreak-style": ["error", "windows"]
}
}
