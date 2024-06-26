/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Math blocks for Blockly.
 * @author q.neutron@gmail.com (Quynh Neutron)
 */
'use strict';

goog.provide('Blockly.Blocks.math');

goog.require('Blockly.Blocks');


/**
 * Common HSV hue for all blocks in this category.
 */
Blockly.Blocks.math.HUE = 230;

Blockly.Blocks['math_number'] = {
  /**
   * Block for numeric value.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl(Blockly.Msg.MATH_NUMBER_HELPURL);
    this.setColour(Blockly.CAT_MATH_RGB);
    this.appendDummyInput()
        .appendField(new Blockly.FieldNumber('0',
        Blockly.FieldTextInput.numberValidator), 'NUM');
    this.setOutput(true, 'Number');
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    // Number block is trivial.  Use tooltip of parent block if it exists.
    this.setTooltip(function() {
      var parent = thisBlock.getParent();
      return (parent && parent.getInputsInline() && parent.tooltip) ||
          Blockly.Msg.MATH_NUMBER_TOOLTIP;
    });
  }
};

Blockly.Blocks['math_integer'] = {
  /**
   * Block for an Integer (a whole number)
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl(Blockly.Msg.MATH_NUMBER_HELPURL);
    this.setColour(Blockly.CAT_MATH_RGB);
    this.appendDummyInput()
        .appendField(new Blockly.FieldNumber('0',
            Blockly.FieldTextInput.integerValidator), 'NUM');
    this.setOutput(true, 'Number');
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    // Number block is trivial.  Use tooltip of parent block if it exists.
    this.setTooltip(function() {
      var parent = thisBlock.getParent();
      return (parent && parent.getInputsInline() && parent.tooltip) ||
          Blockly.Msg.MATH_NUMBER_TOOLTIP;
    });
  }
};

Blockly.Blocks['rob_math_number'] = {
        /**
         * Block for numeric value.
         * @this Blockly.Block
         */
        init: function() {
          this.setColour(Blockly.CAT_MATH_RGB);
          this.appendDummyInput()
              .appendField(new Blockly.FieldDropdown([ ['0','0'], ['1','1'], ['2','3'], ['4','4'], ['5','5'], ['6','6'], ['6','6'], ['7','7'], ['8','8'], ['9','9'], ['10','10'] ]), 'NUM');
          this.setOutput(true, 'Number');
          // Assign 'this' to a variable for use in the tooltip closure below.
          var thisBlock = this;
          // Number block is trivial.  Use tooltip of parent block if it exists.
          this.setTooltip(function() {
            var parent = thisBlock.getParent();
            return (parent && parent.getInputsInline() && parent.tooltip) ||
                Blockly.Msg.MATH_NUMBER_TOOLTIP;
          });
        }
      };

