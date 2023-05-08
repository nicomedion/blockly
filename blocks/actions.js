'use strict';

goog.provide('Blockly.Blocks.actions');

goog.require('Blockly.Blocks');

Blockly.Blocks['actions_motor_on'] = {
    /**
     * Turn motor on with specific power.
     *
     * @constructs actions_motor_on
     * @this.Blockly.Block
     * @param {String|Dropdown}
     *            ACTORPORT     Dropdown computed from the robot's 'encoder' configuration
     * @param {Number}
     *            POWER         Speed (in %) to switch motor on with
     * @returns immediately
     * @memberof Block
     */
    init: function() {
        var ports = getConfigPorts('motor');
        this.jsonInit({
            message0: Blockly.Msg.ACTION_MOTOR + ' %1 ' + Blockly.Msg.ON + ' ' + Blockly.Msg.MOTOR_SPEED + ' %2',
            message1: Blockly.Msg.MOTOR_REGULATION + ' %1',
            lastDummyAlign1: 'RIGHT',
            args0: [{
                type: 'field_dropdown', name: 'ACTORPORT', options: ports.menuGenerator_
            }, {
                type: 'input_value', name: 'POWER', check: 'Number'
            }],
            args1: [{
                type: 'field_checkbox', checked: 'TRUE', name: 'REGULATION'
            }],
            inputsInline: false,
            colour: Blockly.CAT_ACTION_RGB,
            previousStatement: true,
            nextStatement: true,
            tooltip: Blockly.Msg.MOTOR_ON_TOOLTIP
        });
        this.dependConfig = {
            type: 'motor', dropDown: this.getField('ACTORPORT')
        };

    }
};

Blockly.Blocks['actions_motor_on_for'] = {
    /**
     * Turn motor on with specific power and unit.
     *
     * @constructs actions_motor_on_for
     * @this.Blockly.Block
     * @param {String|Dropdown}
     *            ACTORPORT     Dropdown computed from the robot's 'encoder' configuration
     * @param {Number}
     *            POWER         Speed (in %) to switch motor on with
     * @param {String|Dropdown}
     *            UNIT          Dropdown with either ROTATIONS or DEGREES
     * @param {Number}
     *            VALUE         Value of UNIT to be used
     * @returns after execution of the block
     * @memberof Block
     */
    init: function() {
        var ports = getConfigPorts('motor');
        this.setBlocking(true);
        this.jsonInit({
            message0: Blockly.Msg.ACTION_MOTOR + ' %1 ' + Blockly.Msg.ON + ' ' + Blockly.Msg.MOTOR_SPEED + ' %2',
            message1: Blockly.Msg.FOR + ' %1 %2',
            args0: [{
                type: 'field_dropdown', name: 'ACTORPORT', options: ports.menuGenerator_
            }, {
                type: 'input_value', name: 'POWER', check: 'Number'
            }],
            args1: [{
                type: 'field_dropdown',
                name: 'UNIT',
                options: [[Blockly.Msg.MOTOR_ROTATION, 'ROTATIONS'], [Blockly.Msg.MOTOR_DEGREE, 'DEGREES']]
            }, {
                type: 'input_value', name: 'VALUE', check: 'Number', align: 'RIGHT'
            }],
            colour: Blockly.CAT_ACTION_RGB,
            previousStatement: true,
            nextStatement: true,
            inputsInline: false,
            tooltip: Blockly.Msg.MOTOR_ON_FOR_TOOLTIP
        });
        this.dependConfig = {
            type: 'motor', dropDown: this.getField('ACTORPORT')
        };

    }
};

Blockly.Blocks['actions_motor_getPower'] = {
    /**
     * Get current power of selected motor.
     *
     * @constructs actions_motor_getPower
     * @this.Blockly.Block
     * @param {String|Dropdown}
     *            ACTORPORT     Dropdown computed from the robot's 'encoder' configuration
     * @returns immediately
     * @returns {Number} current power (in %) of selected motor
     * @memberof Block
     */
    init: function() {
        var ports = getConfigPorts('motor');
        this.jsonInit({
            message0: Blockly.Msg.GET + ' ' + Blockly.Msg.MOTOR_SPEED + ' %1', args0: [{
                type: 'field_dropdown', name: 'ACTORPORT', options: ports.menuGenerator_
            }], colour: Blockly.CAT_ACTION_RGB, output: 'Number', tooltip: Blockly.Msg.MOTOR_GETPOWER_TOOLTIP
        });
        this.dependConfig = {
            type: 'motor', dropDown: this.getField('ACTORPORT')
        };

    }
};

Blockly.Blocks['actions_motor_setPower'] = {
    init: function() {
        var ports = getConfigPorts('motor');
        this.jsonInit({
            message0: Blockly.Msg.SET + ' %1 ' + Blockly.Msg.MOTOR_SPEED + ' %2',
            args0: [{
                type: 'field_dropdown', name: 'ACTORPORT', options: ports.menuGenerator_
            }, {
                type: 'input_value', name: 'POWER', check: 'Number'
            }],
            colour: Blockly.CAT_ACTION_RGB,
            previousStatement: true,
            nextStatement: true,
            tooltip: Blockly.Msg.MOTOR_SETPOWER_TOOLTIP
        });
        this.dependConfig = {
            type: 'motor', dropDown: this.getField('ACTORPORT')
        };

    }
};

