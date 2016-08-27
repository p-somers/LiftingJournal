/**
 * Created by psomers on 8/13/16.
 */
Ext.define('Exercise.model.TemplateExercise', {
  extend: 'Ext.data.Model',
  requires: [
    'Exercise.model.Exercise'
  ],
  config: {
    fields: [
      {name: 'templateId', type: 'int'},
      {name: 'minSets',    type: 'int'},
      {name: 'maxSets',    type: 'int'},
      {name: 'minReps',    type: 'int'},
      {name: 'maxReps',    type: 'int'},
      {name: 'rest',       type: 'string'},
      {name: 'order',      type: 'int'},
      {name: 'exerciseId', type: 'int'},
      {name: 'exerciseName', type: 'string', mapping: 'exercise.name'}
    ],
    hasOne: [
      {
        model: 'Exercise.model.Exercise',
        name: 'exercise',
        associationKey: 'exercise',
        foreignKey: 'exerciseId'
      }
    ]
  }
});
