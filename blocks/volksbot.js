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

goog.provide('Blockly.Blocks.volksbot');

goog.require('Blockly.Blocks');

Blockly.Blocks['start'] = {
    init: function() {
        this.jsonInit({
            'message0': '%1',
            'args0': [{
                'type': 'field_image',
                'src': Blockly.Css.mediaPath_ + '/svgs/solid/circle.svg',
                'width': 30,
                'height': 30,
                'alt': '*',
                'flipRtl': false
            }],
            'nextStatement': null,
            'colour': '#44b59d',
            'tooltip': '',
            'helpUrl': ''
        });
    }
};
Blockly.Blocks['step_forward'] = {
    init: function() {
        this.jsonInit({
            'message0': '%1',
            'args0': [{
                'type': 'field_image',
                'src': Blockly.Css.mediaPath_ + '/svgs/solid/arrow-up.svg',
                'width': 30,
                'height': 30,
                'alt': '*',
                'flipRtl': false
            }],
            'previousStatement': null,
            'nextStatement': null,
            'colour': Blockly.CAT_ACTION_RGB,
            'tooltip': '',
            'helpUrl': ''
        });
    }
};
Blockly.Blocks['step_backward'] = {
    init: function() {
        this.jsonInit({
            'message0': '%1',
            'args0': [{
                'type': 'field_image',
                'src': Blockly.Css.mediaPath_ + '/svgs/solid/arrow-down.svg',
                'width': 30,
                'height': 30,
                'alt': '*',
                'flipRtl': false
            }],
            'previousStatement': null,
            'nextStatement': null,
            'colour': Blockly.CAT_ACTION_RGB,
            'tooltip': '',
            'helpUrl': ''
        });
    }
};

Blockly.Blocks['rotate_right'] = {
    init: function() {
        this.jsonInit({
            'message0': '%1',
            'args0': [{
                'type': 'field_image',
                'src': Blockly.Css.mediaPath_ + '/svgs/solid/rotate-right.svg',
                'width': 30,
                'height': 30,
                'alt': '*',
                'flipRtl': false
            }],
            'previousStatement': null,
            'nextStatement': null,
            'colour': Blockly.CAT_ACTION_RGB,
            'tooltip': '',
            'helpUrl': ''
        });
    }
};

Blockly.Blocks['rotate_left'] = {
    init: function() {
        this.jsonInit({
            'message0': '%1',
            'args0': [{
                'type': 'field_image',
                'src': Blockly.Css.mediaPath_ + '/svgs/solid/rotate-left.svg',
                'width': 30,
                'height': 30,
                'alt': '*',
                'flipRtl': false
            }],
            'previousStatement': null,
            'nextStatement': null,
            'colour': Blockly.CAT_ACTION_RGB,
            'tooltip': '',
            'helpUrl': ''
        });
    }
};

Blockly.Blocks['step_dummy'] = {
    init: function() {
        this.jsonInit({
            'message0': '%1',
            'args0': [{
                'type': 'field_image',
                'src': Blockly.Css.mediaPath_ + '/svgs/solid/step-dummy.svg',
                'width': 30,
                'height': 30,
                'alt': '*',
                'flipRtl': false
            }],
            'previousStatement': null,
            'movable': false,
            'colour': '#97d700',
            'tooltip': '',
            'helpUrl': ''
        });
    },
    onchange: function() {
        this.unselect();
        if (!Blockly.hasClass_(this.svgPath_, 'dummyBlock')) {
            Blockly.addClass_(this.svgPath_, 'dummyBlock');
        }
    }
};

Blockly.Blocks['t_step_dummy'] = {
    init: function() {
        this.jsonInit({
            'message0': '%1',
            'args0': [{
                'type': 'field_image',
                'src': Blockly.Css.mediaPath_ + '/svgs/solid/step-dummy.svg',
                'width': 56,
                'height': 15,
                'alt': '*',
                'flipRtl': false
            }],
            'nextStatement': null,
            'previousStatement': null,
            'movable': false,
            'colour': '#97d700',
            'tooltip': '',
            'helpUrl': ''
        });
    },
    onchange: function() {
        this.unselect();
        if (!Blockly.hasClass_(this.svgPath_, 'dummyBlock')) {
            Blockly.addClass_(this.svgPath_, 'dummyBlock');
        }
    }
};