Blockly.Blocks['rob_math_u999'] = {
  /**
   * Block for numeric value.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%1 %2 %3 %4 %5 %6",
      "args0": [
        {
          "type": "field_input",
          "name": "NUM",
          "text": "0",
          "check": "number"
        },
        {
          "type": "input_dummy",
          "align": "CENTRE",
        },
        {
          "type": "field_dropdown",
          "name": "SIGN",
          "options": [
            ['+', 'POS'], ['-', 'NEG'],
          ]
        },
        {
          "type": "field_dropdown",
          "name": "2",
          "options": [
            ['0', '0'], ['1', '1'], ['2', '2'], ['3', '3'], ['4', '4'], ['5', '5'], ['6', '6'], ['7', '7'], ['8', '8'], ['9', '9'],
          ]
        },
        {
          "type": "field_dropdown",
          "name": "1",
          "options": [
            ['0', '0'], ['1', '1'], ['2', '2'], ['3', '3'], ['4', '4'], ['5', '5'], ['6', '6'], ['7', '7'], ['8', '8'], ['9', '9'],
          ]
        },
        {
          "type": "field_dropdown",
          "name": "0",
          "options": [
            ['0', '0'], ['1', '1'], ['2', '2'], ['3', '3'], ['4', '4'], ['5', '5'], ['6', '6'], ['7', '7'], ['8', '8'], ['9', '9'],
          ]
        }
      ],
      "output": null,
      "colour": Blockly.CAT_MATH_RGB,
      "helpUrl": ""
    });
    var thisBlock = this;
    var validator = function(newValue) {
      var value = Blockly.FieldTextInput.integerValidator(newValue);
      if (value && value > -1000 && value < 1000) {
        var validValue = value;
        var sign = validValue < 0 ? -1 : 1;
        value = Math.abs(validValue);
        var digit = Math.floor(value / 100);
        // setValue() will trigger another change event (which is already triggered by this input), to avoid this we have to set value_ by hand
        thisBlock.getField("2").setText(digit.toString());
        thisBlock.getField("2").value_ = digit.toString();
        value -= digit * 100;
        digit = Math.floor(value / 10);
        thisBlock.getField("1").setText(digit.toString());
        thisBlock.getField("1").value_ = digit.toString();
        value -= digit * 10;
        thisBlock.getField("0").setText(Math.floor(value).toString());
        thisBlock.getField("0").value_ = Math.floor(value).toString();
        thisBlock.getField("SIGN").setText(sign < 0 ? "-" : "+");
        thisBlock.getField("SIGN").value_ = sign < 0 ? "NEG" : "POS";
        return validValue;
      } else {
        return null;
      }
    };

    var validatorDropdown = function(newValue) {
      var newNumber = parseInt(newValue);
      var sign = thisBlock.getField("NUM").getValue() < 0 ? -1 : 1;
      var hundreds = parseInt(thisBlock.getField("2").getValue()) * 100;
      var tens = parseInt(thisBlock.getField("1").getValue()) * 10;
      var one = parseInt(thisBlock.getField("0").getValue());
      switch (this.name) {
          case "0":
              one = newNumber;
              break;
          case "1":
              tens = newNumber * 10;
              break;
          case "2":
              hundreds = newNumber * 100;
              break;
      }
      thisBlock.getField("NUM").setText(sign * (hundreds + tens + one));
      return newValue;
    };
    var validatorSign = function(newValue) {
      var num = parseInt(thisBlock.getField("NUM").getValue());
      if ((num > 0 && newValue === "NEG") || (num < 0 && newValue === "POS")) {
        num *=-1;
      }
      thisBlock.getField("NUM").setText(num);
      thisBlock.getField("NUM").value_ = num;
      return newValue;
    }
    this.getField("0").setValidator(validatorDropdown);
    this.getField("1").setValidator(validatorDropdown);
    this.getField("2").setValidator(validatorDropdown);
    this.getField("SIGN").setValidator(validatorSign);
    this.getField("NUM").setValidator(validator);
    this.getField("NUM").stretch = 16;

    this.setTooltip(function() {
      var parent = thisBlock.getParent();
      return (parent && parent.getInputsInline() && parent.tooltip) ||
          Blockly.Msg.MATH_NUMBER_TOOLTIP;
    });
  }
}

Blockly.Blocks['math_arithmetic'] = {
  /**
   * Block for basic arithmetic operator.
   * @this Blockly.Block
   */
  init: function() {
  if (this.workspace.device === 'thymio') {
    this.jsonInit({
      "message0": "%1 %2 %3",
      "args0": [
        {
          "type": "input_value",
          "name": "A",
          "check": "Number"
        },
        {
          "type": "field_dropdown",
          "name": "OP",
          "options":
              [[Blockly.Msg.MATH_ADDITION_SYMBOL, 'ADD'],
                [Blockly.Msg.MATH_SUBTRACTION_SYMBOL, 'MINUS'],
                [Blockly.Msg.MATH_MULTIPLICATION_SYMBOL, 'MULTIPLY'],
                [Blockly.Msg.MATH_DIVISION_SYMBOL, 'DIVIDE']]
        },
        {
          "type": "input_value",
          "name": "B",
          "check": "Number"
        }
      ],
      "inputsInline": true,
      "output": "Number",
      "colour": Blockly.CAT_MATH_RGB,
      "helpUrl": Blockly.Msg.MATH_ARITHMETIC_HELPURL
    });
  } else {
    this.jsonInit({
      "message0": "%1 %2 %3",
      "args0": [
        {
          "type": "input_value",
          "name": "A",
          "check": "Number"
        },
        {
          "type": "field_dropdown",
          "name": "OP",
          "options":
              [[Blockly.Msg.MATH_ADDITION_SYMBOL, 'ADD'],
                [Blockly.Msg.MATH_SUBTRACTION_SYMBOL, 'MINUS'],
                [Blockly.Msg.MATH_MULTIPLICATION_SYMBOL, 'MULTIPLY'],
                [Blockly.Msg.MATH_DIVISION_SYMBOL, 'DIVIDE'],
                [Blockly.Msg.MATH_POWER_SYMBOL, 'POWER']]
        },
        {
          "type": "input_value",
          "name": "B",
          "check": "Number"
        }
      ],
      "inputsInline": true,
      "output": "Number",
      "colour": Blockly.CAT_MATH_RGB,
      "helpUrl": Blockly.Msg.MATH_ARITHMETIC_HELPURL
    });
  }
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    this.setTooltip(function() {
      var mode = thisBlock.getFieldValue('OP');
      var TOOLTIPS = {
        'ADD': Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_ADD,
        'MINUS': Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_MINUS,
        'MULTIPLY': Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_MULTIPLY,
        'DIVIDE': Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_DIVIDE,
        'POWER': Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_POWER
      };
      return TOOLTIPS[mode];
    });
  }
};

