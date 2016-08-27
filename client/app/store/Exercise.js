/**
 * Created by psomers on 8/13/16.
 */

Ext.define('Exercise.store.Exercise', {
  extend: 'Ext.data.Store',
  requires: [
    'Ext.data.proxy.Rest'
  ],
  config : {
    model: 'Exercise.model.Exercise',
    storeId: 'exerciseStore',
    autoLoad: false,
    proxy: {
      type: 'rest',
      url: 'http://0.0.0.0:3000/api/exercises',
      filterParam: false,
      pageParam: false,
      startParam: false,
      limitParam: false
    }
  }
});
