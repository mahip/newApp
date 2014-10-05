'use strict';

var app=angular.module('newAppApp');
  app.controller('MainCtrl', function ($scope, $http, socket) {
    $scope.searchType='Name';
    $scope.book='';
    $scope.books = [];
    $scope.errMsg=true;
      $scope.bookNames = [];

    $scope.searchBook = function() {
        if($scope.book === '') {
            $scope.bookNames = [];
            $scope.errMsg = false;
            $('.message').text("book name,author or publication year can't be empty");
            return;
        }
        $http.get('/api/books/'+$scope.searchType+'/'+$scope.book).success(function(bookNames) {
            console.log(bookNames);
            $scope.bookNames = bookNames;
            //socket.syncUpdates('book', $scope.bookNames);
        });
        if($scope.bookNames.length == 0){
            $scope.errMsg=false;
            $('.message').text("no results found, try again");
            return;
        }
        $scope.errMsg=true;
    };
  });

  /*app.factory('search',function(){
    var books = [{
      'name':'java',
      'author':'a1',
      'pYear':2010
    },
    {
      'name':'computer networks',
      'author':'a2',
      'pYear':2012
    },
    {
       'name':'java',
       'author':'a2',
       'pYear':2011
    }];
    var sBooks = {};
    sBooks.find = function(book,sType){
        var names = [];
        $.each(books,function(index){
           if(sType == 'Name') {
               if (books[index].name == book) {
                   names.push(books[index]);
               }
           }
           if(sType == 'Author') {
               if (books[index].author == book) {
                    names.push(books[index]);
               }
           }
           if(sType == 'Year') {
               if (books[index].pYear == book) {
                    names.push(books[index]);
               }
           }
        });
        return names;
    };
    return sBooks;
  });
*/