Blockly.Blocks['math_single'] = {
  /**
   * Block for advanced math operators with single operand.
   * @this Blockly.Block
   */
  init: function() {
    if (this.workspace.device === 'edison') {
      this.jsonInit({
        "message0": "%1 %2",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "OP",
            "options": [
              [Blockly.Msg.MATH_SINGLE_OP_ABSOLUTE, 'ABS'],
              ['-', 'NEG'],
              ['10^', 'POW10']
            ]
          },
          {
            "type": "input_value",
            "name": "NUM",
            "check": "Number"
          }
        ],
        "output": "Number",
        "colour": Blockly.CAT_MATH_RGB,
        "helpUrl": Blockly.Msg.MATH_SINGLE_HELPURL
      });
    } else if (this.workspace.device === 'thymio') {
      this.jsonInit({
        "message0": "%1 %2",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "OP",
            "options": [
              [Blockly.Msg.MATH_SINGLE_OP_ROOT, 'ROOT'],
              [Blockly.Msg.MATH_SINGLE_OP_SQUARE, 'SQUARE'],
              [Blockly.Msg.MATH_SINGLE_OP_ABSOLUTE, 'ABS'],
              ['-', 'NEG'],
            ]
          },
          {
            "type": "input_value",
            "name": "NUM",
            "check": "Number"
          }
        ],
        "output": "Number",
        "colour": Blockly.CAT_MATH_RGB,
        "helpUrl": Blockly.Msg.MATH_SINGLE_HELPURL
      });
    } else {
      this.jsonInit({
        "message0": "%1 %2",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "OP",
            "options": [
              [Blockly.Msg.MATH_SINGLE_OP_ROOT, 'ROOT'],
              [Blockly.Msg.MATH_SINGLE_OP_SQUARE, 'SQUARE'],
              [Blockly.Msg.MATH_SINGLE_OP_ABSOLUTE, 'ABS'],
              ['-', 'NEG'],
              ['ln', 'LN'],
              ['log10', 'LOG10'],
              ['e^', 'EXP'],
              ['10^', 'POW10']
            ]
          },
          {
            "type": "input_value",
            "name": "NUM",
            "check": "Number"
          }
        ],
        "output": "Number",
        "colour": Blockly.CAT_MATH_RGB,
        "helpUrl": Blockly.Msg.MATH_SINGLE_HELPURL
      });
    }
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    this.setTooltip(function() {
      var mode = thisBlock.getFieldValue('OP');
      var TOOLTIPS = {
        'ROOT': Blockly.Msg.MATH_SINGLE_TOOLTIP_ROOT,
        'ABS': Blockly.Msg.MATH_SINGLE_TOOLTIP_ABS,
        'NEG': Blockly.Msg.MATH_SINGLE_TOOLTIP_NEG,
        'LN': Blockly.Msg.MATH_SINGLE_TOOLTIP_LN,
        'LOG10': Blockly.Msg.MATH_SINGLE_TOOLTIP_LOG10,
        'EXP': Blockly.Msg.MATH_SINGLE_TOOLTIP_EXP,
        'POW10': Blockly.Msg.MATH_SINGLE_TOOLTIP_POW10
      };
      return TOOLTIPS[mode];
    });
  }
};

