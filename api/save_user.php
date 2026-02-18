<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// ملف JSON
$jsonFile = 'user.json';

// قراءة البيانات الحالية
$currentData = [];
if (file_exists($jsonFile)) {
    $currentData = json_decode(file_get_contents($jsonFile), true);
    if (!isset($currentData['users'])) {
        $currentData = ['users' => [], 'lastUpdate' => date('Y-m-d H:i:s')];
    }
}

// استقبال البيانات الجديدة
$input = json_decode(file_get_contents('php://input'), true);

if ($input) {
    // إضافة المستخدم الجديد
    $input['capture_date'] = date('Y-m-d H:i:s');
    
    // التحقق من عدم التكرار
    $exists = false;
    foreach ($currentData['users'] as $user) {
        if ($user['id'] == $input['id']) {
            $exists = true;
            break;
        }
    }
    
    if (!$exists) {
        $currentData['users'][] = $input;
        $currentData['lastUpdate'] = date('Y-m-d H:i:s');
        
        // حفظ في ملف JSON
        file_put_contents($jsonFile, json_encode($currentData, JSON_PRETTY_PRINT));
        
        echo json_encode(['success' => true, 'message' => 'User added']);
    } else {
        echo json_encode(['success' => false, 'message' => 'User already exists']);
    }
} else {
    echo json_encode(['success' => false, 'message' => 'No data received']);
}
?>