Blockly.Blocks['actions_motor_stop'] = {
    init: function() {
        var ports = getConfigPorts('motor');
        this.jsonInit({
            message0: Blockly.Msg.MOTOR_STOP + ' ' + Blockly.Msg.ACTION_MOTOR + ' %1 %2',
            args0: [{
                type: 'field_dropdown', name: 'ACTORPORT', options: ports.menuGenerator_
            }, {
                type: 'field_dropdown',
                name: 'CONTROL',
                options: [[Blockly.Msg.MOTOR_FLOAT, 'COAST'], [Blockly.Msg.MOTOR_BRAKE, 'BRAKE']]
            }],
            colour: Blockly.CAT_ACTION_RGB,
            previousStatement: true,
            nextStatement: true,
            tooltip: Blockly.Msg.MOTOR_STOP_TOOLTIP
        });
        this.dependConfig = {
            type: 'motor', dropDown: this.getField('ACTORPORT')
        };

    }
};

Blockly.Blocks['actions_motorDiff_on'] = {
    init: function() {
        var ports = getConfigPorts('differentialdrive');
        this.hide = {};
        this.hide.name = 'ACTORPORT';
        this.hide.port = true;
        this.hide.value = ports.getValue();
        this.jsonInit({
            message0: Blockly.Msg.MOTOR_DRIVE + ' %1 ' + ' ' + Blockly.Msg.MOTOR_SPEED + ' %2',
            message1: Blockly.Msg.MOTOR_REGULATION + ' %1',
            lastDummyAlign1: 'RIGHT',
            args0: [{
                type: 'field_dropdown',
                name: 'DIRECTION',
                options: [[Blockly.Msg.MOTOR_FOREWARD, 'FORWARD'], [Blockly.Msg.MOTOR_BACKWARD, 'BACKWARD']]
            }, {
                type: 'input_value', name: 'POWER', check: 'Number'
            }],
            args1: [{
                type: 'field_checkbox', checked: 'TRUE', name: 'REGULATION'
            }],
            colour: Blockly.CAT_ACTION_RGB,
            previousStatement: true,
            nextStatement: true,
            inputsInline: false,
            tooltip: Blockly.Msg.MOTORDIFF_ON_TOOLTIP
        });
        this.dependConfig = {
            'type': 'differentialdrive',
            'dropDown': 'hide'
        };
    }
};

Blockly.Blocks['actions_motorDiff_on_for'] = {
    init: function() {
        var ports = getConfigPorts('differentialdrive');
        this.hide = {};
        this.hide.name = 'ACTORPORT';
        this.hide.port = true;
        this.hide.value = ports.getValue();
        this.setBlocking(true);
        this.jsonInit({
            message0: Blockly.Msg.MOTOR_DRIVE + ' %1 ' + ' ' + Blockly.Msg.MOTOR_SPEED + ' %2',
            message1: Blockly.Msg.MOTOR_DISTANCE + ' %1',
            args0: [{
                type: 'field_dropdown',
                name: 'DIRECTION',
                options: [[Blockly.Msg.MOTOR_FOREWARD, 'FORWARD'], [Blockly.Msg.MOTOR_BACKWARD, 'BACKWARD']]
            }, {
                type: 'input_value', name: 'POWER', check: 'Number'
            }],
            args1: [{
                type: 'input_value', name: 'DISTANCE', check: 'Number', align: 'RIGHT'
            }],
            colour: Blockly.CAT_ACTION_RGB,
            previousStatement: true,
            nextStatement: true,
            tooltip: Blockly.Msg.MOTORDIFF_ON_FOR_TOOLTIP
        });
        this.dependConfig = {
            'type': 'differentialdrive',
            'dropDown': 'hide'
        };
    }
};

Blockly.Blocks['actions_motorDiff_stop'] = {
    init: function() {
        var ports = getConfigPorts('differentialdrive');
        this.hide = {};
        this.hide.name = 'ACTORPORT';
        this.hide.port = true;
        this.hide.value = ports.getValue();
        this.jsonInit({
            message0: Blockly.Msg.MOTOR_STOP + ' %1',
            args0: [{
                type: 'field_dropdown',
                name: 'CONTROL',
                options: [[Blockly.Msg.MOTOR_FLOAT, 'COAST'], [Blockly.Msg.MOTOR_BRAKE, 'BRAKE']]
            }],
            colour: Blockly.CAT_ACTION_RGB,
            previousStatement: true,
            nextStatement: true,
            inputsInline: true,
            tooltip: Blockly.Msg.MOTORDIFF_STOP_TOOLTIP
        });
        this.dependConfig = {
            'type': 'differentialdrive',
            'dropDown': 'hide'
        };
    }
};

Blockly.Blocks['actions_motorDiff_turn'] = {
    init: function() {
        var ports = getConfigPorts('differentialdrive');
        this.hide = {};
        this.hide.name = 'ACTORPORT';
        this.hide.port = true;
        this.hide.value = ports.getValue();
        this.jsonInit({
            message0: Blockly.Msg.MOTOR_TURN + ' %1 ' + ' ' + Blockly.Msg.MOTOR_SPEED + ' %2',
            message1: Blockly.Msg.MOTOR_REGULATION + ' %1',
            lastDummyAlign1: 'RIGHT',
            args0: [{
                type: 'field_dropdown',
                name: 'DIRECTION',
                options: [[Blockly.Msg.MOTOR_RIGHT, 'RIGHT'], [Blockly.Msg.MOTOR_LEFT, 'LEFT']]
            }, {
                type: 'input_value', name: 'POWER', check: 'Number'
            }],
            args1: [{
                type: 'field_checkbox', checked: 'true', name: 'REGULATION'
            }],
            colour: Blockly.CAT_ACTION_RGB,
            previousStatement: true,
            nextStatement: true,
            inputsInline: false,
            tooltip: Blockly.Msg.MOTORDIFF_TURN_TOOLTIP
        });
        this.dependConfig = {
            'type': 'differentialdrive',
            'dropDown': 'hide'
        };
    }
};

