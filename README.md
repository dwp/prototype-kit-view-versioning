# GOV.UK Prototype Kit - view versioning functionality

## About the view versioning functionality

The new functionality is turned on by setting 'useViewVersioning' in config.js to 'true'.

Views then need to be kept in 'views/default'. Views for a new version of a prototype are kept in 'views/v1', 'views/v2', etc. Only views that differ need including. A new version is then accessed by setting the 'v' parameter in the URL at the start of the new version (eg. '/default/start-page?v=1').

Links within views are always to the default version (eg. '/default/some-view'), and if the 'v' property has been set, the version-specific view will be prioritised over the default equivalent. The result is less views, less duplication, and hopefully a simplified routes file.

## How it does it

The functionality is created through the 'redirectToVersion' function in utils.js, and invoked through server.js. The new functionality is turned on by setting 'useViewVersioning' in config.js to 'true'.

The functionality catches any 'get' request for a route starting with '/default'. If the 'v' property has been set, it will look for a version-specific view and redirect to that, otherwise it continues unaffected to the default equivalent. It is a full redirect and not a view render so that a version-specific view can be bookmarked or linked to directly.

The new code passses linting.