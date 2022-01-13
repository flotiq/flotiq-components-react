"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// eslint-disable-next-line import/no-extraneous-dependencies
var defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    fontFamily: {
      sans: ['Inter'].concat(_toConsumableArray(defaultTheme.fontFamily.sans))
    },
    colors: function colors(_ref) {
      var _colors = _ref.colors;
      return {
        inherit: _colors.inherit,
        current: _colors.current,
        transparent: _colors.transparent,
        black: _colors.black,
        white: _colors.white,
        slate: _colors.slate,
        gray: _colors.gray,
        zinc: _colors.zinc,
        neutral: _colors.neutral,
        stone: _colors.stone,
        red: _colors.red,
        orange: _colors.orange,
        amber: _colors.amber,
        yellow: _colors.yellow,
        lime: _colors.lime,
        green: _colors.green,
        emerald: _colors.emerald,
        teal: _colors.teal,
        cyan: _colors.cyan,
        sky: _colors.sky,
        blue: _colors.blue,
        indigo: _colors.indigo,
        violet: _colors.violet,
        purple: _colors.purple,
        fuchsia: _colors.fuchsia,
        pink: _colors.pink,
        rose: _colors.rose,
        primary: {
          DEFAULT: '#0083FC',
          50: '#B5DBFF',
          100: '#A0D1FF',
          200: '#77BEFF',
          300: '#4FAAFF',
          400: '#2697FF',
          500: '#0083FC',
          600: '#015bd7',
          700: '#00498C',
          800: '#002C54',
          900: '#000E1C'
        }
      };
    }
  }
};