/**
 * Created by Vagner Bellaver on 13/03/2017.
 */
angular.module("SinglePageApplication").factory("SinglePageApplicationAPIservice", function ($http) {
    var _ultimaCoordenada = function(){
        return $http({
            method:"GET",
            url: "http://petrastreio.herokuapp.com/rest/coords/"
        });
    };

    var _listarCoordenadas = function (qtde) {
        return $http({
            method: "GET",
            url: "http://petrastreio.herokuapp.com/rest/coords/list/"+qtde,
        });
    };

    return {
        ultimaCoordenada : _ultimaCoordenada,
        listarCoordenadas: _listarCoordenadas
    }
});