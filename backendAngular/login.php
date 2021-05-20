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

    $columna = 'email';
    $condicion = $datos->email;

    $conexion = conexionBD($port,$database,$user,$pass);
    $resultado = consultaUnParametroDosCamposASOC($conexion,$table,$columna,$condicion);
    $respuesta = 'Contraseña erronea';

    if(sizeof($resultado) !== 0){

        foreach ($resultado as $salida) {
            
            if(password_verify($datos->password,$salida['password'])){

                $respuesta = $salida['nombre'];

            }

        }
    
    }else{

        $respuesta = 'Email erroneo';
        
    }

    echo json_encode($respuesta);

?>