Blockly.Blocks['math_trig'] = {
  /**
   * Block for trigonometry operators.
   * @this Blockly.Block
   */
  init: function() {
    if (this.workspace.device === 'thymio') {
      this.jsonInit({
        "message0": "%1 %2",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "OP",
            "options": [
              [Blockly.Msg.MATH_TRIG_SIN, 'SIN'],
              [Blockly.Msg.MATH_TRIG_COS, 'COS'],
              [Blockly.Msg.MATH_TRIG_TAN, 'TAN'],
              [Blockly.Msg.MATH_TRIG_ATAN, 'ATAN']
            ]
          },
          {
            "type": "input_value",
            "name": "NUM",
            "check": "Number"
          }
        ],
        "output": "Number",
        "colour": Blockly.CAT_MATH_RGB,
        "helpUrl": Blockly.Msg.MATH_TRIG_HELPURL
      });
      var thisBlock = this;
      this.setTooltip(function() {
        var mode = thisBlock.getFieldValue('OP');
        var TOOLTIPS = {
          'SIN': Blockly.Msg.MATH_TRIG_TOOLTIP_SIN + Blockly.Msg.MATH_THYMIO_TRIG_TOOLTIP,
          'COS': Blockly.Msg.MATH_TRIG_TOOLTIP_COS + Blockly.Msg.MATH_THYMIO_TRIG_TOOLTIP,
          'TAN': Blockly.Msg.MATH_TRIG_TOOLTIP_TAN + Blockly.Msg.MATH_THYMIO_TRIG_TOOLTIP,
          'ATAN': Blockly.Msg.MATH_TRIG_TOOLTIP_ATAN + Blockly.Msg.MATH_THYMIO_TRIG_TOOLTIP
        };
        return TOOLTIPS[mode];
      });
    } else {
      this.jsonInit({
        "message0": "%1 %2",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "OP",
            "options": [
              [Blockly.Msg.MATH_TRIG_SIN, 'SIN'],
              [Blockly.Msg.MATH_TRIG_COS, 'COS'],
              [Blockly.Msg.MATH_TRIG_TAN, 'TAN'],
              [Blockly.Msg.MATH_TRIG_ASIN, 'ASIN'],
              [Blockly.Msg.MATH_TRIG_ACOS, 'ACOS'],
              [Blockly.Msg.MATH_TRIG_ATAN, 'ATAN']
            ]
          },
          {
            "type": "input_value",
            "name": "NUM",
            "check": "Number"
          }
        ],
        "output": "Number",
        "colour": Blockly.CAT_MATH_RGB,
        "helpUrl": Blockly.Msg.MATH_TRIG_HELPURL
      });
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    this.setTooltip(function() {
      var mode = thisBlock.getFieldValue('OP');
      var TOOLTIPS = {
        'SIN': Blockly.Msg.MATH_TRIG_TOOLTIP_SIN,
        'COS': Blockly.Msg.MATH_TRIG_TOOLTIP_COS,
        'TAN': Blockly.Msg.MATH_TRIG_TOOLTIP_TAN,
        'ASIN': Blockly.Msg.MATH_TRIG_TOOLTIP_ASIN,
        'ACOS': Blockly.Msg.MATH_TRIG_TOOLTIP_ACOS,
        'ATAN': Blockly.Msg.MATH_TRIG_TOOLTIP_ATAN
      };
      return TOOLTIPS[mode];
    });
    }
  }
};

