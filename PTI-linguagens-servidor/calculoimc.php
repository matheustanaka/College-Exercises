<?php

    function findIMC($userWeight){
        $weight = array(
            "18.5" => "Magreza",
            "24.9" => "Saudável",
            "29.9" => "Sobrepeso",
            "34.9" => "Obesidade Grau I",
            "39.9" => "Obesidade Grau II",
            "40.0" => "Obesidade Grau III"
        );

        foreach($weight as $key => $weightLevel){
           
            if($key < 40.0){
                if($userWeight <= $key){
                    echo PHP_EOL."Atenção, seu IMC é ".number_format($userWeight, 2, '.', '').", e você está classificado com "."$weightLevel".'.';
                    break;
                }
            }else{ 
                echo PHP_EOL."Atenção, seu IMC é ".number_format($userWeight, 2, '.', '').", e você está classificado com "."$weightLevel".'.';
            } 
        }
    }

    if(isset($_POST["userWeight"])){
        $userWeight = (float) $_POST["userWeight"];
        findIMC($userWeight);
    }
?>