/**
 * Created by psomers on 8/13/16.
 */
Ext.define('Exercise.store.TemplateExerciseStore', {
  extend: 'Ext.data.Store',
  requires: [
    'Ext.data.proxy.Rest',
    'Exercise.model.TemplateExerciseModel'
  ],
  config : {
    model: 'Exercise.model.TemplateExerciseModel',
    autoLoad: false,
    proxy: {
        type: 'rest',
        url: 'http://0.0.0.0:3000/api/template_exercises?filter={"include":"exercise"}',
        pageParam: false,
        startParam: false,
        limitParam: false
    },
    listeners: {
        load: function( _this, records, successful, operation, eOpts ){
            console.log("template_exercise records loaded successfully:", successful);
        }
    }
  }
});
