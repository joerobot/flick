angular.module('search', [])
  .controller('MainCtrl', function($http, $q) {
    // Controller As
    var vm = this;
    // Variables
    var api_key = 'aaa328cd63d691da28ad3adf9a58b5aa';
    var url = 'https://api.flickr.com/services/rest';
    var search_tag = '';



    // Request for photos. Construct img URLs and push to array
    var getPhotos = function(params) {
        // var defer = $q.defer();
        vm.searching = true;
      $http({
          method: 'GET',
          url: url,
          params: params
        })
        .then(function(data) {
          data.data.photos.photo.forEach(function(val) {
            vm.photos.push('https://farm' + val.farm + '.staticflickr.com/' + val.server + '/' + val.id + '_' + val.secret + '.jpg')
          });
          vm.resultsLength = data.data.photos.photo.length;
          if (vm.resultsLength === 0) {
            vm.error = true;
            vm.resultsError = true;
          };

          // Reveal results
          vm.searching = false;
          vm.results = true;
        });


    };

    var submit = function() {
      // Create blank array for photo URLs (also clears any existing entries)
      vm.photos = [];
      // Assign user query as search tag
      search_tag = vm.userQuery;

      var params = {
        method: 'flickr.photos.search',
        api_key: api_key,
        tags: search_tag,
        sort: 'relevance',
        format: 'json',
        nojsoncallback: 1,
      };
      // Make request
      getPhotos(params);
      // Set current query to last query then clear
      vm.lastQuery = vm.userQuery;
      vm.userQuery = '';
    };


    vm.reset = function() {
      vm.results = false;
      vm.searched = false;
      vm.searching = false;
      vm.error = false;
      vm.resultsError = false;
      vm.inputError = false;
      vm.userQuery = '';
    }

    vm.submitMain = function() {
      if (vm.searchBar.$error.required) {
        vm.error = true;
        vm.inputError = true;
        return;
      };

      // Search initiated
      vm.searched = true;
      vm.searching = true;

      submit();
    }

    vm.submitSub = function() {
      vm.searching = true;
      submit();
    }

    // Start fresh
    vm.reset();

  });
