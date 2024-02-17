<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Получаем данные из формы
    $name = $_POST['name'];
    $comment = $_POST['comment'];

    // Email получателя
    $to = 'your-email@example.com'; // Замените на вашу почту

    // Тема письма
    $subject = 'Новый комментарий на сайте';

    // Тело письма
    $message = "Имя: $name\n\n";
    $message .= "Комментарий:\n$comment\n";

    // Дополнительные заголовки
    $headers = "From: $name <noreply@example.com>\r\n";
    $headers .= "Reply-To: $name <$to>\r\n";
    $headers .= "Content-Type: text/plain; charset=utf-8\r\n";

    // Отправляем письмо
    if (mail($to, $subject, $message, $headers)) {
        echo 'Ваш комментарий успешно отправлен.';
    } else {
        echo 'Ошибка при отправке комментария.';
    }
}
?>