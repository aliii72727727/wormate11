<?php
// api/server.php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('Access-Control-Allow-Headers: Content-Type');

// مسار ملف JSON
$jsonFile = 'servers.json';

// التعامل مع طلبات API
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // جلب جميع السيرفرات
    if (file_exists($jsonFile)) {
        $data = file_get_contents($jsonFile);
        echo $data;
    } else {
        echo json_encode([
            'success' => true,
            'servers' => []
        ], JSON_PRETTY_PRINT);
    }
} elseif ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // معالجة رفع الملفات
    if (isset($_FILES['jsonFile'])) {
        $uploadDir = 'uploads/';
        if (!is_dir($uploadDir)) {
            mkdir($uploadDir, 0777, true);
        }
        
        $fileName = basename($_FILES['jsonFile']['name']);
        $uploadFile = $uploadDir . $fileName;
        
        if (move_uploaded_file($_FILES['jsonFile']['tmp_name'], $uploadFile)) {
            $jsonData = file_get_contents($uploadFile);
            $data = json_decode($jsonData, true);
            
            if (json_last_error() === JSON_ERROR_NONE) {
                if (isset($data['servers']) && is_array($data['servers'])) {
                    // قراءة السيرفرات الموجودة
                    $existingData = [];
                    if (file_exists($jsonFile)) {
                        $existingData = json_decode(file_get_contents($jsonFile), true);
                    }
                    
                    // دمج السيرفرات
                    if (!isset($existingData['servers'])) {
                        $existingData['servers'] = [];
                    }
                    
                    // إضافة السيرفرات الجديدة مع تجنب التكرار
                    foreach ($data['servers'] as $newServer) {
                        $found = false;
                        foreach ($existingData['servers'] as $existingServer) {
                            if ($existingServer['id'] == $newServer['id']) {
                                $found = true;
                                break;
                            }
                        }
                        if (!$found) {
                            $existingData['servers'][] = $newServer;
                        }
                    }
                    
                    // حفظ الملف
                    file_put_contents($jsonFile, json_encode($existingData, JSON_PRETTY_PRINT));
                    
                    echo json_encode([
                        'success' => true,
                        'message' => 'تم رفع الملف بنجاح ودمج السيرفرات',
                        'servers_added' => count($data['servers']),
                        'total_servers' => count($existingData['servers'])
                    ]);
                } else {
                    echo json_encode([
                        'success' => false,
                        'message' => 'صيغة الملف غير صحيحة'
                    ]);
                }
            } else {
                echo json_encode([
                    'success' => false,
                    'message' => 'ملف JSON غير صالح'
                ]);
            }
        } else {
            echo json_encode([
                'success' => false,
                'message' => 'فشل في رفع الملف'
            ]);
        }
    } elseif (isset($_POST['jsonText'])) {
        // معالجة JSON النصي
        $data = json_decode($_POST['jsonText'], true);
        
        if (json_last_error() === JSON_ERROR_NONE) {
            if (isset($data['servers']) && is_array($data['servers'])) {
                // قراءة السيرفرات الموجودة
                $existingData = [];
                if (file_exists($jsonFile)) {
                    $existingData = json_decode(file_get_contents($jsonFile), true);
                }
                
                // دمج السيرفرات
                if (!isset($existingData['servers'])) {
                    $existingData['servers'] = [];
                }
                
                foreach ($data['servers'] as $newServer) {
                    $found = false;
                    foreach ($existingData['servers'] as $existingServer) {
                        if ($existingServer['id'] == $newServer['id']) {
                            $found = true;
                            break;
                        }
                    }
                    if (!$found) {
                        $existingData['servers'][] = $newServer;
                    }
                }
                
                // حفظ الملف
                file_put_contents($jsonFile, json_encode($existingData, JSON_PRETTY_PRINT));
                
                echo json_encode([
                    'success' => true,
                    'message' => 'تم تحميل البيانات بنجاح',
                    'servers_added' => count($data['servers']),
                    'total_servers' => count($existingData['servers'])
                ]);
            } else {
                echo json_encode([
                    'success' => false,
                    'message' => 'صيغة JSON غير صحيحة'
                ]);
            }
        } else {
            echo json_encode([
                'success' => false,
                'message' => 'JSON غير صالح'
            ]);
        }
    } else {
        // إضافة سيرفر جديد
        $input = json_decode(file_get_contents('php://input'), true);
        
        if (isset($input['id']) && isset($input['name'])) {
            // قراءة السيرفرات الموجودة
            $servers = [];
            if (file_exists($jsonFile)) {
                $data = json_decode(file_get_contents($jsonFile), true);
                $servers = $data['servers'] ?? [];
            }
            
            // التحقق من عدم تكرار المعرف
            foreach ($servers as $server) {
                if ($server['id'] == $input['id']) {
                    echo json_encode([
                        'success' => false,
                        'message' => 'معرف السيرفر موجود مسبقاً'
                    ]);
                    exit;
                }
            }
            
            // إضافة السيرفر الجديد
            $servers[] = $input;
            
            // حفظ الملف
            file_put_contents($jsonFile, json_encode([
                'success' => true,
                'servers' => $servers
            ], JSON_PRETTY_PRINT));
            
            echo json_encode([
                'success' => true,
                'message' => 'تم إضافة السيرفر بنجاح'
            ]);
        } else {
            echo json_encode([
                'success' => false,
                'message' => 'بيانات غير كافية'
            ]);
        }
    }
} elseif ($_SERVER['REQUEST_METHOD'] === 'PUT') {
    // تحديث سيرفر
    $input = json_decode(file_get_contents('php://input'), true);
    
    if (isset($input['id'])) {
        if (file_exists($jsonFile)) {
            $data = json_decode(file_get_contents($jsonFile), true);
            $servers = $data['servers'] ?? [];
            
            $updated = false;
            foreach ($servers as &$server) {
                if ($server['id'] == $input['id']) {
                    $server = array_merge($server, $input);
                    $updated = true;
                    break;
                }
            }
            
            if ($updated) {
                file_put_contents($jsonFile, json_encode([
                    'success' => true,
                    'servers' => $servers
                ], JSON_PRETTY_PRINT));
                
                echo json_encode([
                    'success' => true,
                    'message' => 'تم تحديث السيرفر بنجاح'
                ]);
            } else {
                echo json_encode([
                    'success' => false,
                    'message' => 'السيرفر غير موجود'
                ]);
            }
        }
    }
} elseif ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
    // حذف سيرفر أو جميع السيرفرات
    $input = json_decode(file_get_contents('php://input'), true);
    
    if (isset($input['clear_all']) && $input['clear_all']) {
        // حذف الكل
        file_put_contents($jsonFile, json_encode([
            'success' => true,
            'servers' => []
        ], JSON_PRETTY_PRINT));
        
        echo json_encode([
            'success' => true,
            'message' => 'تم حذف جميع السيرفرات بنجاح'
        ]);
    } elseif (isset($input['id'])) {
        // حذف سيرفر محدد
        if (file_exists($jsonFile)) {
            $data = json_decode(file_get_contents($jsonFile), true);
            $servers = $data['servers'] ?? [];
            
            $newServers = array_filter($servers, function($server) use ($input) {
                return $server['id'] != $input['id'];
            });
            
            file_put_contents($jsonFile, json_encode([
                'success' => true,
                'servers' => array_values($newServers)
            ], JSON_PRETTY_PRINT));
            
            echo json_encode([
                'success' => true,
                'message' => 'تم حذف السيرفر بنجاح'
            ]);
        }
    }
} else {
    echo json_encode([
        'success' => false,
        'message' => 'طريقة الطلب غير مدعومة'
    ]);
}
?>
