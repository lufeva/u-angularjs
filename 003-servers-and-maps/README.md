# 003 - Servers and Maps

This exercise was developed using ´Weather Application´ [Open Wheater API][1] to get the data, over the ´Map Application´ [ui-leaflet][2] and [Angular Materials][3] for the modal, putting in practice:

*  Data Services and Factories
* `$http`

### What was Done
* Capturing the map click [event][4], and getting the [lat,lng].
* Bringing the [Weather][5] and [UV][8] of the location selected.
* Putting in place a [marker][6] in the location selected.
* Promping a modal using `$mdDialog` [service][7], to show the weather data.

[1]:https://openweathermap.org/api
[2]: http://angular-ui.github.io/ui-leaflet/#!/
[3]: https://material.angularjs.org/latest/
[4]: http://angular-ui.github.io/ui-leaflet/#!/examples/events
[5]: https://openweathermap.org/current
[6]: http://angular-ui.github.io/ui-leaflet/#!/examples/marker
[7]: https://material.angularjs.org/latest/api/service/$mdDialog
[8]: https://openweathermap.org/api/uvi
[9]: https://openweathermap.org/api/pollution/co