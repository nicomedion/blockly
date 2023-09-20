/**
 * @fileoverview Sensor blocks for all systems.
 * @requires Blockly.Blocks
 * @author Beate
 */

'use strict';

goog.provide('Blockly.Blocks.robSensorDefinitions');

goog.require('Blockly.Blocks');

// define sensors here as a property of sensors  ********************************************************************************

/*- minimal example:
 *
 * sensors.ultrasonic.ev3 = {
 *     title : 'ULTRASONIC',
 *     modes : [ {
 *         name : 'PRESENCE',
 *         type : 'Boolean',
 *     } ],
 * };
 *
 */

/*- all supported properties:
 *
 * title,
 * ports,
 * modes,
 *     name,
 *     type,
 *     value,
 *     unit,
 *     op,
 * standardPort
 */

var sensors = {};

sensors.accelerometer = {};
sensors.accelerometer.calliope = {
    title: 'ACCELEROMETER', modes: [{
        name: 'VALUE', type: 'Number', unit: 'MILLIG', op: 'NUM_REV', value: 0
    }], slots: [['x', 'X'], ['y', 'Y'], ['z', 'Z'], ['STRENGTH', 'STRENGTH']], ports: 'CONFIGURATION', portsHidden: true
};
sensors.accelerometer.microbit = sensors.accelerometer.calliope;
sensors.accelerometer.microbitv2 = sensors.accelerometer.calliope;
sensors.accelerometer.joycar = sensors.accelerometer.microbitv2;

sensors.accelerometer.mbot = {
    title: 'ACCELEROMETER', modes: [{
        name: 'X', type: 'Number', unit: 'g'
    }, {
        name: 'Y', type: 'Number', unit: 'g'
    }, {
        name: 'Z', type: 'Number', unit: 'g'
    }], ports: [['Port 1', '1'], ['Port 2', '2'], ['Port 3', '3'], ['Port 4', '4']]
};

sensors.accelerometer.mbot2 = {
    title: 'ACCELEROMETER', modes: [{
        name: 'VALUE', type: 'Number', unit: 'g', op: 'NUM_REV', value: 0
    }], slots: [['x', 'X'], ['y', 'Y'], ['z', 'Z']], ports: 'CONFIGURATION', portsHidden: true
};
sensors.accelerometer.spike = sensors.accelerometer.mbot2;
sensors.accelerometer.nao = {
    title: 'ACCELEROMETER', modes: [{
        name: 'VALUE', type: 'Number', unit: 'MILLIG', op: 'NUM_REV', value: 512
    }], ports: [['x', 'X'], ['y', 'Y'], ['z', 'Z']]
};

sensors.accelerometer.sensebox = {
    title: 'ACCELEROMETER', modes: [{
        name: 'X', type: 'Number', unit: 'g'
    }, {
        name: 'Y', type: 'Number', unit: 'g'
    }, {
        name: 'Z', type: 'Number', unit: 'g'
    }], ports: 'CONFIGURATION'
};

sensors.accelerometer.thymio = {
    title: 'ACCELEROMETER', modes: [{
        name: 'VALUE', type: 'Number'
    }], slots: [['x', '0'], ['y', '1'], ['z', '2']]
};

sensors.tap = {};
sensors.tap.thymio = {
    title: 'TAP', modes: [{
        name: 'VALUE', type: 'Number', op: 'NUM_EQ', value: 1
    }]
};

sensors.accelerometer.arduino = sensors.accelerometer.sensebox;

sensors.accelerometer.vorwerk = sensors.accelerometer.calliope;

sensors.battery = {};
sensors.battery.botnroll = {
    title: 'BATTERY', modes: [{
        name: 'VALUE', type: 'Number', unit: 'VOLT'
    }]
};

sensors.camera = {};
sensors.camera.robotino = {
    title: 'CAMERA', modes: [{
        name: 'LINE', type: 'Number', op: 'NUM_REV', value: '-0.5'
    }], ports: 'CONFIGURATION', portsHidden: true
};
sensors.code = {};
sensors.code.bob3 = {
    title: 'CODE', modes: [{
        name: 'VALUE', type: 'Number', value: '11'
    }]
};
sensors.code.rob3rta = sensors.code.bob3;

sensors.colour = {};
sensors.colour.botnroll = {
    title: 'COLOUR', ports: [['LEFT', '1'], ['RIGHT', '2']], modes: [{
        name: 'COLOUR', type: 'Colour', value: '#b30006'
    }, {
        name: 'LIGHT', type: 'Number', unit: 'PERCENT'
    }, {
        name: 'RGB', type: 'Array_Number'
    }]
};
sensors.colour.ev3 = {
    title: 'COLOUR', ports: [['Port 1', '1'], ['Port 2', '2'], ['Port 3', '3'], ['Port 4', '4']], modes: [{
        name: 'COLOUR', type: 'Colour', value: '#b30006'
    }, {
        name: 'LIGHT', type: 'Number', unit: 'PERCENT', value: 50
    }, {
        name: 'AMBIENTLIGHT', type: 'Number', unit: 'PERCENT', value: 50
    }, {
        name: 'RGB', type: 'Array_Number'
    }], standardPort: '3'
};
sensors.colour.xNN = sensors.colour.ev3;
sensors.colour.nxt = {
    title: 'COLOUR', ports: [['Port 1', '1'], ['Port 2', '2'], ['Port 3', '3'], ['Port 4', '4']], modes: [{
        name: 'COLOUR', type: 'Colour', value: '#b30006'
    }, {
        name: 'LIGHT', type: 'Number', unit: 'PERCENT', value: 50
    }, {
        name: 'AMBIENTLIGHT', type: 'Number', unit: 'PERCENT', value: 50
    }], standardPort: '3'
};

sensors.colour.spike = {
    title: 'COLOUR', modes: [{
        name: 'COLOUR', type: 'Colour', value: '#E701A7'
    }, {
        name: 'LIGHT', type: 'Number', unit: 'PERCENT', value: 50
    }, {
        name: 'AMBIENTLIGHT', type: 'Number', unit: 'PERCENT', value: 50
    }, {
        name: 'REDCHANNEL', type: 'Number', unit: 'PERCENT'
    }, { name: 'GREENCHANNEL', type: 'Number', unit: 'PERCENT' }, {
        name: 'BLUECHANNEL',
        type: 'Number',
        unit: 'PERCENT'
    }

    ], ports: 'CONFIGURATION'
};


sensors.compass = {};
sensors.compass.botnroll = {
    title: 'COMPASS', modes: [{
        name: 'ANGLE', type: 'Number', unit: 'DEGREE'
    }]
};
sensors.compass.calliope = {
    title: 'COMPASS', modes: [{
        name: 'ANGLE', type: 'Number', unit: 'DEGREE'
    }], ports: 'CONFIGURATION', portsHidden: true
};
sensors.compass.microbit = sensors.compass.calliope;
sensors.compass.microbitv2 = sensors.compass.calliope;
sensors.compass.joycar = sensors.compass.microbitv2;

sensors.compass.ev3 = {
    title: 'COMPASS', modes: [{
        name: 'ANGLE', type: 'Number', unit: 'DEGREE'
    }, {
        name: 'COMPASS', type: 'Number', unit: 'DEGREE'
    }], ports: [['Port 1', '1'], ['Port 2', '2'], ['Port 3', '3'], ['Port 4', '4']], standardPort: '1'
};
sensors.compass.xNN = sensors.compass.ev3;

