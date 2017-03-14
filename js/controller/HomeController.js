/**
 * Created by Vagner Bellaver on 13/03/2017.
 */
angular.module("singlepageapp").controller("HomeController", function ($scope, SinglePageApplicationAPIservice) {
    $scope.coordenada = {};

    var atualizarCoordenada = function(){

        // Callback de Sucesso
        var sucesso = function(dados){
            $scope.coordenada = dados.data;
        };

        // Callback de erro
        var erro = function(err){
            alert("Erro "+err);
        };

        SinglePageApplicationAPIservice.ultimaCoordenada().then(sucesso,erro);

    };

    atualizarCoordenada();
});
