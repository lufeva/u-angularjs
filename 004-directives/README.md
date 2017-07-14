# 004 - DIRECTIVES

This exercise shows a simple Directive in AngularJS.

For the layout [Angular Materials][1] was used. In this project the following topics were covered:

*  Directive types
*  Isolated scope
*  Prefixes to bind the parent scope’s methods and properties to the directive scope.


### WHAT WAS DONE
An web application that creates a bussines presentation card, where the user can visualize the preview of the card whie he/she changes the input fields.

The directive uses the fields bellow:
	* Icon
	* `background`
	* `color`
	* Title
	* Description
	* Hardcoded message
* The app has two panels, one to edit the card and the other one to see the result of the card
* When user modifies any field on the left panel the result is seen automaticly in the right card panel
* An `&` atribute was used in the `scope` of the directive with the porpuse of:
    * `bind` the callback of this attribute to the view controller
    * Allow the user to mark the card as favorite from the right card panel
    * The result of the callback is a list in the view controller with the list of favorites cards

[1]: https://material.angularjs.org/latest/
[2]: https://blog.thoughtram.io/angularjs/2015/01/02/exploring-angular-1.3-bindToController.html