# GOV.UK Prototype Kit - view versioning functionality

## About the view versioning functionality

The new functionality is turned on by setting 'useViewVersioning' in config.js to 'true'.

Views then need to be kept in 'views/v0'. Views for a new version of a prototype are kept in 'views/v1', 'views/v2', etc. Only views that differ need including. A new version is then accessed by setting the 'v' parameter in the URL at the start of the new version (eg. '/default/start-page?v=1').

Links within views are always to the default path (eg. '/default/some-view'), and if the 'v' property has been set, the version-specific view will be prioritised over the original v0 equivalent. The result is less views, less duplication, and hopefully a simplified routes file.

## How it does it

The functionality is created through the 'redirectToVersion' function in utils.js, and invoked through server.js. The new functionality is turned on by setting 'useViewVersioning' in config.js to 'true'.

The functionality catches any 'get' request for a route starting with '/default'. If the 'v' property has been set, it will look for a version-specific view and redirect to that. There is then a separate 'get' request for a route starting with '/v*' - this checks the existing version exists. If it doesn't, it tries the previous version - and eventually goes to 'v0'. If 'v0' isn't available it reidrects to a 404 page.

The new code passses linting.