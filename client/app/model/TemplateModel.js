/**
 * Created by psomers on 8/10/16.
 */
Ext.define('Exercise.model.TemplateModel', {
  extend: 'Ext.data.Model',
  requires: ['Ext.data.ModelManager'],
  config: {
    fields: [
      {name: 'id',   type: 'int'},
      {name: 'name', type: 'string'}
    ],
    associations: [
      {
        type: 'hasMany',
        model: 'Exercise.model.TemplateExerciseModel',
        associationKey: 'exercises',
        name: 'exercises'
      }
    ]
  }
});
