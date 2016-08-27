/**
 * Created by psomers on 8/10/16.
 */
Ext.define('Exercise.model.Template', {
  extend: 'Ext.data.Model',
  requires: ['Ext.data.ModelManager'],
  config: {
    fields: [
      {name: 'id',   type: 'auto'},
      {name: 'name', type: 'string'}
    ],
    idProperty: 'id',
    associations: [
      {
        type: 'hasMany',
        model: 'Exercise.model.TemplateExercise',
        associationKey: 'exercises',
        name: 'exercises'
      }
    ]
  }
});
