<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('ru', 'phpmailer/language/');
$mail->isHTML(true);

//От кого письмо
$mail->setFrom('test@test.ru', 'Имя Фамилия');
//Кому отправить письмо
$mail->addAddress('elmira.n.nasibova@gmail.com', 'iv.konuhov@gmail.com');
//тема письма
$mail->Subject = 'Тестирую форму отправки)';

$gender = "Мужской";
if($_POST['gender'] == "female"){
    $gender = "Женский";
}

//Тело письма
$body = '<h1>Заголовок 1-го уровня</h1>';

if(trim(!empty($_POST['name']))){
    $body.='<p><strong>Имя:</strong> '.$_POST['name'].'</p>';
}
if(trim(!empty($_POST['mail']))){
    $body.='<p><strong>E-Mail:</strong> '.$_POST['mail'].'</p>';
}
if(trim(!empty($_POST['gender']))){
    $body.='<p><strong>Пол:</strong> '.$_POST['gender'].'</p>';
}
if(trim(!empty($_POST['message']))){
    $body.='<p><strong>Сообщение:</strong> '.$_POST['message'].'</p>';
}

$mail->Body = $body;

//Отправка
if (!$mail->send()) {
    $message = 'Ошибка!';
} else {
    $message = 'Данные отправлены';
}

$response = ['message' => $message];

header('Content-type: application/json');
echo json_encode($response);
?>