(function() {

"use strict";

angular.module('blockApp', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider, $httpProvider) {
    $urlRouterProvider.otherwise("/");
    delete $httpProvider.defaults.headers.common['X-Requested-With'];

  $stateProvider
      .state('login', {
        url: "/",
        controller: "LoginCtrl",
        template: "<div><div class=\"sign-in-screen\">"+
        "<div class=\"row\">"+
        "<img ng-click=\"backToLandingPage()\" src=\"resources/static/Company_DCP_logo.png\" class=\"cap-icon-normal-login\" />"+
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
        					"<div class=\"col-sm-10\">"+
        						"<input type=\"email\" ng-model=\"login.associate\" class=\"login-field\" required>"+
        					"</div>"+
        				"</div>"+
                "<div class=\"login-form-group-input\">"+
        					"<img class=\"login-image\" src=\"resources/static/Password_pic.JPG\" />"+
        					"<div class=\"col-sm-10\">"+
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
          "<img ng-click=\"backToLandingPage()\" src=\"resources/static/Company_DCP_logo.png\" class=\"cap-icon-normal-login\" />"+
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
                    "<div class=\"col-sm-10\">"+
                      "<input type=\"email\" ng-model=\"login.director\" class=\"login-field\" required>"+
                    "</div>"+
                  "</div>"+
                  "<div class=\"login-form-group-input\">"+
                    "<img class=\"login-image\" src=\"resources/static/Password_pic.JPG\" />"+
                    "<div class=\"col-sm-10\">"+
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
            "<div class=\"sign-in-screen\" style=\"margin-right:0px\" >"+
            "<div class=\"row\">"+
            "<img ng-click=\"backToLandingPage()\" src=\"resources/static/Company_DCP_logo.png\" class=\"cap-icon-normal-login\" />"+
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
                      "<div class=\"col-sm-10\">"+
                        "<input type=\"email\" ng-model=\"login.customer\" class=\"login-field\" required>"+
                      "</div>"+
                    "</div>"+
                    "<div class=\"login-form-group-input\">"+
                      "<img class=\"login-image\" src=\"resources/static/Password_pic.JPG\" />"+
                      "<div class=\"col-sm-10\">"+
                        "<input type=\"password\" ng-model=\"login.customerPW\" class=\"login-field\" required>"+
                      "</div>"+
                    "</div>"+
                    "<div class=\"login-form-group\">"+
                    "<div class=\"form-horizontal col-sm-12 login-button-pw-line\">"+
                        "<button type=\"button\" ng-click=\"logCustomer( login.customerPW,promo.id, promo.customerName, promo.customerBilling, promo.name, "+
                        "promo.longDesc, promo.selectedTC, promo.startDate, promo.endDate, promo.notificationDaysRemind, "+
                        "promo.enrollmentDeadline, promo.postPromoBilling )\" class=\"btn btn-primary login-btn\">"+
                          "Login"+
                        "</button>"+
                        "<button type=\"button\" class=\"btn login_lost_btn\">Forgot Password</button>"+
                      "</div>"+
                    "</div>"+
                    "</div>"+
                  "</form>"+
                  "<div class=\"form-horizontal col-sm-12 login-newUser-line\">"+
                      "<button type=\"button\" class=\"btn new_user_btn\">Register Now</button>"+
                      "<button type=\"button\" ng-click=\"logCustomerSuccess( login.customerPW,promo.id, promo.customerName, promo.customerBilling, promo.name, "+
                      "promo.longDesc, promo.selectedTC, promo.startDate, promo.endDate, promo.notificationDaysRemind, "+
                      "promo.enrollmentDeadline, promo.postPromoBilling )\" class=\"btn btn-primary viewStatus-btn\">"+
                        "View Customer Status"+
                      "</button>"+
                  "</div>"+
                "</div>"+
              "</div>"+
          "</div>"+
          "</div>"
      })
      .state('promoCreation', {
        url: "/promoCreation",
        controller: "PromoCreationCtrl",
        template: "<div class=\"row subtitle-row-small\">"+
        	"<img ng-click=\"backToLandingPage()\" src=\"resources/static/Company_DCP_logo.png\" class=\"cap-icon-normal-pageHeader\" />"+
          "<img ng-click=\"logUser( user.name )\" src=\"resources/static/Page_Header_Title_Icon.png\" class=\"header-title-icon\" />"+
          "<div class=\"header-page-title\" ng-click=\"logUser( user.name )\" >New Promotion</div>"+
          "<div class=\"header-main-rightside\">"+
            "<div style=\"float:right\">"+
              "<div class=\"header-profile-namerole\">{{user.name}}<br/>{{user.role}}</div>"+
              "<img src=\"resources/static/associate_profile_picture.png\" class=\"header-profile-pic\" />"+
              "<img ng-click=\"logout()\" src=\"resources/static/logout_icon.png\" class=\"header-logout-icon\" />"+
            	"<img src=\"resources/static/associate_company_logo.png\" class=\"company-icon-not-login\" />"+
            "</div>"+
          "</div>"+
        "</div>"+
        "<div class=\"row\">"+
          "<nav id=\"sidebar\" style=\"width:25%;float:left;padding-bottom:40%\">"+
          "<ul class=\"list-unstyled components\">"+
            "<li>"+
              "<img class=\"sidebar-profilePic\" src=\"resources/static/associate_profile_picture-sidebar.png\">"+
              "<span class=\"sidebar-profileName\">{{user.name}}</span>"+
              "<hr class=\"sidebar-profileBar\">"+
            "</li>"+
            "<li class=\"active\">"+
              "<a>"+
                "<i>"+
                  "<img class=\"sidebar-nav-icon\" src=\"/resources/static/dashboard_icon.png\">"+
                "</i>"+
                "<span *ngIf=\"contenthide\" class=\"components iotsidebar-more\">Dashboard</span>"+
              "</a>"+
            "</li>"+
            "<li>"+
              "<a data-toggle=\"collapse\" aria-expanded=\"true\" class=\"collapsed\">"+
                  "<i> <img class=\"sidebar-nav-icon\" src=\"/resources/static/associate/promotions-icon.PNG\"></i>"+
               "<span *ngIf=\"contenthide\" class=\"components iotsidebar-more\">Promotions</span>"+
              "</a>"+
              "<ul class=\"set_line collapse\" id=\"pageSubmenu\" style=\"display: block\">"+
                "<li>"+
                  "<a class=\"components\" ng-click=\"logout()\">Create New</a>"+
                "</li>"+
                "<li>"+
                  "<a class=\"components\" ng-click=\"logout()\">View Active</a>"+
                "</li>"+
                "<li>"+
                  "<a class=\"components\" ng-click=\"logout()\">View Pending</a>"+
                "</li>"+
                "<li>"+
                  "<a class=\"components\" ng-click=\"logout()\">View Rejected</a>"+
                "</li>"+
              "</ul>"+
            "</li>"+
            "<li>"+
              "<a ng-click=\"logout()\">"+
                "<i>"+
                  "<img class=\"sidebar-nav-icon\" src=\"/resources/static/associate/brochures-icon.PNG\">"+
                "</i>"+
                "<span *ngIf=\"contenthide\" class=\"components iotsidebar-more\">Marketing Brochures</span>"+
              "</a>"+
            "</li>"+
            "<li>"+
              "<a ng-click=\"logout()\">"+
                "<i>"+
                  "<img class=\"sidebar-nav-icon\" src=\"/resources/static/associate/report-icon.png\">"+
                "</i>"+
                "<span *ngIf=\"contenthide\" class=\"components iotsidebar-more\">Reporting</span>"+
              "</a>"+
            "</li>"+
          "</ul>"+
        "</nav>"+
        "<div class=\"modal-color\" style=\"width:74.5%;float:right\">"+
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
              "<select class=\"col-md-2 text-center form-textBox interview-col-select\" ng-model=\"promo.benefit\" "+
                  "ng-options=\"benefit for benefit in promo.benefitList\">"+
              "</select>"+
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
      				"<input class=\"col-md-2 form-textBox\" name=\"promoStartDate\" type=\"text\" id=\"startdatepicker\" ng-model=\"promo.startDate\"/>"+
      			"</div>"+
            "<div class=\"row interview-row\">"+
              "<label class=\"col-sm-6 col-sm-offset-1 form-rowB\">End Date: </label>"+
              "<input class=\"col-md-2 form-textBox\" name=\"promoEndDate\" type=\"text\" id=\"enddatepicker\" ng-model=\"promo.endDate\"/>"+
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
              "<input class=\"col-md-2 form-textBox\" name=\"promoEnrollment\" type=\"text\" id=\"enrollmentdatepicker\" ng-model=\"promo.enrollmentDeadline\"/>"+
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
        "</div>"+
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
        "<img ng-click=\"backToLandingPage()\" src=\"resources/static/Company_DCP_logo.png\" class=\"cap-icon-normal-pageHeader\" />"+
        "<img src=\"resources/static/Page_Header_Title_Icon.png\" class=\"header-title-icon\" />"+
        "<div class=\"header-page-title\">Marketing Promotions</div>"+
        "<div class=\"header-main-rightside\">"+
          "<div style=\"float:right\">"+
            "<div class=\"header-profile-namerole\">{{user.name}}<br/>{{user.role}}</div>"+
            "<img src=\"resources/static/director_profile_picture.png\" class=\"header-profile-pic\" />"+
            "<img ng-click=\"logout()\" src=\"resources/static/logout_icon.png\" class=\"header-logout-icon\" />"+
            "<img src=\"resources/static/director_company_logo.png\" class=\"companyDir-icon-not-login\" />"+
          "</div>"+
        "</div>"+
      "</div>"+
      "<div class=\"row\">"+
          "<nav id=\"sidebar\" style=\"width:25%;float:left;padding-bottom:40%\">"+
          "<ul class=\"list-unstyled components\">"+
            "<li>"+
              "<img class=\"sidebar-profilePic\" src=\"resources/static/director_profile_picture-sidebar.png\">"+
              "<span class=\"sidebar-profileName\">{{user.name}}</span>"+
              "<hr class=\"sidebar-profileBar\">"+
            "</li>"+
            "<li class=\"active\">"+
              "<a>"+
                "<i>"+
                  "<img class=\"sidebar-nav-icon\" src=\"/resources/static/dashboard_icon.png\">"+
                "</i>"+
                "<span *ngIf=\"contenthide\" class=\"components iotsidebar-more\">Dashboard</span>"+
              "</a>"+
            "</li>"+
            "<li>"+
              "<a data-toggle=\"collapse\" aria-expanded=\"true\" class=\"collapsed\">"+
                  "<i> <img class=\"sidebar-nav-icon\" src=\"/resources/static/director/promotions-icon.PNG\"></i>"+
               "<span *ngIf=\"contenthide\" class=\"components iotsidebar-more\">Promotions</span>"+
              "</a>"+
              "<ul class=\"set_line collapse\" id=\"pageSubmenu\" style=\"display: block\">"+
                "<li>"+
                  "<a class=\"components\" ng-click=\"logout()\">View Active</a>"+
                "</li>"+
                "<li>"+
                  "<a class=\"components\" ng-click=\"logout()\">View Pending</a>"+
                "</li>"+
              "</ul>"+
            "</li>"+
            "<li>"+
              "<a ng-click=\"logout()\">"+
                "<i>"+
                  "<img class=\"sidebar-nav-icon\" src=\"/resources/static/director/customers-icon.PNG\">"+
                "</i>"+
                "<span *ngIf=\"contenthide\" class=\"components iotsidebar-more\">Customers</span>"+
              "</a>"+
            "</li>"+
            "<li>"+
              "<a ng-click=\"logout()\">"+
                "<i>"+
                  "<img class=\"sidebar-nav-icon\" src=\"/resources/static/director/report-icon.png\">"+
                "</i>"+
                "<span *ngIf=\"contenthide\" class=\"components iotsidebar-more\">Reporting</span>"+
              "</a>"+
            "</li>"+
          "</ul>"+
        "</nav>"+
        "<div class=\"modal-color\" style=\"width:74.5%;float:right\">"+
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

      "<div class=\"modal-color\" style=\"width:74.5%;float:right;margin-top:20px\">"+
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
        "</table>"+
        "</div>"+
      "</div>"
      })
      .state('promoApproval', {
        url: "/promoApproval",
        controller: "PromoApprovalCtrl",
        template: "<div class=\"row subtitle-row-small\">"+
        "<img ng-click=\"backToLandingPage()\" src=\"resources/static/Company_DCP_logo.png\" class=\"cap-icon-normal-pageHeader\" />"+
        "<img src=\"resources/static/Page_Header_Title_Icon.png\" class=\"header-title-icon\" />"+
        "<div class=\"header-page-title\">Approve/Deny Promotion</div>"+
        "<div class=\"header-main-rightside\">"+
          "<div style=\"float:right\">"+
            "<div class=\"header-profile-namerole\">{{user.name}}<br/>{{user.role}}</div>"+
            "<img src=\"resources/static/director_profile_picture.png\" class=\"header-profile-pic\" />"+
            "<img ng-click=\"logout()\" src=\"resources/static/logout_icon.png\" class=\"header-logout-icon\" />"+
            "<img src=\"resources/static/director_company_logo.png\" class=\"companyDir-icon-not-login\" />"+
          "</div>"+
        "</div>"+
      "</div>"+
      "<div class=\"row\">"+
          "<nav id=\"sidebar\" style=\"width:25%;float:left;padding-bottom:40%\">"+
          "<ul class=\"list-unstyled components\">"+
            "<li>"+
              "<img class=\"sidebar-profilePic\" src=\"resources/static/director_profile_picture-sidebar.png\">"+
              "<span class=\"sidebar-profileName\">{{user.name}}</span>"+
              "<hr class=\"sidebar-profileBar\">"+
            "</li>"+
            "<li class=\"active\">"+
              "<a>"+
                "<i>"+
                  "<img class=\"sidebar-nav-icon\" src=\"/resources/static/dashboard_icon.png\">"+
                "</i>"+
                "<span *ngIf=\"contenthide\" class=\"components iotsidebar-more\">Dashboard</span>"+
              "</a>"+
            "</li>"+
            "<li>"+
              "<a data-toggle=\"collapse\" aria-expanded=\"true\" class=\"collapsed\">"+
                  "<i> <img class=\"sidebar-nav-icon\" src=\"/resources/static/director/promotions-icon.PNG\"></i>"+
               "<span *ngIf=\"contenthide\" class=\"components iotsidebar-more\">Promotions</span>"+
              "</a>"+
              "<ul class=\"set_line collapse\" id=\"pageSubmenu\" style=\"display: block\">"+
                "<li>"+
                  "<a class=\"components\" ng-click=\"logout()\">View Active</a>"+
                "</li>"+
                "<li>"+
                  "<a class=\"components\" ng-click=\"logout()\">View Pending</a>"+
                "</li>"+
              "</ul>"+
            "</li>"+
            "<li>"+
              "<a ng-click=\"logout()\">"+
                "<i>"+
                  "<img class=\"sidebar-nav-icon\" src=\"/resources/static/director/customers-icon.PNG\">"+
                "</i>"+
                "<span *ngIf=\"contenthide\" class=\"components iotsidebar-more\">Customers</span>"+
              "</a>"+
            "</li>"+
            "<li>"+
              "<a ng-click=\"logout()\">"+
                "<i>"+
                  "<img class=\"sidebar-nav-icon\" src=\"/resources/static/director/report-icon.png\">"+
                "</i>"+
                "<span *ngIf=\"contenthide\" class=\"components iotsidebar-more\">Reporting</span>"+
              "</a>"+
            "</li>"+
          "</ul>"+
        "</nav>"+
        "<div class=\"modal-color\" style=\"width:74.5%;float:right\">"+
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
      				"<input class=\"col-md-2 form-textBox readonlyText\" name=\"promoStartDate\" type=\"text\" ng-model=\"promo.startDate\"/ disabled>"+
      			"</div>"+
            "<div class=\"row interview-row\">"+
              "<label class=\"col-sm-6 col-sm-offset-1 form-rowB\">End Date: </label>"+
              "<input class=\"col-md-2 form-textBox readonlyText\" name=\"promoEndDate\" type=\"text\" ng-model=\"promo.endDate\"/ disabled>"+
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
              "<input class=\"col-md-2 form-textBox readonlyText\" name=\"promoEnrollment\" type=\"text\" ng-model=\"promo.enrollmentDeadline\"/ disabled>"+
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
        "</div>"+
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
          "<img ng-click=\"backToLandingPage()\" src=\"resources/static/Company_DCP_logo.png\" class=\"cap-icon-normal-pageHeader\" />"+
          "<img src=\"resources/static/Page_Header_Title_Icon.png\" class=\"header-title-icon\" />"+
          "<div class=\"header-page-title\">Update Promotion</div>"+
          "<div class=\"header-main-rightside\">"+
            "<div style=\"float:right\">"+
              "<div class=\"header-profile-namerole\">{{user.name}}<br/>{{user.role}}</div>"+
              "<img src=\"resources/static/director_profile_picture.png\" class=\"header-profile-pic\" />"+
              "<img ng-click=\"logout()\" src=\"resources/static/logout_icon.png\" class=\"header-logout-icon\" />"+
              "<img src=\"resources/static/director_company_logo.png\" class=\"companyDir-icon-not-login\" />"+
            "</div>"+
          "</div>"+
        "</div>"+
        "<div class=\"row\">"+
            "<nav id=\"sidebar\" style=\"width:25%;float:left;padding-bottom:40%\">"+
            "<ul class=\"list-unstyled components\">"+
              "<li>"+
                "<img class=\"sidebar-profilePic\" src=\"resources/static/director_profile_picture-sidebar.png\">"+
                "<span class=\"sidebar-profileName\">{{user.name}}</span>"+
                "<hr class=\"sidebar-profileBar\">"+
              "</li>"+
              "<li class=\"active\">"+
                "<a>"+
                  "<i>"+
                    "<img class=\"sidebar-nav-icon\" src=\"/resources/static/dashboard_icon.png\">"+
                  "</i>"+
                  "<span *ngIf=\"contenthide\" class=\"components iotsidebar-more\">Dashboard</span>"+
                "</a>"+
              "</li>"+
              "<li>"+
                "<a data-toggle=\"collapse\" aria-expanded=\"true\" class=\"collapsed\">"+
                    "<i> <img class=\"sidebar-nav-icon\" src=\"/resources/static/director/promotions-icon.PNG\"></i>"+
                 "<span *ngIf=\"contenthide\" class=\"components iotsidebar-more\">Promotions</span>"+
                "</a>"+
                "<ul class=\"set_line collapse\" id=\"pageSubmenu\" style=\"display: block\">"+
                  "<li>"+
                    "<a class=\"components\" ng-click=\"logout()\">View Active</a>"+
                  "</li>"+
                  "<li>"+
                    "<a class=\"components\" ng-click=\"logout()\">View Pending</a>"+
                  "</li>"+
                "</ul>"+
              "</li>"+
              "<li>"+
                "<a ng-click=\"logout()\">"+
                  "<i>"+
                    "<img class=\"sidebar-nav-icon\" src=\"/resources/static/director/customers-icon.PNG\">"+
                  "</i>"+
                  "<span *ngIf=\"contenthide\" class=\"components iotsidebar-more\">Customers</span>"+
                "</a>"+
              "</li>"+
              "<li>"+
                "<a ng-click=\"logout()\">"+
                  "<i>"+
                    "<img class=\"sidebar-nav-icon\" src=\"/resources/static/director/report-icon.png\">"+
                  "</i>"+
                  "<span *ngIf=\"contenthide\" class=\"components iotsidebar-more\">Reporting</span>"+
                "</a>"+
              "</li>"+
            "</ul>"+
          "</nav>"+
        "<div class=\"modal-color\" style=\"width:74.5%;float:right\">"+
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
              "<select class=\"col-md-2 text-center form-textBox interview-col-select\" ng-model=\"promo.benefit\" "+
                  "ng-options=\"benefit for benefit in promo.benefitList\">"+
              "</select>"+
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
              "<input class=\"col-md-2 form-textBox\" name=\"promoStartDate\" type=\"text\" id=\"startdatepicker\" ng-model=\"promo.startDate\"/>"+
            "</div>"+
            "<div class=\"row interview-row\">"+
              "<label class=\"col-sm-6 col-sm-offset-1 form-rowB\">End Date: </label>"+
              "<input class=\"col-md-2 form-textBox\" name=\"promoEndDate\" type=\"text\" id=\"enddatepicker\" ng-model=\"promo.endDate\"/>"+
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
              "<input class=\"col-md-2 form-textBox\" name=\"promoEnrollment\" type=\"text\" id=\"enrollmentdatepicker\" ng-model=\"promo.enrollmentDeadline\"/>"+
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
        "</div>"+
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
          "<img ng-click=\"backToLandingPage()\" src=\"resources/static/Company_DCP_logo.png\" class=\"cap-icon-normal-pageHeader\" />"+
          "<img src=\"resources/static/Page_Header_Title_Icon.png\" class=\"header-title-icon\" />"+
          "<div class=\"header-page-title\">Apply for Promotion</div>"+
          "<div class=\"header-main-rightside\">"+
            "<div style=\"float:right\">"+
              "<div class=\"header-profile-namerole\">{{user.name}}<br/>{{user.role}}</div>"+
              "<img src=\"resources/static/customer_profile_picture.png\" class=\"header-profile-pic\" />"+
              "<img ng-click=\"logout()\" src=\"resources/static/logout_icon.png\" class=\"header-logout-icon\" />"+
              "<img src=\"resources/static/director_company_logo.png\" class=\"companyDir-icon-not-login\" />"+
            "</div>"+
          "</div>"+
        "</div>"+
        "<div class=\"row\">"+
          "<nav id=\"sidebar\" style=\"width:25%;float:left;padding-bottom:40%\">"+
          "<ul class=\"list-unstyled components\">"+
            "<li>"+
              "<img class=\"sidebar-profilePic\" src=\"resources/static/customer_profile_picture-sidebar.png\">"+
              "<span class=\"sidebar-profileName\">{{user.name}}</span>"+
              "<hr class=\"sidebar-profileBar\">"+
            "</li>"+
            "<li class=\"active\">"+
              "<a>"+
                "<i>"+
                  "<img class=\"sidebar-nav-icon\" src=\"/resources/static/dashboard_icon.png\">"+
                "</i>"+
                "<span *ngIf=\"contenthide\" class=\"components iotsidebar-more\">Dashboard</span>"+
              "</a>"+
            "</li>"+
            "<li>"+
              "<a ng-click=\"logout()\">"+
                "<i>"+
                  "<img class=\"sidebar-nav-icon\" src=\"/resources/static/customer/billing-icon.png\">"+
                "</i>"+
                "<span *ngIf=\"contenthide\" class=\"components iotsidebar-more\">Billing</span>"+
              "</a>"+
            "</li>"+
            "<li>"+
              "<a>"+
                "<i>"+
                  "<img class=\"sidebar-nav-icon\" src=\"/resources/static/customer/promotions-icon.PNG\">"+
                "</i>"+
                "<span *ngIf=\"contenthide\" class=\"components iotsidebar-more\">Current Promotions</span>"+
              "</a>"+
            "</li>"+
            "<li>"+
              "<a ng-click=\"logout()\">"+
                "<i>"+
                  "<img class=\"sidebar-nav-icon\" src=\"/resources/static/customer/rate-plans-icon.PNG\">"+
                "</i>"+
                "<span *ngIf=\"contenthide\" class=\"components iotsidebar-more\">Rate Plans</span>"+
              "</a>"+
            "</li>"+
            "<li>"+
              "<a ng-click=\"logCustomerSuccess( promo.realID,promo.id, promo.customerName, promo.customerBilling, promo.name, "+
              "promo.longDesc, promo.selectedTC, promo.startDate, promo.endDate, promo.notificationDaysRemind, "+
              "promo.enrollmentDeadline, promo.postPromoBilling )\">"+
                "<i>"+
                  "<img class=\"sidebar-nav-icon\" src=\"/resources/static/customer/update-device-icon.PNG\">"+
                "</i>"+
                "<span *ngIf=\"contenthide\" class=\"components iotsidebar-more\">Update Device</span>"+
              "</a>"+
            "</li>"+
          "</ul>"+
        "</nav>"+
        "<div class=\"modal-color\" style=\"width:74.5%;float:right\">"+
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
              "<input class=\"col-md-2 form-textBox readonlyText\" name=\"promoStartDate\" type=\"text\" ng-model=\"promo.startDate\"/ disabled>"+
            "</div>"+
            "<div class=\"row interview-row\">"+
              "<label class=\"col-sm-6 col-sm-offset-1 form-rowB\">End Date: </label>"+
              "<input class=\"col-md-2 form-textBox readonlyText\" name=\"promoEndDate\" type=\"text\" ng-model=\"promo.endDate\"/ disabled>"+
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
        "</div>"+
      "</div>",
        params: {
          passwordPromoId: null, promoId: null, promoName: null, customerName : null, promoDesc : null, promoTerms : null,
          promoStartDate : null, promoEndDate : null, customerBilling : null, promoReminder : null,
          promoEnrollment : null, postPromoBilling : null
        }
      })
      .state('customerBillingSuccess', {
        url: "/promotionAccepted",
        controller: "PromotionAcceptedCtrl",
        template: "<div class=\"row subtitle-row-small\">"+
        "<img ng-click=\"backToLandingPage()\" src=\"resources/static/Company_DCP_logo.png\" class=\"cap-icon-normal-pageHeader\" />"+
        "<img src=\"resources/static/Page_Header_Title_Icon.png\" class=\"header-title-icon\" />"+
        "<div class=\"header-page-title\">Promotion Status</div>"+
        "<div class=\"header-main-rightside\">"+
          "<div style=\"float:right\">"+
            "<div class=\"header-profile-namerole\">{{user.name}}<br/>{{user.role}}</div>"+
            "<img src=\"resources/static/customer_profile_picture.png\" class=\"header-profile-pic\" />"+
            "<img ng-click=\"logout()\" src=\"resources/static/logout_icon.png\" class=\"header-logout-icon\" />"+
            "<img src=\"resources/static/director_company_logo.png\" class=\"companyDir-icon-not-login\" />"+
          "</div>"+
        "</div>"+
      "</div>"+
      "<div class=\"row\">"+
        "<nav id=\"sidebar\" style=\"width:25%;float:left;padding-bottom:40%\">"+
        "<ul class=\"list-unstyled components\">"+
          "<li>"+
            "<img class=\"sidebar-profilePic\" src=\"resources/static/customer_profile_picture-sidebar.png\">"+
            "<span class=\"sidebar-profileName\">{{user.name}}</span>"+
            "<hr class=\"sidebar-profileBar\">"+
          "</li>"+
          "<li class=\"active\">"+
            "<a>"+
              "<i>"+
                "<img class=\"sidebar-nav-icon\" src=\"/resources/static/dashboard_icon.png\">"+
              "</i>"+
              "<span *ngIf=\"contenthide\" class=\"components iotsidebar-more\">Dashboard</span>"+
            "</a>"+
          "</li>"+
          "<li>"+
            "<a ng-click=\"logout()\">"+
              "<i>"+
                "<img class=\"sidebar-nav-icon\" src=\"/resources/static/customer/billing-icon.png\">"+
              "</i>"+
              "<span *ngIf=\"contenthide\" class=\"components iotsidebar-more\">Billing</span>"+
            "</a>"+
          "</li>"+
          "<li>"+
            "<a ng-click=\"logout()\">"+
              "<i>"+
                "<img class=\"sidebar-nav-icon\" src=\"/resources/static/customer/promotions-icon.PNG\">"+
              "</i>"+
              "<span *ngIf=\"contenthide\" class=\"components iotsidebar-more\">Current Promotions</span>"+
            "</a>"+
          "</li>"+
          "<li>"+
            "<a ng-click=\"logout()\">"+
              "<i>"+
                "<img class=\"sidebar-nav-icon\" src=\"/resources/static/customer/rate-plans-icon.PNG\">"+
              "</i>"+
              "<span *ngIf=\"contenthide\" class=\"components iotsidebar-more\">Rate Plans</span>"+
            "</a>"+
          "</li>"+
          "<li>"+
            "<a ng-click=\"logout()\">"+
              "<i>"+
                "<img class=\"sidebar-nav-icon\" src=\"/resources/static/customer/update-device-icon.PNG\">"+
              "</i>"+
              "<span *ngIf=\"contenthide\" class=\"components iotsidebar-more\">Update Device</span>"+
            "</a>"+
          "</li>"+
        "</ul>"+
      "</nav>"+
      "<div class=\"modal-color customer-menu\" style=\"width:74.5%;float:right\">"+
      "<div class=\"customer-msg-text\">"+
          "<p>Congratulations, {{promo.customerName}}!<br />"+
            "Thank you for being a valued customer.<br />"+
            "Your request for promotion has been approved.<br />"+
            "Your current bill is {{promo.customerBilling}}. With \"{{promo.name}}\", your<br />"+
            "new bill will be {{promo.postPromoBilling}} starting {{promo.startDate}} to {{promo.endDate}}<br />"+
            "Block 3 is complete."+
          "</p>"+
        "</div>"+
        "</div>"+
      "</div>",
        params: {
          passwordPromoId: null, promoId: null, promoName: null, customerName : null, promoDesc : null, promoTerms : null,
          promoStartDate : null, promoEndDate : null, customerBilling : null, promoReminder : null,
          promoEnrollment : null, postPromoBilling : null
        }
      })
      .state('customerBillingRejection', {
        url: "/promotionRejected",
        controller: "PromotionRejectedCtrl",
        template: "<div class=\"row subtitle-row-small\">"+
        "<img ng-click=\"backToLandingPage()\" src=\"resources/static/Company_DCP_logo.png\" class=\"cap-icon-normal-pageHeader\" />"+
        "<img src=\"resources/static/Page_Header_Title_Icon.png\" class=\"header-title-icon\" />"+
        "<div class=\"header-page-title\">Promotion Status</div>"+
        "<div class=\"header-main-rightside\">"+
          "<div style=\"float:right\">"+
            "<div class=\"header-profile-namerole\">{{user.name}}<br/>{{user.role}}</div>"+
            "<img src=\"resources/static/customer_profile_picture.png\" class=\"header-profile-pic\" />"+
            "<img ng-click=\"logout()\" src=\"resources/static/logout_icon.png\" class=\"header-logout-icon\" />"+
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
  .controller("LoadPromosCtrl", function($scope, $state, $http, $window) {
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
    $scope.backToLandingPage = function() {
      $window.location.href = "http://54.146.42.88:8080/landingPage";
    }

    $scope.logout = function() {
      $state.go("login");
    }

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
  .controller("PromoApprovalCtrl", function($scope, $state, $http, $stateParams, $window) {
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
      $scope.backToLandingPage = function() {
        $window.location.href = "http://54.146.42.88:8080/landingPage";
      }
      $scope.user = {
        name: 'Williams',
        role: 'Marketing Director'
      };

      $scope.logout = function() {
        $state.go("login");
      }

      $scope.promo = {
        id: $stateParams.promoId,
        name: $stateParams.promoName,
        selectedBenefit: $stateParams.promoBenefit,
        longDesc: $stateParams.promoDesc,
        selectedTC: $stateParams.promoTerms,
        startDate: $stateParams.promoStartDate,
        endDate: $stateParams.promoEndDate,
        ruleTyp: $stateParams.promoRuleTyp,
        ruleTypes: [ {type: "Rate_Plan"}, {type:"SKU"} ],
        ruleVal: $stateParams.promoRuleVal,
        ruleValues: [
          { ruleType: "Rate_Plan", ruleValue: "Rate_Plan_A" },
          { ruleType: "Rate_Plan", ruleValue: "Rate_Plan_B" },
          { ruleType: "Rate_Plan", ruleValue: "Rate_Plan_C" },
          { ruleType: "SKU", ruleValue: "Any_Number_Values" }
        ],
        notificationDaysRemind: $stateParams.promoReminder,
        reminderList: [ "5", "10", "15" ],
        enrollmentDeadline: $stateParams.promoEnrollment,
        benefit: $stateParams.promoCusBenefit,
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
  .controller("PromoEditCtrl", function($scope, $state, $http, $stateParams, $window) {
    $scope.backToLandingPage = function() {
      $window.location.href = "http://54.146.42.88:8080/landingPage";
    }
    $scope.user = {
      name: 'Williams',
      role: 'Marketing Director'
    };

    $( "#startdatepicker" ).datepicker({
      onSelect: function() {
        $scope.promo.startDate = $('#startdatepicker').datepicker().val();
      }
    });
    $( "#enddatepicker" ).datepicker({
      onSelect: function() {
        $scope.promo.endDate = $('#enddatepicker').datepicker().val();
      }
    });
    $( "#enrollmentdatepicker" ).datepicker({
      onSelect: function() {
        $scope.promo.enrollmentDeadline = $('#enrollmentdatepicker').datepicker().val();
      }
    });

    $scope.promo = {
      id: $stateParams.promoId,
      name: $stateParams.promoName,
      selectedBenefit: $stateParams.promoBenefit,
      longDesc: $stateParams.promoDesc,
      selectedTC: $stateParams.promoTerms,
      startDate: $stateParams.promoStartDate,
      endDate: $stateParams.promoEndDate,
      benefitList: [ "$5 discount per month", "$10 discount per month",
        "$50 one-time discount", "$100 one-time discount" ],
      ruleTyp: $stateParams.promoRuleTyp,
      ruleTypes: [ {type: "Rate_Plan"}, {type:"SKU"} ],
      ruleVal: $stateParams.promoRuleVal,
      ruleValues: [
        { ruleType: "Rate_Plan", ruleValue: "Rate_Plan_A" },
        { ruleType: "Rate_Plan", ruleValue: "Rate_Plan_B" },
        { ruleType: "Rate_Plan", ruleValue: "Rate_Plan_C" },
        { ruleType: "SKU", ruleValue: "Any_Number_Values" }
      ],
      notificationDaysRemind: $stateParams.promoReminder,
      reminderList: [ "5", "10", "15" ],
      enrollmentDeadline: $stateParams.promoEnrollment,
      benefit: $stateParams.promoCusBenefit,
      status: $stateParams.promoStatus
    };

    $scope.logout = function() {
      $state.go("login");
    }

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
  .controller("PromoApplyCtrl", function($scope, $state, $http, $stateParams, $window) {
      $scope.promoApplyDisable = false;
      $scope.user = {
        name: $stateParams.customerName,
        role: 'Customer'
      };
      $scope.backToLandingPage = function() {
        $window.location.href = "http://54.146.42.88:8080/landingPage";
      }

      $scope.logout = function() {
        $state.go("login");
      }

      var putData = '';

      if( $stateParams.passwordPromoId != 'Revenue' ) {
        putData = "{ "+
          "\"hashCode\" : \""+$stateParams.passwordPromoId+"\" "+
        "}";
      } else {
        putData = "{ "+
          "\"hashCode\" : \""+$stateParams.promoId+"\" "+
        "}";
      }
      $http.put('/retrieve/promotionByHashCode', putData)
      .then(function (data) {
        $scope.promo = {
          id: data["data"]["hash"],
          name: data["data"]["data"].promoName,
          customerName: $stateParams.customerName,
          customerBilling: '$35 per month',
          longDesc: data["data"]["data"].promoLongDescription,
          selectedTC: data["data"]["data"].tc,
          startDate: data["data"]["data"].startDate,
          endDate: data["data"]["data"].endDate,
          enrollmentDeadline: data["data"]["data"].enrollmentDeadlineDays,
          deadlineList: [ "5", "10", "15" ],
          postPromoBilling: data["data"]["data"].benefit
        };
      }).catch(function(error) {
        console.log(error);
      });

      $scope.changeButtonColor = function() {
        $scope.buttonDisable="button-disable";
      }

      $scope.goApply = function( promoId, customerName, customerBilling, promoName,
        promoDesc, promoTerms, promoStart, promoEnd, promoEnrollment,
        postPromoBilling )
      {
        var postData = "{ "+
          "\"customerName\" : \""+customerName+"\", "+
          "\"billingInfo\" : \""+customerBilling+"\", "+
          "\"promoName\" : \""+promoName+"\", "+
          "\"promoHash\" : \""+promoId+"\", "+
          "\"promoDesc\" : \""+promoDesc+"\", "+
          "\"tc\" : \""+promoTerms+"\", "+
          "\"startDate\" : \""+promoStart+"\", "+
          "\"endDate\" : \""+promoEnd+"\", "+
          "\"enrollmentDeadlineDate\" : \""+promoEnrollment+"\", "+
          "\"postPromoBillingInfo\" : \""+postPromoBilling+"\" "+
        "}";
        $http.post('/apply/promotion', postData)
        .then(function (data) {
          $scope.promo.id = data["data"]["hash"];
          $scope.promo.realID = data["data"]["previousHash"];
        }).catch(function(error) {
          console.log(error);
        });
      }

      $scope.logCustomerSuccess = function( passwordPromoId, promoId, customerName, customerBilling, promoName,
        promoDesc, promoTerms, promoStart, promoEnd, promoReminder,
        promoEnrollment, postPromoBilling ) {
          console.log( "Intro ["+passwordPromoId + promoId + customerName + customerBilling + promoName,
        promoDesc + promoTerms + promoStart + promoEnd + promoReminder,
        promoEnrollment + postPromoBilling+"] Outro");
          $state.go("customerBillingSuccess", { passwordPromoId : passwordPromoId,
            promoId : promoId, customerName : customerName, promoDesc : promoDesc,
            promoTerms : promoTerms, promoStartDate : promoStart,
            promoEndDate : promoEnd, customerBilling : customerBilling,
            promoReminder : promoReminder, promoEnrollment : promoEnrollment,
            postPromoBilling : postPromoBilling }
          );
      }
  })
  .controller("PromotionAcceptedCtrl", function($scope, $state, $http, $stateParams, $window) {
      $scope.user = {
        name: $stateParams.customerName,
        role: 'Customer'
      };
      $scope.backToLandingPage = function() {
        $window.location.href = "http://54.146.42.88:8080/landingPage";
      }

      $scope.logout = function() {
        $state.go("login");
      }

      var putData = '';

      if( $stateParams.passwordPromoId != 'Revenue' ) {
        putData = "{ "+
          "\"hashCode\" : \""+$stateParams.passwordPromoId+"\" "+
        "}";
      } else {
        putData = "{ "+
          "\"hashCode\" : \""+$stateParams.promoId+"\" "+
        "}";
      }
      $http.put('/retrieve/promotionByHashCode', putData)
      .then(function (data) {
        $scope.promo = {
          id: data["data"]["hash"],
          name: data["data"]["data"].promoName,
          customerName: $stateParams.customerName,
          customerBilling: '$35 per month',
          longDesc: data["data"]["data"].promoLongDescription,
          selectedTC: data["data"]["data"].tc,
          startDate: data["data"]["data"].startDate,
          endDate: data["data"]["data"].endDate,
          enrollmentDeadline: data["data"]["data"].enrollmentDeadlineDays,
          deadlineList: [ "5", "10", "15" ],
          postPromoBilling: data["data"]["data"].benefit
        };
      }).catch(function(error) {
        console.log(error);
      });
  })
  .controller("PromotionRejectedCtrl", function($scope, $state, $stateParams, $window) {
      $scope.user = {
        name: $stateParams.customerName,
        role: 'Customer',
        promo: $stateParams.promoName
      };
      $scope.backToLandingPage = function() {
        $window.location.href = "http://54.146.42.88:8080/landingPage";
      }

      $scope.logout = function() {
        $state.go("login");
      }
  })
  .controller("PromoCreationCtrl", function($scope, $state, $http, $stateParams, $window) {
      $scope.promoCreateDisable = false;
      $scope.backToLandingPage = function() {
        $window.location.href = "http://54.146.42.88:8080/landingPage";
      }
      $scope.user = {
        name: $stateParams.userName,
        role: 'Marketing Associate'
      };

      $( "#startdatepicker" ).datepicker({
        onSelect: function() {
          $scope.promo.startDate = $('#startdatepicker').datepicker().val();
        }
      });
      $( "#enddatepicker" ).datepicker({
        onSelect: function() {
          $scope.promo.endDate = $('#enddatepicker').datepicker().val();
        }
      });
      $( "#enrollmentdatepicker" ).datepicker({
        onSelect: function() {
          $scope.promo.enrollmentDeadline = $('#enrollmentdatepicker').datepicker().val();
        }
      });

      $scope.logout = function() {
        $state.go("login");
      }

      $scope.promo = {
        startDate: "mm/dd/yyyy",
        endDate: "mm/dd/yyyy",
        benefitList: [ "$5 discount per month", "$10 discount per month",
          "$50 one-time discount", "$100 one-time discount" ],
        ruleTypes: [ {type: "Rate_Plan"}, {type:"SKU"} ],
        ruleValues: [
          { ruleType: "Rate_Plan", ruleValue: "Rate_Plan_A" },
          { ruleType: "Rate_Plan", ruleValue: "Rate_Plan_B" },
          { ruleType: "Rate_Plan", ruleValue: "Rate_Plan_C" },
          { ruleType: "SKU", ruleValue: "Any_Number_Values" }
        ],
        notificationDaysRemind: "5",
        reminderList: [ "5", "10", "15" ],
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
            startDate: "mm/dd/yyyy",
            endDate: "mm/dd/yyyy",
            ruleTyp: "",
            ruleVal: "",
            benefitList: [ "$5 discount per month", "$10 discount per month",
              "$50 one-time discount", "$100 one-time discount" ],
            ruleTypes: [ {type: "Rate_Plan"}, {type:"SKU"} ],
            ruleValues: [
              { ruleType: "Rate_Plan", ruleValue: "Rate_Plan_A" },
              { ruleType: "Rate_Plan", ruleValue: "Rate_Plan_B" },
              { ruleType: "Rate_Plan", ruleValue: "Rate_Plan_C" },
              { ruleType: "SKU", ruleValue: "Any_Number_Values" }
            ],
            notificationDaysRemind: "5",
            reminderList: [ "5", "10", "15" ],
            enrollmentDeadline: "mm/dd/yyyy",
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
          $http.post('/create/promotion', postData)
          .then(function (data) {
            $scope.promo.id = data["data"]["hash"];
          }).catch(function(error) {
            console.log(error);
          });
      }
  })
  .controller("LoginCtrl", function($scope, $state, $http, $window) {
    $scope.login = {
        customer: 'Joshua Smith',
        customerPW: 'Revenue',
        director: 'Williams',
        directorPW: 'Sales',
        associate: 'Christopher',
        associatePW: 'Margin'
    };

    $scope.backToLandingPage = function() {
      $window.location.href = "http://54.146.42.88:8080/landingPage";
    }

    $http.get('/retrieve/approvedPromotion')
      .then(function (data) {
        $scope.promo = {
          id: data["data"][0]["hash"],
          name: data["data"][0]["data"].promoName,
          customerName: $scope.login.customer,
          customerBilling: '$30 per month',
          longDesc: data["data"][0]["data"].promoLongDescription,
          selectedTC: data["data"][0]["data"].tc,
          startDate: data["data"][0]["data"].startDate,
          endDate: data["data"][0]["data"].endDate,
          notificationDaysRemind: data["data"][0]["data"].reminderNotificationDays,
          reminderList: [ "5", "10", "15" ],
          enrollmentDeadline: data["data"][0]["data"].enrollmentDeadlineDays,
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

    $scope.logCustomer = function( passwordPromoId, promoId, customerName, customerBilling, promoName,
      promoDesc, promoTerms, promoStart, promoEnd, promoReminder,
      promoEnrollment, postPromoBilling ) {
        $state.go("customerAppliesForPromo", { passwordPromoId : passwordPromoId,
          promoId : promoId, customerName : customerName, promoDesc : promoDesc,
          promoTerms : promoTerms, promoStartDate : promoStart,
          promoEndDate : promoEnd, customerBilling : customerBilling,
          promoReminder : promoReminder, promoEnrollment : promoEnrollment,
          postPromoBilling : postPromoBilling }
        );
    }

    $scope.logCustomerSuccess = function( passwordPromoId, promoId, customerName, customerBilling, promoName,
      promoDesc, promoTerms, promoStart, promoEnd, promoReminder,
      promoEnrollment, postPromoBilling ) {
        $state.go("customerBillingSuccess", { passwordPromoId : passwordPromoId,
          promoId : promoId, customerName : customerName, promoDesc : promoDesc,
          promoTerms : promoTerms, promoStartDate : promoStart,
          promoEndDate : promoEnd, customerBilling : customerBilling,
          promoReminder : promoReminder, promoEnrollment : promoEnrollment,
          postPromoBilling : postPromoBilling }
        );
    }
  });

})(angular);