Blockly.Blocks['math_constant'] = {
  /**
   * Block for constants: PI, E, the Golden Ratio, sqrt(2), 1/sqrt(2), INFINITY.
   * @this Blockly.Block
   */
  init: function() {
    if (this.workspace.device === 'calliope' || this.workspace.device === 'microbit') {
        this.jsonInit({
          "message0": "%1",
          "args0": [
            {
              "type": "field_dropdown",
              "name": "CONSTANT",
              "options": [
                ['\u03c0', 'PI'],
                ['e', 'E'],
                ['\u03c6', 'GOLDEN_RATIO'],
                ['sqrt(2)', 'SQRT2'],
                ['sqrt(\u00bd)', 'SQRT1_2']
              ]
            }
          ],
          "output": "Number",
          "colour": Blockly.CAT_MATH_RGB,
          "tooltip": Blockly.Msg.MATH_CONSTANT_TOOLTIP,
          "helpUrl": Blockly.Msg.MATH_CONSTANT_HELPURL
        });
    } else {
        this.jsonInit({
            "message0": "%1",
            "args0": [
              {
                "type": "field_dropdown",
                "name": "CONSTANT",
                "options": [
                  ['\u03c0', 'PI'],
                  ['e', 'E'],
                  ['\u03c6', 'GOLDEN_RATIO'],
                  ['sqrt(2)', 'SQRT2'],
                  ['sqrt(\u00bd)', 'SQRT1_2'],
                  ['\u221e', 'INFINITY']
                ]
              }
            ],
            "output": "Number",
            "colour": Blockly.CAT_MATH_RGB,
            "tooltip": Blockly.Msg.MATH_CONSTANT_TOOLTIP,
            "helpUrl": Blockly.Msg.MATH_CONSTANT_HELPURL
          });
    }
  }
};

