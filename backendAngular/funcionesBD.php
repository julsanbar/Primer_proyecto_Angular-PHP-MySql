<?php
    //Establece la conexión a la base de datos
    function conexionBD($port,$database,$user,$pass){

        try {
        
            $conexion = new PDO("mysql:host=localhost:$port;dbname=$database","$user","$pass");
            
            return $conexion;
    
        } catch (PDOEXCEPTION $e) {
            echo 'Error: '. $e->getMessage();
        }

    }
    //Devuelve un array asociativo con todos los datos de la tabla pasada por parámetros
    function consultaCuatroParametrosASOC($conexion,$table,$columna1,$condicion1,$columna2,$condicion2,$columna3,$condicion3,$columna4,$condicion4){

        try{
            
            $sql = "select * from $table where ($columna1 = ?) and ($columna2 = ?) and ($columna3 = ?) and ($columna4 = ?)";

            $stmt = $conexion->prepare($sql);
            $stmt->bindParam(1,$condicion1);
            $stmt->bindParam(2,$condicion2);
            $stmt->bindParam(3,$condicion3);
            $stmt->bindParam(4,$condicion4);
            $stmt->execute();

            $resultados = $stmt->fetchAll(PDO::FETCH_ASSOC);

            return $resultados;

        } catch (PDOEXCEPTION $e) {
            echo 'Error: '. $e->getMessage();
        }

    }    
    //Devuelve un array asociativo con todos los datos de la tabla pasada por parámetros
    function consultaUnParametroASOC($conexion,$table,$columna,$condicion){

        try{
            
            $sql = "select * from $table where $columna = ?";

            $stmt = $conexion->prepare($sql);
            $stmt->bindParam(1,$condicion);
            $stmt->execute();

            $resultados = $stmt->fetchAll(PDO::FETCH_ASSOC);

            return $resultados;

        } catch (PDOEXCEPTION $e) {
            echo 'Error: '. $e->getMessage();
        }

    }
    //Devuelve un array asociativo con todos los datos de la tabla pasada por parámetros
    function consultaUnParametroDosCamposASOC($conexion,$table,$columna,$condicion){

        try{
            
            $sql = "select nombre,password from $table where $columna = ?";

            $stmt = $conexion->prepare($sql);
            $stmt->bindParam(1,$condicion);
            $stmt->execute();

            $resultados = $stmt->fetchAll(PDO::FETCH_ASSOC);

            return $resultados;

        } catch (PDOEXCEPTION $e) {
            echo 'Error: '. $e->getMessage();
        }

    }
    //Devuelve un array asociativo con todos los datos de la tabla pasada por parámetros
    function consultaGlobalASOC($conexion,$table){

        try{
            
            $sql = "select * from $table";

            $resultados = $conexion->query($sql)->fetchAll(PDO::FETCH_ASSOC);

            return $resultados;

        } catch (PDOEXCEPTION $e) {
            echo 'Error: '. $e->getMessage();
        }

    }
    //Devuelve el número de tuplas insertadas
    function filasInsertadasDosValores($conexion,$table,$columna1,$columna2,$valor1,$valor2){
        
        try{

            $sql = "insert into ".$table." (".$columna1.",".$columna2.") values (:val1,:val2)";

            $stmt = $conexion->prepare($sql);
            $parametros = array(':val1'=>$valor1,':val2'=>$valor2);

            $stmt->execute($parametros);

            return $stmt->rowCount($sql);
    
        } catch (PDOEXCEPTION $e) {
            echo 'Error: '. $e->getMessage();
        }

    }
    //Devuelve true si se inserto la fila
    function booleanInsertadasDosValores($conexion,$table,$columna1,$columna2,$valor1,$valor2){
        
        try{

            $sql = "insert into ".$table." (".$columna1.",".$columna2.") values (?,?)";
            
            $stmt = $conexion->prepare($sql);
            
            $stmt->bindParam(1,$valor1);
            $stmt->bindParam(2,$valor2);

            return $stmt->execute();

        } catch (PDOEXCEPTION $e) {
            echo 'Error: '. $e->getMessage();
        }

    }
    //Devuelve true si se inserto la fila
    function booleanInsertadasSeisValores($conexion,$table,$columna1,$columna2,$columna3,$columna4,$columna5,$columna6,$valor1,$valor2,$valor3,$valor4,$valor5,$valor6){
    
        try{

            $sql = "insert into ".$table." (".$columna1.",".$columna2.",".$columna3.",".$columna4.",".$columna5.",".$columna6.") values (?,?,?,?,?,?)";
            
            $stmt = $conexion->prepare($sql);
            
            $stmt->bindParam(1,$valor1);
            $stmt->bindParam(2,$valor2);
            $stmt->bindParam(3,$valor3);
            $stmt->bindParam(4,$valor4);
            $stmt->bindParam(5,$valor5);
            $stmt->bindParam(6,$valor6);

            return $stmt->execute();

        } catch (PDOEXCEPTION $e) {
            echo 'Error: '. $e->getMessage();
        }

    }
    //Devuelve el número de tuplas modificadas
    function filasModificadasUnValor($conexion,$table,$columna1,$condicion1,$valor1,$valorCondicion1){
        
        try {
        
            $stmt = $conexion->prepare("update ".$table." set ".$columna1." = :new where ".$condicion1." = :old");
        
            $parametros = array(":new"=>$valor1,":old"=>$valorCondicion1);
            $resultado = $stmt->execute($parametros);
        
            return $resultado;
        
        } catch (PDOEXCEPTION $e) {
            echo 'Error: '. $e->getMessage();
        }

    }
    //Devuelve el número de tuplas borradas
    function filasBorradasUnValor($conexion,$table,$condicion1,$valor1){
        
        try{

            $sql = "delete from ".$table." where ".$condicion1." = :val1";
            
            $stmt = $conexion->prepare($sql);
            $parametros = array(':val1'=>$valor1);

            $stmt->execute($parametros);

            return $stmt->rowCount($sql);

        } catch (PDOEXCEPTION $e) {
            echo 'Error: '. $e->getMessage();
        }

    }


?>