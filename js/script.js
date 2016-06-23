angular.module('search', [])
    .controller('MainCtrl', function($http){

        var vm = this;
        var api_key = 'aaa328cd63d691da28ad3adf9a58b5aa';
        vm.submit = function(){
            vm.searched = true;
        };
    });




// var url = 'https://api.flickr.com/services/rest';
//
// var params = {
//     method: 'flickr.photos.search',
//     api_key: api_key,
//     tags: search_tag,
//     format: 'json',
//     nojsoncallback: 1
// }
