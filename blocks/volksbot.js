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
            "message0": "%1",
            "args0": [{
                "type": "field_image",
                "src": Blockly.Css.mediaPath_ + "/svgs/solid/circle.svg",
                "width": 30,
                "height": 30,
                "alt": "*",
                "flipRtl": false
            }],
            "nextStatement": null,
            "colour": "#44b59d",
            "tooltip": "",
            "helpUrl": ""
        })
    }
};
/**
 * Common HSV hue for all blocks in this category.
 */
Blockly.Blocks['step_forward'] = {
    init: function() {
        this.jsonInit({
            "message0": "%1",
            "args0": [{
                "type": "field_image",
                "src": Blockly.Css.mediaPath_ + "/svgs/solid/arrow-up.svg",
                "width": 30,
                "height": 30,
                "alt": "*",
                "flipRtl": false
            }],
            "previousStatement": null,
            "nextStatement": null,
            "colour": Blockly.CAT_ACTION_RGB,
            "tooltip": "",
            "helpUrl": ""
        })
    }
};
Blockly.Blocks['step_backward'] = {
    init: function() {
        this.jsonInit({
            "message0": "%1",
            "args0": [{
                "type": "field_image",
                "src": Blockly.Css.mediaPath_ + "/svgs/solid/arrow-down.svg",
                "width": 30,
                "height": 30,
                "alt": "*",
                "flipRtl": false
            }],
            "previousStatement": null,
            "nextStatement": null,
            "colour": Blockly.CAT_ACTION_RGB,
            "tooltip": "",
            "helpUrl": ""
        })
    }
};

Blockly.Blocks['rotate_right'] = {
    init: function() {
        this.jsonInit({
            "message0": "%1",
            "args0": [{
                "type": "field_image",
                "src": Blockly.Css.mediaPath_ + "/svgs/solid/rotate-right.svg",
                "width": 30,
                "height": 30,
                "alt": "*",
                "flipRtl": false
            }],
            "previousStatement": null,
            "nextStatement": null,
            "colour": Blockly.CAT_ACTION_RGB,
            "tooltip": "",
            "helpUrl": ""
        })
    }
};

Blockly.Blocks['rotate_left'] = {
    init: function() {
        this.jsonInit({
            "message0": "%1",
            "args0": [{
                "type": "field_image",
                "src": Blockly.Css.mediaPath_ + "/svgs/solid/rotate-left.svg",
                "width": 30,
                "height": 30,
                "alt": "*",
                "flipRtl": false
            }],
            "previousStatement": null,
            "nextStatement": null,
            "colour": Blockly.CAT_ACTION_RGB,
            "tooltip": "",
            "helpUrl": ""
        })
    }
};

Blockly.Blocks['step_dummy'] = {
    init: function() {
        this.jsonInit({
            "message0": "%1",
            "args0": [{
                "type": "field_image",
                "src": Blockly.Css.mediaPath_ + "/svgs/solid/step-dummy.svg",
                "width": 30,
                "height": 30,
                "alt": "*",
                "flipRtl": false
            }],
            "previousStatement": null,
            "movable": false,
            "colour": "#97d700",
            "tooltip": "",
            "helpUrl": ""
        });
    },
    onchange: function() {
        this.unselect();
        if (!Blockly.hasClass_(this.svgPath_, 'dummyBlock')) {
            Blockly.addClass_(this.svgPath_, 'dummyBlock');
        }
    }
};