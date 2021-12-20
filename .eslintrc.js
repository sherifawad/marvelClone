const path = require("path");
module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
		jest: true
	},
	parser: "@babel/eslint-parser",
	parserOptions: {
		ecmaVersion: 12, // Allows for the parsing of modern ECMAScript features
		sourceType: "module", // Allows for the use of imports
		ecmaFeatures: {
			experimentalObjectRestSpread: true,
			jsx: true,
			arrowFunctions: true,
			classes: true,
			modules: true,
			defaultParams: true
		},
		allowImportExportEverywhere: false,
		codeFrame: true,
		babelOptions: {
			configFile: path.join(__dirname, ".babelrc.js")
		}
	},
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:react-hooks/recommended",
		"plugin:jsx-a11y/recommended",
		"plugin:import/recommended",
		"prettier"
	],
	plugins: ["react", "react-hooks"],
	settings: {
		react: {
			pragma: "React",
			version: "detect"
		}
	},
	// ignorePatterns: ["*.scss"],
	rules: {
		"strict": ["error", "global"],
		"no-console": ["off"],
		"react/prefer-stateless-function": ["off"],
		"react/jsx-filename-extension": ["off"],
		"react/jsx-one-expression-per-line": ["off"],
		"react/react-in-jsx-scope": 0,
		"react/prop-types": 0,
		"no-use-before-define": "off",
		"no-nested-ternary": ["off"],
		"max-len": ["error", { code: 400 }],
		"indent": ["error", "tab"],
		"react/jsx-indent": ["error", "tab"],
		"react/jsx-indent-props": ["error", "tab"],
		// "prefer-destructuring": ["error", { object: false, array: false }],
		"no-empty": ["error", { allowEmptyCatch: true }],
		// "import/extensions": [
		// 	"error",
		// 	"always",
		// 	{
		// 		js: "never",
		// 		jsx: "never",
		// 		ts: "never",
		// 		tsx: "never"
		// 	}
		// ],
		"no-this-before-super": ["off"],
		"no-useless-constructor": ["off"],
		"no-empty-function": ["error", { allow: ["constructors", "arrowFunctions"] }],
		"no-param-reassign": ["error", { props: false }],
		"no-underscore-dangle": ["off"],
		"import/no-extraneous-dependencies": [
			"error",
			{
				devDependencies: true,
				optionalDependencies: false,
				peerDependencies: false
			}
		],
		"import/prefer-default-export": ["off"],
		"no-new": ["off"],
		"prefer-template": ["error"],
		"no-plusplus": ["off"],
		"react/jsx-props-no-spreading": ["off"],
		"func-style": ["error", "expression"],
		"no-new-func": "error",
		"prefer-arrow-callback": "error",
		"arrow-parens": ["error", "as-needed"],
		"arrow-body-style": ["error", "as-needed"],
		"new-cap": "error",
		"no-invalid-this": "error",
		"prefer-destructuring": ["error", { array: true, object: true }, { enforceForRenamedProperties: true }],
		"no-eval": "error",
		"no-implied-eval": "error",
		"eqeqeq": "error",
		"no-with": "error",
		"semi": ["error", "always"],
		"comma-dangle": ["error", "never"],
		"indent": 0,
		"no-confusing-arrow": 0,
		"no-const-assign": 2,
		"no-shadow": 0,
		"no-return-assign": 0,
		"no-prototype-builtins": 0,
		"no-restricted-syntax": 0,
		"no-unused-expressions": 0,
		"object-curly-newline": 0,
		"import/no-unresolved": 0,
		"implicit-arrow-linebreak": 0,
		"function-paren-newline": 0,
		"consistent-return": 0,
		"jsx-a11y/click-events-have-key-events": 0,
		"jsx-a11y/no-static-element-interactions": 0,
		"max-classes-per-file": 0,
		"operator-linebreak": 0,
		"nonblock-statement-body-position": 0,
		"generator-star-spacing": 0,
		"camelcase": 0,
		"react/jsx-wrap-multilines": 0,
		"react-hooks/rules-of-hooks": "error",
		"react-hooks/exhaustive-deps": "warn",
		"react/no-array-index-key": 0,
		"react/jsx-curly-newline": 0
	}
};