Blockly.Blocks['actions_motorDiff_turn_for'] = {
    /**
     * Turn the robot (in differential drive mode) in defined DIRECTION for defined DEGREES.
     *
     * @constructs actions_motorDiff_turn_for
     * @this.Blockly.Block
     * @param {String|Dropdown}
     *            DIRECTION     Either LEFT or RIGHT
     * @param {Number}
     *            POWER         Speed (in %) to turn in DIRECTION mentioned
     * @param {Number}
     *            DEGREES       Value (in °) to turn in DIRECTION mentioned
     * @returns after execution of the block (turning DEGREES °)
     * @memberof Block
     */
    init: function() {
        var ports = getConfigPorts('differentialdrive');
        this.hide = {};
        this.hide.name = 'ACTORPORT';
        this.hide.port = true;
        this.hide.value = ports.getValue();
        this.setBlocking(true);
        this.jsonInit({
            message0: Blockly.Msg.MOTOR_TURN + ' %1 ' + ' ' + Blockly.Msg.MOTOR_SPEED + ' %2',
            message1: Blockly.Msg.MOTOR_DEGREE + ' %1',
            args0: [{
                type: 'field_dropdown',
                name: 'DIRECTION',
                options: [[Blockly.Msg.MOTOR_RIGHT, 'RIGHT'], [Blockly.Msg.MOTOR_LEFT, 'LEFT']]
            }, {
                type: 'input_value', name: 'POWER', check: 'Number'
            }],
            args1: [{
                type: 'input_value', name: 'DEGREES', check: 'Number', align: 'RIGHT'
            }],
            colour: Blockly.CAT_ACTION_RGB,
            previousStatement: true,
            nextStatement: true,
            tooltip: Blockly.Msg.MOTORDIFF_TURN_FOR_TOOLTIP
        });
        this.dependConfig = {
            'type': 'differentialdrive',
            'dropDown': 'hide'
        };
    }
};

Blockly.Blocks['actions_motorDiff_curve'] = {
    /**
     * Steer the robot (in differential drive mode) in defined DIRECTION.
     *
     * @constructs actions_motorDiff_curve
     * @this.Blockly.Block
     * @param {String|Dropdown}
     *            DIRECTION     Either FORWARD or BACKWARD
     * @param {Number}
     *            POWER_LEFT    Speed (in %) to supply LEFT wheel to steer in DIRECTION mentioned
     * @param {Number}
     *            POWER_RIGHT   Speed (in %) to supply RIGHT wheel to steer in DIRECTION mentioned
     * @returns immediately
     * @memberof Block
     */
    init: function() {
        var ports = getConfigPorts('differentialdrive');
        this.hide = {};
        this.hide.name = 'ACTORPORT';
        this.hide.port = true;
        this.hide.value = ports.getValue();
        this.jsonInit({
            message0: Blockly.Msg.MOTOR_STEER + ' %1 ' + Blockly.Msg.MOTOR_LEFT + ' ' + Blockly.Msg.MOTOR_SPEED + ' %2',
            message1: Blockly.Msg.MOTOR_RIGHT + ' ' + Blockly.Msg.MOTOR_SPEED + ' %1',
            message2: Blockly.Msg.MOTOR_REGULATION + ' %1',
            lastDummyAlign2: 'RIGHT',
            args0: [{
                type: 'field_dropdown',
                name: 'DIRECTION',
                options: [[Blockly.Msg.MOTOR_FOREWARD, 'FORWARD'], [Blockly.Msg.MOTOR_BACKWARD, 'BACKWARD']]
            }, {
                type: 'input_value', name: 'POWER_LEFT', check: 'Number'
            }],
            args1: [{
                type: 'input_value', name: 'POWER_RIGHT', check: 'Number', align: 'RIGHT'
            }],
            args2: [{
                type: 'field_checkbox', checked: 'TRUE', name: 'REGULATION'
            }],
            inputsInline: false,
            colour: Blockly.CAT_ACTION_RGB,
            previousStatement: true,
            nextStatement: true,
            tooltip: Blockly.Msg.MOTORDIFF_ON_TOOLTIP
        });
        this.dependConfig = {
            'type': 'differentialdrive',
            'dropDown': 'hide'
        };
    }
};