sensors.compass.sensebox = {
    title: 'COMPASS', modes: [{
        name: 'X', type: 'Number', unit: 'DEGREE'
    }, {
        name: 'Y', type: 'Number', unit: 'DEGREE'
    }, {
        name: 'Z', type: 'Number', unit: 'DEGREE'
    }], ports: 'CONFIGURATION'
};

sensors.colourtcs3472 = {};
sensors.colourtcs3472.calliope = {
    title: 'COLOURTCS3472', modes: [{
        name: 'COLOUR', type: 'Colour'
    }, {
        name: 'LIGHT', type: 'Number', unit: 'PERCENT'
    }, {
        name: 'RGB', type: 'Array_Number'
    }], ports: 'CONFIGURATION'
};

sensors.detectface = {};
sensors.detectface.nao = {
    title: 'DETECTFACE', modes: [{
        name: 'NAMEONE', type: 'String', value: 'Roberta'
    }, {
        name: 'NAMEALL', type: 'Array_String'
    }]
};

sensors.drop = {};
sensors.drop.arduino = {
    title: 'DROP', modes: [{
        name: 'VALUE', type: 'Number', unit: 'PERCENT'
    }], ports: 'CONFIGURATION'
};

sensors.drop_off = {};
sensors.drop_off.vorwerk = {
    title: 'DROP_OFF', modes: [{
        name: 'DISTANCE', type: 'Number', unit: 'CM'
    }], ports: [['LEFT', 'LEFT'], ['RIGHT', 'RIGHT']]
};

sensors.detectmark = {};
sensors.detectmark.nao = {
    title: 'DETECTMARK', modes: [{
        name: 'IDONE', type: 'Number', value: '84', op: 'NUM_EQ'
    }, {
        name: 'IDALL', type: 'Array_Number'
    }]
};

sensors.detectmark.robotino = {
    title: 'DETECTMARK', modes: [{
        name: 'IDALL', type: 'Array_Number'
    }]
};

sensors.encoder = {};
sensors.encoder.botnroll = {
    title: 'ENCODER', modes: [{
        name: 'DEGREE', type: 'Number', unit: 'DEGREE'
    }, {
        name: 'ROTATION', type: 'Number', unit: ''
    }, {
        name: 'DISTANCE', type: 'Number', unit: 'CM'
    }], ports: [['A', 'A'], ['B', 'B'], ['C', 'C'], ['D', 'D']]
};

sensors.encoder.ev3 = {
    title: 'ENCODER', modes: [{
        name: 'DEGREE', type: 'Number', unit: 'DEGREE', op: 'NUM_REV', value: 180
    }, {
        name: 'ROTATION', type: 'Number', unit: '', op: 'NUM_REV', value: 2
    }, {
        name: 'DISTANCE', type: 'Number', unit: 'CM'
    }], ports: [['A', 'A'], ['B', 'B'], ['C', 'C'], ['D', 'D']], standardPort: 'B'
};
sensors.encoder.xNN = sensors.encoder.ev3;

sensors.encoder.mbot2 = {
    title: 'ENCODER', modes: [{
        name: 'DEGREE', type: 'Number', unit: 'DEGREE', op: 'NUM_REV', value: 180
    }, {
        name: 'ROTATION', type: 'Number', unit: '', op: 'NUM_REV', value: 2
    }], ports: 'CONFIGURATION'
};

sensors.encoder.nxt = {
    title: 'ENCODER', modes: [{
        name: 'DEGREE', type: 'Number', unit: 'DEGREE', op: 'NUM_REV', value: 180
    }, {
        name: 'ROTATION', type: 'Number', unit: '', op: 'NUM_REV', value: 2
    }, {
        name: 'DISTANCE', type: 'Number', unit: 'CM'
    }], ports: [['A', 'A'], ['B', 'B'], ['C', 'C']], standardPort: 'B'
};

sensors.encoder.joycar = {
    title: 'ENCODER', modes: [{
        name: 'VALUE', type: 'Boolean'
    }], ports: 'CONFIGURATION'
};

sensors.motor = {};
sensors.motor.spike = {
    title: 'MOTOR', modes: [{
        name: 'DEGREE', type: 'Number', unit: 'DEGREE', op: 'NUM_REV', value: 180
    }, {
        name: 'ROTATION', type: 'Number', unit: '', op: 'NUM_REV', value: 2
    }], ports: 'CONFIGURATION'
};

sensors.electriccurrent = {};
sensors.electriccurrent.nao = {
    title: 'ELECTRICCURRENT', modes: [{
        name: 'VALUE', type: 'Number', unit: 'AMPERE'
    }], ports: [{
        port: ['PORT_HEAD', 'HEAD'], slots: [['SLOT_YAW', 'YAW'], ['SLOT_PITCH', 'PITCH']]
    }, {
        port: ['PORT_SHOULDER', 'SHOULDER'],
        slots: [['SLOT_LEFT_PITCH', 'LEFT_PITCH'], ['SLOT_LEFT_ROLL', 'LEFT_ROLL'], ['SLOT_RIGHT_PITCH', 'RIGHT_PITCH'], ['SLOT_RIGHT_ROLL', 'RIGHT_ROLL']]
    }, {
        port: ['PORT_ELBOW', 'ELBOW'],
        slots: [['SLOT_LEFT_YAW', 'LEFT_YAW'], ['SLOT_LEFT_ROLL', 'LEFT_ROLL'], ['SLOT_RIGHT_YAW', 'RIGHT_YAW'], ['SLOT_RIGHT_ROLL', 'RIGHT_ROLL']]
    }, {
        port: ['PORT_WRIST', 'WRIST'], slots: [['SLOT_LEFT_YAW', 'LEFT_YAW'], ['SLOT_RIGHT_YAW', 'RIGHT_YAW']]
    }, {
        port: ['PORT_HAND', 'HAND'], slots: [['LEFT', 'LEFT'], ['RIGHT', 'RIGHT']]
    }, {
        port: ['PORT_HIP', 'HIP'],
        slots: [['SLOT_LEFT_YAW_PITCH', 'LEFT_YAW_PITCH'], ['SLOT_LEFT_ROLL', 'LEFT_ROLL'], ['SLOT_LEFT_PITCH', 'LEFT_PITCH'], ['SLOT_RIGHT_YAW_PITCH', 'RIGHT_YAW_PITCH'], ['SLOT_RIGHT_ROLL', 'RIGHT_ROLL'], ['SLOT_RIGHT_PITCH', 'RIGHT_PITCH']]
    }, {
        port: ['PORT_KNEE', 'KNEE'], slots: [['SLOT_LEFT_PITCH', 'LEFT_PITCH'], ['SLOT_RIGHT_PITCH', 'RIGHT_PITCH']]
    }, {
        port: ['PORT_ANKLE', 'ANKLE'],
        slots: [['SLOT_LEFT_PITCH', 'LEFT_PITCH'], ['SLOT_LEFT_ROLL', 'LEFT_ROLL'], ['SLOT_RIGHT_PITCH', 'RIGHT_PITCH'], ['SLOT_RIGHT_ROLL', 'RIGHT_ROLL']]
    }]
};

sensors.fsr = {};
sensors.fsr.nao = {
    title: 'FSR', modes: [{
        name: 'VALUE', type: 'Number', unit: 'NEWTON', op: 'NUM_REV', value: 10
    }], ports: [['LEFT', 'LEFT'], ['RIGHT', 'RIGHT']]
};

