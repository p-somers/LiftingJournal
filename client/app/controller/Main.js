/**
 * Created by psomers on 8/15/16.
 */
var currentWorkout = null;
Ext.define('Exercise.controller.Main', {
  extend: 'Ext.app.Controller',

  config: {

    views: [
      'Template',
      'Templates'
    ],

    stores: [
      'Workout'
    ],

    refs: {
      main: 'mainview',
      newWorkoutButton: 'mainview #newWorkoutButton',
      viewDataButton: 'mainview #viewDataButton',
      templates: 'templates',
      templateExercises: 'templateview',
      saveButton: '#saveButton'
    },

    control: {
      newWorkoutButton: {
        tap: 'onNewWorkoutTap'
      },
      saveButton: {
        tap: 'saveWorkout'
      },
      templates: {
        itemtap: 'onTemplateTap'
      },
      templateExercises: {
        itemtap: 'onTemplateExerciseTap'
      }
    }
  },

  showSaveButton: function() {
    var saveButton = this.getSaveButton();
    if (!saveButton.isHidden()) {
      return;
    }
    saveButton.show();
  },

  hideSaveButton: function() {
    var saveButton = this.getSaveButton();
    if (saveButton.isHidden()) {
      return;
    }
    saveButton.hide();
  },

  onNewWorkoutTap: function() {
    this.hideSaveButton();
    if (!this.chooseTemplate) {
      this.chooseTemplate = Ext.create('Exercise.view.Templates');
    }
    this.getMain().push(this.chooseTemplate);
  },

  onTemplateTap: function(list, index, node, record) {
    if (!this.templateView) {
      this.templateView = Ext.create('Exercise.view.Template');
    }

    currentWorkout = {
      templateId: record.getId()
    };
    this.templateView.setTemplate(record);
    this.getMain().push(this.templateView);
    this.showSaveButton();
  },

  onTemplateExerciseTap: function(list, index, node, record) {
    if (this.templateExerciseView) {
      this.templateExerciseView.destroy();
    }
    this.templateExerciseView = Ext.create('Exercise.view.TemplateExercise', {
      data: record.data
    });

    this.templateExerciseView.showBy(node);
    //this.templateView.setTemplate(record);
    //this.getMain().push(this.templateExerciseView);
  },

  saveWorkout: function() {
    Ext.Msg.alert("Unimplemented", "This feature is not yet implemented", Ext.emptyFn);
  }
});
