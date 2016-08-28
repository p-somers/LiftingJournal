/**
 * Created by psomers on 8/13/16.
 */
Ext.define('Exercise.model.Workout', {
  extend: 'Ext.data.Model',
  config: {
    fields: [
      {name: 'id',         type: 'auto'},
      {name: 'date',       type: 'date'},
      {name: 'templateId', type: 'auto'}
    ]
  }
});