sensors.gesture = {};
sensors.gesture.calliope = {
    //    title : 'GESTURE',
    //    modes : [ {
    //        name : 'PRESSED',
    //        type : 'Boolean',
    //        question : true,
    //    } ],
    //    ports : [ [ 'SENSOR_GESTURE_UP', 'UP' ], [ 'SENSOR_GESTURE_DOWN', 'DOWN' ], [ 'SENSOR_GESTURE_FACE_UP', 'FACE_UP' ],
    //            [ 'SENSOR_GESTURE_FACE_DOWN', 'FACE_DOWN' ], [ 'SENSOR_GESTURE_SHAKE', 'SHAKE' ], [ 'SENSOR_GESTURE_FREEFALL', 'FREEFALL' ] ],
    //    standardPort : 'UP',
    title: 'GESTURE', modes: [{
        name: 'UP', type: 'Boolean'
    }, {
        name: 'DOWN', type: 'Boolean'
    }, {
        name: 'FACE_DOWN', type: 'Boolean'
    }, {
        name: 'FACE_UP', type: 'Boolean'
    }, {
        name: 'SHAKE', type: 'Boolean'
    }, {
        name: 'FREEFALL', type: 'Boolean'
    }]
};
sensors.gesture.microbit = sensors.gesture.calliope;
sensors.gesture.microbitv2 = sensors.gesture.calliope;
sensors.gesture.joycar = sensors.gesture.microbitv2;

sensors.gesture.spike = {
    title: 'GESTURE', modes: [{
        name: 'FRONT', type: 'Boolean'
    }, {
        name: 'BACK', type: 'Boolean'
    }, {
        name: 'UP', type: 'Boolean'
    }, {
        name: 'DOWN', type: 'Boolean'
    }, {
        name: 'LEFT', type: 'Boolean'
    }, {
        name: 'RIGHT', type: 'Boolean'
    }, {
        name: 'TAPPED', type: 'Boolean'
    }, {
        name: 'SHAKE', type: 'Boolean'
    }, {
        name: 'FREEFALL', type: 'Boolean'
    }]
};

sensors.gyro = {};
sensors.gyro.calliope = {
    title: 'GYRO', modes: [{
        name: 'ANGLE', type: 'Number', unit: 'DEGREE', op: 'NUM_REV', value: 90
    }], slots: [['x', 'X'], ['y', 'Y']], ports: 'CONFIGURATION', portsHidden: true
};
sensors.gyro.nao = sensors.gyro.calliope;

sensors.gyro.mbot = {
    title: 'GYRO', modes: [{
        name: 'X', type: 'Number', unit: 'DEGREE'
    }, {
        name: 'Y', type: 'Number', unit: 'DEGREE'
    }], ports: [['Port 1', '1'], ['Port 2', '2'], ['Port 3', '3'], ['Port 4', '4']]
};
sensors.gyro.mbot2 = {
    title: 'GYRO', modes: [{
        name: 'ANGLE', type: 'Number', unit: 'DEGREE', op: 'NUM_REV', value: 90
    }], slots: [['x', 'X'], ['y', 'Y'], ['z', 'Z']], ports: 'CONFIGURATION', portsHidden: true
};
sensors.gyro.spike = sensors.gyro.mbot2;
sensors.gyro.ev3 = {
    title: 'GYRO', modes: [{
        name: 'ANGLE', type: 'Number', unit: 'DEGREE', op: 'NUM_REV', value: 90
    }, {
        name: 'RATE', type: 'Number', unit: 'OMEGA', op: 'NUM_REV', value: 90
    }], ports: [['Port 1', '1'], ['Port 2', '2'], ['Port 3', '3'], ['Port 4', '4']], standardPort: '2'
};
sensors.gyro.xNN = sensors.gyro.ev3;

sensors.gyro.wedo = {
    title: 'GYRO',
    modes: [{
        name: 'TILTED', type: 'Boolean', question: true
    }],
    slots: [['SLOT_TILTED_UP', 'UP'], ['SLOT_TILTED_DOWN', 'DOWN'], ['SLOT_TILTED_BACK', 'BACK'], ['SLOT_TILTED_FRONT', 'FRONT'], ['SLOT_TILTED_NO', 'NO'], ['SLOT_TILTED_ANY', 'ANY']],
    ports: 'CONFIGURATION'
};

sensors.gyro.sensebox = {
    title: 'GYRO', modes: [{
        name: 'X', type: 'Number', unit: 'DEGREE'
    }, {
        name: 'Y', type: 'Number', unit: 'DEGREE'
    }, {
        name: 'Z', type: 'Number', unit: 'DEGREE'
    }], ports: 'CONFIGURATION'
};

sensors.gyro.arduino = {
    title: 'GYRO', modes: [{
        name: 'X', type: 'Number', unit: 'DEGREE_PER_SECOND'
    }, {
        name: 'Y', type: 'Number', unit: 'DEGREE_PER_SECOND'
    }, {
        name: 'Z', type: 'Number', unit: 'DEGREE_PER_SECOND'
    }], ports: 'CONFIGURATION'
};

sensors.htcolour = {};
sensors.htcolour.ev3 = {
    title: 'HTCOLOUR', ports: [['Port 1', '1'], ['Port 2', '2'], ['Port 3', '3'], ['Port 4', '4']], modes: [{
        name: 'COLOUR', type: 'Colour', value: '#b30006'
    }, {
        name: 'LIGHT', type: 'Number', unit: 'PERCENT', value: 50
    }, {
        name: 'AMBIENTLIGHT', type: 'Number', unit: 'PERCENT', value: 50
    }, {
        name: 'RGB', type: 'Array_Number'
    }], standardPort: '3'
};
sensors.htcolour.xNN = sensors.htcolour.ev3;
sensors.htcolour.nxt = sensors.htcolour.ev3;

sensors.humidity = {};
sensors.humidity.arduino = {
    title: 'HUMIDITY', modes: [{
        name: 'HUMIDITY', type: 'Number', unit: 'PERCENT'
    }, {
        name: 'TEMPERATURE', type: 'Number', unit: 'DEGREE'
    }], ports: 'CONFIGURATION'
};

sensors.humidity.sensebox = {
    title: 'HUMIDITY', modes: [{
        name: 'HUMIDITY', type: 'Number', unit: 'PERCENT'
    }, {
        name: 'TEMPERATURE', type: 'Number', unit: 'DEGREE'
    }], ports: 'CONFIGURATION'
};

sensors.humidity.calliope = {
    title: 'HUMIDITY', modes: [{
        name: 'HUMIDITY', type: 'Number', unit: 'PERCENT'
    }, {
        name: 'TEMPERATURE', type: 'Number', unit: 'DEGREE'
    }], ports: 'CONFIGURATION'
};

sensors.infrared = {};
sensors.infrared.botnroll = {
    title: 'INFRARED', ports: [['LEFT', '1'], ['RIGHT', '2'], ['BOTH', 'BOTH']], modes: [{
        name: 'OBSTACLE', type: 'Boolean'
    }, {
        name: 'PRESENCE', type: 'Boolean'
    }]
};
sensors.infrared = {};

sensors.infrared.arduino = {
    title: 'INFRARED', modes: [{
        name: 'VALUE', type: 'Number'
    }, {
        name: 'PRESENCE', type: 'Boolean'
    }], ports: 'CONFIGURATION'
};

sensors.infrared.bob3 = {
    title: 'INFRARED', modes: [{
        name: 'AMBIENTLIGHT', type: 'Number'
    }, {
        name: 'REFLEXION', type: 'Number'
    }]
};
sensors.infrared.rob3rta = sensors.infrared.bob3;

sensors.infrared.calliope = {
    title: 'INFRARED', modes: [{
        name: 'LINE', type: 'Boolean'
    }], ports: 'CONFIGURATION'
};

