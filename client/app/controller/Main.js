/**
 * Created by psomers on 8/15/16.
 */
Ext.define('Exercise.controller.Main', {
  extend: 'Ext.app.Controller',

  views: [
    'Template',
    'Templates'
  ],

  config: {

    refs: {
      main: 'mainview',
      newWorkoutButton: 'mainview #newWorkoutButton',
      viewDataButton: 'mainview #viewDataButton',
      templates: 'templates'
    },

    control: {
      newWorkoutButton: {
        tap: 'onNewWorkout'
      },

      templates: {
        itemtap: 'onTemplateTap'
      }
    }
  },

  onNewWorkout: function() {
    if (!this.chooseTemplate) {
      this.chooseTemplate = Ext.create('Exercise.view.Templates');
    }

    this.getMain().push(this.chooseTemplate);
  },

  onTemplateTap: function(list, index, node, record) {
    if (!this.templateView) {
      this.templateView = Ext.create('Exercise.view.Template');
    }

    this.templateView.setTemplate(record);
    this.getMain().push(this.templateView);
  }
});
