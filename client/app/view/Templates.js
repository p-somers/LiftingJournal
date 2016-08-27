/**
 * Created by psomers on 8/27/16.
 */
/**
 * Created by psomers on 8/15/16.
 */
Ext.define('Exercise.view.Templates', {
  extend: 'Ext.List',
  xtype: 'templates',

  config: {
    title: 'Templates',
    variableHeights: true,

    store: 'Template',
    itemTpl: [
      '<span>{name}</span>'
    ].join('')
  }
});
