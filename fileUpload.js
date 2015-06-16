// define Images for store multiple Files
var images = [];

// get images and store multiple files in images array.
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

// Controller to save Multiple Files.
function saveSubCategory() {
        
        $http({
                method: 'POST',
                url: "file path",
                headers: {'Content-Type': 'json'},
                data: {
                    yourfileName: images
                },
                transformRequest: function (data, headersGetter) {
                        
                    for (var i = 0; i < data.yourfileName.length; i++) {
                        //add each file to the form data and iteratively name them
                        formData.append("file_" + i, data.yourfileName[i]);
                    }
                        
                    var headers = headersGetter();
                    delete headers['Content-Type'];
                    return formData;
                }
        }).success(function (response) {
                alert(response);
        }
        
}
