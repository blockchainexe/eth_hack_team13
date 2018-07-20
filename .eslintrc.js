module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    jquery: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'plugin:import/recommended',
    'plugin:vue/recommended',
    'semistandard'
  ],
  plugins: [
    'vue', 'sort-imports-es6-autofix'
  ],
  rules: {
     'yoda': ['error', 'never', { 'exceptRange': true }],
     'object-curly-spacing': ['error', 'always'],
     'sort-imports-es6-autofix/sort-imports-es6': [2, {
       'ignoreCase': false,
       'ignoreMemberSort': false,
       'memberSyntaxSortOrder': ['none', 'all', 'multiple', 'single']
     }],
     'vue/max-attributes-per-line': 'off',
     'vue/order-in-components': ['error', {
      'order': [
        'el',
        'name',
        'parent',
        'functional',
        ['delimiters', 'comments'],
        ['components', 'directives', 'filters'],
        'extends',
        'mixins',
        'inheritAttrs',
        'model',
        ['props', 'propsData'],
        'data',
        'computed',
        'watch',
        'LIFECYCLE_HOOKS',
        'methods',
        ['template', 'render'],
        'renderError'
      ],
    }],
    "vue/html-indent": ["error", 2, {
      "attribute": 1,
      "closeBracket": 0,
      "alignAttributesVertically": false,
      "ignores": []
    }]
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: {
          resolve: {
            alias: {
              '~': __dirname + '/src',
              '@': __dirname + '/src',
            },
            extensions: [
              '.js', '.vue'
            ]
          }
        }
      }
    }
  }
};
