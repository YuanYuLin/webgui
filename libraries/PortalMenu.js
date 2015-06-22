$(function(){
    var PortalMenuModel = Backbone.Model.extend({});
    var PortalMenuView = Backbone.View.extend({
        events: {
            "click #menu_button": "MenuButtonMouseClick",
            "click #home_button": "HomeButtonMouseClick",
            "click #system_button": "SystemButtonMouseClick",
            "click #packages_button": "PackagesButtonMouseClick",
        },

        initialize: function(){
            this.menu = $('#menu_content');
            var sidebar = $('#menu_sidebar');
            var footer = $('#ctx_footer');
            var header = $('#ctx_header');
            sidebar.css('height', $( document ).height() - footer.height() - header.height()) ;
        },

        MenuButtonMouseClick: function() {
            if(this.menu.height() === 0) {
                this.ShowMenu();
            } else {
                this.HideMenu();
            }
        },

        HomeButtonMouseClick: function() {
            window.location.replace('index.html');
        },

        SystemButtonMouseClick: function() {
            window.location.replace('system.html');
        },

        PackagesButtonMouseClick: function() {
            window.location.replace('packages.html');
        },

        ShowMenu: function() {
            this.menu.css('visibility', 'visible');
            this.menu.css('background-color', 'red');
            this.menu.css('width', '42px');
            this.menu.css('height', '80%');
            this.menu.css('left', 0);
            this.menu.css('top', 40);
            this.menu.css('opacity', 0.6);
        },

        HideMenu: function() {
            this.menu.css('visibility', 'hidden');
            this.menu.css('background-color', 'red');
            this.menu.css('width', '0');
            this.menu.css('height', '0');
            this.menu.css('left', 40);
            this.menu.css('top', 40);
            this.menu.css('opacity', 0.6);
        },
    });

    var PortalView = new PortalMenuView({el: 'body'});
});