Blockly.Blocks['math_number_property'] = {
  /**
   * Block for checking if a number is even, odd, prime, whole, positive,
   * negative or if it is divisible by certain number.
   * @this Blockly.Block
   */
  init: function() {
    if (this.workspace.device === 'edison') {
      var PROPERTIES =
          [[Blockly.Msg.MATH_IS_EVEN, 'EVEN'],
            [Blockly.Msg.MATH_IS_ODD, 'ODD'],
            [Blockly.Msg.MATH_IS_PRIME, 'PRIME'],
            [Blockly.Msg.MATH_IS_POSITIVE, 'POSITIVE'],
            [Blockly.Msg.MATH_IS_NEGATIVE, 'NEGATIVE'],
            [Blockly.Msg.MATH_IS_DIVISIBLE_BY, 'DIVISIBLE_BY']];
    } else {
      var PROPERTIES =
          [[Blockly.Msg.MATH_IS_EVEN, 'EVEN'],
            [Blockly.Msg.MATH_IS_ODD, 'ODD'],
            [Blockly.Msg.MATH_IS_PRIME, 'PRIME'],
            [Blockly.Msg.MATH_IS_WHOLE, 'WHOLE'],
            [Blockly.Msg.MATH_IS_POSITIVE, 'POSITIVE'],
            [Blockly.Msg.MATH_IS_NEGATIVE, 'NEGATIVE'],
            [Blockly.Msg.MATH_IS_DIVISIBLE_BY, 'DIVISIBLE_BY']];
    }
    this.setColour(Blockly.CAT_MATH_RGB);
    this.appendValueInput('NUMBER_TO_CHECK')
        .setCheck('Number');
    var dropdown = new Blockly.FieldDropdown(PROPERTIES, function(option) {
      var divisorInput = (option == 'DIVISIBLE_BY');
      this.sourceBlock_.updateShape_(divisorInput);
    });
    this.appendDummyInput()
        .appendField(dropdown, 'PROPERTY');
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.MATH_IS_TOOLTIP);
  },
  /**
   * Create XML to represent whether the 'divisorInput' should be present.
   * @return {Element} XML storage element.
   * @this Blockly.Block
   */
  mutationToDom: function() {
    var container = document.createElement('mutation');
    var divisorInput = (this.getFieldValue('PROPERTY') == 'DIVISIBLE_BY');
    container.setAttribute('divisor_input', divisorInput);
    return container;
  },
  /**
   * Parse XML to digitore the 'divisorInput'.
   * @param {!Element} xmlElement XML storage element.
   * @this Blockly.Block
   */
  domToMutation: function(xmlElement) {
    var divisorInput = (xmlElement.getAttribute('divisor_input') == 'true');
    this.updateShape_(divisorInput);
  },
  /**
   * Modify this block to have (or not have) an input for 'is divisible by'.
   * @param {boolean} divisorInput True if this block has a divisor input.
   * @private
   * @this Blockly.Block
   */
  updateShape_: function(divisorInput) {
    // Add or remove a Value Input.
    var inputExists = this.getInput('DIVISOR');
    if (divisorInput) {
      if (!inputExists) {
        this.appendValueInput('DIVISOR')
            .setCheck('Number');
      }
    } else if (inputExists) {
      this.removeInput('DIVISOR');
    }
  }
};

