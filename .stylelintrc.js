module.exports = {
	// processors: ["stylelint-processor-styled-components"],
	plugins: ["stylelint-scss", "stylelint-order", "stylelint-prettier"],
	syntax: "scss",
	extends: [
		"stylelint-config-recommended",
		"stylelint-config-standard",
		"stylelint-prettier/recommended",
		"stylelint-config-prettier",
		// "stylelint-config-styled-components"
		"@linaria/stylelint"
	],
	customSyntax: "postcss-scss",
	rules: {
		"color-no-invalid-hex": true,
		"font-family-no-duplicate-names": true,
		"font-family-no-missing-generic-family-keyword": true,
		"function-calc-no-unspaced-operator": true,
		"function-linear-gradient-no-nonstandard-direction": true,
		"string-no-newline": true,
		"unit-no-unknown": true,
		"property-no-unknown": true,
		"keyframe-declaration-no-important": true,
		"declaration-block-no-duplicate-properties": true,
		"declaration-block-no-shorthand-property-overrides": true,
		"block-no-empty": true,
		"selector-pseudo-element-no-unknown": true,
		"selector-type-no-unknown": true,
		"media-feature-name-no-unknown": true,
		"at-rule-no-unknown": [
			true,
			{
				ignoreAtRules: [
					"mixin",
					"if",
					"function",
					"return",
					"import",
					"include",
					"media",
					"keyframes",
					"supports",
					"font-face"
				]
			}
		],
		"comment-no-empty": true,
		"no-descending-specificity": true,
		"no-duplicate-at-import-rules": true,
		"no-duplicate-selectors": true,
		"no-empty-source": true,
		"no-extra-semicolons": true,
		"color-named": "never",
		// "function-blacklist": [],
		// "function-url-scheme-blacklist": ["/^ftp/"],
		"shorthand-property-no-redundant-values": true,
		"value-no-vendor-prefix": true,
		"property-no-vendor-prefix": true,
		"declaration-block-no-redundant-longhand-properties": true,
		"declaration-no-important": true,
		"selector-max-empty-lines": 0,
		"selector-max-id": 0,
		// "selector-max-universal": 1,
		"selector-no-qualifying-type": [
			true,
			{
				ignore: ["attribute"]
			}
		],
		"selector-no-vendor-prefix": true,
		"at-rule-no-vendor-prefix": true,
		"no-unknown-animations": true,
		"color-hex-case": "lower",
		"color-hex-length": "short",
		"font-family-name-quotes": "always-unless-keyword",
		"font-weight-notation": [
			"named-where-possible",
			{
				ignore: ["relative"]
			}
		],
		"function-comma-newline-after": "never-multi-line",
		"function-comma-newline-before": "never-multi-line",
		"function-comma-space-after": "always-single-line",
		"function-comma-space-before": "never-single-line",
		"function-max-empty-lines": 0,
		"function-name-case": "lower",
		"function-parentheses-newline-inside": "never-multi-line",
		"function-parentheses-space-inside": "never",
		"function-url-quotes": "always",
		"function-whitespace-after": "always",
		"number-leading-zero": "always",
		"number-no-trailing-zeros": true,
		"string-quotes": "double",
		"length-zero-no-unit": true,
		"unit-case": "lower",
		"value-keyword-case": "lower",
		"value-list-comma-newline-after": null,
		"value-list-comma-newline-before": "never-multi-line",
		"value-list-comma-space-after": "always-single-line",
		"value-list-comma-space-before": "never",
		"value-list-max-empty-lines": 0,
		"custom-property-empty-line-before": "never",
		"custom-property-pattern": [
			"^[a-z0-9\\-]+$|^[a-zA-Z0-9]+$",
			{
				message:
					"Selector should be written in lowercase-with-hyphens, or camelCase for scss modules (selector-class-pattern)"
			}
		],
		"property-case": "lower",
		"declaration-bang-space-after": "never",
		"declaration-bang-space-before": "always",
		"declaration-colon-newline-after": null,
		"declaration-colon-space-after": "always-single-line",
		"declaration-colon-space-before": "never",
		"declaration-empty-line-before": "never",
		"declaration-block-semicolon-newline-after": "always-multi-line",
		"declaration-block-semicolon-newline-before": "never-multi-line",
		"declaration-block-semicolon-space-after": "always-single-line",
		"declaration-block-semicolon-space-before": "never",
		"declaration-block-trailing-semicolon": "always",
		"block-closing-brace-empty-line-before": "never",
		"block-closing-brace-newline-after": [
			"always",
			{
				ignoreAtRules: ["if", "else if", "else"]
			}
		],
		"block-closing-brace-newline-before": "always-multi-line",
		"block-closing-brace-space-after": "always-single-line",
		"block-opening-brace-newline-after": "always-multi-line",
		"block-opening-brace-newline-before": "always-single-line",
		"block-opening-brace-space-after": "always-single-line",
		"block-opening-brace-space-before": "always",
		"selector-attribute-brackets-space-inside": "never",
		"selector-attribute-operator-space-after": "never",
		"selector-attribute-operator-space-before": "never",
		"selector-attribute-quotes": "always",
		"selector-combinator-space-after": "always",
		"selector-combinator-space-before": "always",
		"selector-descendant-combinator-no-non-space": true,
		"selector-pseudo-class-case": "lower",
		"selector-pseudo-class-parentheses-space-inside": "never",
		"selector-id-pattern": [
			"^[a-z0-9\\-]+$|^[a-zA-Z0-9]+$",
			{
				message:
					"Selector should be written in lowercase-with-hyphens, or camelCase for scss modules (selector-class-pattern)"
			}
		],
		"selector-class-pattern": [
			"^[a-z0-9\\-]+$|^[a-zA-Z0-9]+$",
			{
				message:
					"Selector should be written in lowercase-with-hyphens, or camelCase for scss modules (selector-class-pattern)"
			}
		],
		"indentation": "tab",
		"max-nesting-depth": [
			5,
			{
				ignoreAtRules: ["media", "supports", "include"]
			}
		],
		"order/properties-alphabetical-order": null,
		"scss/at-extend-no-missing-placeholder": null,
		"selector-pseudo-element-case": "lower",
		"selector-pseudo-element-colon-notation": "single",
		"selector-type-case": "lower",
		"selector-list-comma-newline-after": "always",
		"selector-list-comma-newline-before": "never-multi-line",
		"selector-list-comma-space-after": "always-single-line",
		"selector-list-comma-space-before": "never",
		"rule-empty-line-before": [
			"always-multi-line",
			{
				except: ["after-single-line-comment", "first-nested"]
			}
		],
		"media-feature-colon-space-after": "always",
		"media-feature-colon-space-before": "never",
		"media-feature-name-case": "lower",
		"media-feature-parentheses-space-inside": "never",
		"media-feature-range-operator-space-after": "always",
		"media-feature-range-operator-space-before": "always",
		"media-query-list-comma-newline-after": "always-multi-line",
		"media-query-list-comma-newline-before": "never-multi-line",
		"media-query-list-comma-space-after": "always-single-line",
		"media-query-list-comma-space-before": "never",
		"at-rule-empty-line-before": [
			"always",
			{
				except: ["blockless-after-same-name-blockless", "blockless-after-blockless", "first-nested"],
				ignore: ["after-comment"],
				ignoreAtRules: ["if", "else if", "else", "return", "each", "mixin", "import", "include"]
			}
		],
		"at-rule-name-case": "lower",
		"at-rule-name-newline-after": null,
		"at-rule-name-space-after": "always-single-line",
		"at-rule-semicolon-newline-after": "always",
		"at-rule-semicolon-space-before": "never",
		"comment-empty-line-before": [
			"always",
			{
				except: ["first-nested"],
				ignore: ["after-comment"]
			}
		],
		"comment-whitespace-inside": "always",
		"linebreaks": "unix",
		"max-empty-lines": 1,
		"no-eol-whitespace": true,
		"no-missing-end-of-source-newline": true,
		"selector-pseudo-class-no-unknown": [
			true,
			{
				ignorePseudoClasses: ["global"]
			}
		]
	},
	overrides: [
		{
			files: ["./src//**/*.scss"],
			rules: {
				"at-rule-no-unknown": null,
				"scss/at-rule-no-unknown": true,
				"no-empty-source": null
			}
		},
		{
			files: ["./src//**/_root.scss"],
			rules: {
				"custom-property-pattern": null
			}
		}
	],
	ignoreFiles: ["./dist/**"]
};
