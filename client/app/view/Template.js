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
    title: null,

    items: [
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

    template: null
  },

  updateTemplate: function(newTemplate) {
    if (newTemplate) {
      var templateExerciseStore = Ext.getStore("TemplateExercise");
      templateExerciseStore.filter("templateId", newTemplate.getId());
      this.setTitle(newTemplate.get('name'));
    }
  }
});
