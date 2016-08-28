/**
 * Created by psomers on 8/13/16.
 */

Ext.define('Exercise.store.WorkoutSet', {
  extend: 'Ext.data.Store',
  requires: [
    'Ext.data.proxy.Rest'
  ],
  config : {
    model: 'Exercise.model.Exercise',
    autoLoad: true,
    autoSync: false,
    proxy: {
      type: 'rest',
      url: 'http://0.0.0.0:3000/api/workout_sets?filter={"include": "exercise"}',
      filterParam: false,
      pageParam: false,
      startParam: false,
      limitParam: false
    }
  }
});