Blockly.Blocks['math_change'] = {
  /**
   * Block for adding to a variable in place.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.MATH_CHANGE_TITLE,
      "args0": [
        {
          "type": "field_variable",
          "name": "VAR",
          "variable": Blockly.Msg.MATH_CHANGE_TITLE_ITEM
        },
        {
          "type": "input_value",
          "name": "DELTA",
          "check": "Number"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": Blockly.CAT_MATH_RGB,
      "helpUrl": Blockly.Msg.MATH_CHANGE_HELPURL
    });
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    this.setTooltip(function() {
      return Blockly.Msg.MATH_CHANGE_TOOLTIP.replace('%1',
          thisBlock.getFieldValue('VAR'));
    });
  }
};

Blockly.Blocks['math_round'] = {
  /**
   * Block for rounding functions.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%1 %2",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "OP",
          "options": [
            [Blockly.Msg.MATH_ROUND_OPERATOR_ROUND, 'ROUND'],
            [Blockly.Msg.MATH_ROUND_OPERATOR_ROUNDUP, 'ROUNDUP'],
            [Blockly.Msg.MATH_ROUND_OPERATOR_ROUNDDOWN, 'ROUNDDOWN']
          ]
        },
        {
          "type": "input_value",
          "name": "NUM",
          "check": "Number"
        }
      ],
      "output": "Number",
      "colour": Blockly.CAT_MATH_RGB,
      "tooltip": Blockly.Msg.MATH_ROUND_TOOLTIP,
      "helpUrl": Blockly.Msg.MATH_ROUND_HELPURL
    });
  }
};

Blockly.Blocks['math_on_list'] = {
  /**
   * Block for evaluating a list of numbers to return sum, average, min, max,
   * etc.  Some functions also work on text (min, max, mode, median).
   * @this Blockly.Block
   */
  init: function() {
    if (this.workspace.device === 'edison') {
      var OPERATORS =
          [[Blockly.Msg.MATH_ONLIST_OPERATOR_SUM, 'SUM'],
            [Blockly.Msg.MATH_ONLIST_OPERATOR_MIN, 'MIN'],
            [Blockly.Msg.MATH_ONLIST_OPERATOR_MAX, 'MAX'],
            [Blockly.Msg.MATH_ONLIST_OPERATOR_AVERAGE, 'AVERAGE']];
    } else {
      var OPERATORS =
          [[Blockly.Msg.MATH_ONLIST_OPERATOR_SUM, 'SUM'],
            [Blockly.Msg.MATH_ONLIST_OPERATOR_MIN, 'MIN'],
            [Blockly.Msg.MATH_ONLIST_OPERATOR_MAX, 'MAX'],
            [Blockly.Msg.MATH_ONLIST_OPERATOR_AVERAGE, 'AVERAGE'],
            [Blockly.Msg.MATH_ONLIST_OPERATOR_MEDIAN, 'MEDIAN'],
            //    [Blockly.Msg.MATH_ONLIST_OPERATOR_MODE, 'MODE'],
            [Blockly.Msg.MATH_ONLIST_OPERATOR_STD_DEV, 'STD_DEV'],
            [Blockly.Msg.MATH_ONLIST_OPERATOR_RANDOM, 'RANDOM']];
    }
    // Assign 'this' to a variable for use in the closures below.
    var thisBlock = this;
    this.setHelpUrl(Blockly.Msg.MATH_ONLIST_HELPURL);
    this.setColour(Blockly.CAT_MATH_RGB);
    this.setOutput(true, 'Number');
    var dropdown = new Blockly.FieldDropdown(OPERATORS, function(newOp) {
      thisBlock.updateType_(newOp);
    });
    this.appendValueInput('LIST')
        .setCheck('Array_Number')
        .appendField(dropdown, 'OP');
    this.setTooltip(function() {
      var mode = thisBlock.getFieldValue('OP');
      var TOOLTIPS = {
        'SUM': Blockly.Msg.MATH_ONLIST_TOOLTIP_SUM,
        'MIN': Blockly.Msg.MATH_ONLIST_TOOLTIP_MIN,
        'MAX': Blockly.Msg.MATH_ONLIST_TOOLTIP_MAX,
        'AVERAGE': Blockly.Msg.MATH_ONLIST_TOOLTIP_AVERAGE,
        'MEDIAN': Blockly.Msg.MATH_ONLIST_TOOLTIP_MEDIAN,
        'MODE': Blockly.Msg.MATH_ONLIST_TOOLTIP_MODE,
        'STD_DEV': Blockly.Msg.MATH_ONLIST_TOOLTIP_STD_DEV,
        'RANDOM': Blockly.Msg.MATH_ONLIST_TOOLTIP_RANDOM
      };
      return TOOLTIPS[mode];
    });
  },
  /**
   * Modify this block to have the correct output type.
   * @param {string} newOp Either 'MODE' or some op than returns a number.
   * @private
   * @this Blockly.Block
   */
  updateType_: function(newOp) {
    if (newOp == 'MODE') {
      this.outputConnection.setCheck('Array');
    } else {
      this.outputConnection.setCheck('Number');
    }
  },
  /**
   * Create XML to represent the output type.
   * @return {Element} XML storage element.
   * @this Blockly.Block
   */
  mutationToDom: function() {
    var container = document.createElement('mutation');
    container.setAttribute('op', this.getFieldValue('OP'));
    return container;
  },
  /**
   * Parse XML to digitore the output type.
   * @param {!Element} xmlElement XML storage element.
   * @this Blockly.Block
   */
  domToMutation: function(xmlElement) {
    this.updateType_(xmlElement.getAttribute('op'));
  }
};