sensors.infrared.mbot = {
    title: 'INFRARED',
    modes: [{
        name: 'LINE', type: 'Boolean'
    }],
    ports: [['Port 1', '1'], ['Port 2', '2'], ['Port 3', '3'], ['Port 4', '4']],
    slots: [['SLOT_LEFT', '1'], ['SLOT_RIGHT', '2']],
    standardPort: '2'
};

sensors.infrared.ev3 = {
    title: 'INFRARED', ports: [['Port 1', '1'], ['Port 2', '2'], ['Port 3', '3'], ['Port 4', '4']], modes: [{
        name: 'DISTANCE', type: 'Number', unit: 'CM'
    }, {
        name: 'PRESENCE', type: 'Array_Number'
    }]
};
sensors.infrared.xNN = sensors.infrared.ev3;

sensors.infrared.wedo = {
    title: 'INFRARED', ports: 'CONFIGURATION', modes: [{
        name: 'DISTANCE', type: 'Number', // unit : 'CM'
        value: 10
    }]
};

sensors.infrared.edison = {
    title: 'INFRARED', ports: [['LEFT', 'LEFT'], ['RIGHT', 'RIGHT'], ['SLOT_FRONT', 'FRONT']], modes: [{
        name: 'OBSTACLE', type: 'Boolean'
    }]
};

sensors.infrared.thymio = {
    title: 'INFRARED', modes: [{
        name: 'LINE', type: 'Number', op: 'NUM_EQ', value: 1
    }, {
        name: 'LIGHT', type: 'Number', unit: 'PERCENT', op: 'NUM_REV', value: '50'
    }, {
        name: 'AMBIENTLIGHT', type: 'Number', unit: 'PERCENT', op: 'NUM_REV'
    }], slots: [['SLOT_LEFT', '0'], ['SLOT_RIGHT', '1']]
};

sensors.irhorizontal = {};
sensors.irhorizontal.thymio = {
    title: 'IRHORIZONTAL',
    slots: [['FRONT_LEFT', '0'], ['FRONT_LEFT_MIDDLE', '1'], ['FRONT_MIDDLE', '2'], ['FRONT_RIGHT_MIDDLE', '3'], ['FRONT_RIGHT', '4'], ['BACK_LEFT', '5'], ['BACK_RIGHT', '6']],
    modes: [{
        name: 'DISTANCE', type: 'Number', unit: 'PERCENT', value: 50
    }]
};

sensors.infrared.robotino = {
    title: 'INFRARED',
    ports: [['1', '1'], ['2', '2'], ['3', '3'], ['4', '4'], ['5', '5'], ['6', '6'], ['7', '7'], ['8', '8'], ['9', '9']],
    modes: [{
        name: 'DISTANCE', type: 'Number', unit: 'CM'
    }]
};

sensors.infrared.joycar = {
    title: 'INFRARED', ports: 'CONFIGURATION', modes: [{
        name: 'OBSTACLE', type: 'Boolean'
    }]
};

sensors.irseeker = {};
sensors.irseeker.ev3 = {
    title: 'IRSEEKER', ports: [['Port 1', '1'], ['Port 2', '2'], ['Port 3', '3'], ['Port 4', '4']], modes: [{
        name: 'MODULATED', type: 'Number', unit: 'DEGREE'
    }, {
        name: 'UNMODULATED', type: 'Number', unit: 'DEGREE'
    }]
};
sensors.irseeker.xNN = sensors.irseeker.ev3;

sensors.irseeker.edison = {
    title: 'IRSEEKER', modes: [{
        name: 'RCCODE', type: 'Number'
    }]
};

sensors.joystick = {};
sensors.joystick.mbot = {
    title: 'JOYSTICK', ports: [['Port 1', '1'], ['Port 2', '2'], ['Port 3', '3'], ['Port 4', '4']], modes: [{
        name: 'X', type: 'Number'
    }, {
        name: 'Y', type: 'Number'
    }], standardPort: '3'
};

sensors.joystickKeys = {};
sensors.joystickKeys.mbot2 = {
    title: 'JOYSTICK',
    slots: [['SENSOR_KEY_UP', 'UP'], ['SENSOR_KEY_DOWN', 'DOWN'], ['SENSOR_KEY_LEFT', 'LEFT'], ['SENSOR_KEY_RIGHT', 'RIGHT'], ['SENSOR_KEY_ENTER', 'CENTER'], ['SENSOR_KEY_ANY', 'ANY']],

    modes: [{
        name: 'PRESSED', type: 'Boolean', question: true
    }],
    ports: 'CONFIGURATION',
    portsHidden: true
};

sensors.key = {};
sensors.key.botnroll = {
    title: 'KEY', modes: [{
        name: 'PRESSED', type: 'Boolean', question: true
    }], ports: [['1', 'LEFT'], ['2', 'ENTER'], ['3', 'RIGHT'], ['SENSOR_KEY_ANY', 'ANY']]
};

sensors.key.arduino = {
    title: 'KEY', modes: [{
        name: 'PRESSED', type: 'Boolean', question: true
    }], ports: 'CONFIGURATION'
};

sensors.key.mbot = {
    title: 'KEY', modes: [{
        name: 'PRESSED', type: 'Boolean', question: true
    }]
};

sensors.key.calliope = {
    title: 'KEY', modes: [{
        name: 'PRESSED', type: 'Boolean', question: true
    }], ports: 'CONFIGURATION'
};

sensors.key.mbot2 = sensors.key.calliope;
sensors.key.microbit = sensors.key.calliope;
sensors.key.microbitv2 = sensors.key.calliope;
sensors.key.joycar = sensors.key.microbitv2;

sensors.key.ev3 = {
    title: 'KEY',
    modes: [{
        name: 'PRESSED', type: 'Boolean', question: true
    }],
    ports: [['SENSOR_KEY_ENTER', 'ENTER'], ['SENSOR_KEY_UP', 'UP'], ['SENSOR_KEY_DOWN', 'DOWN'], ['SENSOR_KEY_LEFT', 'LEFT'], ['SENSOR_KEY_RIGHT', 'RIGHT'], ['SENSOR_KEY_ESCAPE', 'ESCAPE'], ['SENSOR_KEY_ANY', 'ANY']]
};
sensors.key.xNN = sensors.key.ev3;
sensors.key.nxt = {
    title: 'KEY', modes: [{
        name: 'PRESSED', type: 'Boolean', question: true
    }], ports: [['SENSOR_KEY_ENTER', 'ENTER'], ['SENSOR_KEY_LEFT', 'LEFT'], ['SENSOR_KEY_RIGHT', 'RIGHT']]
};
sensors.key.sensebox = sensors.key.arduino;

sensors.key.wedo = {
    title: 'KEY', modes: [{
        name: 'PRESSED', type: 'Boolean', question: true
    }], ports: 'CONFIGURATION'
};
sensors.key.spike = sensors.key.wedo;

sensors.key.edison = {
    title: 'KEY', modes: [{
        name: 'PRESSED', type: 'Boolean', question: true
    }], ports: [['SENSOR_KEY_PLAY', 'PLAY'], ['SENSOR_KEY_REC', 'REC']]
};

sensors.key.thymio = {
    title: 'KEY',
    modes: [{
        name: 'PRESSED', type: 'Number', op: 'NUM_EQ', value: 1
    }],
    ports: [['FORWARD', 'FORWARD'], ['RIGHT', 'RIGHT'], ['BACKWARD', 'BACKWARD'], ['LEFT', 'LEFT'], ['CENTER', 'CENTER']]
};

