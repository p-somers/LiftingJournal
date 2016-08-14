/**
 * Created by psomers on 8/13/16.
 */

Ext.define('Exercise.store.ExerciseStore', {
  extend: 'Ext.data.Store',
  requires: [
    'Ext.data.proxy.Rest',
    'Exercise.model.ExerciseModel'
  ],
  config : {
    model: 'Exercise.model.ExerciseModel',
    autoLoad: true,
    proxy: {
      type: 'rest',
      url: 'http://0.0.0.0:3000/api/exercises',
      filterParam: false,
      pageParam: false,
      startParam: false,
      limitParam: false
    },
    listeners: {
        load: function( _this, records, successful, operation, eOpts ){
            console.log("exercise records loaded successfully:", successful);
        }
    }
  }
});
