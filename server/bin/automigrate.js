/**
 * Created by psomers on 8/1/16.
 */
var app = require('../server');

var templateExercises = [

    {
      "templateId": 1,
      "minSets": 5,
      "maxSets": 5,
      "minReps": 5,
      "maxReps": 5,
      "rest": "L",
      "order": 1,
      "exerciseId": 1
    },
    {
      "templateId": 1,
      "minSets": 3,
      "maxSets": 3,
      "minReps": 6,
      "maxReps": 10,
      "rest": "M",
      "order": 2,
      "exerciseId": 2
    },
    {
      "templateId": 1,
      "minSets": 4,
      "maxSets": 4,
      "minReps": 12,
      "maxReps": 20,
      "rest": "S",
      "order": 3,
      "exerciseId": 3
    },
    {
      "templateId": 1,
      "minSets": 4,
      "maxSets": 4,
      "minReps": 5,
      "maxReps": 5,
      "rest": "L",
      "order": 4,
      "exerciseId": 4
    },
    {
      "templateId": 1,
      "minSets": 3,
      "maxSets": 3,
      "minReps": 8,
      "maxReps": 12,
      "rest": "M",
      "order": 5,
      "exerciseId": 5
    },
    {
      "templateId": 1,
      "minSets": 3,
      "maxSets": 3,
      "minReps": 10,
      "maxReps": 15,
      "rest": "S",
      "order": 6,
      "exerciseId": 6
    },
  {
    "templateId": 2,
    "minSets": 4,
    "maxSets": 4,
    "minReps": 6,
    "maxReps": 10,
    "rest": "L",
    "order": 1,
    "exerciseId": 7
  },
  {
    "templateId": 2,
    "minSets": 3,
    "maxSets": 4,
    "minReps": 6,
    "maxReps": 10,
    "rest": "L",
    "order": 2,
    "exerciseId": 8
  },
  {
    "templateId": 2,
    "minSets": 3,
    "maxSets": 3,
    "minReps": 8,
    "maxReps": 12,
    "rest": "M",
    "order": 3,
    "exerciseId": 9
  },
  {
    "templateId": 2,
    "minSets": 4,
    "maxSets": 4,
    "minReps": 10,
    "maxReps": 15,
    "rest": "S",
    "order": 4,
    "exerciseId": 10
  },
  {
    "templateId": 2,
    "minSets": 3,
    "maxSets": 4,
    "minReps": 6,
    "maxReps": 10,
    "rest": "M",
    "order": 5,
    "exerciseId": 11
  },
  {
    "templateId": 3,
    "minSets": 4,
    "maxSets": 4,
    "minReps": 5,
    "maxReps": 5,
    "rest": "L",
    "order": 1,
    "exerciseId": 13
  },
  {
    "templateId": 3,
    "minSets": 4,
    "maxSets": 4,
    "minReps": 8,
    "maxReps": 12,
    "rest": "M",
    "order": 2,
    "exerciseId": 14
  },
  {
    "templateId": 3,
    "minSets": 3,
    "maxSets": 3,
    "minReps": 10,
    "maxReps": 15,
    "rest": "S",
    "order": 3,
    "exerciseId": 15
  },
  {
    "templateId": 3,
    "minSets": 3,
    "maxSets": 3,
    "minReps": 6,
    "maxReps": 10,
    "rest": "M",
    "order": 4,
    "exerciseId": 16
  },
  {
    "templateId": 3,
    "minSets": 3,
    "maxSets": 3,
    "minReps": 8,
    "maxReps": 12,
    "rest": "M",
    "order": 5,
    "exerciseId": 17
  },
  {
    "templateId": 3,
    "minSets": 4,
    "maxSets": 4,
    "minReps": 6,
    "maxReps": 12,
    "rest": "M",
    "order": 6,
    "exerciseId": 19
  },
  {
    "templateId": 4,
    "minSets": 5,
    "maxSets": 5,
    "minReps": 6,
    "maxReps": 12,
    "rest": "L",
    "order": 1,
    "exerciseId": 20
  },
  {
    "templateId": 4,
    "minSets": 4,
    "maxSets": 4,
    "minReps": 8,
    "maxReps": 15,
    "rest": "M",
    "order": 2,
    "exerciseId": 21
  },
  {
    "templateId": 4,
    "minSets": 4,
    "maxSets": 4,
    "minReps": 6,
    "maxReps": 10,
    "rest": "M",
    "order": 3,
    "exerciseId": 22
  },
  {
    "templateId": 4,
    "minSets": 3,
    "maxSets": 4,
    "minReps": 8,
    "maxReps": 15,
    "rest": "S/M",
    "order": 4,
    "exerciseId": 23
  },
  {
    "templateId": 4,
    "minSets": 4,
    "maxSets": 5,
    "minReps": 6,
    "maxReps": 12,
    "rest": "M",
    "order": 5,
    "exerciseId": 24
  },
  {
    "templateId": 4,
    "minSets": 3,
    "maxSets": 3,
    "minReps": 20,
    "maxReps": 15,
    "rest": "S",
    "order": 6,
    "exerciseId": 25
  }
];

var exercises = {
  'Bench Press': -1,
  'Machine Fly': -1,
  'Dip': -1,
  'Barbell Curl': -1,
  'Neutral Grip Chin-up': -1,
  'Seated Dumbbell Palms-Up Wrist Curl': -1,
  'Pull up': -1,
  'Sumo Deadlift': -1,
  'Lat Pulldown': -1,
  'Reverse Fly': -1,
  'Hanging Leg Raise': -1,
  'Cable Crunch': -1,
  'Overhead Press': -1,
  'DB Lateral Raise': -1,
  'Front DB Raise': -1,
  'Skull Crusher': -1,
  'Cable Pushdown': -1,
  'Kickback': -1,
  'Decline Crunch': -1,
  'Back Squat': -1,
  'Bulgarian Split Squat': -1,
  'Romanina Deadlift': -1,
  'Lying Leg Curl': -1,
  'DB Calf Raise': -1,
  'Seated Calf Raise': -1
};

var dataSource = app.dataSources.db;
dataSource.automigrate('template_exercise', function(err) {
  if (err) throw err;

  var TemplateExercise = app.models.TemplateExercise;
  var count = templateExercises.length;
  templateExercises.forEach(function(temp) {
    // insert new records into the Account table
    TemplateExercise.create(temp, function(err, record) {
      if (err) return console.log(err);

      console.log('Record created:', record);

      count--;

      if (count === 0) {
        console.log('done');
        dataSource.disconnect();
      }
    });
  });
});

