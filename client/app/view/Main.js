Ext.define('Exercise.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.dataview.List',
        'Ext.TitleBar'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                title: 'Welcome',
                iconCls: 'home',

                styleHtmlContent: true,
                scrollable: true,

                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Weightlifting Journal'
                    },
                    {
                        xtype: 'list',
                        store: 'TemplateExerciseStore',
                        height: '200px',
                        itemTpl: [
                          '{exercise.name}: ',
                          '{minSets}<tpl if="minSets !== maxSets"> - {maxSets}</tpl> x ',
                          '{minReps}<tpl if="minReps !== maxReps"> - {maxReps}</tpl>'
                          ].join(''),
                        //itemTpl: '{name} |<tpl for="exercises">{exerciseName}</tpl>|',
                        style: 'color:black'
                    }
                ]
            }
        ]
    }
});
