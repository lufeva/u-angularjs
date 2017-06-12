# 002 - Routing, Params and Views 

This excercise uses routing system, params and views through the following concepts:

* Route file in each main state
* States that pass parameters through `$stateParams`
* Abstract states in dashboard and auth states
* Views using `ui-view` that allows load the content dinamically

### What was done
* An `abstract` state for the `dashboard` module, with the following states:
  * Config, using `resolve` in this state to load a `configuration.json` file.
  * Detail, using `params` to send the current user.
  * Main, dashboard state.

* A `navbar` to navigate in the pages and also:
   * Shows the current user name.
   * Shows a logout button.
   * Uses authFactory to get the login data.
   * Uses `ui-view` to show, depending of the `dashboard` state.

* If the user is already logged in page does not allow him to see login or signin page.
* If the user is not logged in cannot have access to dashboard state