Blockly.Blocks['actions_motorDiff_curve_for'] = {
    /**
     * Steer the robot (in differential drive mode) in defined DIRECTION for defined DISTANCE.
     *
     * @constructs actions_motorDiff_curve
     * @this.Blockly.Block
     * @param {String|Dropdown}
     *            DIRECTION     Either FORWARD or BACKWARD
     * @param {Number}
     *            POWER_LEFT    Speed (in %) to supply LEFT wheel to steer in DIRECTION mentioned
     * @param {Number}
     *            POWER_RIGHT   Speed (in %) to supply RIGHT wheel to steer in DIRECTION mentioned
     * @param {Number}
     *           DISTANCE       Value (in cm) to steer in DIRECTION mentioned
     * @returns after execution of the block (steering DISTANCE cm)
     * @memberof Block
     */
    init: function() {
        var ports = getConfigPorts('differentialdrive');
        this.hide = {};
        this.hide.name = 'ACTORPORT';
        this.hide.port = true;
        this.hide.value = ports.getValue();
        this.setBlocking(true);
        this.jsonInit({
            message0: Blockly.Msg.MOTOR_STEER + ' %1 ' + Blockly.Msg.MOTOR_LEFT + ' ' + Blockly.Msg.MOTOR_SPEED + ' %2',
            message1: Blockly.Msg.MOTOR_RIGHT + ' ' + Blockly.Msg.MOTOR_SPEED + ' %1',
            message2: Blockly.Msg.MOTOR_DISTANCE + ' %1',
            args0: [{
                type: 'field_dropdown',
                name: 'DIRECTION',
                options: [[Blockly.Msg.MOTOR_FOREWARD, 'FORWARD'], [Blockly.Msg.MOTOR_BACKWARD, 'BACKWARD']]
            }, {
                type: 'input_value', name: 'POWER_LEFT', check: 'Number'
            }],
            args1: [{
                type: 'input_value', name: 'POWER_RIGHT', check: 'Number', align: 'RIGHT'
            }],
            args2: [{
                type: 'input_value', name: 'DISTANCE', check: 'Number', align: 'RIGHT'
            }],
            colour: Blockly.CAT_ACTION_RGB,
            previousStatement: true,
            nextStatement: true,
            tooltip: Blockly.Msg.MOTORDIFF_ON_FOR_TOOLTIP
        });
        this.dependConfig = {
            'type': 'differentialdrive',
            'dropDown': 'hide'
        };
    }
};

Blockly.Blocks['actions_play_tone'] = {
    /**
     * Play a tone.
     *
     * @constructs actions_play_tone
     * @this.Blockly.Block
     * @param {Number}
     *            FREQUENCY     Frequency to be played (in Hz)
     * @param {Number}
     *            DURATION      Time (in ms)
     * @returns after execution of the block (playing DURATION ms)
     * @memberof Block
     */
    init: function() {
        this.setBlocking(true);
        var ports = getConfigPorts('buzzer');
        this.hide = {};
        this.hide.name = 'ACTORPORT';
        this.hide.port = true;
        this.hide.value = ports.getValue();
        this.jsonInit({
            message0: Blockly.Msg.PLAY + '  ' + Blockly.Msg.PLAY_FREQUENZ + ' %1',
            message1: Blockly.Msg.PLAY_DURATION + ' %1',
            args0: [{
                type: 'input_value', name: 'FREQUENCY', check: 'Number'
            }],
            args1: [{
                type: 'input_value', name: 'DURATION', check: 'Number', align: 'RIGHT'
            }],
            colour: Blockly.CAT_ACTION_RGB,
            previousStatement: true,
            nextStatement: true,
            tooltip: Blockly.Msg.PLAY_TONE_TOOLTIP
        });
        this.dependConfig = {
            'type': 'buzzer',
            'dropDown': 'hide'
        };
    }
};

Blockly.Blocks['actions_play_note'] = {
    /**
     * Play a note.
     *
     * @constructs actions_play_note
     * @this.Blockly.Block
     * @param {Number}
     *            DURATION      Time (in ms)
     * @param {Number}
     *            FREQUENCY     Frequency to be played (in Hz)
     * @returns after execution of the block (playing DURATION ms)
     * @memberof Block
     */
    init: function() {
        this.setBlocking(true);
        var ports = getConfigPorts('buzzer');
        this.hide = {};
        this.hide.name = 'ACTORPORT';
        this.hide.port = true;
        this.hide.value = ports.getValue();
        this.jsonInit({
            message0: Blockly.Msg.PLAY + ' %1 %2',
            args0: [{
                type: 'field_dropdown',
                name: 'DURATION',
                options: [[Blockly.Msg.PLAY_WHOLE, '2000'], [Blockly.Msg.PLAY_HALF, '1000'], [Blockly.Msg.PLAY_QUARTER, '500'], [Blockly.Msg.PLAY_EIGHTH, '250'], [Blockly.Msg.PLAY_SIXTEENTH, '125']]
            }, {
                type: 'field_note', name: 'FREQUENCY', note: '261.626'
            }],
            colour: Blockly.CAT_ACTION_RGB,
            previousStatement: true,
            nextStatement: true,
            tooltip: Blockly.Msg.PLAY_NOTE_TOOLTIP
        });
        this.dependConfig = {
            'type': 'buzzer',
            'dropDown': 'hide'
        };
    }
};

Blockly.Blocks['actions_play_setVolume'] = {
    /**
     * Set volume.
     *
     * @constructs actions_play_setVolume
     * @this.Blockly.Block
     * @param {Number}
     *            VOLUME        Value (in %)
     * @returns immediately
     * @memberof Block
     */
    init: function() {
        this.jsonInit({
            message0: Blockly.Msg.SET + ' ' + Blockly.Msg.PLAY_VOLUME + ' ' + Blockly.Msg.SENSOR_UNIT_PERCENT + ' %1',
            args0: [{
                type: 'input_value', name: 'VOLUME', check: 'Number'
            }],
            colour: Blockly.CAT_ACTION_RGB,
            previousStatement: true,
            nextStatement: true,
            tooltip: Blockly.Msg.PLAY_SETVOLUME_TOOLTIP
        });
    }
};