sensors.light = {};
sensors.light.arduino = {
    title: 'LIGHT', modes: [{
        name: 'LIGHT', type: 'Number', unit: 'PERCENT'
    }], ports: 'CONFIGURATION'
};
sensors.light.sensebox = sensors.light.arduino;
sensors.light.botnroll = {
    title: 'LIGHT', modes: [{
        name: 'LIGHT', type: 'Number', unit: 'PERCENT'
    }], ports: [['0', '0'], ['1', '1'], ['2', '2'], ['3', '3'], ['4', '4'], ['5', '5'], ['6', '6'], ['7', '7']]
};
sensors.light.calliope = {
    title: 'LIGHT', modes: [{
        name: 'VALUE', type: 'Number', unit: 'PERCENT'
    }], ports: 'CONFIGURATION', portsHidden: true
};
sensors.light.microbit = sensors.light.calliope;
sensors.light.microbitv2 = sensors.light.calliope;
sensors.light.joycar = sensors.light.microbitv2;

sensors.light.festobionicflower = {
    title: 'LIGHT', modes: [{
        name: 'VALUE', type: 'Number', unit: 'LUX'
    }], ports: 'CONFIGURATION'
};
sensors.light.nxt = {
    title: 'LIGHT', modes: [{
        name: 'LIGHT', type: 'Number', unit: 'PERCENT', value: 50
    }, {
        name: 'AMBIENTLIGHT', type: 'Number', unit: 'PERCENT', value: 50
    }], ports: [['Port 1', '1'], ['Port 2', '2'], ['Port 3', '3'], ['Port 4', '4']], standardPort: '3'
};
sensors.light.mbot = {
    title: 'LIGHT', modes: [{
        name: 'LIGHT', type: 'Number', unit: 'PERCENT', value: 50
    }], ports: [['PORT_INTERNAL', '6'], ['Port 1', '1'], ['Port 2', '2'], ['Port 3', '3'], ['Port 4', '4']]
};
sensors.light.mbot2 = sensors.light.calliope;
sensors.light.edison = {
    title: 'LIGHT', modes: [{
        name: 'LIGHT',
        type: 'Number',
        unit: 'PERCENT',
        ports: [['LEFT', 'LLIGHT'], ['RIGHT', 'RLIGHT'], ['BELOW', 'LINETRACKER']]
    }, {
        name: 'LINE', type: 'Boolean', ports: [['BELOW', 'LINETRACKER']]
    }]
};

sensors.lightveml = {};
sensors.lightveml.sensebox = {
    title: 'LIGHTVEML', modes: [{
        name: 'LIGHT', type: 'Number', unit: 'LUX', op: 'NUM_REV', value: 500
    }, {
        name: 'UVLIGHT', type: 'Number', unit: 'IRRADIANCE', op: 'NUM_REV', value: 50
    }], ports: 'CONFIGURATION'
};

sensors.moisture = {};
sensors.moisture.arduino = {
    title: 'MOISTURE', modes: [{
        name: 'VALUE', type: 'Number', unit: 'PERCENT'
    }], ports: 'CONFIGURATION'
};

sensors.motion = {};
sensors.motion.arduino = {
    title: 'MOTION', modes: [{
        name: 'PRESENCE', type: 'Boolean'
    }], ports: 'CONFIGURATION'
};

sensors.motion.mbot = {
    title: 'MOTION', modes: [{
        name: 'PRESENCE', type: 'Boolean'
    }], ports: [['Port 1', '1'], ['Port 2', '2'], ['Port 3', '3'], ['Port 4', '4']], standardPort: '3'
};

sensors.optical = {};
sensors.optical.robotino = {
    title: 'OPTICAL', modes: [{
        name: 'OPENING', type: 'Boolean'
    }, {
        name: 'CLOSING', type: 'Boolean'
    }], ports: 'CONFIGURATION'
};

sensors.out = {};
sensors.out.arduino = {
    title: 'OUT', modes: [{
        name: 'ANALOG', type: 'Number', value: '100', op: 'NUM_REV'
    }, {
        name: 'DIGITAL', type: 'Number', value: '1', op: 'NUM_EQ'
    }], ports: 'CONFIGURATION'
};
sensors.out.sensebox = sensors.out.arduino;
sensors.out.robotino = sensors.out.arduino;

sensors.pin = {};
sensors.pin.calliope = {
    title: 'PIN', modes: [{
        name: 'ANALOG', type: 'Number'
    }, {
        name: 'DIGITAL', type: 'Number'
    }, {
        name: 'PULSEHIGH', type: 'Number'
    }, {
        name: 'PULSELOW', type: 'Number'
    }], ports: 'CONFIGURATION'
};
sensors.pin.microbit = sensors.pin.calliope;
sensors.pin.microbitv2 = sensors.pin.calliope;
sensors.pin.joycar = sensors.pin.microbitv2;


sensors.potentiometer = {};
sensors.potentiometer.arduino = {
    title: 'POTENTIOMETER', modes: [{
        name: 'VALUE', type: 'Number', unit: 'VOLT'
    }], ports: 'CONFIGURATION'
};

sensors.potentiometer.sensebox = sensors.potentiometer.arduino;

sensors.potentiometer.mbot = {
    title: 'POTENTIOMETER', modes: [{
        name: 'VALUE', type: 'Number', unit: 'VOLT'
    }], ports: [['Port 1', '1'], ['Port 2', '2'], ['Port 3', '3'], ['Port 4', '4']], standardPort: '4'
};

sensors.pintouch = {};
sensors.pintouch.bob3 = {
    title: 'PINTOUCH',
    ports: [['LEFT', '2'], ['RIGHT', '1']],
    slots: [['SENSOR_TOP', '1'], ['CENTER', '2'], ['SENSOR_BOTTOM', '3'], ['SENSOR_ANY', '0']],
    modes: [{
        name: 'PRESSED', type: 'Boolean', question: true
    }]
};

sensors.pintouch.calliope = {
    title: 'PINTOUCH', ports: [[' 0', '0'], [' 1', '1'], [' 2', '2'], [' 3', '3']], modes: [{
        name: 'PRESSED', type: 'Boolean', question: true
    }], standardPort: '1'
};

sensors.pintouch.microbit = {
    title: 'PINTOUCH', ports: [[' 0', '0'], [' 1', '1'], [' 2', '2']], modes: [{
        name: 'PRESSED', type: 'Boolean', question: true
    }], standardPort: '1'
};
sensors.pintouch.microbitv2 = sensors.pintouch.microbit;
sensors.pintouch.joycar = sensors.pintouch.microbitv2;


sensors.pintouch.rob3rta = {
    title: 'PINTOUCH', titleNotVisible: true, modes: [{
        name: 'PRESSED', type: 'Boolean', question: true
    }], ports: [{
        port: ['PORT_EAR', 'EAR'], slots: [['LEFT', '2'], ['RIGHT', '1']]
    }, {
        port: ['PORT_WHEEL', 'WHEEL'], slots: [['A', 'A'], ['B', 'B'], ['C', 'C'], ['D', 'D']]
    }]
};
sensors.logotouch = {};
sensors.logotouch.microbitv2 = {
    title: 'LOGOTOUCH', modes: [{
        name: 'PRESSED', type: 'Boolean', question: true
    }],
    ports: 'CONFIGURATION',
    portsHidden: true
};
sensors.logotouch.joycar = sensors.logotouch.microbitv2;

sensors.pulse = {};
sensors.pulse.arduino = {
    title: 'PULSE', modes: [{
        name: 'VALUE', type: 'Number'
    }], ports: 'CONFIGURATION'
};
sensors.quadrgb = {};
sensors.quadrgb.mbot2 = {
    title: 'QUADRGB', modes: [{
        name: 'COLOUR', type: 'Colour', value: '#b30006'
    }, {
        name: 'LIGHT', type: 'Number', unit: 'PERCENT', value: 50
    }, {
        name: 'AMBIENTLIGHT', type: 'Number', unit: 'PERCENT', value: 50
    }, {
        name: 'RGB', type: 'Array_Number'
    }], slots: [['L1', 'L1'], ['L2', 'L2'], ['R1', 'R1'], ['R2', 'R2']], ports: 'CONFIGURATION'
};

