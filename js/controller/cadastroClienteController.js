/**
 * Created by Vagner Bellaver on 08/03/2017.
 */
angular.module("singlepageapp").controller("cadastroClienteController"), function () {
   $scope.salvar = function (cliente) {
       var clienteString = JSON.stringify(cliente);
       sessionStorage.setItem(cliente.cpf,clienteString);
   }
}