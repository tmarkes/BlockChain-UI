(function() {

"use strict";

angular.module('blockApp', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider, $httpProvider) {
    $urlRouterProvider.otherwise("/");
    delete $httpProvider.defaults.headers.common['X-Requested-With'];

  $stateProvider
      .state('login', {
        url: "/loginSpecial",
        controller: "LoginCtrl",
        template: "<div><div class=\"sign-in-screen\">"+
        "<div class=\"row\">"+
        "<img src=\"resources/static/Company_DCP_logo.png\" class=\"cap-icon-normal-login\" />"+
        "<img src=\"resources/static/associate_company_logo.png\" class=\"company-icon-login\" />"+
        "</div>"+
        "<div class=\"row modal-color-login\">"+
        		"<div class=\"col-md-12\">"+
              "<div class=\"row\">"+
                "<p class=\"login-userType\">Marketing Associate Sign-In</p>"+
              "</div>"+
        			"<form role=\"form\">"+
        				"<div class=\"login-form-group-input\">"+
        					"<img class=\"login-image\" src=\"resources/static/User_pic.JPG\" />"+
        					"<div class=\"col-sm-11\">"+
        						"<input type=\"email\" ng-model=\"login.associate\" class=\"login-field\" required>"+
        					"</div>"+
        				"</div>"+
                "<div class=\"login-form-group-input\">"+
        					"<img class=\"login-image\" src=\"resources/static/Password_pic.JPG\" />"+
        					"<div class=\"col-sm-11\">"+
        						"<input type=\"password\" ng-model=\"login.associatePW\" class=\"login-field\" required>"+
        					"</div>"+
        				"</div>"+
        				"<div class=\"login-form-group\">"+
                "<div class=\"form-horizontal col-sm-12 login-button-pw-line\">"+
        						"<button type=\"button\" ng-click=\"logAssociate( login.associate )\" class=\"btn btn-primary login-btn\">"+
        							"Login"+
        						"</button>"+
                    "<button type=\"button\" class=\"btn login_lost_btn\">Forgot Password</button>"+
        					"</div>"+
        				"</div>"+
        				"</div>"+
        			"</form>"+
              "<div class=\"col-sm-10 login-newUser-line\">"+
                  "<button type=\"button\" class=\"btn new_user_btn\">Register Now</button>"+
                "</div>"+
        		"</div>"+
        	"</div>"+
          "</div>"+
          "<div class=\"sign-in-screen\">"+
          "<div class=\"row\">"+
          "<img src=\"resources/static/Company_DCP_logo.png\" class=\"cap-icon-normal-login\" />"+
          "<img src=\"resources/static/director_company_logo.png\" class=\"company-icon-login-director\" />"+
          "</div>"+
          "<div class=\"row modal-color-login\">"+
              "<div class=\"col-md-12\">"+
                "<div class=\"row\">"+
                  "<p class=\"login-userType\">Marketing Director Sign-In</p>"+
                "</div>"+
                "<form role=\"form\">"+
                  "<div class=\"login-form-group-input\">"+
                    "<img class=\"login-image\" src=\"resources/static/User_pic.JPG\" />"+
                    "<div class=\"col-sm-11\">"+
                      "<input type=\"email\" ng-model=\"login.director\" class=\"login-field\" required>"+
                    "</div>"+
                  "</div>"+
                  "<div class=\"login-form-group-input\">"+
                    "<img class=\"login-image\" src=\"resources/static/Password_pic.JPG\" />"+
                    "<div class=\"col-sm-11\">"+
                      "<input type=\"password\" ng-model=\"login.directorPW\" class=\"login-field\" required>"+
                    "</div>"+
                  "</div>"+
                  "<div class=\"login-form-group\">"+
                    "<div class=\"form-horizontal col-sm-12 login-button-pw-line\">"+
                      "<button type=\"button\" ng-click=\"logDirector()\" class=\"btn btn-primary login-btn\">"+
                        "Login"+
                      "</button>"+
                      "<button type=\"button\" class=\"btn login_lost_btn\">Forgot Password</button>"+
                    "</div>"+
                  "</div>"+
                  "</div>"+
                "</form>"+
                "<div class=\"col-sm-10 login-newUser-line\">"+
                  "<button type=\"button\" class=\"btn new_user_btn\">Register Now</button>"+
                "</div>"+
              "</div>"+
            "</div>"+
            "</div>"+
            "<div class=\"sign-in-screen\">"+
            "<div class=\"row\">"+
            "<img src=\"resources/static/Company_DCP_logo.png\" class=\"cap-icon-normal-login\" />"+
            "<img src=\"resources/static/director_company_logo.png\" class=\"company-icon-login-director\" />"+
            "</div>"+
            "<div class=\"row modal-color-login\">"+
                "<div class=\"col-md-12\">"+
                  "<div class=\"row\">"+
                    "<p class=\"login-userType\">Customer Sign-In</p>"+
                  "</div>"+
                  "<form role=\"form\">"+
                  "<div class=\"login-form-group-input\">"+
                      "<img class=\"login-image\" src=\"resources/static/User_pic.JPG\" />"+
                      "<div class=\"col-sm-11\">"+
                        "<input type=\"email\" ng-model=\"login.customer\" class=\"login-field\" required>"+
                      "</div>"+
                    "</div>"+
                    "<div class=\"login-form-group-input\">"+
                      "<img class=\"login-image\" src=\"resources/static/Password_pic.JPG\" />"+
                      "<div class=\"col-sm-11\">"+
                        "<input type=\"password\" ng-model=\"login.customerPW\" class=\"login-field\" required>"+
                      "</div>"+
                    "</div>"+
                    "<div class=\"login-form-group\">"+
                    "<div class=\"form-horizontal col-sm-12 login-button-pw-line\">"+
                        "<button type=\"button\" ng-click=\"logCustomer(promo.id, promo.customerName, promo.customerBilling, promo.name, "+
                        "promo.longDesc, promo.selectedTC, promo.startDate, promo.endDate, promo.notificationDaysRemind, "+
                        "promo.enrollmentDeadline, promo.postPromoBilling )\" class=\"btn btn-primary login-btn\">"+
                          "Login"+
                        "</button>"+
                        "<button type=\"button\" class=\"btn login_lost_btn\">Forgot Password</button>"+
                      "</div>"+
                    "</div>"+
                    "</div>"+
                  "</form>"+
                  "<div class=\"col-sm-10 login-newUser-line\">"+
                      "<button type=\"button\" class=\"btn new_user_btn\">Register Now</button>"+
                    "</div>"+
                "</div>"+
              "</div>"+
          "</div></div>"
      })
      .state('loginDirector', {
        url: "/login/director",
        controller: "LoginDirectorCtrl",
        template: "<div id=\"sign-in-screen\">"+
        "<div class=\"row\">"+
        "<img src=\"resources/static/Company_DCP_logo.png\" class=\"cap-icon-normal-login\" />"+
        "<img src=\"resources/static/director_company_logo.png\" class=\"company-icon-login-director\" />"+
        "</div>"+
        "<div class=\"row modal-color-login\">"+
        		"<div class=\"col-md-12\">"+
              "<div class=\"row\">"+
                "<p class=\"login-userType\">Marketing Director Sign-In</p>"+
              "</div>"+
        			"<form role=\"form\">"+
        				"<div class=\"login-form-group-input\">"+
        					"<img class=\"login-image\" src=\"resources/static/User_pic.JPG\" />"+
        					"<div class=\"col-sm-11\">"+
        						"<input type=\"email\" ng-model=\"login.username\" class=\"login-field\" required>"+
        					"</div>"+
        				"</div>"+
        				"<div class=\"login-form-group-input\">"+
        					"<img class=\"login-image\" src=\"resources/static/Password_pic.JPG\" />"+
        					"<div class=\"col-sm-11\">"+
        						"<input type=\"password\" ng-model=\"login.password\" class=\"login-field\" required>"+
        					"</div>"+
        				"</div>"+
        				"<div class=\"login-form-group\">"+
        					"<div id=\"login-button-pw-line\" class=\"form-horizontal col-sm-12\">"+
        						"<button type=\"button\" ng-click=\"logUser()\" class=\"btn btn-primary login-btn\">"+
        							"Login"+
        						"</button>"+
                    "<button id=\"login_lost_btn\" type=\"button\" class=\"btn\">Forgot Password</button>"+
        					"</div>"+
        				"</div>"+
        				"</div>"+
        			"</form>"+
              "<div id=\"login-newUser-line\" class=\"col-sm-10\">"+
                "<button id=\"new_user_btn\" type=\"button\" class=\"btn\">Register Now</button>"+
              "</div>"+
        		"</div>"+
        	"</div>"+
          "</div>"
      })
      .state('loginAssociate', {
        url: "/",
        controller: "LoginAssociateCtrl",
        template: "<div id=\"sign-in-screen\">"+
        "<div class=\"row\">"+
        "<img src=\"resources/static/Company_DCP_logo.png\" class=\"cap-icon-normal-login\" />"+
        "<img src=\"resources/static/associate_company_logo.png\" class=\"company-icon-login\" />"+
        "</div>"+
        "<div class=\"row modal-color-login\">"+
        		"<div class=\"col-md-12\">"+
              "<div class=\"row\">"+
                "<p class=\"login-userType\">Marketing Associate Sign-In</p>"+
              "</div>"+
        			"<form role=\"form\">"+
        				"<div class=\"login-form-group-input\">"+
        					"<img class=\"login-image\" src=\"resources/static/User_pic.JPG\" />"+
        					"<div class=\"col-sm-11\">"+
        						"<input type=\"email\" ng-model=\"login.username\" class=\"login-field\" required>"+
        					"</div>"+
        				"</div>"+
                "<div class=\"login-form-group-input\">"+
        					"<img class=\"login-image\" src=\"resources/static/Password_pic.JPG\" />"+
        					"<div class=\"col-sm-11\">"+
        						"<input type=\"password\" ng-model=\"login.password\" class=\"login-field\" required>"+
        					"</div>"+
        				"</div>"+
        				"<div class=\"login-form-group\">"+
                "<div id=\"login-button-pw-line\" class=\"form-horizontal col-sm-12\">"+
        						"<button type=\"button\" ng-click=\"logUser( login.username )\" class=\"btn btn-primary login-btn\">"+
        							"Login"+
        						"</button>"+
                    "<button id=\"login_lost_btn\" type=\"button\" class=\"btn\">Forgot Password</button>"+
        					"</div>"+
        				"</div>"+
        				"</div>"+
        			"</form>"+
              "<div id=\"login-newUser-line\" class=\"col-sm-10\">"+
                  "<button id=\"new_user_btn\" type=\"button\" class=\"btn\">Register Now</button>"+
                "</div>"+
        		"</div>"+
        	"</div>"+
          "</div>"
      })
      .state('loginCustomer', {
        url: "/login/customer",
        controller: "LoginCustomerCtrl",
        template: "<div id=\"sign-in-screen\">"+
        "<div class=\"row\">"+
        "<img src=\"resources/static/Company_DCP_logo.png\" class=\"cap-icon-normal-login\" />"+
        "<img src=\"resources/static/director_company_logo.png\" class=\"company-icon-login-director\" />"+
        "</div>"+
        "<div class=\"row modal-color-login\">"+
        		"<div class=\"col-md-12\">"+
              "<div class=\"row\">"+
                "<p class=\"login-userType\">Customer Sign-In</p>"+
              "</div>"+
        			"<form role=\"form\">"+
              "<div class=\"login-form-group-input\">"+
        					"<img class=\"login-image\" src=\"resources/static/User_pic.JPG\" />"+
        					"<div class=\"col-sm-11\">"+
        						"<input type=\"email\" ng-model=\"login.username\" class=\"login-field\" required>"+
        					"</div>"+
        				"</div>"+
                "<div class=\"login-form-group-input\">"+
        					"<img class=\"login-image\" src=\"resources/static/Password_pic.JPG\" />"+
        					"<div class=\"col-sm-11\">"+
        						"<input type=\"password\" ng-model=\"login.password\" class=\"login-field\" required>"+
        					"</div>"+
        				"</div>"+
        				"<div class=\"login-form-group\">"+
                "<div id=\"login-button-pw-line\" class=\"form-horizontal col-sm-12\">"+
        						"<button type=\"button\" ng-click=\"logUser(promo.id, promo.customerName, promo.customerBilling, promo.name, "+
                    "promo.longDesc, promo.selectedTC, promo.startDate, promo.endDate, promo.notificationDaysRemind, "+
                    "promo.enrollmentDeadline, promo.postPromoBilling )\" class=\"btn btn-primary login-btn\">"+
        							"Login"+
        						"</button>"+
                    "<button id=\"login_lost_btn\" type=\"button\" class=\"btn\">Forgot Password</button>"+
        					"</div>"+
        				"</div>"+
        				"</div>"+
        			"</form>"+
              "<div id=\"login-newUser-line\" class=\"col-sm-10\">"+
                  "<button id=\"new_user_btn\" type=\"button\" class=\"btn\">Register Now</button>"+
                "</div>"+
        		"</div>"+
        	"</div>"+
          "</div>"
      })
      .state('loginSuccessfulCustomer', {
        url: "/login/customerSuccess",
        controller: "LoginSuccessfulCustomerCtrl",
        template: "<div id=\"sign-in-screen\">"+
        "<div class=\"row\">"+
        "<img src=\"resources/static/Company_DCP_logo.png\" class=\"cap-icon-normal-login\" />"+
        "<img src=\"resources/static/director_company_logo.png\" class=\"company-icon-login-director\" />"+
        "</div>"+
        "<div class=\"row modal-color-login\">"+
            "<div class=\"col-md-12\">"+
              "<div class=\"row\">"+
                "<p class=\"login-userType\">Customer Sign-In</p>"+
              "</div>"+
              "<form role=\"form\">"+
              "<div class=\"login-form-group-input\">"+
                  "<img class=\"login-image\" src=\"resources/static/User_pic.JPG\" />"+
                  "<div class=\"col-sm-11\">"+
                    "<input type=\"email\" ng-model=\"login.username\" class=\"login-field\" required>"+
                  "</div>"+
                "</div>"+
                "<div class=\"login-form-group-input\">"+
                  "<img class=\"login-image\" src=\"resources/static/Password_pic.JPG\" />"+
                  "<div class=\"col-sm-11\">"+
                    "<input type=\"password\" ng-model=\"login.password\" class=\"login-field\" required>"+
                  "</div>"+
                "</div>"+
                "<div class=\"login-form-group\">"+
                "<div id=\"login-button-pw-line\" class=\"form-horizontal col-sm-12\">"+
                    "<button type=\"button\" ng-click=\"logUser(promo.id, promo.customerName, promo.customerBilling, promo.name, "+
                    "promo.longDesc, promo.selectedTC, promo.startDate, promo.endDate, promo.notificationDaysRemind, "+
                    "promo.enrollmentDeadline, promo.postPromoBilling )\" class=\"btn btn-primary login-btn\">"+
                      "Login"+
                    "</button>"+
                    "<button id=\"login_lost_btn\" type=\"button\" class=\"btn\">Forgot Password</button>"+
                  "</div>"+
                "</div>"+
                "</div>"+
              "</form>"+
              "<div id=\"login-newUser-line\" class=\"col-sm-10\">"+
                  "<button id=\"new_user_btn\" type=\"button\" class=\"btn\">Register Now</button>"+
                "</div>"+
            "</div>"+
          "</div>"+
          "</div>"
      })
      .state('loginRejectedCustomer', {
        url: "/login/customerRejection",
        controller: "LoginRejectedCustomerCtrl",
        template: "<div id=\"sign-in-screen\">"+
        "<div class=\"row\">"+
        "<img src=\"resources/static/Company_DCP_logo.png\" class=\"cap-icon-normal-login\" />"+
        "<img src=\"resources/static/director_company_logo.png\" class=\"company-icon-login-director\" />"+
        "</div>"+
        "<div class=\"row modal-color-login\">"+
            "<div class=\"col-md-12\">"+
              "<div class=\"row\">"+
                "<p class=\"login-userType\">Customer Sign-In</p>"+
              "</div>"+
              "<form role=\"form\">"+
              "<div class=\"login-form-group-input\">"+
                  "<img class=\"login-image\" src=\"resources/static/User_pic.JPG\" />"+
                  "<div class=\"col-sm-11\">"+
                    "<input type=\"email\" ng-model=\"login.username\" class=\"login-field\" required>"+
                  "</div>"+
                "</div>"+
                "<div class=\"login-form-group-input\">"+
                  "<img class=\"login-image\" src=\"resources/static/Password_pic.JPG\" />"+
                  "<div class=\"col-sm-11\">"+
                    "<input type=\"password\" ng-model=\"login.password\" class=\"login-field\" required>"+
                  "</div>"+
                "</div>"+
                "<div class=\"login-form-group\">"+
                "<div id=\"login-button-pw-line\" class=\"form-horizontal col-sm-12\">"+
                    "<button type=\"button\" ng-click=\"logUser( login.username )\" class=\"btn btn-primary login-btn\">"+
                      "Login"+
                    "</button>"+
                    "<button id=\"login_lost_btn\" type=\"button\" class=\"btn\">Forgot Password</button>"+
                  "</div>"+
                "</div>"+
                "</div>"+
              "</form>"+
              "<div id=\"login-newUser-line\" class=\"col-sm-10\">"+
                  "<button id=\"new_user_btn\" type=\"button\" class=\"btn\">Register Now</button>"+
                "</div>"+
            "</div>"+
          "</div>"+
          "</div>"
      })
      .state('promoCreation', {
        url: "/promoCreation",
        controller: "PromoCreationCtrl",
        template: "<div class=\"row subtitle-row-small\">"+
        	"<img src=\"resources/static/Company_DCP_logo.png\" class=\"cap-icon-normal-pageHeader\" />"+
          "<img ng-click=\"logUser( user.name )\" src=\"resources/static/Page_Header_Title_Icon.png\" class=\"header-title-icon\" />"+
          "<div class=\"header-page-title\" ng-click=\"logUser( user.name )\" >New Promotion</div>"+
          "<div class=\"header-main-rightside\">"+
            "<div style=\"float:right\">"+
              "<div class=\"header-profile-namerole\">{{user.name}}<br/>{{user.role}}</div>"+
              "<img src=\"resources/static/associate_profile_picture.png\" class=\"header-profile-pic\" />"+
              "<img src=\"resources/static/logout_icon.png\" class=\"header-logout-icon\" />"+
            	"<img src=\"resources/static/associate_company_logo.png\" class=\"company-icon-not-login\" />"+
            "</div>"+
          "</div>"+
        "</div>"+
        "<div class=\"modal-color\">"+
        "<form id=\"reviewPromoForm\" action=\"\" name=\"reviewPromoForm\" class=\"form-font\" method=\"POST\">"+
          "<fieldset ng-disabled=\"promoCreateDisable\">"+
            "<div class=\"row interview-row\">"+
              "<label class=\"col-sm-6 col-sm-offset-1 form-rowB\">Promotion Name: </label>"+
              "<input class=\"col-md-2 form-textBox\" name=\"promoName\" type=\"text\" ng-model=\"promo.name\"/>"+
            "</div>"+
            "<div class=\"row interview-row\">"+
              "<label class=\"col-sm-6 col-sm-offset-1 form-rowB\">Business Benefits: </label>"+
              "<input class=\"col-md-2 form-textBox\" name=\"promoBusinessBenefit\" type=\"text\" ng-model=\"promo.selectedBenefit\"/>"+
            "</div>"+
            "<div class=\"row interview-row\">"+
              "<label class=\"col-sm-6 col-sm-offset-1 form-rowB\">Customer Benefits: </label>"+
              "<input class=\"col-md-2 form-textBox\" name=\"promoCustomerBenefit\" type=\"text\" ng-model=\"promo.benefit\"/>"+
            "</div>"+
            "<div class=\"row interview-row\">"+
              "<label class=\"col-sm-6 col-sm-offset-1 form-rowB\">Description: </label>"+
              "<textarea id=\"textarea-desc\" class=\"col-md-2 interview-col-textarea\" name=\"promoLongDesc\" ng-model=\"promo.longDesc\"></textarea>"+
            "</div>"+
            "<div class=\"row interview-row\">"+
              "<label class=\"col-sm-6 col-sm-offset-1 form-rowB\">Terms and Conditions: </label>"+
              "<textarea class=\"col-md-2 interview-col-textarea\" name=\"promoSelectedTC\" type=\"text\" ng-model=\"promo.selectedTC\"></textarea>"+
            "</div>"+
            "<div class=\"row interview-row\">"+
      				"<label class=\"col-sm-6 col-sm-offset-1 form-rowB\">Start Date: </label>"+
      				"<input class=\"col-md-2 form-textBox\" name=\"promoStartDate\" type=\"date\" ng-model=\"promo.startDate\"/>"+
      			"</div>"+
            "<div class=\"row interview-row\">"+
              "<label class=\"col-sm-6 col-sm-offset-1 form-rowB\">End Date: </label>"+
              "<input class=\"col-md-2 form-textBox\" name=\"promoEndDate\" type=\"date\" ng-model=\"promo.endDate\"/>"+
            "</div>"+
            "<div class=\"row interview-row\">"+
              "<label class=\"col-sm-6 col-sm-offset-1 form-rowB\">Rule Type: </label>"+
              "<select ng-model=\"promo.ruleTyp\" class=\"col-md-2 text-center form-textBox interview-col-select\"> "+
                  "<option ng-repeat=\"r in promo.ruleTypes\">{{r.type}}</option>"+
              "</select>"+
            "</div>"+
            "<div class=\"row interview-row\">"+
              "<label class=\"col-sm-6 col-sm-offset-1 form-rowB\">Rule Specification: </label>"+
              "<select ng-model=\"promo.ruleVal\" ng-disabled=\"!promo.ruleTyp\" class=\"col-md-2 text-center form-textBox interview-col-select\">"+
                  "<option ng-repeat=\"r in promo.ruleValues | filter:promo.ruleTyp \">{{r.ruleValue}}</option>"+
              "</select>"+
            "</div>"+
            "<div class=\"row interview-row\">"+
              "<label class=\"col-sm-6 col-sm-offset-1 form-rowB\">Reminder Notication Days: </label>"+
              "<select class=\"col-md-2 text-center form-textBox interview-col-select\" ng-model=\"promo.notificationDaysRemind\" "+
                  "ng-options=\"reminder for reminder in promo.reminderList\">"+
              "</select>"+
            "</div>"+
            "<div class=\"row interview-row\">"+
              "<label class=\"col-sm-6 col-sm-offset-1 form-rowB\">Enrollment Deadline Date: </label>"+
              "<select class=\"col-md-2 text-center form-textBox interview-col-select\" ng-model=\"promo.enrollmentDeadline\" "+
                  "ng-options=\"deadline for deadline in promo.deadlineList\">"+
              "</select>"+
            "</div>"+
          "<div class=\"row text-center interview-row-submitApproval\">"+
            "<button type=\"button\" id=\"{{buttonDisable}}\" class=\"menu-btn-group btn submit-approval-form\" data-toggle=\"modal\" data-target=\"#createModal\" "+
            "ng-click=\"goSubmit( promo.id, promo.name, promo.selectedBenefit, promo.longDesc, promo.selectedTC, "+
              "promo.startDate, promo.endDate, promo.ruleTyp, promo.ruleVal, promo.notificationDaysRemind, promo.enrollmentDeadline, "+
              "promo.status, promo.benefit )\">Submit for Approval</button>"+
            "<div class=\"modal fade\" id=\"createModal\" tabindex=\"-1\" role=\"dialog\">"+
              "<div class=\"modal-dialog\">"+
                "<div class=\"modal-content\">"+
                  "<img src=\"resources/static/check_mark_icon.png\" class=\"cap-icon-small-special\" />"+
                  "<div class=\"modal-body\">"+
                    "<p>Promotion submitted<br />with<br />Hash Code: {{promo.id}}<br />Block 1 is complete</p>"+
                  "</div>"+
                  "<button type=\"button\" class=\"btn btn-primary modal-btn\" ng-click=\"promoCreateDisable = true;changeButtonColor();\" data-dismiss=\"modal\">OK</button>"+
                "</div>"+
              "</div>"+
            "</div>"+
          "</div>"+
        "</fieldset>"+
        "</form>"+
        "</div>",
        params: {
          promoId: null, promoName: null, userName: null, promoBenefit : null, promoDesc : null, promoTerms : null,
          promoStartDate : null, promoEndDate : null, promoRuleTyp : null, promoRuleVal : null, promoReminder : null,
          promoEnrollment : null, promoStatus : null, promoCusBenefit : null
        }
      })
      .state('promoList', {
        url: "/promoList",
        controller: "LoadPromosCtrl",
        template: "<div class=\"row subtitle-row-small\">"+
        "<img src=\"resources/static/Company_DCP_logo.png\" class=\"cap-icon-normal-pageHeader\" />"+
        "<img src=\"resources/static/Page_Header_Title_Icon.png\" class=\"header-title-icon\" />"+
        "<div class=\"header-page-title\">Marketing Promotions</div>"+
        "<div class=\"header-main-rightside\">"+
          "<div style=\"float:right\">"+
            "<div class=\"header-profile-namerole\">{{user.name}}<br/>{{user.role}}</div>"+
            "<img src=\"resources/static/director_profile_picture.png\" class=\"header-profile-pic\" />"+
            "<img src=\"resources/static/logout_icon.png\" class=\"header-logout-icon\" />"+
            "<img src=\"resources/static/director_company_logo.png\" class=\"companyDir-icon-not-login\" />"+
          "</div>"+
        "</div>"+
      "</div>"+
      "<div class=\"row modal-color\">"+
        "<div id=\"customerlist\">"+
          "<table class=\"promosTable-Header\">"+
            "<tr style=\"color:#5d546d;font-size:large\">"+
                "<th class=\"text-center\" style=\"width:30%\">Promotion Name</th>"+
                "<th class=\"text-center\" style=\"width:20%\">Start Date</th>"+
                "<th class=\"text-center\" style=\"width:20%\">End Date</th>"+
                "<th class=\"text-center\">Status</th>"+
            "</tr>"+
          "</table>"+
        "</div>"+
      "</div>"+

      "<div class=\"row modal-color\" style=\"margin-top:20px\">"+
          "<table class=\"table table-hover promosTable-content\">"+
            "<tr ng-click=\"goPromoApproval( promo.id, promo.promoName, promo.businessBenefit, promo.promoLongDescription, promo.tc, "+
              "promo.startDate, promo.endDate, promo.ruleTyp, promo.ruleVal, promo.notificationDaysRemind, promo.enrollmentDeadline, promo.status, promo.benefit)\" "+
              "ng-repeat=\"promo in promos | orderBy : 'promoName'\" "+
              "ng-class=\"{'promo-pending' : promo.status == 'Pending Approval', 'promo-approved' : promo.status == 'Approved'}\">"+
              "<td class=\"text-center\" style=\"width:30%\">{{promo.promoName}}</td>"+
              "<td class=\"text-center\" >{{promo.startDate}}</td>"+
              "<td class=\"text-center\" >{{promo.endDate}}</td>"+
              "<td class=\"text-center\" >{{promo.status}}</td>"+
            "</tr>"+
        "</table>"
      })
      .state('promoApproval', {
        url: "/promoApproval",
        controller: "PromoApprovalCtrl",
        template: "<div class=\"row subtitle-row-small\">"+
        "<img src=\"resources/static/Company_DCP_logo.png\" class=\"cap-icon-normal-pageHeader\" />"+
        "<img src=\"resources/static/Page_Header_Title_Icon.png\" class=\"header-title-icon\" />"+
        "<div class=\"header-page-title\">Approve/Deny Promotion</div>"+
        "<div class=\"header-main-rightside\">"+
          "<div style=\"float:right\">"+
            "<div class=\"header-profile-namerole\">{{user.name}}<br/>{{user.role}}</div>"+
            "<img src=\"resources/static/director_profile_picture.png\" class=\"header-profile-pic\" />"+
            "<img src=\"resources/static/logout_icon.png\" class=\"header-logout-icon\" />"+
            "<img src=\"resources/static/director_company_logo.png\" class=\"companyDir-icon-not-login\" />"+
          "</div>"+
        "</div>"+
      "</div>"+
      "<div class=\"modal-color\">"+
        "<form id=\"reviewPromoForm\" action=\"\" name=\"reviewPromoForm\" class=\"form-font\" method=\"POST\">"+
          "<fieldset ng-disabled=\"promoUpdateDisable && promo.status != 'Approved'\" \">"+
            "<div class=\"row interview-row\">"+
              "<label class=\"col-sm-6 col-sm-offset-1 form-rowB\">Promotion Name: </label>"+
              "<input class=\"col-md-2 form-textBox readonlyText\" name=\"promoName\" type=\"text\" ng-model=\"promo.name\"/ disabled>"+
            "</div>"+
            "<div class=\"row interview-row\">"+
              "<label class=\"col-sm-6 col-sm-offset-1 form-rowB\">Business Benefits: </label>"+
              "<input class=\"col-md-2 form-textBox readonlyText\" name=\"promoBusinessBenefit\" type=\"text\" ng-model=\"promo.selectedBenefit\"/ disabled>"+
            "</div>"+
            "<div class=\"row interview-row\">"+
              "<label class=\"col-sm-6 col-sm-offset-1 form-rowB\">Customer Benefits: </label>"+
              "<input class=\"col-md-2 form-textBox readonlyText\" name=\"promoCustomerBenefit\" type=\"text\" ng-model=\"promo.benefit\"/ disabled>"+
            "</div>"+
            "<div class=\"row interview-row\">"+
              "<label class=\"col-sm-6 col-sm-offset-1 form-rowB\">Description: </label>"+
              "<textarea id=\"textarea-desc\" class=\"col-md-2 readonlyText interview-col-textarea\" name=\"promoLongDesc\" ng-model=\"promo.longDesc\" disabled></textarea>"+
            "</div>"+
            "<div class=\"row interview-row\">"+
              "<label class=\"col-sm-6 col-sm-offset-1 form-rowB\">Terms and Conditions: </label>"+
              "<textarea class=\"col-md-2 readonlyText interview-col-textarea\" name=\"promoSelectedTC\" type=\"text\" ng-model=\"promo.selectedTC\" disabled></textarea>"+
            "</div>"+
            "<div class=\"row interview-row\">"+
      				"<label class=\"col-sm-6 col-sm-offset-1 form-rowB\">Start Date: </label>"+
      				"<input class=\"col-md-2 form-textBox readonlyText\" name=\"promoStartDate\" type=\"date\" ng-model=\"promo.startDate\"/ disabled>"+
      			"</div>"+
            "<div class=\"row interview-row\">"+
              "<label class=\"col-sm-6 col-sm-offset-1 form-rowB\">End Date: </label>"+
              "<input class=\"col-md-2 form-textBox readonlyText\" name=\"promoEndDate\" type=\"date\" ng-model=\"promo.endDate\"/ disabled>"+
            "</div>"+
            "<div class=\"row interview-row\">"+
              "<label class=\"col-sm-6 col-sm-offset-1 form-rowB\">Rule Type: </label>"+
              "<select ng-model=\"promo.ruleTyp\" class=\"col-md-2 form-textBox text-center interview-col-select\" disabled=\"true\"> "+
                  "<option ng-repeat=\"r in promo.ruleTypes\">{{r.type}}</option>"+
              "</select>"+
            "</div>"+
            "<div class=\"row interview-row\">"+
              "<label class=\"col-sm-6 col-sm-offset-1 form-rowB\">Rule Specification: </label>"+
              "<select ng-model=\"promo.ruleVal\" class=\"col-md-2 form-textBox text-center interview-col-select\" disabled=\"true\">"+
                  "<option ng-repeat=\"r in promo.ruleValues | filter:promo.ruleTyp \">{{r.ruleValue}}</option>"+
              "</select>"+
            "</div>"+
            "<div class=\"row interview-row\">"+
              "<label class=\"col-sm-6 col-sm-offset-1 form-rowB\">Reminder Notication Days: </label>"+
              "<select class=\"col-md-2 form-textBox text-center interview-col-select\" ng-model=\"promo.notificationDaysRemind\" "+
                  "ng-options=\"reminder for reminder in promo.reminderList\" disabled=\"true\">"+
              "</select>"+
            "</div>"+
            "<div class=\"row interview-row\">"+
              "<label class=\"col-sm-6 col-sm-offset-1 form-rowB\">Enrollment Deadline Date: </label>"+
              "<select class=\"col-md-2 form-textBox text-center interview-col-select\" ng-model=\"promo.enrollmentDeadline\" "+
                  "ng-options=\"deadline for deadline in promo.deadlineList\" disabled=\"true\">"+
              "</select>"+
            "</div>"+
          "<div class=\"row text-center interview-row-submit\">"+
            "<button ng-hide=\"promo.status != 'Approved'\" class=\"menu-btn-group btn approval-form\" type=\"button\" ng-click=\"logUser()\">Go Back</button>"+
            "<button ng-hide=\"promo.status == 'Approved'\" type=\"button\" style=\"margin-left:10px\" id=\"{{buttonDisableDeny}}\" class=\"menu-btn-group btn approval-form\" data-toggle=\"modal\" data-target=\"#denyModal\""+
            "ng-click=\"goDeny( promo.id, promo.name, promo.selectedBenefit, promo.longDesc, promo.selectedTC, "+
            "promo.startDate, promo.endDate, promo.ruleTyp, promo.ruleVal, promo.notificationDaysRemind, promo.enrollmentDeadline, promo.status, promo.benefit )\">Deny</button>"+
            "<div class=\"modal fade\" id=\"denyModal\" tabindex=\"-1\" role=\"dialog\">"+
              "<div class=\"modal-dialog\">"+
                "<div class=\"deny-modal-content\">"+
                  "<img src=\"resources/static/x_mark_icon.png\" class=\"cap-icon-small-special-x\" />"+
                  "<div class=\"modal-body\">"+
                    "<p>Promotion declined<br />with<br />Hash Code: {{promo.id}}</p>"+
                  "</div>"+
                  "<button type=\"button\" class=\"btn btn-primary modal-btn\" ng-click=\"logUser()\" data-dismiss=\"modal\">OK</button>"+
                "</div>"+
              "</div>"+
            "</div>"+
            "<button ng-hide=\"promo.status == 'Approved'\" type=\"button\" style=\"margin-left:10px\" id=\"{{buttonDisableApprove}}\" class=\"menu-btn-group btn approval-form\" data-toggle=\"modal\" data-target=\"#approveModal\""+
            "ng-click=\"goApprove( promo.id, promo.name, promo.selectedBenefit, promo.longDesc, promo.selectedTC, "+
            "promo.startDate, promo.endDate, promo.ruleTyp, promo.ruleVal, promo.notificationDaysRemind, promo.enrollmentDeadline, promo.status, promo.benefit )\">Approve</button>"+
            "<div class=\"modal fade\" id=\"approveModal\" tabindex=\"-1\" role=\"dialog\">"+
              "<div class=\"modal-dialog\">"+
                "<div class=\"modal-content\">"+
                  "<img src=\"resources/static/check_mark_icon.png\" class=\"cap-icon-small-special\" />"+
                  "<div class=\"modal-body\">"+
                    "<p>Promotion approved<br />with<br />Hash Code: {{promo.id}}<br />Block 2 is complete.</p>"+
                  "</div>"+
                  "<button type=\"button\" class=\"btn btn-primary modal-btn\" ng-click=\"logUser()\" data-dismiss=\"modal\">OK</button>"+
                "</div>"+
              "</div>"+
            "</div>"+
            "<button ng-hide=\"promo.status == 'Approved'\" id=\"{{buttonDisableEdit}}\" style=\"margin-left:10px\" class=\"menu-btn-group btn approval-form\" type=\"button\" "+
            "ng-click=\"goEdit( promo.id, promo.name, promo.selectedBenefit, promo.longDesc, promo.selectedTC, "+
            "promo.startDate, promo.endDate, promo.ruleTyp, promo.ruleVal, promo.notificationDaysRemind, promo.enrollmentDeadline, promo.status, promo.benefit )\">"+
            "Edit</button>"+
          "</div>"+
          "</fieldset>"+
        "</form>"+
        "</div>",
        params: {
          promoId: null, promoName: null, promoBenefit : null, promoDesc : null, promoTerms : null,
          promoStartDate : null, promoEndDate : null, promoRuleTyp : null, promoRuleVal : null, promoReminder : null,
          promoEnrollment : null, promoStatus : null, promoCusBenefit : null
        }
      })
      .state('editPromo', {
        url: "/editPromotion",
        controller: "PromoEditCtrl",
        template: "<div class=\"row subtitle-row-small\">"+
          "<img src=\"resources/static/Company_DCP_logo.png\" class=\"cap-icon-normal-pageHeader\" />"+
          "<img src=\"resources/static/Page_Header_Title_Icon.png\" class=\"header-title-icon\" />"+
          "<div class=\"header-page-title\">Update Promotion</div>"+
          "<div class=\"header-main-rightside\">"+
            "<div style=\"float:right\">"+
              "<div class=\"header-profile-namerole\">{{user.name}}<br/>{{user.role}}</div>"+
              "<img src=\"resources/static/director_profile_picture.png\" class=\"header-profile-pic\" />"+
              "<img src=\"resources/static/logout_icon.png\" class=\"header-logout-icon\" />"+
              "<img src=\"resources/static/director_company_logo.png\" class=\"companyDir-icon-not-login\" />"+
            "</div>"+
          "</div>"+
        "</div>"+
        "<div class=\"modal-color\">"+
        "<form id=\"reviewPromoForm\" action=\"\" name=\"reviewPromoForm\" class=\"form-font\" method=\"POST\">"+
            "<div class=\"row interview-row\">"+
              "<label class=\"col-sm-6 col-sm-offset-1 form-rowB\">Promotion Name: </label>"+
              "<input class=\"col-md-2 form-textBox\" name=\"promoName\" type=\"text\" ng-model=\"promo.name\"/>"+
            "</div>"+
            "<div class=\"row interview-row\">"+
              "<label class=\"col-sm-6 col-sm-offset-1 form-rowB\">Business Benefits: </label>"+
              "<input class=\"col-md-2 form-textBox\" name=\"promoBusinessBenefit\" type=\"text\" ng-model=\"promo.selectedBenefit\"/>"+
            "</div>"+
            "<div class=\"row interview-row\">"+
              "<label class=\"col-sm-6 col-sm-offset-1 form-rowB\">Customer Benefits: </label>"+
              "<input class=\"col-md-2 form-textBox\" name=\"promoCustomerBenefit\" type=\"text\" ng-model=\"promo.benefit\"/>"+
            "</div>"+
            "<div class=\"row interview-row\">"+
              "<label class=\"col-sm-6 col-sm-offset-1 form-rowB\">Description: </label>"+
              "<textarea id=\"textarea-desc\" class=\"col-md-2 interview-col-textarea\" name=\"promoLongDesc\" ng-model=\"promo.longDesc\"></textarea>"+
            "</div>"+
            "<div class=\"row interview-row\">"+
              "<label class=\"col-sm-6 col-sm-offset-1 form-rowB\">Terms and Conditions: </label>"+
              "<textarea class=\"col-md-2 interview-col-textarea\" name=\"promoSelectedTC\" type=\"text\" ng-model=\"promo.selectedTC\"></textarea>"+
            "</div>"+
            "<div class=\"row interview-row\">"+
              "<label class=\"col-sm-6 col-sm-offset-1 form-rowB\">Start Date: </label>"+
              "<input class=\"col-md-2 form-textBox\" name=\"promoStartDate\" type=\"date\" ng-model=\"promo.startDate\"/>"+
            "</div>"+
            "<div class=\"row interview-row\">"+
              "<label class=\"col-sm-6 col-sm-offset-1 form-rowB\">End Date: </label>"+
              "<input class=\"col-md-2 form-textBox\" name=\"promoEndDate\" type=\"date\" ng-model=\"promo.endDate\"/>"+
            "</div>"+
            "<div class=\"row interview-row\">"+
              "<label class=\"col-sm-6 col-sm-offset-1 form-rowB\">Rule Type: </label>"+
              "<select ng-model=\"promo.ruleTyp\" class=\"col-md-2 form-textBox text-center interview-col-select\"> "+
                  "<option ng-repeat=\"r in promo.ruleTypes\">{{r.type}}</option>"+
              "</select>"+
            "</div>"+
            "<div class=\"row interview-row\">"+
              "<label class=\"col-sm-6 col-sm-offset-1 form-rowB\">Rule Specification: </label>"+
              "<select ng-model=\"promo.ruleVal\" ng-disabled=\"!promo.ruleTyp\" class=\"col-md-2 form-textBox text-center interview-col-select\">"+
                  "<option ng-repeat=\"r in promo.ruleValues | filter:promo.ruleTyp \">{{r.ruleValue}}</option>"+
              "</select>"+
            "</div>"+
            "<div class=\"row interview-row\">"+
              "<label class=\"col-sm-6 col-sm-offset-1 form-rowB\">Reminder Notication Days: </label>"+
              "<select class=\"col-md-2 form-textBox text-center interview-col-select\" ng-model=\"promo.notificationDaysRemind\" "+
                  "ng-options=\"reminder for reminder in promo.reminderList\">"+
              "</select>"+
            "</div>"+
            "<div class=\"row interview-row\">"+
              "<label class=\"col-sm-6 col-sm-offset-1 form-rowB\">Enrollment Deadline Date: </label>"+
              "<select class=\"col-md-2 form-textBox text-center interview-col-select\" ng-model=\"promo.enrollmentDeadline\" "+
                  "ng-options=\"deadline for deadline in promo.deadlineList\">"+
              "</select>"+
            "</div>"+
          "<div class=\"row text-center interview-row-submit\">"+
          "<button type=\"button\" ng-click=\"goSave( promo.id, promo.name, promo.selectedBenefit, promo.longDesc, promo.selectedTC, "+
            "promo.startDate, promo.endDate, promo.ruleTyp, promo.ruleVal, promo.notificationDaysRemind, promo.enrollmentDeadline, promo.status, promo.benefit)\" "+
            "class=\"menu-btn-group btn approval-form\" data-toggle=\"modal\" data-target=\"#updateModal\">Save</button>"+
          "<div class=\"modal fade\" id=\"updateModal\" tabindex=\"-1\" role=\"dialog\">"+
            "<div class=\"modal-dialog\">"+
              "<div class=\"modal-content\">"+
                "<img src=\"resources/static/check_mark_icon.png\" class=\"cap-icon-small-special\" />"+
                "<div class=\"modal-body\">"+
                  "<p>Promotion updated<br />with<br />Hash Code: {{promo.id}}</p>"+
                "</div>"+
                "<button type=\"button\" ng-click=\"goBackToEdit( promo.id, promo.name, promo.selectedBenefit, promo.longDesc, promo.selectedTC, "+
                  "promo.startDate, promo.endDate, promo.ruleTyp, promo.ruleVal, promo.notificationDaysRemind, promo.enrollmentDeadline, promo.status, promo.benefit )\" "+
                  "class=\"btn btn-primary modal-btn\" data-dismiss=\"modal\">OK</button>"+
              "</div>"+
            "</div>"+
          "</div>"+
          "</div>"+
        "</form>"+
        "</div>",
        params: {
          promoId: null, promoName: null, promoBenefit : null, promoDesc : null, promoTerms : null,
          promoStartDate : null, promoEndDate : null, promoRuleTyp : null, promoRuleVal : null, promoReminder : null,
          promoEnrollment : null, promoStatus : null, promoCusBenefit : null
        }
      })
      .state('customerAppliesForPromo', {
        url: "/promoApply",
        controller: "PromoApplyCtrl",
        template: "<div class=\"row subtitle-row-small\">"+
          "<img src=\"resources/static/Company_DCP_logo.png\" class=\"cap-icon-normal-pageHeader\" />"+
          "<img src=\"resources/static/Page_Header_Title_Icon.png\" class=\"header-title-icon\" />"+
          "<div class=\"header-page-title\">Apply for Promotion</div>"+
          "<div class=\"header-main-rightside\">"+
            "<div style=\"float:right\">"+
              "<div class=\"header-profile-namerole\">{{user.name}}<br/>{{user.role}}</div>"+
              "<img src=\"resources/static/customer_profile_picture.png\" class=\"header-profile-pic\" />"+
              "<img src=\"resources/static/logout_icon.png\" class=\"header-logout-icon\" />"+
              "<img src=\"resources/static/director_company_logo.png\" class=\"companyDir-icon-not-login\" />"+
            "</div>"+
          "</div>"+
        "</div>"+
        "<div class=\"modal-color\">"+
        "<form id=\"applyPromoForm\" action=\"\" name=\"applyPromoForm\" class=\"form-font\" method=\"POST\">"+
          "<fieldset ng-disabled=\"promoApplyDisable\">"+
            "<div class=\"row interview-row\">"+
              "<label class=\"col-sm-6 col-sm-offset-1 form-rowB\">Customer Name: </label>"+
              "<input class=\"col-md-2 form-textBox readonlyText\" name=\"customerName\" type=\"text\" ng-model=\"promo.customerName\"/ disabled>"+
            "</div>"+
            "<div class=\"row interview-row\">"+
              "<label class=\"col-sm-6 col-sm-offset-1 form-rowB\">Customer Billing Information: </label>"+
              "<input class=\"col-md-2 form-textBox readonlyText\" name=\"customerBilling\" type=\"text\" ng-model=\"promo.customerBilling\"/ disabled>"+
            "</div>"+
            "<div class=\"row interview-row\">"+
              "<label class=\"col-sm-6 col-sm-offset-1 form-rowB\">Promotion Name: </label>"+
              "<input class=\"col-md-2 form-textBox readonlyText\" name=\"promoName\" type=\"text\" ng-model=\"promo.name\"/ disabled>"+
            "</div>"+
            "<div class=\"row interview-row\">"+
              "<label class=\"col-sm-6 col-sm-offset-1 form-rowB\">Description: </label>"+
              "<textarea id=\"textarea-desc\" class=\"col-md-2 readonlyText interview-col-textarea\" name=\"promoLongDesc\" ng-model=\"promo.longDesc\" disabled></textarea>"+
            "</div>"+
            "<div class=\"row interview-row\">"+
              "<label class=\"col-sm-6 col-sm-offset-1 form-rowB\">Terms and Conditions: </label>"+
              "<textarea class=\"col-md-2 readonlyText interview-col-textarea\" name=\"promoSelectedTC\" type=\"text\" ng-model=\"promo.selectedTC\" disabled></textarea>"+
            "</div>"+
            "<div class=\"row interview-row\">"+
              "<label class=\"col-sm-6 col-sm-offset-1 form-rowB\">Start Date: </label>"+
              "<input class=\"col-md-2 form-textBox readonlyText\" name=\"promoStartDate\" type=\"date\" ng-model=\"promo.startDate\"/ disabled>"+
            "</div>"+
            "<div class=\"row interview-row\">"+
              "<label class=\"col-sm-6 col-sm-offset-1 form-rowB\">End Date: </label>"+
              "<input class=\"col-md-2 form-textBox readonlyText\" name=\"promoEndDate\" type=\"date\" ng-model=\"promo.endDate\"/ disabled>"+
            "</div>"+
            "<div class=\"row interview-row\">"+
              "<label class=\"col-sm-6 col-sm-offset-1 form-rowB\">Enrollment Deadline Date: </label>"+
              "<input class=\"col-md-2 form-textBox readonlyText\" name=\"promoEnrollment\" type=\"text\" ng-model=\"promo.enrollmentDeadline\"/ disabled>"+
            "</div>"+
            "<div class=\"row interview-row\">"+
              "<label class=\"col-sm-6 col-sm-offset-1 form-rowB\">Post Promotion Customer Billing Information: </label>"+
              "<input class=\"col-md-2 form-textBox readonlyText\" name=\"postPromoBilling\" type=\"text\" ng-model=\"promo.postPromoBilling\"/ disabled>"+
            "</div>"+
          "<div class=\"row text-center interview-row-submitApproval\">"+
            "<button type=\"button\" id=\"{{buttonDisable}}\" class=\"menu-btn-group btn submit-approval-form\" data-toggle=\"modal\" data-target=\"#applyModal\" "+
            "ng-click=\"goApply( promo.id, promo.customerName, promo.customerBilling, promo.name, promo.longDesc, promo.selectedTC, "+
            "promo.startDate, promo.endDate, promo.enrollmentDeadline, promo.postPromoBilling )\">Apply for Promotion</button>"+
            "<div class=\"modal fade\" id=\"applyModal\" tabindex=\"-1\" role=\"dialog\">"+
              "<div class=\"modal-dialog\">"+
                "<div class=\"modal-content\">"+
                  "<img src=\"resources/static/check_mark_icon.png\" class=\"cap-icon-small-special\" />"+
                  "<div class=\"modal-body\">"+
                    "<p>Your request for the promotion has been submitted<br />with<br />Hash Code: {{promo.id}}<br />Please check back for your approval status.</p>"+
                  "</div>"+
                  "<button type=\"button\" class=\"btn btn-primary modal-btn\" ng-click=\"promoApplyDisable = true;changeButtonColor();\" data-dismiss=\"modal\">OK</button>"+
                "</div>"+
              "</div>"+
            "</div>"+
          "</div>"+
          "</fieldset>"+
        "</form>"+
        "</div>",
        params: {
          promoId: null, promoName: null, customerName : null, promoDesc : null, promoTerms : null,
          promoStartDate : null, promoEndDate : null, customerBilling : null, promoReminder : null,
          promoEnrollment : null, postPromoBilling : null
        }
      })
      .state('customerBillingSuccess', {
        url: "/promotionAccepted",
        controller: "PromotionAcceptedCtrl",
        template: "<div class=\"row subtitle-row-small\">"+
        "<img src=\"resources/static/Company_DCP_logo.png\" class=\"cap-icon-normal-pageHeader\" />"+
        "<img src=\"resources/static/Page_Header_Title_Icon.png\" class=\"header-title-icon\" />"+
        "<div class=\"header-page-title\">Promotion Status</div>"+
        "<div class=\"header-main-rightside\">"+
          "<div style=\"float:right\">"+
            "<div class=\"header-profile-namerole\">{{user.name}}<br/>{{user.role}}</div>"+
            "<img src=\"resources/static/customer_profile_picture.png\" class=\"header-profile-pic\" />"+
            "<img src=\"resources/static/logout_icon.png\" class=\"header-logout-icon\" />"+
            "<img src=\"resources/static/director_company_logo.png\" class=\"companyDir-icon-not-login\" />"+
          "</div>"+
        "</div>"+
      "</div>"+
      "<div class=\"row modal-color customer-menu\">"+
      "<div class=\"customer-msg-text\">"+
          "<p>Congratulations, {{promo.customerName}}!<br />"+
            "Thank you for being a valued customer.<br />"+
            "Your request for promotion has been approved.<br />"+
            "Your current bill is {{promo.customerBilling}}. With \"{{promo.name}}\", your<br />"+
            "new bill will be {{promo.postPromoBilling}} starting {{promo.startDate}} to {{promo.endDate}}<br />"+
            "Block 3 is complete."+
          "</p>"+
        "</div>"+
        "</div>",
        params: {
          promoId: null, promoName: null, customerName : null, promoDesc : null, promoTerms : null,
          promoStartDate : null, promoEndDate : null, customerBilling : null, promoReminder : null,
          promoEnrollment : null, postPromoBilling : null
        }
      })
      .state('customerBillingRejection', {
        url: "/promotionRejected",
        controller: "PromotionRejectedCtrl",
        template: "<div class=\"row subtitle-row-small\">"+
        "<img src=\"resources/static/Company_DCP_logo.png\" class=\"cap-icon-normal-pageHeader\" />"+
        "<img src=\"resources/static/Page_Header_Title_Icon.png\" class=\"header-title-icon\" />"+
        "<div class=\"header-page-title\">Promotion Status</div>"+
        "<div class=\"header-main-rightside\">"+
          "<div style=\"float:right\">"+
            "<div class=\"header-profile-namerole\">{{user.name}}<br/>{{user.role}}</div>"+
            "<img src=\"resources/static/customer_profile_picture.png\" class=\"header-profile-pic\" />"+
            "<img src=\"resources/static/logout_icon.png\" class=\"header-logout-icon\" />"+
            "<img src=\"resources/static/director_company_logo.png\" class=\"companyDir-icon-not-login\" />"+
          "</div>"+
        "</div>"+
      "</div>"+
        "<div class=\"row modal-color customer-menu\">"+
        "<div class=\"customer-msg-text\">"+
          "<p>{{user.name}},<br />"+
            "Thank you for being a valued customer.<br />"+
            "Unfortunately, we are not able to approve your application<br />"+
            "for \"{{user.promo}}\" at this time<br />"+
            "due to extenuating circumstances.<br />"+
            "Block 3 is complete."+
          "</p>"+
        "</div>"+
      "</div>",
      params: {
        promoId: null, promoName: null, customerName : null, promoDesc : null, promoTerms : null,
        promoStartDate : null, promoEndDate : null, customerBilling : null, promoReminder : null,
        promoEnrollment : null, postPromoBilling : null
      }
    })
  })
  .controller("LoadPromosCtrl", function($scope, $state, $http) {
    $http.get('/retrieve/promotion')
      .then(function (data) {
        var promoList = [];
        var promoEntry = '';
        for( var i = 0; i < data["data"].length; i++ ) {
          if( data["data"][i]["data"] != undefined ) {
              var keyName = Object.keys(data["data"][i]["data"]["rules"]);

              promoEntry = {
                id: data["data"][i]["hash"],
                promoName: data["data"][i]["data"].promoName,
                businessBenefit:  data["data"][i]["data"].businessBenefit,
                promoLongDescription: data["data"][i]["data"].promoLongDescription,
                tc: data["data"][i]["data"].tc,
                startDate: data["data"][i]["data"].startDate,
                endDate: data["data"][i]["data"].endDate,
                ruleTyp: keyName[0],
                ruleVal: data["data"][i]["data"]["rules"][keyName[0]],
                notificationDaysRemind: data["data"][i]["data"].reminderNotificationDays,
                enrollmentDeadline: data["data"][i]["data"].enrollmentDeadlineDays,
                benefit: data["data"][i]["data"].benefit,
                status: data["data"][i]["data"].status
              };
              promoList.splice(i,0,promoEntry);
          }
        }
        $scope.promos = promoList;
    });

    $scope.user = {
      name: 'Williams',
      role: 'Marketing Director'
    };

    $scope.goPromoApproval = function( promoId, promoName, promoBenefit,
      promoDesc, promoTerms, promoStart, promoEnd, promoRuleTyp, promoRuleVal, promoReminder,
      promoEnrollment, promoStatus, promoCusBenefit ) {
      $state.go( "promoApproval", { promoId : promoId, promoName : promoName,
        promoBenefit : promoBenefit, promoDesc : promoDesc,
        promoTerms : promoTerms, promoStartDate : promoStart,
        promoEndDate : promoEnd, promoRuleTyp : promoRuleTyp, promoRuleVal : promoRuleVal,
        promoReminder : promoReminder, promoEnrollment : promoEnrollment,
        promoStatus : promoStatus, promoCusBenefit : promoCusBenefit }
      );
    }
  })
  .controller("PromoApprovalCtrl", function($scope, $state, $http, $stateParams) {
      if( $stateParams.promoStatus == 'Approved' ) {
        $scope.promoUpdateDisable = true;
        $scope.buttonDisableApprove="button-disable";
        $scope.buttonDisableDeny="button-disable";
        $scope.buttonDisableEdit="button-disable";
      } else {
        $scope.promoUpdateDisable = false;
        $scope.buttonDisableApprove="";
        $scope.buttonDisableDeny="";
        $scope.buttonDisableEdit="";
      }
      $scope.user = {
        name: 'Williams',
        role: 'Marketing Director'
      };

      $scope.promo = {
        id: $stateParams.promoId,
        name: $stateParams.promoName,
        selectedBenefit: $stateParams.promoBenefit,
        longDesc: $stateParams.promoDesc,
        selectedTC: $stateParams.promoTerms,
        startDate: new Date($stateParams.promoStartDate),
        endDate: new Date($stateParams.promoEndDate),
        ruleTyp: $stateParams.promoRuleTyp,
        ruleTypes: [ {type: "Rate_Plan"}, {type:"SKU"} ],
        ruleVal: $stateParams.promoRuleVal,
        ruleValues: [
          { ruleType: "Rate_Plan", ruleValue: "TMO_One" },
          { ruleType: "Rate_Plan", ruleValue: "Simple_Choice" },
          { ruleType: "SKU", ruleValue: "Any_Number_Values" }
        ],
        notificationDaysRemind: $stateParams.promoReminder,
        reminderList: [ "5", "10", "15" ],
        enrollmentDeadline: $stateParams.promoEnrollment,
        benefit: $stateParams.promoCusBenefit,
        deadlineList: [ "5", "10", "15" ],
        status: $stateParams.promoStatus
      };

      $scope.goApprove = function( promoId, promoName, promoBenefit,
        promoDesc, promoTerms, promoStart, promoEnd, promoRuleTyp, promoRuleVal, promoReminder,
        promoEnrollment, promoStatus, promoCusBenefit ) {
          var postData = "{ "+
            "\"hashCode\" : \""+promoId+"\", "+
            "\"promoName\" : \""+promoName+"\", "+
            "\"promoLongDescription\" : \""+promoDesc+"\", "+
            "\"businessBenefit\" : \""+promoBenefit+"\", "+
            "\"tc\" : \""+promoTerms+"\", "+
            "\"startDate\" : \""+promoStart+"\", "+
            "\"endDate\" : \""+promoEnd+"\", "+
            "\"rule\" : { \""+promoRuleTyp+"\" : \""+promoRuleVal+"\" }, "+
            "\"reminderNotificationDays\" : \""+promoReminder+"\", "+
            "\"enrollmentDeadlineDays\" : \""+promoEnrollment+"\", "+
            "\"benefit\" : \""+promoCusBenefit+"\", "+
            "\"status\" : \"Approved\" "+
          "}";
          $http.post('/approve/promotion', postData)
          .then(function (data) {
            $scope.promo.id = data["data"]["hash"];
          }).catch(function(error) {
            console.log(error);
          });
      }

      $scope.goDeny = function( promoId, promoName, promoBenefit,
        promoDesc, promoTerms, promoStart, promoEnd, promoRuleTyp, promoRuleVal, promoReminder,
        promoEnrollment, promoStatus, promoCusBenefit ) {
          var postData = "{ "+
            "\"hashCode\" : \""+promoId+"\", "+
            "\"promoName\" : \""+promoName+"\", "+
            "\"promoLongDescription\" : \""+promoDesc+"\", "+
            "\"businessBenefit\" : \""+promoBenefit+"\", "+
            "\"tc\" : \""+promoTerms+"\", "+
            "\"startDate\" : \""+promoStart+"\", "+
            "\"endDate\" : \""+promoEnd+"\", "+
            "\"rule\" : { \""+promoRuleTyp+"\" : \""+promoRuleVal+"\" }, "+
            "\"reminderNotificationDays\" : \""+promoReminder+"\", "+
            "\"enrollmentDeadlineDays\" : \""+promoEnrollment+"\", "+
            "\"benefit\" : \""+promoCusBenefit+"\", "+
            "\"status\" : \"Denied\" "+
          "}";
          $http.post('/deny/promotion', postData)
          .then(function (data) {
          }).catch(function(error) {
            console.log(error);
          });
      }

      $scope.goEdit = function( promoId, promoName, promoBenefit,
        promoDesc, promoTerms, promoStart, promoEnd, promoRuleTyp, promoRuleVal, promoReminder,
        promoEnrollment, promoStatus, promoCusBenefit ) {
        $state.go( "editPromo", { promoId : promoId, promoName : promoName,
          promoBenefit : promoBenefit, promoDesc : promoDesc,
          promoTerms : promoTerms, promoStartDate : promoStart,
          promoEndDate : promoEnd, promoRuleTyp : promoRuleTyp, promoRuleVal : promoRuleVal,
          promoReminder : promoReminder, promoEnrollment : promoEnrollment,
          promoStatus : promoStatus, promoCusBenefit : promoCusBenefit }
        );
      }

      $scope.logUser = function() {
        $state.go("promoList");
      }
  })
  .controller("PromoEditCtrl", function($scope, $state, $http, $stateParams) {
    $scope.user = {
      name: 'Williams',
      role: 'Marketing Director'
    };

    $scope.promo = {
      id: $stateParams.promoId,
      name: $stateParams.promoName,
      selectedBenefit: $stateParams.promoBenefit,
      longDesc: $stateParams.promoDesc,
      selectedTC: $stateParams.promoTerms,
      startDate: new Date($stateParams.promoStartDate),
      endDate: new Date($stateParams.promoEndDate),
      ruleTyp: $stateParams.promoRuleTyp,
      ruleTypes: [ {type: "Rate_Plan"}, {type:"SKU"} ],
      ruleVal: $stateParams.promoRuleVal,
      ruleValues: [
        { ruleType: "Rate_Plan", ruleValue: "TMO_One" },
        { ruleType: "Rate_Plan", ruleValue: "Simple_Choice" },
        { ruleType: "SKU", ruleValue: "Any_Number_Values" }
      ],
      notificationDaysRemind: $stateParams.promoReminder,
      reminderList: [ "5", "10", "15" ],
      enrollmentDeadline: $stateParams.promoEnrollment,
      deadlineList: [ "5", "10", "15" ],
      benefit: $stateParams.promoCusBenefit,
      status: $stateParams.promoStatus
    };

    $scope.goBackToEdit = function( promoId, promoName, promoBenefit,
      promoDesc, promoTerms, promoStart, promoEnd, promoRuleTyp, promoRuleVal,
      promoReminder, promoEnrollment, promoStatus, promoCusBenefit ) {
      $state.go( "promoApproval", { promoId : promoId, promoName : promoName,
        promoBenefit : promoBenefit, promoDesc : promoDesc,
        promoTerms : promoTerms, promoStartDate : promoStart,
        promoEndDate : promoEnd, promoRuleTyp : promoRuleTyp, promoRuleVal : promoRuleVal,
        promoReminder : promoReminder, promoEnrollment : promoEnrollment,
        promoStatus : promoStatus, promoCusBenefit : promoCusBenefit }
      );
    }

    $scope.goSave = function( promoId, promoName, promoBenefit,
      promoDesc, promoTerms, promoStart, promoEnd, promoRuleTyp, promoRuleVal,
      promoReminder, promoEnrollment, promoStatus, promoCusBenefit ) {
        var postData = "{ "+
          "\"hashCode\" : \""+promoId+"\", "+
          "\"promoName\" : \""+promoName+"\", "+
          "\"promoLongDescription\" : \""+promoDesc+"\", "+
          "\"businessBenefit\" : \""+promoBenefit+"\", "+
          "\"tc\" : \""+promoTerms+"\", "+
          "\"startDate\" : \""+promoStart+"\", "+
          "\"endDate\" : \""+promoEnd+"\", "+
          "\"rule\" : { \""+promoRuleTyp+"\" : \""+promoRuleVal+"\" }, "+
          "\"reminderNotificationDays\" : \""+promoReminder+"\", "+
          "\"enrollmentDeadlineDays\" : \""+promoEnrollment+"\", "+
          "\"benefit\" : \""+promoCusBenefit+"\", "+
          "\"status\" : \""+promoStatus+"\" "+
        "}";
        $http.post('/update/promotion', postData)
        .then(function (data) {
          $scope.promo.id = data["data"]["hash"];
        }).catch(function(error) {
          console.log(error);
        });
      }
  })
  .controller("PromoApplyCtrl", function($scope, $state, $stateParams) {
      $scope.promoApplyDisable = false;
      $scope.user = {
        name: $stateParams.customerName,
        role: 'Customer'
      };

      $scope.promo = {
        id: $stateParams.promoId,
        name: $stateParams.promoName,
        customerName: $stateParams.customerName,
        customerBilling: $stateParams.customerBilling,
        postPromoBilling: $stateParams.postPromoBilling,
        longDesc: $stateParams.promoDesc,
        selectedTC: $stateParams.promoTerms,
        startDate: new Date($stateParams.promoStartDate),
        endDate: new Date($stateParams.promoEndDate),
        enrollmentDeadline: $stateParams.promoEnrollment,
        deadlineList: [ "5", "10", "15" ],
      };

      $scope.changeButtonColor = function() {
        $scope.buttonDisable="button-disable";
      }

      $scope.goApply = function( promoId, customerName, customerBilling, promoName,
        promoDesc, promoTerms, promoStart, promoEnd, promoEnrollment,
        postPromoBilling )
      {
        // Submit Service Call
      }
  })
  .controller("PromotionAcceptedCtrl", function($scope, $state, $stateParams) {
      $scope.user = {
        name: $stateParams.customerName,
        role: 'Customer'
      };

      $scope.promo = {
        id: $stateParams.promoId,
        name: $stateParams.promoName,
        customerName: $stateParams.customerName,
        customerBilling: $stateParams.customerBilling,
        postPromoBilling: $stateParams.postPromoBilling,
        longDesc: $stateParams.promoDesc,
        selectedTC: $stateParams.promoTerms,
        startDate: $stateParams.promoStartDate,
        endDate: $stateParams.promoEndDate,
        enrollmentDeadline: $stateParams.promoEnrollment,
        deadlineList: [ "5", "10", "15" ],
      };
  })
  .controller("PromotionRejectedCtrl", function($scope, $state, $stateParams) {
      $scope.user = {
        name: $stateParams.customerName,
        role: 'Customer',
        promo: $stateParams.promoName
      };
  })
  .controller("PromoCreationCtrl", function($scope, $state, $http, $stateParams) {
      $scope.promoCreateDisable = false;
      $scope.user = {
        name: $stateParams.userName,
        role: 'Marketing Associate'
      };

      $scope.promo = {
        ruleTypes: [ {type: "Rate_Plan"}, {type:"SKU"} ],
        ruleValues: [
          { ruleType: "Rate_Plan", ruleValue: "TMO_One" },
          { ruleType: "Rate_Plan", ruleValue: "Simple_Choice" },
          { ruleType: "SKU", ruleValue: "Any_Number_Values" }
        ],
        notificationDaysRemind: "5",
        reminderList: [ "5", "10", "15" ],
        enrollmentDeadline: "5",
        deadlineList: [ "5", "10", "15" ],
        status: "Pending Approval"
      };

      $scope.changeButtonColor = function() {
        $scope.buttonDisable="button-disable";
      }

      $scope.logUser = function( userName ) {
          $scope.promo = {
            id: "",
            name: "",
            selectedBenefit: "",
            benefit: "",
            longDesc: "",
            selectedTC: "",
            startDate: "",
            endDate: "",
            ruleTyp: "",
            ruleVal: "",
            ruleTypes: [ {type: "Rate_Plan"}, {type:"SKU"} ],
            ruleValues: [
              { ruleType: "Rate_Plan", ruleValue: "TMO_One" },
              { ruleType: "Rate_Plan", ruleValue: "Simple_Choice" },
              { ruleType: "SKU", ruleValue: "Any_Number_Values" }
            ],
            notificationDaysRemind: "5",
            reminderList: [ "5", "10", "15" ],
            enrollmentDeadline: "5",
            deadlineList: [ "5", "10", "15" ],
            status: "Pending Approval"
          };
          $scope.promoCreateDisable = false;
          $scope.buttonDisable="";
          $state.go("promoCreation", {
            userName : userName }
          );
      }

      $scope.goSubmit = function( promoId, promoName, promoBenefit,
        promoDesc, promoTerms, promoStart, promoEnd, promoRuleTyp, promoRuleVal,
        promoReminder, promoEnrollment, promoStatus, promoCusBenefit ) {
          var postData = "{ "+
            "\"promoName\" : \""+promoName+"\", "+
            "\"promoLongDescription\" : \""+promoDesc+"\", "+
            "\"businessBenefit\" : \""+promoBenefit+"\", "+
            "\"tc\" : \""+promoTerms+"\", "+
            "\"startDate\" : \""+promoStart+"\", "+
            "\"endDate\" : \""+promoEnd+"\", "+
            "\"rule\" : { \""+promoRuleTyp+"\" : \""+promoRuleVal+"\" }, "+
            "\"reminderNotificationDays\" : \""+promoReminder+"\", "+
            "\"enrollmentDeadlineDays\" : \""+promoEnrollment+"\", "+
            "\"benefit\" : \""+promoCusBenefit+"\", "+
            "\"status\" : \""+promoStatus+"\" "+
          "}";
          console.log(postData);
          $http.post('/create/promotion', postData)
          .then(function (data) {
            $scope.promo.id = data["data"]["hash"];
          }).catch(function(error) {
            console.log(error);
          });
      }
  })
  .controller("LoginAssociateCtrl", function($scope, $state) {
    $scope.login = {
        username: 'Christopher',
        password: 'Margin'
    };

    $scope.logUser = function( userName ) {
        $state.go("promoCreation", {
          userName : userName }
        );
    }
  })
  .controller("LoginCustomerCtrl", function($scope, $state, $http) {
    $scope.login = {
        username: 'Joshua Smith',
        password: 'Revenue'
    };

    $http.get('/retrieve/approvedPromotion')
      .then(function (data) {
        $scope.promo = {
          id: data["data"][0]["hash"],
          name: data["data"][0]["data"].promoName,
          customerName: $scope.login.username,
          customerBilling: '$30 per month',
          longDesc: data["data"][0]["data"].promoLongDescription,
          selectedTC: data["data"][0]["data"].tc,
          startDate: new Date(data["data"][0]["data"].startDate),
          endDate: new Date(data["data"][0]["data"].endDate),
          notificationDaysRemind: data["data"][0]["data"].reminderNotificationDays,
          reminderList: [ "5", "10", "15" ],
          enrollmentDeadline: data["data"][0]["data"].enrollmentDeadlineDays,
          deadlineList: [ "5", "10", "15" ],
          postPromoBilling: data["data"][0]["data"].benefit,
          status: data["data"][0]["data"].status
        };
    });

    $scope.logUser = function( promoId, customerName, customerBilling, promoName,
      promoDesc, promoTerms, promoStart, promoEnd, promoReminder,
      promoEnrollment, postPromoBilling ) {
        $state.go("customerAppliesForPromo", { promoId : promoId, promoName : promoName,
          customerName : customerName, promoDesc : promoDesc,
          promoTerms : promoTerms, promoStartDate : promoStart,
          promoEndDate : promoEnd, customerBilling : customerBilling,
          promoReminder : promoReminder, promoEnrollment : promoEnrollment,
          postPromoBilling : postPromoBilling }
        );
    }
  })
  .controller("LoginSuccessfulCustomerCtrl", function($scope, $state, $http) {
    $scope.login = {
        username: 'Joshua Smith',
        password: 'Revenue'
    };

    $http.get('/retrieve/approvedPromotion')
      .then(function (data) {
        $scope.promo = {
          id: data["data"][0]["hash"],
          name: data["data"][0]["data"].promoName,
          customerName: $scope.login.username,
          customerBilling: '$30 per month',
          longDesc: data["data"][0]["data"].promoLongDescription,
          selectedTC: data["data"][0]["data"].tc,
          startDate: data["data"][0]["data"].startDate,
          endDate: data["data"][0]["data"].endDate,
          notificationDaysRemind: data["data"][0]["data"].reminderNotificationDays,
          reminderList: [ "5", "10", "15" ],
          enrollmentDeadline: data["data"][0]["data"].enrollmentDeadlineDays,
          deadlineList: [ "5", "10", "15" ],
          postPromoBilling: data["data"][0]["data"].benefit,
          status: data["data"][0]["data"].status
        };
    });

    $scope.logUser = function( promoId, customerName, customerBilling, promoName,
      promoDesc, promoTerms, promoStart, promoEnd, promoReminder,
      promoEnrollment, postPromoBilling ) {
        $state.go("customerBillingSuccess", { promoId : promoId, promoName : promoName,
          customerName : customerName, promoDesc : promoDesc,
          promoTerms : promoTerms, promoStartDate : promoStart,
          promoEndDate : promoEnd, customerBilling : customerBilling,
          promoReminder : promoReminder, promoEnrollment : promoEnrollment,
          postPromoBilling : postPromoBilling }
        );
    }
  })
  .controller("LoginRejectedCustomerCtrl", function($scope, $state, $http) {
    $scope.login = {
        username: 'Joshua Smith',
        password: 'Revenue'
    };

    $http.get('/retrieve/approvedPromotion')
      .then(function (data) {
        $scope.promo = {
          id: data["data"][0]["hash"],
          name: data["data"][0]["data"].promoName,
          customerName: $scope.login.username,
          customerBilling: '$30 per month',
          longDesc: data["data"][0]["data"].promoLongDescription,
          selectedTC: data["data"][0]["data"].tc,
          startDate: data["data"][0]["data"].startDate,
          endDate: data["data"][0]["data"].endDate,
          notificationDaysRemind: data["data"][0]["data"].reminderNotificationDays,
          reminderList: [ "5", "10", "15" ],
          enrollmentDeadline: data["data"][0]["data"].enrollmentDeadlineDays,
          deadlineList: [ "5", "10", "15" ],
          postPromoBilling: data["data"][0]["data"].benefit,
          status: data["data"][0]["data"].status
        };
    });

    $scope.logUser = function( customerName ) {
        $state.go("customerBillingRejection", {
          customerName: customerName, promoName : $scope.promo.name }
        );
    }
  })
  .controller("LoginDirectorCtrl", function($scope, $state) {
    $scope.login = {
        username: 'Williams',
        password: 'Sales'
      };
    $scope.logUser = function() {
      $state.go("promoList");
    }
  })
  .controller("LoginCtrl", function($scope, $state, $http) {
    $scope.login = {
        customer: 'Joshua Smith',
        customerPW: 'Revenue',
        director: 'Williams',
        directorPW: 'Sales',
        associate: 'Christopher',
        associatePW: 'Margin'
    };

    $http.get('/retrieve/approvedPromotion')
      .then(function (data) {
        $scope.promo = {
          id: data["data"][0]["hash"],
          name: data["data"][0]["data"].promoName,
          customerName: $scope.login.customer,
          customerBilling: '$30 per month',
          longDesc: data["data"][0]["data"].promoLongDescription,
          selectedTC: data["data"][0]["data"].tc,
          startDate: new Date(data["data"][0]["data"].startDate),
          endDate: new Date(data["data"][0]["data"].endDate),
          notificationDaysRemind: data["data"][0]["data"].reminderNotificationDays,
          reminderList: [ "5", "10", "15" ],
          enrollmentDeadline: data["data"][0]["data"].enrollmentDeadlineDays,
          deadlineList: [ "5", "10", "15" ],
          postPromoBilling: data["data"][0]["data"].benefit,
          status: data["data"][0]["data"].status
        };
    });

    $scope.logAssociate = function( userName ) {
        $state.go("promoCreation", {
          userName : userName }
        );
    }

    $scope.logDirector = function() {
      $state.go("promoList");
    }

    $scope.logCustomer = function( promoId, customerName, customerBilling, promoName,
      promoDesc, promoTerms, promoStart, promoEnd, promoReminder,
      promoEnrollment, postPromoBilling ) {
        $state.go("customerAppliesForPromo", { promoId : promoId, promoName : promoName,
          customerName : customerName, promoDesc : promoDesc,
          promoTerms : promoTerms, promoStartDate : promoStart,
          promoEndDate : promoEnd, customerBilling : customerBilling,
          promoReminder : promoReminder, promoEnrollment : promoEnrollment,
          postPromoBilling : postPromoBilling }
        );
    }
  });

})(angular);
