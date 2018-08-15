const tsOnlyRules = {
	"typedef-whitespace": [
		true,
		{
			"call-signature": "nospace",
			"index-signature": "nospace",
			"parameter": "nospace",
			"property-declaration": "nospace",
			"variable-declaration": "nospace"
		},
		{
			"call-signature": "onespace",
			"index-signature": "onespace",
			"parameter": "onespace",
			"property-declaration": "onespace",
			"variable-declaration": "onespace"
		}
	],
	"no-unnecessary-qualifier": true,
	"interface-over-type-literal": true,
	"no-reference-import": true,
	"no-redundant-jsdoc": true,
	"no-angle-bracket-type-assertion": true,
	"no-unnecessary-type-assertion": true,
	"no-any": true,
	"member-access": true,
	"array-type": [
		true,
		"array"
	],
	"interface-name": [
		true,
		"always-prefix"
  ],
  "prefer-readonly": true
}

const mixedRules = {
  "quotemark": "double",
  "space-within-parens": false,
  "prefer-method-signature": true,
  "number-literal-format": false,
  "new-parens": true,
  "no-consecutive-blank-lines": true,
  "no-unnecessary-callback-wrapper": true,
  "no-trailing-whitespace": true,
  "import-spacing": true,
  "encoding": true,
  "class-name": true,
  "arrow-return-shorthand": true,
  "prefer-const": true,
  "no-require-imports": true,
  "no-duplicate-imports": false,
  "use-isnan": true,
  "eofline": true,
  "radix": true,
  "prefer-object-spread": true,
  "no-var-keyword": true,
  "no-use-before-declare": true,
  "no-unused-variable": false,
  "no-switch-case-fall-through": false,
  "no-string-literal": true,
  "no-sparse-arrays": true,
  "no-return-await": true,
  "no-null-keyword": true,
  "no-invalid-this": true,
  "no-invalid-template-strings": true,
  "no-for-in-array": true,
  "no-eval": true,
  "no-duplicate-switch-case": true,
  "no-duplicate-super": true,
  "no-debugger": true,
  "no-construct": true,
  "no-conditional-assignment": true,
  "no-arg": true,
  "label-position": true,
  "forin": true,
  "prefer-for-of": true,
  "promise-function-async": true,
  "no-reference": true,
  "no-magic-numbers": true,
  "ban-comma-operator": true,
  "no-this-assignment": [
    true,
    {
      "allow-destructuring": true
    }
  ],
  "semicolon": [
    true,
    "never"
  ],
  "only-arrow-functions": [
    true,
    "allow-declarations",
    "allow-named-functions"
  ],

  "curly": [
    false
  ],
  "triple-equals": [
    true,
    "allow-null-check"
  ],
  "indent": [
    true,
    "spaces",
    2
  ],
  "arrow-parens": [
    true,
    "ban-single-arg-parens"
  ],
  "object-literal-key-quotes": [
    true,
    "as-needed"
  ],
  "prefer-template": [
    true,
    "allow-single-concat"
  ],
  "one-line": [
    true,
    "check-catch",
    "check-finally",
    "check-else"
  ],
  "space-before-function-paren": [
    false
  ],
  "variable-name": [
    true,
    "ban-keywords",
    "check-format",
    "allow-leading-underscore"
  ],
  "whitespace": [
    true,
    "check-branch",
    "check-decl",
    "check-operator",
    "check-module",
    "check-separator",
    "check-rest-spread",
    "check-type",
    "check-typecast",
    "check-type-operator",
    "check-preblock"
  ],
  "file-name-casing": false,
  "prefer-while": true,
  "comment-format": [true, "check-space"]
}

module.exports = {
  "extends": [
    "tslint-config-prettier"
  ],
  "rules": {
    ...mixedRules,
    ...tsOnlyRules
  },
  "jsRules": {
    ...mixedRules
  }
}