sensors.line = {};
sensors.line.mbot2 = {
    title: 'QUADRGB', modes: [{
        name: 'LINE', type: 'Number'
    }], ports: 'CONFIGURATION'
};
sensors.line.joycar = {
    title: 'LINE', ports: 'CONFIGURATION', modes: [{
        name: 'LINE', type: 'Boolean'
    }]
};

sensors.odometry = {};
sensors.odometry.robotino = {
    title: 'ODOMETRY', modes: [{
        name: 'VALUE', type: 'Number'
    }], slots: [['x', 'X'], ['y', 'Y'], ['θ', 'THETA']], ports: 'CONFIGURATION', portsHidden: true
};

sensors.rssi = {};
sensors.rssi.calliope = {
    title: 'RSSI', modes: [{
        name: 'VALUE', type: 'Number'
    }]
};

sensors.rfid = {};
sensors.rfid.arduino = {
    title: 'RFID', modes: [{
        name: 'IDONE', type: 'String'
    }, {
        name: 'PRESENCE', type: 'Boolean'
    }], ports: 'CONFIGURATION'
};

sensors.sound = {};
sensors.sound.calliope = {
    title: 'SOUND', modes: [{
        name: 'SOUND', type: 'Number', unit: 'PERCENT', op: 'NUM_REV', value: 50
    }], ports: 'CONFIGURATION', portsHidden: true
};
sensors.sound.mbot2 = sensors.sound.calliope;
sensors.sound.microbitv2 = sensors.sound.calliope;
sensors.sound.joycar = sensors.sound.microbitv2;


sensors.sound.ev3 = {
    title: 'SOUND', modes: [{
        name: 'SOUND', type: 'Number', unit: 'PERCENT', op: 'NUM_REV', value: 50
    }], ports: [['Port 1', '1'], ['Port 2', '2'], ['Port 3', '3'], ['Port 4', '4']], standardPort: '2'
};
sensors.sound.xNN = sensors.sound.ev3;
sensors.sound.nxt = sensors.sound.ev3;
sensors.sound.mbot = sensors.sound.ev3;

sensors.sound.sensebox = {
    title: 'SOUND', modes: [{
        name: 'SOUND', type: 'Number', unit: 'PERCENT', op: 'NUM_REV', value: 50
    }], ports: 'CONFIGURATION'
};

sensors.sound.thymio = {
    title: 'SOUND', modes: [{
        name: 'SOUND', type: 'Number', unit: 'PERCENT', op: 'NUM_REV', value: 50
    }]
};
sensors.sound.edison = {
    title: 'SOUND', modes: [{
        name: 'SOUND', type: 'Boolean'
    }]
};

sensors.temperature = {};
sensors.temperature.arduino = {
    title: 'TEMPERATURE', modes: [{
        name: 'VALUE', type: 'Number', unit: 'DEGREE', value: 20
    }], ports: 'CONFIGURATION'
};
sensors.temperature.bob3 = {
    title: 'TEMPERATURE', modes: [{
        name: 'VALUE', type: 'Number', unit: 'DEGREE', value: 20
    }]
};
sensors.temperature.rob3rta = sensors.temperature.bob3;

sensors.temperature.calliope = {
    title: 'TEMPERATURE', modes: [{
        name: 'VALUE', type: 'Number', unit: 'DEGREE', value: 20
    }], ports: 'CONFIGURATION', portsHidden: true
};
sensors.temperature.microbit = sensors.temperature.calliope;
sensors.temperature.microbitv2 = sensors.temperature.calliope;
sensors.temperature.joycar = sensors.temperature.microbitv2;

sensors.temperature.mbot = {
    title: 'TEMPERATURE', modes: [{
        name: 'VALUE', type: 'Number', unit: 'DEGREE', value: 20
    }], ports: [['Port 1', '1'], ['Port 2', '2'], ['Port 3', '3'], ['Port 4', '4']], standardPort: '3'
};
sensors.temperature.sensebox = {
    title: 'TEMPERATURE', modes: [{
        name: 'TEMPERATURE', type: 'Number', unit: 'DEGREE', value: 20
    }, {
        name: 'PRESSURE', type: 'Number', unit: 'PASCAL', value: 101325
    }], ports: 'CONFIGURATION'
};
sensors.temperature.thymio = sensors.temperature.bob3;

sensors.timer = {};
sensors.timer.botnroll = {
    title: 'TIMER', modes: [{
        name: 'VALUE', type: 'Number', unit: 'MS', op: 'NUM_REV', value: 500
    }], ports: [[' 1', '1']]
};
sensors.timer.bob3 = sensors.timer.botnroll;
sensors.timer.rob3rta = sensors.timer.botnroll;
sensors.timer.calliope = sensors.timer.botnroll;
sensors.timer.nxt = sensors.timer.botnroll;
sensors.timer.microbit = sensors.timer.botnroll;
sensors.timer.microbitv2 = sensors.timer.botnroll;
sensors.timer.joycar = sensors.timer.microbitv2;
sensors.timer.wedo = sensors.timer.botnroll;
sensors.timer.thymio = sensors.timer.botnroll;
sensors.timer.spike = sensors.timer.botnroll;

sensors.timer.ev3 = {
    title: 'TIMER', modes: [{
        name: 'VALUE', type: 'Number', unit: 'MS', op: 'NUM_REV', value: 500
    }], ports: [[' 1', '1'], [' 2', '2'], [' 3', '3'], [' 4', '4'], [' 5', '5']]
};
sensors.timer.arduino = sensors.timer.ev3;
sensors.timer.xNN = sensors.timer.ev3;
sensors.timer.festobionic = sensors.timer.ev3;
sensors.timer.festobionicflower = sensors.timer.ev3;
sensors.timer.mbot = sensors.timer.ev3;
sensors.timer.mbot2 = sensors.timer.ev3;
sensors.timer.sensebox = sensors.timer.ev3;
sensors.timer.robotino = sensors.timer.ev3;

sensors.touch = {};
sensors.touch.ev3 = {
    title: 'TOUCH', ports: [['Port 1', '1'], ['Port 2', '2'], ['Port 3', '3'], ['Port 4', '4']], modes: [{
        name: 'PRESSED', type: 'Boolean', question: true
    }], standardPort: '1'
};
sensors.touch.xNN = sensors.touch.ev3;
sensors.touch.nxt = sensors.touch.ev3;
sensors.touch.mbot = sensors.touch.ev3;
sensors.touch.nao = {
    title: 'TOUCH', modes: [{
        name: 'PRESSED', type: 'Boolean', question: true
    }], ports: [{
        port: ['PORT_HEAD', 'HEAD'], slots: [['SLOT_FRONT', 'FRONT'], ['SLOT_MIDDLE', 'MIDDLE'], ['SLOT_REAR', 'REAR']]
    }, {
        port: ['PORT_HAND', 'HAND'], slots: [['LEFT', 'LEFT'], ['RIGHT', 'RIGHT']]
    }, {
        port: ['PORT_BUMPER', 'BUMPER'], slots: [['LEFT', 'LEFT'], ['RIGHT', 'RIGHT']]
    }]
};

