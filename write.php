<?php
if (isset($_POST["message"]) && isset($_POST["username"])) {
    $msg = htmlspecialchars(strip_tags($_POST["message"]));
    $user = htmlspecialchars(strip_tags($_POST["username"]));
    $formatted = "<div class='chat-message'><b>$user</b>: $msg</div>\n";
    file_put_contents("chat.txt", $formatted, FILE_APPEND);
}
?>
