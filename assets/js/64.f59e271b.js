(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{522:function(t,a,e){"use strict";e.r(a);var s=e(53),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[e("a",{attrs:{href:"https://github.com/ajv-validator/ajv-formats",target:"_blank",rel:"noopener noreferrer"}},[t._v("ajv-formats repository"),e("OutboundLink")],1)]),t._v(" "),e("h1",{attrs:{id:"ajv-formats"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ajv-formats"}},[t._v("#")]),t._v(" ajv-formats")]),t._v(" "),e("p",[t._v("JSON Schema formats for Ajv")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://travis-ci.org/ajv-validator/ajv-formats",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://travis-ci.org/ajv-validator/ajv-formats.svg?branch=master",alt:"Build Status"}}),e("OutboundLink")],1),t._v(" "),e("a",{attrs:{href:"https://www.npmjs.com/package/ajv-formats",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://img.shields.io/npm/v/ajv-formats.svg",alt:"npm"}}),e("OutboundLink")],1),t._v(" "),e("a",{attrs:{href:"https://gitter.im/ajv-validator/ajv",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://img.shields.io/gitter/room/ajv-validator/ajv.svg",alt:"Gitter"}}),e("OutboundLink")],1),t._v(" "),e("a",{attrs:{href:"https://github.com/sponsors/epoberezkin",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://img.shields.io/badge/$-sponsors-brightgreen",alt:"GitHub Sponsors"}}),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"usage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ESM/TypeScript import")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Ajv "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ajv"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" addFormats "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ajv-formats"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Node.js require:")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Ajv "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ajv"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" addFormats "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ajv-formats"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" ajv "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Ajv")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("addFormats")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ajv"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("h2",{attrs:{id:"formats"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#formats"}},[t._v("#")]),t._v(" Formats")]),t._v(" "),e("p",[t._v("The package defines these formats:")]),t._v(" "),e("ul",[e("li",[e("em",[t._v("date")]),t._v(": full-date according to "),e("a",{attrs:{href:"http://tools.ietf.org/html/rfc3339#section-5.6",target:"_blank",rel:"noopener noreferrer"}},[t._v("RFC3339"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("li",[e("em",[t._v("time")]),t._v(": time with optional time-zone.")]),t._v(" "),e("li",[e("em",[t._v("date-time")]),t._v(": date-time from the same source (time-zone is mandatory).")]),t._v(" "),e("li",[e("em",[t._v("duration")]),t._v(": duration from "),e("a",{attrs:{href:"https://tools.ietf.org/html/rfc3339#appendix-A",target:"_blank",rel:"noopener noreferrer"}},[t._v("RFC3339"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("em",[t._v("uri")]),t._v(": full URI.")]),t._v(" "),e("li",[e("em",[t._v("uri-reference")]),t._v(": URI reference, including full and relative URIs.")]),t._v(" "),e("li",[e("em",[t._v("uri-template")]),t._v(": URI template according to "),e("a",{attrs:{href:"https://tools.ietf.org/html/rfc6570",target:"_blank",rel:"noopener noreferrer"}},[t._v("RFC6570"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("em",[t._v("url")]),t._v(" (deprecated): "),e("a",{attrs:{href:"https://url.spec.whatwg.org/#concept-url",target:"_blank",rel:"noopener noreferrer"}},[t._v("URL record"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("li",[e("em",[t._v("email")]),t._v(": email address.")]),t._v(" "),e("li",[e("em",[t._v("hostname")]),t._v(": host name according to "),e("a",{attrs:{href:"http://tools.ietf.org/html/rfc1034#section-3.5",target:"_blank",rel:"noopener noreferrer"}},[t._v("RFC1034"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("li",[e("em",[t._v("ipv4")]),t._v(": IP address v4.")]),t._v(" "),e("li",[e("em",[t._v("ipv6")]),t._v(": IP address v6.")]),t._v(" "),e("li",[e("em",[t._v("regex")]),t._v(": tests whether a string is a valid regular expression by passing it to RegExp constructor.")]),t._v(" "),e("li",[e("em",[t._v("uuid")]),t._v(": Universally Unique IDentifier according to "),e("a",{attrs:{href:"http://tools.ietf.org/html/rfc4122",target:"_blank",rel:"noopener noreferrer"}},[t._v("RFC4122"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("li",[e("em",[t._v("json-pointer")]),t._v(": JSON-pointer according to "),e("a",{attrs:{href:"https://tools.ietf.org/html/rfc6901",target:"_blank",rel:"noopener noreferrer"}},[t._v("RFC6901"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("li",[e("em",[t._v("relative-json-pointer")]),t._v(": relative JSON-pointer according to "),e("a",{attrs:{href:"http://tools.ietf.org/html/draft-luff-relative-json-pointer-00",target:"_blank",rel:"noopener noreferrer"}},[t._v("this draft"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("li",[e("em",[t._v("byte")]),t._v(": base64 encoded data according to the "),e("a",{attrs:{href:"https://spec.openapis.org/oas/v3.0.0#data-types",target:"_blank",rel:"noopener noreferrer"}},[t._v("openApi 3.0.0 specification"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("em",[t._v("int32")]),t._v(": signed 32 bits integer according to the "),e("a",{attrs:{href:"https://spec.openapis.org/oas/v3.0.0#data-types",target:"_blank",rel:"noopener noreferrer"}},[t._v("openApi 3.0.0 specification"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("em",[t._v("int64")]),t._v(": signed 64 bits according to the "),e("a",{attrs:{href:"https://spec.openapis.org/oas/v3.0.0#data-types",target:"_blank",rel:"noopener noreferrer"}},[t._v("openApi 3.0.0 specification"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("em",[t._v("float")]),t._v(": float according to the "),e("a",{attrs:{href:"https://spec.openapis.org/oas/v3.0.0#data-types",target:"_blank",rel:"noopener noreferrer"}},[t._v("openApi 3.0.0 specification"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("em",[t._v("double")]),t._v(": double according to the "),e("a",{attrs:{href:"https://spec.openapis.org/oas/v3.0.0#data-types",target:"_blank",rel:"noopener noreferrer"}},[t._v("openApi 3.0.0 specification"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("em",[t._v("password")]),t._v(": password string according to the "),e("a",{attrs:{href:"https://spec.openapis.org/oas/v3.0.0#data-types",target:"_blank",rel:"noopener noreferrer"}},[t._v("openApi 3.0.0 specification"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("em",[t._v("binary")]),t._v(": binary string according to the "),e("a",{attrs:{href:"https://spec.openapis.org/oas/v3.0.0#data-types",target:"_blank",rel:"noopener noreferrer"}},[t._v("openApi 3.0.0 specification"),e("OutboundLink")],1)])]),t._v(" "),e("p",[t._v("See regular expressions used for format validation and the sources that were used in "),e("a",{attrs:{href:"https://github.com/ajv-validator/ajv-formats/blob/master/src/formats.ts",target:"_blank",rel:"noopener noreferrer"}},[t._v("formats.ts"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("p",[e("strong",[t._v("Please note")]),t._v(": JSON Schema draft-07 also defines formats "),e("code",[t._v("iri")]),t._v(", "),e("code",[t._v("iri-reference")]),t._v(", "),e("code",[t._v("idn-hostname")]),t._v(" and "),e("code",[t._v("idn-email")]),t._v(" for URLs, hostnames and emails with international characters. These formats are available in "),e("a",{attrs:{href:"https://github.com/luzlab/ajv-formats-draft2019",target:"_blank",rel:"noopener noreferrer"}},[t._v("ajv-formats-draft2019"),e("OutboundLink")],1),t._v(" plugin.")]),t._v(" "),e("h2",{attrs:{id:"keywords-to-compare-values-formatmaximum-formatminimum-and-formatexclusivemaximum-formatexclusiveminimum"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#keywords-to-compare-values-formatmaximum-formatminimum-and-formatexclusivemaximum-formatexclusiveminimum"}},[t._v("#")]),t._v(" Keywords to compare values: "),e("code",[t._v("formatMaximum")]),t._v(" / "),e("code",[t._v("formatMinimum")]),t._v(" and "),e("code",[t._v("formatExclusiveMaximum")]),t._v(" / "),e("code",[t._v("formatExclusiveMinimum")])]),t._v(" "),e("p",[t._v("These keywords allow to define minimum/maximum constraints when the format keyword defines ordering ("),e("code",[t._v("compare")]),t._v(" function in format definition).")]),t._v(" "),e("p",[t._v("These keywords are added to ajv instance when ajv-formats is used without options or with option "),e("code",[t._v("keywords: true")]),t._v(".")]),t._v(" "),e("p",[t._v("These keywords apply only to strings. If the data is not a string, the validation succeeds.")]),t._v(" "),e("p",[t._v("The value of keywords "),e("code",[t._v("formatMaximum")]),t._v("/"),e("code",[t._v("formatMinimum")]),t._v(" and "),e("code",[t._v("formatExclusiveMaximum")]),t._v("/"),e("code",[t._v("formatExclusiveMinimum")]),t._v(" should be a string or "),e("a",{attrs:{href:"https://github.com/ajv-validator/ajv/blob/master/docs/validation.md#data-reference",target:"_blank",rel:"noopener noreferrer"}},[t._v("$data reference"),e("OutboundLink")],1),t._v(". This value is the maximum (minimum) allowed value for the data to be valid as determined by "),e("code",[t._v("format")]),t._v(" keyword. If "),e("code",[t._v("format")]),t._v(" keyword is not present schema compilation will throw exception.")]),t._v(" "),e("p",[t._v("When these keyword are added, they also add comparison functions to formats "),e("code",[t._v('"date"')]),t._v(", "),e("code",[t._v('"time"')]),t._v(" and "),e("code",[t._v('"date-time"')]),t._v(". User-defined formats also can have comparison functions. See "),e("a",{attrs:{href:"https://github.com/ajv-validator/ajv/blob/master/docs/api.md#api-addformat",target:"_blank",rel:"noopener noreferrer"}},[t._v("addFormat"),e("OutboundLink")],1),t._v(" method.")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ajv-formats"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ajv"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" schema "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  type"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  format"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"date"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  formatMinimum"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2016-02-06"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  formatExclusiveMaximum"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2016-12-27"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" validDataList "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2016-02-06"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2016-12-26"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" invalidDataList "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2016-02-05"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2016-12-27"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"abc"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),e("h2",{attrs:{id:"options"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[t._v("#")]),t._v(" Options")]),t._v(" "),e("p",[t._v("Options can be passed via the second parameter. Options value can be")]),t._v(" "),e("ol",[e("li",[t._v("The list of format names that will be added to ajv instance:")])]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("addFormats")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ajv"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"date"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"time"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[e("strong",[t._v("Please note")]),t._v(": when ajv encounters an undefined format it throws exception (unless ajv instance was configured with "),e("code",[t._v("strict: false")]),t._v(" option). To allow specific undefined formats they have to be passed to ajv instance via "),e("code",[t._v("formats")]),t._v(" option with "),e("code",[t._v("true")]),t._v(" value:")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" ajv "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Ajv")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("formats"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("date"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" time"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// to ignore "date" and "time" formats in schemas.')]),t._v("\n")])])]),e("ol",{attrs:{start:"2"}},[e("li",[t._v("Format validation mode (default is "),e("code",[t._v('"full"')]),t._v(") with optional list of format names and "),e("code",[t._v("keywords")]),t._v(" option to add additional format comparison keywords:")])]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("addFormats")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ajv"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("mode"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fast"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[t._v("or")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("addFormats")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ajv"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("mode"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fast"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" formats"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"date"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"time"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" keywords"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[t._v("In "),e("code",[t._v('"fast"')]),t._v(" mode the following formats are simplified: "),e("code",[t._v('"date"')]),t._v(", "),e("code",[t._v('"time"')]),t._v(", "),e("code",[t._v('"date-time"')]),t._v(", "),e("code",[t._v('"uri"')]),t._v(", "),e("code",[t._v('"uri-reference"')]),t._v(", "),e("code",[t._v('"email"')]),t._v(". For example "),e("code",[t._v('"date"')]),t._v(", "),e("code",[t._v('"time"')]),t._v(" and "),e("code",[t._v('"date-time"')]),t._v(" do not validate ranges in "),e("code",[t._v('"fast"')]),t._v(" mode, only string structure, and other formats have simplified regular expressions.")]),t._v(" "),e("h2",{attrs:{id:"tests"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tests"}},[t._v("#")]),t._v(" Tests")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" submodule update --init\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v("\n")])])]),e("h2",{attrs:{id:"license"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#license"}},[t._v("#")]),t._v(" License")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/ajv-validator/ajv-formats/blob/master/LICENSE",target:"_blank",rel:"noopener noreferrer"}},[t._v("MIT"),e("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=r.exports}}]);