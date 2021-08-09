/**
 * @fileoverview Action blocks for Bob3.
 * @requires Blockly.Blocks
 * @author Evgeniya
 */

'use strict';

goog.provide('Blockly.Blocks.festobionicActions');

goog.require('Blockly.Blocks');

Blockly.Blocks['festobionicActions_stepmotor'] = {
    /**
     * Turn motor on and stop motor after execution of rotations/degrees.
     * 
     * @constructs robActions_motor_on_for
     * @this.Blockly.Block
     * @param {Number}
     *            VALUE Number of rotations/degrees
     * @returns after execution
     * @memberof Block
     */
    init: function () {
        var ports = getConfigPorts('stepmotor');
        this.dependConfig = {
            'type' : 'stepmotor',
            'dropDown' : ports
        };
        this.setColour(Blockly.CAT_ACTION_RGB);
        this.appendValueInput('VALUE').appendField(Blockly.Msg.STEP_MOTOR).appendField(ports).appendField(Blockly.Msg.POSITION+' 0-120').setCheck('Number');
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Msg.MOTOR_ON_FOR_TOOLTIP_SERVO);
    }
};