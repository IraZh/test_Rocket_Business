<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "winter-15@mail.ru"; // Электронная почта, на которую отправлять сообщение
    $subject = "Новое сообщение с веб-формы";
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Формируем заголовки для письма
    $headers = "From: $email" . "\r\n" .
               "Reply-To: $email" . "\r\n" .
               "X-Mailer: PHP/" . phpversion();

    // Отправляем письмо
    $mailSent = mail($to, $subject, $message, $headers);

    if ($mailSent) {
        echo "Письмо успешно отправлено!";
    } else {
        echo "Произошла ошибка при отправке письма.";
    }
}
?>