module.exports = {
  "extends": "stylelint-config-rational-order",                         // Use rational order extension
  "plugins": [
    "stylelint-scss"
  ],
  "rules": {
    // Project init rules
    // "selector-nested-pattern": "^&",
    "no-descending-specificity": null,
    "no-eol-whitespace": null,
    "declaration-empty-line-before": null,
    "value-keyword-case": null,

    //Code guide rules
    "indentation": 2,                                                   // Indentation of two spaces
    "selector-list-comma-newline-after": "always",                      // Keep individual selectors to a single line
    "block-opening-brace-space-before": "always",                       // Include one space before the opening brace of declaration blocks ('{')
    "block-closing-brace-newline-before": "always-multi-line",          // Place closing braces of declaration blocks on a new line ('}')
    "declaration-colon-space-before": "never",                          // Don't include one space before ':' for each declaration
    "declaration-colon-space-after": "always",                          // Include one space after ':' for each declaration
    "declaration-block-semicolon-newline-after": "always-multi-line",   // Each declaration should appear on its own line
    "declaration-block-trailing-semicolon": "always",                   // End all declarations with a semi-colon (';')
    "number-leading-zero": "never",                                     // Don't prefix property values or color parameters with a leading zero (use ‘.5’ instead of ‘0.5’)
    "color-hex-case": "lower",                                          // Color codes have to be in lowercase
    "color-hex-length": "short",                                        // Use shorthand hex values where available
    "selector-attribute-quotes": "always",                              // Quote attribute values in selectors
    "length-zero-no-unit": true,                                        // Avoid specifying units for zero values

    // Extra rules
    "property-case": "lower",                                           // CSS properties have to be in lowercase
    "color-no-invalid-hex": true,                                       // Disallow invalid hex colors
    "block-no-empty": true,                                             // Disallow empty blocks
    "no-extra-semicolons": true,                                        // Disallow extra semicolons
    "at-rule-no-unknown": [
      true,
      {
        "ignoreAtRules": [
          "tailwind",
          "apply",
          "responsive",
          "variants",
          "screen",
          "use",
          "include",
          "function",
          "return",
          "mixin",
          "for"
        ]
      }
    ]
  }
}