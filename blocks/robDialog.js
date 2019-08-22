/**
 * @fileoverview Brick blocks for EV3.
 * @requires Blockly.Blocks
 * @author Beate
 */
'use strict';

goog.provide('Blockly.Blocks.robDialog');

goog.require('Blockly.Blocks');

Blockly.Blocks['robConf_intent'] = {
    init: function() {
        var name = Blockly.RobConfig.findLegalName('intentName', this);
        this.nameOld = name;
        this.validateName(name);
        var nameField = new Blockly.FieldTextInput(name, this.validateName);
        this.setColour(Blockly.CAT_DIALOG_RGB);
        this.setInputsInline(false);
        this.setMutatorPlus(new Blockly.MutatorPlus(this));
        this.appendDummyInput().appendField(new Blockly.FieldLabel('intent')).setAlign(Blockly.ALIGN_RIGHT).appendField(nameField, 'NAME');
        this.appendDummyInput('SAMPLE1').appendField(new Blockly.FieldLabel('Beispiel 1')).appendField(new Blockly.FieldTextInput('ein Beispiel'), 'SAMPLE1');
        this.sampleCount_ = 1;
        this.confBlock = 'intent';
        var that = this;
        this.getConfigDecl = function() {
            return {
                'type': 'intent',
                'name': that.getFieldValue('NAME')
            };
        };
    },
    validateName: function(name) {
        var block = this.sourceBlock_ || this;
        name = name.replace(/[\s\xa0]+/g, '').replace(/^ | $/g, '');
        // no name set -> invalid
        if (name === '')
            return null;
        if (!name.match(/^[a-zA-Z][a-zA-Z_$0-9]*$/))
            return null;
        // Ensure two identically-named variables don't exist.
        name = Blockly.RobConfig.findLegalName(name, block);
        Blockly.RobConfig.renameConfig(block, block.nameOld, name, Blockly.Workspace.getByContainer('blocklyDiv'));
        block.nameOld = name;
        return name;
    },
    mutationToDom: function() {
        if (!this.sampleCount_) {
            return null;
        }
        var container = document.createElement('mutation');
        if (this.sampleCount_) {
            container.setAttribute('items', this.sampleCount_);
        }
        return container;
    },
    domToMutation: function(xmlElement) {
        var sampleCount = parseInt(xmlElement.getAttribute('items'), 10);
        if (sampleCount !== undefined) {
            this.sampleCount_ = sampleCount;
        }
        for (var x = 2; x <= this.sampleCount_; x++) {
            this.appendDummyInput('SAMPLE_NR' + x).appendField(new Blockly.FieldLabel('Beispiel ' + x)).appendField(new Blockly.FieldTextInput(
                'noch ein Beispiel'), 'SAMPLE' + x);
        }
        if (this.sampleCount_ >= 2) {
            this.setMutatorMinus(new Blockly.MutatorMinus(this));
        }
    },
    updateShape_: function(num) {
        Blockly.dragMode_ = Blockly.DRAG_NONE;
        if (num == 1) {
            this.sampleCount_++;
            this.appendDummyInput('SAMPLE_NR' + this.sampleCount_).appendField(new Blockly.FieldLabel('Beispiel ' + this.sampleCount_)).appendField(new Blockly.FieldTextInput(
                'noch ein Beispiel'), 'SAMPLE' + this.sampleCount_);
        } else if (num == -1 && this.sampleCount_ >= 2) {
            this.removeInput('SAMPLE_NR' + this.sampleCount_);
            this.sampleCount_--;
            this.render();
        }
        if (this.sampleCount_ >= 2) {
            if (this.sampleCount_ == 2) {
                this.setMutatorMinus(new Blockly.MutatorMinus(this));
                this.render();
            }
        } else {
            this.mutatorMinus.dispose();
            this.mutatorMinus = null;
            this.render();
        }
    },
    onDispose: function() {
        Blockly.RobConfig.disposeConfig(this);
    }
};

Blockly.Blocks['robConf_slot'] = {
    init: function() {
        var name = Blockly.RobConfig.findLegalName('slotName', this);
        this.nameOld = name;
        this.validateName(name);
        var nameField = new Blockly.FieldTextInput(name, this.validateName);
        this.setColour('#2682AD');
        this.setInputsInline(false);
        this.setMutatorPlus(new Blockly.MutatorPlus(this));
        this.appendDummyInput().appendField(new Blockly.FieldLabel('slot')).setAlign(Blockly.ALIGN_RIGHT).appendField(nameField, 'NAME');
        this.appendDummyInput('SAMPLE1').appendField(new Blockly.FieldLabel('Beispiel 1')).appendField(new Blockly.FieldTextInput('ein Beispiel'), 'SAMPLE1');
        this.sampleCount_ = 1;
        this.confBlock = 'slot';
        var that = this;
        this.getConfigDecl = function() {
            return {
                'type': 'slot',
                'name': that.getFieldValue('NAME')
            };
        };
    },
    validateName: Blockly.Blocks['robConf_intent'].validateName,
    domToMutation: Blockly.Blocks['robConf_intent'].domToMutation,
    mutationToDom: Blockly.Blocks['robConf_intent'].mutationToDom,
    updateShape_: Blockly.Blocks['robConf_intent'].updateShape_,
    onDispose: function() {
        Blockly.RobConfig.disposeConfig(this);
    }
};

