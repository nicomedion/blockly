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
 * @fileoverview Utility functions for handling procedures.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.Procedures');

// TODO(scr): Fix circular dependencies
// goog.require('Blockly.Block');
goog.require('Blockly.Field');
goog.require('Blockly.Names');
goog.require('Blockly.Workspace');


/**
 * Category to separate procedure names from variables and generated functions.
 */
Blockly.Procedures.NAME_TYPE = 'PROCEDURE';

/**
 * Find all user-created procedure definitions in a workspace.
 * @param {!Blockly.Workspace} root Root workspace.
 * @return {!Array.<!Array.<!Array>>} Pair of arrays, the
 *     first contains procedures without return variables, the second with.
 *     Each procedure is defined by a three-element list of name, parameter
 *     list, and return value boolean.
 */
Blockly.Procedures.allProcedures = function(root) {
  var blocks = root.getAllBlocks();
  var proceduresReturn = [];
  var proceduresNoReturn = [];
  for (var i = 0; i < blocks.length; i++) {
    if (blocks[i].getProcedureDef) {
      var tuple = blocks[i].getProcedureDef();
      if (tuple) {
        if (tuple[2]) {
          proceduresReturn.push(tuple);
        } else {
          proceduresNoReturn.push(tuple);
        }
      }
    }
  }
  proceduresNoReturn.sort(Blockly.Procedures.procTupleComparator_);
  proceduresReturn.sort(Blockly.Procedures.procTupleComparator_);
  return [proceduresNoReturn, proceduresReturn];
};

/**
 * Comparison function for case-insensitive sorting of the first element of
 * a tuple.
 * @param {!Array} ta First tuple.
 * @param {!Array} tb Second tuple.
 * @return {number} -1, 0, or 1 to signify greater than, equality, or less than.
 * @private
 */
Blockly.Procedures.procTupleComparator_ = function(ta, tb) {
  return ta[0].toLowerCase().localeCompare(tb[0].toLowerCase());
};

/**
 * Ensure two identically-named procedures don't exist.
 * @param {string} name Proposed procedure name.
 * @param {!Blockly.Block} block Block to disambiguate.
 * @return {string} Non-colliding name.
 */
Blockly.Procedures.findLegalName = function(name, block) {
  if (block.isInFlyout) {
    // Flyouts can have multiple procedures called 'do something'.
    return name;
  }
  while (!Blockly.Procedures.isNameAvailable(name, block.workspace, block)) {
    // Collision with another procedure.
    var r = name.match(/^(.*?)(\d+)$/);
    if (!r) {
      name += '2';
    } else {
      name = r[1] + (parseInt(r[2], 10) + 1);
    }
  }
  return name;
};

/**
 * Does this procedure have a legal name, meaning no other procedure has been
 * assigned this name yet?  Illegal names include names of procedures already defined.
 * @param {string} name The questionable name.
 * @param {!Blockly.Workspace} workspace The workspace to scan for collisions.
 * @param {Blockly.Block=} opt_exclude Optional block to exclude from
 *     comparisons (one doesn't want to collide with oneself).
 * @return {boolean} True if the name is available.
 */
Blockly.Procedures.isNameAvailable = function(name, workspace, opt_exclude) {
  var blocks = workspace.getAllBlocks();
  // Iterate through every block and check the name.
  for (var i = 0; i < blocks.length; i++) {
    if (blocks[i] == opt_exclude) {
      continue;
    }
    if (blocks[i].getProcedureDef) {
      var procName = blocks[i].getProcedureDef();
      if (Blockly.Names.equals(procName[0], name)) {
        return false;
      }
    }
  }
  return true;
};

/**
 * Rename a procedure.  Called by the editable field.
 * @param {string} text The proposed new name.
 * @return {string} The accepted name.
 * @this {!Blockly.Field}
 */
Blockly.Procedures.rename = function(text) {
  // Strip leading and trailing whitespace.  Beyond this, all names are legal.
  text = text.replace(/^[\s\xa0]+|[\s\xa0]+$/g, '');
 
  // Ensure two identically-named procedures don't exist.
  text = Blockly.Procedures.findLegalName(text, this.sourceBlock_);
  // Rename any callers.
  
  var blocks = this.sourceBlock_.workspace.getAllBlocks();
  for (var i = 0; i < blocks.length; i++) {
    if (blocks[i].renameProcedure) {
      blocks[i].renameProcedure(this.text_, text);
    }
  }
  return text;
};

/**
 * Check and rename a procedure.  Called by the editable field.
 * @param {string} text The proposed new name.
 * @return {string} The accepted name.
 * @this {!Blockly.Field}
 */