Blockly.Blocks['actions_play_getVolume'] = {
    /**
     * Get volume
     *
     * @constructs actions_play_getVolume
     * @this.Blockly.Block
     * @returns immediately
     * @returns {Number} Current volume (in %)
     * @memberof Block
     */
    init: function() {
        this.jsonInit({
            message0: Blockly.Msg.GET + ' ' + Blockly.Msg.PLAY_VOLUME,
            colour: Blockly.CAT_ACTION_RGB,
            output: 'Number',
            tooltip: Blockly.Msg.PLAY_GETVOLUME_TOOLTIP
        });
    }
};

Blockly.Blocks['colour_picker_spike'] = {
    init: function() {
        this.jsonInit({
            message0: '%1', args0: [{
                type: 'field_colour', name: 'COLOUR', 'colour': '#E701A7'
            }], output: 'Colour', colour: Blockly.CAT_COLOUR_RGB
        });

        // Colour block is trivial.  Use tooltip of parent block if it exists.
        this.setTooltip(function() {
            var parent = thisBlock.getParent();
            return (parent && parent.getInputsInline() && parent.tooltip) || Blockly.Msg.COLOUR_PICKER_TOOLTIP;
        });
        this.getField('COLOUR').setColours(['#E701A7', '#571CC1', '#3590F5', '#77E7FF', '#0FCB54', '#0BA845', '#F7F700', '#FAAC01', '#FA010C', '#000000', '#FFFFFF', Blockly.CAT_COLOUR_RGB]).setColumns(1);
        var thisBlock = this;
        var validator = function(newValue) {
            switch (newValue.toUpperCase()) {
                case '#E701A7':
                case '#3590F5':
                case '#77E7FF':
                case '#0FCB54':
                case '#F7F700':
                case '#FA010C':
                case '#FFFFFF':
                case '#000000':
                case Blockly.CAT_COLOUR_RGB: {
                    thisBlock.setOutput(true, ['Colour']);
                    break;
                }
                default: {
                    thisBlock.setOutput(true, ['ColourLed']);
                }
            }
            return newValue;
        };
        this.getField('COLOUR').setValidator(validator);
    }
};

Blockly.Blocks['actions_brickLed_on'] = {
    init: function() {
        var ports = getConfigPorts('rgbled');
        this.hide = {};
        this.hide.name = 'ACTORPORT';
        this.hide.port = true;
        this.hide.value = ports.getValue();
        this.jsonInit({
            message0: Blockly.Msg.RGBLED_ON + ' ' + Blockly.Msg.BRICKLIGHT_COLOR + '%1',
            args0: [{
                type: 'input_value', name: 'COLOUR', check: ['Colour', 'ColourLed']
            }],
            colour: Blockly.CAT_ACTION_RGB,
            previousStatement: true,
            nextStatement: true,
            tooltip: Blockly.Msg.LED_ON_TOOLTIP
        });
        this.dependConfig = {
            'type': 'rgbled',
            'dropDown': 'hide'
        };
    }
};

Blockly.Blocks['actions_brickLed_off'] = {
    init: function() {
        var ports = getConfigPorts('rgbled');
        this.hide = {};
        this.hide.name = 'ACTORPORT';
        this.hide.port = true;
        this.hide.value = ports.getValue();
        this.jsonInit({
            message0: Blockly.Msg.RGBLED_OFF,
            colour: Blockly.CAT_ACTION_RGB,
            previousStatement: true,
            nextStatement: true,
            tooltip: Blockly.Msg.LED_OFF_TOOLTIP
        });
        this.dependConfig = {
            'type': 'rgbled',
            'dropDown': 'hide'
        };
    }
};

Blockly.Blocks['actions_display_image'] = {
    init: function() {
        var types = [[Blockly.Msg.DISPLAY_IMAGE, 'IMAGE'], [Blockly.Msg.DISPLAY_ANIMATION, 'ANIMATION']];
        var ports = getConfigPorts('display');
        this.hide = {};
        this.hide.name = 'ACTORPORT';
        this.hide.port = true;
        this.hide.value = ports.getValue();
        this.jsonInit({
            message0: Blockly.Msg.DISPLAY_SHOW + '%1' + Blockly.Msg.LED_MATRIX + '%2',
            args0: [{
                type: 'field_dropdown',
                name: 'TYPE',
                options: types
            }, {
                type: 'input_value',
                name: 'VALUE',
                check: 'Image'
            }],
            colour: Blockly.CAT_ACTION_RGB,
            previousStatement: true,
            nextStatement: true,
            tooltip: Blockly.Msg.DISPLAY_PICTURE_TOOLTIP
        });
        this.getField('TYPE').setValidator(this.validateType);
        this.dependConfig = {
            'type': 'display',
            'dropDown': 'hide'
        };
    },
    mutationToDom: function() {
        var container = document.createElement('mutation');
        container.setAttribute('type', this.getFieldValue('TYPE'));
        return container;
    },
    domToMutation: function(xmlElement) {
        this.validateType(xmlElement.getAttribute('type'));
    },
    validateType: function(type) {
        if (type) {
            if ((this.sourceBlock_ && !this.sourceBlock_.workspace) || Blockly.Block.dragMode_ == 2) {
                return;
            }
            if (type === 'IMAGE') {
                this.sourceBlock_ && this.sourceBlock_.getInput('VALUE').setCheck('Image');
                this.sourceBlock_ && this.sourceBlock_.blocking && this.sourceBlock_.blocking && this.sourceBlock_.setBlocking(false);
            } else {
                this.sourceBlock_ && this.sourceBlock_.getInput('VALUE').setCheck('Array_Image');
                this.sourceBlock_ && this.sourceBlock_.setBlocking(true);
            }
        }
    }
};

