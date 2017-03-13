/**
 * Created by Vagner Bellaver on 06/03/2017.
 */
angular.module("singlepageapp").config(["$routeProvider",function ($routeProvider) {
   $routeProvider.when("/",{
       templateUrl:"view/home.html"
   });

    $routeProvider.when("/cadastroDeCliente",{
        templateUrl:"view/cadastro-de-cliente.html",
        controller:"view/cadastroClienteController"
    });

    $routeProvider.when("/cadastroDeProduto",{
        templateUrl:"view/cadastro-de-produto.html"
    });
}]);