sensors.touch.vorwerk = {
    title: 'TOUCH', modes: [{
        name: 'PRESSED', type: 'Boolean', question: true
    }], ports: [['LEFT', 'LEFT'], ['RIGHT', 'RIGHT']], slots: [['SLOT_FRONT', 'FRONT'], ['SLOT_SIDE', 'SIDE']]
};

sensors.touch.festobionicflower = {
    title: 'TOUCH', modes: [{
        name: 'PRESSED', type: 'Boolean', question: true
    }], ports: 'CONFIGURATION'
};

sensors.touch.robotino = {
    title: 'TOUCH', modes: [{
        name: 'PRESSED', type: 'Boolean', question: true
    }], ports: 'CONFIGURATION', portsHidden: true
};

sensors.touch.spike = {
    title: 'TOUCH', modes: [{
        name: 'PRESSED', type: 'Boolean'
    },
        {
            name: 'FORCE', type: 'Number', unit: 'PERCENT', op: 'NUM_REV'
        }], ports: 'CONFIGURATION'
};

sensors.ultrasonic = {};
sensors.ultrasonic.arduino = {
    title: 'ULTRASONIC', modes: [{
        name: 'DISTANCE', type: 'Number', unit: 'CM'
    }], ports: 'CONFIGURATION'
};
sensors.ultrasonic.sensebox = sensors.ultrasonic.arduino;
sensors.ultrasonic.botnroll = {
    title: 'ULTRASONIC', ports: [['LEFT', '0'], ['CENTER', '1'], ['RIGHT', '2'], ['SENSOR_SONAR', '3']], modes: [{
        name: 'DISTANCE', type: 'Number', unit: 'CM'
    }]
};
sensors.ultrasonic.calliope = {
    title: 'ULTRASONIC', modes: [{
        name: 'DISTANCE', type: 'Number', unit: 'CM'
    }], ports: 'CONFIGURATION'
};
sensors.ultrasonic.mbot2 = sensors.ultrasonic.calliope;
sensors.ultrasonic.ev3 = {
    title: 'ULTRASONIC', ports: [['Port 1', '1'], ['Port 2', '2'], ['Port 3', '3'], ['Port 4', '4']], modes: [{
        name: 'DISTANCE', type: 'Number', unit: 'CM'
    }, {
        name: 'PRESENCE', type: 'Boolean'
    }], standardPort: '4'
};
sensors.ultrasonic.xNN = sensors.ultrasonic.ev3;

sensors.ultrasonic.mbot = {
    title: 'ULTRASONIC', ports: [['Port 1', '1'], ['Port 2', '2'], ['Port 3', '3'], ['Port 4', '4']], modes: [{
        name: 'DISTANCE', type: 'Number', unit: 'CM'
    }], standardPort: '3'
};
sensors.ultrasonic.nao = {
    title: 'ULTRASONIC', modes: [{
        name: 'DISTANCE', type: 'Number', unit: 'CM'
    }]
};
sensors.ultrasonic.nxt = {
    title: 'ULTRASONIC', ports: [['Port 1', '1'], ['Port 2', '2'], ['Port 3', '3'], ['Port 4', '4']], modes: [{
        name: 'DISTANCE', type: 'Number', unit: 'CM'
    }], standardPort: '4'
};
sensors.ultrasonic.vorwerk = {
    title: 'ULTRASONIC',
    modes: [{
        name: 'DISTANCE', type: 'Number', unit: 'CM'
    }],
    ports: [['LEFT', 'LEFT_ULTRASONIC'], ['CENTER', 'CENTER_ULTRASONIC'], ['RIGHT', 'RIGHT_ULTRASONIC']],
    slots: [['LEFT', 'LEFT'], ['CENTER', 'CENTER'], ['RIGHT', 'RIGHT']]
};
sensors.ultrasonic.spike = sensors.ultrasonic.calliope;
sensors.ultrasonic.joycar = sensors.ultrasonic.calliope;

sensors.wall = {};
sensors.wall.vorwerk = {
    title: 'WALL', modes: [{
        name: 'DISTANCE', type: 'Number', unit: 'CM'
    }]
};

sensors.flame = {};
sensors.flame.mbot = {
    title: 'FLAME', ports: [['Port 1', '1'], ['Port 2', '2'], ['Port 3', '3'], ['Port 4', '4']], modes: [{
        name: 'VALUE', type: 'Number'
    }], standardPort: '4'
};

sensors.particle = {};
sensors.particle.sensebox = {
    title: 'PARTICLE', modes: [{
        name: 'PM25', type: 'Number', unit: 'PM'
    }, {
        name: 'PM10', type: 'Number', unit: 'PM'
    }], ports: 'CONFIGURATION'
};

sensors.gps = {};
sensors.gps.sensebox = {
    title: 'GPS', modes: [{
        name: 'LATITUDE', type: 'Number', unit: 'DEGREE'
    }, {
        name: 'LONGITUDE', type: 'Number', unit: 'DEGREE'
    }, {
        name: 'ALTITUDE', type: 'Number', unit: 'METER'
    }, {
        name: 'SPEED', type: 'Number', unit: 'SPEED'
    }, {
        name: 'DATE', type: 'Number'
    }, {
        name: 'TIME', type: 'Number'
    }], ports: 'CONFIGURATION'
};

sensors.environmental = {};
sensors.environmental.sensebox = {
    title: 'ENVIRONMENTAL', modes: [{
        name: 'TEMPERATURE', type: 'Number', unit: 'DEGREE'
    }, {
        name: 'HUMIDITY', type: 'Number', unit: 'PERCENT'
    }, {
        name: 'PRESSURE', type: 'Number', unit: 'PASCAL'
    }, {
        name: 'IAQ', type: 'Number'
    }, {
        name: 'CALIBRATION', type: 'Number'
    }, {
        name: 'CO2EQUIVALENT', type: 'Number'
    }, {
        name: 'VOCEQUIVALENT', type: 'Number'
    }], ports: 'CONFIGURATION'
};

sensors.key.karl = sensors.key.mbot;
sensors.potentiometer.karl = {
    title: 'POTENTIOMETER', modes: [{
        name: 'VALUE', type: 'Number', unit: 'VOLT'
    }], ports: 'CONFIGURATION'
};
sensors.potentiometerrange = {}
sensors.potentiometerrange.karl = {
   title: 'POTENTIOMETER', modes: [{
       name: 'VALUE', type: 'Number', unit: 'PERCENT'
   },{
        name: 'RANGE1', type: 'Number', value: '0', op: 'NUM_EQ'
    },{
        name: 'RANGE2', type: 'Number', value: '100', op: 'NUM_EQ'
    }]
};

sensors.out.nano33ble = sensors.out.arduino;
sensors.key.nano33ble = sensors.key.arduino;
sensors.timer.nano33ble = sensors.timer.arduino;
sensors.temperature.nano33ble = sensors.temperature.arduino;
sensors.ultrasonic.nano33ble = sensors.ultrasonic.arduino;
sensors.light.nano33ble = sensors.light.arduino;
sensors.moisture.nano33ble = sensors.moisture.arduino;
sensors.potentiometer.nano33ble = sensors.potentiometer.arduino;
sensors.infrared.nano33ble = sensors.infrared.arduino;
sensors.humidity.nano33ble = sensors.humidity.arduino;
sensors.motion.nano33ble = sensors.motion.arduino;
sensors.pulse.nano33ble = sensors.pulse.arduino;
sensors.drop.nano33ble = sensors.drop.arduino;
sensors.rfid.nano33ble = sensors.rfid.arduino;
sensors.gyro.nano33ble = sensors.gyro.arduino;
sensors.accelerometer.nano33ble = sensors.accelerometer.arduino;

