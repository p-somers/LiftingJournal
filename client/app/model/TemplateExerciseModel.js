/**
 * Created by psomers on 8/13/16.
 */
Ext.define('Exercise.model.TemplateExerciseModel', {
  extend: 'Ext.data.Model',
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
        model: 'Exercise.model.ExerciseModel',
        name: 'exercise',
        associationKey: 'exercise'
      }
    ]
  }
});
