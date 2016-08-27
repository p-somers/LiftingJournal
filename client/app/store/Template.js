/**
 * Created by psomers on 8/13/16.
 */
Ext.define('Exercise.store.Template', {
  extend: 'Ext.data.Store',
  requires: [
    'Ext.data.proxy.Rest',
    'Exercise.model.Template'
  ],
  config : {
    model: 'Exercise.model.Template',
    autoLoad: true,
    proxy: {
        type: 'rest',
        url: 'http://0.0.0.0:3000/api/templates',//?filter={"include":{"exercises":"exercise"}}',
        pageParam: false,
        startParam: false,
        limitParam: false
    }
  }
});
