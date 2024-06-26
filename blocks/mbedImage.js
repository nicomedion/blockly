/**
 * @fileoverview Action blocks for EV3.
 * @requires Blockly.Blocks
 * @author Beate
 */
'use strict';

goog.provide('Blockly.Blocks.mbedImage');

goog.require('Blockly.Blocks');

/**
 * @lends Block
 */

Blockly.Blocks['mbedImage_image'] = {
    /**
     * Represents an image.
     * 
     * @constructs mbedImage_image
     * @this.Blockly.Block
     * @returns immediately
     * @memberof Block
     */
    init : function() {
        this.setColour(Blockly.CAT_IMAGE_RGB);
        var tmpInputLabel = this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT);
        var rowLength = this.workspace.device === 'mbot' ? 16 : 5;
        var colLength = this.workspace.device === 'mbot' ? 8 : 5;
        tmpInputLabel.appendField(new Blockly.FieldLabel("0", "monospace"));
        for (var i = 1; i < rowLength; i++) {
            if (i >= 10)
                tmpInputLabel.appendField(new Blockly.FieldLabel(" " + i, "monospace"));
            else
                tmpInputLabel.appendField(new Blockly.FieldLabel("  " + i, "monospace"));
        }
        var that = this;
        for (var i = 0; i < colLength; i++) {
            var tmpInputRow = this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT);
            tmpInputRow.appendField(new Blockly.FieldLabel("" + i, "monospace"));
            for (var j = 0; j < rowLength; j++) {
                tmpInputRow.appendField(new Blockly.FieldPixelbox(' ', this.validate_), "P" + j + i);
            }
        }
        this.setOutput(true, 'Image');
        this.setTooltip(Blockly.Msg.IMAGE_TOOLTIP);
    },
    validate_ : function(p) {
        p = p.trim();
        if (p == '' || p == '  ' || p.substring(1, 1) == ' ') {
            if (Blockly.FieldTextInput.htmlInput_)
                Blockly.FieldTextInput.htmlInput_.value = '#';
            return '';
        } else if (p.substring(0, 1) == '#') {
            if (Blockly.FieldTextInput.htmlInput_)
                Blockly.FieldTextInput.htmlInput_.value = '';
            return '#';
        } else if (p.substring(0, 1) == '0') {
            return '';
        } else if (p.substring(0, 1) == '9') {
            return '#';
        } else if (p.match(/^[1-8#]$/) && (this.sourceBlock_.workspace.device === 'calliope' ||this.sourceBlock_.workspace.device === 'spike')) {
            return p;
        } else if (p.substring(0, 1).match(/^[1-8#]/) && (this.sourceBlock_.workspace.device === 'calliope' ||this.sourceBlock_.workspace.device === 'spike')) {
            return p.substring(0, 1);
        } else {
            return null;
        }
    }
};

Blockly.Blocks['image_image'] = Blockly.Blocks['mbedImage_image'];

Blockly.Blocks['mbedImage_shift'] = {
    init : function() {
        this.jsonInit({
            "message0" : Blockly.Msg.IMAGE_SHIFT + " %1 %2 %3",
            "args0" : [ {
                "type" : "input_value",
                "name" : "A",
                "check" : "Image"
            }, {
                "type" : "field_dropdown",
                "name" : "OP",
                "options" : [ [ '↑', 'UP' ], [ '↓', 'DOWN' ], [ '→', 'RIGHT' ], [ '←', 'LEFT' ] ]
            }, {
                "type" : "input_value",
                "name" : "B",
                "check" : "Number"
            } ],
            "inputsInline" : true,
            "output" : "Image",
            "colour" : Blockly.CAT_IMAGE_RGB,
            "tooltip" : Blockly.Msg.IMAGE_SHIFT_TOOLTIP
        });
    }
};

Blockly.Blocks['mbedImage_invert'] = {
    /**
     * Block to invert an image.
     * 
     * @this Blockly.Block
     */
    init : function() {
        this.jsonInit({
            "message0" : Blockly.Msg.IMAGE_INVERT + " %1",
            "args0" : [ {
                "type" : "input_value",
                "name" : "VAR",
                "check" : "Image"
            } ],
            "output" : "Image",
            "colour" : Blockly.CAT_IMAGE_RGB,
            "tooltip" : Blockly.Msg.IMAGE_INVERT_TOOLTIP
        });
    }
};

// This is just a draft. TODO if or how many images we would like to provide.
Blockly.Blocks['mbedImage_get_image'] = {
    /**
     * Block to get a predefined image.
     * 
     * @this Blockly.Block
     */
    init : function() {
        var options = [ [ 'heart', 'HEART' ], [ 'heart small', 'HEART_SMALL' ], [ 'happy', 'HAPPY' ], [ 'smile', 'SMILE' ], [ 'confused', 'CONFUSED' ],
                [ 'angry', 'ANGRY' ], [ 'asleep', 'ASLEEP' ], [ 'surprised', 'SURPRISED' ], [ 'silly', 'SILLY' ], [ 'fabulous', 'FABULOUS' ],
                [ 'meh!', 'MEH' ], [ 'yes', 'YES' ], [ 'no', 'NO' ], [ 'triangle', 'TRIANGLE' ], [ 'triangle left', 'TRIANGLE_LEFT' ],
                [ 'chessboard', 'CHESSBOARD' ], [ 'diamond', 'DIAMOND' ], [ 'diamond small', 'DIAMOND_SMALL' ], [ 'square', 'SQUARE' ],
                [ 'square small', 'SQUARE_SMALL' ], [ 'rabbit', 'RABBIT' ], [ 'cow', 'COW' ], [ 'music crotchet', 'MUSIC_CROTCHET' ],
                [ 'music quaver', 'MUSIC_QUAVER' ], [ 'music quavers', 'MUSIC_QUAVERS' ], [ 'pitchfork', 'PITCHFORK' ], [ 'xmas', 'XMAS' ],
                [ 'pacman', 'PACMAN' ], [ 'target', 'TARGET' ], [ 'T-shirt', 'TSHIRT' ], [ 'rollerskate', 'ROLLERSKATE' ], [ 'duck', 'DUCK' ],
                [ 'house', 'HOUSE' ], [ 'tortoise', 'TORTOISE' ], [ 'butterfly', 'BUTTERFLY' ], [ 'stickfigure', 'STICKFIGURE' ], [ 'ghost', 'GHOST' ],
                [ 'sword', 'SWORD' ], [ 'giraffe', 'GIRAFFE' ], [ 'skull', 'SKULL' ], [ 'umbrella', 'UMBRELLA' ], [ 'snake', 'SNAKE' ], [ 'sad', 'SAD' ] ];
        var dropdown = new Blockly.FieldDropdownImage(options, '/dropDowns/', 24, 24, 'png');
        this.setColour(Blockly.CAT_IMAGE_RGB);
        this.appendDummyInput().appendField(dropdown, 'IMAGE');
        this.setOutput(true, 'Image');
        var thisBlock = this;
        this.setTooltip(function() {
            var mode = thisBlock.getFieldValue('IMAGE');
            return Blockly.Msg["IMAGE_GET_TOOLTIP_" + mode];
        });
    }
};

Blockly.Blocks['image_get_image'] = Blockly.Blocks['mbedImage_get_image'];
