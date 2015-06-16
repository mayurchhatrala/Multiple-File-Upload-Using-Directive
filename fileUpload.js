// define Images for store multiple Images
var images = [];

app.directive('file', function () {
        return {
            scope: {file: '='},
            link: function (scope, el, attrs) {

                el.bind('change', function (event) {
                    
                    scope.$apply(function () {
                        for (var i = 0; i < event.target.files.length; i++) {
                            images.push(event.target.files[i]);
                        }
                    });
                });
            }
        };
});

