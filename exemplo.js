var students = [
	{name: "Dalton", nota: 7.0},
	{name: "Kláudio", nota: 7.5},
	{name: "Dandara", nota: 9.5},
	{name: "Paulo", nota: 10.0}
];

(function () {
	var app = angular.module("primeira", []);
	
	app.controller("PrimeiroController", [function () {
		var i_escolhido = 0;
		this.escolhido = students[i_escolhido];
	
		this.proximo = function(){
			i_escolhido += 1;
			this.escolhido = students[i_escolhido%students.length];
		};
		
		this.anterior = function(){
			if (i_escolhido < 0){
				i = 0;
			} else{
				i_escolhido -= 1;
			}
			this.escolhido = students[i_escolhido];
		};
		
		this.criar = function(nNome, nNota){
			students.push({name: nNome, nota: nNota});
		};
		
	}]);

})();
