<?php
// Same-origin endpoint: the portfolio form posts to api/contact.php
header("Content-Type: application/json; charset=UTF-8");
header("X-Content-Type-Options: nosniff");

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    header("Allow: POST");
    echo json_encode(["error" => "Method not allowed"]);
    exit();
}

$data = json_decode(file_get_contents("php://input"), true);
if (!is_array($data)) {
    http_response_code(400);
    echo json_encode(["error" => "Invalid JSON payload"]);
    exit();
}

function field($data, $key, $max) {
    return (isset($data[$key]) && is_string($data[$key]))
        ? trim(mb_substr($data[$key], 0, $max))
        : "";
}

$name    = field($data, "name", 200);
$email   = field($data, "email", 200);
$phone   = field($data, "phone", 50);
$message = field($data, "message", 4000);

if ($name === "" || $email === "" || $phone === "" || $message === "") {
    http_response_code(400);
    echo json_encode(["error" => "Please complete all required fields."]);
    exit();
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(["error" => "Invalid email address."]);
    exit();
}

// Credentials: environment variables, or api/config.php (copy config.sample.php).
$botToken = getenv("TELEGRAM_BOT_TOKEN") ?: "";
$chatId   = getenv("TELEGRAM_CHAT_ID") ?: "";
if (($botToken === "" || $chatId === "") && file_exists(__DIR__ . "/config.php")) {
    $cfg = include __DIR__ . "/config.php";
    $botToken = $botToken ?: ($cfg["bot_token"] ?? "");
    $chatId   = $chatId   ?: ($cfg["chat_id"] ?? "");
}
if ($botToken === "" || $chatId === "") {
    http_response_code(503);
    echo json_encode(["error" => "Telegram delivery is not configured."]);
    exit();
}

$text = "New portfolio message\n\nName: $name\nEmail: $email\nPhone: $phone\n\nMessage:\n$message";

$ch = curl_init("https://api.telegram.org/bot" . $botToken . "/sendMessage");
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POST           => true,
    CURLOPT_HTTPHEADER     => ["Content-Type: application/json"],
    CURLOPT_POSTFIELDS     => json_encode(["chat_id" => $chatId, "text" => $text]),
    CURLOPT_TIMEOUT        => 10,
    CURLOPT_SSL_VERIFYPEER => true,
]);
curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($httpCode === 200) {
    echo json_encode(["ok" => true]);
} else {
    http_response_code(502);
    echo json_encode(["error" => "Unable to send message to Telegram at this time."]);
}
