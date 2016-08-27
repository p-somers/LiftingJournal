/**
 * Created by psomers on 8/13/16.
 */
Ext.define('Exercise.model.Exercise', {
  extend: 'Ext.data.Model',
  config: {
    fields: [
      {name: 'id',   type: 'auto'},
      {name: 'name', type: 'string'}
    ]
  }
});