Blockly.Blocks['actions_display_text'] = {
    init: function() {
        var types = [[Blockly.Msg.DISPLAY_TEXT, 'TEXT'], [Blockly.Msg.DISPLAY_CHARACTER, 'CHARACTER']];
        var ports = getConfigPorts('display');
        this.hide = {};
        this.hide.name = 'ACTORPORT';
        this.hide.port = true;
        this.hide.value = ports.getValue();
        this.jsonInit({
            message0: Blockly.Msg.DISPLAY_SHOW + '%1' + Blockly.Msg.LED_MATRIX + '%2',
            args0: [{
                type: 'field_dropdown',
                name: 'TYPE',
                options: types
            }, {
                type: 'input_value',
                name: 'TEXT',
                check: ['Number', 'Boolean', 'String']
            }],
            colour: Blockly.CAT_ACTION_RGB,
            previousStatement: true,
            nextStatement: true,
            tooltip: Blockly.Msg.DISPLAY_TEXT_TOOLTIP
        });
        this.setBlocking(true);
        this.dependConfig = {
            'type': 'display',
            'dropDown': 'hide'
        };
    }
};

Blockly.Blocks['actions_display_clear'] = {
    init: function() {
        this.setColour(Blockly.CAT_ACTION_RGB);
        var ports = getConfigPorts('display');
        this.hide = {};
        this.hide.name = 'ACTORPORT';
        this.hide.port = true;
        this.hide.value = ports.getValue();
        this.jsonInit({
            message0: Blockly.Msg.CLEAR + ' ' + Blockly.Msg.LED_MATRIX,
            colour: Blockly.CAT_ACTION_RGB,
            previousStatement: true,
            nextStatement: true,
            tooltip: Blockly.Msg.DISPLAY_CLEAR_TOOLTIP
        });
        this.dependConfig = {
            'type': 'display',
            'dropDown': 'hide'
        };
    }
};

Blockly.Blocks['actions_play_expression'] = {
    init: function() {
        var ports = getConfigPorts('buzzer');
        this.hide = {};
        this.hide.name = 'ACTORPORT';
        this.hide.port = true;
        this.hide.value = ports.getValue();
        this.jsonInit({
            message0: Blockly.Msg.ACTION_PLAY + ' ' + Blockly.Msg.PLAY_SOUND + ' %1',
            args0: [
                {
                    type: 'field_dropdown',
                    name: 'FILE',
                    options: [
                        [Blockly.Msg.SOUND_GIGGLE, 'GIGGLE'],
                        [Blockly.Msg.SOUND_HAPPY, 'HAPPY'],
                        [Blockly.Msg.SOUND_HELLO, 'HELLO'],
                        [Blockly.Msg.SOUND_MYSTERIOUS, 'MYSTERIOUS'],
                        [Blockly.Msg.SOUND_SAD, 'SAD'],
                        [Blockly.Msg.SOUND_SLIDE, 'SLIDE'],
                        [Blockly.Msg.SOUND_SOARING, 'SOARING'],
                        [Blockly.Msg.SOUND_SPRING, 'SPRING'],
                        [Blockly.Msg.SOUND_TWINKLE, 'TWINKLE'],
                        [Blockly.Msg.SOUND_YAWN, 'YAWN']
                    ]
                }],
            colour: Blockly.CAT_ACTION_RGB,
            previousStatement: true,
            nextStatement: true,
            tooltip: Blockly.Msg.PLAY_EXPRESSION_TOOLTIP
        });
        this.dependConfig = {
            'type': 'buzzer',
            'dropDown': 'hide'
        };
    }
};

Blockly.Blocks['actions_play_file_port'] = {
    init: function() {
        this.setColour(Blockly.CAT_ACTION_RGB);
        this.setBlocking(true);
        var ports = getConfigPorts('buzzer');
        this.jsonInit({
            message0: Blockly.Msg.ACTION_PLAY + ' %1 ' + Blockly.Msg.PLAY_FILE + ' %2',
            args0: [
                {
                    type: 'field_dropdown', name: 'ACTORPORT', options: ports.menuGenerator_
                },
                {
                    type: 'field_dropdown',
                    name: 'FILE',
                    options: [
                        [Blockly.Msg.SOUND_DADADADUM, 'DADADADUM'],
                        [Blockly.Msg.SOUND_ENTERTAINER, 'ENTERTAINER'],
                        [Blockly.Msg.SOUND_PRELUDE, 'PRELUDE'],
                        [Blockly.Msg.SOUND_ODE, 'ODE'],
                        [Blockly.Msg.SOUND_NYAN, 'NYAN'],
                        [Blockly.Msg.SOUND_RINGTONE, 'RINGTONE'],
                        [Blockly.Msg.SOUND_FUNK, 'FUNK'],
                        [Blockly.Msg.SOUND_BLUES, 'BLUES'],
                        [Blockly.Msg.SOUND_BIRTHDAY, 'BIRTHDAY'],
                        [Blockly.Msg.SOUND_WEDDING, 'WEDDING'],
                        [Blockly.Msg.SOUND_FUNERAL, 'FUNERAL'],
                        [Blockly.Msg.SOUND_PUNCHLINE, 'PUNCHLINE'],
                        [Blockly.Msg.SOUND_PYTHON, 'PYTHON'],
                        [Blockly.Msg.SOUND_BADDY, 'BADDY'],
                        [Blockly.Msg.SOUND_CHASE, 'CHASE'],
                        [Blockly.Msg.SOUND_BA_DING, 'BA_DING'],
                        [Blockly.Msg.SOUND_WAWAWAWAA, 'WAWAWAWAA'],
                        [Blockly.Msg.SOUND_JUMP_UP, 'JUMP_UP'],
                        [Blockly.Msg.SOUND_JUMP_DOWN, 'JUMP_DOWN'],
                        [Blockly.Msg.SOUND_POWER_UP, 'POWER_UP'],
                        [Blockly.Msg.SOUND_POWER_DOWN, 'POWER_DOWN']
                    ]
                }],
            colour: Blockly.CAT_ACTION_RGB,
            previousStatement: true,
            nextStatement: true,
            tooltip: Blockly.Msg.PLAY_FILE_TOOLTIP
        });
        this.dependConfig = {
            'type': 'buzzer',
            'dropDown': this.getField('ACTORPORT')
        };
    }
};


