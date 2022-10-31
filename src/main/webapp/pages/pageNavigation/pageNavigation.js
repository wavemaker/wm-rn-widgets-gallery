/*
 * Use App.getDependency for Dependency Injection
 * eg: var DialogService = App.getDependency('DialogService');
 */

/* perform any action on widgets/variables within this block */
Page.onReady = function() {
    /*
     * variables can be accessed through 'Page.Variables' property here
     * e.g. to get dataSet in a staticVariable named 'loggedInUser' use following script
     * Page.Variables.loggedInUser.getData()
     *
     * widgets can be accessed through 'Page.Widgets' property here
     * e.g. to get value of text widget named 'username' use following script
     * 'Page.Widgets.username.datavalue'
     */
    Page.pageParams.key = Page.pageParams.key || 'menu.components'
    Page.Variables.navmodel.dataSet = App.getObj(Page.pageParams.key);
};

Page.linkTap = function($event, widget, item, currentItemWidgets) {
    if (item.disabled) {
        return;
    }
    if (item.children) {
        App.Actions.goToPage_pageNavigation.navigate({
            data: {
                'key': Page.pageParams.key + '.' + item.name
            }
        })
    } else {
        Page.openUrl(item.link);
    }
};