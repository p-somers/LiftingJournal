/**
 * Created by psomers on 8/15/16.
 */
Ext.define('Exercise.view.Template', {
  extend: 'Ext.Container',
  xtype: 'templateview',
  requires: [
    'Ext.dataview.List',
    'Ext.data.Store'
  ],
  config: {
    layout: 'vbox',
    items: [
      {
        xtype: 'toolbar',
        docked: 'top',
        id: 'templateToolbar',

        title: 'Finding location...'
      },
      {
        xtype: "list",
        height: '100%',
        width: "auto",
        store: "TemplateExercise",
        itemTpl: Ext.XTemplate([
          "<span>{exerciseName}: ",
          "{minSets}<tpl if='minSets !== maxSets'> - {maxSets}</tpl> x ",
          "{minReps}<tpl if='minReps !== maxReps'> - {maxReps}</tpl>",
          " ({rest}), {templateId}</span>"
        ].join(''))
      }
    ],
    listeners: {
      updatedata: function(me, data) {
        if (Object.keys(data).length > 0) {
          me.down('#templateToolbar').setTitle("test");
          var templateExerciseStore = Ext.getStore("TemplateExercise");
          templateExerciseStore.filter("templateId", data.getId());
        }
      }
    }
  }
});