var sensorsAll = [];
sensorsAll.botnroll = [sensors.infrared.botnroll, sensors.light.botnroll, sensors.compass.botnroll, sensors.ultrasonic.botnroll, sensors.colour.botnroll, sensors.key.botnroll];
sensorsAll.mbot = [sensors.key.mbot, sensors.ultrasonic.mbot, sensors.infrared.mbot, sensors.light.mbot, sensors.timer.mbot];
sensorsAll.mbot2 = [sensors.key.mbot2, sensors.ultrasonic.mbot2, sensors.sound.mbot2, sensors.joystickKeys.mbot2, sensors.light.mbot2, sensors.gyro.mbot2, sensors.accelerometer.mbot2, sensors.timer.mbot2, sensors.quadrgb.mbot2, sensors.line.mbot2, sensors.encoder.mbot2];
sensorsAll.ev3 = [sensors.touch.ev3, sensors.ultrasonic.ev3, sensors.colour.ev3, sensors.infrared.ev3, sensors.encoder.ev3, sensors.key.ev3, sensors.gyro.ev3, sensors.timer.ev3, sensors.compass.ev3, sensors.irseeker.ev3, sensors.htcolour.ev3, sensors.sound.ev3];
sensorsAll.xNN = [sensors.touch.xNN, sensors.ultrasonic.xNN, sensors.colour.xNN, sensors.infrared.xNN, sensors.encoder.xNN, sensors.key.xNN, sensors.gyro.xNN, sensors.timer.xNN, sensors.compass.xNN, sensors.irseeker.xNN, sensors.htcolour.xNN, sensors.sound.xNN];
sensorsAll.nxt = [sensors.touch.nxt, sensors.sound.nxt, sensors.light.nxt, sensors.ultrasonic.nxt, sensors.encoder.nxt, sensors.key.nxt, sensors.colour.nxt, sensors.timer.nxt, sensors.htcolour.nxt];
sensorsAll.bob3 = [sensors.pintouch.bob3, sensors.infrared.bob3, sensors.temperature.bob3, sensors.timer.bob3];
sensorsAll.calliope = [sensors.key.calliope, sensors.pintouch.calliope, sensors.gesture.calliope, sensors.compass.calliope, sensors.sound.calliope, sensors.timer.calliope, sensors.temperature.calliope, sensors.light.calliope, sensors.pin.calliope, sensors.gyro.calliope, sensors.accelerometer.calliope, sensors.humidity.calliope, sensors.ultrasonic.calliope, sensors.infrared.calliope];
sensorsAll.microbit = [sensors.key.microbit, sensors.pintouch.microbit, sensors.gesture.microbit, sensors.compass.microbit, sensors.timer.microbit, sensors.temperature.microbit, sensors.pin.microbit, sensors.accelerometer.microbit, sensors.light.microbit];
sensorsAll.microbitv2 = [sensors.key.microbitv2, sensors.pintouch.microbitv2, sensors.logotouch.microbitv2, sensors.gesture.microbitv2, sensors.sound.microbitv2, sensors.compass.microbitv2, sensors.timer.microbitv2, sensors.temperature.microbitv2, sensors.pin.microbitv2, sensors.accelerometer.microbitv2, sensors.light.microbitv2];
sensorsAll.joycar = [sensors.key.joycar, sensors.ultrasonic.joycar, sensors.infrared.joycar, sensors.line.joycar, sensors.logotouch.joycar, sensors.sound.joycar, sensors.compass.joycar, sensors.timer.joycar, sensors.encoder.joycar, sensors.temperature.joycar, sensors.accelerometer.joycar, sensors.light.joycar, sensors.pin.joycar, sensors.gesture.joycar];
sensorsAll.arduino = [sensors.out.arduino, sensors.key.arduino, sensors.timer.arduino, sensors.temperature.arduino, sensors.ultrasonic.arduino, sensors.light.arduino, sensors.moisture.arduino, sensors.potentiometer.arduino, sensors.infrared.arduino, sensors.humidity.arduino, sensors.motion.arduino, sensors.pulse.arduino, sensors.drop.arduino, sensors.rfid.arduino, sensors.gyro.arduino, sensors.accelerometer.arduino];
sensorsAll.festobionic = [sensors.timer.arduino];
sensorsAll.festobionicflower = [sensors.timer.festobionicflower, sensors.touch.festobionicflower, sensors.light.festobionicflower];
sensorsAll.nao = [sensors.touch.nao, sensors.accelerometer.nao, sensors.gyro.nao, sensors.ultrasonic.nao, sensors.fsr.nao, sensors.electriccurrent.nao, sensors.detectface.nao, sensors.detectmark.nao];
sensorsAll.vorwerk = [sensors.touch.vorwerk, sensors.accelerometer.vorwerk, sensors.ultrasonic.vorwerk, sensors.wall.vorwerk, sensors.drop_off.vorwerk];
sensorsAll.wedo = [sensors.key.wedo, sensors.gyro.wedo, sensors.infrared.wedo, sensors.timer.wedo];
sensorsAll.sensebox = [sensors.key.sensebox, sensors.light.sensebox, sensors.potentiometer.sensebox, sensors.sound.sensebox, sensors.ultrasonic.sensebox, sensors.humidity.sensebox, sensors.temperature.sensebox, sensors.lightveml.sensebox, sensors.accelerometer.sensebox, sensors.particle.sensebox, sensors.gps.sensebox, sensors.timer.sensebox, sensors.environmental.sensebox];
sensorsAll.edison = [sensors.key.edison, sensors.infrared.edison, sensors.irseeker.edison, sensors.light.edison, sensors.sound.edison];
sensorsAll.nano33ble = [sensors.out.nano33ble, sensors.key.nano33ble, sensors.timer.nano33ble, sensors.temperature.nano33ble, sensors.ultrasonic.nano33ble, sensors.light.nano33ble, sensors.moisture.nano33ble, sensors.potentiometer.nano33ble, sensors.infrared.nano33ble, sensors.humidity.nano33ble, sensors.motion.nano33ble, sensors.pulse.nano33ble, sensors.drop.nano33ble, sensors.rfid.nano33ble, sensors.gyro.nano33ble, sensors.accelerometer.arduino];
sensorsAll.rob3rta = [sensors.pintouch.rob3rta, sensors.infrared.rob3rta, sensors.temperature.rob3rta, sensors.timer.rob3rta];
sensorsAll.thymio = [sensors.key.thymio, sensors.infrared.thymio, sensors.irhorizontal.thymio, sensors.tap.thymio, sensors.sound.thymio, sensors.timer.thymio, sensors.accelerometer.thymio, sensors.temperature.thymio];
sensorsAll.robotino = [sensors.touch.robotino, sensors.infrared.robotino, sensors.odometry.robotino, sensors.timer.robotino, sensors.optical.robotino, sensors.detectmark.robotino, sensors.out.robotino, sensors.camera.robotino];
sensorsAll.spike = [sensors.touch.spike, sensors.colour.spike, sensors.ultrasonic.spike, sensors.key.spike, sensors.timer.spike, sensors.gesture.spike, sensors.gyro.spike];

function initSensors() {
    for (var sensor in sensors) {
        if (sensors.hasOwnProperty(sensor)) {
            Blockly.Blocks['robSensors_' + sensor + '_getSample'] = {
                sensor: sensor, init: function() {
                    Blockly.Blocks['robSensors_generic'].init.call(this, sensors[this.sensor][this.workspace.device]);
                }
            };
        }
    }
}

initSensors();

Blockly.Blocks['robSensors_getSample'] = {
    init: function() {
        Blockly.Blocks['robSensors_generic_all'].init.call(this, sensorsAll[this.workspace.device]);
    }
};
