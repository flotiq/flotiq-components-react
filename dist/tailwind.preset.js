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
        },
        secondary: {
          DEFAULT: '#141046',
          50: '#473BD2',
          100: '#3A2ECB',
          200: '#3027AA',
          300: '#271F88',
          400: '#1D1867',
          500: '#141046',
          600: '#070618',
          700: '#000000',
          800: '#000000',
          900: '#000000'
        },
        success: {
          DEFAULT: '#64FBC1',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#DBFEF1',
          300: '#B4FDE1',
          400: '#8CFCD1',
          500: '#64FBC1',
          600: '#2DFAAB',
          700: '#06E992',
          800: '#05B26F',
          900: '#037B4D'
        },
        danger: {
          DEFAULT: '#EF4444',
          50: '#FDEDED',
          100: '#FCDADA',
          200: '#F9B5B5',
          300: '#F58F8F',
          400: '#F26A6A',
          500: '#EF4444',
          600: '#E71414',
          700: '#B30F0F',
          800: '#800B0B',
          900: '#4C0707'
        },
        warning: {
          DEFAULT: '#F3B537',
          50: '#FDF5E4',
          100: '#FCEED1',
          200: '#FAE0AA',
          300: '#F8D184',
          400: '#F5C35D',
          500: '#F3B537',
          600: '#E49D0E',
          700: '#AF790B',
          800: '#7A5407',
          900: '#453004'
        },
        info: {
          DEFAULT: '#0DCAF0',
          50: '#B9F0FB',
          100: '#A6ECFA',
          200: '#7FE4F8',
          300: '#59DCF6',
          400: '#32D3F4',
          500: '#0DCAF0',
          600: '#0A9DBB',
          700: '#077086',
          800: '#044450',
          900: '#01171B'
        },
        light: {
          DEFAULT: '#E5E5E5',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#FFFFFF',
          300: '#FFFFFF',
          400: '#F9F9F9',
          500: '#E5E5E5',
          600: '#C9C9C9',
          700: '#ADADAD',
          800: '#919191',
          900: '#757575'
        },
        dark: {
          DEFAULT: '#050038',
          50: '#1500F0',
          100: '#1400DB',
          200: '#1000B2',
          300: '#0C008A',
          400: '#090061',
          500: '#050038',
          600: '#000000',
          700: '#000000',
          800: '#000000',
          900: '#000000'
        }
      };
    }
  }
};