angular.module('search', [])
    .controller('MainCtrl', function($http){

        var vm = this;

        var api_key = 'aaa328cd63d691da28ad3adf9a58b5aa';
        var url = 'https://api.flickr.com/services/rest';
        var search_tag = '';




        vm.submit = function(){
            vm.searched = true;
            vm.photos = [];
            search_tag = vm.userQuery;
            var params = {
                method: 'flickr.photos.search',
                api_key: api_key,
                tags: search_tag,
                format: 'json',
                nojsoncallback: 1,
            };
            $http({
                method: 'GET',
                url: url,
                params: params
            })
            .then(function(data, status, headers, config){
                data.data.photos.photo.forEach(function(val){
                    vm.photos.push('https://farm' + val.farm + '.staticflickr.com/' + val.server + '/' + val.id + '_' + val.secret + '.jpg')
                });

                vm.resultsLength = data.data.photos.photo.length;

            });

            vm.lastQuery = vm.userQuery;
            vm.userQuery = '';

        };
    });




//
