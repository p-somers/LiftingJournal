/**
 * Created by psomers on 8/13/16.
 */
Ext.define('Exercise.store.TemplateExercise', {
  extend: 'Ext.data.Store',
  requires: [
    'Ext.data.proxy.Rest',
    'Exercise.model.TemplateExercise'
  ],
  config : {
    model: 'Exercise.model.TemplateExercise',
    autoLoad: true,
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