Blockly.Blocks['actions_play_file'] = {
    init: function() {
        this.setBlocking(true);
        var ports = getConfigPorts('buzzer');
        this.hide = {};
        this.hide.name = 'ACTORPORT';
        this.hide.port = true;
        this.hide.value = ports.getValue();
        this.jsonInit({
            message0: Blockly.Msg.ACTION_PLAY + ' ' + Blockly.Msg.PLAY_FILE + ' %1',
            args0: [
                {
                    type: 'field_dropdown',
                    name: 'FILE',
                    options: [
                        [Blockly.Msg.SOUND_DADADADUM, 'DADADADUM'],
                        [Blockly.Msg.SOUND_ENTERTAINER, 'ENTERTAINER'],
                        [Blockly.Msg.SOUND_PRELUDE, 'PRELUDE'],
                        [Blockly.Msg.SOUND_ODE, 'ODE'],
                        [Blockly.Msg.SOUND_NYAN, 'NYAN'],
                        [Blockly.Msg.SOUND_RINGTONE, 'RINGTONE'],
                        [Blockly.Msg.SOUND_FUNK, 'FUNK'],
                        [Blockly.Msg.SOUND_BLUES, 'BLUES'],
                        [Blockly.Msg.SOUND_BIRTHDAY, 'BIRTHDAY'],
                        [Blockly.Msg.SOUND_WEDDING, 'WEDDING'],
                        [Blockly.Msg.SOUND_FUNERAL, 'FUNERAL'],
                        [Blockly.Msg.SOUND_PUNCHLINE, 'PUNCHLINE'],
                        [Blockly.Msg.SOUND_PYTHON, 'PYTHON'],
                        [Blockly.Msg.SOUND_BADDY, 'BADDY'],
                        [Blockly.Msg.SOUND_CHASE, 'CHASE'],
                        [Blockly.Msg.SOUND_BA_DING, 'BA_DING'],
                        [Blockly.Msg.SOUND_WAWAWAWAA, 'WAWAWAWAA'],
                        [Blockly.Msg.SOUND_JUMP_UP, 'JUMP_UP'],
                        [Blockly.Msg.SOUND_JUMP_DOWN, 'JUMP_DOWN'],
                        [Blockly.Msg.SOUND_POWER_UP, 'POWER_UP'],
                        [Blockly.Msg.SOUND_POWER_DOWN, 'POWER_DOWN']
                    ]
                }],
            colour: Blockly.CAT_ACTION_RGB,
            previousStatement: true,
            nextStatement: true,
            tooltip: Blockly.Msg.PLAY_EXPRESSION_TOOLTIP
        });
        this.dependConfig = {
            'type': 'buzzer',
            'dropDown': 'hide'
        };
    }
};

Blockly.Blocks['actions_sound_toggle'] = {
    init: function() {
        var ports = getConfigPorts('buzzer');
        this.hide = {};
        this.hide.name = 'ACTORPORT';
        this.hide.port = true;
        this.hide.value = ports.getValue();
        this.jsonInit({
            message0: Blockly.Msg.SPEAKER + ' %1',
            args0: [
                {
                    type: 'field_dropdown',
                    name: 'MODE',
                    options: [
                        [Blockly.Msg.ON, 'ON'],
                        [Blockly.Msg.OFF, 'OFF']
                    ]
                }],
            colour: Blockly.CAT_ACTION_RGB,
            previousStatement: true,
            nextStatement: true,
            tooltip: Blockly.Msg.SOUND_TOGGLE_TOOLTIP
        });
        this.dependConfig = {
            'type': 'buzzer',
            'dropDown': 'hide'
        };
    }
};