//***********************************

Blockly.Blocks['robDialog_intent'] = {
    init: function() {
        this.confIntents = getConfigIntents('intent');
        this.setColour(Blockly.CAT_DIALOG_RGB);
        this.setInputsInline(false);
        this.setMutatorPlus(new Blockly.MutatorPlus(this));
        this.appendDummyInput().appendField(new Blockly.FieldLabel('intent')).setAlign(Blockly.ALIGN_RIGHT).appendField(this.confIntents, 'NAME');
        this.appendStatementInput('ELSE').appendField(Blockly.Msg.CONTROLS_IF_MSG_THEN);
        this.slotCount_ = 0;
    },
    dependConfig: function() {
        return {
            'type': 'intent',
            'dropDown': this.confIntents
        };
    },
    mutationToDom: function() {
        var container = document.createElement('mutation');
        if (this.slotCount_ !== undefined) {
            container.setAttribute('elseif', this.slotCount_);
        }
        return container;
    },
    domToMutation: function(xmlElement) {
        var slotCount = parseInt(xmlElement.getAttribute('elseif'), 10);
        if (slotCount !== undefined) {
            this.slotCount_ = slotCount;
        }
        if (this.slotCount_ !== 0) {
            this.removeInput('ELSE');
            for (var x = 1; x <= this.slotCount_; x++) {
                this.appendValueInput('SLOT_NR' + x).setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldLabel('slot'));
                this.appendStatementInput('DO' + x).appendField(Blockly.Msg.CONTROLS_IF_MSG_THEN);
            }
            this.appendStatementInput('ELSE').appendField(Blockly.Msg.CONTROLS_IF_MSG_ELSE);
            this.setMutatorMinus(new Blockly.MutatorMinus(this));
        }
    },
    updateShape_: function(num) {
        Blockly.dragMode_ = Blockly.DRAG_NONE;
        if (num == 1) {
            this.slotCount_++;
            var elseConnectionTarget = this.getInput('ELSE') && this.getInput('ELSE').connection.targetConnection;
            this.removeInput('ELSE');
            this.appendValueInput('SLOT_NR' + this.slotCount_).setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldLabel('slot'));
            this.appendStatementInput('DO' + this.slotCount_).appendField(Blockly.Msg.CONTROLS_IF_MSG_THEN);
            this.appendStatementInput('ELSE').appendField(Blockly.Msg.CONTROLS_IF_MSG_ELSE);
            if (elseConnectionTarget) {
                this.getInput('ELSE').connection.connect(elseConnectionTarget);
            }
        } else if (num == -1 && this.slotCount_ >= 1) {
            var stackConnectionTarget = this.getInput('ELSE').connection.targetConnection;
            this.removeInput('ELSE');
            this.removeInput('DO' + this.slotCount_);
            this.removeInput('SLOT_NR' + this.slotCount_);
            this.slotCount_--;
            if (this.slotCount_ === 0) {
                this.appendStatementInput('ELSE').appendField(Blockly.Msg.CONTROLS_IF_MSG_THEN);
            } else {
                this.appendStatementInput('ELSE').appendField(Blockly.Msg.CONTROLS_IF_MSG_ELSE);
            }
            this.render();
        }
        if (this.slotCount_ >= 1) {
            if (this.slotCount_ == 1) {
                this.setMutatorMinus(new Blockly.MutatorMinus(this));
                this.render();
            }
        } else {
            this.mutatorMinus.dispose();
            this.mutatorMinus = null;
            this.render();
        }
    }
};

Blockly.Blocks['robDialog_slot'] = {
    init: function() {
        this.confSlots = getConfigIntents('slot');
        this.setColour('#2682AD');
        this.setOutput(true, 'String');
        this.appendDummyInput().appendField(this.confSlots, 'SLOT');
    },
    dependConfig: function() {
        return {
            'type': 'slot',
            'dropDown': this.confSlots
        };
    }
};

function getConfigIntents(actorName) {
    var ports = [];
    var container = Blockly.Workspace.getByContainer('bricklyDiv');
    if (container) {
        var blocks = Blockly.Workspace.getByContainer('bricklyDiv').getAllBlocks();
        for (var x = 0; x < blocks.length; x++) {
            var func = blocks[x].getConfigDecl;
            if (func) {
                var config = func.call(blocks[x]);
                if (config.type === actorName) {
                    ports.push([config.name, config.name]);
                }
            }
        }
    }

    if (ports.length === 0) {
        ports.push([Blockly.Msg.CONFIGURATION_NO_PORT || Blockly.checkMsgKey('CONFIGURATION_NO_PORT'),
            (Blockly.Msg.CONFIGURATION_NO_PORT || Blockly.checkMsgKey('CONFIGURATION_NO_PORT')).toUpperCase()]);
    }
    return new Blockly.FieldDropdown(ports);
};


