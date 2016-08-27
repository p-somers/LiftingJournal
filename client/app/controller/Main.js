/**
 * Created by psomers on 8/15/16.
 */
var templateStore,
  templateExerciseStore;
Ext.define('Exercise.controller.Main', {
  extend: 'Ext.app.Controller',

  config: {

    refs: {
      main: 'mainview',
      newWorkoutButton: 'mainview #newWorkoutButton',
      viewDataButton: 'mainview #viewDataButton'
    },

    control: {
      newWorkoutButton: {
        tap: 'onNewWorkout'
      }
    }
  },

  onNewWorkout: function() {
    if (!this.chooseTemplate) {
      this.chooseTemplate = Ext.create('Exercise.view.Templates');
    }

    this.getMain().push(this.chooseTemplate);
  }
});
