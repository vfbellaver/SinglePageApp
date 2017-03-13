/**
 * Created by Vagner Bellaver on 13/03/2017.
 */
angular.module("SinglePageApplication").factory("SinglePageApplicationAPIservice", function ($http) {
   var _ultimoConsumo = function () {
        return $http({
            method: "GET",
            url: "http://petrastreio.herokuapp.com/rest/coords/",
        })
   };

   return{
       ultimoConsumo: _ultimoConsumo
   }
});