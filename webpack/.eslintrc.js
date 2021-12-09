module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
		jest: true,
	},
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:react-hooks/recommended",
		"plugin:jsx-a11y/recommended",
		"plugin:prettier/recommended",
	],
	plugins: ["prettier", "react"],
	parserOptions: {
		ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
		sourceType: "module", // Allows for the use of imports
		ecmaFeatures: {
			jsx: true, // Allows for the parsing of JSX
		},
	},
	settings: {
		react: {
			// version: "latest",
			// version: "latest",
			pragma: "React",
			version: "detect",
		},
	},
	parser: "babel-eslint",
	ignorePatterns: ["*.scss"],
	rules: {
		"strict": ["error", "global"],
		"react/react-in-jsx-scope": "off",
		"func-style": ["error", "expression"],
		"no-new-func": "error",
		"no-param-reassign": "error",
		"prefer-arrow-callback": "error",
		"arrow-parens": ["error", "always"],
		"arrow-body-style": ["error", "as-needed"],
		"new-cap": "error",
		"no-invalid-this": "error",
		"prefer-destructuring": [
			"error",
			{ array: true, object: true },
			{ enforceForRenamedProperties: true },
		],
		"no-eval": "error",
		"no-implied-eval": "error",
		"eqeqeq": "error",
		"no-with": "error",
		"semi": ["error", "always"],
		"prettier/prettier": [2, { useTabs: true }],
		// "prettier/prettier": [
		// 	"error",
		// 	{
		// 		parser: "flow",
		// 		eslintIntegration: true,
		// 		tslintIntegration: true,
		// 		stylelintIntegration: true,
		// 		trailingComma: "es5",
		// 		singleQuote: false,
		// 		semi: true,
		// 		endOfLine: "auto",
		// 		tabWidth: 4,
		// 		quoteProps: "consistent",
		// 		jsxSingleQuote: false,
		// 		// trailingComma: "all",
		// 		bracketSpacing: true,
		// 		arrowParens: "always",
		// 		proseWrap: "always",

		// 		// quoteProps: 'as-needed'
		// 		// proseWrap: 'preserve', // markdown wrap
		// 		htmlWhitespaceSensitivity: "css",
		// 		vueIndentScriptAndStyle: false,
		// 		embeddedLanguageFormatting: "auto",
		// 	},
		// ].concat[(2, { useTabs: true })],
	},
};
