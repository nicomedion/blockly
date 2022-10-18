'use strict';

goog.provide('Blockly.Blocks.sensors');

goog.require('Blockly.Blocks');

Blockly.Blocks['sensors_encoder_reset'] = {
    /**
     * Reset the motor encoder.
     *
     * @constructs sensors_encoder_reset
     * @this.Blockly.Block
     * @param {String|Dropdown}
     *           MOTORPORT     Dropdown computed from the robot's 'encoder' configuration
     * @returns immediately
     * @memberof Block
     */
    init: function() {
        var ports = getConfigPorts('encoder');
        this.jsonInit({
            message0: Blockly.Msg.SENSOR_RESET + ' ' + Blockly.Msg.SENSOR_ENCODER + ' %1',
            args0: [
                {
                    type: 'field_dropdown',
                    name: 'MOTORPORT',
                    options: ports.menuGenerator_
                }
            ],
            colour: Blockly.CAT_SENSOR_RGB,
            previousStatement: true,
            nextStatement: true,
            tooltip: Blockly.Msg.ENCODER_RESET_TOOLTIP
        });
        this.dependConfig = {
            type: 'encoder',
            dropDown: this.getField('MOTORPORT')
        };
    }
};

Blockly.Blocks['sensors_gyro_reset'] = {
    /**
     * Reset the gyroscope.
     *
     * @constructs sensors_gyro_reset
     * @this.Blockly.Block
     * @param {String|Dropdown}
     *           AXIS       Dropdown to list the axes (X, Y, Z)
     * @returns immediately
     * @memberof Block
     */
    init: function() {
        this.jsonInit({
            message0: Blockly.Msg.SENSOR_RESET + ' ' + Blockly.Msg.SENSOR_GYRO + ' %1',
            args0: [
                {
                    type: 'field_dropdown',
                    name: 'AXIS',
                    options: [
                        ['x', 'X'],
                        ['y', 'Y'],
                        ['z', 'Z']
                    ]
                }
            ],
            colour: Blockly.CAT_SENSOR_RGB,
            previousStatement: true,
            nextStatement: true,
            tooltip: Blockly.Msg.GYRO_RESET_TOOLTIP
        });
    }
};