Blockly.Blocks['math_modulo'] = {
  /**
   * Block for remainder of a division.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.MATH_MODULO_TITLE,
      "args0": [
        {
          "type": "input_value",
          "name": "DIVIDEND",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "DIVISOR",
          "check": "Number"
        }
      ],
      "inputsInline": true,
      "output": "Number",
      "colour": Blockly.CAT_MATH_RGB,
      "tooltip": Blockly.Msg.MATH_MODULO_TOOLTIP,
      "helpUrl": Blockly.Msg.MATH_MODULO_HELPURL
    });
  }
};

Blockly.Blocks['math_constrain'] = {
  /**
   * Block for constraining a number between two limits.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.MATH_CONSTRAIN_TITLE,
      "args0": [
        {
          "type": "input_value",
          "name": "VALUE",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "LOW",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "HIGH",
          "check": "Number"
        }
      ],
      "inputsInline": true,
      "output": "Number",
      "colour": Blockly.CAT_MATH_RGB,
      "tooltip": Blockly.Msg.MATH_CONSTRAIN_TOOLTIP,
      "helpUrl": Blockly.Msg.MATH_CONSTRAIN_HELPURL
    });
  }
};

Blockly.Blocks['math_random_int'] = {
  /**
   * Block for random integer between [X] and [Y].
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.MATH_RANDOM_INT_TITLE,
      "args0": [
        {
          "type": "input_value",
          "name": "FROM",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "TO",
          "check": "Number"
        }
      ],
      "inputsInline": true,
      "output": "Number",
      "colour": Blockly.CAT_MATH_RGB,
      "tooltip": Blockly.Msg.MATH_RANDOM_INT_TOOLTIP,
      "helpUrl": Blockly.Msg.MATH_RANDOM_INT_HELPURL
    });
  }
};

Blockly.Blocks['math_random_float'] = {
  /**
   * Block for random fraction between 0 and 1.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.MATH_RANDOM_FLOAT_TITLE_RANDOM,
      "output": "Number",
      "colour": Blockly.CAT_MATH_RGB,
      "tooltip": Blockly.Msg.MATH_RANDOM_FLOAT_TOOLTIP,
      "helpUrl": Blockly.Msg.MATH_RANDOM_FLOAT_HELPURL
    });
  }
};

Blockly.Blocks['robMath_change'] = {
  /**
   * Block for adding to a variable in place.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.MATH_CHANGE_TITLE,
      "args0": [
        {
          "type": "input_value",
          "name": "VAR",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "DELTA",
          "check": "Number"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": Blockly.CAT_MATH_RGB,
      "helpUrl": Blockly.Msg.MATH_CHANGE_HELPURL
    });
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    this.setTooltip(function() {
      return Blockly.Msg.MATH_CHANGE_TOOLTIP.replace('%1',
          thisBlock.getFieldValue('VAR'));
    });
  },
  onchange : function() {
    if (!this.workspace || Blockly.Block.dragMode_ == 2) {
      // Block has been deleted or is in move
      return;
    }
    var blockVar = this.getInputTargetBlock('VAR');
    if (blockVar && blockVar.type !== 'variables_get') {
      blockVar.unplug();
      blockVar.bumpNeighbours_();
    }
  }
};

Blockly.Blocks['math_cast_toString'] = {
    init : function() {
        this.jsonInit({
           "message0" : Blockly.Msg.MATH_CAST_TOSTRING,
            "args0" : [ {
                "type" : "input_value",
                "name" : "VALUE",
                "check" : "Number"
            }],
            "output" : "String",
            "colour" : Blockly.CAT_MATH_RGB,
            "tooltip" : Blockly.Msg.MATH_CAST_TOSTRING_TOOLTIP
        });
    }
};

Blockly.Blocks['math_cast_toChar'] = {
    init : function() {
        this.jsonInit({
           "message0" : Blockly.Msg.MATH_CAST_TOCHAR,
            "args0" : [ {
                "type" : "input_value",
                "name" : "VALUE",
                "check" : "Number"
            }],
            "output" : "String",
            "colour" : Blockly.CAT_MATH_RGB,
            "tooltip" : Blockly.Msg.MATH_CAST_TOCHAR_TOOLTIP
        });
    }
};