Blockly.Procedures.robRename = function(text) {
 // Strip leading and trailing whitespace.  Beyond this, all names are legal.
  text = text.replace(/^[\s\xa0]+|[\s\xa0]+$/g, '');
  // micropython cannot compile functions with capital letter first
  // text = text.substring(0, 1).toLowerCase() + text.substring(1);
  if (text === '')
    return null;
    // java convention naming?
  if (!text.match(/^[a-z][a-zA-Z0-9_]*$/))
    return null;
  // Ensure two identically-named procedures don't exist.
  var legalName = Blockly.Procedures.findLegalName(text, this.sourceBlock_);
  var oldName = this.text_;
  if (oldName != text && oldName != legalName) {
    Blockly.FieldTextInput.htmlInput_.value = legalName;
    // Rename any callers.  
    var blocks = this.sourceBlock_.workspace.getAllBlocks();
    for (var i = 0; i < blocks.length; i++) {
      if (blocks[i].renameProcedure) {
        blocks[i].renameProcedure(oldName, legalName);
      }
    }
  }
  return legalName;
};

/**
 * Construct the blocks required by the flyout for the procedure category.
 * @param {!Blockly.Workspace} workspace The workspace contianing procedures.
 * @return {!Array.<!Element>} Array of XML block elements.
 */
Blockly.Procedures.flyoutCategory = function(workspace) {
  var xmlList = [];
  if (!workspace.variableDeclaration) {
    if (Blockly.Blocks['procedures_defnoreturn']) {
      // <block type="procedures_defnoreturn" gap="16"></block>
      var block = goog.dom.createDom('block');
      block.setAttribute('type', 'procedures_defnoreturn');
      block.setAttribute('gap', 16);
      xmlList.push(block);
    }
    if (Blockly.Blocks['procedures_defreturn']) {
      // <block type="procedures_defreturn" gap="16"></block>
      var block = goog.dom.createDom('block');
      block.setAttribute('type', 'procedures_defreturn');
      block.setAttribute('gap', 16);
      xmlList.push(block);
    }
    if (Blockly.Blocks['procedures_ifreturn']) {
      // <block type="procedures_ifreturn" gap="16"></block>
      var block = goog.dom.createDom('block');
      block.setAttribute('type', 'procedures_ifreturn');
      block.setAttribute('gap', 16);
      xmlList.push(block);
    }
  } else {
    if (Blockly.Blocks['robProcedures_defnoreturn']) {
      // <block type="procedures_defnoreturn" gap="16"></block>
      var block = goog.dom.createDom('block');
      block.setAttribute('type', 'robProcedures_defnoreturn');
      block.setAttribute('gap', 16);
      xmlList.push(block);
    }
    if (workspace.device !== "thymio") {
      if (Blockly.Blocks['robProcedures_defreturn']) {
        // <block type="procedures_defreturn" gap="16"></block>
        var block = goog.dom.createDom('block');
        block.setAttribute('type', 'robProcedures_defreturn');
        block.setAttribute('gap', 16);
        xmlList.push(block);
      }
      if (Blockly.Blocks['robProcedures_ifreturn']) {
        // <block type="procedures_ifreturn" gap="16"></block>
        var block = goog.dom.createDom('block');
        block.setAttribute('type', 'robProcedures_ifreturn');
        block.setAttribute('gap', 16);
        xmlList.push(block);
      }
    }
  }
  if (xmlList.length) {
    // Add slightly larger gap between system blocks and user calls.
    xmlList[xmlList.length - 1].setAttribute('gap', 24);
  }

  function populateProcedures(procedureList, templateName) {
    for (var i = 0; i < procedureList.length; i++) {
      var name = procedureList[i][0];
      var args = procedureList[i][1];
      // <block type="procedures_callnoreturn" gap="16">
      //   <mutation name="do something">
      //     <arg name="x"></arg>
      //   </mutation>
      // </block>
      var block = goog.dom.createDom('block');
      block.setAttribute('type', templateName);
      block.setAttribute('gap', 16);
      var mutation = goog.dom.createDom('mutation');
      mutation.setAttribute('name', name);
      block.appendChild(mutation);
      if (!workspace.variableDeclaration) {
        for (var t = 0; t < args.length; t++) {
          var arg = goog.dom.createDom('arg');
          arg.setAttribute('name', args[t]);
          mutation.appendChild(arg);
        }
      } else {
        var declarations = procedureList[i][1].getDescendants();
        if (declarations) {
          for (var t = 0; t < declarations.length; t++) {
            if (declarations[t].getProcedureDef)
              continue;
            if (declarations[t].getVarDecl && declarations[t].type === "robLocalVariables_declare") {
              var arg = goog.dom.createDom('arg');
              arg.setAttribute('name', declarations[t].getVarDecl()[0]);
              arg.setAttribute('type', declarations[t].getType());
              mutation.appendChild(arg);
            } 
          }
        }
        if (templateName === 'robProcedures_callreturn') {
          var returnType = procedureList[i][1].returnType_;
          if (returnType) {
            mutation.setAttribute('output_type', returnType);
          }
        }
      }
      xmlList.push(block);
    }
  }
  var tuple = Blockly.Procedures.allProcedures(workspace);
  if (!workspace.variableDeclaration) {
    populateProcedures(tuple[0], 'procedures_callnoreturn');
    populateProcedures(tuple[1], 'procedures_callreturn');
  } else {
    populateProcedures(tuple[0], 'robProcedures_callnoreturn');
    populateProcedures(tuple[1], 'robProcedures_callreturn');
  }
  return xmlList;
};

