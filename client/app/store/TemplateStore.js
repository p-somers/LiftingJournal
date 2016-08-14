/**
 * Created by psomers on 8/13/16.
 */
Ext.define('Exercise.store.TemplateStore', {
  extend: 'Ext.data.Store',
  requires: [
    'Ext.data.proxy.Rest',
    'Exercise.model.TemplateModel'
  ],
  config : {
    model: 'Exercise.model.TemplateModel',
    autoLoad: true,
    proxy: {
        type: 'rest',
        url: 'http://0.0.0.0:3000/api/templates?filter={"include":{"exercises":"exercise"}}',
        pageParam: false,
        startParam: false,
        limitParam: false
    },
    listeners: {
        load: function( _this, records, successful, operation, eOpts ){
            window.s = _this;
            console.log("template records loaded successfully:", successful);
        }
    }
  }
});
