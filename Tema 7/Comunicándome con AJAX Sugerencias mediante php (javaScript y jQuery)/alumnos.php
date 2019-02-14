<?php
header('Content-Type: text/html; charset=utf-8');
header('Access-Control-Allow-Origin: *');

if(!isset($_GET['palabra']))
    return;

    
$arrayAlumnos = array(
    'José Manuel Bravo',
    'Guillermo Boquizo',
    'Rafa García',
    'Francisco Ramírez',
    'José María Romero',
    'Jesús Mejías',
    'Rafael Sojo',
    'Javier González',
    'Marcos Gallardo',
    'Mario Navarro',
    'José Rafael Álvarez',
    'Angelo Barbara',
);

function getAlumnos($arrayAlumnos , $consulta)
{
    $arrayAlumnosResultado = array();
    foreach ($arrayAlumnos as $key => $alumno) {
        if (preg_match('/' . $consulta . '/i', $alumno)) {
            array_push($arrayAlumnosResultado,$alumno);
            
        }
    }
    if (sizeof($arrayAlumnosResultado) == 0) {
        return ['No hay coincidencias'];
    }
    return $arrayAlumnosResultado;
}

echo json_encode(getAlumnos($arrayAlumnos, $_GET['palabra']));