Blockly.Blocks['actions_motor_stop_karl'] = {
    init: function() {
        var ports = getConfigPorts('motor');
        this.jsonInit({
            message0: Blockly.Msg.MOTOR_STOP + ' ' + Blockly.Msg.ACTION_MOTOR + ' %1 %2',
            args0: [{
                type: 'field_dropdown', name: 'ACTORPORT', options: ports.menuGenerator_
            }, {
                type: 'field_dropdown',
                name: 'CONTROL',
                options: [[Blockly.Msg.MOTOR_FLOAT, 'COAST'], [Blockly.Msg.MOTOR_BRAKE, 'BRAKE']]
            }],
            colour: Blockly.CAT_ACTION_RGB,
            previousStatement: true,
            nextStatement: true,
            tooltip: Blockly.Msg.MOTOR_STOP_TOOLTIP
        });
        this.dependConfig = {
            type: 'motor', dropDown: this.getField('ACTORPORT')
        };

    }
};
Blockly.Blocks['actions_eyeLed_on_karl'] = {
    init: function() {
        var ports = getConfigPorts('rgbled');
        this.hide = {};
        this.hide.name = 'ACTORPORT';
        this.hide.port = true;
        this.hide.value = ports.getValue();
        this.jsonInit({
            message0: Blockly.Msg.RGBLED_ON + ' ' + '%1' + Blockly.Msg.BRICKLIGHT_COLOR +'%2',
            //message1: 'Test' +  + '%1',
            args0: [{
                type: 'field_dropdown', name: 'ACTORPORT', options: ports.menuGenerator_
            }, {
                type: 'input_value', name: 'COLOUR', check: ['Colour', 'ColourLed']
            }],
            colour: Blockly.CAT_ACTION_RGB,
            previousStatement: true,
            nextStatement: true,
            tooltip: Blockly.Msg.LED_ON_TOOLTIP
        });
        this.dependConfig = {
            'type': 'rgbled',
            'dropDown': 'hide'
        };
    }
};
Blockly.Blocks['actions_eyeLed_intensity_karl'] = {
    init: function() {
        var ports = getConfigPorts('rgbled');
        this.hide = {};
        this.hide.name = 'ACTORPORT';
        this.hide.port = true;
        this.hide.value = ports.getValue();
        this.jsonInit({
            message0: 'RGB LED' + '%1' + Blockly.Msg.NAO_INTENSITY + '%2',
            //message1: 'Test' +  + '%1',
            args0: [{
                type: 'field_dropdown', name: 'ACTORPORT', options: ports.menuGenerator_
            },
            {
                type: 'input_value', name: 'INTENSITY', check: 'Number'
            }],
            colour: Blockly.CAT_ACTION_RGB,
            previousStatement: true,
            nextStatement: true,
            tooltip: Blockly.Msg.LED_ON_TOOLTIP
        });
        this.dependConfig = {
            'type': 'rgbled',
            'dropDown': 'hide'
        };
    }
};
Blockly.Blocks['actions_eyeLed_toggle_karl'] = {
    init: function() {
        var ports = getConfigPorts('rgbled');
        this.hide = {};
        this.hide.name = 'ACTORPORT';
        this.hide.port = true;
        this.hide.value = ports.getValue();
        this.jsonInit({
            message0: 'Toggle RGB LED' + '%1',
            //message1: 'Test' +  + '%1',
            args0: [{
                type: 'field_dropdown', name: 'ACTORPORT', options: ports.menuGenerator_
            },
            {
                type: 'input_value', name: 'INTENSITY', check: 'Number'
            }],
            colour: Blockly.CAT_ACTION_RGB,
            previousStatement: true,
            nextStatement: true,
            tooltip: Blockly.Msg.LED_ON_TOOLTIP
        });
        this.dependConfig = {
            'type': 'rgbled',
            'dropDown': 'hide'
        };
    }
};
Blockly.Blocks['actions_motor_on_karl'] = {
    /**
     * Turn motor on with specific power.
     *
     * @constructs actions_motor_on
     * @this.Blockly.Block
     * @param {String|Dropdown}
     *            ACTORPORT     Dropdown computed from the robot's 'encoder' configuration
     * @param {Number}
     *            POWER         Speed (in %) to switch motor on with
     * @returns immediately
     * @memberof Block
     */
    init: function() {
        var ports = getConfigPorts('motor');
        this.jsonInit({
            message0: Blockly.Msg.ACTION_MOTOR + ' %1 ' + Blockly.Msg.ON + ' ' + Blockly.Msg.TO + ' °' + ' %2',
            lastDummyAlign1: 'RIGHT',
            args0: [{
                type: 'field_dropdown', name: 'ACTORPORT', options: ports.menuGenerator_
            }, {
                type: 'input_value', name: 'POWER', check: 'Number'
            }],
            args1: [{
                type: 'field_checkbox', checked: 'TRUE', name: 'REGULATION'
            }],
            inputsInline: false,
            colour: Blockly.CAT_ACTION_RGB,
            previousStatement: true,
            nextStatement: true,
            tooltip: Blockly.Msg.MOTOR_ON_TOOLTIP
        });
        this.dependConfig = {
            type: 'motor', dropDown: this.getField('ACTORPORT')
        };

    }
};
Blockly.Blocks['actions_eyeLed_off_karl'] = {
    init: function() {
        var ports = getConfigPorts('rgbled');
        this.hide = {};
        this.hide.name = 'ACTORPORT';
        this.hide.port = true;
        this.hide.value = ports.getValue();
        this.jsonInit({
            message0: Blockly.Msg.RGBLED_OFF + '%1',
            args0: [{
                type: 'field_dropdown', name: 'ACTORPORT', options: ports.menuGenerator_
            }],
            colour: Blockly.CAT_ACTION_RGB,
            previousStatement: true,
            nextStatement: true,
            tooltip: Blockly.Msg.LED_OFF_TOOLTIP
        });
        this.dependConfig = {
            'type': 'rgbled',
            'dropDown': 'hide'
        };
    }
};