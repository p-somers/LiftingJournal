/**
 * Created by psomers on 8/13/16.
 */
Ext.define('Exercise.model.WorkoutSet', {
  extend: 'Ext.data.Model',
  config: {
    fields: [
      {name: 'id',         type: 'auto'},
      {name: 'reps',       type: 'int' },
      {name: 'weight',     type: 'int' },
      {name: 'workoutId',  type: 'auto'},
      {name: 'exerciseId', type: 'int' }
    ]
  }
});
