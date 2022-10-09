<?php
    $destinatario = 'complejosamaywayra@gmail.com';
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $consulta = $_POST['consulta'];

    $mensaje = "Nombre: " . $nombre . "\nCorreo: " . $email  . "\nConsulta: " . $consulta;

    mail($destinatario,"Consulta",$mensaje);
    header("Location:index.html");
?>