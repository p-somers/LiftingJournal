/**
 * Created by psomers on 8/13/16.
 */

Ext.define('Exercise.store.Workout', {
  extend: 'Ext.data.Store',
  requires: [
    'Ext.data.proxy.Rest'
  ],
  config : {
    model: 'Exercise.model.Workout',
    autoLoad: true,
    autoSync: false,
    proxy: {
      type: 'rest',
      url: 'http://0.0.0.0:3000/api/workouts',//?filter={"include": "exercise"}',
      filterParam: false,
      pageParam: false,
      startParam: false,
      limitParam: false
    }
  }
});
