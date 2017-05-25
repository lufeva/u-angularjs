# 001 - Project File Structure

This project contains three views:

* Home (which is the view by default)
* Login (for this exercise the user and password is: user)
* Dashboard (Only for authenticated users)

Additional to the views there is a service that carries on the account validation in the login controller.

To run this project is necessary the following dependencies:

* npm install
* bower install

This project uses Angular Materials for the main features in the layout and UI router as the manager for routes.

The structure of the project was organized in the following way:

app
* main_core: contains the main components, modules, and configurations that the application requires to work correctly
* commons: contains the tools and features used by the states
* states: these are the views of the app and the user interacts with