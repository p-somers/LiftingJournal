/**
 * Created by psomers on 8/27/16.
 */
Ext.define('Exercise.view.TemplateExercise', {
  extend: 'Ext.Panel',
  config: {
    centered: true,
    modal: true,
    hideOnMaskTap: true,
    width: 'auto',
    height: 'auto',
    padding: '20px',
    tpl: Ext.XTemplate([
      '<tpl for="new Array(maxSets)">',//Seriously the only way I could figure out how to do this
        '<input type="number"></input> x ',
        '<input type="number"></input></br>',
      '</tpl>'
    ].join(''))
  }
});
