$(function () {
	$("#guardar").click(function () {
		let valor = $("#valor").prop("value");
		$("#division").data("midato", valor);
		$("#division").html('He guardado en este elemento (id="division") un dato llamado "midato" con el valor "' + valor + '"');
	});

	$("#leer").click(function () {
		valor = $("#division").data("midato");
		$("#division").html('En este elemento (id="division") leo un dato llamado "midato" con el valor "' + valor + '"');
	});

	$("#eliminar").click(function () {
		$("#division").removeData("midato");
		$("#division").html('Acabo de eliminar del elemento (id="division") el dato llamado "midato"');
	});
});