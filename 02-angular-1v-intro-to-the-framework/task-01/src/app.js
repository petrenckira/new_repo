/**
 * Created by Iryna_Petrenko1 on 8/29/2017.
 */
let angular = require('angular');
let App = angular.module("App", []);

App.controller("appController", function appController($scope, $http) {
    $scope.books = [];
    $scope.myList = [];
    $scope.loadData = (query)=> {
        $http({method: 'GET', url: 'https://www.googleapis.com/books/v1/volumes?q=' + query})
            .then(response => {
                $scope.books = response.data.items;
                console.log($scope.books);
            }, response=> "Error" + response.status)

    };
    $scope.addBook=(id)=>{
       let res= $scope.books.filter(el=> el.id===id)[0];
        res.mylist=true;
        $scope.myList.push(res);
    };
    $scope.deleteBook=(id)=>{
        $scope.myList= $scope.myList.filter((el)=> el.id!==id );
    }
});

App.directive("renderBooks", ()=> {
    return {
        link: (scope, element, attrs)=> {},
        restrict: "A",
        template: `
                <h1>{{book.volumeInfo.title}}</h1>
                <h3>{{book.volumeInfo.subtitle}}</h3>
                <div class="book-container">
                    <div class="book-img">
                        <img   ng-src="{{book.volumeInfo.imageLinks.smallThumbnail}}"/>
                    </div>
                    <div class="book-text">
                        <p>{{book.volumeInfo.description  | limitTo:200}}...</p>
                        <p>{{book.volumeInfo.publishedDate | date:'d MMMM, y'}}</p>
                        <p ng-repeat="item in book.volumeInfo.authors">
                        <span>{{item}},</span>
                        </p>
                        <button  ng-show="!book.mylist" ng-click="addBook(book.id)"
                        class="book-button"
                            type="button">Add </button>
                        <button  ng-show="book.mylist" ng-click="deleteBook(book.id)"
                        class="book-button"
                            type="button">Delete </button>
                    </div>
                </div>`
    }
});
