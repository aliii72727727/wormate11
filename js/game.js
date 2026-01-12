var _0x3b397b = _0x26a8;
(function(_0x5ca28e, _0x522a01) {
    var _0x558ddd = _0x26a8;
    var _0x20b157 = _0x5ca28e();
    while (true) {
        try {
            var _0x16584d = -parseInt(_0x558ddd(0x205)) / 0x1 + -parseInt(_0x558ddd(0x141)) / 0x2 * (-parseInt(_0x558ddd(0x4e9)) / 0x3) + -parseInt(_0x558ddd(0x460)) / 0x4 + parseInt(_0x558ddd(0x3c4)) / 0x5 * (parseInt(_0x558ddd(0x3ba)) / 0x6) + -parseInt(_0x558ddd(0x52c)) / 0x7 + parseInt(_0x558ddd(0x110)) / 0x8 + -parseInt(_0x558ddd(0x414)) / 0x9 * (parseInt(_0x558ddd(0xff)) / 0xa);
            if (_0x16584d === _0x522a01) {
                break;
            } else {
                _0x20b157.push(_0x20b157.shift());
            }
        } catch (_0x13982a) {
            _0x20b157.push(_0x20b157.shift());
        }
    }
})(_0x2a3d, 0xa24f6);
var xURL = "https://platen-007.github.io/007";
window[_0x3b397b(0x375)] = null;
const _wormup = {
    'BETAisSkinCustom'(_0x8d25c8) {
        var _0x2c1f9b = _0x3b397b;
        var _0x46f5c4 = /[a-zA-Z]/;
        return typeof _0x8d25c8 === _0x2c1f9b(0x4f5) && _0x46f5c4[_0x2c1f9b(0x4fa)](_0x8d25c8);
    },
    'testSkinCustom': function(_0x1a6b75) {
        var _0x16e6f6 = _0x3b397b;
        return _wormup[_0x16e6f6(0x2f0)](_0x1a6b75) ? 0x22 || 0x21 : _0x1a6b75;
    },
    'testSkinMod': function(_0x32fe8d) {
        return _0x32fe8d >= 0x18f && _0x32fe8d < 0x3e7;
    },
    'testWear': function(_0x449b54) {
        return _0x449b54 >= 0x18f && _0x449b54 < 0x3e7;
    },
    'isNumberValid': function(_0x485b5b) {
        return _0x485b5b !== '' && _0x485b5b !== null && _0x485b5b !== undefined && !isNaN(_0x485b5b);
    },
    'validInput': function(_0x4dcabc) {
        var _0x4d77c4 = _0x3b397b;
        if (!_wormup[_0x4d77c4(0x22a)](_0x4dcabc) && !_wormup[_0x4d77c4(0x2f0)](_0x4dcabc)) {
            return _0x4dcabc;
        }
        try {
            let _0x4c9719 = $('#inputReplaceSkin')[_0x4d77c4(0x246)]();
            return encodeURI(_wormup.isNumberValid(_0x4c9719) ? _0x4c9719 : 0x23);
        } catch (_0x57ee0a) {
            return encodeURI(0x23);
        }
    },
    'aload': false,
    'aId': 0x0
};
var inputReplaceSkin = localStorage.getItem(_0x3b397b(0x4a7));
var hoisinhnhanh;
var PilotoAutomatico = null;
var isPlaying = false;
var pwrups = {};
window[_0x3b397b(0x260)] = 0x51;
var theoEvents = {
    'eventoPrincipal': null,
    'joystick': {
        'positionMode': 'L',
        'checked': true,
        'size': 0x5a,
        'mode': 'dynamic',
        'position': {
            'left': '110px',
            'bottom': _0x3b397b(0x1c8)
        },
        'color': '#FF3B3B',
        'pxy': 0x6e
    }
};
var theoKzObjects = {
    'FB_UserID': '',
    'smoothCamera': 0.5,
    'eat_animation': 0.0025,
    'flag': 'https://i.imgur.com/EkbSd65.png',
    'PortionSize': localStorage[_0x3b397b(0x298)] || 0x2,
    'PortionAura': localStorage[_0x3b397b(0x48a)] || 1.2,
    'PortionTransparent': 0.8,
    'FoodTransparent': 0.3,
    'ModeStremer': false,
    'ModeStremerbatop': false,
    'ModeStremeremoj': false,
    'ModeStremerheadshot': false,
    'ModeStremersaveheadshot': false,
    'arrow': false,
    'KeyCodeRespawn': localStorage[_0x3b397b(0x4a6)] || 0x52,
    'KeyCodeAutoMov': localStorage[_0x3b397b(0x3ae)] || window.keyMove,
    'AbilityZ': false,
    'FoodShadow': localStorage[_0x3b397b(0xed)] || 0x2,
    'FoodSize': localStorage[_0x3b397b(0x326)] || 0x2,
    'headshot': 0x0,
    'visibleSkin': [],
    'pL': [],
    'gamePad': theoEvents[_0x3b397b(0x4a5)],
    'mobile': false,
    'loading': false,
    'kill': 0x0,
    'totalKills': 0x0,
    'totalHeadshots': 0x0,
    'adblock': false,
    'CLIENTE_ADMIN': 0x1,
    'CLIENTE_ACTIVO': 0x3,
    'CLIENTE_INACTIVO': 0x4
};
saveGameLocal = localStorage[_0x3b397b(0x27a)](_0x3b397b(0x386));
if (saveGameLocal && saveGameLocal !== 'null') {
    let t = JSON[_0x3b397b(0xba)](saveGameLocal);
    for (let e in t) {
        theoKzObjects[e] = t[e];
    }
}
theoKzObjects[_0x3b397b(0x452)] = true;
const PhoneChecked = function() {
    var _0x55c50d = _0x3b397b;
    let _0x2f050c = false;
    theoKzObjects[_0x55c50d(0x133)] = false;
    const _0x2c5755 = navigator[_0x55c50d(0x448)] || navigator[_0x55c50d(0x266)] || window[_0x55c50d(0x416)];
    const _0x1b7f69 = [_0x55c50d(0xcc), 'bb', _0x55c50d(0x302), _0x55c50d(0x523), _0x55c50d(0x425), _0x55c50d(0xfc), _0x55c50d(0x24c), _0x55c50d(0x189), _0x55c50d(0x389), _0x55c50d(0x48e), _0x55c50d(0x439), _0x55c50d(0xef), _0x55c50d(0x46a), _0x55c50d(0x444), 'iris', _0x55c50d(0xbd), _0x55c50d(0x1a2), _0x55c50d(0x107), _0x55c50d(0x464), 'mmp', _0x55c50d(0x133), _0x55c50d(0x221), _0x55c50d(0x3ce), _0x55c50d(0x416), _0x55c50d(0x25d), _0x55c50d(0x38e), _0x55c50d(0x174), _0x55c50d(0x3f6), _0x55c50d(0x22e), 'symbian', _0x55c50d(0x23c), _0x55c50d(0x1bb), 'wap', _0x55c50d(0x4c9), _0x55c50d(0x363), 'ipad', _0x55c50d(0x222), _0x55c50d(0x1bd)];
    if (_0x1b7f69.some(_0x5a5f37 => _0x2c5755[_0x55c50d(0x247)]()[_0x55c50d(0xd1)](_0x5a5f37))) {
        theoKzObjects[_0x55c50d(0x133)] = true;
        _0x2f050c = true;
    }
    return _0x2f050c;
};
const RechekingPhone = function() {
    var _0x45a281 = _0x3b397b;
    let _0x4f5f49 = false;
    var _0xf0ab0d = navigator[_0x45a281(0x448)] || navigator[_0x45a281(0x266)] || window[_0x45a281(0x416)];
    const _0x39af6a = [_0x45a281(0xcc), 'bb', 'meego', 'avantgo', _0x45a281(0x425), _0x45a281(0xfc), _0x45a281(0x24c), _0x45a281(0x189), _0x45a281(0x389), 'fennec', _0x45a281(0x439), _0x45a281(0xef), _0x45a281(0x46a), _0x45a281(0x444), _0x45a281(0x3d2), _0x45a281(0xbd), _0x45a281(0x1a2), _0x45a281(0x107), 'midp', 'mmp', _0x45a281(0x133), _0x45a281(0x221), _0x45a281(0x3ce), _0x45a281(0x416), _0x45a281(0x25d), _0x45a281(0x38e), _0x45a281(0x174), _0x45a281(0x3f6), _0x45a281(0x22e), 'symbian', _0x45a281(0x23c), _0x45a281(0x1bb), _0x45a281(0x2e6), _0x45a281(0x4c9), 'xda', _0x45a281(0x332), _0x45a281(0x222), 'silk'];
    _0x4f5f49 = _0x39af6a[_0x45a281(0x1f9)](_0x5c2230 => _0xf0ab0d.toLowerCase()[_0x45a281(0xd1)](_0x5c2230));
    return _0x4f5f49;
};
const loadJoy = function(_0x4d27d8) {
    var _0x126425 = _0x3b397b;
    let _0x270c67;
    try {
        console[_0x126425(0x483)](_0x4d27d8);
        if (!theoKzObjects[_0x126425(0x39b)]) {
            theoKzObjects[_0x126425(0x39b)] = theoEvents[_0x126425(0x4a5)];
        }
        if (RechekingPhone() && (_0x4d27d8 || theoKzObjects[_0x126425(0x39b)][_0x126425(0x40a)])) {
            _0x270c67 = nipplejs[_0x126425(0x3fb)](theoKzObjects[_0x126425(0x39b)]);
            _0x270c67.on(_0x126425(0x123), function(_0x6ce4ed, _0x352ece) {
                var _0x3094ac = _0x126425;
                theoEvents[_0x3094ac(0x1b9)].sk = _0x352ece[_0x3094ac(0x4ff)][_0x3094ac(0x3c0)] <= Math.PI ? -0x1 * _0x352ece[_0x3094ac(0x4ff)][_0x3094ac(0x3c0)] : Math.PI - (_0x352ece[_0x3094ac(0x4ff)][_0x3094ac(0x3c0)] - Math.PI);
                console[_0x3094ac(0x483)](_0x352ece);
            });
        }
        return _0x270c67;
    } catch (_0xbb36ec) {
        console.log(_0xbb36ec);
    }
};
if (typeof PIXI === _0x3b397b(0x3ef)) {
    var script = document[_0x3b397b(0x4bc)](_0x3b397b(0x421));
    script[_0x3b397b(0x2f3)] = _0x3b397b(0x4ed);
    script[_0x3b397b(0x2d7)] = _0x3b397b(0x36c);
    script[_0x3b397b(0x21b)] = function() {
        initializeGame();
    };
    document.head[_0x3b397b(0x1dd)](script);
} else {
    initializeGame();
}

function initializeGame() {
    var _0x250680 = _0x3b397b;
    let _0x133c86 = new PIXI[_0x250680(0x47a)]();
    document[_0x250680(0x442)][_0x250680(0x1dd)](_0x133c86[_0x250680(0x126)]);
    let _0x4961e0 = new PIXI[_0x250680(0xd5)]();
    _0x4961e0.beginFill(0xff0000);
    _0x4961e0[_0x250680(0xe9)](0x190, 0x12c, 0x32);
    _0x4961e0[_0x250680(0x481)]();
    _0x133c86[_0x250680(0x376)][_0x250680(0x136)](_0x4961e0);
}
let clientes = {
    'clientesVencidos': [],
    'clientesActivos': []
};
let servers = {
    'Api_listServer': []
};
async function loadUsers() {
    var _0x32c0b9 = _0x3b397b;
    await fetch(_0x32c0b9(0x242))[_0x32c0b9(0x125)](_0x4a08f4 => _0x4a08f4[_0x32c0b9(0x2f5)]())[_0x32c0b9(0x125)](_0x3437eb => {
        var _0x51104f = _0x32c0b9;
        if (_0x3437eb[_0x51104f(0x467)]) {
            let _0x144aba = _0x3437eb[_0x51104f(0x12a)];
            const _0x4122bd = new Date();
            _0x4122bd[_0x51104f(0x27f)](0x0, 0x0, 0x0, 0x0);
            clientes[_0x51104f(0x3dd)] = _0x144aba[_0x51104f(0x398)](_0x312982 => {
                var _0x216019 = _0x51104f;
                if (_0x312982[_0x216019(0x1db)]) {
                    const _0x1118b2 = new Date(_0x312982[_0x216019(0x1db)]);
                    return _0x1118b2 >= _0x4122bd;
                }
                return true;
            });
        } else {
            clientes = {
                'clientesVencidos': [],
                'clientesActivos': []
            };
            alert(_0x51104f(0x1b8));
        }
    })['catch'](_0x35c486 => {
        var _0x16ddd4 = _0x32c0b9;
        console[_0x16ddd4(0xe3)](_0x16ddd4(0x410), _0x35c486);
        alert(_0x16ddd4(0x3e2));
    });
}
async function fetchServersWithRetry(_0x4e68ff, _0x45e154 = 0x3, _0x301f7c = 0x7d0) {
    var _0x51d7cc = _0x3b397b;
    for (let _0x48cb86 = 0x1; _0x48cb86 <= _0x45e154; _0x48cb86++) {
        try {
            const _0x541ada = await fetch(_0x4e68ff);
            if (!_0x541ada.ok) {
                throw new Error(_0x51d7cc(0x318) + _0x541ada[_0x51d7cc(0x4f7)]);
            }
            const _0x444540 = await _0x541ada.json();
            return _0x444540;
        } catch (_0x472541) {
            console[_0x51d7cc(0xe3)](_0x51d7cc(0x408) + _0x48cb86 + " failed: " + _0x472541[_0x51d7cc(0x1a1)]);
            if (_0x48cb86 < _0x45e154) {
                await new Promise(_0xb662fc => setTimeout(_0xb662fc, _0x301f7c));
            } else {
                throw _0x472541;
            }
        }
    }
}
async function loadServers() {
    var _0x78b435 = _0x3b397b;
    try {
        const _0x292b49 = await fetchServersWithRetry('https://aliii72727727.github.io/wormate11/api/server.json');
        if (_0x292b49[_0x78b435(0x467)]) {
            let _0x358435 = _0x292b49[_0x78b435(0x262)];
            servers[_0x78b435(0x3e9)] = _0x358435[_0x78b435(0x398)](_0x2e60d7 => _0x2e60d7[_0x78b435(0x212)]);
        } else {
            servers = {
                'Api_listServer': []
            };
            alert("Desnler yÃ¼klenmedi baÅŸarÄ±sÄ±z !");
        }
    } catch (_0x4059ff) {
        console[_0x78b435(0xe3)](_0x78b435(0x361), _0x4059ff);
        servers = {
            'Api_listServer': []
        };
        alert(_0x78b435(0x406));
    }
}
loadUsers();
loadServers();
$('.store-view-cont')[_0x3b397b(0x53a)](_0x3b397b(0x394));
var StoreSkinID = $(_0x3b397b(0x4eb));
const ctx = {
    'fontStyle': {
        'name': new PIXI[_0x3b397b(0x29c)]({
            'fill': '#FFFF00',
            'fontSize': 0xc,
            'lineJoin': _0x3b397b(0x538),
            'stroke': _0x3b397b(0xc4),
            'fontFamily': _0x3b397b(0x52b),
            'fontWeight': _0x3b397b(0x1de)
        }),
        'blanco': new PIXI[_0x3b397b(0x29c)]({
            'align': _0x3b397b(0x436),
            'fill': '#FFF',
            'fontSize': 0xc,
            'lineJoin': _0x3b397b(0x538),
            'stroke': _0x3b397b(0x4d0),
            'strokeThickness': 0x1,
            'whiteSpace': _0x3b397b(0x53d),
            'fontWeight': _0x3b397b(0x1de),
            'wordWrap': true
        }),
        'morado': new PIXI.TextStyle({
            'align': 'center',
            'fill': _0x3b397b(0x3a3),
            'fontSize': 0xa,
            'lineJoin': _0x3b397b(0x538),
            'stroke': _0x3b397b(0x2ce),
            'strokeThickness': 0x1,
            'whiteSpace': _0x3b397b(0x53d),
            'fontFamily': 'wormup',
            'fontWeight': _0x3b397b(0x1de),
            'wordWrap': true
        }),
        'morado1': new PIXI[_0x3b397b(0x29c)]({
            'align': _0x3b397b(0x436),
            'fill': '#FFF',
            'fontSize': 0xa,
            'lineJoin': _0x3b397b(0x538),
            'stroke': _0x3b397b(0x2ce),
            'strokeThickness': 0x1,
            'whiteSpace': 'normal',
            'fontFamily': 'wormup',
            'fontWeight': _0x3b397b(0x1de),
            'wordWrap': true
        }),
        'amarillo': new PIXI[_0x3b397b(0x29c)]({
            'align': _0x3b397b(0x436),
            'fill': _0x3b397b(0x3a3),
            'fontSize': 0xa,
            'lineJoin': 'round',
            'stroke': _0x3b397b(0x2ce),
            'strokeThickness': 0x1,
            'whiteSpace': 'normal',
            'fontFamily': _0x3b397b(0x52b),
            'fontWeight': 'bold',
            'wordWrap': true
        }),
        'amarillo1': new PIXI[_0x3b397b(0x29c)]({
            'align': _0x3b397b(0x436),
            'fill': '#FFF',
            'fontSize': 0xa,
            'lineJoin': _0x3b397b(0x538),
            'stroke': '#FAA845',
            'strokeThickness': 0x1,
            'whiteSpace': _0x3b397b(0x53d),
            'fontFamily': _0x3b397b(0x52b),
            'fontWeight': 'bold',
            'wordWrap': true
        }),
        'keysColor': new PIXI.TextStyle({
            'align': _0x3b397b(0x436),
            'fill': _0x3b397b(0x322),
            'fontSize': 0xa,
            'lineJoin': _0x3b397b(0x538),
            'stroke': _0x3b397b(0x322),
            'strokeThickness': 0x1,
            'whiteSpace': 'normal',
            'fontWeight': _0x3b397b(0x1de),
            'fontFamily': _0x3b397b(0x52b),
            'wordWrap': true
        })
    }
};
ctx.clock = PIXI[_0x3b397b(0x296)][_0x3b397b(0x2b9)](_0x3b397b(0x487));
ctx.clock[_0x3b397b(0x4c1)] = 0x64;
ctx[_0x3b397b(0x2a7)][_0x3b397b(0x3f9)] = 0x64;
ctx.clock.x = -0x32;
ctx[_0x3b397b(0x2a7)].y = -0x32;
const app = new PIXI[_0x3b397b(0x47a)]({
    'width': window[_0x3b397b(0x488)],
    'height': window[_0x3b397b(0x4b8)]
});
document.body.appendChild(app[_0x3b397b(0x126)]);
ctx[_0x3b397b(0x2dd)] = PIXI[_0x3b397b(0x296)][_0x3b397b(0x4c6)](_0x3b397b(0x51f));
ctx[_0x3b397b(0x2dd)][_0x3b397b(0x4c1)] = 0x17;
ctx[_0x3b397b(0x2dd)][_0x3b397b(0x3f9)] = 0x17;
ctx.top10sv = PIXI.Sprite[_0x3b397b(0x2b9)](_0x3b397b(0x479));
ctx[_0x3b397b(0x4e8)][_0x3b397b(0x3f9)] = 0x19;
ctx[_0x3b397b(0x4e8)][_0x3b397b(0x4c1)] = 0x64;
ctx[_0x3b397b(0x4e8)].x = 0x3c;
ctx[_0x3b397b(0x4e8)].y = -0x32;
ctx.quaytron = PIXI[_0x3b397b(0x296)][_0x3b397b(0x4c6)](_0x3b397b(0x2ea));
ctx.quaytron.width = -0x17;
ctx[_0x3b397b(0x338)].height = -0x17;
app[_0x3b397b(0x376)][_0x3b397b(0x136)](ctx[_0x3b397b(0x2dd)]);
app[_0x3b397b(0x376)][_0x3b397b(0x136)](ctx[_0x3b397b(0x338)]);

function updateSpritePositions() {
    var _0x122612 = _0x3b397b;
    const _0x3442c2 = 0x12c;
    const _0x2bc109 = -0x5a;
    ctx.hoisinhnhanh.x = window[_0x122612(0x488)] - ctx[_0x122612(0x2dd)][_0x122612(0x4c1)] - _0x3442c2;
    ctx[_0x122612(0x2dd)].y = _0x2bc109;
    ctx[_0x122612(0x338)].x = ctx.hoisinhnhanh.x - ctx[_0x122612(0x338)][_0x122612(0x4c1)] - 0xa;
    ctx.quaytron.y = _0x2bc109;
}
updateSpritePositions();
window[_0x3b397b(0x152)](_0x3b397b(0x304), () => {
    var _0x5b394f = _0x3b397b;
    app[_0x5b394f(0xf2)][_0x5b394f(0x304)](window[_0x5b394f(0x488)], window[_0x5b394f(0x4b8)]);
    updateSpritePositions();
});
ctx[_0x3b397b(0x3af)] = new PIXI.Text(_0x3b397b(0x1a5), ctx[_0x3b397b(0x4ad)][_0x3b397b(0x4bb)]);
ctx[_0x3b397b(0x3af)].x = 0x11;
ctx[_0x3b397b(0x3af)].y = 0x3;
ctx[_0x3b397b(0x49b)] = new PIXI[_0x3b397b(0x4b6)]('HS', ctx[_0x3b397b(0x4ad)][_0x3b397b(0x237)]);
ctx.value1_hs = new PIXI[_0x3b397b(0x4b6)]('0', ctx[_0x3b397b(0x4ad)][_0x3b397b(0x237)]);
ctx[_0x3b397b(0xfb)] = new PIXI[_0x3b397b(0x4b6)]('KL', ctx[_0x3b397b(0x4ad)][_0x3b397b(0x11c)]);
ctx.value1_kill = new PIXI[_0x3b397b(0x4b6)]('0', ctx[_0x3b397b(0x4ad)][_0x3b397b(0x11c)]);
if (theoKzObjects.ModeStremersaveheadshot) {
    ctx[_0x3b397b(0x309)] = new PIXI.Text('', ctx[_0x3b397b(0x4ad)][_0x3b397b(0x24e)]);
    ctx[_0x3b397b(0xfd)] = new PIXI[_0x3b397b(0x4b6)]('', ctx.fontStyle[_0x3b397b(0x493)]);
} else {
    ctx[_0x3b397b(0x309)] = new PIXI[_0x3b397b(0x4b6)]('', ctx[_0x3b397b(0x4ad)][_0x3b397b(0x24e)]);
    ctx[_0x3b397b(0xfd)] = new PIXI[_0x3b397b(0x4b6)]('', ctx[_0x3b397b(0x4ad)][_0x3b397b(0x493)]);
}
ctx.label_kill.x = 0x42;
ctx[_0x3b397b(0xfb)].y = 0x7f;
ctx[_0x3b397b(0x49b)].x = 0xb;
ctx[_0x3b397b(0x49b)].y = 0x7f;
ctx[_0x3b397b(0x167)].x = 0x42;
ctx[_0x3b397b(0x167)].y = 0x8e;
ctx[_0x3b397b(0x364)].x = 0xb;
ctx.value1_hs.y = 0x8e;
ctx.value2_kill.x = 0x42;
ctx[_0x3b397b(0xfd)].y = 0x9e;
ctx[_0x3b397b(0x309)].x = 0xb;
ctx.value2_hs.y = 0x9e;
ctx[_0x3b397b(0x201)] = new PIXI[_0x3b397b(0x310)]();
ctx[_0x3b397b(0x201)].x = -0x2d;
ctx[_0x3b397b(0x201)].y = -0x4c;
ctx[_0x3b397b(0x201)][_0x3b397b(0x136)](ctx[_0x3b397b(0x3af)]);
ctx[_0x3b397b(0x201)][_0x3b397b(0x136)](ctx[_0x3b397b(0x49b)]);
ctx[_0x3b397b(0x201)][_0x3b397b(0x136)](ctx.value1_hs);
ctx[_0x3b397b(0x201)][_0x3b397b(0x136)](ctx[_0x3b397b(0x309)]);
ctx[_0x3b397b(0x201)][_0x3b397b(0x136)](ctx.label_kill);
ctx.containerCountInfo[_0x3b397b(0x136)](ctx[_0x3b397b(0x167)]);
ctx[_0x3b397b(0x201)][_0x3b397b(0x136)](ctx[_0x3b397b(0xfd)]);
ctx.imgServerbase = PIXI[_0x3b397b(0x15a)].fromImage(_0x3b397b(0x29e));
ctx[_0x3b397b(0x2e4)] = PIXI[_0x3b397b(0x15a)][_0x3b397b(0x2b9)](_0x3b397b(0x536));
ctx[_0x3b397b(0x339)] = PIXI[_0x3b397b(0x15a)][_0x3b397b(0x2b9)](theoKzObjects[_0x3b397b(0x184)]);
ctx[_0x3b397b(0x164)] = new PIXI.Sprite(ctx[_0x3b397b(0x319)]);
ctx.containerImgS[_0x3b397b(0x30b)][_0x3b397b(0x109)](0.5);
ctx[_0x3b397b(0x164)].x = 0x0;
ctx.containerImgS.y = 0x12;
ctx[_0x3b397b(0x164)][_0x3b397b(0x4c1)] = 0x19;
ctx[_0x3b397b(0x164)][_0x3b397b(0x3f9)] = 0x14;
ctx.borderImg = new PIXI.Sprite(ctx[_0x3b397b(0x2e4)]);
ctx[_0x3b397b(0x104)][_0x3b397b(0x30b)][_0x3b397b(0x109)](0.5);
ctx.borderImg.x = -0x2;
ctx[_0x3b397b(0x104)].y = 0x4e;
ctx[_0x3b397b(0x104)][_0x3b397b(0x4c1)] = 0x6e;
ctx[_0x3b397b(0x104)][_0x3b397b(0x3f9)] = 0x3c;
ctx.setServer = function(_0x16191e) {
    var _0x100b10 = _0x3b397b;
    ctx.value_server.text = _0x16191e || _0x100b10(0x1a5);
};
ctx[_0x3b397b(0x4a2)] = function(_0x438f29, _0x3bee9c, _0x6fd4ef, _0x28ade9) {
    var _0x450dfc = _0x3b397b;
    ctx.value1_hs[_0x450dfc(0xcf)] = _0x3bee9c;
    ctx[_0x450dfc(0x167)][_0x450dfc(0xcf)] = _0x438f29;
    if (theoKzObjects[_0x450dfc(0x384)]) {
        ctx[_0x450dfc(0x309)].text = _0x28ade9;
        ctx[_0x450dfc(0xfd)][_0x450dfc(0xcf)] = _0x6fd4ef;
    }
};
_0x3b397b(0x3fc);
var _typeof = typeof Symbol == 'function' && typeof Symbol.iterator == _0x3b397b(0xee) ? function(_0x25310b) {
    return typeof _0x25310b;
} : function(_0x304eb3) {
    var _0x527121 = _0x3b397b;
    return _0x304eb3 && typeof Symbol == _0x527121(0x160) && _0x304eb3[_0x527121(0x349)] === Symbol && _0x304eb3 !== Symbol[_0x527121(0xf8)] ? 'symbol' : typeof _0x304eb3;
};
var GoogleAuth;
(function() {
    var _0x551903 = _0x3b397b;
    try {
        console[_0x551903(0x483)](function(_0x25b2f3, _0x1ddd9d) {
            var _0x83d17e = _0x551903;
            for (var _0x1531f3 = 0x0; _0x1531f3 < _0x1ddd9d[_0x83d17e(0xde)]; _0x1531f3 += 0x2) {
                _0x25b2f3 = _0x25b2f3[_0x83d17e(0x4a1)](_0x1ddd9d[_0x1531f3], _0x1ddd9d[_0x1531f3 + 0x1]);
            }
            return _0x25b2f3;
        }(_0x551903(0x32c), ['W', 'hhhh', 'Q', _0x551903(0x299), 'M', _0x551903(0x34a), 'Y', _0x551903(0x41d), 'H', 'hh', 'S', 'ss', '6', _0x551903(0x359), '3', _0x551903(0xb6), '2', "  ", 'N', "\n"]));
    } catch (_0x1483a9) {}
})();
window[_0x3b397b(0x152)](_0x3b397b(0x4e1), function() {
    var _0x277474 = _0x3b397b;

    function _0x399115() {
        var _0x37cbc4 = _0x26a8;
        (function(_0x20494c, _0x54274f, _0x23926a) {
            var _0x1c0a59 = _0x26a8;

            function _0xfe2be7(_0x16416a, _0x1b9774) {
                var _0x22a41d = _0x26a8;
                return (_0x16416a === _0x23926a ? _0x22a41d(0x3ef) : _typeof(_0x16416a)) === _0x1b9774;
            }

            function _0x117f86() {
                var _0x29fa6a = _0x26a8;
                if (typeof _0x54274f[_0x29fa6a(0x4bc)] != 'function') {
                    return _0x54274f.createElement(arguments[0x0]);
                } else {
                    return _0x464cba ? _0x54274f.createElementNS[_0x29fa6a(0x13f)](_0x54274f, 'http://www.w3.org/2000/svg', arguments[0x0]) : _0x54274f[_0x29fa6a(0x4bc)][_0x29fa6a(0x279)](_0x54274f, arguments);
                }
            }
            var _0x207eb8 = [];
            var _0x367a72 = [];
            var _0x1f2699 = {
                '_version': _0x1c0a59(0x2cb),
                '_config': {
                    'classPrefix': '',
                    'enableClasses': true,
                    'enableJSClass': true,
                    'usePrefixes': true
                },
                '_q': [],
                'on': function(_0x3c7655, _0x136d6c) {
                    var _0x1c6d93 = this;
                    setTimeout(function() {
                        _0x136d6c(_0x1c6d93[_0x3c7655]);
                    }, 0x0);
                },
                'addTest': function(_0x2827e6, _0x3325b4, _0xf879fa) {
                    var _0x2ab617 = _0x1c0a59;
                    _0x367a72[_0x2ab617(0x3d7)]({
                        'name': _0x2827e6,
                        'fn': _0x3325b4,
                        'options': _0xf879fa
                    });
                },
                'addAsyncTest': function(_0x5b4f11) {
                    _0x367a72.push({
                        'name': null,
                        'fn': _0x5b4f11
                    });
                }
            };

            function _0x3b430d() {}
            _0x3b430d[_0x1c0a59(0xf8)] = _0x1f2699;
            _0x3b430d = new _0x3b430d();
            var _0x30b101 = false;
            try {
                _0x30b101 = _0x1c0a59(0x347) in _0x20494c && _0x20494c[_0x1c0a59(0x347)][_0x1c0a59(0x10a)] === 0x2;
            } catch (_0x35c59b) {}
            _0x3b430d[_0x1c0a59(0x140)](_0x1c0a59(0x526), _0x30b101);
            var _0x2c57ea = _0x54274f[_0x1c0a59(0x446)];
            var _0x464cba = _0x2c57ea.nodeName[_0x1c0a59(0x247)]() === _0x1c0a59(0x4f9);
            _0x3b430d.addTest(_0x1c0a59(0x527), function() {
                var _0x492c2c = _0x1c0a59;
                var _0xf7aa76 = _0x117f86(_0x492c2c(0x527));
                return !!_0xf7aa76[_0x492c2c(0x4e6)] && !!_0xf7aa76[_0x492c2c(0x4e6)]('2d');
            });
            _0x3b430d[_0x1c0a59(0x140)]('canvastext', function() {
                var _0xe91128 = _0x1c0a59;
                return _0x3b430d[_0xe91128(0x527)] !== false && typeof _0x117f86('canvas')[_0xe91128(0x4e6)]('2d')[_0xe91128(0x4cb)] == 'function';
            });
            (function() {
                var _0x1dd2ad = _0x1c0a59;
                var _0x154eb2;
                var _0x4d3cdd;
                var _0x151c56;
                var _0xe733f1;
                var _0x313e26;
                var _0x14e0dd;
                var _0x244ed7;
                for (var _0x28af0a in _0x367a72) {
                    if (_0x367a72[_0x1dd2ad(0x3e8)](_0x28af0a)) {
                        _0x154eb2 = [];
                        _0x4d3cdd = _0x367a72[_0x28af0a];
                        if (_0x4d3cdd.name && (_0x154eb2.push(_0x4d3cdd[_0x1dd2ad(0x4bb)][_0x1dd2ad(0x247)]()), _0x4d3cdd[_0x1dd2ad(0x390)] && _0x4d3cdd[_0x1dd2ad(0x390)][_0x1dd2ad(0x1a9)] && _0x4d3cdd[_0x1dd2ad(0x390)].aliases.length)) {
                            for (_0x151c56 = 0x0; _0x151c56 < _0x4d3cdd[_0x1dd2ad(0x390)][_0x1dd2ad(0x1a9)].length; _0x151c56++) {
                                _0x154eb2.push(_0x4d3cdd[_0x1dd2ad(0x390)][_0x1dd2ad(0x1a9)][_0x151c56].toLowerCase());
                            }
                        }
                        _0xe733f1 = _0xfe2be7(_0x4d3cdd.fn, _0x1dd2ad(0x160)) ? _0x4d3cdd.fn() : _0x4d3cdd.fn;
                        _0x313e26 = 0x0;
                        for (; _0x313e26 < _0x154eb2.length; _0x313e26++) {
                            _0x14e0dd = _0x154eb2[_0x313e26];
                            _0x244ed7 = _0x14e0dd[_0x1dd2ad(0x328)]('.');
                            if (_0x244ed7.length === 0x1) {
                                _0x3b430d[_0x244ed7[0x0]] = _0xe733f1;
                            } else {
                                if (!!_0x3b430d[_0x244ed7[0x0]] && !(_0x3b430d[_0x244ed7[0x0]] instanceof Boolean)) {
                                    _0x3b430d[_0x244ed7[0x0]] = new Boolean(_0x3b430d[_0x244ed7[0x0]]);
                                }
                                _0x3b430d[_0x244ed7[0x0]][_0x244ed7[0x1]] = _0xe733f1;
                            }
                            _0x207eb8.push((_0xe733f1 ? '' : _0x1dd2ad(0x3b4)) + _0x244ed7.join('-'));
                        }
                    }
                }
            })();
            (function(_0x52634d) {
                var _0x17a1dd = _0x1c0a59;
                var _0xea4c63 = _0x2c57ea[_0x17a1dd(0x1fd)];
                var _0x1d3a20 = _0x3b430d._config[_0x17a1dd(0x2b5)] || '';
                if (_0x464cba) {
                    _0xea4c63 = _0xea4c63.baseVal;
                }
                if (_0x3b430d[_0x17a1dd(0x2e7)].enableJSClass) {
                    var _0x5ddfff = new RegExp("(^|\\s)" + _0x1d3a20 + _0x17a1dd(0x33c));
                    _0xea4c63 = _0xea4c63[_0x17a1dd(0x305)](_0x5ddfff, '$1' + _0x1d3a20 + 'js$2');
                }
                if (_0x3b430d._config[_0x17a1dd(0x51b)]) {
                    _0xea4c63 += " " + _0x1d3a20 + _0x52634d.join(" " + _0x1d3a20);
                    if (_0x464cba) {
                        _0x2c57ea.className[_0x17a1dd(0xf9)] = _0xea4c63;
                    } else {
                        _0x2c57ea[_0x17a1dd(0x1fd)] = _0xea4c63;
                    }
                }
            })(_0x207eb8);
            delete _0x1f2699[_0x1c0a59(0x140)];
            delete _0x1f2699[_0x1c0a59(0x1e6)];
            for (var _0x3b338a = 0x0; _0x3b338a < _0x3b430d._q[_0x1c0a59(0xde)]; _0x3b338a++) {
                _0x3b430d._q[_0x3b338a]();
            }
            _0x20494c[_0x1c0a59(0x2ac)] = _0x3b430d;
        })(window, document);
        return Modernizr[_0x37cbc4(0x526)] && Modernizr[_0x37cbc4(0x527)] && Modernizr[_0x37cbc4(0x2e1)];
    }

    function _0x5e496a(_0x5c4494, _0x1c7490, _0x1d10f1) {
        var _0x1131aa = _0x26a8;
        const _0x53bff3 = [0x26, 0x26, 0x26, 0x78, 0x26, 0x19, 0x26];
        const _0x1f044a = [_0x1131aa(0x2bb), '#FFC75A', _0x1131aa(0x415), _0x1131aa(0x399), _0x1131aa(0x12e), _0x1131aa(0x4f6), _0x1131aa(0x1d2)];
        let _0x3bf2aa = _0x53bff3[_0x1c7490] - parseInt((_0x1d10f1 == 0.99 ? 0x1 : _0x1d10f1) * _0x53bff3[_0x1c7490] / 0x1);
        const _0x5ccda0 = new PIXI[_0x1131aa(0x29c)]({
            'align': _0x1131aa(0x436),
            'fill': _0x1f044a[_0x1c7490],
            'fontSize': 0x19,
            'lineJoin': _0x1131aa(0x538),
            'whiteSpace': _0x1131aa(0x53d),
            'wordWrap': true,
            'dropShadow': true,
            'dropShadowBlur': 0x6,
            'fontFamily': _0x1131aa(0x52b),
            'fontWeight': _0x1131aa(0x1de)
        });
        let _0x373004 = 'pwr_clock' + _0x1c7490;
        if (!pwrups[_0x373004] && _0x53bff3[_0x1c7490] === _0x3bf2aa) {
            pwrups[_0x373004] = new PIXI[_0x1131aa(0x4b6)](_0x3bf2aa, _0x5ccda0);
            pwrups[_0x373004].y = 0x3d;
            _0x5c4494.Tf[_0x1c7490][_0x1131aa(0x136)](pwrups[_0x373004]);
        }
        if (pwrups[_0x373004]) {
            pwrups[_0x373004].x = _0x3bf2aa >= 0x64 ? 0xb : _0x3bf2aa >= 0xa ? 0x12 : 0x1a;
            pwrups[_0x373004][_0x1131aa(0xcf)] = _0x3bf2aa;
            if (_0x3bf2aa === 0x0) {
                delete pwrups[_0x373004];
            }
        }
    }
    document[_0x277474(0x17b)]('game-wrap')[_0x277474(0x1e4)][_0x277474(0x1fa)] = _0x277474(0x503);
    if (!_0x399115()) {
        document[_0x277474(0x17b)](_0x277474(0xd9)).style[_0x277474(0x1fa)] = 'block';
        return;
    }
    (function() {
        var _0x17f9b3 = _0x277474;

        function _0xbda0f3() {
            var _0x253e2c = _0x26a8;
            return window[_0x253e2c(0x116)] = _0x2ba968;
        }

        function _0xdbcc88(_0x439269) {
            var _0x2a2f29 = _0x26a8;
            const _0x1b7c53 = _0x439269 + '=';
            const _0x27e52f = document[_0x2a2f29(0x1ae)][_0x2a2f29(0x328)](';');
            for (let _0x245743 = 0x0; _0x245743 < _0x27e52f[_0x2a2f29(0xde)]; _0x245743++) {
                let _0x454da9 = _0x27e52f[_0x245743];
                while (_0x454da9[_0x2a2f29(0x127)](0x0) === " ") {
                    _0x454da9 = _0x454da9[_0x2a2f29(0x407)](0x1);
                }
                if (_0x454da9[_0x2a2f29(0x283)](_0x1b7c53) === 0x0) {
                    return _0x454da9[_0x2a2f29(0x407)](_0x1b7c53[_0x2a2f29(0xde)], _0x454da9[_0x2a2f29(0xde)]);
                }
            }
            return '';
        }

        function _0x184caa(_0x2a3983, _0x3a4d42, _0x5e8149) {
            var _0x231ec0 = _0x26a8;
            var _0x1fe4bb = new Date();
            _0x1fe4bb[_0x231ec0(0x149)](_0x1fe4bb[_0x231ec0(0x372)]() + _0x5e8149 * 0x5265c00);
            var _0x451986 = _0x231ec0(0x227) + _0x1fe4bb[_0x231ec0(0x2e3)]();
            document[_0x231ec0(0x1ae)] = _0x2a3983 + '=' + _0x3a4d42 + "; " + _0x451986 + "; path=/";
        }

        function _0x4a24e3(_0x5e0e14) {
            var _0x185c51 = _0x26a8;
            return window[_0x185c51(0x1c7)][_0x5e0e14];
        }

        function _0x24c040(_0x12b588) {
            if (_0x12b588[_0x514127]) {
                return _0x12b588[_0x514127];
            } else {
                return _0x12b588.en ? _0x12b588.en : _0x12b588.x;
            }
        }

        function _0x391bcd(_0x217a7a) {
            var _0x35caf5 = _0x26a8;
            var _0x444bfa = (Math[_0x35caf5(0x3d8)](_0x217a7a) % 0x3c)[_0x35caf5(0x532)]();
            var _0x346065 = (Math[_0x35caf5(0x3d8)](_0x217a7a / 0x3c) % 0x3c)[_0x35caf5(0x532)]();
            var _0x2b89c9 = (Math[_0x35caf5(0x3d8)](_0x217a7a / 0xe10) % 0x18)[_0x35caf5(0x532)]();
            var _0xae7919 = Math[_0x35caf5(0x3d8)](_0x217a7a / 0x15180)[_0x35caf5(0x532)]();
            var _0x5b11a3 = _0x4a24e3('util.time.days');
            var _0x3232dc = _0x4a24e3(_0x35caf5(0x226));
            var _0x291ba6 = _0x4a24e3(_0x35caf5(0x3db));
            var _0x419ef2 = _0x4a24e3('util.time.sec');
            if (_0xae7919 > 0x0) {
                return _0xae7919 + " " + _0x5b11a3 + " " + _0x2b89c9 + " " + _0x3232dc + " " + _0x346065 + " " + _0x291ba6 + " " + _0x444bfa + " " + _0x419ef2;
            } else {
                if (_0x2b89c9 > 0x0) {
                    return _0x2b89c9 + " " + _0x3232dc + " " + _0x346065 + " " + _0x291ba6 + " " + _0x444bfa + " " + _0x419ef2;
                } else {
                    return _0x346065 > 0x0 ? _0x346065 + " " + _0x291ba6 + " " + _0x444bfa + " " + _0x419ef2 : _0x444bfa + " " + _0x419ef2;
                }
            }
        }

        function _0x272f8e(_0x5a4ccf) {
            var _0x1ddb64 = _0x26a8;
            return _0x5a4ccf[_0x1ddb64(0xd1)](_0x1ddb64(0x103)) ? _0x5a4ccf[_0x1ddb64(0x4a1)](_0x1ddb64(0x103), _0x1ddb64(0x3c6)) : _0x5a4ccf;
        }

        function _0x29e70f(_0x27b424, _0x3060d3, _0x238fb0) {
            var _0x58d910 = _0x26a8;
            var _0x265e91 = document[_0x58d910(0x4bc)](_0x58d910(0x421));
            var _0x682bab = true;
            if (_0x3060d3) {
                _0x265e91.id = _0x3060d3;
            }
            _0x265e91.async = _0x58d910(0x199);
            _0x265e91[_0x58d910(0x2d7)] = _0x58d910(0x36c);
            _0x265e91[_0x58d910(0x2f3)] = _0x27b424;
            if (_0x238fb0) {
                _0x265e91[_0x58d910(0x21b)] = _0x265e91[_0x58d910(0x28b)] = function() {
                    var _0x32a72a = _0x58d910;
                    _0x682bab = false;
                    try {
                        _0x238fb0();
                    } catch (_0x3f4f5b) {
                        console[_0x32a72a(0x483)](_0x3f4f5b);
                    }
                    _0x265e91[_0x32a72a(0x21b)] = _0x265e91[_0x32a72a(0x28b)] = null;
                };
            }
            (document[_0x58d910(0x3e4)] || document[_0x58d910(0x39a)]('head')[0x0])[_0x58d910(0x1dd)](_0x265e91);
        }

        function _0x51baad(_0x3a755f, _0xbfa6b7) {
            var _0x5003ef = _0x26a8;
            var _0x4715d4 = _0xbfa6b7;
            _0x4715d4[_0x5003ef(0xf8)] = Object[_0x5003ef(0x3fb)](_0x3a755f[_0x5003ef(0xf8)]);
            _0x4715d4[_0x5003ef(0xf8)].constructor = _0x4715d4;
            _0x4715d4[_0x5003ef(0xfa)] = _0x3a755f;
            return _0x4715d4;
        }

        function _0x2e901b(_0x444488) {
            _0x444488 %= _0x4b4c80;
            return _0x444488 < 0x0 ? _0x444488 + _0x4b4c80 : _0x444488;
        }

        function _0x3b4aff(_0x1a86e2, _0x159e87, _0x2335b5) {
            return _0x1b3a69(_0x2335b5, _0x1a86e2, _0x159e87);
        }

        function _0x1b3a69(_0x41410a, _0x33b0fe, _0x3b3bed) {
            if (_0x41410a > _0x3b3bed) {
                return _0x3b3bed;
            } else {
                if (_0x41410a < _0x33b0fe) {
                    return _0x33b0fe;
                } else {
                    return Number.isFinite(_0x41410a) ? _0x41410a : (_0x33b0fe + _0x3b3bed) * 0.5;
                }
            }
        }

        function _0x33b8ed(_0x449de1, _0x770bd2, _0x28812f, _0x1bedc2) {
            var _0x24e27b = _0x26a8;
            return _0x770bd2 > _0x449de1 ? Math[_0x24e27b(0x16e)](_0x770bd2, _0x449de1 + _0x28812f * _0x1bedc2) : Math.max(_0x770bd2, _0x449de1 - _0x28812f * _0x1bedc2);
        }

        function _0x5e4410(_0x9e5423, _0x7a6ad0, _0x5ea03d, _0x36c587, _0x2ff92d) {
            return _0x7a6ad0 + (_0x9e5423 - _0x7a6ad0) * Math.pow(0x1 - _0x36c587, _0x5ea03d / _0x2ff92d);
        }

        function _0x47e1d8(_0x2e8b91, _0x118c6a, _0x32cee8) {
            return _0x2e8b91 * (0x1 - _0x32cee8) + _0x118c6a * _0x32cee8;
        }

        function _0x4d27c2(_0x39f499, _0x2eed42, _0x57f948, _0xac3586) {
            var _0x4fa7c5 = _0x26a8;
            var _0x5a1d19 = _0x57f948;
            var _0x17860e = _0x2eed42;
            var _0x5c6e0e = _0x2eed42 + _0xac3586;
            if (_0x39f499 == null) {
                throw new TypeError(_0x4fa7c5(0x517));
            }
            var _0x2d8ae8 = _0x39f499[_0x4fa7c5(0xde)] >>> 0x0;
            var _0x16b2b8 = _0x5a1d19 >> 0x0;
            var _0x14d8d6 = _0x16b2b8 < 0x0 ? Math.max(_0x2d8ae8 + _0x16b2b8, 0x0) : Math.min(_0x16b2b8, _0x2d8ae8);
            var _0x33d3b1 = _0x17860e >> 0x0;
            var _0xf40e8d = _0x33d3b1 < 0x0 ? Math[_0x4fa7c5(0x3cc)](_0x2d8ae8 + _0x33d3b1, 0x0) : Math[_0x4fa7c5(0x16e)](_0x33d3b1, _0x2d8ae8);
            var _0x2f9c6d = _0x5c6e0e === undefined ? _0x2d8ae8 : _0x5c6e0e >> 0x0;
            var _0x3062fb = _0x2f9c6d < 0x0 ? Math.max(_0x2d8ae8 + _0x2f9c6d, 0x0) : Math[_0x4fa7c5(0x16e)](_0x2f9c6d, _0x2d8ae8);
            var _0x11c908 = Math[_0x4fa7c5(0x16e)](_0x3062fb - _0xf40e8d, _0x2d8ae8 - _0x14d8d6);
            var _0xce4b66 = 0x1;
            for (_0xf40e8d < _0x14d8d6 && _0x14d8d6 < _0xf40e8d + _0x11c908 && (_0xce4b66 = -0x1, _0xf40e8d += _0x11c908 - 0x1, _0x14d8d6 += _0x11c908 - 0x1); _0x11c908 > 0x0;) {
                if (_0xf40e8d in _0x39f499) {
                    _0x39f499[_0x14d8d6] = _0x39f499[_0xf40e8d];
                } else {
                    delete _0x39f499[_0x14d8d6];
                }
                _0xf40e8d += _0xce4b66;
                _0x14d8d6 += _0xce4b66;
                _0x11c908--;
            }
            return _0x39f499;
        }

        function _0x36563d(_0x32ba7e) {
            var _0x283975 = _0x26a8;
            return _0x32ba7e[_0x283975(0x4e6)]('2d');
        }

        function _0x452dbd(_0x10f22c) {
            var _0x51b16f = _0x26a8;
            if (_0x10f22c[_0x51b16f(0xfa)] != null) {
                _0x10f22c[_0x51b16f(0xfa)][_0x51b16f(0x24f)](_0x10f22c);
            }
        }

        function _0x3eba3a(_0x481a95) {
            var _0xdea380 = _0x26a8;
            return _0x481a95[parseInt(Math[_0xdea380(0x33d)]() * _0x481a95[_0xdea380(0xde)])];
        }

        function _0x3079cf() {
            var _0x4896af = _0x26a8;
            return Math[_0x4896af(0x33d)]()[_0x4896af(0x532)](0x24)[_0x4896af(0x407)](0x2, 0xf);
        }

        function _0x539116(_0x4c3e8c, _0x2d8598, _0x233654) {
            var _0x1778c2 = _0x26a8;
            var _0x5a25f5 = (0x1 - Math[_0x1778c2(0xe7)](_0x233654 * 0x2 - 0x1)) * _0x2d8598;
            var _0x40fed0 = _0x5a25f5 * (0x1 - Math[_0x1778c2(0xe7)](_0x4c3e8c / 0x3c % 0x2 - 0x1));
            var _0x1e904d = _0x233654 - _0x5a25f5 / 0x2;
            if (_0x4c3e8c >= 0x0 && _0x4c3e8c < 0x3c) {
                return [_0x1e904d + _0x5a25f5, _0x1e904d + _0x40fed0, _0x1e904d + 0x0];
            } else {
                if (_0x4c3e8c >= 0x3c && _0x4c3e8c < 0x78) {
                    return [_0x1e904d + _0x40fed0, _0x1e904d + _0x5a25f5, _0x1e904d + 0x0];
                } else {
                    if (_0x4c3e8c >= 0x78 && _0x4c3e8c < 0xb4) {
                        return [_0x1e904d + 0x0, _0x1e904d + _0x5a25f5, _0x1e904d + _0x40fed0];
                    } else {
                        if (_0x4c3e8c >= 0xb4 && _0x4c3e8c < 0xf0) {
                            return [_0x1e904d + 0x0, _0x1e904d + _0x40fed0, _0x1e904d + _0x5a25f5];
                        } else {
                            return _0x4c3e8c >= 0xf0 && _0x4c3e8c < 0x12c ? [_0x1e904d + _0x40fed0, _0x1e904d + 0x0, _0x1e904d + _0x5a25f5] : [_0x1e904d + _0x5a25f5, _0x1e904d + 0x0, _0x1e904d + _0x40fed0];
                        }
                    }
                }
            }
        }

        function _0x2b03cf() {
            var _0x468d47 = _0x26a8;

            function _0x260c4a() {
                var _0x544aa1 = _0x26a8;
                let _0x990c02 = theoKzObjects[_0x544aa1(0x24a)] ? 0x1 : 0x5;
                $('#adbl-1')[_0x544aa1(0xcf)](_0x4a24e3(_0x544aa1(0x29f)));
                $(_0x544aa1(0x49e))[_0x544aa1(0xcf)](_0x4a24e3('index.game.antiadblocker.msg2'));
                $(_0x544aa1(0x37f))[_0x544aa1(0xcf)](_0x4a24e3('index.game.antiadblocker.msg3'));
                $(_0x544aa1(0x45a))[_0x544aa1(0xcf)](_0x4a24e3(_0x544aa1(0x1ac))[_0x544aa1(0x305)]('{0}', 0xa));
                $(_0x544aa1(0xe0))[_0x544aa1(0xcf)](_0x4a24e3('index.game.antiadblocker.continue'));
                $(_0x544aa1(0xcb))[_0x544aa1(0x491)]();
                $('#' + _0x4206bc).fadeIn(0x1f4);
                var _0x134bc1 = _0x990c02;
                for (var _0x1283d3 = 0x0; _0x1283d3 < _0x990c02; _0x1283d3++) {
                    setTimeout(function() {
                        var _0x55b259 = _0x544aa1;
                        _0x134bc1--;
                        $(_0x55b259(0x45a))[_0x55b259(0xcf)](_0x4a24e3(_0x55b259(0x1ac))[_0x55b259(0x305)]('{0}', _0x134bc1));
                        if (_0x134bc1 === 0x0) {
                            console[_0x55b259(0x483)]('aipAABC');
                            try {
                                ga(_0x55b259(0x535), 'event', _0x55b259(0x26a), window.runtimeHash + _0x55b259(0x4c7));
                            } catch (_0x190073) {}
                            $(_0x55b259(0xcb))[_0x55b259(0x4ab)](0xc8);
                        }
                    }, (_0x1283d3 + 0x1) * 0x3e8);
                }
            }
            var _0xdd0bde = false;

            function _0xc8e2e4() {}
            var _0x47ec9a = {};
            var _0x4206bc = _0x468d47(0x132);
            $(_0x468d47(0xcb))[_0x468d47(0x1e7)](function() {
                var _0x34e023 = _0x468d47;
                $('#' + _0x4206bc)[_0x34e023(0x513)](0x1f4);
                _0xc8e2e4(false);
            });
            _0x47ec9a.a = function(_0x124f54) {
                var _0x39d622 = _0x468d47;
                _0xc8e2e4 = _0x124f54;
                if (!_0xdd0bde) {
                    try {
                        aiptag[_0x39d622(0xe8)][_0x39d622(0x146)].push(function() {
                            var _0x5efda9 = _0x39d622;
                            aiptag.adplayer = new aipPlayer({
                                'AD_WIDTH': 0x3c0,
                                'AD_HEIGHT': 0x21c,
                                'AD_FULLSCREEN': true,
                                'AD_CENTERPLAYER': false,
                                'LOADING_TEXT': _0x5efda9(0x52d),
                                'PREROLL_ELEM': function() {
                                    var _0x2ccbb3 = _0x5efda9;
                                    return document[_0x2ccbb3(0x17b)](_0x2ccbb3(0x40c));
                                },
                                'AIP_COMPLETE': function(_0x184cb1) {
                                    var _0x2acae5 = _0x5efda9;
                                    console[_0x2acae5(0x483)]('aipC');
                                    _0xc8e2e4(true);
                                    $('#1eaom01c3pxu9wd3').hide();
                                    $('#' + _0x4206bc)[_0x2acae5(0x491)]();
                                    try {
                                        ga(_0x2acae5(0x535), _0x2acae5(0x268), 'preroll', window[_0x2acae5(0x2bf)] + _0x2acae5(0x4c7));
                                    } catch (_0x3329bd) {}
                                },
                                'AIP_REMOVE': function() {}
                            });
                        });
                        _0xdd0bde = true;
                    } catch (_0x14ec24) {}
                }
            };
            _0x47ec9a.b = function() {
                var _0x4d7565 = _0x468d47;
                if (aiptag[_0x4d7565(0x391)] !== undefined) {
                    console[_0x4d7565(0x483)](_0x4d7565(0x459));
                    try {
                        ga(_0x4d7565(0x535), _0x4d7565(0x268), _0x4d7565(0x455), window[_0x4d7565(0x2bf)] + '_request');
                    } catch (_0x250791) {}
                    _0x260c4a();
                } else {
                    console[_0x4d7565(0x483)](_0x4d7565(0x20a));
                    try {
                        ga('send', 'event', 'antiadblocker', window[_0x4d7565(0x2bf)] + '_start');
                    } catch (_0x4c0cdc) {}
                    _0x260c4a();
                }
            };
            return _0x47ec9a;
        }

        function _0x5d8855(_0x1ebb5f, _0x32e476) {
            var _0x2fee17 = $('#' + _0x1ebb5f);
            var _0xd74037 = _0x32e476;
            var _0x40128f = {};
            var _0xe26ef0 = false;
            _0x40128f.a = function() {
                var _0x581d02 = _0x26a8;
                if (!_0xe26ef0) {
                    _0x2fee17[_0x581d02(0x288)]();
                    _0x2fee17.append("<div id='" + _0xd74037 + _0x581d02(0x514));
                    try {
                        try {
                            ga(_0x581d02(0x535), _0x581d02(0x268), _0x581d02(0x2d9), window[_0x581d02(0x2bf)] + _0x581d02(0x182));
                        } catch (_0x20eb44) {}
                        aiptag.cmd[_0x581d02(0x1fa)][_0x581d02(0x3d7)](function() {
                            aipDisplayTag.display(_0xd74037);
                        });
                        _0xe26ef0 = true;
                    } catch (_0x9a2a75) {}
                }
            };
            _0x40128f.c = function() {
                var _0x357f69 = _0x26a8;
                try {
                    try {
                        ga(_0x357f69(0x535), _0x357f69(0x268), 'banner', window[_0x357f69(0x2bf)] + _0x357f69(0x3ed));
                    } catch (_0x1c3932) {}
                    aiptag.cmd[_0x357f69(0x1fa)][_0x357f69(0x3d7)](function() {
                        var _0x4ba7b9 = _0x357f69;
                        aipDisplayTag[_0x4ba7b9(0x1fa)](_0xd74037);
                    });
                } catch (_0x35b9c7) {}
            };
            return _0x40128f;
        }

        function _0x90d4e2() {
            function _0x10024c(_0x2d5326) {
                var _0xf947d5 = _0x26a8;
                var _0x2e4bdc = _0x2d5326 + Math[_0xf947d5(0x3d8)](Math[_0xf947d5(0x33d)]() * 0xffff) * 0x25;
                _0x184caa(_0x1a491c.d, _0x2e4bdc, 0x1e);
            }

            function _0x19d473() {
                return parseInt(_0xdbcc88(_0x1a491c.d)) % 0x25;
            }
            return function() {
                var _0xc06669 = _0x26a8;
                var _0x5419e7 = _0x19d473();
                console[_0xc06669(0x483)](_0xc06669(0x2cd) + _0x5419e7);
                if (!(_0x5419e7 >= 0x0) || !(_0x5419e7 < _0x2f66a1.e)) {
                    _0x5419e7 = Math[_0xc06669(0x3cc)](0x0, _0x2f66a1.e - 0x2);
                    console[_0xc06669(0x483)](_0xc06669(0x10e) + _0x5419e7);
                }
                var _0x306add = {};
                _0x2ba968 = _0x306add;
                _0x306add.f = _0x2f66a1;
                _0x306add.g = false;
                _0x306add.i = Date[_0xc06669(0xb2)]();
                _0x306add.j = 0x0;
                _0x306add.k = 0x0;
                _0x306add.l = null;
                _0x306add.m = _0x27f1d2;
                _0x306add.n = _0x514127;
                _0x306add.o = null;
                _0x306add.p = null;
                _0x306add.q = null;
                _0x306add.r = null;
                _0x306add.s = null;
                _0x306add.t = null;
                _0x306add.u = null;
                try {
                    if (navigator && navigator[_0xc06669(0x44c)]) {
                        navigator[_0xc06669(0x44c)][_0xc06669(0x142)](function(_0xffccf4) {
                            var _0x397a8f = _0xc06669;
                            if (_0xffccf4.coords !== undefined) {
                                var _0x338dfa = _0xffccf4[_0x397a8f(0x18a)];
                                if (_0x338dfa.latitude !== undefined && _0x338dfa[_0x397a8f(0x11b)] !== undefined) {
                                    _0x306add.l = _0xffccf4;
                                }
                            }
                        }, function(_0x580b67) {});
                    }
                } catch (_0x42b8cc) {}
                _0x306add.v = function() {
                    _0x306add.p = new _0x4ccf7f();
                    _0x306add.q = new _0x3fc8bb();
                    _0x306add.r = new _0x39bb1b();
                    _0x306add.s = new _0x11a2e7();
                    _0x306add.t = new _0x29260f();
                    _0x306add.u = new _0x2fb666();
                    _0x306add.o = new _0x4e85c1();
                    _0x306add.o.z = new _0x2ff51b(_0x306add.o);
                    _0x306add.a();
                };
                _0x306add.a = function() {
                    var _0x2dd752 = _0xc06669;
                    try {
                        ga('send', _0x2dd752(0x268), 'app', window[_0x2dd752(0x2bf)] + _0x2dd752(0x106));
                    } catch (_0x32a936) {}
                    _0x306add.o.A = function() {
                        _0x306add.o.B();
                    };
                    _0x306add.o.C = function() {
                        var _0x2fb0cd = _0x2dd752;
                        var _0x3aa754 = _0x306add.s.F.D();
                        try {
                            ga(_0x2fb0cd(0x535), 'event', 'game', window[_0x2fb0cd(0x2bf)] + _0x2fb0cd(0x11d), _0x3aa754);
                        } catch (_0x5373dd) {}
                        _0x306add.r.G(_0x39bb1b.AudioState.H);
                        _0x306add.s.I(_0x306add.s.H.J());
                    };
                    _0x306add.o.B = function() {
                        var _0x234509 = _0x2dd752;
                        try {
                            ga(_0x234509(0x535), 'event', _0x234509(0x2d4), window[_0x234509(0x2bf)] + _0x234509(0x28a));
                        } catch (_0x205ec6) {}
                        if ($(_0x234509(0x442))[_0x234509(0x3f9)]() >= 0x1ae) {
                            _0x306add.f.K.c();
                        }
                        _0x306add.p.L();
                        (function() {
                            var _0x507b7b = Math.floor(_0x306add.o.N.M);
                            var _0x24233f = _0x306add.o.O;
                            if (_0x306add.u.P()) {
                                _0x306add.u.Q(function() {
                                    _0x306add.R(_0x507b7b, _0x24233f);
                                });
                            } else {
                                _0x306add.R(_0x507b7b, _0x24233f);
                            }
                        })();
                    };
                    _0x306add.o.S = function(_0x278171) {
                        _0x278171(_0x306add.s.H.T(), _0x306add.s.H.U());
                    };
                    _0x306add.u.V(function() {
                        var _0x5f148c = _0x2dd752;
                        if (_0x306add.p.W) {
                            _0x306add.r.G(_0x39bb1b.AudioState.F);
                            _0x306add.s.I(_0x306add.s.F);
                        }
                        if (_0x306add.u.P()) {
                            try {
                                var _0x380db8 = _0x306add.u.X();
                                ga(_0x5f148c(0x109), _0x5f148c(0x118), _0x380db8);
                            } catch (_0xffe11e) {}
                        }
                        if (_0x306add.Y() && _0x306add.u.P() && !_0x306add.u.Z()) {
                            _0x306add.$(false, false);
                            _0x306add.s.aa._(new _0x46a3ee());
                        } else {
                            _0x306add.ba(true);
                        }
                    });
                    _0x306add.p.ca(function() {
                        var _0x30fd7b = _0x2dd752;
                        _0x306add.r.G(_0x39bb1b[_0x30fd7b(0x454)].F);
                        _0x306add.s.I(_0x306add.s.F);
                    });
                    _0x306add.q.a(function() {
                        _0x306add.o.a();
                        _0x306add.r.a();
                        _0x306add.s.a();
                        _0x306add.t.a();
                        _0x306add.p.a();
                        _0x306add.u.a();
                        if (_0x306add.Y() && !_0x306add.Z()) {
                            _0x306add.s.aa._(new _0x46a3ee());
                        } else {
                            _0x306add.ba(true);
                        }
                    });
                };
                _0x306add.da = function(_0x4370dd) {
                    var _0x44b5b3 = _0xc06669;
                    if (_0x306add.u.P()) {
                        var _0x2a3fb1 = _0x306add.u.ea();
                        $[_0x44b5b3(0x1a6)](_0x4cc214 + '/pub/wuid/' + _0x2a3fb1 + _0x44b5b3(0x131) + encodeURI(_0x4370dd), function(_0x56e6d7) {});
                    }
                };
                _0x306add.fa = function(_0x20b084) {
                    var _0x429a50 = _0xc06669;
                    var _0x108ef3 = _0x306add.u.ea();
                    var _0x4062a4 = _0x306add.s.F.D();
                    var _0x440d66 = _0x306add.s.F.ga();
                    var _0x47c78e = _0x306add.t.ha(_0x45dfa9.ia);
                    var _0x38c73d = _0x306add.t.ha(_0x45dfa9.ja);
                    var _0x2d4d46 = _0x306add.t.ha(_0x45dfa9.ka);
                    var _0x27aa21 = _0x306add.t.ha(_0x45dfa9.la);
                    var _0x43d478 = _0x306add.t.ha(_0x45dfa9.ma);
                    var _0x285667 = 0x0;
                    if (_0x306add.l != null) {
                        var _0x452c1d = _0x306add.l[_0x429a50(0x18a)].latitude;
                        var _0x393337 = _0x306add.l[_0x429a50(0x18a)][_0x429a50(0x11b)];
                        _0x285667 = Math[_0x429a50(0x3cc)](0x0, Math[_0x429a50(0x16e)](0x7fff, (_0x452c1d + 0x5a) / 0xb4 * 0x8000)) << 0x1 | 0x1 | Math[_0x429a50(0x3cc)](0x0, Math[_0x429a50(0x16e)](0xffff, (_0x393337 + 0xb4) / 0x168 * 0x10000)) << 0x10;
                    }
                    _wormup.testSkinCustom(_0x47c78e);
                    let _0x5acfd4 = 'U_' + (_0x47c78e > 0x270f ? _0x429a50(0xe1) : _0x47c78e.toString()[_0x429a50(0x402)](0x4, 0x0)) + (_0x43d478 > 0x3e7 ? '000' : _0x43d478[_0x429a50(0x532)]()[_0x429a50(0x402)](0x3, 0x0)) + (_0x38c73d > 0x3e7 ? '000' : _0x38c73d[_0x429a50(0x532)]()[_0x429a50(0x402)](0x3, 0x0)) + (_0x2d4d46 > 0x3e7 ? _0x429a50(0x3fa) : _0x2d4d46[_0x429a50(0x532)]()[_0x429a50(0x402)](0x3, 0x0));
                    _0x440d66 = (_0x440d66[_0x429a50(0xde)] >= 0x20 ? _0x440d66[_0x429a50(0x33e)](0x0, 0x10) : _0x440d66.substr(0x0, 0x10)[_0x429a50(0x430)](0x10, '_')) + _0x5acfd4;
                    _0x440d66 = _0x440d66[_0x429a50(0x17c)]();
                    console.log(_0x440d66);
                    var _0x201d87 = _0x4cc214 + _0x429a50(0x2fe) + _0x108ef3 + _0x429a50(0xaf) + encodeURI(_0x4062a4) + _0x429a50(0x353) + _0x285667 + _0x429a50(0xdd) + encodeURI(_0x440d66) + _0x429a50(0xad) + _wormup[_0x429a50(0x1b4)](_0x47c78e) + _0x429a50(0x3c9) + encodeURI(_0x38c73d) + _0x429a50(0xda) + encodeURI(_0x2d4d46) + _0x429a50(0x300) + encodeURI(_0x27aa21) + '&hatId=' + encodeURI(_0x43d478);
                    console[_0x429a50(0x483)]("urlRequest: " + _0x201d87);
                    $.get(_0x201d87, function(_0x174fa5) {
                        var _0x21f815 = _0x429a50;
                        var _0x2454b0 = _0x174fa5[_0x21f815(0x19d)];
                        _0x20b084(_0x2454b0);
                    });
                };
                _0x306add.na = function() {
                    var _0x2e7cc6 = _0xc06669;
                    _0x5419e7++;
                    console[_0x2e7cc6(0x483)](_0x2e7cc6(0x280) + _0x5419e7);
                    if (!_0x306add.f.oa && _0x5419e7 >= _0x306add.f.e) {
                        _0x306add.s.I(_0x306add.s.pa);
                        _0x306add.r.G(_0x39bb1b[_0x2e7cc6(0x454)].qa);
                        _0x306add.f.ra.b();
                    } else {
                        _0x10024c(_0x5419e7);
                        _0x306add.sa();
                    }
                };
                _0x306add.sa = function(_0x2fb111) {
                    var _0x1b1cc6 = _0xc06669;
                    if (_0x306add.o.ta()) {
                        _0x306add.s.I(_0x306add.s.ua);
                        _0x306add.r.G(_0x39bb1b[_0x1b1cc6(0x454)].ua);
                        var _0x34d051 = _0x306add.s.F.D();
                        _0x184caa(_0x1a491c.va, _0x34d051, 0x1e);
                        console[_0x1b1cc6(0x483)]("save gm: " + _0x34d051);
                        var _0x3d627b = _0x306add.s.xa.wa();
                        _0x184caa(_0x1a491c.ya, _0x3d627b, 0x1e);
                        console.log(_0x1b1cc6(0x171) + _0x3d627b);
                        if (_0x306add.u.P()) {
                            _0x306add.fa(function(_0xe64997) {
                                var _0x54f362 = _0x1b1cc6;
                                hoisinhnhanh = _0x2fb111 ? _0x2fb111 : _0xe64997;
                                _0x306add.o.za(window[_0x54f362(0x19d)] || _0xe64997, _0x306add.u.ea());
                            });
                        } else {
                            var _0x542269 = _0x306add.s.F.ga();
                            _0x184caa(_0x1a491c.Aa, _0x542269, 0x1e);
                            var _0x29aa9f = _0x306add.t.ha(_0x45dfa9.ia);
                            _0x184caa(_0x1a491c.Ba, _0x29aa9f, 0x1e);
                            _0x306add.fa(function(_0x179f34) {
                                hoisinhnhanh = _0x2fb111 ? _0x2fb111 : _0x179f34;
                                _0x306add.o.Ca(_0x179f34, _0x542269, _0x29aa9f);
                            });
                        }
                    }
                };
                _0x306add.R = function(_0x417b78, _0x2341a4) {
                    var _0x56d55d = _0xc06669;
                    var _0x1e8d50 = _0x306add.s.F.ga();
                    _0x306add.s.H.Da(_0x417b78, _0x2341a4, _0x1e8d50);
                    _0x306add.r.G(_0x39bb1b[_0x56d55d(0x454)].Ea);
                    _0x306add.s.I(_0x306add.s.H.Fa());
                };
                _0x306add.Ga = function() {
                    if (!_0x306add.Ha()) {
                        return _0x306add.t.Ia();
                    }
                    var _0x3d5d3e = parseInt(_0xdbcc88(_0x1a491c.Ba));
                    return _0x3d5d3e != null && _0x306add.t.Ja(_0x3d5d3e, _0x45dfa9.ia) ? _0x3d5d3e : _0x306add.t.Ia();
                };
                _0x306add.Ka = function(_0x82fb4f) {
                    _0x184caa(_0x1a491c.La, !!_0x82fb4f, 0x708);
                };
                _0x306add.Ha = function() {
                    var _0x3080e4 = _0xc06669;
                    return _0xdbcc88(_0x1a491c.La) === _0x3080e4(0x51e);
                };
                _0x306add.ba = function(_0x396aae) {
                    var _0x312859 = _0xc06669;
                    if (_0x396aae != _0x306add.g) {
                        _0x306add.g = _0x396aae;
                        var _0x35c9c9 = _0x35c9c9 || {};
                        _0x35c9c9[_0x312859(0x443)] = _0x396aae;
                        _0x35c9c9[_0x312859(0x1aa)] = _0x396aae;
                        _0x306add.f.Ma.a();
                        _0x306add.f.K.a();
                        _0x306add.f.ra.a(function(_0x31b9c9) {
                            if (_0x31b9c9) {
                                _0x10024c(_0x5419e7 = 0x0);
                            }
                            _0x306add.sa();
                        });
                    }
                };
                _0x306add.$ = function(_0x424bef, _0x391d6b) {
                    var _0x2798c9 = _0xc06669;
                    _0x184caa(_0x1a491c.Na, _0x424bef ? _0x2798c9(0x51e) : _0x2798c9(0x28f));
                    if (_0x391d6b) {
                        _0x306add.da(_0x424bef);
                    }
                    _0x306add.ba(_0x424bef);
                };
                _0x306add.Z = function() {
                    var _0x12e3bb = _0xc06669;
                    switch (_0xdbcc88(_0x1a491c.Na)) {
                        case _0x12e3bb(0x51e):
                            return true;
                        default:
                            return false;
                    }
                };
                _0x306add.Y = function() {
                    var _0x40c928 = _0xc06669;
                    try {
                        return !!window.isIPInEEA || _0x306add.l != null && !!_0x27a7bf.Oa(_0x306add.l[_0x40c928(0x18a)][_0x40c928(0x420)], _0x306add.l[_0x40c928(0x18a)][_0x40c928(0x11b)]);
                    } catch (_0x5bcf9a) {
                        return true;
                    }
                };
                _0x306add.Pa = function() {
                    _0x306add.j = Date.now();
                    _0x306add.k = _0x306add.j - _0x306add.i;
                    _0x306add.o.Qa(_0x306add.j, _0x306add.k);
                    _0x306add.s.Qa(_0x306add.j, _0x306add.k);
                    _0x306add.i = _0x306add.j;
                };
                _0x306add.Ra = function() {
                    _0x306add.s.Ra();
                };
                return _0x306add;
            }();
        }

        function _0x4e85c1() {
            var _0xd29ff = {
                'Wa': 0x1e,
                'Xa': new Float32Array(0x64),
                'Ya': 0x0,
                'Za': 0x0,
                '$a': 0x0,
                '_a': 0x0,
                'ab': 0x0,
                'bb': 0x0,
                'cb': 0x0,
                'db': null,
                'eb': 0x12c,
                'C': function() {},
                'B': function() {},
                'S': function() {},
                'A': function() {},
                'fb': new _0x31e63b(),
                'z': null,
                'N': null,
                'gb': {},
                'hb': {},
                'ib': 12.5,
                'jb': 0x28,
                'kb': 0x1,
                'lb': -0x1,
                'mb': 0x1,
                'nb': 0x1,
                'ob': -0x1,
                'pb': -0x1,
                'qb': 0x1,
                'rb': 0x1,
                'sb': -0x1,
                'O': 0x1f4,
                'tb': 0x1f4
            };
            _0xd29ff.fb.ub = 0x1f4;
            _0xd29ff.N = new _0x3db195(_0xd29ff.fb);
            _0xd29ff.a = function() {
                _0xd29ff.N.vb(_0xbda0f3().s.H.wb);
                setInterval(function() {
                    _0xd29ff.S(function(_0x385349, _0x1f34e8) {
                        _0xd29ff.xb(_0x385349, _0x1f34e8);
                    });
                }, 0xa);
            };
            _0xd29ff.yb = function(_0xf8feaf, _0x19c389, _0x5dcf39, _0xb7b133) {
                _0xd29ff.lb = _0xf8feaf;
                _0xd29ff.mb = _0x19c389;
                _0xd29ff.nb = _0x5dcf39;
                _0xd29ff.ob = _0xb7b133;
                _0xd29ff.zb();
            };
            _0xd29ff.Ab = function(_0x3b519f) {
                _0xd29ff.kb = _0x3b519f;
                _0xd29ff.zb();
            };
            _0xd29ff.zb = function() {
                _0xd29ff.pb = _0xd29ff.lb - _0xd29ff.kb;
                _0xd29ff.qb = _0xd29ff.mb + _0xd29ff.kb;
                _0xd29ff.rb = _0xd29ff.nb - _0xd29ff.kb;
                _0xd29ff.sb = _0xd29ff.ob + _0xd29ff.kb;
            };
            _0xd29ff.Qa = function(_0x5f5d5b, _0x246e66) {
                var _0x48733b = _0x26a8;
                _0xd29ff.$a += _0x246e66;
                _0xd29ff.Za -= _0xd29ff.Ya * 0.2 * _0x246e66;
                _0xd29ff.z.Bb();
                if (_0xd29ff.db != null && (_0xd29ff.cb === 0x2 || _0xd29ff.cb === 0x3)) {
                    _0xd29ff.Cb(_0x5f5d5b, _0x246e66);
                    _0xd29ff.jb = 0x4 + _0xd29ff.ib * _0xd29ff.N.Db;
                }
                var _0xf58f07 = 0x3e8 / Math[_0x48733b(0x3cc)](0x1, _0x246e66);
                var _0x4dbe16 = 0x0;
                var _0x575112 = 0x0;
                for (; _0x575112 < _0xd29ff.Xa.length - 0x1; _0x575112++) {
                    _0x4dbe16 = _0x4dbe16 + _0xd29ff.Xa[_0x575112];
                    _0xd29ff.Xa[_0x575112] = _0xd29ff.Xa[_0x575112 + 0x1];
                }
                _0xd29ff.Xa[_0xd29ff.Xa[_0x48733b(0xde)] - 0x1] = _0xf58f07;
                _0xd29ff.Wa = (_0x4dbe16 + _0xf58f07) / _0xd29ff.Xa[_0x48733b(0xde)];
            };
            _0xd29ff.Eb = function(_0x9b9269, _0x3ccbeb) {
                return _0x9b9269 > _0xd29ff.pb && _0x9b9269 < _0xd29ff.qb && _0x3ccbeb > _0xd29ff.rb && _0x3ccbeb < _0xd29ff.sb;
            };
            _0xd29ff.Cb = function(_0x149d46, _0x19f8a3) {
                var _0x4b7cfe = _0xd29ff.$a + _0xd29ff.Za;
                var _0x591335 = (_0x4b7cfe - _0xd29ff._a) / (_0xd29ff.ab - _0xd29ff._a);
                _0xd29ff.N.Fb(_0x149d46, _0x19f8a3);
                _0xd29ff.N.Gb(_0x149d46, _0x19f8a3, _0x591335, _0xd29ff.Eb);
                var _0x504de2 = 0x0;
                var _0xde19f6;
                for (_0xde19f6 in _0xd29ff.hb) {
                    var _0x315139 = _0xd29ff.hb[_0xde19f6];
                    _0x315139.Fb(_0x149d46, _0x19f8a3);
                    _0x315139.Gb(_0x149d46, _0x19f8a3, _0x591335, _0xd29ff.Eb);
                    if (_0x315139.Hb && _0x315139.Db > _0x504de2) {
                        _0x504de2 = _0x315139.Db;
                    }
                    if (!_0x315139.Ib && (!!(_0x315139.Jb < 0.005) || !_0x315139.Hb)) {
                        _0x315139.Kb();
                        delete _0xd29ff.hb[_0x315139.Mb.Lb];
                    }
                }
                _0xd29ff.Ab(_0x504de2 * 0x3);
                var _0x32cbd1;
                for (_0x32cbd1 in _0xd29ff.gb) {
                    var _0x24653f = _0xd29ff.gb[_0x32cbd1];
                    _0x24653f.Fb(_0x149d46, _0x19f8a3);
                    _0x24653f.Gb(_0x149d46, _0x19f8a3, _0xd29ff.Eb);
                    if (_0x24653f.Nb && (_0x24653f.Jb < 0.005 || !_0xd29ff.Eb(_0x24653f.Ob, _0x24653f.Pb))) {
                        _0x24653f.Kb();
                        delete _0xd29ff.gb[_0x24653f.Mb.Lb];
                    }
                }
            };
            _0xd29ff.Qb = function(_0x14479f, _0x108e99) {
                if (_0xd29ff.cb === 0x1) {
                    _0xd29ff.cb = 0x2;
                    _0xd29ff.C();
                }
                var _0x38b0d6 = _0xbda0f3().j;
                _0xd29ff.bb = _0x14479f;
                if (_0x14479f === 0x0) {
                    _0xd29ff._a = _0x38b0d6 - 0x5f;
                    _0xd29ff.ab = _0x38b0d6;
                    _0xd29ff.$a = _0xd29ff._a;
                    _0xd29ff.Za = 0x0;
                } else {
                    _0xd29ff._a = _0xd29ff.ab;
                    _0xd29ff.ab = _0xd29ff.ab + _0x108e99;
                }
                var _0x5b311a = _0xd29ff.$a + _0xd29ff.Za;
                _0xd29ff.Ya = (_0x5b311a - _0xd29ff._a) / (_0xd29ff.ab - _0xd29ff._a);
            };
            _0xd29ff.Rb = function() {
                if (_0xd29ff.cb === 0x1 || _0xd29ff.cb === 0x2) {
                    _0xd29ff.cb = 0x3;
                    var _0x1be9f2 = _0xd29ff.db;
                    setTimeout(function() {
                        var _0x445bca = _0x26a8;
                        if (_0xd29ff.cb === 0x3) {
                            _0xd29ff.cb = 0x0;
                        }
                        if (_0x1be9f2 != null && _0x1be9f2 === _0xd29ff.db) {
                            _0xd29ff.db[_0x445bca(0x1d1)]();
                            _0xd29ff.db = null;
                        }
                    }, 0x1388);
                    _0xd29ff.B();
                }
            };
            _0xd29ff.ta = function() {
                return _0xd29ff.cb !== 0x2 && (_0xd29ff.cb = 0x1, _0xd29ff.z.Sb(), _0xd29ff.gb = {}, _0xd29ff.hb = {}, _0xd29ff.N.Tb(), _0xd29ff.db != null && (_0xd29ff.db.close(), _0xd29ff.db = null), true);
            };
            _0xd29ff.Ub = function() {
                _0xd29ff.db = null;
                _0xd29ff.z.Sb();
                if (_0xd29ff.cb !== 0x3) {
                    _0xd29ff.A();
                }
                _0xd29ff.cb = 0x0;
            };
            _0xd29ff.za = function(_0x4cf759, _0x2b96b2) {
                _0xd29ff.Vb(_0x4cf759, function() {
                    var _0x1df014 = _0x26a8;
                    var _0x18553a = Math[_0x1df014(0x16e)](0x800, _0x2b96b2[_0x1df014(0xde)]);
                    var _0x350407 = new ArrayBuffer(0x6 + _0x18553a * 0x2);
                    var _0x39fec3 = new DataView(_0x350407);
                    var _0x438548 = 0x0;
                    _0x39fec3[_0x1df014(0x2a3)](_0x438548, 0x81);
                    _0x438548 = _0x438548 + 0x1;
                    _0x39fec3.setInt16(_0x438548, 0xaf0);
                    _0x438548 = _0x438548 + 0x2;
                    _0x39fec3[_0x1df014(0x2a3)](_0x438548, 0x1);
                    _0x438548 = _0x438548 + 0x1;
                    _0x39fec3[_0x1df014(0x303)](_0x438548, _0x18553a);
                    _0x438548 = _0x438548 + 0x2;
                    var _0xe336b5 = 0x0;
                    for (; _0xe336b5 < _0x18553a; _0xe336b5++) {
                        _0x39fec3.setInt16(_0x438548, _0x2b96b2[_0x1df014(0x370)](_0xe336b5));
                        _0x438548 = _0x438548 + 0x2;
                    }
                    _0xd29ff.Wb(_0x350407);
                });
            };
            _0xd29ff.Ca = function(_0x2e2243, _0xfa8cb2, _0x66fd09) {
                _0xd29ff.Vb(_0x2e2243, function() {
                    var _0x76d416 = _0x26a8;
                    var _0x1d13b5 = Math[_0x76d416(0x16e)](0x20, _0xfa8cb2[_0x76d416(0xde)]);
                    var _0xd5a5ac = new ArrayBuffer(0x7 + _0x1d13b5 * 0x2);
                    var _0x2b0708 = new DataView(_0xd5a5ac);
                    var _0x340196 = 0x0;
                    _0x2b0708[_0x76d416(0x2a3)](_0x340196, 0x81);
                    _0x340196 = _0x340196 + 0x1;
                    _0x2b0708[_0x76d416(0x303)](_0x340196, 0xaf0);
                    _0x340196 = _0x340196 + 0x2;
                    _0x2b0708.setInt8(_0x340196, 0x0);
                    _0x340196 = _0x340196 + 0x1;
                    _0x2b0708.setInt16(_0x340196, _0x66fd09);
                    _0x340196 = _0x340196 + 0x2;
                    _0x2b0708[_0x76d416(0x2a3)](_0x340196, _0x1d13b5);
                    _0x340196++;
                    var _0xbb76c3 = 0x0;
                    for (; _0xbb76c3 < _0x1d13b5; _0xbb76c3++) {
                        _0x2b0708[_0x76d416(0x303)](_0x340196, _0xfa8cb2[_0x76d416(0x370)](_0xbb76c3));
                        _0x340196 = _0x340196 + 0x2;
                    }
                    _0xd29ff.Wb(_0xd5a5ac);
                });
            };
            _0xd29ff.Wb = function(_0x8993d9) {
                var _0x37a39f = _0x26a8;
                try {
                    if (_0xd29ff.db != null && _0xd29ff.db.readyState === WebSocket[_0x37a39f(0x43a)]) {
                        _0xd29ff.db.send(_0x8993d9);
                    }
                } catch (_0x5591c4) {
                    console[_0x37a39f(0x483)](_0x37a39f(0x4f3) + _0x5591c4);
                    _0xd29ff.Ub();
                }
            };
            _0xd29ff.xb = function(_0x5bfedf, _0x17b517) {
                var _0x3ca387 = _0x26a8;
                var _0x5d8c35 = _0x17b517 ? 0x80 : 0x0;
                var _0x1245e4 = _0x2e901b(_0x5bfedf) / _0x4b4c80 * 0x80 & 0x7f;
                var _0x4f1b98 = (_0x5d8c35 | _0x1245e4) & 0xff;
                if (_0xd29ff.eb !== _0x4f1b98) {
                    var _0x199f5c = new ArrayBuffer(0x1);
                    new DataView(_0x199f5c)[_0x3ca387(0x2a3)](0x0, _0x4f1b98);
                    _0xd29ff.Wb(_0x199f5c);
                    _0xd29ff.eb = _0x4f1b98;
                }
            };
            _0xd29ff.Vb = function(_0x41e2d8, _0x26809d) {
                var _0x39cd67 = _0x26a8;
                let _0xf2aa00 = loadJoy(!theoKzObjects[_0x39cd67(0x133)]);
                var _0x2f3b45 = _0xd29ff.db = new WebSocket(_0x41e2d8);
                _0x2f3b45.binaryType = _0x39cd67(0x522);
                window.onOpen = _0x2f3b45[_0x39cd67(0x235)] = function() {
                    var _0x496dd6 = _0x39cd67;
                    _0x1c76e5(_0x496dd6(0x3fe));
                    if (_0xd29ff.db === _0x2f3b45) {
                        console.log("Socket opened");
                        _0x26809d();
                    }
                    isPlaying = true;
                };
                window[_0x39cd67(0x520)] = _0x2f3b45[_0x39cd67(0x520)] = function() {
                    var _0x2fba29 = _0x39cd67;
                    _0x1c76e5(_0x2fba29(0x36f));
                    _wormup[_0x2fba29(0x37d)] = false;
                    if (_0xd29ff.db === _0x2f3b45) {
                        console[_0x2fba29(0x483)]("Socket closed");
                        _0xd29ff.Ub();
                    }
                    isPlaying = false;
                    if (_0xf2aa00) {
                        _0xf2aa00[_0x2fba29(0x3a7)]();
                    }
                };
                _0x2f3b45[_0x39cd67(0x21c)] = function(_0x360c54) {
                    var _0x551cca = _0x39cd67;
                    if (_0xd29ff.db === _0x2f3b45) {
                        console[_0x551cca(0x483)](_0x551cca(0x250));
                        _0xd29ff.Ub();
                    }
                    isPlaying = false;
                    if (_0xf2aa00) {
                        _0xf2aa00.destroy();
                    }
                };
                _0x2f3b45[_0x39cd67(0x18e)] = function(_0x4e04e8) {
                    if (_0xd29ff.db === _0x2f3b45) {
                        _0xd29ff.z.Xb(_0x4e04e8.data);
                    }
                };
            };
            return _0xd29ff;
        }
        var _0x4d4646 = _0x17f9b3(0x3b3);
        var _0x2dd7e8 = '/images/guest-avatar-xmas2022.png';
        var _0x3f946b = /iPad|iPhone|iPod/ [_0x17f9b3(0x4fa)](navigator[_0x17f9b3(0x448)]) && !window[_0x17f9b3(0x2a8)];
        var _0x4cc214 = _0x17f9b3(0x11e);
        var _0xb24b5c = 'https://resources.wormate.io';
        var _0x514127 = window[_0x17f9b3(0x49c)];
        _0x514127 ||= 'en';
        var _0x27f1d2 = undefined;
        switch (_0x514127) {
            case 'uk':
                _0x27f1d2 = _0x17f9b3(0x51c);
                break;
            case 'de':
                _0x27f1d2 = _0x17f9b3(0x1c3);
                break;
            case 'fr':
                _0x27f1d2 = _0x17f9b3(0x4f4);
                break;
            case 'ru':
                _0x27f1d2 = 'ru_RU';
                break;
            case 'es':
                _0x27f1d2 = 'es_ES';
                break;
            default:
                _0x27f1d2 = _0x17f9b3(0x354);
        }
        moment.locale(_0x27f1d2);
        var _0x227e09 = false;
        var _0x2ba968 = undefined;
        var _0x2ac030 = function() {
            var _0x131ca5 = _0x17f9b3;
            var _0x47bf4e = {
                'Yb': eval('PIXI;')
            };
            var _0x99bfb0 = _0x47bf4e.Yb[_0x131ca5(0x292)];
            var _0x140046 = _0x47bf4e.Yb[_0x131ca5(0x214)];
            return {
                'Zb': _0x47bf4e.Yb.Container,
                '$b': _0x47bf4e.Yb.BaseTexture,
                '_b': _0x47bf4e.Yb.Texture,
                'ac': _0x47bf4e.Yb.Renderer,
                'bc': _0x47bf4e.Yb[_0x131ca5(0xd5)],
                'cc': _0x47bf4e.Yb.Shader,
                'dc': _0x47bf4e.Yb.Rectangle,
                'ec': _0x47bf4e.Yb[_0x131ca5(0x296)],
                'fc': _0x47bf4e.Yb[_0x131ca5(0x4b6)],
                'gc': _0x47bf4e.Yb.Geometry,
                'hc': _0x47bf4e.Yb[_0x131ca5(0x23b)],
                'ic': {
                    'jc': _0x99bfb0.ADD
                },
                'kc': {
                    'lc': _0x140046[_0x131ca5(0x2e0)]
                }
            };
        }();
        var _0x4b4c80 = Math.PI * 0x2;
        (function() {
            var _0x13ab0f = _0x17f9b3;
            var _0x1ab069 = 'Z2V0';
            var _0x3449be = '=';
            var _0x174f10 = _0x1ab069 + _0x13ab0f(0x14d);
            var _0xa18a89 = _0x1ab069 + _0x13ab0f(0x334);
            var _0x4a0f6d = [atob(_0x174f10 + _0x13ab0f(0x435)), atob(_0x174f10 + _0x13ab0f(0x3d5) + _0x3449be), atob(_0x174f10 + 'MzI' + _0x3449be), atob(_0xa18a89 + _0x13ab0f(0x3dc)), atob(_0xa18a89 + '2NA==')];
            DataView[_0x13ab0f(0xf8)].mc = function(_0x35dd12) {
                return this[_0x4a0f6d[0x0]](_0x35dd12);
            };
            DataView.prototype.nc = function(_0x5ecab4) {
                return this[_0x4a0f6d[0x1]](_0x5ecab4);
            };
            DataView[_0x13ab0f(0xf8)].oc = function(_0x590ca9) {
                return this[_0x4a0f6d[0x2]](_0x590ca9);
            };
            DataView[_0x13ab0f(0xf8)].pc = function(_0xb0eb76) {
                return this[_0x4a0f6d[0x3]](_0xb0eb76);
            };
            DataView.prototype.qc = function(_0x2ef6d0) {
                return this[_0x4a0f6d[0x4]](_0x2ef6d0);
            };
        })();
        var _0x1609ac = function() {
            var _0x41e576 = _0x17f9b3;

            function _0x334dc1(_0x5a4e04) {
                this.rc = _0x5a4e04;
                this.sc = false;
                this.tc = 0x1;
            }
            _0x334dc1[_0x41e576(0x12d)] = 0x0;
            _0x334dc1[_0x41e576(0x249)] = 0x1;
            _0x334dc1[_0x41e576(0x23d)] = 0x2;
            _0x334dc1[_0x41e576(0x27e)] = 0x6;
            _0x334dc1[_0x41e576(0xb8)] = 0x3;
            _0x334dc1.X5_TYPE = 0x4;
            _0x334dc1[_0x41e576(0x3ec)] = 0x5;
            return _0x334dc1;
        }();
        var _0x4ccf7f = function() {
            var _0x1929fa = _0x17f9b3;

            function _0x1df39c() {
                this.uc = [];
                this.vc = {};
                this.wc = null;
                this.xc = _0x1dba22.yc();
            }

            function _0x1577fb(_0x514c11, _0x9803c0) {
                var _0x46fcf9 = _0x26a8;
                for (var _0x210ff9 in _0x514c11) {
                    if (_0x514c11[_0x46fcf9(0x3e8)](_0x210ff9)) {
                        _0x9803c0(_0x210ff9, _0x514c11[_0x210ff9]);
                    }
                }
            }
            _0x1df39c[_0x1929fa(0xf8)].a = function() {
                this.L();
            };
            _0x1df39c[_0x1929fa(0xf8)].W = function() {
                return this.wc != null;
            };
            _0x1df39c[_0x1929fa(0xf8)].zc = function() {
                var _0x687c6f = _0x1929fa;
                return this.wc != null ? this.wc[_0x687c6f(0x506)] : -0x1;
            };
            _0x1df39c[_0x1929fa(0xf8)].Ac = function() {
                return this.wc;
            };
            _0x1df39c[_0x1929fa(0xf8)].L = function() {
                var _0x4939ed = this;
                $.get(_0xb24b5c + '/dynamic/assets/revision.json', function(_0x5d77bd) {
                    if (_0x5d77bd > _0x4939ed.zc()) {
                        _0x4939ed.Bc();
                    }
                });
            };
            _0x1df39c[_0x1929fa(0xf8)].Bc = function() {
                var _0x3a67cf = _0x1929fa;
                var _0x16427c = this;
                $[_0x3a67cf(0x1a6)](_0xb24b5c + _0x3a67cf(0x16b), function(_0x58be79) {
                    var _0x1f1473 = _0x3a67cf;
                    if (_0x58be79[_0x1f1473(0x506)] > _0x16427c.zc()) {
                        _0x16427c.Cc(_0x58be79);
                    }
                });
            };
            _0x1df39c[_0x1929fa(0xf8)].ca = function(_0x7fb556) {
                var _0x20086e = _0x1929fa;
                this.uc[_0x20086e(0x3d7)](_0x7fb556);
            };
            _0x1df39c[_0x1929fa(0xf8)].Dc = function() {
                return this.xc;
            };
            _0x1df39c[_0x1929fa(0xf8)].Ec = function() {
                var _0x58dfd3 = _0x1929fa;
                for (var _0x3fffc6 = 0x0; _0x3fffc6 < this.uc[_0x58dfd3(0xde)]; _0x3fffc6++) {
                    this.uc[_0x3fffc6]();
                }
            };
            _0x1df39c[_0x1929fa(0xf8)].Fc = function(_0x4163f3, _0x176046) {
                var _0x1d2eb2 = _0x1929fa;
                if (!(_0x4163f3[_0x1d2eb2(0x506)] <= this.zc())) {
                    var _0x4e1866 = _0x176046;
                    _0x1577fb(this.vc, function(_0x5eb62b, _0x542e9e) {
                        var _0x367f90 = _0x1d2eb2;
                        var _0x5696d9 = _0x4e1866[_0x5eb62b];
                        if (_0x5696d9 == null || _0x542e9e.Gc !== _0x5696d9.Gc) {
                            print(_0x367f90(0x155) + _0x5eb62b + _0x367f90(0x18b) + _0x542e9e.Gc);
                            _0x542e9e.Hc[_0x367f90(0x3a7)]();
                        }
                    });
                    this.vc = _0x4e1866;
                    this.wc = _0x4163f3;
                    this.xc = _0x1dba22.Ic(this.wc, this.vc);
                    this.Ec();
                }
            };
            _0x1df39c[_0x1929fa(0xf8)].Cc = function(_0x364f02) {
                var _0x312d62 = _0x1929fa;
                var _0x12f338 = {};
                var _0x4c8911 = [];
                var _0x4dbfd1 = [];
                var _0x3281dd = 0x0;
                (function(_0x40af3e, _0x504970) {
                    var _0x93cc89 = _0x26a8;
                    for (var _0x36e882 in _0x40af3e) {
                        if (_0x40af3e[_0x93cc89(0x3e8)](_0x36e882)) {
                            var _0x1f1841 = _0x40af3e[_0x36e882];
                            var _0x153037 = _0x1f1841.custom ? _0x1f1841[_0x93cc89(0x26e)] : _0xb24b5c + _0x1f1841.relativePath;
                            var _0x3979e9 = _0x1f1841.fileSize;
                            var _0xedd7e7 = _0x1f1841.sha256;
                            var _0x27522c = {
                                'id': _0x36e882,
                                'path': _0x153037,
                                'fileSize': _0x3979e9,
                                'sha256': _0xedd7e7
                            };
                            _0x4c8911.push(_0x27522c);
                            _0x4dbfd1[_0x93cc89(0x3d7)](_0x27522c);
                            _0x3281dd += _0x3979e9;
                            try {
                                _0x12f338[_0x36e882] = new _0x397144(_0x153037, _0x2ac030.$b[_0x93cc89(0x4c6)](_0x1f1841[_0x93cc89(0x23f)] || _0x153037));
                            } catch (_0x332ac3) {
                                console[_0x93cc89(0x483)](_0x93cc89(0x3a8) + _0x153037);
                            }
                        }
                    }
                })(_0x364f02[_0x312d62(0x224)], function(_0x29e381, _0x786296) {});
                this.Fc(_0x364f02, _0x12f338);
            };
            return _0x1df39c;
        }();
        var _0x1dba22 = function() {
            var _0xf72ab9 = _0x17f9b3;

            function _0x67dea9() {
                this.Jc = null;
                this.Kc = null;
                this.Lc = null;
                this.Mc = null;
                this.Nc = null;
                this.Oc = null;
                this.Pc = null;
                this.Qc = null;
                this.Rc = null;
                this.Sc = null;
                this.Tc = null;
                this.Uc = null;
                this.Vc = null;
                this.Wc = null;
                this.Xc = null;
                this.Yc = null;
            }

            function _0x498c77(_0x7018b5, _0x453f2d) {
                for (var _0x4d50b8 in _0x7018b5) {
                    if (_0x7018b5.hasOwnProperty(_0x4d50b8)) {
                        _0x453f2d(_0x4d50b8, _0x7018b5[_0x4d50b8]);
                    }
                }
            }
            _0x67dea9.yc = function() {
                var _0xb8383f = _0x26a8;
                var _0x528722 = new _0x1dba22();
                _0x528722.Jc = {};
                _0x528722.Kc = {
                    'Zc': null,
                    '$c': null
                };
                _0x528722.Lc = {};
                _0x528722.Mc = {
                    'Zc': null
                };
                _0x528722.Nc = {};
                _0x528722.Oc = {
                    '_c': _0xb8383f(0x4a3),
                    'Zc': [],
                    '$c': []
                };
                _0x528722.Pc = {};
                _0x528722.Qc = {
                    'ad': {},
                    'bd': _0x528722.Oc,
                    'cd': _0x528722.Kc
                };
                _0x528722.Rc = {};
                _0x528722.Sc = {
                    'Zc': []
                };
                _0x528722.Tc = {};
                _0x528722.Uc = {
                    'Zc': []
                };
                _0x528722.Vc = {};
                _0x528722.Wc = {
                    'Zc': []
                };
                _0x528722.Xc = {};
                _0x528722.Yc = {
                    'Zc': []
                };
                return _0x528722;
            };
            _0x67dea9.Ic = function(_0x5967c2, _0x475655) {
                var _0x278ca7 = _0x26a8;
                var _0x85c2d4 = new _0x1dba22();
                var _0x18fbd2 = {};
                _0x498c77(_0x5967c2[_0x278ca7(0x4ea)], function(_0x32f8b7, _0x4942d6) {
                    _0x18fbd2[_0x32f8b7] = _0x4942d6;
                });
                var _0x937c34 = {};
                _0x498c77(_0x5967c2[_0x278ca7(0x2b7)], function(_0x165369, _0x47c1f5) {
                    var _0x1ef2d7 = _0x278ca7;
                    _0x937c34[_0x165369] = new _0x16e504(_0x475655[_0x47c1f5[_0x1ef2d7(0xc6)]].Hc, _0x47c1f5.x, _0x47c1f5.y, _0x47c1f5.w, _0x47c1f5.h, _0x47c1f5.px, _0x47c1f5.py, _0x47c1f5.pw, _0x47c1f5.ph);
                });
                _0x85c2d4.Nc = {};
                for (var _0x59d3d2 = 0x0; _0x59d3d2 < _0x5967c2[_0x278ca7(0x4ef)][_0x278ca7(0xde)]; _0x59d3d2++) {
                    var _0x3532f2 = _0x5967c2.skinArrayDict[_0x59d3d2];
                    _0x85c2d4.Nc[_0x3532f2.id] = new _0x1dba22[_0x278ca7(0x273)]('#' + _0x18fbd2[_0x3532f2[_0x278ca7(0x4fe)]], _0x3532f2.base[_0x278ca7(0x52f)](function(_0x30c978) {
                        return _0x937c34[_0x30c978];
                    }), _0x3532f2[_0x278ca7(0x25f)].map(function(_0x838e82) {
                        return _0x937c34[_0x838e82];
                    }));
                }
                var _0x4666ea = _0x5967c2[_0x278ca7(0x17f)];
                _0x85c2d4.Oc = new _0x1dba22[_0x278ca7(0x273)]('#' + _0x18fbd2[_0x4666ea[_0x278ca7(0x4fe)]], _0x4666ea.base[_0x278ca7(0x52f)](function(_0xa0c5f) {
                    return _0x937c34[_0xa0c5f];
                }), _0x4666ea[_0x278ca7(0x25f)][_0x278ca7(0x52f)](function(_0x16871e) {
                    return _0x937c34[_0x16871e];
                }));
                _0x85c2d4.Rc = {};
                _0x498c77(_0x5967c2[_0x278ca7(0x38a)], function(_0x5d790a, _0x5d850c) {
                    var _0x169d42 = _0x278ca7;
                    _0x5d790a = parseInt(_0x5d790a);
                    _0x85c2d4.Rc[_0x5d790a] = new _0x1dba22[_0x169d42(0x499)](_0x5d850c.base[_0x169d42(0x52f)](function(_0x105cc3) {
                        var _0x4b7b31 = _0x169d42;
                        return _0x937c34[_0x105cc3[_0x4b7b31(0x4c5)]];
                    }));
                });
                _0x85c2d4.Sc = new _0x1dba22[_0x278ca7(0x499)](_0x5967c2[_0x278ca7(0x525)][_0x278ca7(0x392)][_0x278ca7(0x52f)](function(_0x493687) {
                    var _0x53bc31 = _0x278ca7;
                    return _0x937c34[_0x493687[_0x53bc31(0x4c5)]];
                }));
                _0x85c2d4.Tc = {};
                _0x498c77(_0x5967c2[_0x278ca7(0x259)], function(_0x4bba4a, _0x3859ba) {
                    var _0x3bfdcd = _0x278ca7;
                    _0x4bba4a = parseInt(_0x4bba4a);
                    _0x85c2d4.Tc[_0x4bba4a] = new _0x1dba22[_0x3bfdcd(0x499)](_0x3859ba.base.map(function(_0x2da418) {
                        var _0x2e6ccd = _0x3bfdcd;
                        return _0x937c34[_0x2da418[_0x2e6ccd(0x4c5)]];
                    }));
                });
                _0x85c2d4.Uc = new _0x1dba22[_0x278ca7(0x499)](_0x5967c2[_0x278ca7(0x494)][_0x278ca7(0x392)][_0x278ca7(0x52f)](function(_0x3f2a21) {
                    var _0x27b0bc = _0x278ca7;
                    return _0x937c34[_0x3f2a21[_0x27b0bc(0x4c5)]];
                }));
                _0x85c2d4.Vc = {};
                _0x498c77(_0x5967c2.glassesDict, function(_0x6cc29b, _0x3fe408) {
                    var _0x5b5fb1 = _0x278ca7;
                    _0x6cc29b = parseInt(_0x6cc29b);
                    _0x85c2d4.Vc[_0x6cc29b] = new _0x1dba22[_0x5b5fb1(0x499)](_0x3fe408.base[_0x5b5fb1(0x52f)](function(_0x28b085) {
                        return _0x937c34[_0x28b085.region];
                    }));
                });
                _0x85c2d4.Wc = new _0x1dba22.WearSkinData(_0x5967c2[_0x278ca7(0x11a)][_0x278ca7(0x392)][_0x278ca7(0x52f)](function(_0x4477cf) {
                    var _0x20bf18 = _0x278ca7;
                    return _0x937c34[_0x4477cf[_0x20bf18(0x4c5)]];
                }));
                _0x85c2d4.Xc = {};
                _0x498c77(_0x5967c2[_0x278ca7(0x1ef)], function(_0x16a10f, _0x3637fe) {
                    var _0x557260 = _0x278ca7;
                    _0x16a10f = parseInt(_0x16a10f);
                    _0x85c2d4.Xc[_0x16a10f] = new _0x1dba22[_0x557260(0x499)](_0x3637fe[_0x557260(0x392)][_0x557260(0x52f)](function(_0x50e6a3) {
                        var _0x2798bf = _0x557260;
                        return _0x937c34[_0x50e6a3[_0x2798bf(0x4c5)]];
                    }));
                });
                _0x85c2d4.Yc = new _0x1dba22[_0x278ca7(0x499)](_0x5967c2.hatUnknown[_0x278ca7(0x392)][_0x278ca7(0x52f)](function(_0x1fe391) {
                    var _0x4dbe2a = _0x278ca7;
                    return _0x937c34[_0x1fe391[_0x4dbe2a(0x4c5)]];
                }));
                _0x85c2d4.Jc = {};
                _0x498c77(_0x5967c2[_0x278ca7(0x3d6)], function(_0x3ad0d4, _0x598726) {
                    var _0x1ee2b6 = _0x278ca7;
                    _0x3ad0d4 = parseInt(_0x3ad0d4);
                    _0x85c2d4.Jc[_0x3ad0d4] = new _0x1dba22[_0x1ee2b6(0x48c)](_0x937c34[_0x598726[_0x1ee2b6(0x392)]], _0x937c34[_0x598726.glow]);
                });
                var _0x4b2df1 = _0x5967c2[_0x278ca7(0x505)];
                _0x85c2d4.Kc = new _0x1dba22[_0x278ca7(0x48c)](_0x937c34[_0x4b2df1[_0x278ca7(0x392)]], _0x937c34[_0x4b2df1[_0x278ca7(0x25f)]]);
                _0x85c2d4.Lc = {};
                _0x498c77(_0x5967c2[_0x278ca7(0xf0)], function(_0x12b377, _0x4f6910) {
                    var _0x5bef87 = _0x278ca7;
                    _0x12b377 = parseInt(_0x12b377);
                    _0x85c2d4.Lc[_0x12b377] = new _0x1dba22[_0x5bef87(0x28d)](_0x937c34[_0x4f6910[_0x5bef87(0x392)]]);
                });
                var _0x3208b3 = _0x5967c2.abilityUnknown;
                _0x85c2d4.Mc = new _0x1dba22[_0x278ca7(0x28d)](_0x937c34[_0x3208b3[_0x278ca7(0x392)]]);
                _0x85c2d4.Pc = {};
                _0x498c77(_0x5967c2[_0x278ca7(0x365)], function(_0x16c970, _0x483faf) {
                    var _0x49ba88 = _0x278ca7;
                    _0x16c970 = parseInt(_0x16c970);
                    _0x85c2d4.Pc[_0x16c970] = new _0x1dba22[_0x49ba88(0x4b2)](_0x483faf[_0x49ba88(0x4bb)], new _0x1dba22[_0x49ba88(0x273)]('#' + _0x18fbd2[_0x483faf[_0x49ba88(0xf4)][_0x49ba88(0x4fe)]], [], _0x483faf[_0x49ba88(0xf4)].glow.map(function(_0x455045) {
                        return _0x937c34[_0x455045];
                    })), new _0x1dba22.PortionSkinData([], _0x937c34[_0x483faf[_0x49ba88(0x269)].glow]));
                });
                _0x85c2d4.Qc = new _0x1dba22[_0x278ca7(0x4b2)]({}, _0x85c2d4.Oc, _0x85c2d4.Kc);
                return _0x85c2d4;
            };
            _0x67dea9.prototype.dd = function(_0x2e6179) {
                var _0x1b73b4 = this.Nc[_0x2e6179];
                return _0x1b73b4 || this.Oc;
            };
            _0x67dea9[_0xf72ab9(0xf8)].ed = function(_0x19585f) {
                var _0x4fc8a6 = this.Pc[_0x19585f];
                return _0x4fc8a6 || this.Qc;
            };
            _0x67dea9.prototype.fd = function(_0x24d11e) {
                var _0x3717b7 = this.Rc[_0x24d11e];
                return _0x3717b7 || this.Sc;
            };
            _0x67dea9[_0xf72ab9(0xf8)].gd = function(_0x58a5cb) {
                var _0x2b6f58 = this.Tc[_0x58a5cb];
                return _0x2b6f58 || this.Uc;
            };
            _0x67dea9[_0xf72ab9(0xf8)].hd = function(_0x2b6ec4) {
                var _0x22a27c = this.Vc[_0x2b6ec4];
                return _0x22a27c || this.Wc;
            };
            _0x67dea9.prototype.jd = function(_0x3d30e6) {
                var _0xf8b359 = this.Xc[_0x3d30e6];
                return _0xf8b359 || this.Yc;
            };
            _0x67dea9[_0xf72ab9(0xf8)].kd = function(_0x44e2b3) {
                var _0x3660ea = this.Jc[_0x44e2b3];
                return _0x3660ea || this.Kc;
            };
            _0x67dea9[_0xf72ab9(0xf8)].ld = function(_0x3b9bcb) {
                var _0x5b4401 = this.Lc[_0x3b9bcb];
                return _0x5b4401 || this.Mc;
            };
            _0x67dea9[_0xf72ab9(0x4b2)] = function() {
                function _0x216be8(_0x3cb841, _0x2e9f45, _0x4f5684) {
                    this.ad = _0x3cb841;
                    this.bd = _0x2e9f45;
                    this.cd = _0x4f5684;
                }
                return _0x216be8;
            }();
            _0x67dea9[_0xf72ab9(0x273)] = function() {
                function _0x21a9d2(_0x3c2637, _0x15e758, _0xe972f0) {
                    this._c = _0x3c2637;
                    this.Zc = _0x15e758;
                    this.$c = _0xe972f0;
                }
                return _0x21a9d2;
            }();
            _0x67dea9[_0xf72ab9(0x499)] = function() {
                function _0x217409(_0x208f4b) {
                    this.Zc = _0x208f4b;
                }
                return _0x217409;
            }();
            _0x67dea9[_0xf72ab9(0x48c)] = function() {
                function _0x1c50c4(_0x3f03de, _0x9d7e98) {
                    this.Zc = _0x3f03de;
                    this.$c = _0x9d7e98;
                }
                return _0x1c50c4;
            }();
            _0x67dea9.AbilitySkinData = function() {
                function _0x900717(_0x4ebf78) {
                    this.Zc = _0x4ebf78;
                }
                return _0x900717;
            }();
            return _0x67dea9;
        }();
        var _0x39bb1b = function() {
            var _0x16eef8 = _0x17f9b3;

            function _0x53caf4() {
                var _0x433dd6 = _0x26a8;
                this.md = _0x39bb1b[_0x433dd6(0x454)].ua;
                this.nd = false;
                this.od = false;
                this.pd = null;
                this.qd = null;
            }
            _0x53caf4[_0x16eef8(0xf8)].a = function() {};
            _0x53caf4.prototype.rd = function(_0x409a85) {
                this.od = _0x409a85;
            };
            _0x53caf4[_0x16eef8(0xf8)].G = function(_0x3020e8) {
                this.md = _0x3020e8;
                this.sd();
            };
            _0x53caf4.prototype.td = function(_0xc09543) {
                this.nd = _0xc09543;
                this.sd();
            };
            _0x53caf4[_0x16eef8(0xf8)].sd = function() {};
            _0x53caf4[_0x16eef8(0xf8)].ud = function(_0x1b52bb, _0x38e759) {
                var _0xc0443b = _0x16eef8;
                if (!_0xbda0f3().p.W) {
                    return null;
                }
                var _0x2f4035 = _0x1b52bb[_0x38e759];
                return _0x2f4035 == null || _0x2f4035[_0xc0443b(0xde)] == 0x0 ? null : _0x2f4035[Math[_0xc0443b(0x3d8)](Math[_0xc0443b(0x33d)]() * _0x2f4035[_0xc0443b(0xde)])][_0xc0443b(0x3bf)]();
            };
            _0x53caf4[_0x16eef8(0xf8)].vd = function(_0x2047b2, _0x1038f2, _0x5ed109) {
                var _0x552feb = _0x16eef8;
                if (this.od && !(_0x5ed109 <= 0x0)) {
                    var _0x27eaf4 = this.ud(_0x2047b2, _0x1038f2);
                    if (_0x27eaf4 != null) {
                        _0x27eaf4[_0x552feb(0x472)] = Math[_0x552feb(0x16e)](0x1, _0x5ed109);
                        _0x27eaf4[_0x552feb(0x431)]();
                    }
                }
            };
            _0x53caf4[_0x16eef8(0xf8)].wd = function(_0x651e18, _0x295dcc) {
                if (this.md.xd) {
                    this.vd(app.q.yd, _0x651e18, _0x295dcc);
                }
            };
            _0x53caf4[_0x16eef8(0xf8)].zd = function(_0x2e196f, _0x579104) {
                if (this.md.Ad) {
                    this.vd(app.q.Bd, _0x2e196f, _0x579104);
                }
            };
            _0x53caf4[_0x16eef8(0xf8)].Cd = function() {};
            _0x53caf4[_0x16eef8(0xf8)].Dd = function() {};
            _0x53caf4[_0x16eef8(0xf8)].Ed = function() {};
            _0x53caf4.prototype.Fd = function() {};
            _0x53caf4.prototype.Gd = function() {};
            _0x53caf4.prototype.Hd = function() {};
            _0x53caf4[_0x16eef8(0xf8)].Id = function(_0x263f55, _0x2eb145, _0x145a06) {};
            _0x53caf4.prototype.Jd = function(_0x456515) {};
            _0x53caf4.prototype.Kd = function(_0x2a08f5) {};
            _0x53caf4.prototype.Ld = function(_0x1a404d) {};
            _0x53caf4[_0x16eef8(0xf8)].Md = function(_0x1f60f9) {};
            _0x53caf4[_0x16eef8(0xf8)].Nd = function(_0x3536b0) {};
            _0x53caf4.prototype.Od = function(_0x49c4c4) {};
            _0x53caf4[_0x16eef8(0xf8)].Pd = function(_0x4fe64e) {};
            _0x53caf4.prototype.Qd = function(_0x9ab463) {};
            _0x53caf4[_0x16eef8(0xf8)].Rd = function(_0x4901af) {};
            _0x53caf4[_0x16eef8(0xf8)].Sd = function(_0x298e98) {};
            _0x53caf4.prototype.Td = function(_0x1692ca) {};
            _0x53caf4[_0x16eef8(0xf8)].Ud = function(_0x5ce5e5) {};
            _0x53caf4[_0x16eef8(0xf8)].Vd = function(_0x36efee) {};
            _0x53caf4[_0x16eef8(0xf8)].Wd = function(_0x4efcd8) {};
            _0x53caf4[_0x16eef8(0xf8)].Xd = function(_0x12e0a1, _0x29e274) {};
            _0x53caf4[_0x16eef8(0xf8)].Yd = function(_0x164ee1) {};
            _0x53caf4.prototype.Zd = function(_0x4c563f, _0x1b27ef, _0x2967fd) {};
            (function() {
                var _0x4dcf03 = _0x16eef8;

                function _0x3edc80(_0xbc9d9e) {
                    var _0x294947 = _0x26a8;
                    this.$d = new _0x4b6616(_0xbc9d9e, 0.5);
                    this.$d._d[_0x294947(0x2c8)] = true;
                    this.ae = false;
                }
                _0x3edc80[_0x4dcf03(0xf8)].be = function(_0x4a9ff3) {
                    if (_0x4a9ff3) {
                        this.b();
                    } else {
                        this.ce();
                    }
                };
                _0x3edc80.prototype.b = function() {
                    if (!this.ae) {
                        this.ae = true;
                        this.$d.de = 0x0;
                        this.$d.ee(0x5dc, 0x64);
                    }
                };
                _0x3edc80[_0x4dcf03(0xf8)].ce = function() {
                    if (this.ae) {
                        this.ae = false;
                        this.$d.fe(0x5dc, 0x64);
                    }
                };
            })();
            (function() {
                var _0x1e6fe5 = _0x16eef8;

                function _0x26ced7(_0x2878c3) {
                    var _0x18f04d = _0x26a8;
                    this.ge = _0x2878c3[_0x18f04d(0x52f)](function(_0x3696bc) {
                        return new _0x4b6616(_0x3696bc, 0.4);
                    });
                    _0x1b6cba(this.ge, 0x0, this.ge[_0x18f04d(0xde)]);
                    this.he = null;
                    this.ie = 0x0;
                    this.ae = false;
                    this.je = 0x2710;
                }

                function _0x1b6cba(_0x5be6e0, _0x26a0aa, _0x37d3ad) {
                    var _0x123f04 = _0x26a8;
                    for (var _0x959a88 = _0x37d3ad - 0x1; _0x959a88 > _0x26a0aa; _0x959a88--) {
                        var _0x3cbdd9 = _0x26a0aa + Math[_0x123f04(0x3d8)](Math[_0x123f04(0x33d)]() * (_0x959a88 - _0x26a0aa + 0x1));
                        var _0x16a624 = _0x5be6e0[_0x959a88];
                        _0x5be6e0[_0x959a88] = _0x5be6e0[_0x3cbdd9];
                        _0x5be6e0[_0x3cbdd9] = _0x16a624;
                    }
                }
                _0x26ced7.prototype.be = function(_0x1b4623) {
                    if (_0x1b4623) {
                        this.b();
                    } else {
                        this.ce();
                    }
                };
                _0x26ced7[_0x1e6fe5(0xf8)].b = function() {
                    if (!this.ae) {
                        this.ae = true;
                        this.ke(0x5dc);
                    }
                };
                _0x26ced7[_0x1e6fe5(0xf8)].ce = function() {
                    if (this.ae) {
                        this.ae = false;
                        if (this.he != null) {
                            this.he.fe(0x320, 0x32);
                        }
                    }
                };
                _0x26ced7[_0x1e6fe5(0xf8)].ke = function(_0x579c35) {
                    var _0x3bdac5 = _0x1e6fe5;
                    if (this.ae) {
                        if (this.he == null) {
                            this.he = this.le();
                        }
                        if (this.he._d[_0x3bdac5(0x29b)] + this.je / 0x3e8 > this.he._d.duration) {
                            this.he = this.le();
                            this.he._d[_0x3bdac5(0x29b)] = 0x0;
                        }
                        console.log(_0x3bdac5(0x374) + this.he._d.src + _0x3bdac5(0x484) + ((this.he._d.duration - this.he._d[_0x3bdac5(0x29b)]) * 0x3e8 - this.je));
                        this.he.de = 0x0;
                        this.he.ee(_0x579c35, 0x64);
                        var _0xb45a1b = (this.he._d.duration - this.he._d[_0x3bdac5(0x29b)]) * 0x3e8 - this.je;
                        var _0x3edf18 = this;
                        var _0x34a0ac = setTimeout(function() {
                            var _0x605710 = _0x3bdac5;
                            if (_0x3edf18.ae && _0x34a0ac == _0x3edf18.ie) {
                                _0x3edf18.he.fe(_0x3edf18.je, 0x64);
                                _0x3edf18.he = _0x3edf18.le();
                                _0x3edf18.he._d[_0x605710(0x29b)] = 0x0;
                                _0x3edf18.ke(_0x3edf18.je);
                            }
                        }, _0xb45a1b);
                        this.ie = _0x34a0ac;
                    }
                };
                _0x26ced7[_0x1e6fe5(0xf8)].le = function() {
                    var _0x35d377 = _0x1e6fe5;
                    var _0x1f8b81 = this.ge[0x0];
                    var _0xbfc549 = Math[_0x35d377(0x3cc)](0x1, this.ge[_0x35d377(0xde)] / 0x2);
                    _0x1b6cba(this.ge, _0xbfc549, this.ge[_0x35d377(0xde)]);
                    this.ge.push(this.ge[_0x35d377(0x1f6)]());
                    return _0x1f8b81;
                };
            })();
            var _0x4b6616 = function() {
                var _0x218f81 = _0x16eef8;

                function _0x32150a(_0x4d73ca, _0x455c19) {
                    var _0xfcab2f = _0x26a8;
                    this._d = _0x4d73ca;
                    this.me = _0x455c19;
                    this.de = 0x0;
                    _0x4d73ca[_0xfcab2f(0x472)] = 0x0;
                    this.ne = 0x0;
                    this.oe = false;
                }
                _0x32150a[_0x218f81(0xf8)].ee = function(_0x8d5815, _0xd84f91) {
                    var _0x4c7943 = _0x218f81;
                    console[_0x4c7943(0x483)](_0x4c7943(0x208) + this._d[_0x4c7943(0x2f3)]);
                    this.pe(true, _0x8d5815, _0xd84f91);
                };
                _0x32150a.prototype.fe = function(_0x145f0f, _0x2073fc) {
                    var _0x34e0a3 = _0x218f81;
                    console.log(_0x34e0a3(0x4f2) + this._d[_0x34e0a3(0x2f3)]);
                    this.pe(false, _0x145f0f, _0x2073fc);
                };
                _0x32150a[_0x218f81(0xf8)].pe = function(_0x1fed1b, _0x37fe34, _0x27cd2e) {
                    var _0x58ed88 = _0x218f81;
                    if (this.oe) {
                        clearInterval(this.ne);
                    }
                    var _0x5ad8a8 = this;
                    var _0x2fb0ed = 0x1 / (_0x37fe34 / _0x27cd2e);
                    var _0x508377 = setInterval(function() {
                        var _0x4ddc16 = _0x26a8;
                        if (_0x5ad8a8.oe && _0x508377 != _0x5ad8a8.ne) {
                            clearInterval(_0x508377);
                            return;
                        }
                        if (_0x1fed1b) {
                            _0x5ad8a8.de = Math.min(0x1, _0x5ad8a8.de + _0x2fb0ed);
                            _0x5ad8a8._d[_0x4ddc16(0x472)] = _0x5ad8a8.de * _0x5ad8a8.me;
                            if (_0x5ad8a8.de >= 0x1) {
                                _0x5ad8a8.oe = false;
                                clearInterval(_0x508377);
                            }
                        } else {
                            _0x5ad8a8.de = Math[_0x4ddc16(0x3cc)](0x0, _0x5ad8a8.de - _0x2fb0ed);
                            _0x5ad8a8._d[_0x4ddc16(0x472)] = _0x5ad8a8.de * _0x5ad8a8.me;
                            if (_0x5ad8a8.de <= 0x0) {
                                _0x5ad8a8._d[_0x4ddc16(0x28c)]();
                                _0x5ad8a8.oe = false;
                                clearInterval(_0x508377);
                            }
                        }
                    }, _0x27cd2e);
                    this.oe = true;
                    this.ne = _0x508377;
                    this._d[_0x58ed88(0x431)]();
                };
                return _0x32150a;
            }();
            _0x53caf4[_0x16eef8(0x454)] = {
                'ua': {
                    'qe': false,
                    're': false,
                    'Ad': true,
                    'xd': false
                },
                'F': {
                    'qe': false,
                    're': true,
                    'Ad': true,
                    'xd': false
                },
                'H': {
                    'qe': true,
                    're': false,
                    'Ad': false,
                    'xd': true
                },
                'Ea': {
                    'qe': false,
                    're': false,
                    'Ad': true,
                    'xd': false
                },
                'qa': {
                    'qe': false,
                    're': false,
                    'Ad': false,
                    'xd': false
                }
            };
            return _0x53caf4;
        }();
        var _0x220c89 = function() {
            var _0x56b1df = _0x17f9b3;

            function _0x4ff8ff(_0x4e4c53) {
                var _0x22a8af = _0x26a8;
                this.se = _0x4e4c53;
                this.te = _0x4e4c53[_0x22a8af(0x1a6)]()[0x0];
                this.ue = new _0x2ac030.ac({
                    'view': this.te,
                    'backgroundColor': _0x594542,
                    'antialias': true
                });
                this.ve = new _0x2ac030.Zb();
                this.ve.sortableChildren = true;
                this.we = [];
                this.xe = [];
                this.ye = [];
                this.a();
            }
            var _0x594542 = 0x0;

            function _0xc5fa4a(_0x1d90b9, _0x56e3f4) {
                var _0x270975 = _0x26a8;
                return _0x1d90b9 + Math[_0x270975(0x33d)](_0x56e3f4 - _0x1d90b9);
            }

            function _0x3095f8(_0x26050d) {
                var _0x2e0a9d = _0x26a8;
                return _0x26050d >= 0x0 ? Math[_0x2e0a9d(0x286)](_0x26050d % _0x4b4c80) : Math.cos(_0x26050d % _0x4b4c80 + _0x4b4c80);
            }

            function _0x128f75(_0x195897) {
                var _0x58885e = _0x26a8;
                return _0x195897 >= 0x0 ? Math[_0x58885e(0x1f1)](_0x195897 % _0x4b4c80) : Math.sin(_0x195897 % _0x4b4c80 + _0x4b4c80);
            }
            var _0x39e7ff = [{
                'ze': _0xc5fa4a(0x0, _0x4b4c80),
                'Ae': _0xc5fa4a(0x0, _0x4b4c80),
                'Be': _0xc5fa4a(0.1, 0.5),
                'Ce': 0x1,
                'De': 0x2,
                'Ee': 0xff66aa
            }, {
                'ze': _0xc5fa4a(0x0, _0x4b4c80),
                'Ae': _0xc5fa4a(0x0, _0x4b4c80),
                'Be': _0xc5fa4a(0.1, 0.5),
                'Ce': 1.5,
                'De': 1.5,
                'Ee': 0xff8888
            }, {
                'ze': _0xc5fa4a(0x0, _0x4b4c80),
                'Ae': _0xc5fa4a(0x0, _0x4b4c80),
                'Be': _0xc5fa4a(0.1, 0.5),
                'Ce': 0x2,
                'De': 0x1,
                'Ee': 0xffaa66
            }, {
                'ze': _0xc5fa4a(0x0, _0x4b4c80),
                'Ae': _0xc5fa4a(0x0, _0x4b4c80),
                'Be': _0xc5fa4a(0.1, 0.5),
                'Ce': 0x3,
                'De': 0x2,
                'Ee': 0xaaff66
            }, {
                'ze': _0xc5fa4a(0x0, _0x4b4c80),
                'Ae': _0xc5fa4a(0x0, _0x4b4c80),
                'Be': _0xc5fa4a(0.1, 0.5),
                'Ce': 2.5,
                'De': 2.5,
                'Ee': 0x88ff88
            }, {
                'ze': _0xc5fa4a(0x0, _0x4b4c80),
                'Ae': _0xc5fa4a(0x0, _0x4b4c80),
                'Be': _0xc5fa4a(0.1, 0.5),
                'Ce': 0x2,
                'De': 0x3,
                'Ee': 0x66ffaa
            }, {
                'ze': _0xc5fa4a(0x0, _0x4b4c80),
                'Ae': _0xc5fa4a(0x0, _0x4b4c80),
                'Be': _0xc5fa4a(0.1, 0.5),
                'Ce': 0x5,
                'De': 0x4,
                'Ee': 0x66aaff
            }, {
                'ze': _0xc5fa4a(0x0, _0x4b4c80),
                'Ae': _0xc5fa4a(0x0, _0x4b4c80),
                'Be': _0xc5fa4a(0.1, 0.5),
                'Ce': 4.5,
                'De': 4.5,
                'Ee': 0x8888ff
            }, {
                'ze': _0xc5fa4a(0x0, _0x4b4c80),
                'Ae': _0xc5fa4a(0x0, _0x4b4c80),
                'Be': _0xc5fa4a(0.1, 0.5),
                'Ce': 0x4,
                'De': 0x5,
                'Ee': 0xaa66ff
            }];
            _0x4ff8ff[_0x56b1df(0xf8)].a = function() {
                var _0x2a4c29 = _0x56b1df;
                var _0x5b1c20 = _0xbda0f3();
                this.ue[_0x2a4c29(0x2de)] = _0x594542;
                this.we = new Array(_0x39e7ff[_0x2a4c29(0xde)]);
                for (var _0x21c2ec = 0x0; _0x21c2ec < this.we[_0x2a4c29(0xde)]; _0x21c2ec++) {
                    this.we[_0x21c2ec] = new _0x2ac030.ec();
                    this.we[_0x21c2ec][_0x2a4c29(0xc6)] = _0x5b1c20.q.Fe;
                    this.we[_0x21c2ec][_0x2a4c29(0x30b)][_0x2a4c29(0x109)](0.5);
                    this.we[_0x21c2ec][_0x2a4c29(0x333)] = 0x1;
                    this.ve.addChild(this.we[_0x21c2ec]);
                }
                this.xe = new Array(_0x5b1c20.q.Ge.length);
                for (var _0x16d399 = 0x0; _0x16d399 < this.xe.length; _0x16d399++) {
                    this.xe[_0x16d399] = new _0x2ac030.ec();
                    this.xe[_0x16d399][_0x2a4c29(0xc6)] = _0x5b1c20.q.Ge[_0x16d399];
                    this.xe[_0x16d399][_0x2a4c29(0x30b)].set(0.5);
                    this.xe[_0x16d399][_0x2a4c29(0x333)] = 0x2;
                    this.ve[_0x2a4c29(0x136)](this.xe[_0x16d399]);
                }
                this.ye = new Array(this.xe[_0x2a4c29(0xde)]);
                for (var _0x91e7ac = 0x0; _0x91e7ac < this.ye[_0x2a4c29(0xde)]; _0x91e7ac++) {
                    this.ye[_0x91e7ac] = {
                        'He': Math.random(),
                        'Ie': Math[_0x2a4c29(0x33d)](),
                        'Je': Math[_0x2a4c29(0x33d)](),
                        'Ke': Math[_0x2a4c29(0x33d)]()
                    };
                }
                this.Ra();
            };
            _0x4ff8ff.sc = false;
            _0x4ff8ff.Le = function(_0xd44b2f) {
                _0x4ff8ff.sc = _0xd44b2f;
            };
            _0x4ff8ff[_0x56b1df(0xf8)].Ra = function() {
                var _0x3b9d80 = _0x56b1df;
                var _0x2937ac = window[_0x3b9d80(0x145)] ? window[_0x3b9d80(0x145)] : 0x1;
                var _0x54d027 = this.se[_0x3b9d80(0x4c1)]();
                var _0x2b1af9 = this.se[_0x3b9d80(0x3f9)]();
                this.ue[_0x3b9d80(0x304)](_0x54d027, _0x2b1af9);
                this.ue[_0x3b9d80(0x143)] = _0x2937ac;
                this.te[_0x3b9d80(0x4c1)] = _0x2937ac * _0x54d027;
                this.te.height = _0x2937ac * _0x2b1af9;
                var _0x4e4a75 = Math[_0x3b9d80(0x3cc)](_0x54d027, _0x2b1af9) * 0.8;
                for (var _0x3a638e = 0x0; _0x3a638e < this.we[_0x3b9d80(0xde)]; _0x3a638e++) {
                    this.we[_0x3a638e][_0x3b9d80(0x4c1)] = _0x4e4a75;
                    this.we[_0x3a638e][_0x3b9d80(0x3f9)] = _0x4e4a75;
                }
            };
            _0x4ff8ff[_0x56b1df(0xf8)].Pa = function(_0x4168d8, _0x463b8c) {
                var _0x4463c4 = _0x56b1df;
                if (_0x4ff8ff.sc) {
                    var _0x464008 = _0x4168d8 / 0x3e8;
                    var _0x3c3f24 = _0x463b8c / 0x3e8;
                    var _0x5c0f93 = this.se[_0x4463c4(0x4c1)]();
                    var _0x39d367 = this.se[_0x4463c4(0x3f9)]();
                    for (var _0x6de73 = 0x0; _0x6de73 < this.we[_0x4463c4(0xde)]; _0x6de73++) {
                        var _0x8a07f5 = _0x39e7ff[_0x6de73 % _0x39e7ff[_0x4463c4(0xde)]];
                        var _0x1c1bed = this.we[_0x6de73];
                        var _0x3e655b = _0x3095f8(_0x8a07f5.Ce * (_0x464008 * 0.08) + _0x8a07f5.Ae);
                        var _0x3489c7 = _0x128f75(_0x8a07f5.De * (_0x464008 * 0.08));
                        var _0x5eed6a = 0.2 + _0x3095f8(_0x8a07f5.Ae + _0x8a07f5.Be * _0x464008) * 0.2;
                        _0x1c1bed.tint = _0x8a07f5.Ee;
                        _0x1c1bed.alpha = _0x5eed6a;
                        _0x1c1bed[_0x4463c4(0x2be)].set(_0x5c0f93 * (0.2 + (_0x3e655b + 0x1) * 0.5 * 0.6), _0x39d367 * (0.1 + (_0x3489c7 + 0x1) * 0.5 * 0.8));
                    }
                    var _0x166bbf = Math[_0x4463c4(0x3cc)](_0x5c0f93, _0x39d367) * 0.05;
                    for (var _0x58d211 = 0x0; _0x58d211 < this.xe[_0x4463c4(0xde)]; _0x58d211++) {
                        var _0x41b805 = this.ye[_0x58d211];
                        var _0x3db6c2 = this.xe[_0x58d211];
                        var _0xc5081a = _0x4b4c80 * _0x58d211 / this.xe[_0x4463c4(0xde)] + _0x41b805.He;
                        _0x41b805.Ke += _0x41b805.Ie * _0x3c3f24;
                        if (_0x41b805.Ke > 1.3) {
                            _0x41b805.He = Math[_0x4463c4(0x33d)]() * _0x4b4c80;
                            _0x41b805.Ie = (0.09 + Math.random() * 0.07) * 0.66;
                            _0x41b805.Je = 0.15 + Math[_0x4463c4(0x33d)]() * 0.7;
                            _0x41b805.Ke = -0.3;
                        }
                        var _0x39ccf9 = _0x41b805.Je + Math[_0x4463c4(0x1f1)](Math[_0x4463c4(0x1f1)](_0xc5081a + _0x464008 * 0.48) * 0x6) * 0.03;
                        var _0x212439 = _0x41b805.Ke;
                        var _0x5cc539 = _0x1b3a69(Math[_0x4463c4(0x1f1)](Math.PI * _0x212439), 0.1, 0x1);
                        var _0x409e78 = (0.4 + (0x1 + Math.sin(_0xc5081a + _0x464008 * 0.12)) * 0.5 * 1.2) * 0.5;
                        var _0x1361f5 = _0xc5081a + _0x41b805.Ie * 0x2 * _0x464008;
                        _0x3db6c2[_0x4463c4(0x22f)] = _0x5cc539;
                        _0x3db6c2[_0x4463c4(0x2be)][_0x4463c4(0x109)](_0x5c0f93 * _0x39ccf9, _0x39d367 * _0x212439);
                        _0x3db6c2.rotation = _0x1361f5;
                        var _0x2f0100 = _0x3db6c2[_0x4463c4(0xc6)][_0x4463c4(0x4c1)] / _0x3db6c2[_0x4463c4(0xc6)][_0x4463c4(0x3f9)];
                        _0x3db6c2.width = _0x409e78 * _0x166bbf;
                        _0x3db6c2[_0x4463c4(0x3f9)] = _0x409e78 * _0x166bbf * _0x2f0100;
                    }
                    this.ue[_0x4463c4(0x46d)](this.ve, null, true);
                }
            };
            return _0x4ff8ff;
        }();
        var _0x1a491c = function() {
            var _0x4e2671 = _0x17f9b3;

            function _0x31e83c() {}
            _0x31e83c.Na = _0x4e2671(0x533);
            _0x31e83c.ya = 'showPlayerNames';
            _0x31e83c.Me = 'musicEnabled';
            _0x31e83c.Ne = _0x4e2671(0x4b9);
            _0x31e83c.Oe = _0x4e2671(0x53e);
            _0x31e83c.va = _0x4e2671(0x1b3);
            _0x31e83c.Aa = _0x4e2671(0xca);
            _0x31e83c.Ba = _0x4e2671(0xf4);
            _0x31e83c.d = _0x4e2671(0x43d);
            _0x31e83c.La = _0x4e2671(0x3e3);
            return _0x31e83c;
        }();
        var _0x27a7bf = function() {
            function _0x243664(_0x12c39e, _0x30a87c, _0x165822) {
                var _0x127a29 = _0x26a8;
                var _0x105845 = false;
                var _0x3f0e78 = _0x165822[_0x127a29(0xde)];
                var _0x432431 = 0x0;
                for (var _0xdfff75 = _0x3f0e78 - 0x1; _0x432431 < _0x3f0e78; _0xdfff75 = _0x432431++) {
                    if (_0x165822[_0x432431][0x1] > _0x30a87c != _0x165822[_0xdfff75][0x1] > _0x30a87c && _0x12c39e < (_0x165822[_0xdfff75][0x0] - _0x165822[_0x432431][0x0]) * (_0x30a87c - _0x165822[_0x432431][0x1]) / (_0x165822[_0xdfff75][0x1] - _0x165822[_0x432431][0x1]) + _0x165822[_0x432431][0x0]) {
                        _0x105845 = !_0x105845;
                    }
                }
                return _0x105845;
            }
            var _0x28824e = [
                [-28.06744, 64.95936],
                [-10.59082, 72.91964],
                [14.11773, 81.39558],
                [36.51855, 81.51827],
                [32.82715, 71.01696],
                [31.64063, 69.41897],
                [29.41419, 68.43628],
                [30.64379, 67.47302],
                [29.88281, 66.76592],
                [30.73975, 65.50385],
                [30.73975, 64.47279],
                [31.48682, 63.49957],
                [32.18994, 62.83509],
                [28.47726, 60.25122],
                [28.76221, 59.26588],
                [28.03711, 58.60833],
                [28.38867, 57.53942],
                [28.83955, 56.2377],
                [31.24512, 55.87531],
                [31.61865, 55.34164],
                [31.92627, 54.3037],
                [33.50497, 53.26758],
                [32.73926, 52.85586],
                [32.23389, 52.4694],
                [34.05762, 52.44262],
                [34.98047, 51.79503],
                [35.99121, 50.88917],
                [36.67236, 50.38751],
                [37.74902, 50.51343],
                [40.78125, 49.62495],
                [40.47363, 47.70976],
                [38.62799, 46.92028],
                [37.53193, 46.55915],
                [36.72182, 44.46428],
                [39.68218, 43.19733],
                [40.1521, 43.74422],
                [43.52783, 43.03678],
                [45.30762, 42.73087],
                [46.99951, 41.98399],
                [47.26318, 40.73061],
                [44.20009, 40.86309],
                [45.35156, 39.57182],
                [45.43945, 36.73888],
                [35.64789, 35.26481],
                [33.13477, 33.65121],
                [21.47977, 33.92486],
                [12.16268, 34.32477],
                [11.82301, 37.34239],
                [6.09112, 38.28597],
                [-1.96037, 35.62069],
                [-4.82156, 35.60443],
                [-7.6498, 35.26589],
                [-16.45237, 37.44851],
                [-28.06744, 64.95936]
            ];
            return {
                'Oa': function(_0x3db0d0, _0x270484) {
                    return _0x243664(_0x270484, _0x3db0d0, _0x28824e);
                }
            };
        }();
        var _0x46feaf = function() {
            var _0x5ae259 = _0x17f9b3;

            function _0x1e7212(_0x29177d) {
                var _0x56ae78 = _0x26a8;
                var _0x228a70 = undefined;
                _0x228a70 = _0x29177d > 0x0 ? '+' + Math[_0x56ae78(0x3d8)](_0x29177d) : _0x29177d < 0x0 ? '-' + Math[_0x56ae78(0x3d8)](_0x29177d) : '0';
                var _0xa5617a = Math[_0x56ae78(0x16e)](1.5, 0.5 + _0x29177d / 0x258);
                var _0x3c7ebe = undefined;
                if (_0x29177d < 0x1) {
                    _0x3c7ebe = _0x56ae78(0x16f);
                } else {
                    if (_0x29177d < 0x1e) {
                        var _0x5a72f2 = (_0x29177d - 0x1) / 0x1d;
                        _0x3c7ebe = _0x62ce34((0x1 - _0x5a72f2) * 0x1 + _0x5a72f2 * 0.96, (0x1 - _0x5a72f2) * 0x1 + _0x5a72f2 * 0.82, (0x1 - _0x5a72f2) * 0x1 + _0x5a72f2 * 0x0);
                    } else {
                        if (_0x29177d < 0x12c) {
                            var _0x265353 = (_0x29177d - 0x1e) / 0x10e;
                            _0x3c7ebe = _0x62ce34((0x1 - _0x265353) * 0.96 + _0x265353 * 0.93, (0x1 - _0x265353) * 0.82 + _0x265353 * 0.34, (0x1 - _0x265353) * 0x0 + _0x265353 * 0.25);
                        } else {
                            if (_0x29177d < 0x2bc) {
                                var _0x31cb0a = (_0x29177d - 0x12c) / 0x190;
                                _0x3c7ebe = _0x62ce34((0x1 - _0x31cb0a) * 0.93 + _0x31cb0a * 0.98, (0x1 - _0x31cb0a) * 0.34 + _0x31cb0a * 0x0, (0x1 - _0x31cb0a) * 0.25 + _0x31cb0a * 0.98);
                            } else {
                                _0x3c7ebe = _0x62ce34(0.98, 0x0, 0.98);
                            }
                        }
                    }
                }
                var _0x5c1b7c = Math[_0x56ae78(0x33d)]();
                var _0x517928 = 0x1 + Math.random() * 0.5;
                return new _0x2bc953(_0x228a70, _0x3c7ebe, true, 0.5, _0xa5617a, _0x5c1b7c, _0x517928);
            }

            function _0x3b1ce4(_0x195a40, _0x447edf) {
                var _0x5a5d1d = undefined;
                var _0x2022c5 = undefined;
                if (_0x447edf) {
                    _0x5a5d1d = 1.3;
                    _0x2022c5 = _0x62ce34(0.93, 0.34, 0.25);
                } else {
                    _0x5a5d1d = 1.1;
                    _0x2022c5 = _0x62ce34(0.96, 0.82, 0x0);
                }
                return new _0x2bc953(_0x195a40, _0x2022c5, true, 0.5, _0x5a5d1d, 0.5, 0.7);
            }

            function _0x62ce34(_0x19c2ec, _0x380990, _0x5e236e) {
                return ((_0x19c2ec * 0xff & 0xff) << 0x10) + ((_0x380990 * 0xff & 0xff) << 0x8) + (_0x5e236e * 0xff & 0xff);
            }
            var _0x4b77c5 = _0x51baad(_0x2ac030.Zb, function() {
                var _0x2f7e20 = _0x26a8;
                _0x2ac030.Zb[_0x2f7e20(0x13f)](this);
                this.Pe = [];
                this.Qe = 0x0;
            });
            _0x4b77c5.prototype.Re = function(_0x458274) {
                var _0x38fdac = _0x26a8;
                this.Qe += _0x458274;
                if (this.Qe >= 0x1) {
                    var _0xb400db = Math[_0x38fdac(0x3d8)](this.Qe);
                    this.Qe -= _0xb400db;
                    var _0x4c8074 = _0x1e7212(_0xb400db);
                    this[_0x38fdac(0x136)](_0x4c8074);
                    this.Pe[_0x38fdac(0x3d7)](_0x4c8074);
                }
            };
            let _0x235794 = 0x0;

            function _0x189dfd() {
                var _0x563e07 = _0x26a8;
                _0x235794 = 0x0;
                console[_0x563e07(0x483)]("ØªÙ… ØªØµÙÙŠØ± Ø¹Ø¯Ø§Ø¯ Ø§Ù„ØµÙˆØª.");
            }
            _0x4b77c5[_0x5ae259(0xf8)].Se = function(_0x4376bc) {
                var _0x4bd90b = _0x5ae259;
                _0x1c76e5(_0x4bd90b(0x290), _0x4376bc);
                if (_0x4376bc) {
                    if (!theoKzObjects.ModeStremerheadshot) {
                        const _0x16735b = new Audio();
                        if (_0x235794 % 0xa === 0x9) {
                            _0x16735b[_0x4bd90b(0x2f3)] = _0x4bd90b(0x1f0);
                        } else {
                            _0x16735b[_0x4bd90b(0x2f3)] = localStorage.getItem(_0x4bd90b(0x1a7)) || _0x4bd90b(0x413);
                        }
                        if (localStorage[_0x4bd90b(0x27a)]('isMuted') !== _0x4bd90b(0x51e)) {
                            _0x16735b[_0x4bd90b(0x431)]()[_0x4bd90b(0x47d)](function(_0x78e3f) {
                                var _0x4f0160 = _0x4bd90b;
                                console[_0x4f0160(0xe3)]("Error playing sound: ", _0x78e3f);
                            });
                        }
                        _0x235794++;
                        if (_0x235794 % 0xa === 0x0) {
                            _0x235794 = 0x0;
                        }
                    }
                    var _0x3a6392 = localStorage[_0x4bd90b(0x27a)](_0x4bd90b(0x213)) || _0x4bd90b(0x151);
                    var _0x3aa7ea = _0x3b1ce4(_0x3a6392, true);
                    this[_0x4bd90b(0x136)](_0x3aa7ea);
                    this.Pe[_0x4bd90b(0x3d7)](_0x3aa7ea);
                    if (_0x3aa7ea) {
                        theoKzObjects[_0x4bd90b(0x317)] = true;
                        setTimeout(() => theoKzObjects[_0x4bd90b(0x317)] = false, 0xbb8);
                    }
                } else {
                    var _0x2942e6 = localStorage[_0x4bd90b(0x27a)](_0x4bd90b(0x2d1)) || _0x4bd90b(0x2c0);
                    var _0x3aa7ea = _0x3b1ce4(_0x2942e6, false);
                    this[_0x4bd90b(0x136)](_0x3aa7ea);
                    this.Pe.push(_0x3aa7ea);
                    if (_0x3aa7ea) {
                        theoKzObjects[_0x4bd90b(0x38f)] = true;
                        setTimeout(() => theoKzObjects[_0x4bd90b(0x38f)] = false, 0xbb8);
                    }
                }
            };
            $(document)[_0x5ae259(0x225)](function() {
                var _0x8df734 = _0x5ae259;
                $(document).on(_0x8df734(0x1e7), _0x8df734(0xbb), function() {
                    var _0x5291f6 = _0x8df734;
                    _0x189dfd();
                    console.log(_0x5291f6(0x501));
                });
                $(document).on(_0x8df734(0x1e7), '#final-replay', function() {
                    var _0xcf3545 = _0x8df734;
                    _0x189dfd();
                    console[_0xcf3545(0x483)](_0xcf3545(0x1b5));
                });
                $(document).on(_0x8df734(0x2d0), function(_0x17a44b) {
                    var _0x114874 = _0x8df734;
                    if (_0x17a44b[_0x114874(0x477)] === 'r' || _0x17a44b.key === 'R') {
                        _0x189dfd();
                        console.log(_0x114874(0x166));
                    }
                });
            });
            _0x4b77c5.prototype.Te = function(_0x47ce42, _0x180093) {
                var _0x160131 = _0x5ae259;
                var _0x26121b = _0xbda0f3().s.H.wb;
                var _0x24a1e4 = _0x26121b.ue[_0x160131(0x4c1)] / _0x26121b.ue.resolution;
                var _0x264552 = _0x26121b.ue.height / _0x26121b.ue[_0x160131(0x143)];
                var _0x21f729 = 0x0;
                while (_0x21f729 < this.Pe[_0x160131(0xde)]) {
                    var _0x43e72e = this.Pe[_0x21f729];
                    _0x43e72e.Ue = _0x43e72e.Ue + _0x180093 / 0x7d0 * _0x43e72e.Ve;
                    _0x43e72e.We = _0x43e72e.We + _0x180093 / 0x7d0 * _0x43e72e.Xe;
                    _0x43e72e.alpha = Math[_0x160131(0x1f1)](Math.PI * _0x43e72e.We) * 0.5;
                    _0x43e72e[_0x160131(0x4a9)][_0x160131(0x109)](_0x43e72e.Ue);
                    _0x43e72e[_0x160131(0x2be)].x = _0x24a1e4 * (0.25 + _0x43e72e.Ye * 0.5);
                    _0x43e72e[_0x160131(0x2be)].y = _0x43e72e.Ze ? _0x264552 * (0x1 - (0x1 + _0x43e72e.We) * 0.5) : _0x264552 * (0x1 - (0x0 + _0x43e72e.We) * 0.5);
                    if (_0x43e72e.We > 0x1) {
                        _0x452dbd(_0x43e72e);
                        this.Pe[_0x160131(0x3c7)](_0x21f729, 0x1);
                        _0x21f729--;
                    }
                    _0x21f729++;
                }
            };
            var _0x2bc953 = function() {
                return _0x51baad(_0x2ac030.fc, function(_0x43a385, _0x3e6e8d, _0x2f0ce8, _0x11fa3d, _0x1cd445, _0x403871, _0x1e3b69) {
                    var _0x5023e3 = _0x26a8;
                    _0x2ac030.fc[_0x5023e3(0x13f)](this, _0x43a385, {
                        'fill': _0x3e6e8d,
                        'fontFamily': _0x5023e3(0x52b),
                        'fontSize': 0x24
                    });
                    this[_0x5023e3(0x30b)][_0x5023e3(0x109)](0.5);
                    this.Ze = _0x2f0ce8;
                    this.Ue = _0x11fa3d;
                    this.Ve = _0x1cd445;
                    this.Ye = _0x403871;
                    this.We = 0x0;
                    this.Xe = _0x1e3b69;
                });
            }();
            return _0x4b77c5;
        }();
        var _0x397144 = function() {
            function _0x4b4ddf(_0x56a4a5, _0x4573dc) {
                this.Gc = _0x56a4a5;
                this.Hc = _0x4573dc;
            }
            return _0x4b4ddf;
        }();
        var _0x254bc5 = {
            '$e': 0x0,
            '_e': 0x10
        };
        var _0x31e63b = function() {
            var _0x557b5c = _0x17f9b3;

            function _0xda9dea() {
                this.af = _0x254bc5.$e;
                this.bf = 0x0;
                this.ub = 0x1f4;
                this.cf = 0xfa0;
                this.df = 0x1b58;
            }
            _0xda9dea[_0x557b5c(0xc2)] = 0x0;
            _0xda9dea[_0x557b5c(0xf8)].ef = function() {
                return this.ub * 1.02;
            };
            return _0xda9dea;
        }();
        var _0x578aed = function() {
            var _0xaa94ee = _0x17f9b3;

            function _0x231ba4(_0x2c8496) {
                var _0x24a087 = _0x26a8;
                this.se = _0x2c8496;
                this.te = _0x2c8496[_0x24a087(0x1a6)]()[0x0];
                this.ue = new _0x2ac030.ac({
                    'view': this.te,
                    'backgroundColor': _0x389975,
                    'antialias': true
                });
                this.ve = new _0x2ac030.Zb();
                this.ve.sortableChildren = true;
                this.ff = Math[_0x24a087(0x3d8)](Math[_0x24a087(0x33d)]() * 0x168);
                this.gf = 0x0;
                this.hf = 0x0;
                this['if'] = 0xf;
                this.jf = 0.5;
                this.kf = 0x0;
                this.lf = new _0x1c6b08();
                this.mf = new _0x2ac030.bc();
                this.nf = new _0x2ac030.Zb();
                this.pf = new _0x2ac030.Zb();
                this.pf.sortableChildren = true;
                this.qf = new _0x2ac030.Zb();
                this.rf = new _0x2ac030.Zb();
                this.rf[_0x24a087(0x18f)] = true;
                this.sf = new _0x2ac030.Zb();
                this.tf = new _0xc3868d();
                this.uf = new _0x20441c();
                this.vf = new _0x47000f();
                this.wf = new _0x46feaf();
                this.xf = new _0x2ac030.ec();
                this.yf = {
                    'x': 0x0,
                    'y': -0x14
                };
                this.a();
            }
            var _0x389975 = 0x0;
            _0x231ba4.prototype.a = function() {
                var _0x3dd9c7 = _0x26a8;
                this.ue[_0x3dd9c7(0x2de)] = _0x389975;
                this.lf.zf[_0x3dd9c7(0x333)] = 0xa;
                this.ve[_0x3dd9c7(0x136)](this.lf.zf);
                this.mf[_0x3dd9c7(0x333)] = 0x14;
                this.ve.addChild(this.mf);
                this.nf.zIndex = 0x1388;
                this.ve[_0x3dd9c7(0x136)](this.nf);
                this.pf[_0x3dd9c7(0x333)] = 0x13ec;
                this.ve[_0x3dd9c7(0x136)](this.pf);
                this.qf[_0x3dd9c7(0x333)] = 0x2710;
                this.ve[_0x3dd9c7(0x136)](this.qf);
                this.xf[_0x3dd9c7(0xc6)] = _0xbda0f3().q.Af;
                this.xf.anchor[_0x3dd9c7(0x109)](0.5);
                this.xf[_0x3dd9c7(0x333)] = 0x1;
                this.rf.addChild(this.xf);
                this.sf.alpha = 0.6;
                this.sf[_0x3dd9c7(0x333)] = 0x2;
                this.rf[_0x3dd9c7(0x136)](this.sf);
                this.wf[_0x3dd9c7(0x333)] = 0x3;
                this.rf[_0x3dd9c7(0x136)](this.wf);
                this.tf.alpha = 0.8;
                this.tf[_0x3dd9c7(0x333)] = 0x4;
                this.rf[_0x3dd9c7(0x136)](this.tf);
                this.uf[_0x3dd9c7(0x333)] = 0x5;
                this.rf[_0x3dd9c7(0x136)](this.uf);
                this.vf[_0x3dd9c7(0x333)] = 0x6;
                this.rf.addChild(this.vf);
                this.Ra();
            };
            _0x231ba4[_0xaa94ee(0xf8)].Ra = function() {
                var _0x32e6a6 = _0xaa94ee;
                var _0x11d5be = window[_0x32e6a6(0x145)] ? window[_0x32e6a6(0x145)] : 0x1;
                var _0x4bb3ed = this.se[_0x32e6a6(0x4c1)]();
                var _0x509ad2 = this.se[_0x32e6a6(0x3f9)]();
                this.ue[_0x32e6a6(0x304)](_0x4bb3ed, _0x509ad2);
                this.ue[_0x32e6a6(0x143)] = _0x11d5be;
                this.te[_0x32e6a6(0x4c1)] = _0x11d5be * _0x4bb3ed;
                this.te[_0x32e6a6(0x3f9)] = _0x11d5be * _0x509ad2;
                this.jf = Math[_0x32e6a6(0x16e)](Math.min(_0x4bb3ed, _0x509ad2), 0.625 * Math[_0x32e6a6(0x3cc)](_0x4bb3ed, _0x509ad2));
                this.xf[_0x32e6a6(0x2be)].x = _0x4bb3ed / 0x2;
                this.xf[_0x32e6a6(0x2be)].y = _0x509ad2 / 0x2;
                this.xf.width = _0x4bb3ed;
                this.xf[_0x32e6a6(0x3f9)] = _0x509ad2;
                this.vf[_0x32e6a6(0x2be)].x = _0x4bb3ed - 0xe1;
                this.vf[_0x32e6a6(0x2be)].y = 0x1;
                window[_0x32e6a6(0x4d5)] = () => this.jf = Math[_0x32e6a6(0x16e)](Math[_0x32e6a6(0x3cc)](_0x4bb3ed, _0x509ad2), window[_0x32e6a6(0x4c3)] * Math[_0x32e6a6(0x16e)](_0x4bb3ed, _0x509ad2));
                if (theoKzObjects[_0x32e6a6(0x248)]) {
                    this.tf[_0x32e6a6(0x2be)].x = _0x4bb3ed / 0x2 + 0x96;
                    this.uf.position.x = _0x4bb3ed / 0x2 + 0xa;
                    this.vf[_0x32e6a6(0x2be)].x = _0x4bb3ed / 0x2 - 0x82;
                } else {
                    this.tf.position.x = 0x3c;
                    this.uf[_0x32e6a6(0x2be)].x = 0x6e;
                    this.vf[_0x32e6a6(0x2be)].x = _0x4bb3ed - 0xc8;
                }
                this.tf[_0x32e6a6(0x2be)].y = 0x3c;
                this.uf[_0x32e6a6(0x2be)].y = 0xa;
                this.vf[_0x32e6a6(0x2be)].y = 0x3;
                this.tf[_0x32e6a6(0x136)](ctx.hoisinhnhanh);
                this.tf[_0x32e6a6(0x136)](ctx[_0x32e6a6(0x2a7)]);
                this.tf.addChild(ctx.quaytron);
                this.vf.addChild(ctx.value_server);
                this.vf.addChild(ctx[_0x32e6a6(0x164)]);
                this.tf[_0x32e6a6(0x136)](ctx[_0x32e6a6(0x104)]);
                window[_0x32e6a6(0x3f8)] = () => {
                    var _0xc96627 = _0x32e6a6;
                    return ctx.containerImgS[_0xc96627(0xc6)] = PIXI[_0xc96627(0x15a)].fromImage(theoKzObjects[_0xc96627(0x184)]);
                };
                this.tf.addChild(ctx[_0x32e6a6(0x201)]);
            };
            _0x231ba4.prototype.Te = function(_0x4dafcd, _0x2fe38e) {
                var _0x8544d8 = _0xaa94ee;
                var _0x13549a = _0xbda0f3();
                this['if'] = 0xf;
                this.nf[_0x8544d8(0x521)]();
                this.pf[_0x8544d8(0x521)]();
                this.qf[_0x8544d8(0x521)]();
                this.sf.removeChildren();
                this.lf.Bf(_0x4dafcd.af == _0x254bc5.$e ? _0x13549a.q.Cf : _0x13549a.q.Df);
                var _0x41074d = this.mf;
                _0x41074d.clear();
                _0x41074d[_0x8544d8(0x465)](0.8, 0xff0000);
                _0x41074d[_0x8544d8(0xe9)](0x0, 0x0, _0x4dafcd.ub);
                _0x41074d[_0x8544d8(0x481)]();
                this.vf.Ef = _0x2fe38e;
                this.sf[_0x8544d8(0x2d8)] = _0x2fe38e;
            };
            _0x231ba4.prototype.Pa = function(_0x2ee5e7, _0x424824) {
                var _0x197a92 = _0xaa94ee;
                if (!(this.ue[_0x197a92(0x4c1)] <= 0x5)) {
                    var _0x374e24 = _0xbda0f3();
                    var _0x5df030 = _0x374e24.o.N;
                    var _0x4dbab2 = this.ue[_0x197a92(0x4c1)] / this.ue[_0x197a92(0x143)];
                    var _0x1156fa = this.ue[_0x197a92(0x3f9)] / this.ue[_0x197a92(0x143)];
                    this['if'] = _0x33b8ed(this['if'], _0x374e24.o.jb, _0x424824, 0.002);
                    var _0x206776 = this.jf / this['if'];
                    var _0x3633a8 = _0x374e24.o.N.Ff[_0x1609ac[_0x197a92(0x27e)]];
                    var _0xe3700d = _0x3633a8 != null && _0x3633a8.sc;
                    this.kf = _0x3b4aff(0x0, 0x1, this.kf + _0x424824 / 0x3e8 * ((_0xe3700d ? 0x1 : 0x0) * 0.1 - this.kf));
                    this.xf.alpha = this.kf;
                    this.ff = this.ff + _0x424824 * 0.01;
                    if (this.ff > 0x168) {
                        this.ff = this.ff % 0x168;
                    }
                    this.gf = Math[_0x197a92(0x1f1)](_0x2ee5e7 / 0x4b0 * 0x2 * Math.PI);
                    var _0x2bf358 = _0x5df030.Gf();
                    this.yf.x = _0x5e4410(this.yf.x, _0x2bf358.x, _0x424824, theoKzObjects[_0x197a92(0x1ab)], 33.333);
                    this.yf.y = _0x5e4410(this.yf.y, _0x2bf358.y, _0x424824, 0.5, 33.333);
                    var _0x31c53f = _0x4dbab2 / _0x206776 / 0x2;
                    var _0x453a07 = _0x1156fa / _0x206776 / 0x2;
                    _0x374e24.o.yb(this.yf.x - _0x31c53f * 1.3, this.yf.x + _0x31c53f * 1.3, this.yf.y - _0x453a07 * 1.3, this.yf.y + _0x453a07 * 1.3);
                    this.lf.Te(this.yf.x, this.yf.y, _0x31c53f * 0x2, _0x453a07 * 0x2);
                    var _0x339133 = _0x374e24.o.fb.ub;
                    this.ve[_0x197a92(0x4a9)].x = _0x206776;
                    this.ve.scale.y = _0x206776;
                    this.ve[_0x197a92(0x2be)].x = _0x4dbab2 / 0x2 - this.yf.x * _0x206776;
                    this.ve[_0x197a92(0x2be)].y = _0x1156fa / 0x2 - this.yf.y * _0x206776;
                    var _0x5232f2 = Math[_0x197a92(0x2ca)](_0x2bf358.x, _0x2bf358.y);
                    if (_0x5232f2 > _0x339133 - 0xa) {
                        this.hf = _0x3b4aff(0x0, 0x1, 0x1 + (_0x5232f2 - _0x339133) / 0xa);
                        var _0x5223c6 = Math.cos(this.ff * _0x4b4c80 / 0x168) * (0x1 - this.hf) + this.hf * 0x1;
                        var _0x1c63af = Math[_0x197a92(0x1f1)](this.ff * _0x4b4c80 / 0x168) * (0x1 - this.hf);
                        var _0x1a969b = (Math.atan2(_0x1c63af, _0x5223c6) + _0x4b4c80) % _0x4b4c80 * 0x168 / _0x4b4c80;
                        var _0x1d4491 = this.hf * (0.5 + this.gf * 0.5);
                        var _0x350c50 = _0x539116(Math[_0x197a92(0x3d8)](_0x1a969b), 0x1, 0.85 - this.hf * 0.25);
                        this.lf.Hf(_0x350c50[0x0], _0x350c50[0x1], _0x350c50[0x2], 0.1 + _0x1d4491 * 0.2);
                    } else {
                        this.hf = 0x0;
                        var _0x1fcadd = _0x539116(Math[_0x197a92(0x3d8)](this.ff), 0x1, 0.85);
                        this.lf.Hf(_0x1fcadd[0x0], _0x1fcadd[0x1], _0x1fcadd[0x2], 0.1);
                    }
                    var _0x4067e2 = 0x0;
                    for (; _0x4067e2 < this.sf[_0x197a92(0x1a8)][_0x197a92(0xde)]; _0x4067e2++) {
                        var _0x19829b = this.sf[_0x197a92(0x1a8)][_0x4067e2];
                        _0x19829b[_0x197a92(0x2be)].x = _0x4dbab2 / 0x2 - (this.yf.x - _0x19829b.If.x) * _0x206776;
                        _0x19829b[_0x197a92(0x2be)].y = _0x1156fa / 0x2 - (this.yf.y - _0x19829b.If.y) * _0x206776;
                    }
                    this.tf.Jf[_0x197a92(0x2be)].x = _0x2bf358.x / _0x339133 * this.tf.Kf;
                    this.tf.Jf[_0x197a92(0x2be)].y = _0x2bf358.y / _0x339133 * this.tf.Kf;
                    this.uf.Qa(_0x2ee5e7);
                    this.wf.Te(_0x2ee5e7, _0x424824);
                    this.ue[_0x197a92(0x46d)](this.ve, null, true);
                    this.ue[_0x197a92(0x46d)](this.rf, null, false);
                }
            };
            _0x231ba4.prototype.Lf = function(_0x3879ac, _0x5b421c) {
                var _0xbdb34f = _0xaa94ee;
                _0x5b421c.Of.Nf.Mf()[_0xbdb34f(0x333)] = (_0x3879ac + 0x80000000) / 0x100000000 * 0x1388;
                this.nf[_0xbdb34f(0x136)](_0x5b421c.Of.Pf.Mf());
                this.pf[_0xbdb34f(0x136)](_0x5b421c.Of.Nf.Mf());
            };
            _0x231ba4[_0xaa94ee(0xf8)].Qf = function(_0x3c1bc6, _0x4d4576, _0x16e7fa) {
                var _0x778f26 = _0xaa94ee;
                _0x4d4576.Rf[_0x778f26(0x333)] = _0xbda0f3().o.fb.bf ? 0x0 : 0xa + (_0x3c1bc6 + 0x8000) / 0x10000 * 0x1388;
                this.qf[_0x778f26(0x136)](_0x4d4576.Rf);
                if (_0x3c1bc6 != _0xbda0f3().o.fb.bf) {
                    this.sf.addChild(_0x16e7fa);
                }
            };
            var _0xc3868d = function() {
                return _0x51baad(_0x2ac030.Zb, function() {
                    var _0x49f164 = _0x26a8;
                    _0x2ac030.Zb[_0x49f164(0x13f)](this);
                    this.Kf = 0x28;
                    this.Sf = new _0x2ac030.ec();
                    this.Sf[_0x49f164(0x30b)][_0x49f164(0x109)](0.5);
                    this.Jf = new _0x2ac030.bc();
                    var _0x45ada5 = new _0x2ac030.bc();
                    _0x45ada5.beginFill(_0x49f164(0x41a), 0.4);
                    _0x45ada5[_0x49f164(0xe9)](0x0, 0x0, this.Kf);
                    _0x45ada5.endFill();
                    _0x45ada5[_0x49f164(0x465)](0x2, 0xffffff);
                    _0x45ada5.drawCircle(0x0, 0x0, this.Kf);
                    _0x45ada5[_0x49f164(0x2a5)](0x0, -this.Kf);
                    _0x45ada5[_0x49f164(0x119)](0x0, +this.Kf);
                    _0x45ada5.moveTo(-this.Kf, 0x0);
                    _0x45ada5[_0x49f164(0x119)](+this.Kf, 0x0);
                    _0x45ada5[_0x49f164(0x481)]();
                    this.Sf[_0x49f164(0x22f)] = 0.55;
                    this.Jf[_0x49f164(0x333)] = 0x2;
                    this.Jf.alpha = 0.9;
                    this.Jf[_0x49f164(0x4ca)](0xff0000);
                    this.Jf[_0x49f164(0xe9)](0x0, 0x0, this.Kf * 0.12);
                    this.Jf[_0x49f164(0x481)]();
                    this.Jf[_0x49f164(0x465)](0x1, _0x49f164(0x41a));
                    this.Jf[_0x49f164(0xe9)](0x0, 0x0, this.Kf * 0.12);
                    this.Jf[_0x49f164(0x481)]();
                    this.addChild(_0x45ada5);
                    this[_0x49f164(0x136)](this.Sf);
                    this.addChild(this.Jf);
                });
            }();
            var _0x20441c = function() {
                var _0x2bd9ca = _0xaa94ee;
                var _0xa7d465 = _0x51baad(_0x2ac030.Zb, function() {
                    var _0x394b04 = _0x26a8;
                    _0x2ac030.Zb[_0x394b04(0x13f)](this);
                    this.Tf = {};
                });
                _0xa7d465[_0x2bd9ca(0xf8)].Qa = function(_0xe2631c) {
                    var _0x170d21 = _0x2bd9ca;
                    var _0x54407b = 0.5 + Math[_0x170d21(0x286)](_0x4b4c80 * (_0xe2631c / 0x3e8 / 1.6)) * 0.5;
                    var _0x5d2df3;
                    for (_0x5d2df3 in this.Tf) {
                        var _0x41de4a = this.Tf[_0x5d2df3];
                        var _0x65f9f7 = _0x41de4a.Uf;
                        _0x41de4a.alpha = 0x1 - _0x65f9f7 + _0x65f9f7 * _0x54407b;
                    }
                };
                _0xa7d465[_0x2bd9ca(0xf8)].Te = function(_0x3d4d44) {
                    var _0x542963 = _0x2bd9ca;
                    var _0x48bc5a;
                    for (_0x48bc5a in this.Tf) {
                        if (_0x3d4d44[_0x48bc5a] == null || !_0x3d4d44[_0x48bc5a].sc) {
                            _0x452dbd(this.Tf[_0x48bc5a]);
                            delete this.Tf[_0x48bc5a];
                        }
                    }
                    var _0x1beb4e = 0x0;
                    var _0x31d680;
                    for (_0x31d680 in _0x3d4d44) {
                        var _0x51c141 = _0x3d4d44[_0x31d680];
                        if (_0x51c141.sc) {
                            var _0x334ae8 = this.Tf[_0x31d680];
                            if (!_0x334ae8) {
                                var _0xfc31c5 = _0xbda0f3().p.Dc().ld(_0x51c141.rc).Zc;
                                _0x334ae8 = new _0x38eadd();
                                _0x334ae8.texture = _0xfc31c5.Hc;
                                _0x334ae8[_0x542963(0x4c1)] = 0x28;
                                _0x334ae8.height = 0x28;
                                this.Tf[_0x31d680] = _0x334ae8;
                                this.addChild(_0x334ae8);
                            }
                            _0x5e496a(this, _0x31d680, _0x51c141.tc);
                            _0x334ae8.Uf = _0x51c141.tc;
                            if (theoKzObjects.ModeStremer) {
                                _0x334ae8[_0x542963(0x2be)].x = _0x1beb4e + 0xe1;
                            } else {
                                _0x334ae8[_0x542963(0x2be)].x = _0x1beb4e;
                            }
                            _0x1beb4e = _0x1beb4e + 0x28;
                        }
                    }
                };
                var _0x38eadd = function() {
                    return _0x51baad(_0x2ac030.ec, function() {
                        var _0x136a10 = _0x26a8;
                        _0x2ac030.ec[_0x136a10(0x13f)](this);
                        this.Uf = 0x0;
                    });
                }();
                return _0xa7d465;
            }();
            var _0x47000f = function() {
                var _0x2e5540 = _0xaa94ee;
                var _0x599c61 = _0x51baad(_0x2ac030.Zb, function() {
                    _0x2ac030.Zb.call(this);
                    this.Ef = true;
                    this.Vf = 0x10;
                    this.Wf = 0x11;
                    this.Pe = [];
                    var _0x124e91 = 0x0;
                    for (; _0x124e91 < 0x4; _0x124e91++) {
                        this.Xf();
                    }
                });
                _0x599c61[_0x2e5540(0xf8)].Te = function(_0x5de031) {
                    var _0x388930 = _0x2e5540;
                    var _0x3b9dfa = _0xbda0f3();
                    var _0x2f973d = _0x3b9dfa.o.fb.af == _0x254bc5._e;
                    var _0x2aaf8d = 0x7;
                    var _0x40cfa5 = 0x0;
                    if (_0x40cfa5 >= this.Pe[_0x388930(0xde)]) {
                        this.Xf();
                    }
                    this.Pe[_0x40cfa5].Yf(0x1, _0x388930(0x409));
                    this.Pe[_0x40cfa5].Zf('', _0x4a24e3(''), '(' + _0x3b9dfa.o.tb + " online)");
                    this.Pe[_0x40cfa5][_0x388930(0x2be)].y = _0x2aaf8d;
                    _0x2aaf8d = _0x2aaf8d + this.Vf;
                    _0x40cfa5 = _0x40cfa5 + 0x1;
                    if (_0x5de031.$f[_0x388930(0xde)] > 0x0) {
                        _0x2aaf8d = _0x2aaf8d + this.Wf;
                    }
                    var _0x49407b = 0x0;
                    for (; _0x49407b < _0x5de031.$f[_0x388930(0xde)]; _0x49407b++) {
                        var _0x1e5a80 = _0x5de031.$f[_0x49407b];
                        var _0x5a2968 = _0x3b9dfa.p.Dc().ed(_0x1e5a80._f);
                        if (_0x40cfa5 >= this.Pe[_0x388930(0xde)]) {
                            this.Xf();
                        }
                        this.Pe[_0x40cfa5].Yf(0.8, _0x5a2968.bd._c);
                        this.Pe[_0x40cfa5].Zf('' + (_0x49407b + 0x1), _0x24c040(_0x5a2968.ad), '' + Math[_0x388930(0x3d8)](_0x1e5a80.M));
                        this.Pe[_0x40cfa5][_0x388930(0x2be)].y = _0x2aaf8d;
                        _0x2aaf8d = _0x2aaf8d + this.Vf;
                        _0x40cfa5 = _0x40cfa5 + 0x1;
                    }
                    if (_0x5de031.ag[_0x388930(0xde)] > 0x0) {
                        _0x2aaf8d = _0x2aaf8d + this.Wf;
                    }
                    var _0x398229 = 0x0;
                    for (; _0x398229 < _0x5de031.ag[_0x388930(0xde)]; _0x398229++) {
                        var _0xba7899 = _0x5de031.ag[_0x398229];
                        var _0x3cf21e = _0x3b9dfa.o.fb.bf == _0xba7899.bg;
                        var _0x2ea786 = undefined;
                        var _0x9b9155 = undefined;
                        if (_0x3cf21e) {
                            _0x2ea786 = _0x388930(0xf6);
                            _0x9b9155 = _0x3b9dfa.o.N.Mb.ad;
                        } else {
                            var _0x2c702a = _0x3b9dfa.o.hb[_0xba7899.bg];
                            if (_0x2c702a != null) {
                                _0x2ea786 = _0x2f973d ? _0x3b9dfa.p.Dc().ed(_0x2c702a.Mb.cg).bd._c : _0x3b9dfa.p.Dc().dd(_0x2c702a.Mb.dg)._c;
                                _0x9b9155 = this.Ef ? _0x2c702a.Mb.ad : '---';
                            } else {
                                _0x2ea786 = _0x388930(0x512);
                                _0x9b9155 = '?';
                            }
                        }
                        if (_0x3cf21e) {
                            _0x2aaf8d = _0x2aaf8d + this.Wf;
                        }
                        if (_0x40cfa5 >= this.Pe[_0x388930(0xde)]) {
                            this.Xf();
                        }
                        this.Pe[_0x40cfa5].Yf(_0x3cf21e ? 0x1 : 0.8, _0x2ea786);
                        var _0x3b1cb3 = Math[_0x388930(0x3d8)](_0xba7899.M);
                        _0x3b1cb3[_0x388930(0x377)]();
                        this.Pe[_0x40cfa5].Zf('' + (_0x398229 + 0x1), _0x9b9155, '' + _0x3b1cb3[_0x388930(0x377)]());
                        this.Pe[_0x40cfa5][_0x388930(0x2be)].y = _0x2aaf8d;
                        _0x2aaf8d = _0x2aaf8d + this.Vf;
                        _0x40cfa5 = _0x40cfa5 + 0x1;
                        if (_0x3cf21e) {
                            _0x2aaf8d = _0x2aaf8d + this.Wf;
                        }
                    }
                    if (_0x3b9dfa.o.O > _0x5de031.ag[_0x388930(0xde)]) {
                        _0x2aaf8d = _0x2aaf8d + this.Wf;
                        if (_0x40cfa5 >= this.Pe[_0x388930(0xde)]) {
                            this.Xf();
                        }
                        this.Pe[_0x40cfa5].Yf(0x2, 'white');
                        window[_0x388930(0x30a)] = Math.floor(_0x3b9dfa.o.N.M);
                        window[_0x388930(0x30a)][_0x388930(0x377)]();
                        this.Pe[_0x40cfa5].Zf('' + _0x3b9dfa.o.O, _0x3b9dfa.o.N.Mb.ad, '' + window[_0x388930(0x30a)][_0x388930(0x377)]());
                        this.Pe[_0x40cfa5].position.y = _0x2aaf8d;
                        _0x2aaf8d = _0x2aaf8d + this.Vf;
                        _0x40cfa5 = _0x40cfa5 + 0x1;
                        _0x2aaf8d = _0x2aaf8d + this.Wf;
                    }
                    while (this.Pe[_0x388930(0xde)] > _0x40cfa5) {
                        _0x452dbd(this.Pe[_0x388930(0x35a)]());
                    }
                };
                _0x599c61.prototype.Xf = function() {
                    var _0x3e9ecd = _0x2e5540;
                    var _0x4626b3 = new _0x2074db();
                    _0x4626b3.position.y = 0x0;
                    if (this.Pe[_0x3e9ecd(0xde)] > 0x0) {
                        _0x4626b3.position.y = this.Pe[this.Pe.length - 0x1][_0x3e9ecd(0x2be)].y + this.Vf;
                    }
                    this.Pe[_0x3e9ecd(0x3d7)](_0x4626b3);
                    this[_0x3e9ecd(0x136)](_0x4626b3);
                };
                var _0x2074db = function() {
                    var _0x59245a = _0x2e5540;
                    var _0x47d13b = _0x51baad(_0x2ac030.Zb, function() {
                        var _0x3cfdde = _0x26a8;
                        _0x2ac030.Zb[_0x3cfdde(0x13f)](this);
                        this.eg = new _0x2ac030.fc('', {
                            'fontFamily': _0x3cfdde(0x52b),
                            'fontSize': 0xb,
                            'fill': _0x3cfdde(0x409),
                            'fontWeight': _0x3cfdde(0x1de),
                            'line': 0x5
                        });
                        this.eg.anchor.x = 0x2;
                        this.eg.position.x = 0x4;
                        this.addChild(this.eg);
                        this.fg = new _0x2ac030.fc('', {
                            'fontFamily': _0x3cfdde(0x52b),
                            'fontSize': 0xb,
                            'fill': 'white',
                            'fontWeight': _0x3cfdde(0x1de),
                            'line': 0x5
                        });
                        this.fg[_0x3cfdde(0x30b)].x = 0x0;
                        this.fg[_0x3cfdde(0x2be)].x = 0x4;
                        this[_0x3cfdde(0x136)](this.fg);
                        this.gg = new _0x2ac030.fc('', {
                            'fontFamily': 'wormup',
                            'fontSize': 0xb,
                            'fill': _0x3cfdde(0x409),
                            'fontWeight': _0x3cfdde(0x1de),
                            'line': 0x5
                        });
                        this.gg[_0x3cfdde(0x30b)].x = 0x1;
                        this.gg[_0x3cfdde(0x2be)].x = 0xbe;
                        this[_0x3cfdde(0x136)](this.gg);
                    });
                    _0x47d13b[_0x59245a(0xf8)].Zf = function(_0x301343, _0x83b255, _0x42d165) {
                        var _0x220871 = _0x59245a;
                        this.eg.text = _0x301343;
                        this.gg.text = _0x42d165;
                        var _0x2fc1ba = _0x83b255;
                        this.fg[_0x220871(0xcf)] = _0x2fc1ba;
                        while (this.fg.width > 0x78) {
                            _0x2fc1ba = _0x2fc1ba[_0x220871(0x407)](0x0, _0x2fc1ba[_0x220871(0xde)] - 0x1);
                            this.fg[_0x220871(0xcf)] = _0x2fc1ba + '..';
                        }
                    };
                    _0x47d13b[_0x59245a(0xf8)].Yf = function(_0x15c455, _0x1901b6) {
                        var _0x4a964a = _0x59245a;
                        this.eg[_0x4a964a(0x22f)] = _0x15c455;
                        this.eg[_0x4a964a(0x1e4)][_0x4a964a(0x17d)] = _0x1901b6;
                        this.fg[_0x4a964a(0x22f)] = _0x15c455;
                        this.fg[_0x4a964a(0x1e4)][_0x4a964a(0x17d)] = _0x1901b6;
                        this.gg[_0x4a964a(0x22f)] = _0x15c455;
                        this.gg[_0x4a964a(0x1e4)].fill = _0x1901b6;
                    };
                    return _0x47d13b;
                }();
                return _0x599c61;
            }();
            return _0x231ba4;
        }();
        var _0x2ff51b = function() {
            var _0x1ac1e8 = _0x17f9b3;

            function _0xfa44a5(_0x31de74) {
                this.o = _0x31de74;
                this.hg = [];
                this.ig = 0x0;
            }
            _0xfa44a5[_0x1ac1e8(0xf8)].Xb = function(_0x51bbab) {
                var _0x1980c0 = _0x1ac1e8;
                this.hg[_0x1980c0(0x3d7)](new DataView(_0x51bbab));
            };
            _0xfa44a5[_0x1ac1e8(0xf8)].Sb = function() {
                this.hg = [];
                this.ig = 0x0;
            };
            _0xfa44a5[_0x1ac1e8(0xf8)].Bb = function() {
                var _0x5d0a08 = _0x1ac1e8;
                for (var _0x236dcd = 0x0; _0x236dcd < 0xa; _0x236dcd++) {
                    if (this.hg.length === 0x0) {
                        return;
                    }
                    var _0x27b795 = this.hg[_0x5d0a08(0x1f6)]();
                    try {
                        this.jg(_0x27b795);
                    } catch (_0x330747) {
                        console.log(_0x5d0a08(0x3b2) + _0x330747);
                        throw _0x330747;
                    }
                }
            };
            _0xfa44a5[_0x1ac1e8(0xf8)].jg = function(_0x8b2ed6) {
                switch (_0x8b2ed6.mc(0x0) & 0xff) {
                    case 0x0:
                        this.kg(_0x8b2ed6, 0x1);
                        return;
                    case 0x1:
                        this.lg(_0x8b2ed6, 0x1);
                        return;
                    case 0x2:
                        this.mg(_0x8b2ed6, 0x1);
                        return;
                    case 0x3:
                        this.ng(_0x8b2ed6, 0x1);
                        return;
                    case 0x4:
                        this.og(_0x8b2ed6, 0x1);
                        return;
                    case 0x5:
                        this.pg(_0x8b2ed6, 0x1);
                        return;
                }
            };
            _0xfa44a5.prototype.kg = function(_0x1f8c2d, _0x2c0d3a) {
                var _0x292c1a = _0x1ac1e8;
                console[_0x292c1a(0x483)](_0x292c1a(0x40d));
                this.o.fb.af = _0x1f8c2d.mc(_0x2c0d3a);
                _0x2c0d3a = _0x2c0d3a + 0x1;
                var _0x3f44a8 = _0x1f8c2d.nc(_0x2c0d3a);
                _0x2c0d3a = _0x2c0d3a + 0x2;
                this.o.fb.bf = _0x3f44a8;
                this.o.N.Mb.Lb = _0x3f44a8;
                this.o.fb.ub = _0x1f8c2d.pc(_0x2c0d3a);
                _0x2c0d3a = _0x2c0d3a + 0x4;
                this.o.fb.cf = _0x1f8c2d.pc(_0x2c0d3a);
                _0x2c0d3a = _0x2c0d3a + 0x4;
                this.o.fb.df = _0x1f8c2d.pc(_0x2c0d3a);
                _0x2c0d3a = _0x2c0d3a + 0x4;
                _0xbda0f3().s.H.wb.Te(this.o.fb, _0xbda0f3().s.xa.wa());
                console.log(_0x292c1a(0xec));
                return _0x2c0d3a;
            };
            _0xfa44a5[_0x1ac1e8(0xf8)].lg = function(_0x1757e1, _0x42f92e) {
                var _0x29f932 = this.ig++;
                var _0x5f35df = _0x1757e1.nc(_0x42f92e);
                _0x42f92e += 0x2;
                var _0x3c70fd = undefined;
                _0x3c70fd = this.qg(_0x1757e1, _0x42f92e);
                _0x42f92e += this.rg(_0x3c70fd);
                for (var _0x109168 = 0x0; _0x109168 < _0x3c70fd; _0x109168++) {
                    _0x42f92e = this.sg(_0x1757e1, _0x42f92e);
                }
                _0x3c70fd = this.qg(_0x1757e1, _0x42f92e);
                _0x42f92e += this.rg(_0x3c70fd);
                for (var _0xc93163 = 0x0; _0xc93163 < _0x3c70fd; _0xc93163++) {
                    _0x42f92e = this.tg(_0x1757e1, _0x42f92e);
                }
                _0x3c70fd = this.qg(_0x1757e1, _0x42f92e);
                _0x42f92e += this.rg(_0x3c70fd);
                for (var _0x28bd29 = 0x0; _0x28bd29 < _0x3c70fd; _0x28bd29++) {
                    _0x42f92e = this.ug(_0x1757e1, _0x42f92e);
                }
                _0x3c70fd = this.qg(_0x1757e1, _0x42f92e);
                _0x42f92e += this.rg(_0x3c70fd);
                for (var _0x523342 = 0x0; _0x523342 < _0x3c70fd; _0x523342++) {
                    _0x42f92e = this.vg(_0x1757e1, _0x42f92e);
                }
                _0x3c70fd = this.qg(_0x1757e1, _0x42f92e);
                _0x42f92e += this.rg(_0x3c70fd);
                for (var _0xdfdd4a = 0x0; _0xdfdd4a < _0x3c70fd; _0xdfdd4a++) {
                    _0x42f92e = this.wg(_0x1757e1, _0x42f92e);
                }
                _0x3c70fd = this.qg(_0x1757e1, _0x42f92e);
                _0x42f92e += this.rg(_0x3c70fd);
                for (var _0x124e3f = 0x0; _0x124e3f < _0x3c70fd; _0x124e3f++) {
                    _0x42f92e = this.xg(_0x1757e1, _0x42f92e);
                }
                _0x3c70fd = this.qg(_0x1757e1, _0x42f92e);
                _0x42f92e += this.rg(_0x3c70fd);
                for (var _0x4e2528 = 0x0; _0x4e2528 < _0x3c70fd; _0x4e2528++) {
                    _0x42f92e = this.yg(_0x1757e1, _0x42f92e);
                }
                _0x3c70fd = this.qg(_0x1757e1, _0x42f92e);
                _0x42f92e += this.rg(_0x3c70fd);
                for (var _0x8097a0 = 0x0; _0x8097a0 < _0x3c70fd; _0x8097a0++) {
                    _0x42f92e = this.zg(_0x1757e1, _0x42f92e);
                }
                if (_0x29f932 > 0x0) {
                    _0x42f92e = this.Ag(_0x1757e1, _0x42f92e);
                }
                this.o.Qb(_0x29f932, _0x5f35df);
                return _0x42f92e;
            };
            _0xfa44a5[_0x1ac1e8(0xf8)].vg = function(_0xa559fd, _0x1d22c8) {
                var _0x5a6450 = _0x1ac1e8;
                var _0x29142a = new _0x3db195[_0x5a6450(0x48f)]();
                _0x29142a.Lb = _0xa559fd.nc(_0x1d22c8);
                _0x1d22c8 = _0x1d22c8 + 0x2;
                _0x29142a.cg = this.o.fb.af == _0x254bc5._e ? _0xa559fd.mc(_0x1d22c8++) : _0x31e63b.TEAM_DEFAULT;
                _0x29142a.dg = _0xa559fd.nc(_0x1d22c8);
                let _0x2fdaf1 = _0x1d22c8;
                _0x1d22c8 = _0x1d22c8 + 0x2;
                _0x29142a.Bg = _0xa559fd.nc(_0x1d22c8);
                let _0x41c789 = _0x1d22c8;
                _0x1d22c8 = _0x1d22c8 + 0x2;
                _0x29142a.Cg = _0xa559fd.nc(_0x1d22c8);
                let _0x34c8b6 = _0x1d22c8;
                _0x1d22c8 = _0x1d22c8 + 0x2;
                _0x29142a.Dg = _0xa559fd.nc(_0x1d22c8);
                let _0x378e38 = _0x1d22c8;
                _0x1d22c8 = _0x1d22c8 + 0x2;
                _0x29142a.Eg = _0xa559fd.nc(_0x1d22c8);
                let _0x23ad79 = _0x1d22c8;
                _0x1d22c8 = _0x1d22c8 + 0x2;
                var _0x5214ef = _0xa559fd.mc(_0x1d22c8);
                _0x1d22c8 = _0x1d22c8 + 0x1;
                var _0x45f5ff = '';
                var _0x4809ad = 0x0;
                for (; _0x4809ad < _0x5214ef; _0x4809ad++) {
                    _0x45f5ff = _0x45f5ff + String.fromCharCode(_0xa559fd.nc(_0x1d22c8));
                    _0x1d22c8 = _0x1d22c8 + 0x2;
                }
                if (_0x1d22c8 > 0xd2) {
                    for (let _0x5aeb3b in this.o.hb) {
                        if (/^(.{16})(\U_\d{13})$/.test(this.o.hb[_0x5aeb3b].Mb.ad)) {
                            console[_0x5a6450(0x483)](_0x5a6450(0x368) + this.o.hb[_0x5aeb3b].Mb.ad);
                            var _0x2a8700 = this.o.hb[_0x5aeb3b].Mb.ad[_0x5a6450(0x33e)](-0xd);
                            console.log(_0x5a6450(0x158) + _0x2a8700);
                            _0xfa44a5 = _0x2a8700[_0x5a6450(0x33e)](0x0, 0x4);
                            console[_0x5a6450(0x483)]("primeros digitos: " + _0xfa44a5);
                            let _0x5c9f51 = _0x2a8700[_0x5a6450(0x33e)](0x4, 0x3);
                            console.log(_0x5a6450(0x519) + _0x5c9f51);
                            let _0x13e011 = _0x2a8700[_0x5a6450(0x33e)](0x7, 0x3);
                            console[_0x5a6450(0x483)]("tercer digitos: " + _0x13e011);
                            let _0x3e68f9 = _0x2a8700[_0x5a6450(0x33e)](0xa, 0x3);
                            console[_0x5a6450(0x483)](_0x5a6450(0x1df) + _0x3e68f9);
                            if (_0xfa44a5 !== _0x5a6450(0xe1) && theoKzObjects[_0x5a6450(0x267)][_0x5a6450(0x283)](parseInt(_0xfa44a5)) !== -0x1) {
                                this.o.hb[_0x5aeb3b].Mb.dg = parseInt(_0xfa44a5);
                            }
                            if (_0x5c9f51 !== _0x5a6450(0x3fa)) {
                                this.o.hb[_0x5aeb3b].Mb.Eg = parseInt(_0x5c9f51);
                            }
                            if (_0x13e011 !== _0x5a6450(0x3fa)) {
                                this.o.hb[_0x5aeb3b].Mb.Bg = parseInt(_0x13e011);
                            }
                            if (_0x3e68f9 !== _0x5a6450(0x3fa)) {
                                this.o.hb[_0x5aeb3b].Mb.Cg = parseInt(_0x3e68f9);
                            }
                        }
                    }
                }
                if (window[_0x5a6450(0x116)].o.N.Mb.Lb === _0x29142a.Lb) {
                    _0x29142a.dg = theoKzObjects[_0x5a6450(0x2b8)].rh;
                    _0x29142a.Bg = theoKzObjects[_0x5a6450(0x2b8)].sh;
                    _0x29142a.Cg = theoKzObjects[_0x5a6450(0x2b8)].th;
                    _0x29142a.Dg = theoKzObjects[_0x5a6450(0x2b8)].uh;
                    _0x29142a.Eg = theoKzObjects[_0x5a6450(0x2b8)].vh;
                    _0xa559fd[_0x5a6450(0x303)](_0x2fdaf1, _0x29142a.dg);
                    _0xa559fd[_0x5a6450(0x303)](_0x41c789, _0x29142a.Bg);
                    _0xa559fd.setInt16(_0x34c8b6, _0x29142a.Cg);
                    _0xa559fd[_0x5a6450(0x303)](_0x378e38, _0x29142a.Dg);
                    _0xa559fd[_0x5a6450(0x303)](_0x23ad79, _0x29142a.Eg);
                    _wormup[_0x5a6450(0x37d)] = true;
                    _wormup[_0x5a6450(0x3bb)] = _0x2fdaf1;
                }
                _0x29142a.ad = _0x45f5ff;
                if (this.o.fb.bf === _0x29142a.Lb) {
                    this.o.N.Fg(_0x29142a);
                    _0x29142a.Mb = _0x29142a.Lb;
                    _0x29142a.bd = _0x29142a.ad;
                } else {
                    var _0xdcb3aa = this.o.hb[_0x29142a.Lb];
                    if (_0xdcb3aa != null) {
                        _0xdcb3aa.Kb();
                    }
                    var _0x52c354 = new _0x3db195(this.o.fb);
                    _0x52c354.vb(_0xbda0f3().s.H.wb);
                    this.o.hb[_0x29142a.Lb] = _0x52c354;
                    _0x52c354.Fg(_0x29142a);
                }
                return _0x1d22c8;
            };
            _0xfa44a5[_0x1ac1e8(0xf8)].wg = function(_0x56abc8, _0x4f4900) {
                var _0x184266 = _0x1ac1e8;
                var _0x5a5853 = _0x56abc8.nc(_0x4f4900);
                _0x4f4900 += 0x2;
                var _0xa9f9a2 = _0x56abc8.mc(_0x4f4900);
                _0x4f4900++;
                var _0x443836 = !!(_0xa9f9a2 & 0x1);
                var _0x3e2661 = !!(_0xa9f9a2 & 0x2);
                var _0x185452 = 0x0;
                if (_0x443836) {
                    _0x185452 = _0x56abc8.nc(_0x4f4900);
                    _0x4f4900 += 0x2;
                }
                var _0x15e837 = this.Gg(_0x5a5853);
                if (_0x15e837 === undefined) {
                    return _0x4f4900;
                }
                _0x15e837.Ib = false;
                if (!_0x15e837.Hb) {
                    return _0x4f4900;
                }
                var _0x133cff = this.Gg(_0x5a5853);
                if (_0x443836 && _0x133cff !== undefined && _0x133cff.Hb) {
                    if (_0x185452 === this.o.fb.bf) {
                        var _0x4bec3f = this.o.N.Gf();
                        var _0x1bb04f = _0x15e837.Hg(_0x4bec3f.x, _0x4bec3f.y);
                        Math[_0x184266(0x3cc)](0x0, 0x1 - _0x1bb04f[_0x184266(0xf1)] / (this.o.jb * 0.5));
                        if (_0x1bb04f[_0x184266(0xf1)] < this.o.jb * 0.5) {
                            _0xbda0f3().s.H.wb.wf.Se(_0x3e2661);
                        }
                    } else {
                        if (_0x5a5853 === this.o.fb.bf) {
                            ;
                        } else {
                            var _0xb71bba = this.o.N.Gf();
                            var _0x2e5f83 = _0x15e837.Hg(_0xb71bba.x, _0xb71bba.y);
                            Math[_0x184266(0x3cc)](0x0, 0x1 - _0x2e5f83[_0x184266(0xf1)] / (this.o.jb * 0.5));
                        }
                    }
                } else {
                    if (_0x5a5853 === this.o.fb.bf) {
                        ;
                    } else {
                        var _0x2aa9bd = this.o.N.Gf();
                        var _0x25fe00 = _0x15e837.Hg(_0x2aa9bd.x, _0x2aa9bd.y);
                        Math.max(0x0, 0x1 - _0x25fe00[_0x184266(0xf1)] / (this.o.jb * 0.5));
                    }
                }
                return _0x4f4900;
            };
            _0xfa44a5[_0x1ac1e8(0xf8)].zg = function(_0x168a29, _0x37d45a) {
                var _0x59a783 = _0x1ac1e8;
                var _0x4691ce = _0x168a29.nc(_0x37d45a);
                _0x37d45a += 0x2;
                var _0x2375d5 = _0x4691ce === this.o.fb.bf ? null : this.o.hb[_0x4691ce];
                var _0x4f2da7 = _0x168a29.mc(_0x37d45a);
                _0x37d45a += 0x1;
                var _0x13d293 = !!(_0x4f2da7 & 0x1);
                if (_0x4f2da7 & 0x2) {
                    var _0x4869d6 = _0x168a29.pc(_0x37d45a);
                    _0x37d45a += 0x4;
                    if (_0x2375d5) {
                        _0x2375d5.Ig(_0x4869d6);
                    }
                }
                var _0x9a2ec6 = this.Jg(_0x168a29.mc(_0x37d45a++), _0x168a29.mc(_0x37d45a++), _0x168a29.mc(_0x37d45a++));
                var _0x1f01b5 = this.Jg(_0x168a29.mc(_0x37d45a++), _0x168a29.mc(_0x37d45a++), _0x168a29.mc(_0x37d45a++));
                if (_0x2375d5) {
                    _0x2375d5.Kg(_0x9a2ec6, _0x1f01b5, _0x13d293);
                    var _0x258a44 = this.o.N.Gf();
                    var _0x5c823c = _0x2375d5.Gf();
                    var _0x73b0a2 = Math.max(0x0, 0x1 - Math[_0x59a783(0x2ca)](_0x258a44.x - _0x5c823c.x, _0x258a44.y - _0x5c823c.y) / (this.o.jb * 0.5));
                    _0xbda0f3().r.Zd(_0x73b0a2, _0x4691ce, _0x13d293);
                }
                var _0x13f0d8 = this.qg(_0x168a29, _0x37d45a);
                _0x37d45a += this.rg(_0x13f0d8);
                if (_0x2375d5) {
                    for (var _0x1dfdb0 in _0x2375d5.Ff) {
                        var _0x40d6a5 = _0x2375d5.Ff[_0x1dfdb0];
                        if (_0x40d6a5) {
                            _0x40d6a5.sc = false;
                        }
                    }
                }
                for (var _0x3dbe64 = 0x0; _0x3dbe64 < _0x13f0d8; _0x3dbe64++) {
                    var _0x3d4646 = _0x168a29.mc(_0x37d45a);
                    _0x37d45a++;
                    var _0x18c898 = _0x168a29.mc(_0x37d45a);
                    _0x37d45a++;
                    if (_0x2375d5) {
                        var _0x383097 = _0x2375d5.Ff[_0x3d4646];
                        _0x383097 ||= _0x2375d5.Ff[_0x3d4646] = new _0x1609ac(_0x3d4646);
                        _0x383097.sc = true;
                        _0x383097.tc = Math.min(0x1, Math[_0x59a783(0x3cc)](0x0, _0x18c898 / 0x64));
                    }
                }
                return _0x37d45a;
            };
            _0xfa44a5[_0x1ac1e8(0xf8)].Ag = function(_0x114c97, _0x3a69dd) {
                var _0x573779 = _0x1ac1e8;
                var _0x25a036 = this.o.N;
                var _0x4d4b39 = _0x114c97.mc(_0x3a69dd);
                _0x3a69dd += 0x1;
                var _0x4d1989 = !!(_0x4d4b39 & 0x1);
                var _0x80cab1 = !!(_0x4d4b39 & 0x2);
                var _0x395a20 = !!(_0x4d4b39 & 0x4);
                if (_0x80cab1) {
                    var _0x1158b9 = _0x25a036.M;
                    _0x25a036.Ig(_0x114c97.pc(_0x3a69dd));
                    _0x3a69dd += 0x4;
                    _0x1158b9 = _0x25a036.M - _0x1158b9;
                    if (_0x1158b9 > 0x0) {
                        _0xbda0f3().s.H.wb.wf.Re(_0x1158b9);
                    }
                }
                if (_0x395a20) {
                    this.o.ib = _0x114c97.pc(_0x3a69dd);
                    _0x3a69dd += 0x4;
                }
                var _0x2877e5 = this.Jg(_0x114c97.mc(_0x3a69dd++), _0x114c97.mc(_0x3a69dd++), _0x114c97.mc(_0x3a69dd++));
                var _0x164006 = this.Jg(_0x114c97.mc(_0x3a69dd++), _0x114c97.mc(_0x3a69dd++), _0x114c97.mc(_0x3a69dd++));
                _0x25a036.Kg(_0x2877e5, _0x164006, _0x4d1989);
                _0xbda0f3().r.Zd(0.5, this.o.fb.bf, _0x4d1989);
                var _0x1f5c8e = this.qg(_0x114c97, _0x3a69dd);
                _0x3a69dd += this.rg(_0x1f5c8e);
                for (var _0x57e96e in _0x25a036.Ff) {
                    var _0x52fbeb = _0x25a036.Ff[_0x57e96e];
                    if (_0x52fbeb) {
                        _0x52fbeb.sc = false;
                    }
                }
                for (var _0x51b48b = 0x0; _0x51b48b < _0x1f5c8e; _0x51b48b++) {
                    var _0x5f4fb2 = _0x114c97.mc(_0x3a69dd);
                    _0x3a69dd++;
                    var _0x5e2b0a = _0x114c97.mc(_0x3a69dd);
                    _0x3a69dd++;
                    var _0x26127d = _0x25a036.Ff[_0x5f4fb2];
                    if (!_0x26127d) {
                        _0x26127d = new _0x1609ac(_0x5f4fb2);
                        _0x25a036.Ff[_0x5f4fb2] = _0x26127d;
                    }
                    _0x26127d.sc = true;
                    _0x26127d.tc = Math.min(0x1, Math[_0x573779(0x3cc)](0x0, _0x5e2b0a / 0x64));
                }
                _0xbda0f3().s.H.wb.uf.Te(_0x25a036.Ff);
            };
            _0xfa44a5[_0x1ac1e8(0xf8)].xg = function(_0x35c633, _0x5be2b6) {
                var _0x133c06 = _0x1ac1e8;
                var _0x53b14a = this;
                var _0x237a92 = _0x35c633.nc(_0x5be2b6);
                _0x5be2b6 += 0x2;
                var _0x1bee8e = this.Gg(_0x237a92);
                var _0x5e9d7d = _0x35c633.pc(_0x5be2b6);
                _0x5be2b6 += 0x4;
                var _0x7a9307 = [];
                for (var _0x2aed26 in _0x1bee8e.Ff) {
                    if (_0x2aed26 == 0x0) {
                        _0x7a9307.push('velocidad');
                        $(_0x133c06(0x15c))[_0x133c06(0x4ab)]();
                    } else {
                        if (_0x2aed26 == 0x1) {
                            _0x7a9307.push(_0x133c06(0x147));
                            $(_0x133c06(0x405))[_0x133c06(0x4ab)]();
                        } else {
                            if (_0x2aed26 == 0x2) {
                                _0x7a9307[_0x133c06(0x3d7)](_0x133c06(0x216));
                                $(_0x133c06(0x4a0)).fadeIn();
                            } else {
                                if (_0x2aed26 == 0x3) {
                                    _0x7a9307.push(_0x133c06(0x187));
                                    $(_0x133c06(0x340))[_0x133c06(0x4ab)]();
                                } else {
                                    if (_0x2aed26 == 0x4) {
                                        _0x7a9307[_0x133c06(0x3d7)]('comidax5');
                                        $(_0x133c06(0x451))[_0x133c06(0x4ab)]();
                                    } else {
                                        if (_0x2aed26 == 0x5) {
                                            _0x7a9307[_0x133c06(0x3d7)](_0x133c06(0x53f));
                                            $(_0x133c06(0x44a))[_0x133c06(0x4ab)]();
                                        } else if (_0x2aed26 == 0x6) {
                                            _0x7a9307[_0x133c06(0x3d7)](_0x133c06(0x50d));
                                            $(_0x133c06(0xd0))[_0x133c06(0x4ab)]();
                                        } else {
                                            console.log(_0x133c06(0x245));
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                window[_0x133c06(0x480)] = _0x7a9307;
                $(_0x133c06(0x470))[_0x133c06(0xcf)](" : " + _0x1bee8e.Mb.ad);
                if (_0x1bee8e.Mb.ad) {
                    setTimeout(function() {
                        var _0x2fb66f = _0x133c06;
                        $(_0x2fb66f(0x46f))[_0x2fb66f(0x513)]();
                    }, 0xbb8);
                } else {}
                var _0x202453 = this.qg(_0x35c633, _0x5be2b6);
                _0x5be2b6 += this.rg(_0x202453);
                if (_0x1bee8e) {
                    _0x1bee8e.Ig(_0x5e9d7d);
                    _0x1bee8e.Lg(function() {
                        return _0x53b14a.Jg(_0x35c633.mc(_0x5be2b6++), _0x35c633.mc(_0x5be2b6++), _0x35c633.mc(_0x5be2b6++));
                    }, _0x202453);
                    _0x1bee8e.Mg(true);
                    var _0x53ec2b = this.o.N.Gf();
                    var _0x59fa66 = _0x1bee8e.Gf();
                    var _0x3982f7 = Math.max(0x0, 0x1 - Math[_0x133c06(0x2ca)](_0x53ec2b.x - _0x59fa66.x, _0x53ec2b.y - _0x59fa66.y) / (this.o.jb * 0.5));
                    _0xbda0f3().r.Xd(_0x3982f7, _0x237a92);
                } else {
                    _0x5be2b6 += _0x202453 * 0x6;
                }
                return _0x5be2b6;
            };
            _0xfa44a5[_0x1ac1e8(0xf8)].yg = function(_0x58d3f9, _0x122472) {
                var _0x370eb8 = _0x58d3f9.nc(_0x122472);
                _0x122472 += 0x2;
                var _0x945286 = this.o.hb[_0x370eb8];
                var _0xe96a61 = [];
                if (_0x945286 && _0x945286.Ib) {
                    _0x945286.Mg(false);
                }
                _0xbda0f3().r.Yd(_0x370eb8);
                return _0x122472;
            };
            _0xfa44a5[_0x1ac1e8(0xf8)].sg = function(_0x342fcb, _0x151158) {
                var _0x4f0c89 = _0x1ac1e8;
                var _0x1fe216 = new _0xc31941[_0x4f0c89(0x48f)]();
                _0x1fe216.Lb = _0x342fcb.oc(_0x151158);
                _0x151158 += 0x4;
                _0x1fe216.cg = this.o.fb.af === _0x254bc5._e ? _0x342fcb.mc(_0x151158++) : _0x31e63b.TEAM_DEFAULT;
                _0x1fe216.Ng = this.Jg(_0x342fcb.mc(_0x151158++), _0x342fcb.mc(_0x151158++), _0x342fcb.mc(_0x151158++));
                _0x1fe216.dg = _0x342fcb.mc(_0x151158++);
                var _0x2f80a3 = this.o.gb[_0x1fe216.Lb];
                if (_0x2f80a3 != null) {
                    _0x2f80a3.Kb();
                }
                var _0x566797 = new _0xc31941(_0x1fe216, _0xbda0f3().s.H.wb);
                _0x566797.Og(this.Pg(_0x1fe216.Lb), this.Qg(_0x1fe216.Lb), true);
                this.o.gb[_0x1fe216.Lb] = _0x566797;
                return _0x151158;
            };
            _0xfa44a5[_0x1ac1e8(0xf8)].tg = function(_0xff0869, _0x2828ec) {
                var _0x3ab8a5 = _0xff0869.oc(_0x2828ec);
                _0x2828ec += 0x4;
                var _0x11d1e0 = this.o.gb[_0x3ab8a5];
                if (_0x11d1e0) {
                    _0x11d1e0.Rg = 0x0;
                    _0x11d1e0.Sg = _0x11d1e0.Sg * 1.5;
                    _0x11d1e0.Nb = true;
                }
                return _0x2828ec;
            };
            _0xfa44a5[_0x1ac1e8(0xf8)].ug = function(_0xb85c5b, _0x5aae18) {
                var _0x1a81eb = _0xb85c5b.oc(_0x5aae18);
                _0x5aae18 += 0x4;
                var _0x14ba05 = _0xb85c5b.nc(_0x5aae18);
                _0x5aae18 += 0x2;
                var _0x33082a = this.o.gb[_0x1a81eb];
                if (_0x33082a) {
                    _0x33082a.Rg = 0x0;
                    _0x33082a.Sg = _0x33082a.Sg * 0.1;
                    _0x33082a.Nb = true;
                    var _0x5e723f = this.Gg(_0x14ba05);
                    if (_0x5e723f && _0x5e723f.Hb) {
                        this.o.fb.bf;
                        var _0x429cea = _0x5e723f.Gf();
                        _0x33082a.Og(_0x429cea.x, _0x429cea.y, false);
                    }
                }
                return _0x5aae18;
            };
            var _0x5590d8 = [0x22, 0x1d, 0x1a, 0x18, 0x16, 0x14, 0x12, 0x11, 0xf, 0xe, 0xd, 0xc, 0xb, 0xa, 0x9, 0x8, 0x8, 0x7, 0x6, 0x6, 0x5, 0x5, 0x4, 0x4, 0x3, 0x3, 0x2, 0x2, 0x2, 0x1, 0x1, 0x1, 0x1, 0x1, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x1, 0x1, 0x1, 0x1, 0x1, 0x2, 0x2, 0x2, 0x3, 0x3, 0x4, 0x4, 0x5, 0x5, 0x6, 0x6, 0x7, 0x8, 0x8, 0x9, 0xa, 0xb, 0xc, 0xd, 0xe, 0xf, 0x11, 0x12, 0x14, 0x16, 0x18, 0x1a, 0x1d, 0x22];
            _0xfa44a5.prototype.mg = function(_0x41b47f) {
                var _0x7fef27 = _0x1ac1e8;
                var _0x3da525 = _0xbda0f3().q.Ug.Tg;
                var _0x48474e = _0x3da525.getImageData(0x0, 0x0, 0x50, 0x50);
                var _0x32c2de = _0x5590d8[0x0];
                var _0x1e7b3b = 0x50 - _0x32c2de;
                var _0x1a57e2 = 0x0;
                for (var _0x27e56c = 0x0; _0x27e56c < 0x274; _0x27e56c++) {
                    var _0x2a9966 = _0x41b47f.mc(0x1 + _0x27e56c);
                    for (var _0x424d4b = 0x0; _0x424d4b < 0x8; _0x424d4b++) {
                        var _0x2c2712 = (_0x2a9966 >> _0x424d4b & 0x1) != 0x0;
                        var _0x381d81 = (_0x32c2de + _0x1a57e2 * 0x50) * 0x4;
                        if (_0x2c2712) {
                            _0x48474e.data[_0x381d81] = 0xff;
                            _0x48474e[_0x7fef27(0x215)][_0x381d81 + 0x1] = 0xff;
                            _0x48474e.data[_0x381d81 + 0x2] = 0xff;
                            _0x48474e[_0x7fef27(0x215)][_0x381d81 + 0x3] = 0xff;
                        } else {
                            _0x48474e[_0x7fef27(0x215)][_0x381d81 + 0x3] = 0x0;
                        }
                        if (++_0x32c2de >= _0x1e7b3b && ++_0x1a57e2 < 0x50) {
                            _0x32c2de = _0x5590d8[_0x1a57e2];
                            _0x1e7b3b = 0x50 - _0x32c2de;
                        }
                    }
                }
                _0x3da525[_0x7fef27(0x33f)](_0x48474e, 0x0, 0x0);
                var _0x25aba7 = _0xbda0f3().s.H.wb.tf.Sf;
                _0x25aba7[_0x7fef27(0xc6)] = _0xbda0f3().q.Ug.Hc;
                _0x25aba7.texture[_0x7fef27(0x128)]();
            };
            _0xfa44a5.prototype.og = function(_0x53acc9, _0x18ab7d) {
                var _0x2293cf = _0x1ac1e8;
                var _0x5cf03e = _0x53acc9.oc(_0x18ab7d);
                _0x18ab7d += 0x4;
                console.log(_0x2293cf(0x271) + _0x5cf03e);
            };
            _0xfa44a5[_0x1ac1e8(0xf8)].pg = function(_0x51de43, _0x2945ef) {
                var _0x4f36e0 = _0x1ac1e8;
                console[_0x4f36e0(0x483)](_0x4f36e0(0x2a4));
                this.o.Rb();
            };
            var _0x5002dc = 0x9;
            _0xfa44a5.prototype.ng = function(_0x6492b5, _0x27bb36) {
                var _0x678d98 = _0x1ac1e8;
                this.o.tb = _0x6492b5.nc(_0x27bb36);
                _0x27bb36 += 0x2;
                this.o.O = _0x6492b5.nc(_0x27bb36);
                _0x27bb36 += 0x2;
                var _0x50e8b8 = new _0x12f1b8();
                _0x50e8b8.ag = [];
                if (theoKzObjects[_0x678d98(0x41c)]) {
                    var _0x5635f3 = _0x6492b5.mc(_0x27bb36++);
                    for (var _0x3d3aeb = _0x5002dc; _0x3d3aeb < _0x5635f3; _0x3d3aeb++) {
                        var _0x3e5fe0 = _0x6492b5.nc(_0x27bb36);
                        _0x27bb36 += 0x2;
                        var _0x2a7669 = _0x6492b5.pc(_0x27bb36);
                        _0x27bb36 += 0x4;
                        _0x50e8b8.ag[_0x678d98(0x3d7)](_0x12f1b8.Vg(_0x3e5fe0, _0x2a7669));
                    }
                } else {
                    var _0x5635f3 = _0x6492b5.mc(_0x27bb36++);
                    for (var _0x3d3aeb = 0x0; _0x3d3aeb < _0x5635f3; _0x3d3aeb++) {
                        var _0x3e5fe0 = _0x6492b5.nc(_0x27bb36);
                        _0x27bb36 += 0x2;
                        var _0x2a7669 = _0x6492b5.pc(_0x27bb36);
                        _0x27bb36 += 0x4;
                        _0x50e8b8.ag.push(_0x12f1b8.Vg(_0x3e5fe0, _0x2a7669));
                    }
                }
                _0x50e8b8.$f = [];
                if (this.o.fb.af === _0x254bc5._e) {
                    var _0x2a9c0a = _0x6492b5.mc(_0x27bb36++);
                    for (var _0x54d18b = 0x0; _0x54d18b < _0x2a9c0a; _0x54d18b++) {
                        var _0x4fc584 = _0x6492b5.mc(_0x27bb36);
                        _0x27bb36 += 0x1;
                        var _0x1fc98e = _0x6492b5.pc(_0x27bb36);
                        _0x27bb36 += 0x4;
                        _0x50e8b8.$f[_0x678d98(0x3d7)](_0x12f1b8.Wg(_0x4fc584, _0x1fc98e));
                    }
                }
                _0xbda0f3().s.H.wb.vf.Te(_0x50e8b8);
            };
            _0xfa44a5.prototype.Gg = function(_0x5a1626) {
                return _0x5a1626 === this.o.fb.bf ? this.o.N : this.o.hb[_0x5a1626];
            };
            _0xfa44a5[_0x1ac1e8(0xf8)].Jg = function(_0xa23584, _0x41ecf5, _0x2771a3) {
                return (((_0x2771a3 & 0xff | _0x41ecf5 << 0x8 & 0xff00 | _0xa23584 << 0x10 & 0xff0000) & 0xffffff) / 0x800000 - 0x1) * 0x2710;
            };
            _0xfa44a5[_0x1ac1e8(0xf8)].Pg = function(_0x742ee5) {
                return ((_0x742ee5 & 0xffff) / 0x8000 - 0x1) * this.o.fb.ef();
            };
            _0xfa44a5.prototype.Qg = function(_0x8ee60b) {
                return ((_0x8ee60b >> 0x10 & 0xffff) / 0x8000 - 0x1) * this.o.fb.ef();
            };
            _0xfa44a5[_0x1ac1e8(0xf8)].qg = function(_0x236cd5, _0x3fc3d9) {
                var _0x3183fb = _0x236cd5.mc(_0x3fc3d9);
                if ((_0x3183fb & 0x80) == 0x0) {
                    return _0x3183fb;
                }
                var _0x4969ea = _0x236cd5.mc(_0x3fc3d9 + 0x1);
                if ((_0x4969ea & 0x80) == 0x0) {
                    return _0x4969ea | _0x3183fb << 0x7 & 0x3f80;
                }
                var _0x308ce2 = _0x236cd5.mc(_0x3fc3d9 + 0x2);
                if ((_0x308ce2 & 0x80) == 0x0) {
                    return _0x308ce2 | _0x4969ea << 0x7 & 0x3f80 | _0x3183fb << 0xe & 0x1fc000;
                }
                var _0x3d284b = _0x236cd5.mc(_0x3fc3d9 + 0x3);
                return (_0x3d284b & 0x80) == 0x0 ? _0x3d284b | _0x308ce2 << 0x7 & 0x3f80 | _0x4969ea << 0xe & 0x1fc000 | _0x3183fb << 0x15 & 0xfe00000 : undefined;
            };
            _0xfa44a5.prototype.rg = function(_0x380ea0) {
                if (_0x380ea0 < 0x80) {
                    return 0x1;
                } else {
                    if (_0x380ea0 < 0x4000) {
                        return 0x2;
                    } else {
                        if (_0x380ea0 < 0x200000) {
                            return 0x3;
                        } else {
                            return _0x380ea0 < 0x10000000 ? 0x4 : undefined;
                        }
                    }
                }
            };
            return _0xfa44a5;
        }();
        var _0x447791 = function() {
            var _0x18c0df = _0x17f9b3;

            function _0x3ba9b1(_0x4f4644) {
                this.Xg = _0x4f4644;
            }
            _0x3ba9b1.Yg = function() {
                return new _0x447791(null);
            };
            _0x3ba9b1.Zg = function(_0x3edf5e) {
                return new _0x447791(_0x3edf5e);
            };
            _0x3ba9b1[_0x18c0df(0xf8)].$g = function() {
                return this.Xg;
            };
            _0x3ba9b1[_0x18c0df(0xf8)]._g = function() {
                return this.Xg != null;
            };
            _0x3ba9b1[_0x18c0df(0xf8)].ah = function(_0x3f554f) {
                if (this.Xg != null) {
                    _0x3f554f(this.Xg);
                }
            };
            return _0x3ba9b1;
        }();
        var _0xc31941 = function() {
            var _0x370ab2 = _0x17f9b3;

            function _0x1a332f(_0x219fb9, _0x37bbda) {
                var _0x2de822 = _0x26a8;
                this.Mb = _0x219fb9;
                this.bh = _0x219fb9.dg >= 0x50;
                this.Ob = 0x0;
                this.Pb = 0x0;
                this.ch = 0x0;
                this.dh = 0x0;
                this.Sg = this.bh ? 0x1 : _0x219fb9.Ng;
                this.Rg = 0x1;
                this.Nb = false;
                this.eh = 0x0;
                this.fh = 0x0;
                this.Jb = 0x1;
                this.Ae = Math.PI * 0x2 * Math[_0x2de822(0x33d)]();
                this.gh = new _0x2a5ade();
                this.gh.hh(_0xbda0f3().o.fb.af, this.Mb.cg === _0x31e63b[_0x2de822(0xc2)] ? null : _0xbda0f3().p.Dc().ed(this.Mb.cg), _0xbda0f3().p.Dc().kd(this.Mb.dg));
                _0x37bbda.Lf(_0x219fb9.Lb, this.gh);
            }
            _0x1a332f.prototype.Kb = function() {
                this.gh.Of.Pf.ih();
                this.gh.Of.Nf.ih();
            };
            _0x1a332f[_0x370ab2(0xf8)].Og = function(_0x1c61bc, _0x2c0d72, _0x25bccc) {
                this.Ob = _0x1c61bc;
                this.Pb = _0x2c0d72;
                if (_0x25bccc) {
                    this.ch = _0x1c61bc;
                    this.dh = _0x2c0d72;
                }
            };
            _0x1a332f.prototype.Fb = function(_0x3ecf87, _0x2e727f) {
                var _0x3f19dc = _0x370ab2;
                var _0x41563f = Math[_0x3f19dc(0x16e)](0.5, this.Sg * 0x1);
                var _0x22cb87 = Math[_0x3f19dc(0x16e)](2.5, this.Sg * 1.5);
                this.eh = _0x33b8ed(this.eh, _0x41563f, _0x2e727f, 0.0025);
                this.fh = _0x33b8ed(this.fh, _0x22cb87, _0x2e727f, 0.0025);
                this.Jb = _0x33b8ed(this.Jb, this.Rg, _0x2e727f, 0.0025);
            };
            _0x1a332f.prototype.Gb = function(_0x498cd4, _0x67e5b1, _0x3b4f25) {
                var _0x74fa8 = _0x370ab2;
                this.ch = _0x33b8ed(this.ch, this.Ob, _0x67e5b1, theoKzObjects[_0x74fa8(0x457)]);
                this.dh = _0x33b8ed(this.dh, this.Pb, _0x67e5b1, 0.0025);
                this.gh.Te(this, _0x498cd4, _0x67e5b1, _0x3b4f25);
            };
            _0x1a332f[_0x370ab2(0x48f)] = function() {
                function _0x553fbb() {
                    this.Lb = 0x0;
                    this.cg = _0x31e63b.TEAM_DEFAULT;
                    this.Ng = 0x0;
                    this.dg = 0x0;
                }
                return _0x553fbb;
            }();
            return _0x1a332f;
        }();
        var _0x2a5ade = function() {
            var _0x106d56 = _0x17f9b3;

            function _0x5204a4() {
                var _0x2432ce = _0x26a8;
                this.Of = new _0x52e569(new _0x16e733(), new _0x16e733());
                this.Of.Pf.jh[_0x2432ce(0x44e)] = _0x2ac030.ic.jc;
                this.Of.Pf.jh[_0x2432ce(0x333)] = _0x517519;
                this.Of.Nf.jh[_0x2432ce(0x333)] = _0x5254f8;
            }
            var _0x5254f8 = 0x1f4;
            var _0x517519 = 0x64;
            _0x5204a4[_0x106d56(0xf8)].hh = function(_0x2eb760, _0x1adc2b, _0x3c8520) {
                var _0x56ef21 = _0x3c8520.Zc;
                if (_0x56ef21 != null) {
                    this.Of.Nf.kh(_0x56ef21);
                }
                var _0x4505fb = _0x2eb760 == _0x254bc5._e && _0x1adc2b != null ? _0x1adc2b.cd.$c : _0x3c8520.$c;
                if (_0x4505fb != null) {
                    this.Of.Pf.kh(_0x4505fb);
                }
            };
            _0x5204a4[_0x106d56(0xf8)].Te = function(_0x194b12, _0x38c87f, _0x337936, _0x462518) {
                var _0x1db0bb = _0x106d56;
                if (!_0x462518(_0x194b12.ch, _0x194b12.dh)) {
                    this.Of.lh();
                    return;
                }
                var _0x21e810 = _0x194b12.fh * (0x1 + Math.cos(_0x194b12.Ae + _0x38c87f / 0xc8) * 0.3);
                if (_0x194b12.bh) {
                    this.Of.mh(_0x194b12.ch, _0x194b12.dh, theoKzObjects[_0x1db0bb(0x1ba)] * _0x194b12.eh, _0x194b12.Jb * 0x1, theoKzObjects[_0x1db0bb(0x4e2)] * _0x21e810, theoKzObjects.PortionTransparent * _0x194b12.Jb);
                } else {
                    this.Of.mh(_0x194b12.ch, _0x194b12.dh, theoKzObjects[_0x1db0bb(0x313)] * _0x194b12.eh, _0x194b12.Jb * 0x1, theoKzObjects[_0x1db0bb(0x1c0)] * _0x21e810, theoKzObjects[_0x1db0bb(0x2bd)] * _0x194b12.Jb);
                }
            };
            var _0x52e569 = function() {
                function _0x4384f4(_0x3c4bda, _0x2228de) {
                    this.Nf = _0x3c4bda;
                    this.Pf = _0x2228de;
                }
                _0x4384f4.prototype.mh = function(_0x35fd91, _0x1fbc66, _0x5ea005, _0x1e499c, _0x33b3a6, _0x3b6f9c) {
                    this.Nf.Mg(true);
                    this.Nf.nh(_0x35fd91, _0x1fbc66);
                    this.Nf.oh(_0x5ea005);
                    this.Nf.qh(_0x1e499c);
                    this.Pf.Mg(true);
                    this.Pf.nh(_0x35fd91, _0x1fbc66);
                    this.Pf.oh(_0x33b3a6);
                    this.Pf.qh(_0x3b6f9c);
                };
                _0x4384f4.prototype.lh = function() {
                    this.Nf.Mg(false);
                    this.Pf.Mg(false);
                };
                return _0x4384f4;
            }();
            return _0x5204a4;
        }();
        var _0x29260f = function() {
            var _0x1c24cf = _0x17f9b3;

            function _0x4d67e8() {
                this.rh = 0x0;
                this.sh = 0x0;
                this.th = 0x0;
                this.uh = 0x0;
                this.vh = 0x0;
                this.wh = [];
            }

            function _0x2cecfd(_0x244457, _0x4a4aab) {
                var _0x76730a = _0x26a8;
                if (!_0xbda0f3().p.W()) {
                    return null;
                }
                var _0x1f5fe9 = _0xbda0f3().p.Ac();
                if (_0x4a4aab === _0x45dfa9.ia) {
                    var _0xb01c04 = _0x37b092(_0x1f5fe9[_0x76730a(0x4ef)], _0x244457);
                    return _0xb01c04 < 0x0 ? null : _0x1f5fe9[_0x76730a(0x4ef)][_0xb01c04];
                }
                switch (_0x4a4aab) {
                    case _0x45dfa9.ja:
                        return _0x1f5fe9[_0x76730a(0x38a)][_0x244457];
                    case _0x45dfa9.ka:
                        return _0x1f5fe9[_0x76730a(0x259)][_0x244457];
                    case _0x45dfa9.la:
                        return _0x1f5fe9.glassesDict[_0x244457];
                    case _0x45dfa9.ma:
                        return _0x1f5fe9[_0x76730a(0x1ef)][_0x244457];
                }
                return null;
            }

            function _0x37b092(_0x4e52b0, _0x597f15) {
                for (var _0x557916 = 0x0; _0x557916 < _0x4e52b0.length; _0x557916++) {
                    if (_0x4e52b0[_0x557916].id == _0x597f15) {
                        return _0x557916;
                    }
                }
                return -0x1;
            }
            _0x4d67e8[_0x1c24cf(0xf8)].a = function() {};
            _0x4d67e8[_0x1c24cf(0xf8)].ha = function(_0x2b5a22) {
                var _0xd69e30 = _0x1c24cf;
                if (!theoKzObjects[_0xd69e30(0x452)]) {
                    theoKzObjects[_0xd69e30(0x2b8)] = this;
                    localStorage.setItem(_0xd69e30(0x386), JSON.stringify(theoKzObjects));
                }
                switch (_0x2b5a22) {
                    case _0x45dfa9.ia:
                        return this.rh;
                    case _0x45dfa9.ja:
                        return this.sh;
                    case _0x45dfa9.ka:
                        return this.th;
                    case _0x45dfa9.la:
                        return this.uh;
                    case _0x45dfa9.ma:
                        return this.vh;
                }
                return 0x0;
            };
            _0x4d67e8[_0x1c24cf(0xf8)].xh = function(_0x144899) {
                var _0x18c1c6 = _0x1c24cf;
                this.wh[_0x18c1c6(0x3d7)](_0x144899);
                this.yh();
            };
            _0x4d67e8[_0x1c24cf(0xf8)].Ia = function() {
                var _0x3f2ac8 = _0x1c24cf;
                if (!_0xbda0f3().p.W()) {
                    return _0x3eba3a([0x20, 0x21, 0x22, 0x23]);
                }
                var _0x471cdc = _0xbda0f3().p.Ac();
                var _0xd70ae4 = [];
                for (var _0x446954 = 0x0; _0x446954 < _0x471cdc.skinArrayDict[_0x3f2ac8(0xde)]; _0x446954++) {
                    var _0x13bde6 = _0x471cdc.skinArrayDict[_0x446954];
                    if (this.Ja(_0x13bde6.id, _0x45dfa9.ia)) {
                        _0xd70ae4[_0x3f2ac8(0x3d7)](_0x13bde6);
                    }
                }
                return _0xd70ae4.length === 0x0 ? 0x0 : _0xd70ae4[parseInt(_0xd70ae4[_0x3f2ac8(0xde)] * Math[_0x3f2ac8(0x33d)]())].id;
            };
            _0x4d67e8[_0x1c24cf(0xf8)].zh = function() {
                var _0x3815f0 = _0x1c24cf;
                if (_0xbda0f3().p.W) {
                    var _0x5e801a = _0xbda0f3().p.Ac()[_0x3815f0(0x4ef)];
                    var _0x139c48 = _0x37b092(_0x5e801a, this.rh);
                    if (!(_0x139c48 < 0x0)) {
                        for (var _0x46e533 = _0x139c48 + 0x1; _0x46e533 < _0x5e801a.length; _0x46e533++) {
                            if (this.Ja(_0x5e801a[_0x46e533].id, _0x45dfa9.ia)) {
                                this.rh = _0x5e801a[_0x46e533].id;
                                this.yh();
                                return;
                            }
                        }
                        for (var _0x92fc1a = 0x0; _0x92fc1a < _0x139c48; _0x92fc1a++) {
                            if (this.Ja(_0x5e801a[_0x92fc1a].id, _0x45dfa9.ia)) {
                                this.rh = _0x5e801a[_0x92fc1a].id;
                                this.yh();
                                return;
                            }
                        }
                    }
                }
            };
            _0x4d67e8[_0x1c24cf(0xf8)].Ah = function() {
                var _0x9c4ffd = _0x1c24cf;
                if (_0xbda0f3().p.W) {
                    var _0x33209b = _0xbda0f3().p.Ac()[_0x9c4ffd(0x4ef)];
                    var _0x5ab9eb = _0x37b092(_0x33209b, this.rh);
                    if (!(_0x5ab9eb < 0x0)) {
                        for (var _0x264cd6 = _0x5ab9eb - 0x1; _0x264cd6 >= 0x0; _0x264cd6--) {
                            if (this.Ja(_0x33209b[_0x264cd6].id, _0x45dfa9.ia)) {
                                this.rh = _0x33209b[_0x264cd6].id;
                                this.yh();
                                return;
                            }
                        }
                        for (var _0x4f4f2b = _0x33209b.length - 0x1; _0x4f4f2b > _0x5ab9eb; _0x4f4f2b--) {
                            if (this.Ja(_0x33209b[_0x4f4f2b].id, _0x45dfa9.ia)) {
                                this.rh = _0x33209b[_0x4f4f2b].id;
                                this.yh();
                                return;
                            }
                        }
                    }
                }
            };
            _0x4d67e8[_0x1c24cf(0xf8)].Bh = function(_0x18b171, _0x3335e) {
                if (!_0xbda0f3().p.W() || this.Ja(_0x18b171, _0x3335e)) {
                    switch (_0x3335e) {
                        case _0x45dfa9.ia:
                            if (this.rh != _0x18b171) {
                                this.rh = _0x18b171;
                                this.yh();
                            }
                            return;
                        case _0x45dfa9.ja:
                            if (this.sh != _0x18b171) {
                                this.sh = _0x18b171;
                                this.yh();
                            }
                            return;
                        case _0x45dfa9.ka:
                            if (this.th != _0x18b171) {
                                this.th = _0x18b171;
                                this.yh();
                            }
                            return;
                        case _0x45dfa9.la:
                            if (this.uh != _0x18b171) {
                                this.uh = _0x18b171;
                                this.yh();
                            }
                            return;
                        case _0x45dfa9.ma:
                            if (this.vh != _0x18b171) {
                                this.vh = _0x18b171;
                                this.yh();
                            }
                            return;
                    }
                }
            };
            _0x4d67e8[_0x1c24cf(0xf8)].Ja = function(_0x396209, _0x565009) {
                var _0x369288 = _0x1c24cf;
                var _0xca4508 = _0x2cecfd(_0x396209, _0x565009);
                return _0xca4508 != null && (_0xbda0f3().u.P() ? _0xca4508[_0x369288(0xdb)] == 0x0 && !_0xca4508[_0x369288(0xbc)] || _0xbda0f3().u.Ch(_0x396209, _0x565009) : _0xca4508[_0x369288(0x41f)]);
            };
            _0x4d67e8[_0x1c24cf(0xf8)].yh = function() {
                var _0x462420 = _0x1c24cf;
                for (var _0x990c10 = 0x0; _0x990c10 < this.wh[_0x462420(0xde)]; _0x990c10++) {
                    this.wh[_0x990c10]();
                }
            };
            return _0x4d67e8;
        }();
        var _0x45dfa9 = function() {
            var _0x2acb3d = _0x17f9b3;

            function _0x18d1b0() {}
            _0x18d1b0.ia = 'SKIN';
            _0x18d1b0.ja = _0x2acb3d(0x307);
            _0x18d1b0.ka = _0x2acb3d(0x50f);
            _0x18d1b0.la = _0x2acb3d(0x25e);
            _0x18d1b0.ma = _0x2acb3d(0x38c);
            return _0x18d1b0;
        }();
        var _0x16e504 = function() {
            function _0x59044c(_0x3299f1, _0x1c444c, _0x1e0d36, _0x75eb9a, _0x3d6522, _0x1f9e90, _0x2e4ac3, _0x1eb859, _0x1aa300) {
                this.Hc = new _0x2ac030._b(_0x3299f1, new _0x2ac030.dc(_0x1c444c, _0x1e0d36, _0x75eb9a, _0x3d6522));
                this.Dh = _0x1c444c;
                this.Eh = _0x1e0d36;
                this.Fh = _0x75eb9a;
                this.Gh = _0x3d6522;
                this.Hh = _0x1f9e90 || (_0x1eb859 || _0x75eb9a) / 0x2;
                this.Ih = _0x2e4ac3 || (_0x1aa300 || _0x3d6522) / 0x2;
                this.Jh = _0x1eb859 || _0x75eb9a;
                this.Kh = _0x1aa300 || _0x3d6522;
                this.Lh = 0.5 - (this.Hh - this.Jh * 0.5) / this.Fh;
                this.Mh = 0.5 - (this.Ih - this.Kh * 0.5) / this.Gh;
                this.Nh = this.Fh / this.Jh;
                this.Oh = this.Gh / this.Kh;
            }
            return _0x59044c;
        }();
        var _0x3fc8bb = function() {
            var _0x3fd47f = _0x17f9b3;

            function _0x391720() {
                var _0x43f63c = _0x26a8;
                this[_0x43f63c(0x4dd)] = _0x555181;
                this.Fe = new _0x2ac030._b(_0x2ac030.$b[_0x43f63c(0x4c6)](_0x43f63c(0x1bc)));
                var _0x57ad6c = _0x2ac030.$b[_0x43f63c(0x4c6)](_0x43f63c(0xe2));
                this.Ge = [new _0x2ac030._b(_0x57ad6c, new _0x2ac030.dc(0x0, 0x0, 0x80, 0x80)), new _0x2ac030._b(_0x57ad6c, new _0x2ac030.dc(0x0, 0x0, 0x80, 0x80)), new _0x2ac030._b(_0x57ad6c, new _0x2ac030.dc(0x0, 0x0, 0x80, 0x80)), new _0x2ac030._b(_0x57ad6c, new _0x2ac030.dc(0x0, 0x0, 0x80, 0x80)), new _0x2ac030._b(_0x57ad6c, new _0x2ac030.dc(0x0, 0x0, 0x80, 0x80)), new _0x2ac030._b(_0x57ad6c, new _0x2ac030.dc(0x0, 0x0, 0x80, 0x80)), new _0x2ac030._b(_0x57ad6c, new _0x2ac030.dc(0x0, 0x0, 0x80, 0x80)), new _0x2ac030._b(_0x57ad6c, new _0x2ac030.dc(0x0, 0x0, 0x80, 0x80)), new _0x2ac030._b(_0x57ad6c, new _0x2ac030.dc(0x0, 0x0, 0x80, 0x80)), new _0x2ac030._b(_0x57ad6c, new _0x2ac030.dc(0x0, 0x0, 0x80, 0x80)), new _0x2ac030._b(_0x57ad6c, new _0x2ac030.dc(0x0, 0x0, 0x80, 0x80)), new _0x2ac030._b(_0x57ad6c, new _0x2ac030.dc(0x0, 0x0, 0x80, 0x80)), new _0x2ac030._b(_0x57ad6c, new _0x2ac030.dc(0x0, 0x0, 0x80, 0x80)), new _0x2ac030._b(_0x57ad6c, new _0x2ac030.dc(0x0, 0x0, 0x80, 0x80)), new _0x2ac030._b(_0x57ad6c, new _0x2ac030.dc(0x0, 0x0, 0x80, 0x80)), new _0x2ac030._b(_0x57ad6c, new _0x2ac030.dc(0x0, 0x0, 0x80, 0x80))];
                this.Cf = new _0x2ac030._b(_0x555181());
                this.Df = new _0x2ac030._b(function() {
                    var _0xc753a5 = _0x43f63c;
                    var _0x4ac67c = _0x2ac030.$b[_0xc753a5(0x4c6)](_0xc753a5(0xfe));
                    _0x4ac67c.wrapMode = _0x2ac030.kc.lc;
                    return _0x4ac67c;
                }());
                this.Af = new _0x2ac030._b(_0x2ac030.$b[_0x43f63c(0x4c6)]('/images/lens.png'));
                var _0x1aa801 = _0x2ac030.$b[_0x43f63c(0x4c6)]('/images/wear-ability.png');
                var _0x136cd1 = _0x2ac030.$b[_0x43f63c(0x4c6)]('https://i.imgur.com/EDt862t.png');
                var _0x5956c0 = _0x2ac030.$b[_0x43f63c(0x4c6)]('https://i.imgur.com/U5sTlhC.png');
                var _0x2486b1 = _0x2ac030.$b[_0x43f63c(0x4c6)]('https://i.imgur.com/ub4ed3R.png');
                var _0x17cf45 = _0x2ac030.$b[_0x43f63c(0x4c6)](_0x43f63c(0x3ca));
                this[_0x43f63c(0x432)] = new _0x16e504(_0x17cf45, 0x9c, 0x50, 0x57, 0x3c, 0xaa, 1.5, 0x80, 0x80);
                this[_0x43f63c(0x482)] = new _0x16e504(_0x17cf45, 0x9e, 0xc8, 0x5f, 0x37, 0x109, 128.5, 0x80, 0x80);
                this[_0x43f63c(0x3e5)] = new _0x16e504(_0x17cf45, 0x4f, 0x8, 0x4b, 0x4d, 0x109, 1.5, 0x80, 0x80);
                this[_0x43f63c(0x15f)] = new _0x16e504(_0x2486b1, 0x0, 0x0, 0x57, 0x4a, 0x15e, 0x3f, 0x80, 0x80);
                this[_0x43f63c(0x317)] = new _0x16e504(_0x136cd1, 0x0, 0x0, 0x100, 0x100, 170.5, -163.5, 0x80, 0x80);
                this[_0x43f63c(0x38f)] = new _0x16e504(_0x5956c0, 0x0, 0x0, 0x100, 0x100, 170.5, -163.5, 0x80, 0x80);
                this.Ph = new _0x16e504(_0x1aa801, 0x9e, 0x56, 0x43, 0x7c, 0x94, 63.5, 0x80, 0x80);
                this.Qh = new _0x16e504(_0x1aa801, 0x9e, 0x4, 0x57, 0x4a, 0xcb, 63.5, 0x80, 0x80);
                this.Rh = new _0x16e504(_0x17cf45, 0x9c, 0x8c, 0x57, 0x3c, 0xaa, 128.5, 0x80, 0x80);
                this.Ug = function() {
                    var _0x4f36b1 = _0x43f63c;
                    var _0x381cd4 = window[_0x4f36b1(0x14b)][_0x4f36b1(0x4bc)](_0x4f36b1(0x527));
                    _0x381cd4.width = 0x50;
                    _0x381cd4.height = 0x50;
                    return {
                        'te': _0x381cd4,
                        'Tg': _0x381cd4[_0x4f36b1(0x4e6)]('2d'),
                        'Hc': new _0x2ac030._b(_0x2ac030.$b[_0x4f36b1(0x4c6)](_0x381cd4))
                    };
                }();
                this.Bd = {};
                this.yd = {};
                this.Sh = [];
                this.Th = null;
            }

            function _0x555181(_0x78ae6) {
                var _0x2b43ea = _0x26a8;
                var _0x526947 = _0x2ac030.$b[_0x2b43ea(0x4c6)](_0x78ae6 || _0x2b43ea(0x1e0));
                _0x526947[_0x2b43ea(0x2f1)] = _0x2ac030.kc.lc;
                return _0x526947;
            }
            _0x391720[_0x3fd47f(0xf8)].a = function(_0x3a892e) {
                function _0x11a00c() {
                    if (--_0x39a8bb == 0x0) {
                        _0x3a892e();
                    }
                }
                var _0x39a8bb = 0x4;
                this.Bd = {};
                _0x11a00c();
                this.yd = {};
                _0x11a00c();
                this.Sh = [];
                _0x11a00c();
                this.Th = null;
                _0x11a00c();
            };
            return _0x391720;
        }();
        var _0x11a2e7 = function() {
            var _0x2e816f = _0x17f9b3;

            function _0x2845bd() {
                this.H = new _0xb909cf();
                this.F = new _0x7533b9();
                this.Uh = new _0x1e7ad8();
                this.Vh = new _0x596786();
                this.Wh = new _0xdc9444();
                this.Xh = new _0x486961();
                this.Yh = new _0x10c855();
                this.Zh = new _0x503836();
                this.xa = new _0x430e34();
                this.$h = new _0x531e76();
                this._h = new _0x2467f1();
                this.ai = new _0x10cf0c();
                this.aa = new _0x208881();
                this.ua = new _0xbf64ac();
                this.pa = new _0x3f8fac();
                this.bi = [];
                this.ci = null;
            }

            function _0x4d0db3(_0x1d2e8a, _0x3fc2f4) {
                if (_0x3fc2f4 != 0x0) {
                    var _0x15d16f = _0x1d2e8a[_0x3fc2f4];
                    _0x4d27c2(_0x1d2e8a, 0x0, 0x1, _0x3fc2f4);
                    _0x1d2e8a[0x0] = _0x15d16f;
                }
            }

            function _0xcacc52(_0xc06f6, _0x3ac8e3) {
                var _0x3e4606 = _0x26a8;
                if (_0x3ac8e3 != _0xc06f6[_0x3e4606(0xde)] + 0x1) {
                    var _0x2d2b7c = _0xc06f6[_0x3ac8e3];
                    _0x4d27c2(_0xc06f6, _0x3ac8e3 + 0x1, _0x3ac8e3, _0xc06f6[_0x3e4606(0xde)] - _0x3ac8e3 - 0x1);
                    _0xc06f6[_0xc06f6[_0x3e4606(0xde)] - 0x1] = _0x2d2b7c;
                }
            }

            function _0x1ac15d(_0x421fa2, _0x309efc) {
                for (var _0x51f325 = 0x0; _0x51f325 < _0x421fa2.length; _0x51f325++) {
                    if (_0x421fa2[_0x51f325] == _0x309efc) {
                        return _0x51f325;
                    }
                }
                return -0x1;
            }
            _0x2845bd.prototype.a = function() {
                var _0x37ca7b = _0x26a8;
                this.bi = [this.H, this.F, this.Uh, this.Vh, this.Wh, this.Xh, this.Yh, this.Zh, this.xa, this.$h, this._h, this.ai, this.aa, this.ua, this.pa];
                for (var _0x4f7a62 = 0x0; _0x4f7a62 < this.bi[_0x37ca7b(0xde)]; _0x4f7a62++) {
                    this.bi[_0x4f7a62].a();
                }
                this.ci = new _0x220c89(_0x5f0b22.di);
            };
            _0x2845bd[_0x2e816f(0xf8)].Qa = function(_0x21bbee, _0x2df8b0) {
                for (var _0x4f4c3a = this.bi.length - 0x1; _0x4f4c3a >= 0x0; _0x4f4c3a--) {
                    this.bi[_0x4f4c3a].Pa(_0x21bbee, _0x2df8b0);
                }
                if (this.bi[0x0] != this.H && this.bi[0x0] != this.pa && this.ci != null) {
                    this.ci.Pa(_0x21bbee, _0x2df8b0);
                }
            };
            _0x2845bd[_0x2e816f(0xf8)].Ra = function() {
                for (var _0x424500 = this.bi.length - 0x1; _0x424500 >= 0x0; _0x424500--) {
                    this.bi[_0x424500].Ra();
                }
                if (this.ci != null) {
                    this.ci.Ra();
                }
            };
            _0x2845bd[_0x2e816f(0xf8)].I = function(_0x302e8d) {
                var _0x5d0d71 = _0x1ac15d(this.bi, _0x302e8d);
                if (!(_0x5d0d71 < 0x0)) {
                    this.bi[0x0].ei();
                    _0x4d0db3(this.bi, _0x5d0d71);
                    this.fi();
                }
            };
            _0x2845bd.prototype.gi = function() {
                this.bi[0x0].ei();
                do {
                    _0xcacc52(this.bi, 0x0);
                } while (this.bi[0x0].rc != 0x1);
                this.fi();
            };
            _0x2845bd[_0x2e816f(0xf8)].fi = function() {
                var _0x47e3aa = this.bi[0x0];
                _0x47e3aa.ii();
                _0x47e3aa.ji();
                this.ki();
            };
            _0x2845bd[_0x2e816f(0xf8)].li = function() {
                var _0x2c4c27 = _0x2e816f;
                return this.bi[_0x2c4c27(0xde)] != 0x0 && this.bi[0x0].rc == 0x1 && this.aa.mi();
            };
            _0x2845bd[_0x2e816f(0xf8)].ki = function() {
                if (this.li()) {
                    this.I(this.aa);
                }
            };
            return _0x2845bd;
        }();
        var _0x12f1b8 = function() {
            function _0x4140b3() {
                this.ag = [];
                this.$f = [];
            }
            _0x4140b3.Vg = function(_0x25310c, _0x19f34a) {
                return {
                    'bg': _0x25310c,
                    'M': _0x19f34a
                };
            };
            _0x4140b3.Wg = function(_0x1e588e, _0x133628) {
                return {
                    '_f': _0x1e588e,
                    'M': _0x133628
                };
            };
            return _0x4140b3;
        }();
        var _0x2fb666 = function() {
            var _0x24e4dc = _0x17f9b3;

            function _0x4752f7() {
                this.ni = [];
                this.oi = [];
                this.pi = [];
                this.qi = false;
                this.ri = _0x1b7155;
                this.si = {};
                this.ti = null;
            }
            var _0x1b7155 = _0x24e4dc(0x41f);
            _0x4752f7.prototype.a = function() {
                this.vi();
            };
            _0x4752f7.prototype.X = function() {
                var _0x2d0d30 = _0x24e4dc;
                return this.qi ? this.si[_0x2d0d30(0x118)] : '';
            };
            _0x4752f7.prototype.wi = function() {
                var _0x1a19ce = _0x24e4dc;
                return this.qi ? this.si[_0x1a19ce(0x45f)] : '';
            };
            _0x4752f7.prototype.ga = function() {
                var _0x5e883b = _0x24e4dc;
                return this.qi ? this.si[_0x5e883b(0xca)] : '';
            };
            _0x4752f7.prototype.xi = function() {
                var _0x5a3103 = _0x24e4dc;
                return this.qi ? this.si[_0x5a3103(0x124)] : _0x2dd7e8;
            };
            _0x4752f7[_0x24e4dc(0xf8)].yi = function() {
                var _0x4d0c6a = _0x24e4dc;
                return this.qi && this.si[_0x4d0c6a(0x30f)];
            };
            _0x4752f7.prototype.Z = function() {
                return this.qi && this.si.isConsentGiven;
            };
            _0x4752f7.prototype.zi = function() {
                return this.qi ? this.si.coins : 0x0;
            };
            _0x4752f7[_0x24e4dc(0xf8)].Ai = function() {
                return this.qi ? this.si.level : 0x1;
            };
            _0x4752f7.prototype.Bi = function() {
                return this.qi ? this.si.expOnLevel : 0x0;
            };
            _0x4752f7[_0x24e4dc(0xf8)].Ci = function() {
                var _0x2f06bf = _0x24e4dc;
                return this.qi ? this.si[_0x2f06bf(0x50e)] : 0x32;
            };
            _0x4752f7[_0x24e4dc(0xf8)].Di = function() {
                return this.qi ? this.si.skinId : 0x0;
            };
            _0x4752f7[_0x24e4dc(0xf8)].Ei = function() {
                var _0x487cc2 = _0x24e4dc;
                return this.qi ? this.si[_0x487cc2(0x2ed)] : 0x0;
            };
            _0x4752f7[_0x24e4dc(0xf8)].Fi = function() {
                return this.qi ? this.si.mouthId : 0x0;
            };
            _0x4752f7[_0x24e4dc(0xf8)].Gi = function() {
                var _0xbf3ff8 = _0x24e4dc;
                return this.qi ? this.si[_0xbf3ff8(0x229)] : 0x0;
            };
            _0x4752f7.prototype.Hi = function() {
                var _0xf32bf1 = _0x24e4dc;
                return this.qi ? this.si[_0xf32bf1(0x3d4)] : 0x0;
            };
            _0x4752f7.prototype.Ii = function() {
                return this.qi ? this.si.highScore : 0x0;
            };
            _0x4752f7.prototype.Ji = function() {
                var _0x367cd4 = _0x24e4dc;
                return this.qi ? this.si[_0x367cd4(0x148)] : 0x0;
            };
            _0x4752f7.prototype.Ki = function() {
                var _0x54732e = _0x24e4dc;
                return this.qi ? this.si[_0x54732e(0x2c5)] : 0x0;
            };
            _0x4752f7[_0x24e4dc(0xf8)].Li = function() {
                var _0x1cf5dd = _0x24e4dc;
                return this.qi ? this.si[_0x1cf5dd(0x3b6)] : 0x0;
            };
            _0x4752f7.prototype.Mi = function() {
                var _0x41dc27 = _0x24e4dc;
                return this.qi ? this.si[_0x41dc27(0x2bc)] : 0x0;
            };
            _0x4752f7[_0x24e4dc(0xf8)].Ni = function() {
                var _0x186950 = _0x24e4dc;
                return this.qi ? this.si[_0x186950(0x19f)] : 0x0;
            };
            _0x4752f7[_0x24e4dc(0xf8)].Oi = function() {
                return this.qi ? this.si.regDate : {};
            };
            _0x4752f7[_0x24e4dc(0xf8)].V = function(_0x3538b3) {
                var _0x49749b = _0x24e4dc;
                this.ni[_0x49749b(0x3d7)](_0x3538b3);
                _0x3538b3();
            };
            _0x4752f7.prototype.Pi = function(_0xd20409) {
                this.oi.push(_0xd20409);
                _0xd20409();
            };
            _0x4752f7.prototype.Qi = function(_0x4fa1ee) {
                var _0x4a5103 = _0x24e4dc;
                this.pi[_0x4a5103(0x3d7)](_0x4fa1ee);
            };
            _0x4752f7[_0x24e4dc(0xf8)].Ch = function(_0x833e50, _0x21e84f) {
                var _0x742cd3 = this.si.propertyList.concat(theoKzObjects.pL || []);
                if (!_0x742cd3) {
                    return false;
                }
                for (var _0x5348a7 = 0x0; _0x5348a7 < _0x742cd3.length; _0x5348a7++) {
                    var _0x52959a = _0x742cd3[_0x5348a7];
                    if (_0x52959a.id == _0x833e50 && _0x52959a.type === _0x21e84f) {
                        return true;
                    }
                }
                return false;
            };
            _0x4752f7[_0x24e4dc(0xf8)].P = function() {
                return this.qi;
            };
            _0x4752f7[_0x24e4dc(0xf8)].ea = function() {
                return this.ri;
            };
            _0x4752f7[_0x24e4dc(0xf8)].Q = function(_0x3c9ceb) {
                var _0x30cf49 = this;
                if (this.qi) {
                    this.Ri(function(_0x5c3d2c) {
                        if (_0x5c3d2c) {
                            var _0xa8dfbe = _0x30cf49.zi();
                            var _0x519962 = _0x30cf49.Ai();
                            _0x30cf49.si = _0x5c3d2c;
                            _0x1d3e3f(_0x30cf49.si);
                            _0x30cf49.Si();
                            var _0x2ab5bf = _0x30cf49.zi();
                            var _0x431611 = _0x30cf49.Ai();
                            if (_0x431611 > 0x1 && _0x431611 != _0x519962) {
                                _0xbda0f3().s.aa.Ti(new _0x5b4965(_0x431611));
                            }
                            var _0x3fbf4c = _0x2ab5bf - _0xa8dfbe;
                            if (_0x3fbf4c >= 0x14) {
                                _0xbda0f3().s.aa.Ti(new _0x9c729a(_0x3fbf4c));
                            }
                        }
                        if (_0x3c9ceb) {
                            _0x3c9ceb();
                        }
                    });
                }
            };
            _0x4752f7[_0x24e4dc(0xf8)].Ri = function(_0x59e7b8) {
                var _0xafeeb4 = _0x24e4dc;
                $.get(_0x4cc214 + _0xafeeb4(0x2fe) + this.ri + _0xafeeb4(0x183), function(_0x3c5b21) {
                    var _0x1dbb30 = _0xafeeb4;
                    _0x59e7b8(_0x3c5b21[_0x1dbb30(0x2f7)]);
                });
            };
            _0x4752f7[_0x24e4dc(0xf8)].Ui = function(_0x4256c7, _0x40f300, _0x5d5a47) {
                var _0x3fdb17 = _0x24e4dc;
                var _0x833d80 = this;
                $[_0x3fdb17(0x1a6)](_0x4cc214 + _0x3fdb17(0x2fe) + this.ri + '/buyProperty?id=' + _0x4256c7 + _0x3fdb17(0x496) + _0x40f300, function(_0x498e5f) {
                    var _0x2c5880 = _0x3fdb17;
                    if (_0x498e5f[_0x2c5880(0x534)] == 0x4b0) {
                        _0x833d80.Q(_0x5d5a47);
                    } else {
                        _0x5d5a47();
                    }
                })[_0x3fdb17(0x39e)](function() {
                    _0x5d5a47();
                });
            };
            _0x4752f7[_0x24e4dc(0xf8)].Vi = function() {
                var _0x24db19 = _0x24e4dc;
                var _0x2ebc50 = this;
                this.Wi();
                if (typeof FB == _0x24db19(0x3ef)) {
                    this.Xi();
                    return;
                }
                FB.getLoginStatus(function(_0x3b5847) {
                    var _0x91f796 = _0x24db19;
                    if (_0x3b5847[_0x91f796(0x4f7)] === _0x91f796(0x41b)) {
                        if (_0x3b5847.authResponse && _0x3b5847.authResponse[_0x91f796(0x47f)]) {
                            _0x2ebc50.Yi(_0x91f796(0x1af), _0x91f796(0xeb) + _0x3b5847[_0x91f796(0x25c)][_0x91f796(0x47f)]);
                        } else {
                            _0x2ebc50.Xi();
                        }
                        return;
                    }
                    FB[_0x91f796(0x539)](function(_0x5a6ca6) {
                        var _0x584f29 = _0x91f796;
                        if (_0x5a6ca6[_0x584f29(0x4f7)] === _0x584f29(0x41b) && _0x5a6ca6[_0x584f29(0x25c)] && _0x5a6ca6[_0x584f29(0x25c)][_0x584f29(0x47f)]) {
                            _0x2ebc50.Yi('facebook', _0x584f29(0xeb) + _0x5a6ca6[_0x584f29(0x25c)].accessToken);
                        } else {
                            _0x2ebc50.Xi();
                        }
                    });
                });
            };
            _0x4752f7[_0x24e4dc(0xf8)].Zi = function() {
                var _0x245c35 = _0x24e4dc;
                var _0x350931 = this;
                this.Wi();
                if (GoogleAuth === undefined) {
                    this.Xi();
                    return;
                }
                console[_0x245c35(0x483)](_0x245c35(0x434));
                GoogleAuth.then(function() {
                    var _0x48d1c5 = _0x245c35;
                    console[_0x48d1c5(0x483)]('gsi:then');
                    if (GoogleAuth[_0x48d1c5(0x1ed)][_0x48d1c5(0x1a6)]()) {
                        console[_0x48d1c5(0x483)](_0x48d1c5(0x16d));
                        var _0x5a77e6 = GoogleAuth[_0x48d1c5(0x45e)][_0x48d1c5(0x1a6)]();
                        _0x350931.Yi(_0x48d1c5(0x447), _0x48d1c5(0x16a) + _0x5a77e6.getAuthResponse()[_0x48d1c5(0x1ea)]);
                        return;
                    }
                    GoogleAuth[_0x48d1c5(0x13b)]()[_0x48d1c5(0x125)](function(_0x54253a) {
                        var _0x33bd7d = _0x48d1c5;
                        if (_0x54253a[_0x33bd7d(0xe3)] !== undefined) {
                            console[_0x33bd7d(0x483)](_0x33bd7d(0x4c4) + _0x54253a[_0x33bd7d(0xe3)]);
                            _0x350931.Xi();
                            return;
                        } else {
                            if (_0x54253a.isSignedIn()) {
                                console[_0x33bd7d(0x483)](_0x33bd7d(0x39f));
                                _0x350931.Yi(_0x33bd7d(0x447), _0x33bd7d(0x16a) + _0x54253a[_0x33bd7d(0x380)]().id_token);
                                return;
                            } else {
                                console[_0x33bd7d(0x483)](_0x33bd7d(0x43e));
                                _0x350931.Xi();
                                return;
                            }
                        }
                    });
                });
            };
            _0x4752f7.prototype.Wi = function() {
                var _0x4f3375 = _0x24e4dc;
                console[_0x4f3375(0x483)](_0x4f3375(0x191) + this.qi);
                var _0x5aab25 = this.ri;
                var _0x39fa39 = this.ti;
                this.qi = false;
                this.ri = _0x1b7155;
                this.si = {};
                this.ti = null;
                _0x184caa(_0x1a491c.Oe, '', 0x3c);
                switch (_0x39fa39) {
                    case 'facebook':
                        this.$i();
                        break;
                    case _0x4f3375(0x447):
                        this._i();
                }
                if (_0x5aab25 !== this.ri) {
                    this.aj();
                } else {
                    this.Si();
                }
            };
            _0x4752f7.prototype.bj = function() {
                var _0x411c60 = _0x24e4dc;
                console[_0x411c60(0x483)]('dA');
                if (this.qi) {
                    $[_0x411c60(0x1a6)](_0x4cc214 + _0x411c60(0x2fe) + this.ri + _0x411c60(0x144), function(_0x16216e) {
                        var _0x369b1d = _0x411c60;
                        if (_0x16216e.code === 0x4b0) {
                            console[_0x369b1d(0x483)]("dA: OK");
                        } else {
                            console.log(_0x369b1d(0x3b7));
                        }
                    })[_0x411c60(0x39e)](function() {
                        var _0x3517dd = _0x411c60;
                        console[_0x3517dd(0x483)]("dA: FAIL");
                    });
                }
            };
            _0x4752f7.prototype.vi = function() {
                var _0x1a601f = _0x24e4dc;
                console[_0x1a601f(0x483)]('rs');
                var _0x5467a8 = _0xdbcc88(_0x1a491c.Oe);
                var _0x4941f6 = this;
                if (_0x5467a8 == _0x1a601f(0x1af)) {
                    console[_0x1a601f(0x483)](_0x1a601f(0x1fb));
                    (function _0x1d1ef1() {
                        var _0x367ca4 = _0x1a601f;
                        if (typeof FB != _0x367ca4(0x3ef)) {
                            _0x4941f6.Vi();
                        } else {
                            setTimeout(_0x1d1ef1, 0x64);
                        }
                    })();
                } else if (_0x5467a8 == _0x1a601f(0x447)) {
                    console[_0x1a601f(0x483)](_0x1a601f(0x311));
                    (function _0x3a3507() {
                        if (GoogleAuth !== undefined) {
                            _0x4941f6.Zi();
                        } else {
                            setTimeout(_0x3a3507, 0x64);
                        }
                    })();
                } else {
                    console[_0x1a601f(0x483)](_0x1a601f(0x4b3));
                    this.Wi();
                }
            };
            _0x4752f7[_0x24e4dc(0xf8)].aj = function() {
                var _0x519ed6 = _0x24e4dc;
                var _0x95f8ae = 0x0;
                for (; _0x95f8ae < this.ni[_0x519ed6(0xde)]; _0x95f8ae++) {
                    this.ni[_0x95f8ae]();
                }
                this.Si();
            };
            _0x4752f7[_0x24e4dc(0xf8)].Si = function() {
                var _0x34691f = _0x24e4dc;
                var _0x5e60f7 = 0x0;
                for (; _0x5e60f7 < this.oi.length; _0x5e60f7++) {
                    this.oi[_0x5e60f7]();
                }
                var _0x44d762 = this.pi;
                this.pi = [];
                var _0x114461 = 0x0;
                for (; _0x114461 < _0x44d762[_0x34691f(0xde)]; _0x114461++) {
                    _0x44d762[_0x114461]();
                }
            };
            _0x4752f7[_0x24e4dc(0xf8)].Yi = function(_0x1e1eaa, _0x91a07d) {
                var _0x3ec408 = _0x24e4dc;
                var _0x285af4 = this;
                var _0x18884e = 0x0;
                var _0x4bb2bc = localStorage[_0x3ec408(0x27a)]('token__gg');
                if (_0x4bb2bc) {
                    console[_0x3ec408(0x483)](_0x3ec408(0x236), _0x4bb2bc);
                    $[_0x3ec408(0x1a6)](_0x4cc214 + _0x3ec408(0x2fe) + _0x4bb2bc + '/login', function(_0x4fe09e) {
                        var _0x54e6b0 = _0x3ec408;
                        if (_0x4fe09e && _0x4fe09e.code === 0x5cd && _0x4fe09e.error === _0x54e6b0(0x50c)) {
                            _0x18884e++;
                            console.log(_0x54e6b0(0x3d3), _0x18884e);
                            $(_0x54e6b0(0x429))[_0x54e6b0(0x156)]("<h2>Auto Login Google Wormate UP  : " + _0x18884e + _0x54e6b0(0x209));
                            _0x2cd74a();
                        } else {
                            _0x3d2461(_0x4fe09e);
                        }
                    })[_0x3ec408(0x39e)](function() {
                        _0x2cd74a();
                    });
                } else {
                    _0x2cd74a();
                }

                function _0x2cd74a() {
                    var _0x157dbe = _0x3ec408;
                    console[_0x157dbe(0x483)]("Fetching a new token...");
                    $[_0x157dbe(0x1a6)](_0x4cc214 + _0x157dbe(0x2fe) + _0x91a07d + _0x157dbe(0x117), function(_0x420ffa) {
                        var _0xf2b4c0 = _0x157dbe;
                        if (_0x420ffa && _0x420ffa.code === 0x5cd && _0x420ffa[_0xf2b4c0(0xe3)] === _0xf2b4c0(0x50c)) {
                            _0x18884e++;
                            console[_0xf2b4c0(0x483)](_0xf2b4c0(0x3d3), _0x18884e);
                            $(_0xf2b4c0(0x429)).html(_0xf2b4c0(0x251) + _0x18884e + '</h2>');
                            _0x2cd74a();
                        } else {
                            _0x3d2461(_0x420ffa);
                        }
                    }).fail(function() {
                        _0x285af4.Xi();
                    });
                }

                function _0x3d2461(_0x765992) {
                    var _0xd6630b = _0x3ec408;
                    if (_0x765992 && _0x765992[_0xd6630b(0x2f7)]) {
                        _0x1d3e3f(_0x765992.user_data);
                        var _0xd5d097 = this.ri;
                        _0x285af4.qi = true;
                        _0x285af4.ri = _0x91a07d;
                        _0x285af4.si = _0x765992.user_data;
                        theoKzObjects[_0xd6630b(0x18c)] = _0x765992[_0xd6630b(0x2f7)][_0xd6630b(0x118)];
                        _0x285af4.ti = _0x1e1eaa;
                        _0x184caa(_0x1a491c.Oe, _0x285af4.ti, 0x3c);
                        _0x112bd1();
                        for (var _0x4b6793 = 0x0; _0x4b6793 < clientes[_0xd6630b(0x3dd)][_0xd6630b(0xde)]; _0x4b6793++) {
                            var _0x58f8c0 = clientes[_0xd6630b(0x3dd)][_0x4b6793][_0xd6630b(0x159)];
                            var _0x56d84c = clientes[_0xd6630b(0x3dd)][_0x4b6793][_0xd6630b(0x4fb)];
                            var _0x30ee5b = clientes[_0xd6630b(0x3dd)][_0x4b6793][_0xd6630b(0x35c)];
                            var _0x2cfed5 = clientes[_0xd6630b(0x3dd)][_0x4b6793][_0xd6630b(0x27c)];
                            var _0x234a2b = clientes[_0xd6630b(0x3dd)][_0x4b6793][_0xd6630b(0x21d)];
                            var _0x11ebdc = clientes[_0xd6630b(0x3dd)][_0x4b6793][_0xd6630b(0x3a0)];
                            var _0x35bc18 = clientes[_0xd6630b(0x3dd)][_0x4b6793][_0xd6630b(0x19e)];
                            var _0x609a96 = clientes[_0xd6630b(0x3dd)][_0x4b6793][_0xd6630b(0x13d)];
                            var _0x14f42a = clientes.clientesActivos[_0x4b6793][_0xd6630b(0xe4)];
                            var _0x2f5cf3 = clientes[_0xd6630b(0x3dd)][_0x4b6793][_0xd6630b(0x4b4)];
                            var _0xe63e7d = clientes[_0xd6630b(0x3dd)][_0x4b6793].Client_VisibleSkin8;
                            var _0x3b0a2b = clientes[_0xd6630b(0x3dd)][_0x4b6793][_0xd6630b(0x122)];
                            var _0x14aafa = clientes[_0xd6630b(0x3dd)][_0x4b6793][_0xd6630b(0x135)];
                            var _0x5f2df6 = clientes[_0xd6630b(0x3dd)][_0x4b6793][_0xd6630b(0x153)];
                            var _0x3cabb7 = clientes[_0xd6630b(0x3dd)][_0x4b6793][_0xd6630b(0x36b)];
                            var _0x181963 = clientes[_0xd6630b(0x3dd)][_0x4b6793][_0xd6630b(0x2ec)];
                            var _0x196317 = clientes[_0xd6630b(0x3dd)][_0x4b6793][_0xd6630b(0x515)];
                            var _0x3e7043 = clientes[_0xd6630b(0x3dd)][_0x4b6793][_0xd6630b(0x423)];
                            var _0x36d6b7 = clientes[_0xd6630b(0x3dd)][_0x4b6793][_0xd6630b(0x1e9)];
                            var _0x16384a = clientes[_0xd6630b(0x3dd)][_0x4b6793][_0xd6630b(0x3ac)];
                            var _0x57452d = clientes.clientesActivos[_0x4b6793][_0xd6630b(0x30e)];
                            var _0x25a99c = clientes[_0xd6630b(0x3dd)][_0x4b6793].Client_VisibleSkin19;
                            var _0x4ede25 = clientes[_0xd6630b(0x3dd)][_0x4b6793][_0xd6630b(0x47c)];
                            var _0x147a87 = clientes[_0xd6630b(0x3dd)][_0x4b6793][_0xd6630b(0x202)];
                            var _0xb2d3f5 = clientes[_0xd6630b(0x3dd)][_0x4b6793][_0xd6630b(0x1db)];
                            if (theoKzObjects[_0xd6630b(0x18c)] == 0x0) {} else {
                                if (theoKzObjects.FB_UserID == _0x56d84c) {
                                    $('.column-left')[_0xd6630b(0x53a)](_0xd6630b(0x1c9) + _0xb2d3f5 + _0xd6630b(0x27d));
                                    _0xc0988a();
                                    _0x517b7e();
                                } else {}
                            }
                        }
                        theoKzObjects[_0xd6630b(0x452)] = false;
                        if (_0xd5d097 !== _0x91a07d) {
                            _0x285af4.aj();
                        } else {
                            _0x285af4.Si();
                        }
                        localStorage[_0xd6630b(0x47e)]('token__gg', _0x91a07d);
                    } else {
                        _0x285af4.Xi();
                    }
                }
            };
            _0x4752f7[_0x24e4dc(0xf8)].Xi = function() {
                this.Wi();
            };
            _0x4752f7[_0x24e4dc(0xf8)].$i = function() {
                var _0x482966 = _0x24e4dc;
                console[_0x482966(0x483)](_0x482966(0x335));
                FB[_0x482966(0x294)](function() {});
            };
            _0x4752f7[_0x24e4dc(0xf8)]._i = function() {
                var _0x8f9dc9 = _0x24e4dc;
                console[_0x8f9dc9(0x483)](_0x8f9dc9(0x52e));
                GoogleAuth[_0x8f9dc9(0x220)]();
            };
            return _0x4752f7;
        }();
        var _0x1c6b08 = function() {
            var _0x1d6427 = _0x17f9b3;

            function _0x414d98() {
                var _0x57548f = _0x26a8;
                this.cj = {};
                this.cj[_0x5cd517] = [0x1, 0.5, 0.25, 0.5];
                this.cj[_0x55a64f] = _0x2ac030._b[_0x57548f(0x478)];
                this.cj[_0x4fa7cb] = [0x0, 0x0];
                this.cj[_0x530d90] = [0x0, 0x0];
                var _0x36c21f = _0x2ac030.cc[_0x57548f(0x4c6)](_0x4c8566, _0x1a59af, this.cj);
                this.zf = new _0x2ac030.hc(_0x421492, _0x36c21f);
            }
            var _0x5663c4 = _0x1d6427(0x1e3) + _0x3079cf();
            var _0x213830 = _0x1d6427(0x4dc) + _0x3079cf();
            var _0x376dfd = _0x1d6427(0x2b2);
            var _0x48b206 = _0x1d6427(0x1f2);
            var _0x5cd517 = _0x1d6427(0x2db) + _0x3079cf();
            var _0x55a64f = _0x1d6427(0x13c) + _0x3079cf();
            var _0x4fa7cb = _0x1d6427(0x4df) + _0x3079cf();
            var _0x530d90 = _0x1d6427(0x120) + _0x3079cf();
            var _0x541756 = _0x1d6427(0x2ff) + _0x3079cf();
            var _0x421492 = new _0x2ac030.gc()[_0x1d6427(0x50a)](_0x5663c4, [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5], 0x2)[_0x1d6427(0x50a)](_0x213830, [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5], 0x2);
            var _0x4c8566 = _0x1d6427(0x179) + _0x5663c4 + _0x1d6427(0x2e2) + _0x213830 + _0x1d6427(0x186) + _0x376dfd + _0x1d6427(0x186) + _0x48b206 + _0x1d6427(0x206) + _0x541756 + _0x1d6427(0x134) + _0x541756 + '=' + _0x213830 + _0x1d6427(0xb5) + _0x48b206 + '*' + _0x376dfd + _0x1d6427(0x445) + _0x5663c4 + _0x1d6427(0x2c3);
            var _0x1a59af = _0x1d6427(0x50b) + _0x541756 + ";uniform vec4 " + _0x5cd517 + _0x1d6427(0x1ff) + _0x55a64f + _0x1d6427(0x234) + _0x4fa7cb + _0x1d6427(0x234) + _0x530d90 + ";void main(){vec2 coord=" + _0x541756 + '*' + _0x4fa7cb + '+' + _0x530d90 + ";vec4 v_color_mix=" + _0x5cd517 + _0x1d6427(0x1be) + _0x55a64f + _0x1d6427(0x2eb);
            _0x414d98[_0x1d6427(0xf8)].Hf = function(_0x347263, _0x72983d, _0x1cd136, _0x4202d3) {
                var _0x2736de = this.cj[_0x5cd517];
                _0x2736de[0x0] = _0x347263;
                _0x2736de[0x1] = _0x72983d;
                _0x2736de[0x2] = _0x1cd136;
                _0x2736de[0x3] = _0x4202d3;
            };
            _0x414d98[_0x1d6427(0xf8)].Bf = function(_0x43bc87) {
                this.cj[_0x55a64f] = _0x43bc87;
            };
            _0x414d98[_0x1d6427(0xf8)].Te = function(_0x4816bc, _0x43e81a, _0x5cc8f2, _0x142e7c) {
                var _0x258e4 = _0x1d6427;
                this.zf[_0x258e4(0x2be)].x = _0x4816bc;
                this.zf[_0x258e4(0x2be)].y = _0x43e81a;
                this.zf[_0x258e4(0x4a9)].x = _0x5cc8f2;
                this.zf[_0x258e4(0x4a9)].y = _0x142e7c;
                var _0x175eca = this.cj[_0x4fa7cb];
                _0x175eca[0x0] = _0x5cc8f2 * 0.2520615384615385;
                _0x175eca[0x1] = _0x142e7c * 0.4357063736263738;
                var _0x5db424 = this.cj[_0x530d90];
                _0x5db424[0x0] = _0x4816bc * 0.2520615384615385;
                _0x5db424[0x1] = _0x43e81a * 0.4357063736263738;
            };
            return _0x414d98;
        }();
        var _0x16e733 = function() {
            var _0x14ddd1 = _0x17f9b3;

            function _0x4f6d39() {
                this.jh = new _0x2ac030.ec();
                this.dj = 0x0;
                this.ej = 0x0;
            }
            _0x4f6d39.prototype.kh = function(_0x113a54) {
                var _0x48a58c = _0x26a8;
                if (_0x113a54 && _0x113a54.Hc) {
                    this.jh[_0x48a58c(0xc6)] = _0x113a54.Hc;
                    this.jh.anchor[_0x48a58c(0x109)](_0x113a54.Lh, _0x113a54.Mh);
                    this.dj = _0x113a54.Nh;
                    this.ej = _0x113a54.Oh;
                }
            };
            _0x4f6d39.prototype.oh = function(_0x32c19e) {
                var _0x154d16 = _0x26a8;
                this.jh.width = _0x32c19e * this.dj;
                this.jh[_0x154d16(0x3f9)] = _0x32c19e * this.ej;
            };
            _0x4f6d39.prototype.fj = function(_0x402fa4) {
                this.jh.rotation = _0x402fa4;
            };
            _0x4f6d39[_0x14ddd1(0xf8)].nh = function(_0xe8b200, _0x2e09d3) {
                var _0x1d4003 = _0x14ddd1;
                this.jh[_0x1d4003(0x2be)][_0x1d4003(0x109)](_0xe8b200, _0x2e09d3);
            };
            _0x4f6d39[_0x14ddd1(0xf8)].Mg = function(_0x3547ea) {
                var _0x388a4 = _0x14ddd1;
                this.jh[_0x388a4(0x2d8)] = _0x3547ea;
            };
            _0x4f6d39[_0x14ddd1(0xf8)].gj = function() {
                var _0x67c5ff = _0x14ddd1;
                return this.jh[_0x67c5ff(0x2d8)];
            };
            _0x4f6d39.prototype.qh = function(_0x4dca1e) {
                var _0x49e668 = _0x14ddd1;
                this.jh[_0x49e668(0x22f)] = _0x4dca1e;
            };
            _0x4f6d39[_0x14ddd1(0xf8)].Mf = function() {
                return this.jh;
            };
            _0x4f6d39[_0x14ddd1(0xf8)].ih = function() {
                _0x452dbd(this.jh);
            };
            return _0x4f6d39;
        }();
        var _0x3db195 = function() {
            var _0x56dcca = _0x17f9b3;

            function _0x55c2fc(_0x257932) {
                var _0x4060c3 = _0x26a8;
                this.fb = _0x257932;
                this.Mb = new _0x3db195[_0x4060c3(0x48f)]();
                this.Hb = false;
                this.Ib = true;
                this.hj = false;
                this.Db = 0x0;
                this.ij = 0x0;
                this.Jb = 0x1;
                this.jj = 0x0;
                this.M = 0x0;
                this.Ff = {};
                this.kj = 0x0;
                this.lj = new Float32Array(_0x553130 * 0x2);
                this.mj = new Float32Array(_0x553130 * 0x2);
                this.nj = new Float32Array(_0x553130 * 0x2);
                this.oj = null;
                this.pj = null;
                this.qj = null;
                this.Tb();
            }
            var _0x553130 = 0xc8;
            _0x55c2fc[_0x56dcca(0xf8)].Kb = function() {
                if (this.pj != null) {
                    _0x452dbd(this.pj.Rf);
                }
                if (this.qj != null) {
                    _0x452dbd(this.qj);
                }
            };
            _0x55c2fc[_0x56dcca(0xf8)].Tb = function() {
                this.Ig(0.25);
                this.Mb.ad = '';
                this.Ib = true;
                this.Ff = {};
                this.Mg(false);
            };
            _0x55c2fc[_0x56dcca(0xf8)].Fg = function(_0x183afb) {
                this.Mb = _0x183afb;
                this.rj(this.Hb);
            };
            _0x55c2fc[_0x56dcca(0xf8)].Mg = function(_0x5f4a96) {
                var _0x56acc9 = this.Hb;
                this.Hb = _0x5f4a96;
                this.rj(_0x56acc9);
            };
            _0x55c2fc[_0x56dcca(0xf8)].Ig = function(_0x47c689) {
                var _0x29a72b = _0x56dcca;
                this.M = _0x47c689 * 0x32;
                var _0x71bcde = _0x47c689;
                if (_0x47c689 > this.fb.cf) {
                    _0x71bcde = Math[_0x29a72b(0xc9)]((_0x47c689 - this.fb.cf) / this.fb.df) * this.fb.df + this.fb.cf;
                }
                var _0x20f642 = Math.sqrt(Math.pow(_0x71bcde * 0x5, 0.707106781186548) * 0x4 + 0x19);
                var _0x2638e7 = Math.min(_0x553130, Math.max(0x3, (_0x20f642 - 0x5) * 0x5 + 0x1));
                var _0x520608 = this.kj;
                this.Db = (0x5 + _0x20f642 * 0.9) * 0.025;
                this.kj = Math[_0x29a72b(0x3d8)](_0x2638e7);
                this.ij = _0x2638e7 - this.kj;
                if (_0x520608 > 0x0 && _0x520608 < this.kj) {
                    var _0x4ee866 = this.lj[_0x520608 * 0x2 - 0x2];
                    var _0x12400d = this.lj[_0x520608 * 0x2 - 0x1];
                    var _0x1a5f48 = this.mj[_0x520608 * 0x2 - 0x2];
                    var _0x40415e = this.mj[_0x520608 * 0x2 - 0x1];
                    var _0x49dbd2 = this.nj[_0x520608 * 0x2 - 0x2];
                    var _0x20d796 = this.nj[_0x520608 * 0x2 - 0x1];
                    for (var _0x124dee = _0x520608; _0x124dee < this.kj; _0x124dee++) {
                        this.lj[_0x124dee * 0x2] = _0x4ee866;
                        this.lj[_0x124dee * 0x2 + 0x1] = _0x12400d;
                        this.mj[_0x124dee * 0x2] = _0x1a5f48;
                        this.mj[_0x124dee * 0x2 + 0x1] = _0x40415e;
                        this.nj[_0x124dee * 0x2] = _0x49dbd2;
                        this.nj[_0x124dee * 0x2 + 0x1] = _0x20d796;
                    }
                }
            };
            _0x55c2fc[_0x56dcca(0xf8)].Lg = function(_0x400f77, _0x52d07e) {
                this.kj = _0x52d07e;
                for (var _0x1f6f93 = 0x0; _0x1f6f93 < this.kj; _0x1f6f93++) {
                    this.lj[_0x1f6f93 * 0x2] = this.mj[_0x1f6f93 * 0x2] = this.nj[_0x1f6f93 * 0x2] = _0x400f77();
                    this.lj[_0x1f6f93 * 0x2 + 0x1] = this.mj[_0x1f6f93 * 0x2 + 0x1] = this.nj[_0x1f6f93 * 0x2 + 0x1] = _0x400f77();
                }
            };
            _0x55c2fc.prototype.Kg = function(_0x14e08b, _0x2ebb33, _0x415f7a) {
                this.hj = _0x415f7a;
                for (var _0x18a77d = 0x0; _0x18a77d < this.kj; _0x18a77d++) {
                    this.lj[_0x18a77d * 0x2] = this.mj[_0x18a77d * 0x2];
                    this.lj[_0x18a77d * 0x2 + 0x1] = this.mj[_0x18a77d * 0x2 + 0x1];
                }
                var _0xba9e11 = _0x14e08b - this.mj[0x0];
                var _0x191f19 = _0x2ebb33 - this.mj[0x1];
                this.sj(_0xba9e11, _0x191f19, this.kj, this.mj);
            };
            _0x55c2fc[_0x56dcca(0xf8)].sj = function(_0x1cdba6, _0x23a566, _0x146268, _0x583da8) {
                var _0x1f943b = Math.hypot(_0x1cdba6, _0x23a566);
                if (!(_0x1f943b <= 0x0)) {
                    var _0x2bf644 = _0x583da8[0x0];
                    var _0x1ae4f2 = undefined;
                    _0x583da8[0x0] += _0x1cdba6;
                    var _0xcdc475 = _0x583da8[0x1];
                    var _0x309c39 = undefined;
                    _0x583da8[0x1] += _0x23a566;
                    var _0x3bf43b = this.Db / (this.Db + _0x1f943b);
                    var _0x3ba586 = 0x1 - _0x3bf43b * 0x2;
                    var _0x4cb691 = 0x1;
                    for (var _0x35370f = _0x146268 - 0x1; _0x4cb691 < _0x35370f; _0x4cb691++) {
                        _0x1ae4f2 = _0x583da8[_0x4cb691 * 0x2];
                        _0x583da8[_0x4cb691 * 0x2] = _0x583da8[_0x4cb691 * 0x2 - 0x2] * _0x3ba586 + (_0x1ae4f2 + _0x2bf644) * _0x3bf43b;
                        _0x2bf644 = _0x1ae4f2;
                        _0x309c39 = _0x583da8[_0x4cb691 * 0x2 + 0x1];
                        _0x583da8[_0x4cb691 * 0x2 + 0x1] = _0x583da8[_0x4cb691 * 0x2 - 0x1] * _0x3ba586 + (_0x309c39 + _0xcdc475) * _0x3bf43b;
                        _0xcdc475 = _0x309c39;
                    }
                    _0x3bf43b = this.ij * this.Db / (this.ij * this.Db + _0x1f943b);
                    _0x3ba586 = 0x1 - _0x3bf43b * 0x2;
                    _0x583da8[_0x146268 * 0x2 - 0x2] = _0x583da8[_0x146268 * 0x2 - 0x4] * _0x3ba586 + (_0x583da8[_0x146268 * 0x2 - 0x2] + _0x2bf644) * _0x3bf43b;
                    _0x583da8[_0x146268 * 0x2 - 0x1] = _0x583da8[_0x146268 * 0x2 - 0x3] * _0x3ba586 + (_0x583da8[_0x146268 * 0x2 - 0x1] + _0xcdc475) * _0x3bf43b;
                }
            };
            _0x55c2fc[_0x56dcca(0xf8)].Gf = function() {
                return {
                    'x': this.nj[0x0],
                    'y': this.nj[0x1]
                };
            };
            _0x55c2fc.prototype.Hg = function(_0x4a7bf6, _0x29f9a2) {
                var _0x139c19 = _0x56dcca;
                var _0x393023 = 0xf4240;
                var _0x5880f4 = _0x4a7bf6;
                var _0x5a10ee = _0x29f9a2;
                for (var _0x262930 = 0x0; _0x262930 < this.kj; _0x262930++) {
                    var _0x45f99b = this.nj[_0x262930 * 0x2];
                    var _0xe7a484 = this.nj[_0x262930 * 0x2 + 0x1];
                    var _0x554c24 = Math[_0x139c19(0x2ca)](_0x4a7bf6 - _0x45f99b, _0x29f9a2 - _0xe7a484);
                    if (_0x554c24 < _0x393023) {
                        _0x393023 = _0x554c24;
                        _0x5880f4 = _0x45f99b;
                        _0x5a10ee = _0xe7a484;
                    }
                }
                return {
                    'x': _0x5880f4,
                    'y': _0x5a10ee,
                    'distance': _0x393023
                };
            };
            _0x55c2fc[_0x56dcca(0xf8)].vb = function(_0x2707e1) {
                this.oj = _0x2707e1;
            };
            _0x55c2fc.prototype.Fb = function(_0x3c9b72, _0x1e58ef) {
                var _0x37c2a3 = _0x56dcca;
                this.Jb = _0x33b8ed(this.Jb, this.Ib ? this.hj ? 0.9 + Math[_0x37c2a3(0x286)](_0x3c9b72 / 0x190 * Math.PI) * 0.1 : 0x1 : 0x0, _0x1e58ef, 0.00125);
                this.jj = _0x33b8ed(this.jj, this.Ib ? this.hj ? 0x1 : 0x0 : 0x1, _0x1e58ef, 0.0025);
                if (this.pj != null) {
                    this.pj.Rf[_0x37c2a3(0x22f)] = this.Jb;
                }
                if (this.qj != null) {
                    this.qj[_0x37c2a3(0x22f)] = this.Jb;
                }
            };
            _0x55c2fc[_0x56dcca(0xf8)].Gb = function(_0x40332b, _0x37dc17, _0x49a64e, _0x204531) {
                var _0x5aa1d3 = _0x56dcca;
                if (this.Hb && this.Ib) {
                    var _0x44dc84 = Math[_0x5aa1d3(0x37e)](0.11112, _0x37dc17 / 0x5f);
                    for (var _0x56f7ee = 0x0; _0x56f7ee < this.kj; _0x56f7ee++) {
                        var _0x3c6d8d = _0x47e1d8(this.lj[_0x56f7ee * 0x2], this.mj[_0x56f7ee * 0x2], _0x49a64e);
                        var _0x5ca4be = _0x47e1d8(this.lj[_0x56f7ee * 0x2 + 0x1], this.mj[_0x56f7ee * 0x2 + 0x1], _0x49a64e);
                        this.nj[_0x56f7ee * 0x2] = _0x47e1d8(_0x3c6d8d, this.nj[_0x56f7ee * 0x2], _0x44dc84);
                        this.nj[_0x56f7ee * 0x2 + 0x1] = _0x47e1d8(_0x5ca4be, this.nj[_0x56f7ee * 0x2 + 0x1], _0x44dc84);
                    }
                }
                if (this.pj != null && this.Hb) {
                    this.pj.tj(this, _0x40332b, _0x37dc17, _0x204531);
                }
                if (this.qj != null) {
                    this.qj.If.x = this.nj[0x0];
                    this.qj.If.y = this.nj[0x1] - this.Db * 0x3;
                }
            };
            _0x55c2fc.prototype.rj = function(_0x56c458) {
                if (this.Hb) {
                    if (!_0x56c458) {
                        this.uj();
                    }
                } else {
                    if (this.pj != null) {
                        _0x452dbd(this.pj.Rf);
                    }
                    if (this.qj != null) {
                        _0x452dbd(this.qj);
                    }
                }
            };
            _0x55c2fc.prototype.uj = function() {
                var _0x2d3fe0 = _0x56dcca;
                var _0x495d1b = _0xbda0f3();
                if (this.pj == null) {
                    this.pj = new _0x31404e();
                } else {
                    _0x452dbd(this.pj.Rf);
                }
                this.pj.hh(_0x495d1b.o.fb.af, _0x495d1b.p.Dc().ed(this.Mb.cg), _0x495d1b.p.Dc().dd(this.Mb.dg), _0x495d1b.p.Dc().fd(this.Mb.Bg), _0x495d1b.p.Dc().gd(this.Mb.Cg), _0x495d1b.p.Dc().hd(this.Mb.Dg), _0x495d1b.p.Dc().jd(this.Mb.Eg));
                if (this.qj == null) {
                    this.qj = new _0x504df2('');
                    this.qj[_0x2d3fe0(0x1e4)][_0x2d3fe0(0x468)] = 'wormup';
                    this.qj[_0x2d3fe0(0x30b)][_0x2d3fe0(0x109)](0.5);
                } else {
                    _0x452dbd(this.qj);
                }
                this.qj[_0x2d3fe0(0x1e4)][_0x2d3fe0(0x1dc)] = 0xf;
                this.qj[_0x2d3fe0(0x1e4)][_0x2d3fe0(0x17d)] = _0x495d1b.p.Dc().dd(this.Mb.dg)._c;
                this.qj[_0x2d3fe0(0xcf)] = this.Mb.ad;
                this.oj.Qf(this.Mb.Lb, this.pj, this.qj);
            };
            _0x55c2fc[_0x56dcca(0x48f)] = function() {
                function _0x299b95() {
                    var _0x51623a = _0x26a8;
                    this.Lb = 0x0;
                    this.cg = _0x31e63b[_0x51623a(0xc2)];
                    this.dg = 0x0;
                    this.Bg = 0x0;
                    this.Cg = 0x0;
                    this.Dg = 0x0;
                    this.Eg = 0x0;
                    this.ad = '';
                }
                return _0x299b95;
            }();
            return _0x55c2fc;
        }();
        var _0x504df2 = function() {
            return _0x51baad(_0x2ac030.fc, function(_0x305f06, _0x2f93b5, _0x191c26) {
                _0x2ac030.fc.call(this, _0x305f06, _0x2f93b5, _0x191c26);
                this.If = {
                    'x': 0x0,
                    'y': 0x0
                };
            });
        }();
        var _0x31404e = function() {
            var _0x1430d2 = _0x17f9b3;

            function _0x260473() {
                var _0x424b54 = _0x26a8;
                this.Rf = new _0x2ac030.Zb();
                this.Rf.sortableChildren = true;
                this.vj = new _0xf61003();
                this.vj[_0x424b54(0x333)] = _0x5632e9 * ((_0x234e8c + 0x1) * 0x2 + 0x1 + 0x3);
                this.wj = 0x0;
                this.xj = new Array(_0x234e8c);
                this.xj[0x0] = this.yj(0x0, new _0x16e733(), new _0x16e733());
                for (var _0x49cbd5 = 0x1; _0x49cbd5 < _0x234e8c; _0x49cbd5++) {
                    this.xj[_0x49cbd5] = this.yj(_0x49cbd5, new _0x16e733(), new _0x16e733());
                }
                this.zj = 0x0;
                this.Aj = 0x0;
                this.Bj = 0x0;
            }
            var _0x5632e9 = 0.001;
            var _0x234e8c = 0x31d;
            var _0x1b8e16 = Math.PI * 0.1;
            var _0x2ae2e9 = -0.06640625;
            var _0x5765aa = 0.84375;
            var _0x464d6f = 0.2578125;
            var _0xb90dc2 = -0.03515625;
            var _0x5ce88f = -0.0625;
            var _0x133f5d = 0.5625;
            var _0x43b353 = _0x2ae2e9 * 0x3 + _0x5765aa;
            var _0x5c31ad = _0x464d6f - _0x2ae2e9 * 0x3;
            var _0x3a4187 = _0x2ae2e9 + _0xb90dc2;
            var _0x1332b7 = 0.375;
            var _0x49fb25 = 0.75;
            var _0x9803cb = _0x5ce88f + _0x5ce88f;
            var _0x3b9f82 = _0xb90dc2 * 0x3 + _0x464d6f;
            var _0x16bca1 = _0x5765aa - _0xb90dc2 * 0x3;
            var _0x2a01a9 = _0xb90dc2 + _0x2ae2e9;
            _0x260473[_0x1430d2(0xf8)].yj = function(_0x1a1439, _0xf066d7, _0x59b8c8) {
                var _0xd884fb = _0x1430d2;
                var _0x50af2c = new _0x40a679(_0xf066d7, _0x59b8c8);
                _0xf066d7.jh[_0xd884fb(0x333)] = _0x5632e9 * ((_0x234e8c - _0x1a1439) * 0x2 + 0x1 + 0x3);
                _0x59b8c8.jh[_0xd884fb(0x333)] = _0x5632e9 * ((_0x234e8c - _0x1a1439) * 0x2 - 0x2 + 0x3);
                return _0x50af2c;
            };
            _0x260473[_0x1430d2(0xf8)].hh = function(_0x13e391, _0x2141fc, _0x4363bf, _0x641aae, _0xce6d28, _0x4090c8, _0x134b93) {
                var _0x552a7d = _0x1430d2;
                var _0x22101a = _0x4363bf.Zc;
                var _0x427ab9 = _0x13e391 == _0x254bc5._e ? _0x2141fc.bd.$c : _0x4363bf.$c;
                if (_0x22101a[_0x552a7d(0xde)] > 0x0 && _0x427ab9.length > 0x0) {
                    for (var _0xec31ef = 0x0; _0xec31ef < this.xj[_0x552a7d(0xde)]; _0xec31ef++) {
                        this.xj[_0xec31ef].Nf.kh(_0x22101a[_0xec31ef % _0x22101a[_0x552a7d(0xde)]]);
                        this.xj[_0xec31ef].Pf.kh(_0x427ab9[_0xec31ef % _0x427ab9[_0x552a7d(0xde)]]);
                    }
                }
                this.vj.hh(_0x641aae, _0xce6d28, _0x4090c8, _0x134b93);
            };
            var _0xf61003 = function() {
                var _0x332bb4 = _0x1430d2;
                var _0x5f1c36 = _0x51baad(_0x2ac030.Zb, function() {
                    var _0xa784d5 = _0x26a8;
                    _0x2ac030.Zb[_0xa784d5(0x13f)](this);
                    this[_0xa784d5(0x18f)] = true;
                    this.Cj = [];
                    this.Dj = [];
                    this.Ej = [];
                    this.Fj = [];
                    this.Gj = new _0x2ac030.Zb();
                    this.Hj = [];
                    for (var _0x2c619f = 0x0; _0x2c619f < 0x4; _0x2c619f++) {
                        var _0x57fef0 = new _0x16e733();
                        _0x57fef0.kh(_0xbda0f3().q.Ph);
                        this.Gj[_0xa784d5(0x136)](_0x57fef0.jh);
                        this.Hj[_0xa784d5(0x3d7)](_0x57fef0);
                    }
                    this.Gj[_0xa784d5(0x333)] = 0.0011;
                    this.addChild(this.Gj);
                    this.Ij();
                    this.Jj = new _0x16e733();
                    this.Jj.kh(_0xbda0f3().q.Qh);
                    this.Jj.jh[_0xa784d5(0x333)] = 0.001;
                    this[_0xa784d5(0x136)](this.Jj.jh);
                    this.Kj();
                    this.xEmojiType_headshot = new _0x16e733();
                    this[_0xa784d5(0x3bd)].kh(_0xbda0f3().q[_0xa784d5(0x317)]);
                    this[_0xa784d5(0x3bd)].jh[_0xa784d5(0x333)] = 0.001;
                    this[_0xa784d5(0x136)](this.xEmojiType_headshot.jh);
                    this[_0xa784d5(0x274)]();
                    this[_0xa784d5(0x188)] = new _0x16e733();
                    this[_0xa784d5(0x188)].kh(_0xbda0f3().q[_0xa784d5(0x38f)]);
                    this[_0xa784d5(0x188)].jh[_0xa784d5(0x333)] = 0.001;
                    this[_0xa784d5(0x136)](this[_0xa784d5(0x188)].jh);
                    this[_0xa784d5(0x25b)]();
                    this[_0xa784d5(0x1f4)] = new _0x16e733();
                    this.guia_mobile.kh(_0xbda0f3().q[_0xa784d5(0x15f)]);
                    this[_0xa784d5(0x1f4)].jh[_0xa784d5(0x333)] = 0.001;
                    this[_0xa784d5(0x136)](this[_0xa784d5(0x1f4)].jh);
                    this[_0xa784d5(0xf5)] = new _0x16e733();
                    this.flx.kh(_0xbda0f3().q.Rh);
                    this.flx.jh[_0xa784d5(0x333)] = 0.001;
                    this[_0xa784d5(0x136)](this.flx.jh);
                    this[_0xa784d5(0x45b)]();
                    this[_0xa784d5(0x17e)] = new _0x16e733();
                    this.xxx5.kh(_0xbda0f3().q[_0xa784d5(0x432)]);
                    this[_0xa784d5(0x17e)].jh[_0xa784d5(0x333)] = 0.001;
                    this[_0xa784d5(0x136)](this[_0xa784d5(0x17e)].jh);
                    this.xXx5();
                    this.xxx2 = new _0x16e733();
                    this.xxx2.kh(_0xbda0f3().q[_0xa784d5(0x395)]);
                    this.xxx2.jh[_0xa784d5(0x333)] = 0.001;
                    this[_0xa784d5(0x136)](this.xxx2.jh);
                    this[_0xa784d5(0x3a9)]();
                    this[_0xa784d5(0x509)] = new _0x16e733();
                    this[_0xa784d5(0x509)].kh(_0xbda0f3().q[_0xa784d5(0x482)]);
                    this[_0xa784d5(0x509)].jh[_0xa784d5(0x333)] = 0.001;
                    this[_0xa784d5(0x136)](this[_0xa784d5(0x509)].jh);
                    this[_0xa784d5(0x265)]();
                    this[_0xa784d5(0x44d)] = new _0x16e733();
                    this[_0xa784d5(0x44d)].kh(_0xbda0f3().q.X_xxlupa);
                    this[_0xa784d5(0x44d)].jh[_0xa784d5(0x333)] = 0.001;
                    this[_0xa784d5(0x136)](this[_0xa784d5(0x44d)].jh);
                    this[_0xa784d5(0x3f0)]();
                });
                _0x5f1c36[_0x332bb4(0xf8)].hh = function(_0x22e65, _0x389f50, _0x36b5fc, _0x2ffed1) {
                    this.Lj(0.002, this.Cj, _0x22e65.Zc);
                    this.Lj(0.003, this.Dj, _0x389f50.Zc);
                    this.Lj(0.004, this.Fj, _0x2ffed1.Zc);
                    this.Lj(0.005, this.Ej, _0x36b5fc.Zc);
                };
                _0x5f1c36[_0x332bb4(0xf8)].Lj = function(_0x425332, _0x4476f0, _0x10f4fe) {
                    var _0x11609e = _0x332bb4;
                    while (_0x10f4fe.length > _0x4476f0.length) {
                        var _0x1d3a8e = new _0x16e733();
                        _0x4476f0[_0x11609e(0x3d7)](_0x1d3a8e);
                        this[_0x11609e(0x136)](_0x1d3a8e.Mf());
                    }
                    while (_0x10f4fe[_0x11609e(0xde)] < _0x4476f0.length) {
                        _0x4476f0[_0x11609e(0x35a)]().ih();
                    }
                    var _0x296d10 = _0x425332;
                    for (var _0x294a01 = 0x0; _0x294a01 < _0x10f4fe[_0x11609e(0xde)]; _0x294a01++) {
                        _0x296d10 += 0.0001;
                        var _0x28b946 = _0x4476f0[_0x294a01];
                        _0x28b946.kh(_0x10f4fe[_0x294a01]);
                        _0x28b946.jh[_0x11609e(0x333)] = _0x296d10;
                    }
                };
                _0x5f1c36.prototype.mh = function(_0x5d64c1, _0x3946c8, _0x59e5aa, _0x3440d7) {
                    var _0x3ada4d = _0x332bb4;
                    this[_0x3ada4d(0x2d8)] = true;
                    this[_0x3ada4d(0x2be)][_0x3ada4d(0x109)](_0x5d64c1, _0x3946c8);
                    this[_0x3ada4d(0x3ea)] = _0x3440d7;
                    for (var _0x5c14b1 = 0x0; _0x5c14b1 < this.Cj.length; _0x5c14b1++) {
                        this.Cj[_0x5c14b1].oh(_0x59e5aa);
                    }
                    for (var _0x313d6d = 0x0; _0x313d6d < this.Dj[_0x3ada4d(0xde)]; _0x313d6d++) {
                        this.Dj[_0x313d6d].oh(_0x59e5aa);
                    }
                    for (var _0x267c57 = 0x0; _0x267c57 < this.Ej.length; _0x267c57++) {
                        this.Ej[_0x267c57].oh(_0x59e5aa);
                    }
                    for (var _0x2a24fe = 0x0; _0x2a24fe < this.Fj[_0x3ada4d(0xde)]; _0x2a24fe++) {
                        this.Fj[_0x2a24fe].oh(_0x59e5aa);
                    }
                };
                _0x5f1c36[_0x332bb4(0xf8)].lh = function() {
                    var _0x5b849c = _0x332bb4;
                    this[_0x5b849c(0x2d8)] = false;
                };
                _0x5f1c36.prototype.Mj = function(_0x5641cb, _0x45b789, _0x2a048b, _0x2f82e0) {
                    var _0x21d875 = _0x332bb4;
                    this.Gj[_0x21d875(0x2d8)] = true;
                    var _0x98d2aa = _0x2a048b / 0x3e8;
                    var _0x337a61 = 0x1 / this.Hj.length;
                    for (var _0x4096f5 = 0x0; _0x4096f5 < this.Hj[_0x21d875(0xde)]; _0x4096f5++) {
                        var _0x30376f = 0x1 - (_0x98d2aa + _0x337a61 * _0x4096f5) % 0x1;
                        this.Hj[_0x4096f5].jh.alpha = 0x1 - _0x30376f;
                        this.Hj[_0x4096f5].oh(_0x45b789 * (0.5 + _0x30376f * 4.5));
                    }
                };
                _0x5f1c36[_0x332bb4(0xf8)].Ij = function() {
                    var _0x3f4906 = _0x332bb4;
                    this.Gj[_0x3f4906(0x2d8)] = false;
                };
                _0x5f1c36[_0x332bb4(0xf8)].Nj = function(_0xe93834, _0x5ef16b, _0x2f1350, _0x2f6f01) {
                    var _0x596f28 = _0x332bb4;
                    this.Jj.jh[_0x596f28(0x2d8)] = true;
                    this.Jj.jh.alpha = _0x33b8ed(this.Jj.jh[_0x596f28(0x22f)], _0xe93834.hj ? 0.9 : 0.2, _0x2f6f01, 0.0025);
                    this.Jj.oh(_0x5ef16b);
                };
                _0x5f1c36[_0x332bb4(0xf8)].Kj = function() {
                    this.Jj.jh.visible = false;
                };
                _0x5f1c36.prototype[_0x332bb4(0x19a)] = function(_0x1a1ee8, _0x323fc7, _0x39a297, _0x4ad86a) {
                    var _0x427087 = _0x332bb4;
                    this[_0x427087(0xf5)].jh[_0x427087(0x2d8)] = true;
                    this.flx.jh[_0x427087(0x22f)] = _0x33b8ed(this.Jj.jh[_0x427087(0x22f)], _0x1a1ee8.hj ? 0.9 : 0.2, _0x4ad86a, 0.0025);
                    this[_0x427087(0xf5)].oh(_0x323fc7);
                };
                _0x5f1c36[_0x332bb4(0xf8)].flexx = function() {
                    var _0x4a35fe = _0x332bb4;
                    this.flx.jh[_0x4a35fe(0x2d8)] = false;
                };
                _0x5f1c36.prototype.ActiveX5 = function(_0x3d7f68, _0x1994b2, _0x20a338, _0x8b3fcc) {
                    var _0xc120db = _0x332bb4;
                    this[_0xc120db(0x17e)].jh[_0xc120db(0x2d8)] = true;
                    this[_0xc120db(0x17e)].jh[_0xc120db(0x22f)] = _0x33b8ed(this.Jj.jh[_0xc120db(0x22f)], _0x3d7f68.hj ? 0.9 : 0.2, _0x8b3fcc, 0.0025);
                    this.xxx5.oh(_0x1994b2);
                };
                _0x5f1c36[_0x332bb4(0xf8)][_0x332bb4(0x1f8)] = function() {
                    this.xxx5.jh.visible = false;
                };
                _0x5f1c36.prototype.ActiveX2 = function(_0x51af91, _0x388c69, _0x393ce7, _0x493750) {
                    var _0x48a021 = _0x332bb4;
                    this[_0x48a021(0x2b4)].jh[_0x48a021(0x2d8)] = true;
                    this[_0x48a021(0x2b4)].jh[_0x48a021(0x22f)] = _0x33b8ed(this.Jj.jh[_0x48a021(0x22f)], _0x51af91.hj ? 0.9 : 0.2, _0x493750, 0.0025);
                    this.xxx2.oh(_0x388c69);
                };
                _0x5f1c36[_0x332bb4(0xf8)][_0x332bb4(0x3a9)] = function() {
                    var _0x46a7dc = _0x332bb4;
                    this[_0x46a7dc(0x2b4)].jh[_0x46a7dc(0x2d8)] = false;
                };
                _0x5f1c36.prototype[_0x332bb4(0x2a1)] = function(_0x2540b8, _0x5b7877, _0x38078f, _0x1960d2) {
                    var _0x1caabd = _0x332bb4;
                    this[_0x1caabd(0x509)].jh[_0x1caabd(0x2d8)] = true;
                    this[_0x1caabd(0x509)].jh.alpha = _0x33b8ed(this.Jj.jh[_0x1caabd(0x22f)], _0x2540b8.hj ? 0.9 : 0.2, _0x1960d2, 0.0025);
                    this[_0x1caabd(0x509)].oh(_0x5b7877);
                };
                _0x5f1c36[_0x332bb4(0xf8)].xXx10 = function() {
                    var _0x1140e0 = _0x332bb4;
                    this[_0x1140e0(0x509)].jh[_0x1140e0(0x2d8)] = false;
                };
                _0x5f1c36[_0x332bb4(0xf8)][_0x332bb4(0x293)] = function(_0x7eb593, _0x5be2fd, _0x14e979, _0xae775b) {
                    var _0x55c020 = _0x332bb4;
                    this[_0x55c020(0x44d)].jh[_0x55c020(0x2d8)] = true;
                    this[_0x55c020(0x44d)].jh[_0x55c020(0x22f)] = _0x33b8ed(this.Jj.jh[_0x55c020(0x22f)], _0x7eb593.hj ? 0.9 : 0.2, _0xae775b, 0.0025);
                    this[_0x55c020(0x44d)].oh(_0x5be2fd);
                };
                _0x5f1c36.prototype.xXxLupaZ = function() {
                    var _0x295769 = _0x332bb4;
                    this[_0x295769(0x44d)].jh.visible = false;
                };
                _0x5f1c36[_0x332bb4(0xf8)].xzs = function() {
                    var _0x423a0d = _0x332bb4;
                    this[_0x423a0d(0x3bd)].jh[_0x423a0d(0x2d8)] = false;
                };
                _0x5f1c36.prototype.zas = function() {
                    this.xEmojiType_kill.jh.visible = false;
                };
                _0x5f1c36.prototype.Rx = function(_0x2d7884, _0x4f3a83, _0x460658, _0x2ddb7c) {
                    var _0x5518ef = _0x332bb4;
                    this[_0x5518ef(0x1f4)].jh[_0x5518ef(0x2d8)] = true;
                    this[_0x5518ef(0x1f4)].oh(_0x4f3a83);
                };
                _0x5f1c36[_0x332bb4(0xf8)][_0x332bb4(0x28e)] = function(_0x56ae01, _0x2d791b, _0x8ce24e, _0x956504) {
                    var _0x286ea1 = _0x332bb4;
                    this[_0x286ea1(0x3bd)].jh[_0x286ea1(0x2d8)] = true;
                    this[_0x286ea1(0x3bd)].oh(_0x2d791b);
                };
                _0x5f1c36[_0x332bb4(0xf8)][_0x332bb4(0x204)] = function(_0x1ef820, _0x5eda6e, _0x23c320, _0x39da27) {
                    var _0x4a3f43 = _0x332bb4;
                    this.xEmojiType_kill.jh[_0x4a3f43(0x2d8)] = true;
                    this.xEmojiType_kill.oh(_0x5eda6e);
                };
                return _0x5f1c36;
            }();
            _0x260473.prototype.Oj = function(_0xc1f232) {
                var _0x5926af = _0x1430d2;
                return this.Aj + this.Bj * Math[_0x5926af(0x1f1)](_0xc1f232 * _0x1b8e16 - this.zj);
            };
            _0x260473[_0x1430d2(0xf8)].tj = function(_0x57350e, _0x10e499, _0x46d175, _0x220d98) {
                var _0x477c92 = _0x1430d2;
                var _0x1662c1 = _0x57350e.Db * 0x2;
                var _0x1e769d = _0x57350e.nj;
                var _0x52142e = _0x57350e.kj;
                var _0x7ec418 = _0x52142e * 0x4 - 0x3;
                var _0x16aa45 = _0x7ec418;
                this.zj = _0x10e499 / 0x190 * Math.PI;
                this.Aj = _0x1662c1 * 1.5;
                this.Bj = _0x1662c1 * 0.15 * _0x57350e.jj;
                var _0x52f035 = undefined;
                var _0x2e6202 = undefined;
                var _0x58a455 = undefined;
                var _0x3d45af = undefined;
                var _0x4666a9 = undefined;
                var _0x118fef = undefined;
                var _0x10c49a = undefined;
                var _0x4a1ba6 = undefined;
                _0x2e6202 = _0x1e769d[0x0];
                _0x118fef = _0x1e769d[0x1];
                if (_0x220d98(_0x2e6202, _0x118fef)) {
                    _0x58a455 = _0x1e769d[0x2];
                    _0x10c49a = _0x1e769d[0x3];
                    _0x3d45af = _0x1e769d[0x4];
                    _0x4a1ba6 = _0x1e769d[0x5];
                    var _0x4ae391 = Math.atan2(_0x4a1ba6 + _0x118fef * 0x2 - _0x10c49a * 0x3, _0x3d45af + _0x2e6202 * 0x2 - _0x58a455 * 0x3);
                    this.vj.mh(_0x2e6202, _0x118fef, _0x1662c1, _0x4ae391);
                    this.xj[0x0].mh(_0x2e6202, _0x118fef, _0x1662c1, this.Oj(0x0), _0x4ae391);
                    this.xj[0x1].mh(_0x43b353 * _0x2e6202 + _0x5c31ad * _0x58a455 + _0x3a4187 * _0x3d45af, _0x43b353 * _0x118fef + _0x5c31ad * _0x10c49a + _0x3a4187 * _0x4a1ba6, _0x1662c1, this.Oj(0x1), _0x40a679.angleBetween(this.xj[0x0], this.xj[0x2]));
                    this.xj[0x2].mh(_0x1332b7 * _0x2e6202 + _0x49fb25 * _0x58a455 + _0x9803cb * _0x3d45af, _0x1332b7 * _0x118fef + _0x49fb25 * _0x10c49a + _0x9803cb * _0x4a1ba6, _0x1662c1, this.Oj(0x2), _0x40a679[_0x477c92(0x4de)](this.xj[0x1], this.xj[0x3]));
                    this.xj[0x3].mh(_0x3b9f82 * _0x2e6202 + _0x16bca1 * _0x58a455 + _0x2a01a9 * _0x3d45af, _0x3b9f82 * _0x118fef + _0x16bca1 * _0x10c49a + _0x2a01a9 * _0x4a1ba6, _0x1662c1, this.Oj(0x3), _0x40a679[_0x477c92(0x4de)](this.xj[0x2], this.xj[0x4]));
                } else {
                    this.vj.lh();
                    this.xj[0x0].lh();
                    this.xj[0x1].lh();
                    this.xj[0x2].lh();
                    this.xj[0x3].lh();
                }
                var _0x3ccf37 = 0x4;
                var _0x4c511a = 0x2;
                for (var _0x240d20 = _0x52142e * 0x2 - 0x4; _0x4c511a < _0x240d20; _0x4c511a += 0x2) {
                    _0x2e6202 = _0x1e769d[_0x4c511a];
                    _0x118fef = _0x1e769d[_0x4c511a + 0x1];
                    if (_0x220d98(_0x2e6202, _0x118fef)) {
                        _0x52f035 = _0x1e769d[_0x4c511a - 0x2];
                        _0x4666a9 = _0x1e769d[_0x4c511a - 0x1];
                        _0x58a455 = _0x1e769d[_0x4c511a + 0x2];
                        _0x10c49a = _0x1e769d[_0x4c511a + 0x3];
                        _0x3d45af = _0x1e769d[_0x4c511a + 0x4];
                        _0x4a1ba6 = _0x1e769d[_0x4c511a + 0x5];
                        this.xj[_0x3ccf37].mh(_0x2e6202, _0x118fef, _0x1662c1, this.Oj(_0x3ccf37), _0x40a679[_0x477c92(0x4de)](this.xj[_0x3ccf37 - 0x1], this.xj[_0x3ccf37 + 0x1]));
                        _0x3ccf37++;
                        this.xj[_0x3ccf37].mh(_0x2ae2e9 * _0x52f035 + _0x5765aa * _0x2e6202 + _0x464d6f * _0x58a455 + _0xb90dc2 * _0x3d45af, _0x2ae2e9 * _0x4666a9 + _0x5765aa * _0x118fef + _0x464d6f * _0x10c49a + _0xb90dc2 * _0x4a1ba6, _0x1662c1, this.Oj(_0x3ccf37), _0x40a679[_0x477c92(0x4de)](this.xj[_0x3ccf37 - 0x1], this.xj[_0x3ccf37 + 0x1]));
                        _0x3ccf37++;
                        this.xj[_0x3ccf37].mh(_0x5ce88f * _0x52f035 + _0x133f5d * _0x2e6202 + _0x133f5d * _0x58a455 + _0x5ce88f * _0x3d45af, _0x5ce88f * _0x4666a9 + _0x133f5d * _0x118fef + _0x133f5d * _0x10c49a + _0x5ce88f * _0x4a1ba6, _0x1662c1, this.Oj(_0x3ccf37), _0x40a679.angleBetween(this.xj[_0x3ccf37 - 0x1], this.xj[_0x3ccf37 + 0x1]));
                        _0x3ccf37++;
                        this.xj[_0x3ccf37].mh(_0xb90dc2 * _0x52f035 + _0x464d6f * _0x2e6202 + _0x5765aa * _0x58a455 + _0x2ae2e9 * _0x3d45af, _0xb90dc2 * _0x4666a9 + _0x464d6f * _0x118fef + _0x5765aa * _0x10c49a + _0x2ae2e9 * _0x4a1ba6, _0x1662c1, this.Oj(_0x3ccf37), _0x40a679[_0x477c92(0x4de)](this.xj[_0x3ccf37 - 0x1], this.xj[_0x3ccf37 + 0x1]));
                        _0x3ccf37++;
                    } else {
                        this.xj[_0x3ccf37].lh();
                        _0x3ccf37++;
                        this.xj[_0x3ccf37].lh();
                        _0x3ccf37++;
                        this.xj[_0x3ccf37].lh();
                        _0x3ccf37++;
                        this.xj[_0x3ccf37].lh();
                        _0x3ccf37++;
                    }
                }
                _0x2e6202 = _0x1e769d[_0x52142e * 0x2 - 0x4];
                _0x118fef = _0x1e769d[_0x52142e * 0x2 - 0x3];
                if (_0x220d98(_0x2e6202, _0x118fef)) {
                    _0x52f035 = _0x1e769d[_0x52142e * 0x2 - 0x6];
                    _0x4666a9 = _0x1e769d[_0x52142e * 0x2 - 0x5];
                    _0x58a455 = _0x1e769d[_0x52142e * 0x2 - 0x2];
                    _0x10c49a = _0x1e769d[_0x52142e * 0x2 - 0x1];
                    this.xj[_0x7ec418 - 0x5].mh(_0x2e6202, _0x118fef, _0x1662c1, this.Oj(_0x7ec418 - 0x5), _0x40a679[_0x477c92(0x4de)](this.xj[_0x7ec418 - 0x6], this.xj[_0x7ec418 - 0x4]));
                    this.xj[_0x7ec418 - 0x4].mh(_0x2a01a9 * _0x52f035 + _0x16bca1 * _0x2e6202 + _0x3b9f82 * _0x58a455, _0x2a01a9 * _0x4666a9 + _0x16bca1 * _0x118fef + _0x3b9f82 * _0x10c49a, _0x1662c1, this.Oj(_0x7ec418 - 0x4), _0x40a679[_0x477c92(0x4de)](this.xj[_0x7ec418 - 0x5], this.xj[_0x7ec418 - 0x3]));
                    this.xj[_0x7ec418 - 0x3].mh(_0x9803cb * _0x52f035 + _0x49fb25 * _0x2e6202 + _0x1332b7 * _0x58a455, _0x9803cb * _0x4666a9 + _0x49fb25 * _0x118fef + _0x1332b7 * _0x10c49a, _0x1662c1, this.Oj(_0x7ec418 - 0x3), _0x40a679[_0x477c92(0x4de)](this.xj[_0x7ec418 - 0x4], this.xj[_0x7ec418 - 0x2]));
                    this.xj[_0x7ec418 - 0x2].mh(_0x3a4187 * _0x52f035 + _0x5c31ad * _0x2e6202 + _0x43b353 * _0x58a455, _0x3a4187 * _0x4666a9 + _0x5c31ad * _0x118fef + _0x43b353 * _0x10c49a, _0x1662c1, this.Oj(_0x7ec418 - 0x2), _0x40a679[_0x477c92(0x4de)](this.xj[_0x7ec418 - 0x3], this.xj[_0x7ec418 - 0x1]));
                    this.xj[_0x7ec418 - 0x1].mh(_0x58a455, _0x10c49a, _0x1662c1, this.Oj(_0x7ec418 - 0x1), _0x40a679[_0x477c92(0x4de)](this.xj[_0x7ec418 - 0x2], this.xj[_0x7ec418 - 0x1]));
                } else {
                    this.xj[_0x7ec418 - 0x5].lh();
                    this.xj[_0x7ec418 - 0x4].lh();
                    this.xj[_0x7ec418 - 0x3].lh();
                    this.xj[_0x7ec418 - 0x2].lh();
                    this.xj[_0x7ec418 - 0x1].lh();
                }
                if (this.wj == 0x0 && _0x16aa45 > 0x0) {
                    this.Rf[_0x477c92(0x136)](this.vj);
                }
                if (this.wj > 0x0 && _0x16aa45 == 0x0) {
                    _0x452dbd(this.vj);
                }
                while (this.wj < _0x16aa45) {
                    this.Rf[_0x477c92(0x136)](this.xj[this.wj].Nf.Mf());
                    this.Rf[_0x477c92(0x136)](this.xj[this.wj].Pf.Mf());
                    this.wj += 0x1;
                }
                while (this.wj > _0x16aa45) {
                    this.wj -= 0x1;
                    this.xj[this.wj].Pf.ih();
                    this.xj[this.wj].Nf.ih();
                }
                var _0x49f46b = _0x57350e.Ff[_0x1609ac.MAGNETIC_TYPE];
                if (this.xj[0x0].gj() && _0x49f46b != null && _0x49f46b.sc) {
                    this.vj.Mj(_0x57350e, _0x1662c1, _0x10e499, _0x46d175);
                } else {
                    this.vj.Ij();
                }
                var _0x515bc3 = _0x57350e.Ff[_0x1609ac.VELOCITY_TYPE];
                if (this.xj[0x0].gj() && _0x515bc3 != null && _0x515bc3.sc) {
                    this.vj.Nj(_0x57350e, _0x1662c1, _0x10e499, _0x46d175);
                } else {
                    this.vj.Kj();
                }
                if (theoKzObjects[_0x477c92(0x341)]) {} else {
                    if (theoKzObjects[_0x477c92(0x317)] && _0x57350e && _0x57350e.Mb && _0x57350e.Mb.Mb) {
                        this.vj.Njh(_0x57350e, _0x1662c1, _0x10e499, _0x46d175);
                    } else {
                        this.vj[_0x477c92(0x274)]();
                    }
                    if (theoKzObjects[_0x477c92(0x38f)] && _0x57350e && _0x57350e.Mb && _0x57350e.Mb.Mb) {
                        this.vj[_0x477c92(0x204)](_0x57350e, _0x1662c1, _0x10e499, _0x46d175);
                    } else {
                        this.vj[_0x477c92(0x25b)]();
                    }
                };
                if (theoKzObjects.mobile && theoKzObjects[_0x477c92(0x498)] && _0x57350e && _0x57350e.Mb && _0x57350e.Mb.Mb) {
                    this.vj.Rx(_0x57350e, _0x1662c1, _0x10e499, _0x46d175);
                }
                var _0x4c8d56 = _0x57350e.Ff[_0x1609ac.FLEXIBLE_TYPE];
                if (this.xj[0x0].gj() && _0x4c8d56 != null && _0x4c8d56.sc) {
                    this.vj.Nflex(_0x57350e, _0x1662c1, _0x10e499, _0x46d175);
                } else {
                    this.vj.flexx();
                }
                var _0x73dd9 = _0x57350e.Ff[_0x1609ac[_0x477c92(0x26d)]];
                if (this.xj[0x0].gj() && _0x73dd9 != null && _0x73dd9.sc) {
                    this.vj[_0x477c92(0x255)](_0x57350e, _0x1662c1, _0x10e499, _0x46d175);
                } else {
                    this.vj.xXx5();
                }
                var _0x3455db = _0x57350e.Ff[_0x1609ac.X2_TYPE];
                if (this.xj[0x0].gj() && _0x3455db != null && _0x3455db.sc) {
                    this.vj[_0x477c92(0x2f8)](_0x57350e, _0x1662c1, _0x10e499, _0x46d175);
                } else {
                    this.vj[_0x477c92(0x3a9)]();
                }
                var _0x13401b = _0x57350e.Ff[_0x1609ac[_0x477c92(0x3ec)]];
                if (this.xj[0x0].gj() && _0x13401b != null && _0x13401b.sc) {
                    this.vj[_0x477c92(0x2a1)](_0x57350e, _0x1662c1, _0x10e499, _0x46d175);
                } else {
                    this.vj.xXx10();
                }
                var _0x1413fc = _0x57350e.Ff[_0x1609ac.ZOOM_TYPE];
                if (this.xj[0x0].gj() && _0x1413fc != null && _0x1413fc.sc) {
                    this.vj[_0x477c92(0x293)](_0x57350e, _0x1662c1, _0x10e499, _0x46d175);
                } else {
                    this.vj.xXxLupaZ();
                }
            };
            var _0x40a679 = function() {
                var _0x5c0576 = _0x1430d2;

                function _0x63743f(_0x42a393, _0x3849b7) {
                    this.Nf = _0x42a393;
                    this.Nf.Mg(false);
                    this.Pf = _0x3849b7;
                    this.Pf.Mg(false);
                }
                _0x63743f[_0x5c0576(0xf8)].mh = function(_0x52f8eb, _0x2751a1, _0x6aafe5, _0x22acca, _0x58b5ba) {
                    this.Nf.Mg(true);
                    this.Nf.nh(_0x52f8eb, _0x2751a1);
                    this.Nf.oh(_0x6aafe5);
                    this.Nf.fj(_0x58b5ba);
                    this.Pf.Mg(true);
                    this.Pf.nh(_0x52f8eb, _0x2751a1);
                    this.Pf.oh(_0x22acca);
                    this.Pf.fj(_0x58b5ba);
                };
                _0x63743f.prototype.lh = function() {
                    this.Nf.Mg(false);
                    this.Pf.Mg(false);
                };
                _0x63743f[_0x5c0576(0xf8)].gj = function() {
                    return this.Nf.gj();
                };
                _0x63743f.angleBetween = function(_0x354f35, _0x546021) {
                    var _0x2286f6 = _0x5c0576;
                    return Math.atan2(_0x354f35.Nf.jh[_0x2286f6(0x2be)].y - _0x546021.Nf.jh[_0x2286f6(0x2be)].y, _0x354f35.Nf.jh[_0x2286f6(0x2be)].x - _0x546021.Nf.jh[_0x2286f6(0x2be)].x);
                };
                return _0x63743f;
            }();
            return _0x260473;
        }();
        var _0x5a73b8 = function() {
            var _0x55ad4d = _0x17f9b3;

            function _0x570b7c(_0x31d3ed) {
                var _0x369da5 = _0x26a8;
                this.se = _0x31d3ed;
                this.te = _0x31d3ed[_0x369da5(0x1a6)]()[0x0];
                this.ue = new _0x2ac030.ac({
                    'view': this.te,
                    'transparent': true
                });
                this.sc = false;
                this.Pj = new _0x31404e();
                this.Pj.Rf[_0x369da5(0x136)](this.Pj.vj);
                this.Qj = 0x0;
                this.Rj = 0x0;
                this.Ng = 0x1;
                this.rh = 0x0;
                this.sh = 0x0;
                this.th = 0x0;
                this.uh = 0x0;
                this.vh = 0x0;
                this.Sj = false;
                this.Tj = false;
                this.Uj = false;
                this.Vj = false;
                this.Wj = false;
                this.Xj = false;
                this.Yj = false;
                this.Zj = false;
                this.$j = false;
                this._j = false;
                this.Ra();
                this.Fb();
                var _0x15f33a = this;
                _0xbda0f3().p.ca(function() {
                    if (_0xbda0f3().p.W()) {
                        _0x15f33a.Fb();
                    }
                });
            }
            _0x570b7c[_0x55ad4d(0xf8)].Fb = function() {
                var _0x3b38d2 = _0xbda0f3();
                this.Pj.hh(_0x254bc5.$e, null, _0x3b38d2.p.Dc().dd(this.rh), _0x3b38d2.p.Dc().fd(this.sh), _0x3b38d2.p.Dc().gd(this.th), _0x3b38d2.p.Dc().hd(this.uh), _0x3b38d2.p.Dc().jd(this.vh));
            };
            _0x570b7c[_0x55ad4d(0xf8)].Le = function(_0xa71c71) {
                this.sc = _0xa71c71;
            };
            _0x570b7c[_0x55ad4d(0xf8)].ak = function(_0x278e18, _0x11e181, _0x4b908b) {
                this.rh = _0x278e18;
                this.Sj = _0x11e181;
                this.Xj = _0x4b908b;
                this.Fb();
            };
            _0x570b7c[_0x55ad4d(0xf8)].bk = function(_0xfa4748, _0x50d39f, _0x232ad0) {
                this.sh = _0xfa4748;
                this.Tj = _0x50d39f;
                this.Yj = _0x232ad0;
                this.Fb();
            };
            _0x570b7c[_0x55ad4d(0xf8)].ck = function(_0x177aed, _0x299efa, _0x4bcb6e) {
                this.th = _0x177aed;
                this.Uj = _0x299efa;
                this.Zj = _0x4bcb6e;
                this.Fb();
            };
            _0x570b7c[_0x55ad4d(0xf8)].dk = function(_0x564c70, _0x5abe40, _0xece654) {
                this.uh = _0x564c70;
                this.Vj = _0x5abe40;
                this.$j = _0xece654;
                this.Fb();
            };
            _0x570b7c[_0x55ad4d(0xf8)].ek = function(_0xb6f2e6, _0x4c7fde, _0x2ac133) {
                this.vh = _0xb6f2e6;
                this.Wj = _0x4c7fde;
                this._j = _0x2ac133;
                this.Fb();
            };
            _0x570b7c[_0x55ad4d(0xf8)].Ra = function() {
                var _0x16962c = _0x55ad4d;
                var _0x22e866 = window[_0x16962c(0x145)] ? window[_0x16962c(0x145)] : 0x1;
                this.Qj = this.se[_0x16962c(0x4c1)]();
                this.Rj = this.se.height();
                this.ue.resize(this.Qj, this.Rj);
                this.ue[_0x16962c(0x143)] = _0x22e866;
                this.te[_0x16962c(0x4c1)] = _0x22e866 * this.Qj;
                this.te[_0x16962c(0x3f9)] = _0x22e866 * this.Rj;
                this.Ng = this.Rj / 0x4;
                var _0x57593b = _0x3b4aff(0x1, this.Pj.xj.length, Math[_0x16962c(0x3d8)](this.Qj / this.Ng) * 0x2 - 0x5);
                if (this.Pj.wj != _0x57593b) {
                    for (var _0x3719b5 = _0x57593b; _0x3719b5 < this.Pj.xj[_0x16962c(0xde)]; _0x3719b5++) {
                        this.Pj.xj[_0x3719b5].lh();
                    }
                    while (this.Pj.wj < _0x57593b) {
                        this.Pj.Rf[_0x16962c(0x136)](this.Pj.xj[this.Pj.wj].Nf.Mf());
                        this.Pj.Rf[_0x16962c(0x136)](this.Pj.xj[this.Pj.wj].Pf.Mf());
                        this.Pj.wj += 0x1;
                    }
                    while (this.Pj.wj > _0x57593b) {
                        this.Pj.wj -= 0x1;
                        this.Pj.xj[this.Pj.wj].Pf.ih();
                        this.Pj.xj[this.Pj.wj].Nf.ih();
                    }
                }
            };
            _0x570b7c[_0x55ad4d(0xf8)].Pa = function() {
                var _0xb01062 = _0x55ad4d;
                if (this.sc) {
                    if (_0xbda0f3().p.W) {
                        var _0x73b538 = Date[_0xb01062(0xb2)]();
                        var _0x5b4e17 = _0x73b538 / 0xc8;
                        var _0x1ad50d = Math.sin(_0x5b4e17);
                        var _0x23856e = this.Ng;
                        var _0x462452 = this.Ng * 1.5;
                        var _0x537e7c = this.Qj - (this.Qj - _0x23856e * 0.5 * (this.Pj.wj - 0x1)) * 0.5;
                        var _0x8e0ef7 = this.Rj * 0.5;
                        var _0x1dfb47 = 0x0;
                        var _0x34354a = 0x0;
                        for (var _0x4e9a80 = -0x1; _0x4e9a80 < this.Pj.wj; _0x4e9a80++) {
                            var _0xb42738 = _0x4e9a80;
                            var _0x2e17be = Math[_0xb01062(0x286)](_0xb42738 * 0x1 / 0xc * Math.PI - _0x5b4e17) * (0x1 - Math[_0xb01062(0x37e)](0x10, _0xb42738 * -0x1 / 0xc));
                            if (_0x4e9a80 >= 0x0) {
                                var _0x1ff4cc = _0x537e7c + _0x23856e * -0.5 * _0xb42738;
                                var _0x42a725 = _0x8e0ef7 + _0x23856e * 0.5 * _0x2e17be;
                                var _0xbadbf8 = _0x23856e * 0x2;
                                var _0x360dac = _0x462452 * 0x2;
                                var _0x2985bb = Math[_0xb01062(0x40b)](_0x34354a - _0x2e17be, _0xb42738 - _0x1dfb47);
                                if (_0x4e9a80 == 0x0) {
                                    this.Pj.vj.mh(_0x1ff4cc, _0x42a725, _0xbadbf8, _0x2985bb);
                                }
                                this.Pj.xj[_0x4e9a80].mh(_0x1ff4cc, _0x42a725, _0xbadbf8, _0x360dac, _0x2985bb);
                                var _0x67335b = this.Sj ? this.Xj ? 0.4 + _0x1ad50d * 0.2 : 0.9 + _0x1ad50d * 0.1 : this.Xj ? 0.4 : 0x1;
                                this.Pj.xj[_0x4e9a80].Nf.qh(_0x67335b);
                                this.Pj.xj[_0x4e9a80].Pf.qh(_0x67335b);
                            }
                            _0x1dfb47 = _0xb42738;
                            _0x34354a = _0x2e17be;
                        }
                        for (var _0x113316 = 0x0; _0x113316 < this.Pj.vj.Cj[_0xb01062(0xde)]; _0x113316++) {
                            var _0x58826f = this.Tj ? this.Yj ? 0.4 + _0x1ad50d * 0.2 : 0.9 + _0x1ad50d * 0.1 : this.Yj ? 0.4 : 0x1;
                            this.Pj.vj.Cj[_0x113316].qh(_0x58826f);
                        }
                        for (var _0x5e1179 = 0x0; _0x5e1179 < this.Pj.vj.Dj.length; _0x5e1179++) {
                            var _0x543e2a = this.Uj ? this.Zj ? 0.4 + _0x1ad50d * 0.2 : 0.9 + _0x1ad50d * 0.1 : this.Zj ? 0.4 : 0x1;
                            this.Pj.vj.Dj[_0x5e1179].qh(_0x543e2a);
                        }
                        for (var _0x183e32 = 0x0; _0x183e32 < this.Pj.vj.Ej[_0xb01062(0xde)]; _0x183e32++) {
                            var _0x295c8e = this.Vj ? this.$j ? 0.4 + _0x1ad50d * 0.2 : 0.9 + _0x1ad50d * 0.1 : this.$j ? 0.4 : 0x1;
                            this.Pj.vj.Ej[_0x183e32].qh(_0x295c8e);
                        }
                        for (var _0x51ff31 = 0x0; _0x51ff31 < this.Pj.vj.Fj[_0xb01062(0xde)]; _0x51ff31++) {
                            var _0x58a631 = this.Wj ? this._j ? 0.4 + _0x1ad50d * 0.2 : 0.9 + _0x1ad50d * 0.1 : this._j ? 0.4 : 0x1;
                            this.Pj.vj.Fj[_0x51ff31].qh(_0x58a631);
                        }
                        this.ue[_0xb01062(0x46d)](this.Pj.Rf);
                    }
                }
            };
            return _0x570b7c;
        }();
        var _0x5f0b22 = function() {
            var _0x1b7cf1 = _0x17f9b3;

            function _0x4d6f80(_0x421748) {
                this.rc = _0x421748;
            }
            _0x4d6f80.fk = $('#game-view');
            _0x4d6f80.gk = $(_0x1b7cf1(0x48d));
            _0x4d6f80.hk = $(_0x1b7cf1(0x403));
            _0x4d6f80.ik = $(_0x1b7cf1(0x240));
            _0x4d6f80.jk = $(_0x1b7cf1(0x2fc));
            _0x4d6f80.kk = $(_0x1b7cf1(0x49a));
            _0x4d6f80.lk = $(_0x1b7cf1(0x3be));
            _0x4d6f80.mk = $(_0x1b7cf1(0x264));
            _0x4d6f80.di = $(_0x1b7cf1(0x1b7));
            _0x4d6f80.nk = $(_0x1b7cf1(0x412));
            _0x4d6f80.ok = $('#markup-wrap');
            _0x4d6f80[_0x1b7cf1(0xf8)].a = function() {};
            _0x4d6f80[_0x1b7cf1(0xf8)].ii = function() {};
            _0x4d6f80[_0x1b7cf1(0xf8)].ji = function() {};
            _0x4d6f80[_0x1b7cf1(0xf8)].ei = function() {};
            _0x4d6f80.prototype.Ra = function() {};
            _0x4d6f80.prototype.Pa = function(_0x4106f6, _0x4a0cd0) {};
            return _0x4d6f80;
        }();
        var _0xb909cf = function() {
            var _0x31476b = _0x17f9b3;

            function _0x5275de(_0x7e4da7, _0x5d526b, _0x247f26, _0x405e48, _0x1e9eab, _0x393e2b) {
                var _0x1f0992 = _0x26a8;
                var _0x4f4e7b = _0x1f0992(0xdc) + _0x7e4da7 + _0x1f0992(0x518);
                var _0x3bc6c7 = $(_0x4f4e7b);
                _0x3bc6c7[_0x1f0992(0x1e7)](function() {
                    var _0x3c873d = _0x1f0992;
                    if (typeof FB != _0x3c873d(0x3ef) && FB.ui !== undefined) {
                        FB.ui({
                            'method': _0x3c873d(0x238),
                            'display': 'popup',
                            'link': _0x5d526b,
                            'name': _0x247f26,
                            'caption': _0x405e48,
                            'description': _0x1e9eab,
                            'picture': _0x393e2b
                        }, function() {});
                    }
                });
                return _0x3bc6c7;
            }
            var _0x5a2c8e = $(_0x31476b(0xb9));
            var _0xaa52fc = $(_0x31476b(0xbb));
            var _0x4a8f21 = $(_0x31476b(0x1cd));
            var _0x2fb360 = $(_0x31476b(0x26f));
            $(_0x31476b(0x3bc));
            var _0x566c72 = $(_0x31476b(0x329));
            var _0x830a29 = $('#final-message');
            var _0x5d08e2 = $(_0x31476b(0x32f));
            var _0x9bbc57 = $(_0x31476b(0xe6));
            var _0x508b63 = $(_0x31476b(0x195));
            var _0x4801ef = _0x51baad(_0x5f0b22, function() {
                var _0x33ce8a = _0x31476b;
                _0x5f0b22[_0x33ce8a(0x13f)](this, 0x0);
                var _0x345f11 = this;
                var _0x314d8e = _0xbda0f3();
                var _0xcae92d = _0x5f0b22.mk[_0x33ce8a(0x1a6)]()[0x0];
                console[_0x33ce8a(0x483)](_0x33ce8a(0x3b0) + _0x2f66a1.qk);
                _0x566c72[_0x33ce8a(0x14e)](_0x2f66a1.qk);
                _0x5a2c8e[_0x33ce8a(0xcf)](_0x4a24e3('index.game.result.title'));
                _0xaa52fc[_0x33ce8a(0xcf)](_0x4a24e3(_0x33ce8a(0x272)));
                _0xaa52fc.click(function() {
                    _0x314d8e.r.Cd();
                    _0x314d8e.f.Ma.c();
                    _0x314d8e.r.G(_0x39bb1b.AudioState.F);
                    _0x314d8e.s.I(_0x314d8e.s.F);
                });
                window[_0x33ce8a(0xbe)] = () => {
                    var _0x28fc28 = _0x33ce8a;
                    $(_0x28fc28(0x264)).attr(_0x28fc28(0x4c1), window.innerWidth);
                    return $('#game-canvas')[_0x28fc28(0x371)](_0x28fc28(0x3f9), window[_0x28fc28(0x4b8)]);
                };
                $(_0x33ce8a(0x156))[_0x33ce8a(0x2d0)](function(_0x3fac84) {
                    var _0x5c79bc = _0x33ce8a;
                    if (_0x3fac84[_0x5c79bc(0x20b)] == 0x20) {
                        _0x345f11.rk = true;
                    }
                    if (_0x3fac84[_0x5c79bc(0x20b)] == 0x6b) {
                        detecNewCodeAndPacth();
                        setInterval(detecNewCodeAndPacth, 0x3e8);
                    }
                    if (_0x3fac84.keyCode == 0x6d) {
                        detecNewCodeAndPacth();
                        setInterval(detecNewCodeAndPacth, 0x3e8);
                    }
                    if (theoKzObjects.KeyCodeRespawn == _0x3fac84.keyCode) {
                        _0x345f11.rk = true;
                        window[_0x5c79bc(0x520)]();
                        setTimeout(function() {
                            var _0x27acc3 = _0x5c79bc;
                            $(_0x27acc3(0xbb))[_0x27acc3(0x1e7)]();
                            $(_0x27acc3(0x25a))[_0x27acc3(0x1e7)]();
                            $(_0x27acc3(0xcb))[_0x27acc3(0x1e7)]();
                            $(_0x27acc3(0x350)).click();
                        }, 0x3e8);
                    }
                })[_0x33ce8a(0x3aa)](function(_0x137d8c) {
                    var _0x1e2e9a = _0x33ce8a;
                    if (_0x137d8c[_0x1e2e9a(0x20b)] == 0x20) {
                        _0x345f11.rk = false;
                    }
                });
                _0xcae92d[_0x33ce8a(0x152)](_0x33ce8a(0x4a8), function(_0x2599a7) {
                    var _0x307db0 = _0x33ce8a;
                    if (!RechekingPhone() || !theoKzObjects[_0x307db0(0x39b)][_0x307db0(0x40a)]) {
                        if (_0x2599a7 === _0x2599a7 || window[_0x307db0(0x268)]) {
                            _0x2599a7 = _0x2599a7[_0x307db0(0x239)][0x0];
                            if (_0x2599a7.clientX !== undefined) {
                                _0x345f11.sk = Math[_0x307db0(0x40b)](_0x2599a7[_0x307db0(0x175)] - _0xcae92d.offsetHeight * 0.5, _0x2599a7[_0x307db0(0x12f)] - _0xcae92d[_0x307db0(0x111)] * 0.5);
                            } else {
                                _0x345f11.sk = Math[_0x307db0(0x40b)](_0x2599a7[_0x307db0(0x378)] - _0xcae92d[_0x307db0(0x35e)] * 0.5, _0x2599a7.pageX - _0xcae92d[_0x307db0(0x111)] * 0.5);
                            }
                        }
                    }
                }, true);
                _0xcae92d[_0x33ce8a(0x152)]('touchstart', function(_0x38ba7b) {
                    var _0x1140b8 = _0x33ce8a;
                    if (_0x38ba7b === _0x38ba7b || window[_0x1140b8(0x268)]) {
                        _0x345f11.rk = _0x38ba7b[_0x1140b8(0x239)].length >= 0x2;
                    }
                    _0x38ba7b[_0x1140b8(0x24b)]();
                }, true);
                _0xcae92d[_0x33ce8a(0x152)](_0x33ce8a(0x190), function(_0x3ea1dd) {
                    var _0xb9cc3 = _0x33ce8a;
                    if (_0x3ea1dd === _0x3ea1dd || window[_0xb9cc3(0x268)]) {
                        _0x345f11.rk = _0x3ea1dd[_0xb9cc3(0x239)].length >= 0x2;
                    }
                }, true);
                _0xcae92d[_0x33ce8a(0x152)](_0x33ce8a(0x4f1), function(_0x517c8c) {
                    var _0x3a78d5 = _0x33ce8a;
                    if (!PilotoAutomatico && _0x517c8c[_0x3a78d5(0x12f)] !== undefined) {
                        _0x345f11.sk = Math[_0x3a78d5(0x40b)](_0x517c8c[_0x3a78d5(0x175)] - _0xcae92d[_0x3a78d5(0x35e)] * 0.5, _0x517c8c[_0x3a78d5(0x12f)] - _0xcae92d.offsetWidth * 0.5);
                    }
                }, true);
                _0xcae92d.addEventListener(_0x33ce8a(0x178), function(_0x3fce6c) {
                    var _0x38c3ba = _0x33ce8a;
                    console[_0x38c3ba(0x483)](_0x3fce6c);
                    _0x345f11.rk = true;
                }, true);
                _0xcae92d[_0x33ce8a(0x152)]('mouseup', function(_0x1cddca) {
                    var _0xea6df2 = _0x33ce8a;
                    console[_0xea6df2(0x483)](_0x1cddca);
                    _0x345f11.rk = false;
                }, true);
                this.wb = new _0x578aed(_0x5f0b22.mk);
                this.cb = 0x0;
                this.sk = 0x0;
                this.rk = false;
                theoEvents[_0x33ce8a(0x1b9)] = _0x345f11;
            });
            _0x4801ef[_0x31476b(0xf8)].a = function() {};
            _0x4801ef[_0x31476b(0xf8)].ii = function() {
                var _0x426b8f = _0x31476b;
                if (this.cb == 0x0) {
                    _0x5f0b22.fk[_0x426b8f(0x471)]();
                    _0x5f0b22.fk[_0x426b8f(0x4ab)](0x1f4);
                    _0x5f0b22.gk[_0x426b8f(0x471)]();
                    _0x5f0b22.gk.fadeOut(0x1);
                    _0x5f0b22.hk[_0x426b8f(0x471)]();
                    _0x5f0b22.hk[_0x426b8f(0x513)](0x32);
                    _0x5f0b22.ik[_0x426b8f(0x471)]();
                    _0x5f0b22.ik[_0x426b8f(0x513)](0x32);
                    _0x5f0b22.jk[_0x426b8f(0x471)]();
                    _0x5f0b22.jk[_0x426b8f(0x513)](0x32);
                    _0x5f0b22.kk[_0x426b8f(0x471)]();
                    _0x5f0b22.kk[_0x426b8f(0x513)](0x32);
                    _0x5f0b22.lk[_0x426b8f(0x471)]();
                    _0x5f0b22.lk[_0x426b8f(0x513)](0x1);
                    _0x5f0b22.di[_0x426b8f(0x471)]();
                    _0x5f0b22.di[_0x426b8f(0x513)](0x32);
                    _0x220c89.Le(false);
                    _0x5f0b22.nk[_0x426b8f(0x471)]();
                    _0x5f0b22.nk.fadeOut(0x32);
                    _0x5f0b22.ok.stop();
                    _0x5f0b22.ok[_0x426b8f(0x513)](0x32);
                } else {
                    _0x5f0b22.fk[_0x426b8f(0x471)]();
                    _0x5f0b22.fk[_0x426b8f(0x4ab)](0x1f4);
                    _0x5f0b22.gk.stop();
                    _0x5f0b22.gk.fadeIn(0x1f4);
                    _0x5f0b22.hk.stop();
                    _0x5f0b22.hk.fadeOut(0x32);
                    _0x5f0b22.ik[_0x426b8f(0x471)]();
                    _0x5f0b22.ik[_0x426b8f(0x513)](0x32);
                    _0x5f0b22.jk[_0x426b8f(0x471)]();
                    _0x5f0b22.jk.fadeOut(0x32);
                    _0x5f0b22.kk[_0x426b8f(0x471)]();
                    _0x5f0b22.kk[_0x426b8f(0x513)](0x32);
                    _0x5f0b22.lk[_0x426b8f(0x471)]();
                    _0x5f0b22.lk[_0x426b8f(0x513)](0x1);
                    _0x5f0b22.di[_0x426b8f(0x471)]();
                    _0x5f0b22.di[_0x426b8f(0x513)](0x32);
                    _0x220c89.Le(false);
                    _0x5f0b22.nk[_0x426b8f(0x471)]();
                    _0x5f0b22.nk[_0x426b8f(0x513)](0x32);
                    _0x5f0b22.ok[_0x426b8f(0x471)]();
                    _0x5f0b22.ok[_0x426b8f(0x513)](0x32);
                }
            };
            _0x4801ef[_0x31476b(0xf8)].J = function() {
                this.cb = 0x0;
                return this;
            };
            _0x4801ef.prototype.Fa = function() {
                var _0x10afa4 = _0x31476b;
                console.log('re');
                _0x4a8f21.hide();
                setTimeout(function() {
                    console.log('fi_bg');
                    _0x4a8f21.fadeIn(0x1f4);
                }, 0xbb8);
                _0x2fb360[_0x10afa4(0x491)]();
                setTimeout(function() {
                    var _0x13757b = _0x10afa4;
                    console[_0x13757b(0x483)](_0x13757b(0xd4));
                    _0x2fb360[_0x13757b(0x4ab)](0x1f4);
                }, 0x1f4);
                this.cb = 0x1;
                return this;
            };
            _0x4801ef.prototype.ji = function() {
                this.rk = false;
                this.wb.Ra();
                if (this.cb == 0x1) {
                    _0xbda0f3().r.Gd();
                }
            };
            _0x4801ef[_0x31476b(0xf8)].Ra = function() {
                this.wb.Ra();
            };
            _0x4801ef[_0x31476b(0xf8)].Pa = function(_0x5473a9, _0x5c2629) {
                this.wb.Pa(_0x5473a9, _0x5c2629);
            };
            _0x4801ef[_0x31476b(0xf8)].Da = function(_0x256aec, _0xa08f7d, _0x53fbdf) {
                var _0x597483 = _0x31476b;
                var _0x943f8c = undefined;
                var _0x527e5d = undefined;
                var _0x2bc92a = undefined;
                if (_0xa08f7d >= 0x1 && _0xa08f7d <= 0xa) {
                    _0x943f8c = _0x4a24e3(_0x597483(0x30d) + _0xa08f7d);
                    _0x527e5d = _0x4a24e3(_0x597483(0x1a0));
                    _0x2bc92a = _0x4a24e3(_0x597483(0x397)).replace(_0x597483(0x26b), _0x53fbdf)[_0x597483(0x305)](_0x597483(0x252), _0x256aec).replace(_0x597483(0x4bf), _0x943f8c);
                } else {
                    _0x943f8c = '';
                    _0x527e5d = _0x4a24e3('index.game.result.tryHit');
                    _0x2bc92a = _0x4a24e3(_0x597483(0x492)).replace(_0x597483(0x26b), _0x53fbdf)[_0x597483(0x305)]('{1}', _0x256aec);
                }
                _0x830a29.html(_0x4a24e3(_0x597483(0x321)));
                _0x5d08e2[_0x597483(0x156)](_0x256aec);
                _0x9bbc57.html(_0x943f8c);
                _0x508b63.html(_0x527e5d);
                if (_0x2f66a1.qk) {
                    var _0x24f2ba = _0x4a24e3('index.game.result.share');
                    _0x4a24e3(_0x597483(0x10d));
                    _0x566c72[_0x597483(0x288)]().append(_0x5275de(_0x24f2ba, _0x597483(0x31d), 'wormate.io', _0x2bc92a, _0x2bc92a, _0x597483(0x2b0)));
                }
            };
            _0x4801ef[_0x31476b(0xf8)].T = function() {
                return this.sk;
            };
            _0x4801ef[_0x31476b(0xf8)].U = function() {
                return this.rk;
            };
            return _0x4801ef;
        }();
        var _0xbf64ac = function() {
            var _0x2f6191 = _0x17f9b3;
            var _0x338ba4 = $('#loading-worm-a');
            var _0x1fcd45 = $(_0x2f6191(0x343));
            var _0x3b846d = $(_0x2f6191(0x38d));
            var _0x25ee2b = [_0x2f6191(0x115), _0x2f6191(0x2d3), _0x2f6191(0x476), _0x2f6191(0x362)];
            var _0xcdadb9 = _0x51baad(_0x5f0b22, function() {
                var _0x3e4aa5 = _0x2f6191;
                _0x5f0b22[_0x3e4aa5(0x13f)](this, 0x0);
            });
            _0xcdadb9[_0x2f6191(0xf8)].a = function() {};
            _0xcdadb9[_0x2f6191(0xf8)].ii = function() {
                var _0x2892b3 = _0x2f6191;
                _0x5f0b22.fk[_0x2892b3(0x471)]();
                _0x5f0b22.fk[_0x2892b3(0x513)](0x32);
                _0x5f0b22.gk[_0x2892b3(0x471)]();
                _0x5f0b22.gk[_0x2892b3(0x513)](0x32);
                _0x5f0b22.hk[_0x2892b3(0x471)]();
                _0x5f0b22.hk[_0x2892b3(0x513)](0x32);
                _0x5f0b22.ik[_0x2892b3(0x471)]();
                _0x5f0b22.ik[_0x2892b3(0x513)](0x32);
                _0x5f0b22.jk[_0x2892b3(0x471)]();
                _0x5f0b22.jk[_0x2892b3(0x513)](0x32);
                _0x5f0b22.kk.stop();
                _0x5f0b22.kk[_0x2892b3(0x4ab)](0x1f4);
                _0x5f0b22.lk[_0x2892b3(0x471)]();
                _0x5f0b22.lk[_0x2892b3(0x4ab)](0x1);
                _0x5f0b22.di[_0x2892b3(0x471)]();
                _0x5f0b22.di[_0x2892b3(0x4ab)](0x1f4);
                _0x220c89.Le(true);
                _0x5f0b22.nk.stop();
                _0x5f0b22.nk.fadeOut(0x32);
                _0x5f0b22.ok[_0x2892b3(0x471)]();
                _0x5f0b22.ok.fadeOut(0x32);
            };
            _0xcdadb9[_0x2f6191(0xf8)].ji = function() {
                this.tk();
            };
            _0xcdadb9[_0x2f6191(0xf8)].tk = function() {
                var _0x15fb85 = _0x2f6191;
                _0x338ba4[_0x15fb85(0x4d4)](_0x15fb85(0x31c), _0x15fb85(0x2d3));
                for (var _0xac1ab = 0x0; _0xac1ab < _0x25ee2b[_0x15fb85(0xde)]; _0xac1ab++) {
                    var _0x5cca59 = Math[_0x15fb85(0x3d8)](Math.random() * _0x25ee2b[_0x15fb85(0xde)]);
                    var _0x58ba7e = _0x25ee2b[_0xac1ab];
                    _0x25ee2b[_0xac1ab] = _0x25ee2b[_0x5cca59];
                    _0x25ee2b[_0x5cca59] = _0x58ba7e;
                }
                _0x338ba4[_0x15fb85(0x4d4)](_0x15fb85(0x31c), _0x25ee2b[0x0]);
                _0x1fcd45[_0x15fb85(0x4d4)](_0x15fb85(0x31c), _0x25ee2b[0x1]);
                _0x3b846d[_0x15fb85(0x4d4)](_0x15fb85(0x31c), _0x25ee2b[0x2]);
            };
            return _0xcdadb9;
        }();
        var _0x7533b9 = function() {
            var _0x13a48e = _0x17f9b3;
            $(_0x13a48e(0xcd));
            var _0x1ce828 = $(_0x13a48e(0x4e4));
            var _0x31b2f8 = $(_0x13a48e(0x4a4));
            var _0x334120 = $(_0x13a48e(0x396));
            var _0x27997c = $('#mm-skin-over');
            var _0x2b9a06 = $(_0x13a48e(0x352));
            var _0xe6d7de = $(_0x13a48e(0x2c2));
            var _0x2c7992 = $(_0x13a48e(0x138));
            var _0x5dacef = $(_0x13a48e(0x2ee));
            var _0x5da808 = $(_0x13a48e(0x25a));
            var _0x3db74f = $(_0x13a48e(0xd7));
            var _0x53273e = $(_0x13a48e(0x401));
            var _0x471cba = $(_0x13a48e(0x4fc));
            var _0x18c2b7 = $(_0x13a48e(0x1cb));
            var _0xc56807 = $(_0x13a48e(0x2cf));
            var _0xd1a88f = $(_0x13a48e(0x4be));
            var _0x45dc6d = $(_0x13a48e(0x2cc));
            var _0x227702 = $('#mm-player-avatar');
            var _0x294cd2 = $(_0x13a48e(0x2ba));
            var _0x313647 = $(_0x13a48e(0x331));
            var _0x4e5322 = $(_0x13a48e(0x466));
            var _0x38b651 = $('#mm-player-exp-val');
            var _0x477365 = $(_0x13a48e(0x373));
            var _0x4e7c7b = _0x51baad(_0x5f0b22, function() {
                var _0x1f1710 = _0x13a48e;
                _0x5f0b22.call(this, 0x1);
                var _0x59c9a5 = _0xbda0f3();
                this.uk = new _0x5a73b8(_0x1ce828);
                _0x2c7992[_0x1f1710(0x1e7)](function() {
                    _0x59c9a5.r.Cd();
                });
                _0x1ce828[_0x1f1710(0x1e7)](function() {
                    if (_0x59c9a5.u.P()) {
                        _0x59c9a5.r.Cd();
                        _0x59c9a5.s.I(_0x59c9a5.s.$h);
                    }
                });
                _0x31b2f8[_0x1f1710(0x1e7)](function() {
                    _0x59c9a5.r.Cd();
                    _0x59c9a5.t.Ah();
                });
                _0x334120[_0x1f1710(0x1e7)](function() {
                    _0x59c9a5.r.Cd();
                    _0x59c9a5.t.zh();
                });
                _0xe6d7de[_0x1f1710(0x490)](function(_0x1b3199) {
                    if (_0x1b3199.keyCode == 0xd) {
                        _0x59c9a5.na();
                    }
                });
                _0x5da808[_0x1f1710(0x1e7)](function() {
                    _0x59c9a5.r.Cd();
                    _0x59c9a5.na();
                });
                _0x3db74f[_0x1f1710(0x1e7)](function() {
                    _0x59c9a5.r.Cd();
                    _0x59c9a5.na();
                });
                _0x53273e.click(function() {
                    _0x59c9a5.r.Cd();
                    _0x59c9a5.s.I(_0x59c9a5.s.Zh);
                });
                _0xd1a88f[_0x1f1710(0x1e7)](function() {
                    _0x59c9a5.r.Cd();
                    _0x59c9a5.s.I(_0x59c9a5.s.xa);
                });
                _0x471cba[_0x1f1710(0x1e7)](function() {
                    if (_0x59c9a5.u.P()) {
                        _0x59c9a5.r.Cd();
                        _0x59c9a5.s.I(_0x59c9a5.s.Yh);
                    }
                });
                _0xc56807[_0x1f1710(0x1e7)](function() {
                    if (_0x59c9a5.u.P()) {
                        _0x59c9a5.r.Cd();
                        _0x59c9a5.s.I(_0x59c9a5.s.Xh);
                    }
                });
                _0x18c2b7.click(function() {
                    if (_0x59c9a5.u.P()) {
                        _0x59c9a5.r.Cd();
                        _0x59c9a5.s.I(_0x59c9a5.s._h);
                    }
                });
                _0x45dc6d[_0x1f1710(0x1e7)](function() {
                    if (_0x59c9a5.u.P()) {
                        _0x59c9a5.r.Cd();
                        _0x59c9a5.s.I(_0x59c9a5.s.Wh);
                    }
                });
                this.vk();
                this.wk();
                $('#final-continue').html(_0x1f1710(0x3f2));
                $(_0x1f1710(0xbb))[_0x1f1710(0x2b3)](_0x1f1710(0x51d));
                $(_0x1f1710(0x350))[_0x1f1710(0x1e7)](function() {
                    let _0x3d9051 = hoisinhnhanh;
                    if (_0x3d9051) {
                        anApp.r.Hd();
                        anApp.sa(_0x3d9051);
                    }
                });
                var _0x370806 = _0xdbcc88(_0x1a491c.va);
                if (_0x370806 != _0x1f1710(0x33b) && _0x370806 != _0x1f1710(0x2e9)) {
                    _0x370806 = _0x1f1710(0x33b);
                }
                _0x2c7992.val(_0x370806);
                console[_0x1f1710(0x483)](_0x1f1710(0x4b0) + _0x370806);
            });
            _0x4e7c7b[_0x13a48e(0xf8)].a = function() {
                var _0x68a29a = _0xbda0f3();
                var _0x1c6872 = this;
                _0x68a29a.u.V(function() {
                    _0x68a29a.s.F.xk();
                });
                _0x68a29a.u.Pi(function() {
                    if (_0x68a29a.u.P()) {
                        _0x68a29a.t.Bh(_0x68a29a.u.Di(), _0x45dfa9.ia);
                        _0x68a29a.t.Bh(_0x68a29a.u.Ei(), _0x45dfa9.ja);
                        _0x68a29a.t.Bh(_0x68a29a.u.Fi(), _0x45dfa9.ka);
                        _0x68a29a.t.Bh(_0x68a29a.u.Gi(), _0x45dfa9.la);
                        _0x68a29a.t.Bh(_0x68a29a.u.Hi(), _0x45dfa9.ma);
                    } else {
                        _0x68a29a.t.Bh(_0x68a29a.Ga(), _0x45dfa9.ia);
                        _0x68a29a.t.Bh(0x0, _0x45dfa9.ja);
                        _0x68a29a.t.Bh(0x0, _0x45dfa9.ka);
                        _0x68a29a.t.Bh(0x0, _0x45dfa9.la);
                        _0x68a29a.t.Bh(0x0, _0x45dfa9.ma);
                    }
                });
                _0x68a29a.u.Pi(function() {
                    var _0x3784f7 = _0x26a8;
                    _0x5da808[_0x3784f7(0x14e)](_0x68a29a.u.P());
                    _0x53273e[_0x3784f7(0x14e)](!_0x68a29a.u.P());
                    _0x3db74f[_0x3784f7(0x14e)](!_0x68a29a.u.P());
                    _0xc56807[_0x3784f7(0x14e)](_0x68a29a.u.P());
                    _0x18c2b7.toggle(_0x68a29a.u.P());
                    _0x45dc6d[_0x3784f7(0x14e)](_0x68a29a.u.P());
                    if (_0x68a29a.u.P()) {
                        _0x27997c[_0x3784f7(0x491)]();
                        _0x294cd2.html(_0x68a29a.u.wi());
                        _0x227702[_0x3784f7(0x371)](_0x3784f7(0x2f3), _0x68a29a.u.xi());
                        _0x313647[_0x3784f7(0x156)](_0x68a29a.u.zi());
                        _0x4e5322[_0x3784f7(0x4c1)](_0x68a29a.u.Bi() * 0x64 / _0x68a29a.u.Ci() + '%');
                        _0x38b651[_0x3784f7(0x156)](_0x68a29a.u.Bi() + " / " + _0x68a29a.u.Ci());
                        _0x477365.html(_0x68a29a.u.Ai());
                        _0xe6d7de.val(_0x68a29a.u.ga());
                    } else {
                        _0x27997c[_0x3784f7(0x14e)](_0x2f66a1.qk && !_0x68a29a.Ha());
                        _0x294cd2[_0x3784f7(0x156)](_0x294cd2[_0x3784f7(0x215)](_0x3784f7(0x41f)));
                        _0x227702.attr('src', _0x2dd7e8);
                        _0x313647.html('10');
                        _0x4e5322[_0x3784f7(0x4c1)]('0');
                        _0x38b651[_0x3784f7(0x156)]('');
                        _0x477365.html(0x1);
                        _0xe6d7de[_0x3784f7(0x246)](_0xdbcc88(_0x1a491c.Aa));
                    }
                });
                _0x68a29a.t.xh(function() {
                    _0x1c6872.uk.ak(_0x68a29a.t.ha(_0x45dfa9.ia), false, false);
                    _0x1c6872.uk.bk(_0x68a29a.t.ha(_0x45dfa9.ja), false, false);
                    _0x1c6872.uk.ck(_0x68a29a.t.ha(_0x45dfa9.ka), false, false);
                    _0x1c6872.uk.dk(_0x68a29a.t.ha(_0x45dfa9.la), false, false);
                    _0x1c6872.uk.ek(_0x68a29a.t.ha(_0x45dfa9.ma), false, false);
                });
            };
            _0x4e7c7b.prototype.ii = function() {
                var _0x3f7c8e = _0x13a48e;
                _0x5f0b22.fk[_0x3f7c8e(0x471)]();
                _0x5f0b22.fk[_0x3f7c8e(0x513)](0x32);
                _0x5f0b22.gk[_0x3f7c8e(0x471)]();
                _0x5f0b22.gk[_0x3f7c8e(0x513)](0x32);
                _0x5f0b22.hk.stop();
                _0x5f0b22.hk[_0x3f7c8e(0x4ab)](0x1f4);
                _0x5f0b22.ik[_0x3f7c8e(0x471)]();
                _0x5f0b22.ik[_0x3f7c8e(0x513)](0x32);
                _0x5f0b22.jk[_0x3f7c8e(0x471)]();
                _0x5f0b22.jk.fadeOut(0x32);
                _0x5f0b22.kk[_0x3f7c8e(0x471)]();
                _0x5f0b22.kk.fadeOut(0x32);
                _0x5f0b22.lk[_0x3f7c8e(0x471)]();
                _0x5f0b22.lk[_0x3f7c8e(0x4ab)](0x1);
                _0x5f0b22.di.stop();
                _0x5f0b22.di[_0x3f7c8e(0x4ab)](0x1f4);
                _0x220c89.Le(true);
                _0x5f0b22.nk[_0x3f7c8e(0x471)]();
                _0x5f0b22.nk[_0x3f7c8e(0x4ab)](0x1f4);
                _0x5f0b22.ok.stop();
                _0x5f0b22.ok[_0x3f7c8e(0x4ab)](0x1f4);
            };
            _0x4e7c7b[_0x13a48e(0xf8)].ji = function() {
                _0xbda0f3().r.Dd();
                this.uk.Le(true);
            };
            _0x4e7c7b.prototype.ei = function() {
                this.uk.Le(false);
            };
            _0x4e7c7b.prototype.Ra = function() {
                this.uk.Ra();
            };
            _0x4e7c7b[_0x13a48e(0xf8)].Pa = function(_0x40f506, _0x58bcb5) {
                this.uk.Pa();
            };
            _0x4e7c7b[_0x13a48e(0xf8)].ga = function() {
                var _0x2261bd = _0x13a48e;
                return _0xe6d7de[_0x2261bd(0x246)]();
            };
            _0x4e7c7b.prototype.D = function() {
                var _0x3c2052 = _0x13a48e;
                return _0x2c7992[_0x3c2052(0x246)]();
            };
            _0x4e7c7b.prototype.xk = function() {
                var _0x5d0b69 = _0x13a48e;
                _0x5dacef[_0x5d0b69(0x4cf)]();
            };
            _0x4e7c7b[_0x13a48e(0xf8)].vk = function() {
                var _0x38f46b = _0x13a48e;
                var _0x4092f4 = $(_0x38f46b(0x24d))[_0x38f46b(0x1a8)]();
                var _0x54d6f4 = 0x0;
                setInterval(function() {
                    _0x4092f4.eq(_0x54d6f4).fadeOut(0x1f4, function() {
                        var _0x4d1a0b = _0x26a8;
                        if (++_0x54d6f4 >= _0x4092f4.length) {
                            _0x54d6f4 = 0x0;
                        }
                        _0x4092f4.eq(_0x54d6f4)[_0x4d1a0b(0x4ab)](0x1f4)[_0x4d1a0b(0x4d4)](_0x4d1a0b(0x1fa), _0x4d1a0b(0xb7));
                    });
                }, 0xbb8);
            };
            _0x4e7c7b[_0x13a48e(0xf8)].wk = function() {
                var _0x5c5918 = _0x13a48e;

                function _0x595ad3() {
                    _0x443267.Ka(true);
                    setTimeout(function() {
                        var _0x4d2cbe = _0x26a8;
                        _0x27997c[_0x4d2cbe(0x491)]();
                    }, 0xbb8);
                }
                var _0x443267 = _0xbda0f3();
                if (_0x2f66a1.qk && !_0x443267.Ha()) {
                    _0x27997c.show();
                    var _0x2b5230 = _0x4a24e3('index.game.main.menu.unlockSkins.share');
                    var _0x26ed86 = encodeURIComponent(_0x4a24e3('index.game.main.menu.unlockSkins.comeAndPlay') + _0x5c5918(0x314));
                    var _0x3e4fb2 = encodeURIComponent(_0x4a24e3(_0x5c5918(0x10f)));
                    _0x2b9a06[_0x5c5918(0x53a)]($("<a class=\"mm-skin-over-button\" id=\"mm-skin-over-tw\" target=\"_blank\" href=\"http://twitter.com/intent/tweet?status=" + _0x26ed86 + _0x5c5918(0x46b) + _0x2b5230 + '</span></a>')[_0x5c5918(0x1e7)](_0x595ad3));
                    _0x2b9a06[_0x5c5918(0x53a)]($("<a class=\"mm-skin-over-button\" id=\"mm-skin-over-fb\" target=\"_blank\" href=\"https://www.facebook.com/dialog/share?app_id=861926850619051&display=popup&href=https%3A%2F%2Fwormate.io&redirect_uri=https%3A%2F%2Fwormate.io&hashtag=%23wormateio&quote=" + _0x3e4fb2 + _0x5c5918(0x40e) + _0x2b5230 + _0x5c5918(0x383))[_0x5c5918(0x1e7)](_0x595ad3));
                }
            };
            return _0x4e7c7b;
        }();
        var _0x3f8fac = function() {
            var _0x3b6b67 = _0x17f9b3;
            var _0x7afa0e = _0x51baad(_0x5f0b22, function() {
                var _0x3d7434 = _0x26a8;
                _0x5f0b22[_0x3d7434(0x13f)](this, 0x0);
            });
            _0x7afa0e[_0x3b6b67(0xf8)].a = function() {};
            _0x7afa0e[_0x3b6b67(0xf8)].ii = function() {
                var _0x3cf42b = _0x3b6b67;
                _0x5f0b22.fk[_0x3cf42b(0x471)]();
                _0x5f0b22.fk[_0x3cf42b(0x513)](0x32);
                _0x5f0b22.gk[_0x3cf42b(0x471)]();
                _0x5f0b22.gk.fadeOut(0x32);
                _0x5f0b22.hk.stop();
                _0x5f0b22.hk[_0x3cf42b(0x513)](0x32);
                _0x5f0b22.ik.stop();
                _0x5f0b22.ik[_0x3cf42b(0x513)](0x32);
                _0x5f0b22.jk[_0x3cf42b(0x471)]();
                _0x5f0b22.jk.fadeOut(0x32);
                _0x5f0b22.kk.stop();
                _0x5f0b22.kk.fadeOut(0x32);
                _0x5f0b22.lk.stop();
                _0x5f0b22.lk[_0x3cf42b(0x513)](0x1);
                _0x5f0b22.di.stop();
                _0x5f0b22.di[_0x3cf42b(0x513)](0x32);
                _0x220c89.Le(false);
                _0x5f0b22.nk[_0x3cf42b(0x471)]();
                _0x5f0b22.nk.fadeOut(0x32);
                _0x5f0b22.ok[_0x3cf42b(0x471)]();
                _0x5f0b22.ok[_0x3cf42b(0x513)](0x32);
            };
            return _0x7afa0e;
        }();
        var _0x208881 = function() {
            var _0x316f05 = _0x17f9b3;
            var _0x74259b = $('#toaster-stack');
            var _0x19ec3c = _0x51baad(_0x5f0b22, function() {
                var _0xb4fc4e = _0x26a8;
                _0x5f0b22[_0xb4fc4e(0x13f)](this, 0x0);
                this.yk = [];
                this.zk = null;
            });
            _0x19ec3c[_0x316f05(0xf8)].a = function() {};
            _0x19ec3c[_0x316f05(0xf8)].ii = function() {
                var _0x1a5d17 = _0x316f05;
                _0x5f0b22.fk[_0x1a5d17(0x471)]();
                _0x5f0b22.fk.fadeOut(0x32);
                _0x5f0b22.gk[_0x1a5d17(0x471)]();
                _0x5f0b22.gk.fadeOut(0x32);
                _0x5f0b22.hk[_0x1a5d17(0x471)]();
                _0x5f0b22.hk[_0x1a5d17(0x513)](0x32);
                _0x5f0b22.ik[_0x1a5d17(0x471)]();
                _0x5f0b22.ik.fadeOut(0x32);
                _0x5f0b22.jk[_0x1a5d17(0x471)]();
                _0x5f0b22.jk[_0x1a5d17(0x4ab)](0x1f4);
                _0x5f0b22.kk.stop();
                _0x5f0b22.kk[_0x1a5d17(0x513)](0x32);
                _0x5f0b22.lk[_0x1a5d17(0x471)]();
                _0x5f0b22.lk[_0x1a5d17(0x4ab)](0x1);
                _0x5f0b22.di[_0x1a5d17(0x471)]();
                _0x5f0b22.di[_0x1a5d17(0x4ab)](0x1f4);
                _0x220c89.Le(true);
                _0x5f0b22.nk[_0x1a5d17(0x471)]();
                _0x5f0b22.nk[_0x1a5d17(0x513)](0x32);
                _0x5f0b22.ok[_0x1a5d17(0x471)]();
                _0x5f0b22.ok.fadeIn(0x1f4);
            };
            _0x19ec3c[_0x316f05(0xf8)].ji = function() {
                this.Ak();
            };
            _0x19ec3c[_0x316f05(0xf8)].mi = function() {
                return this.zk != null || this.yk.length > 0x0;
            };
            _0x19ec3c[_0x316f05(0xf8)]._ = function(_0xca3ea5) {
                var _0x4fefef = _0x316f05;
                this.yk[_0x4fefef(0x130)](_0xca3ea5);
                setTimeout(function() {
                    _0xbda0f3().s.ki();
                }, 0x0);
            };
            _0x19ec3c[_0x316f05(0xf8)].Ti = function(_0x5c53f1) {
                this.yk.push(_0x5c53f1);
                setTimeout(function() {
                    _0xbda0f3().s.ki();
                }, 0x0);
            };
            _0x19ec3c[_0x316f05(0xf8)].Ak = function() {
                var _0x464215 = _0x316f05;
                var _0x5da24f = this;
                if (this.zk == null) {
                    if (this.yk[_0x464215(0xde)] == 0x0) {
                        _0xbda0f3().s.gi();
                        return;
                    }
                    var _0x1f7cf5 = this.yk[_0x464215(0x1f6)]();
                    this.zk = _0x1f7cf5;
                    var _0x33b820 = _0x1f7cf5.Bk();
                    _0x33b820[_0x464215(0x491)]();
                    _0x33b820[_0x464215(0x4ab)](0x12c);
                    _0x74259b[_0x464215(0x53a)](_0x33b820);
                    _0x1f7cf5.Ck = function() {
                        var _0x5124f3 = _0x464215;
                        _0x33b820[_0x5124f3(0x513)](0x12c);
                        setTimeout(function() {
                            _0x33b820.remove();
                        }, 0x12c);
                        if (_0x5da24f.zk == _0x1f7cf5) {
                            _0x5da24f.zk = null;
                        }
                        _0x5da24f.Ak();
                    };
                    _0x1f7cf5.ji();
                }
            };
            return _0x19ec3c;
        }();
        var _0x3b9f03 = function() {
            var _0x5dd285 = _0x17f9b3;
            var _0x4487f4 = $(_0x5dd285(0x51a));
            var _0x38467f = $('#popup-menu-coins-box');
            var _0x4390b2 = $(_0x5dd285(0x301));
            $(_0x5dd285(0x10c))[_0x5dd285(0x1e7)](function() {
                var _0x2333b9 = _0xbda0f3();
                _0x2333b9.r.Cd();
                _0x2333b9.s.gi();
            });
            _0x38467f[_0x5dd285(0x1e7)](function() {
                var _0x2da7a8 = _0xbda0f3();
                if (_0x2da7a8.u.P()) {
                    _0x2da7a8.r.Cd();
                    _0x2da7a8.s.I(_0x2da7a8.s.Wh);
                }
            });
            var _0x4793f1 = _0x51baad(_0x5f0b22, function(_0x157070, _0x4076b1) {
                var _0x34696e = _0x5dd285;
                _0x5f0b22[_0x34696e(0x13f)](this, 0x1);
                this.ad = _0x157070;
                this.Dk = _0x4076b1;
            });
            _0x4793f1[_0x5dd285(0xf8)].a = function() {
                var _0x499e96 = _0x5dd285;
                _0x4793f1[_0x499e96(0xfa)][_0x499e96(0xf8)].a[_0x499e96(0x13f)](this);
                if (!_0x4793f1.Ek) {
                    _0x4793f1.Ek = true;
                    var _0x54cd83 = _0xbda0f3();
                    _0x54cd83.u.Pi(function() {
                        var _0x34254d = _0x499e96;
                        if (_0x54cd83.u.P()) {
                            _0x4390b2.html(_0x54cd83.u.zi());
                        } else {
                            _0x4390b2[_0x34254d(0x156)]('0');
                        }
                    });
                }
            };
            _0x4793f1.Fk = $(_0x5dd285(0x2f6));
            _0x4793f1.Gk = $(_0x5dd285(0x324));
            _0x4793f1.Hk = $(_0x5dd285(0x15b));
            _0x4793f1.Ik = $(_0x5dd285(0x102));
            _0x4793f1.Jk = $(_0x5dd285(0x429));
            _0x4793f1.Kk = $(_0x5dd285(0x34f));
            _0x4793f1.Lk = $(_0x5dd285(0x39c));
            _0x4793f1.Mk = $(_0x5dd285(0x22b));
            _0x4793f1.Nk = $(_0x5dd285(0x385));
            _0x4793f1.Ok = $(_0x5dd285(0x258));
            _0x4793f1.Pk = $(_0x5dd285(0x157));
            _0x4793f1[_0x5dd285(0xf8)].ii = function() {
                var _0x105e61 = _0x5dd285;
                _0x5f0b22.fk[_0x105e61(0x471)]();
                _0x5f0b22.fk[_0x105e61(0x513)](0xc8);
                _0x5f0b22.gk[_0x105e61(0x471)]();
                _0x5f0b22.gk.fadeOut(0xc8);
                _0x5f0b22.hk[_0x105e61(0x471)]();
                _0x5f0b22.hk.fadeOut(0xc8);
                _0x5f0b22.ik.stop();
                _0x5f0b22.ik[_0x105e61(0x4ab)](0xc8);
                _0x5f0b22.jk[_0x105e61(0x471)]();
                _0x5f0b22.jk[_0x105e61(0x513)](0xc8);
                _0x5f0b22.kk.stop();
                _0x5f0b22.kk[_0x105e61(0x513)](0xc8);
                _0x5f0b22.nk[_0x105e61(0x471)]();
                _0x5f0b22.nk[_0x105e61(0x4ab)](0xc8);
                _0x5f0b22.ok[_0x105e61(0x471)]();
                _0x5f0b22.ok.fadeIn(0xc8);
                _0x4487f4[_0x105e61(0x156)](this.ad);
                _0x38467f.toggle(this.Dk);
                this.Qk();
                this.Rk();
            };
            _0x4793f1[_0x5dd285(0xf8)].Rk = function() {};
            _0x4793f1[_0x5dd285(0xf8)].Sk = function() {
                _0x3b9f03.Pk.stop();
                _0x3b9f03.Pk.fadeIn(0x12c);
            };
            _0x4793f1[_0x5dd285(0xf8)].Qk = function() {
                var _0x4e5550 = _0x5dd285;
                _0x3b9f03.Pk[_0x4e5550(0x471)]();
                _0x3b9f03.Pk[_0x4e5550(0x513)](0x12c);
            };
            return _0x4793f1;
        }();
        var _0xdc9444 = function() {
            var _0xd56472 = _0x17f9b3;
            var _0x204ee4 = $('#store-buy-coins_125000');
            var _0x6b5e2c = $('#store-buy-coins_50000');
            var _0x15cfc5 = $(_0xd56472(0x1fc));
            var _0x7c1426 = $(_0xd56472(0x308));
            var _0x3fce3f = $(_0xd56472(0x3a2));
            var _0x50f731 = $('#store-buy-coins_1250');
            var _0x277eac = _0x51baad(_0x3b9f03, function() {
                var _0x58e623 = _0xd56472;
                _0x3b9f03.call(this, _0x4a24e3(_0x58e623(0x463)), false);
                var _0x101b08 = _0xbda0f3();
                var _0x50e1ff = this;
                _0x204ee4.click(function() {
                    _0x101b08.r.Cd();
                    _0x50e1ff.Tk('coins_125000');
                });
                _0x6b5e2c[_0x58e623(0x1e7)](function() {
                    var _0x55a346 = _0x58e623;
                    _0x101b08.r.Cd();
                    _0x50e1ff.Tk(_0x55a346(0x3ff));
                });
                _0x15cfc5[_0x58e623(0x1e7)](function() {
                    _0x101b08.r.Cd();
                    _0x50e1ff.Tk('coins_16000');
                });
                _0x7c1426[_0x58e623(0x1e7)](function() {
                    var _0x85a951 = _0x58e623;
                    _0x101b08.r.Cd();
                    _0x50e1ff.Tk(_0x85a951(0x185));
                });
                _0x3fce3f[_0x58e623(0x1e7)](function() {
                    _0x101b08.r.Cd();
                    _0x50e1ff.Tk('coins_3250');
                });
                _0x50f731.click(function() {
                    var _0x5855a7 = _0x58e623;
                    _0x101b08.r.Cd();
                    _0x50e1ff.Tk(_0x5855a7(0x2c6));
                });
            });
            _0x277eac[_0xd56472(0xf8)].a = function() {
                var _0x59315d = _0xd56472;
                _0x277eac.parent[_0x59315d(0xf8)].a[_0x59315d(0x13f)](this);
            };
            _0x277eac[_0xd56472(0xf8)].Rk = function() {
                var _0x2164f5 = _0xd56472;
                _0x3b9f03.Fk.stop();
                _0x3b9f03.Fk[_0x2164f5(0x4ab)](0xc8);
                _0x3b9f03.Gk[_0x2164f5(0x471)]();
                _0x3b9f03.Gk[_0x2164f5(0x513)](0x32);
                _0x3b9f03.Hk[_0x2164f5(0x471)]();
                _0x3b9f03.Hk.fadeOut(0x32);
                _0x3b9f03.Jk.stop();
                _0x3b9f03.Jk[_0x2164f5(0x513)](0x32);
                _0x3b9f03.Ik.stop();
                _0x3b9f03.Ik.fadeOut(0x32);
                _0x3b9f03.Kk[_0x2164f5(0x471)]();
                _0x3b9f03.Kk[_0x2164f5(0x513)](0x32);
                _0x3b9f03.Lk[_0x2164f5(0x471)]();
                _0x3b9f03.Lk[_0x2164f5(0x513)](0x32);
                _0x3b9f03.Mk.stop();
                _0x3b9f03.Mk.fadeOut(0x32);
                _0x3b9f03.Nk[_0x2164f5(0x471)]();
                _0x3b9f03.Nk[_0x2164f5(0x513)](0x32);
                _0x3b9f03.Ok[_0x2164f5(0x471)]();
                _0x3b9f03.Ok[_0x2164f5(0x513)](0x32);
            };
            _0x277eac.prototype.ji = function() {
                _0xbda0f3().r.Dd();
            };
            _0x277eac[_0xd56472(0xf8)].Tk = function(_0x19accc) {};
            return _0x277eac;
        }();
        var _0x486961 = function() {
            var _0x149706 = _0x17f9b3;
            var _0x141d7c = $(_0x149706(0x2b6));
            var _0x4db2a0 = $(_0x149706(0x424));
            var _0xdf0782 = $('#leaders-button-highscore');
            var _0x89ab2f = $(_0x149706(0x278));
            var _0x407fc5 = _0x51baad(_0x3b9f03, function() {
                var _0x456603 = _0x149706;
                _0x3b9f03[_0x456603(0x13f)](this, _0x4a24e3(_0x456603(0x440)), true);
                var _0x4c9e83 = _0xbda0f3();
                var _0x4f3380 = this;
                this.Uk = {};
                this.Vk = {
                    'Wk': {
                        'Xk': _0x4db2a0,
                        'Yk': 'byLevel'
                    },
                    'Zk': {
                        'Xk': _0xdf0782,
                        'Yk': 'byHighScore'
                    },
                    '$k': {
                        'Xk': _0x89ab2f,
                        'Yk': 'byKillsAndHeadShots'
                    }
                };
                _0x4db2a0[_0x456603(0x1e7)](function() {
                    _0x4c9e83.r.Cd();
                    _0x4f3380._k(_0x4f3380.Vk.Wk);
                });
                _0xdf0782.click(function() {
                    _0x4c9e83.r.Cd();
                    _0x4f3380._k(_0x4f3380.Vk.Zk);
                });
                _0x89ab2f[_0x456603(0x1e7)](function() {
                    _0x4c9e83.r.Cd();
                    _0x4f3380._k(_0x4f3380.Vk.$k);
                });
            });
            _0x407fc5[_0x149706(0xf8)].a = function() {
                var _0x15a307 = _0x149706;
                _0x407fc5.parent[_0x15a307(0xf8)].a.call(this);
            };
            _0x407fc5[_0x149706(0xf8)].Rk = function() {
                var _0x533849 = _0x149706;
                _0x3b9f03.Fk[_0x533849(0x471)]();
                _0x3b9f03.Fk.fadeOut(0x32);
                _0x3b9f03.Gk.stop();
                _0x3b9f03.Gk[_0x533849(0x4ab)](0xc8);
                _0x3b9f03.Hk.stop();
                _0x3b9f03.Hk[_0x533849(0x513)](0x32);
                _0x3b9f03.Jk.stop();
                _0x3b9f03.Jk[_0x533849(0x513)](0x32);
                _0x3b9f03.Ik[_0x533849(0x471)]();
                _0x3b9f03.Ik.fadeOut(0x32);
                _0x3b9f03.Kk[_0x533849(0x471)]();
                _0x3b9f03.Kk[_0x533849(0x513)](0x32);
                _0x3b9f03.Lk[_0x533849(0x471)]();
                _0x3b9f03.Lk.fadeOut(0x32);
                _0x3b9f03.Mk[_0x533849(0x471)]();
                _0x3b9f03.Mk[_0x533849(0x513)](0x32);
                _0x3b9f03.Nk[_0x533849(0x471)]();
                _0x3b9f03.Nk[_0x533849(0x513)](0x32);
                _0x3b9f03.Ok[_0x533849(0x471)]();
                _0x3b9f03.Ok[_0x533849(0x513)](0x32);
            };
            _0x407fc5[_0x149706(0xf8)].ji = function() {
                var _0x25ad71 = _0x149706;
                _0xbda0f3().r.Dd();
                var _0x5cf510 = this;
                this.Sk();
                $[_0x25ad71(0x1a6)](_0x4cc214 + '/pub/leaders', function(_0x2bb035) {
                    _0x5cf510.Uk = _0x2bb035;
                    _0x5cf510._k(_0x5cf510.al ?? _0x5cf510.Vk.Wk);
                    _0x5cf510.Qk();
                }).done(function() {
                    _0x5cf510.Qk();
                });
            };
            _0x407fc5[_0x149706(0xf8)]._k = function(_0x356a65) {
                var _0x5cfd7f = _0x149706;
                this.al = _0x356a65;
                for (var _0x5ed432 in this.Vk) {
                    if (this.Vk.hasOwnProperty(_0x5ed432)) {
                        var _0x4ecd94 = this.Vk[_0x5ed432];
                        _0x4ecd94.Xk[_0x5cfd7f(0x453)](_0x5cfd7f(0x20e));
                    }
                }
                this.al.Xk[_0x5cfd7f(0x44f)](_0x5cfd7f(0x20e));
                var _0x5a3f30 = this.Uk[this.al.Yk];
                var _0x54ec6b = '';
                for (var _0xd58bbc = 0x0; _0xd58bbc < _0x5a3f30[_0x5cfd7f(0xde)]; _0xd58bbc++) {
                    var _0x5b1115 = _0x5a3f30[_0xd58bbc];
                    _0x54ec6b += _0x5cfd7f(0x2fb) + (_0xd58bbc + 0x1) + "</span><span><img src=\"" + _0x5b1115[_0x5cfd7f(0x124)] + _0x5cfd7f(0x137) + _0x5b1115.username + '</span><span>' + _0x5b1115[_0x5cfd7f(0x4b7)] + _0x5cfd7f(0x422) + _0x5b1115[_0x5cfd7f(0x196)] + _0x5cfd7f(0x422) + _0x5b1115.headShots + _0x5cfd7f(0x113) + _0x5b1115[_0x5cfd7f(0x2c5)] + _0x5cfd7f(0x518);
                }
                _0x141d7c[_0x5cfd7f(0x288)]();
                _0x141d7c[_0x5cfd7f(0x53a)](_0x54ec6b);
            };
            return _0x407fc5;
        }();
        var _0x503836 = function() {
            var _0x285f13 = _0x17f9b3;
            var _0x3c39f2 = $(_0x285f13(0xd8));
            var _0x315b71 = $(_0x285f13(0x52a));
            var _0x214143 = _0x51baad(_0x3b9f03, function() {
                var _0x11eab6 = _0x285f13;
                _0x3b9f03.call(this, _0x4a24e3(_0x11eab6(0x4c0)), false);
                var _0x2e363c = _0xbda0f3();
                var _0x295486 = this;
                _0x3c39f2[_0x11eab6(0x1e7)](function() {
                    _0x2e363c.r.Cd();
                    _0x295486.Sk();
                    _0x2e363c.u.Qi(function() {
                        _0x295486.Qk();
                    });
                    setTimeout(function() {
                        _0x295486.Qk();
                    }, 0x2710);
                    _0x2e363c.u.Zi();
                });
                _0x315b71[_0x11eab6(0x1e7)](function() {
                    _0x2e363c.r.Cd();
                    _0x295486.Sk();
                    _0x2e363c.u.Qi(function() {
                        _0x295486.Qk();
                    });
                    setTimeout(function() {
                        _0x295486.Qk();
                    }, 0x2710);
                    _0x2e363c.u.Vi();
                });
            });
            _0x214143[_0x285f13(0xf8)].a = function() {
                var _0x42721d = _0x285f13;
                _0x214143[_0x42721d(0xfa)][_0x42721d(0xf8)].a[_0x42721d(0x13f)](this);
            };
            _0x214143[_0x285f13(0xf8)].Rk = function() {
                var _0x1d0bee = _0x285f13;
                _0x3b9f03.Fk[_0x1d0bee(0x471)]();
                _0x3b9f03.Fk[_0x1d0bee(0x513)](0x32);
                _0x3b9f03.Gk[_0x1d0bee(0x471)]();
                _0x3b9f03.Gk.fadeOut(0x32);
                _0x3b9f03.Hk[_0x1d0bee(0x471)]();
                _0x3b9f03.Hk.fadeOut(0x32);
                _0x3b9f03.Jk[_0x1d0bee(0x471)]();
                _0x3b9f03.Jk[_0x1d0bee(0x4ab)](0xc8);
                _0x3b9f03.Ik.stop();
                _0x3b9f03.Ik[_0x1d0bee(0x513)](0x32);
                _0x3b9f03.Kk[_0x1d0bee(0x471)]();
                _0x3b9f03.Kk[_0x1d0bee(0x513)](0x32);
                _0x3b9f03.Lk[_0x1d0bee(0x471)]();
                _0x3b9f03.Lk.fadeOut(0x32);
                _0x3b9f03.Mk.stop();
                _0x3b9f03.Mk[_0x1d0bee(0x513)](0x32);
                _0x3b9f03.Nk[_0x1d0bee(0x471)]();
                _0x3b9f03.Nk.fadeOut(0x32);
                _0x3b9f03.Ok[_0x1d0bee(0x471)]();
                _0x3b9f03.Ok[_0x1d0bee(0x513)](0x32);
            };
            _0x214143.prototype.ji = function() {
                _0xbda0f3().r.Dd();
            };
            return _0x214143;
        }();
        var _0x10c855 = function() {
            var _0x299108 = _0x17f9b3;
            var _0x5ecf83 = $(_0x299108(0x241));
            var _0x4ad97a = $(_0x299108(0x528));
            var _0x58c724 = $('#profile-experience-bar');
            var _0x2c1e0d = $(_0x299108(0x2b1));
            var _0x23d4e6 = $(_0x299108(0x2c9));
            var _0x4e8095 = $(_0x299108(0x393));
            var _0x73b138 = $(_0x299108(0x256));
            var _0x420f14 = $(_0x299108(0x1e2));
            var _0x2e8fd8 = $(_0x299108(0x427));
            var _0x1f7c3a = $(_0x299108(0x154));
            var _0x4d86c4 = $('#profile-stat-totalTimeSpent');
            var _0x2e8bd1 = $(_0x299108(0x511));
            var _0x35dc2b = _0x51baad(_0x3b9f03, function() {
                var _0x180204 = _0x299108;
                _0x3b9f03[_0x180204(0x13f)](this, _0x4a24e3(_0x180204(0x473)), true);
            });
            _0x35dc2b[_0x299108(0xf8)].a = function() {
                var _0x5b4588 = _0x299108;
                _0x35dc2b[_0x5b4588(0xfa)][_0x5b4588(0xf8)].a.call(this);
            };
            _0x35dc2b[_0x299108(0xf8)].Rk = function() {
                var _0x992670 = _0x299108;
                _0x3b9f03.Fk[_0x992670(0x471)]();
                _0x3b9f03.Fk.fadeOut(0x32);
                _0x3b9f03.Gk.stop();
                _0x3b9f03.Gk.fadeOut(0x32);
                _0x3b9f03.Hk[_0x992670(0x471)]();
                _0x3b9f03.Hk[_0x992670(0x4ab)](0xc8);
                _0x3b9f03.Jk.stop();
                _0x3b9f03.Jk.fadeOut(0x32);
                _0x3b9f03.Ik[_0x992670(0x471)]();
                _0x3b9f03.Ik[_0x992670(0x513)](0x32);
                _0x3b9f03.Kk[_0x992670(0x471)]();
                _0x3b9f03.Kk[_0x992670(0x513)](0x32);
                _0x3b9f03.Lk[_0x992670(0x471)]();
                _0x3b9f03.Lk[_0x992670(0x513)](0x32);
                _0x3b9f03.Mk[_0x992670(0x471)]();
                _0x3b9f03.Mk[_0x992670(0x513)](0x32);
                _0x3b9f03.Nk[_0x992670(0x471)]();
                _0x3b9f03.Nk[_0x992670(0x513)](0x32);
                _0x3b9f03.Ok[_0x992670(0x471)]();
                _0x3b9f03.Ok[_0x992670(0x513)](0x32);
            };
            _0x35dc2b[_0x299108(0xf8)].ji = function() {
                var _0x297663 = _0x299108;
                var _0xfd129d = _0xbda0f3();
                _0xfd129d.r.Dd();
                var _0x3e3781 = _0xfd129d.u.Oi();
                var _0x1a422d = moment([_0x3e3781.year, _0x3e3781[_0x297663(0x2fa)] - 0x1, _0x3e3781[_0x297663(0x38b)]])[_0x297663(0xc5)]('LL');
                _0x4ad97a.html(_0xfd129d.u.wi());
                _0x5ecf83[_0x297663(0x371)](_0x297663(0x2f3), _0xfd129d.u.xi());
                _0x58c724[_0x297663(0x4c1)](_0xfd129d.u.Bi() * 0x64 / _0xfd129d.u.Ci() + '%');
                _0x2c1e0d[_0x297663(0x156)](_0xfd129d.u.Bi() + _0x297663(0x113) + _0xfd129d.u.Ci());
                _0x23d4e6[_0x297663(0x156)](_0xfd129d.u.Ai());
                _0x4e8095[_0x297663(0x156)](_0xfd129d.u.Ii());
                _0x73b138[_0x297663(0x156)](_0x391bcd(_0xfd129d.u.Ji()));
                _0x420f14[_0x297663(0x156)](_0xfd129d.u.Ki());
                _0x2e8fd8[_0x297663(0x156)](_0xfd129d.u.Li());
                _0x1f7c3a.html(_0xfd129d.u.Mi());
                _0x4d86c4[_0x297663(0x156)](_0x391bcd(_0xfd129d.u.Ni()));
                _0x2e8bd1[_0x297663(0x156)](_0x1a422d);
            };
            return _0x35dc2b;
        }();
        var _0x430e34 = function() {
            var _0x1b820f = _0x17f9b3;
            var _0x50e72a = $(_0x1b820f(0x369));
            var _0x54e307 = $(_0x1b820f(0xb3));
            var _0x360aa5 = $(_0x1b820f(0x46c));
            var _0x2bd385 = $('#popup-logout');
            var _0x243223 = $(_0x1b820f(0x4b5));
            var _0xc7b1f6 = $(_0x1b820f(0x2e5));
            var _0x5a5854 = $(_0x1b820f(0x351));
            var _0x291dbd = $('#popup-withdraw-consent');
            var _0x932e29 = _0x51baad(_0x3b9f03, function() {
                var _0x442c98 = _0x1b820f;
                _0x3b9f03[_0x442c98(0x13f)](this, _0x4a24e3('index.game.popup.menu.settings.tab'), false);
                var _0x5a8973 = this;
                var _0x2635d9 = _0xbda0f3();
                _0x50e72a[_0x442c98(0x1e7)](function() {
                    var _0x54a154 = _0x442c98;
                    var _0x51153b = !!_0x50e72a[_0x54a154(0x21e)](_0x54a154(0x40a));
                    _0x184caa(_0x1a491c.Me, _0x51153b, 0x1e);
                    _0x2635d9.r.td(_0x51153b);
                    _0x2635d9.r.Cd();
                });
                _0x54e307.click(function() {
                    var _0x2791ea = _0x442c98;
                    var _0x23b90a = !!_0x54e307.prop(_0x2791ea(0x40a));
                    _0x184caa(_0x1a491c.Ne, _0x23b90a, 0x1e);
                    _0x2635d9.r.rd(_0x23b90a);
                    _0x2635d9.r.Cd();
                });
                _0x360aa5[_0x442c98(0x1e7)](function() {
                    _0x2635d9.r.Cd();
                });
                _0x2bd385[_0x442c98(0x1e7)](function() {
                    _0x2635d9.r.Cd();
                    _0x5a8973.Sk();
                    setTimeout(function() {
                        _0x5a8973.Qk();
                    }, 0x7d0);
                    _0x2635d9.u.Wi();
                });
                _0xc7b1f6[_0x442c98(0x1e7)](function() {
                    if (_0x2635d9.u.P()) {
                        _0x2635d9.r.Cd();
                        _0x2635d9.s.I(_0x2635d9.s.Vh);
                    } else {
                        _0x2635d9.r.Hd();
                    }
                });
                _0x291dbd[_0x442c98(0x1e7)](function() {
                    if (_0x2635d9.Y()) {
                        _0x2635d9.r.Cd();
                        _0x2635d9.s.I(_0x2635d9.s.Uh);
                    } else {
                        _0x2635d9.r.Hd();
                    }
                });
            });
            _0x932e29.prototype.a = function() {
                var _0x1690a8 = _0x1b820f;
                _0x932e29[_0x1690a8(0xfa)].prototype.a[_0x1690a8(0x13f)](this);
                var _0x7a5f5b = _0xbda0f3();
                var _0x4a0e77 = undefined;
                switch (_0xdbcc88(_0x1a491c.Me)) {
                    case _0x1690a8(0x28f):
                        _0x4a0e77 = false;
                        break;
                    default:
                        _0x4a0e77 = true;
                }
                _0x50e72a[_0x1690a8(0x21e)](_0x1690a8(0x40a), _0x4a0e77);
                _0x7a5f5b.r.td(_0x4a0e77);
                var _0x4b3cff = undefined;
                switch (_0xdbcc88(_0x1a491c.Ne)) {
                    case _0x1690a8(0x28f):
                        _0x4b3cff = false;
                        break;
                    default:
                        _0x4b3cff = true;
                }
                _0x54e307[_0x1690a8(0x21e)]('checked', _0x4b3cff);
                _0x7a5f5b.r.rd(_0x4b3cff);
                var _0x14e3ae = undefined;
                switch (_0xdbcc88(_0x1a491c.ya)) {
                    case _0x1690a8(0x28f):
                        _0x14e3ae = false;
                        break;
                    default:
                        _0x14e3ae = true;
                }
                console.log("Load sPN: " + _0x14e3ae);
                _0x360aa5.prop(_0x1690a8(0x40a), _0x14e3ae);
                _0x7a5f5b.u.V(function() {
                    var _0x1496d0 = _0x1690a8;
                    _0x243223[_0x1496d0(0x14e)](_0x7a5f5b.u.P());
                    _0x5a5854.toggle(_0x7a5f5b.u.P());
                });
            };
            _0x932e29[_0x1b820f(0xf8)].Rk = function() {
                var _0x1bb98b = _0x1b820f;
                _0x3b9f03.Fk[_0x1bb98b(0x471)]();
                _0x3b9f03.Fk.fadeOut(0x32);
                _0x3b9f03.Gk[_0x1bb98b(0x471)]();
                _0x3b9f03.Gk[_0x1bb98b(0x513)](0x32);
                _0x3b9f03.Hk[_0x1bb98b(0x471)]();
                _0x3b9f03.Hk[_0x1bb98b(0x513)](0x32);
                _0x3b9f03.Jk[_0x1bb98b(0x471)]();
                _0x3b9f03.Jk[_0x1bb98b(0x513)](0x32);
                _0x3b9f03.Ik.stop();
                _0x3b9f03.Ik.fadeIn(0xc8);
                _0x3b9f03.Kk[_0x1bb98b(0x471)]();
                _0x3b9f03.Kk[_0x1bb98b(0x513)](0x32);
                _0x3b9f03.Lk.stop();
                _0x3b9f03.Lk[_0x1bb98b(0x513)](0x32);
                _0x3b9f03.Mk[_0x1bb98b(0x471)]();
                _0x3b9f03.Mk[_0x1bb98b(0x513)](0x32);
                _0x3b9f03.Nk[_0x1bb98b(0x471)]();
                _0x3b9f03.Nk[_0x1bb98b(0x513)](0x32);
                _0x3b9f03.Ok[_0x1bb98b(0x471)]();
                _0x3b9f03.Ok[_0x1bb98b(0x513)](0x32);
            };
            _0x932e29.prototype.ji = function() {
                var _0x11c277 = _0x1b820f;
                var _0x473b81 = _0xbda0f3();
                _0x473b81.r.Dd();
                if (_0x473b81.Y()) {
                    _0x291dbd[_0x11c277(0x4cf)]();
                } else {
                    _0x291dbd[_0x11c277(0x491)]();
                }
            };
            _0x932e29.prototype.wa = function() {
                var _0x5317a7 = _0x1b820f;
                return _0x360aa5[_0x5317a7(0x21e)](_0x5317a7(0x40a));
            };
            return _0x932e29;
        }();
        var _0x531e76 = function() {
            var _0x14ac8b = _0x17f9b3;
            var _0x37e059 = $('#store-view-canv');
            var _0x5dd3b9 = $(_0x14ac8b(0x344));
            var _0xba74c6 = $('#skin-group-description-text');
            var _0x25ea31 = $('#store-locked-bar');
            var _0x4931fc = $(_0x14ac8b(0x291));
            var _0x43e9ba = $(_0x14ac8b(0x4ce));
            var _0x58bd49 = $(_0x14ac8b(0x312));
            var _0x5dd39b = $('#store-groups');
            var _0xcb11f1 = $(_0x14ac8b(0x367));
            var _0x59ee9f = $('#store-view-next');
            var _0x1bd370 = _0x51baad(_0x3b9f03, function() {
                var _0x522140 = _0x14ac8b;
                _0x3b9f03[_0x522140(0x13f)](this, _0x4a24e3(_0x522140(0x108)), true);
                var _0x2ffb83 = this;
                var _0x4a3099 = _0xbda0f3();
                this.bl = null;
                this.cl = [];
                this.dl = {};
                this.el = new _0x5a73b8(_0x37e059);
                _0x43e9ba[_0x522140(0x1e7)](function() {
                    _0x4a3099.r.Cd();
                    _0x2ffb83.fl();
                });
                _0xcb11f1[_0x522140(0x1e7)](function() {
                    _0x4a3099.r.Cd();
                    _0x2ffb83.bl.gl();
                });
                _0x59ee9f.click(function() {
                    _0x4a3099.r.Cd();
                    _0x2ffb83.bl.hl();
                });
            });
            _0x1bd370[_0x14ac8b(0xf8)].a = function() {
                var _0x11c69e = _0x14ac8b;
                _0x1bd370[_0x11c69e(0xfa)].prototype.a[_0x11c69e(0x13f)](this);
                var _0x28a514 = this;
                var _0x16ded8 = _0xbda0f3();
                _0x16ded8.p.ca(function() {
                    var _0x4c8920 = _0x11c69e;
                    var _0x1175e2 = _0x16ded8.p.Ac();
                    if (_0x1175e2 != null) {
                        _0x28a514.cl = [];
                        for (var _0x548b5f = 0x0; _0x548b5f < _0x1175e2.skinGroupArrayDict[_0x4c8920(0xde)]; _0x548b5f++) {
                            _0x28a514.cl[_0x4c8920(0x3d7)](new _0x1c68ee(_0x28a514, _0x1175e2[_0x4c8920(0x100)][_0x548b5f]));
                        }
                        _0x28a514.dl = {};
                        for (var _0x5d44ca = 0x0; _0x5d44ca < _0x1175e2[_0x4c8920(0x4ef)][_0x4c8920(0xde)]; _0x5d44ca++) {
                            var _0x2c9b46 = _0x1175e2[_0x4c8920(0x4ef)][_0x5d44ca];
                            _0x28a514.dl[_0x2c9b46.id] = _0x2c9b46;
                        }
                    }
                });
                this.il(false);
                _0x16ded8.t.xh(function() {
                    _0x28a514.il(false);
                });
            };
            _0x1bd370[_0x14ac8b(0xf8)].Rk = function() {
                var _0x237e6e = _0x14ac8b;
                _0x3b9f03.Fk[_0x237e6e(0x471)]();
                _0x3b9f03.Fk[_0x237e6e(0x513)](0x32);
                _0x3b9f03.Gk[_0x237e6e(0x471)]();
                _0x3b9f03.Gk[_0x237e6e(0x513)](0x32);
                _0x3b9f03.Hk[_0x237e6e(0x471)]();
                _0x3b9f03.Hk[_0x237e6e(0x513)](0x32);
                _0x3b9f03.Jk[_0x237e6e(0x471)]();
                _0x3b9f03.Jk[_0x237e6e(0x513)](0x32);
                _0x3b9f03.Ik[_0x237e6e(0x471)]();
                _0x3b9f03.Ik[_0x237e6e(0x513)](0x32);
                _0x3b9f03.Kk[_0x237e6e(0x471)]();
                _0x3b9f03.Kk.fadeIn(0xc8);
                _0x3b9f03.Lk[_0x237e6e(0x471)]();
                _0x3b9f03.Lk.fadeOut(0x32);
                _0x3b9f03.Mk.stop();
                _0x3b9f03.Mk[_0x237e6e(0x513)](0x32);
                _0x3b9f03.Nk[_0x237e6e(0x471)]();
                _0x3b9f03.Nk[_0x237e6e(0x513)](0x32);
                _0x3b9f03.Ok[_0x237e6e(0x471)]();
                _0x3b9f03.Ok[_0x237e6e(0x513)](0x32);
            };
            _0x1bd370.prototype.ji = function() {
                _0xbda0f3().r.Dd();
                this.jl();
                this.el.Le(true);
            };
            _0x1bd370[_0x14ac8b(0xf8)].ei = function() {
                this.el.Le(false);
            };
            _0x1bd370[_0x14ac8b(0xf8)].Ra = function() {
                this.el.Ra();
            };
            _0x1bd370.prototype.Pa = function(_0x4d72be, _0x10f37c) {
                this.el.Pa();
            };
            _0x1bd370[_0x14ac8b(0xf8)].jl = function() {
                var _0x57be93 = _0x14ac8b;
                var _0x477cef = this;
                var _0x212cf4 = this;
                var _0x1c2f51 = _0xbda0f3();
                _0x5dd39b[_0x57be93(0x288)]();
                for (var _0x5b2dcb = 0x0; _0x5b2dcb < this.cl.length; _0x5b2dcb++) {
                    (function(_0x38fa6d) {
                        var _0x1af22d = _0x57be93;
                        var _0x494595 = _0x477cef.cl[_0x38fa6d];
                        var _0x6785f6 = document[_0x1af22d(0x4bc)]('li');
                        _0x5dd39b[_0x1af22d(0x53a)](_0x6785f6);
                        var _0x150e1c = $(_0x6785f6);
                        _0x150e1c[_0x1af22d(0x156)](_0x494595.kl());
                        _0x150e1c[_0x1af22d(0x1e7)](function() {
                            _0x1c2f51.r.Cd();
                            _0x212cf4.ll(_0x494595);
                        });
                        _0x494595.ml = _0x150e1c;
                    })(_0x5b2dcb);
                }
                if (this.cl[_0x57be93(0xde)] > 0x0) {
                    var _0x2f2eeb = _0x1c2f51.t.ha(_0x45dfa9.ia);
                    for (var _0x5b2dcb = 0x0; _0x5b2dcb < this.cl.length; _0x5b2dcb++) {
                        var _0x3aba97 = this.cl[_0x5b2dcb];
                        var _0x474862 = _0x3aba97.nl[_0x57be93(0xd3)];
                        for (var _0x1c0d30 = 0x0; _0x1c0d30 < _0x474862.length; _0x1c0d30++) {
                            if (_0x474862[_0x1c0d30] == _0x2f2eeb) {
                                _0x3aba97.ol = _0x1c0d30;
                                this.ll(_0x3aba97);
                                return;
                            }
                        }
                    }
                    this.ll(this.cl[0x0]);
                }
            };
            _0x1bd370[_0x14ac8b(0xf8)].ll = function(_0x221b8b) {
                var _0x16769a = _0x14ac8b;
                if (this.bl != _0x221b8b) {
                    var _0x2874ed = _0xbda0f3();
                    this.bl = _0x221b8b;
                    _0x5dd39b[_0x16769a(0x1a8)]().removeClass('pressed');
                    if (this.bl.ml) {
                        this.bl.ml[_0x16769a(0x44f)](_0x16769a(0x20e));
                    }
                    _0xba74c6[_0x16769a(0x156)]('');
                    if (_0x221b8b.nl != null) {
                        var _0x1f2ddd = _0x2874ed.p.Ac()[_0x16769a(0x2af)][_0x221b8b.nl[_0x16769a(0x1a3)]];
                        if (_0x1f2ddd != null) {
                            _0xba74c6[_0x16769a(0x156)](_0x272f8e(_0x24c040(_0x1f2ddd)));
                        }
                    }
                    this.il(true);
                }
            };
            _0x1bd370[_0x14ac8b(0xf8)].pl = function() {
                return this.bl == null ? _0x447791.Yg() : this.bl.ql();
            };
            _0x1bd370[_0x14ac8b(0xf8)].fl = function() {
                var _0x4721fe = this;
                this.pl().ah(function(_0x518c66) {
                    _0x4721fe.rl(_0x518c66);
                });
            };
            _0x1bd370.prototype.rl = function(_0x303f89) {
                var _0x16e7ff = _0x14ac8b;
                var _0x645a2d = this;
                var _0x296a98 = _0xbda0f3();
                var _0x15cacf = this.dl[_0x303f89][_0x16e7ff(0xdb)];
                if (!(_0x296a98.u.zi() < _0x15cacf)) {
                    this.Sk();
                    var _0x4137aa = _0x296a98.t.ha(_0x45dfa9.ia);
                    var _0x5804d2 = _0x296a98.t.ha(_0x45dfa9.ja);
                    var _0x4742c8 = _0x296a98.t.ha(_0x45dfa9.ka);
                    var _0x2951bd = _0x296a98.t.ha(_0x45dfa9.la);
                    var _0x2865f6 = _0x296a98.t.ha(_0x45dfa9.ma);
                    _0x296a98.u.Ui(_0x303f89, _0x45dfa9.ia, function() {
                        _0x296a98.t.Bh(_0x4137aa, _0x45dfa9.ia);
                        _0x296a98.t.Bh(_0x5804d2, _0x45dfa9.ja);
                        _0x296a98.t.Bh(_0x4742c8, _0x45dfa9.ka);
                        _0x296a98.t.Bh(_0x2951bd, _0x45dfa9.la);
                        _0x296a98.t.Bh(_0x2865f6, _0x45dfa9.ma);
                        if (_0x296a98.u.Ch(_0x303f89, _0x45dfa9.ia)) {
                            _0x296a98.t.Bh(_0x303f89, _0x45dfa9.ia);
                        }
                        _0x645a2d.Qk();
                    });
                }
            };
            _0x1bd370[_0x14ac8b(0xf8)].il = function(_0x450451) {
                var _0x4d1698 = _0x14ac8b;
                var _0x14c243 = _0xbda0f3();
                this.el.bk(_0x14c243.t.ha(_0x45dfa9.ja), false, false);
                this.el.ck(_0x14c243.t.ha(_0x45dfa9.ka), false, false);
                this.el.dk(_0x14c243.t.ha(_0x45dfa9.la), false, false);
                this.el.ek(_0x14c243.t.ha(_0x45dfa9.ma), false, false);
                var _0x54a80a = this.pl();
                if (_0x54a80a._g()) {
                    var _0x24decc = _0x54a80a.$g();
                    var _0x26df9d = this.dl[_0x24decc];
                    var _0x1ea9da = false;
                    if (_0x14c243.t.Ja(_0x24decc, _0x45dfa9.ia)) {
                        _0x25ea31[_0x4d1698(0x491)]();
                        _0x43e9ba[_0x4d1698(0x491)]();
                    } else {
                        if (_0x26df9d == null || _0x26df9d[_0x4d1698(0xbc)] == 0x1) {
                            _0x1ea9da = true;
                            _0x25ea31[_0x4d1698(0x4cf)]();
                            _0x43e9ba.hide();
                            _0x4931fc[_0x4d1698(0xcf)](_0x4a24e3(_0x4d1698(0x173)));
                            if (_0x26df9d != null && _0x26df9d.nonbuyable && _0x26df9d[_0x4d1698(0x524)] != null) {
                                var _0x3d760b = _0x14c243.p.Ac().textDict[_0x26df9d[_0x4d1698(0x524)]];
                                if (_0x3d760b != null) {
                                    _0x4931fc[_0x4d1698(0xcf)](_0x24c040(_0x3d760b));
                                }
                            }
                        } else {
                            _0x25ea31[_0x4d1698(0x491)]();
                            _0x43e9ba.show();
                            _0x58bd49.html(_0x26df9d[_0x4d1698(0xdb)]);
                        }
                    }
                    _0x5dd3b9[_0x4d1698(0x156)]('');
                    if (_0x26df9d != null && _0x26df9d[_0x4d1698(0x1a3)] != null) {
                        var _0x239064 = _0x14c243.p.Ac().textDict[_0x26df9d[_0x4d1698(0x1a3)]];
                        if (_0x239064 != null) {
                            _0x5dd3b9[_0x4d1698(0x156)](_0x272f8e(_0x24c040(_0x239064)));
                        }
                    }
                    StoreSkinID[_0x4d1698(0x156)](_0x26df9d.id);
                    this.el.ak(_0x24decc, true, _0x1ea9da);
                    if (_0x450451) {
                        _0x14c243.t.Bh(_0x24decc, _0x45dfa9.ia);
                    }
                }
            };
            var _0x1c68ee = function() {
                var _0x4e9c10 = _0x14ac8b;

                function _0x2eedbe(_0x28a45d, _0xe6e872) {
                    this.sl = _0x28a45d;
                    this.ol = 0x0;
                    this.nl = _0xe6e872;
                }
                _0x2eedbe[_0x4e9c10(0xf8)].gl = function() {
                    var _0x209966 = _0x4e9c10;
                    if (--this.ol < 0x0) {
                        this.ol = this.nl.list[_0x209966(0xde)] - 0x1;
                    }
                    this.sl.il(true);
                };
                _0x2eedbe[_0x4e9c10(0xf8)].hl = function() {
                    var _0x304dcc = _0x4e9c10;
                    if (++this.ol >= this.nl[_0x304dcc(0xd3)][_0x304dcc(0xde)]) {
                        this.ol = 0x0;
                    }
                    this.sl.il(true);
                };
                _0x2eedbe.prototype.kl = function() {
                    var _0x1f6fe8 = _0x4e9c10;
                    let _0x21e51f = _0x24c040(this.nl.name);
                    if (this.nl[_0x1f6fe8(0x11f)]) {
                      var where = '<img src="';
                            where = where + xURL + "/images/group/" + this.nl.img;
                            get = where = where + '" height="43" width="220" />';
                    }
                    return _0x21e51f;
                };
                _0x2eedbe[_0x4e9c10(0xf8)].ql = function() {
                    var _0x12bd41 = _0x4e9c10;
                    return this.ol >= this.nl[_0x12bd41(0xd3)][_0x12bd41(0xde)] ? _0x447791.Yg() : _0x447791.Zg(this.nl[_0x12bd41(0xd3)][this.ol]);
                };
                return _0x2eedbe;
            }();
            return _0x1bd370;
        }();
        var _0x2467f1 = function() {
            var _0x5a4f39 = _0x17f9b3;
            var _0x25ac7e = $(_0x5a4f39(0x475));
            var _0x148e86 = $(_0x5a4f39(0x1f3));
            var _0xd87bb5 = $('#store-go-wear-button');
            var _0x248c7c = _0x51baad(_0x3b9f03, function() {
                var _0x21f8f3 = _0x5a4f39;
                _0x3b9f03[_0x21f8f3(0x13f)](this, _0x4a24e3(_0x21f8f3(0x172)), true);
                var _0x8a6484 = _0xbda0f3();
                _0x25ac7e[_0x21f8f3(0x1e7)](function() {
                    _0x8a6484.r.Cd();
                    _0x8a6484.s.I(_0x8a6484.s.Wh);
                });
                _0x148e86[_0x21f8f3(0x1e7)](function() {
                    _0x8a6484.r.Cd();
                    _0x8a6484.s.I(_0x8a6484.s.$h);
                });
                _0xd87bb5[_0x21f8f3(0x1e7)](function() {
                    _0x8a6484.r.Cd();
                    _0x8a6484.s.I(_0x8a6484.s.ai);
                });
            });
            _0x248c7c.prototype.a = function() {
                var _0x5e063f = _0x5a4f39;
                _0x248c7c[_0x5e063f(0xfa)][_0x5e063f(0xf8)].a[_0x5e063f(0x13f)](this);
            };
            _0x248c7c[_0x5a4f39(0xf8)].Rk = function() {
                var _0x1958d8 = _0x5a4f39;
                _0x3b9f03.Fk[_0x1958d8(0x471)]();
                _0x3b9f03.Fk.fadeOut(0x32);
                _0x3b9f03.Gk[_0x1958d8(0x471)]();
                _0x3b9f03.Gk[_0x1958d8(0x513)](0x32);
                _0x3b9f03.Hk[_0x1958d8(0x471)]();
                _0x3b9f03.Hk[_0x1958d8(0x513)](0x32);
                _0x3b9f03.Jk[_0x1958d8(0x471)]();
                _0x3b9f03.Jk.fadeOut(0x32);
                _0x3b9f03.Ik[_0x1958d8(0x471)]();
                _0x3b9f03.Ik[_0x1958d8(0x513)](0x32);
                _0x3b9f03.Kk[_0x1958d8(0x471)]();
                _0x3b9f03.Kk.fadeOut(0x32);
                _0x3b9f03.Lk.stop();
                _0x3b9f03.Lk.fadeIn(0xc8);
                _0x3b9f03.Mk[_0x1958d8(0x471)]();
                _0x3b9f03.Mk[_0x1958d8(0x513)](0x32);
                _0x3b9f03.Nk[_0x1958d8(0x471)]();
                _0x3b9f03.Nk[_0x1958d8(0x513)](0x32);
                _0x3b9f03.Ok.stop();
                _0x3b9f03.Ok[_0x1958d8(0x513)](0x32);
            };
            _0x248c7c[_0x5a4f39(0xf8)].ji = function() {
                _0xbda0f3().r.Dd();
            };
            return _0x248c7c;
        }();
        var _0x10cf0c = function() {
            var _0x3f4395 = _0x17f9b3;
            var _0x316015 = $(_0x3f4395(0x2ab));
            var _0x3b2174 = $('#wear-description-text');
            var _0x270fde = $('#wear-locked-bar');
            var _0x2226a5 = $(_0x3f4395(0x438));
            var _0x9c054f = $('#wear-buy-button');
            var _0x3965f1 = $(_0x3f4395(0x3b8));
            var _0x79805a = $('#wear-eyes-button');
            var _0x18c4fb = $('#wear-mouths-button');
            var _0x1ffc5c = $(_0x3f4395(0x261));
            var _0x526833 = $(_0x3f4395(0x4fd));
            var _0x5f0232 = $(_0x3f4395(0x485));
            var _0x3e8d8e = $(_0x3f4395(0x263));
            var _0x23a162 = $(_0x3f4395(0x461));
            var _0x539b7d = _0x51baad(_0x3b9f03, function() {
                var _0x1b0d42 = _0x3f4395;
                var _0x30600c = this;
                _0x3b9f03[_0x1b0d42(0x13f)](this, _0x4a24e3('index.game.popup.menu.wear.tab'), true);
                var _0x554d82 = _0xbda0f3();
                var _0x526317 = this;
                this.tl = [];
                this.ja = new _0x3610a4(this, _0x45dfa9.ja, _0x79805a);
                this.ka = new _0x3610a4(this, _0x45dfa9.ka, _0x18c4fb);
                this.la = new _0x3610a4(this, _0x45dfa9.la, _0x1ffc5c);
                this.ma = new _0x3610a4(this, _0x45dfa9.ma, _0x526833);
                this.ul = null;
                this.vl = null;
                this.wl = null;
                this.xl = null;
                this.yl = null;
                this.zl = null;
                this.Al = new _0x5a73b8(_0x316015);
                _0x9c054f.click(function() {
                    _0x554d82.r.Cd();
                    _0x526317.Bl();
                });
                _0x3e8d8e.click(function() {
                    _0x554d82.r.Cd();
                    _0x526317.ul.Cl();
                });
                _0x23a162.click(function() {
                    _0x554d82.r.Cd();
                    _0x526317.ul.Dl();
                });
                _0x79805a.click(function() {
                    _0x554d82.r.Cd();
                    _0x526317.El(_0x30600c.ja);
                });
                _0x18c4fb[_0x1b0d42(0x1e7)](function() {
                    _0x554d82.r.Cd();
                    _0x526317.El(_0x30600c.ka);
                });
                _0x1ffc5c[_0x1b0d42(0x1e7)](function() {
                    _0x554d82.r.Cd();
                    _0x526317.El(_0x30600c.la);
                });
                _0x526833[_0x1b0d42(0x1e7)](function() {
                    _0x554d82.r.Cd();
                    _0x526317.El(_0x30600c.ma);
                });
                this.tl.push(this.ja);
                this.tl[_0x1b0d42(0x3d7)](this.ka);
                this.tl.push(this.la);
                this.tl[_0x1b0d42(0x3d7)](this.ma);
            });
            _0x539b7d.prototype.a = function() {
                var _0x19f2b5 = _0x3f4395;
                _0x539b7d[_0x19f2b5(0xfa)][_0x19f2b5(0xf8)].a[_0x19f2b5(0x13f)](this);
                var _0x21e025 = _0xbda0f3();
                var _0x1fca7b = this;
                _0x21e025.p.ca(function() {
                    var _0x39bee8 = _0x19f2b5;
                    var _0x44cc62 = _0x21e025.p.Ac();
                    if (_0x44cc62 != null) {
                        _0x1fca7b.vl = _0x44cc62[_0x39bee8(0x38a)];
                        _0x1fca7b.wl = _0x44cc62.mouthDict;
                        _0x1fca7b.xl = _0x44cc62[_0x39bee8(0x12c)];
                        _0x1fca7b.yl = _0x44cc62[_0x39bee8(0x1ef)];
                        _0x1fca7b.zl = _0x44cc62[_0x39bee8(0x4ea)];
                        _0x1fca7b.ja.Fl(_0x44cc62.eyesVariantArray);
                        _0x1fca7b.ja.Gl(_0x1fca7b.vl);
                        _0x1fca7b.ka.Fl(_0x44cc62[_0x39bee8(0x4d8)]);
                        _0x1fca7b.ka.Gl(_0x1fca7b.wl);
                        _0x1fca7b.la.Fl(_0x44cc62.glassesVariantArray);
                        _0x1fca7b.la.Gl(_0x1fca7b.xl);
                        _0x1fca7b.ma.Fl(_0x44cc62.hatVariantArray);
                        _0x1fca7b.ma.Gl(_0x1fca7b.yl);
                    }
                });
                this.il(false);
                _0x21e025.t.xh(function() {
                    _0x1fca7b.il(false);
                });
            };
            _0x539b7d.prototype.Rk = function() {
                var _0x541281 = _0x3f4395;
                _0x3b9f03.Fk[_0x541281(0x471)]();
                _0x3b9f03.Fk[_0x541281(0x513)](0x32);
                _0x3b9f03.Gk[_0x541281(0x471)]();
                _0x3b9f03.Gk[_0x541281(0x513)](0x32);
                _0x3b9f03.Hk.stop();
                _0x3b9f03.Hk.fadeOut(0x32);
                _0x3b9f03.Jk.stop();
                _0x3b9f03.Jk[_0x541281(0x513)](0x32);
                _0x3b9f03.Ik.stop();
                _0x3b9f03.Ik.fadeOut(0x32);
                _0x3b9f03.Kk[_0x541281(0x471)]();
                _0x3b9f03.Kk[_0x541281(0x513)](0x32);
                _0x3b9f03.Lk.stop();
                _0x3b9f03.Lk[_0x541281(0x513)](0x32);
                _0x3b9f03.Mk[_0x541281(0x471)]();
                _0x3b9f03.Mk[_0x541281(0x4ab)](0xc8);
                _0x3b9f03.Nk[_0x541281(0x471)]();
                _0x3b9f03.Nk[_0x541281(0x513)](0x32);
                _0x3b9f03.Ok[_0x541281(0x471)]();
                _0x3b9f03.Ok.fadeOut(0x32);
            };
            _0x539b7d[_0x3f4395(0xf8)].ji = function() {
                _0xbda0f3().r.Dd();
                this.El(this.ul ?? this.ja);
                this.Al.Le(true);
            };
            _0x539b7d[_0x3f4395(0xf8)].ei = function() {
                this.Al.Le(false);
            };
            _0x539b7d[_0x3f4395(0xf8)].Ra = function() {
                this.Al.Ra();
            };
            _0x539b7d.prototype.Pa = function(_0x5f27fc, _0x295e50) {
                this.Al.Pa();
            };
            _0x539b7d[_0x3f4395(0xf8)].El = function(_0x36fd6c) {
                var _0x461635 = _0x3f4395;
                this.ul = _0x36fd6c;
                for (var _0x195ede = 0x0; _0x195ede < this.tl[_0x461635(0xde)]; _0x195ede++) {
                    this.tl[_0x195ede].Xk[_0x461635(0x453)]('pressed');
                }
                this.ul.Xk[_0x461635(0x44f)]('pressed');
                this.ul.ii();
            };
            _0x539b7d[_0x3f4395(0xf8)].Hl = function() {
                return this.ul == null ? _0x447791.Yg() : _0x447791.Zg({
                    'Lb': this.ul.ql(),
                    'rc': this.ul.rc
                });
            };
            _0x539b7d[_0x3f4395(0xf8)].Bl = function() {
                var _0x4902c3 = this;
                this.Hl().ah(function(_0x257f31) {
                    _0x4902c3.Ui(_0x257f31.Lb, _0x257f31.rc);
                });
            };
            _0x539b7d[_0x3f4395(0xf8)].Ui = function(_0x2656df, _0x2fa119) {
                var _0x42c45e = _0x3f4395;
                var _0xe23b86 = this;
                var _0x2e18a3 = _0xbda0f3();
                var _0x976861 = undefined;
                switch (_0x2fa119) {
                    case _0x45dfa9.ja:
                        _0x976861 = this.vl[_0x2656df][_0x42c45e(0xdb)];
                        break;
                    case _0x45dfa9.ka:
                        _0x976861 = this.wl[_0x2656df][_0x42c45e(0xdb)];
                        break;
                    case _0x45dfa9.la:
                        _0x976861 = this.xl[_0x2656df][_0x42c45e(0xdb)];
                        break;
                    case _0x45dfa9.ma:
                        _0x976861 = this.yl[_0x2656df][_0x42c45e(0xdb)];
                        break;
                    default:
                        return;
                }
                if (!(_0x2e18a3.u.zi() < _0x976861)) {
                    this.Sk();
                    var _0x4d2919 = _0x2e18a3.t.ha(_0x45dfa9.ia);
                    var _0x379fc0 = _0x2e18a3.t.ha(_0x45dfa9.ja);
                    var _0x37d8fb = _0x2e18a3.t.ha(_0x45dfa9.ka);
                    var _0xc46777 = _0x2e18a3.t.ha(_0x45dfa9.la);
                    var _0x1dfe39 = _0x2e18a3.t.ha(_0x45dfa9.ma);
                    _0x2e18a3.u.Ui(_0x2656df, _0x2fa119, function() {
                        _0x2e18a3.t.Bh(_0x4d2919, _0x45dfa9.ia);
                        _0x2e18a3.t.Bh(_0x379fc0, _0x45dfa9.ja);
                        _0x2e18a3.t.Bh(_0x37d8fb, _0x45dfa9.ka);
                        _0x2e18a3.t.Bh(_0xc46777, _0x45dfa9.la);
                        _0x2e18a3.t.Bh(_0x1dfe39, _0x45dfa9.ma);
                        if (_0x2e18a3.u.Ch(_0x2656df, _0x2fa119)) {
                            _0x2e18a3.t.Bh(_0x2656df, _0x2fa119);
                        }
                        _0xe23b86.Qk();
                    });
                }
            };
            _0x539b7d[_0x3f4395(0xf8)].Il = function(_0x267bc8, _0x264570) {
                switch (_0x264570) {
                    case _0x45dfa9.ja:
                        return this.vl[_0x267bc8];
                    case _0x45dfa9.ka:
                        return this.wl[_0x267bc8];
                    case _0x45dfa9.la:
                        return this.xl[_0x267bc8];
                    case _0x45dfa9.ma:
                        return this.yl[_0x267bc8];
                }
                return null;
            };
            _0x539b7d[_0x3f4395(0xf8)].il = function(_0x288209) {
                var _0x3bccf2 = _0x3f4395;
                var _0x110809 = _0xbda0f3();
                this.Al.ak(_0x110809.t.ha(_0x45dfa9.ia), false, false);
                this.Al.bk(_0x110809.t.ha(_0x45dfa9.ja), false, false);
                this.Al.ck(_0x110809.t.ha(_0x45dfa9.ka), false, false);
                this.Al.dk(_0x110809.t.ha(_0x45dfa9.la), false, false);
                this.Al.ek(_0x110809.t.ha(_0x45dfa9.ma), false, false);
                var _0xca1fb7 = this.Hl();
                if (_0xca1fb7._g()) {
                    var _0x23432d = _0xca1fb7.$g();
                    var _0x30dd06 = this.Il(_0x23432d.Lb, _0x23432d.rc);
                    var _0x100011 = false;
                    if (_0x110809.t.Ja(_0x23432d.Lb, _0x23432d.rc)) {
                        _0x270fde.hide();
                        _0x9c054f[_0x3bccf2(0x491)]();
                    } else {
                        if (_0x30dd06 == null || _0x30dd06[_0x3bccf2(0xbc)] == 0x1) {
                            _0x100011 = true;
                            _0x270fde[_0x3bccf2(0x4cf)]();
                            _0x9c054f[_0x3bccf2(0x491)]();
                            _0x2226a5[_0x3bccf2(0xcf)](_0x4a24e3(_0x3bccf2(0x173)));
                            if (_0x30dd06 != null && _0x30dd06.nonbuyable && _0x30dd06[_0x3bccf2(0x524)] != null) {
                                var _0x3dbb40 = _0x110809.p.Ac()[_0x3bccf2(0x2af)][_0x30dd06[_0x3bccf2(0x524)]];
                                if (_0x3dbb40 != null) {
                                    _0x2226a5[_0x3bccf2(0xcf)](_0x24c040(_0x3dbb40));
                                }
                            }
                        } else {
                            _0x270fde.hide();
                            _0x9c054f[_0x3bccf2(0x4cf)]();
                            _0x3965f1[_0x3bccf2(0x156)](_0x30dd06[_0x3bccf2(0xdb)]);
                        }
                    }
                    _0x3b2174[_0x3bccf2(0x156)]('');
                    if (_0x30dd06 != null && _0x30dd06[_0x3bccf2(0x1a3)] != null) {
                        var _0x422d07 = _0x110809.p.Ac()[_0x3bccf2(0x2af)][_0x30dd06[_0x3bccf2(0x1a3)]];
                        if (_0x422d07 != null) {
                            _0x3b2174[_0x3bccf2(0x156)](_0x272f8e(_0x24c040(_0x422d07)));
                        }
                    }
                    switch (_0x23432d.rc) {
                        case _0x45dfa9.ja:
                            this.Al.bk(_0x23432d.Lb, true, _0x100011);
                            break;
                        case _0x45dfa9.ka:
                            this.Al.ck(_0x23432d.Lb, true, _0x100011);
                            break;
                        case _0x45dfa9.la:
                            this.Al.dk(_0x23432d.Lb, true, _0x100011);
                            break;
                        case _0x45dfa9.ma:
                            this.Al.ek(_0x23432d.Lb, true, _0x100011);
                    }
                    if (_0x288209) {
                        _0x110809.t.Bh(_0x23432d.Lb, _0x23432d.rc);
                    }
                }
            };
            var _0x3610a4 = function() {
                var _0x1b4c20 = _0x3f4395;

                function _0x33387a(_0x12f41c, _0x506b31, _0x192d3f) {
                    this.sl = _0x12f41c;
                    this.rc = _0x506b31;
                    this.Xk = _0x192d3f;
                    this.Jl = {};
                    this.Kl = [
                        []
                    ];
                    this.Ll = -0xa;
                    this.Ml = -0xa;
                }
                _0x33387a[_0x1b4c20(0xf8)].Fl = function(_0x10542a) {
                    this.Kl = _0x10542a;
                };
                _0x33387a.prototype.Gl = function(_0x1c3e4d) {
                    this.Jl = _0x1c3e4d;
                };
                _0x33387a[_0x1b4c20(0xf8)].ii = function() {
                    var _0x364e78 = _0x1b4c20;
                    var _0x45023d = _0xbda0f3();
                    var _0xade038 = _0x45023d.t.ha(this.rc);
                    for (var _0x33481c = 0x0; _0x33481c < this.Kl[_0x364e78(0xde)]; _0x33481c++) {
                        for (var _0x11b6d = 0x0; _0x11b6d < this.Kl[_0x33481c].length; _0x11b6d++) {
                            if (this.Kl[_0x33481c][_0x11b6d] == _0xade038) {
                                this.Nl(_0x33481c);
                                this.Ol(_0x11b6d);
                                return;
                            }
                        }
                    }
                    this.Nl(0x0);
                    this.Ol(0x0);
                };
                _0x33387a.prototype.Cl = function() {
                    var _0x20d40d = _0x1b4c20;
                    var _0x3e8417 = this.Ll - 0x1;
                    if (_0x3e8417 < 0x0) {
                        _0x3e8417 = this.Kl[_0x20d40d(0xde)] - 0x1;
                    }
                    this.Nl(_0x3e8417);
                    this.Ol(this.Ml % this.Kl[_0x3e8417].length);
                };
                _0x33387a[_0x1b4c20(0xf8)].Dl = function() {
                    var _0x16e474 = _0x1b4c20;
                    var _0x591f36 = this.Ll + 0x1;
                    if (_0x591f36 >= this.Kl[_0x16e474(0xde)]) {
                        _0x591f36 = 0x0;
                    }
                    this.Nl(_0x591f36);
                    this.Ol(this.Ml % this.Kl[_0x591f36][_0x16e474(0xde)]);
                };
                _0x33387a[_0x1b4c20(0xf8)].Nl = function(_0x16ffef) {
                    var _0x1f3376 = _0x1b4c20;
                    var _0xdf88cc = this;
                    if (!(_0x16ffef < 0x0) && !(_0x16ffef >= this.Kl[_0x1f3376(0xde)])) {
                        this.Ll = _0x16ffef;
                        _0x5f0232[_0x1f3376(0x288)]();
                        var _0x5774e6 = this.Kl[this.Ll];
                        if (_0x5774e6[_0x1f3376(0xde)] > 0x1) {
                            for (var _0x2a0d88 = 0x0; _0x2a0d88 < _0x5774e6.length; _0x2a0d88++) {
                                (function(_0x40bf5d) {
                                    var _0x3bafa2 = _0x1f3376;
                                    var _0x426c94 = _0x5774e6[_0x40bf5d];
                                    var _0x4919f7 = _0xdf88cc.Jl[_0x426c94];
                                    var _0x3852e8 = '#' + _0xdf88cc.sl.zl[_0x4919f7.prime];
                                    var _0x278b17 = $(_0x3bafa2(0x502) + _0x3852e8 + _0x3bafa2(0x4ae));
                                    _0x278b17[_0x3bafa2(0x1e7)](function() {
                                        _0xbda0f3().r.Cd();
                                        _0xdf88cc.Ol(_0x40bf5d);
                                    });
                                    _0x5f0232.append(_0x278b17);
                                })(_0x2a0d88);
                            }
                        }
                    }
                };
                _0x33387a[_0x1b4c20(0xf8)].Ol = function(_0x5c0916) {
                    var _0x3d0507 = _0x1b4c20;
                    if (!(_0x5c0916 < 0x0) && !(_0x5c0916 >= this.Kl[this.Ll][_0x3d0507(0xde)])) {
                        this.Ml = _0x5c0916;
                        _0x5f0232.children()[_0x3d0507(0x4d4)](_0x3d0507(0x4d1), _0x3d0507(0x1eb));
                        var _0x21fb81 = _0x5f0232[_0x3d0507(0x1a8)](_0x3d0507(0x34b) + (0x1 + _0x5c0916) + ')');
                        _0x21fb81[_0x3d0507(0x4d4)](_0x3d0507(0x4d1), _0x21fb81[_0x3d0507(0x4d4)](_0x3d0507(0x346)));
                        this.sl.il(true);
                    }
                };
                _0x33387a.prototype.ql = function() {
                    return this.Kl[this.Ll][this.Ml];
                };
                return _0x33387a;
            }();
            return _0x539b7d;
        }();
        var _0x1e7ad8 = function() {
            var _0x187dbf = _0x17f9b3;
            var _0x592fd2 = $(_0x187dbf(0x2aa));
            var _0x24f489 = $('#withdraw-consent-no');
            var _0x55e8ea = _0x51baad(_0x3b9f03, function() {
                var _0x4eb021 = _0x187dbf;
                _0x3b9f03[_0x4eb021(0x13f)](this, _0x4a24e3(_0x4eb021(0x129)), false);
                var _0x33d51e = _0xbda0f3();
                _0x592fd2[_0x4eb021(0x1e7)](function() {
                    _0x33d51e.r.Cd();
                    if (_0x33d51e.Y()) {
                        _0x33d51e.s.I(_0x33d51e.s.F);
                        _0x33d51e.$(false, true);
                        _0x33d51e.s.aa._(new _0x46a3ee());
                    } else {
                        _0x33d51e.s.gi();
                    }
                });
                _0x24f489[_0x4eb021(0x1e7)](function() {
                    _0x33d51e.r.Cd();
                    _0x33d51e.s.gi();
                });
            });
            _0x55e8ea[_0x187dbf(0xf8)].a = function() {
                var _0x223d0 = _0x187dbf;
                _0x55e8ea[_0x223d0(0xfa)][_0x223d0(0xf8)].a[_0x223d0(0x13f)](this);
            };
            _0x55e8ea[_0x187dbf(0xf8)].Rk = function() {
                var _0x3545dd = _0x187dbf;
                _0x3b9f03.Fk[_0x3545dd(0x471)]();
                _0x3b9f03.Fk[_0x3545dd(0x513)](0x32);
                _0x3b9f03.Gk[_0x3545dd(0x471)]();
                _0x3b9f03.Gk[_0x3545dd(0x513)](0x32);
                _0x3b9f03.Hk[_0x3545dd(0x471)]();
                _0x3b9f03.Hk[_0x3545dd(0x513)](0x32);
                _0x3b9f03.Jk.stop();
                _0x3b9f03.Jk[_0x3545dd(0x513)](0x32);
                _0x3b9f03.Ik[_0x3545dd(0x471)]();
                _0x3b9f03.Ik[_0x3545dd(0x513)](0x32);
                _0x3b9f03.Kk[_0x3545dd(0x471)]();
                _0x3b9f03.Kk[_0x3545dd(0x513)](0x32);
                _0x3b9f03.Lk[_0x3545dd(0x471)]();
                _0x3b9f03.Lk[_0x3545dd(0x513)](0x32);
                _0x3b9f03.Mk[_0x3545dd(0x471)]();
                _0x3b9f03.Mk[_0x3545dd(0x513)](0x32);
                _0x3b9f03.Nk[_0x3545dd(0x471)]();
                _0x3b9f03.Nk[_0x3545dd(0x4ab)](0xc8);
                _0x3b9f03.Ok[_0x3545dd(0x471)]();
                _0x3b9f03.Ok[_0x3545dd(0x513)](0x32);
            };
            _0x55e8ea.prototype.ji = function() {
                _0xbda0f3().r.Dd();
            };
            return _0x55e8ea;
        }();
        var _0x596786 = function() {
            var _0x3dbd97 = _0x17f9b3;
            var _0x2fec3e = $('#delete-account-timer');
            var _0x44043d = $(_0x3dbd97(0x337));
            var _0x5e7f0a = $(_0x3dbd97(0xc1));
            var _0x5d4051 = _0x51baad(_0x3b9f03, function() {
                var _0xd6cc16 = _0x3dbd97;
                _0x3b9f03.call(this, _0x4a24e3('index.game.popup.menu.delete.tab'), false);
                var _0x77a11f = _0xbda0f3();
                _0x44043d[_0xd6cc16(0x1e7)](function() {
                    _0x77a11f.r.Cd();
                    if (_0x77a11f.u.P()) {
                        _0x77a11f.u.bj();
                        _0x77a11f.u.Wi();
                    } else {
                        _0x77a11f.s.gi();
                    }
                });
                _0x5e7f0a.click(function() {
                    _0x77a11f.r.Cd();
                    _0x77a11f.s.gi();
                });
                this.Pl = [];
            });
            _0x5d4051[_0x3dbd97(0xf8)].a = function() {
                var _0x1b88e9 = _0x3dbd97;
                _0x5d4051[_0x1b88e9(0xfa)].prototype.a[_0x1b88e9(0x13f)](this);
            };
            _0x5d4051[_0x3dbd97(0xf8)].Rk = function() {
                var _0x327230 = _0x3dbd97;
                _0x3b9f03.Fk[_0x327230(0x471)]();
                _0x3b9f03.Fk[_0x327230(0x513)](0x32);
                _0x3b9f03.Gk[_0x327230(0x471)]();
                _0x3b9f03.Gk[_0x327230(0x513)](0x32);
                _0x3b9f03.Hk.stop();
                _0x3b9f03.Hk.fadeOut(0x32);
                _0x3b9f03.Jk[_0x327230(0x471)]();
                _0x3b9f03.Jk[_0x327230(0x513)](0x32);
                _0x3b9f03.Ik[_0x327230(0x471)]();
                _0x3b9f03.Ik.fadeOut(0x32);
                _0x3b9f03.Kk.stop();
                _0x3b9f03.Kk[_0x327230(0x513)](0x32);
                _0x3b9f03.Lk[_0x327230(0x471)]();
                _0x3b9f03.Lk[_0x327230(0x513)](0x32);
                _0x3b9f03.Mk[_0x327230(0x471)]();
                _0x3b9f03.Mk[_0x327230(0x513)](0x32);
                _0x3b9f03.Nk[_0x327230(0x471)]();
                _0x3b9f03.Nk[_0x327230(0x513)](0x32);
                _0x3b9f03.Ok.stop();
                _0x3b9f03.Ok[_0x327230(0x4ab)](0xc8);
            };
            _0x5d4051[_0x3dbd97(0xf8)].ji = function() {
                var _0x4d40ee = _0x3dbd97;
                _0xbda0f3().r.Hd();
                _0x44043d[_0x4d40ee(0x471)]();
                _0x44043d.hide();
                _0x2fec3e[_0x4d40ee(0x471)]();
                _0x2fec3e[_0x4d40ee(0x4cf)]();
                _0x2fec3e[_0x4d40ee(0xcf)](_0x4d40ee(0x3b9));
                this.Ql();
                this.Rl(function() {
                    var _0x57ef48 = _0x4d40ee;
                    _0x2fec3e[_0x57ef48(0xcf)](_0x57ef48(0x4d3));
                }, 0x3e8);
                this.Rl(function() {
                    var _0x4be37d = _0x4d40ee;
                    _0x2fec3e[_0x4be37d(0xcf)](_0x4be37d(0x4ba));
                }, 0x7d0);
                this.Rl(function() {
                    var _0x3adfce = _0x4d40ee;
                    _0x2fec3e[_0x3adfce(0xcf)](_0x3adfce(0x244));
                }, 0xbb8);
                this.Rl(function() {
                    var _0x523b2c = _0x4d40ee;
                    _0x2fec3e[_0x523b2c(0xcf)](_0x523b2c(0x3da));
                }, 0xfa0);
                this.Rl(function() {
                    var _0x40882e = _0x4d40ee;
                    _0x2fec3e[_0x40882e(0xcf)](_0x40882e(0x348));
                }, 0x1388);
                this.Rl(function() {
                    var _0x759d86 = _0x4d40ee;
                    _0x2fec3e[_0x759d86(0xcf)](_0x759d86(0x29a));
                }, 0x1770);
                this.Rl(function() {
                    _0x2fec3e.text(".. 3 ..");
                }, 0x1b58);
                this.Rl(function() {
                    var _0x2c29b6 = _0x4d40ee;
                    _0x2fec3e[_0x2c29b6(0xcf)](".. 2 ..");
                }, 0x1f40);
                this.Rl(function() {
                    var _0x354ff6 = _0x4d40ee;
                    _0x2fec3e[_0x354ff6(0xcf)](_0x354ff6(0x4f0));
                }, 0x2328);
                this.Rl(function() {
                    var _0x2aca3f = _0x4d40ee;
                    _0x2fec3e[_0x2aca3f(0x491)]();
                    _0x44043d[_0x2aca3f(0x4ab)](0x12c);
                }, 0x2710);
            };
            _0x5d4051[_0x3dbd97(0xf8)].Rl = function(_0x4c0735, _0x46ad04) {
                var _0x2ca581 = setTimeout(_0x4c0735, _0x46ad04);
                this.Pl.push(_0x2ca581);
            };
            _0x5d4051[_0x3dbd97(0xf8)].Ql = function() {
                var _0x9a52be = _0x3dbd97;
                for (var _0x44848f = 0x0; _0x44848f < this.Pl[_0x9a52be(0xde)]; _0x44848f++) {
                    clearTimeout(this.Pl[_0x44848f]);
                }
                this.Pl = [];
            };
            return _0x5d4051;
        }();
        var _0x8a0a70 = function() {
            function _0x352288() {
                this.Ck = function() {};
            }
            _0x352288.prototype.Bk = function() {};
            _0x352288.prototype.ji = function() {};
            return _0x352288;
        }();
        var _0x9c729a = function() {
            var _0x3f1124 = _0x17f9b3;
            var _0x4592f2 = _0x51baad(_0x8a0a70, function(_0x1a0673) {
                var _0x22c32a = _0x26a8;
                _0x8a0a70[_0x22c32a(0x13f)](this);
                var _0x2dbe00 = Date[_0x22c32a(0xb2)]() + '_' + Math.floor(0x3e8 + Math[_0x22c32a(0x33d)]() * 0x2327);
                this.Sl = $(_0x22c32a(0x53c) + _0x2dbe00 + _0x22c32a(0x3a1) + _0x1a0673 + _0x22c32a(0x30c) + _0x4a24e3(_0x22c32a(0x44b)) + _0x22c32a(0x15d));
                var _0x119aa8 = this;
                this.Sl[_0x22c32a(0x2da)](_0x22c32a(0x1e1))[_0x22c32a(0x1e7)](function() {
                    _0xbda0f3().r.Cd();
                    _0x119aa8.Ck();
                });
            });
            _0x4592f2[_0x3f1124(0xf8)].Bk = function() {
                return this.Sl;
            };
            _0x4592f2.prototype.ji = function() {
                _0xbda0f3().r.Fd();
            };
            return _0x4592f2;
        }();
        var _0x5b4965 = function() {
            var _0x3912e0 = _0x17f9b3;
            var _0x4af127 = _0x51baad(_0x8a0a70, function(_0x4afbe0) {
                var _0xec519b = _0x26a8;
                _0x8a0a70[_0xec519b(0x13f)](this);
                var _0x4d76b8 = Date[_0xec519b(0xb2)]() + '_' + Math[_0xec519b(0x3d8)](0x3e8 + Math.random() * 0x2327);
                this.Sl = $(_0xec519b(0x53c) + _0x4d76b8 + _0xec519b(0x3b1) + _0x4afbe0 + _0xec519b(0x2f9) + _0x4a24e3('index.game.toaster.levelup') + _0xec519b(0x433) + _0x4a24e3(_0xec519b(0x44b)) + _0xec519b(0x15d));
                var _0x1d5383 = this;
                this.Sl[_0xec519b(0x2da)](_0xec519b(0x500))[_0xec519b(0x1e7)](function() {
                    _0xbda0f3().r.Cd();
                    _0x1d5383.Ck();
                });
            });
            _0x4af127[_0x3912e0(0xf8)].Bk = function() {
                return this.Sl;
            };
            _0x4af127[_0x3912e0(0xf8)].ji = function() {
                _0xbda0f3().r.Ed();
            };
            return _0x4af127;
        }();
        var _0x46a3ee = function() {
            var _0x563830 = _0x17f9b3;
            var _0x7ccc41 = _0x51baad(_0x8a0a70, function() {
                var _0x2553bf = _0x26a8;
                _0x8a0a70[_0x2553bf(0x13f)](this);
                var _0x1a5253 = this;
                var _0x4fd1f4 = _0xbda0f3();
                var _0x22f9f2 = Date[_0x2553bf(0xb2)]() + '_' + Math.floor(0x3e8 + Math.random() * 0x2327);
                this.Sl = $(_0x2553bf(0x53c) + _0x22f9f2 + "\" class=\"toaster toaster-consent-accepted\">    <img class=\"toaster-consent-accepted-logo\" src=\"" + _0x4d4646 + _0x2553bf(0x327) + _0x4a24e3(_0x2553bf(0x32e))[_0x2553bf(0x4a1)](" ", _0x2553bf(0x150))[_0x2553bf(0x4a1)]("\n", _0x2553bf(0x211)) + _0x2553bf(0x320) + _0x4a24e3(_0x2553bf(0xc7)) + _0x2553bf(0xf3) + _0x4a24e3(_0x2553bf(0x1ad)) + _0x2553bf(0x15d));
                this.Tl = this.Sl.find(_0x2553bf(0x281));
                this.Tl[_0x2553bf(0x491)]();
                this.Tl.click(function() {
                    _0x4fd1f4.r.Cd();
                    if (_0x4fd1f4.Y()) {
                        _0x4fd1f4.$(true, true);
                    }
                    _0x1a5253.Ck();
                });
            });
            _0x7ccc41[_0x563830(0xf8)].Bk = function() {
                return this.Sl;
            };
            _0x7ccc41[_0x563830(0xf8)].ji = function() {
                var _0x177c3e = this;
                var _0x55da8a = _0xbda0f3();
                if (_0x55da8a.Y() && !_0x55da8a.Z()) {
                    _0x55da8a.r.Hd();
                    setTimeout(function() {
                        var _0x483c61 = _0x26a8;
                        _0x177c3e.Tl[_0x483c61(0x4ab)](0x12c);
                    }, 0x7d0);
                } else {
                    setTimeout(function() {
                        _0x177c3e.Ck();
                    }, 0x0);
                }
            };
            return _0x7ccc41;
        }();
        var _0x3db6a6 = {};
        _0x3db6a6[_0x17f9b3(0x4e3)] = {
            'Ma': _0x5d8855(_0x17f9b3(0x3cd), _0x17f9b3(0x2d6)),
            'K': _0x5d8855(_0x17f9b3(0x530), _0x17f9b3(0x330)),
            'ra': _0x2b03cf(),
            'e': 0x4,
            'oa': false,
            'qk': true
        };
        _0x3db6a6.miniclip = {
            'Ma': _0x5d8855('aqnvgcpz05orkobh', _0x17f9b3(0x2d6)),
            'K': _0x5d8855(_0x17f9b3(0x530), _0x17f9b3(0x330)),
            'ra': _0x2b03cf(),
            'e': 0x4,
            'oa': false,
            'qk': false
        };
        var _0x2f66a1 = _0x3db6a6[window[_0x17f9b3(0x4c8)]];
        _0x2f66a1 ||= _0x3db6a6[_0x17f9b3(0x4e3)];
        $(function() {
            var _0x279d5c = _0x17f9b3;
            FastClick[_0x279d5c(0x35f)](document[_0x279d5c(0x442)]);
        });
        addEventListener(_0x17f9b3(0x3ab), function(_0x475ebb) {
            var _0x436872 = _0x17f9b3;
            _0x475ebb[_0x436872(0x24b)]();
            _0x475ebb[_0x436872(0x1d0)]();
            return false;
        });
        _0x29e70f('//connect.facebook.net/' + _0x27f1d2 + _0x17f9b3(0x2a0), 'facebook-jssdk', function() {
            FB.init({
                'appId': '861926850619051',
                'cookie': true,
                'xfbml': true,
                'status': true,
                'version': 'v8.0'
            });
        });
        _0x29e70f(_0x17f9b3(0x4d9), null, function() {
            var _0xaa6348 = _0x17f9b3;
            gapi[_0xaa6348(0x4e1)](_0xaa6348(0x1cc), function() {
                var _0x4340bb = _0xaa6348;
                GoogleAuth = gapi[_0x4340bb(0x1cc)].init({
                    'client_id': _0x4340bb(0x47b)
                });
            });
        });
        _0x2ba968 = _0x90d4e2();
        _0x2ba968.v();
        if (PhoneChecked()) {
            _0x29e70f(_0x17f9b3(0x27b), 'mobileconfig', function() {
                _0x38f514();
            });
        };
        let _0x38f514 = function() {
            var _0x4c368d = _0x17f9b3;
            $(_0x4c368d(0x264)).after(_0x4c368d(0x10b));
        };
        window[_0x17f9b3(0x260)] = 'q';
        window[_0x17f9b3(0x152)](_0x17f9b3(0x2d0), function(_0x152a97) {
            var _0x444e09 = _0x17f9b3;
            console.log("event.key: " + _0x152a97[_0x444e09(0x477)]);
            if (_0x152a97[_0x444e09(0x477)][_0x444e09(0x247)]() !== 'q' || !isPlaying || PilotoAutomatico !== null) {
                if (PilotoAutomatico !== null) {
                    clearInterval(PilotoAutomatico);
                    PilotoAutomatico = null;
                }
            } else {
                let _0xf16868 = 0x0;
                const _0xb27eb4 = window[_0x444e09(0x30a)];
                if (PilotoAutomatico !== null) {
                    clearInterval(PilotoAutomatico);
                }
                PilotoAutomatico = setInterval(function() {
                    var _0x301864 = _0x444e09;
                    let _0x235be6 = Math.PI / 0x4;
                    let _0x1d4b34 = 0xa5 + (_0xb27eb4 >= 0x186a0 ? 0x5 : _0xb27eb4 >= 0x2710 ? 0xa : 0x0);
                    theoEvents[_0x301864(0x1b9)].sk += _0x235be6;
                    if (theoEvents.eventoPrincipal.sk >= 0x2 * Math.PI) {
                        theoEvents[_0x301864(0x1b9)].sk -= 0x2 * Math.PI;
                    } else if (theoEvents[_0x301864(0x1b9)].sk <= -0x2 * Math.PI) {
                        theoEvents[_0x301864(0x1b9)].sk += 0x2 * Math.PI;
                    }
                    let _0x42f92a = document[_0x301864(0x17b)]('elementId');
                    if (_0x42f92a) {
                        _0x42f92a.style[_0x301864(0x20f)] = 'rotate(' + theoEvents.eventoPrincipal.sk + _0x301864(0x297);
                    }
                }, 0xa5 + (_0xb27eb4 >= 0x186a0 ? 0x5 : _0xb27eb4 >= 0x2710 ? 0xa : 0x0));
            }
            localStorage[_0x444e09(0x47e)]('SaveGameXT', JSON[_0x444e09(0x411)](theoKzObjects));
        }, false);
        let _0x1e719a = [{
            'nombre': _0x17f9b3(0x35b),
            'url': _0x17f9b3(0xea)
        }, {
            'nombre': _0x17f9b3(0x36d),
            'url': _0x17f9b3(0x3fd)
        }, {
            'nombre': _0x17f9b3(0x4d7),
            'url': 'https://i.imgur.com/PfdBkc2.png'
        }, {
            'nombre': _0x17f9b3(0x284),
            'url': _0x17f9b3(0x449)
        }, {
            'nombre': _0x17f9b3(0x31b),
            'url': _0x17f9b3(0x219)
        }, {
            'nombre': _0x17f9b3(0x498),
            'url': 'https://cdn.custom-cursor.com/db/234/32/arrow2291.png'
        }, {
            'nombre': _0x17f9b3(0x20c),
            'url': _0x17f9b3(0x404)
        }, {
            'nombre': _0x17f9b3(0x3f3),
            'url': 'https://cdn.custom-cursor.com/128/assets/pointers/32/GOW_Kratos_Pointer.png'
        }, {
            'nombre': _0x17f9b3(0x36e),
            'url': _0x17f9b3(0x2df)
        }, {
            'nombre': _0x17f9b3(0x1ce),
            'url': 'https://cdn.custom-cursor.com/db/15214/32/sailor-moon-fish-eye-and-lipstick-cursor.png'
        }, {
            'nombre': _0x17f9b3(0x203),
            'url': 'https://cdn.custom-cursor.com/db/cursor/32/PUBG_AKM_Cursor.png'
        }, {
            'nombre': _0x17f9b3(0x3d9),
            'url': 'https://cdn.custom-cursor.com/db/pointer/32/Cherries_Pointer.png'
        }, {
            'nombre': _0x17f9b3(0x366),
            'url': _0x17f9b3(0x497)
        }, {
            'nombre': 'JerryPointer',
            'url': _0x17f9b3(0x3eb)
        }];
        let _0x330e61 = [{
            'nombre': _0x17f9b3(0x4ee),
            'url': _0x17f9b3(0x1e0)
        }, {
            'nombre': _0x17f9b3(0x29d),
            'url': _0x17f9b3(0x2a6)
        }, {
            'nombre': "light blue",
            'url': _0x17f9b3(0x419)
        }, {
            'nombre': _0x17f9b3(0x3df),
            'url': 'https://i.imgur.com/19YALRi.png'
        }, {
            'nombre': _0x17f9b3(0x358),
            'url': _0x17f9b3(0x1d3)
        }, {
            'nombre': _0x17f9b3(0x3f7),
            'url': _0x17f9b3(0xd6)
        }, {
            'nombre': _0x17f9b3(0x270),
            'url': _0x17f9b3(0x325)
        }, {
            'nombre': 'Desert',
            'url': _0x17f9b3(0x3cb)
        }];
        theoKzObjects[_0x17f9b3(0x452)] = true;
        var _0x14a876 = '';
        _0x14a876 += '</div>';
        _0x14a876 += '</div>';
        _0x14a876 += _0x17f9b3(0x27d);
        _0x14a876 += "<div id=\"wormcerca\">";
        _0x14a876 += _0x17f9b3(0x43c);
        _0x14a876 += _0x17f9b3(0x194);
        _0x14a876 += "<img class=\"pwrups v2\" style=\"display: none;\" src=\"https://i.imgur.com/kXlF32q.png\">";
        _0x14a876 += _0x17f9b3(0x210);
        _0x14a876 += _0x17f9b3(0x31f);
        _0x14a876 += "<img class=\"pwrups v5\" style=\"display: none;\" src=\"https://i.imgur.com/FqA56k6.png\">";
        _0x14a876 += _0x17f9b3(0x232);
        _0x14a876 += _0x17f9b3(0x27d);
        _0x14a876 += _0x17f9b3(0x316);
        _0x14a876 += "</div><div class=\"worm_2\"><button id=\"settingBtn\"><img src=\"https://i.imgur.com/bKAe6W9.png\"/></button><div id=\"settingContent\"><div class=\"container1\"><span class=\"settings_span\">Spin-Fast: </span><input id=\"smoothCamera\" class=\"range\" type=\"range\" min=\"0.3\" max=\"0.6\" value=\"' + theoKzObjects.smoothCamera + '\" step=\"0.1\" onmousemove=\"smoothCameraValue.value=value\" /></div><div class=\"container1\">\n        <span class=\"settings_span\">Power-ups-Size: </span>\n        <input id=\"PortionSize\" class=\"range\" type=\"range\" min=\"1\" max=\"6\" value=\"' + theoKzObjects.PortionSize + '\" step=\"1\" onmousemove=\"rangevalue1.value=value\" />\n        </div>\n        \n      <div class=\"container1\">\n      <span class=\"settings_span\">Power-ups-Aura: </span>\n      <input id=\"PortionAura\" class=\"range\" type=\"range\" min=\"1.2\" max=\"3.2\" value=\"' + theoKzObjects.PortionAura + '\" step=\"0.2\" onmousemove=\"PortionAuravalue.value=value\" />\n      </div>\n       \n      <div class=\"container1\">\n                    <span class=\"settings_span\">Food-Size: </span>\n                    <input id=\"FoodSize\" class=\"range\" type=\"range\" min=\"0.5\" max=\"3\" value=\"' + theoKzObjects.FoodSize + '\" step=\"0.5\" onmousemove=\"rangevalue2.value=value\" />\n                    </div>\n                    <div class=\"container1\">\n                    <span class=\"settings_span\">Food-Shadow: </span>\n                    <input id=\"FoodShadow\" class=\"range\" type=\"range\" min=\"0.5\" max=\"3\" value=\"' + theoKzObjects.FoodShadow + '\" step=\"0.5\" onmousemove=\"FoodShadowvalue.value=value\" />\n                    </div>\n    </div>\n    </div><div style=\"display:none\" id=\"zoom-container\"><div id=\"zoom-out\">-</div><div id=\"zoom-in\">+</div><div class=\"worm_3\">x.<span id=\"zoom-percentage\"></span>";
        $(_0x17f9b3(0x474))[_0x17f9b3(0x53a)](_0x14a876);

        function _0x1d3e3f(_0x1cff7c) {
            var _0x5e8e18 = _0x17f9b3;
            if (theoKzObjects[_0x5e8e18(0x2b8)]) {
                _0x1cff7c[_0x5e8e18(0x537)] = theoKzObjects[_0x5e8e18(0x2b8)].rh;
                _0x1cff7c[_0x5e8e18(0x2ed)] = theoKzObjects[_0x5e8e18(0x2b8)].sh;
                _0x1cff7c[_0x5e8e18(0x22d)] = theoKzObjects[_0x5e8e18(0x2b8)].th;
                _0x1cff7c[_0x5e8e18(0x229)] = theoKzObjects[_0x5e8e18(0x2b8)].uh;
                _0x1cff7c.hatId = theoKzObjects[_0x5e8e18(0x2b8)].vh;
            }
        }

        function _0x112bd1() {
            var _0x55b3d1 = _0x17f9b3;
            $('#mm-event-text')[_0x55b3d1(0x1d7)](_0x55b3d1(0x4e5));
            $(_0x55b3d1(0x1cb)).after(_0x55b3d1(0x114) + theoKzObjects[_0x55b3d1(0x18c)] + "\" class=\"you-id\" />\n                        <button class=\"you-id-copy\" onclick=\"navigator.clipboard.writeText('" + theoKzObjects[_0x55b3d1(0x18c)] + _0x55b3d1(0x1f7) + theoKzObjects[_0x55b3d1(0x18c)] + _0x55b3d1(0x180));
            $(_0x55b3d1(0xb4))[_0x55b3d1(0x1d7)](_0x55b3d1(0x23a) + theoKzObjects[_0x55b3d1(0x18c)] + _0x55b3d1(0x218) + theoKzObjects[_0x55b3d1(0x18c)] + _0x55b3d1(0x1f7) + theoKzObjects[_0x55b3d1(0x18c)] + _0x55b3d1(0x49d));
            var _0x1242b4 = document[_0x55b3d1(0x17b)]('settingBtn');
            var _0x4f5c0f = document.getElementById(_0x55b3d1(0x4bd));
            _0x1242b4[_0x55b3d1(0x152)](_0x55b3d1(0x1e7), function() {
                var _0x5d0709 = _0x55b3d1;
                if (_0x4f5c0f[_0x5d0709(0x1e4)][_0x5d0709(0x1fa)] === _0x5d0709(0x1e8)) {
                    _0x4f5c0f[_0x5d0709(0x1e4)][_0x5d0709(0x1fa)] = 'block';
                } else {
                    _0x4f5c0f.style[_0x5d0709(0x1fa)] = _0x5d0709(0x1e8);
                }
            });
            $(_0x55b3d1(0x3cf)).on(_0x55b3d1(0x315), function() {
                var _0xa7240c = _0x55b3d1;
                theoKzObjects[_0xa7240c(0x1ba)] = $(this)[_0xa7240c(0x246)]();
                localStorage.PotenciadorSize = theoKzObjects[_0xa7240c(0x1ba)];
            });
            $(_0x55b3d1(0x486)).on(_0x55b3d1(0x315), function() {
                var _0x266ac2 = _0x55b3d1;
                theoKzObjects[_0x266ac2(0x4e2)] = $(this)[_0x266ac2(0x246)]();
                localStorage[_0x266ac2(0x48a)] = theoKzObjects[_0x266ac2(0x4e2)];
            });
            $(_0x55b3d1(0x163)).on('input', function() {
                var _0x59659d = _0x55b3d1;
                theoKzObjects[_0x59659d(0x1ab)] = $(this)[_0x59659d(0x246)]();
                localStorage.smoothCamera = theoKzObjects[_0x59659d(0x1ab)];
            });
            $(_0x55b3d1(0x23e)).on(_0x55b3d1(0x315), function() {
                var _0xa74f12 = _0x55b3d1;
                theoKzObjects[_0xa74f12(0x313)] = $(this).val();
                localStorage.ComidaSize = theoKzObjects[_0xa74f12(0x313)];
            });
            $(_0x55b3d1(0x41e)).on(_0x55b3d1(0x315), function() {
                var _0x1ecd4b = _0x55b3d1;
                theoKzObjects[_0x1ecd4b(0x1c0)] = $(this)[_0x1ecd4b(0x246)]();
                localStorage.ComidaShadow = theoKzObjects[_0x1ecd4b(0x1c0)];
            });
            $(_0x55b3d1(0x24d))[_0x55b3d1(0x156)](_0x55b3d1(0x356));
            $(_0x55b3d1(0x228))[_0x55b3d1(0x156)](_0x55b3d1(0x19b));
            $(document)[_0x55b3d1(0x225)](function() {
                var _0x260c42 = _0x55b3d1;
                $(_0x260c42(0x1a4)).on(_0x260c42(0x1e7), function() {
                    var _0x22f666 = _0x260c42;
                    if (document[_0x22f666(0x4e7)] && document.fullScreenElement !== null || !document[_0x22f666(0x121)] && !document[_0x22f666(0x1ec)]) {
                        if (document.documentElement.requestFullScreen) {
                            document[_0x22f666(0x446)][_0x22f666(0x257)]();
                        } else {
                            if (document.documentElement[_0x22f666(0x287)]) {
                                document[_0x22f666(0x446)][_0x22f666(0x287)]();
                            } else if (document[_0x22f666(0x446)][_0x22f666(0x35d)]) {
                                document[_0x22f666(0x446)].webkitRequestFullScreen(Element[_0x22f666(0x161)]);
                            }
                        }
                    } else {
                        if (document[_0x22f666(0x3d1)]) {
                            document[_0x22f666(0x3d1)]();
                        } else {
                            if (document[_0x22f666(0x1c1)]) {
                                document[_0x22f666(0x1c1)]();
                            } else if (document.webkitCancelFullScreen) {
                                document[_0x22f666(0x49f)]();
                            }
                        }
                    }
                });
            });
            $('#hoisinh')[_0x55b3d1(0x1e7)](function() {
                let _0x3a9b29 = _0x3a9b29;
                if (_0x3a9b29) {
                    anApp.r.Hd();
                    anApp.sa(_0x3a9b29);
                }
            });
            $(_0x55b3d1(0x253))[_0x55b3d1(0x1d7)]('');
            async function _0x2609e7(_0xccfb2c) {
                return new Promise(_0x24d017 => {
                    var _0x2bdfb6 = _0x26a8;
                    const _0x5f335b = setTimeout(() => {
                        var _0x37a610 = _0x26a8;
                        _0x24d017({
                            'id': _0xccfb2c.id,
                            'online': false,
                            'serverName': _0xccfb2c[_0x37a610(0x1c2)],
                            'isFull': false,
                            'trafficLevel': _0x37a610(0x31e)
                        });
                    }, 0x1388);
                    try {
                        const _0x538b44 = new WebSocket(_0xccfb2c[_0x2bdfb6(0x212)]);
                        _0x538b44[_0x2bdfb6(0x235)] = () => {
                            var _0x474fcf = _0x2bdfb6;
                            clearTimeout(_0x5f335b);
                            let _0x2ba5e0 = _0x474fcf(0x285);
                            if (_0xccfb2c[_0x474fcf(0x1da)] >= _0xccfb2c[_0x474fcf(0x4b1)] * 0.7) {
                                _0x2ba5e0 = _0x474fcf(0x1f5);
                            } else if (_0xccfb2c[_0x474fcf(0x1da)] >= _0xccfb2c[_0x474fcf(0x4b1)] * 0.4) {
                                _0x2ba5e0 = _0x474fcf(0x4cc);
                            }
                            const _0x1e0ad8 = _0xccfb2c.currentPlayers >= _0xccfb2c.maxPlayers;
                            _0x24d017({
                                'id': _0xccfb2c.id,
                                'online': true,
                                'serverName': _0xccfb2c[_0x474fcf(0x1c2)],
                                'isFull': _0x1e0ad8,
                                'trafficLevel': _0x2ba5e0,
                                'currentPlayers': _0xccfb2c[_0x474fcf(0x1da)],
                                'maxPlayers': _0xccfb2c.maxPlayers
                            });
                            _0x538b44[_0x474fcf(0x1d1)]();
                        };
                        _0x538b44[_0x2bdfb6(0x21c)] = () => {
                            var _0x4ad93e = _0x2bdfb6;
                            clearTimeout(_0x5f335b);
                            _0x24d017({
                                'id': _0xccfb2c.id,
                                'online': false,
                                'serverName': _0xccfb2c.serverName,
                                'isFull': false,
                                'trafficLevel': _0x4ad93e(0x32b)
                            });
                        };
                        _0x538b44[_0x2bdfb6(0x520)] = () => {
                            clearTimeout(_0x5f335b);
                        };
                    } catch (_0x2459e3) {
                        clearTimeout(_0x5f335b);
                        _0x24d017({
                            'id': _0xccfb2c.id,
                            'online': false,
                            'serverName': _0xccfb2c.serverName,
                            'isFull': false,
                            'trafficLevel': _0x2bdfb6(0xe3)
                        });
                    }
                });
            }
            $(_0x55b3d1(0x253))[_0x55b3d1(0x1d7)]('');
            $(_0x55b3d1(0x21a))[_0x55b3d1(0x1d7)](_0x55b3d1(0x4af));
            $('.ui-tab').on(_0x55b3d1(0x1e7), account);
            $(_0x55b3d1(0xb1))[_0x55b3d1(0x1e7)](function() {
                var _0x439ee5 = _0x55b3d1;
                let _0x124797 = $(this)[_0x439ee5(0x371)]('value');
                theoKzObjects[_0x439ee5(0x184)] = _0x124797;
                ctx[_0x439ee5(0x164)].texture = ctx.onclickServer;
                retundFlagError();
                console[_0x439ee5(0x483)](_0x124797);
            });
            for (a = 0x0; a < servers[_0x55b3d1(0x3e9)][_0x55b3d1(0xde)]; a++) {
                var _0x1a0f03 = servers[_0x55b3d1(0x3e9)][a].serverUrl;
                var _0x4f7e70 = servers.Api_listServer[a][_0x55b3d1(0x4bb)];
                var _0x377baf = servers.Api_listServer[a][_0x55b3d1(0x4c5)];
                let _0x44a76c = document.createElement('p');
                _0x44a76c[_0x55b3d1(0x3f4)] = _0x1a0f03;
                _0x44a76c.innerHTML = _0x4f7e70;
                if (_0x377baf == _0x55b3d1(0x504)) {
                    $(_0x55b3d1(0x43f))[_0x55b3d1(0x516)](_0x44a76c);
                } else {
                    if (_0x377baf == _0x55b3d1(0x4d2)) {
                        $(_0x55b3d1(0x4db)).prepend(_0x44a76c);
                    } else {
                        if (_0x377baf == _0x55b3d1(0xce)) {
                            $(_0x55b3d1(0xd2))[_0x55b3d1(0x516)](_0x44a76c);
                        } else {
                            if (_0x377baf == _0x55b3d1(0x177)) {
                                $(_0x55b3d1(0x42a))[_0x55b3d1(0x516)](_0x44a76c);
                            } else {
                                if (_0x377baf == _0x55b3d1(0x33a)) {
                                    $(_0x55b3d1(0x22c))[_0x55b3d1(0x516)](_0x44a76c);
                                } else {
                                    if (_0x377baf == _0x55b3d1(0x223)) {
                                        $('.servers-francia')[_0x55b3d1(0x516)](_0x44a76c);
                                    } else {
                                        if (_0x377baf == _0x55b3d1(0x507)) {
                                            $(_0x55b3d1(0x529))[_0x55b3d1(0x516)](_0x44a76c);
                                        } else {
                                            if (_0x377baf == _0x55b3d1(0x437)) {
                                                $(_0x55b3d1(0x2f2))[_0x55b3d1(0x516)](_0x44a76c);
                                            } else {
                                                if (_0x377baf == 'australia') {
                                                    $(_0x55b3d1(0x458))[_0x55b3d1(0x516)](_0x44a76c);
                                                } else if (_0x377baf == _0x55b3d1(0x2ae)) {
                                                    $(_0x55b3d1(0x342))[_0x55b3d1(0x516)](_0x44a76c);
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                $(_0x44a76c)[_0x55b3d1(0x371)]('id', _0x377baf);
                $(_0x44a76c).attr(_0x55b3d1(0xc3), _0x55b3d1(0x4ac));
                $(_0x44a76c)[_0x55b3d1(0x371)](_0x55b3d1(0x3f4), _0x4f7e70);
                $(_0x44a76c).click(function() {
                    var _0x3cad2b = _0x55b3d1;
                    ctx[_0x3cad2b(0x4d6)]($(this).text());
                    let _0x33e7ae = $(this)[_0x3cad2b(0x246)]();
                    ctx[_0x3cad2b(0x164)][_0x3cad2b(0xc6)] = ctx[_0x3cad2b(0x339)];
                    retundFlagError();
                    window[_0x3cad2b(0x19d)] = _0x33e7ae;
                    $('#mm-action-play').click();
                    $('#adbl-continue')[_0x3cad2b(0x1e7)]();
                });
            }
        }

        function _0x517b7e() {
            var _0x3ec209 = _0x17f9b3;
            $(_0x3ec209(0x48b)).on(_0x3ec209(0x1e7), function() {
                var _0x58a858 = _0x3ec209;
                for (var _0x9ad251 = 0x0; _0x9ad251 < clientes[_0x58a858(0x3dd)][_0x58a858(0xde)]; _0x9ad251++) {
                    var _0x4c684e = clientes.clientesActivos[_0x9ad251][_0x58a858(0x159)];
                    var _0x27c6b5 = clientes[_0x58a858(0x3dd)][_0x9ad251][_0x58a858(0x4fb)];
                    var _0x4a7181 = clientes[_0x58a858(0x3dd)][_0x9ad251].Client_VisibleSkin;
                    var _0x5750ec = clientes.clientesActivos[_0x9ad251].Client_VisibleSkin1;
                    var _0x13071e = clientes[_0x58a858(0x3dd)][_0x9ad251][_0x58a858(0x21d)];
                    var _0x44b603 = clientes.clientesActivos[_0x9ad251][_0x58a858(0x3a0)];
                    var _0x54b78c = clientes[_0x58a858(0x3dd)][_0x9ad251][_0x58a858(0x19e)];
                    var _0x448a74 = clientes[_0x58a858(0x3dd)][_0x9ad251][_0x58a858(0x13d)];
                    var _0x434387 = clientes[_0x58a858(0x3dd)][_0x9ad251].Client_VisibleSkin6;
                    var _0x5cf84c = clientes[_0x58a858(0x3dd)][_0x9ad251].Client_VisibleSkin7;
                    var _0x5affd2 = clientes[_0x58a858(0x3dd)][_0x9ad251][_0x58a858(0x192)];
                    var _0x237d43 = clientes[_0x58a858(0x3dd)][_0x9ad251][_0x58a858(0x122)];
                    var _0x30aa1d = clientes[_0x58a858(0x3dd)][_0x9ad251][_0x58a858(0x135)];
                    var _0x4a144e = clientes[_0x58a858(0x3dd)][_0x9ad251][_0x58a858(0x153)];
                    var _0x1468f1 = clientes[_0x58a858(0x3dd)][_0x9ad251][_0x58a858(0x36b)];
                    var _0x4642a3 = clientes[_0x58a858(0x3dd)][_0x9ad251][_0x58a858(0x2ec)];
                    var _0x2907d0 = clientes[_0x58a858(0x3dd)][_0x9ad251][_0x58a858(0x515)];
                    var _0x341020 = clientes[_0x58a858(0x3dd)][_0x9ad251].Client_VisibleSkin15;
                    var _0x53b37a = clientes[_0x58a858(0x3dd)][_0x9ad251].Client_VisibleSkin16;
                    var _0x37879b = clientes[_0x58a858(0x3dd)][_0x9ad251].Client_VisibleSkin17;
                    var _0x174c88 = clientes[_0x58a858(0x3dd)][_0x9ad251][_0x58a858(0x30e)];
                    var _0x36dec7 = clientes[_0x58a858(0x3dd)][_0x9ad251].Client_VisibleSkin19;
                    var _0x1dc350 = clientes.clientesActivos[_0x9ad251][_0x58a858(0x47c)];
                    var _0x4297b9 = clientes.clientesActivos[_0x9ad251].Client_KeyAccecs;
                    if (theoKzObjects[_0x58a858(0x18c)] == 0x0) {} else {
                        if (theoKzObjects.FB_UserID == _0x27c6b5) {
                            if (_0x4297b9 == 'XTPRIVATESKIN') {
                                for (let _0x31217f = 0x0; _0x31217f < theoKzObjects[_0x58a858(0x14f)][_0x58a858(0xde)]; _0x31217f++) {
                                    const _0x1ba71f = theoKzObjects.idSkin[_0x31217f];
                                    if (_0x1ba71f.id == _0x4a7181 || _0x1ba71f.id == _0x5750ec || _0x1ba71f.id == _0x13071e || _0x1ba71f.id == _0x44b603 || _0x1ba71f.id == _0x54b78c || _0x1ba71f.id == _0x448a74 || _0x1ba71f.id == _0x434387 || _0x1ba71f.id == _0x5cf84c || _0x1ba71f.id == _0x5affd2 || _0x1ba71f.id == _0x237d43 || _0x1ba71f.id == _0x30aa1d || _0x1ba71f.id == _0x4a144e || _0x1ba71f.id == _0x1468f1 || _0x1ba71f.id == _0x4642a3 || _0x1ba71f.id == _0x2907d0 || _0x1ba71f.id == _0x341020 || _0x1ba71f.id == _0x53b37a || _0x1ba71f.id == _0x37879b || _0x1ba71f.id == _0x174c88 || _0x1ba71f.id == _0x36dec7 || _0x1ba71f.id == _0x1dc350) {
                                        _0x1ba71f[_0x58a858(0xbc)] = false;
                                    }
                                }
                            } else {}
                        } else {}
                    }
                }
            });
        }

        function _0xc0988a() {
            var _0x1180ef = _0x17f9b3;
            theoKzObjects[_0x1180ef(0x24a)] = true;
            $('#loa831pibur0w4gv').replaceWith(_0x1180ef(0x34d));
            $(_0x1180ef(0x2cc)).replaceWith(_0x1180ef(0x20d));
            window[_0x1180ef(0x4c3)] = 0x1;
            window[_0x1180ef(0xae)] = 0x5;
            window.onwheel = _0x2dbd0e => {
                var _0x1eba0a = _0x1180ef;
                if (_0x2dbd0e[_0x1eba0a(0x3c3)] > 0x0) {
                    window[_0x1eba0a(0x4c3)] *= 0.8;
                } else {
                    window.multiplier /= 0.8;
                }
                window[_0x1eba0a(0x4d5)]();
            };

            function _0x5238ac() {
                var _0x50d113 = _0x1180ef;
                window[_0x50d113(0xae)]++;
                window.multiplier *= 0.8;
                changedNf();
                _0x3b764e();
            }

            function _0x262710() {
                var _0x6b6e0b = _0x1180ef;
                if (window[_0x6b6e0b(0xae)] > 0x0) {
                    window.zoomLevel--;
                    window[_0x6b6e0b(0x4c3)] /= 0.8;
                    changedNf();
                    _0x3b764e();
                }
            }

            function _0x3b764e() {
                var _0x614075 = _0x1180ef;
                var _0x5950ec = Math[_0x614075(0x538)](window.multiplier / 0.625 * 0x64);
                _0x5950ec = Math[_0x614075(0x16e)](0x64, _0x5950ec);
                var _0x5c804a = document[_0x614075(0x17b)](_0x614075(0x462));
                _0x5c804a[_0x614075(0x1c5)] = _0x5950ec + '%';
            }
            document[_0x1180ef(0x17b)](_0x1180ef(0x14c))[_0x1180ef(0x152)](_0x1180ef(0x105), _0x5238ac, {
                'passive': false
            });
            document[_0x1180ef(0x17b)](_0x1180ef(0x2c7)).addEventListener('touchstart', _0x262710, {
                'passive': false
            });
            window[_0x1180ef(0x176)] = function(_0x3ed618) {
                var _0x52a528 = _0x1180ef;
                _0x3ed618[_0x52a528(0x24b)]();
                if (_0x3ed618[_0x52a528(0x3c3)] < 0x0) {
                    _0x5238ac();
                } else {
                    _0x262710();
                }
            };
            $('#settings-Abilityzoom-switch').on(_0x1180ef(0x1e7), function() {
                var _0x355abe = _0x1180ef;
                if (this[_0x355abe(0x40a)]) {
                    console[_0x355abe(0x483)]("I am checked");
                    theoKzObjects[_0x355abe(0x457)] = 0x1;
                    localStorage.setItem('mySwitch', 'on');
                } else {
                    console.log(_0x355abe(0x4aa));
                    theoKzObjects.eat_animation = 0.0025;
                    localStorage[_0x355abe(0x47e)]('mySwitch', _0x355abe(0x2c4));
                }
            });
            $(document).ready(function() {
                var _0x54e9ed = _0x1180ef;
                var _0x55cb6d = localStorage.getItem(_0x54e9ed(0x200));
                if (_0x55cb6d === 'on') {
                    $(_0x54e9ed(0x231)).prop(_0x54e9ed(0x40a), true);
                    theoKzObjects.eat_animation = 0x1;
                } else {
                    $(_0x54e9ed(0x231))[_0x54e9ed(0x21e)](_0x54e9ed(0x40a), false);
                    theoKzObjects[_0x54e9ed(0x457)] = 0.0025;
                }
            });
            $(_0x1180ef(0x37c)).on('click', function() {
                var _0x2074ac = _0x1180ef;
                if (this[_0x2074ac(0x40a)]) {
                    console[_0x2074ac(0x483)](_0x2074ac(0x3c1));
                    theoKzObjects.ModeStremer = true;
                    localStorage[_0x2074ac(0x47e)](_0x2074ac(0x248), _0x2074ac(0x51e));
                } else {
                    console[_0x2074ac(0x483)](_0x2074ac(0x4aa));
                    theoKzObjects[_0x2074ac(0x248)] = false;
                    localStorage[_0x2074ac(0x47e)](_0x2074ac(0x248), 'false');
                }
            });
            $(document)[_0x1180ef(0x225)](function() {
                var _0x54415c = _0x1180ef;
                var _0x24b47e = localStorage[_0x54415c(0x27a)](_0x54415c(0x248));
                if (_0x24b47e === 'true') {
                    theoKzObjects[_0x54415c(0x248)] = true;
                    $(_0x54415c(0x37c))[_0x54415c(0x21e)](_0x54415c(0x40a), true);
                } else {
                    theoKzObjects[_0x54415c(0x248)] = false;
                    $('#settings-stremingmode-switch')[_0x54415c(0x21e)]('checked', false);
                }
            });
            $(_0x1180ef(0x19c)).on(_0x1180ef(0x1e7), function() {
                var _0x1d88e2 = _0x1180ef;
                if (this[_0x1d88e2(0x40a)]) {
                    console.log(_0x1d88e2(0x3c1));
                    theoKzObjects.ModeStremerbatop = true;
                    localStorage[_0x1d88e2(0x47e)](_0x1d88e2(0x41c), 'true');
                } else {
                    console.log(_0x1d88e2(0x4aa));
                    theoKzObjects.ModeStremerbatop = false;
                    localStorage.setItem(_0x1d88e2(0x41c), 'false');
                }
            });
            $(document)[_0x1180ef(0x225)](function() {
                var _0x44a2e4 = _0x1180ef;
                var _0xee3182 = localStorage.getItem(_0x44a2e4(0x41c));
                if (_0xee3182 === _0x44a2e4(0x51e)) {
                    theoKzObjects.ModeStremerbatop = true;
                    $(_0x44a2e4(0x19c))[_0x44a2e4(0x21e)](_0x44a2e4(0x40a), true);
                } else {
                    theoKzObjects.ModeStremerbatop = false;
                    $('#settings-stremingmodebatop-switch')[_0x44a2e4(0x21e)](_0x44a2e4(0x40a), false);
                }
            });
            $(_0x1180ef(0x275)).on(_0x1180ef(0x1e7), function() {
                var _0x1bf7f4 = _0x1180ef;
                if (this.checked) {
                    console.log(_0x1bf7f4(0x3c1));
                    theoKzObjects[_0x1bf7f4(0x384)] = true;
                    localStorage.setItem(_0x1bf7f4(0x384), 'true');
                } else {
                    console.log("I'm not checked");
                    theoKzObjects[_0x1bf7f4(0x384)] = false;
                    localStorage[_0x1bf7f4(0x47e)](_0x1bf7f4(0x384), _0x1bf7f4(0x28f));
                }
                location[_0x1bf7f4(0x42c)]();
            });
            $(document)[_0x1180ef(0x225)](function() {
                var _0x42c4a2 = _0x1180ef;
                var _0x1c1f89 = localStorage.getItem(_0x42c4a2(0x384));
                if (_0x1c1f89 === _0x42c4a2(0x51e)) {
                    theoKzObjects[_0x42c4a2(0x384)] = true;
                    $('#settings-stremingmodesaveheadshot-switch')[_0x42c4a2(0x21e)]('checked', true);
                } else {
                    theoKzObjects[_0x42c4a2(0x384)] = false;
                    $(_0x42c4a2(0x275))[_0x42c4a2(0x21e)](_0x42c4a2(0x40a), false);
                }
            });
            $(_0x1180ef(0x1b1)).on('click', function() {
                var _0x287998 = _0x1180ef;
                if (this[_0x287998(0x40a)]) {
                    console[_0x287998(0x483)](_0x287998(0x3c1));
                    theoKzObjects[_0x287998(0x428)] = true;
                    localStorage[_0x287998(0x47e)](_0x287998(0x428), _0x287998(0x51e));
                } else {
                    console[_0x287998(0x483)](_0x287998(0x4aa));
                    theoKzObjects[_0x287998(0x428)] = false;
                    localStorage[_0x287998(0x47e)](_0x287998(0x428), _0x287998(0x28f));
                }
            });
            $(document).ready(function() {
                var _0x4b1313 = _0x1180ef;
                var _0x4b9acc = localStorage[_0x4b1313(0x27a)](_0x4b1313(0x428));
                if (_0x4b9acc === _0x4b1313(0x51e)) {
                    theoKzObjects[_0x4b1313(0x428)] = true;
                    $(_0x4b1313(0x1b1))[_0x4b1313(0x21e)](_0x4b1313(0x40a), true);
                } else {
                    theoKzObjects[_0x4b1313(0x428)] = false;
                    $(_0x4b1313(0x1b1))[_0x4b1313(0x21e)](_0x4b1313(0x40a), false);
                }
            });
            $('#settings-stremingmodeheadshot-switch').on(_0x1180ef(0x1e7), function() {
                var _0x42648b = _0x1180ef;
                if (this[_0x42648b(0x40a)]) {
                    console.log(_0x42648b(0x3c1));
                    theoKzObjects[_0x42648b(0x428)] = true;
                    localStorage[_0x42648b(0x47e)](_0x42648b(0x428), _0x42648b(0x51e));
                } else {
                    console[_0x42648b(0x483)](_0x42648b(0x4aa));
                    theoKzObjects.ModeStremerheadshot = false;
                    localStorage[_0x42648b(0x47e)](_0x42648b(0x428), _0x42648b(0x28f));
                }
            });
            $(document).ready(function() {
                var _0x17db9c = _0x1180ef;
                var _0x4481cd = localStorage[_0x17db9c(0x27a)](_0x17db9c(0x428));
                if (_0x4481cd === _0x17db9c(0x51e)) {
                    theoKzObjects.ModeStremerheadshot = true;
                    $(_0x17db9c(0x1b1)).prop(_0x17db9c(0x40a), true);
                } else {
                    theoKzObjects[_0x17db9c(0x428)] = false;
                    $('#settings-stremingmodeheadshot-switch')[_0x17db9c(0x21e)](_0x17db9c(0x40a), false);
                }
            });
            $(_0x1180ef(0x165)).on(_0x1180ef(0x1e7), function() {
                var _0x477281 = _0x1180ef;
                if (this[_0x477281(0x40a)]) {
                    console[_0x477281(0x483)](_0x477281(0x3c1));
                    theoKzObjects.ModeStremeremoj = true;
                    localStorage[_0x477281(0x47e)](_0x477281(0x341), _0x477281(0x51e));
                } else {
                    console[_0x477281(0x483)](_0x477281(0x4aa));
                    theoKzObjects[_0x477281(0x341)] = false;
                    localStorage[_0x477281(0x47e)](_0x477281(0x341), _0x477281(0x28f));
                }
            });
            $(document).ready(function() {
                var _0x36f748 = _0x1180ef;
                var _0x521e89 = localStorage[_0x36f748(0x27a)]('ModeStremeremoj');
                if (_0x521e89 === _0x36f748(0x51e)) {
                    theoKzObjects[_0x36f748(0x341)] = true;
                    $(_0x36f748(0x165))[_0x36f748(0x21e)](_0x36f748(0x40a), true);
                } else {
                    theoKzObjects[_0x36f748(0x341)] = false;
                    $(_0x36f748(0x165))[_0x36f748(0x21e)]('checked', false);
                }
            });
            $(_0x1180ef(0x45c)).on(_0x1180ef(0x1e7), function() {
                var _0x3e9020 = _0x1180ef;
                if (this[_0x3e9020(0x40a)]) {
                    console[_0x3e9020(0x483)](_0x3e9020(0x3c1));
                    theoKzObjects[_0x3e9020(0x498)] = false;
                } else {
                    console.log(_0x3e9020(0x4aa));
                    theoKzObjects[_0x3e9020(0x498)] = true;
                }
            });
            $(_0x1180ef(0x3cf)).on(_0x1180ef(0x315), function() {
                var _0x5c2500 = _0x1180ef;
                theoKzObjects.PortionSize = $(this)[_0x5c2500(0x246)]();
                localStorage[_0x5c2500(0x298)] = theoKzObjects[_0x5c2500(0x1ba)];
            });
            $(_0x1180ef(0x486)).on('input', function() {
                var _0x45c003 = _0x1180ef;
                theoKzObjects.PortionAura = $(this)[_0x45c003(0x246)]();
                localStorage.PotenciadorAura = theoKzObjects.PortionAura;
            });
            $('#smoothCamera').on(_0x1180ef(0x315), function() {
                var _0x53d25a = _0x1180ef;
                theoKzObjects[_0x53d25a(0x1ab)] = $(this).val();
                localStorage[_0x53d25a(0x1ab)] = theoKzObjects[_0x53d25a(0x1ab)];
            });
            $(_0x1180ef(0x23e)).on(_0x1180ef(0x315), function() {
                var _0x13bc56 = _0x1180ef;
                theoKzObjects[_0x13bc56(0x313)] = $(this)[_0x13bc56(0x246)]();
                localStorage[_0x13bc56(0x326)] = theoKzObjects[_0x13bc56(0x313)];
            });
            $('#FoodShadow').on(_0x1180ef(0x315), function() {
                var _0x477f88 = _0x1180ef;
                theoKzObjects[_0x477f88(0x1c0)] = $(this).val();
                localStorage[_0x477f88(0xed)] = theoKzObjects[_0x477f88(0x1c0)];
            });
            $(_0x1180ef(0x13e)).on(_0x1180ef(0x2d0), function(_0x3328f2) {
                var _0x2274f2 = _0x1180ef;
                if (isValidHotkey(_0x3328f2)) {
                    var _0x77a0ef = $(this);
                    var _0x15012d = getPresedKey(_0x3328f2);
                    var _0x382b77 = _0x3328f2[_0x2274f2(0x20b)];
                    _0x77a0ef[_0x2274f2(0x246)](_0x15012d);
                    _0x77a0ef[_0x2274f2(0x217)]();
                    window[_0x2274f2(0x260)] = _0x382b77;
                    window[_0x2274f2(0x282)][_0x2274f2(0x47e)](_0x77a0ef.attr('id'), _0x382b77);
                } else {
                    _0x3328f2[_0x2274f2(0x24b)]();
                }
            });
            for (a = 0x0; a < _0x1e719a[_0x1180ef(0xde)]; a++) {
                var _0x580f5a = _0x1e719a[a][_0x1180ef(0x2ef)];
                var _0x3c027a = _0x1e719a[a][_0x1180ef(0x3f5)];
                let _0x179cae = document[_0x1180ef(0x4bc)]('img');
                _0x179cae[_0x1180ef(0x2f3)] = _0x580f5a;
                $(_0x1180ef(0x4cd)).prepend(_0x179cae);
                $(_0x179cae)[_0x1180ef(0x371)](_0x1180ef(0xc3), _0x1180ef(0x3c2));
                $(_0x179cae)[_0x1180ef(0x1e7)](function() {
                    var _0x338aed = _0x1180ef;
                    let _0x2d8409 = $(this)[_0x338aed(0x371)](_0x338aed(0x2f3));
                    localStorage[_0x338aed(0x1b2)] = _0x2d8409;
                    $('#game-cont')[_0x338aed(0x4d4)]({
                        'cursor': 'url(' + _0x2d8409 + _0x338aed(0x36a)
                    });
                    $(_0x338aed(0x264)).css({
                        'cursor': _0x338aed(0x1d5) + _0x2d8409 + _0x338aed(0x36a)
                    });
                    $(_0x338aed(0x442))[_0x338aed(0x4d4)]({
                        'cursor': _0x338aed(0x1d5) + _0x2d8409 + _0x338aed(0x36a)
                    });
                });
                $('#default-cursor-btn')[_0x1180ef(0x1e7)](function() {
                    var _0x564926 = _0x1180ef;
                    delete localStorage[_0x564926(0x1b2)];
                    $(_0x564926(0x418))[_0x564926(0x4d4)](_0x564926(0x3c2), _0x564926(0x3e0));
                });
            }
            $(_0x1180ef(0xc0))[_0x1180ef(0x4d4)]({
                'cursor': _0x1180ef(0x1d5) + localStorage[_0x1180ef(0x1b2)] + "), default"
            });
            $(_0x1180ef(0x264))[_0x1180ef(0x4d4)]({
                'cursor': 'url(' + localStorage.cursorSeleccionado + _0x1180ef(0x36a)
            });
            $('body')[_0x1180ef(0x4d4)]({
                'cursor': _0x1180ef(0x1d5) + localStorage[_0x1180ef(0x1b2)] + _0x1180ef(0x36a)
            });
            for (a = 0x0; a < _0x330e61[_0x1180ef(0xde)]; a++) {
                var _0x559936 = _0x330e61[a][_0x1180ef(0x2ef)];
                var _0x131f2a = _0x330e61[a][_0x1180ef(0x3f5)];
                let _0x3cc05d = document[_0x1180ef(0x4bc)]('img');
                _0x3cc05d.src = _0x559936;
                $(_0x1180ef(0x53b))[_0x1180ef(0x516)](_0x3cc05d);
                $(_0x3cc05d)[_0x1180ef(0x371)](_0x1180ef(0xc3), _0x1180ef(0x295));
                $(_0x3cc05d)[_0x1180ef(0x371)](_0x1180ef(0x3f4), _0x131f2a);
                $(_0x3cc05d).click(function() {
                    var _0x444a6e = _0x1180ef;
                    let _0xb4d050 = $(this).attr(_0x444a6e(0x2f3));
                    let _0x100833 = $(this)[_0x444a6e(0x371)](_0x444a6e(0x3f4));
                    backgroundIMG = _0xb4d050;
                    localStorage[_0x444a6e(0x3e6)] = backgroundIMG;
                    alert(_0x444a6e(0x168) + _0x100833);
                    _0x2ba968.q.Cf = new _0x2ac030._b(_0x2ba968.q[_0x444a6e(0x4dd)](_0xb4d050));
                });
            }
            $(_0x1180ef(0x53b))[_0x1180ef(0x516)]('');
            _0x2ba968.q.Cf = new _0x2ac030._b(_0x2ba968.q[_0x1180ef(0x4dd)](localStorage[_0x1180ef(0x3e6)]));
        }

        function _0x1c76e5(_0x369140, _0x2b2de9) {
            var _0x2b3eee = _0x17f9b3;
            let _0x4d3b0e = function(_0x5f29dc, _0x39f8d8, _0xab9148, _0x104e7b) {
                var _0xd44742 = _0x26a8;
                ctx[_0xd44742(0x4a2)](_0x5f29dc, _0x39f8d8, _0xab9148, _0x104e7b);
            };
            if (_0x369140 === _0x2b3eee(0x290)) {
                theoKzObjects[_0x2b3eee(0x101)] = (theoKzObjects[_0x2b3eee(0x101)] || 0x0) + (_0x2b2de9 ? 0x0 : 0x1);
                theoKzObjects[_0x2b3eee(0x1bf)] = (theoKzObjects[_0x2b3eee(0x1bf)] || 0x0) + (_0x2b2de9 ? 0x1 : 0x0);
                theoKzObjects[_0x2b3eee(0x42d)] = theoKzObjects.totalKills + (_0x2b2de9 ? 0x0 : 0x1);
                theoKzObjects.totalHeadshots = theoKzObjects.totalHeadshots + (_0x2b2de9 ? 0x1 : 0x0);
                _0x4d3b0e(theoKzObjects[_0x2b3eee(0x101)], theoKzObjects[_0x2b3eee(0x1bf)], theoKzObjects[_0x2b3eee(0x42d)], theoKzObjects[_0x2b3eee(0x3b5)]);
            }
            if (_0x369140 === _0x2b3eee(0x3fe)) {
                theoKzObjects.kill = 0x0;
                theoKzObjects[_0x2b3eee(0x1bf)] = 0x0;
                $('#contadorKill_12').show();
                _0x4d3b0e(theoKzObjects[_0x2b3eee(0x101)], theoKzObjects[_0x2b3eee(0x1bf)], theoKzObjects[_0x2b3eee(0x42d)], theoKzObjects.totalHeadshots);
            }
            if (_0x369140 === _0x2b3eee(0x36f)) {
                pwrups = {};
            }
            if (_0x369140 === _0x2b3eee(0x1c6)) {
                theoKzObjects[_0x2b3eee(0x101)] = 0x0;
                theoKzObjects[_0x2b3eee(0x1bf)] = 0x0;
                theoKzObjects[_0x2b3eee(0x42d)] = 0x0;
                theoKzObjects.totalHeadshots = 0x0;
            }
        }
        if (!Number[_0x17f9b3(0xf8)].dotFormat) {
            Number[_0x17f9b3(0xf8)][_0x17f9b3(0x377)] = function() {
                var _0xa9198d = _0x17f9b3;
                return this.toString()[_0xa9198d(0x305)](/\B(?=(\d{3})+(?!\d))/g, '.');
            };
        }
        if (!Number.prototype[_0x17f9b3(0x39d)]) {
            Number[_0x17f9b3(0xf8)].dotFormatSelect2 = function() {
                var _0x83c4b4 = _0x17f9b3;
                return this.toString()[_0x83c4b4(0x33e)](0x3, 0x2);
            };
        }
        setTimeout(function() {
            var _0x2aeaee = _0x17f9b3;
            var _0x2f141d = ['ÙƒØ³', _0x2aeaee(0x1d8), _0x2aeaee(0x1e5), _0x2aeaee(0x32d), _0x2aeaee(0x21f), _0x2aeaee(0x4da), _0x2aeaee(0x495), _0x2aeaee(0x469), _0x2aeaee(0x3c8), _0x2aeaee(0x382), 'Ø§Ø¨ÙˆÙƒ', _0x2aeaee(0x1d9)];
            $(_0x2aeaee(0x25a)).on(_0x2aeaee(0x1e7), function() {
                var _0x1d5aba = _0x2aeaee;
                var _0x17d200 = $('#mm-params-nickname')[_0x1d5aba(0x246)]();
                var _0x52d1e5 = _0x2f141d[_0x1d5aba(0x1f9)](function(_0x4f2a9c) {
                    var _0x488ba2 = _0x1d5aba;
                    return _0x17d200[_0x488ba2(0x247)]()[_0x488ba2(0xd1)](_0x4f2a9c[_0x488ba2(0x247)]());
                });
                if (_0x52d1e5) {
                    $(_0x1d5aba(0x2c2))[_0x1d5aba(0x246)]("Ø£Ù† Ø§Ù„Ù„Ù‡ ÙŠØ±Ø§Ùƒ*");
                }
            });
            $(_0x2aeaee(0x329))[_0x2aeaee(0x4d4)](_0x2aeaee(0x1fa), _0x2aeaee(0x1e8));
            $('#unl6wj4czdl84o9b').css(_0x2aeaee(0x1fa), _0x2aeaee(0x1e8));
            $(_0x2aeaee(0x34e))[_0x2aeaee(0x4d4)]('display', 'block');
            $(_0x2aeaee(0xbf))[_0x2aeaee(0x4d4)](_0x2aeaee(0x1fa), _0x2aeaee(0x503));
            $(_0x2aeaee(0x4fc))[_0x2aeaee(0x4d4)](_0x2aeaee(0x1fa), _0x2aeaee(0x503));
            $('#mm-bottom-buttons')[_0x2aeaee(0x44f)](_0x2aeaee(0x2d2));
            var _0x640667 = $('<img>', {
                'id': _0x2aeaee(0x4f8),
                'src': _0x2aeaee(0x2fd),
                'alt': _0x2aeaee(0x4f8)
            });
            $(_0x2aeaee(0x43b))[_0x2aeaee(0x2b3)](_0x640667);
            $(_0x2aeaee(0x254))[_0x2aeaee(0x4d4)]({
                'position': 'absolute',
                'top': _0x2aeaee(0x3f1),
                'transform': _0x2aeaee(0x489),
                'width': '50px',
                'height': 'auto'
            });
            $(_0x2aeaee(0x45d))[_0x2aeaee(0x4d4)](_0x2aeaee(0x2be), 'absolute');
            $(_0x2aeaee(0x45d))[_0x2aeaee(0x4d4)](_0x2aeaee(0x510), '12px');
            $(_0x2aeaee(0x45d)).css('left', '5px');
            $(_0x2aeaee(0x258))[_0x2aeaee(0x4d4)](_0x2aeaee(0x1fa), _0x2aeaee(0x1e8));
        }, 0xbb8);
        var _0x5c0701 = function _0x35ff45() {
            requestAnimationFrame(_0x35ff45);
            _0xbda0f3().Pa();
        };
        _0x5c0701();

        function _0x1b87a5() {
            var _0x65b7f2 = _0x17f9b3;
            var _0x2c378d = _0x44d5ac[_0x65b7f2(0x4c1)]();
            var _0xc56ea9 = _0x44d5ac[_0x65b7f2(0x3f9)]();
            var _0x53487d = _0x9aeb10.outerWidth();
            var _0x3d1e74 = _0x9aeb10.outerHeight();
            var _0x13815e = _0x12203b.outerHeight();
            var _0x3f2212 = _0x1c6df5.outerHeight();
            var _0x732239 = Math[_0x65b7f2(0x16e)](0x1, Math.min((_0xc56ea9 - _0x3f2212 - _0x13815e) / _0x3d1e74, _0x2c378d / _0x53487d));
            var _0x11d71d = _0x65b7f2(0x42e) + _0x732239 + ')';
            _0x9aeb10[_0x65b7f2(0x4d4)]({
                '-webkit-transform': _0x11d71d,
                '-moz-transform': _0x11d71d,
                '-ms-transform': _0x11d71d,
                '-o-transform': _0x11d71d,
                'transform': _0x11d71d
            });
            _0xbda0f3().Ra();
            window[_0x65b7f2(0x139)](0x0, 0x1);
        }
        var _0x44d5ac = $(_0x17f9b3(0x442));
        var _0x9aeb10 = $(_0x17f9b3(0x3be));
        var _0x12203b = $(_0x17f9b3(0x37b));
        var _0x1c6df5 = $(_0x17f9b3(0x381));
        _0x1b87a5();
        $(window)[_0x17f9b3(0x304)](_0x1b87a5);
    })();
    window[_0x277474(0x116)].p.Bc = function() {
        var _0x1d6793 = _0x277474;
        var _0x52bda5 = window[_0x1d6793(0x116)].p;
        var _0x1faf7e = {};
        $[_0x1d6793(0x1a6)](_0x1d6793(0x31a), function(_0x3ea85d) {
            var _0x4f2249 = _0x1d6793;
            _0x1faf7e = _0x3ea85d;
            $.ajax({
                'url': _0x4f2249(0x417),
                'method': _0x4f2249(0x18d),
                'dataType': _0x4f2249(0x2f5),
                'success': function(_0xcff1c5) {
                    var _0x33337 = _0x4f2249;
                    theoKzObjects[_0x33337(0x267)] = _0xcff1c5[_0x33337(0x267)];
                    delete _0xcff1c5[_0x33337(0x267)];
                    for (let _0x59f319 in _0xcff1c5) {
                        if (_0x33337(0x1c4) !== _0x59f319) {
                            if (Array[_0x33337(0x345)](_0xcff1c5[_0x59f319])) {
                                _0x3ea85d[_0x59f319] = _0x3ea85d[_0x59f319][_0x33337(0x2a2)](_0xcff1c5[_0x59f319]);
                            } else {
                                _0x3ea85d[_0x59f319] = {
                                    ..._0x3ea85d[_0x59f319],
                                    ..._0xcff1c5[_0x59f319]
                                };
                            }
                        }
                    }
                    theoKzObjects.pL = _0xcff1c5[_0x33337(0x1c4)];
                    theoKzObjects[_0x33337(0x14f)] = _0xcff1c5[_0x33337(0x4ef)];
                    _0x52bda5.Cc(_0x3ea85d);
                },
                'error': function(_0x23d012, _0x4fffb3, _0x2c7299) {
                    var _0x16fe59 = _0x4f2249;
                    console[_0x16fe59(0xe3)](_0x2c7299);
                    _0x52bda5.Cc(_0x1faf7e);
                }
            });
        });
    };
    $('#background-canvas')[_0x277474(0x1d7)](_0x277474(0x26c));
    $(_0x277474(0xd8))[_0x277474(0x156)](_0x277474(0x450));
    $(_0x277474(0x412))[_0x277474(0x1d7)]('');
    $('#markup-footer') // Footer kÄ±smÄ±na iÃ§erik ekleniyor.
        .html('<footer id="markup-footer"><div class="lang-menu"><button class="lang-button">Language </button><div class="lang-list"><a hreflang="en" href="/">TÃ¼rkÃ§e</a><a hreflang="de" href="/de/">Deutsch</a><a hreflang="fr" href="/fr/">FranÃ§ais</a><a hreflang="es" href="/es/">EspaÃ±ol</a></div></div><a class="link" hreflang="en" href="https://wormate.io/">© 2025 Worm 007</a><a style="font-size:17px;font-weight:600;">Worm007.infint<a style="font-size:17px;font-weight:500;color:#ff0;"> Made with <i class="fa fa-heart animated infinite pulse" style="color:red"></i> in Ankara !</a></footer>');


});

function openPopup() {
    var _0xe589fa = _0x3b397b;
    var _0x4e2943 = document[_0xe589fa(0x17b)](_0xe589fa(0x198));
    var _0x5dfa3d = document[_0xe589fa(0x17b)]('overlay');
    _0x4e2943[_0xe589fa(0x1e4)][_0xe589fa(0x1fa)] = 'block';
    _0x5dfa3d[_0xe589fa(0x1e4)][_0xe589fa(0x1fa)] = _0xe589fa(0x503);
}

function closePopup() {
    var _0x3f2f55 = _0x3b397b;
    var _0x542504 = document.getElementById(_0x3f2f55(0x198));
    var _0x1559b1 = document[_0x3f2f55(0x17b)](_0x3f2f55(0x112));
    _0x542504[_0x3f2f55(0x1e4)][_0x3f2f55(0x1fa)] = _0x3f2f55(0x1e8);
    _0x1559b1[_0x3f2f55(0x1e4)][_0x3f2f55(0x1fa)] = _0x3f2f55(0x1e8);
}

function account() {
    var _0x1c300d = _0x3b397b;
    $(_0x1c300d(0x1fe)).on(_0x1c300d(0x1e7), function() {
        var _0x56acb9 = _0x1c300d;
        $(_0x56acb9(0x4db))[_0x56acb9(0x4ab)](0x1f4);
        $('#addflag')[_0x56acb9(0x371)](_0x56acb9(0xc3), _0x56acb9(0x181));
        $(_0x56acb9(0x1ee))[_0x56acb9(0x371)]('class', _0x56acb9(0x14a));
        $(_0x56acb9(0x1d6))[_0x56acb9(0x453)](_0x56acb9(0x15e));
        $(_0x56acb9(0x243))[_0x56acb9(0x453)](_0x56acb9(0x15e));
        $(_0x56acb9(0x32a))[_0x56acb9(0x453)]('ui-tab-active');
        $(_0x56acb9(0x3e7))[_0x56acb9(0x453)](_0x56acb9(0x15e));
        $(_0x56acb9(0x197))[_0x56acb9(0x453)](_0x56acb9(0x15e));
        $(_0x56acb9(0x193))[_0x56acb9(0x453)](_0x56acb9(0x15e));
        $(_0x56acb9(0x2c1))[_0x56acb9(0x453)](_0x56acb9(0x15e));
        $('.servers-peru').fadeOut(0x64);
        $('.servers-eeuu').fadeOut(0x64);
        $('.servers-canada')[_0x56acb9(0x513)](0x64);
        $(_0x56acb9(0x22c))[_0x56acb9(0x513)](0x64);
        $('.servers-francia')[_0x56acb9(0x513)](0x64);
        $(_0x56acb9(0x529)).fadeOut(0x64);
        $(_0x56acb9(0x2f2))[_0x56acb9(0x513)](0x64);
        $(_0x56acb9(0x458)).fadeOut(0x64);
        $('.servers-granbretana')[_0x56acb9(0x513)](0x64);
    });
    $(_0x1c300d(0x2d5)).on(_0x1c300d(0x1e7), function() {
        var _0x2b0459 = _0x1c300d;
        $('.servers-mexico')[_0x2b0459(0x513)](0x64);
        $(_0x2b0459(0xd2))[_0x2b0459(0x513)](0x64);
        $(_0x2b0459(0x42a))[_0x2b0459(0x513)](0x64);
        $('.servers-germania')[_0x2b0459(0x513)](0x64);
        $(_0x2b0459(0x2a9))[_0x2b0459(0x513)](0x64);
        $(_0x2b0459(0x529)).fadeOut(0x64);
        $(_0x2b0459(0x2f2)).fadeOut(0x64);
        $(_0x2b0459(0x458))[_0x2b0459(0x513)](0x64);
        $(_0x2b0459(0x342))[_0x2b0459(0x513)](0x64);
        $(_0x2b0459(0x1d6)).attr(_0x2b0459(0xc3), _0x2b0459(0x387));
        $('.ui-tab-inactive1')[_0x2b0459(0x453)]('ui-tab-active');
        $(_0x2b0459(0x243)).removeClass(_0x2b0459(0x15e));
        $(_0x2b0459(0x32a))[_0x2b0459(0x453)]('ui-tab-active');
        $(_0x2b0459(0x3e7))[_0x2b0459(0x453)](_0x2b0459(0x15e));
        $(_0x2b0459(0x197))[_0x2b0459(0x453)]('ui-tab-active');
        $('.ui-tab-inactive6').removeClass(_0x2b0459(0x15e));
        $(_0x2b0459(0x1cf))[_0x2b0459(0x453)]('ui-tab-active');
        $('.ui-tab-inactive8')[_0x2b0459(0x453)](_0x2b0459(0x15e));
        $(_0x2b0459(0x2c1)).removeClass(_0x2b0459(0x15e));
        $('.servers-peru')[_0x2b0459(0x4ab)](0x1f4);
        $(_0x2b0459(0x40f))[_0x2b0459(0x371)](_0x2b0459(0xc3), "flag br");
    });
    $(_0x1c300d(0x2dc)).on('click', function() {
        var _0x228bfb = _0x1c300d;
        $(_0x228bfb(0xd2)).fadeIn(0x1f4);
        $(_0x228bfb(0x40f))[_0x228bfb(0x371)](_0x228bfb(0xc3), _0x228bfb(0x170));
        $(_0x228bfb(0x243))[_0x228bfb(0x371)](_0x228bfb(0xc3), _0x228bfb(0x42f));
        $(_0x228bfb(0x1d6))[_0x228bfb(0x453)]('ui-tab-active');
        $('.ui-tab-inactive1')[_0x228bfb(0x453)]('ui-tab-active');
        $(_0x228bfb(0x32a)).removeClass(_0x228bfb(0x15e));
        $(_0x228bfb(0x3e7))[_0x228bfb(0x453)](_0x228bfb(0x15e));
        $(_0x228bfb(0x197))[_0x228bfb(0x453)](_0x228bfb(0x15e));
        $(_0x228bfb(0x276))[_0x228bfb(0x453)](_0x228bfb(0x15e));
        $(_0x228bfb(0x1cf)).removeClass('ui-tab-active');
        $('.ui-tab-inactive8').removeClass('ui-tab-active');
        $('.ui-tab-inactive9')[_0x228bfb(0x453)](_0x228bfb(0x15e));
        $('.servers-mexico').fadeOut(0x64);
        $('.servers-peru')[_0x228bfb(0x513)](0x64);
        $(_0x228bfb(0x42a))[_0x228bfb(0x513)](0x64);
        $('.servers-germania')[_0x228bfb(0x513)](0x64);
        $(_0x228bfb(0x2a9))[_0x228bfb(0x513)](0x64);
        $(_0x228bfb(0x529))[_0x228bfb(0x513)](0x64);
        $(_0x228bfb(0x2f2))[_0x228bfb(0x513)](0x64);
        $('.servers-australia').fadeOut(0x64);
        $(_0x228bfb(0x342)).fadeOut(0x64);
    });
    $(_0x1c300d(0x336)).on(_0x1c300d(0x1e7), function() {
        var _0x23f929 = _0x1c300d;
        $('.servers-canada')[_0x23f929(0x4ab)](0x1f4);
        $(_0x23f929(0x40f))[_0x23f929(0x371)](_0x23f929(0xc3), _0x23f929(0x379));
        $(_0x23f929(0x32a))[_0x23f929(0x371)](_0x23f929(0xc3), _0x23f929(0x46e));
        $(_0x23f929(0x1d6)).removeClass(_0x23f929(0x15e));
        $('.ui-tab-inactive1')[_0x23f929(0x453)](_0x23f929(0x15e));
        $(_0x23f929(0x243)).removeClass(_0x23f929(0x15e));
        $('.ui-tab-inactive4')[_0x23f929(0x453)]('ui-tab-active');
        $(_0x23f929(0x197))[_0x23f929(0x453)](_0x23f929(0x15e));
        $(_0x23f929(0x276))[_0x23f929(0x453)]('ui-tab-active');
        $(_0x23f929(0x1cf))[_0x23f929(0x453)]('ui-tab-active');
        $(_0x23f929(0x193))[_0x23f929(0x453)](_0x23f929(0x15e));
        $(_0x23f929(0x2c1))[_0x23f929(0x453)](_0x23f929(0x15e));
        $('.servers-eeuu')[_0x23f929(0x513)](0x64);
        $('.servers-mexico')[_0x23f929(0x513)](0x64);
        $(_0x23f929(0x43f))[_0x23f929(0x513)](0x1f4);
        $('.servers-germania')[_0x23f929(0x513)](0x64);
        $(_0x23f929(0x2a9))[_0x23f929(0x513)](0x64);
        $(_0x23f929(0x529)).fadeOut(0x64);
        $(_0x23f929(0x2f2))[_0x23f929(0x513)](0x64);
        $('.servers-australia')[_0x23f929(0x513)](0x64);
        $('.servers-granbretana').fadeOut(0x64);
    });
    $(_0x1c300d(0x3ee)).on(_0x1c300d(0x1e7), function() {
        var _0x46fd28 = _0x1c300d;
        $(_0x46fd28(0x22c))[_0x46fd28(0x4ab)](0x1f4);
        $(_0x46fd28(0x40f)).attr('class', _0x46fd28(0x3a4));
        $('.ui-tab-inactive4')[_0x46fd28(0x371)](_0x46fd28(0xc3), _0x46fd28(0x12b));
        $(_0x46fd28(0x1d6))[_0x46fd28(0x453)]('ui-tab-active');
        $(_0x46fd28(0x1ee))[_0x46fd28(0x453)](_0x46fd28(0x15e));
        $('.ui-tab-inactive2')[_0x46fd28(0x453)](_0x46fd28(0x15e));
        $('.ui-tab-inactive3').removeClass(_0x46fd28(0x15e));
        $('.ui-tab-inactive5')[_0x46fd28(0x453)](_0x46fd28(0x15e));
        $(_0x46fd28(0x276))[_0x46fd28(0x453)](_0x46fd28(0x15e));
        $(_0x46fd28(0x1cf)).removeClass(_0x46fd28(0x15e));
        $(_0x46fd28(0x193)).removeClass(_0x46fd28(0x15e));
        $(_0x46fd28(0x2c1))[_0x46fd28(0x453)](_0x46fd28(0x15e));
        $(_0x46fd28(0xd2))[_0x46fd28(0x513)](0x64);
        $(_0x46fd28(0x4db))[_0x46fd28(0x513)](0x64);
        $(_0x46fd28(0x43f))[_0x46fd28(0x513)](0x1f4);
        $(_0x46fd28(0x42a))[_0x46fd28(0x513)](0x64);
        $(_0x46fd28(0x2a9)).fadeOut(0x64);
        $(_0x46fd28(0x529)).fadeOut(0x64);
        $(_0x46fd28(0x2f2))[_0x46fd28(0x513)](0x64);
        $(_0x46fd28(0x458))[_0x46fd28(0x513)](0x64);
        $(_0x46fd28(0x342))[_0x46fd28(0x513)](0x64);
    });
    $('.fr').on(_0x1c300d(0x1e7), function() {
        var _0x3c8117 = _0x1c300d;
        $(_0x3c8117(0x2a9))[_0x3c8117(0x4ab)](0x1f4);
        $(_0x3c8117(0x40f)).attr(_0x3c8117(0xc3), _0x3c8117(0x3de));
        $(_0x3c8117(0x197))[_0x3c8117(0x371)](_0x3c8117(0xc3), _0x3c8117(0x531));
        $(_0x3c8117(0x1d6))[_0x3c8117(0x453)](_0x3c8117(0x15e));
        $(_0x3c8117(0x1ee)).removeClass(_0x3c8117(0x15e));
        $('.ui-tab-inactive2')[_0x3c8117(0x453)](_0x3c8117(0x15e));
        $('.ui-tab-inactive3').removeClass(_0x3c8117(0x15e));
        $('.ui-tab-inactive4')[_0x3c8117(0x453)](_0x3c8117(0x15e));
        $(_0x3c8117(0x276))[_0x3c8117(0x453)](_0x3c8117(0x15e));
        $(_0x3c8117(0x1cf))[_0x3c8117(0x453)]('ui-tab-active');
        $(_0x3c8117(0x193))[_0x3c8117(0x453)](_0x3c8117(0x15e));
        $(_0x3c8117(0x2c1))[_0x3c8117(0x453)](_0x3c8117(0x15e));
        $(_0x3c8117(0xd2))[_0x3c8117(0x513)](0x64);
        $(_0x3c8117(0x4db))[_0x3c8117(0x513)](0x64);
        $(_0x3c8117(0x43f))[_0x3c8117(0x513)](0x64);
        $(_0x3c8117(0x22c))[_0x3c8117(0x513)](0x64);
        $('.servers-canada')[_0x3c8117(0x513)](0x64);
        $(_0x3c8117(0x529)).fadeOut(0x64);
        $(_0x3c8117(0x2f2)).fadeOut(0x64);
        $('.servers-australia').fadeOut(0x64);
        $('.servers-granbretana')[_0x3c8117(0x513)](0x64);
    });
    $(_0x1c300d(0x17a)).on(_0x1c300d(0x1e7), function() {
        var _0x4fc10b = _0x1c300d;
        $(_0x4fc10b(0x529))[_0x4fc10b(0x4ab)](0x1f4);
        $(_0x4fc10b(0x40f))[_0x4fc10b(0x371)](_0x4fc10b(0xc3), _0x4fc10b(0x230));
        $('.ui-tab-inactive6')[_0x4fc10b(0x371)](_0x4fc10b(0xc3), _0x4fc10b(0x3c5));
        $(_0x4fc10b(0x1d6)).removeClass(_0x4fc10b(0x15e));
        $('.ui-tab-inactive1').removeClass('ui-tab-active');
        $('.ui-tab-inactive2').removeClass(_0x4fc10b(0x15e));
        $(_0x4fc10b(0x32a))[_0x4fc10b(0x453)](_0x4fc10b(0x15e));
        $('.ui-tab-inactive4')[_0x4fc10b(0x453)](_0x4fc10b(0x15e));
        $(_0x4fc10b(0x197))[_0x4fc10b(0x453)]('ui-tab-active');
        $('.ui-tab-inactive7')[_0x4fc10b(0x453)](_0x4fc10b(0x15e));
        $(_0x4fc10b(0x193))[_0x4fc10b(0x453)](_0x4fc10b(0x15e));
        $(_0x4fc10b(0x2c1))[_0x4fc10b(0x453)](_0x4fc10b(0x15e));
        $(_0x4fc10b(0xd2))[_0x4fc10b(0x513)](0x64);
        $(_0x4fc10b(0x4db)).fadeOut(0x64);
        $('.servers-peru').fadeOut(0x64);
        $('.servers-canada').fadeOut(0x64);
        $(_0x4fc10b(0x22c))[_0x4fc10b(0x513)](0x64);
        $(_0x4fc10b(0x2a9))[_0x4fc10b(0x513)](0x64);
        $(_0x4fc10b(0x2f2))[_0x4fc10b(0x513)](0x64);
        $(_0x4fc10b(0x458))[_0x4fc10b(0x513)](0x64);
        $('.servers-granbretana')[_0x4fc10b(0x513)](0x64);
    });
    $(_0x1c300d(0x207)).on(_0x1c300d(0x1e7), function() {
        var _0x35d553 = _0x1c300d;
        $(_0x35d553(0x2f2))[_0x35d553(0x4ab)](0x1f4);
        $(_0x35d553(0x40f))[_0x35d553(0x371)]('class', _0x35d553(0xf7));
        $(_0x35d553(0x1cf))[_0x35d553(0x371)](_0x35d553(0xc3), _0x35d553(0x289));
        $(_0x35d553(0x1d6))[_0x35d553(0x453)](_0x35d553(0x15e));
        $(_0x35d553(0x1ee))[_0x35d553(0x453)](_0x35d553(0x15e));
        $(_0x35d553(0x243))[_0x35d553(0x453)](_0x35d553(0x15e));
        $('.ui-tab-inactive3')[_0x35d553(0x453)](_0x35d553(0x15e));
        $(_0x35d553(0x3e7))[_0x35d553(0x453)](_0x35d553(0x15e));
        $(_0x35d553(0x197))[_0x35d553(0x453)](_0x35d553(0x15e));
        $(_0x35d553(0x276))[_0x35d553(0x453)](_0x35d553(0x15e));
        $('.ui-tab-inactive8').removeClass('ui-tab-active');
        $(_0x35d553(0x2c1))[_0x35d553(0x453)](_0x35d553(0x15e));
        $(_0x35d553(0xd2)).fadeOut(0x64);
        $('.servers-mexico')[_0x35d553(0x513)](0x64);
        $(_0x35d553(0x43f))[_0x35d553(0x513)](0x64);
        $('.servers-canada')[_0x35d553(0x513)](0x64);
        $(_0x35d553(0x22c))[_0x35d553(0x513)](0x64);
        $('.servers-francia')[_0x35d553(0x513)](0x64);
        $('.servers-singapur')[_0x35d553(0x513)](0x64);
        $(_0x35d553(0x458))[_0x35d553(0x513)](0x64);
        $(_0x35d553(0x342))[_0x35d553(0x513)](0x64);
    });
    $(_0x1c300d(0x13a)).on(_0x1c300d(0x1e7), function() {
        var _0x1251d2 = _0x1c300d;
        $(_0x1251d2(0x458))[_0x1251d2(0x4ab)](0x1f4);
        $(_0x1251d2(0x40f)).attr(_0x1251d2(0xc3), _0x1251d2(0x277));
        $('.ui-tab-inactive8')[_0x1251d2(0x371)](_0x1251d2(0xc3), _0x1251d2(0x1b0));
        $(_0x1251d2(0x1d6))[_0x1251d2(0x453)](_0x1251d2(0x15e));
        $(_0x1251d2(0x1ee))[_0x1251d2(0x453)](_0x1251d2(0x15e));
        $(_0x1251d2(0x243))[_0x1251d2(0x453)](_0x1251d2(0x15e));
        $('.ui-tab-inactive3')[_0x1251d2(0x453)](_0x1251d2(0x15e));
        $('.ui-tab-inactive4')[_0x1251d2(0x453)](_0x1251d2(0x15e));
        $(_0x1251d2(0x197))[_0x1251d2(0x453)](_0x1251d2(0x15e));
        $(_0x1251d2(0x276))[_0x1251d2(0x453)](_0x1251d2(0x15e));
        $('.ui-tab-inactive7')[_0x1251d2(0x453)](_0x1251d2(0x15e));
        $('.ui-tab-inactive9')[_0x1251d2(0x453)](_0x1251d2(0x15e));
        $(_0x1251d2(0xd2))[_0x1251d2(0x513)](0x64);
        $(_0x1251d2(0x4db))[_0x1251d2(0x513)](0x64);
        $(_0x1251d2(0x43f))[_0x1251d2(0x513)](0x64);
        $(_0x1251d2(0x42a))[_0x1251d2(0x513)](0x64);
        $('.servers-germania').fadeOut(0x64);
        $(_0x1251d2(0x2a9))[_0x1251d2(0x513)](0x64);
        $(_0x1251d2(0x529))[_0x1251d2(0x513)](0x64);
        $(_0x1251d2(0x2f2))[_0x1251d2(0x513)](0x64);
        $(_0x1251d2(0x342))[_0x1251d2(0x513)](0x64);
    });
    $(_0x1c300d(0xb0)).on(_0x1c300d(0x1e7), function() {
        var _0x3fce53 = _0x1c300d;
        $(_0x3fce53(0x342)).fadeIn(0x1f4);
        $(_0x3fce53(0x40f))[_0x3fce53(0x371)](_0x3fce53(0xc3), _0x3fce53(0x4c2));
        $(_0x3fce53(0x2c1)).attr(_0x3fce53(0xc3), "ui-tab-active ui-tab-inactive9");
        $(_0x3fce53(0x1d6))[_0x3fce53(0x453)](_0x3fce53(0x15e));
        $('.ui-tab-inactive1')[_0x3fce53(0x453)](_0x3fce53(0x15e));
        $(_0x3fce53(0x243))[_0x3fce53(0x453)](_0x3fce53(0x15e));
        $(_0x3fce53(0x32a))[_0x3fce53(0x453)](_0x3fce53(0x15e));
        $(_0x3fce53(0x3e7)).removeClass('ui-tab-active');
        $(_0x3fce53(0x197))[_0x3fce53(0x453)](_0x3fce53(0x15e));
        $(_0x3fce53(0x276)).removeClass(_0x3fce53(0x15e));
        $(_0x3fce53(0x193))[_0x3fce53(0x453)]('ui-tab-active');
        $(_0x3fce53(0xd2))[_0x3fce53(0x513)](0x64);
        $(_0x3fce53(0x4db)).fadeOut(0x64);
        $(_0x3fce53(0x43f))[_0x3fce53(0x513)](0x64);
        $(_0x3fce53(0x42a))[_0x3fce53(0x513)](0x64);
        $('.servers-germania')[_0x3fce53(0x513)](0x64);
        $(_0x3fce53(0x2a9)).fadeOut(0x64);
        $(_0x3fce53(0x529))[_0x3fce53(0x513)](0x64);
        $('.servers-japon')[_0x3fce53(0x513)](0x64);
        $(_0x3fce53(0x458))[_0x3fce53(0x513)](0x64);
    });
}
var getPresedKey = function(_0xc63417) {
    var _0x3d15a9 = _0x3b397b;
    var _0x34561a = '';
    if (_0xc63417[_0x3d15a9(0x20b)] === 0x9) {
        _0x34561a += 'TAB';
    } else {
        if (_0xc63417[_0x3d15a9(0x20b)] === 0xd) {
            _0x34561a += _0x3d15a9(0x2e8);
        } else if (_0xc63417[_0x3d15a9(0x20b)] === 0x10) {
            _0x34561a += 'SHIFT';
        } else {
            _0x34561a += String.fromCharCode(_0xc63417[_0x3d15a9(0x20b)]);
        }
    }
    return _0x34561a;
};
getStringKey = function(_0x39d085) {
    var _0x3017bf = _0x3b397b;
    var _0x1068dc = '';
    if (_0x39d085 == 0x9) {
        _0x1068dc += _0x3017bf(0x4e0);
    } else {
        if (_0x39d085 == 0xd) {
            _0x1068dc += _0x3017bf(0x2e8);
        } else {
            if (_0x39d085 == 0x10) {
                _0x1068dc += 'SHIFT';
            } else {
                if (_0x39d085 == 0x20) {
                    _0x1068dc += _0x3017bf(0x1b6);
                } else if (_0x39d085 == 0x1b) {
                    _0x1068dc += _0x3017bf(0x2ad);
                } else {
                    _0x1068dc += String[_0x3017bf(0x16c)](_0x39d085);
                }
            }
        }
    }
    return _0x1068dc;
};
const isValidHotkey = function(_0x387d97) {
    var _0x331c45 = _0x3b397b;
    const _0xd41fd0 = _0x387d97[_0x331c45(0x477)];
    return _0xd41fd0 >= '0' && _0xd41fd0 <= '9' || _0xd41fd0 >= 'A' && _0xd41fd0 <= 'Z' || _0xd41fd0 === 'Tab' || _0xd41fd0 === _0x331c45(0xdf) || _0xd41fd0 === _0x331c45(0x357) || _0xd41fd0 === " " || _0xd41fd0 === _0x331c45(0x37a);
};

function _0x2a3d() {
    var _0x6cfe51 = ['clientesActivos', "flag fr", 'woman', 'default', 'borderRadius', "Ø­Ø¯Ø« Ø®Ø·Ø£ Ø§Ø«Ù†Ø§Ø¡ Ø§Ù„ØªØ­Ù…ÙŠÙ„ ÙŠØ±Ø¬ÙŠ ØªØ­Ø¯ÙŠØ« Ø§Ù„ØµÙØ­Ø© F5.", 'shared', 'head', 'X_xxlupa', 'fondoSeleccionado', '.ui-tab-inactive4', 'hasOwnProperty', 'Api_listServer', 'rotation', 'https://cdn.custom-cursor.com/db/pointer/32/Tom_and_JerryPointer.png', 'X10_TYPE', '_refresh', '.de', 'undefined', 'xXxLupaZ', '-23px', "<div id=\"final-continue1\">Lobi </div>", 'Kratos', 'value', 'nombre', 'pocket', 'Mal3ab', 'retundFlagError', 'height', '000', 'create', "use strict", 'https://i.imgur.com/4QC2Exd.png', 'open', 'coins_50000', 'warn', '#mm-action-login', 'padStart', '#main-menu-view', 'https://cdn.custom-cursor.com/db/cursor/32/Superman_Cursor.png', '.v1', "Ø­Ø¯Ø« Ø®Ø·Ø£ Ø£Ø«Ù†Ø§Ø¡ ØªØ­Ù…ÙŠÙ„ Ø§Ù„Ø³ÙŠØ±ÙØ±Ø§Øª. ÙŠØ±Ø¬Ù‰ Ø¥Ø¹Ø§Ø¯Ø© Ø§Ù„Ù…Ø­Ø§ÙˆÙ„Ø© Ù„Ø§Ø­Ù‚Ù‹Ø§.", 'substring', "Attempt ", 'white', 'checked', 'atan2', '1eaom01c3pxu9wd3', 'sgp1', "\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NiA0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik0yNDQuMyA0NTZWMjc5LjdoLTU5LjN2LTcxLjloNTkuM3YtNjAuNGMwLTQzLjkgMzUuNi03OS41IDc5LjUtNzkuNWg2MnY2NC42aC00NC40Yy0xMy45IDAtMjUuMyAxMS4zLTI1LjMgMjUuM3Y1MGg2OC41bC05LjUgNzEuOWgtNTkuMVY0NTZ6IiBmaWxsPSIjZmZmIi8+PC9zdmc+\"><span>", '#addflag', "Error loading users:", 'stringify', '#social-buttons', 'https://asserts.wormworld.io/sounds/headshot_sound_effect.mp3', '36gHmjvB', '#00B2ED', 'opera', 'https://wormateserkanconnect.github.io/wormateserkanconnect6/api/lan-da-vh.php', "#game-cont, #game-canvas, body", 'https://i.imgur.com/dWtJFIx.png', 'black', 'connected', 'ModeStremerbatop', 'yyy', '#FoodShadow', 'guest', 'latitude', 'script', '</span><span>', 'Client_VisibleSkin15', '#leaders-button-level', 'bada', 'https://i.imgur.com/ub4ed3R.png', '#profile-stat-headshots', 'ModeStremerheadshot', '#login-view', '.servers-canada', 'F12', 'reload', 'totalKills', "translate(-50%, -50%) scale(", "ui-tab-active ui-tab-inactive2", 'padEnd', 'play', 'X_x5', "</div>    <div class=\"toaster-levelup-close\">", 'gsi:l', 'OA==', 'center', 'japon', '#wear-locked-bar-text', 'hiptop', 'OPEN', '#mm-player-avatar', "<img class=\"pwrups v0\" style=\"display: none;\" src=\"https://i.imgur.com/M1LFPpp.png\">", 'prerollCount', 'gsi:c', '.servers-peru', 'index.game.popup.menu.leaders.tab', 'div', 'body', 'consented', 'ipod', '*vec3(', 'documentElement', 'google', 'userAgent', 'https://i.imgur.com/vD4zoMk.png', '.v5', 'index.game.toaster.continue', 'geolocation', 'xxxLupatype', 'blendMode', 'addClass', "<div class=\"settings-line\" id=\"popup-login-gg1\">Login via Google</div>", '.v4', 'loading', 'removeClass', 'AudioState', 'preroll', 'fontWeight', 'eat_animation', '.servers-australia', 'aipS', '#adbl-4', 'flexx', '#settings-arrowmobile-switch', '#relojHelp', 'currentUser', 'username', '657352QhlvmW', '#wear-view-next', 'zoom-percentage', 'index.game.popup.menu.coins.tab', 'midp', 'lineStyle', '#mm-player-exp-bar', 'success', 'fontFamily', 'Ø§Ø®ÙˆÙƒ', 'iphone', "\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjQ1NiIgaGVpZ2h0PSI0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik02MCAzMzhjMzAgMTkgNjYgMzAgMTA1IDMwIDEwOCAwIDE5Ni04OCAxOTYtMTk2IDAtMyAwLTUgMC04IDQtMyAyOC0yMyAzNC0zNSAwIDAtMjAgOC0zOSAxMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAyLTEgMjctMTggMzAtMzggMCAwLTE0IDctMzMgMTQgLTMgMS03IDItMTAgMyAtMTMtMTMtMzAtMjItNTAtMjIgLTM4IDAtNjkgMzEtNjkgNjkgMCA1IDEgMTEgMiAxNiAtNSAwLTg2LTUtMTQxLTcxIDAgMC0zMyA0NSAyMCA5MSAwIDAtMTYtMS0zMC05IDAgMC01IDU0IDU0IDY4IDAgMC0xMiA0LTMwIDEgMCAwIDEwIDQ0IDYzIDQ4IDAgMC00MiAzOC0xMDEgMjlMNjAgMzM4eiIgZmlsbD0iI0ZGRiIvPjwvc3ZnPg==\"><span>", '#settings-show-names-switch', 'render', "ui-tab-active ui-tab-inactive3", '.pwrups', '.Worm_cerca', 'stop', 'volume', 'index.game.popup.menu.profile.tab', '#game-view', '#store-go-coins-button', "200% 100%", 'key', 'WHITE', 'https://i.imgur.com/UbRiUYr.png', 'Application', '959425192138-qjq23l9e0oh8lgd2icnblrbfblar4a2f.apps.googleusercontent.com', 'Client_VisibleSkin20', 'catch', 'setItem', 'accessToken', 'nombres2', 'endFill', 'X_x10', 'log', "', change in (ms) ", '#wear-tint-chooser', '#PortionAura', 'https://wormateserkanconnect.github.io/wormateserkanconnect6/images/clock.png', 'innerWidth', 'translateX(-2%)', 'PotenciadorAura', '#getskin', 'PortionSkinData', '#results-view', 'fennec', 'Config', 'keypress', 'hide', 'index.game.social.shareResult.messNorm', 'morado1', 'mouthUnknown', 'Ø·ÙŠØ¨Ø©', '&type=', 'https://cdn.custom-cursor.com/db/cursor/32/Tom_and_JerryCursor.png', 'arrow', 'WearSkinData', '#loading-view', 'label_hs', 'I18N_LANG', " copied!'));\">Copy</button>\n            <center>\n              <div class=\"hg\">\n                <a target=\"_blank\" href=\"https://worm007.infinityfreeapp.com\">Active</a>\n                <br> <br> <br><br> <br> <br>\n                                <a\">                     </a>\n\n              </div>\n            </center>\n            <i class=\"fa fa-book\" aria-hidden=\"true\" style=\"color: #48ff00;\"></i>\n            <a style=\"color: #2ae1eb; font-weight: 600;\" href=\"https://discord.gg/zNJkB8EeUF\">Discord Server</a>\n          </div>\n        </div>\n      ", '#adbl-2', 'webkitCancelFullScreen', '.v2', 'replaceAll', 'setCountGame', '#FFFFFF', '#mm-skin-prev', 'joystick', 'KeyRespawn', 'inputReplaceSkin', 'touchmove', 'scale', "I'm not checked", 'fadeIn', 'selectSala', 'fontStyle', "\"></div>", "\n        <div class=\"description-text\">\n          <div id=\"title\"></div>\n          <div class=\"description-text-test\">\n            <ul style=\"margin-top: 5px;\" class=\"ui-tabs-nav\">\n              <li class=\"ui-tabs-tab ui-tab ui-tab-inactive0 ui-tab-active\" style=\"margin: -5px\">\n                <a> <span class=\"flag br\" value=\"https://i.imgur.com/dixYLjk.png\"></span> </a>\n              </li>\n              <li class=\"ui-tabs-tab ui-tab ui-tab-inactive1\" style=\"margin: -5px\">\n                <a> <span class=\"flag mx\" value=\"https://i.imgur.com/JMAvuFN.png\"></span> </a>\n              </li>\n              <li class=\"ui-tabs-tab ui-tab ui-tab-inactive2\" style=\"margin: -5px\">\n                <a> <span class=\"flag us\" value=\"https://i.imgur.com/Jb2FF0y.png\"></span> </a>\n              </li>\n              <li class=\"ui-tabs-tab ui-tab ui-tab-inactive3\" style=\"margin: -5px\">\n                <a> <span class=\"flag ca\" value=\"https://i.imgur.com/m1skEsB.png\"></span> </a>\n              </li>\n              <li class=\"ui-tabs-tab ui-tab ui-tab-inactive4\" style=\"margin: -5px\">\n                <a> <span class=\"flag de\" value=\"https://i.imgur.com/VgCH8iy.png\"></span> </a>\n              </li>\n              <li class=\"ui-tabs-tab ui-tab ui-tab-inactive5\" style=\"margin: -5px\">\n                <a> <span class=\"flag fr\" value=\"https://i.imgur.com/QuEjBr0.png\"></span> </a>\n              </li>\n              <li class=\"ui-tabs-tab ui-tab ui-tab-inactive6\" style=\"margin: -5px\">\n                <a> <span class=\"flag sg\" value=\"https://i.imgur.com/ErLcgXP.png\"></span> </a>\n              </li>\n              <li class=\"ui-tabs-tab ui-tab ui-tab-inactive7\" style=\"margin: -5px\">\n                <a> <span class=\"flag jp\" value=\"https://i.imgur.com/P2rYk1k.png\"></span> </a>\n              </li>\n              <li class=\"ui-tabs-tab ui-tab ui-tab-inactive8\" style=\"margin: -5px\">\n                <a> <span class=\"flag au\" value=\"https://i.imgur.com/12e0wp4.png\"></span> </a>\n              </li>\n              <li class=\"ui-tabs-tab ui-tab ui-tab-inactive9\" style=\"margin: -5px\">\n                <a> <span class=\"flag gb\" value=\"https://i.imgur.com/8pQY6RW.png\"></span> </a>\n              </li>\n            </ul>\n            <div class=\"bao-list2\">\n              <div class=\"gachngang\"></div>\n              <div class=\"servers-container\">\n                <div class=\"servers-peru\"></div>\n                <div class=\"servers-mexico\" style=\"display: none;\"></div>\n                <div class=\"servers-eeuu\" style=\"display: none;\"></div>\n                <div class=\"servers-canada\" style=\"display: none;\"></div>\n                <div class=\"servers-germania\" style=\"display: none;\"></div>\n                <div class=\"servers-francia\" style=\"display: none;\"></div>\n                <div class=\"servers-singapur\" style=\"display: none;\"></div>\n                <div class=\"servers-japon\" style=\"display: none;\"></div>\n                <div class=\"servers-australia\" style=\"display: none;\"></div>\n                <div class=\"servers-granbretana\" style=\"display: none;\"></div>\n              </div>\n                <script src=\"https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.3/howler.min.js\"></script>\n            </div>\n          </div>\n        </div>\n      ", "Load GM: ", 'maxPlayers', 'TeamSkinData', 'rs:lo', 'Client_VisibleSkin7', '#popup-logout-container', 'Text', 'level', 'innerHeight', 'sfxEnabled', ".. 8 ..", 'name', 'createElement', 'settingContent', '#mm-settings', '{2}', 'index.game.popup.menu.login.tab', 'width', "flag gb", 'multiplier', "gsi:e: ", 'region', 'from', '_complete', 'ENV', "windows ce", 'beginFill', 'fillText', 'medium', '.cursor-container', '#store-buy-button', 'show', '#FFF', 'background-color', 'mexico', ".. 9 ..", 'css', 'changedNf', 'setServer', "chuot 3", 'mouthVariantArray', '//apis.google.com/js/api:client.js', 'Ù†Ø¸ÙŠÙ', '.servers-mexico', 'a2_', 'fn_o', 'angleBetween', 'u5_', 'TAB', 'load', 'PortionAura', 'main', '#mm-skin-canv', "<div class=\"text-vnxx\"><a href=\"https://www.wormatefriendsturkey.com\">Wormate Serkan Connect 2025</a></div>", 'getContext', 'fullScreenElement', 'top10sv', '1203fxVnwG', 'colorDict', '#idReplaceSkin', 'right', 'https://pixijs.download/release/pixi.js', 'Default', 'skinArrayDict', ".. 1 ..", 'mousemove', "fade OUT ", "Socket send error: ", 'fr_FR', 'string', '#CCCF81', 'status', 'gold-crown', 'svg', 'test', 'cliente_ID', '#mm-player-info', '#wear-hats-button', 'prime', 'angle', '.toaster-levelup-close', "ØªÙ… ØªØµÙÙŠØ± Ø¹Ø¯Ø§Ø¯ Ø§Ù„ØµÙˆØª Ø¹Ù†Ø¯ Ø§Ù„Ø¶ØºØ· Ø¹Ù„Ù‰ Ø²Ø± Ø§Ù„ØµÙØ­Ø© Ø§Ù„Ø±Ø¦ÙŠØ³ÙŠØ©.", "<div style=\"border-color:", 'block', 'peru', 'portionUnknown', 'revision', 'singapur', "Ping: ", 'xxx10', 'addAttribute', "precision highp float;varying vec2 ", 'expired_token', 'zoom', 'expToNext', 'MOUTH', 'top', '#profile-stat-registrationDate', 'gray', 'fadeOut', "'></div>", 'Client_VisibleSkin14', 'prepend', "this is null or not defined", '</span></div>', "segundos digitos: ", '#popup-menu-label', 'enableClasses', 'uk_UA', "<div id=\"final-replay\">Tekrar Oyna</div>", 'true', 'https://i.imgur.com/QZfm7vv.png', 'onclose', 'removeChildren', 'arraybuffer', 'avantgo', 'nonbuyableCause', 'eyesUnknown', 'websockets', 'canvas', '#profile-username', '.servers-singapur', '#popup-login-fb', 'wormup', '3838149SJFtPH', "loading advertisement", 'lo:gg', 'map', 'ltmolilci1iurq1i', "ui-tab-active ui-tab-inactive5", 'toString', 'consent_state_2', 'code', 'send', 'https://i.imgur.com/wYJAfmO0.png', 'skinId', 'round', 'login', 'append', '.background-container', "<div id=\"", 'normal', 'account_type', 'comidax10', '&skinId=', 'zoomLevel', '/start?gameMode=', '.gb', '.flag', 'now', '#settings-sfx-enabled-switch', '#loa831pibur0w4gv', ';gl_Position=vec4((', "   ", 'inline-block', 'X2_TYPE', '#final-caption', 'parse', '#final-continue', 'nonbuyable', 'kindle', 'detecNewCodeAndPacth', '#mm-bottom-buttons', '#game-cont', '#delete-account-no', 'TEAM_DEFAULT', 'class', '#EFFA45', 'format', 'texture', 'index.game.toaster.consent.link', "<img src=\"", 'atan', 'nickname', '#adbl-continue', 'android', '#mm-event-text', 'eeuu', 'text', '.v6', 'includes', '.servers-eeuu', 'list', 'fi_aw', 'Graphics', 'https://i.imgur.com/MlCgOma.png', '#mm-action-guest', '#popup-login-gg', 'error-view', '&mouthId=', 'price', "<div><svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" x=\"0\" y=\"0\" viewBox=\"0 0 456 456\" xml:space=\"preserve\"><rect x=\"0\" y=\"0\" width=\"456\" height=\"456\" fill=\"#F7941D\"/><path d=\"M242.7 456V279.7h-59.3v-71.9h59.3v-60.4c0-43.9 35.6-79.5 79.5-79.5h62v64.6h-44.4c-13.9 0-25.3 11.3-25.3 25.3v50h68.5l-9.5 71.9h-59.1V456z\" fill=\"#fff\"/></svg><span>", '&nickname=', 'length', 'Enter', "#adbl-continue span", '0000', '/images/confetti-xmas2022.png', 'error', 'Client_VisibleSkin6', 'color', '#final-place', 'abs', 'cmd', 'drawCircle', 'https://i.imgur.com/SjFtyqp.png', 'fb_', 'sgp2', 'ComidaShadow', 'symbol', 'iemobile', 'abilityDict', 'distance', 'renderer', "</a>    </div>    <div class=\"toaster-consent-close\">", 'skin', 'flx', 'yellow', "flag jp", 'prototype', 'baseVal', 'parent', 'label_kill', 'blackberry', 'value2_kill', '/images/bg-pattern-pow2-TEAM2.png', '547100BCMVRD', 'skinGroupArrayDict', 'kill', '#settings-view', 'href', 'borderImg', 'touchstart', '_init', 'maemo', 'index.game.popup.menu.skins.tab', 'set', 'CLOSING', "<div id='zoom-container'><div id='zoom-in'>+</div><div id='zoom-out'>-</div></div>", '#popup-menu-back', 'index.game.social.shareResult.caption', "init2 pSC: ", 'index.game.main.menu.unlockSkins.comeAndPlay', '7266152AFfYiV', 'offsetWidth', 'overlay', " / ", "\n    <div id=\"mm-store\" style=\"float: right; position: relative; margin-right: 10px; min-width: 140px;\">\n        <div style=\"margin: 0;\" id=\"loa831pibur0w4gv\">\n            <div onclick=\"openPopup()\">\n                <i aria-hidden=\"true\" class=\"fa fa-cog fa-spin\" style=\"color: yellow; font-size: 25px;\"></i> Settings\n            </div>\n            <div id=\"popup\" class=\"popup\">\n                <div class=\"phdr1\" style=\"display: flex; justify-content: center; align-items: center;\">\n                    <i aria-hidden=\"true\" class=\"fa fa-cog fa-spin\" style=\"color: yellow; font-size: 25px; margin-right: 10px;\"></i> \n                    <span> Player Settings</span>\n                </div>\n                <button class=\"close-button\" onclick=\"closePopup()\">Kapat</button>\n\n                <!-- Ø£Ø²Ø±Ø§Ø± Ø§Ù„ØªØ¨ÙˆÙŠØ¨Ø§Øª -->\n                <div class=\"tab-buttons\" style=\"display: flex; justify-content: space-around; margin-bottom: 10px;\">\n                    <button class=\"tab-button active\" onclick=\"openTab('gameSettings')\">General Settings</button>\n                    <button class=\"tab-button\" onclick=\"openTab('messageSettings')\">Headshot Text</button>\n                    <button class=\"tab-button\" onclick=\"openTab('backgroundSettings')\">Bacground And Cursor </button>\n                </div>\n\n                <!-- Ù…Ø­ØªÙˆÙ‰ Ø¥Ø¹Ø¯Ø§Ø¯Ø§Øª Ø§Ù„Ù„Ø¹Ø¨ -->\n                <div id=\"gameSettings\" class=\"tab-content active\">\n                    <div id=\"kich-hoat\">\n                        ID: <input type=\"text\" value=\"", "100% 100%", 'anApp', '/login', 'userId', 'lineTo', 'glassesUnknown', 'longitude', 'morado', '_start', 'https://gateway.wormate.io', 'img', 'u6_', 'mozFullScreen', 'Client_VisibleSkin9', 'move', 'avatarUrl', 'then', 'view', 'charAt', 'update', 'index.game.popup.menu.consent.tab', 'Users', "ui-tab-active ui-tab-inactive4", 'glassesDict', 'VELOCITY_TYPE', '#0094D7', 'clientX', 'unshift', '/consent/change?value=', 'JDHnkHtYwyXyVgG9', 'mobile', ";void main(){", 'Client_VisibleSkin10', 'addChild', "\"/></span><span>", '#mm-params-game-mode', 'scrollTo', '.au', 'signIn', 'u4_', 'Client_VisibleSkin5', '#KeyRespawn,#KeyAutoMov', 'call', 'addTest', '3068wyAqtz', 'getCurrentPosition', 'resolution', '/deleteAccount', 'devicePixelRatio', 'player', 'movimiento', 'bestSurvivalTimeSec', 'setTime', "ui-tab-active ui-tab-inactive1", 'document', 'zoom-in', 'SW50', 'toggle', 'idSkin', '&nbsp;', "YapÄ±yorsun Bu Ä°ÅŸi", 'addEventListener', 'Client_VisibleSkin11', '#profile-stat-gamesPlayed', "disposing prev texture: ", 'html', '#please-wait-view', "elimina spacios: ", 'cliente_NOMBRE', 'Texture', '#profile-view', '.v0', '</div></div>', 'ui-tab-active', 'Id_mobileguia', 'function', 'ALLOW_KEYBOARD_INPUT', 'https://i.imgur.com/U5sTlhC.png', '#smoothCamera', 'containerImgS', '#settings-stremingmodeemoj-switch', "ØªÙ… ØªØµÙÙŠØ± Ø¹Ø¯Ø§Ø¯ Ø§Ù„ØµÙˆØª Ø¹Ù†Ø¯ Ø§Ù„Ø¶ØºØ· Ø¹Ù„Ù‰ Ø§Ù„Ø­Ø±Ù R.", 'value1_kill', "You selected the background: ", "1px 1px 2px rgba(0,0,0,0.5)", 'gg_', '/dynamic/assets/registry.json', 'fromCharCode', 'gsi:sil', 'min', '0xFFFFFF', "flag us", "save sPN: ", 'index.game.popup.menu.store.tab', 'index.game.popup.menu.store.locked', 'plucker', 'clientY', 'onwheel', 'canada', 'mousedown', "precision mediump float;attribute vec2 ", '.sg', 'getElementById', 'trim', 'fill', 'xxx5', 'skinUnknown', " Copy!'));\">\n                            COPY\n                        </button>\n                    </div>\n                    <table>\n                        <tbody>\n                            <tr>\n                                <td>\n                                    <div class=\"settings-lineZoom\">\n                                        <span class=\"settings-labelZoom\">\n                                            <i aria-hidden=\"true\" class=\"fa fa-cog fa-spin\" style=\"color: #0d7aef; font-size: 22px;\"></i> Eat Fast:\n                                        </span>\n                                        <input class=\"settings-switchZoom\" id=\"settings-Abilityzoom-switch\" type=\"checkbox\"/>\n                                        <label for=\"settings-Abilityzoom-switch\"></label>\n                                    </div>\n                                </td>\n                                <td>\n                                    <div class=\"settings-lineZoom\">\n                                        <span class=\"settings-labelZoom\">\n                                            <i aria-hidden=\"true\" class=\"fa fa-cog fa-spin\" style=\"color: #0d7aef; font-size: 22px;\"></i> Streamer Mode:\n                                        </span>\n                                        <input class=\"settings-switchZoom\" id=\"settings-stremingmode-switch\" type=\"checkbox\"/>\n                                        <label for=\"settings-stremingmode-switch\"></label>\n                                    </div>\n                                </td>\n                                <td>\n                                    <div class=\"settings-lineZoom\">\n                                        <span class=\"settings-labelZoom\">\n                                            <i aria-hidden=\"true\" class=\"fa fa-cog fa-spin\" style=\"color: #0d7aef; font-size: 22px;\"></i> Total HS:\n                                        </span>\n                                        <input class=\"settings-switchZoom\" id=\"settings-stremingmodesaveheadshot-switch\" type=\"checkbox\"/>\n                                        <label for=\"settings-stremingmodesaveheadshot-switch\"></label>\n                                    </div>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>\n                                    <div class=\"settings-lineZoom\">\n                                        <span class=\"settings-labelZoom\">\n                                            <i aria-hidden=\"true\" class=\"fa fa-cog fa-spin\" style=\"color: #0d7aef; font-size: 22px;\"></i> 1 Top:\n                                        </span>\n                                        <input class=\"settings-switchZoom\" id=\"settings-stremingmodebatop-switch\" type=\"checkbox\"/>\n                                        <label for=\"settings-stremingmodebatop-switch\"></label>\n                                    </div>\n                                </td>\n                                <td>\n                                    <div class=\"settings-lineZoom\">\n                                        <span class=\"settings-labelZoom\">\n                                            <i aria-hidden=\"true\" class=\"fa fa-cog fa-spin\" style=\"color: #0d7aef; font-size: 22px;\"></i> Off Emoj:\n                                        </span>\n                                        <input class=\"settings-switchZoom\" id=\"settings-stremingmodeemoj-switch\" type=\"checkbox\"/>\n                                        <label for=\"settings-stremingmodeemoj-switch\"></label>\n                                    </div>\n                                </td>\n                                <td>\n                                    <div class=\"settings-lineZoom\">\n                                        <span class=\"settings-labelZoom\">\n                                            ğŸ”Š\n                                        </span>\n  <select id=\"sound-selector\">\n    <option value=\"https://asserts.wormworld.io/sounds/headshot_sound_effect.mp3\">Head Shot</option>\n    <option value=\"https://wormatefriendsturkey.com/up/video/emaat.mp3\">ÙˆÙ„Ùƒ Ø§Ù…Ø¹Ø·</option>\n    <option value=\"https://www.myinstants.com/media/sounds/sniper-shot.mp3\">Sniper</option>\n    <option value=\"https://www.myinstants.com/media/sounds/headshot_6.mp3\">Head Shot2</option>\n    <option value=\"https://www.myinstants.com/media/sounds/999_Z871W0o.mp3\">Ø§Ù„Ù‚Ù…</option>\n    <option value=\"https://wormateup.live/up/video/Aelo-Adi.MP3\">Ø§Ø¯ÙŠÙ„ÙˆÙˆ Ø§Ø¯ÙŠ</option>\n    <option value=\"https://wormateup.live/up/video/alalobee.mp3\">Ø¹ Ù„ÙˆÙˆØ¨ÙŠ</option>\n    <option value=\"https://wormateup.live/up/video/pew.mp3\">Pew</option>\n    <option value=\"https://wormateup.live/up/video/pingo.mp3\">Pingo</option>\n    <option value=\"https://wormateup.live/up/video/wak-wak.mp3\">wak wak</option>\n    <option value=\"https://wormateup.live/up/video/EBRAHIM-ERHAMNI.MP3\">Ø§Ø¨Ø±Ø§Ù‡ÙŠÙ… Ø§Ø±Ø­Ù…Ù†ÙŠ</option>\n  </select>\n  <input class=\"settings-switchZoom\" id=\"settings-stremingmodeheadshot-switch\" type=\"checkbox\" />\n  <label for=\"settings-stremingmodeheadshot-switch\"></label>\n  <label for=\"sound-selector\"></label>\n</div>\n\n<script>\n  // Ø¹Ù†Ø§ØµØ± Ø§Ù„ØªØ­ÙƒÙ…\n  const soundSelector = document.getElementById('sound-selector');\n  const muteSwitch = document.getElementById('settings-stremingmodeheadshot-switch');\n\n  // Ù‚Ø§Ø¦Ù…Ø© Ø§Ù„Ø£ØµÙˆØ§Øª\n  let audioSrc = localStorage.getItem('selectedSound') || ''; // Ø§Ù„ØµÙˆØª Ø§Ù„Ø§ÙØªØ±Ø§Ø¶ÙŠ ÙØ§Ø±Øº\n  let audio = null; // ÙƒØ§Ø¦Ù† Ø§Ù„ØµÙˆØª ØºÙŠØ± Ù…Ù‡ÙŠØ£\n  let isMuted = localStorage.getItem('isMuted') === 'true'; // Ø§Ù„ØªØ­Ù‚Ù‚ Ù…Ù† Ø¥Ø¹Ø¯Ø§Ø¯ Ø§Ù„ØµÙˆØª\n\n  // Ø¥Ø¹Ø¯Ø§Ø¯Ø§Øª Ø§Ù„ØµÙˆØª Ø§Ù„Ø£ÙˆÙ„ÙŠØ©\n  soundSelector.value = audioSrc;\n  muteSwitch.checked = isMuted;\n\n  // ØªØ­Ø¯ÙŠØ« Ø§Ù„ØµÙˆØª Ø¹Ù†Ø¯ Ø§Ù„ØªØºÙŠÙŠØ± ÙÙŠ Ø§Ù„Ù‚Ø§Ø¦Ù…Ø©\n  soundSelector.addEventListener('change', (e) => {\n    audioSrc = e.target.value;\n    localStorage.setItem('selectedSound', audioSrc);\n    if (!isMuted) {\n      if (audio) audio.pause(); // Ø¥ÙŠÙ‚Ø§Ù Ø£ÙŠ ØµÙˆØª Ù‚ÙŠØ¯ Ø§Ù„ØªØ´ØºÙŠÙ„\n      audio = new Audio(audioSrc); // Ø¥Ù†Ø´Ø§Ø¡ ÙƒØ§Ø¦Ù† ØµÙˆØª Ø¬Ø¯ÙŠØ¯\n      audio.play(); // ØªØ´ØºÙŠÙ„ Ø§Ù„ØµÙˆØª Ø§Ù„Ø¬Ø¯ÙŠØ¯\n    }\n  });\n\n  // ØªØ¹Ø·ÙŠÙ„ Ø§Ù„ØµÙˆØª\n  muteSwitch.addEventListener('change', () => {\n    isMuted = muteSwitch.checked;\n    localStorage.setItem('isMuted', isMuted);\n    if (isMuted && audio) {\n      audio.pause(); // Ø¥ÙŠÙ‚Ø§Ù Ø§Ù„ØµÙˆØª Ø¥Ø°Ø§ ØªÙ… ÙƒØªÙ…Ù‡\n    }\n  });\n\n  // ØªØ´ØºÙŠÙ„ Ø§Ù„ØµÙˆØª Ø¹Ù†Ø¯ ØªÙ…Ø±ÙŠØ± Ø§Ù„Ù…Ø§ÙˆØ³ Ø¹Ù„Ù‰ Ø§Ù„Ø®ÙŠØ§Ø±Ø§Øª\n  const options = soundSelector.querySelectorAll('option');\n  options.forEach((option) => {\n    option.addEventListener('mouseover', () => {\n      if (!isMuted) {\n        const hoverAudio = new Audio(option.value); // Ø¥Ù†Ø´Ø§Ø¡ ÙƒØ§Ø¦Ù† ØµÙˆØª Ø¹Ù†Ø¯ Ø§Ù„Ù…Ø±ÙˆØ±\n        hoverAudio.play();\n      }\n    });\n  });\n\n  // Ù„Ø§ ÙŠØªÙ… ØªØ´ØºÙŠÙ„ Ø§Ù„ØµÙˆØª Ø§Ù„Ø£ÙˆÙ„ÙŠ Ù‡Ù†Ø§\n</script>\n\n<script>\n\n</script>\n\n            </div>\n\n                   </td>\n                  </tr>\n                </tbody>\n              </table>\n\n              <div class=\"list2\">\n            <div class=\"list2\">\n            \n    \n          </div>\n\n          </div>\n\n            \n            <div id=\"messageSettings\" class=\"tab-content\" style=\"display:none;\">\n                <h3>   Headshot Text Configure. </h3>\n                <div style=\"display: flex; justify-content: center; align-items: center; flex-direction: row;\">\n                    <div style=\"margin-bottom: 15px; width: 100%; max-width: 200px;\">\n                        <label for=\"killSelect\">Kill Text: </label>\n                        <select id=\"killSelect\" style=\"width: 100%; padding: 5px; box-sizing: border-box; min-width: 150px; max-width: 150px;\">\n                            <option value=\"Well Done!\">Well Done!</option>\n                            <option value=\"I think I got hit by a truck\"> I think I got hit by a truck</option>\n                            <option value=\" Slowly Brother Fan\"> Slowly Brother Fan</option>\n                            <option value=\" The Man Couldn't Stand the Old Man's Speed\">The Man Couldn't Stand the Old Man's Speed </option>\n                            <option value=\" What is this, my speed nephew?\"> What is this, my speed nephew?</option>\n                            <option value=\"What are you saying, man? \">What are you saying, man? </option>\n                            <option value=\" There is no such thing\"> There is no such thing</option>\n                           <option value=\"Son, go to work.\"> Son, go to work. </option>\n                        </select>\n                    </div>\n            \n                    <div style=\"margin-bottom: 15px; width: 100%; max-width: 200px; margin-right: 20px;\">\n                        <label for=\"headshotSelect\">Headshot Text:</label>\n                        <select id=\"headshotSelect\" style=\"width: 100%; padding: 5px; box-sizing: border-box; min-width: 150px; max-width: 150px;\">\n                            <option value=\"HEADSHOT\">HEADSHOT</option>\n                            <option value=\" Full Head\"> Full Head</option>\n                            <option value=\"How I put it\"> How I put it</option>\n                            <option value=\" HEADSHOT ☠️\">HEADSHOT ☠️</option>\n                            <option value=\"   Is it good, baby?‹ \">  Is it good, baby?‹  </option>\n                        </select>\n                    </div>\n                </div>\n                <button onclick=\"saveMessages()\" style=\"margin-top: 5px;\">Kaydet </button>\n            </div>\n\n                <!-- Ù…Ø­ØªÙˆÙ‰ ØªØ¨ÙˆÙŠØ¨ Ø¥Ø¹Ø¯Ø§Ø¯Ø§Øª Ø§Ù„Ø®Ù„ÙÙŠØ§Øª (ØªÙ… Ø­Ø°Ù ÙƒØ§ÙØ© Ø§Ù„Ø®Ù„ÙÙŠØ§Øª) -->\n                <div id=\"backgroundSettings\" class=\"tab-content\" style=\"display:none;\">\n              <table>\n                <tbody>\n                  <tr>\n                    <td>\n                      <div class=\"spancursor\">\n                        <i aria-hidden=\"true\" class=\"fa fa-cog fa-spin\" style=\"color: #ff8f00; font-size: 25px;\"></i> Select Curos\n                      </div>\n                      <div class=\"cursor-container\">\n                        <div id=\"default-cursor-btn\">\n                          <img style=\"margin-top: -45px; margin-right: 60px; float: right; width: 25px; height: 28px;\" class=\"img\" alt=\"Imgur-Upload\" src=\"https://i.imgur.com/rI522o3.png\">\n                        </div>\n                      </div>\n                    </td>\n                    <td>\n                      <div class=\"spancursor\">\n                        <i aria-hidden=\"true\" class=\"fa fa-cog fa-spin\" style=\"color: #ff8f00; font-size: 25px;\"></i> Select Backgound\n                      </div>\n                      <div class=\"background-container\"></div>\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n                </div>\n            </div>\n        </div>\n    </div>\n    </div>\n\n    <style>\n        /* ØªÙ†Ø³ÙŠÙ‚ Ø§Ù„ØªØ¨ÙˆÙŠØ¨Ø§Øª */\n        .tab-buttons button {\n            padding: 10px;\n            background-color: #ddd;\n            border: none;\n            cursor: pointer;\n            flex: 1;\n            text-align: center;\n        }\n\n        .tab-buttons button.active {\n            background-color: #0d7aef;\n            color: white;\n        }\n\n        .tab-content {\n            display: none;\n        }\n\n        .tab-content.active {\n            display: block;\n        }\n\n        /* ØªÙ†Ø³ÙŠÙ‚ Ø®ÙŠØ§Ø±Ø§Øª Ø§Ù„Ø®Ù„ÙÙŠØ© */\n        .background-options {\n            margin-top: 20px;\n        }\n\n        /* ØªÙ†Ø³ÙŠÙ‚ Ø§Ù„Ø¹Ù†Ø§ØµØ± Ø¯Ø§Ø®Ù„ Ø¥Ø¹Ø¯Ø§Ø¯Ø§Øª Ø§Ù„Ø±Ø³Ø§Ø¦Ù„ */\n        .settings-labelZoom {\n            font-size: 16px;\n        }\n\n\n\n        /* ØªÙ†Ø³ÙŠÙ‚ Ù…Ø­ØªÙˆÙ‰ Ø¥Ø¹Ø¯Ø§Ø¯Ø§Øª Ø§Ù„Ø±Ø³Ø§Ø¦Ù„ */\n        #messageSettings {\n            display: flex;\n            flex-direction: row; /* ÙˆØ¶Ø¹ Ø§Ù„Ø¹Ù†Ø§ØµØ± ÙÙŠ ØµÙ */\n            justify-content: center; /* Ù…Ø­Ø§Ø°Ø§Ø© Ø§Ù„Ø¹Ù†Ø§ØµØ± ÙÙŠ Ø§Ù„Ù…Ù†ØªØµÙ */\n            align-items: center;\n        }\n\n        #messageSettings div {\n            width: 100%;\n            max-width: 100%;\n        }\n    </style>\n\n    <script>\n        // Ø¯Ø§Ù„Ø© Ø§Ù„ØªÙ†Ù‚Ù„ Ø¨ÙŠÙ† Ø§Ù„ØªØ¨ÙˆÙŠØ¨Ø§Øª\n        function openTab(tabId) {\n            const contents = document.querySelectorAll('.tab-content');\n            const buttons = document.querySelectorAll('.tab-button');\n\n            contents.forEach(content => content.style.display = 'none');\n            buttons.forEach(button => button.classList.remove('active'));\n\n            document.getElementById(tabId).style.display = 'block';\n            event.target.classList.add('active');\n        }\n\n\n// Ø¯Ø§Ù„Ø© Ù„Ø­ÙØ¸ Ø§Ù„Ø±Ø³Ø§Ø¦Ù„\nfunction saveMessages() {\n    // Ø§Ø³ØªØ±Ø¬Ø§Ø¹ Ø§Ù„Ù‚ÙŠÙ… Ù…Ù† Ø§Ù„Ù‚ÙˆØ§Ø¦Ù… Ø§Ù„Ù…Ù†Ø³Ø¯Ù„Ø©\n    const headshotMessage = document.getElementById(\"headshotSelect\").value;\n    const killMessage = document.getElementById(\"killSelect\").value;\n\n    // Ø­ÙØ¸ Ø§Ù„Ù‚ÙŠÙ… ÙÙŠ localStorage\n    localStorage.setItem(\"headshotMessage\", headshotMessage);\n    localStorage.setItem(\"killMessage\", killMessage);\n\n    // Ø¹Ø±Ø¶ Ø±Ø³Ø§Ù„Ø© ØªØ£ÙƒÙŠØ¯\n    alert(\"BaÅŸarÄ±lÄ± ÅŸekilde kayÄ±t edildi   !\");\n\n    // Ù„Ø¹Ø±Ø¶ Ø§Ù„Ù‚ÙŠÙ… Ø§Ù„Ù…Ø¯Ø®Ù„Ø© ÙÙŠ ÙˆØ­Ø¯Ø© Ø§Ù„ØªØ­ÙƒÙ… Ù„ØªØªØ£ÙƒØ¯ Ù…Ù† Ø§Ù„Ø­ÙØ¸\n    console.log(\"Headshot Message: \" + headshotMessage);\n    console.log(\"Kill Message: \" + killMessage);\n}\n\n// Ø¯Ø§Ù„Ø© Ù„Ø§Ø³ØªØ±Ø¬Ø§Ø¹ Ø§Ù„Ø±Ø³Ø§Ø¦Ù„ Ø§Ù„Ù…Ø®Ø²Ù†Ø© Ù…Ù† localStorage Ø¹Ù†Ø¯ ØªØ­Ù…ÙŠÙ„ Ø§Ù„ØµÙØ­Ø©\nfunction loadMessages() {\n    // Ø§Ø³ØªØ±Ø¬Ø§Ø¹ Ø§Ù„Ù‚ÙŠÙ… Ù…Ù† localStorage\n    const savedHeadshot = localStorage.getItem(\"headshotMessage\");\n    const savedKill = localStorage.getItem(\"killMessage\");\n\n    // Ø§Ù„ØªØ­Ù‚Ù‚ Ù…Ù† Ø£Ù† Ø§Ù„Ù‚ÙŠÙ… Ù…Ø®Ø²Ù†Ø© ÙÙŠ localStorage\n    if (savedHeadshot) {\n        const headshotSelect = document.getElementById(\"headshotSelect\");\n        if (headshotSelect) {\n            headshotSelect.value = savedHeadshot;\n        }\n    }\n    if (savedKill) {\n        const killSelect = document.getElementById(\"killSelect\");\n        if (killSelect) {\n            killSelect.value = savedKill;\n        }\n    }\n\n    // Ù„Ø¹Ø±Ø¶ Ø§Ù„Ù‚ÙŠÙ… ÙÙŠ ÙˆØ­Ø¯Ø© Ø§Ù„ØªØ­ÙƒÙ… Ù„Ù„ØªØ£ÙƒØ¯ Ù…Ù† Ø§Ø³ØªØ±Ø¬Ø§Ø¹Ù‡Ø§ Ø¨Ø´ÙƒÙ„ ØµØ­ÙŠØ­\n    console.log(\"Loaded Headshot Message: \" + savedHeadshot);\n    console.log(\"Loaded Kill Message: \" + savedKill);\n}\n\n// Ø§Ø³ØªØ±Ø¬Ø§Ø¹ Ø§Ù„Ø±Ø³Ø§Ø¦Ù„ Ø§Ù„Ù…Ø®Ø²Ù†Ø© Ø¹Ù†Ø¯ ØªØ­Ù…ÙŠÙ„ Ø§Ù„ØµÙØ­Ø© Ø£Ùˆ Ø¨Ø¹Ø¯ Ø¥Ø¶Ø§ÙØ© Ø§Ù„Ù…Ø­ØªÙˆÙ‰ Ø§Ù„Ø¬Ø¯ÙŠØ¯\nfunction initializeSettings() {\n    setTimeout(() => {\n        loadMessages();\n    }, 100); // ØªØ£Ø®ÙŠØ± Ø¨Ø³ÙŠØ· Ù„Ù„ØªØ£ÙƒØ¯ Ù…Ù† ØªØ­Ù…ÙŠÙ„ Ø§Ù„Ù…Ø­ØªÙˆÙ‰\n}\n\n// Ø§Ø³ØªØ¯Ø¹Ø§Ø¡ initializeSettings Ø¹Ù†Ø¯ Ø¥Ø¶Ø§ÙØ© Ø§Ù„Ù…Ø­ØªÙˆÙ‰ Ø£Ùˆ ØªØ­Ù…ÙŠÙ„ Ø§Ù„ØµÙØ­Ø©\ninitializeSettings();\n\n\n\n\n\n        // Ø¯Ø§Ù„Ø© Ù„Ø­ÙØ¸ Ø§Ù„Ø®Ù„ÙÙŠØ©\n        function saveBackground() {\n            const background = document.getElementById(\"backgroundSelect\").value;\n            localStorage.setItem(\"selectedBackground\", background);\n\n            alert(\"ØªÙ… Ø­ÙØ¸ Ø§Ù„Ø®Ù„ÙÙŠØ© Ø¨Ù†Ø¬Ø§Ø­!\");\n        }\n    </script>\n", "flag mx", '_display', '/getUserData', 'flag', 'coins_7000', ";uniform mat3 ", 'comidax2', 'xEmojiType_kill', 'compal', 'coords', " at ", 'FB_UserID', 'GET', 'onmessage', 'sortableChildren', 'touchend', "iSI: ", 'Client_VisibleSkin8', '.ui-tab-inactive8', "<img class=\"pwrups v1\" style=\"display: none;\" src=\"https://i.imgur.com/z162iYa.png\">", '#final-board', 'highScore', '.ui-tab-inactive5', 'popup', 'async', 'Nflex', "\n  <div style=\"display: flex; justify-content: center; align-items: center;margin-top:10px\">\n    <a href=\"https://www.youtube.com/wormup\" target=\"_blank\" style=\"margin-right: 10px;\">\n      <img src=\"https://wormateup.live/images/hiep_img/\" alt=\"\" width=\"155\">\n    </a>\n    <a href=\"https://wormateup.live.com\" target=\"_blank\">\n      <img src=\"https://i.imgur.com/V.png\" alt=\"\" width=\"155\">\n    </a>\n  </div>", '#settings-stremingmodebatop-switch', 'server_url', 'Client_VisibleSkin4', 'totalPlayTimeSec', 'index.game.result.placeInBoard', 'message', 'lge', 'description', '.fullscreen_button', 'WFT', 'get', 'selectedSound', 'children', 'aliases', 'gdprConsent', 'smoothCamera', 'index.game.antiadblocker.msg4', 'index.game.toaster.consent.iAccept', 'cookie', 'facebook', "ui-tab-active ui-tab-inactive8", '#settings-stremingmodeheadshot-switch', 'cursorSeleccionado', 'gameMode', 'validInput', "ØªÙ… ØªØµÙÙŠØ± Ø¹Ø¯Ø§Ø¯ Ø§Ù„ØµÙˆØª Ø¹Ù†Ø¯ Ø§Ù„Ø¶ØºØ· Ø¹Ù„Ù‰ Ø²Ø± Ø±Ø³Ø¨ÙˆÙ†.", 'SPACE', '#background-canvas', "Ø­Ø¯Ø« Ø®Ø·Ø£ Ø£Ø«Ù†Ø§Ø¡ ØªØ­Ù…ÙŠÙ„ Ø§Ù„Ø¹Ù…Ù„Ø§Ø¡", 'eventoPrincipal', 'PortionSize', 'vodafone', '/images/bg-obstacle.png', 'silk', ';gl_FragColor=texture2D(', 'headshot', 'FoodShadow', 'mozCancelFullScreen', 'serverName', 'de_DE', 'propertyList', 'textContent', 'cerrar', 'I18N_MESSAGES', '110px', "<div class='het-han'> BitiÅŸ Tarihi: ", 'padding', '#mm-store', 'auth2', '#congrats-bg', 'lipstick', '.ui-tab-inactive7', 'stopPropagation', 'close', '#ff0999', 'https://i.imgur.com/PSRIvVM.png', '12px', 'url(', '.ui-tab-inactive0', 'replaceWith', 'fuck', 'Ù‚ÙˆØ§Ø¯', 'currentPlayers', 'cliente_DateExpired', 'fontSize', 'appendChild', 'bold', "mouthId_A: ", 'https://i.imgur.com/8ubx4RA.png', '.toaster-coins-close', '#profile-stat-kills', 'a1_', 'style', 'Ø´ÙŠØ¹Ø©', 'addAsyncTest', 'click', 'none', 'Client_VisibleSkin16', 'id_token', 'transparent', 'webkitIsFullScreen', 'isSignedIn', '.ui-tab-inactive1', 'hatDict', 'https://wormateup.live/up/video/monster-kill-hahaha.MP3', 'sin', 'projectionMatrix', '#store-go-skins-button', 'guia_mobile', 'high', 'shift', "').then(() => alert('Your ID ", 'xXx5', 'some', 'display', 'rs:fb', '#store-buy-coins_16000', 'className', '.mx', ";uniform sampler2D ", 'mySwitch', 'containerCountInfo', 'Client_KeyAccecs', 'AKM', 'Njk', '1091532ZEiyjy', ";varying vec2 ", '.jp', "fade IN ", '</h2>', 'aipAABS', 'keyCode', 'Superman', "\n                <div style=\"margin: 0;\" id=\"mm-coins-box\">\n          <button \n            style=\"\n              width: 90px;\n              height: 32px;\n              float: right;\n              border-radius: 10px;\n              border: solid #fac 2px;\n            \" \n            id=\"getskin\">ğŸ”Skins</button>\n        </div>\n      ", 'pressed', 'transform', "<img class=\"pwrups v3\" style=\"display: none;\" src=\"https://i.imgur.com/kJ6oz7e.png\">", '<br/>', 'serverUrl', 'headshotMessage', 'WRAP_MODES', 'data', 'iman', 'blur', "\" style=\"width: 80%; height: 23px; border-radius: 4px; font-size: 15px; padding: 0 6px; background-color: #fff; color: #806102; display: block; box-sizing: border-box; -webkit-appearance: none; outline: 0; border-width: 0;\" />\n            <button style=\"height: 25px; float: right; margin-top: -24px; margin-right: -6px; line-height: 1.2; font-size: 14px;\" onclick=\"navigator.clipboard.writeText('", 'https://i.imgur.com/n4N79UI.png', '.description-text', 'onload', 'onerror', 'Client_VisibleSkin2', 'prop', 'Ø¹Ø±Ø¶Ùƒ', 'signOut', 'firefox', 'playbook', 'francia', 'textureDict', 'ready', 'util.time.hours', 'expires=', '.mm-merchant-cont', 'glassesId', 'testSkinMod', '#wear-view', '.servers-germania', 'mouthId', 'psp', 'alpha', "flag sg", '#settings-Abilityzoom-switch', "<img class=\"pwrups v6\" style=\"display: none;\" src=\"https://i.imgur.com/mSCZeEp.png\">", 'location', ";uniform vec2 ", 'onopen', "Using the stored token:", 'amarillo', 'feed', 'touches', "\n        <div style=\"margin: 0;\" id=\"loa831pibur0w4gv\">\n          <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\" />\n          <div class=\"label\" id=\"titleSetings\">Welcome</div>\n          <div class=\"bao-list1\">\n            <input type=\"text\" value=\"", 'Mesh', 'treo', 'MAGNETIC_TYPE', '#FoodSize', 'file', '#popup-view', '#profile-avatar', 'https://aliii72727727.github.io/wormate11/api/user.json', '.ui-tab-inactive2', ".. 7 ..", "comiste otro potenciador", 'val', 'toLowerCase', 'ModeStremer', 'FLEXIBLE_TYPE', 'adblock', 'preventDefault', 'blazer', '#mm-advice-cont', 'amarillo1', 'removeChild', "Socket error", "<h2>Auto Login Google Wormate.io  : ", '{1}', '.mm-merchant', '#gold-crown', 'ActiveX5', '#profile-stat-bestSurvivalTime', 'requestFullScreen', '#delete-account-view', 'mouthDict', '#mm-action-play', 'zas', 'authResponse', 'palm', 'GLASSES', 'glow', 'keyMove', '#wear-glasses-button', 'servers', '#wear-view-prev', '#game-canvas', 'xXx10', 'vendor', 'visibleSkin', 'event', 'portion', 'antiadblocker', '{0}', "<canvas id=\"background-canvas\"></canvas>", 'X5_TYPE', 'relativePath', '#unl6wj4czdl84o9b', 'Galaxy_Star', "Wormy Error: ", 'index.game.result.continue', 'WormSkinData', 'xzs', '#settings-stremingmodesaveheadshot-switch', '.ui-tab-inactive6', "flag au", '#leaders-button-kills', 'apply', 'getItem', 'https://wormateup.live/up/js/joy.min.js', 'Client_VisibleSkin1', '</div>', 'ZOOM_TYPE', 'setHours', "start pSC: ", '.toaster-consent-close', 'localStorage', 'indexOf', "chuot 4", 'low', 'cos', 'mozRequestFullScreen', 'empty', "ui-tab-active ui-tab-inactive7", '_end', 'onreadystatechange', 'pause', 'AbilitySkinData', 'Njh', 'false', 'count', '#store-locked-bar-text', 'BLEND_MODES', 'ActiveZlupa', 'logout', 'background', 'Sprite', 'rad)', 'PotenciadorSize', 'ssss', ".. 4 ..", 'currentTime', 'TextStyle', "Schwarze Background", 'https://i.imgur.com/EkbSd65.png', 'index.game.antiadblocker.msg1', '/sdk.js', 'ActiveX10', 'concat', 'setInt8', 'g.o', 'moveTo', 'https://i.imgur.com/3cxXwZ6.png', 'clock', 'MSStream', '.servers-francia', '#withdraw-consent-yes', '#wear-view-canv', 'Modernizr', 'ESC', 'granbretana', 'textDict', 'https://wormate.io/images/og-share-img-new.jpg', '#profile-experience-val', 'translationMatrix', 'after', 'xxx2', 'classPrefix', '#highscore-table', 'regionDict', 'PropertyManager', 'fromImage', '#mm-player-username', '#FFD500', 'sessionsPlayed', 'FoodTransparent', 'position', 'runtimeHash', "Ø­Ø§ÙˆÙ„ Ù…Ø¬Ø¯Ø¯Ù‹Ø§", '.ui-tab-inactive9', '#mm-params-nickname', ',1.0)).xy,0.0,1.0);}', 'off', 'kills', 'coins_1250', 'zoom-out', 'loop', '#profile-level', 'hypot', '3.3.1', '#mm-coins-box', "init1 pSC: ", '#FAA845', '#mm-leaders', 'keydown', 'killMessage', 'buttonNavidad', "100% 200%", 'game', '.br', 'WRM_wormate-io_300x250', 'type', 'visible', 'banner', 'find', 'u3_', '.us', 'hoisinhnhanh', 'backgroundColor', 'https://cdn.custom-cursor.com/db/cursor/32/Pusheen_Cat_Cursor.png', 'REPEAT', 'canvastext', ";attribute vec2 ", 'toUTCString', 'borderurl', '#popup-delete-account', 'wap', '_config', 'ENTER', 'TEAM2', 'https://i.imgur.com/a7lVOy5.png', ',coord)*0.3+v_color_mix.a*vec4(v_color_mix.rgb,0.0);}', 'Client_VisibleSkin13', 'eyesId', '#mm-action-buttons', 'url', 'BETAisSkinCustom', 'wrapMode', '.servers-japon', 'src', 'https://wormateup.live', 'json', '#coins-view', 'user_data', 'ActiveX2', "</div>    <div class=\"toaster-levelup-text\">", 'month', "<div class=\"table-row\"><span>", '#toaster-view', 'https://i.imgur.com/z2o76Xe.png', '/pub/wuid/', 'v1_', '&glassesId=', '#popup-menu-coins-val', 'meego', 'setInt16', 'resize', 'replace', "rgba(0, 0, 0, 0.5)", 'EYES', '#store-buy-coins_7000', 'value2_hs', 'tuNewScore', 'anchor', "</div>    <div class=\"toaster-coins-close\">", 'index.game.result.place.i', 'Client_VisibleSkin18', 'isBuyer', 'Container', 'rs:gg', '#store-item-price', 'FoodSize', " https://wormate.io/ #wormate #wormateio", 'input', "<img class=\"worm_1\" src=\"https://i.imgur.com/iekrYYm.png\"><span class=\"Worm_cerca\"></span>", 'emoji_headshot', "HTTP error! status: ", 'imgServerbase', 'https://resources.wormate.io/dynamic/assets/registry.json', "chuot 5", 'background-position', 'https://wormate.io', 'unknown', "<img class=\"pwrups v4\" style=\"display: none;\" src=\"https://i.imgur.com/l3ds43O.png\">", "</span>        <a class=\"toaster-consent-accepted-link\" href=\"/privacy-policy\">", 'index.game.result.your', '#fff009', 'fixed', '#leaders-view', 'https://i.imgur.com/yayb9Ru.png', 'ComidaSize', "\" alt=\"Wormate.io logo\"/>    <div class=\"toaster-consent-accepted-container\">        <span class=\"toaster-consent-accepted-text\">", 'split', '#final-share-fb', '.ui-tab-inactive3', 'offline', "N-syo.632.oyhs`2./oSo+-2:dhydMdy/32/o+`3:o/62`/o+. .+osYYyso+-.osyQSs6662NyW.63 yW:`+QQ+ -Ms-.:ymmy3+Yo``+Y:6.Qs-+WWhYs:sHhyyHys/6662NoWs63 yW:+Ss:.-+Ss:`M-3.M` .YyySYys32`QSs.2``-Hh-32sH-66 `..3 `..`3N.Wh.63yW-Ss.3`Ss+`Mh/:+hmmo2/yy++yys//Y-3 oS/`Sso`3 ohy6oH.3..6 -Hh. -+Qs/ N /W+62`Wo:Ss32Sso.MMmd+.3syy` .-` :Y+3+Ss//Q+3 +H`32sHhsyHho6-Hh`:S+--+S+N2+W` `+y+2+W.:Ss.3.Ss+/M-:ymmh.2-Y.32+Ys2+Ss+o+/Q-3oH/32Hho-://:`6 Hh`So3`SsN3oHhs-sHhsoW/ `Sso:-:Q.hM-2ymmh. /Yo`3 sYy./Q`3+Sso2`W`3`Hh.66`Hh:So3-SoN3 +Why+yWh/3-oQSso-`Mm:2/Md+/Yy+3 oYy:Q/3 `Q. -W-3`WsYys/`+oo.:Hh//So//Ss-N32-sys:3:S+.6-/+++:-3oHo3 ohdh/`+So:3 .+S/`/oo:6.+s+` `+yyo`3 +yQYs: +oo..shy. -+oSo/. NN", "Bu KiÅŸi KÃ¼fÃ¼rlÃ¼ !", 'index.game.toaster.consent.text', '#final-score', 'wormate-io_970x250', '#mm-coins-val', 'ipad', 'zIndex', 'RmxvYXQ', 'lo:fb', '.ca', '#delete-account-yes', 'quaytron', 'onclickServer', 'germania', 'ARENA', "no-js(\\s|$)", 'random', 'substr', 'putImageData', '.v3', 'ModeStremeremoj', '.servers-granbretana', '#loading-worm-b', '#skin-description-text', 'isArray', 'border-color', 'WebSocket', ".. 5 ..", 'constructor', 'mmm', ':nth-child(', "\\w+", "\n        <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\" />\n         <div style=\"margin: 0;\" id=\"loa831pibur0w4gv\">\n          <div class=\"label\" id=\"titleSetings\">Welcome</div>\n          <div class=\"bao-list1\">\n            <div class=\"list1\">\n              <i class=\"fa fa-book\" aria-hidden=\"true\" style=\"color: #48ff00;\"></i>\n              Update: ?/?/2025 \n            </div>\n            <br>\n            <div class=\"list1\">\n            <i class=\"fa fa-volume-off\" aria-hidden=\"true\" style=\"color: #ff0000;\"></i>\nIt continues at full speed to offer you the best Gaming Performance.  - For activation, please contact us via the link below. Dear You - Enjoys seeing our players and applies for good games.</div>\n<br> \n<br> <br>  \n<div class=\"list1\">\n              <i class=\"fa fa-book\" aria-hidden=\"true\" style=\"color: #48ff00;\"></i>\n\n              <a href=\"https://discord.gg/\">Bizimle iletiÅŸime geÃ§iniz.</a>\n            </div>\n          </div>\n        </div>\n      ", '#mm-menu-cont', '#skins-view', '#final-replay', '#popup-delete-account-container', '#mm-skin-over-button-list', '&gh=', 'en_US', "2px 5px", "\n        <div class=\"vietnam\" style=\"display: grid !important; grid-template-columns: 1fr 1fr 1fr; gap: 8.5px;\">\n          <input type=\"button\" value=\"F.SCREEN\" class=\"fullscreen_button\">\n          <input type=\"button\" value=\"RESPAWN\" id=\"hoisinh\" class=\"fullscreen_respawn\">\n\n          </div>\n      ", 'Shift', 'Navidad', "      ", 'pop', "chuot 1", 'Client_VisibleSkin', 'webkitRequestFullScreen', 'offsetHeight', 'attach', 'bottom', "Failed to load servers after multiple attempts:", "200% 200%", 'xda', 'value1_hs', 'teamDict', 'Tom_and_JerryCurso', '#store-view-prev', "nombre: ", '#settings-music-enabled-switch', "), default", 'Client_VisibleSkin12', 'text/javascript', "chuot 2", 'Pusheen_Ca', 'closed', 'charCodeAt', 'attr', 'getTime', '#mm-player-level', "Current track '", 'detectLog', 'stage', 'dotFormat', 'pageY', "flag ca", 'Escape', '#markup-header', '#settings-stremingmode-switch', 'aload', 'pow', '#adbl-3', 'getAuthResponse', '#markup-footer', 'Ø§Ù…Ùƒ', '</span></a>', 'ModeStremersaveheadshot', '#withdraw-consent-view', 'SaveGameXT', "ui-tab-active ui-tab-inactive0", 'green', 'elaine', 'eyesDict', 'day', 'HAT', '#loading-worm-c', 'phone', 'emoji_kill', 'options', 'adplayer', 'base', '#profile-stat-highScore', "<div id=\"idReplaceSkin\"></div>", 'X_x2', '#mm-skin-next', 'index.game.social.shareResult.messGood', 'filter', '#FF4544', 'getElementsByTagName', 'gamePad', '#store-view', 'dotFormatSelect2', 'fail', 'gsi:s', 'Client_VisibleSkin3', "\" class=\"toaster toaster-coins\">    <img class=\"toaster-coins-img\" alt=\"Wormate Coin\" src=\"/images/coin_320.png\" />    <div class=\"toaster-coins-val\">+", '#store-buy-coins_3250', '#FFFF00', "flag de", 'radius', 'DOMContentLoaded', 'destroy', "Error loading file: ", 'xXx2', 'keyup', 'contextmenu', 'Client_VisibleSkin17', 'left', 'KeyAutoMov', 'value_server', 'sSE=', "\" class=\"toaster toaster-levelup\">    <img class=\"toaster-levelup-img\" alt=\"Wormate Level Up Star\" src=\"/images/level-star.svg\" />    <div class=\"toaster-levelup-val\">", "DataReader error: ", '/images/linelogo-xmas2022.png', 'no-', 'totalHeadshots', 'headShots', "dA: NO", '#wear-item-price', ".. 10 ..", '24XMdmGn', 'aId', '#congrats', 'xEmojiType_headshot', '#stretch-box', 'cloneNode', 'radian', "I am checked", 'cursor', 'deltaY', '1455545bzRmsG', "ui-tab-active ui-tab-inactive6", "target=\"_black\" href", 'splice', 'Ø§Ø®ØªÙƒ', '&eyesId=', '###', 'https://asserts.wormworld.io/backgrounds/bkgnd7.png', 'max', 'aqnvgcpz05orkobh', 'netfront', '#PortionSize', "\" height=\"43\" width=\"220\" />", 'cancelFullScreen', 'iris', "auto login attempt:", 'hatId', 'MTY', 'portionDict', 'push', 'floor', 'Cherries_Pointer', ".. 6 ..", 'util.time.min', 'zMg=='];
    _0x2a3d = function() {
        return _0x6cfe51;
    };
    return _0x2a3d();
}
eval(function(_0x54785b, _0x1a185b, _0xb09479, _0x30e5f7, _0x57a2e6, _0x3c2e03) {
    var _0x26a5e6 = _0x3b397b;
    _0x57a2e6 = function(_0x44512f) {
        var _0x427f21 = _0x26a8;
        return (_0x44512f < _0x1a185b ? '' : _0x57a2e6(parseInt(_0x44512f / _0x1a185b))) + ((_0x44512f = _0x44512f % _0x1a185b) > 0x23 ? String[_0x427f21(0x16c)](_0x44512f + 0x1d) : _0x44512f.toString(0x24));
    };
    if (!'' [_0x26a5e6(0x305)](/^/, String)) {
        while (_0xb09479--) {
            _0x3c2e03[_0x57a2e6(_0xb09479)] = _0x30e5f7[_0xb09479] || _0x57a2e6(_0xb09479);
        }
        _0x30e5f7 = [function(_0x5250c9) {
            return _0x3c2e03[_0x5250c9];
        }];
        _0x57a2e6 = function() {
            var _0x1f6f43 = _0x26a5e6;
            return _0x1f6f43(0x34c);
        };
        _0xb09479 = 0x1;
    };
    while (_0xb09479--) {
        if (_0x30e5f7[_0xb09479]) {
            _0x54785b = _0x54785b[_0x26a5e6(0x305)](new RegExp("\\b" + _0x57a2e6(_0xb09479) + "\\b", 'g'), _0x30e5f7[_0xb09479]);
        }
    }
    return _0x54785b;
});

function _0x26a8(_0x4ae230, _0x598c9b) {
    var _0x2a3d21 = _0x2a3d();
    _0x26a8 = function(_0x26a8a1, _0x3e95a0) {
        _0x26a8a1 = _0x26a8a1 - 0xad;
        var _0x2ba4c6 = _0x2a3d21[_0x26a8a1];
        return _0x2ba4c6;
    };
    return _0x26a8(_0x4ae230, _0x598c9b);
}

function stopZoom(_0x556749) {
    var _0x423d19 = _0x3b397b;
    if (_0x556749[_0x423d19(0x477)] === 'z') {
        window.w = 0.625;
        window.render();
    }
}
window[_0x3b397b(0x152)]('wheel', stopZoom);
document.addEventListener(_0x3b397b(0x3a6), () => {
    var _0x63e7b9 = _0x3b397b;
    let _0x97491c = {
        'x': window[_0x63e7b9(0x488)] / 0x2,
        'y': window.innerHeight / 0x2,
        'radius': 0x7
    };
    let _0x504eec = _0x97491c.x;
    let _0x5ab637 = _0x97491c.y;
    let _0x41b360 = 0x0;

    function _0x11e892() {
        var _0xd2b56f = _0x63e7b9;
        let _0x1ddf11 = Date[_0xd2b56f(0xb2)]();
        fetch(window[_0xd2b56f(0x233)][_0xd2b56f(0x103)])[_0xd2b56f(0x125)](() => {
            var _0x153550 = _0xd2b56f;
            let _0x4ed227 = Date.now();
            _0x41b360 = _0x4ed227 - _0x1ddf11;
            if (_0x41b360 > 0x95) {
                _0x34e249[_0x153550(0x1e4)][_0x153550(0xe5)] = 'red';
            } else if (_0x41b360 > 0x63) {
                _0x34e249[_0x153550(0x1e4)][_0x153550(0xe5)] = 'yellow';
            } else {
                _0x34e249[_0x153550(0x1e4)][_0x153550(0xe5)] = _0x153550(0x388);
            }
        })[_0xd2b56f(0x47d)](() => {
            var _0x5e8a96 = _0xd2b56f;
            _0x41b360 = 'Error';
            _0x34e249[_0x5e8a96(0x1e4)][_0x5e8a96(0xe5)] = 'red';
        });
    }
    let _0x34e249 = document.createElement(_0x63e7b9(0x441));
    _0x34e249[_0x63e7b9(0x1e4)][_0x63e7b9(0x2be)] = _0x63e7b9(0x323);
    _0x34e249[_0x63e7b9(0x1e4)][_0x63e7b9(0x4ec)] = '5px';
    _0x34e249[_0x63e7b9(0x1e4)][_0x63e7b9(0x360)] = '5px';
    _0x34e249[_0x63e7b9(0x1e4)].backgroundColor = _0x63e7b9(0x306);
    _0x34e249[_0x63e7b9(0x1e4)][_0x63e7b9(0xe5)] = _0x63e7b9(0x409);
    _0x34e249[_0x63e7b9(0x1e4)][_0x63e7b9(0x1ca)] = _0x63e7b9(0x355);
    _0x34e249[_0x63e7b9(0x1e4)].fontSize = _0x63e7b9(0x1d4);
    _0x34e249[_0x63e7b9(0x1e4)][_0x63e7b9(0x3e1)] = '3px';
    _0x34e249[_0x63e7b9(0x1e4)][_0x63e7b9(0x456)] = 'bold';
    _0x34e249[_0x63e7b9(0x1e4)].textShadow = _0x63e7b9(0x169);
    document[_0x63e7b9(0x442)].appendChild(_0x34e249);
    document[_0x63e7b9(0x152)](_0x63e7b9(0x4f1), _0x1d189e => {
        var _0x2d7074 = _0x63e7b9;
        _0x504eec = _0x1d189e[_0x2d7074(0x12f)];
        _0x5ab637 = _0x1d189e[_0x2d7074(0x175)];
    });

    function _0x27a594() {
        var _0x223311 = _0x63e7b9;
        let _0x4819a1 = _0x504eec - _0x97491c.x;
        let _0x5472d6 = _0x5ab637 - _0x97491c.y;
        let _0x4506da = Math.sqrt(_0x4819a1 * _0x4819a1 + _0x5472d6 * _0x5472d6);
        if (_0x4506da > _0x97491c[_0x223311(0x3a5)]) {
            _0x97491c.x += _0x4819a1 / _0x4506da * _0x97491c[_0x223311(0x3a5)];
            _0x97491c.y += _0x5472d6 / _0x4506da * _0x97491c.radius;
        } else {
            _0x97491c.x = _0x504eec;
            _0x97491c.y = _0x5ab637;
        }
        let _0x29941f = document[_0x223311(0x17b)]('solucan');
        if (_0x29941f) {
            _0x29941f[_0x223311(0x1e4)][_0x223311(0x3ad)] = _0x97491c.x + 'px';
            _0x29941f[_0x223311(0x1e4)][_0x223311(0x510)] = _0x97491c.y + 'px';
        }
        _0x34e249.textContent = _0x223311(0x508) + _0x41b360 + 'ms';
        requestAnimationFrame(_0x27a594);
    }
    _0x27a594();
    setInterval(_0x11e892, 0x3e8);
});
document[_0x3b397b(0x152)](_0x3b397b(0x2d0), _0x783200 => {
    var _0x1b9615 = _0x3b397b;
    if (_0x783200[_0x1b9615(0x477)] === _0x1b9615(0x42b)) {
        _0x783200[_0x1b9615(0x24b)]();
    }
}, false);
document[_0x3b397b(0x152)](_0x3b397b(0x3ab), _0x20c872 => {
    var _0x568bf0 = _0x3b397b;
    _0x20c872[_0x568bf0(0x24b)]();
}, false);
window[_0x3b397b(0x152)](_0x3b397b(0x2d0), _0xa73c8d => {
    var _0x33c542 = _0x3b397b;
    const _0x168a07 = _0xa73c8d.key[_0x33c542(0x247)]();
    if (_0x168a07 === 'z' || _0x168a07 === 'Ø¦') {
        window.multiplier = 0.625;
        if (typeof window[_0x33c542(0x4d5)] === _0x33c542(0x160)) {
            window.changedNf();
        } else {
            console[_0x33c542(0x400)]("Function 'changedNf' is not defined.");
        }
    }
});
