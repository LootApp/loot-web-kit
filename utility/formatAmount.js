"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var formatAmount=function(a){if("string"==typeof a){var b=a.toString();if(1===b.length)b="0.0"+a;else{b=b.split(".").join("");var d=b.length;b=b.substring(0,d-2)+"."+b.substring(d-2)}b=(+b).toString(),-1===b.indexOf(".")&&(b+=".00");var c=b.substring(b.indexOf(".")+1);return 2>c.length&&(b+="0"),-1===b.indexOf(".")&&(b+=".00"),"NaN"===b||"0"===b||"00.00"===b||"NaN.00"===b?"":b}};exports.default=formatAmount;