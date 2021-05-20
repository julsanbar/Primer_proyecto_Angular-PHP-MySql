<?php 

/************************************************************************************************************************************/
    header('Access-Control-Allow-Origin: *');
/************************************************************************************************************************************/
    header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");

    include_once 'funcionesBD.php';

    $datosJson = file_get_contents("php://input");
    $datos = json_decode($datosJson);

    $port = 3306;
    $database = 'BDUsuarios';
    $user = 'usuario';
    $pass = 'usuario';
    $table = 'usuario';

    $columna1 = 'nombre';
    $columna2 = 'apellidos';
    $columna3 = 'telefono';
    $columna4 = 'nacimiento';
    $columna5 = 'email';
    $columna6 = 'password';

    $valor1 = $datos->nombre;
    $valor2 = $datos->apellidos;
    $valor3 = $datos->telefono;
    $valor4 = $datos->nacimiento;
    $valor5 = $datos->email;
    $valor6 = password_hash($datos->password,PASSWORD_DEFAULT);

    $conexion = conexionBD($port,$database,$user,$pass);
    
    $resultado = booleanInsertadasSeisValores($conexion,$table,$columna1,$columna2,$columna3,$columna4,$columna5,$columna6,$valor1,$valor2,$valor3,$valor4,$valor5,$valor6);
    
    echo json_encode($resultado);

?>