Blockly.Blocks['t_start'] = {
    init: function() {
        this.jsonInit({
            'message0': '%1 Start',
            'args0': [{
                'type': 'field_image',
                'src': Blockly.Css.mediaPath_ + '/svgs/solid/circle.svg',
                'width': 15,
                'height': 15,
                'alt': '*',
                'flipRtl': false
            }],
            'nextStatement': null,
            'colour': '#44b59d',
            'tooltip': '',
            'helpUrl': ''
        });
    }
};

Blockly.Blocks['t_step_forward'] = {
    init: function() {
        this.jsonInit({
            'message0': '%1 Fahre %2 Feld vorwärts',
            'args0': [{
                'type': 'field_image',
                'src': Blockly.Css.mediaPath_ + '/svgs/solid/arrow-up.svg',
                'width': 15,
                'height': 15,
                'alt': '*',
                'flipRtl': false
            }, {
                'type': 'field_dropdown',
                'name': 'NUMBER',
                'options': [['1', '1'], ['2', '2'], ['3', '3']]
            }],
            'previousStatement': null,
            'nextStatement': null,
            'colour': Blockly.CAT_ACTION_RGB,
            'tooltip': '',
            'helpUrl': ''
        });
        this.getField('NUMBER').validator_ = this.validateDropdown;
    },
    onchange: function(event) {
        if (!this.workspace || this.workspace.isFlyout || (event.type !== Blockly.Events.UI && event.type !== Blockly.Events.CREATE)) {
            return;
        }
        if (event.type == Blockly.Events.CHANGE || event.type == Blockly.Events.CREATE) {
            if (this.getField('NUMBER').getValue() > 1) {
                this.inputList[0].fieldRow[3].setText('Felder vorwärts');
            } else {
                this.inputList[0].fieldRow[3].setText('Feld vorwärts');
            }
        }
    }
};
Blockly.Blocks['t_step_backward'] = {
    init: function() {
        this.jsonInit({
            'message0': '%1 Fahre %2 Schritt zurück',
            'args0': [{
                'type': 'field_image',
                'src': Blockly.Css.mediaPath_ + '/svgs/solid/arrow-down.svg',
                'width': 15,
                'height': 15,
                'alt': '*',
                'flipRtl': false
            }, {
                'type': 'field_dropdown',
                'name': 'NUMBER',
                'options': [['1', '1'], ['2', '2'], ['3', '3']]
            }],
            'previousStatement': null,
            'nextStatement': null,
            'colour': Blockly.CAT_ACTION_RGB,
            'tooltip': '',
            'helpUrl': ''
        });
    },
    onchange: function(event) {
        if (event.type == Blockly.Events.CHANGE || event.type == Blockly.Events.CREATE) {
            if (this.getField('NUMBER').getValue() > 1) {
                this.inputList[0].fieldRow[3].setText('Schritte rückwärts');
            } else {
                this.inputList[0].fieldRow[3].setText('Schritt rückwärts');
            }
        }
    }
};

Blockly.Blocks['t_rotate_right'] = {
    init: function() {
        this.jsonInit({
            'message0': '%1 Drehe rechts',
            'args0': [{
                'type': 'field_image',
                'src': Blockly.Css.mediaPath_ + '/svgs/solid/rotate-right.svg',
                'width': 15,
                'height': 15,
                'alt': '*',
                'flipRtl': false
            }],
            'previousStatement': null,
            'nextStatement': null,
            'colour': Blockly.CAT_ACTION_RGB,
            'tooltip': '',
            'helpUrl': ''
        });
    }
};

Blockly.Blocks['t_rotate_left'] = {
    init: function() {
        this.jsonInit({
            'message0': '%1 Drehe links',
            'args0': [{
                'type': 'field_image',
                'src': Blockly.Css.mediaPath_ + '/svgs/solid/rotate-left.svg',
                'width': 15,
                'height': 15,
                'alt': '*',
                'flipRtl': false
            }],
            'previousStatement': null,
            'nextStatement': null,
            'colour': Blockly.CAT_ACTION_RGB,
            'tooltip': '',
            'helpUrl': ''
        });
    }
};

Blockly.Blocks['t_collect_color'] = {
    init: function() {
        this.jsonInit({
            'message0': '%1 Sammle %2',
            'args0': [{
                'type': 'field_image',
                'src': Blockly.Css.mediaPath_ + '/svgs/solid/download.svg',
                'width': 15,
                'height': 15,
                'alt': '*',
                'flipRtl': false
            }, {
                'type': 'field_dropdown',
                'name': 'COLOR',
                'options': [['Grün', 'green']]
            }],
            'previousStatement': null,
            'nextStatement': null,
            'colour': Blockly.CAT_ACTION_RGB,
            'tooltip': '',
            'helpUrl': ''
        });
    }
};