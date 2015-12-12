angular.module("ots.templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("templates/admin/admin.html","<section layout=\"row\" flex style=\"height:100%\"><md-sidenav class=\"md-sidenav-left md-whiteframe-z2\" md-component-id=\"left\" md-is-locked-open=\"$mdMedia(\'gt-md\')\"><md-toolbar class=\"md-theme-indigo\"><h1 class=\"md-toolbar-tools\">Control Panel</h1></md-toolbar><md-content><md-list><md-list-item><a ui-sref=\"admin\">Control Panel</a></md-list-item><md-list-item><a ui-sref=\"admin.users\">Users</a></md-list-item><md-list-item><a ui-sref=\"admin.categories\">Categories</a></md-list-item></md-list></md-content></md-sidenav><md-content flex layout-padding><div><md-content style=\"width: 100%\" ui-view></md-content></div></md-content></section>");
$templateCache.put("templates/admin/otsAdminCategories.html","Categories");
$templateCache.put("templates/admin/otsAdminCp.html","Control Panel");
$templateCache.put("templates/admin/otsAdminUsers.html","<h2>User Management</h2><section layout=\"row\"><section flex=\"40\"><form name=\"otsAdminUsers.createForm\" ng-submit=\"otsAdminUsers.createUser()\"><md-input-container><label for=\"name\">Name</label> <input id=\"name\" ng-model=\"otsAdminUsers.newUser.name\" type=\"text\" required></md-input-container><div class=\"form-group\" layout=\"column\"><md-checkbox ng-model=\"otsAdminUsers.newUser.host\">Host?</md-checkbox><md-button class=\"md-raised\" ng-disabled=\"otsAdminUsers.createForm.$invalid\">Create</md-button></div></form></section><aside><md-subheader>Users</md-subheader><ots-user-list><ots-user ng-repeat=\"user in ::otsUserList.users\" user-data=\"user\"></ots-user></ots-user-list></aside></section>");
$templateCache.put("templates/game/otsCreateGame.html","<div layout=\"column\" style=\"height: 100%\"><header layout-padding><h1><a ui-sref=\"home\">On the Spot!</a></h1></header><div layout=\"row\"><md-content layout=\"row\" flex=\"40\" layout-align=\"start start\"><md-list><md-subheader>Avatar</md-subheader></md-list></md-content><md-content layout=\"row\" flex><md-list><md-subheader>Choose category</md-subheader></md-list></md-content></div></div>");
$templateCache.put("templates/game/otsGameboard.html","<header layout=\"row\"><ots-tv-category ng-repeat=\"title in ::board.categories\" data=\"title\"></ots-tv-category></header><div layout=\"row\"><ots-tv-group flex ng-repeat=\"tvGroup in ::board.questions\" tvgroup=\"tvGroup\"></ots-tv-group></div>");
$templateCache.put("templates/game/otsTv.html","<div class=\"amount\"><span>{{ ::otsTv.question.getAmount() }}</span></div><div class=\"question\"><span>{{ ::otsTv.question.getText() }}</span></div>");
$templateCache.put("templates/game/otsTvGroup.html","<div layout=\"column\"><ots-tv flex ng-repeat></ots-tv></div>");
$templateCache.put("templates/menu/otsMenu.html","<header flex layout=\"column\"><h1>On the Spot!</h1><nav><button class=\"flex-50\" ng-click=\"otsMenu.create()\">Create Game</button></nav></header>");}]);