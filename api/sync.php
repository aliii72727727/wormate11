<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

$jsonFile = 'user.json';

// قراءة البيانات الحالية
$currentData = [];
if (file_exists($jsonFile)) {
    $currentData = json_decode(file_get_contents($jsonFile), true);
    if (!isset($currentData['users'])) {
        $currentData = ['users' => [], 'lastUpdate' => date('Y-m-d H:i:s')];
    }
}

// استقبال بيانات المزامنة
$input = json_decode(file_get_contents('php://input'), true);

if ($input && isset($input['users'])) {
    $added = 0;
    
    foreach ($input['users'] as $newUser) {
        $exists = false;
        foreach ($currentData['users'] as $user) {
            if ($user['id'] == $newUser['id']) {
                $exists = true;
                break;
            }
        }
        
        if (!$exists) {
            $newUser['sync_date'] = date('Y-m-d H:i:s');
            $currentData['users'][] = $newUser;
            $added++;
        }
    }
    
    if ($added > 0) {
        $currentData['lastUpdate'] = date('Y-m-d H:i:s');
        file_put_contents($jsonFile, json_encode($currentData, JSON_PRETTY_PRINT));
    }
    
    echo json_encode(['success' => true, 'added' => $added]);
} else {
    echo json_encode(['success' => false, 'message' => 'No data received']);
}
?>