/**
 * Find all the callers of a named procedure.
 * @param {string} name Name of procedure.
 * @param {!Blockly.Workspace} workspace The workspace to find callers in.
 * @return {!Array.<!Blockly.Block>} Array of caller blocks.
 */
Blockly.Procedures.getCallers = function(name, workspace) {
  var callers = [];
  var blocks = workspace.getAllBlocks();
  // Iterate through every block and check the name.
  for (var i = 0; i < blocks.length; i++) {
    if (blocks[i].getProcedureCall) {
      var procName = blocks[i].getProcedureCall();
      // Procedure name may be null if the block is only half-built.
      if (procName && (Blockly.Names.equals(procName, name) || procName === 'robProcedures_ifreturn')) {
        callers.push(blocks[i]);
      }
    }
  }
  return callers;
};

/**
 * When a procedure definition is disposed of, find and dispose of all its
 *     callers.
 * @param {string} name Name of deleted procedure definition.
 * @param {!Blockly.Workspace} workspace The workspace to delete callers from.
 */
Blockly.Procedures.disposeCallers = function(name, workspace) {
  var callers = Blockly.Procedures.getCallers(name, workspace);
  for (var i = 0; i < callers.length; i++) {
    callers[i].dispose(true, false);
  }
};

/**
 * When a procedure definition changes its parameters, find and edit all its
 * callers.
 * @param {!Blockly.Block} defBlock Procedure definition block.
 */
Blockly.Procedures.mutateCallers = function(defBlock) {
  var oldRecordUndo = Blockly.Events.recordUndo;
  var name = defBlock.getProcedureDef()[0];
  var xmlElement = defBlock.mutationToDom(true);
  var callers = Blockly.Procedures.getCallers(name, defBlock.workspace);
  for (var i = 0, caller; caller = callers[i]; i++) {
    var oldMutationDom = caller.mutationToDom();
    var oldMutation = oldMutationDom && Blockly.Xml.domToText(oldMutationDom);
    caller.domToMutation(xmlElement);
    var newMutationDom = caller.mutationToDom();
    var newMutation = newMutationDom && Blockly.Xml.domToText(newMutationDom);
    if (oldMutation != newMutation) {
      // Fire a mutation on every caller block.  But don't record this as an
      // undo action since it is deterministically tied to the procedure's
      // definition mutation.
      Blockly.Events.recordUndo = false;
      Blockly.Events.fire(new Blockly.Events.Change(
          caller, 'mutation', null, oldMutation, newMutation));
      Blockly.Events.recordUndo = oldRecordUndo;
    }
  }
};

/**
 * Find all callers which use this specified variable and update them. 
 * @param {string} name Variable to update.
 * @param {string} type New data type.
 */
Blockly.Procedures.updateCallers = function(varName, varType, workspace, action, opt_procedure) {
  var procedure = opt_procedure || Blockly.Variables.getProcedureName(varName);
  if (procedure) {
    var callers = Blockly.Procedures.getCallers(procedure, workspace);
    for (var x = 0; x < callers.length; x++) {
      callers[x].updateProcedureParameters(varName, varType, action);
    }
  }
};

/**
 * Find the definition block for the named procedure.
 * @param {string} name Name of procedure.
 * @param {!Blockly.Workspace} workspace The workspace to search.
 * @return {Blockly.Block} The procedure definition block, or null not found.
 */
Blockly.Procedures.getDefinition = function(name, workspace) {
  var blocks = workspace.getAllBlocks();
  for (var i = 0; i < blocks.length; i++) {
    if (blocks[i].getProcedureDef) {
      var tuple = blocks[i].getProcedureDef();
      if (tuple && Blockly.Names.equals(tuple[0], name)) {
        return blocks[i];
      }
    }
  }
  return null;
};
