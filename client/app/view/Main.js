Ext.define('Exercise.view.Main', {
  extend: 'Ext.navigation.View',
  xtype: 'mainview',

  requires: [
  ],

  config: {
    autoDestroy: false,

    navigationBar: {
      splitNavigation: false,
      items: [
        {
          xtype: 'button',
          id: 'saveButton',
          text: 'Save',
          ui: 'sencha',
          align: 'right',
          hidden: true,
          hideAnimation: Ext.os.is.Android ? false : {
            type: 'fadeOut',
            duration: 200
          },
          showAnimation: Ext.os.is.Android ? false : {
            type: 'fadeIn',
            duration: 200
          }
        }
      ]
    },

    platformConfig: {
      blackberry: {
        navigationBar: {
          splitNavigation: {
            xtype: 'toolbar',
            items: [{
              docked: 'right',
              xtype: 'button',
              iconCls: 'pencil',
              id: 'editButton',
              hidden: true
            },{
              docked: 'right',
              xtype: 'button',
              iconCls: 'check',
              id: 'saveButton',
              hidden: true
            }]
          }
        }
      }
    },

    items: [
      {
        title: 'Test',
        itemId: 'mainPanel',
        layout: {
          type: 'vbox',
          align: 'middle',
          pack: 'center'
        },
        width: '100%',
        defaults: {
          width: '60%',
          height: '40%'
        },
        items: [
          {
            xtype: 'button',
            text: 'Enter new workout',
            itemId: 'newWorkoutButton'
          },
          {
            height: '20px'
          },
          {
            xtype: 'button',
            text: 'View data',
            itemId: 'viewDataButton'
          }
        ]
      }
    ]
  }
});
