/*
 * Use App.getDependency for Dependency Injection
 * eg: var DialogService = App.getDependency('DialogService');
 */

/* perform any action on the variables within this block(on-page-load) */
App.onAppVariablesReady = function() {
    /*
     * variables can be accessed through 'App.Variables' property here
     * e.g. App.Variables.staticVariable1.getData()
     */
};

/* perform any action on session timeout here, e.g clearing some data, etc */
App.onSessionTimeout = function() {
    /*
     * NOTE:
     * On re-login after session timeout:
     * if the same user logs in(through login dialog), app will retain its state
     * if a different user logs in, app will be reloaded and user is redirected to respective landing page configured in Security.
     */
};

/*
 * This application level callback function will be invoked after the invocation of PAGE level onPageReady function.
 * Use this function to write common logic across the pages in the application.
 * activePageName : name of the page
 * activePageScope: scope of the page
 * $activePageEl  : page jQuery element
 */
App.onPageReady = function(activePageName, activePageScope, $activePageEl) {

};

/*
 * This application level callback function will be invoked after a Variable receives an error from the target service.
 * Use this function to write common error handling logic across the application.
 * errorMsg:    The error message returned by the target service. This message will be displayed through appNotification variable
 *              You can change this though App.Variables.appNotification.setMessage(YOUR_CUSTOM_MESSAGE)
 * xhrObj:      The xhrObject used to make the service call
 *              This object contains useful information like statusCode, url, request/response body.
 */
App.onServiceError = function(errorMsg, xhrObj) {

};
var siteMap = null;
App.getObj = function(key, obj) {
    obj = obj || siteMap;
    var result = obj;
    key && key.split('.').forEach(function(k) {
        result = result.children.find(v => v.name === k);
    });
    return result;
};

(function() {
    var dataComponents = [{
        name: 'Form',
        link: '#component_form'
    }, {
        name: 'List',
        link: '#component_list'
    }, {
        name: 'Cards',
        link: '#component_cards'
    }];
    var conatinerComponents = [{
        name: 'Accordion',
        link: '#component_accordion'
    }, {
        name: 'Grid',
        link: '#component_grid',
        disabled: true
    }, {
        name: 'Panel',
        link: '#component_panel'
    }, {
        name: 'Tabs',
        link: '#component_tabs',
        disabled: true
    }, {
        name: 'Tile',
        link: '#component_tile'
    }, {
        name: 'Wizard',
        link: '#component_wizard'
    }];
    var basicComponents = [{
        name: 'Label',
        link: '#component_label'
    }, {
        name: 'Anchor',
        link: '#component_anchor'
    }, {
        name: 'Icon',
        link: '#component_icon'
    }, {
        name: 'Picture',
        link: '#component_picture'
    }, {
        name: 'Message',
        link: '#component_message'
    }, {
        name: 'Progress Bar',
        link: '#component_progressbar'
    }, {
        name: 'Progress Circle',
        link: '#component_progresscircle'
    }, {
        name: 'Spinner',
        link: '#component_spinner'
    }, {
        name: 'Search',
        link: '#component_search',
        disabled: true
    }];
    var formComponents = [{
        name: 'Button',
        link: '#component_button'
    }, {
        name: 'Button Group',
        link: '#component_buttongrp'
    }, {
        name: 'Text',
        link: '#component_text'
    }, {
        name: 'Text Area',
        link: '#component_textarea'
    }, {
        name: 'Form',
        link: '#component_form'
    }, {
        name: 'Number',
        link: '#component_number'
    }, {
        name: 'Select',
        link: '#component_select'
    }, {
        name: 'Chips',
        link: '#component_chips',
        disabled: true
    }, {
        name: 'Currency',
        link: '#component_currency'
    }, {
        name: 'Radio Set',
        link: '#component_radioset'
    }, {
        name: 'Checkbox',
        link: '#component_checkbox'
    }, {
        name: 'Checkbox Set',
        link: '#component_checkboxset'
    }, {
        name: 'Toggle',
        link: '#component_toggle'
    }, {
        name: 'Switch',
        link: '#component_switch'
    }, {
        name: 'Slider',
        link: '#component_slider'
    }, {
        name: 'Date Time',
        link: '#component_datetime'
    }, {
        name: 'Rating',
        link: '#component_rating'
    }];
    var navigationComponents = [{
        name: 'Menu',
        link: '#component_menu'
    }, {
        name: 'Nav',
        link: '#component_nav'
    }, {
        name: 'Popover',
        link: '#component_popover'
    }];
    var advancedComponents = [{
        name: 'Carousel',
        link: '#component_carousel'
    }];
    var deviceComponents = [{
        name: 'Camera',
        link: '#component_camera'
    }, {
        name: 'Barcode Scanner',
        link: '#component_barcodescanner'
    }];
    var modalComponents = [];
    siteMap = {
        "children": [{
            "name": "menu",
            "children": [
                /*{
                        "name": "Layouts",
                        "children": []
                    }
                ,*/
                {
                    "name": "components",
                    "children": [{
                            'name': 'advanced',
                            children: advancedComponents
                        }, {
                            'name': 'basic',
                            'children': basicComponents
                        },
                        {
                            'name': 'container',
                            children: conatinerComponents
                        }, {
                            'name': 'data',
                            'children': dataComponents
                        },
                        {
                            'name': 'device',
                            children: deviceComponents
                        },
                        {
                            'name': 'form',
                            children: formComponents
                        },
                        {
                            'name': 'modal',
                            'link': '#component_dialogs'
                        },
                        {
                            'name': 'navigation',
                            children: navigationComponents
                        },
                        /*{
                            'name': 'page',
                            'link': '#component_page'
                        }*/
                    ]
                }
            ]
        }]
    };
})();

(function getUsers() {
    var axios = require('axios');
    axios.get('https://randomuser.me/api?results=10').then((res) => {
        App.Variables.users.dataSet = res.data;
    }, (users) => {});
}());